"""整合測試：POST /fire → ws_queue → 驗證 payload 結構與業務邏輯"""

import pytest

from server import state
from server.managers import settings_store
from server.services import ws_queue
from server.services.history import DanmuHistory
from server.services.ws_state import update_ws_client_count


@pytest.fixture(autouse=True)
def ws_connected():
    """每個測試前確保有 WS 客戶端連線"""
    update_ws_client_count(1)


@pytest.fixture(autouse=True)
def clean_queue():
    ws_queue.dequeue_all()
    yield
    ws_queue.dequeue_all()


# ─── 基本 fire 流程 ────────────────────────────────────────────────────────────


def test_fire_enqueues_message(client):
    resp = client.post("/fire", json={"text": "hello world"})
    assert resp.status_code == 200
    msgs = ws_queue.dequeue_all()
    assert len(msgs) == 1
    assert msgs[0]["text"] == "hello world"


def test_fire_response_is_ok(client):
    resp = client.post("/fire", json={"text": "test"})
    assert resp.is_json
    assert resp.get_json()["status"] == "OK"


def test_fire_payload_contains_resolved_style_fields(client):
    """_resolve_danmu_style 應補全 color/opacity/size/speed/fontInfo"""
    resp = client.post("/fire", json={"text": "styled"})
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    for field in ("color", "opacity", "size", "speed", "fontInfo"):
        assert field in msg, f"Missing field: {field}"


def test_fire_color_strips_hash(client):
    """color 欄位應去掉 #（overlay 期望不含 # 的 hex）"""
    resp = client.post("/fire", json={"text": "hi", "color": "#FF0000"})
    assert resp.status_code == 200
    color = ws_queue.dequeue_all()[0]["color"]
    assert not color.startswith("#")
    assert color.upper() == "FF0000"


def test_fire_enqueues_only_one_message_per_call(client):
    client.post("/fire", json={"text": "a"})
    client.post("/fire", json={"text": "b"})
    msgs = ws_queue.dequeue_all()
    assert len(msgs) == 2


def test_fire_fingerprint_not_in_enqueued_payload(client):
    """fingerprint 是使用者識別欄位，不應出現在轉發給 overlay 的 payload"""
    resp = client.post("/fire", json={"text": "hi", "fingerprint": "abc123"})
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    assert "fingerprint" not in msg


# ─── 黑名單整合 ────────────────────────────────────────────────────────────────


def test_fire_blacklisted_text_blocked_and_not_enqueued(client):
    state.blacklist.add("BANNED")
    try:
        resp = client.post("/fire", json={"text": "this is BANNED text"})
        assert resp.status_code == 400
        assert ws_queue.dequeue_all() == []
    finally:
        state.blacklist.discard("BANNED")


def test_fire_non_blacklisted_text_passes(client):
    state.blacklist.add("BADWORD")
    try:
        resp = client.post("/fire", json={"text": "this is fine"})
        assert resp.status_code == 200
    finally:
        state.blacklist.discard("BADWORD")


def test_fire_empty_blacklist_always_passes(client):
    state.blacklist.clear()
    resp = client.post("/fire", json={"text": "anything goes"})
    assert resp.status_code == 200
    assert len(ws_queue.dequeue_all()) == 1


# ─── isImage 整合 ──────────────────────────────────────────────────────────────


def test_fire_valid_image_url_enqueued(client):
    resp = client.post(
        "/fire",
        json={
            "text": "https://example.com/photo.jpg",
            "isImage": True,
        },
    )
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    assert msg.get("isImage") is True


def test_fire_invalid_image_url_not_enqueued(client):
    resp = client.post("/fire", json={"text": "not-a-url", "isImage": True})
    assert resp.status_code == 400
    assert ws_queue.dequeue_all() == []


# ─── 歷史記錄整合 ──────────────────────────────────────────────────────────────


def test_fire_records_in_history(client):
    from server.services import history as hist_svc

    original = hist_svc.danmu_history
    hist_svc.danmu_history = DanmuHistory(max_records=100)
    try:
        resp = client.post("/fire", json={"text": "recorded message"})
        assert resp.status_code == 200
        records = hist_svc.danmu_history.get_records()
        assert len(records) == 1
        assert records[0]["text"] == "recorded message"
    finally:
        hist_svc.danmu_history = original


def test_fire_no_history_when_disabled(client):
    from server.services import history as hist_svc

    original = hist_svc.danmu_history
    hist_svc.danmu_history = None  # 停用歷史記錄
    try:
        resp = client.post("/fire", json={"text": "not recorded"})
        assert resp.status_code == 200
    finally:
        hist_svc.danmu_history = original


def test_fire_history_records_client_ip(client):
    from server.services import history as hist_svc

    original = hist_svc.danmu_history
    hist_svc.danmu_history = DanmuHistory(max_records=100)
    try:
        client.post("/fire", json={"text": "ip test"}, environ_base={"REMOTE_ADDR": "10.0.0.1"})
        records = hist_svc.danmu_history.get_records()
        assert records[0]["clientIp"] == "10.0.0.1"
    finally:
        hist_svc.danmu_history = original


def test_fire_history_ignores_xff_when_not_trusted(client):
    from server.services import history as hist_svc

    original = hist_svc.danmu_history
    original_trust = client.application.config.get("TRUST_X_FORWARDED_FOR", False)
    hist_svc.danmu_history = DanmuHistory(max_records=100)
    client.application.config["TRUST_X_FORWARDED_FOR"] = False
    try:
        client.post(
            "/fire",
            json={"text": "xff spoof"},
            headers={"X-Forwarded-For": "1.2.3.4"},
            environ_base={"REMOTE_ADDR": "10.0.0.2"},
        )
        records = hist_svc.danmu_history.get_records()
        assert records[0]["clientIp"] == "10.0.0.2"
    finally:
        client.application.config["TRUST_X_FORWARDED_FOR"] = original_trust
        hist_svc.danmu_history = original


def test_fire_history_uses_xff_when_trusted(client):
    from server.services import history as hist_svc

    original = hist_svc.danmu_history
    original_trust = client.application.config.get("TRUST_X_FORWARDED_FOR", False)
    hist_svc.danmu_history = DanmuHistory(max_records=100)
    client.application.config["TRUST_X_FORWARDED_FOR"] = True
    try:
        client.post(
            "/fire",
            json={"text": "xff trusted"},
            headers={"X-Forwarded-For": "8.8.8.8, 10.0.0.1"},
            environ_base={"REMOTE_ADDR": "10.0.0.2"},
        )
        records = hist_svc.danmu_history.get_records()
        assert records[0]["clientIp"] == "8.8.8.8"
    finally:
        client.application.config["TRUST_X_FORWARDED_FOR"] = original_trust
        hist_svc.danmu_history = original


# ─── Admin 設定影響 fire ───────────────────────────────────────────────────────


def test_fire_respects_admin_color_override(client):
    """Admin 關閉 Color 自訂時，使用者傳入的 color 應被忽略"""
    settings_store.set_toggle("Color", False)
    settings_store.update_value("Color", 3, "#00FF00")
    resp = client.post("/fire", json={"text": "hi", "color": "#FF0000"})
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    assert msg["color"].upper() == "00FF00"


def test_fire_allows_user_color_when_enabled(client):
    """Admin 開啟 Color 自訂時，使用者傳入的 color 應生效"""
    settings_store.set_toggle("Color", True)
    settings_store.update_value("Color", 3, "#FFFFFF")
    resp = client.post("/fire", json={"text": "hi", "color": "#ABCDEF"})
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    assert msg["color"].upper() == "ABCDEF"


def test_fire_uses_admin_default_speed_when_user_omits(client):
    """使用者未傳入 speed 時應使用管理員預設值"""
    settings_store.update_value("Speed", 3, 7)
    resp = client.post("/fire", json={"text": "hi"})
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    assert msg["speed"] == 7


def test_fire_effects_disabled_sets_null_effect_css(client):
    """Effects 設定關閉時 effectCss 應為 None"""
    settings_store.set_toggle("Effects", False)
    resp = client.post(
        "/fire",
        json={
            "text": "no effects",
            "effects": [{"name": "spin", "params": {}}],
        },
    )
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    assert msg.get("effectCss") is None


def test_fire_no_effects_input_gives_null_effect_css(client):
    """未傳入 effects 時 effectCss 應為 None"""
    resp = client.post("/fire", json={"text": "plain"})
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    assert msg.get("effectCss") is None
