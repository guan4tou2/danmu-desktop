"""彈幕歷史落地（runtime/danmu_history.jsonl）。

在此之前記錄只活在記憶體 deque 裡，重啟就全沒了 —— 場次封存
(sessions_archive.jsonl) 也只寫 metadata，不含訊息本身。
"""

import json
import pathlib

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


@pytest.mark.parametrize(
    "bad_line",
    [
        '"just a string"',  # 合法 JSON，但不是 dict
        "[1, 2, 3]",  # 合法 JSON，但不是 dict
        "null",
        '{"text": "no timestamp at all"}',  # dict 但缺 timestamp
        '{"text": "bad ts type", "timestamp": 12345}',  # timestamp 不是字串
        '{"text": "unparseable ts", "timestamp": "not-a-date"}',
    ],
)
def test_structurally_invalid_records_are_rejected(store, bad_line):
    """語法合法但結構不對的行也要擋掉，不能只擋 JSON 語法錯誤。

    每一條讀取路徑都無條件用 record["timestamp"]：get_records() 拿它排序、
    get_stats() 取 _records[0]["timestamp"]、_maybe_cleanup() 也解析它。放一筆
    形狀不對的進 deque，等於讓歷史的讀取 / 統計 / 清理全部拋例外，直到重啟。
    """
    make, hist_file, _ = store
    hist_file.write_text(
        f'{{"text": "good", "timestamp": "2026-07-28T00:00:00+00:00"}}\n{bad_line}\n',
        encoding="utf-8",
    )
    h = make()

    # 壞的那筆不該進來，而且三條讀取路徑都要還能跑。
    assert [r["text"] for r in h.get_records(limit=10)] == ["good"]
    assert h.get_stats()["total"] == 1
    h.last_cleanup = 0  # 強制觸發清理路徑
    h._maybe_cleanup()


def test_clear_waits_for_an_in_flight_append(store, monkeypatch):
    """clear() 必須等進行中的落地寫完，否則被清掉的記錄會重新出現在檔案裡。

    落地刻意在 self._lock 之外做（不讓磁碟 I/O 擋住其他送出中的彈幕），所以
    add() 有一段「記憶體已寫入、檔案還沒寫」的空窗。clear() 若在這段空窗中執行，
    刪完檔之後那個 in-flight 的 append 會把檔案重建起來 —— 記憶體是空的、磁碟卻
    有一筆，下次重啟它就復活了，UI 承諾的「此動作無法復原」隨之破功。

    這裡用一個閘門把 append 卡在開檔之前，藉此把那段空窗撐開到可以觀測：
    有磁碟鎖時 clear() 會被擋住直到 append 完成；沒有的話它會直接穿過去。
    """
    import threading

    make, hist_file, _ = store
    h = make()

    append_at_gate = threading.Event()
    release_append = threading.Event()
    real_open = pathlib.Path.open

    def gated_open(self, mode="r", *args, **kwargs):
        if self == hist_file and "a" in mode:
            append_at_gate.set()
            release_append.wait(timeout=5)
        return real_open(self, mode, *args, **kwargs)

    monkeypatch.setattr(pathlib.Path, "open", gated_open)

    adder = threading.Thread(target=lambda: h.add(_danmu("in-flight")))
    adder.start()
    assert append_at_gate.wait(timeout=5), "append 沒有走到開檔這一步"

    clear_returned = threading.Event()

    def do_clear():
        h.clear()
        clear_returned.set()

    clearer = threading.Thread(target=do_clear)
    clearer.start()
    # 給 clear() 足夠時間走到磁碟鎖；有鎖的話它會停在這裡。
    blocked_by_lock = not clear_returned.wait(timeout=0.5)

    release_append.set()
    adder.join(timeout=5)
    clearer.join(timeout=5)

    assert blocked_by_lock, "clear() 沒有等待進行中的 append —— 磁碟操作沒有互斥"
    leftover = hist_file.read_text(encoding="utf-8").strip() if hist_file.exists() else ""
    assert leftover == "", f"clear() 之後檔案仍有內容：{leftover!r}"


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

    # TestConfig 預設關閉落地（見 conftest），這條測試就是要驗落地，所以明確
    # 打開全域 instance 的開關。
    monkeypatch.setattr(history_service.danmu_history, "persist", True)

    # 全域 danmu_history 是 app 啟動時就建好的，此刻 _records 可能已經有同
    # session 其他測試留下的內容。換完路徑後先清一次，讓這條測試從空狀態開始 ——
    # 否則斷言到的可能是別人寫的資料。
    history_service.danmu_history.clear()

    # 沒有 overlay 連線時 /fire 會回 503，訊息也就不會被記錄 —— 記錄只發生在
    # forward 成功（sent / queued）之後。
    update_ws_client_count(1)

    resp = client.post("/fire", json={"text": "persisted through http"})
    assert resp.status_code == 200

    assert hist_file.exists(), "/fire 成功之後應該要有落地檔"
    lines = hist_file.read_text(encoding="utf-8").strip().split("\n")
    assert len(lines) == 1, f"檔案應該只有這條測試寫的那一筆，實際 {len(lines)} 筆"
    record = json.loads(lines[-1])
    assert record["text"] == "persisted through http"
    assert "clientIp" not in record, "預設不落地 IP"
