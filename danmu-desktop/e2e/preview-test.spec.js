// @ts-check
const { test, expect, _electron: electron } = require("@playwright/test");
const path = require("path");

const APP_DIR = path.join(__dirname, "..");

test.describe("Preview & Batch Test", () => {
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
  });

  test.afterAll(async () => {
    if (electronApp) await electronApp.close();
  });

  // ─── Preview Tests ─────────────────────────────────────────────────────

  test("preview text input has default value", async () => {
    const previewText = page.locator("#preview-text");
    const value = await previewText.inputValue();
    expect(value).toContain("測試彈幕");
  });

  test("preview text input accepts custom text", async () => {
    const previewText = page.locator("#preview-text");
    await previewText.fill("Custom test danmu");
    const value = await previewText.inputValue();
    expect(value).toBe("Custom test danmu");
  });

  test("preview button exists and is visible", async () => {
    const previewBtn = page.locator("#preview-button");
    await expect(previewBtn).toBeVisible();
  });

  test("preview button with empty text shows error toast", async () => {
    const previewText = page.locator("#preview-text");
    await previewText.fill("");

    // Clear previous toasts
    await page.evaluate(() => {
      document.getElementById("toast-container").innerHTML = "";
    });

    await page.locator("#preview-button").click();
    await page.waitForTimeout(500);

    // Should show error toast about empty text
    const toastContainer = page.locator("#toast-container");
    const toastCount = await toastContainer.locator("> div").count();
    expect(toastCount).toBeGreaterThanOrEqual(1);
  });

  test("preview button with text triggers IPC (no crash)", async () => {
    const previewText = page.locator("#preview-text");
    await previewText.fill("Test danmu preview");

    await page.evaluate(() => {
      document.getElementById("toast-container").innerHTML = "";
    });

    // Click preview — should not crash even without overlay connected
    await page.locator("#preview-button").click();
    await page.waitForTimeout(300);

    // App should still be running (no crash)
    const title = await page.title();
    expect(title).toBe("Danmu Desktop");
  });

  // ─── Batch Test ────────────────────────────────────────────────────────

  test("batch test count input has default value of 5", async () => {
    const batchCount = page.locator("#batch-test-count");
    const value = await batchCount.inputValue();
    expect(value).toBe("5");
  });

  test("batch test count input accepts custom value", async () => {
    const batchCount = page.locator("#batch-test-count");
    await batchCount.fill("10");
    const value = await batchCount.inputValue();
    expect(value).toBe("10");
  });

  test("batch test button exists and is visible", async () => {
    const batchBtn = page.locator("#batch-test-button");
    await expect(batchBtn).toBeVisible();
  });

  test("batch test button click does not crash app", async () => {
    const batchCount = page.locator("#batch-test-count");
    await batchCount.fill("3");

    await page.locator("#batch-test-button").click();
    await page.waitForTimeout(500);

    // App still running
    const title = await page.title();
    expect(title).toBe("Danmu Desktop");
  });

  // ─── Settings Persistence ──────────────────────────────────────────────

  test("slider changes persist in localStorage", async () => {
    // Change opacity
    const slider = page.locator("#overlay-opacity");
    await slider.fill("42");
    await slider.dispatchEvent("input");

    // Read from localStorage
    const stored = await page.evaluate(() => {
      const raw = localStorage.getItem("danmu-display-settings");
      return raw ? JSON.parse(raw) : null;
    });

    expect(stored).not.toBeNull();
    if (stored) {
      expect(stored.opacity).toBe(42);
    }
  });
});
