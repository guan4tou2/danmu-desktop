"""ws_queue 模組直接單元測試"""

import threading

import pytest

from server.services import ws_queue


@pytest.fixture(autouse=True)
def clean_queue():
    ws_queue.dequeue_all()
    yield
    ws_queue.dequeue_all()


# ─── 基本 enqueue / dequeue ───────────────────────────────────────────────────


def test_enqueue_then_dequeue():
    ws_queue.enqueue_message({"text": "hello"})
    messages = ws_queue.dequeue_all()
    assert len(messages) == 1
    assert messages[0]["text"] == "hello"


def test_dequeue_all_clears_queue():
    ws_queue.enqueue_message({"text": "a"})
    ws_queue.dequeue_all()
    assert ws_queue.dequeue_all() == []


def test_dequeue_empty_returns_empty_list():
    assert ws_queue.dequeue_all() == []


def test_enqueue_multiple_preserves_order():
    for i in range(5):
        ws_queue.enqueue_message({"seq": i})
    messages = ws_queue.dequeue_all()
    assert [m["seq"] for m in messages] == list(range(5))


def test_dequeue_returns_copy_not_live_reference():
    ws_queue.enqueue_message({"x": 1})
    result = ws_queue.dequeue_all()
    result.append({"x": 99})  # 修改回傳值不應影響佇列
    assert ws_queue.dequeue_all() == []


# ─── 上限行為 ─────────────────────────────────────────────────────────────────


def test_queue_cap_drops_oldest():
    """超過 _MAX_QUEUE_SIZE 時丟棄最舊的訊息"""
    cap = ws_queue._MAX_QUEUE_SIZE
    for i in range(cap):
        ws_queue.enqueue_message({"seq": i})
    ws_queue.enqueue_message({"seq": cap})  # 觸發丟棄
    messages = ws_queue.dequeue_all()
    assert len(messages) == cap
    assert messages[0]["seq"] == 1  # seq=0 被丟棄
    assert messages[-1]["seq"] == cap


def test_queue_cap_is_exactly_500():
    assert ws_queue._MAX_QUEUE_SIZE == 500


# ─── 執行緒安全 ───────────────────────────────────────────────────────────────


def test_thread_safe_concurrent_enqueue():
    """多執行緒同時 enqueue 不應損壞佇列"""
    errors = []

    def worker(n):
        try:
            for i in range(10):
                ws_queue.enqueue_message({"thread": n, "i": i})
        except Exception as e:
            errors.append(e)

    threads = [threading.Thread(target=worker, args=(t,)) for t in range(10)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()

    assert not errors
    messages = ws_queue.dequeue_all()
    assert len(messages) == 100  # 10 threads × 10 messages each


def test_thread_safe_concurrent_dequeue():
    """多執行緒同時 dequeue_all 不應回傳重複訊息（訊息只出現一次）"""
    for i in range(50):
        ws_queue.enqueue_message({"i": i})

    all_received = []
    lock = threading.Lock()

    def consumer():
        msgs = ws_queue.dequeue_all()
        with lock:
            all_received.extend(msgs)

    threads = [threading.Thread(target=consumer) for _ in range(5)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()

    # 所有 50 筆訊息合計只能出現一次（不重複，不遺漏）
    assert len(all_received) == 50
    seqs = sorted(m["i"] for m in all_received)
    assert seqs == list(range(50))


def test_enqueue_preserves_arbitrary_payload():
    """enqueue 應原封不動保留任意資料結構"""
    payload = {"text": "hi", "nested": {"a": 1}, "list": [1, 2, 3], "flag": True}
    ws_queue.enqueue_message(payload)
    result = ws_queue.dequeue_all()
    assert result[0] == payload


def test_enqueue_overflow_drops_oldest():
    """When queue exceeds max size, oldest messages are dropped."""
    from collections import deque

    ws_queue.dequeue_all()  # drain
    original_max = ws_queue._MAX_QUEUE_SIZE
    original_queue = ws_queue._queue

    try:
        ws_queue._MAX_QUEUE_SIZE = 3
        ws_queue._queue = deque(maxlen=3)

        ws_queue.enqueue_message({"text": "first"})
        ws_queue.enqueue_message({"text": "second"})
        ws_queue.enqueue_message({"text": "third"})
        ws_queue.enqueue_message({"text": "fourth"})

        messages = ws_queue.dequeue_all()
        assert len(messages) == 3
        assert messages[0]["text"] == "second"
        assert messages[2]["text"] == "fourth"
    finally:
        ws_queue._MAX_QUEUE_SIZE = original_max
        ws_queue._queue = original_queue
