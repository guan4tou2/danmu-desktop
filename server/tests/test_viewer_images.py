"""觀眾外部圖片政策（services/viewer_images.py，2026-11-14）。

預設關閉；開啟後可限定網站與副檔名。判斷一律在伺服器做——舊版顯示端會用
正則把圖片網址文字轉成圖片，所以不合格的網址不能原樣轉送。貼圖與 emoji
是伺服器自己產生的，不受這些設定影響。
"""

# pyright: reportMissingImports=false

import json
from unittest.mock import patch

import pytest

from server.services import viewer_images, ws_queue
from server.services.viewer_images import BLOCKED, IMAGE, INVALID, TEXT, ViewerImagesError

# 舊版 Electron 顯示端（track-manager.js）判斷圖片用的正則，原樣搬過來。
# 伺服器轉送出去的文字只要對得上它，舊顯示端就會建 <img>。
_LEGACY_RE = r"^https?://([^\s/]+/)*[^\s/]+\.(gif|png|jpeg|jpg|webp)$"


@pytest.fixture(autouse=True)
def _overlay_connected():
    """/fire 在沒有顯示端連線時直接回 503；這裡的測試要走到圖片判斷那一段。"""
    from server.services.ws_state import update_ws_client_count

    update_ws_client_count(1)
    ws_queue.dequeue_all()
    yield
    ws_queue.dequeue_all()


def _legacy_would_render_image(text):
    import re

    # JS 的 `$` 沒有 m 旗標時只對字串結尾；Python 用 \Z 才等價。
    return re.match(_LEGACY_RE[:-1] + r"\Z", text, re.I) is not None


def _login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def _patch(client, payload):
    token = _login(client)
    return client.patch("/admin/viewer-images", json=payload, headers={"X-CSRF-Token": token})


# ─── 預設與持久化 ──────────────────────────────────────────────────────────


def test_defaults_are_off_with_all_supported_extensions():
    assert viewer_images.get_state() == {
        "enabled": False,
        "hosts": [],
        "extensions": ["png", "jpg", "gif", "webp"],
    }


def test_settings_persist_across_reload():
    viewer_images.set_state({"enabled": True, "hosts": ["cdn.example.com"], "extensions": ["png"]})
    on_disk = json.loads(viewer_images._state.path.read_text(encoding="utf-8"))
    assert on_disk["enabled"] is True
    # 丟掉記憶體快取＝模擬重啟，從檔案重新載入
    viewer_images._state.reset_for_tests()
    assert viewer_images.get_state() == {
        "enabled": True,
        "hosts": ["cdn.example.com"],
        "extensions": ["png"],
    }


def test_corrupt_state_file_falls_back_to_off(tmp_path):
    viewer_images._state.path.write_text('{"enabled": "yes"}', encoding="utf-8")
    viewer_images._state.reset_for_tests()
    assert viewer_images.get_state()["enabled"] is False


# ─── 管理員輸入正規化 ──────────────────────────────────────────────────────


@pytest.mark.parametrize(
    "raw, expected",
    [
        ("example.com", "example.com"),
        ("  Example.COM.  ", "example.com"),
        ("https://I.Example.com/some/path.png?x=1", "i.example.com"),
        ("http://example.com:8080/", "example.com"),
        ("例子.測試", "xn--fsqu00a.xn--g6w251d"),
        ("xn--fsqu00a.xn--g6w251d", "xn--fsqu00a.xn--g6w251d"),
        ("203.0.113.7", "203.0.113.7"),
    ],
)
def test_host_entry_normalization(raw, expected):
    assert viewer_images.normalize_host_entry(raw) == expected


@pytest.mark.parametrize(
    "raw",
    [
        "*.example.com",
        "exa mple.com",
        "example.com/path",
        "example.com:8443",
        "user@example.com",
        "https://user:pw@example.com/",
        "ftp://example.com/",
        "exa_mple.com",
        "-example.com",
        "example..com",
        "a" * 64 + ".com",
        "ex\\ample.com",
        "ｅxample.com",  # 全形字：IDNA 會改寫，不放行
        "example。com",  # 特殊句點
        "faß.de",  # 各實作對應結果不同
    ],
)
def test_host_entry_rejections(raw):
    with pytest.raises(ViewerImagesError) as exc:
        viewer_images.normalize_host_entry(raw)
    assert exc.value.code == "invalid_host"


def test_hosts_are_deduplicated_and_blank_lines_skipped():
    state = viewer_images.set_state(
        {"hosts": ["Example.com", "", "example.com.", "https://example.com/a.png", "b.test"]}
    )
    assert state["hosts"] == ["example.com", "b.test"]


def test_host_count_is_limited():
    hosts = [f"h{i}.example.com" for i in range(viewer_images.MAX_HOSTS + 1)]
    with pytest.raises(ViewerImagesError) as exc:
        viewer_images.set_state({"hosts": hosts})
    assert exc.value.code == "too_many_hosts"
    viewer_images.set_state({"hosts": hosts[:-1]})  # 剛好上限可以


@pytest.mark.parametrize(
    "raw, expected",
    [
        (["PNG", "jpeg", ".gif"], ["png", "jpg", "gif"]),
        (["webp", "webp"], ["webp"]),
        ([], []),
    ],
)
def test_extension_normalization(raw, expected):
    assert viewer_images.set_state({"extensions": raw})["extensions"] == expected


@pytest.mark.parametrize("bad", [["svg"], ["bmp"], ["png", 3], "png"])
def test_extension_rejections(bad):
    with pytest.raises(ViewerImagesError) as exc:
        viewer_images.set_state({"extensions": bad})
    assert exc.value.code == "invalid_extension"


@pytest.mark.parametrize("bad", [{"enabled": "true"}, {"enabled": 1}, {"other": 1}, [1]])
def test_shape_rejections(bad):
    with pytest.raises(ViewerImagesError):
        viewer_images.set_state(bad)


# ─── 主機比對邊界 ──────────────────────────────────────────────────────────


@pytest.fixture
def allow_example():
    viewer_images.set_state({"enabled": True, "hosts": ["example.com"]})


@pytest.mark.parametrize(
    "url",
    [
        "https://example.com/a.png",
        "https://i.example.com/a.png",
        "https://deep.sub.example.com/a.png",
        "https://EXAMPLE.com/a.PNG",
        "https://example.com./a.png",
        "https://example.com:8443/a.png",
        "https://example.com/a.png?size=large",
        "https://example.com/a.png#frag",
    ],
)
def test_allowed_hosts(allow_example, url):
    assert viewer_images.classify(url) == (IMAGE, "ok")


@pytest.mark.parametrize(
    "url, reason",
    [
        ("https://notexample.com/a.png", "host"),
        ("https://example.com.evil.test/a.png", "host"),
        ("https://example.co/a.png", "host"),
        ("https://user@example.com/a.png", "credentials"),
        ("https://example.com@evil.test/a.png", "credentials"),
        ("https://user:pw@example.com/a.png", "credentials"),
        ("http://example.com/a.png", "scheme"),
        ("https://evil.test\\.example.com/a.png", "malformed"),
        ("https://ex%61mple.com/a.png", "malformed"),
        ("https://example.com/a .png", "malformed"),
        ("https://exam\tple.com/a.png", "malformed"),
        ("https://ｅxample.com/a.png", "malformed"),
        ("https://example。com/a.png", "malformed"),
        ("https://[::1]/a.png", "malformed"),
        ("https://example.com:99999/a.png", "malformed"),
        ("https:///example.com/a.png", "malformed"),
    ],
)
def test_rejected_hosts(allow_example, url, reason):
    assert viewer_images.classify(url) == (BLOCKED, reason)


def test_idn_host_in_allow_list_matches_both_spellings():
    viewer_images.set_state({"enabled": True, "hosts": ["例子.測試"]})
    assert viewer_images.classify("https://例子.測試/a.png")[0] == IMAGE
    assert viewer_images.classify("https://img.xn--fsqu00a.xn--g6w251d/a.png")[0] == IMAGE
    assert viewer_images.classify("https://例子.example/a.png")[0] == BLOCKED


def test_ip_entry_matches_only_that_address():
    viewer_images.set_state({"enabled": True, "hosts": ["203.0.113.7"]})
    assert viewer_images.classify("https://203.0.113.7/a.png")[0] == IMAGE
    assert viewer_images.classify("https://203.0.113.70/a.png")[0] == BLOCKED
    assert viewer_images.classify("https://x.203.0.113.7/a.png")[0] == BLOCKED


def test_empty_host_list_allows_any_https_host():
    viewer_images.set_state({"enabled": True, "hosts": []})
    assert viewer_images.classify("https://anything.example.org/a.webp")[0] == IMAGE
    assert viewer_images.classify("https://198.51.100.1/a.gif")[0] == IMAGE
    # 帳密與 http 仍然不放行
    assert viewer_images.classify("https://u@anything.example.org/a.png")[0] == BLOCKED
    assert viewer_images.classify("http://anything.example.org/a.png")[0] == BLOCKED


# ─── 副檔名 ───────────────────────────────────────────────────────────────


def test_extension_filter_uses_the_path_not_the_query():
    viewer_images.set_state({"enabled": True, "extensions": ["png"]})
    assert viewer_images.classify("https://example.com/a.png")[0] == IMAGE
    assert viewer_images.classify("https://example.com/a.png?v=1.gif")[0] == IMAGE
    assert viewer_images.classify("https://example.com/a.gif")[0] == BLOCKED
    assert viewer_images.classify("https://example.com/a.gif?x=.png") == (BLOCKED, "extension")


def test_jpg_covers_jpeg():
    viewer_images.set_state({"enabled": True, "extensions": ["jpg"]})
    assert viewer_images.classify("https://example.com/a.jpeg")[0] == IMAGE
    assert viewer_images.classify("https://example.com/a.JPG")[0] == IMAGE


def test_no_extensions_selected_blocks_every_image():
    viewer_images.set_state({"enabled": True, "extensions": []})
    assert viewer_images.classify("https://example.com/a.png") == (BLOCKED, "extension")


def test_svg_is_never_an_image():
    viewer_images.set_state({"enabled": True})
    assert viewer_images.classify("https://example.com/a.svg") == (TEXT, "")
    assert viewer_images.classify("https://example.com/a.svg", True) == (BLOCKED, "extension")


# ─── 分類：哪些文字算圖片 ────────────────────────────────────────────────


def test_disabled_blocks_every_image_url():
    assert viewer_images.classify("https://example.com/a.png") == (BLOCKED, "disabled")


@pytest.mark.parametrize(
    "text",
    ["hello", ":fire:", "see https://example.com/a.png", "https://example.com/page", ""],
)
def test_plain_text_is_text(text):
    assert viewer_images.classify(text) == (TEXT, "")


def test_flagged_non_url_is_invalid():
    assert viewer_images.classify("not-a-url", True) == (INVALID, "malformed")


@pytest.mark.parametrize(
    "text",
    [
        "https://evil.test/a.png",
        "HTTPS://evil.test/A.PNG",
        "http://evil.test/a.webp",
        "https://evil.test/a b.jpeg",
        "https://evil.test/\x1fa.gif",
        "https://evil.test/a.png?x",
    ],
)
def test_anything_a_legacy_display_could_render_is_checked(text):
    """伺服器的「是不是圖片」判斷要比舊顯示端的正則寬，關閉時一律擋下。"""
    assert viewer_images.classify(text)[0] == BLOCKED


def test_neutralized_text_no_longer_matches_the_legacy_regex():
    url = "https://evil.test/a.png"
    assert _legacy_would_render_image(url)
    assert not _legacy_would_render_image(viewer_images.neutralize(url))
    assert viewer_images.neutralize(viewer_images.neutralize(url)) == viewer_images.neutralize(url)


# ─── /fire ────────────────────────────────────────────────────────────────


def test_fire_rejects_external_image_url_when_disabled(client):
    resp = client.post("/fire", json={"text": "https://evil.test/a.png"})
    assert resp.status_code == 400
    assert resp.get_json()["reason"] == "image_not_allowed"
    assert ws_queue.dequeue_all() == []


def test_fire_rejects_flagged_external_image_when_disabled(client):
    resp = client.post("/fire", json={"text": "https://evil.test/a.png", "isImage": True})
    assert resp.status_code == 400
    assert resp.get_json()["reason"] == "image_not_allowed"
    assert ws_queue.dequeue_all() == []


def test_fire_marks_allowed_image_url_as_image(client):
    viewer_images.set_state({"enabled": True})
    resp = client.post("/fire", json={"text": "https://example.com/a.png"})
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    assert msg["isImage"] is True
    assert msg["text"] == "https://example.com/a.png"


def test_fire_rejects_host_outside_allow_list(client):
    viewer_images.set_state({"enabled": True, "hosts": ["example.com"]})
    resp = client.post("/fire", json={"text": "https://example.com.evil.test/a.png"})
    assert resp.status_code == 400
    assert resp.get_json()["reason"] == "image_not_allowed"
    assert ws_queue.dequeue_all() == []


def test_fire_plain_text_and_links_unaffected(client):
    client.post("/fire", json={"text": "hello"})
    client.post("/fire", json={"text": "https://example.com/page"})
    msgs = ws_queue.dequeue_all()
    assert [m["text"] for m in msgs] == ["hello", "https://example.com/page"]
    assert all(m["isImage"] is False for m in msgs)


@pytest.mark.parametrize("enabled", [False, True])
def test_fire_sticker_works_regardless_of_setting(client, enabled):
    viewer_images.set_state({"enabled": enabled, "hosts": ["only.example.com"]})
    with patch("server.routes.api.sticker_service.resolve", return_value="fire.gif"):
        resp = client.post("/fire", json={"text": ":fire:"})
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    assert msg["isImage"] is True
    assert msg["text"].endswith("/static/stickers/fire.gif")


def test_fire_emoji_works_when_disabled(client):
    fake = {"emojis": [{"name": "wave", "dataUrl": "data:image/png;base64,AA=="}]}
    with patch("server.routes.api.emoji_service.parse", return_value=fake):
        resp = client.post("/fire", json={"text": "hi :wave:"})
    assert resp.status_code == 200
    msg = ws_queue.dequeue_all()[0]
    assert msg["isImage"] is False
    assert msg["emojis"] == fake["emojis"]


# ─── 不能回錯誤的轉送路徑 ─────────────────────────────────────────────────


def test_apply_to_payload_neutralizes_or_marks():
    blocked = viewer_images.apply_to_payload({"text": "https://evil.test/a.png"})
    assert blocked["text"] != "https://evil.test/a.png"
    assert not _legacy_would_render_image(blocked["text"])
    assert not blocked.get("isImage")

    viewer_images.set_state({"enabled": True})
    allowed = viewer_images.apply_to_payload({"text": "https://example.com/a.png"})
    assert allowed == {"text": "https://example.com/a.png", "isImage": True}

    sticker = {"text": "http://host/static/stickers/fire.gif", "isImage": True}
    assert viewer_images.apply_to_payload(dict(sticker)) == sticker


def test_review_queue_approval_neutralizes_disallowed_image(client):
    from server.services import live_feed_buffer
    from server.services.filter_engine import filter_engine
    from server.services.mod_queue import mod_queue

    rule_id = filter_engine.add_rule({"type": "keyword", "pattern": "evil", "action": "review"})
    try:
        resp = client.post("/fire", json={"text": "https://evil.test/a.png"})
        assert resp.status_code == 202
        qid = resp.get_json()["queue_id"]
        token = _login(client)
        approved = client.post(
            "/admin/modqueue/approve", json={"id": qid}, headers={"X-CSRF-Token": token}
        )
        assert approved.status_code == 200
        sent = live_feed_buffer.snapshot()[-1]["data"]
        assert not _legacy_would_render_image(sent["text"])
        assert not sent["isImage"]
    finally:
        filter_engine.remove_rule(rule_id)
        mod_queue._pending.clear()


def test_replay_neutralizes_disallowed_image_text():
    from server.services.replay import ReplayService

    msg = ReplayService._build_message({"text": "https://evil.test/a.png"})
    assert not _legacy_would_render_image(msg["text"])
    sticker = ReplayService._build_message(
        {"text": "http://host/static/stickers/fire.gif", "isImage": True}
    )
    assert sticker["text"] == "http://host/static/stickers/fire.gif"
    assert sticker["isImage"] is True


# ─── 後台路由 ─────────────────────────────────────────────────────────────


def test_admin_route_requires_login(client):
    assert client.get("/admin/viewer-images").status_code == 401
    assert client.patch("/admin/viewer-images", json={"enabled": True}).status_code in (
        401,
        403,
    )
    assert viewer_images.get_state()["enabled"] is False


def test_admin_route_requires_csrf(client):
    _login(client)
    resp = client.patch("/admin/viewer-images", json={"enabled": True})
    assert resp.status_code in (400, 403)
    assert viewer_images.get_state()["enabled"] is False


def test_admin_route_round_trip(client):
    resp = _patch(client, {"enabled": True, "hosts": ["https://Cdn.Example.com/x.png"]})
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["enabled"] is True
    assert body["hosts"] == ["cdn.example.com"]
    assert body["supported_extensions"] == ["png", "jpg", "gif", "webp"]
    got = client.get("/admin/viewer-images").get_json()
    assert got["hosts"] == ["cdn.example.com"]


def test_admin_route_reports_bad_host_with_code(client):
    resp = _patch(client, {"hosts": ["*.example.com"]})
    assert resp.status_code == 400
    body = resp.get_json()
    assert body["code"] == "invalid_host"
    assert body["detail"] == "*.example.com"
    assert viewer_images.get_state()["hosts"] == []


def test_admin_route_reports_too_many_hosts(client):
    hosts = [f"h{i}.example.com" for i in range(viewer_images.MAX_HOSTS + 1)]
    resp = _patch(client, {"hosts": hosts})
    assert resp.status_code == 400
    assert resp.get_json()["code"] == "too_many_hosts"
    assert resp.get_json()["max"] == viewer_images.MAX_HOSTS


def test_toggle_takes_effect_on_the_next_fire(client):
    from server.services.security import rate_limiter, reset_rate_limit_counters

    def fire():
        # 同一個測試裡連發三則會撞到 /fire 的限流，跟這裡要驗的無關
        rate_limiter.reset()
        reset_rate_limit_counters()
        return client.post("/fire", json={"text": "https://example.com/a.png"}).status_code

    assert fire() == 400
    assert _patch(client, {"enabled": True}).status_code == 200
    assert fire() == 200
    assert _patch(client, {"enabled": False}).status_code == 200
    assert fire() == 400
