"""瀏覽器路由 smoke：走完 19 條 locked sidebar 路由，鎖住每頁的可觀測狀態。

補的是 `docs/plans/2026-05-20-admin-follow-up.md` Task 5 的缺口 —— 既有的
`test_browser_admin.py` 只深測 5 條路由（viewer-config / moderation / viewer /
system / security）的個別互動，IA 一改就可能靜默弄壞其他隱藏頁而沒有測試會紅。

每條路由斷言 5 件事（baseline 由 2026-07-26 實跑量測而來）：
  1. sidebar 該 slug 的按鈕亮起（`is-active` + `aria-selected="true"`），且唯一
  2. topbar `[data-route-title]` 有非空標題
  3. 主內容區（`.admin-dash-main` 扣掉 topbar）渲染出實質內容，不是白頁
  4. 導航期間沒有 console error / pageerror（零豁免）
  5. 可見的 `[PLACEHOLDER]` 數量等於 baseline —— 已知待 BE 的頁面有明確配額，
     其餘路由必須是 0。新增 placeholder 或修掉舊的都會讓這裡紅，逼你更新
     `DEFERRED_PLACEHOLDER_BUDGET` 這張表。

架構同 `test_browser_admin.py`：session HTTP server + module-scope Chromium。
19 條路由在 `route_snapshots` 這個 module fixture 裡「一次走完」並快照，之後
每個 parametrize 測試只對快照斷言 —— 否則 19 × 5 次導航會讓本模組跑很久。
"""

import re
import threading
from pathlib import Path

import pytest
from playwright.sync_api import TimeoutError as PlaywrightTimeoutError
from playwright.sync_api import sync_playwright

from server.app import create_app
from server.tests._browser_isolation import should_run_browser_module
from server.tests.conftest import TestConfig, find_free_port, wait_for_port
from server.tests.test_admin_sidebar_ia import EXPECTED_NAV_ORDER

if not should_run_browser_module(__file__):
    pytest.skip(
        "Browser modules run in isolated child pytest processes during the full suite.",
        allow_module_level=True,
    )


class BrowserTestConfig(TestConfig):
    """瀏覽器測試用設定：提高 rate limit 避免連續請求被封鎖"""

    LOGIN_RATE_LIMIT = 1000
    LOGIN_RATE_WINDOW = 1
    ADMIN_RATE_LIMIT = 1000
    ADMIN_RATE_WINDOW = 1
    FIRE_RATE_LIMIT = 1000
    FIRE_RATE_WINDOW = 1
    API_RATE_LIMIT = 1000
    API_RATE_WINDOW = 1


# ─── Baseline（2026-07-26 於 main 85103c6 實跑量測）──────────────────────────

# 主內容區最少字元數。實測最低是 messages 的 191（空訊息狀態），其餘都在 280+；
# 門檻取 120 是要抓「整頁空白」這種回歸，不是要盯資料量的自然波動。
MIN_CONTENT_CHARS = 120

# 刻意保留的 `[PLACEHOLDER]` 控制項配額（待 BE / 待 Design，見 admin-follow-up
# plan Task 8 的 deferred 清單）。key 沒列到的路由一律必須是 0。
#   polls     — 「從模板」建立投票          (admin-poll.js)
#
# 2026-07-28 三筆歸零：
#   ratelimit — 曾是 2（IP/CIDR 編輯器 + 可編輯清單的 <span> 佔位）。後端補上
#               GET/PUT /admin/ratelimit/ip-rules 後換成真的雙欄 chip 編輯器。
#   fonts     — 曾是 1（從 Google Fonts 匯入）。services/fonts.py 只有一段註解、
#               沒有任何匯入路徑，補完成本遠高於價值，直接刪掉 UI。
#   viewer    — 曾是 1（admin-viewer-theme.js 的「立即套用」）。viewer 主題靠
#               settings 儲存生效，沒有主動推送通道，那顆按鈕永遠不會存在。
#               （它本來就因為 tab 可見性而量不到，這次是連 markup 一起刪。）
# D-6 批次二 (2026-07-29)：polls 空狀態的「從模板（待 BE）」chip 隨
# AdminEmpty 收斂一併清除 —— 全部路由的 placeholder 配額歸零。
DEFERRED_PLACEHOLDER_BUDGET = {}

# 路由套用是可以明確等待的：applyRoute() 會把目標 slug 的 sidebar 按鈕設成
# is-active + aria-selected。先等這個確定性訊號，不要用固定秒數去猜。
_ROUTE_APPLIED_TIMEOUT_MS = 5000

# 等到路由套用之後，還要留一小段給各模組的非同步渲染（fetch → render）。這段
# 沒有通用的可等訊號 —— 每頁的容器與資料來源都不同，而「等到內容出現」會讓
# test_route_renders_real_content 變成同義反覆（等到它成立才快照，就永遠不會
# 失敗，只會 timeout）。所以這裡刻意保留固定等待，但只涵蓋渲染，不涵蓋路由。
_RENDER_SETTLE_MS = 700


# ─── Fixtures ────────────────────────────────────────────────────────────────


@pytest.fixture(scope="session")
def live_url():
    """啟動真實 HTTP 伺服器（session 共用）"""
    from gevent.pywsgi import WSGIServer

    app = create_app(BrowserTestConfig)
    port = find_free_port()
    server = WSGIServer(("127.0.0.1", port), app, log=None, error_log=None)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    # serve_forever() is what starts accepting, and it runs on that thread —
    # yielding immediately races the first page.goto() against a socket that
    # may not be listening yet. conftest's ws_server_port fixture already
    # gates on this helper; browser fixtures should too.
    assert wait_for_port(port, timeout=5.0), f"HTTP server never came up on port {port}"
    yield f"http://127.0.0.1:{port}"
    server.stop()


@pytest.fixture(scope="module")
def browser_session():
    """headless Chromium（module scope —— 與 test_browser_admin.py 同樣的理由：
    確保 Playwright 在本模組結束前關閉，避免和 asyncio WS 伺服器衝突）。"""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        yield browser
        browser.close()


# 快照用的 JS：一次取回一條路由的所有可觀測狀態，減少 round-trip。
_SNAPSHOT_JS = """
() => {
  const isVisible = (el) => {
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return false;
    const cs = getComputedStyle(el);
    return cs.display !== 'none' && cs.visibility !== 'hidden';
  };

  const main = document.querySelector('.admin-dash-main');
  const topbar = document.querySelector('.admin-dash-topbar');
  const mainLen = main ? (main.innerText || '').trim().length : 0;
  const topbarLen = topbar ? (topbar.innerText || '').trim().length : 0;

  // Placeholder 有兩種寫法：帶 .admin-be-placeholder-control class 的控制項，
  // 以及只在文字裡寫 `[PLACEHOLDER]` 的葉節點。用 Set 去重，避免同一個元素
  // 因為兩種條件都命中而被算兩次。
  const seen = new Set();
  const placeholders = [];
  const collect = (el) => {
    if (seen.has(el) || !isVisible(el)) return;
    seen.add(el);
    placeholders.push((el.textContent || '').trim().slice(0, 60));
  };
  document.querySelectorAll('.admin-be-placeholder-control').forEach(collect);
  Array.from(document.querySelectorAll('body *'))
    .filter((el) => el.children.length === 0
      && (el.textContent || '').includes('[PLACEHOLDER]'))
    .forEach(collect);

  const titleEl = document.querySelector('[data-route-title]');
  return {
    activeButtons: Array.from(document.querySelectorAll('[data-route].is-active'))
      .map((b) => b.dataset.route),
    ariaSelected: Array.from(
      document.querySelectorAll('[data-route][aria-selected="true"]')
    ).map((b) => b.dataset.route),
    title: titleEl ? (titleEl.textContent || '').trim() : null,
    contentChars: mainLen - topbarLen,
    placeholders,
    hash: window.location.hash,
  };
}
"""


@pytest.fixture(scope="module")
def route_snapshots(browser_session, live_url):
    """登入一次，依序走完 19 條路由，回傳 {slug: snapshot} 。

    console error 逐條路由分開收集：listener 掛在共用 page 上，但每次導航前
    換一個新的 list，所以非同步遲到的錯誤最多只會落到後一條路由，不會整批
    汙染所有路由。
    """
    context = browser_session.new_context()
    page = context.new_page()

    page.goto(f"{live_url}/admin/")
    page.wait_for_selector("#loginForm", timeout=8000)
    page.fill("#password", "test")
    page.locator("#loginForm button[type=submit]").click()
    page.wait_for_selector("#logoutButton", timeout=15000)

    # v5.0.0+ 首次載入會有 onboarding spotlight overlay 蓋住點擊，標記為已完成。
    page.evaluate(
        "() => {"
        '  try { localStorage.setItem("danmu.onboarding.done", "1"); } catch (_) {}'
        '  var root = document.getElementById("admin-onboarding-root");'
        "  if (root) root.remove();"
        "}"
    )

    errors: list[str] = []
    page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
    page.on("pageerror", lambda exc: errors.append(f"pageerror: {exc}"))

    snapshots = {}
    for slug in EXPECTED_NAV_ORDER:
        errors.clear()
        page.evaluate(
            """(target) => {
                if (window.location.hash === target) {
                    window.location.hash = '';
                }
                window.location.hash = target;
            }""",
            f"#/{slug}",
        )
        # 等 applyRoute 真的把這條 slug 點亮，而不是等一個猜出來的秒數。失敗時
        # 直接指出是哪條路由沒套用，比事後看快照裡的 activeButtons 好懂。
        try:
            page.wait_for_function(
                """(slug) => {
                    const active = Array.from(
                        document.querySelectorAll('[data-route].is-active')
                    ).map((b) => b.dataset.route);
                    return active.length === 1 && active[0] === slug;
                }""",
                arg=slug,
                timeout=_ROUTE_APPLIED_TIMEOUT_MS,
            )
        except PlaywrightTimeoutError:
            # 不在這裡 fail：讓快照照樣拍下來，由
            # test_route_lights_exactly_its_own_sidebar_button report 實際狀態，
            # 錯誤訊息會比 fixture 掛掉有用得多。
            pass
        page.wait_for_timeout(_RENDER_SETTLE_MS)
        snapshot = page.evaluate(_SNAPSHOT_JS)
        snapshot["consoleErrors"] = list(errors)
        snapshots[slug] = snapshot

    page.close()
    context.close()
    yield snapshots


# ─── 契約：這張表本身必須跟 IA 對齊 ──────────────────────────────────────────


def test_smoke_covers_every_locked_sidebar_slug(route_snapshots):
    """快照必須涵蓋 EXPECTED_NAV_ORDER 的每一條 slug —— 這是本模組存在的理由，
    也保證日後 IA 新增 sidebar 項目時 smoke 會自動跟上。"""
    assert list(route_snapshots) == EXPECTED_NAV_ORDER
    # v7 IA (2026-07-28) 收斂為 15 項（可見 11＋開發擴充 4 項收合）；
    # 跟著 EXPECTED_NAV_ORDER 走，數量再變時只需改 IA 測試那份清單。
    assert len(route_snapshots) == len(EXPECTED_NAV_ORDER) == 15


def test_placeholder_budget_keys_are_real_routes():
    """deferred 配額表不能有拼錯或已retired的 slug，否則配額會靜默失效。"""
    unknown = set(DEFERRED_PLACEHOLDER_BUDGET) - set(EXPECTED_NAV_ORDER)
    assert not unknown, f"DEFERRED_PLACEHOLDER_BUDGET 有不存在的路由: {sorted(unknown)}"


# ─── 逐路由 smoke ────────────────────────────────────────────────────────────


@pytest.mark.parametrize("slug", EXPECTED_NAV_ORDER)
def test_route_lights_exactly_its_own_sidebar_button(route_snapshots, slug):
    """導航到 #/<slug> 後，sidebar 必須恰好只有該 slug 的按鈕是 active。

    alias 路由（themes / widgets / plugins / fonts / audit / extensions /
    webhooks / api-tokens / backup / ratelimit）會經過 applyRoute 的 alias
    解析，admin.js 特意讓「使用者點的那顆」保持高亮 —— 這裡就是在鎖那個行為。
    """
    snap = route_snapshots[slug]
    assert snap["activeButtons"] == [
        slug
    ], f"#/{slug} 的 sidebar 高亮是 {snap['activeButtons']}，預期只有 ['{slug}']"
    assert snap["ariaSelected"] == [slug], (
        f"#/{slug} 的 aria-selected 是 {snap['ariaSelected']}，"
        f"必須與 is-active 一致（螢幕閱讀器靠這個）"
    )


@pytest.mark.parametrize("slug", EXPECTED_NAV_ORDER)
def test_route_renders_topbar_title(route_snapshots, slug):
    """每條路由都要在 topbar 寫出非空標題。空標題代表 ADMIN_ROUTES 缺 entry
    或 i18n key 解析失敗。"""
    title = route_snapshots[slug]["title"]
    assert title, f"#/{slug} 的 [data-route-title] 是空的"
    assert not title.startswith("adminRouteTitle_"), (
        f"#/{slug} 的標題是未解析的 i18n key ({title!r}) —— "
        f"locales 缺這個 key，會直接顯示給使用者"
    )


@pytest.mark.parametrize("slug", EXPECTED_NAV_ORDER)
def test_route_renders_real_content(route_snapshots, slug):
    """主內容區不能是白頁。

    門檻刻意訂得比實測最低值（messages 191 字，空狀態）低一截，因為這條測的是
    「頁面有沒有渲染」，不是「有多少資料」。
    """
    chars = route_snapshots[slug]["contentChars"]
    assert chars >= MIN_CONTENT_CHARS, (
        f"#/{slug} 主內容區只有 {chars} 個字（門檻 {MIN_CONTENT_CHARS}）—— " f"頁面可能整個沒渲染"
    )


@pytest.mark.parametrize("slug", EXPECTED_NAV_ORDER)
def test_route_has_no_console_errors(route_snapshots, slug):
    """導航到該路由期間不得有 console error 或未捕捉例外。

    這裡沒有豁免名單。曾經有一條給 `style-src-elem` 的（effects 預覽注入
    `<style>` 卻沒有可用的 nonce 來源），連同根因一起修掉了 —— 見
    `test_admin_js_never_injects_a_nonce_less_style` 與 app.py 的 CSP 建構。
    """
    errors = route_snapshots[slug]["consoleErrors"]
    assert errors == [], f"#/{slug} 產生了 console error:\n" + "\n".join(errors)


def _strip_js_comments(src: str) -> str:
    """粗略剝掉 JS 註解，免得註解裡提到 `<style>` 也被當成違規。

    不需要真正的 parser：這裡只在乎 `<style…>` 這個字面樣式，而它出現在
    字串字面量裡的機率遠高於出現在被誤刪的行內。
    """
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.S)
    return re.sub(r"^\s*//.*$", "", src, flags=re.M)


def test_admin_js_never_injects_a_nonce_less_style():
    """任何 admin 模組都不得把不帶 nonce 的 `<style>` 寫進 HTML 字串。

    `style-src-elem` 只接受 'self' 與當次請求的 nonce，所以少了 nonce 的
    `<style>` 會被瀏覽器靜靜丟掉 —— 只有一行 console 警告，樣式無聲失效。
    effects 預覽就是這樣壞掉的：keyframes 寫進去了，但那個 <style> 從頭到尾
    沒有 sheet，畫面上跑的是別處同名的舊動畫。

    用 `AdminUtils.styleTag()` 產生就會自動帶上 nonce。這條測試掃全部
    admin-*.js，讓下一個手寫 `<style>` 的人在 CI 就被擋下來，而不是等到某天
    有人發現預覽沒反應。
    """
    js_dir = Path(__file__).resolve().parent.parent / "static" / "js"
    offenders = {}
    for path in sorted(js_dir.glob("admin*.js")):
        src = _strip_js_comments(path.read_text(encoding="utf-8"))
        # 找字面上寫死的完整開標籤。styleTag() 是用字串拼接組出來的
        # （`"<style" + …`），沒有字面上的 `>`，所以不會被自己抓到。
        hits = re.findall(r"<style(?![^>]*\bnonce=)[^>]*>", src)
        if hits:
            offenders[path.name] = hits
    assert not offenders, (
        "以下模組把不帶 nonce 的 <style> 寫進 HTML 字串，會被 CSP 丟掉；"
        f"請改用 AdminUtils.styleTag()：\n{offenders}"
    )


@pytest.mark.parametrize("slug", EXPECTED_NAV_ORDER)
def test_route_visible_placeholders_match_budget(route_snapshots, slug):
    """可見的 `[PLACEHOLDER]` 控制項數量必須等於 baseline 配額。

    這條是雙向的 ratchet：
      • 新頁面偷渡 placeholder → 紅（不該再增加待 BE 的死控制項）
      • 補完後端把 placeholder 拿掉 → 也會紅，提醒你把配額從表裡刪掉
    """
    expected = DEFERRED_PLACEHOLDER_BUDGET.get(slug, 0)
    found = route_snapshots[slug]["placeholders"]
    assert len(found) == expected, (
        f"#/{slug} 可見 placeholder 數 {len(found)} != baseline {expected}\n"
        f"實際內容: {found}\n"
        f"若是刻意變動，請同步更新 DEFERRED_PLACEHOLDER_BUDGET"
    )
