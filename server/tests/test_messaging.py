"""messaging.py unit tests (post-Phase-2.5).

The flask-sock send_message() path was removed in v5.0.0 Phase 2.5
along with the danmu_live web-broadcast leg of forward_to_ws_server.
Tests now cover only forward_to_ws_server + the live-feed buffer
hook that replaced the legacy WS push.
"""

from unittest.mock import patch

import pytest

from server.services import (
    live_feed_buffer,
    messaging,
    onscreen_config,
    onscreen_limiter,
    ws_queue,
)


@pytest.fixture(autouse=True)
def clean_queue(tmp_path, monkeypatch):
    monkeypatch.setattr(onscreen_config, "_STATE_FILE", tmp_path / "cfg.json")
    onscreen_config._reset_for_tests()
    onscreen_limiter.reset()
    ws_queue.dequeue_all()
    live_feed_buffer.reset()
    yield
    ws_queue.dequeue_all()
    onscreen_limiter.reset()
    onscreen_config._reset_for_tests()
    live_feed_buffer.reset()


# ─── forward_to_ws_server ─────────────────────────────────────────────────────


def test_forward_enqueues_message(app):
    with app.app_context():
        result = messaging.forward_to_ws_server({"text": "hello"})
    assert result["status"] == "sent"
    msgs = ws_queue.dequeue_all()
    assert len(msgs) == 1
    assert msgs[0]["text"] == "hello"


def test_forward_returns_sent_status_on_success(app):
    with app.app_context():
        result = messaging.forward_to_ws_server({"x": 1})
    assert result["status"] == "sent"


def test_forward_returns_dropped_on_enqueue_exception(app):
    with app.app_context():
        with patch.object(ws_queue, "enqueue_message", side_effect=RuntimeError("boom")):
            result = messaging.forward_to_ws_server({"x": 1})
    assert result["status"] == "dropped"
    assert result["reason"] == "forward_failed"


def test_forward_does_not_raise_on_exception(app):
    with app.app_context():
        with patch.object(ws_queue, "enqueue_message", side_effect=Exception("fail")):
            try:
                messaging.forward_to_ws_server({"x": 1})
            except Exception as e:
                pytest.fail(f"forward_to_ws_server raised unexpectedly: {e}")


def test_forward_preserves_payload(app):
    payload = {"text": "hi", "color": "FF0000", "speed": 5}
    with app.app_context():
        messaging.forward_to_ws_server(payload)
    assert ws_queue.dequeue_all()[0] == payload


def test_forward_drops_when_cap_reached(app):
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="drop")
    with app.app_context():
        first = messaging.forward_to_ws_server({"text": "a", "speed": 1})
        second = messaging.forward_to_ws_server({"text": "b", "speed": 1})
    assert first["status"] == "sent"
    assert second == {"status": "dropped", "reason": "full"}


def test_forward_queues_when_full_in_queue_mode(app):
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="queue")
    with app.app_context():
        messaging.forward_to_ws_server({"text": "a", "speed": 1})
        result = messaging.forward_to_ws_server({"text": "b", "speed": 1})
    assert result == {"status": "queued"}


def test_forward_settings_changed_bypasses_limiter(app):
    onscreen_config.set_state(max_onscreen_danmu=1, overflow_mode="drop")
    with app.app_context():
        messaging.forward_to_ws_server({"text": "a", "speed": 1})
        # Even though cap is full, settings_changed meta message must pass
        result = messaging.forward_to_ws_server({"type": "settings_changed"})
    assert result["status"] == "sent"


# ─── _broadcast_live_feed → live_feed_buffer ─────────────────────────────────


def test_forward_appends_danmu_to_live_feed_buffer(app):
    """Successful danmu forward populates the admin polling buffer."""
    with app.app_context():
        messaging.forward_to_ws_server(
            {
                "text": "hello-buffer",
                "color": "FF00FF",
                "speed": 5,
                "nickname": "Alice",
                "fingerprint": "abc123",
            }
        )
    snap = live_feed_buffer.snapshot()
    assert len(snap) == 1
    entry = snap[0]["data"]
    assert entry["text"] == "hello-buffer"
    assert entry["color"] == "FF00FF"
    assert entry["nickname"] == "Alice"
    assert entry["fingerprint"] == "abc123"


def test_forward_skips_live_feed_for_empty_text(app):
    """Messages without text don't trigger a live-feed snapshot."""
    with app.app_context():
        messaging.forward_to_ws_server({"color": "#fff"})
    assert live_feed_buffer.snapshot() == []


def test_forward_skips_live_feed_for_settings_changed(app):
    """Meta payloads don't pollute the danmu live feed."""
    with app.app_context():
        messaging.forward_to_ws_server({"type": "settings_changed"})
    assert live_feed_buffer.snapshot() == []
