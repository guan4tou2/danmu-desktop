"""messaging.py 直接單元測試"""

from unittest.mock import MagicMock, patch

import pytest

from server.services import messaging, onscreen_config, onscreen_limiter, ws_queue


@pytest.fixture(autouse=True)
def clean_queue(tmp_path, monkeypatch):
    monkeypatch.setattr(onscreen_config, "_STATE_FILE", tmp_path / "cfg.json")
    onscreen_config._reset_for_tests()
    onscreen_limiter.reset()
    ws_queue.dequeue_all()
    yield
    ws_queue.dequeue_all()
    onscreen_limiter.reset()
    onscreen_config._reset_for_tests()


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


# ─── send_message ─────────────────────────────────────────────────────────────


def test_send_message_calls_send_on_all_clients(app):
    from server.managers import connection_manager

    c1, c2 = MagicMock(), MagicMock()
    connection_manager.register_web_connection(c1)
    connection_manager.register_web_connection(c2)
    try:
        with app.app_context():
            messaging.send_message("hello")
        c1.send.assert_called_once_with("hello")
        c2.send.assert_called_once_with("hello")
    finally:
        connection_manager.unregister_web_connection(c1)
        connection_manager.unregister_web_connection(c2)


def test_send_message_no_clients_does_not_raise(app):
    from server.managers import connection_manager

    connection_manager.reset()
    with app.app_context():
        try:
            messaging.send_message("no one home")
        except Exception as e:
            pytest.fail(f"send_message raised unexpectedly: {e}")


def test_send_message_unregisters_dead_client(app):
    """send 拋例外的連線應被自動移除"""
    from server.managers import connection_manager

    dead = MagicMock()
    dead.send.side_effect = OSError("connection closed")
    connection_manager.register_web_connection(dead)

    with app.app_context():
        messaging.send_message("test")

    # 失效連線應已被移除
    assert dead not in connection_manager.get_web_connections()


def test_send_message_healthy_client_after_dead_still_receives(app):
    """移除死連線後，其他健康連線應正常收到訊息"""
    from server.managers import connection_manager

    dead = MagicMock()
    dead.send.side_effect = OSError("dead")
    alive = MagicMock()

    connection_manager.register_web_connection(dead)
    connection_manager.register_web_connection(alive)
    try:
        with app.app_context():
            messaging.send_message("broadcast")
        alive.send.assert_called_once_with("broadcast")
    finally:
        connection_manager.unregister_web_connection(alive)


# ── danmu_live broadcast ──────────────────────────────────────────────────


def test_forward_broadcasts_danmu_live_to_web_connections(app):
    """forward_to_ws_server broadcasts a danmu_live message to web connections."""
    import json
    from unittest.mock import MagicMock, patch

    from server.services.messaging import forward_to_ws_server

    mock_client = MagicMock()
    with patch("server.services.messaging.connection_manager") as mock_cm:
        mock_cm.get_web_connections.return_value = [mock_client]
        forward_to_ws_server(
            {
                "text": "hello",
                "color": "#ffffff",
                "size": "24",
                "speed": "5",
                "opacity": "100",
                "nickname": "Alice",
                "layout": "scroll",
                "isImage": False,
                "fingerprint": "abc123",
            }
        )

    assert mock_client.send.called
    sent = json.loads(mock_client.send.call_args[0][0])
    assert sent["type"] == "danmu_live"
    assert sent["data"]["text"] == "hello"
    assert sent["data"]["nickname"] == "Alice"
    assert sent["data"]["fingerprint"] == "abc123"


def test_forward_live_broadcast_does_not_block_on_exception(app):
    """Even if broadcast fails, forward_to_ws_server returns sent."""
    from unittest.mock import patch

    from server.services.messaging import forward_to_ws_server

    with patch("server.services.messaging.connection_manager") as mock_cm:
        mock_cm.get_web_connections.side_effect = RuntimeError("boom")
        result = forward_to_ws_server({"text": "hi", "color": "#fff"})

    assert result["status"] == "sent"


def test_forward_skips_live_broadcast_for_empty_text(app):
    """Messages without text field should not trigger live broadcast."""
    from unittest.mock import MagicMock, patch

    from server.services.messaging import forward_to_ws_server

    mock_client = MagicMock()
    with patch("server.services.messaging.connection_manager") as mock_cm:
        mock_cm.get_web_connections.return_value = [mock_client]
        forward_to_ws_server({"color": "#fff"})  # no text key

    # send() should not be called (only for danmu_live, not via enqueue)
    mock_client.send.assert_not_called()
