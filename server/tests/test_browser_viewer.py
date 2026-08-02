"""瀏覽器系統測試：viewer 主頁 (`/`, `server/static/js/main.js` +
`server/templates/index.html`) 的 v5.4.0 新行為。

涵蓋範圍（P1, TODOS.md「建立 viewer 頁 browser test 套件」）：
  1. sendbar 狀態列 — overlay 離線時顯示 i18n `overlayOfflineFire` 文案，
     FIRE 按鈕文字維持短版（不遮擋 input placeholder），且離線狀態列不會
     自動消失（回歸保護：2026-07-07 uiux polish F12 fix）。
  2. 投票即時確認 — 投票後選項出現 `.is-voted` + 「已投出」標記，且絕不
     顯示票數/百分比（`.viewer-poll-option-stat` 不存在，產品鐵則）。
  3. 重連 toast — `.viewer-reconnected-toast` 在離線→恢復連線後出現，
     約 2 秒後消失。
  4. 色票 i18n — 6 個色票的 aria-label 依語言渲染成人話色名。
  5. （加分）行動視口 375px 下 sendbar 與狀態列不重疊。

架構仿照 `test_browser_admin.py`：session-scoped `live_url` + module-scoped
`browser_session`。viewer 頁不需要登入，所以沒有 `logged_context`；poll 相關
測試用 `admin_http` —— 一個獨立 BrowserContext，登入後從 admin 分頁內部發
`fetch` 打 `/admin/poll/*`（不用 urllib，理由見該 fixture 上方說明）。
"""

from __future__ import annotations

import json
import threading

import pytest
from playwright.sync_api import sync_playwright

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
    """瀏覽器測試用設定：提高 rate limit 避免連續操作被封鎖"""

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
    # serve_forever() runs on that thread and is what starts accepting; yielding
    # straight away races the first goto() against a socket that isn't listening.
    assert wait_for_port(port, timeout=5.0), f"HTTP server never came up on port {port}"
    yield f"http://127.0.0.1:{port}"
    server.stop()


@pytest.fixture(scope="module")
def browser_session():
    """啟動一個 headless Chromium（module 共用，理由同 test_browser_admin.py）"""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        yield browser
        browser.close()


@pytest.fixture()
def viewer_page(browser_session, live_url):
    """乾淨的 viewer 頁 page，每個測試獨立 context

    明確指定 locale：i18n.js 的 detectLang() 沒有存過語言時會看
    `navigator.language`，所以預設 en-US 的 context 會渲染英文，而本模組多處
    斷言中文文案。釘死 locale 也讓測試不受執行環境語系影響。
    """
    context = browser_session.new_context(locale="zh-TW")
    page = context.new_page()
    yield page, live_url
    page.close()
    context.close()


# ─── Admin API helper ────────────────────────────────────────────────────────
#
# 投票必須透過 /admin/poll/create 建立，該路由要登入 + CSRF token。用
# Playwright 的 APIRequestContext 而不是 urllib：
#
#   • cookie 行為與瀏覽器一致。`.env` 若設 ENV=production（本機常見），
#     SESSION_COOKIE_SECURE 會是 True，而 Secure cookie 在 http:// 下不會被
#     urllib 回送 —— 登入看似成功，下一個請求卻已經登出，CSRF meta 是空的。
#     Playwright 把 localhost 視為 secure context，不受影響。
#   • 因此不論 ENV=production 還是 development 都能跑，測試不再挑環境。
#
# 登入走真實表單（同 test_browser_admin.py），CSRF 從 <meta name="csrf-token">
# 讀 —— 那是 admin.html 唯一放 token 的地方。


class _AdminApiClient:
    """已登入的 admin API client：請求從 admin 分頁內部發出

    刻意用頁內 `fetch` 而不是 Playwright 的 `context.request`。後者雖然掛在
    BrowserContext 上，實測打 /admin/poll/create 會拿到 403（CSRF 不符）——
    送出的請求沒有帶上登入後的 session cookie。頁內 fetch 是同源請求，
    session 與 CSRF 必然一致，也最接近真實使用者的行為。
    """

    def __init__(self, context, live_url: str):
        self.live_url = live_url
        self.page = context.new_page()
        self.page.goto(f"{live_url}/admin/")
        self.page.wait_for_selector("#loginForm", timeout=8000)
        self.page.fill("#password", "test")
        self.page.locator("#loginForm button[type=submit]").click()
        self.page.wait_for_selector("#logoutButton", timeout=15000)
        self.csrf_token = self.page.evaluate(
            "() => document.querySelector('meta[name=\"csrf-token\"]')?.content || ''"
        )
        assert self.csrf_token, "admin 頁的 <meta name=csrf-token> 是空的（登入沒成功？）"

    def post_json(self, path: str, payload: dict) -> tuple:
        status, body = self.page.evaluate(
            """async ({ path, payload, token }) => {
                const resp = await fetch(path, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-Token": token,
                    },
                    body: JSON.stringify(payload),
                });
                let body = {};
                try { body = await resp.json(); } catch (_) {}
                return [resp.status, body];
            }""",
            {"path": path, "payload": payload, "token": self.csrf_token},
        )
        return status, body


@pytest.fixture()
def admin_http(browser_session, live_url):
    """已登入的 admin API client，測試結束後重置投票狀態"""
    context = browser_session.new_context(locale="zh-TW")
    client = _AdminApiClient(context, live_url)
    yield client
    # Best-effort cleanup: reset poll so state doesn't leak into next test.
    try:
        client.post_json("/admin/poll/reset", {})
    except Exception:
        pass
    context.close()


def _create_and_start_poll(admin_http, question: str, options: list):
    """建立並啟動一個 legacy 單題投票（POST /admin/poll/create 立即啟動）"""
    status, body = admin_http.post_json(
        "/admin/poll/create", {"question": question, "options": options}
    )
    assert status == 200, f"poll create failed: {status} {body}"
    return body


# ─── 1. sendbar 狀態列（離線 / 滿載）─────────────────────────────────────────


def _go_offline(page):
    """攔截 /overlay_status，回傳 overlay_count=0，模擬 overlay 離線"""
    page.route(
        "**/overlay_status",
        lambda route: route.fulfill(
            status=200,
            content_type="application/json",
            body=json.dumps({"overlay_count": 0}),
        ),
    )


def _go_online(page):
    """攔截 /overlay_status，回傳 overlay_count=1，模擬 overlay 上線

    測試環境沒有真的 overlay 連線，所以 #btnSend 會停在 disabled
    (`data-state="offline"`)——那是產品的正確行為，不是 bug。任何需要真的按下
    FIRE 的測試都得先讓 overlay 看起來是上線的。
    """
    page.route(
        "**/overlay_status",
        lambda route: route.fulfill(
            status=200,
            content_type="application/json",
            body=json.dumps({"overlay_count": 1}),
        ),
    )


def test_sendbar_status_row_shows_offline_copy(viewer_page):
    """overlay 離線時，#sendbarStatusRow 應顯示 overlayOfflineFire 文案"""
    page, live_url = viewer_page
    _go_offline(page)
    page.goto(f"{live_url}/")
    page.wait_for_selector("#sendbarStatusRow:not([hidden])", timeout=8000)

    status_row = page.locator("#sendbarStatusRow")
    assert status_row.is_visible()
    assert "彈幕牆尚未開啟" in status_row.text_content()
    assert "訊息暫時無法送出" in status_row.text_content()


def test_sendbar_fire_button_stays_short_label_when_offline(viewer_page):
    """離線時 FIRE 按鈕文字應維持短版（不被離線說明文字取代），
    這樣才不會把 input 的 flex:1 寬度擠壓，蓋住 placeholder（B2 fix）。"""
    page, live_url = viewer_page
    _go_offline(page)
    page.goto(f"{live_url}/")
    page.wait_for_selector("#sendbarStatusRow:not([hidden])", timeout=8000)

    btn_text = page.locator("#btnSendText")
    assert btn_text.text_content().strip() == "FIRE"

    # Placeholder must remain intact on the input element.
    placeholder = page.locator("#danmuText").get_attribute("placeholder")
    assert placeholder, "danmuText should keep its placeholder text"


def test_sendbar_offline_status_row_does_not_disappear(viewer_page):
    """離線狀態列不應在數秒後自動消失（F12 迴歸保護：typing 不應清空離線提示，
    且純粹等待也不應讓它消失，因為 overlay 仍離線）。"""
    page, live_url = viewer_page
    _go_offline(page)
    page.goto(f"{live_url}/")
    page.wait_for_selector("#sendbarStatusRow:not([hidden])", timeout=8000)

    # Wait past a full poll interval (2s) + some margin — status row must
    # still be there since overlay_status keeps reporting 0.
    page.wait_for_timeout(3000)
    status_row = page.locator("#sendbarStatusRow")
    assert status_row.is_visible()
    assert status_row.text_content().strip() != ""

    # Typing while offline must NOT clear the persistent offline explanation
    # (main.js only clears this row on input when _overlayOnline is true).
    page.fill("#danmuText", "test message while offline")
    page.wait_for_timeout(300)
    assert status_row.is_visible()
    assert "彈幕牆尚未開啟" in status_row.text_content()


def test_sendbar_status_row_clears_when_overlay_online(viewer_page):
    """overlay 上線時，狀態列應為空/隱藏（對照組，確保上面的測試真的在測離線分支）"""
    page, live_url = viewer_page
    page.route(
        "**/overlay_status",
        lambda route: route.fulfill(
            status=200,
            content_type="application/json",
            body=json.dumps({"overlay_count": 1}),
        ),
    )
    page.goto(f"{live_url}/")
    page.wait_for_timeout(1500)

    status_row = page.locator("#sendbarStatusRow")
    assert status_row.get_attribute("hidden") is not None or status_row.text_content().strip() == ""


# ─── 2. 投票即時確認（is-voted / 已投出 / 絕不顯示票數）───────────────────────


def _fire_accepts_vote(page, option_key: str, question: str) -> dict:
    """攔截 POST /fire，回應「這則訊息被接受為一票」。

    測試環境沒有真的 overlay WS 連線，所以 server 的 /fire 一律回 503
    ("No overlay connected")，viewer 永遠收不到 poll_vote.accepted —— 而這個
    測試要驗的正是收到之後的 UI 行為（.is-voted + 已投出 + 絕不出現票數）。
    server 端「這則訊息算不算一票」的判定另有 test_poll_multiquestion.py 的
    18 個測試覆蓋，這裡不重複。

    回傳的 dict 會被填入實際送出的 request body，讓呼叫端可以斷言 UI 真的把
    選項 key 送出去了 —— 否則 mock 會連 UI 的錯誤一起蓋掉。
    """
    captured: dict = {}

    def handler(route):
        request = route.request
        if request.method != "POST":
            route.continue_()
            return
        captured["post_data"] = request.post_data
        route.fulfill(
            status=200,
            content_type="application/json",
            body=json.dumps(
                {
                    "status": "sent",
                    "poll_vote": {"accepted": True, "key": option_key, "question": question},
                }
            ),
        )

    page.route("**/fire", handler)
    return captured


def test_poll_vote_marks_option_voted_without_counts(viewer_page, admin_http):
    """建立投票後，透過 UI 點選項目、送出投票，選項應標記 .is-voted +
    已投出文字，且畫面上絕不出現任何票數/百分比元素（產品鐵則）。"""
    page, live_url = viewer_page
    body = _create_and_start_poll(admin_http, "Favorite color?", ["Red", "Blue"])
    options = body.get("options") or []
    assert len(options) >= 2, f"expected >=2 options, got: {body}"
    option_key = options[0]["key"] if isinstance(options[0], dict) else options[0]

    # 這個測試會真的按下 FIRE 送出投票，所以 overlay 必須看起來是上線的，
    # 否則 #btnSend 一直是 disabled；/fire 本身也要回一個「被接受為投票」的
    # 結果，理由見 _fire_accepts_vote 的說明。
    _go_online(page)
    fired = _fire_accepts_vote(page, option_key, "Favorite color?")
    page.goto(f"{live_url}/?poll=1")
    page.wait_for_timeout(2500)  # let the 2s poll tick pick up poll state

    poll_tab = page.locator('[data-viewer-tab="poll"]')
    poll_tab.click()
    page.wait_for_selector("[data-vpoll-options]", state="visible", timeout=5000)

    option_btn = page.locator(f'[data-vpoll-key="{option_key}"]')
    option_btn.wait_for(timeout=5000)
    assert option_btn.count() == 1

    # Drive the real UI flow: clicking the option fills the input with the
    # option key (main.js click handler), then FIRE submits it as a vote.
    option_btn.click()
    page.wait_for_selector("#danmuText", timeout=2000)
    assert page.locator("#danmuText").input_value() == option_key
    page.locator("#btnSend").click()
    page.wait_for_timeout(1000)

    # UI 真的把選項 key 送出去了嗎 —— 確保上面的 mock 沒有掩蓋掉送出流程的錯誤。
    assert fired.get("post_data"), "沒有攔截到 POST /fire —— FIRE 沒送出？"
    assert (
        option_key in fired["post_data"]
    ), f"送出的內容沒有帶選項 key {option_key!r}：{fired['post_data']!r}"

    # 投票被接受後 main.js 會蓋上感謝卡（ViewerStates.showThankYou），把整個
    # viewer UI 遮住 —— 連分頁按鈕都點不到。感謝卡本身不是這個測試的主題，
    # 收掉它，回到使用者關掉卡片後看到的畫面。
    page.evaluate("() => { window.ViewerStates && window.ViewerStates.hide(); }")

    # 點選項時 main.js 會 _setViewerMode("fire") 把畫面切到輸入框（好讓使用者
    # 直接送出），所以送完之後 poll 面板是隱藏的。切回來才看得到投票確認。
    poll_tab.click()
    page.wait_for_selector("[data-vpoll-options]", state="visible", timeout=5000)

    voted_option = page.locator(f'[data-vpoll-key="{option_key}"].is-voted')
    voted_option.wait_for(timeout=5000)
    assert voted_option.count() == 1

    voted_mark = voted_option.locator(".viewer-poll-option-voted-mark")
    assert voted_mark.count() == 1
    mark_text = voted_mark.text_content()
    assert "已投出" in mark_text or "Voted" in mark_text

    # Product rule: never render vote counts / percentages anywhere on the
    # viewer poll pane.
    stat_elements = page.locator(".viewer-poll-option-stat")
    assert stat_elements.count() == 0, "Viewer must never show vote counts/percentages"


def test_poll_pane_never_shows_percentage_text(viewer_page, admin_http):
    """viewer 的 poll pane 文字不得含百分比符號。

    這裡是零票狀態下的檢查（沒有投任何票就直接看畫面）。「已經有票的時候會不會
    洩漏」是在 wire 層擋掉的 —— `_sanitize_poll_for_viewer()` 根本不把 count /
    percentage / total_votes 放進 /poll/public-status 的回應，那條由
    test_public_polling_endpoints.py 覆蓋。
    """
    page, live_url = viewer_page
    _create_and_start_poll(admin_http, "Best season?", ["Spring", "Summer", "Fall"])

    page.goto(f"{live_url}/?poll=1")
    page.wait_for_timeout(2500)
    page.locator('[data-viewer-tab="poll"]').click()
    page.wait_for_selector("[data-vpoll-options]", state="visible", timeout=5000)

    pane_text = page.locator("[data-vpoll-options]").inner_text()
    assert "%" not in pane_text, f"Poll pane leaked percentage text: {pane_text}"


def test_voted_marker_does_not_leak_into_the_next_poll(viewer_page, admin_http):
    """投完一場之後，admin 重開的新投票不該出現「已投出」標記。

    回歸保護：voted 狀態原本只用 currentIndex 判斷是否要在重繪後重新套用，
    但 reset 之後開的新投票同樣落在 index 0，於是上一場投過票的觀眾會在一個
    自己從沒點過的選項上看到「已投出」。改用 server 的 question id 之後才
    分得開。
    """
    page, live_url = viewer_page
    body = _create_and_start_poll(admin_http, "Round one?", ["Red", "Blue"])
    options = body.get("options") or []
    option_key = options[0]["key"] if isinstance(options[0], dict) else options[0]

    _go_online(page)
    _fire_accepts_vote(page, option_key, "Round one?")
    page.goto(f"{live_url}/?poll=1")
    page.wait_for_timeout(2500)

    poll_tab = page.locator('[data-viewer-tab="poll"]')
    poll_tab.click()
    page.wait_for_selector("[data-vpoll-options]", state="visible", timeout=5000)
    page.locator(f'[data-vpoll-key="{option_key}"]').click()
    page.locator("#btnSend").click()
    page.wait_for_timeout(1000)
    page.evaluate("() => { window.ViewerStates && window.ViewerStates.hide(); }")
    poll_tab.click()
    page.wait_for_selector(f'[data-vpoll-key="{option_key}"].is-voted', timeout=5000)

    # 換一場新的投票（reset + create），選項 key 相同、index 同樣是 0。
    admin_http.post_json("/admin/poll/reset", {})
    _create_and_start_poll(admin_http, "Round two?", ["Red", "Blue"])
    page.wait_for_timeout(3000)  # 讓 2s 輪詢至少跑到新的一場

    assert (
        page.locator(".viewer-poll-option.is-voted").count() == 0
    ), "新的一場投票殘留了上一場的「已投出」標記"
    assert page.locator(".viewer-poll-option-voted-mark").count() == 0


# ─── 3. 重連 toast ────────────────────────────────────────────────────────────


def test_reconnected_toast_appears_and_disappears(viewer_page):
    """模擬離線→恢復：.viewer-reconnected-toast 應出現，約 2 秒後自動消失"""
    page, live_url = viewer_page

    # Route state toggle: drives the real _pollViewerState() /
    # updateConnectionUI() / _syncOfflineBanner() path end-to-end rather than
    # calling internals directly (none are exposed on window).
    #
    # Start ONLINE. Failing from the very first request would kill the boot
    # fetch, and connectWebSocket() — which installs the 2s polling interval —
    # never runs; the page then sits there having issued exactly one request,
    # so the "3 consecutive misses" this test needs can never accumulate.
    # Going offline only after polling is established is also what the test
    # name describes.
    state = {"fail": False}

    def _handle(route):
        if state["fail"]:
            route.abort()
        else:
            route.continue_()

    page.route("**/get_settings", _handle)
    page.route("**/poll/public-status", _handle)
    page.route("**/session/public-state", _handle)

    page.goto(f"{live_url}/")
    page.wait_for_timeout(2500)  # boot + at least one successful tick

    state["fail"] = True
    # Wait long enough for 3 consecutive poll failures at 2s interval.
    page.wait_for_timeout(7500)

    # Confirm we actually reached the offline banner state before flipping
    # back — otherwise the reconnect toast wouldn't be expected to fire.
    was_offline = page.evaluate("() => !!document.querySelector('.admin-offline-banner')")
    assert was_offline, "Expected offline banner to appear after 3 consecutive poll failures"

    # 重連 toast 只活大約 2 秒，所以不能「先等固定秒數、再去抓它」—— 那是在賭
    # 取樣點正好落在它的存活窗口內，CI 稍慢或稍快都會落空（實測就是這樣紅的）。
    # 改成在恢復連線「之前」先掛觀察器記下它曾經出現，再等它自己消失。
    page.evaluate("""() => {
            window.__toastSeen = 0;
            window.__toastText = "";
            const check = () => {
                const el = document.querySelector(".viewer-reconnected-toast");
                if (el) {
                    window.__toastSeen++;
                    window.__toastText = (el.textContent || "").trim();
                }
            };
            new MutationObserver(check).observe(document.body, {
                childList: true,
                subtree: true,
            });
            check();
        }""")

    state["fail"] = False
    page.wait_for_function("() => window.__toastSeen > 0", timeout=15000)
    assert page.evaluate("() => window.__toastText") in ("已重新連線", "Reconnected")

    # 出現之後應該會自己收掉。
    page.wait_for_function(
        "() => !document.querySelector('.viewer-reconnected-toast')", timeout=15000
    )
    assert page.locator(".viewer-reconnected-toast").count() == 0


# ─── 4. 色票 i18n aria-label ──────────────────────────────────────────────────


_SWATCH_LABELS_ZH = {
    "#ffffff": "白",
    "#38bdf8": "天藍",
    "#fbbf24": "琥珀",
    "#86efac": "綠",
    "#f87171": "紅",
    "#ffd166": "黃",
}

_SWATCH_LABELS_EN = {
    "#ffffff": "White",
    "#38bdf8": "Sky",
    "#fbbf24": "Amber",
    "#86efac": "Green",
    "#f87171": "Red",
    "#ffd166": "Yellow",
}


def test_color_swatches_have_nonempty_aria_labels(viewer_page):
    """6 個色票都應有非空 aria-label（預設 zh 語系的人話色名）"""
    page, live_url = viewer_page
    page.goto(f"{live_url}/")
    page.wait_for_selector(".viewer-swatch-preset", timeout=5000)

    swatches = page.locator(".viewer-swatch-preset")
    count = swatches.count()
    assert count == 6, f"Expected 6 color swatches, found {count}"

    for i in range(count):
        sw = swatches.nth(i)
        color = (sw.get_attribute("data-color") or "").lower()
        label = sw.get_attribute("aria-label")
        assert label and label.strip(), f"Swatch {color} has empty aria-label"
        expected = _SWATCH_LABELS_ZH.get(color)
        if expected:
            assert label == expected, f"Swatch {color}: expected '{expected}', got '{label}'"


def test_color_swatches_aria_labels_follow_language_switch(viewer_page):
    """切到英文語系後，色票 aria-label 應更新為英文人話色名"""
    page, live_url = viewer_page
    page.goto(f"{live_url}/")
    page.wait_for_selector(".viewer-swatch-preset", timeout=5000)

    page.evaluate("() => window.ServerI18n && window.ServerI18n.setLanguage('en')")
    page.wait_for_timeout(300)

    swatches = page.locator(".viewer-swatch-preset")
    for i in range(swatches.count()):
        sw = swatches.nth(i)
        color = (sw.get_attribute("data-color") or "").lower()
        label = sw.get_attribute("aria-label")
        expected = _SWATCH_LABELS_EN.get(color)
        assert label and label.strip(), f"Swatch {color} has empty aria-label after lang switch"
        if expected:
            assert label == expected, f"Swatch {color}: expected '{expected}', got '{label}'"


# ─── 5. 行動視口：sendbar 與狀態列不重疊（加分項）─────────────────────────────


def test_mobile_viewport_sendbar_no_overlap_with_status_row(viewer_page):
    """375px 行動視口下，離線狀態列與 sendbar pill 不應有 bounding box 重疊"""
    page, live_url = viewer_page
    page.set_viewport_size({"width": 375, "height": 812})
    _go_offline(page)
    page.goto(f"{live_url}/")
    page.wait_for_selector("#sendbarStatusRow:not([hidden])", timeout=8000)

    status_box = page.locator("#sendbarStatusRow").bounding_box()
    pill_box = page.locator("#sendbarPill").bounding_box()
    assert status_box is not None, "status row should have a layout box"
    assert pill_box is not None, "sendbar pill should have a layout box"

    # Two boxes overlap if they intersect on both axes. Assert they do NOT
    # (status row sits above/below the pill, not on top of it).
    def _overlaps(a, b):
        a_left, a_right = a["x"], a["x"] + a["width"]
        a_top, a_bottom = a["y"], a["y"] + a["height"]
        b_left, b_right = b["x"], b["x"] + b["width"]
        b_top, b_bottom = b["y"], b["y"] + b["height"]
        x_overlap = a_left < b_right and b_left < a_right
        y_overlap = a_top < b_bottom and b_top < a_bottom
        return x_overlap and y_overlap

    assert not _overlaps(status_box, pill_box), (
        f"sendbar status row overlaps sendbar pill on mobile viewport: "
        f"status={status_box} pill={pill_box}"
    )
