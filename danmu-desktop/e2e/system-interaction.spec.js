// @ts-check
// 系統整合測試：真 server ＋ 真 Electron client 的端到端互動鏈。
//
// 需要外部條件，因此預設 skip —— 本機執行：
//   1. 起 dev server：cd server && PYTHONPATH=.. ADMIN_PASSWORD=test \
//      uv run python -m server.app（或 make run；PORT 預設 8080，launch.json 用 4000）
//   2. DANMU_E2E_SERVER=http://127.0.0.1:4000 npx playwright test e2e/system-interaction.spec.js
//
// 涵蓋：overlay WS 連線（經自簽 TLS 前端，驗 trusted-wss-hosts 鏈）、
// POST /fire → overlay 渲染、試放彈幕鈕、待機 QR toggle、清空畫面。
const { test, expect, _electron: electron, chromium } = require("@playwright/test");
const path = require("path");
const { startTlsProxy } = require("./helpers/tls-proxy");

const APP_DIR = path.join(__dirname, "..");
const SERVER = process.env.DANMU_E2E_SERVER || "";

test.skip(!SERVER, "需要 DANMU_E2E_SERVER（本機系統測試專用，CI 略過）");

test.describe("Server ↔ Client 系統互動", () => {
  /** @type {import('@playwright/test').ElectronApplication} */
  let electronApp;
  /** @type {import('@playwright/test').Page} */
  let main;
  /** @type {import('@playwright/test').Page} */
  let overlay;
  /** @type {{port:number, close:()=>Promise<void>}} */
  let proxy;
  /** @type {import('@playwright/test').Browser} */
  let browser;
  /** @type {import('@playwright/test').Page} */
  let adminPage;

  const serverUrl = new URL(SERVER);

  /** 登入 admin 並回傳該分頁（session cookie ＋ CSRF 都在頁面裡）。 */
  async function loginAdmin() {
    const page = await browser.newPage();
    await page.goto(new URL("/admin/", SERVER).toString());
    await page.waitForSelector("#password", { timeout: 10000 });
    await page.fill("#password", process.env.DANMU_E2E_ADMIN_PASSWORD || "test");
    await page.locator("#loginForm button[type=submit]").click();
    await page.waitForSelector("#logoutButton", { timeout: 10000 });
    return page;
  }

  /** 以 admin 身分 POST（自動帶 CSRF）。 */
  async function adminPost(pathname, body) {
    return adminPage.evaluate(
      async ({ p, b }) => {
        const csrf = document.querySelector('meta[name="csrf-token"]')?.content || "";
        const r = await fetch(p, {
          method: "POST",
          headers: { "Content-Type": "application/json", "X-CSRF-Token": csrf },
          credentials: "same-origin",
          body: JSON.stringify(b || {}),
        });
        return r.status;
      },
      { p: pathname, b: body },
    );
  }

  async function serverJson(pathname, init) {
    const r = await fetch(new URL(pathname, SERVER), init);
    return { status: r.status, body: await r.json().catch(() => null) };
  }

  test.beforeAll(async () => {
    // 後端要活著才有意義
    const health = await serverJson("/health");
    expect(health.status).toBe(200);

    browser = await chromium.launch();
    adminPage = await loginAdmin();
    // 收場（session close）會把 broadcast 切成 standby，standby 下彈幕只進
    // 暫存佇列不廣播 —— 這是產品的真實行為，測試前先確保「顯示中」。
    await adminPost("/admin/broadcast/toggle", { mode: "live" });
    // 本 spec 會連續 fire 多條，預設 20/60s 會擋住自己。
    await adminPost("/admin/ratelimit/apply", { scope: "fire", limit: 500, window: 60 });
    // 預設 login 是 5/300s。system-* 每檔開場都要登入一次，跑全套會在第 6 次
    // 登入時被擋在登入頁（429）。第一個跑到的檔案拉高額度，之後全域生效。
    await adminPost("/admin/ratelimit/apply", { scope: "login", limit: 1000, window: 60 });

    proxy = await startTlsProxy({
      targetHost: serverUrl.hostname,
      targetPort: Number(serverUrl.port || 80),
    });

    electronApp = await electron.launch({
      args: [path.join(APP_DIR, "dist", "main.bundle.js")],
      cwd: APP_DIR,
    });
    main = await electronApp.firstWindow();
    await main.waitForLoadState("domcontentloaded");
    await main.waitForSelector("#main-content.loaded", { timeout: 15000 });

    // 設定連線目標 = TLS 前端
    await main.locator('[data-nav="conn"]').click();
    await main.locator('[data-client-action="edit-conn"]').click();
    await main.waitForSelector("#conn-server-input", { state: "visible" });
    await main.evaluate(({ h, p }) => {
      const sv = document.getElementById("conn-server-input");
      const hi = document.getElementById("host-input");
      const pi = document.getElementById("port-input");
      if (sv) sv.value = `${h}:${p}`;
      if (hi) { hi.value = h; hi.dispatchEvent(new Event("input")); }
      if (pi) { pi.value = String(p); pi.dispatchEvent(new Event("input")); }
    }, { h: "127.0.0.1", p: proxy.port });

    // 開 overlay，等 child 視窗出現
    await main.locator('[data-nav="overlay"]').click();
    await main.evaluate(() => window.OverlayControl.start());
    await expect.poll(async () => {
      const pages = electronApp.windows();
      return pages.some((p) => p.url().includes("child.html"));
    }, { timeout: 15000 }).toBe(true);
    overlay = electronApp.windows().find((p) => p.url().includes("child.html"));
    await overlay.waitForLoadState("domcontentloaded");

    // 等 server 端看到 overlay WS 連線 —— 這一步同時驗證了
    // 自簽 TLS + trusted-wss-hosts + overlay-ws 模組整條鏈。
    await expect.poll(async () => {
      const s = await serverJson("/overlay_status");
      return s.body && s.body.overlay_count;
    }, { timeout: 15000 }).toBeGreaterThanOrEqual(1);
  });

  test.afterAll(async () => {
    if (adminPage) {
      await adminPost("/admin/ratelimit/apply", { scope: "fire", limit: 20, window: 60 });
    }
    if (electronApp) await electronApp.close();
    if (browser) await browser.close();
    if (proxy) await proxy.close();
  });

  test("POST /fire 的彈幕會出現在 overlay 上", async () => {
    const marker = `E2E-系統測試-${Date.now()}`;
    const fired = await serverJson("/fire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: marker, color: "88ccff", size: 40, speed: 3 }),
    });
    expect(fired.status).toBe(200);
    await expect(overlay.locator(`.danmu:has-text("${marker}")`).first())
      .toBeVisible({ timeout: 10000 });
  });

  test("主視窗「試放彈幕」鈕會讓 overlay 渲染測試彈幕", async () => {
    const btn = main.locator('[data-client-overlay-action="test-danmu"]');
    await expect(btn).toBeEnabled();
    await btn.click();
    await expect(overlay.locator('.danmu:has-text("測試彈幕")').first())
      .toBeVisible({ timeout: 10000 });
  });

  test("待機 QR toggle：開 → overlay 顯示入場畫面 → 關", async () => {
    const btn = main.locator('[data-client-overlay-action="idle-qr"]');
    await expect(btn).toBeEnabled();

    await btn.click();
    await expect(overlay.locator("#overlay-idle")).toBeVisible({ timeout: 5000 });
    await expect(btn).toHaveAttribute("aria-pressed", "true");

    await btn.click();
    await expect(overlay.locator("#overlay-idle")).toBeHidden({ timeout: 5000 });
    await expect(btn).toHaveAttribute("aria-pressed", "false");
  });

  test("觀眾在瀏覽器 viewer 頁打字送出 → overlay 渲染（三方完整鏈路）", async () => {
    // 這是產品的主線：真觀眾瀏覽器 → server /fire → WS → Electron overlay。
    // 前面的測試用 POST /fire 模擬，這裡走真正的 viewer UI。
    {
      const viewer = await browser.newPage();
      await viewer.goto(SERVER);
      // 送出鈕的三態閘門：文字非空 ∧ 不在冷卻 ∧ overlay 在線。
      // 先填字，再等閘門（overlay 在線是輪詢得知的，需要時間）。
      const marker = `觀眾送出-${Date.now()}`;
      await viewer.locator("#danmuText").fill(marker);
      await expect(viewer.locator("#btnSend")).toBeEnabled({ timeout: 15000 });
      await viewer.locator("#btnSend").click();

      await expect(overlay.locator(`.danmu:has-text("${marker}")`).first()).toBeVisible({
        timeout: 10000,
      });

      // viewer 端也要收到送出成功的回饋（送出後進入冷卻）
      await expect
        .poll(async () => viewer.locator("#btnSend").isDisabled().catch(() => false), {
          timeout: 5000,
        })
        .toBe(true);

      // server 端要留下歷史紀錄（場後回顧的來源）——完成
      // viewer → server → overlay ＋ 入庫的完整鏈路驗證。
      await expect
        .poll(
          async () =>
            adminPage.evaluate(async () => {
              const r = await fetch("/admin/history?limit=200", { credentials: "same-origin" });
              const j = await r.json();
              return JSON.stringify((j && j.records) || []);
            }),
          { timeout: 8000 },
        )
        .toContain(marker);
      await viewer.close();
    }
  });

  test("黑名單真的攔得住：加字 → /fire 400 → 移除 → 恢復（需 overlay 在線）", async () => {
    // /fire 在零 overlay 時直接回 503（擋在過濾鏈之前），所以攔截驗證必須
    // 在這個有真 overlay 的 spec 做；後台 spec 只驗黑名單清單本身。
    {
      const word = `禁字${Date.now()}`;
      const post = adminPost;

      expect(await post("/admin/blacklist/add", { keyword: word })).toBe(200);
      try {
        const blocked = await serverJson("/fire", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: `含有 ${word} 的句子` }),
        });
        expect(blocked.status).toBe(400);
      } finally {
        expect(await post("/admin/blacklist/remove", { keyword: word })).toBe(200);
      }

      const allowed = await serverJson("/fire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: `含有 ${word} 的句子` }),
      });
      expect(allowed.status).toBe(200);
      await expect(overlay.locator(`.danmu:has-text("${word}")`).first()).toBeVisible({
        timeout: 10000,
      });
    }
  });

  test("清空畫面會移除 overlay 上所有彈幕（WS 不中斷）", async () => {
    const marker = `E2E-清空前-${Date.now()}`;
    await serverJson("/fire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: marker }),
    });
    await expect(overlay.locator(`.danmu:has-text("${marker}")`).first())
      .toBeVisible({ timeout: 10000 });

    await main.locator('[data-client-overlay-action="clear"]').click();
    await expect.poll(
      () => overlay.locator(".danmu").count(),
      { timeout: 5000 },
    ).toBe(0);

    // WS 仍活著：server 端連線數不變
    const s = await serverJson("/overlay_status");
    expect(s.body.overlay_count).toBeGreaterThanOrEqual(1);
  });
});
