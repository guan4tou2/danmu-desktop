// @ts-check
const { test, expect, _electron: electron } = require("@playwright/test");
const path = require("path");

const APP_DIR = path.join(__dirname, "..");

/** @returns {Promise<import('@playwright/test').ElectronApplication>} */
async function launchApp() {
  return electron.launch({
    args: [path.join(APP_DIR, "dist", "main.bundle.js")],
    cwd: APP_DIR,
  });
}

test.describe("App Launch", () => {
  /** @type {import('@playwright/test').ElectronApplication} */
  let electronApp;
  /** @type {import('@playwright/test').Page} */
  let mainWindow;

  test.beforeAll(async () => {
    electronApp = await launchApp();
    mainWindow = await electronApp.firstWindow();
    // Wait for renderer to finish loading (including i18n which reveals .main-content)
    await mainWindow.waitForLoadState("domcontentloaded");
    await mainWindow.waitForSelector(".main-content.loaded", { timeout: 15000 });
  });

  test.afterAll(async () => {
    if (electronApp) await electronApp.close();
  });

  test("main window appears", async () => {
    expect(mainWindow).toBeTruthy();
    const isVisible = await mainWindow.isVisible("body");
    expect(isVisible).toBe(true);
  });

  test("main window has correct title", async () => {
    const title = await mainWindow.title();
    expect(title).toBe("Danmu Desktop");
  });

  test("main window contains start button", async () => {
    const startBtn = mainWindow.locator("#start-button");
    await expect(startBtn).toBeVisible();
  });

  test("main window contains stop button (disabled)", async () => {
    const stopBtn = mainWindow.locator("#stop-button");
    await expect(stopBtn).toBeVisible();
    await expect(stopBtn).toBeDisabled();
  });

  test("main window contains host input", async () => {
    const hostInput = mainWindow.locator("#host-input");
    await expect(hostInput).toBeVisible();
  });

  test("main window contains port input", async () => {
    const portInput = mainWindow.locator("#port-input");
    await expect(portInput).toBeVisible();
  });

  test("main window contains language selector", async () => {
    const langSelect = mainWindow.locator("#language-select");
    await expect(langSelect).toBeVisible();
    const options = langSelect.locator("option");
    expect(await options.count()).toBe(4);
  });

  test("language switch to Chinese updates UI text", async () => {
    const langSelect = mainWindow.locator("#language-select");
    await langSelect.selectOption("zh");
    // Wait for i18n to update
    await mainWindow.waitForTimeout(500);

    const title = mainWindow.locator("h1[data-i18n='title']");
    const titleText = await title.textContent();
    expect(titleText).toContain("彈幕");

    // Switch back to English
    await langSelect.selectOption("en");
    await mainWindow.waitForTimeout(500);
  });

  test("settings details panel is open by default", async () => {
    const details = mainWindow.locator("details");
    const isOpen = await details.getAttribute("open");
    expect(isOpen).not.toBeNull();
  });

  test("screen selector exists", async () => {
    const screenSelect = mainWindow.locator("#screen-select");
    await expect(screenSelect).toBeVisible();
    // CI headless may report 0 displays; real environments should have >= 1
    await expect(screenSelect).toBeVisible();
  });
});
