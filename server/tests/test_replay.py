"""回放服務測試：ReplayService 核心邏輯 + Admin API 端點。"""

import time

from server.services import ws_queue
from server.services.replay import ReplayService, replay_service
from server.services.ws_state import update_ws_client_count

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------


def _make_records(count, gap_seconds=1.0, base="2024-01-01T00:00:00Z"):
    """產生 count 筆歷史記錄，每筆間隔 gap_seconds 秒。"""
    from datetime import datetime, timedelta, timezone

    base_dt = datetime(2024, 1, 1, tzinfo=timezone.utc)
    records = []
    for i in range(count):
        ts = base_dt + timedelta(seconds=i * gap_seconds)
        records.append(
            {
                "timestamp": ts.isoformat(),
                "text": f"msg-{i}",
                "color": "FFFFFF",
                "size": 50,
                "speed": 5,
                "opacity": 100,
            }
        )
    return records


def login(client):
    return client.post("/login", data={"password": "test"}, follow_redirects=True)


def csrf_token(client):
    login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def authed_post(client, url, payload=None):
    token = csrf_token(client)
    return client.post(url, json=payload or {}, headers={"X-CSRF-Token": token})


# ---------------------------------------------------------------------------
# ReplayService 單元測試
# ---------------------------------------------------------------------------


class TestReplayService:
    """ReplayService 核心功能。"""

    def setup_method(self):
        """每個測試前清理狀態。"""
        self.svc = ReplayService()
        ws_queue.dequeue_all()

    def teardown_method(self):
        """每個測試後確保停止回放。"""
        self.svc.stop()

    def test_replay_sends_messages_to_ws_queue(self):
        """建立 3 筆記錄（間隔 1s），10x 速度回放，驗證 ws_queue 收到全部 3 筆。"""
        records = _make_records(3, gap_seconds=1.0)
        self.svc.start(records, speed_multiplier=10.0)
        time.sleep(2.0)
        messages = ws_queue.dequeue_all()
        assert len(messages) == 3
        assert [m["text"] for m in messages] == ["msg-0", "msg-1", "msg-2"]

    def test_replay_respects_time_intervals(self):
        """建立 2 筆記錄（間隔 2s），1x 速度回放，1s 後應只發送第 1 筆。"""
        records = _make_records(2, gap_seconds=2.0)
        self.svc.start(records, speed_multiplier=1.0)
        time.sleep(1.0)
        messages = ws_queue.dequeue_all()
        assert len(messages) == 1
        assert messages[0]["text"] == "msg-0"
        self.svc.stop()

    def test_replay_stop_cancels(self):
        """啟動 5 筆記錄（間隔 1s, 1x），0.5s 後停止，驗證未全部發送。"""
        records = _make_records(5, gap_seconds=1.0)
        self.svc.start(records, speed_multiplier=1.0)
        time.sleep(0.5)
        self.svc.stop()
        messages = ws_queue.dequeue_all()
        assert len(messages) < 5

    def test_replay_pause_resume(self):
        """啟動後立即暫停，等 1s 驗證沒新訊息；繼續後驗證訊息繼續發送。"""
        records = _make_records(3, gap_seconds=0.3)
        self.svc.start(records, speed_multiplier=10.0)
        time.sleep(0.15)
        sent_before_pause = len(ws_queue.dequeue_all())

        self.svc.pause()
        time.sleep(1.0)
        sent_during_pause = len(ws_queue.dequeue_all())
        assert sent_during_pause == 0, "暫停期間不應有新訊息"

        self.svc.resume()
        time.sleep(1.0)
        sent_after_resume = ws_queue.dequeue_all()
        total = sent_before_pause + sent_during_pause + len(sent_after_resume)
        assert total >= 2, "繼續後應有訊息發送"

    def test_replay_get_status(self):
        """檢查各狀態：playing / paused / stopped。"""
        records = _make_records(5, gap_seconds=1.0)

        # 初始狀態
        assert self.svc.get_status()["state"] == "stopped"

        # 播放中
        self.svc.start(records, speed_multiplier=1.0)
        time.sleep(0.1)
        assert self.svc.get_status()["state"] == "playing"

        # 暫停
        self.svc.pause()
        time.sleep(0.1)
        assert self.svc.get_status()["state"] == "paused"

        # 停止
        self.svc.stop()
        assert self.svc.get_status()["state"] == "stopped"

    def test_replay_build_message_format(self):
        """驗證 _build_message 產出正確的 WS 訊息格式。"""
        record = {
            "timestamp": "2024-01-01T00:00:00Z",
            "text": "hello",
            "color": "FF0000",
            "size": 30,
            "speed": 3,
            "opacity": 80,
            "isImage": False,
        }
        msg = ReplayService._build_message(record)
        assert msg["text"] == "hello"
        assert msg["color"] == "FF0000"
        assert msg["size"] == 30
        assert msg["speed"] == 3
        assert msg["opacity"] == 80
        assert msg["isImage"] is False
        assert "fontInfo" in msg
        assert msg["fontInfo"]["name"] == "NotoSansTC"
        assert "textStyles" in msg
        assert msg["textStyles"]["textStroke"] is True
        assert "displayArea" in msg
        assert msg["displayArea"]["top"] == 0
        assert msg["effectCss"] is None


# ---------------------------------------------------------------------------
# Admin API 端點測試
# ---------------------------------------------------------------------------


class TestReplayAPI:
    """回放相關 Admin API 端點。"""

    def test_replay_api_requires_login(self, client):
        """未登入 POST /admin/replay → 403（CSRF 先攔截）。"""
        res = client.post(
            "/admin/replay",
            json={"records": [{"text": "x", "timestamp": "2024-01-01T00:00:00Z"}]},
        )
        assert res.status_code == 403

    def test_replay_api_no_records(self, client):
        """POST /admin/replay 空記錄 → 400。"""
        update_ws_client_count(1)
        res = authed_post(client, "/admin/replay", {"records": []})
        assert res.status_code == 400
        update_ws_client_count(0)

    def test_replay_api_no_overlay(self, client):
        """無 WS overlay 連線時 POST /admin/replay → 503。"""
        update_ws_client_count(0)
        records = _make_records(1)
        res = authed_post(
            client,
            "/admin/replay",
            {"records": records, "speedMultiplier": 1.0},
        )
        assert res.status_code == 503

    def test_replay_api_stop(self, client):
        """POST /admin/replay/stop → 200。"""
        res = authed_post(client, "/admin/replay/stop")
        assert res.status_code == 200

    def test_replay_api_start_success(self, client):
        """有 overlay 連線時，啟動回放 → 200 + replayId。"""
        update_ws_client_count(1)
        records = _make_records(2)
        res = authed_post(
            client,
            "/admin/replay",
            {"records": records, "speedMultiplier": 5.0},
        )
        assert res.status_code == 200
        data = res.get_json()
        assert "replayId" in data
        assert data["count"] == 2
        # 清理
        replay_service.stop()
        update_ws_client_count(0)
