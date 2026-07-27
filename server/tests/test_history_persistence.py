"""彈幕歷史落地（runtime/danmu_history.jsonl）。

在此之前記錄只活在記憶體 deque 裡，重啟就全沒了 —— 場次封存
(sessions_archive.jsonl) 也只寫 metadata，不含訊息本身。
"""

import json

import pytest

from server.services import history as history_service
from server.services.history import DanmuHistory


@pytest.fixture()
def store(tmp_path, monkeypatch):
    """指向 tmp_path 的落地路徑，並回傳一個工廠讓測試能模擬「重啟」。"""
    hist_file = tmp_path / "danmu_history.jsonl"
    backup_file = tmp_path / "danmu_history.jsonl.1"
    monkeypatch.setattr(history_service, "HISTORY_FILE", hist_file)
    monkeypatch.setattr(history_service, "HISTORY_BACKUP_FILE", backup_file)

    def make(**kwargs):
        kwargs.setdefault("max_records", 100)
        return DanmuHistory(**kwargs)

    return make, hist_file, backup_file


def _danmu(text, ip="203.0.113.7", fp="fp_abc123"):
    return {"text": text, "color": "#fff", "size": 30, "clientIp": ip, "fingerprint": fp}


def test_records_are_appended_to_disk(store):
    make, hist_file, _ = store
    h = make()
    h.add(_danmu("hello"))
    h.add(_danmu("world"))

    lines = hist_file.read_text(encoding="utf-8").strip().split("\n")
    assert len(lines) == 2
    assert [json.loads(ln)["text"] for ln in lines] == ["hello", "world"]


def test_records_survive_a_restart(store):
    """核心行為：新的 instance 要能把先前的記錄讀回來。"""
    make, _, _ = store
    first = make()
    for i in range(5):
        first.add(_danmu(f"msg-{i}"))

    restarted = make()
    texts = [r["text"] for r in restarted.get_records(limit=100)]
    assert sorted(texts) == sorted(f"msg-{i}" for i in range(5))


def test_client_ip_is_not_persisted_by_default(store):
    """IP 留在記憶體給 admin 用，但不寫進磁碟。"""
    make, hist_file, _ = store
    h = make()
    h.add(_danmu("hi", ip="198.51.100.42"))

    on_disk = json.loads(hist_file.read_text(encoding="utf-8").strip())
    assert "clientIp" not in on_disk
    assert on_disk["fingerprint"] == "fp_abc123", "fingerprint 要留著（黑名單/觀眾追蹤靠它）"
    assert "198.51.100.42" not in hist_file.read_text(encoding="utf-8")

    # 記憶體裡仍然看得到，admin 行為不變。
    assert h.get_records(limit=10)[0]["clientIp"] == "198.51.100.42"


def test_client_ip_persisted_when_explicitly_enabled(store):
    make, hist_file, _ = store
    h = make(persist_ip=True)
    h.add(_danmu("hi", ip="198.51.100.42"))
    assert json.loads(hist_file.read_text(encoding="utf-8").strip())["clientIp"] == "198.51.100.42"


def test_clear_removes_the_file_too(store):
    """UI 說「無法復原」，所以磁碟也要清 —— 否則重啟後記錄會冒回來。"""
    make, hist_file, backup_file = store
    h = make()
    h.add(_danmu("bye"))
    backup_file.write_text('{"text": "old"}\n', encoding="utf-8")
    assert hist_file.exists()

    h.clear()
    assert not hist_file.exists()
    assert not backup_file.exists(), "備份檔留著的話，rotation 後的舊記錄還在"
    assert make().get_records(limit=10) == []


def test_file_rotates_at_the_size_cap(store):
    make, hist_file, backup_file = store
    h = make(max_file_bytes=200)
    for i in range(40):
        h.add(_danmu(f"padding-message-{i}"))

    assert backup_file.exists(), "超過上限應該轉存成 .1"
    assert hist_file.stat().st_size < 4000, "rotate 之後主檔應該重新變小"


def test_unreadable_lines_are_skipped_not_fatal(store):
    """一行壞掉不該讓整個服務起不來。"""
    make, hist_file, _ = store
    hist_file.write_text(
        '{"text": "good-1", "timestamp": "2026-07-28T00:00:00+00:00"}\n'
        "{ this is not json\n"
        '{"text": "good-2", "timestamp": "2026-07-28T00:00:01+00:00"}\n',
        encoding="utf-8",
    )
    texts = [r["text"] for r in make().get_records(limit=10)]
    assert sorted(texts) == ["good-1", "good-2"]


def test_persist_disabled_writes_nothing(store):
    make, hist_file, _ = store
    h = make(persist=False)
    h.add(_danmu("nope"))
    assert not hist_file.exists()
    assert len(h.get_records(limit=10)) == 1, "關閉落地不影響記憶體行為"


def test_write_failure_degrades_to_memory_only(store, monkeypatch, caplog):
    """磁碟寫不進去時，/fire 不能因此失敗。"""
    make, hist_file, _ = store
    h = make()

    def _boom(*args, **kwargs):
        raise OSError("disk full")

    monkeypatch.setattr("pathlib.Path.open", _boom)
    h.add(_danmu("still-works"))  # 不應該拋出

    assert len(h.get_records(limit=10)) == 1


# ─── 端對端：真的走 HTTP /fire ────────────────────────────────────────────────


def test_fire_endpoint_persists_to_disk(client, tmp_path, monkeypatch):
    """POST /fire 之後，記錄要真的落在檔案裡。

    前面的測試都直接操作 DanmuHistory；這條走完整條路徑（HTTP → 過濾 → 轉發
    → _record_history_if_enabled），確認落地確實掛在真實流程上、而不只是在
    單元測試裡可用。
    """
    from server.services.ws_state import update_ws_client_count

    hist_file = tmp_path / "e2e_history.jsonl"
    monkeypatch.setattr(history_service, "HISTORY_FILE", hist_file)
    monkeypatch.setattr(history_service, "HISTORY_BACKUP_FILE", tmp_path / "e2e_history.jsonl.1")

    # 沒有 overlay 連線時 /fire 會回 503，訊息也就不會被記錄 —— 記錄只發生在
    # forward 成功（sent / queued）之後。
    update_ws_client_count(1)

    resp = client.post("/fire", json={"text": "persisted through http"})
    assert resp.status_code == 200

    assert hist_file.exists(), "/fire 成功之後應該要有落地檔"
    record = json.loads(hist_file.read_text(encoding="utf-8").strip().split("\n")[-1])
    assert record["text"] == "persisted through http"
    assert "clientIp" not in record, "預設不落地 IP"
