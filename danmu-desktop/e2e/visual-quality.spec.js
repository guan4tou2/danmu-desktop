// @ts-check
const { test, expect, _electron: electron } = require('@playwright/test');
const fs = require('fs');
const os = require('os');
const path = require('path');

const APP_DIR = path.join(__dirname, '..');
const OUT = path.join(APP_DIR, '../output/playwright/visual-polish');
let app, page, profile;

test.beforeAll(async () => {
  profile = fs.mkdtempSync(path.join(os.tmpdir(), 'danmu-visual-'));
  const entry = path.join(profile, 'launch.cjs');
  fs.writeFileSync(entry, `const {app}=require('electron'); app.setPath('userData', ${JSON.stringify(profile)}); require(${JSON.stringify(path.join(APP_DIR, 'dist/main.bundle.js'))});`);
  app = await electron.launch({ args: [entry], cwd: APP_DIR });
  page = await app.firstWindow();
  await page.waitForSelector('#main-content.loaded');
  const skip = page.locator('[data-onboarding-skip]');
  if (await skip.isVisible()) await skip.click();
  fs.mkdirSync(OUT, { recursive: true });
});

test.afterAll(async () => {
  if (app) await app.close();
  if (profile) fs.rmSync(profile, { recursive: true, force: true });
});

for (const scheme of ['light', 'dark']) {
  for (const width of [360, 560, 800]) {
    test(`client ${width}px ${scheme}: layout, settings, keyboard`, async () => {
      await page.emulateMedia({ colorScheme: /** @type {'light'|'dark'} */ (scheme) });
      await app.evaluate(({ BrowserWindow }, w) => BrowserWindow.getAllWindows()[0].setContentSize(w, w === 360 ? 300 : 500), width);
      await expect(page.locator('[data-client-overlay-button]')).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      const buttonBox = await page.locator('[data-client-overlay-button]').boundingBox();
      expect(buttonBox.height).toBeGreaterThanOrEqual(44);
      await page.screenshot({ path: path.join(OUT, `client-${width}-${scheme}.png`) });
      await page.locator('#client-settings-btn').click();
      const settings = page.locator('#client-settings');
      await expect(settings).toBeVisible();
      await expect(settings.locator('.client-settings-panel')).toHaveCSS('transform', 'none');
      await expect(settings.locator('.client-group').first()).toBeVisible();
      await expect(page.locator('.client-shell')).toHaveAttribute('inert', '');
      await page.evaluate(() => {
        const controls = [...document.querySelectorAll('#client-settings button, #client-settings input, #client-settings select')]
          .filter(el => !el.disabled && el.getClientRects().length > 0);
        controls.at(-1).focus();
      });
      await page.keyboard.press('Tab');
      expect(await page.evaluate(() => document.querySelector('#client-settings').contains(document.activeElement))).toBe(true);
      expect(await settings.evaluate(el => el.scrollWidth - el.clientWidth)).toBeLessThanOrEqual(1);
      await settings.locator('.client-settings-scroll').evaluate(el => el.scrollTop = 0);
      await page.screenshot({ path: path.join(OUT, `client-settings-${width}-${scheme}.png`) });
      await page.keyboard.press('Escape');
      await expect(settings).toBeHidden();
      await expect(page.locator('#client-settings-btn')).toBeFocused();
    });
  }
}

test('client reduced motion and invalid connection remain usable', async () => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows()[0].setContentSize(560, 500));
  await page.locator('#client-settings-btn').click();
  expect(await page.locator('.client-settings-panel').evaluate(el => getComputedStyle(el).animationName)).toBe('none');
  await page.keyboard.press('Escape');
  await page.locator('[data-client-action="edit-conn"]').click();
  await page.locator('#conn-server-input').fill('invalid host!!!');
  await page.locator('[data-conn-edit-save]').click();
  await expect(page.locator('#conn-server-input')).toBeVisible();
  await expect(page.locator('#toast-container')).not.toBeEmpty();
});
