const { test, expect, _electron: electron, chromium } = require("@playwright/test");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { startTlsProxy } = require("./helpers/tls-proxy");

const SERVER = process.env.DANMU_E2E_SERVER || "";
const APP = path.resolve(__dirname, "..");
test.skip(!SERVER, "Requires an isolated DANMU_E2E_SERVER with ADMIN_PASSWORD=test");

test("paused → queue → session start → render → reconnect, on desktop and mobile", async () => {
  test.setTimeout(90000);
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), "danmu-readiness-e2e-"));
  const artifacts = process.env.DANMU_QA_ARTIFACTS || temp;
  fs.mkdirSync(artifacts, { recursive: true });
  const errors = [];
  let app, browser, proxy;
  try {
    const login = await fetch(`${SERVER}/login`, {
      method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
      body: "password=test",
    });
    const cookie = login.headers.getSetCookie().map(v => v.split(";")[0]).join("; ");
    const csrf = (await login.json()).csrf_token;
    async function admin(route, body) {
      const response = await fetch(`${SERVER}${route}`, {
        method: "POST", headers: { Cookie: cookie, "X-CSRF-Token": csrf, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      expect(response.status).toBe(200);
      return response.json();
    }
    const current = await (await fetch(`${SERVER}/admin/session/current`, { headers: { Cookie: cookie } })).json();
    if (current.status === "live") await admin("/admin/session/close", {});
    await admin("/admin/broadcast/toggle", { mode: "standby" });
    const url = new URL(SERVER);
    proxy = await startTlsProxy({ targetHost: url.hostname, targetPort: Number(url.port) });
    const entry = path.join(temp, "entry.js");
    fs.writeFileSync(entry, `const {app}=require('electron'); app.setPath('userData',${JSON.stringify(path.join(temp, "profile"))}); require(${JSON.stringify(path.join(APP, "dist/main.bundle.js"))});`);
    fs.mkdirSync(path.join(temp, "profile"));
    app = await electron.launch(process.env.DANMU_E2E_APP
      ? { executablePath: process.env.DANMU_E2E_APP, args: [`--user-data-dir=${path.join(temp, "profile")}`], cwd: APP }
      : { args: [entry], cwd: APP });
    expect(fs.realpathSync(await app.evaluate(({ app }) => app.getPath("userData"))))
      .toBe(fs.realpathSync(path.join(temp, "profile")));
    const main = await app.firstWindow();
    main.on("pageerror", error => errors.push(error.message));
    await main.locator("#main-content.loaded").waitFor();
    const skip = main.locator("[data-onboarding-skip]");
    if (await skip.isVisible()) await skip.click();
    await main.evaluate(port => {
      document.getElementById("host-input").value = "127.0.0.1";
      document.getElementById("port-input").value = String(port);
      localStorage.setItem("danmu-startup-animation", JSON.stringify({ enabled: false }));
      window.OverlayControl.start();
    }, proxy.port);
    await expect(main.locator("#client-display-banner")).toBeVisible();
    await expect(main.locator('[data-diag="display"]')).toContainText(/暫停|Paused/i);
    const overlay = app.windows().find(p => p !== main);
    expect(overlay).toBeTruthy();
    overlay.on("pageerror", error => errors.push(error.message));
    // The local paused banner can paint before the overlay's WS handshake.
    // Viewer sending is gated until an actual display has registered.
    await expect.poll(async () => (await (await fetch(`${SERVER}/overlay_status`)).json()).overlay_count,
      { timeout: 15000 }).toBeGreaterThan(0);

    browser = await chromium.launch({ channel: "chrome" });
    const context = await browser.newContext({ viewport: { width: 375, height: 812 }, locale: "zh-TW" });
    const viewer = await context.newPage();
    viewer.on("pageerror", error => errors.push(error.message));
    await viewer.goto(`${SERVER}/?lang=zh`);
    await expect(viewer.locator("[data-viewer-display-wait]")).toBeVisible();
    await expect(viewer.locator("[data-viewer-screenoff-card]")).toBeHidden();
    await viewer.locator("#danmuText").fill("readiness queued message");
    const fireResponse = viewer.waitForResponse(r => r.url().endsWith("/fire") && r.request().method() === "POST");
    await viewer.locator("#btnSend").click();
    const fired = await fireResponse;
    expect(await fired.json()).toMatchObject({ status: "queued", reason: "broadcast_standby" });
    await expect.poll(async () => (await (await fetch(`${SERVER}/overlay_status`)).json()).queue_size).toBe(1);
    await expect(main.locator('[data-diag="queue"]')).toHaveText("1");
    await expect(main.locator('[data-diag="last"]')).toContainText(/尚未收到|No messages yet/);
    expect(await overlay.locator("h1.danmu").count()).toBe(0);
    expect(await viewer.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await viewer.screenshot({ path: path.join(artifacts, "mobile-paused.png") });
    await viewer.setViewportSize({ width: 1280, height: 900 });
    await viewer.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    await expect(viewer.locator("[data-viewer-display-wait]")).toBeVisible();
    expect(await viewer.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await viewer.screenshot({ path: path.join(artifacts, "viewer-desktop-paused.png") });

    await admin("/admin/session/open", { name: "Readiness test" });
    await expect(main.locator("#client-display-banner")).toBeHidden();
    await expect(overlay.locator("h1.danmu").filter({ hasText: "readiness queued message" })).toBeVisible();
    await expect(viewer.locator("[data-viewer-display-wait]")).toBeHidden();
    await expect(main.locator('[data-diag="last"]')).not.toContainText(/尚未收到|No messages yet/);
    await expect.poll(async () => {
      const history = await (await fetch(`${SERVER}/admin/history?hours=24&limit=10`, { headers: { Cookie: cookie } })).json();
      return history.records.find(r => r.text === "readiness queued message")?.status;
    }, { timeout: 10000 }).toBe("rendered");
    const adminPage = await context.newPage();
    adminPage.setDefaultTimeout(10000);
    adminPage.on("pageerror", error => errors.push(error.message));
    await adminPage.goto(`${SERVER}/admin/`);
    await adminPage.locator("#password").fill("test");
    await adminPage.locator("#loginForm button[type=submit]").click();
    await adminPage.locator("#logoutButton").waitFor({ state: "attached" });
    await adminPage.goto(`${SERVER}/admin/#/search`);
    await adminPage.locator('[data-search-scope="all"]').click();
    await adminPage.locator("#admin-search-input").fill("readiness queued message");
    await expect(adminPage.locator(".admin-search-row__nick").first()).toContainText(/顯示端已回報呈現|Display reported rendering/);
    expect(await adminPage.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

    await admin("/admin/broadcast/toggle", { mode: "standby" });
    await expect(main.locator("#client-display-banner")).toBeVisible();
    await app.evaluate(({ BrowserWindow }) => BrowserWindow.getAllWindows().find(w => w.webContents.getURL().endsWith("index.html")).setSize(360, 200));
    expect(await main.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await main.screenshot({ path: path.join(artifacts, "desktop-paused.png") });

    await main.evaluate(() => window.OverlayControl.stop());
    await expect(main.locator("#client-display-banner")).toBeHidden();
    await main.evaluate(() => window.OverlayControl.start());
    await expect(main.locator("#client-display-banner")).toBeVisible();
    expect(errors).toEqual([]);
    await expect(main.locator('[data-diag="session"]')).toHaveText("Readiness test");
    await admin("/admin/broadcast/toggle", { mode: "live" });
    await expect(main.locator("#client-display-banner")).toBeHidden();
    await admin("/admin/session/close", {});
    await expect(main.locator("#client-display-banner")).toBeVisible();
  } finally {
    if (app) await app.close();
    if (browser) await browser.close();
    if (proxy) await proxy.close();
    fs.rmSync(temp, { recursive: true, force: true });
  }
});
