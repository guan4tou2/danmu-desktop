"""瀏覽器 E2E：完整彈幕生命週期
瀏覽器送出彈幕 → POST /fire → ws_queue → Flask /ws → overlay client 收到

架構：
- 子行程啟動 Flask HTTP + /ws 伺服器（共享 ws_queue）
- Playwright 瀏覽器送出彈幕
- websockets.sync.client 作為 overlay 接收 WS 訊息
"""

import json
import select
import subprocess
import sys
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


def _wait_for_http_health(port: int, timeout: float = 5.0) -> bool:
    import urllib.request

    deadline = time.monotonic() + timeout
    url = f"http://127.0.0.1:{port}/health"
    while time.monotonic() < deadline:
        try:
            with urllib.request.urlopen(url, timeout=0.5) as response:
                if response.status == 200:
                    return True
        except OSError:
            time.sleep(0.05)
    return False


@pytest.fixture(scope="module")
def server_ports():
    """啟動 Flask HTTP + /ws 伺服器於子行程（共享 ws_queue，避免 asyncio 衝突）"""
    http_port = find_free_port()

    script = textwrap.dedent(f"""\
        import sys, os
        sys.path.insert(0, ".")
        os.environ.setdefault("SETTINGS_FILE", "/tmp/_test_fire_e2e_settings.json")
        os.environ["ADMIN_PASSWORD"] = "test"
        os.environ["ADMIN_PASSWORD_HASHED"] = ""

        from server.config import Config
        # 子行程用的是正式 Config，不是 TestConfig —— 不在這裡關掉的話，
        # 這些測試送出的彈幕會寫進真正的 runtime/danmu_history.jsonl。
        Config.DANMU_HISTORY_PERSIST = False
        Config.WS_REQUIRE_TOKEN = False
        Config.WS_AUTH_TOKEN = ""
        Config.WS_ALLOWED_ORIGINS = []
        Config.TESTING = True
        Config.SECRET_KEY = "test-secret"
        Config.ADMIN_PASSWORD = "test"
        Config.ADMIN_PASSWORD_HASHED = ""
        Config.FIRE_RATE_LIMIT = 1000
        Config.FIRE_RATE_WINDOW = 1
        Config.LOGIN_RATE_LIMIT = 1000
        Config.LOGIN_RATE_WINDOW = 1

        from server.app import create_app
        from server.ws import start_ws_broadcast
        from gevent.pywsgi import WSGIServer

        # 啟動 Flask HTTP + /ws 伺服器
        app = create_app(Config)
        start_ws_broadcast()
        print("READY", flush=True)
        WSGIServer(("127.0.0.1", {http_port}), app).serve_forever()
    """)

    proc = subprocess.Popen(
        [sys.executable, "-c", script],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        cwd=str(__import__("pathlib").Path(__file__).resolve().parents[2]),
    )

    # 等待伺服器印出 READY
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

    assert _wait_for_http_health(http_port), "HTTP server did not become healthy"

    yield http_port, http_port

    proc.terminate()
    proc.wait(timeout=5)


@pytest.fixture(scope="module")
def browser_session():
    """啟動 headless Chromium（module 共用）"""
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        yield browser
        browser.close()


# ─── 輔助函式 ─────────────────────────────────────────────────────────────────


def _recv_non_ping(ws, timeout: float = 5.0):
    """從 WS 接收非 ping 訊息"""
    from websockets.exceptions import ConnectionClosed

    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        remaining = max(0.05, deadline - time.monotonic())
        try:
            ws.socket.settimeout(remaining)
            data = json.loads(ws.recv())
            # display_layer 是連上線時伺服器補推的現況（設計稿 16 · OS1），
            # 跟 ping 一樣不是「我剛送出的那則」。
            if data.get("type") in ("ping", "display_layer"):
                continue
            return data
        except (TimeoutError, ConnectionClosed):
            break
    return None


# ─── 測試 ────────────────────────────────────────────────────────────────────


def test_browser_submit_danmu_reaches_overlay(browser_session, server_ports):
    """瀏覽器送出彈幕 → overlay WS client 應收到相同文字"""
    from websockets.sync.client import connect

    http_port, ws_port = server_ports

    context = browser_session.new_context(locale="zh-TW")
    page = context.new_page()
    try:
        with connect(f"ws://127.0.0.1:{ws_port}/ws") as ws:
            # 等待 overlay 在 WS 伺服器註冊
            time.sleep(0.5)

            page.goto(f"http://127.0.0.1:{http_port}/")
            page.wait_for_selector("#danmuText", timeout=8000)

            page.fill("#danmuText", "browser_e2e_test_msg")
            page.locator("#btnSend").click()

            # overlay 應收到此彈幕
            msg = _recv_non_ping(ws, timeout=5.0)
            assert msg is not None, "overlay did not receive danmu from browser"
            assert msg["text"] == "browser_e2e_test_msg"
    finally:
        page.close()
        context.close()


def test_viewer_identity_label_uses_nickname(browser_session, server_ports):
    """暱稱這個欄位要叫「暱稱」，不是泛稱的「身分」。

    2026-09-06 設計稿 05：暱稱從首屏的 chip popover 搬進樣式抽層的一列
    （#nicknameControl 現在是那一列本身，點它進第二層編輯）。標籤還在，
    只是不再包在 <label> 裡——所以這裡改成問那一列自己。

    語系由瀏覽器 locale 決定，zh 或 en 都算通過；真正要釘的是
    data-i18n="nickname" 這個語意。
    """
    http_port, _ = server_ports

    context = browser_session.new_context(locale="zh-TW")
    page = context.new_page()
    try:
        page.goto(f"http://127.0.0.1:{http_port}/")
        page.wait_for_selector("#nicknameControl", state="attached", timeout=8000)
        label_span = page.locator('#nicknameControl span[data-i18n="nickname"]').first
        label_text = label_span.text_content() or ""
        i18n_key = label_span.get_attribute("data-i18n") or ""
        assert i18n_key == "nickname"
        assert "暱稱" in label_text or "Nickname" in label_text
    finally:
        page.close()
        context.close()


def test_viewer_poll_tab_hidden_by_default(browser_session, server_ports):
    """Viewer should keep poll tab disabled by default (prototype pollEnabled=false)."""
    http_port, _ = server_ports

    context = browser_session.new_context(locale="zh-TW")
    page = context.new_page()
    try:
        page.goto(f"http://127.0.0.1:{http_port}/")
        page.wait_for_selector("#danmuText", timeout=8000)

        # Poll tab/pane should be hidden by default; fire pane stays active.
        page.wait_for_selector("#viewerFirePane", state="visible", timeout=5000)
        assert page.locator("#viewerFirePane").count() == 1
        assert page.locator("#viewerFirePane").is_visible()
        assert page.locator('[data-viewer-tab="poll"]').count() == 0
        assert page.locator("#viewerPollPane").count() == 0
    finally:
        page.close()
        context.close()


def test_viewer_poll_tab_hides_results(browser_session, server_ports):
    """觀眾看得到題目與選項，但永遠看不到票數與百分比。

    2026-09-06 設計稿 05 · V6：分段控制**有投票時才浮出**。沒有投票的時候
    首屏就只有彈幕——多一顆永遠停在「目前沒有進行中的投票」的分頁，等於
    在首屏放一個常態性的空狀態。

    所以這裡要先在 server 端**真的建一場投票**，不能只 dispatch 一個合成
    事件：觀眾頁自己會輪詢 /poll/public-status，輪到的那一刻會把合成狀態
    覆蓋掉，分段控制隨即收起來——Playwright 就會看到「resolved 到元素、
    但點的時候 not visible」（CI 34045013476）。合成事件仍然要送，因為它
    帶著票數與百分比，而這條測試要證明的正是「帶了也不顯示」。
    """
    http_port, _ = server_ports
    question = "下一段要玩什麼？"

    context = browser_session.new_context(locale="zh-TW")
    page = context.new_page()
    created = {}
    try:
        page.goto(f"http://127.0.0.1:{http_port}/")
        created = page.evaluate(
            """async (question) => {
                const body = new URLSearchParams();
                body.set("password", "test");
                const login = await fetch("/login", {
                    method: "POST",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "X-Requested-With": "fetch",
                        "Accept": "application/json",
                    },
                    body: body.toString(),
                });
                const auth = await login.json();
                if (!auth.ok) return { step: "login", status: login.status };
                const res = await fetch("/admin/poll/create", {
                    method: "POST",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRF-Token": auth.csrf_token,
                    },
                    body: JSON.stringify({
                        question: question,
                        options: ["Boss Rush", "Speedrun"],
                    }),
                });
                return { step: "create", status: res.status, csrf: auth.csrf_token };
            }""",
            question,
        )
        assert created["status"] < 400, f"poll setup failed: {created}"

        page.goto(f"http://127.0.0.1:{http_port}/?poll=1")
        # DOM 立刻就在，但 script 還沒跑——這時 dispatch 事件會掉進虛空。
        # 等 viewer-style-sheet.js（最後一個 defer script）掛好就緒旗標。
        page.wait_for_selector("body[data-viewer-ready]", timeout=8000)

        page.evaluate(
            """(question) => {
              window.dispatchEvent(new CustomEvent("viewer-poll-state", {
                detail: {
                  type: "poll_update",
                  state: "active",
                  question: question,
                  total_votes: 10,
                  options: [
                    { key: "A", text: "Boss Rush", count: 4, percentage: 40 },
                    { key: "B", text: "Speedrun", count: 6, percentage: 60 },
                  ],
                },
              }));
            }""",
            question,
        )

        # 投票一到，分段控制才浮出來（設計稿 05 · V6）
        page.wait_for_selector('[data-viewer-tab="poll"]', state="visible", timeout=5000)
        page.locator('[data-viewer-tab="poll"]').click()
        page.wait_for_selector("#viewerPollPane", state="visible", timeout=5000)
        page.wait_for_selector('[data-vpoll-key="A"]', timeout=5000)
        poll_text = page.locator("#viewerPollPane").inner_text()
        assert question in poll_text
        assert "A" in poll_text
        assert "Boss Rush" in poll_text
        assert "B" in poll_text
        assert "Speedrun" in poll_text
        assert "總票數" not in poll_text
        assert "10" not in poll_text
        assert "4" not in poll_text
        assert "6" not in poll_text
        assert "40%" not in poll_text
        assert "60%" not in poll_text
        assert page.locator(".viewer-poll-option-stat").count() == 0
    finally:
        # 這場投票是這條測試建的，留著會讓同一顆 server 上的其他測試看到
        # 一個莫名其妙的進行中投票。
        try:
            page.evaluate(
                """async (csrf) => {
                    await fetch("/admin/poll/reset", {
                        method: "POST",
                        credentials: "same-origin",
                        headers: { "X-CSRF-Token": csrf },
                    });
                }""",
                created.get("csrf"),
            )
        except Exception:
            pass
        page.close()
        context.close()


def test_viewer_error_states(browser_session, server_ports):
    """Viewer error states should render: rate-limit overlay + offline card shell."""
    http_port, _ = server_ports

    context = browser_session.new_context(locale="zh-TW")
    page = context.new_page()
    try:
        # 429 state preview (driven by viewer-states URL param)
        page.goto(f"http://127.0.0.1:{http_port}/?state=ratelimit&retry_after=8")
        page.wait_for_selector('[data-vs-key="ratelimit"]', timeout=5000)
        assert page.locator('[data-vs-key="ratelimit"]').is_visible()
        assert "訊息送太快了" in (page.locator(".viewer-state-title").text_content() or "")

        # Offline card classes exist in DOM after explicit trigger.
        page.goto(f"http://127.0.0.1:{http_port}/")
        page.wait_for_selector("#danmuText", timeout=8000)
        page.evaluate("""() => {
              const body = document.querySelector(".viewer-body");
              if (!body) return;
              body.innerHTML = `
                <div class="viewer-offline-card">
                  <h2 class="viewer-offline-lockup">Danmu Fire</h2>
                  <span class="viewer-offline-chip">
                    <span class="viewer-offline-chip-dot"></span><span>OFFLINE</span>
                  </span>
                  <p class="viewer-offline-message">網路中斷</p>
                </div>`;
            }""")
        page.wait_for_selector(".viewer-offline-card", timeout=5000)
        assert page.locator(".viewer-offline-card").is_visible()
    finally:
        page.close()
        context.close()


def test_browser_submit_danmu_appears_in_history(browser_session, server_ports):
    """送出彈幕後，admin 歷史紀錄應包含該訊息"""
    from websockets.sync.client import connect

    http_port, ws_port = server_ports
    message = f"history_e2e_check_{int(time.time() * 1000)}"

    context = browser_session.new_context(locale="zh-TW")
    page = context.new_page()
    try:
        # 需要有 overlay 連線才能 fire 成功（否則 503）
        with connect(f"ws://127.0.0.1:{ws_port}/ws"):
            time.sleep(0.5)

            # 送出彈幕
            page.goto(f"http://127.0.0.1:{http_port}/")
            page.wait_for_selector("#danmuText", timeout=8000)
            page.fill("#danmuText", message)
            with page.expect_response(lambda r: r.url.endswith("/fire"), timeout=8000) as fire_info:
                page.locator("#btnSend").click()
            fire_resp = fire_info.value
            assert fire_resp.status == 200, fire_resp.text()
            page.wait_for_timeout(1500)

        # Login UI is covered by test_browser_admin.py. This flow focuses on
        # the lifecycle contract: browser fire -> admin history data.
        login_status = page.evaluate("""async () => {
                const body = new URLSearchParams();
                body.set("password", "test");
                const res = await fetch("/login", {
                    method: "POST",
                    credentials: "same-origin",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: body.toString(),
                });
                return res.status;
            }""")
        assert 200 <= login_status < 400, f"login request failed: {login_status}"
        deadline = time.monotonic() + 8
        records = []
        while time.monotonic() < deadline:
            payload = page.evaluate("""async () => {
                    const res = await fetch("/admin/history?hours=24&limit=300", {
                        credentials: "same-origin",
                    });
                    return await res.json();
                }""")
            records = payload.get("messages") or payload.get("records") or []
            if any(r.get("text") == message for r in records):
                break
            time.sleep(0.25)
        assert any(
            r.get("text") == message for r in records
        ), f"History should contain {message!r}, got: {records[:3]}"
    finally:
        page.close()
        context.close()
