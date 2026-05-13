"""ConnectionManager unit tests.

v5.0.0 Phase 2.5: the flask-sock browser-WS path is gone, so the
ConnectionManager only tracks dedicated overlay WebSocket clients
(asyncio server on port 4001). The old register_web_connection /
get_web_connections / unregister_web_connection methods were removed
along with the orphaned send_message broadcast path.
"""

from server.managers import connection_manager
from server.managers.connections import ConnectionManager


def test_ws_client_registration():
    connection_manager.reset()
    client = object()
    connection_manager.register_ws_client(client)
    assert connection_manager.has_ws_clients()
    connection_manager.unregister_ws_client(client)
    assert not connection_manager.has_ws_clients()


def test_has_ws_clients_empty():
    m = ConnectionManager()
    assert not m.has_ws_clients()


def test_has_ws_clients_via_ws_client():
    m = ConnectionManager()
    c = object()
    m.register_ws_client(c)
    assert m.has_ws_clients()
    m.unregister_ws_client(c)
    assert not m.has_ws_clients()


def test_get_ws_clients_returns_list():
    m = ConnectionManager()
    c1, c2 = object(), object()
    m.register_ws_client(c1)
    m.register_ws_client(c2)
    clients = m.get_ws_clients()
    assert isinstance(clients, list)
    assert c1 in clients
    assert c2 in clients


def test_unregister_one_ws_client_keeps_others():
    m = ConnectionManager()
    c1, c2 = object(), object()
    m.register_ws_client(c1)
    m.register_ws_client(c2)
    m.unregister_ws_client(c1)
    remaining = m.get_ws_clients()
    assert c1 not in remaining
    assert c2 in remaining


def test_reset_clears_all_state():
    m = ConnectionManager()
    m.register_ws_client(object())
    m.reset()
    assert not m.has_ws_clients()
    assert m.get_ws_clients() == []
