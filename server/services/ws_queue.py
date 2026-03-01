import logging
import threading
from typing import Any, Dict, List

_queue: List[Dict[str, Any]] = []
_lock = threading.Lock()
_MAX_QUEUE_SIZE = 500  # 防止高負載下無限增長

logger = logging.getLogger(__name__)


def enqueue_message(data: Dict[str, Any]) -> None:
    with _lock:
        if len(_queue) >= _MAX_QUEUE_SIZE:
            # 丟棄最舊的訊息，確保新訊息優先處理
            _queue.pop(0)
            logger.warning("Queue full (%d items); oldest message dropped.", _MAX_QUEUE_SIZE)
        _queue.append(data)


def dequeue_all() -> List[Dict[str, Any]]:
    with _lock:
        messages = list(_queue)
        _queue.clear()
    return messages
