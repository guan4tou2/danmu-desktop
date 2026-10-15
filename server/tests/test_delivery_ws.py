"""Real /ws protocol coverage for render receipt ownership and legacy clients."""

import json
import time

import gevent
import pytest
from gevent.pool import Pool
from gevent.pywsgi import WSGIServer

from server.app import create_app
from server.config import Config
from server.services import delivery_tracking as delivery
from server.services import history, messaging, ws_queue, ws_state
from server.tests.conftest import TestConfig
from server.ws import flask_ws


@pytest.fixture
def receipt_ws_port(monkeypatch):
    """Own and stop the broadcaster; it must not consume later replay queues.

    The shared session WS fixture deliberately lives for the system-test run.
    Starting it from this earlier module would leave its dequeue loop active
    through unrelated queue/replay unit tests.
    """
    monkeypatch.setattr(Config, "WS_REQUIRE_TOKEN", False)
    monkeypatch.setattr(Config, "WS_AUTH_TOKEN", "")
    monkeypatch.setattr(Config, "WS_ALLOWED_ORIGINS", [])
    # Preserve the global store across create_app and the test's own patch.
    monkeypatch.setattr(history, "danmu_history", history.danmu_history)
    old_count = ws_state.get_ws_client_count()
    initial_sockets = set(flask_ws._outboxes)
    handlers = Pool()
    server = WSGIServer(("127.0.0.1", 0), create_app(TestConfig), spawn=handlers)
    server.start()
    forwarder = gevent.spawn(flask_ws._forward_messages)
    try:
        yield server.server_port
    finally:
        # Stop dequeueing before any remaining handler cleanup can yield.
        forwarder.kill(block=True)
        for ws in set(flask_ws._outboxes) - initial_sockets:
            try:
                ws.close()
            except Exception:
                pass
        server.stop(timeout=1)
        handlers.kill(block=True)
        delivery.reset()
        ws_queue.dequeue_all()
        ws_state.update_ws_client_count(old_count)
        assert forwarder.dead
        assert not (set(flask_ws._outboxes) - initial_sockets)


def receive_danmu(ws):
    deadline = time.monotonic() + 3
    while time.monotonic() < deadline:
        data = json.loads(ws.recv(timeout=3))
        if data.get("message_id"):
            return data
    raise AssertionError("no danmu received")


def wait_for(predicate):
    deadline = time.monotonic() + 4
    while time.monotonic() < deadline:
        if predicate():
            return
        time.sleep(0.03)
    assert predicate()


def test_real_socket_can_only_confirm_its_own_transmission(receipt_ws_port, monkeypatch):
    from websockets.sync.client import connect

    delivery.reset()
    store = history.DanmuHistory(persist=False)
    monkeypatch.setattr(history, "danmu_history", store)
    try:
        with connect(f"ws://127.0.0.1:{receipt_ws_port}/ws", close_timeout=0.25) as first:
            payload = {"text": "socket receipt", "message_id": "socket-receipt"}
            assert messaging._raw_forward(payload)
            store.add(payload)
            assert receive_danmu(first)["message_id"] == "socket-receipt"
            # A new connection never received this message. A guessed ID is insufficient.
            with connect(f"ws://127.0.0.1:{receipt_ws_port}/ws", close_timeout=0.25) as late:
                late.send(json.dumps({"type": "render_ack", "message_id": "socket-receipt"}))
                late.send(json.dumps({"type": "heartbeat", "timestamp": "barrier"}))
                while json.loads(late.recv(timeout=3)).get("type") != "heartbeat_ack":
                    pass
                assert store.get_records()[0]["status"] == "forwarded"
                first.send(json.dumps({"type": "render_ack", "message_id": "socket-receipt"}))
                wait_for(lambda: store.get_records()[0]["status"] == "rendered")
    finally:
        delivery.reset()


def test_legacy_socket_without_receipt_becomes_unconfirmed(receipt_ws_port, monkeypatch):
    from websockets.sync.client import connect

    delivery.reset()
    monkeypatch.setattr(delivery, "ACK_TIMEOUT_SECONDS", 2)
    store = history.DanmuHistory(persist=False)
    monkeypatch.setattr(history, "danmu_history", store)
    try:
        with connect(f"ws://127.0.0.1:{receipt_ws_port}/ws", close_timeout=0.25) as legacy:
            payload = {"text": "legacy receipt", "message_id": "legacy-receipt"}
            assert messaging._raw_forward(payload)
            store.add(payload)
            assert receive_danmu(legacy)["message_id"] == "legacy-receipt"
            wait_for(lambda: store.get_records()[0]["status"] == "unconfirmed")
            assert store.get_records()[0]["delivery_reason"] == "timeout"
            legacy.send(json.dumps({"type": "render_ack", "message_id": "legacy-receipt"}))
            legacy.send(json.dumps({"type": "heartbeat", "timestamp": "late-barrier"}))
            while json.loads(legacy.recv(timeout=3)).get("type") != "heartbeat_ack":
                pass
            assert store.get_records()[0]["status"] == "unconfirmed"
    finally:
        delivery.reset()
