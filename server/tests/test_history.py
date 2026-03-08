"""DanmuHistory 服務直接單元測試"""

from datetime import datetime, timedelta, timezone

from server.services.history import DanmuHistory


def _h(**kw):
    return DanmuHistory(
        max_records=kw.get("max_records", 1000),
        auto_cleanup_hours=kw.get("auto_cleanup_hours", 24),
    )


# ─── add / get_recent ────────────────────────────────────────────────────────


def test_add_and_get_recent():
    h = _h()
    h.add({"text": "hello", "color": "ffffff", "size": 50, "speed": 4, "opacity": 70})
    records = h.get_recent(hours=1)
    assert len(records) == 1
    assert records[0]["text"] == "hello"


def test_get_recent_returns_all_in_window():
    h = _h()
    for i in range(5):
        h.add({"text": f"msg{i}"})
    records = h.get_recent(hours=1)
    assert len(records) == 5


def test_get_recent_empty_history():
    h = _h()
    assert h.get_recent(hours=24) == []


# ─── get_records 時間過濾 ──────────────────────────────────────────────────


def test_get_records_excludes_before_start_time():
    h = _h()
    h.add({"text": "now"})
    future_start = datetime.now(timezone.utc) + timedelta(hours=1)
    records = h.get_records(start_time=future_start)
    assert len(records) == 0


def test_get_records_excludes_after_end_time():
    h = _h()
    h.add({"text": "now"})
    past_end = datetime.now(timezone.utc) - timedelta(hours=1)
    records = h.get_records(end_time=past_end)
    assert len(records) == 0


def test_get_records_limit():
    h = _h()
    for i in range(10):
        h.add({"text": f"msg{i}"})
    records = h.get_records(limit=3)
    assert len(records) == 3


def test_get_records_sorted_newest_first():
    """結果依 timestamp 倒序，最新在前。"""
    h = _h()
    # 先 add 的 timestamp 較小（較舊），後 add 的較大（較新）
    for i in range(3):
        h.add({"text": f"msg{i}"})
    records = h.get_records()
    timestamps = [r["timestamp"] for r in records]
    assert timestamps == sorted(timestamps, reverse=True)


# ─── get_stats ───────────────────────────────────────────────────────────────


def test_get_stats_empty():
    h = _h()
    stats = h.get_stats()
    assert stats["total"] == 0
    assert stats["oldest"] is None
    assert stats["newest"] is None
    assert stats["last_24h"] == 0


def test_get_stats_with_records():
    h = _h()
    h.add({"text": "first"})
    h.add({"text": "second"})
    stats = h.get_stats()
    assert stats["total"] == 2
    assert stats["last_24h"] == 2
    assert stats["oldest"] is not None
    assert stats["newest"] is not None


# ─── clear ───────────────────────────────────────────────────────────────────


def test_clear_empties_history():
    h = _h()
    h.add({"text": "to be cleared"})
    assert h.get_stats()["total"] == 1
    h.clear()
    assert h.get_stats()["total"] == 0
    assert h.get_recent(hours=1) == []


# ─── maxlen ──────────────────────────────────────────────────────────────────


def test_maxlen_cap_drops_oldest():
    h = _h(max_records=3)
    for i in range(5):
        h.add({"text": f"msg{i}"})
    # deque maxlen 保留最後 3 筆
    assert h.get_stats()["total"] == 3
    texts = {r["text"] for r in h.get_recent(hours=1)}
    assert "msg4" in texts
    assert "msg3" in texts
    assert "msg2" in texts
    assert "msg0" not in texts


# ─── record fields ───────────────────────────────────────────────────────────


def test_record_stores_all_fields():
    h = _h()
    h.add(
        {
            "text": "hello",
            "color": "ff0000",
            "size": 60,
            "speed": 5,
            "opacity": 80,
            "isImage": False,
            "fontInfo": {"name": "NotoSansTC"},
            "clientIp": "127.0.0.1",
            "fingerprint": "fp123",
        }
    )
    r = h.get_recent(hours=1)[0]
    assert r["text"] == "hello"
    assert r["color"] == "ff0000"
    assert r["size"] == 60
    assert r["speed"] == 5
    assert r["opacity"] == 80
    assert r["isImage"] is False
    assert r["clientIp"] == "127.0.0.1"
    assert r["fingerprint"] == "fp123"
    assert "timestamp" in r


def test_record_missing_fields_use_defaults():
    h = _h()
    h.add({})
    r = h.get_recent(hours=1)[0]
    assert r["text"] == ""
    assert r["isImage"] is False
    assert r["clientIp"] is None
    assert r["fingerprint"] is None
