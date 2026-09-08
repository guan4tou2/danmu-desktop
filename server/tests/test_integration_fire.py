"""整合測試：POST /fire → ws_queue → 驗證 payload 結構與業務邏輯"""

import json

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
    assert resp.get_json()["status"] == "sent"


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


def test_fire_fingerprint_does_reach_the_admin_live_feed(client):
    """同一則彈幕的指紋要進得了 admin 的訊息流緩衝區。

    這是上面那支的另一半，2026-09-08 才補上。在這之前只有「overlay 拿不到」
    被釘住，於是 `api.py` 用 `data.pop("fingerprint")` 一次滿足它——順手也把
    admin 專用的 `live_feed_buffer` 一起餓死了。訊息流每一列的「封鎖此人」
    按鈕 gate 在 `if (d.fingerprint)`，因此從來沒有渲染出來過，而且畫面上
    看起來完全正常（就是少一顆按鈕）。

    兩支要一起看才是完整的契約：**公開的 overlay 看不到，admin 看得到。**
    """
    from server.services import live_feed_buffer

    live_feed_buffer.reset()
    resp = client.post("/fire", json={"text": "feed-fp", "fingerprint": "fp-e2e-42"})
    assert resp.status_code == 200, resp.get_json()

    snap = live_feed_buffer.snapshot()
    assert len(snap) == 1, snap
    assert snap[0]["data"]["fingerprint"] == "fp-e2e-42"
    assert snap[0]["data"]["text"] == "feed-fp"


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
    settings_store.update_value("Speed", 3, 2.0)
    resp = client.post("/fire", json={"text": "hi"})
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    assert msg["speed"] == 2.0


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


# ─── 投票不走內容過濾（2026-09-08 拍板）────────────────────────────────────


def _start_poll():
    from server.services.poll import poll_service

    poll_service.reset()
    poll_service.create("測試題", ["甲", "乙"])
    return poll_service


def test_poll_vote_is_not_blocked_by_filter_rules(client):
    """選項代號不該被內容過濾擋掉。

    投票是用「把選項代號當一則彈幕送出」實作的，所以在這個修正之前，選項代號
    會跟一般訊息一樣被過濾引擎掃過。場中實測踩到：一條 `keyword: a → block`
    的規則讓「選項 A」完全投不出去，觀眾只看到內部訊息「Keyword match: 'a'」。
    過濾規則是用來擋內容的，而選項代號是主持人自己出的題。
    """
    from server.services.filter_engine import filter_engine

    svc = _start_poll()
    rule_id = filter_engine.add_rule({"type": "keyword", "pattern": "a", "action": "block"})
    try:
        resp = client.post("/fire", json={"text": "A"})
        assert resp.status_code == 200, resp.get_json()
        assert resp.get_json().get("poll_vote", {}).get("accepted") is True
        assert svc.get_status()["questions"][0]["options"][0]["count"] == 1

        # 對照組：同樣命中規則、但**不是**選項代號的訊息仍然要被擋
        assert client.post("/fire", json={"text": "banana"}).status_code == 400
    finally:
        filter_engine.remove_rule(rule_id)
        svc.reset()


def test_poll_vote_still_respects_bans(client):
    """跳過的只有「內容」那一段——被停權的人仍然不能投票。"""
    from server.services import moderation_bans

    svc = _start_poll()
    fp = "banned-voter-fp"
    moderation_bans.add_ban("fingerprint", fp, reason="test")
    try:
        resp = client.post("/fire", json={"text": "A", "fingerprint": fp})
        assert resp.status_code == 403
        assert svc.get_status()["questions"][0]["options"][0]["count"] == 0
    finally:
        moderation_bans.remove_ban("fingerprint", fp)
        svc.reset()


# ─── 一次按下即投票（POST /poll/vote，2026-09-08）─────────────────────────


def test_poll_vote_endpoint_records_without_producing_danmu(client):
    """點選項就投票，而且**不產生彈幕**。

    在這之前投票是「把選項代號當彈幕送出」，於是幾百人同時投時大螢幕被一整片
    A / B / C / D 洗版。這條路完全不碰彈幕管線。
    """
    from server.services import ws_queue

    svc = _start_poll()
    ws_queue.dequeue_all()
    try:
        resp = client.post("/poll/vote", json={"key": "A", "fingerprint": "fp-tap-1"})
        assert resp.status_code == 200, resp.get_json()
        assert resp.get_json()["accepted"] is True

        assert svc.get_status()["questions"][0]["options"][0]["count"] == 1

        # 會有一則 `poll_update` —— 那是大螢幕的投票面板要更新長條，是必要的。
        # 不該有的是**彈幕**（帶 `text` 的那種）。
        sent = ws_queue.dequeue_all()
        danmu = [m for m in sent if m.get("text") is not None]
        assert danmu == [], f"投票不該產生彈幕，實際: {danmu}"
        assert any(m.get("type") == "poll_update" for m in sent), "大螢幕面板沒收到更新"
    finally:
        svc.reset()


def test_poll_vote_response_never_leaks_counts(client):
    """回應裡不得出現票數／百分比。

    `viewer never sees counts or percentages` 是 v5 鎖定的產品決策
    （priority reset 2026-05-05）。`/poll/public-status` 一直有守這條，
    新增的投票端點也必須守。
    """
    svc = _start_poll()
    try:
        client.post("/poll/vote", json={"key": "A", "fingerprint": "fp-leak-1"})
        body = client.post("/poll/vote", json={"key": "B", "fingerprint": "fp-leak-2"}).get_json()
        assert set(body) <= {"accepted", "key", "error"}, body
        blob = json.dumps(body)
        for leak in ("count", "votes", "percent", "pct", "total"):
            assert leak not in blob.lower(), f"回應洩漏了 {leak}: {body}"
    finally:
        svc.reset()


def test_poll_vote_duplicate_is_not_an_error(client):
    """重投 → accepted=False 但仍是 200。

    重投的人該看到的是「你投的是這個」，不是紅字錯誤，所以不回 4xx。
    """
    svc = _start_poll()
    try:
        first = client.post("/poll/vote", json={"key": "A", "fingerprint": "fp-dup"})
        assert first.get_json()["accepted"] is True
        again = client.post("/poll/vote", json={"key": "A", "fingerprint": "fp-dup"})
        assert again.status_code == 200
        assert again.get_json()["accepted"] is False
    finally:
        svc.reset()


def test_poll_vote_rejects_unknown_option(client):
    svc = _start_poll()
    try:
        assert (
            client.post("/poll/vote", json={"key": "Z", "fingerprint": "fp-u"}).status_code == 400
        )
    finally:
        svc.reset()


def test_poll_vote_requires_a_key(client):
    svc = _start_poll()
    try:
        assert client.post("/poll/vote", json={}).status_code == 400
    finally:
        svc.reset()


def test_poll_vote_without_active_poll_is_409(client):
    from server.services.poll import poll_service

    poll_service.reset()
    assert client.post("/poll/vote", json={"key": "A"}).status_code == 409


def test_poll_vote_respects_bans(client):
    """封禁優先於投票 —— 被封的人不該能靠投票繞過。"""
    from server.services import moderation_bans

    svc = _start_poll()
    fp = "fp-banned-voter"
    moderation_bans.add_ban("fingerprint", fp, reason="test")
    try:
        assert client.post("/poll/vote", json={"key": "A", "fingerprint": fp}).status_code == 403
        assert svc.get_status()["questions"][0]["options"][0]["count"] == 0
    finally:
        moderation_bans.remove_ban("fingerprint", fp)
        svc.reset()


def test_typed_vote_is_dimmed_on_the_overlay(client, monkeypatch):
    """打字投票的那些票仍會上大螢幕，但要被調暗。

    這支要連打三發 `/fire`，會撞到 per-IP 限流（memory：跑多輪前先把限流拉高）
    ——所以這裡直接把上限拉開，測的是調暗邏輯不是限流。
    """
    from flask import current_app

    from server.services import display_layer, ws_queue

    monkeypatch.setitem(current_app.config, "FIRE_RATE_LIMIT", 1000)

    svc = _start_poll()
    display_layer._reset_for_tests()
    ws_queue.dequeue_all()

    # 投票會先廣播一則 `poll_update` 更新大螢幕面板，彈幕排在它後面 ——
    # 直接取 [0] 會拿到面板更新然後 KeyError。只看帶 `text` 的那些。
    def _danmu():
        return [m for m in ws_queue.dequeue_all() if m.get("text") is not None]

    try:
        assert client.post("/fire", json={"text": "A", "opacity": 100}).status_code == 200
        sent = _danmu()
        assert len(sent) == 1, sent
        assert sent[0]["opacity"] == 25, f"投票彈幕應該被調暗，實際 {sent[0]['opacity']}"

        # 一般留言不受影響
        assert (
            client.post("/fire", json={"text": "這是一般留言", "opacity": 100}).status_code == 200
        )
        assert _danmu()[0]["opacity"] == 100

        # 開關關掉之後就不調暗
        display_layer.set_state({"dim_poll_votes": False})
        assert client.post("/fire", json={"text": "B", "opacity": 100}).status_code == 200
        assert _danmu()[0]["opacity"] == 100
    finally:
        display_layer._reset_for_tests()
        svc.reset()
