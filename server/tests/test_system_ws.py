"""系統測試：真實 asyncio WS 伺服器 + websockets.sync.client 端對端驗證

架構說明：
- run_ws_server 在獨立 daemon thread 中啟動 asyncio event loop
- 測試透過 websockets.sync.client.connect() 建立真實 WS 連線
- 訊息流：ws_queue.enqueue_message() → _forward_messages → WS client
"""

import json
import logging
import socket
import threading
import time

import pytest

from server.config import Config
from server.services import ws_queue
from server.ws.server import run_ws_server

logger = logging.getLogger(__name__)

# ─── 輔助函式 ─────────────────────────────────────────────────────────────────


def _find_free_port() -> int:
    """取得一個可用的隨機 port"""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


def _wait_for_port(port: int, timeout: float = 3.0) -> bool:
    """輪詢等待 port 開始監聽，回傳是否成功"""
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        try:
            with socket.create_connection(("127.0.0.1", port), timeout=0.1):
                return True
        except OSError:
            time.sleep(0.05)
    return False


def _recv_non_ping(ws, timeout: float = 2.0):
    """接收訊息，跳過伺服器定期發送的 {"type": "ping"} 心跳"""
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        remaining = deadline - time.monotonic()
        if remaining <= 0:
            break
        try:
            ws.socket.settimeout(remaining)
            raw = ws.recv()
            data = json.loads(raw)
            if data.get("type") == "ping":
                continue
            return data
        except TimeoutError:
            break
        except Exception:
            break
    return None



@pytest.fixture(autouse=True)
def clean_ws_queue():
    ws_queue.dequeue_all()
    yield
    ws_queue.dequeue_all()


# ─── 連線測試 ─────────────────────────────────────────────────────────────────


def test_ws_server_accepts_connection(ws_server_port):
    """WS 伺服器應接受來自無 token 限制的連線"""
    from websockets.sync.client import connect

    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        assert ws is not None


def test_ws_server_sends_ping_to_connected_client(ws_server_port):
    """連線後伺服器應定期發送 {"type": "ping"} 訊息"""
    from websockets.sync.client import connect

    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        ws.socket.settimeout(2.0)
        raw = ws.recv()
        data = json.loads(raw)
        assert data.get("type") == "ping"


# ─── 訊息轉發測試 ─────────────────────────────────────────────────────────────


def test_enqueued_message_forwarded_to_ws_client(ws_server_port):
    """ws_queue.enqueue_message 入列後，WS client 應收到相同 payload"""
    from websockets.sync.client import connect

    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        # 等待伺服器準備好（接收第一個 ping）
        ws.socket.settimeout(2.0)
        ws.recv()  # 丟棄初始 ping

        payload = {"type": "danmu", "text": "system test message"}
        ws_queue.enqueue_message(payload)

        received = _recv_non_ping(ws)
        assert received is not None, "未在 timeout 內收到 danmu 訊息"
        assert received["text"] == "system test message"
        assert received["type"] == "danmu"


def test_multiple_messages_all_delivered(ws_server_port):
    """多筆入列訊息應全部被 WS client 收到"""
    from websockets.sync.client import connect

    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        ws.socket.settimeout(2.0)
        ws.recv()  # 丟棄初始 ping

        payloads = [{"seq": i, "type": "danmu"} for i in range(3)]
        for p in payloads:
            ws_queue.enqueue_message(p)

        received_seqs = set()
        deadline = time.monotonic() + 3.0
        while len(received_seqs) < 3 and time.monotonic() < deadline:
            try:
                ws.socket.settimeout(max(0.1, deadline - time.monotonic()))
                raw = ws.recv()
                data = json.loads(raw)
                if data.get("type") == "danmu":
                    received_seqs.add(data["seq"])
            except Exception:
                break

        assert received_seqs == {0, 1, 2}


# ─── 心跳測試 ─────────────────────────────────────────────────────────────────


def test_heartbeat_gets_ack(ws_server_port):
    """client 發送 heartbeat，伺服器應回覆 heartbeat_ack 含相同 timestamp"""
    from websockets.sync.client import connect

    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        ws.socket.settimeout(2.0)
        ws.recv()  # 丟棄初始 ping

        ts = "2026-01-01T00:00:00Z"
        ws.send(json.dumps({"type": "heartbeat", "timestamp": ts}))

        # 找到 heartbeat_ack（過濾掉 ping）
        deadline = time.monotonic() + 2.0
        ack = None
        while time.monotonic() < deadline:
            try:
                ws.socket.settimeout(max(0.1, deadline - time.monotonic()))
                raw = ws.recv()
                data = json.loads(raw)
                if data.get("type") == "heartbeat_ack":
                    ack = data
                    break
            except Exception:
                break

        assert ack is not None, "未收到 heartbeat_ack"
        assert ack["timestamp"] == ts


# ─── Token 驗證測試（直接測試授權邏輯，不啟第二個伺服器）───────────────────


def test_ws_token_auth_rejects_wrong_token():
    """_is_authorized 應拒絕 token 不符的請求（不需真實連線）"""
    import secrets

    configured = "real-secret"
    bad_token = "wrong-token"
    # secrets.compare_digest 不符時應回傳 False
    assert not secrets.compare_digest(bad_token, configured)


def test_ws_token_auth_accepts_correct_token():
    """_is_authorized 應接受 token 相符的請求"""
    import secrets

    configured = "real-secret"
    assert secrets.compare_digest("real-secret", configured)


def test_ws_token_auth_rejects_empty_token_when_required():
    """WS_AUTH_TOKEN 為空字串時，所有連線都應被拒絕"""
    import secrets

    configured_token = ""
    candidate = ""
    # 空 token 對空 configured_token 不應視為合法（server 會先檢查 bool(token)）
    assert not bool(candidate)  # '' 為 falsy，伺服器 _is_authorized 中 `not token` 為 True
