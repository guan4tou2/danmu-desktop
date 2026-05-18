"""Telemetry ring buffer for admin dashboard sparklines.

Samples CPU%, MEM%, WS clients, and msg rate once per second; keeps the last
SERIES_LEN samples per series. The background sampler is daemonized and starts
lazily on first ``get_series()`` call so unit tests never see the thread unless
they explicitly drive it.
"""

from __future__ import annotations

import logging
import threading
from collections import deque
from typing import Deque, Dict, List

logger = logging.getLogger(__name__)

SERIES_LEN = 60  # 60 samples × 1s = 60s window
SAMPLE_INTERVAL_SEC = 1.0

_lock = threading.Lock()
_cpu: Deque[float] = deque(maxlen=SERIES_LEN)
_mem: Deque[float] = deque(maxlen=SERIES_LEN)
# Used memory in MB — sidebar shows it alongside the total so the operator
# can see absolute pressure at a glance ("MEM 5.9 / 15.6 GB"). Total is read
# once on first sample (it doesn't change at runtime) and stashed below.
_mem_mb: Deque[float] = deque(maxlen=SERIES_LEN)
_mem_total_mb: float = 0.0  # set once on first successful psutil read
_ws: Deque[int] = deque(maxlen=SERIES_LEN)
_rate: Deque[int] = deque(maxlen=SERIES_LEN)

_msg_counter = 0  # accumulates since last sample tick
_counter_lock = threading.Lock()

_sampler_started = False
_sampler_stop = threading.Event()


def record_message() -> None:
    """Increment the per-tick message counter. Called from messaging layer."""
    global _msg_counter
    with _counter_lock:
        _msg_counter += 1


def _drain_counter() -> int:
    """Atomically read-and-reset the message counter."""
    global _msg_counter
    with _counter_lock:
        n = _msg_counter
        _msg_counter = 0
    return n


def sample_now() -> None:
    """Take one sample across all series. Safe to call without the thread."""
    global _mem_total_mb
    try:
        import psutil
    except ImportError:
        cpu_val = 0.0
        mem_val = 0.0
        mem_mb_val = 0.0
    else:
        try:
            cpu_val = float(psutil.cpu_percent(interval=None))
            vm = psutil.virtual_memory()
            mem_val = float(vm.percent)
            mem_mb_val = float(vm.used) / 1024.0 / 1024.0
            # Capture total once — it doesn't change at runtime.
            if _mem_total_mb == 0.0:
                _mem_total_mb = float(vm.total) / 1024.0 / 1024.0
        except Exception as exc:
            logger.warning("telemetry: psutil sample failed: %s", exc)
            cpu_val = 0.0
            mem_val = 0.0
            mem_mb_val = 0.0

    try:
        from . import ws_state

        ws_clients = int(ws_state.get_ws_client_count())
    except Exception:
        ws_clients = 0

    rate = _drain_counter() * 60  # per-minute extrapolation from per-second tick

    with _lock:
        _cpu.append(round(cpu_val, 1))
        _mem.append(round(mem_val, 1))
        _mem_mb.append(round(mem_mb_val, 1))
        _ws.append(ws_clients)
        _rate.append(rate)


def _sampler_loop() -> None:
    while not _sampler_stop.is_set():
        try:
            sample_now()
        except Exception as exc:
            logger.warning("telemetry sampler error: %s", exc)
        if _sampler_stop.wait(SAMPLE_INTERVAL_SEC):
            break


def start_sampler() -> None:
    """Start the background sampler if not already running. Idempotent."""
    global _sampler_started
    with _lock:
        if _sampler_started:
            return
        _sampler_started = True
    thread = threading.Thread(target=_sampler_loop, daemon=True, name="telemetry-sampler")
    thread.start()
    logger.info("telemetry sampler started (interval=%.1fs)", SAMPLE_INTERVAL_SEC)


def get_series() -> Dict[str, List]:
    """Return current series + metadata.

    Pure read. Production callers should invoke ``start_sampler()`` once during
    server startup so samples accumulate. Tests can drive sampling with
    ``sample_now()`` directly without a background thread.
    """
    with _lock:
        return {
            "cpu_series": list(_cpu),
            "mem_series": list(_mem),
            "mem_mb_series": list(_mem_mb),
            "mem_total_mb": _mem_total_mb,
            "ws_series": list(_ws),
            "rate_series": list(_rate),
            "series_len": SERIES_LEN,
            "sample_interval_sec": SAMPLE_INTERVAL_SEC,
        }


def _reset_for_tests() -> None:
    """Test helper: clear all state and stop sampler."""
    global _sampler_started, _msg_counter, _mem_total_mb
    _sampler_stop.set()
    with _lock:
        _cpu.clear()
        _mem.clear()
        _mem_mb.clear()
        _ws.clear()
        _rate.clear()
        _sampler_started = False
        _mem_total_mb = 0.0
    with _counter_lock:
        _msg_counter = 0
    _sampler_stop.clear()
