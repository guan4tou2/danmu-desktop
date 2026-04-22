"""Onscreen danmu limiter — gate the messaging chokepoint by max concurrent
danmu. Settings come from onscreen_config.

This module implements drop mode + in-flight tracker. Queue mode is layered
on top in the next iteration.
"""
import logging
import threading
import time
import uuid
from typing import Callable, Dict

from . import onscreen_config

logger = logging.getLogger(__name__)

# Duration formula — MUST match danmu-desktop/renderer-modules/track-manager.js:320-323
_SCROLL_MIN_MS = 2000
_SCROLL_MAX_MS = 20000

_lock = threading.RLock()
_in_flight: Dict[str, float] = {}
_timers: Dict[str, threading.Timer] = {}


def _now() -> float:
    """Time source — tests monkeypatch this instead of time.monotonic globally."""
    return time.monotonic()


def estimate_duration_ms(data: dict) -> int:
    """Compute overlay animation duration so we can time slot release."""
    layout = data.get("layout", "scroll")
    if layout in ("top_fixed", "bottom_fixed"):
        cfg = data.get("layoutConfig") or {}
        return int(cfg.get("duration", 3000))
    if layout == "float":
        cfg = data.get("layoutConfig") or {}
        return int(cfg.get("duration", 4000))
    try:
        speed = int(data.get("speed", 5))
    except (TypeError, ValueError):
        speed = 5
    speed = max(1, min(10, speed))
    return int(_SCROLL_MAX_MS - (speed - 1) * (_SCROLL_MAX_MS - _SCROLL_MIN_MS) / 9)


def _schedule_release(msg_id: str, duration_ms: int) -> None:
    """Caller must hold _lock."""
    _in_flight[msg_id] = _now() + duration_ms / 1000.0
    t = threading.Timer(duration_ms / 1000.0, _on_slot_free, args=(msg_id,))
    t.daemon = True
    _timers[msg_id] = t
    t.start()


def _on_slot_free(msg_id: str) -> None:
    with _lock:
        _in_flight.pop(msg_id, None)
        _timers.pop(msg_id, None)


def try_send(data: dict, send_fn: Callable[[dict], bool]) -> dict:
    """Attempt to forward `data` via `send_fn`. Returns a status dict.

    Statuses (drop mode):
      {"status": "sent"}                              forwarded
      {"status": "dropped", "reason": "full"}         over cap
      {"status": "dropped", "reason": "forward_failed"} send_fn returned False
    """
    cfg = onscreen_config.get_state()
    max_cap = cfg["max_onscreen_danmu"]

    with _lock:
        if max_cap == 0 or len(_in_flight) < max_cap:
            msg_id = uuid.uuid4().hex
            duration = estimate_duration_ms(data)
            _schedule_release(msg_id, duration)
        else:
            return {"status": "dropped", "reason": "full"}

    ok = send_fn(data)
    if not ok:
        _on_slot_free(msg_id)
        return {"status": "dropped", "reason": "forward_failed"}
    return {"status": "sent"}


def get_state() -> dict:
    """Observability hook — admin dashboard reads this."""
    cfg = onscreen_config.get_state()
    with _lock:
        return {
            "in_flight": len(_in_flight),
            "queue_len": 0,
            "max": cfg["max_onscreen_danmu"],
            "mode": cfg["overflow_mode"],
        }


def reset() -> None:
    """Clear all state. Test-only."""
    with _lock:
        for t in _timers.values():
            t.cancel()
        _in_flight.clear()
        _timers.clear()
