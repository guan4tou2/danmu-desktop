import threading
from typing import Any, Dict, List

_queue: List[Dict[str, Any]] = []
_lock = threading.Lock()


def enqueue_message(data: Dict[str, Any]) -> None:
    with _lock:
        _queue.append(data)


def dequeue_all() -> List[Dict[str, Any]]:
    with _lock:
        messages = list(_queue)
        _queue.clear()
    return messages
