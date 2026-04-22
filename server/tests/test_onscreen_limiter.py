"""onscreen_limiter.py — traffic shaper for danmu flow."""
import threading
import time
from unittest.mock import MagicMock

import pytest

from server.services import onscreen_config, onscreen_limiter


@pytest.fixture(autouse=True)
def _isolate_config(tmp_path, monkeypatch):
    monkeypatch.setattr(onscreen_config, "_STATE_FILE", tmp_path / "cfg.json")
    onscreen_config._reset_for_tests()
    onscreen_limiter.reset()
    yield
    onscreen_limiter.reset()
    onscreen_config._reset_for_tests()


# ── duration estimator parity with overlay (track-manager.js:320-323) ──


@pytest.mark.parametrize(
    "speed,expected",
    [
        (1, 20000),
        (5, 12000),
        (10, 2000),
    ],
)
def test_duration_scroll_matches_overlay_formula(speed, expected):
    got = onscreen_limiter.estimate_duration_ms({"layout": "scroll", "speed": speed})
    assert got == expected


def test_duration_top_fixed_uses_layout_config():
    got = onscreen_limiter.estimate_duration_ms(
        {"layout": "top_fixed", "layoutConfig": {"duration": 5000}}
    )
    assert got == 5000


def test_duration_float_defaults_4000_when_no_config():
    assert onscreen_limiter.estimate_duration_ms({"layout": "float"}) == 4000


# ── drop mode ──


def test_unlimited_passes_all():
    onscreen_config.set_state(max_onscreen_danmu=0, overflow_mode="drop")
    send = MagicMock(return_value=True)
    for i in range(10):
        status = onscreen_limiter.try_send({"text": f"m{i}", "speed": 5}, send)
        assert status["status"] == "sent"
    assert send.call_count == 10


def test_drop_mode_caps_inflight():
    onscreen_config.set_state(max_onscreen_danmu=3, overflow_mode="drop")
    send = MagicMock(return_value=True)
    for i in range(3):
        assert onscreen_limiter.try_send({"text": f"m{i}", "speed": 1}, send)["status"] == "sent"
    status = onscreen_limiter.try_send({"text": "overflow", "speed": 1}, send)
    assert status == {"status": "dropped", "reason": "full"}
    assert send.call_count == 3
    assert onscreen_limiter.get_state()["in_flight"] == 3


def test_slot_frees_after_duration_expires():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="drop")
    send = MagicMock(return_value=True)
    onscreen_limiter.try_send({"text": "a", "speed": 10}, send)
    assert onscreen_limiter.get_state()["in_flight"] == 1
    time.sleep(2.3)
    assert onscreen_limiter.get_state()["in_flight"] == 0
    status = onscreen_limiter.try_send({"text": "b", "speed": 10}, send)
    assert status["status"] == "sent"


def test_send_failure_frees_slot_immediately():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="drop")
    send = MagicMock(return_value=False)
    onscreen_limiter.try_send({"text": "x", "speed": 5}, send)
    assert onscreen_limiter.get_state()["in_flight"] == 0
    send_ok = MagicMock(return_value=True)
    status = onscreen_limiter.try_send({"text": "y", "speed": 5}, send_ok)
    assert status["status"] == "sent"


def test_live_config_change_takes_effect():
    """Changing settings at runtime must affect the next try_send."""
    onscreen_config.set_state(max_onscreen_danmu=5, overflow_mode="drop")
    send = MagicMock(return_value=True)
    assert onscreen_limiter.try_send({"text": "a", "speed": 1}, send)["status"] == "sent"
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="drop")
    status = onscreen_limiter.try_send({"text": "b", "speed": 1}, send)
    assert status["status"] == "dropped"


# ── queue mode ──


def test_queue_mode_fifo_release():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="queue")
    sent = []

    def send(d):
        sent.append(d["text"])
        return True

    for i in range(3):
        onscreen_limiter.try_send({"text": str(i), "speed": 10}, send)
    assert sent == ["0"]
    assert onscreen_limiter.get_state()["queue_len"] == 2
    time.sleep(2.3)
    assert sent[:2] == ["0", "1"]
    time.sleep(2.3)
    assert sent == ["0", "1", "2"]
    assert onscreen_limiter.get_state()["queue_len"] == 0


def test_queue_returns_queued_status():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="queue")
    send = MagicMock(return_value=True)
    onscreen_limiter.try_send({"text": "a", "speed": 1}, send)
    status = onscreen_limiter.try_send({"text": "b", "speed": 1}, send)
    assert status == {"status": "queued"}


def test_queue_cap_rejects_51st():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="queue")
    send = MagicMock(return_value=True)
    onscreen_limiter.try_send({"text": "fill", "speed": 1}, send)
    for i in range(50):
        status = onscreen_limiter.try_send({"text": f"q{i}", "speed": 1}, send)
        assert status["status"] == "queued"
    status = onscreen_limiter.try_send({"text": "overflow", "speed": 1}, send)
    assert status == {"status": "rejected", "reason": "queue_full"}


def test_queue_ttl_expires_after_60s(monkeypatch):
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="queue")
    send = MagicMock(return_value=True)
    onscreen_limiter.try_send({"text": "a", "speed": 1}, send)
    onscreen_limiter.try_send({"text": "b", "speed": 1}, send)
    future = onscreen_limiter._now() + 120
    monkeypatch.setattr(onscreen_limiter, "_now", lambda: future)
    onscreen_limiter._sweep_expired()
    assert onscreen_limiter.get_state()["queue_len"] == 0


def test_drop_mode_does_not_queue():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="drop")
    send = MagicMock(return_value=True)
    onscreen_limiter.try_send({"text": "a", "speed": 1}, send)
    onscreen_limiter.try_send({"text": "b", "speed": 1}, send)
    assert onscreen_limiter.get_state()["queue_len"] == 0


def test_queue_preserves_order_under_concurrency():
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="queue")
    sent = []
    lock = threading.Lock()

    def send(d):
        with lock:
            sent.append(d["text"])
        return True

    onscreen_limiter.try_send({"text": "fill", "speed": 1}, send)

    def enqueue(i):
        onscreen_limiter.try_send({"text": f"q{i:03d}", "speed": 10}, send)

    threads = [threading.Thread(target=enqueue, args=(i,)) for i in range(20)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    assert onscreen_limiter.get_state()["queue_len"] == 20
