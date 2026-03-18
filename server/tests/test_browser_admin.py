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
from server.tests.conftest import TestConfig, find_free_port

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
    yield page
    page.close()


# ─── 輔助函式 ─────────────────────────────────────────────────────────────────


def _open_section(page, section_id: str):
    """確保 <details> section 處於展開狀態

    注意：<details open> 的 get_attribute("open") 回傳 ""（空字串）；
    未展開時回傳 None。Python 中 not "" 為 True，因此必須明確判斷 is None。
    """
    details = page.locator(f"#{section_id}")
    if details.get_attribute("open") is None:
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
    fresh_page.wait_for_selector("#logoutButton", timeout=8000)
    assert fresh_page.is_visible("#logoutButton")


def test_logout_returns_to_login_form(fresh_page, live_url):
    """點擊 Logout 後應回到登入表單"""
    # 先登入
    fresh_page.goto(f"{live_url}/admin/")
    fresh_page.wait_for_selector("#loginForm", timeout=8000)
    fresh_page.fill("#password", "test")
    fresh_page.locator("#loginForm button[type=submit]").click()
    fresh_page.wait_for_selector("#logoutButton", timeout=8000)
    # 再登出
    fresh_page.locator("#logoutButton").click()
    fresh_page.wait_for_selector("#loginForm", timeout=5000)
    assert fresh_page.is_visible("#loginForm")


# ─── Admin 面板結構 ────────────────────────────────────────────────────────────


def test_admin_panel_has_settings_section(admin_page):
    assert admin_page.is_visible("#settings-grid")


def test_admin_panel_has_effects_section(admin_page):
    assert admin_page.is_visible("#sec-effects")


def test_admin_panel_has_speed_input(admin_page):
    # Speed 預設為啟用（Speed[0]=True），顯示 index=1（最慢）與 index=2（最快）
    speed = admin_page.locator('[data-key="Speed"][data-index="1"]')
    assert speed.is_visible()


def test_admin_panel_speed_initial_value(admin_page):
    """Speed 啟用時，最慢值預設為 1（系統預設 Speed[1]=1）"""
    speed = admin_page.locator('[data-key="Speed"][data-index="1"]')
    assert speed.input_value() == "1"


# ─── 設定修改 ─────────────────────────────────────────────────────────────────


def test_settings_speed_change_calls_api(admin_page):
    """修改 Speed 最慢值後，應觸發 /admin/update API（回 200）"""
    responses = []
    admin_page.on("response", lambda r: responses.append(r) if "/admin/update" in r.url else None)

    speed = admin_page.locator('[data-key="Speed"][data-index="1"]')
    speed.fill("2")
    speed.dispatch_event("change")
    admin_page.wait_for_timeout(800)

    update_resp = [r for r in responses if "/admin/update" in r.url]
    assert len(update_resp) >= 1
    assert update_resp[0].status == 200


def test_settings_speed_reflects_new_value(admin_page):
    """修改 Speed 最慢值後，input 的值應即時反映"""
    speed = admin_page.locator('[data-key="Speed"][data-index="1"]')
    speed.fill("3")
    speed.dispatch_event("change")
    admin_page.wait_for_timeout(500)
    assert speed.input_value() == "3"


def test_settings_color_toggle_calls_api(admin_page):
    """切換 Color 的 toggle checkbox 應發送 /admin/Set 請求（回 200）"""
    responses = []
    admin_page.on("response", lambda r: responses.append(r) if "/admin/Set" in r.url else None)

    color_toggle = admin_page.locator("#toggle-Color")
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
    """安全性區塊應有密碼修改欄位"""
    _open_section(admin_page, "sec-security")
    admin_page.wait_for_selector("#pwCurrent", state="visible", timeout=5000)
    assert admin_page.is_visible("#pwCurrent")
    assert admin_page.is_visible("#pwNew")
    assert admin_page.is_visible("#pwConfirm")


def test_change_password_wrong_current_calls_api(admin_page):
    """輸入錯誤舊密碼後，API 應回傳 403"""
    _open_section(admin_page, "sec-security")
    admin_page.wait_for_selector("#pwCurrent", state="visible", timeout=5000)

    responses = []
    admin_page.on(
        "response",
        lambda r: responses.append(r) if "change_password" in r.url else None,
    )

    admin_page.fill("#pwCurrent", "wrongcurrent")
    admin_page.fill("#pwNew", "validnewpassword1!")
    admin_page.fill("#pwConfirm", "validnewpassword1!")

    admin_page.locator("#changePasswordBtn").click()
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
