"""整合測試：多步驟 Admin 工作流（登入 → 設定 → fire → 驗證）"""

import pytest

from server import state
from server.services import ws_queue
from server.services.ws_state import update_ws_client_count


def _login(client):
    """登入並回傳 CSRF token"""
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess.get("csrf_token", "")


@pytest.fixture(autouse=True)
def ws_ready():
    update_ws_client_count(1)
    ws_queue.dequeue_all()
    yield
    ws_queue.dequeue_all()


# ─── 黑名單 add / remove 工作流 ───────────────────────────────────────────────


def test_blacklist_add_then_fire_blocked(client):
    """Admin 新增黑名單關鍵字後，包含該字的 fire 應被阻擋"""
    token = _login(client)
    resp = client.post(
        "/admin/blacklist/add",
        json={"keyword": "forbidden"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200

    resp = client.post("/fire", json={"text": "this is forbidden text"})
    assert resp.status_code == 400
    assert ws_queue.dequeue_all() == []


def test_blacklist_remove_then_fire_passes(client):
    """Admin 移除黑名單關鍵字後，之前被擋的字應可正常發送"""
    state.blacklist.add("tempword")
    token = _login(client)
    resp = client.post(
        "/admin/blacklist/remove",
        json={"keyword": "tempword"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200

    resp = client.post("/fire", json={"text": "tempword is now allowed"})
    assert resp.status_code == 200
    assert len(ws_queue.dequeue_all()) == 1


def test_blacklist_add_duplicate_is_idempotent(client):
    """重複新增同一關鍵字不應造成錯誤"""
    token = _login(client)
    client.post("/admin/blacklist/add", json={"keyword": "dup"}, headers={"X-CSRF-Token": token})
    resp = client.post(
        "/admin/blacklist/add", json={"keyword": "dup"}, headers={"X-CSRF-Token": token}
    )
    assert resp.status_code == 200
    assert "already exists" in resp.get_json()["message"]


def test_get_blacklist_reflects_add(client):
    """GET /admin/blacklist/get 應回傳新增後的關鍵字"""
    token = _login(client)
    client.post(
        "/admin/blacklist/add", json={"keyword": "visible"}, headers={"X-CSRF-Token": token}
    )
    resp = client.get("/admin/blacklist/get")
    assert resp.status_code == 200
    keywords = resp.get_json()
    assert "visible" in keywords


# ─── 設定更新 → fire 影響 ──────────────────────────────────────────────────────


def test_admin_set_speed_default_then_fire_uses_new_speed(client):
    """Admin 更改 Speed 預設值 + 關閉自訂，fire 應使用新設定"""
    token = _login(client)
    # 更新 Speed 預設值為 7
    client.post(
        "/admin/update",
        json={"type": "Speed", "index": 3, "value": 7},
        headers={"X-CSRF-Token": token},
    )
    # 禁止使用者自訂 Speed
    client.post(
        "/admin/Set", json={"key": "Speed", "enabled": False}, headers={"X-CSRF-Token": token}
    )
    # 清除 admin 操作產生的 settings_changed 通知
    ws_queue.dequeue_all()

    resp = client.post("/fire", json={"text": "speed test", "speed": 1})
    assert resp.status_code == 200
    msgs = ws_queue.dequeue_all()
    danmu = next(m for m in msgs if "speed" in m)
    assert danmu["speed"] == 7  # 使用者傳入的 1 被管理員設定覆寫


def test_admin_toggle_effects_off_suppresses_effects(client):
    """Admin 關閉 Effects 後，fire 帶入 effects 參數應被忽略"""
    token = _login(client)
    client.post(
        "/admin/Set", json={"key": "Effects", "enabled": False}, headers={"X-CSRF-Token": token}
    )

    resp = client.post(
        "/fire",
        json={
            "text": "test",
            "effects": [{"name": "spin", "params": {}}],
        },
    )
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    assert msg.get("effectCss") is None


def test_admin_toggle_effects_on_off_on(client):
    """Effects 開/關/開切換應正確反映在後續 fire 行為上"""
    token = _login(client)

    # 關閉
    client.post(
        "/admin/Set", json={"key": "Effects", "enabled": False}, headers={"X-CSRF-Token": token}
    )
    r1 = client.post("/fire", json={"text": "off", "effects": [{"name": "spin", "params": {}}]})
    assert r1.status_code == 200
    assert ws_queue.dequeue_all()[0].get("effectCss") is None

    # 開啟
    client.post(
        "/admin/Set", json={"key": "Effects", "enabled": True}, headers={"X-CSRF-Token": token}
    )
    r2 = client.post("/fire", json={"text": "on"})
    assert r2.status_code == 200
    ws_queue.dequeue_all()


# ─── get_settings 反映 Admin 操作 ─────────────────────────────────────────────


def test_get_settings_reflects_admin_update(client):
    """/get_settings 應回傳 admin 更新後的設定值"""
    token = _login(client)
    client.post(
        "/admin/update",
        json={"type": "Speed", "index": 3, "value": 8},
        headers={"X-CSRF-Token": token},
    )

    resp = client.get("/get_settings")
    assert resp.status_code == 200
    assert resp.get_json()["Speed"][3] == 8


def test_get_settings_reflects_admin_toggle(client):
    """/get_settings 應回傳 admin 切換後的開/關狀態"""
    token = _login(client)
    client.post(
        "/admin/Set", json={"key": "Color", "enabled": False}, headers={"X-CSRF-Token": token}
    )

    resp = client.get("/get_settings")
    assert resp.status_code == 200
    assert resp.get_json()["Color"][0] is False


# ─── 多步驟：fire → admin → fire ─────────────────────────────────────────────


def test_sequential_fires_use_updated_settings(client):
    """先 fire 使用舊設定，Admin 更改後 fire 應使用新設定"""
    # 第一次 fire，使用預設 Speed（=4）
    r1 = client.post("/fire", json={"text": "first"})
    assert r1.status_code == 200
    speed_before = ws_queue.dequeue_all()[0]["speed"]

    # Admin 改 Speed 預設為 9 且強制使用
    token = _login(client)
    client.post(
        "/admin/update",
        json={"type": "Speed", "index": 3, "value": 9},
        headers={"X-CSRF-Token": token},
    )
    client.post(
        "/admin/Set", json={"key": "Speed", "enabled": False}, headers={"X-CSRF-Token": token}
    )
    # 清除 admin 操作產生的 settings_changed 通知
    ws_queue.dequeue_all()

    # 第二次 fire，使用者想要 speed=1 但被管理員鎖定
    r2 = client.post("/fire", json={"text": "second", "speed": 1})
    assert r2.status_code == 200
    msgs2 = ws_queue.dequeue_all()
    speed_after = next(m for m in msgs2 if "speed" in m)["speed"]

    assert speed_after == 9
    assert speed_after != speed_before


# ─── admin/history 整合 ────────────────────────────────────────────────────────


def test_admin_history_shows_fired_messages(client):
    """fire 後，/admin/history 應回傳該筆記錄"""
    from server.services import history as hist_svc
    from server.services.history import DanmuHistory

    original = hist_svc.danmu_history
    hist_svc.danmu_history = DanmuHistory(max_records=100)
    try:
        client.post("/fire", json={"text": "history test"})
        _login(client)
        resp = client.get("/admin/history")
        assert resp.status_code == 200
        data = resp.get_json()
        assert data["stats"]["total"] == 1
        assert data["records"][0]["text"] == "history test"
    finally:
        hist_svc.danmu_history = original


def test_admin_clear_history_empties_records(client):
    """Admin 呼叫 /admin/history/clear 後歷史應清空"""
    from server.services import history as hist_svc
    from server.services.history import DanmuHistory

    original = hist_svc.danmu_history
    hist_svc.danmu_history = DanmuHistory(max_records=100)
    try:
        client.post("/fire", json={"text": "to be cleared"})
        token = _login(client)
        client.post("/admin/history/clear", headers={"X-CSRF-Token": token})
        resp = client.get("/admin/history")
        assert resp.get_json()["stats"]["total"] == 0
    finally:
        hist_svc.danmu_history = original
