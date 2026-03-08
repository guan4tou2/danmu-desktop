import threading


class BlacklistStore:
    def __init__(self, storage=None):
        self._lock = threading.Lock()
        self._keywords = storage if storage is not None else set()

    def add(self, keyword: str) -> bool:
        with self._lock:
            if keyword and keyword not in self._keywords:
                self._keywords.add(keyword)
                return True
            return False

    def remove(self, keyword: str) -> bool:
        with self._lock:
            if keyword in self._keywords:
                self._keywords.discard(keyword)
                return True
            return False

    def list(self):
        with self._lock:
            return list(self._keywords)

    def snapshot(self):
        with self._lock:
            return tuple(self._keywords)

    def clear(self):
        with self._lock:
            self._keywords.clear()
