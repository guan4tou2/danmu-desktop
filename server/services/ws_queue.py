import logging
import threading
from collections import deque
from typing import Any, Dict, List

_MAX_QUEUE_SIZE = 500  # 防止高負載下無限增長
_queue: deque = deque(maxlen=_MAX_QUEUE_SIZE)
_lock = threading.Lock()

logger = logging.getLogger(__name__)


def enqueue_message(data: Dict[str, Any]) -> None:
    with _lock:
        if len(_queue) >= _MAX_QUEUE_SIZE:
            logger.warning("Queue full (%d items); oldest message dropped.", _MAX_QUEUE_SIZE)
        _queue.append(data)


def dequeue_all() -> List[Dict[str, Any]]:
    with _lock:
        messages = list(_queue)
        _queue.clear()
    return messages
