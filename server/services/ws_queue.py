import fcntl
import json
import os
import tempfile
from contextlib import contextmanager
from typing import Any, Dict, List

QUEUE_FILE = os.path.join(tempfile.gettempdir(), "danmu_ws_queue.jsonl")


@contextmanager
def _locked_file(mode: str):
    os.makedirs(os.path.dirname(QUEUE_FILE), exist_ok=True)
    with open(QUEUE_FILE, mode) as fp:
        fcntl.flock(fp.fileno(), fcntl.LOCK_EX)
        try:
            yield fp
        finally:
            fcntl.flock(fp.fileno(), fcntl.LOCK_UN)


def enqueue_message(data: Dict[str, Any]) -> None:
    with _locked_file("a") as fp:
        fp.write(json.dumps(data))
        fp.write("\n")


def dequeue_all() -> List[Dict[str, Any]]:
    if not os.path.exists(QUEUE_FILE):
        return []
    with _locked_file("r+") as fp:
        fp.seek(0)
        lines = fp.readlines()
        fp.seek(0)
        fp.truncate()
    messages = []
    for line in lines:
        line = line.strip()
        if not line:
            continue
        try:
            messages.append(json.loads(line))
        except json.JSONDecodeError:
            continue
    return messages


