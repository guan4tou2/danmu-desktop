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

import errno
import json
import logging
import os
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
    """Atomic write via tmp + replace. Caller must hold _lock.

    Hardening:
      * 0o600 chmod on the tmp before rename — the file contains a token
        that is effectively a bearer credential for 4001, so it should
        never be world-readable.
      * pid / tid suffix on the tmp name so multi-worker deploys (gunicorn
        with N workers) don't race on `_STATE_FILE.tmp` when two admins
        save simultaneously. `_lock` only covers threads within a single
        process.
    """
    _STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    tmp = _STATE_FILE.with_suffix(f".tmp.{os.getpid()}.{threading.get_ident()}")
    # Open with restricted mode directly so no window exists where the file
    # is readable by others between creation and chmod.
    flags = os.O_WRONLY | os.O_CREAT | os.O_TRUNC
    fd = os.open(tmp, flags, 0o600)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            json.dump(state, f, indent=2)
        # On systems where umask masked the open mode, fix it explicitly.
        try:
            os.chmod(tmp, 0o600)
        except OSError as exc:
            # Windows / unusual filesystems — best-effort, don't fail the
            # write. Log once; the data landed on disk correctly.
            if exc.errno not in (errno.ENOSYS, errno.EPERM):
                raise
            logger.warning("chmod 0o600 not supported on %s: %s", tmp, exc)
        tmp.replace(_STATE_FILE)
    except Exception:
        # Best-effort cleanup on partial write failure.
        try:
            tmp.unlink()
        except OSError:
            pass
        raise


def _seed_from_env() -> Dict:
    """Initial state when runtime file doesn't exist yet.

    v4.8 policy: for truly fresh installs (no WS_REQUIRE_TOKEN env var set
    at all AND no WS_AUTH_TOKEN set), default to require_token=True with a
    generated token — matches the user's original ask "預設開啟".

    When the env var is **explicitly** set (even to "false"), respect it.
    That's the v4.7 upgrade case: an existing deploy that intentionally
    ran with WS_REQUIRE_TOKEN=false shouldn't silently flip closed on
    upgrade, and CI smoke tests that need passwordless WS should work.
    """
    raw_require = os.environ.get("WS_REQUIRE_TOKEN")
    raw_token = os.environ.get("WS_AUTH_TOKEN")

    require = bool(Config.WS_REQUIRE_TOKEN)
    token = str(Config.WS_AUTH_TOKEN or "")

    # Fresh install: no env vars set at all → secure-by-default.
    if raw_require is None and not raw_token:
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
