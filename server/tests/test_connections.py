from server.managers import connection_manager


def test_connection_manager_registers_web_connections():
    connection_manager.reset()
    dummy = object()
    connection_manager.register_web_connection(dummy)
    assert connection_manager.get_active_ws() is dummy
    assert dummy in connection_manager.get_web_connections()
    connection_manager.unregister_web_connection(dummy)
    assert connection_manager.get_active_ws() is None
    assert dummy not in connection_manager.get_web_connections()


def test_ws_client_registration():
    connection_manager.reset()
    client = object()
    connection_manager.register_ws_client(client)
    assert connection_manager.has_ws_clients()
    connection_manager.unregister_ws_client(client)
    assert not connection_manager.has_ws_clients()

