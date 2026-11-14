"""主題的字型與觀眾預設顏色覆寫真的生效（2026-11-14，業主拍板）。

解析集中在 services/danmu_style.py。這裡釘住：

  · 優先序矩陣：觀眾選擇（有效／無效／不開放改）× 主題（有覆寫／沒有）×
    主題值（有效／無效），顏色與字型各一份；
  · 每一條送上大螢幕的路徑：/fire、審核通過重送、排程、管理員廣播、
    Webhook 進來的訊息；
  · 不合法的主題值只是被跳過，訊息照送，admin 拿得到「沒被採用」；
  · 觀眾頁的初始值與 admin 的 style_defaults。

沒有覆寫的站台與 5.8.0 相同，見 test_style_merge_viewer_settings.py。
"""

import hashlib
import hmac
import json
from unittest.mock import patch

import pytest

from server import state
from server.managers import settings_store
from server.services import danmu_style, theme_overrides
from server.services import themes as theme_svc
from server.services import ws_queue
from server.services.security import rate_limiter, reset_rate_limit_counters
from server.services.ws_state import update_ws_client_count

GLOBAL_COLOR = "#ffffff"
GLOBAL_FONT = "NotoSansTC"
THEME_COLOR_RAW = "#0f8"  # 存成短 hex，解析時要展開
THEME_COLOR = "#00ff88"
VIEWER_COLOR = "#123456"


@pytest.fixture()
def fonts(app):
    """兩個上傳字型（一律啟用）；GoneFont 沒有檔案＝已刪除；Arial 預設停用。"""
    from pathlib import Path

    for name in ("ThemeFont", "ViewerFont"):
        (Path(state.USER_FONTS_DIR) / f"{name}.ttf").write_bytes(b"\0")
    yield


@pytest.fixture()
def overlay():
    update_ws_client_count(1)
    ws_queue.dequeue_all()
    rate_limiter.reset()
    reset_rate_limit_counters()
    yield
    ws_queue.dequeue_all()
    update_ws_client_count(0)


def _set_theme(color=None, font=None, theme="default"):
    theme_svc.set_active(theme)
    patch_ = {}
    if color is not None:
        patch_["color"] = color
    if font is not None:
        patch_["font_family"] = font
    if patch_:
        theme_overrides.set_for(theme, patch_)


def _login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def _opts(color_row=None, font_row=None, picker=True):
    opts = settings_store.get_options()
    if color_row is not None:
        opts["Color"] = color_row
    if font_row is not None:
        opts["FontFamily"] = font_row
    opts["ViewerColorPicker"] = [picker]
    return opts


# ─── 優先序矩陣 · 顏色 ────────────────────────────────────────────────────

COLOR_OPEN = [True, [], 0, "#FFFFFF"]
COLOR_LOCKED = [False, [], 0, "#FFFFFF"]

# 主題：None＝沒有覆寫；"valid"／"invalid"＝有覆寫，值合法／不合法
COLOR_MATRIX = [
    # 觀眾選擇有效且開放改 → 觀眾勝出，不論主題
    ("valid", COLOR_OPEN, None, VIEWER_COLOR, "viewer"),
    ("valid", COLOR_OPEN, "valid", VIEWER_COLOR, "viewer"),
    ("valid", COLOR_OPEN, "invalid", VIEWER_COLOR, "viewer"),
    # 觀眾的值不合法 → 主題值，主題沒有或不合法 → 全域
    ("invalid", COLOR_OPEN, None, GLOBAL_COLOR, "global"),
    ("invalid", COLOR_OPEN, "valid", THEME_COLOR, "theme"),
    ("invalid", COLOR_OPEN, "invalid", GLOBAL_COLOR, "global"),
    # 不開放觀眾改 → 觀眾的值一律不看
    ("valid", COLOR_LOCKED, None, GLOBAL_COLOR, "global"),
    ("valid", COLOR_LOCKED, "valid", THEME_COLOR, "theme"),
    ("valid", COLOR_LOCKED, "invalid", GLOBAL_COLOR, "global"),
]


@pytest.mark.parametrize("viewer,row,theme,expected,source", COLOR_MATRIX)
def test_color_resolution_matrix(app, viewer, row, theme, expected, source):
    value = VIEWER_COLOR if viewer == "valid" else "not-a-color"
    ov = {} if theme is None else {"color": THEME_COLOR_RAW if theme == "valid" else "#nothex"}
    with patch.object(theme_overrides, "get_for", return_value=ov):
        res = danmu_style.resolve(value, None, audience=True, options=_opts(color_row=row))
    assert (res.color, res.color_source) == (expected, source)


def test_palette_only_skips_a_theme_color_not_on_the_palette(app):
    """只准色盤：主題色不在色盤上就跳過，回到全域（全域也不在就色盤第一色）。"""
    row = [True, ["#FFFFFF", "#38BDF8"], 0, "#FFFFFF"]
    with patch.object(theme_overrides, "get_for", return_value={"color": THEME_COLOR}):
        res = danmu_style.resolve(None, None, audience=True, options=_opts(row, picker=False))
        assert (res.color, res.color_source) == ("#ffffff", "global")
        row[3] = "#000000"
        res = danmu_style.resolve(None, None, audience=True, options=_opts(row, picker=False))
        assert (res.color, res.color_source) == ("#ffffff", "palette")
        row[1].append(THEME_COLOR)
        res = danmu_style.resolve(None, None, audience=True, options=_opts(row, picker=False))
        assert (res.color, res.color_source) == (THEME_COLOR, "theme")


# ─── 優先序矩陣 · 字型 ────────────────────────────────────────────────────

FONT_OPEN = [True, [], "", GLOBAL_FONT]
FONT_LOCKED = [False, [], "", GLOBAL_FONT]

FONT_MATRIX = [
    ("valid", FONT_OPEN, None, "ViewerFont", "viewer"),
    ("valid", FONT_OPEN, "valid", "ViewerFont", "viewer"),
    ("valid", FONT_OPEN, "deleted", "ViewerFont", "viewer"),
    ("invalid", FONT_OPEN, None, GLOBAL_FONT, "global"),
    ("invalid", FONT_OPEN, "valid", "ThemeFont", "theme"),
    ("invalid", FONT_OPEN, "deleted", GLOBAL_FONT, "global"),
    ("invalid", FONT_OPEN, "disabled", GLOBAL_FONT, "global"),
    ("valid", FONT_LOCKED, None, GLOBAL_FONT, "global"),
    ("valid", FONT_LOCKED, "valid", "ThemeFont", "theme"),
    ("valid", FONT_LOCKED, "deleted", GLOBAL_FONT, "global"),
]
THEME_FONTS = {"valid": "ThemeFont", "deleted": "GoneFont", "disabled": "Arial"}


@pytest.mark.parametrize("viewer,row,theme,expected,source", FONT_MATRIX)
def test_font_resolution_matrix(app, fonts, viewer, row, theme, expected, source):
    name = "ViewerFont" if viewer == "valid" else "NoSuchFont"
    _set_theme(font=THEME_FONTS.get(theme))
    res = danmu_style.resolve(None, name, audience=True, options=_opts(font_row=row))
    assert (res.font, res.font_source) == (expected, source)


def test_viewer_font_outside_the_allowlist_falls_back_to_the_theme(app, fonts):
    """允許清單外的觀眾字型＝不被允許，回落主題值。"""
    _set_theme(font="ThemeFont")
    opts = _opts(font_row=[True, ["NotoSansTC"], "", GLOBAL_FONT])
    res = danmu_style.resolve(None, "Arial", audience=True, options=opts)
    assert (res.font, res.font_source) == ("ThemeFont", "theme")


def test_yaml_theme_color_and_font_are_not_theme_values(app):
    """內建主題 YAML 的 styles.color（neon 是 #00FF88）不算——只有覆寫算。"""
    theme_svc.set_active("neon")
    res = danmu_style.resolve(None, None, audience=True, options=_opts())
    assert (res.color, res.font) == (GLOBAL_COLOR, GLOBAL_FONT)


def test_operator_mode_keeps_explicit_values_and_fills_only_from_the_theme(app, fonts):
    res = danmu_style.resolve(None, None, audience=False)
    assert (res.color, res.font) == (None, None)
    _set_theme(color=THEME_COLOR_RAW, font="ThemeFont")
    res = danmu_style.resolve("#abcdef", "Other", audience=False)
    assert (res.color, res.font) == ("#abcdef", "Other")
    res = danmu_style.resolve(None, None, audience=False)
    assert (res.color, res.font, res.color_source) == (THEME_COLOR, "ThemeFont", "theme")


# ─── 每一條送出路徑 ───────────────────────────────────────────────────────


def _sent():
    return ws_queue.dequeue_all()


def test_fire_uses_the_theme_defaults(client, fonts, overlay):
    _set_theme(color=THEME_COLOR_RAW, font="ThemeFont")
    assert client.post("/fire", json={"text": "hi"}).status_code == 200
    (msg,) = _sent()
    assert msg["color"] == "00FF88"
    assert msg["fontInfo"]["name"] == "ThemeFont"
    assert msg["fontInfo"]["type"] == "uploaded" and msg["fontInfo"]["url"]


def test_fire_viewer_choice_still_wins(client, fonts, overlay):
    _set_theme(color=THEME_COLOR_RAW, font="ThemeFont")
    body = {"text": "hi", "color": VIEWER_COLOR, "font": "ViewerFont"}
    assert client.post("/fire", json=body).status_code == 200
    (msg,) = _sent()
    assert msg["color"] == "123456"
    assert msg["fontInfo"]["name"] == "ViewerFont"


def test_fire_with_a_deleted_theme_font_still_sends(client, fonts, overlay):
    _set_theme(font="GoneFont")
    assert client.post("/fire", json={"text": "hi"}).status_code == 200
    (msg,) = _sent()
    assert msg["fontInfo"]["name"] == GLOBAL_FONT


def test_fire_with_an_unreadable_theme_color_still_sends(client, overlay):
    with patch.object(theme_overrides, "get_for", return_value={"color": "garbage"}):
        assert client.post("/fire", json={"text": "hi"}).status_code == 200
    (msg,) = _sent()
    assert msg["color"] == "FFFFFF"


def test_review_queue_approval_gets_the_theme_defaults(client, fonts, overlay):
    from server.services.filter_engine import filter_engine
    from server.services.mod_queue import mod_queue

    _set_theme(color=THEME_COLOR_RAW, font="ThemeFont")
    rule_id = filter_engine.add_rule({"type": "keyword", "pattern": "hold", "action": "review"})
    try:
        qid = client.post("/fire", json={"text": "hold me"}).get_json()["queue_id"]
        token = _login(client)
        res = client.post(
            "/admin/modqueue/approve", json={"id": qid}, headers={"X-CSRF-Token": token}
        )
        assert res.status_code == 200
        sent = [m for m in _sent() if m.get("text") == "hold me"][-1]
        assert sent["color"] == "00FF88"
        assert sent["fontInfo"]["name"] == "ThemeFont"
    finally:
        filter_engine.remove_rule(rule_id)
        mod_queue._pending.clear()


def test_review_queue_approval_without_overrides_adds_nothing(client, overlay):
    from server.services.filter_engine import filter_engine
    from server.services.mod_queue import mod_queue

    rule_id = filter_engine.add_rule({"type": "keyword", "pattern": "hold", "action": "review"})
    try:
        qid = client.post("/fire", json={"text": "hold me"}).get_json()["queue_id"]
        token = _login(client)
        client.post("/admin/modqueue/approve", json={"id": qid}, headers={"X-CSRF-Token": token})
        sent = [m for m in _sent() if m.get("text") == "hold me"][-1]
        assert "color" not in sent and "fontInfo" not in sent
    finally:
        filter_engine.remove_rule(rule_id)
        mod_queue._pending.clear()


def test_scheduler_message_gets_the_theme_defaults(app, fonts, overlay):
    from server.services.scheduler import SchedulerService

    _set_theme(color=THEME_COLOR_RAW, font="ThemeFont")
    SchedulerService._send_message({"text": "tick"}, app)
    SchedulerService._send_message({"text": "tock", "color": "ABCDEF"}, app)
    tick, tock = _sent()
    assert tick["color"] == "00FF88"
    assert tick["fontInfo"]["name"] == "ThemeFont" and tick["fontInfo"]["url"]
    assert tock["color"] == "ABCDEF"


def test_scheduler_message_without_overrides_is_unchanged(app, overlay):
    from server.services.scheduler import SchedulerService

    SchedulerService._send_message({"text": "tick", "size": 30}, app)
    assert _sent() == [{"text": "tick", "size": 30}]


def test_scheduler_records_the_app_for_its_timer_thread(app):
    from server.services.scheduler import SchedulerService

    svc = SchedulerService()
    job = svc.create([{"text": "x"}], interval_sec=60, start_delay=60)
    try:
        assert svc._app is app
    finally:
        svc.cancel(job)


def test_admin_broadcast_gets_the_theme_defaults(client, fonts, overlay):
    _set_theme(color=THEME_COLOR_RAW, font="ThemeFont")
    token = _login(client)
    res = client.post(
        "/admin/broadcast/send", json={"text": "host"}, headers={"X-CSRF-Token": token}
    )
    assert res.status_code == 200
    msg = [m for m in _sent() if m.get("text") == "host"][0]
    assert msg["color"] == "00FF88"
    assert msg["fontInfo"]["name"] == "ThemeFont"


def test_admin_broadcast_explicit_color_wins(client, overlay):
    _set_theme(color=THEME_COLOR_RAW)
    token = _login(client)
    client.post(
        "/admin/broadcast/send",
        json={"text": "host", "color": "#ABCDEF"},
        headers={"X-CSRF-Token": token},
    )
    msg = [m for m in _sent() if m.get("text") == "host"][0]
    assert msg["color"] == "#ABCDEF"


def _incoming_webhook(client, body):
    from server.services.webhook import WebhookService

    secret = "s3cret"
    hook_id = WebhookService().register(
        {"url": "https://example.com/hook", "events": ["on_danmu"], "secret": secret}
    )
    payload = json.dumps(body).encode()
    sig = hmac.new(secret.encode(), payload, hashlib.sha256).hexdigest()
    return client.post(
        f"/admin/webhook/incoming/{hook_id}",
        data=payload,
        content_type="application/json",
        headers={"X-Webhook-Signature": sig},
    )


@pytest.fixture()
def webhook_file(tmp_path):
    from server.services.webhook import WebhookService

    WebhookService._instance = None
    with patch("server.services.webhook._WEBHOOKS_FILE", tmp_path / "webhooks.json"):
        yield
    WebhookService._instance = None


def test_incoming_webhook_gets_the_theme_defaults(client, fonts, overlay, webhook_file):
    _set_theme(color=THEME_COLOR_RAW, font="ThemeFont")
    assert _incoming_webhook(client, {"text": "from outside"}).status_code == 200
    msg = [m for m in _sent() if m.get("text") == "from outside"][0]
    assert msg["color"] == "00FF88"
    assert msg["fontInfo"]["name"] == "ThemeFont"


def test_incoming_webhook_without_overrides_keeps_ffffff(client, overlay, webhook_file):
    assert _incoming_webhook(client, {"text": "from outside", "color": "bad"}).status_code == 200
    msg = [m for m in _sent() if m.get("text") == "from outside"][0]
    assert msg["color"] == "FFFFFF"
    assert "fontInfo" not in msg


# ─── 觀眾頁初始值、admin 的 style_defaults、另存主題 ──────────────────────


def test_viewer_page_starts_on_the_theme_defaults(client, fonts):
    _set_theme(color=THEME_COLOR_RAW, font="ThemeFont")
    html = client.get("/").get_data(as_text=True)
    assert f'id="colorInput" value="{THEME_COLOR}"' in html
    assert f'data-theme-default-color="{THEME_COLOR}"' in html
    assert 'data-theme-default-font="ThemeFont"' in html
    assert '<option value="">ThemeFont</option>' in html


def test_viewer_page_without_overrides_has_no_theme_markers(client):
    html = client.get("/").get_data(as_text=True)
    assert "data-theme-default-" not in html
    assert f'id="colorInput" value="{GLOBAL_COLOR}"' in html
    assert f'<option value="">{GLOBAL_FONT}</option>' in html


def test_admin_themes_reports_whether_the_theme_value_was_used(client, fonts):
    token = _login(client)
    _set_theme(color=THEME_COLOR_RAW, font="GoneFont")
    data = client.get("/admin/themes", headers={"X-CSRF-Token": token}).get_json()
    sd = data["style_defaults"]
    assert sd["theme"] == "default"
    assert sd["Color"] == {
        "value": THEME_COLOR,
        "source": "theme",
        "global": GLOBAL_COLOR,
        "theme_value": THEME_COLOR_RAW,
        "rejected": False,
    }
    assert sd["FontFamily"]["value"] == GLOBAL_FONT
    assert sd["FontFamily"]["source"] == "global"
    assert sd["FontFamily"]["rejected"] is True
    assert sd["FontFamily"]["theme_value"] == "GoneFont"


def test_saving_a_theme_as_new_carries_its_font_and_color(app, fonts):
    _set_theme(color=THEME_COLOR_RAW, font="ThemeFont")
    meta = theme_svc.create_user_theme("My copy", "default")
    try:
        assert theme_overrides.get_for(meta["name"]) == {
            "color": THEME_COLOR_RAW,
            "font_family": "ThemeFont",
        }
    finally:
        theme_svc.delete_user_theme(meta["name"])
