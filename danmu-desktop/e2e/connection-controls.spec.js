// @ts-check
const { test, expect, _electron: electron } = require("@playwright/test");
const path = require("path");

const APP_DIR = path.join(__dirname, "..");

test.describe("Connection Controls", () => {
  /** @type {import('@playwright/test').ElectronApplication} */
  let electronApp;
  /** @type {import('@playwright/test').Page} */
  let page;

  test.beforeAll(async () => {
    electronApp = await electron.launch({
      args: [path.join(APP_DIR, "dist", "main.bundle.js")],
      cwd: APP_DIR,
    });
    page = await electronApp.firstWindow();
    await page.waitForLoadState("domcontentloaded");
    // Wait for renderer to finish initializing (i18n + all event handlers)
    await page.waitForSelector("#main-content.loaded", { timeout: 15000 });
    // 2026-05-16 conn-section impl alignment: host / port are now `hidden`
    // compat fields synced from the public `#conn-server-input` via the
    // conn-parser. The edit panel is still gated behind ⚙ 更改 so we open
    // it once for the per-test interactions below.
    // 2026-09-06 設計稿 04：三分區側欄退場，東西都在同一頁。
    // 首次啟動精靈會蓋住主畫面，先按「稍後設定」關掉。
    const _skip = page.locator("[data-onboarding-skip]");
    if (await _skip.isVisible().catch(() => false)) await _skip.click();
    await page.locator('[data-client-action="edit-conn"]').click();
    await page.waitForSelector("#conn-server-input", { state: "visible", timeout: 5000 });
  });

  // Helper: populate the conn-server-input AND the hidden compat fields
  // directly so ws-manager's startOverlay validation (invoked through
  // window.OverlayControl.start) reads consistent values. The wire module
  // dispatches the same sync via input events but tests benefit from
  // deterministic state.
  async function setServer(host, port) {
    await page.evaluate(({ h, p }) => {
      const sv = document.getElementById("conn-server-input");
      const hi = document.getElementById("host-input");
      const pi = document.getElementById("port-input");
      const combined = p === 443 || p === "" ? h : `${h}:${p}`;
      if (sv) sv.value = combined;
      if (hi) {
        hi.value = h;
        hi.dispatchEvent(new Event("input"));
      }
      if (pi) {
        pi.value = String(p);
        pi.dispatchEvent(new Event("input"));
      }
    }, { h: host, p: port });
  }

  test.afterAll(async () => {
    if (electronApp) await electronApp.close();
  });

  // ─── Input Validation ──────────────────────────────────────────────────

  test("start button with empty host shows error toast", async () => {
    await setServer("", "443");

    await page.evaluate(() => window.OverlayControl.start());
    await page.waitForTimeout(500);

    const toastContainer = page.locator("#toast-container");
    const toastCount = await toastContainer.locator("> div").count();
    expect(toastCount).toBeGreaterThanOrEqual(1);
  });

  test("start button with invalid IP shows error toast", async () => {
    await setServer("not-valid-ip!!!", "443");

    // Clear previous toasts
    await page.evaluate(() => {
      document.getElementById("toast-container").innerHTML = "";
    });

    await page.evaluate(() => window.OverlayControl.start());
    await page.waitForTimeout(500);

    const toastContainer = page.locator("#toast-container");
    const toastCount = await toastContainer.locator("> div").count();
    expect(toastCount).toBeGreaterThanOrEqual(1);
  });

  test("start button with invalid port shows error toast", async () => {
    await setServer("127.0.0.1", "999999");

    await page.evaluate(() => {
      document.getElementById("toast-container").innerHTML = "";
    });

    await page.evaluate(() => window.OverlayControl.start());
    await page.waitForTimeout(500);

    const toastContainer = page.locator("#toast-container");
    const toastCount = await toastContainer.locator("> div").count();
    expect(toastCount).toBeGreaterThanOrEqual(1);
  });

  test("start button with empty port shows error toast", async () => {
    await setServer("127.0.0.1", "");

    await page.evaluate(() => {
      document.getElementById("toast-container").innerHTML = "";
    });

    await page.evaluate(() => window.OverlayControl.start());
    await page.waitForTimeout(500);

    const toastContainer = page.locator("#toast-container");
    const toastCount = await toastContainer.locator("> div").count();
    expect(toastCount).toBeGreaterThanOrEqual(1);
  });

  // ─── Overlay Control State ─────────────────────────────────────────────
  // L3: the hidden #start-button/#stop-button proxies are gone — the visible
  // [data-client-overlay-button] reflects OverlayControl state directly.

  test("overlay button reports stopped state initially", async () => {
    const overlayBtn = page.locator("[data-client-overlay-button]");
    await expect(overlayBtn).toHaveAttribute("data-state", "stopped");
    await expect(overlayBtn).toHaveAttribute("aria-pressed", "false");
  });

  test("OverlayControl reports not running initially", async () => {
    const running = await page.evaluate(() => window.OverlayControl.isRunning());
    expect(running).toBe(false);
  });

  // ─── Connection Settings ───────────────────────────────────────────────

  test("server input accepts IP address and syncs to hidden host-input", async () => {
    const serverInput = page.locator("#conn-server-input");
    await serverInput.fill("192.168.1.100");
    // Hidden compat field is populated via the conn-parser auto-strip sync.
    const hostValue = await page.evaluate(() => document.getElementById("host-input").value);
    expect(hostValue).toBe("192.168.1.100");
  });

  test("server input accepts domain name with port and splits via parser", async () => {
    const serverInput = page.locator("#conn-server-input");
    await serverInput.fill("example.com:443");
    const [host, port] = await page.evaluate(() => [
      document.getElementById("host-input").value,
      document.getElementById("port-input").value,
    ]);
    expect(host).toBe("example.com");
    expect(port).toBe("443");
  });

  test("server input strips wss:// scheme + /ws path", async () => {
    const serverInput = page.locator("#conn-server-input");
    await serverInput.fill("wss://danmu.acme.co/ws");
    const [host, port] = await page.evaluate(() => [
      document.getElementById("host-input").value,
      document.getElementById("port-input").value,
    ]);
    expect(host).toBe("danmu.acme.co");
    expect(port).toBe("443");
  });

  test("connection password lives in the settings panel and accepts input", async () => {
    // 2026-09-06 設計稿 04 · P1：連線密碼（原 WebSocket Token）搬進 ⚙ 面板
    // 的「伺服器」區，且收在一個 <details> 裡。要先開面板、再展開那一段。
    await page.evaluate(() => {
      const gear = document.getElementById("client-settings-btn");
      if (gear) gear.click();
      const panel = document.querySelector("[data-conn-auth-panel]");
      if (panel) panel.open = true;
    });
    const tokenInput = page.locator("#ws-token-input");
    await expect(tokenInput).toBeVisible();
    await tokenInput.fill("my-secret-token");
    const value = await tokenInput.inputValue();
    expect(value).toBe("my-secret-token");
  });

  test("sync multi-display switch works", async () => {
    // 2026-09-06 設計稿 04：這顆 checkbox 是視覺開關（.client-switch）底下
    // 那個 opacity:0 / 0×0 的真 input——Playwright 不會去點零尺寸元素。
    // 點它外層的 <label>（也就是使用者實際會點的那一列）。
    // 它在主畫面上，所以前一個測試開著的 ⚙ 面板要先關掉。
    await page.evaluate(() => {
      const panel = document.getElementById("client-settings");
      if (panel && !panel.hidden) {
        const done = panel.querySelector("[data-settings-close]");
        if (done) done.click();
      }
    });
    const checkbox = page.locator("#sync-multi-display-checkbox");
    const row = page.locator("label.client-group-row:has(#sync-multi-display-checkbox)");
    const before = await checkbox.isChecked();

    await row.click();
    if (before) {
      await expect(checkbox).not.toBeChecked();
    } else {
      await expect(checkbox).toBeChecked();
    }
  });
});
