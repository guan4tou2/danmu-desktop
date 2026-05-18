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
    await mainWindow.waitForLoadState("domcontentloaded");
    // Wait for renderer to finish initializing (i18n + all event handlers)
    await mainWindow.waitForSelector("#main-content.loaded", { timeout: 15000 });
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
    expect(title).toBe("Danmu Fire");
  });

  // Post v5.0.0 P0-0 IA: start/stop buttons live in the Overlay section
  // (sidebar tab `Overlay`) which is hidden by default. Navigate first.
  async function openOverlayTab() {
    await mainWindow.locator('[data-nav="overlay"]').click();
  }

  test("Overlay section exposes the visible overlay action button", async () => {
    await openOverlayTab();
    const overlayBtn = mainWindow.locator("[data-client-overlay-button]");
    await expect(overlayBtn).toBeVisible();
    await expect(overlayBtn).toHaveAttribute("data-state", "stopped");
  });

  test("legacy start/stop controls stay hidden behind the primary overlay button", async () => {
    await openOverlayTab();
    const startBtn = mainWindow.locator("#start-button");
    const stopBtn = mainWindow.locator("#stop-button");
    await expect(startBtn).toBeHidden();
    await expect(stopBtn).toBeHidden();
    await expect(stopBtn).toBeDisabled();
  });

  // Post design-v2: host / port / token / display live inside the Conn
  // section (sidebar tab `連線`), expanded via ⚙ 更改. Navigate first.
  // Wait for the conn section to actually render before clicking the
  // edit-conn host-row — beforeAll keeps the same page across tests so
  // an earlier test may have left a different nav target active and the
  // section needs a tick to attach.
  async function openConnEdit() {
    await mainWindow.locator('[data-nav="conn"]').click();
    await mainWindow.waitForSelector(
      '[data-client-action="edit-conn"]',
      { state: "visible", timeout: 10000 },
    );
    await mainWindow.locator('[data-client-action="edit-conn"]').click();
    await mainWindow.waitForSelector("#conn-server-input", {
      state: "visible",
      timeout: 5000,
    });
  }

  test("Conn section host:port input is reachable", async () => {
    // 5.0.0 collapsed host + port into one #conn-server-input (combined
    // hostname[:port] field). The legacy #host-input / #port-input compat
    // inputs still exist in the DOM but are intentionally hidden — they get
    // populated from #conn-server-input via the conn-parser so ws-manager
    // can keep reading the same IDs.
    await openConnEdit();
    const serverInput = mainWindow.locator("#conn-server-input");
    await expect(serverInput).toBeVisible();
  });

  test("legacy host/port inputs stay hidden (kept for ws-manager compat)", async () => {
    await openConnEdit();
    await expect(mainWindow.locator("#host-input")).toBeHidden();
    await expect(mainWindow.locator("#port-input")).toBeHidden();
  });

  test("main window has localized titlebar (Electron follows system locale)", async () => {
    // 2026-05-16: language selector removed. Electron now follows the OS
    // locale via app.getLocale(); the picker is gone from the client UI.
    // Verify i18n is still wired up by checking a known data-i18n element.
    const skipLink = mainWindow.locator('[data-i18n="skipToMainContent"]');
    await expect(skipLink).toHaveAttribute("data-i18n", "skipToMainContent");
    const langAttr = await mainWindow.locator("html").getAttribute("lang");
    expect(["en", "zh", "ja", "ko"]).toContain(langAttr);
  });

  test("legacy advanced settings panel is removed (P5-2)", async () => {
    // P5-2: 進階 · 舊版設定 panel deleted — Electron is display-only,
    // danmu appearance is configured by viewers, not the desktop client.
    const advanced = mainWindow.locator(".client-overlay-advanced");
    expect(await advanced.count()).toBe(0);
  });

  test("Overlay section screen picker is reachable", async () => {
    await openOverlayTab();
    const screenChip = mainWindow.locator("[data-client-screens] .client-screen-chip").first();
    await expect(screenChip).toBeVisible();
  });
});
