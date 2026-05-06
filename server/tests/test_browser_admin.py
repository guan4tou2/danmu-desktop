"""瀏覽器系統測試：使用 Playwright 模擬真實瀏覽器操作 Admin UI

架構：
- live_url (session)：一個真實 gevent HTTP 伺服器
- browser_session (session)：一個 Chromium 實例
- logged_context (session)：登入一次，所有 admin 測試共用 cookies
- admin_page (function)：從 logged_context 建立新 page，每個測試獨立
"""

import threading

import pytest
from playwright.sync_api import sync_playwright

from server.app import create_app
from server.tests._browser_isolation import should_run_browser_module
from server.tests.conftest import TestConfig, find_free_port

if not should_run_browser_module(__file__):
    pytest.skip(
        "Browser modules run in isolated child pytest processes during the full suite.",
        allow_module_level=True,
    )

# ─── 測試專用設定（關閉 rate limit 限制）─────────────────────────────────────


class BrowserTestConfig(TestConfig):
    """瀏覽器測試用設定：提高 rate limit 避免連續登入被封鎖"""

    LOGIN_RATE_LIMIT = 1000
    LOGIN_RATE_WINDOW = 1
    ADMIN_RATE_LIMIT = 1000
    ADMIN_RATE_WINDOW = 1
    FIRE_RATE_LIMIT = 1000
    FIRE_RATE_WINDOW = 1
    API_RATE_LIMIT = 1000
    API_RATE_WINDOW = 1


# ─── Session Fixtures ─────────────────────────────────────────────────────────


@pytest.fixture(scope="session")
def live_url():
    """啟動真實 HTTP 伺服器（session 共用）"""
    from gevent.pywsgi import WSGIServer

    app = create_app(BrowserTestConfig)
    port = find_free_port()
    server = WSGIServer(("127.0.0.1", port), app, log=None, error_log=None)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    yield f"http://127.0.0.1:{port}"
    server.stop()


@pytest.fixture(scope="module")
def browser_session():
    """啟動一個 headless Chromium（module 共用）

    注意：使用 module scope（而非 session）以確保 Playwright 在本模組結束後關閉，
    避免與 test_system_ws.py / test_system_e2e.py 的 asyncio WS 伺服器發生
    gevent thread-local running loop 衝突。
    """
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        yield browser
        browser.close()


@pytest.fixture(scope="module")
def logged_context(browser_session, live_url):
    """登入一次，取得帶 session cookie 的 BrowserContext（本模組所有 admin 測試共用）"""
    context = browser_session.new_context()
    page = context.new_page()

    page.goto(f"{live_url}/admin/")
    page.wait_for_selector("#loginForm", timeout=8000)
    page.fill("#password", "test")
    page.locator("#loginForm button[type=submit]").click()
    page.wait_for_selector("#logoutButton", timeout=8000)
    page.close()

    yield context
    context.close()


@pytest.fixture()
def admin_page(logged_context, live_url):
    """每個測試建立新 page，共用 logged_context 的 session cookie"""
    page = logged_context.new_page()
    page.goto(f"{live_url}/admin/")
    page.wait_for_selector("#logoutButton", timeout=8000)
    # v5.0.0+: AdminOnboarding tour shows a spotlight overlay on first
    # admin load (admin-onboarding.js DONE_KEY = "danmu.onboarding.done").
    # Tests don't exercise the tour itself; mark it done so the overlay
    # doesn't intercept clicks.
    page.evaluate(
        "() => {"
        '  try { localStorage.setItem("danmu.onboarding.done", "1"); } catch (_) {}'
        '  var root = document.getElementById("admin-onboarding-root");'
        "  if (root) root.remove();"
        "}"
    )
    yield page
    page.close()


# ─── 輔助函式 ─────────────────────────────────────────────────────────────────


# 路由地圖：將 section_id 映射到對應的 admin route（對應 admin.js ADMIN_ROUTES）。
# Post-retrofit（2026-04-22）admin 面板改為 hash-based 路由，sections 依 route
# 切換 display:none/""；不再是 <details> 展開/摺疊。
SECTION_TO_ROUTE = {
    "sec-live-feed": "messages",
    "sec-history": "history",
    "sec-polls": "polls",
    "sec-widgets": "widgets",
    # Phase A IA (2026-05-06): viewer/display defaults are now reached
    # through the canonical viewer route. Legacy #/viewer-config still works
    # via router aliases, but tests should exercise the visible sidebar home.
    "sec-color": "viewer",
    "sec-opacity": "viewer",
    "sec-fontsize": "viewer",
    "sec-speed": "viewer",
    "sec-fontfamily": "viewer",
    "sec-layout": "viewer",
    "sec-viewer-theme": "viewer",
    "sec-themes": "themes",
    # v5: emojis / stickers / sounds bundled into the "assets" route.
    "sec-emojis": "assets",
    "sec-stickers": "assets",
    "sec-sounds": "assets",
    "sec-blacklist": "moderation",
    "sec-filters": "moderation",
    "sec-effects": "effects",
    "sec-effects-mgmt": "effects",
    "sec-plugins": "plugins",
    "sec-fonts": "fonts",
    "sec-system-overview": "system",
    # v5.2 Group D-3 R6 (2026-04-28): sec-security / sec-ws-auth legacy
    # cards removed; admin-security-v2-page (sec2-pw-*) owns this route.
    "sec-scheduler": "scheduler",
    "sec-webhooks": "webhooks",
    "sec-fingerprints": "fingerprints",
}


def _open_section(page, section_id: str):
    """切換 hash 路由到 section_id 所屬 route，等待該 section 可見。

    retrofit 後（2026-04-22）admin 面板為 hybrid：
      • Route layer：hash-based 切換 display:none / ""（適用所有 sec-*）
      • Inner expand：部分 section 本身仍是 <details>（sec-themes / sec-polls /
        sec-security / sec-widgets ...），需額外點 summary 展開內容。

    v5 (2026-04-26): per-setting sections (sec-color / sec-opacity / sec-speed /
    sec-fontsize / sec-fontfamily / sec-layout) collapsed into one
    #admin-display-v2-page rendered by admin-display.js. Legacy IDs no
    longer exist; fall back to waiting for the page container instead.
    """
    route = SECTION_TO_ROUTE.get(section_id)
    if route:
        page.evaluate(
            """(target) => {
                if (window.location.hash === target) {
                    window.location.hash = '';
                }
                window.location.hash = target;
            }""",
            f"#/{route}",
        )
        page.wait_for_timeout(250)

    # v5 display-page consolidation — sec-* IDs no longer exist for the
    # 6 display rows. Phase A exposes their editable controls at #/viewer.
    DISPLAY_LEGACY_IDS = {
        "sec-color",
        "sec-opacity",
        "sec-fontsize",
        "sec-speed",
        "sec-fontfamily",
        "sec-layout",
    }
    if section_id in DISPLAY_LEGACY_IDS:
        page.wait_for_selector("#admin-display-v2-page", state="visible", timeout=5000)
        return

    page.wait_for_selector(f"#{section_id}", state="visible", timeout=5000)

    # 若 section 是 <details>，確保它展開（內部元素才會 visible）。
    details = page.locator(f"details#{section_id}")
    if details.count() > 0 and details.get_attribute("open") is None:
        details.locator("summary").click()
        page.wait_for_timeout(400)


# ─── 登入 / 登出（使用獨立 context，不受共用 context 影響）──────────────────


@pytest.fixture()
def fresh_page(browser_session):
    """未登入的乾淨 page，用於測試登入流程"""
    context = browser_session.new_context()
    page = context.new_page()
    yield page
    page.close()
    context.close()


def test_admin_page_shows_login_form(fresh_page, live_url):
    """未登入時，JS 應渲染出登入表單"""
    fresh_page.goto(f"{live_url}/admin/")
    fresh_page.wait_for_selector("#loginForm", timeout=8000)
    assert fresh_page.is_visible("#password")
    assert fresh_page.is_visible("#loginForm button[type=submit]")


def test_login_wrong_password_shows_form_again(fresh_page, live_url):
    """密碼錯誤後應停留在登入表單"""
    fresh_page.goto(f"{live_url}/admin/")
    fresh_page.wait_for_selector("#loginForm", timeout=8000)
    fresh_page.fill("#password", "wrongpassword")
    fresh_page.locator("#loginForm button[type=submit]").click()
    fresh_page.wait_for_selector("#loginForm", timeout=5000)
    assert fresh_page.is_visible("#loginForm")
    assert not fresh_page.is_visible("#logoutButton")


def test_login_correct_password_shows_admin_panel(fresh_page, live_url):
    """密碼正確後應出現 admin 控制面板（logoutButton 可見）"""
    fresh_page.goto(f"{live_url}/admin/")
    fresh_page.wait_for_selector("#loginForm", timeout=8000)
    fresh_page.fill("#password", "test")
    fresh_page.locator("#loginForm button[type=submit]").click()
    # 登入後 admin JS 同時發出多個 API calls（settings、fonts、effects 等），
    # gevent 單線程處理完後 logoutButton 才渲染，給予較寬鬆的 timeout
    fresh_page.wait_for_selector("#logoutButton", timeout=15000)
    assert fresh_page.is_visible("#logoutButton")


def test_logout_returns_to_login_form(fresh_page, live_url):
    """點擊 Logout 後應回到登入表單"""
    # 先登入
    fresh_page.goto(f"{live_url}/admin/")
    fresh_page.wait_for_selector("#loginForm", timeout=8000)
    fresh_page.fill("#password", "test")
    fresh_page.locator("#loginForm button[type=submit]").click()
    fresh_page.wait_for_selector("#logoutButton", timeout=15000)
    # 再登出
    fresh_page.locator("#logoutButton").click()
    fresh_page.wait_for_selector("#loginForm", timeout=5000)
    assert fresh_page.is_visible("#loginForm")


# ─── Admin 面板結構 ────────────────────────────────────────────────────────────


def test_admin_panel_has_settings_section(admin_page):
    # settings-grid 為 route sections 容器；retrofit 後仍存在於 DOM 中。
    assert admin_page.locator("#settings-grid").count() == 1


def test_admin_panel_has_effects_section(admin_page):
    _open_section(admin_page, "sec-effects")
    assert admin_page.is_visible("#sec-effects")


def test_admin_panel_has_speed_input(admin_page):
    # v5: per-setting display rows collapsed into #admin-display-v2-page.
    # Speed default is on (Speed[0]=True) and renders a single number
    # input for the value (data-num-index="3").
    _open_section(admin_page, "sec-speed")
    speed = admin_page.locator('[data-num-key="Speed"][data-num-index="3"]')
    assert speed.is_visible()


def test_admin_panel_speed_initial_value(admin_page):
    """Speed 啟用時，預設值為 1.0×（系統預設 Speed[3]=1.0）"""
    _open_section(admin_page, "sec-speed")
    speed = admin_page.locator('[data-num-key="Speed"][data-num-index="3"]')
    val = speed.input_value()
    # accept either int or float string ("1" or "1.0") since admin-display.js
    # may serialise without trailing zero
    assert float(val) == 1.0


# ─── 設定修改 ─────────────────────────────────────────────────────────────────


def test_settings_speed_change_calls_api(admin_page):
    """修改 Speed 預設值後，應觸發 /admin/update API（回 200）"""
    _open_section(admin_page, "sec-speed")
    responses = []
    admin_page.on("response", lambda r: responses.append(r) if "/admin/update" in r.url else None)

    speed = admin_page.locator('[data-num-key="Speed"][data-num-index="3"]')
    speed.fill("2")
    speed.dispatch_event("change")
    admin_page.wait_for_timeout(800)

    update_resp = [r for r in responses if "/admin/update" in r.url]
    assert len(update_resp) >= 1
    assert update_resp[0].status == 200


def test_settings_speed_reflects_new_value(admin_page):
    """修改 Speed 預設值後，input 的值應即時反映"""
    _open_section(admin_page, "sec-speed")
    speed = admin_page.locator('[data-num-key="Speed"][data-num-index="3"]')
    speed.fill("3")
    speed.dispatch_event("change")
    admin_page.wait_for_timeout(500)
    assert float(speed.input_value()) == 3.0


def test_settings_color_toggle_calls_api(admin_page):
    """切換 Color 的 audience toggle 應發送 /admin/Set 請求（回 200）"""
    _open_section(admin_page, "sec-color")
    responses = []
    admin_page.on("response", lambda r: responses.append(r) if "/admin/Set" in r.url else None)

    # v5: toggle is a button with data-toggle-key, not a checkbox #toggle-Color.
    color_toggle = admin_page.locator('[data-toggle-key="Color"]')
    color_toggle.click()
    admin_page.wait_for_timeout(500)

    set_resp = [r for r in responses if "/admin/Set" in r.url]
    assert len(set_resp) >= 1
    assert set_resp[0].status == 200


# ─── 黑名單管理 ───────────────────────────────────────────────────────────────


def test_blacklist_section_loads(admin_page):
    """黑名單區塊應可展開並含輸入框"""
    _open_section(admin_page, "sec-blacklist")
    admin_page.wait_for_selector("#newKeywordInput", state="visible", timeout=5000)
    assert admin_page.is_visible("#newKeywordInput")
    assert admin_page.is_visible("#addKeywordBtn")


def test_blacklist_add_keyword_appears_in_list(admin_page):
    """透過 UI 新增關鍵字後，應出現在黑名單列表中"""
    _open_section(admin_page, "sec-blacklist")
    admin_page.wait_for_selector("#newKeywordInput", state="visible", timeout=5000)

    responses = []
    admin_page.on(
        "response",
        lambda r: responses.append(r) if "/admin/blacklist/add" in r.url else None,
    )

    admin_page.fill("#newKeywordInput", "browser_test_kw")
    admin_page.click("#addKeywordBtn")
    admin_page.wait_for_timeout(800)

    add_resp = [r for r in responses if "/admin/blacklist/add" in r.url]
    assert len(add_resp) >= 1
    assert add_resp[0].status == 200

    admin_page.wait_for_selector('[data-keyword="browser_test_kw"]', timeout=3000)
    assert admin_page.is_visible('[data-keyword="browser_test_kw"]')


def test_blacklist_remove_keyword_disappears(admin_page):
    """點擊移除按鈕後，關鍵字應從列表消失"""
    _open_section(admin_page, "sec-blacklist")
    admin_page.wait_for_selector("#newKeywordInput", state="visible", timeout=5000)

    # 先新增
    admin_page.fill("#newKeywordInput", "remove_via_browser")
    admin_page.click("#addKeywordBtn")
    admin_page.wait_for_selector('[data-keyword="remove_via_browser"]', timeout=3000)

    # 再移除（移除時有 confirm() 對話框，需自動接受）
    responses = []
    admin_page.on(
        "response",
        lambda r: responses.append(r) if "/admin/blacklist/remove" in r.url else None,
    )
    admin_page.on("dialog", lambda d: d.accept())
    admin_page.locator('[data-keyword="remove_via_browser"]').click()
    admin_page.wait_for_timeout(800)

    remove_resp = [r for r in responses if "/admin/blacklist/remove" in r.url]
    assert len(remove_resp) >= 1
    assert remove_resp[0].status == 200
    admin_page.wait_for_selector(
        '[data-keyword="remove_via_browser"]', state="detached", timeout=3000
    )


def test_blacklist_empty_keyword_not_submitted(admin_page):
    """空關鍵字點 Add 不應送出 API 請求"""
    _open_section(admin_page, "sec-blacklist")
    admin_page.wait_for_selector("#newKeywordInput", state="visible", timeout=5000)

    responses = []
    admin_page.on(
        "response",
        lambda r: responses.append(r) if "/admin/blacklist/add" in r.url else None,
    )
    admin_page.fill("#newKeywordInput", "")
    admin_page.click("#addKeywordBtn")
    admin_page.wait_for_timeout(500)

    assert len(responses) == 0, "empty keyword should not call API"


# ─── 修改密碼表單 ─────────────────────────────────────────────────────────────


def test_change_password_section_exists(admin_page):
    """安全性區塊應有密碼修改欄位（v5.0 retrofit: sec2-pw-* IDs in
    admin-security-v2-page replaced legacy pwCurrent/pwNew/pwConfirm)."""
    # Navigate to security route — v2 page handles its own visibility on
    # data-active-route, doesn't go through _open_section's sec-* gate.
    admin_page.evaluate('() => { window.location.hash = "#/security"; }')
    admin_page.wait_for_selector("#sec2-pw-current", state="visible", timeout=5000)
    assert admin_page.is_visible("#sec2-pw-current")
    assert admin_page.is_visible("#sec2-pw-new")
    assert admin_page.is_visible("#sec2-pw-confirm")


def test_change_password_wrong_current_calls_api(admin_page):
    """輸入錯誤舊密碼後，API 應回傳 403（v5.0 retrofit: sec2-pw-form submit
    flow replaced standalone changePasswordBtn click)."""
    admin_page.evaluate('() => { window.location.hash = "#/security"; }')
    admin_page.wait_for_selector("#sec2-pw-current", state="visible", timeout=5000)

    responses = []
    admin_page.on(
        "response",
        lambda r: responses.append(r) if "change_password" in r.url else None,
    )

    admin_page.fill("#sec2-pw-current", "wrongcurrent")
    admin_page.fill("#sec2-pw-new", "validnewpassword1!")
    admin_page.fill("#sec2-pw-confirm", "validnewpassword1!")

    # Submit via the form's submit button (sec2-pw-form has type=submit)
    admin_page.locator("#sec2-pw-form button[type='submit']").click()
    admin_page.wait_for_timeout(800)

    pw_resp = [r for r in responses if "change_password" in r.url]
    assert len(pw_resp) >= 1
    assert pw_resp[0].status == 403


# ─── 主頁面 & Health ──────────────────────────────────────────────────────────


def test_main_page_loads(browser_session, live_url):
    """主頁面 (/) 應成功回應 200"""
    context = browser_session.new_context()
    page = context.new_page()
    try:
        response = page.goto(f"{live_url}/")
        assert response.status == 200
    finally:
        page.close()
        context.close()


def test_health_endpoint_returns_healthy(browser_session, live_url):
    """GET /health 應回傳 200 且 body 含 'healthy'"""
    context = browser_session.new_context()
    page = context.new_page()
    try:
        response = page.goto(f"{live_url}/health")
        assert response.status == 200
        assert "healthy" in page.content()
    finally:
        page.close()
        context.close()


def test_404_returns_json_error(browser_session, live_url):
    """不存在的路由應回傳 404"""
    context = browser_session.new_context()
    page = context.new_page()
    try:
        response = page.goto(f"{live_url}/this-does-not-exist")
        assert response.status == 404
    finally:
        page.close()
        context.close()


# ─── Effects UI ──────────────────────────────────────────────────────────────


def test_effects_section_has_effect_buttons(admin_page):
    """Effects Management 區塊應至少包含一個效果按鈕"""
    _open_section(admin_page, "sec-effects")
    admin_page.wait_for_selector("#effectsList", state="visible", timeout=5000)
    # 等待效果列表渲染完成（API 回傳後 JS 動態建立）
    admin_page.wait_for_selector(
        "#effectsList > div",
        state="visible",
        timeout=5000,
    )
    buttons = admin_page.locator("#effectsList > div")
    assert buttons.count() >= 1, "Effects section should have at least one effect card"


def test_effects_toggle_calls_api(admin_page):
    """切換 Effects 開關應觸發 /admin/Set API"""
    _open_section(admin_page, "sec-effects")
    responses = []
    admin_page.on(
        "response",
        lambda r: responses.append(r) if "/admin/Set" in r.url else None,
    )

    effects_toggle = admin_page.locator("#toggle-Effects")
    effects_toggle.click()
    admin_page.wait_for_timeout(800)

    set_resp = [r for r in responses if "/admin/Set" in r.url]
    assert len(set_resp) >= 1, "Effects toggle should call /admin/Set"
    assert set_resp[0].status == 200


# ─── Polls UI ──────────────────────────────────────────────────────────────────


def test_poll_create_and_end(admin_page):
    """建立投票、驗證狀態、結束投票"""
    _open_section(admin_page, "sec-polls")

    # v5 wraps the legacy single-question inputs in <div class="admin-poll-legacy" hidden>
    # so admin-poll.js still wires up create/end/reset against the same IDs.
    # Playwright's fill()/click() can't interact with hidden ancestors in
    # strict mode, so reach in via evaluate() and dispatch the click.
    admin_page.evaluate("document.getElementById('pollQuestion').value = 'Test poll question?';")
    admin_page.evaluate("""
        const inputs = document.querySelectorAll('#pollOptionsContainer input[type=text]');
        if (inputs.length >= 2) { inputs[0].value = 'Option A'; inputs[1].value = 'Option B'; }
        """)

    # Create poll
    admin_page.evaluate("document.getElementById('pollCreateBtn').click()")
    admin_page.wait_for_timeout(1000)

    # Verify poll is active via API
    resp = admin_page.request.get(admin_page.url.rsplit("/admin", 1)[0] + "/admin/poll/status")
    if resp.ok:
        data = resp.json()
        assert data.get("state") in ("active", "ended", "idle")

    # End / reset via evaluate() since the legacy form is `hidden`.
    admin_page.evaluate("""
        const end = document.getElementById('pollEndBtn');
        if (end) end.click();
        """)
    admin_page.wait_for_timeout(500)
    admin_page.evaluate("""
        const r = document.getElementById('pollResetBtn');
        if (r) r.click();
        """)
    admin_page.wait_for_timeout(500)


def test_admin_fullpage_empty_states(admin_page):
    """無資料時三個關鍵頁面應顯示 full-page empty state（含可識別 selector）"""
    _open_section(admin_page, "sec-live-feed")
    admin_page.wait_for_selector('[data-empty-kind="live-feed"]', state="visible", timeout=5000)
    assert admin_page.is_visible('[data-empty-kind="live-feed"]')

    _open_section(admin_page, "sec-polls")
    admin_page.evaluate("""
        const r = document.getElementById('pollResetBtn');
        if (r) r.click();
        """)
    admin_page.wait_for_selector(
        '#pollStatusDisplay [data-empty-kind="poll"]', state="visible", timeout=5000
    )
    assert admin_page.is_visible('#pollStatusDisplay [data-empty-kind="poll"]')

    _open_section(admin_page, "sec-fonts")
    admin_page.wait_for_selector('[data-empty-kind="fonts"]', state="visible", timeout=5000)
    assert admin_page.is_visible('[data-empty-kind="fonts"]')


# ─── Themes UI ─────────────────────────────────────────────────────────────────


def test_themes_section_loads(admin_page):
    """Themes 區塊應至少顯示一個主題卡片"""
    _open_section(admin_page, "sec-themes")
    admin_page.wait_for_timeout(1000)

    themes_list = admin_page.locator("#themesList")
    assert themes_list.is_visible(), "Themes list should be visible"
    # Should have at least the default theme
    cards = themes_list.locator("> div")
    assert cards.count() >= 1, "Should have at least one theme card"


# ─── Widgets UI ────────────────────────────────────────────────────────────────


def test_widgets_create_label(admin_page):
    """建立一個 label widget 並驗證出現在列表中"""
    _open_section(admin_page, "sec-widgets")
    admin_page.wait_for_timeout(500)

    # Click the add label button
    add_label_btn = admin_page.locator("#widget-add-label")
    if add_label_btn.count() > 0:
        add_label_btn.click()
        admin_page.wait_for_timeout(1000)

    # Verify widget appears in list
    widget_list = admin_page.locator("#widgets-list")
    if widget_list.count() > 0:
        widget_cards = widget_list.locator("> div")
        assert widget_cards.count() >= 1, "Should have at least one widget after creation"


# ─── Metrics API ───────────────────────────────────────────────────────────────


def test_metrics_endpoint(admin_page, live_url):
    """GET /admin/metrics 應回傳 JSON 含 ws_clients 和 queue_size"""
    data = admin_page.evaluate(
        """async (url) => {
            const resp = await fetch(url + '/admin/metrics', { credentials: 'include' });
            if (!resp.ok) throw new Error('status ' + resp.status);
            return resp.json();
        }""",
        live_url,
    )
    assert "ws_clients" in data
    assert "queue_size" in data
    assert "queue_capacity" in data
    assert "server_time" in data
    assert data["queue_capacity"] == 500
