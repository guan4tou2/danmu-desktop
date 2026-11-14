"""WebSocket auth toggle — admin-controllable alternative to env vars.

Before v4.8: WS_REQUIRE_TOKEN / WS_AUTH_TOKEN were read from env at startup.
Flipping them required editing .env and restarting the container — which also
drops every live Electron connection.

v4.8+: a runtime file server/runtime/ws_auth.json holds the live toggle and
token. The admin UI writes to it; the `/ws` handler reads it on every new
connection via get_state(). Existing connections are grandfathered — we don't
force-kick when the admin flips the switch, since:

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

Storage mechanics (atomic write, RLock, one-shot warn on unwritable disk,
0o600 chmod, eager seed persist) live in JsonState — see services/json_state.py.
"""

import logging
import os
import secrets
from typing import Any, Dict

from ..config import Config
from .json_state import JsonState

logger = logging.getLogger(__name__)


def _env_unset(name: str) -> bool:
    """True when ``name`` is absent or blank in the environment.

    docker-compose passes ``VAR=${VAR:-}`` for every optional setting, so an
    operator who never set the variable still ends up with an empty string
    in the container. Blank therefore means "not configured", not "false".
    """
    return not (os.environ.get(name) or "").strip()


def _looks_like_fresh_install() -> bool:
    """No saved state file, and somewhere to save the generated token.

    A state file that exists but could not be loaded belongs to an existing
    deployment: re-seeding it "on" would refuse every display that
    reconnects without a token. And when the runtime directory is not
    writable, a generated token would be different after every restart, so
    no display could keep up with it.
    """
    path = _state.path
    if path.exists():
        return False
    parent = path.parent
    while not parent.exists() and parent != parent.parent:
        parent = parent.parent
    return os.access(parent, os.W_OK)


def _seed_from_env() -> Dict[str, Any]:
    """Initial state when runtime file doesn't exist yet.

    v4.8 policy: for truly fresh installs (WS_REQUIRE_TOKEN and
    WS_AUTH_TOKEN both unset or blank, and no state file on disk), default
    to require_token=True with a generated token — matches the user's
    original ask "預設開啟".

    When the env var is **explicitly** set (even to "false"), respect it.
    That's the v4.7 upgrade case: an existing deploy that intentionally
    ran with WS_REQUIRE_TOKEN=false shouldn't silently flip closed on
    upgrade, and CI smoke tests that need passwordless WS should work.
    Once runtime/ws_auth.json exists this function is not consulted at all
    (see JsonState) — except when that file is unreadable, in which case
    the fresh-install default is skipped (see _looks_like_fresh_install).
    """
    require = bool(Config.WS_REQUIRE_TOKEN)
    token = str(Config.WS_AUTH_TOKEN or "")

    if _env_unset("WS_REQUIRE_TOKEN") and _env_unset("WS_AUTH_TOKEN"):
        if _looks_like_fresh_install():
            require = True
            token = secrets.token_urlsafe(24)
        else:
            logger.warning(
                "ws_auth: not applying the token-on default because the state file "
                "is present but unreadable, or the runtime directory is not "
                "writable; /ws starts without token auth. Check %s and set the "
                "toggle in Admin → Security.",
                _state.path,
            )
    elif require and not token:
        token = secrets.token_urlsafe(24)
        logger.warning(
            "WS_REQUIRE_TOKEN=true but WS_AUTH_TOKEN empty; generated a "
            "random token and persisted to runtime/ws_auth.json"
        )
    return {"require_token": require, "token": token}


def _normalize(raw: Any) -> Dict[str, Any]:
    """Validate a set_state payload or on-disk state.

    Enforces the invariant require_token=True → non-empty token both on
    load (self-heal a manually-edited-broken file) and on update (reject
    admin API writes that would land bad state on disk).
    """
    if not isinstance(raw, dict):
        raise ValueError("ws_auth state must be a dict")
    if "require_token" not in raw or "token" not in raw:
        raise ValueError("ws_auth state must include require_token and token")
    require = bool(raw.get("require_token", False))
    token = str(raw.get("token") or "")
    if require and not token:
        raise ValueError("token required when require_token=True")
    return {"require_token": require, "token": token}


_state = JsonState(
    "ws_auth.json",
    default=_seed_from_env,
    normalize=_normalize,
    secure=True,
    eager_persist_default=True,
)


def get_state() -> Dict[str, Any]:
    """Return current {require_token: bool, token: str}.

    Called per-connection in ws/server.py, so the load-from-disk path only
    runs once per process lifetime after first call.
    """
    return _state.get()


def set_state(*, require_token: bool, token: str) -> Dict[str, Any]:
    """Update and persist. Returns the new state.

    Raises ValueError if require_token=True but token is empty — the admin
    schema should catch this, but we double-check at the persistence
    boundary so no bad state ever lands on disk.
    """
    return _state.update({"require_token": bool(require_token), "token": str(token or "")})


def rotate_token() -> Dict[str, Any]:
    """Generate a fresh token, preserving the require_token toggle.

    Convenience for the admin UI's "regenerate" button — atomic under
    _state.lock so admins can't accidentally land in a state where
    require_token=True but the token is a known-leaked value, even under
    concurrent writes.
    """
    with _state.lock:
        current = _state.get()
        return set_state(
            require_token=current["require_token"],
            token=secrets.token_urlsafe(24),
        )


def _reset_for_tests() -> None:
    """Drop the in-memory cache. Tests should redirect via
    ``_state.reset_for_tests(path)`` in a conftest fixture rather than
    reassigning module attributes.
    """
    _state.reset_for_tests()


def __getattr__(name: str):
    """Back-compat shim: expose ``_STATE_FILE`` for tests that read it.

    Some existing tests (test_ws_auth.py) reach into the module to write
    raw bytes to the on-disk file or check its permissions. Preserve
    that surface as a read-only proxy to the state object's current
    path — after conftest calls ``_state.reset_for_tests(tmp_path/...)``,
    reads of ``ws_auth._STATE_FILE`` return the redirected path.
    """
    if name == "_STATE_FILE":
        return _state.path
    raise AttributeError(f"module 'server.services.ws_auth' has no attribute {name!r}")
