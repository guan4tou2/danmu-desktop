"""Onscreen-danmu rate-limit settings — admin-controllable runtime toggle.

Pattern mirrors ws_auth.py: a runtime JSON file is the source of truth;
admin UI writes to it; read path is hot (called from messaging chokepoint)
and cached in-memory after first load.

Keys:
    max_onscreen_danmu: int in [0, 200]  (0 = unlimited, default 20)
    overflow_mode: "drop" | "queue"      (default "drop")

When disk writes fail (host bind-mount owned by wrong UID, read-only FS),
we log once and continue with in-memory state. Admin UI still works, the
change just won't survive a container restart until the host is fixed.
"""
import errno
import json
import logging
import os
import threading
from pathlib import Path
from typing import Dict, Optional

logger = logging.getLogger(__name__)

_STATE_FILE = Path(__file__).parent.parent / "runtime" / "onscreen_limits.json"
_lock = threading.RLock()
_state: Optional[Dict] = None
_write_failure_logged: bool = False

_DEFAULTS = {"max_onscreen_danmu": 20, "overflow_mode": "drop"}
_VALID_MODES = ("drop", "queue")
_MAX_CAP = 200


def _validate(max_onscreen_danmu: int, overflow_mode: str) -> Dict:
    if not isinstance(max_onscreen_danmu, int) or isinstance(max_onscreen_danmu, bool):
        raise ValueError("max_onscreen_danmu must be int")
    if max_onscreen_danmu < 0 or max_onscreen_danmu > _MAX_CAP:
        raise ValueError(f"max_onscreen_danmu out of range [0, {_MAX_CAP}]")
    if overflow_mode not in _VALID_MODES:
        raise ValueError(f"overflow_mode must be one of {_VALID_MODES}")
    return {"max_onscreen_danmu": max_onscreen_danmu, "overflow_mode": overflow_mode}


def _write_state(state: Dict) -> None:
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
        tmp.replace(_STATE_FILE)
    except Exception:
        try:
            tmp.unlink()
        except OSError:
            pass
        raise


def _log_write_failure_once(exc: Exception) -> None:
    global _write_failure_logged
    if _write_failure_logged:
        logger.debug("onscreen_limits persist still failing: %s", exc)
        return
    _write_failure_logged = True
    logger.warning(
        "Cannot persist %s (%s: %s). State will live in memory for this "
        "process only.",
        _STATE_FILE,
        type(exc).__name__,
        exc,
    )


def _load() -> Dict:
    if _STATE_FILE.exists():
        try:
            with open(_STATE_FILE, encoding="utf-8") as f:
                data = json.load(f)
            if isinstance(data, dict):
                return _validate(
                    int(data.get("max_onscreen_danmu", _DEFAULTS["max_onscreen_danmu"])),
                    str(data.get("overflow_mode", _DEFAULTS["overflow_mode"])),
                )
        except (ValueError, OSError, json.JSONDecodeError) as exc:
            logger.warning("Malformed %s (%s); using defaults", _STATE_FILE, exc)
    return dict(_DEFAULTS)


def get_state() -> Dict:
    """Return current settings as a dict copy."""
    global _state
    with _lock:
        if _state is None:
            _state = _load()
        return dict(_state)


def set_state(*, max_onscreen_danmu: int, overflow_mode: str) -> Dict:
    """Validate, persist, and return the new state."""
    validated = _validate(max_onscreen_danmu, overflow_mode)
    global _state
    with _lock:
        _state = dict(validated)
        try:
            _write_state(validated)
        except OSError as exc:
            _log_write_failure_once(exc)
        return dict(_state)


def _reset_for_tests() -> None:
    global _state, _write_failure_logged
    with _lock:
        _state = None
        _write_failure_logged = False
