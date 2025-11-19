import fcntl
import json
import os
import tempfile
import time
from contextlib import contextmanager
from typing import Any, Dict

STATE_FILE = os.path.join(tempfile.gettempdir(), "danmu_ws_state.json")


def _ensure_state_file() -> None:
    if not os.path.exists(STATE_FILE):
        default_state = {"ws_clients": 0, "updated_at": time.time()}
        with open(STATE_FILE, "w") as fp:
            json.dump(default_state, fp)


@contextmanager
def _locked_file(mode: str):
    _ensure_state_file()
    with open(STATE_FILE, mode) as fp:
        lock_type = (
            fcntl.LOCK_EX
            if "w" in mode or "a" in mode or "+" in mode
            else fcntl.LOCK_SH
        )
        fcntl.flock(fp.fileno(), lock_type)
        try:
            yield fp
        finally:
            fcntl.flock(fp.fileno(), fcntl.LOCK_UN)


def read_state() -> Dict[str, Any]:
    try:
        with _locked_file("r") as fp:
            contents = fp.read().strip() or "{}"
            return json.loads(contents)
    except (json.JSONDecodeError, FileNotFoundError):
        return {"ws_clients": 0, "updated_at": time.time()}


def write_state(state: Dict[str, Any]) -> None:
    with _locked_file("w") as fp:
        fp.seek(0)
        json.dump(state, fp)
        fp.truncate()


def update_ws_client_count(count: int) -> None:
    state = read_state()
    state["ws_clients"] = max(0, count)
    state["updated_at"] = time.time()
    write_state(state)


def get_ws_client_count() -> int:
    state = read_state()
    return int(state.get("ws_clients", 0))
