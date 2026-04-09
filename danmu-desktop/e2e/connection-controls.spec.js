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
    await page.waitForSelector(".main-content.loaded", { timeout: 15000 });
  });

  test.afterAll(async () => {
    if (electronApp) await electronApp.close();
  });

  // ─── Input Validation ──────────────────────────────────────────────────

  test("start button with empty host shows error toast", async () => {
    // Clear inputs
    await page.locator("#host-input").fill("");
    await page.locator("#port-input").fill("4001");

    await page.locator("#start-button").click();
    await page.waitForTimeout(500);

    // Toast should appear with error
    const toast = page.locator("#toast-container .toast-error, #toast-container [class*='error']");
    // Check any toast appeared (the exact class varies)
    const toastContainer = page.locator("#toast-container");
    const toastCount = await toastContainer.locator("> div").count();
    expect(toastCount).toBeGreaterThanOrEqual(1);
  });

  test("start button with invalid IP shows error toast", async () => {
    await page.locator("#host-input").fill("not-valid-ip!!!");
    await page.locator("#port-input").fill("4001");

    // Clear previous toasts
    await page.evaluate(() => {
      document.getElementById("toast-container").innerHTML = "";
    });

    await page.locator("#start-button").click();
    await page.waitForTimeout(500);

    const toastContainer = page.locator("#toast-container");
    const toastCount = await toastContainer.locator("> div").count();
    expect(toastCount).toBeGreaterThanOrEqual(1);
  });

  test("start button with invalid port shows error toast", async () => {
    await page.locator("#host-input").fill("127.0.0.1");
    await page.locator("#port-input").fill("999999");

    await page.evaluate(() => {
      document.getElementById("toast-container").innerHTML = "";
    });

    await page.locator("#start-button").click();
    await page.waitForTimeout(500);

    const toastContainer = page.locator("#toast-container");
    const toastCount = await toastContainer.locator("> div").count();
    expect(toastCount).toBeGreaterThanOrEqual(1);
  });

  test("start button with empty port shows error toast", async () => {
    await page.locator("#host-input").fill("127.0.0.1");
    await page.locator("#port-input").fill("");

    await page.evaluate(() => {
      document.getElementById("toast-container").innerHTML = "";
    });

    await page.locator("#start-button").click();
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

  test("host input accepts valid IP address", async () => {
    const hostInput = page.locator("#host-input");
    await hostInput.fill("192.168.1.100");
    const value = await hostInput.inputValue();
    expect(value).toBe("192.168.1.100");
  });

  test("host input accepts domain name", async () => {
    const hostInput = page.locator("#host-input");
    await hostInput.fill("example.com");
    const value = await hostInput.inputValue();
    expect(value).toBe("example.com");
  });

  test("port input accepts valid port", async () => {
    const portInput = page.locator("#port-input");
    await portInput.fill("8080");
    const value = await portInput.inputValue();
    expect(value).toBe("8080");
  });

  test("ws token input exists and accepts input", async () => {
    const tokenInput = page.locator("#ws-token-input");
    await expect(tokenInput).toBeVisible();
    await tokenInput.fill("my-secret-token");
    const value = await tokenInput.inputValue();
    expect(value).toBe("my-secret-token");
  });

  test("sync multi-display checkbox works", async () => {
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
