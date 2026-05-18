import threading


class ConnectionManager:
    """Tracks dedicated overlay WebSocket clients (asyncio server on port 4001).

    The flask-sock browser-WS path was removed in v5.0.0 Phase 2 — admin and
    viewer both poll over HTTP now, so the only remaining live socket is the
    one OBS / Electron overlay opens to receive danmu in real time.
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
