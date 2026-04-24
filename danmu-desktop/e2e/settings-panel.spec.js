// @ts-check
const { test, expect, _electron: electron } = require("@playwright/test");
const path = require("path");

const APP_DIR = path.join(__dirname, "..");

test.describe("Settings Panel", () => {
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
    // Post design-v2: opacity / speed / size / color / stroke / shadow /
    // display-area / tracks / animation all live inside the Overlay tab's
    // collapsed `.client-overlay-advanced` <details>. Open it once.
    await page.locator('[data-nav="overlay"]').click();
    const advSummary = page.locator(".client-overlay-advanced > summary");
    if (await advSummary.count()) await advSummary.click();
  });

  test.afterAll(async () => {
    if (electronApp) await electronApp.close();
  });

  // ─── Slider Tests ──────────────────────────────────────────────────────

  test("opacity slider updates display value", async () => {
    const slider = page.locator("#overlay-opacity");
    const display = page.locator("#opacity-value");

    await slider.fill("75");
    await slider.dispatchEvent("input");
    await expect(display).toHaveText("75%");
  });

  test("speed slider updates display value", async () => {
    const slider = page.locator("#danmu-speed");
    const display = page.locator("#speed-value");

    await slider.fill("3");
    await slider.dispatchEvent("input");
    await expect(display).toHaveText("3");
  });

  test("font size slider updates display value", async () => {
    const slider = page.locator("#danmu-size");
    const display = page.locator("#size-value");

    await slider.fill("80");
    await slider.dispatchEvent("input");
    await expect(display).toHaveText("80px");
  });

  test("color picker has default white value", async () => {
    const colorInput = page.locator("#danmu-color");
    const value = await colorInput.inputValue();
    expect(value).toBe("#ffffff");
  });

  test("color picker changes value", async () => {
    const colorInput = page.locator("#danmu-color");
    await colorInput.fill("#ff0000");
    const value = await colorInput.inputValue();
    expect(value).toBe("#ff0000");
    // Reset
    await colorInput.fill("#ffffff");
  });

  // ─── Toggle Tests ──────────────────────────────────────────────────────

  test("text stroke toggle shows/hides stroke controls", async () => {
    const controls = page.locator("#stroke-controls");

    // Default: checked, controls visible
    const checked = await page.evaluate(() => document.getElementById("text-stroke-toggle").checked);
    expect(checked).toBe(true);
    await expect(controls).toBeVisible();

    // Uncheck via JS (sr-only input can't be clicked normally)
    await page.evaluate(() => {
      const el = document.getElementById("text-stroke-toggle");
      el.checked = false;
      el.dispatchEvent(new Event("change", { bubbles: true }));
    });
    await page.waitForTimeout(200);
    await expect(controls).toBeHidden();

    // Re-check
    await page.evaluate(() => {
      const el = document.getElementById("text-stroke-toggle");
      el.checked = true;
      el.dispatchEvent(new Event("change", { bubbles: true }));
    });
    await page.waitForTimeout(200);
    await expect(controls).toBeVisible();
  });

  test("text shadow toggle shows/hides shadow controls", async () => {
    const controls = page.locator("#shadow-controls");

    // Default: unchecked, controls hidden
    const checked = await page.evaluate(() => document.getElementById("text-shadow-toggle").checked);
    expect(checked).toBe(false);
    await expect(controls).toBeHidden();

    // Check via JS
    await page.evaluate(() => {
      const el = document.getElementById("text-shadow-toggle");
      el.checked = true;
      el.dispatchEvent(new Event("change", { bubbles: true }));
    });
    await page.waitForTimeout(200);
    await expect(controls).toBeVisible();

    // Uncheck
    await page.evaluate(() => {
      const el = document.getElementById("text-shadow-toggle");
      el.checked = false;
      el.dispatchEvent(new Event("change", { bubbles: true }));
    });
    await page.waitForTimeout(200);
    await expect(controls).toBeHidden();
  });

  test("stroke width slider updates value when visible", async () => {
    // Ensure stroke controls are visible
    const isChecked = await page.evaluate(() => document.getElementById("text-stroke-toggle").checked);
    if (!isChecked) {
      await page.evaluate(() => {
        const el = document.getElementById("text-stroke-toggle");
        el.checked = true;
        el.dispatchEvent(new Event("change", { bubbles: true }));
      });
    }
    await page.waitForTimeout(100);

    const slider = page.locator("#stroke-width");
    const display = page.locator("#stroke-width-value");

    await slider.fill("4");
    await slider.dispatchEvent("input");
    await expect(display).toHaveText("4px");
  });

  // ─── Display Area Tests ────────────────────────────────────────────────

  test("display area top slider updates value", async () => {
    const slider = page.locator("#display-area-top");
    const display = page.locator("#display-area-top-value");

    await slider.fill("20");
    await slider.dispatchEvent("input");
    await expect(display).toHaveText("20%");
  });

  test("display area height slider updates value", async () => {
    const slider = page.locator("#display-area-height");
    const display = page.locator("#display-area-height-value");

    await slider.fill("60");
    await slider.dispatchEvent("input");
    await expect(display).toHaveText("60%");
  });

  test("display area indicator reflects slider changes", async () => {
    const indicator = page.locator("#display-area-indicator");

    // Set specific values
    const topSlider = page.locator("#display-area-top");
    const heightSlider = page.locator("#display-area-height");

    await topSlider.fill("10");
    await topSlider.dispatchEvent("input");
    await heightSlider.fill("50");
    await heightSlider.dispatchEvent("input");

    // Indicator should have updated style
    const style = await indicator.getAttribute("style");
    expect(style).toContain("10%");
    expect(style).toContain("50%");
  });

  // ─── Track Management Tests ────────────────────────────────────────────

  test("max tracks slider updates value", async () => {
    const slider = page.locator("#max-tracks");
    const display = page.locator("#max-tracks-value");

    await slider.fill("15");
    await slider.dispatchEvent("input");
    await expect(display).toHaveText("15");
  });

  test("collision detection toggle works", async () => {
    // Default: checked
    const checked = await page.evaluate(() => document.getElementById("collision-detection-toggle").checked);
    expect(checked).toBe(true);

    // Uncheck via JS (sr-only input)
    await page.evaluate(() => {
      const el = document.getElementById("collision-detection-toggle");
      el.checked = false;
      el.dispatchEvent(new Event("change", { bubbles: true }));
    });
    const unchecked = await page.evaluate(() => document.getElementById("collision-detection-toggle").checked);
    expect(unchecked).toBe(false);

    // Re-check
    await page.evaluate(() => {
      const el = document.getElementById("collision-detection-toggle");
      el.checked = true;
      el.dispatchEvent(new Event("change", { bubbles: true }));
    });
    const rechecked = await page.evaluate(() => document.getElementById("collision-detection-toggle").checked);
    expect(rechecked).toBe(true);
  });

  // ─── Details Panel Tests ───────────────────────────────────────────────

  test("settings details panel can be collapsed and expanded", async () => {
    const details = page.locator("details");
    const summary = page.locator("summary");

    // Default: open
    await expect(details).toHaveAttribute("open", "");

    // Click summary to collapse
    await summary.click();
    await page.waitForTimeout(200);
    const openAfterCollapse = await details.getAttribute("open");
    expect(openAfterCollapse).toBeNull();

    // Click summary to re-expand
    await summary.click();
    await page.waitForTimeout(200);
    await expect(details).toHaveAttribute("open", "");
  });

  // ─── Startup Animation Tests ───────────────────────────────────────────

  test("startup animation toggle is checked by default", async () => {
    const toggle = page.locator("#startup-animation-toggle");
    await expect(toggle).toBeChecked();
  });

  test("animation type selector has options", async () => {
    const select = page.locator("#animation-type-select");
    const options = select.locator("option");
    expect(await options.count()).toBe(3);
  });

  test("selecting custom animation type shows text input", async () => {
    const select = page.locator("#animation-type-select");
    const customContainer = page.locator("#custom-animation-text-container");

    // Default: not custom, container hidden
    await expect(customContainer).toBeHidden();

    // Select custom
    await select.selectOption("custom");
    await page.waitForTimeout(200);
    await expect(customContainer).toBeVisible();

    // Select back to link-start
    await select.selectOption("link-start");
    await page.waitForTimeout(200);
    await expect(customContainer).toBeHidden();
  });
});
