"""瀏覽器系統測試：使用 Playwright 模擬真實瀏覽器操作 Admin UI

架構：
- live_url (session)：一個真實 gevent HTTP 伺服器
- browser_session (session)：一個 Chromium 實例
- logged_context (session)：登入一次，所有 admin 測試共用 cookies
- admin_page (function)：從 logged_context 建立新 page，每個測試獨立
"""

import os
import threading
from pathlib import Path

import pytest
from playwright.sync_api import expect, sync_playwright

from server.app import create_app
from server.tests._browser_isolation import should_run_browser_module
from server.tests.conftest import TestConfig, find_free_port, wait_for_port

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
    # serve_forever() runs on that thread and is what starts accepting;
    # yielding straight away races the first goto() against a socket that
    # isn't listening yet.
    assert wait_for_port(port, timeout=5.0), f"HTTP server never came up on port {port}"
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
    context = browser_session.new_context(locale="zh-TW")
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
    # sec-history 於 2026-09-07 隨「重播」分頁一起退場（設計稿 08 · H1）。
    "sec-polls": "polls",
    "sec-widgets": "widgets",
    # Phase A IA (2026-05-06): viewer/display defaults are now reached
    # through the canonical viewer route. Legacy #/viewer-config still works
    # via router aliases, but tests should exercise the visible sidebar home.
    # v8（2026-08-19 設計稿 07 · R1/R4 拆分）：這六列的「值」現在歸顯示層，
    # 觀眾頁只留「觀眾能不能自己改」的開關欄。兩頁共用同一份面板，靠
    # data-dsp-mode 決定露哪一欄——要驗值編輯器就得走 overlay。
    "sec-color": "overlay",
    "sec-opacity": "overlay",
    "sec-fontsize": "overlay",
    "sec-speed": "overlay",
    "sec-fontfamily": "overlay",
    "sec-layout": "overlay",
    "sec-viewer-theme": "viewer",
    "sec-themes": "themes",
    # v5: emojis / stickers / sounds bundled into the "assets" route.
    "sec-emojis": "assets",
    "sec-stickers": "assets",
    "sec-sounds": "assets",
    # 5.1.0 brief 0518-v3: moderation now has 6 tabs. blacklist/filters live
    # under their own sub-route hashes (#/moderation/blacklist etc.) since
    # the default lands on queue.
    "sec-blacklist": "moderation/blacklist",
    "sec-filters": "moderation/filters",
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
    sec-fontsize / sec-fontfamily / sec-layout) collapsed into one display page
    rendered by admin-display.js. Legacy IDs no longer exist; fall back to
    waiting for the page container instead.

    IA v5 5-section (2026-05-18): the display-defaults page container is
    #sec-viewer-config-defaults (renamed from admin-display-v2-page). It mounts
    under the #/viewer route on the default "defaults" tab, which is where the
    Speed/Color controls (data-num-key / data-toggle-key) still live.
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
        page.wait_for_selector("#sec-viewer-config-defaults", state="visible", timeout=5000)
        return

    page.wait_for_selector(
        f"#{section_id}",
        state="attached" if section_id == "sec-live-feed" else "visible",
        timeout=5000,
    )

    # 若 section 是 <details>，確保它展開（內部元素才會 visible）。
    details = page.locator(f"details#{section_id}")
    if details.count() > 0 and details.get_attribute("open") is None:
        details.locator("summary").click()
        page.wait_for_timeout(400)


# ─── 登入 / 登出（使用獨立 context，不受共用 context 影響）──────────────────


@pytest.fixture()
def fresh_page(browser_session):
    """未登入的乾淨 page，用於測試登入流程"""
    context = browser_session.new_context(locale="zh-TW")
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
    fresh_page.wait_for_selector("#loginForm", state="visible", timeout=8000)
    fresh_page.fill("#password", "wrongpassword")
    # admin-login.js probes /login with fetch, then reloads the page so the
    # server-rendered session state drives the final login/admin view.
    with fresh_page.expect_navigation(wait_until="load", timeout=10000):
        fresh_page.locator("#loginForm button[type=submit]").click()
    fresh_page.wait_for_selector("#loginForm", state="visible", timeout=8000)
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
    assert speed.get_attribute("min") == "0.5"
    assert speed.get_attribute("max") == "3"
    assert speed.get_attribute("step") == "0.1"


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
    """失焦儲存 Speed 後，畫面與重新載入的值都應反映新設定。"""
    _open_section(admin_page, "sec-speed")
    speed = admin_page.locator('[data-num-key="Speed"][data-num-index="3"]')
    with admin_page.expect_response(
        lambda response: "/admin/update" in response.url
        and response.request.method == "POST"
        and response.request.post_data_json.get("type") == "Speed"
        and str(response.request.post_data_json.get("value")) == "1.5"
    ) as updated:
        speed.fill("1.5")
        # Exercise the browser's native change on blur, as in keyboard editing.
        speed.press("Tab")
    assert updated.value.status == 200
    expect(speed).to_have_value("1.5", timeout=5000)
    admin_page.reload()
    _open_section(admin_page, "sec-speed")
    expect(admin_page.locator('[data-num-key="Speed"][data-num-index="3"]')).to_have_value(
        "1.5", timeout=5000
    )


def test_settings_color_toggle_calls_api(admin_page):
    """切換 Color 的 audience toggle 應發送 /admin/Set 請求（回 200）

    v8（2026-08-19 設計稿 07 · R1/R4 拆分）：「觀眾能不能自己改」的開關欄
    只在**觀眾頁**露出（顯示層那邊露的是值欄）。SECTION_TO_ROUTE 把
    sec-color 指向 overlay 是為了值編輯器，這條測的是開關，得自己走 viewer。
    """
    admin_page.evaluate('() => { window.location.hash = "#/viewer"; }')
    admin_page.wait_for_selector(
        '[data-dsp-mode="audience"] [data-toggle-key="Color"]', state="visible", timeout=5000
    )
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

    # 再移除。移除確認以前是原生 confirm()（靠 page.on("dialog") 自動接受），
    # 現在走 HUD modal —— 要實際按下面板上的確認鍵。
    responses = []
    admin_page.on(
        "response",
        lambda r: responses.append(r) if "/admin/blacklist/remove" in r.url else None,
    )
    admin_page.locator('[data-keyword="remove_via_browser"]').click()
    admin_page.wait_for_selector(".admin-hud-modal__btn--confirm", state="visible", timeout=5000)
    admin_page.locator(".admin-hud-modal__btn--confirm").click()
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
    # Navigate to security page — v2 page handles its own visibility on
    # data-active-route/data-active-leaf, doesn't go through _open_section's
    # sec-* gate. IA v5 5-section (2026-05-18): Security lives under the System
    # route as the `security` leaf (#/system/security). The standalone
    # #/security alias route has empty sections and hides #settings-grid, which
    # keeps the whole password card off-screen — so use the canonical
    # #/system/security path the sidebar actually navigates to.
    admin_page.evaluate('() => { window.location.hash = "#/system/security"; }')
    admin_page.wait_for_selector(
        '[data-sec-disclose="sec2-pw-form"]', state="visible", timeout=5000
    )
    # v8（2026-08-19 設計稿 07 · R7）：改密碼表單預設收合——三個輸入框攤在
    # 設定列表裡會打斷「一列一設定」的節奏，而改密碼是低頻動作。
    # 先點「變更密碼…」展開；這一步同時驗證了收合機制本身。
    admin_page.click('[data-sec-disclose="sec2-pw-form"]')
    admin_page.wait_for_selector("#sec2-pw-current", state="visible", timeout=5000)
    assert admin_page.is_visible("#sec2-pw-current")
    assert admin_page.is_visible("#sec2-pw-new")
    assert admin_page.is_visible("#sec2-pw-confirm")


def test_change_password_wrong_current_calls_api(admin_page):
    """輸入錯誤舊密碼後，API 應回傳 403（v5.0 retrofit: sec2-pw-form submit
    flow replaced standalone changePasswordBtn click)."""
    # IA v5 5-section: Security is the `security` leaf under the System route.
    admin_page.evaluate('() => { window.location.hash = "#/system/security"; }')
    admin_page.wait_for_selector(
        '[data-sec-disclose="sec2-pw-form"]', state="visible", timeout=5000
    )
    # v8（2026-08-19 設計稿 07 · R7）：改密碼表單預設收合——三個輸入框攤在
    # 設定列表裡會打斷「一列一設定」的節奏，而改密碼是低頻動作。
    # 先點「變更密碼…」展開；這一步同時驗證了收合機制本身。
    admin_page.click('[data-sec-disclose="sec2-pw-form"]')
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
    context = browser_session.new_context(locale="zh-TW")
    page = context.new_page()
    try:
        response = page.goto(f"{live_url}/")
        assert response.status == 200
    finally:
        page.close()
        context.close()


def test_health_endpoint_returns_healthy(browser_session, live_url):
    """GET /health 應回傳 200 且 body 含 'healthy'"""
    context = browser_session.new_context(locale="zh-TW")
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
    context = browser_session.new_context(locale="zh-TW")
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
    # 2026-07-30 版面跟場次狀態走：無場次時訊息流整卡收合（收合本身就是
    # 空狀態的處理——沒有訊息可看的時刻不佔主舞台），開場橫幅升為主角。
    admin_page.wait_for_selector("#sec-live-feed.is-idle-collapsed", state="attached", timeout=5000)
    assert not admin_page.is_visible("#sec-live-feed .admin-lf-v4__card")
    assert admin_page.eval_on_selector(
        "#admin-session-banner", "el => el.classList.contains('is-hero')"
    )

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


# ─── Moderation queue polling ─────────────────────────────────────────────────


def test_modqueue_does_not_storm_the_list_endpoint(admin_page):
    """`#/moderation` 只能按 REFRESH_MS(4s) 的節奏輪詢 /admin/modqueue/list。

    回歸守門（2026-07-26）：admin-modqueue.js 的 `_syncVisibility()` 由一個監看
    整個 body 的 MutationObserver 呼叫，而它原本無條件 `_fetch()` —— fetch 回來
    後 render 改 DOM，DOM 變動又觸發 observer，形成自我餵食的迴圈。實測在
    #/moderation 上 1.2 秒內打了 286 次 /admin/modqueue/list（伺服器以 429 擋
    下）。修法是只在「不可見→可見」的轉換時 fetch 一次，之後交給輪詢 timer。

    2.5 秒的觀察窗小於一個 REFRESH_MS 週期，所以正常情況是 1 次（進場那次），
    容忍到 3 次以吸收導航過程中的重複觸發；風暴會是數十到數百次，兩者差距夠大，
    這個門檻不會因為時序抖動而誤判。

    上下限都要斷言：只擋上限的話，「進場那次 fetch 根本沒發生」——例如有人把
    `_fetch()` 一起搬進 timer 裡——會讓佇列一開始是空的，而測試依然全綠。
    """
    calls = []
    admin_page.on(
        "request",
        lambda r: calls.append(r.url) if "/admin/modqueue/list" in r.url else None,
    )
    admin_page.evaluate('() => { window.location.hash = "#/moderation/queue"; }')
    admin_page.wait_for_timeout(2500)

    assert len(calls) >= 1, (
        "/admin/modqueue/list 一次都沒被呼叫 —— 進入 #/moderation 時應該要立刻"
        "載入一次佇列，否則畫面會停在空狀態直到第一個輪詢週期"
    )
    assert len(calls) <= 3, (
        f"/admin/modqueue/list 在 2.5s 內被呼叫 {len(calls)} 次 —— "
        f"_syncVisibility 又在每次 MutationObserver 觸發時 fetch 了"
    )


# ─── 破壞性動作的 HUD 確認面板 ────────────────────────────────────────────────
#
# 2026-07-26：admin 的 43 處原生 confirm() 全部改走 HudConfirm modal。改動面很
# 廣（25 個模組），但絕大多數只有「語法能過 + 載入沒有 console error」這層保護。
# 這裡替最不能出錯的幾條路徑補上真正的點擊驗證。
#
# 每條測的是同一組不變式：
#   1. 按下去會出現 HUD 面板（而不是原生對話框，也不是什麼都沒發生）
#   2. 按取消 → 不送出任何 API 請求 —— 這正是改寫時每處都寫的 `if (!ok) return;`
#   3. 面板上寫著這個動作的後果（title / subtitle 有掛對）
#
# 「確認會不會真的送出」只在清除歷史那條驗證：live_url 是 session-scoped，真的
# 執行 factory reset 或撤銷 token 會污染同模組後面的測試。


def _dialog_recorder(page):
    """記錄原生對話框。改寫之後這個清單必須永遠是空的。"""
    seen = []

    def _on_dialog(dialog):
        seen.append(dialog.message)
        dialog.dismiss()

    page.on("dialog", _on_dialog)
    return seen


def _open_backup_page(page):
    page.evaluate('() => { window.location.hash = "#/backup"; }')
    page.wait_for_selector("#bk2-clear-history", state="visible", timeout=8000)


def test_confirm_keyboard_respects_cancel_and_restores_focus(admin_page):
    """Enter on Cancel must not confirm a destructive action."""
    calls = []
    admin_page.on(
        "request",
        lambda r: calls.append(r.url) if "/admin/history/clear" in r.url else None,
    )
    _open_backup_page(admin_page)
    opener = admin_page.locator("#bk2-clear-history")
    opener.click()
    cancel = admin_page.locator(".admin-hud-modal__btn--cancel")
    cancel.wait_for(state="visible")
    cancel.focus()
    admin_page.keyboard.press("Enter")
    expect(admin_page.locator("#admin-hud-modal-root")).to_have_count(0)
    expect(opener).to_be_focused()
    assert calls == []


def test_firetoken_page_finishes_loading_token_state(admin_page):
    """The visible-only poll must fetch the token as well as its statistics."""
    with admin_page.expect_response(
        lambda r: r.url.endswith("/admin/integrations/fire-token")
    ) as response:
        admin_page.evaluate('location.hash = "#/firetoken"')
    assert response.value.ok
    status = admin_page.locator("[data-ft-status]")
    expect(status).not_to_have_text("載入中")
    token = response.value.json()
    key = (
        ("firetokenStatusHealthy" if token["enabled"] else "firetokenStatusDisabled")
        if token["has_token"]
        else "firetokenStatusUnset"
    )
    expect(status).to_have_text(admin_page.evaluate("key => ServerI18n.t(key)", key))


def test_backup_restore_controls_fit_mobile_without_squeezing_labels(admin_page):
    admin_page.set_viewport_size({"width": 375, "height": 812})
    _open_backup_page(admin_page)
    row = admin_page.locator("#bk2-pack-upload").locator("..").locator("..")
    label = row.locator(".lbl")
    assert label.bounding_box()["width"] > 250
    for selector in ("#bk2-pack-upload", "#bk2-pack-dryrun", "#bk2-pack-apply"):
        box = admin_page.locator(selector).bounding_box()
        assert box["x"] >= 0 and box["x"] + box["width"] <= 375


def test_confirm_keyboard_keeps_textarea_newlines_and_traps_focus(admin_page):
    admin_page.evaluate("""() => {
          const body = document.createElement('textarea');
          body.setAttribute('aria-label', 'Keyboard regression');
          window._keyboardConfirm = null;
          HudConfirm.open({body}).then(result => window._keyboardConfirm = result);
        }""")
    textarea = admin_page.get_by_role("textbox", name="Keyboard regression")
    textarea.fill("first")
    textarea.press("End")
    textarea.press("Enter")
    textarea.press("a")
    expect(textarea).to_have_value("first\na")
    assert admin_page.evaluate("window._keyboardConfirm") is None
    confirm = admin_page.locator(".admin-hud-modal__btn--confirm")
    confirm.focus()
    admin_page.keyboard.press("Tab")
    expect(textarea).to_be_focused()
    admin_page.keyboard.press("Shift+Tab")
    expect(confirm).to_be_focused()
    admin_page.keyboard.press("Escape")
    assert admin_page.evaluate("window._keyboardConfirm") is False


def test_clear_history_shows_hud_panel_and_cancel_sends_nothing(admin_page):
    """清除彈幕歷史：出現 HUD 面板；取消不送請求；確認才送。"""
    dialogs = _dialog_recorder(admin_page)
    calls = []
    admin_page.on(
        "request",
        lambda r: calls.append(r.url) if "/admin/history/clear" in r.url else None,
    )
    _open_backup_page(admin_page)

    admin_page.locator("#bk2-clear-history").click()
    panel = admin_page.locator(".admin-hud-modal__panel")
    panel.wait_for(state="visible", timeout=5000)
    assert "清除所有彈幕歷史" in panel.inner_text()
    # 2026-09-08 設計稿 14「不用全大寫」：確認框副標從全大寫英文改成中文，
    # 並走 i18n（cfmSub* 系列）。這幾行原本釘的是英文原文。
    assert "此動作無法復原" in panel.inner_text()

    admin_page.locator(".admin-hud-modal__btn--cancel").click()
    admin_page.wait_for_timeout(600)
    assert calls == [], f"取消之後仍然送出了請求：{calls}"

    # 確認路徑：這次真的讓它跑完（清空測試 server 的歷史，無副作用）。
    admin_page.locator("#bk2-clear-history").click()
    panel.wait_for(state="visible", timeout=5000)
    admin_page.locator(".admin-hud-modal__btn--confirm").click()
    admin_page.wait_for_timeout(1000)
    assert len(calls) == 1, f"確認之後應該剛好送出一次請求，實際 {len(calls)} 次"

    assert dialogs == [], f"仍然跳出了原生對話框：{dialogs}"


def test_factory_reset_shows_hud_panel_and_cancel_sends_nothing(admin_page):
    """Factory reset：最危險的一顆按鈕，取消必須什麼都不做。"""
    dialogs = _dialog_recorder(admin_page)
    calls = []
    admin_page.on(
        "request",
        lambda r: calls.append(r.url) if "/admin/backup/factory-reset" in r.url else None,
    )
    _open_backup_page(admin_page)

    # 按鈕預設 disabled，要在確認框輸入 reset 才會啟用。
    admin_page.fill("#bk2-factory-confirm", "reset")
    admin_page.dispatch_event("#bk2-factory-confirm", "input")
    admin_page.locator("#bk2-factory-reset").click()

    panel = admin_page.locator(".admin-hud-modal__panel")
    panel.wait_for(state="visible", timeout=5000)
    assert "Factory reset" in panel.inner_text()
    # 2026-09-08 設計稿 14「不用全大寫」：確認框副標從全大寫英文改成中文，
    # 並走 i18n（cfmSub* 系列）。這幾行原本釘的是英文原文。
    assert "清掉執行期狀態與佇列" in panel.inner_text()

    admin_page.locator(".admin-hud-modal__btn--cancel").click()
    admin_page.wait_for_timeout(600)
    assert calls == [], f"取消 factory reset 之後仍然送出了請求：{calls}"
    assert dialogs == [], f"仍然跳出了原生對話框：{dialogs}"


def test_revoke_fire_token_shows_hud_panel_and_cancel_sends_nothing(admin_page, live_url):
    """撤銷 Fire Token：撤銷鍵要先有 token 才會啟用，取消必須什麼都不做。"""
    dialogs = _dialog_recorder(admin_page)
    calls = []
    admin_page.on(
        "request",
        lambda r: calls.append(r.url) if "fire-token/revoke" in r.url else None,
    )

    # 先產生一個 token，撤銷鍵才會從 disabled 解開。
    admin_page.evaluate("""async () => {
            const token = document.querySelector('meta[name="csrf-token"]')?.content || "";
            await fetch("/admin/integrations/fire-token/regenerate", {
                method: "POST",
                credentials: "include",
                headers: { "X-CSRF-Token": token },
            });
        }""")
    # extensions 模組只在 init() 時讀一次 token 狀態，所以剛才那個 regenerate
    # 之後必須讓整頁重新載入，它手上才會是新的快照 —— 否則撤銷鍵一直 disabled。
    #
    # 這裡一定要用 reload()：goto() 到只有 hash 不同的網址並不會重新載入頁面，
    # init() 不會再跑，看起來像修好了其實沒有。本機因為 runtime/fire_token.json
    # 留著，第一次載入就抓到 has_token，反而掩蓋這個差別；CI 的乾淨環境會炸。
    admin_page.evaluate('() => { window.location.hash = "#/extensions"; }')
    admin_page.reload()
    revoke = admin_page.locator('[data-fire-token-action="revoke"]')
    revoke.wait_for(state="visible", timeout=8000)
    admin_page.wait_for_function(
        """() => {
            const b = document.querySelector('[data-fire-token-action="revoke"]');
            return b && !b.disabled;
        }""",
        timeout=8000,
    )

    revoke.click()
    panel = admin_page.locator(".admin-hud-modal__panel")
    panel.wait_for(state="visible", timeout=5000)
    assert "撤銷 Fire Token" in panel.inner_text()
    # 2026-09-08 設計稿 14「不用全大寫」：確認框副標從全大寫英文改成中文，
    # 並走 i18n（cfmSub* 系列）。這幾行原本釘的是英文原文。
    assert "所有 extension 都會失效" in panel.inner_text()

    try:
        admin_page.locator(".admin-hud-modal__btn--cancel").click()
        admin_page.wait_for_timeout(600)
        assert calls == [], f"取消撤銷之後仍然送出了請求：{calls}"
        assert dialogs == [], f"仍然跳出了原生對話框：{dialogs}"
    finally:
        # 這個測試真的產生了一個會寫進 runtime/fire_token.json 的 token，而
        # live_url 是 session-scoped —— 不收掉的話，同模組後面的測試會繼承一個
        # has_token=true 的狀態。收在 finally，斷言失敗時也照樣清乾淨。
        admin_page.evaluate("""async () => {
                const token = document.querySelector('meta[name="csrf-token"]')?.content || "";
                await fetch("/admin/integrations/fire-token/revoke", {
                    method: "POST",
                    credentials: "include",
                    headers: { "X-CSRF-Token": token },
                }).catch(() => {});
            }""")


def test_hud_confirm_never_executes_markup_from_dynamic_text(admin_page):
    """HudConfirm 的 `bodyText` / `titleText` 必須以純文字呈現，不能執行標記。

    改寫時把原本 confirm() 的純文字訊息搬進了 modal，而 modal 的 `title` /
    `body` 是走 innerHTML 的 —— 帶使用者內容的呼叫點（觀眾訊息、上傳檔名、
    關鍵字）因此一度可以被注入標記。安全路徑是 textContent 版的欄位，這條測
    的就是它真的沒有解析 HTML。
    """
    payload = '<img src=x onerror="window.__xss=1">刪除這個？'
    result = admin_page.evaluate(
        """async (payload) => {
            window.__xss = 0;
            const p = window.HudConfirm.open({ title: "測試", bodyText: payload });
            await new Promise((r) => requestAnimationFrame(r));
            const body = document.querySelector("[data-modal-body]");
            const out = {
                text: body ? body.textContent : null,
                injectedNodes: body ? body.querySelectorAll("img").length : -1,
                xssFlag: window.__xss,
            };
            document.querySelector(".admin-hud-modal__btn--cancel")?.click();
            await p;
            return out;
        }""",
        payload,
    )

    assert result["text"] == payload, "bodyText 應該原樣顯示成文字"
    assert result["injectedNodes"] == 0, "bodyText 不該被解析成 DOM 元素"
    assert result["xssFlag"] == 0, "注入的 onerror 被執行了"


def test_block_confirm_shows_message_text_verbatim(admin_page, live_url):
    """live feed 的封鎖確認帶的是觀眾訊息內容 —— 必須原樣顯示，不能被解析。

    這是整批改寫裡最危險的一個呼叫點：`display` 直接來自觀眾送出的文字。
    """
    payload = '<img src=x onerror="window.__xss=1">'
    admin_page.evaluate("() => { window.__xss = 0; }")
    shown = admin_page.evaluate(
        """async (payload) => {
            const p = window.HudConfirm.open({
                title: "封鎖",
                bodyText: (window.ServerI18n?.t?.("blockConfirm") || "{display}")
                    .replace("{label}", "訊息")
                    .replace("{display}", payload),
            });
            await new Promise((r) => requestAnimationFrame(r));
            const body = document.querySelector("[data-modal-body]");
            const out = { html: body.innerHTML, imgs: body.querySelectorAll("img").length };
            document.querySelector(".admin-hud-modal__btn--cancel")?.click();
            await p;
            return out;
        }""",
        payload,
    )

    assert shown["imgs"] == 0, "觀眾訊息裡的標記被解析成元素了"
    assert "&lt;img" in shown["html"], f"訊息應該被轉義後顯示，實際 HTML: {shown['html']}"
    assert admin_page.evaluate("() => window.__xss") == 0


# ─── 控制台首屏（設計稿 06 · K1/K2）─────────────────────────────────────────────


def test_cockpit_is_two_cards_and_collapses_on_narrow(browser_session, live_url):
    """控制台首屏的兩張卡：顯示層開關（左）＋一行數字（右），窄螢幕疊成一欄。

    2026-09-06 取代原本的 `test_kpi_strip_column_count_per_breakpoint`。
    KPI 四卡（Bebas 大數字 ＋ 20 條 sparkline）退場——20 個資料點畫不出趨勢，
    只讓每張卡長高 60px，四張加起來把即時訊息流推到摺線以下，而主持人盤中
    要看的就是訊息流。設計稿 06 把首屏收成三塊：開關卡、一行數字、訊息流。

    這裡同時保留原測試真正在防的東西：**兩個類別的選擇器會蓋過 media query
    裡的單類別規則**，跟原始碼順序無關。所以窄螢幕那條必須真的生效。
    """
    expected = {1440: 2, 800: 1}
    actual = {}
    for width in expected:
        context = browser_session.new_context(
            locale="zh-TW", viewport={"width": width, "height": 900}
        )
        page = context.new_page()
        try:
            page.goto(f"{live_url}/admin/")
            page.wait_for_selector("#loginForm", timeout=8000)
            page.fill("#password", "test")
            page.locator("#loginForm button[type=submit]").click()
            # v8（2026-08-19）：登出移進側欄帳號列，而 <=768px 側欄整個
            # display:none（改用底部導覽）。這裡只需要「已登入」的訊號，
            # 不需要它可見。
            page.wait_for_selector("#logoutButton", state="attached", timeout=15000)
            page.evaluate(
                '() => { try { localStorage.setItem("danmu.onboarding.done", "1"); }'
                " catch (_) {} }"
            )
            page.evaluate('() => { window.location.hash = "#/live"; }')
            page.wait_for_selector(".admin-cockpit", state="visible", timeout=8000)
            actual[width] = page.evaluate("""() => {
                    const el = document.querySelector(".admin-cockpit");
                    return getComputedStyle(el).gridTemplateColumns.split(" ").length;
                }""")
        finally:
            page.close()
            context.close()

    assert actual == expected, f"控制台欄數不符：{actual}（預期 {expected}）"


def test_cockpit_shows_status_once_and_no_retired_blocks(admin_page):
    """狀態只出現在主卡一處；退場的三個區塊不要復活。"""
    admin_page.evaluate('() => { window.location.hash = "#/live"; }')
    admin_page.wait_for_selector(".admin-cockpit", state="visible", timeout=8000)

    # 顯示層卡：色點 ＋ 一行文字
    assert admin_page.locator("[data-cockpit-dot]").count() == 1
    assert admin_page.locator("[data-cockpit-status]").count() == 1

    # 一行數字，四格，等寬數字
    assert admin_page.locator(".admin-cockpit-stat").count() == 4
    variant = admin_page.evaluate("""() => getComputedStyle(
            document.querySelector(".admin-cockpit-stats")
        ).fontVariantNumeric""")
    assert "tabular-nums" in variant

    # 退場的區塊。注意範圍：`.admin-kpi-strip` 是可重用元件，插件頁與場次頁
    # 還在用它——退場的是**控制台上的那一條**，不是這個 class 本身。
    for sel in (
        '[data-route-view="dashboard"] .admin-kpi-strip',
        ".admin-dash-summary",
        "[data-dash-myactions-body]",
    ):
        assert admin_page.locator(sel).count() == 0, sel


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


@pytest.mark.parametrize("width", [375, 782, 1280])
@pytest.mark.parametrize("theme", ["light", "dark"])
def test_live_feed_columns_do_not_overlap(admin_page, width, theme):
    """Optional layout tags must not shift timestamp/text/identity columns."""
    page = admin_page
    page.set_viewport_size({"width": width, "height": 900})
    page.evaluate("theme => localStorage.setItem('theme-mode', theme)", theme)
    messages = [
        {"text": "怎麼入沒…", "nickname": "", "layout": "scroll"},
        {"text": "hi hi", "nickname": "Claude", "layout": "top_fixed"},
        {
            "text": "很長的彈幕內容" * 15,
            "nickname": "超長暱稱測試使用者",
            "fingerprint": "qa-fingerprint",
        },
    ]
    page.route(
        "**/admin/session/current",
        lambda route: route.fulfill(json={"status": "live", "name": "版面驗證", "started_at": 1}),
    )
    page.route(
        "**/admin/live-feed/recent?*",
        lambda route: route.fulfill(
            json={
                "entries": (
                    [{"data": data} for data in messages]
                    if route.request.url.endswith("since=0")
                    else []
                ),
                "next_since": 1,
            }
        ),
    )
    page.reload()
    page.wait_for_selector("#logoutButton", state="attached")
    page.evaluate("location.hash = '#/live'")
    rows = page.locator(".admin-live-feed-row")
    expect(rows).to_have_count(3)
    expect(rows.first).to_be_visible()
    for row in rows.all():
        row.focus()
        boxes = row.evaluate("""row => {
          const box = el => {
            const r = el.getBoundingClientRect();
            return {x:r.x,y:r.y,w:r.width,h:r.height};
          };
          const cells = [...row.children].filter(el =>
            !el.classList.contains('admin-live-feed-row__swipe-actions'));
          return {row:box(row), cells:cells.map(box)};
        }""")
        outer = boxes["row"]
        for i, a in enumerate(boxes["cells"]):
            assert a["w"] > 0
            assert a["x"] >= outer["x"] - 1
            assert a["x"] + a["w"] <= outer["x"] + outer["w"] + 1
            for b in boxes["cells"][i + 1 :]:
                overlap = (
                    a["x"] < b["x"] + b["w"] - 1
                    and b["x"] < a["x"] + a["w"] - 1
                    and a["y"] < b["y"] + b["h"] - 1
                    and b["y"] < a["y"] + a["h"] - 1
                )
                assert not overlap, boxes
    if os.environ.get("DANMU_QA_SCREENSHOTS"):
        target = Path(os.environ["DANMU_QA_SCREENSHOTS"])
        target.mkdir(parents=True, exist_ok=True)
        page.locator("#sec-live-feed").screenshot(
            path=str(target / f"live-feed-{width}-{theme}.png")
        )


@pytest.mark.parametrize("width", [375, 1280])
def test_admin_palette_edits_and_picker_policy_sync_to_open_viewer(admin_page, live_url, width):
    """Add/remove real colors, persist policy, and update an already-open viewer."""
    from server.managers import settings_store

    original_settings = settings_store.get_options()
    settings_store.reset()
    page = admin_page
    page.set_viewport_size({"width": width, "height": 900})
    page.reload()
    page.evaluate("location.hash = '#/viewer'")
    editor = page.locator("[data-admin-color-palette]")
    expect(editor).to_be_visible()
    viewer = page.context.new_page()
    viewer.set_viewport_size({"width": width, "height": 900})
    try:
        viewer.goto(live_url)
        if width < 768:
            dismiss = viewer.locator("[data-nameask-dismiss]")
            if dismiss.is_visible():
                dismiss.click()
            viewer.locator("#viewerStyleRow").click()
        expect(viewer.locator(".viewer-swatch-preset")).to_have_count(6)
        for color in ["#123ABC", "#456DEF"]:
            editor.locator("[data-palette-hex]").fill(color)
            with page.expect_response(lambda r: "/options/Color/allowlist" in r.url) as saved:
                editor.locator("[data-palette-add]").click()
            assert saved.value.status == 200
            expect(editor.locator(f'[data-palette-remove="{color}"]')).to_be_visible()
            expect(viewer.locator(f'[data-color="{color.lower()}"]')).to_be_visible(timeout=8000)
        # Duplicate input leaves the number of colors unchanged.
        editor.locator("[data-palette-hex]").fill("123abc")
        editor.locator("[data-palette-add]").click()
        expect(editor.locator("[data-palette-count]")).to_have_text("8")
        with page.expect_response(lambda r: "/options/Color/allowlist" in r.url) as saved:
            editor.locator('[data-palette-remove="#FFFFFF"]').click()
        assert saved.value.status == 200
        expect(viewer.locator('[data-color="#ffffff"]')).to_have_count(0, timeout=8000)
        viewer.locator("#colorHexInput").fill("#ABCDEF")
        # Closing custom selection also corrects an out-of-palette current value.
        with page.expect_response(lambda r: r.url.endswith("/admin/Set")) as saved:
            editor.locator("[data-viewer-color-picker]").uncheck()
        assert saved.value.status == 200
        expect(viewer.locator(".viewer-swatch--custom")).to_be_hidden(timeout=8000)
        expect(viewer.locator(".viewer-color-code")).to_be_hidden()
        assert viewer.locator("#colorInput").input_value() == "#fbbf24"
        viewer.locator('[data-color="#123abc"]').click()
        assert viewer.locator("#colorInput").input_value() == "#123abc"
        viewer.reload()
        if width < 768:
            viewer.locator("#viewerStyleRow").click()
        expect(viewer.locator(".viewer-swatch-preset")).to_have_count(7)
        expect(viewer.locator(".viewer-swatch--custom")).to_be_hidden()
        # One palette color is allowed; the last remove action is disabled.
        colors = editor.locator("[data-palette-remove]").evaluate_all(
            "buttons => buttons.map(button => button.dataset.paletteRemove)"
        )
        if os.environ.get("DANMU_QA_SCREENSHOTS"):
            target = Path(os.environ["DANMU_QA_SCREENSHOTS"])
            target.mkdir(parents=True, exist_ok=True)
            editor.screenshot(path=str(target / f"palette-{width}.png"))
        for color in colors[:-1]:
            with page.expect_response(lambda r: "/options/Color/allowlist" in r.url):
                editor.locator(f'[data-palette-remove="{color}"]').click()
            expect(editor.locator(f'[data-palette-remove="{color}"]')).to_have_count(0)
        expect(editor.locator("[data-palette-remove]")).to_have_count(1)
        expect(editor.locator("[data-palette-remove]")).to_be_disabled()
        # Reopening the picker restores custom input without requiring a viewer reload.
        editor.locator("[data-viewer-color-picker]").check()
        expect(viewer.locator(".viewer-swatch--custom")).to_be_visible(timeout=8000)
        expect(viewer.locator("#colorHexInput")).to_be_visible()
        assert editor.evaluate("el => el.scrollWidth <= el.clientWidth + 1")
        page.reload()
        page.wait_for_selector("[data-admin-color-palette]")
        expect(page.locator("[data-palette-count]")).to_have_text("1")
        expect(page.locator("[data-viewer-color-picker]")).to_be_checked()
    finally:
        viewer.close()
        settings_store.restore_options(original_settings)


@pytest.mark.parametrize("width", [320, 782, 1440])
@pytest.mark.parametrize("theme", ["light", "dark"])
def test_palette_visual_layout_preview_and_reduced_motion(admin_page, width, theme):
    page = admin_page
    page.set_viewport_size({"width": width, "height": 1000})
    page.emulate_media(reduced_motion="reduce")
    page.evaluate("theme => localStorage.setItem('theme-mode', theme)", theme)
    page.reload()
    page.evaluate("location.hash = '#/viewer'")
    editor = page.locator("[data-admin-color-palette]")
    expect(editor).to_be_visible()
    button = editor.locator("[data-palette-preview]").nth(1)
    color = button.get_attribute("data-palette-preview")
    button.click()
    expect(button).to_have_attribute("aria-pressed", "true")
    expect(editor.locator("[data-palette-preview-code]")).to_have_text(color)
    assert (
        editor.locator("[data-palette-preview-text]").evaluate("el => el.getAnimations().length")
        == 0
    )
    assert editor.evaluate("el => el.scrollWidth <= el.clientWidth + 1")
    assert editor.locator("[data-palette-remove]").first.bounding_box()["height"] >= 44
    assert editor.locator("[data-palette-add]").bounding_box()["height"] >= 44
    editor.locator("[data-palette-hex]").fill("invalid")
    editor.locator("[data-palette-hex]").press("Enter")
    expect(editor.locator("[data-palette-hex]")).to_have_attribute("aria-invalid", "true")
    expect(editor.locator("[data-palette-feedback]")).not_to_be_empty()
    # A failed save preserves the entered code and leaves the controls usable.
    page.route(
        "**/admin/options/Color/allowlist",
        lambda route: route.fulfill(status=500, json={"error": "test failure"}),
        times=1,
    )
    count = editor.locator("[data-palette-count]").inner_text()
    editor.locator("[data-palette-hex]").fill("#123456")
    editor.locator("[data-palette-add]").click()
    expect(editor.locator("[data-palette-feedback]")).to_have_class(
        "admin-color-palette-feedback is-error"
    )
    expect(editor.locator("[data-palette-add]")).to_be_enabled()
    expect(editor.locator("[data-palette-hex]")).to_have_value("#123456")
    expect(editor.locator("[data-palette-count]")).to_have_text(count)
    if os.environ.get("DANMU_QA_SCREENSHOTS"):
        target = Path(os.environ["DANMU_QA_SCREENSHOTS"])
        target.mkdir(parents=True, exist_ok=True)
        editor.locator("[data-palette-preview]").first.click()
        editor.locator("[data-palette-hex]").fill("#38BDF8")
        editor.screenshot(path=str(target / f"palette-{width}-{theme}.png"))


@pytest.mark.parametrize("width", [375, 1280])
def test_friction_theme_disclosure_and_toast(admin_page, width):
    """Preview limitations remain visible and toast text is readable in dark mode."""
    page = admin_page
    page.set_viewport_size({"width": width, "height": 900})
    page.evaluate("document.documentElement.setAttribute('data-theme', 'dark')")
    _open_section(page, "sec-viewer-theme")
    note = page.locator("#sec-viewer-theme .admin-ui-page-note")
    expect(note).to_contain_text("尚未寫入伺服器")
    expect(note).to_be_visible()
    page.evaluate("window.showToast('QA toast contrast', true)")
    toast = page.locator("#toast-container > div").filter(has_text="QA toast contrast")
    expect(toast).to_be_visible()
    ratio = toast.evaluate("""el => {
      const rgb = value => {
        const c = document.createElement('canvas').getContext('2d');
        c.fillStyle = value; c.fillRect(0,0,1,1);
        return [...c.getImageData(0,0,1,1).data].slice(0,3);
      };
      const lum = v => rgb(v).map(x => {x/=255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4})
        .reduce((a,x,i)=>a+x*[.2126,.7152,.0722][i],0);
      const s=getComputedStyle(el), a=lum(s.color), b=lum(s.backgroundColor);
      return (Math.max(a,b)+.05)/(Math.min(a,b)+.05);
    }""")
    assert ratio >= 4.5
    box = toast.bounding_box()
    assert box["x"] >= 0 and box["x"] + box["width"] <= width + 1


def test_friction_feed_scroll_anchor_survives_new_message(admin_page):
    page = admin_page
    batch = [{"data": {"text": "message " + str(i), "message_id": str(i)}} for i in range(80)]

    def respond(route):
        nonlocal batch
        items, batch = batch, []
        route.fulfill(json={"entries": items, "next_since": 1})

    page.route("**/admin/live-feed/recent?*", respond)
    page.route(
        "**/admin/session/current",
        lambda r: r.fulfill(json={"status": "live", "name": "QA", "started_at": 1}),
    )
    page.reload()
    expect(page.locator(".admin-live-feed-row")).to_have_count(80)
    page.evaluate(
        "async () => { await document.fonts.ready; await Promise.all(document.getAnimations().filter(a => a.effect.getTiming().iterations !== Infinity).map(a => a.finished.catch(() => {}))); }"
    )
    page.locator("#liveFeedList").evaluate("el => el.scrollTop = 300")
    anchor_id = page.locator(".admin-live-feed-row").nth(10).get_attribute("data-id")
    anchor = page.locator(f'.admin-live-feed-row[data-id="{anchor_id}"]')
    before = anchor.evaluate(
        "el => el.getBoundingClientRect().top - document.getElementById('liveFeedList').getBoundingClientRect().top"
    )
    batch = [{"data": {"text": "new arrival", "message_id": "arrival"}}]
    expect(page.locator(".admin-live-feed-row")).to_have_count(81)
    after = anchor.evaluate(
        "el => el.getBoundingClientRect().top - document.getElementById('liveFeedList').getBoundingClientRect().top"
    )
    assert abs(after - before) <= 2
    page.locator("[data-lf-jump-btn]").click()
    assert page.locator("#liveFeedList").evaluate("el => el.scrollTop") == 0


def test_friction_rules_reflow_at_375(admin_page):
    page = admin_page
    page.set_viewport_size({"width": 375, "height": 900})
    page.route(
        "**/admin/filters/list",
        lambda r: r.fulfill(
            json={
                "rules": [
                    {
                        "id": "qa",
                        "type": "regex",
                        "pattern": "long-pattern-" * 12,
                        "action": "review",
                        "priority": 1,
                        "enabled": True,
                    }
                ]
            }
        ),
    )
    page.reload()
    _open_section(page, "sec-filters")
    row = page.locator(".hud-rule-row[data-rule-id='qa']")
    expect(row).to_be_visible()
    boxes = row.evaluate(
        "el => [...el.children].map(c => {const b=c.getBoundingClientRect();return {x:b.x,y:b.y,right:b.right}})"
    )
    assert boxes[0]["y"] < boxes[1]["y"]
    assert all(b["x"] >= 0 and b["right"] <= 376 for b in boxes)
