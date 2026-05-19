import threading


class ConnectionManager:
    """Tracks overlay WebSocket clients (flask-sock /ws route on same port).

    Admin and viewer poll over HTTP; the only live socket is the one
    OBS / Electron overlay opens to receive danmu in real time.
    """

    def __init__(self):
        self._lock = threading.Lock()
        self._ws_clients = set()

    def register_ws_client(self, client):
        with self._lock:
            self._ws_clients.add(client)

    def unregister_ws_client(self, client):
        with self._lock:
            self._ws_clients.discard(client)

    def get_ws_clients(self):
        with self._lock:
            return list(self._ws_clients)

    def has_ws_clients(self):
        with self._lock:
            return bool(self._ws_clients)

    def reset(self):
        with self._lock:
            self._ws_clients.clear()
