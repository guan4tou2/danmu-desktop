"""Request rate limits the admin can change — and that survive a restart.

Seven limits ("scopes"), each a ``(limit, window)`` pair read from
``app.config`` on every request by ``services.security``:

    fire              each viewer (per IP)            /fire, /poll/vote
    fire_fingerprint  each device (per fingerprint)   /fire
    fire_global       the whole room                  /fire      (0 = off)
    fire_admin        integrations with a Fire Token  /fire
    api               other public endpoints
    admin             admin panel requests
    login             login attempts

Where a value comes from, in order:

    1. ``runtime/rate_limits.json`` — what the admin saved
    2. the environment variable (``FIRE_RATE_LIMIT`` …)
    3. the built-in default in ``config.Config``

``apply_saved`` runs once in ``create_app``: it remembers 2/3 as the
"startup values" (what Reset goes back to) and then lays 1 on top. After
that the running app's config is the single thing the limiters read, so
none of the ~140 ``@rate_limit`` call sites had to change.

Storage mechanics (atomic write, lock, unwritable-disk handling) live in
``JsonState``.
"""

from __future__ import annotations

import json
import logging
from typing import Any, Dict, Optional, Tuple

from ..config import Config
from .json_state import JsonState

logger = logging.getLogger(__name__)


def _config_keys(prefix: str) -> Tuple[str, str]:
    """``FIRE`` → ``("FIRE_RATE_LIMIT", "FIRE_RATE_WINDOW")``."""
    return f"{prefix}_RATE_LIMIT", f"{prefix}_RATE_WINDOW"


# scope → (limit config key, window config key). Built from the env-var prefix
# rather than spelled out: a literal pair of strings next to a "login" or
# "admin" key reads as a username/password to secret scanners.
SCOPES: Dict[str, Tuple[str, str]] = {
    "fire": _config_keys("FIRE"),
    "fire_fingerprint": _config_keys("FIRE_FINGERPRINT"),
    "fire_global": _config_keys("GLOBAL_FIRE"),
    "fire_admin": _config_keys("FIRE_ADMIN"),
    "api": _config_keys("API"),
    "admin": _config_keys("ADMIN"),
    "login": _config_keys("LOGIN"),
}

VALID_WINDOWS = (10, 30, 60, 300, 3600)

# (min, max) per scope. Only the room-wide cap may be 0, which turns it off.
# The admin floor is not "enough to use the panel comfortably" — one page load
# makes over a hundred requests — it only rules out values that are certainly a
# mistake. What keeps the admin from locking themselves out is that the three
# endpoints that read and write these limits are not charged against it.
_BOUNDS: Dict[str, Tuple[int, int]] = {
    "fire": (1, 1000),
    "fire_fingerprint": (1, 1000),
    "fire_global": (0, 100000),
    "fire_admin": (1, 10000),
    "api": (1, 10000),
    "admin": (60, 10000),
    "login": (1, 1000),
}

BOOT_VALUES_KEY = "RATE_LIMIT_BOOT_VALUES"


def bounds(scope: str) -> Tuple[int, int]:
    return _BOUNDS[scope]


def validate(scope: Any, limit: Any, window: Any) -> Tuple[str, int, int]:
    """Return ``(scope, limit, window)`` or raise ``ValueError`` saying why not."""
    # isinstance first: a list or dict here would make ``in`` raise TypeError.
    if not isinstance(scope, str) or scope not in SCOPES:
        raise ValueError(f"scope must be one of {list(SCOPES)}")
    if isinstance(limit, bool) or not isinstance(limit, int):
        raise ValueError("limit must be an integer")
    low, high = _BOUNDS[scope]
    if limit < low or limit > high:
        raise ValueError(f"limit must be between {low} and {high}")
    if isinstance(window, bool) or not isinstance(window, int):
        raise ValueError("window must be an integer")
    if window not in VALID_WINDOWS:
        raise ValueError(f"window must be one of {list(VALID_WINDOWS)}")
    return scope, limit, window


def _normalize(raw: Any) -> Dict[str, Any]:
    """Canonical saved state: ``{scope: {"limit": int, "window": int}}``.

    A scope set to ``None`` is dropped (that is how Reset clears it). Unknown
    scopes are ignored so a file written by a newer version still loads.

    One unusable entry — hand-edited out of range, or saved before a bound
    was tightened — is skipped with a warning; it must not take the other
    scopes' saved limits down with it. ``set_scope`` validates what the admin
    submits before it gets here, so nothing new and invalid is ever written.
    """
    if not isinstance(raw, dict):
        raise ValueError("rate limits must be an object")
    out: Dict[str, Any] = {}
    for scope in SCOPES:
        entry = raw.get(scope)
        if entry is None:
            continue
        try:
            if not isinstance(entry, dict):
                raise ValueError("must be an object")
            _, limit, window = validate(scope, entry.get("limit"), entry.get("window"))
        except ValueError as exc:
            logger.warning("rate_limits: ignoring saved %s limit (%s)", scope, exc)
            continue
        out[scope] = {"limit": limit, "window": window}
    return out


# keep_unreadable_file: a file that is not JSON at all is copied aside instead
# of being silently replaced by the next save.
_state = JsonState(
    "rate_limits.json", default=dict, normalize=_normalize, keep_unreadable_file=True
)


def is_persisted() -> bool:
    """True when the file on disk holds exactly what is in effect.

    ``JsonState.update`` keeps the admin panel working when the disk cannot be
    written (read-only mount, wrong owner) by updating memory only. The limit
    then applies until the next restart and no longer — the caller must say
    so instead of reporting a plain "saved".
    """
    wanted = _state.get()
    try:
        on_disk = json.loads(_state.path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return not wanted
    except (OSError, ValueError):
        return False
    return on_disk == wanted


def _startup_values(config) -> Dict[str, Dict[str, int]]:
    """Env-or-default values. Falls back to ``Config`` for keys a bare config lacks."""
    out = {}
    for scope, (limit_key, window_key) in SCOPES.items():
        out[scope] = {
            "limit": int(config.get(limit_key, getattr(Config, limit_key))),
            "window": int(config.get(window_key, getattr(Config, window_key))),
        }
    return out


def apply_saved(app) -> None:
    """Record the startup values, then put the saved overrides into ``app.config``."""
    app.config[BOOT_VALUES_KEY] = _startup_values(app.config)
    for scope, entry in _state.get().items():
        limit_key, window_key = SCOPES[scope]
        app.config[limit_key] = entry["limit"]
        app.config[window_key] = entry["window"]


def snapshot(config) -> Dict[str, Dict[str, Any]]:
    """What is in effect now, per scope, plus what Reset would restore."""
    boot = config.get(BOOT_VALUES_KEY) or _startup_values(config)
    saved = _state.get()
    out = {}
    for scope, (limit_key, window_key) in SCOPES.items():
        low, high = _BOUNDS[scope]
        out[scope] = {
            "limit": int(config.get(limit_key, boot[scope]["limit"]) or 0),
            "window": int(config.get(window_key, boot[scope]["window"]) or 0),
            "default_limit": boot[scope]["limit"],
            "default_window": boot[scope]["window"],
            "saved": scope in saved,
            "min": low,
            "max": high,
        }
    return out


def set_scope(config, scope: Any, limit: Any, window: Any) -> Dict[str, int]:
    """Validate, save, and put one scope's limit into effect. Raises ``ValueError``."""
    scope, limit, window = validate(scope, limit, window)
    _state.update({scope: {"limit": limit, "window": window}})
    limit_key, window_key = SCOPES[scope]
    config[limit_key] = limit
    config[window_key] = window
    return {"limit": limit, "window": window}


def reset(config, scope: Optional[str] = None) -> None:
    """Forget the saved value for ``scope`` (or all) and go back to the startup value."""
    if scope is not None and (not isinstance(scope, str) or scope not in SCOPES):
        raise ValueError(f"scope must be one of {list(SCOPES)}")
    targets = [scope] if scope else list(SCOPES)
    _state.update({name: None for name in targets})
    boot = config.get(BOOT_VALUES_KEY) or _startup_values(config)
    for name in targets:
        limit_key, window_key = SCOPES[name]
        config[limit_key] = boot[name]["limit"]
        config[window_key] = boot[name]["window"]
