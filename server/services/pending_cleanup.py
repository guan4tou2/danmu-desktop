"""Single-worker pending-queue cleanup, started explicitly by server.main().

Normal idle cleanup happens at most 60 seconds after a message's 24-hour
deadline, plus the current sweep's file I/O time. Request/forward-time checks
still prevent expired messages from playing between sweeps. Temporary file
errors are retried on the next regular tick, without a busy retry loop.
"""

import logging
import math

import gevent
from gevent.event import Event
from gevent.lock import RLock

from . import broadcast

logger = logging.getLogger(__name__)

CLEANUP_INTERVAL_SECONDS = 60.0
_lifecycle_lock = RLock()
_worker = None
_stop_event = None


def _run(stop_event: Event, interval: float) -> None:
    while not stop_event.is_set():
        try:
            broadcast.cleanup_expired_pending()
        except Exception:
            logger.exception("Pending queue cleanup failed; retrying next sweep")
        if stop_event.wait(timeout=interval):
            break


def start(interval: float = CLEANUP_INTERVAL_SECONDS) -> None:
    """Start one greenlet with an immediate sweep; repeated starts are safe."""
    if isinstance(interval, bool) or not math.isfinite(interval) or interval <= 0:
        raise ValueError("cleanup interval must be a finite positive number")
    global _worker, _stop_event
    with _lifecycle_lock:
        if _worker is not None and not _worker.dead:
            return
        _stop_event = Event()
        _worker = gevent.spawn(_run, _stop_event, interval)


def stop() -> None:
    """Wake the sleeper and wait for its current sweep before returning.

    Do not kill a greenlet while it owns the broadcast lock or writes a file.
    Retain its identity until it exits so a concurrent start cannot duplicate it.
    """
    global _worker, _stop_event
    with _lifecycle_lock:
        worker = _worker
        if worker is None:
            return
        _stop_event.set()
    worker.join()
    with _lifecycle_lock:
        if _worker is worker:
            _worker = None
            _stop_event = None
