"""端對端系統測試：伺服器端（HTTP API）← → 客戶端（WS overlay 模擬）

測試管線：
  POST /fire (Flask test client)
      ↓ messaging.forward_to_ws_server()
      ↓ ws_queue.enqueue_message()
      ↓ _forward_messages() (asyncio, 0.5s 週期)
  WebSocket overlay client (websockets.sync.client)

每個測試都使用真實的 asyncio WS 伺服器（conftest session fixture ws_server_port）
以及 Flask test client，共享同一個 in-process ws_queue。
"""

import json
import time

import pytest
from websockets.sync.client import connect

from server import state
from server.services import ws_queue
from server.services.ws_state import get_ws_client_count

# ─── 輔助函式 ─────────────────────────────────────────────────────────────────


def _recv(ws, *, skip_types=("ping",), timeout: float = 2.0):
    """從 WS 接收一則非心跳訊息，回傳 dict 或 None（timeout）"""
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        remaining = max(0.05, deadline - time.monotonic())
        try:
            ws.socket.settimeout(remaining)
            data = json.loads(ws.recv())
            if data.get("type") in skip_types:
                continue
            return data
        except Exception:
            break
    return None


def _recv_type(ws, msg_type: str, timeout: float = 2.0):
    """接收特定 type 的訊息，跳過其他所有訊息"""
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        remaining = max(0.05, deadline - time.monotonic())
        try:
            ws.socket.settimeout(remaining)
            data = json.loads(ws.recv())
            if data.get("type") == msg_type:
                return data
        except Exception:
            break
    return None


def _wait_overlay_registered(minimum: int = 1, timeout: float = 2.0) -> bool:
    """等待 WS 伺服器完成 register()，確認 ws_client_count >= minimum"""
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        if get_ws_client_count() >= minimum:
            return True
        time.sleep(0.05)
    return False


# ─── Fixture ──────────────────────────────────────────────────────────────────


@pytest.fixture(autouse=True)
def clean_queue():
    ws_queue.dequeue_all()
    yield
    ws_queue.dequeue_all()


def _login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess.get("csrf_token", "")


# ─── 基本 fire → overlay 接收 ──────────────────────────────────────────────────


def test_fire_message_reaches_overlay(client, ws_server_port):
    """POST /fire 後，overlay WS client 應收到包含相同 text 的 payload"""
    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        assert _wait_overlay_registered(), "WS server did not register client in time"

        resp = client.post("/fire", json={"text": "hello overlay"})
        assert resp.status_code == 200

        msg = _recv(ws)
        assert msg is not None, "overlay did not receive message within timeout"
        assert msg["text"] == "hello overlay"


def test_fire_payload_structure_at_overlay(client, ws_server_port):
    """overlay 收到的 payload 應包含 color/opacity/size/speed/fontInfo"""
    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        assert _wait_overlay_registered()

        client.post("/fire", json={"text": "styled"})

        msg = _recv(ws)
        assert msg is not None
        for field in ("text", "color", "opacity", "size", "speed", "fontInfo"):
            assert field in msg, f"overlay payload missing field: {field}"


def test_fire_color_arrives_without_hash(client, ws_server_port):
    """overlay 收到的 color 不應含 #"""
    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        assert _wait_overlay_registered()

        client.post("/fire", json={"text": "color test", "color": "#AABBCC"})

        msg = _recv(ws)
        assert msg is not None
        assert not msg["color"].startswith("#")
        assert msg["color"].upper() == "AABBCC"


def test_fire_image_flag_preserved(client, ws_server_port):
    """isImage=True 應原封不動傳到 overlay"""
    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        assert _wait_overlay_registered()

        client.post("/fire", json={
            "text": "https://example.com/img.jpg",
            "isImage": True,
        })

        msg = _recv(ws)
        assert msg is not None
        assert msg.get("isImage") is True


# ─── 黑名單：overlay 不收到被阻擋的訊息 ──────────────────────────────────────


def test_blacklisted_fire_not_delivered_to_overlay(client, ws_server_port):
    """被黑名單攔截的 fire 不應入列，overlay 不應收到任何 danmu"""
    state.blacklist.add("BANNED_WORD")
    try:
        with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
            assert _wait_overlay_registered()

            resp = client.post("/fire", json={"text": "this has BANNED_WORD"})
            assert resp.status_code == 400

            # overlay 只應收到 ping，無 danmu
            msg = _recv(ws, timeout=1.0)
            assert msg is None, f"overlay unexpectedly received: {msg}"
    finally:
        state.blacklist.discard("BANNED_WORD")


# ─── 多個 overlay 同時接收 ────────────────────────────────────────────────────


def test_multiple_overlays_all_receive(client, ws_server_port):
    """兩個 overlay 同時連線，POST /fire 後兩個都應收到訊息"""
    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws1, \
         connect(f"ws://127.0.0.1:{ws_server_port}") as ws2:
        assert _wait_overlay_registered(minimum=2), "expected 2 clients"

        client.post("/fire", json={"text": "broadcast"})

        msg1 = _recv(ws1)
        msg2 = _recv(ws2)

        assert msg1 is not None, "overlay 1 did not receive"
        assert msg2 is not None, "overlay 2 did not receive"
        assert msg1["text"] == "broadcast"
        assert msg2["text"] == "broadcast"


# ─── Admin 設定變更 → overlay 接收 settings_changed ──────────────────────────


def test_admin_setting_change_notifies_overlay(client, ws_server_port):
    """Admin 更新設定後，overlay 應收到 {'type': 'settings_changed', 'settings': {...}}"""
    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        assert _wait_overlay_registered()
        ws_queue.dequeue_all()  # 清除連線初期可能殘留的 queue 項目

        token = _login(client)
        client.post(
            "/admin/update",
            json={"type": "Speed", "index": 3, "value": 6},
            headers={"X-CSRF-Token": token},
        )

        notification = _recv_type(ws, "settings_changed", timeout=2.0)
        assert notification is not None, "overlay did not receive settings_changed"
        assert "settings" in notification
        assert notification["settings"]["Speed"][3] == 6


def test_admin_toggle_notifies_overlay(client, ws_server_port):
    """Admin 切換 Effects 開關，overlay 應收到 settings_changed"""
    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        assert _wait_overlay_registered()
        ws_queue.dequeue_all()

        token = _login(client)
        client.post(
            "/admin/Set",
            json={"key": "Effects", "enabled": False},
            headers={"X-CSRF-Token": token},
        )

        notification = _recv_type(ws, "settings_changed", timeout=2.0)
        assert notification is not None
        assert notification["settings"]["Effects"][0] is False


# ─── overlay 斷線後 fire 返回 503 ─────────────────────────────────────────────


def test_fire_returns_503_after_overlay_disconnects(client, ws_server_port):
    """overlay 斷線後 /fire 應回傳 503"""
    # 確保先連再斷
    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        assert _wait_overlay_registered()
    # ws context 結束，overlay 已斷線；等待 WS 伺服器 unregister
    deadline = time.monotonic() + 2.0
    while time.monotonic() < deadline and get_ws_client_count() > 0:
        time.sleep(0.05)

    resp = client.post("/fire", json={"text": "nobody home"})
    assert resp.status_code == 503


# ─── overlay 重新連線後 fire 成功 ─────────────────────────────────────────────


def test_fire_succeeds_after_overlay_reconnects(client, ws_server_port):
    """overlay 重新連線後 /fire 應恢復正常"""
    # 先斷線
    with connect(f"ws://127.0.0.1:{ws_server_port}"):
        pass
    # 等待斷線完成
    deadline = time.monotonic() + 2.0
    while time.monotonic() < deadline and get_ws_client_count() > 0:
        time.sleep(0.05)

    # 重新連線
    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        assert _wait_overlay_registered()

        resp = client.post("/fire", json={"text": "reconnected"})
        assert resp.status_code == 200

        msg = _recv(ws)
        assert msg is not None
        assert msg["text"] == "reconnected"
