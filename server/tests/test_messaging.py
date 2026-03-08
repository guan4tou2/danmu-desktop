"""messaging.py 直接單元測試"""

from unittest.mock import MagicMock, patch

import pytest

from server.services import messaging, ws_queue


@pytest.fixture(autouse=True)
def clean_queue():
    ws_queue.dequeue_all()
    yield
    ws_queue.dequeue_all()


# ─── forward_to_ws_server ─────────────────────────────────────────────────────


def test_forward_enqueues_message(app):
    with app.app_context():
        result = messaging.forward_to_ws_server({"text": "hello"})
    assert result is True
    msgs = ws_queue.dequeue_all()
    assert len(msgs) == 1
    assert msgs[0]["text"] == "hello"


def test_forward_returns_true_on_success(app):
    with app.app_context():
        result = messaging.forward_to_ws_server({"x": 1})
    assert result is True


def test_forward_returns_false_on_enqueue_exception(app):
    with app.app_context():
        with patch.object(ws_queue, "enqueue_message", side_effect=RuntimeError("boom")):
            result = messaging.forward_to_ws_server({"x": 1})
    assert result is False


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
