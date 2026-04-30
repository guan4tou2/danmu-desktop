"""瀏覽器 E2E：完整彈幕生命週期
瀏覽器送出彈幕 → POST /fire → ws_queue → WS server → overlay client 收到

架構：
- 子行程啟動 Flask HTTP + WS 伺服器（共享 ws_queue）
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


@pytest.fixture(scope="module")
def server_ports():
    """啟動 Flask HTTP + WS 伺服器於子行程（共享 ws_queue，避免 asyncio 衝突）"""
    http_port = find_free_port()
    ws_port = find_free_port()

    script = textwrap.dedent(f"""\
        import sys, os, threading, logging
        sys.path.insert(0, ".")
        os.environ.setdefault("SETTINGS_FILE", "/tmp/_test_fire_e2e_settings.json")

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
        Config.LOGIN_RATE_LIMIT = 1000
        Config.LOGIN_RATE_WINDOW = 1

        from server.app import create_app
        from server.ws.server import run_ws_server

        logger = logging.getLogger("ws_fire_e2e")
        logger.addHandler(logging.NullHandler())

        # 啟動 WS 伺服器（daemon thread）
        ws_thread = threading.Thread(
            target=run_ws_server, args=({ws_port}, logger), daemon=True
        )
        ws_thread.start()

        # 啟動 Flask HTTP 伺服器
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

    # 等待兩個 port 都可連線
    import socket

    for port in (http_port, ws_port):
        deadline = time.monotonic() + 5.0
        while time.monotonic() < deadline:
            try:
                with socket.create_connection(("127.0.0.1", port), timeout=0.1):
                    break
            except OSError:
                time.sleep(0.05)

    yield http_port, ws_port

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
            if data.get("type") == "ping":
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

    context = browser_session.new_context()
    page = context.new_page()
    try:
        with connect(f"ws://127.0.0.1:{ws_port}") as ws:
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


def test_viewer_fire_poll_tabs_switch_and_fill_vote_key(browser_session, server_ports):
    """Viewer should expose Fire/Poll tabs and let poll option fill danmu input."""
    http_port, _ = server_ports

    context = browser_session.new_context()
    page = context.new_page()
    try:
        page.goto(f"http://127.0.0.1:{http_port}/")
        page.wait_for_selector("#danmuText", timeout=8000)

        # Tabs render; default mode = fire
        page.wait_for_selector('[data-viewer-tab="fire"]', timeout=5000)
        page.wait_for_selector('[data-viewer-tab="poll"]', timeout=5000)
        assert page.locator("#viewerFirePane").count() == 1
        assert page.locator("#viewerPollPane").count() == 1
        assert page.locator("#viewerFirePane").is_visible()
        assert not page.locator("#viewerPollPane").is_visible()

        # Inject active poll state (same shape as poll_update payload)
        page.evaluate(
            """() => {
              window.dispatchEvent(new CustomEvent("viewer-poll-state", {
                detail: {
                  state: "active",
                  question: "你最喜歡哪個主題包？",
                  total_votes: 8,
                  options: [
                    { key: "A", text: "Classic", count: 5, percentage: 62.5 },
                    { key: "B", text: "Neon", count: 3, percentage: 37.5 },
                  ],
                }
              }));
            }"""
        )

        page.locator('[data-viewer-tab="poll"]').click()
        page.wait_for_selector("#viewerPollPane", state="visible", timeout=5000)
        assert "你最喜歡哪個主題包" in (page.locator("[data-vpoll-question]").text_content() or "")

        # Clicking an option fills danmu input with its key for quick vote submit.
        page.locator('[data-vpoll-key="A"]').click()
        assert page.locator("#danmuText").input_value() == "A"
    finally:
        page.close()
        context.close()


def test_viewer_error_states(browser_session, server_ports):
    """Viewer error states should render: rate-limit overlay + offline card shell."""
    http_port, _ = server_ports

    context = browser_session.new_context()
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
        page.evaluate(
            """() => {
              const body = document.querySelector(".viewer-body");
              if (!body) return;
              body.innerHTML = `
                <div class="viewer-offline-card">
                  <h2 class="viewer-offline-lockup">Danmu Fire</h2>
                  <span class="viewer-offline-chip"><span class="viewer-offline-chip-dot"></span><span>OFFLINE</span></span>
                  <p class="viewer-offline-message">網路中斷</p>
                </div>`;
            }"""
        )
        page.wait_for_selector(".viewer-offline-card", timeout=5000)
        assert page.locator(".viewer-offline-card").is_visible()
    finally:
        page.close()
        context.close()


def test_browser_submit_danmu_appears_in_history(browser_session, server_ports):
    """送出彈幕後，admin 歷史紀錄應包含該訊息"""
    from websockets.sync.client import connect

    http_port, ws_port = server_ports

    context = browser_session.new_context()
    page = context.new_page()
    try:
        # 需要有 overlay 連線才能 fire 成功（否則 503）
        with connect(f"ws://127.0.0.1:{ws_port}"):
            time.sleep(0.5)

            # 送出彈幕
            page.goto(f"http://127.0.0.1:{http_port}/")
            page.wait_for_selector("#danmuText", timeout=8000)
            page.fill("#danmuText", "history_e2e_check")
            page.locator("#btnSend").click()
            page.wait_for_timeout(1500)

        # 登入 admin
        page.goto(f"http://127.0.0.1:{http_port}/admin/")
        page.wait_for_selector("#loginForm", timeout=8000)
        page.fill("#password", "test")
        page.locator("#loginForm button[type=submit]").click()
        page.wait_for_selector("#logoutButton", timeout=8000)

        # 切換到 history route（retrofit 後預設 tab=export，歷史列表在 list tab）
        page.evaluate("window.location.hash = '#/history'")
        page.wait_for_selector("#sec-history-tabs", state="visible", timeout=5000)
        page.locator('#sec-history-tabs [data-history-tab="list"]').click()
        page.wait_for_timeout(250)
        page.wait_for_selector("#sec-history", state="visible", timeout=5000)
        details = page.locator("#sec-history")
        if details.get_attribute("open") is None:
            details.locator("summary").click()
            page.wait_for_timeout(400)

        # 等待歷史紀錄載入
        page.wait_for_timeout(1500)

        # 確認歷史紀錄包含送出的文字
        history_text = page.locator("#sec-history").inner_text()
        assert (
            "history_e2e_check" in history_text
        ), f"History should contain 'history_e2e_check', got: {history_text[:300]}"
    finally:
        page.close()
        context.close()
