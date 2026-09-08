import logging
import threading
from collections import deque
from typing import Any, Dict, List

_MAX_QUEUE_SIZE = 500  # 防止高負載下無限增長
_queue: deque = deque(maxlen=_MAX_QUEUE_SIZE)
_lock = threading.Lock()

logger = logging.getLogger(__name__)


# 這個佇列的出口是**公開的** overlay WS：每個觀眾端與每個 OBS browser source
# 都連得到它。識別資訊不能從這裡出去。
#
# 收口放在這裡而不是各呼叫端，是因為 enqueue_message 有七個呼叫端
# （widgets / poll / replay / scheduler / messaging），只要有一個忘了剝就是外洩；
# 而「這個 payload 要送給公開 overlay」這件事只有這一層知道。
#
# 2026-09-08：原本剝指紋的地方在 `api.py` 的 `data.pop("fingerprint")`，位置太早
# ——admin 專用的 live_feed_buffer 吃的是同一個已經被 pop 過的 dict，於是訊息流
# 每一列的「封鎖此人」按鈕（gate 在 `if (d.fingerprint)`）從來沒有渲染出來過。
_OVERLAY_PRIVATE_FIELDS = ("fingerprint", "clientIp")


def enqueue_message(data: Dict[str, Any]) -> None:
    if isinstance(data, dict) and any(k in data for k in _OVERLAY_PRIVATE_FIELDS):
        # 複製而不是就地刪：呼叫端（messaging._raw_forward）在這之後還要拿
        # 同一個 dict 餵 live-feed buffer，那邊需要指紋。
        data = {k: v for k, v in data.items() if k not in _OVERLAY_PRIVATE_FIELDS}
    with _lock:
        if len(_queue) >= _MAX_QUEUE_SIZE:
            logger.warning("Queue full (%d items); oldest message dropped.", _MAX_QUEUE_SIZE)
        _queue.append(data)


def dequeue_all() -> List[Dict[str, Any]]:
    with _lock:
        messages = list(_queue)
        _queue.clear()
    return messages
