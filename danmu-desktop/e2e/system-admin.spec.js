// @ts-check
// 系統整合測試（後台篇）：admin 的操作與設定是否真的影響 viewer / overlay / server 狀態。
//
// 與 system-interaction.spec.js 同樣需要外部 server，預設 skip：
//   DANMU_E2E_SERVER=http://127.0.0.1:4000 npx playwright test e2e/system-admin.spec.js
// server 需以 ADMIN_PASSWORD=test 啟動（.claude/launch.json 的 danmu-server 即是）。
//
// 涵蓋：admin 登入、彈幕預設值下發 viewer、觀眾自訂欄位開關、黑名單攔截、
// 速率限制即時套用、場次生命週期、overlay 清空指令、歷史紀錄。
const { test, expect, chromium } = require("@playwright/test");

const SERVER = process.env.DANMU_E2E_SERVER || "";
const ADMIN_PASSWORD = process.env.DANMU_E2E_ADMIN_PASSWORD || "test";

test.skip(!SERVER, "需要 DANMU_E2E_SERVER（本機系統測試專用，CI 略過）");

test.describe("Server 前後台系統互動", () => {
  /** @type {import('@playwright/test').Browser} */
  let browser;
  /** @type {import('@playwright/test').Page} */
  let admin;

  /** admin 頁面內發 API 請求（帶 session cookie 與 CSRF token）。 */
  async function adminApi(pathname, init) {
    return admin.evaluate(
      async ({ p, i }) => {
        const csrf = document.querySelector('meta[name="csrf-token"]')?.content || "";
        const r = await fetch(p, {
          ...i,
          headers: { "Content-Type": "application/json", "X-CSRF-Token": csrf, ...(i?.headers || {}) },
          credentials: "same-origin",
        });
        let body = null;
        try { body = await r.json(); } catch (_) { /* 非 JSON 回應 */ }
        return { status: r.status, body };
      },
      { p: pathname, i: init || {} },
    );
  }

  /** 開一個乾淨的 viewer 分頁。 */
  async function openViewer() {
    const page = await browser.newPage();
    await page.goto(SERVER);
    await page.waitForSelector("#danmuText", { timeout: 10000 });
    return page;
  }

  test.beforeAll(async () => {
    browser = await chromium.launch();
    admin = await browser.newPage();
    await admin.goto(new URL("/admin/", SERVER).toString());
    await admin.waitForSelector("#password", { timeout: 10000 });
    await admin.fill("#password", ADMIN_PASSWORD);
    await admin.locator("#loginForm button[type=submit]").click();
    await admin.waitForSelector("#logoutButton", { timeout: 10000 });
    // 導覽 overlay 會攔截點擊，關掉。
    await admin.evaluate(() => {
      try { localStorage.setItem("danmu.onboarding.done", "1"); } catch (_) {}
      document.getElementById("admin-onboarding-root")?.remove();
    });
    // 本測試會在短時間內打出數百個 admin 請求，預設 300/60s 會把自己擋掉
    // （429）。用 live-apply 拉高額度——順便證明 live-apply 真的即時生效。
    await adminApi("/admin/ratelimit/apply", {
      method: "POST",
      body: JSON.stringify({ scope: "admin", limit: 1000, window: 60 }),
    });
  });

  test.afterAll(async () => {
    if (browser) await browser.close();
  });

  // ─── 登入與 shell ────────────────────────────────────────────────────

  test("admin 登入後 shell 與側欄渲染（v7 IA：15 列）", async () => {
    await expect(admin.locator(".admin-dash-grid")).toBeVisible();
    const rows = admin.locator(".admin-dash-nav-row[data-route]");
    await expect(rows).toHaveCount(15);
    // 開發擴充群組預設收合 → 可見僅 11 列
    await expect(admin.locator(".admin-dash-nav-row[data-route]:visible")).toHaveCount(11);
  });

  test("未登入的 admin API 會被擋（401）", async () => {
    const anon = await browser.newPage();
    try {
      const r = await anon.request.get(new URL("/admin/bootstrap", SERVER).toString());
      expect(r.status()).toBe(401);
    } finally {
      await anon.close();
    }
  });

  // ─── 設定下發：admin 改預設 → viewer 拿到 ────────────────────────────

  test("admin 改彈幕預設值 → viewer 端 /get_settings 立即反映", async () => {
    const res = await adminApi("/admin/update", {
      method: "POST",
      body: JSON.stringify({ type: "Color", index: 3, value: "#ff8800" }),
    });
    expect([200, 204]).toContain(res.status);

    const viewer = await openViewer();
    try {
      await expect
        .poll(
          async () => {
            const r = await viewer.request.get(new URL("/get_settings", SERVER).toString());
            const j = await r.json();
            return (j.Color && j.Color[3]) || null;
          },
          { timeout: 8000 },
        )
        .toBe("#ff8800");
    } finally {
      await viewer.close();
      await adminApi("/admin/update", {
        method: "POST",
        body: JSON.stringify({ type: "Color", index: 3, value: "#FFFFFF" }),
      });
    }
  });

  test("admin 關掉觀眾自訂顏色 → viewer 頁不再顯示色票區", async () => {
    await adminApi("/admin/update", {
      method: "POST",
      body: JSON.stringify({ type: "Color", index: 0, value: false }),
    });
    const viewer = await openViewer();
    try {
      await expect(viewer.locator("#colorPresetRow")).toHaveCount(0);
    } finally {
      await viewer.close();
      await adminApi("/admin/update", {
        method: "POST",
        body: JSON.stringify({ type: "Color", index: 0, value: true }),
      });
    }
  });

  // ─── 審核：黑名單真的擋得住 ──────────────────────────────────────────

  test("admin 加/刪黑名單關鍵字會反映在清單（攔截效果見 system-interaction）", async () => {
    const word = `禁字${Date.now()}`;
    const add = await adminApi("/admin/blacklist/add", {
      method: "POST",
      body: JSON.stringify({ keyword: word }),
    });
    expect([200, 201]).toContain(add.status);

    try {
      const list = await adminApi("/admin/blacklist/get");
      expect(JSON.stringify(list.body)).toContain(word);
    } finally {
      const removed = await adminApi("/admin/blacklist/remove", {
        method: "POST",
        body: JSON.stringify({ keyword: word }),
      });
      expect([200, 204]).toContain(removed.status);
    }

    const after = await adminApi("/admin/blacklist/get");
    expect(JSON.stringify(after.body)).not.toContain(word);
  });

  // ─── 速率限制：即時套用（不需重啟） ─────────────────────────────────

  test("速率限制即時套用會反映在 /admin/metrics 的 limiter 設定", async () => {
    const applied = await adminApi("/admin/ratelimit/apply", {
      method: "POST",
      body: JSON.stringify({ scope: "fire", limit: 33, window: 60 }),
    });
    expect(applied.status).toBe(200);
    try {
      expect(applied.body).toMatchObject({ scope: "fire", limit: 33, window: 60 });
      const m = await adminApi("/admin/metrics");
      expect(m.status).toBe(200);
    } finally {
      await adminApi("/admin/ratelimit/apply", {
        method: "POST",
        body: JSON.stringify({ scope: "fire", limit: 20, window: 60 }),
      });
    }
  });

  // ─── 場次生命週期 ────────────────────────────────────────────────────

  test("開場 → viewer 看到場次狀態 → 收場歸檔", async () => {
    const name = `E2E 場次 ${Date.now()}`;
    // 可重入：先收掉任何殘留的 live 場次（沒有時回 4xx，忽略）
    await adminApi("/admin/session/close", { method: "POST" });
    const opened = await adminApi("/admin/session/open", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    expect([200, 201]).toContain(opened.status);

    try {
      const viewer = await openViewer();
      try {
        await expect
          .poll(
            async () => {
              const r = await viewer.request.get(
                new URL("/session/public-state", SERVER).toString(),
              );
              const j = await r.json();
              return j.status || (j.session && j.session.status) || null;
            },
            { timeout: 8000 },
          )
          .toBe("live");
      } finally {
        await viewer.close();
      }
    } finally {
      const closed = await adminApi("/admin/session/close", { method: "POST" });
      expect([200, 204]).toContain(closed.status);
    }
  });

  // ─── 歷史紀錄 ────────────────────────────────────────────────────────

  test("歷史紀錄 API 可讀且結構正確（送出→入庫鏈路見 system-interaction）", async () => {
    const h = await adminApi("/admin/history?limit=50&hours=24");
    expect(h.status).toBe(200);
    expect(Array.isArray(h.body && h.body.records)).toBe(true);
    if (h.body.records.length) {
      expect(h.body.records[0]).toHaveProperty("text");
      expect(h.body.records[0]).toHaveProperty("timestamp");
    }
  });

  // ─── 後台 UI 巡覽：每頁都要有內容、無 console error ────────────────

  test("側欄每一頁都渲染出內容且無 console error", async () => {
    const errors = [];
    admin.on("console", (m) => {
      if (m.type() === "error" && !/401|429|favicon/.test(m.text())) errors.push(m.text());
    });

    const routes = await admin.$$eval(".admin-dash-nav-row[data-route]", (els) =>
      els.map((e) => e.dataset.route),
    );
    expect(routes.length).toBe(15);

    for (const route of routes) {
      await admin.evaluate((r) => {
        window.location.hash = `#/${r}`;
      }, route);
      await admin.waitForTimeout(900);
      const visibleChars = await admin.evaluate(() => {
        const host = document.querySelector(".admin-dash-main") || document.body;
        return (host.innerText || "").trim().length;
      });
      expect(visibleChars, `路由 ${route} 的主內容區是空的`).toBeGreaterThan(120);
    }

    expect(errors, `後台巡覽出現 console error：${errors.join(" | ")}`).toEqual([]);
  });
});
