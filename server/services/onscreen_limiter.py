"""Onscreen danmu limiter — gate the messaging chokepoint by max concurrent
danmu. Settings come from onscreen_config.

Supports two overflow modes:
  - drop: over cap → discard with {status: "dropped", reason: "full"}
  - queue: over cap → FIFO queue (cap=50, TTL=60s); released as slots free

Timers are scheduled per in-flight danmu based on the overlay's animation
duration formula; when they fire, a slot opens and the next queue entry (if
any) is released.
"""
import atexit
import logging
import threading
import time
import uuid
from collections import deque
from typing import Callable, Dict, Optional

from . import onscreen_config

logger = logging.getLogger(__name__)

# Duration formula — MUST match danmu-desktop/renderer-modules/track-manager.js:320-323
_SCROLL_MIN_MS = 2000
_SCROLL_MAX_MS = 20000

QUEUE_MAX_SIZE = 50
QUEUE_TTL_SECONDS = 60
_SWEEP_INTERVAL_SECONDS = 1.0

_lock = threading.RLock()
_in_flight: Dict[str, float] = {}
_timers: Dict[str, threading.Timer] = {}

# Each queue entry: (msg_id, enqueue_monotonic, data, send_fn)
_queue: "deque[tuple[str, float, dict, Callable]]" = deque(maxlen=QUEUE_MAX_SIZE)
_sweep_thread: Optional[threading.Thread] = None
_sweep_stop = threading.Event()


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
    """Timer callback — release slot and drain queue if possible."""
    drained: list = []
    with _lock:
        _in_flight.pop(msg_id, None)
        _timers.pop(msg_id, None)
        cfg = onscreen_config.get_state()
        max_cap = cfg["max_onscreen_danmu"]
        now = _now()
        while _queue and (max_cap == 0 or len(_in_flight) < max_cap):
            qid, enq_time, data, send_fn = _queue.popleft()
            if now - enq_time > QUEUE_TTL_SECONDS:
                continue  # TTL expired while waiting
            duration = estimate_duration_ms(data)
            _schedule_release(qid, duration)
            drained.append((qid, data, send_fn))
    # Release lock before invoking send_fn; reclaim slots on failure.
    for qid, data, send_fn in drained:
        try:
            ok = send_fn(data)
        except Exception as exc:
            logger.warning("queue send_fn raised: %s", exc)
            ok = False
        if not ok:
            _on_slot_free(qid)


def _sweep_expired() -> None:
    """Drop queue entries older than QUEUE_TTL_SECONDS. Idempotent."""
    with _lock:
        now = _now()
        while _queue and now - _queue[0][1] > QUEUE_TTL_SECONDS:
            _queue.popleft()


def _sweep_loop() -> None:
    while not _sweep_stop.wait(_SWEEP_INTERVAL_SECONDS):
        try:
            _sweep_expired()
        except Exception as exc:
            logger.error("sweep loop error: %s", exc)


def _ensure_sweep_running() -> None:
    global _sweep_thread
    if _sweep_thread is None or not _sweep_thread.is_alive():
        _sweep_stop.clear()
        _sweep_thread = threading.Thread(
            target=_sweep_loop, daemon=True, name="onscreen-sweep"
        )
        _sweep_thread.start()


def shutdown() -> None:
    """Stop sweep thread. Tests + app shutdown."""
    _sweep_stop.set()


atexit.register(shutdown)


def try_send(data: dict, send_fn: Callable[[dict], bool]) -> dict:
    """Attempt to forward `data` via `send_fn`. Returns a status dict.

    Statuses:
      {"status": "sent"}                               forwarded immediately
      {"status": "queued"}                             overflow mode=queue
      {"status": "dropped", "reason": "full"}          overflow mode=drop
      {"status": "dropped", "reason": "forward_failed"} send_fn returned False
      {"status": "rejected", "reason": "queue_full"}   queue at QUEUE_MAX_SIZE
    """
    _ensure_sweep_running()
    cfg = onscreen_config.get_state()
    max_cap = cfg["max_onscreen_danmu"]
    mode = cfg["overflow_mode"]

    with _lock:
        if max_cap == 0 or len(_in_flight) < max_cap:
            msg_id = uuid.uuid4().hex
            duration = estimate_duration_ms(data)
            _schedule_release(msg_id, duration)
        else:
            if mode == "drop":
                return {"status": "dropped", "reason": "full"}
            # queue mode
            if len(_queue) >= QUEUE_MAX_SIZE:
                return {"status": "rejected", "reason": "queue_full"}
            _queue.append((uuid.uuid4().hex, _now(), data, send_fn))
            return {"status": "queued"}

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
            "queue_len": len(_queue),
            "max": cfg["max_onscreen_danmu"],
            "mode": cfg["overflow_mode"],
        }


def reset() -> None:
    """Clear all state + stop sweep. Test-only."""
    with _lock:
        for t in _timers.values():
            t.cancel()
        _in_flight.clear()
        _timers.clear()
        _queue.clear()
    shutdown()
