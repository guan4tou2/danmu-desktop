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
    await page.locator('[data-nav="conn"]').click();
    await page.locator('[data-client-action="edit-conn"]').click();
    await page.waitForSelector("#conn-server-input", { state: "visible", timeout: 5000 });
  });

  // Helper: populate the conn-server-input AND the hidden compat fields
  // directly so ws-manager's start-button validation reads consistent
  // values. The wire module dispatches the same sync via input events but
  // tests benefit from deterministic state.
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
    await setServer("", "4001");

    await page.evaluate(() => document.getElementById("start-button").click());
    await page.waitForTimeout(500);

    const toastContainer = page.locator("#toast-container");
    const toastCount = await toastContainer.locator("> div").count();
    expect(toastCount).toBeGreaterThanOrEqual(1);
  });

  test("start button with invalid IP shows error toast", async () => {
    await setServer("not-valid-ip!!!", "4001");

    // Clear previous toasts
    await page.evaluate(() => {
      document.getElementById("toast-container").innerHTML = "";
    });

    await page.evaluate(() => document.getElementById("start-button").click());
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

    await page.evaluate(() => document.getElementById("start-button").click());
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

    await page.evaluate(() => document.getElementById("start-button").click());
    await page.waitForTimeout(500);

    const toastContainer = page.locator("#toast-container");
    const toastCount = await toastContainer.locator("> div").count();
    expect(toastCount).toBeGreaterThanOrEqual(1);
  });

  // ─── Button State ──────────────────────────────────────────────────────

  test("stop button is disabled initially", async () => {
    const stopBtn = page.locator("#stop-button");
    await expect(stopBtn).toBeDisabled();
  });

  test("start button is enabled initially", async () => {
    const startBtn = page.locator("#start-button");
    await expect(startBtn).toBeEnabled();
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
    await serverInput.fill("example.com:4001");
    const [host, port] = await page.evaluate(() => [
      document.getElementById("host-input").value,
      document.getElementById("port-input").value,
    ]);
    expect(host).toBe("example.com");
    expect(port).toBe("4001");
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

  test("ws token input lives in the collapsible auth panel and accepts input", async () => {
    // Open the <details> auth panel first so the input is visible.
    await page.evaluate(() => {
      const panel = document.querySelector("[data-conn-auth-panel]");
      if (panel) panel.open = true;
    });
    const tokenInput = page.locator("#ws-token-input");
    await expect(tokenInput).toBeVisible();
    await tokenInput.fill("my-secret-token");
    const value = await tokenInput.inputValue();
    expect(value).toBe("my-secret-token");
  });

  test("sync multi-display checkbox works", async () => {
    await page.locator('[data-nav="overlay"]').click();
    const checkbox = page.locator("#sync-multi-display-checkbox");
    const isChecked = await checkbox.isChecked();

    // Toggle
    if (isChecked) {
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
    } else {
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  });
});
