import threading
import time
from typing import Any, Dict

_lock = threading.Lock()
_state: Dict[str, Any] = {"ws_clients": 0, "updated_at": time.time()}


def read_state() -> Dict[str, Any]:
    with _lock:
        return dict(_state)


def write_state(state: Dict[str, Any]) -> None:
    with _lock:
        _state["ws_clients"] = int(state.get("ws_clients", 0))
        _state["updated_at"] = float(state.get("updated_at", time.time()))


def update_ws_client_count(count: int) -> None:
    with _lock:
        _state["ws_clients"] = max(0, int(count))
        _state["updated_at"] = time.time()


def get_ws_client_count() -> int:
    with _lock:
        return int(_state.get("ws_clients", 0))
