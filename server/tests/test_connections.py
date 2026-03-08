from server.managers import connection_manager
from server.managers.connections import ConnectionManager


def test_connection_manager_registers_web_connections():
    connection_manager.reset()
    dummy = object()
    connection_manager.register_web_connection(dummy)
    assert dummy in connection_manager.get_web_connections()
    connection_manager.unregister_web_connection(dummy)
    assert dummy not in connection_manager.get_web_connections()


def test_ws_client_registration():
    connection_manager.reset()
    client = object()
    connection_manager.register_ws_client(client)
    assert connection_manager.has_ws_clients()
    connection_manager.unregister_ws_client(client)
    assert not connection_manager.has_ws_clients()


# ─── has_ws_clients 三條路徑 ──────────────────────────────────────────────────


def test_has_ws_clients_empty():
    m = ConnectionManager()
    assert not m.has_ws_clients()


def test_has_ws_clients_via_ws_client_only():
    m = ConnectionManager()
    c = object()
    m.register_ws_client(c)
    assert m.has_ws_clients()
    m.unregister_ws_client(c)
    assert not m.has_ws_clients()


def test_has_ws_clients_via_web_connection_only():
    m = ConnectionManager()
    w = object()
    m.register_web_connection(w)
    assert m.has_ws_clients()
    m.unregister_web_connection(w)
    assert not m.has_ws_clients()


# ─── 多個 web connection ───────────────────────────────────────────────────────


def test_multiple_web_connections():
    m = ConnectionManager()
    w1, w2 = object(), object()
    m.register_web_connection(w1)
    m.register_web_connection(w2)
    conns = m.get_web_connections()
    assert w1 in conns
    assert w2 in conns


def test_unregister_one_web_connection_keeps_others():
    m = ConnectionManager()
    w1, w2 = object(), object()
    m.register_web_connection(w1)
    m.register_web_connection(w2)
    m.unregister_web_connection(w1)
    assert w1 not in m.get_web_connections()
    assert w2 in m.get_web_connections()


def test_reset_clears_all_state():
    m = ConnectionManager()
    m.register_web_connection(object())
    m.register_ws_client(object())
    m.reset()
    assert not m.has_ws_clients()
    assert m.get_web_connections() == []


def test_get_web_connections_returns_list():
    m = ConnectionManager()
    w = object()
    m.register_web_connection(w)
    result = m.get_web_connections()
    assert isinstance(result, list)
    assert w in result
