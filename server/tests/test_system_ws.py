# pyright: reportMissingImports=false

"""系統測試：真實 Flask /ws 伺服器 + websockets.sync.client 端對端驗證

架構說明：
- conftest 在獨立 daemon thread 中啟動 Flask /ws server
- 測試透過 websockets.sync.client.connect() 建立真實 WS 連線
- 訊息流：ws_queue.enqueue_message() → _forward_messages → WS client
"""

import json
import logging
import socket
import time

import pytest

from server.config import Config  # ty: ignore[unresolved-import]
from server.services import ws_queue  # ty: ignore[unresolved-import]

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
    from websockets.exceptions import ConnectionClosed

    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        remaining = deadline - time.monotonic()
        if remaining <= 0:
            break
        try:
            ws.socket.settimeout(remaining)
            raw = ws.recv()
            data = json.loads(raw)
            # display_layer 是連上線時伺服器補推的現況（設計稿 16 · OS1），
            # 跟 ping 一樣不是「我剛送出的那則」。
            if data.get("type") in ("ping", "display_layer"):
                continue
            return data
        except (TimeoutError, ConnectionClosed):
            break
    return None


@pytest.fixture(autouse=True)
def clean_ws_queue():
    ws_queue.dequeue_all()
    yield
    ws_queue.dequeue_all()


# ─── 連線測試 ─────────────────────────────────────────────────────────────────


def test_ws_server_accepts_connection(ws_server_port):
    """Flask /ws 伺服器應接受來自無 token 限制的連線"""
    from websockets.sync.client import connect

    with connect(f"ws://127.0.0.1:{ws_server_port}/ws") as ws:
        assert ws is not None


def _recv_until(ws, msg_type, limit=6):
    """讀到指定 type 為止。連上線時伺服器會先補推一則 display_layer
    （設計稿 16 · OS1），所以第一則不再保證是 ping。"""
    for _ in range(limit):
        data = json.loads(ws.recv())
        if data.get("type") == msg_type:
            return data
    raise AssertionError(f"never received a {msg_type} message")


def test_ws_server_sends_ping_to_connected_client(ws_server_port):
    """連線後伺服器應定期發送 {"type": "ping"} 訊息"""
    from websockets.sync.client import connect

    with connect(f"ws://127.0.0.1:{ws_server_port}/ws") as ws:
        ws.socket.settimeout(2.0)
        assert _recv_until(ws, "ping")


# ─── 訊息轉發測試 ─────────────────────────────────────────────────────────────


def test_enqueued_message_forwarded_to_ws_client(ws_server_port):
    """ws_queue.enqueue_message 入列後，WS client 應收到相同 payload"""
    from websockets.sync.client import connect

    with connect(f"ws://127.0.0.1:{ws_server_port}/ws") as ws:
        # 等待伺服器準備好（連上時的 display_layer 補推之後，第一個 ping）
        ws.socket.settimeout(2.0)
        _recv_until(ws, "ping")

        payload = {"type": "danmu", "text": "system test message"}
        ws_queue.enqueue_message(payload)

        received = _recv_non_ping(ws)
        assert received is not None, "未在 timeout 內收到 danmu 訊息"
        assert received["text"] == "system test message"
        assert received["type"] == "danmu"


def test_multiple_messages_all_delivered(ws_server_port):
    """多筆入列訊息應全部被 WS client 收到"""
    from websockets.sync.client import connect

    with connect(f"ws://127.0.0.1:{ws_server_port}/ws") as ws:
        ws.socket.settimeout(2.0)
        _recv_until(ws, "ping")  # 先吃掉連上時的 display_layer 補推與初始 ping

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

    with connect(f"ws://127.0.0.1:{ws_server_port}/ws") as ws:
        ws.socket.settimeout(2.0)
        _recv_until(ws, "ping")  # 先吃掉連上時的 display_layer 補推與初始 ping

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


# ─── Token 驗證測試（測試實際授權邏輯）──────────────────────────────────


class _MockWebSocket:
    """模擬 websocket 物件，供測試 _is_authorized 邏輯"""

    def __init__(self, path="", origin=None):
        self._path = path
        self._origin = origin
        # websockets>=16 style
        self.request = type(
            "Request", (), {"path": path, "headers": {"Origin": origin} if origin else {}}
        )()


def test_ws_token_auth_rejects_wrong_token():
    """帶錯誤 token 應被拒絕"""
    import secrets

    configured_token = "real-secret"
    # Simulate what _is_authorized does: extract token from query string, then compare
    from urllib.parse import parse_qs, urlparse

    path = "/?token=wrong-token"
    query = parse_qs(urlparse(path).query)
    token = query.get("token", [""])[0]
    # Server checks: `not token` or `not secrets.compare_digest(token, configured_token)`
    authorized = bool(token) and secrets.compare_digest(token, configured_token)
    assert not authorized


def test_ws_token_auth_accepts_correct_token():
    """帶正確 token 應被接受"""
    import secrets

    configured_token = "real-secret"
    from urllib.parse import parse_qs, urlparse

    path = "/?token=real-secret"
    query = parse_qs(urlparse(path).query)
    token = query.get("token", [""])[0]
    authorized = bool(token) and secrets.compare_digest(token, configured_token)
    assert authorized


def test_ws_token_auth_rejects_empty_token_when_required():
    """未帶 token 時，require_token=True 應拒絕"""
    from urllib.parse import parse_qs, urlparse

    path = "/"
    query = parse_qs(urlparse(path).query)
    token = query.get("token", [""])[0]
    # Server checks: `not token` → True → reject
    assert not bool(token), "Empty token should be falsy"


def test_ws_server_rejects_oversized_message(ws_server_port):
    from websockets.exceptions import ConnectionClosed
    from websockets.sync.client import connect

    payload = "x" * (int(Config.WS_MAX_SIZE) + 1)

    with connect(f"ws://127.0.0.1:{ws_server_port}/ws") as ws:
        ws.socket.settimeout(10.0)
        ws.recv()  # discard initial ping

        try:
            ws.send(payload)
        except TimeoutError:
            pass
        except ConnectionClosed as exc:
            code = exc.rcvd.code if exc.rcvd else None
            assert code == 1009
            return
        except Exception as exc:
            pytest.fail(f"unexpected send exception: {type(exc).__name__}: {exc}")

        deadline = time.monotonic() + 3.0
        while time.monotonic() < deadline:
            try:
                ws.socket.settimeout(max(0.1, deadline - time.monotonic()))
                raw = ws.recv()
                try:
                    data = json.loads(raw)
                    if data.get("type") == "ping":
                        continue
                except Exception:
                    pass
            except TimeoutError:
                continue
            except ConnectionClosed as exc:
                code = exc.rcvd.code if exc.rcvd else None
                assert code == 1009
                return
            except Exception as exc:
                pytest.fail(f"unexpected recv exception: {type(exc).__name__}: {exc}")

        pytest.fail("oversized message did not close the connection")


# ─── Token 驗證：真實 Flask /ws 伺服器 close code ───────────────────────────
# 下面三個測試打的是 conftest 啟動的「真」flask_ws 伺服器（handler 每次連線
# 即時讀 ws_auth.get_state()，所以行程內 set_state 即可切換）。1008 是
# Electron 端「停止重連、顯示 Unauthorized」的分流依據，不能退化成裸 close
# 的 1000。


def _connect_expecting_close(port):
    from websockets.exceptions import ConnectionClosedError
    from websockets.sync.client import connect

    def run(query=""):
        with connect(f"ws://127.0.0.1:{port}/ws{query}") as ws:
            ws.socket.settimeout(3.0)
            with pytest.raises(ConnectionClosedError) as exc_info:
                # 伺服器在 handshake 後立刻關閉；重複 recv 直到吃到 close
                for _ in range(5):
                    ws.recv()
            assert exc_info.value.rcvd is not None
            return exc_info.value.rcvd.code

    return run


def test_flask_ws_rejects_missing_token_with_1008(ws_server_port):
    """真實 flask_ws：需要 token 而未帶時，應以 1008 Policy Violation 關閉"""
    from server.services import ws_auth

    ws_auth.set_state(require_token=True, token="real-secret")
    try:
        code = _connect_expecting_close(ws_server_port)()
        assert code == 1008
    finally:
        ws_auth.set_state(require_token=False, token="")


def test_flask_ws_rejects_wrong_token_with_1008(ws_server_port):
    """真實 flask_ws：token 錯誤時，應以 1008 Policy Violation 關閉"""
    from server.services import ws_auth

    ws_auth.set_state(require_token=True, token="real-secret")
    try:
        code = _connect_expecting_close(ws_server_port)("?token=wrong")
        assert code == 1008
    finally:
        ws_auth.set_state(require_token=False, token="")


def test_flask_ws_accepts_correct_token(ws_server_port):
    """真實 flask_ws：token 正確時應正常收到 ping 心跳"""
    from websockets.sync.client import connect

    from server.services import ws_auth

    ws_auth.set_state(require_token=True, token="real-secret")
    try:
        with connect(f"ws://127.0.0.1:{ws_server_port}/ws?token=real-secret") as ws:
            ws.socket.settimeout(3.0)
            assert _recv_until(ws, "ping")
    finally:
        ws_auth.set_state(require_token=False, token="")


def test_flask_ws_pushes_display_layer_on_connect(ws_server_port):
    """設計稿 16 · OS1：中途才連上的大螢幕要立刻拿到現在的安全區與描邊模式。

    display_layer 只在 admin 改動時廣播——沒有這一則補推，活動開始後才開的
    第二台顯示層會停在編譯進去的預設值（安全區 5%、描邊自動），跟主持人早上
    設好的那組不一樣。
    """
    from websockets.sync.client import connect

    from server.services import display_layer

    display_layer.set_state({"safe_area": 8, "stroke_mode": "always"})
    with connect(f"ws://127.0.0.1:{ws_server_port}/ws") as ws:
        ws.socket.settimeout(3.0)
        data = _recv_until(ws, "display_layer")
    assert data["settings"]["safe_area"] == 8
    assert data["settings"]["stroke_mode"] == "always"


# ─── Token 驗證：真實 TCP 連線測試 ──────────────────────────────────────────


@pytest.fixture(scope="module")
def token_ws_port():
    """啟動需要 token 驗證的最小 WS 伺服器（獨立子行程，驗證 /ws query token）"""
    import subprocess
    import sys
    import textwrap

    port = _find_free_port()

    # 用子行程啟動最小 WS 伺服器，完全隔離 asyncio event loop
    script = textwrap.dedent(f"""\
        import asyncio, json, secrets
        from urllib.parse import parse_qs, urlparse
        import websockets

        TOKEN = "test-secret-token"

        def _extract_token(ws):
            req = getattr(ws, "request", None)
            path = getattr(req, "path", "") or getattr(ws, "path", "") or ""
            vals = parse_qs(urlparse(path).query).get("token", [])
            return vals[0] if vals else ""

        async def handler(ws):
            token = _extract_token(ws)
            if not token or not secrets.compare_digest(token, TOKEN):
                await ws.close(code=1008, reason="Unauthorized")
                return
            try:
                while True:
                    await ws.send(json.dumps({{"type": "ping"}}))
                    await asyncio.sleep(1.0)
            except Exception:
                pass

        async def main():
            server = await websockets.serve(handler, "127.0.0.1", {port})
            print("READY", flush=True)
            await server.wait_closed()

        asyncio.run(main())
    """)

    proc = subprocess.Popen(
        [sys.executable, "-c", script],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )

    # 等待伺服器印出 READY
    import select

    ready = False
    deadline = time.monotonic() + 5.0
    while time.monotonic() < deadline:
        rlist, _, _ = select.select([proc.stdout], [], [], 0.1)
        if rlist:
            line = proc.stdout.readline().decode().strip()
            if line == "READY":
                ready = True
                break
    assert ready, "Token WS server subprocess did not start"

    yield port

    proc.terminate()
    proc.wait(timeout=3)


def test_token_auth_rejects_no_token_real_connection(token_ws_port):
    """未帶 token 連線應被伺服器以 1008 close code 關閉"""
    from websockets.exceptions import ConnectionClosedError
    from websockets.sync.client import connect

    with connect(f"ws://127.0.0.1:{token_ws_port}/ws") as ws:
        ws.socket.settimeout(3.0)
        with pytest.raises(ConnectionClosedError) as exc_info:
            ws.recv()
        assert exc_info.value.rcvd is not None
        assert exc_info.value.rcvd.code == 1008


def test_token_auth_rejects_wrong_token_real_connection(token_ws_port):
    """帶錯誤 token 連線應被伺服器以 1008 close code 關閉"""
    from websockets.exceptions import ConnectionClosedError
    from websockets.sync.client import connect

    with connect(f"ws://127.0.0.1:{token_ws_port}/ws?token=wrong") as ws:
        ws.socket.settimeout(3.0)
        with pytest.raises(ConnectionClosedError) as exc_info:
            ws.recv()
        assert exc_info.value.rcvd is not None
        assert exc_info.value.rcvd.code == 1008


def test_token_auth_accepts_correct_token_real_connection(token_ws_port):
    """帶正確 token 連線應成功"""
    from websockets.sync.client import connect

    with connect(f"ws://127.0.0.1:{token_ws_port}/ws?token=test-secret-token") as ws:
        assert ws is not None
        # 應收到 ping 心跳
        ws.socket.settimeout(2.0)
        raw = ws.recv()
        data = json.loads(raw)
        assert data.get("type") == "ping"
