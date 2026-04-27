"""Fire-token: shared bearer credential for /fire integrations.

Used by Slido extension, Discord bridges, OBS plugins, bookmarklets — any
caller that wants to identify itself to /fire without exposing each user's
fingerprint to a 3rd party. The token rides in the ``X-Fire-Token`` header
on POST /fire and lets the server tag the request with an integration name
for auditing, without sharing per-user state.

Single shared secret, not per-integration — extensions are configured by
the operator, who already knows the token; no need for OAuth-like flows.
For per-integration ACL, see /admin/api-tokens (separate lane, v5.x).

Live state stored in ``server/runtime/fire_token.json``. The admin UI
flips ``enabled`` and rotates the token; the /fire route reads ``get_state()``
on each request. ``regenerate()`` returns the plain token ONCE — after
that, only a masked prefix is exposed via ``get_state()``.
"""

from __future__ import annotations

import errno
import json
import logging
import os
import secrets
import threading
from pathlib import Path
from typing import Dict, Optional

logger = logging.getLogger(__name__)

_STATE_FILE = Path(__file__).parent.parent / "runtime" / "fire_token.json"
_lock = threading.RLock()
_state: Optional[Dict] = None
_write_failure_logged: bool = False

_DEFAULT_STATE: Dict = {
    "enabled": False,
    "token": "",  # raw token; only exposed once on regenerate
    "rotated_at": 0.0,
}


def _write_state(state: Dict) -> None:
    """Atomic write via tmp + replace. Caller holds _lock.

    Mirrors ws_auth._write_state hardening: 0o600 mode at open time, pid/tid
    suffix to avoid multi-worker rename races.
    """
    _STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    tmp = _STATE_FILE.with_suffix(f".tmp.{os.getpid()}.{threading.get_ident()}")
    flags = os.O_WRONLY | os.O_CREAT | os.O_TRUNC
    fd = os.open(tmp, flags, 0o600)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            json.dump(state, f, indent=2)
        try:
            os.chmod(tmp, 0o600)
        except OSError as exc:
            if exc.errno not in (errno.ENOSYS, errno.EPERM):
                raise
        os.replace(tmp, _STATE_FILE)
    except Exception:
        try:
            os.unlink(tmp)
        except OSError:
            pass
        raise


def _load_state() -> Dict:
    """Lazily read the state file. First call seeds defaults if missing."""
    global _state, _write_failure_logged
    with _lock:
        if _state is not None:
            return _state
        try:
            with open(_STATE_FILE, "r", encoding="utf-8") as f:
                raw = json.load(f)
            if isinstance(raw, dict):
                _state = {
                    "enabled": bool(raw.get("enabled", False)),
                    "token": str(raw.get("token", "")),
                    "rotated_at": float(raw.get("rotated_at", 0.0) or 0.0),
                }
                return _state
        except FileNotFoundError:
            pass
        except (json.JSONDecodeError, OSError) as exc:
            logger.warning("fire_token: failed to read state: %s — using defaults", exc)
        _state = dict(_DEFAULT_STATE)
        try:
            _write_state(_state)
        except OSError as exc:
            if not _write_failure_logged:
                logger.warning(
                    "fire_token: cannot persist state (will run in-memory only): %s",
                    exc,
                )
                _write_failure_logged = True
        return _state


def get_state() -> Dict:
    """Return a defensive copy of the live state (always includes ``token``).

    Hot-path callers (route guards) use this to compare against the
    incoming X-Fire-Token header. Admin UI uses ``get_public_state()``
    which excludes the raw token.
    """
    return dict(_load_state())


def get_public_state() -> Dict:
    """Admin-safe view: ``{enabled, prefix, rotated_at}``. Never the raw token."""
    s = _load_state()
    token = s.get("token", "")
    prefix = (token[:6] + "…") if token else ""
    return {
        "enabled": bool(s.get("enabled", False)),
        "prefix": prefix,
        "rotated_at": float(s.get("rotated_at", 0.0) or 0.0),
        "has_token": bool(token),
    }


def set_enabled(enabled: bool) -> Dict:
    """Toggle whether the X-Fire-Token check is enforced. Disabling does
    NOT clear the token (so re-enabling restores the same secret)."""
    with _lock:
        s = dict(_load_state())
        s["enabled"] = bool(enabled)
        try:
            _write_state(s)
        except OSError as exc:
            logger.warning("fire_token: enabled-flip persist failed: %s", exc)
        global _state
        _state = s
        return get_public_state()


def regenerate() -> Dict:
    """Generate a new token, persist it, mark enabled. Returns
    ``{token, prefix, rotated_at}`` with the RAW token included once.

    Caller (admin route) should immediately surface the token to the
    operator; subsequent reads only get the prefix.
    """
    import time

    with _lock:
        new_token = secrets.token_urlsafe(24)
        rotated = time.time()
        s = {"enabled": True, "token": new_token, "rotated_at": rotated}
        try:
            _write_state(s)
        except OSError as exc:
            logger.warning("fire_token: regenerate persist failed: %s", exc)
        global _state
        _state = s
        return {
            "token": new_token,
            "prefix": new_token[:6] + "…",
            "rotated_at": rotated,
            "enabled": True,
        }


def revoke() -> Dict:
    """Clear the token entirely (sets enabled=False, token=""). For lost
    tokens — caller can immediately call regenerate() afterwards."""
    with _lock:
        s = {"enabled": False, "token": "", "rotated_at": 0.0}
        try:
            _write_state(s)
        except OSError as exc:
            logger.warning("fire_token: revoke persist failed: %s", exc)
        global _state
        _state = s
        return get_public_state()


def verify(presented: str) -> bool:
    """Constant-time compare of header value vs stored token. Returns True
    iff the feature is enabled AND the token matches."""
    s = _load_state()
    if not s.get("enabled"):
        return False
    expected = s.get("token", "")
    if not expected or not presented:
        return False
    return secrets.compare_digest(str(presented), expected)


def reset_for_tests() -> None:
    """Test helper — drop in-memory cache, leave file alone."""
    global _state, _write_failure_logged
    with _lock:
        _state = None
        _write_failure_logged = False
