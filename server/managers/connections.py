import threading


class ConnectionManager:
    def __init__(self):
        self._lock = threading.Lock()
        self._web_connections = set()
        self._ws_clients = set()
        self._active_ws = None

    def register_web_connection(self, ws):
        with self._lock:
            self._web_connections.add(ws)
            self._active_ws = ws

    def unregister_web_connection(self, ws):
        with self._lock:
            self._web_connections.discard(ws)
            if ws == self._active_ws:
                self._active_ws = None

    def get_active_ws(self):
        with self._lock:
            return self._active_ws

    def get_web_connections(self):
        with self._lock:
            return list(self._web_connections)

    def register_ws_client(self, client):
        with self._lock:
            self._ws_clients.add(client)

    def unregister_ws_client(self, client):
        with self._lock:
            self._ws_clients.discard(client)

    def has_ws_clients(self):
        with self._lock:
            return bool(self._ws_clients or self._web_connections)

    def reset(self):
        with self._lock:
            self._web_connections.clear()
            self._ws_clients.clear()
            self._active_ws = None

