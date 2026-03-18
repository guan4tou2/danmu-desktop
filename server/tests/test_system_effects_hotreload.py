"""系統測試：Effects 熱插拔 E2E
修改 .dme 檔案 → fire → overlay 收到新效果
"""

import json
import time

import pytest
from websockets.sync.client import connect

from server import state
from server.services import effects as eff_svc, ws_queue
from server.services.ws_state import get_ws_client_count

# ─── 輔助函式 ─────────────────────────────────────────────────────────────────


def _recv(ws, *, skip_types=("ping",), timeout: float = 2.0):
    """從 WS 接收一則非心跳訊息，回傳 dict 或 None（timeout）"""
    from websockets.exceptions import ConnectionClosed

    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        remaining = max(0.05, deadline - time.monotonic())
        try:
            ws.socket.settimeout(remaining)
            data = json.loads(ws.recv())
            if data.get("type") in skip_types:
                continue
            return data
        except (TimeoutError, ConnectionClosed):
            break
    return None


def _wait_overlay_registered(minimum: int = 1, timeout: float = 2.0) -> bool:
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        if get_ws_client_count() >= minimum:
            return True
        time.sleep(0.05)
    return False


def _login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess.get("csrf_token", "")


# ─── Fixtures ────────────────────────────────────────────────────────────────


@pytest.fixture(autouse=True)
def clean_queue():
    ws_queue.dequeue_all()
    yield
    ws_queue.dequeue_all()


@pytest.fixture()
def temp_dme():
    """建立暫時的 .dme 檔案，測試結束後清理"""
    created_files = []

    def _create(name, animation="dme-test 1s linear infinite", extra_yaml=""):
        content = (
            f"name: {name}\n"
            f"label: Test {name}\n"
            f"description: temp effect for testing\n"
            f"\n"
            f"keyframes: |\n"
            f"  @keyframes dme-{name} {{\n"
            f"    to {{ opacity: 0; }}\n"
            f"  }}\n"
            f"\n"
            f'animation: "{animation}"\n'
        )
        if extra_yaml:
            content += extra_yaml + "\n"

        path = eff_svc._EFFECTS_DIR / f"{name}.dme"
        path.write_text(content, encoding="utf-8")
        created_files.append(path)
        return path

    yield _create

    for p in created_files:
        p.unlink(missing_ok=True)
    # 清理快取
    eff_svc._scan()


# ─── 新增 .dme → _scan() 偵測到 ─────────────────────────────────────────────


def test_new_effect_file_picked_up_after_scan(temp_dme):
    """新增 .dme 檔案後，_scan() 應偵測到新效果"""
    temp_dme("test_hotreload_new")

    eff_svc._scan()

    names = [e["name"] for e in eff_svc.load_all()]
    assert "test_hotreload_new" in names


# ─── 修改 .dme → _scan() 重新載入 ──────────────────────────────────────────


def test_modified_effect_reloaded_after_scan(temp_dme):
    """修改 .dme 的 animation 欄位後，_scan() 應回傳更新版本"""
    path = temp_dme("test_hotreload_modify", animation="dme-test_hotreload_modify 1s linear infinite")
    eff_svc._scan()

    # 確認初始 animation
    result = eff_svc.render_effects([{"name": "test_hotreload_modify"}])
    assert result is not None
    assert "1s" in result["animation"]

    # 修改 animation 中的持續時間
    time.sleep(0.05)  # 確保 mtime 改變
    content = path.read_text(encoding="utf-8")
    path.write_text(content.replace("1s", "99s"), encoding="utf-8")

    eff_svc._scan()

    result = eff_svc.render_effects([{"name": "test_hotreload_modify"}])
    assert result is not None
    assert "99s" in result["animation"]


# ─── fire + effects → overlay 收到 effectCss ────────────────────────────────


def test_fire_with_effect_delivers_effectCss_to_overlay(client, ws_server_port, temp_dme):
    """POST /fire 帶 effects 參數，overlay 收到的 payload 應含 effectCss"""
    temp_dme("test_hotreload_fire", animation="dme-test_hotreload_fire 2s ease infinite")
    eff_svc._scan()

    with connect(f"ws://127.0.0.1:{ws_server_port}") as ws:
        assert _wait_overlay_registered()

        _login(client)

        resp = client.post(
            "/fire",
            json={
                "text": "effect test",
                "effects": [{"name": "test_hotreload_fire"}],
            },
        )
        assert resp.status_code == 200

        msg = _recv(ws, timeout=3.0)
        assert msg is not None, "overlay did not receive message"
        assert msg["text"] == "effect test"
        assert msg.get("effectCss") is not None, "effectCss missing from overlay payload"
        assert "animation" in msg["effectCss"]
        assert "keyframes" in msg["effectCss"]
        assert "dme-test_hotreload_fire" in msg["effectCss"]["animation"]


# ─── 刪除 .dme → _scan() 移除 ──────────────────────────────────────────────


def test_deleted_effect_removed_after_scan(temp_dme):
    """刪除 .dme 檔案後，_scan() 應從效果列表中移除"""
    path = temp_dme("test_hotreload_delete")
    eff_svc._scan()

    names_before = [e["name"] for e in eff_svc.load_all()]
    assert "test_hotreload_delete" in names_before

    path.unlink()
    eff_svc._scan()

    names_after = [e["name"] for e in eff_svc.load_all()]
    assert "test_hotreload_delete" not in names_after
