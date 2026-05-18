"""Overlay state — admin-controlled OVERLAY ON / OFF gate.

2026-05-18 polestar pivot (P2-7): module is named ``broadcast`` for
historical reasons but the actual semantics are the 2-state overlay
toggle (`on` / `off`) with optional pause sub-state on the frontend.
Internal storage continues to use ``"live"`` / ``"standby"`` strings so
existing ``server/runtime/broadcast.json`` files keep parsing; ``set_mode``
also accepts the polestar aliases ``"overlay_on"`` / ``"overlay_off"`` and
normalizes them to the legacy values.

When ``mode == "standby"`` (overlay off), ``/fire`` calls into
``enqueue_pending()`` instead of pushing directly to overlay; on transition
back to ``"live"`` (overlay on), the queued danmu drain over ~2s.

Persistence:
  * ``state``: ``server/runtime/broadcast.json`` — atomic write via tmp+rename.
  * ``queue``: ``server/runtime/broadcast_queue.json`` — same.

Both files survive container restart. The state file is plain JSON (mode +
started_at + total_messages); the queue file is a JSON array of pending
``data`` dicts (the same payload that would have been forwarded to overlay).

Concurrency: a single ``threading.RLock`` guards both in-memory state and
file writes within a process. Multi-worker deployments share the disk file
but not the lock — admins should run a single worker, which matches the
project's existing /admin/ratelimit deployment story.
"""

import errno
import json
import logging
import os
import threading
import time
from pathlib import Path
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

_STATE_FILE = Path(__file__).parent.parent / "runtime" / "broadcast.json"
_QUEUE_FILE = Path(__file__).parent.parent / "runtime" / "broadcast_queue.json"
_QUEUE_MAX = 500

_lock = threading.RLock()
_state: Optional[Dict[str, Any]] = None
_queue: Optional[List[Dict[str, Any]]] = None
_write_failure_logged: bool = False

VALID_MODES = ("live", "standby")
# 2026-05-18 polestar (P2-7): polestar vocabulary maps onto the same
# 2-state machine. Accept both forms at the API boundary; normalize to
# legacy values for storage compatibility.
_MODE_ALIASES: Dict[str, str] = {
    "overlay_on": "live",
    "overlay_off": "standby",
}
_DEFAULT_STATE: Dict[str, Any] = {
    "mode": "live",
    "started_at": None,
    "total_messages": 0,
}


def _normalize_mode(mode: str) -> str:
    """Translate polestar alias (overlay_on/off) → legacy live/standby."""
    return _MODE_ALIASES.get(mode, mode)


def _atomic_write_json(path: Path, payload: Any) -> None:
    """Atomic write via tmp + os.replace. Caller must hold _lock."""
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + f".tmp.{os.getpid()}.{threading.get_ident()}")
    flags = os.O_WRONLY | os.O_CREAT | os.O_TRUNC
    fd = os.open(tmp, flags, 0o600)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False, indent=2)
        try:
            os.chmod(tmp, 0o600)
        except OSError as exc:
            if exc.errno not in (errno.ENOSYS, errno.EPERM):
                raise
        tmp.replace(path)
    except Exception:
        try:
            tmp.unlink()
        except OSError:
            pass
        raise


def _log_write_failure_once(exc: Exception) -> None:
    global _write_failure_logged
    if _write_failure_logged:
        logger.debug("broadcast persist still failing: %s", exc)
        return
    _write_failure_logged = True
    logger.warning(
        "Cannot persist broadcast state (%s: %s). Running with in-memory state "
        "only — admin changes won't survive restart. Fix host bind-mount perms.",
        type(exc).__name__,
        exc,
    )


def _load_state() -> Dict[str, Any]:
    """Read state file or seed fresh. Caller must hold _lock."""
    if _STATE_FILE.exists():
        try:
            with open(_STATE_FILE, encoding="utf-8") as f:
                data = json.load(f)
            if isinstance(data, dict):
                mode = data.get("mode")
                if mode not in VALID_MODES:
                    mode = "live"
                started = data.get("started_at")
                if started is not None and not isinstance(started, (int, float)):
                    started = None
                total = data.get("total_messages")
                if not isinstance(total, int) or total < 0:
                    total = 0
                return {"mode": mode, "started_at": started, "total_messages": total}
        except Exception as exc:
            logger.warning("broadcast.json malformed (%s); reseeding.", exc)
    seeded = dict(_DEFAULT_STATE)
    seeded["started_at"] = time.time()
    return seeded


def _load_queue() -> List[Dict[str, Any]]:
    if _QUEUE_FILE.exists():
        try:
            with open(_QUEUE_FILE, encoding="utf-8") as f:
                data = json.load(f)
            if isinstance(data, list):
                return [d for d in data if isinstance(d, dict)][-_QUEUE_MAX:]
        except Exception as exc:
            logger.warning("broadcast_queue.json malformed (%s); resetting.", exc)
    return []


def _persist_state() -> None:
    if _state is None:
        return
    try:
        _atomic_write_json(_STATE_FILE, _state)
    except OSError as exc:
        _log_write_failure_once(exc)


def _persist_queue() -> None:
    if _queue is None:
        return
    try:
        _atomic_write_json(_QUEUE_FILE, _queue)
    except OSError as exc:
        _log_write_failure_once(exc)


def _ensure_loaded() -> None:
    """Lazy-load state + queue on first access. Caller must hold _lock."""
    global _state, _queue
    if _state is None:
        _state = _load_state()
    if _queue is None:
        _queue = _load_queue()


def get_state() -> Dict[str, Any]:
    """Return a copy of the current state."""
    with _lock:
        _ensure_loaded()
        out = dict(_state)
        out["queue_size"] = len(_queue or [])
        return out


def is_live() -> bool:
    with _lock:
        _ensure_loaded()
        return _state.get("mode") == "live"


# 2026-05-18 polestar aliases (P2-7) — preferred name for new callers.
def is_overlay_on() -> bool:
    """Polestar-aligned alias for ``is_live()``."""
    return is_live()


def is_overlay_off() -> bool:
    """Polestar-aligned alias for ``not is_live()``."""
    return not is_live()


def set_mode(mode: str) -> Dict[str, Any]:
    """Transition to ``mode``. Accepts legacy ``live``/``standby`` or the
    polestar aliases ``overlay_on``/``overlay_off`` (2026-05-18 P2-7).
    Returns new state.

    Side effects:
      * OFF → ON (standby → live): reset ``started_at`` to now (new
        overlay window starts).
      * ON → OFF (live → standby): ``started_at`` retained; messages
        accumulate in the queue and drain on next ON transition.
    """
    mode = _normalize_mode(mode)
    if mode not in VALID_MODES:
        raise ValueError(
            f"mode must be one of {VALID_MODES} or aliases " f"{tuple(_MODE_ALIASES.keys())}"
        )
    with _lock:
        _ensure_loaded()
        prev = _state.get("mode")
        _state["mode"] = mode
        if mode == "live" and prev != "live":
            _state["started_at"] = time.time()
            # New live session — reset cumulative counter for that session.
            _state["total_messages"] = 0
        elif mode == "standby" and prev != "standby":
            # Keep started_at; total_messages records what happened up to now.
            pass
        _persist_state()
        return dict(_state)


def increment_messages(n: int = 1) -> int:
    """Increment ``total_messages`` (called from /fire on successful enqueue)."""
    if n <= 0:
        return 0
    with _lock:
        _ensure_loaded()
        _state["total_messages"] = int(_state.get("total_messages") or 0) + int(n)
        _persist_state()
        return _state["total_messages"]


def enqueue_pending(data: Dict[str, Any]) -> int:
    """Queue a danmu while in standby. Returns new queue length.

    Drops oldest entries past _QUEUE_MAX to bound disk usage. Persisted
    immediately so a crash mid-broadcast doesn't lose audience messages.
    """
    global _queue
    if not isinstance(data, dict):
        raise ValueError("data must be a dict")
    with _lock:
        _ensure_loaded()
        _queue.append(data)
        if len(_queue) > _QUEUE_MAX:
            _queue = _queue[-_QUEUE_MAX:]
        _persist_queue()
        return len(_queue)


def drain_pending() -> List[Dict[str, Any]]:
    """Atomically pull the queued messages and clear the queue file."""
    with _lock:
        _ensure_loaded()
        items = list(_queue)
        _queue.clear()
        _persist_queue()
        return items


def queue_size() -> int:
    with _lock:
        _ensure_loaded()
        return len(_queue or [])


def reset_for_tests() -> None:
    """Drop in-memory cache. Tests should monkeypatch _STATE_FILE/_QUEUE_FILE first."""
    global _state, _queue, _write_failure_logged
    with _lock:
        _state = None
        _queue = None
        _write_failure_logged = False
