"""WebSocket auth toggle — admin-controllable alternative to env vars.

Before v4.8: WS_REQUIRE_TOKEN / WS_AUTH_TOKEN were read from env at startup
and captured into closure variables in ws/server.py. Flipping them required
editing .env and restarting the container — which also drops every live
Electron connection.

v4.8+: a runtime file server/runtime/ws_auth.json holds the live toggle and
token. The admin UI writes to it; ws/server.py reads it on every new
connection via get_state(). Existing connections are grandfathered — we
don't force-kick when the admin flips the switch, since:

1. The safe direction (enabling token) grandfathering lets legitimate
   operators finish their stream uninterrupted. New/reconnecting clients
   still need the token.
2. The unsafe direction (disabling token) — no one to kick anyway.

Priority / migration:

1. If runtime/ws_auth.json exists, it's source of truth (admin UI wins).
2. Otherwise, seed from Config.WS_REQUIRE_TOKEN / Config.WS_AUTH_TOKEN and
   write the file on first read. After that, env vars are ignored — the
   file is the source of truth, and rebooting with different env won't
   silently change behaviour.

Call `get_state()` from hot paths — it's cheap (dict lookup after first
load). Call `set_state()` from the admin route after validating input.
"""

import json
import logging
import secrets
import threading
from pathlib import Path
from typing import Dict, Optional

from ..config import Config

logger = logging.getLogger(__name__)

# Persist alongside other user state. Bind-mounted by docker compose and
# backed up by scripts/backup.sh — no special-case needed.
_STATE_FILE = Path(__file__).parent.parent / "runtime" / "ws_auth.json"
_lock = threading.RLock()
_state: Optional[Dict] = None  # cached in-memory snapshot; load on first read


def _write_state(state: Dict) -> None:
    """Atomic write via tmp + replace. Caller must hold _lock."""
    _STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    tmp = _STATE_FILE.with_suffix(".tmp")
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(state, f, indent=2)
    tmp.replace(_STATE_FILE)


def _seed_from_env() -> Dict:
    """Initial state when runtime file doesn't exist yet.

    v4.8 policy: default require_token=True so new deploys are secure by
    default (matches user's original ask "預設開啟"). We respect an explicit
    WS_REQUIRE_TOKEN=false in env for backward compat with existing
    v4.7 deployments — those users opted in to open 4001 and we shouldn't
    silently flip them closed on upgrade.
    """
    require = bool(Config.WS_REQUIRE_TOKEN)
    token = str(Config.WS_AUTH_TOKEN or "")
    # Treat env as "unset" when WS_REQUIRE_TOKEN is literally the default
    # "false" AND no WS_AUTH_TOKEN was provided — that's a fresh install,
    # so default to secure-on.
    if not require and not token:
        require = True
        token = secrets.token_urlsafe(24)
    elif require and not token:
        # User set WS_REQUIRE_TOKEN=true but forgot the token. Generate one.
        token = secrets.token_urlsafe(24)
        logger.warning(
            "WS_REQUIRE_TOKEN=true but WS_AUTH_TOKEN empty; generated a "
            "random token and persisted to %s",
            _STATE_FILE,
        )
    return {"require_token": require, "token": token}


def _load() -> Dict:
    """Read runtime file, or seed + write if missing. Caller must hold _lock."""
    if _STATE_FILE.exists():
        try:
            with open(_STATE_FILE, encoding="utf-8") as f:
                data = json.load(f)
            if isinstance(data, dict) and "require_token" in data and "token" in data:
                return {
                    "require_token": bool(data.get("require_token", False)),
                    "token": str(data.get("token") or ""),
                }
            logger.warning("Malformed %s, re-seeding from env", _STATE_FILE)
        except Exception as exc:
            logger.warning("Failed to read %s: %s; re-seeding from env", _STATE_FILE, exc)

    seeded = _seed_from_env()
    try:
        _write_state(seeded)
        logger.info("Seeded ws_auth.json (require_token=%s)", seeded["require_token"])
    except Exception as exc:
        logger.error("Failed to write %s: %s", _STATE_FILE, exc)
    return seeded


def get_state() -> Dict:
    """Return current {require_token: bool, token: str}.

    Called per-connection in ws/server.py, so the load-from-disk path only
    runs once per process lifetime after first call.
    """
    global _state
    with _lock:
        if _state is None:
            _state = _load()
        # Return a copy to prevent caller mutation leaking back into cache.
        return dict(_state)


def set_state(*, require_token: bool, token: str) -> Dict:
    """Update and persist. Returns the new state.

    Raises ValueError if require_token=True but token is empty — the admin
    schema should catch this, but we double-check at the persistence
    boundary so no bad state ever lands on disk.
    """
    require_token = bool(require_token)
    token = str(token or "")
    if require_token and not token:
        raise ValueError("token required when require_token=True")
    global _state
    with _lock:
        new_state = {"require_token": require_token, "token": token}
        _write_state(new_state)
        _state = dict(new_state)
        return dict(_state)


def rotate_token() -> Dict:
    """Generate a fresh token, preserving the require_token toggle.

    Convenience for the admin UI's "regenerate" button — atomic so admins
    can't accidentally land in a state where require_token=True but the
    token is a known-leaked value.
    """
    with _lock:
        current = get_state()
        return set_state(
            require_token=current["require_token"],
            token=secrets.token_urlsafe(24),
        )


def _reset_for_tests() -> None:
    """Drop the in-memory cache. Tests should monkeypatch _STATE_FILE before
    calling get_state() so they don't pollute the real runtime file.
    """
    global _state
    with _lock:
        _state = None
