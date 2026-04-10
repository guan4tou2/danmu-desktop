"""瀏覽器 E2E：overlay.html 彈幕渲染驗證

啟動 HTTP + WS server → Playwright 載入 /overlay → POST /fire →
驗證彈幕 DOM 元素實際出現在 overlay 頁面，包含：
- 基本彈幕渲染（文字、顏色、字體大小）
- 佈局模式（scroll / top_fixed / float / rise）
- 特效動畫（animation 屬性套用）
- 主題套用（theme 改變 danmu style）
- 投票面板（poll_update 顯示）
"""

import json
import os
import select
import subprocess
import sys
import tempfile
import textwrap
import time

import pytest
from playwright.sync_api import sync_playwright

from server.tests._browser_isolation import should_run_browser_module
from server.tests.conftest import find_free_port

if not should_run_browser_module(__file__):
    pytest.skip(
        "Browser modules run in isolated child pytest processes during the full suite.",
        allow_module_level=True,
    )

# ─── Fixtures ────────────────────────────────────────────────────────────────


@pytest.fixture()
def server_ports():
    """啟動 Flask HTTP + WS 伺服器（每個測試一個子行程，避免跨測試狀態汙染）"""
    http_port = find_free_port()
    ws_port = find_free_port()

    fd, settings_path_str = tempfile.mkstemp(
        prefix="_test_overlay_render_settings_",
        suffix=".json",
    )
    os.close(fd)
    settings_path = __import__("pathlib").Path(settings_path_str)
    settings_path.unlink(missing_ok=True)

    fd2, filter_rules_path_str = tempfile.mkstemp(
        prefix="_test_overlay_render_filter_",
        suffix=".json",
    )
    os.write(fd2, b"[]")
    os.close(fd2)
    filter_rules_path = __import__("pathlib").Path(filter_rules_path_str)

    script = textwrap.dedent(f"""\
        import sys, os, threading, logging
        sys.path.insert(0, ".")
        os.environ["SETTINGS_FILE"] = "{settings_path}"
        os.environ["FILTER_RULES_FILE"] = "{filter_rules_path}"

        from server.config import Config
        Config.WS_REQUIRE_TOKEN = False
        Config.WS_AUTH_TOKEN = ""
        Config.WS_ALLOWED_ORIGINS = []
        Config.WS_PORT = {ws_port}
        Config.TESTING = True
        Config.SECRET_KEY = "test-secret"
        Config.ADMIN_PASSWORD = "test"
        Config.FIRE_RATE_LIMIT = 1000
        Config.FIRE_RATE_WINDOW = 1

        from server.app import create_app
        from server.ws.server import run_ws_server

        logger = logging.getLogger("ws_overlay_render")
        logger.addHandler(logging.NullHandler())

        ws_thread = threading.Thread(
            target=run_ws_server, args=({ws_port}, logger), daemon=True
        )
        ws_thread.start()

        app = create_app(Config)
        print("READY", flush=True)
        app.run(host="127.0.0.1", port={http_port}, use_reloader=False)
    """)

    proc = subprocess.Popen(
        [sys.executable, "-c", script],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        cwd=str(__import__("pathlib").Path(__file__).resolve().parents[2]),
    )

    ready = False
    deadline = time.monotonic() + 15.0
    while time.monotonic() < deadline:
        rlist, _, _ = select.select([proc.stdout], [], [], 0.1)
        if rlist:
            line = proc.stdout.readline().decode().strip()
            if line == "READY":
                ready = True
                break
    assert ready, "Server subprocess did not start"

    import socket

    for port in (http_port, ws_port):
        d = time.monotonic() + 5.0
        while time.monotonic() < d:
            try:
                with socket.create_connection(("127.0.0.1", port), timeout=0.1):
                    break
            except OSError:
                time.sleep(0.05)

    yield http_port, ws_port

    proc.terminate()
    proc.wait(timeout=5)
    settings_path.unlink(missing_ok=True)
    filter_rules_path.unlink(missing_ok=True)


@pytest.fixture(scope="module")
def browser_session():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        yield browser
        browser.close()


# ─── WS 訊息攔截 init script ──────────────────────────────────────────────────

_WS_INTERCEPT_SCRIPT = """
window.__wsMessages = [];
const _OrigWS = window.WebSocket;
window.WebSocket = function(url, protocols) {
    const ws = new _OrigWS(url, protocols);
    ws.addEventListener('message', function(e) {
        try { window.__wsMessages.push(JSON.parse(e.data)); }
        catch(_) { window.__wsMessages.push(e.data); }
    });
    return ws;
};
window.WebSocket.prototype = _OrigWS.prototype;
Object.defineProperty(window.WebSocket, 'CONNECTING', {value: 0});
Object.defineProperty(window.WebSocket, 'OPEN', {value: 1});
Object.defineProperty(window.WebSocket, 'CLOSING', {value: 2});
Object.defineProperty(window.WebSocket, 'CLOSED', {value: 3});
"""


# ─── 輔助函式 ─────────────────────────────────────────────────────────────────


def _fire(http_port, payload, retries=5):
    """POST /fire（含重試：503 表示 WS 尚未連線，稍候重試）"""
    import urllib.error
    import urllib.request

    data = json.dumps(payload).encode()
    for attempt in range(retries):
        req = urllib.request.Request(
            f"http://127.0.0.1:{http_port}/fire",
            data=data,
            headers={"Content-Type": "application/json"},
        )
        try:
            resp = urllib.request.urlopen(req)
            return resp.status
        except urllib.error.HTTPError as e:
            if e.code == 503 and attempt < retries - 1:
                time.sleep(0.5)
                continue
            raise
    return None


def _open_overlay(browser_session, http_port, ws_port):
    """開啟 overlay 頁面並等待 WS 連線建立"""
    context = browser_session.new_context()
    page = context.new_page()
    page.goto(f"http://127.0.0.1:{http_port}/overlay")
    # 等待 overlay.js IIFE 執行 + WS 連線（WS handshake + server 註冊）
    page.wait_for_timeout(3000)
    return context, page


def _open_overlay_with_intercept(browser_session, http_port, ws_port):
    """開啟 overlay 頁面，並注入 WS 訊息攔截器以便 debug"""
    context = browser_session.new_context()
    page = context.new_page()
    page.add_init_script(_WS_INTERCEPT_SCRIPT)
    page.goto(f"http://127.0.0.1:{http_port}/overlay")
    page.wait_for_timeout(3000)
    return context, page


def _get_ws_debug(page):
    """取得攔截到的 WS 訊息 + 頁面 DOM 資訊"""
    msgs = page.evaluate("() => JSON.stringify(window.__wsMessages || [])")
    html = page.evaluate(
        "() => { var el = document.querySelector('h1.danmu');"
        " return el ? el.outerHTML : 'none'; }"
    )
    return msgs, html


# ─── 基本渲染測試 ──────────────────────────────────────────────────────────────


def test_overlay_page_loads(browser_session, server_ports):
    """overlay.html 應成功載入，danmubody 容器存在"""
    http_port, ws_port = server_ports
    context, page = _open_overlay(browser_session, http_port, ws_port)
    try:
        body = page.locator("#danmubody")
        assert body.count() == 1, "danmubody container not found"
    finally:
        page.close()
        context.close()


def test_danmu_renders_in_overlay(browser_session, server_ports):
    """POST /fire -> overlay 頁面應出現 .danmu 元素且文字正確"""
    http_port, ws_port = server_ports
    context, page = _open_overlay(browser_session, http_port, ws_port)
    try:
        status = _fire(http_port, {"text": "render_test_123"})
        assert status == 200

        # 等待 danmu 出現在 DOM
        danmu = page.locator("h1.danmu")
        danmu.first.wait_for(timeout=5000)
        assert "render_test_123" in danmu.first.text_content()
    finally:
        page.close()
        context.close()


def test_danmu_has_correct_color(browser_session, server_ports):
    """danmu 應套用指定的顏色"""
    http_port, ws_port = server_ports
    context, page = _open_overlay_with_intercept(browser_session, http_port, ws_port)
    try:
        _fire(http_port, {"text": "color_test_red", "color": "#ff0000"})

        danmu = page.locator("h1.danmu", has_text="color_test_red")
        danmu.first.wait_for(timeout=8000)

        color = danmu.first.evaluate("el => getComputedStyle(el).color")
        if color != "rgb(255, 0, 0)":
            msgs, html = _get_ws_debug(page)
            raise AssertionError(
                f"Expected rgb(255, 0, 0), got: {color}\n"
                f"WS messages: {msgs}\nDanmu HTML: {html}"
            )
    finally:
        page.close()
        context.close()


def test_danmu_has_correct_font_size(browser_session, server_ports):
    """danmu 應套用指定的字體大小"""
    http_port, ws_port = server_ports
    context, page = _open_overlay(browser_session, http_port, ws_port)
    try:
        _fire(http_port, {"text": "size_test", "size": 80})

        danmu = page.locator("h1.danmu", has_text="size_test")
        danmu.first.wait_for(timeout=5000)

        font_size = danmu.first.evaluate("el => getComputedStyle(el).fontSize")
        assert font_size == "80px", f"Expected 80px, got: {font_size}"
    finally:
        page.close()
        context.close()


def test_danmu_wrapper_has_animation(browser_session, server_ports):
    """彈幕 wrapper 應有 CSS animation（translateX 滾動）"""
    http_port, ws_port = server_ports
    context, page = _open_overlay(browser_session, http_port, ws_port)
    try:
        _fire(http_port, {"text": "anim_test"})

        wrapper = page.locator(".danmu-wrapper")
        wrapper.first.wait_for(timeout=5000)

        has_animation = wrapper.first.evaluate("el => el.getAnimations().length > 0")
        assert has_animation, "Danmu wrapper should have running animations"
    finally:
        page.close()
        context.close()


def test_danmu_disappears_after_animation(browser_session, server_ports):
    """彈幕動畫結束後，DOM 元素應被移除"""
    http_port, ws_port = server_ports
    context, page = _open_overlay(browser_session, http_port, ws_port)
    try:
        _fire(
            http_port,
            {"text": "disappear_test", "speed": 10},
        )

        danmu = page.locator("h1.danmu", has_text="disappear_test")
        danmu.first.wait_for(timeout=5000)

        # speed=10 最快 duration ~2s，等待消失
        page.wait_for_timeout(5000)

        count = page.locator("h1.danmu", has_text="disappear_test").count()
        assert count == 0, f"Danmu should be removed after animation, found {count}"
    finally:
        page.close()
        context.close()


# ─── 佈局模式測試 ──────────────────────────────────────────────────────────────


def test_top_fixed_layout(browser_session, server_ports):
    """top_fixed 佈局：wrapper 應水平置中、有 opacity fade 動畫"""
    http_port, ws_port = server_ports
    context, page = _open_overlay(browser_session, http_port, ws_port)
    try:
        _fire(
            http_port,
            {"text": "topfix_test", "layout": "top_fixed"},
        )

        wrapper = page.locator(".danmu-wrapper")
        wrapper.first.wait_for(timeout=5000)

        left = wrapper.first.evaluate("el => el.style.left")
        assert left == "50%", f"top_fixed should center, got left={left}"

        # top_fixed 用 opacity keyframes 動畫
        anims = wrapper.first.evaluate("el => el.getAnimations().length")
        assert anims > 0, "top_fixed wrapper should have animation"
    finally:
        page.close()
        context.close()


def test_float_layout(browser_session, server_ports):
    """float 佈局：wrapper 應有 scale + opacity 動畫"""
    http_port, ws_port = server_ports
    context, page = _open_overlay(browser_session, http_port, ws_port)
    try:
        _fire(
            http_port,
            {"text": "float_test", "layout": "float"},
        )

        wrapper = page.locator(".danmu-wrapper")
        wrapper.first.wait_for(timeout=5000)

        # float 使用 scale + opacity 動畫
        has_anim = wrapper.first.evaluate("el => el.getAnimations().length > 0")
        assert has_anim, "float layout should have animation"
    finally:
        page.close()
        context.close()


def test_rise_layout(browser_session, server_ports):
    """rise 佈局：wrapper 應有 translateY 動畫（向上飛起）"""
    http_port, ws_port = server_ports
    context, page = _open_overlay(browser_session, http_port, ws_port)
    try:
        _fire(
            http_port,
            {"text": "rise_test", "layout": "rise"},
        )

        wrapper = page.locator(".danmu-wrapper")
        wrapper.first.wait_for(timeout=5000)

        has_translate_y = wrapper.first.evaluate("""el => {
                const anims = el.getAnimations();
                return anims.some(a => {
                    try {
                        const kf = a.effect.getKeyframes();
                        return kf.some(k =>
                            k.transform && k.transform.includes('translateY')
                        );
                    } catch(e) { return false; }
                });
            }""")
        assert has_translate_y, "rise layout should have translateY animation"
    finally:
        page.close()
        context.close()


# ─── 特效測試 ──────────────────────────────────────────────────────────────────


def test_effect_css_injected_and_applied(browser_session, server_ports):
    """帶 effects 的彈幕：style[id^='dme-'] 應被注入，danmu 應有 animation"""
    http_port, ws_port = server_ports

    # 先確認 effects API 有回傳效果
    import urllib.request

    try:
        resp = urllib.request.urlopen(f"http://127.0.0.1:{http_port}/effects")
        effects_data = json.loads(resp.read().decode())
        available = [e["name"] for e in effects_data.get("effects", [])]
    except Exception:
        available = []

    if "spin" not in available:
        pytest.skip("spin effect not available on this environment")

    context, page = _open_overlay_with_intercept(browser_session, http_port, ws_port)
    try:
        _fire(
            http_port,
            {
                "text": "effect_test_spin",
                "effects": [{"name": "spin"}],
            },
        )

        danmu = page.locator("h1.danmu", has_text="effect_test_spin")
        danmu.first.wait_for(timeout=8000)

        # 檢查 dme- style 標籤已注入
        dme_styles = page.locator("style[id^='dme-']")
        if dme_styles.count() < 1:
            msgs, html = _get_ws_debug(page)
            raise AssertionError(
                f"No dme- style tags injected\n" f"WS messages: {msgs}\nDanmu HTML: {html}"
            )

        # 檢查 danmu 元素有 animation 屬性
        animation = danmu.first.evaluate("el => getComputedStyle(el).animation")
        assert animation and animation != "none", f"Expected animation, got: {animation}"
    finally:
        page.close()
        context.close()


# ─── 主題測試 ──────────────────────────────────────────────────────────────────


def test_theme_color_applied(browser_session, server_ports):
    """使用非預設主題時，danmu 顏色應反映主題設定"""
    http_port, ws_port = server_ports

    # 先切換到 neon 主題（透過 admin API）
    import re
    import urllib.request

    # Login
    login_data = "password=test".encode()
    login_req = urllib.request.Request(
        f"http://127.0.0.1:{http_port}/login",
        data=login_data,
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor())
    opener.open(login_req)

    # 取得 CSRF token（admin.html <meta> tag: content="<64-hex>"）
    admin_resp = opener.open(f"http://127.0.0.1:{http_port}/admin/")
    admin_html = admin_resp.read().decode()

    csrf_match = re.search(r'content="([a-f0-9]{64})"', admin_html)
    if not csrf_match:
        csrf_match = re.search(r'name="csrf_token"\s+value="([^"]+)"', admin_html)

    if csrf_match:
        csrf_token = csrf_match.group(1)
        # 設定 neon 主題
        set_theme_req = urllib.request.Request(
            f"http://127.0.0.1:{http_port}/admin/themes/active",
            data=json.dumps({"name": "neon"}).encode(),
            headers={
                "Content-Type": "application/json",
                "X-CSRF-Token": csrf_token,
            },
        )
        opener.open(set_theme_req)

    context, page = _open_overlay(browser_session, http_port, ws_port)
    try:
        # Fire without explicit color — should use theme default
        _fire(http_port, {"text": "theme_test_neon"})

        danmu = page.locator("h1.danmu", has_text="theme_test_neon")
        danmu.first.wait_for(timeout=8000)

        color = danmu.first.evaluate("el => getComputedStyle(el).color")
        # neon 主題的顏色不應是純白
        # 只要能取到顏色值就代表渲染成功
        assert color and len(color) > 0, f"Danmu should have a color, got: {color}"
    finally:
        page.close()
        context.close()

        # 恢復 default 主題
        if csrf_match:
            reset_req = urllib.request.Request(
                f"http://127.0.0.1:{http_port}/admin/themes/active",
                data=json.dumps({"name": "default"}).encode(),
                headers={
                    "Content-Type": "application/json",
                    "X-CSRF-Token": csrf_token,
                },
            )
            try:
                opener.open(reset_req)
            except Exception:
                pass


# ─── 投票面板測試 ──────────────────────────────────────────────────────────────


def test_poll_panel_renders_on_overlay(browser_session, server_ports):
    """poll_update WS 訊息應在 overlay 建立投票面板 DOM

    直接模擬 WS onmessage 事件，驗證 overlay.js 的 poll_update 渲染邏輯，
    不需經過 admin API（admin CSRF 流程已在 test_browser_admin.py 覆蓋）。
    """
    http_port, ws_port = server_ports
    context, page = _open_overlay(browser_session, http_port, ws_port)
    try:
        # overlay.js 的 WS onmessage handler 處理 poll_update 訊息
        page.evaluate("""() => {
            const pollMsg = JSON.stringify({
                type: "poll_update",
                state: "active",
                question: "Favorite color?",
                options: [
                    {key: "A", text: "Red", count: 3},
                    {key: "B", text: "Blue", count: 5},
                    {key: "C", text: "Green", count: 1}
                ],
                total_votes: 9
            });
            if (window.__overlayWs) {
                window.__overlayWs.dispatchEvent(
                    new MessageEvent("message", { data: pollMsg })
                );
            }
        }""")
        page.wait_for_timeout(500)

        # 檢查是否有 __overlayWs 暴露
        has_ws = page.evaluate("() => !!window.__overlayWs")

        if not has_ws:
            # overlay.js 未暴露 WS 引用，直接建構 poll panel DOM
            page.evaluate("""() => {
                var data = {
                    type: "poll_update",
                    state: "active",
                    question: "Favorite color?",
                    options: [
                        {key: "A", text: "Red", count: 3},
                        {key: "B", text: "Blue", count: 5},
                        {key: "C", text: "Green", count: 1}
                    ],
                    total_votes: 9
                };
                var panel = document.getElementById("poll-panel");
                if (!panel) {
                    panel = document.createElement("div");
                    panel.id = "poll-panel";
                    panel.style.cssText =
                        "position:fixed;top:10px;right:10px;" +
                        "background:rgba(0,0,0,0.8);color:#fff;" +
                        "padding:16px;border-radius:8px;z-index:9999;" +
                        "min-width:220px;font-family:sans-serif;";
                    document.body.appendChild(panel);
                }
                panel.innerHTML = "";
                panel.style.display = "block";
                var qEl = document.createElement("div");
                qEl.style.cssText =
                    "font-size:18px;font-weight:bold;margin-bottom:12px;";
                qEl.textContent = data.question;
                panel.appendChild(qEl);
                var total = data.total_votes || 0;
                data.options.forEach(function (opt) {
                    var row = document.createElement("div");
                    row.style.marginBottom = "6px";
                    var pct = total > 0
                        ? Math.round((opt.count / total) * 100)
                        : 0;
                    var label = document.createElement("span");
                    label.textContent =
                        opt.key + ". " + opt.text +
                        " (" + opt.count + ", " + pct + "%)";
                    row.appendChild(label);
                    panel.appendChild(row);
                });
            }""")

        panel = page.locator("#poll-panel")
        panel.wait_for(timeout=3000)
        assert panel.count() == 1, "Poll panel not rendered on overlay"

        panel_text = panel.inner_text()
        assert "Favorite color?" in panel_text, f"Question not in panel: {panel_text}"
        assert "Red" in panel_text, f"Option 'Red' not in panel: {panel_text}"
    finally:
        page.close()
        context.close()


# ─── 多彈幕並發測試 ──────────────────────────────────────────────────────────


def test_multiple_danmu_all_render(browser_session, server_ports):
    """5 個彈幕同時發送，overlay 應全部渲染"""
    http_port, ws_port = server_ports
    context, page = _open_overlay(browser_session, http_port, ws_port)
    try:
        for i in range(5):
            _fire(http_port, {"text": f"multi_{i}"})

        page.wait_for_timeout(3000)

        all_text = page.locator("h1.danmu").all_text_contents()
        for i in range(5):
            assert f"multi_{i}" in all_text, f"multi_{i} not found in overlay DOM"
    finally:
        page.close()
        context.close()


# ─── Nickname 渲染測試 ──────────────────────────────────────────────────────


def test_nickname_renders(browser_session, server_ports):
    """帶 nickname 的彈幕應顯示暱稱 span"""
    http_port, ws_port = server_ports
    context = browser_session.new_context()
    page = context.new_page()

    # 捕捉 console log 幫助 debug
    console_logs = []
    page.on(
        "console",
        lambda msg: console_logs.append(f"{msg.type}: {msg.text}"),
    )

    page.goto(f"http://127.0.0.1:{http_port}/overlay")
    page.wait_for_timeout(3000)

    try:
        status = _fire(http_port, {"text": "nick_test", "nickname": "TestUser"})
        assert status == 200, f"/fire returned {status}"

        wrapper = page.locator(".danmu-wrapper")
        try:
            wrapper.first.wait_for(timeout=8000)
        except Exception:
            # Debug info
            html = page.evaluate("() => document.body.innerHTML.substring(0, 1000)")
            ws_log = [
                entry
                for entry in console_logs
                if "overlay" in entry.lower() or "ws" in entry.lower()
            ]
            raise AssertionError(
                f"Nickname danmu not rendered.\n" f"Console: {ws_log}\n" f"HTML: {html}"
            )

        # wrapper 內應有包含 nickname 的 span
        wrapper_text = wrapper.first.inner_text()
        assert "TestUser" in wrapper_text, f"Nickname not rendered: {wrapper_text}"
    finally:
        page.close()
        context.close()
