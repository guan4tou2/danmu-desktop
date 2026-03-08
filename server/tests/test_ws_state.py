"""ws_state.py 單元測試（in-memory 狀態）"""

import threading
import time

import pytest

import server.services.ws_state as ws_state_mod
from server.services.ws_state import (
    get_ws_client_count,
    read_state,
    update_ws_client_count,
    write_state,
)


@pytest.fixture(autouse=True)
def reset_state():
    ws_state_mod.write_state({"ws_clients": 0, "updated_at": 0.0})
    yield
    ws_state_mod.write_state({"ws_clients": 0, "updated_at": 0.0})


def test_write_then_read_roundtrip():
    write_state({"ws_clients": 5, "updated_at": 123.0})
    result = read_state()
    assert result["ws_clients"] == 5
    assert result["updated_at"] == 123.0


def test_update_then_get_count():
    update_ws_client_count(3)
    assert get_ws_client_count() == 3


def test_update_to_zero():
    update_ws_client_count(5)
    update_ws_client_count(0)
    assert get_ws_client_count() == 0


def test_negative_count_clamped_to_zero():
    update_ws_client_count(-1)
    assert get_ws_client_count() == 0


def test_large_count_stored_correctly():
    update_ws_client_count(999)
    assert get_ws_client_count() == 999


def test_get_count_returns_int():
    update_ws_client_count(2)
    assert isinstance(get_ws_client_count(), int)


def test_updated_at_is_recent():
    before = time.time()
    update_ws_client_count(1)
    after = time.time()
    state = read_state()
    assert before <= state["updated_at"] <= after


def test_concurrent_updates_dont_corrupt_state():
    errors = []

    def worker(n):
        try:
            update_ws_client_count(n)
        except Exception as exc:  # pragma: no cover
            errors.append(exc)

    threads = [threading.Thread(target=worker, args=(i,)) for i in range(10)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()

    assert not errors
    count = get_ws_client_count()
    assert isinstance(count, int)
    assert 0 <= count <= 9


def test_concurrent_reads_are_consistent():
    update_ws_client_count(4)
    errors = []

    def reader():
        try:
            get_ws_client_count()
        except Exception as exc:  # pragma: no cover
            errors.append(exc)

    threads = [threading.Thread(target=reader) for _ in range(10)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()

    assert not errors
