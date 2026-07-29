// @ts-check
// 系統維運後台的「真實 UI 操作」系統測試。
//
// 與 system-admin.spec.js / system-interaction.spec.js 同樣需要外部 server，
// 預設 skip —— 本機執行：
//   DANMU_E2E_SERVER=http://127.0.0.1:4000 npx playwright test e2e/system-admin-system.spec.js
// server 需以 ADMIN_PASSWORD=test 啟動（.claude/launch.json 的 danmu-server 即是）。
//
// 涵蓋（全部走 locator().click()/fill()/press() 等真實操作，不用 fetch 代替操作；
// 每個案例操作完都回頭查 server 狀態或下載檔案內容來證明「真的有效果」）：
//   #/system 六個 tab、Fire Token 產生/撤銷、WS token 輪替、
//   #/backup 設定快照下載、#/history 五個 tab ＋ 搜尋 ＋ 匯出精靈、
//   #/api-tokens 建立/撤銷。
const { test, expect, chromium } = require("@playwright/test");
const fs = require("fs");

const SERVER = process.env.DANMU_E2E_SERVER || "";
const ADMIN_PASSWORD = process.env.DANMU_E2E_ADMIN_PASSWORD || "test";

test.skip(!SERVER, "需要 DANMU_E2E_SERVER（本機系統測試專用，CI 略過）");

test.describe("系統維運後台（真實 UI 操作）", () => {
  /** @type {import('@playwright/test').Browser} */
  let browser;
  /** @type {import('@playwright/test').Page} */
  let admin;

  /** admin 頁面內發 API 請求（帶 session cookie 與 CSRF token）。
   *  只用來「驗證 server 狀態」，不用來取代 UI 操作。 */
  async function adminApi(pathname, init) {
    return admin.evaluate(
      async ({ p, i }) => {
        const csrf = document.querySelector('meta[name="csrf-token"]')?.content || "";
        const r = await fetch(p, {
          ...i,
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrf,
            ...(i?.headers || {}),
          },
          credentials: "same-origin",
        });
        let body = null;
        try { body = await r.json(); } catch (_) { /* 非 JSON 回應 */ }
        return { status: r.status, body };
      },
      { p: pathname, i: init || {} },
    );
  }

  /** 切到側欄路由並等主內容區換掉。 */
  async function gotoRoute(route) {
    await admin.evaluate((r) => {
      window.location.hash = `#/${r}`;
    }, route);
    await admin.waitForTimeout(900);
  }

  /** 點 tab strip 上的分頁（#/system 與 #/history 共用同一組 .admin-tabs-btn）。 */
  async function clickTab(nav, tab) {
    const btn = admin.locator(`.admin-tabs-btn[data-nav="${nav}"][data-tab="${tab}"]`);
    await expect(btn).toBeVisible({ timeout: 10000 });
    await btn.click();
    await expect(btn).toHaveClass(/is-active/);
    await admin.waitForTimeout(700);
  }

  /** 破壞性操作都走 HudConfirm modal（admin-hud-modal.js），按下確認鈕。 */
  async function confirmHud() {
    const ok = admin.locator("#admin-hud-modal-root .admin-hud-modal__btn--confirm");
    await expect(ok).toBeVisible({ timeout: 5000 });
    await ok.click();
    await expect(admin.locator("#admin-hud-modal-root")).toHaveCount(0, { timeout: 5000 });
  }

  /** 塞一筆真的彈幕進歷史，供搜尋／匯出測試使用。
   *
   *  /fire 在零 overlay 時直接回 503（擋在過濾鏈之前），所以要先開一個真的
   *  overlay（server 自帶的 /overlay browser-source 頁就是一個合法 WS client）。
   *  收場後 overlay 連線會自己斷掉，不會殘留影響別的 spec。 */
  async function seedDanmu(text) {
    const ov = await browser.newPage();
    try {
      await ov.goto(new URL("/overlay", SERVER).toString());
      await expect
        .poll(
          async () => {
            const r = await ov.request.get(new URL("/overlay_status", SERVER).toString());
            const j = await r.json();
            return j.overlay_count;
          },
          { timeout: 15000 },
        )
        .toBeGreaterThanOrEqual(1);
      const fired = await ov.request.post(new URL("/fire", SERVER).toString(), {
        data: { text },
      });
      expect(fired.status(), "seed 彈幕失敗（/fire 沒回 200）").toBe(200);
    } finally {
      await ov.close();
    }
    // 入庫是同步的，但保險起見等一下再查。
    await expect
      .poll(
        async () => {
          const h = await adminApi("/admin/history?hours=24&limit=200");
          return JSON.stringify((h.body && h.body.records) || []);
        },
        { timeout: 8000 },
      )
      .toContain(text);
    return text;
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
    // 後台頁面自己就會輪詢一堆 admin API，預設 300/60s 會把測試自己 429 掉。
    await adminApi("/admin/ratelimit/apply", {
      method: "POST",
      body: JSON.stringify({ scope: "admin", limit: 1000, window: 60 }),
    });
    // 預設 login 是 5/300s。system-* 每檔開場都要登入一次，跑全套會在第 6 次
    // 登入時被擋在登入頁（429）。第一個跑到的檔案拉高額度，之後全域生效。
    await adminApi("/admin/ratelimit/apply", {
      method: "POST",
      body: JSON.stringify({ scope: "login", limit: 1000, window: 60 }),
    });
  });

  test.afterAll(async () => {
    if (browser) await browser.close();
  });

  // ─── #/system 六個 tab ────────────────────────────────────────────────

  test("系統 #/system 六個 tab 逐一切換，每個都渲染出實質內容", async () => {
    // [tab slug, 該 tab 的 section 容器 id]。id 是實地探測出來的，
    // 不是照 `sec-<tab>` 規則猜的 —— admin 的元素 id 有五種產生方式。
    const TABS = [
      ["overview", "sec-system-overview"],
      ["scheduler", "sec-scheduler"],
      ["security", "admin-security-v2-page"],
      ["firetoken", "sec-firetoken-overview"],
      ["wcag", "sec-wcag-overview"],
      ["about", "sec-about-overview"],
    ];

    await gotoRoute("system");
    for (const [tab, sectionId] of TABS) {
      await clickTab("system", tab);
      const section = admin.locator(`#${sectionId}`);
      await expect(section, `system/${tab} 的 section #${sectionId} 沒渲染`).toBeVisible({
        timeout: 10000,
      });
      // 「不是空殼」：容器內真的有文字，而且不是只有標題那兩行。
      const chars = await section.evaluate((el) => (el.innerText || "").trim().length);
      expect(chars, `system/${tab} 的 #${sectionId} 內容過少（${chars} 字）`).toBeGreaterThan(150);
      // 上一個 tab 的 section 要被收掉（tab 是真的切換，不是全部疊著）
      const visibleSections = await admin.evaluate(
        (ids) => ids.filter((id) => {
          const el = document.getElementById(id);
          return el && !!(el.offsetParent || el.getClientRects().length);
        }),
        TABS.map(([, id]) => id),
      );
      expect(visibleSections, `system/${tab} 同時顯示了多個 tab 的 section`).toEqual([sectionId]);
    }
  });

  // ─── Fire Token ──────────────────────────────────────────────────────

  test("Fire Token tab：UI 產生 token → /admin/integrations/fire-token 狀態改變（明碼只回一次）", async () => {
    const before = (await adminApi("/admin/integrations/fire-token")).body;

    await gotoRoute("system");
    await clickTab("system", "firetoken");

    const regen = admin.locator('#sec-firetoken-overview [data-ft-action="regen"]');
    await expect(regen).toBeVisible();
    await regen.click();
    await confirmHud();

    try {
      await expect
        .poll(
          async () => (await adminApi("/admin/integrations/fire-token")).body,
          { timeout: 8000 },
        )
        .toMatchObject({ has_token: true, enabled: true });

      const after = (await adminApi("/admin/integrations/fire-token")).body;
      expect(after.prefix, "產生後應該有 masked prefix").toBeTruthy();
      expect(after.prefix).not.toBe(before.prefix);
      expect(after.rotated_at).toBeGreaterThan(before.rotated_at || 0);
      // 明碼只在 regenerate 的回應裡出現一次；之後的 GET 只給 prefix。
      expect(after).not.toHaveProperty("token");
      expect(String(after.prefix)).toMatch(/…$/);

      // 產生事件有進 audit ring buffer（Fire Token 頁的時間軸就是讀這個）
      const audit = (await adminApi("/admin/integrations/fire-token/audit?limit=5")).body;
      expect(JSON.stringify(audit.events)).toContain("rotated");
    } finally {
      // 可重入：把 fire token 還原成測試前的樣子。原本沒 token 就撤銷掉，
      // 原本有 token 就留著新的（明碼撈不回來，產品設計上就是不可逆）。
      if (!before.has_token) {
        await adminApi("/admin/integrations/fire-token/revoke", { method: "POST" });
      }
    }
  });

  test("Fire Token tab：UI 撤銷鈕會清掉 token（has_token → false）", async () => {
    await gotoRoute("system");
    await clickTab("system", "firetoken");

    // 自備前置：沒有 token 就先用 UI 產一個，讓撤銷有東西可撤。
    if (!(await adminApi("/admin/integrations/fire-token")).body.has_token) {
      await admin.locator('#sec-firetoken-overview [data-ft-action="regen"]').click();
      await confirmHud();
      await expect
        .poll(async () => (await adminApi("/admin/integrations/fire-token")).body.has_token, {
          timeout: 8000,
        })
        .toBe(true);
    }

    const revoke = admin.locator('#sec-firetoken-overview [data-ft-action="revoke"]');
    await expect(revoke).toBeVisible();
    await revoke.click();
    await confirmHud();

    await expect
      .poll(async () => (await adminApi("/admin/integrations/fire-token")).body, { timeout: 8000 })
      .toMatchObject({ has_token: false, enabled: false, prefix: "" });
    // 撤銷 fire token 不會影響 /fire —— enforcement 尚未接上這個 flag，
    // 所以其他 spec 的彈幕測試不會被這個案例波及。
  });

  // ─── 安全 tab：WS token ───────────────────────────────────────────────

  test("安全 tab：WS token 區塊渲染，UI 輪替真的換掉 /admin/ws-auth 的 token", async () => {
    await gotoRoute("system");
    await clickTab("system", "security");

    // 區塊渲染
    for (const id of ["sec2-wsa-status", "sec2-wsa-toggle", "sec2-wsa-token",
      "sec2-wsa-reveal", "sec2-wsa-copy", "sec2-wsa-rotate", "sec2-wsa-save"]) {
      await expect(admin.locator(`#${id}`), `WS token 區塊缺 #${id}`).toBeAttached();
    }
    await expect(admin.locator("#sec2-wsa-rotate")).toBeVisible();

    const before = (await adminApi("/admin/ws-auth")).body;
    // 刻意不動 #sec2-wsa-toggle（require_token）—— 打開會讓其他 spec 的
    // Electron overlay 連不上 /ws。rotate 端點本身會保留 toggle 原狀，
    // 所以「只輪替不啟用」是產品支援的獨立操作，不需要組合操作。
    await admin.locator("#sec2-wsa-rotate").click();
    await confirmHud();

    await expect
      .poll(async () => (await adminApi("/admin/ws-auth")).body.token, { timeout: 8000 })
      .not.toBe(before.token);

    const after = (await adminApi("/admin/ws-auth")).body;
    expect(after.token.length, "輪替後應該是一組真的 token").toBeGreaterThan(16);
    expect(after.require_token, "輪替不該順手打開 require_token").toBe(before.require_token);
    // UI 也要跟著更新（loadWsAuth 會把新 token 寫回輸入框）
    await expect(admin.locator("#sec2-wsa-token")).toHaveValue(after.token, { timeout: 5000 });
  });

  // ─── #/backup 設定快照 ────────────────────────────────────────────────

  test("備份 #/backup：UI 下載設定快照，檔案存在且是合法 JSON", async () => {
    await gotoRoute("backup");
    await expect(admin.locator("#admin-backup-v2-page")).toBeVisible({ timeout: 10000 });

    const btn = admin.locator("#bk2-settings-download");
    await expect(btn).toBeVisible();
    const [download] = await Promise.all([
      admin.waitForEvent("download", { timeout: 15000 }),
      btn.click(),
    ]);

    expect(download.suggestedFilename()).toMatch(/^danmu-settings-.*\.json$/);
    const file = await download.path();
    expect(file, "下載檔案不存在").toBeTruthy();
    const raw = fs.readFileSync(file, "utf8");
    const parsed = JSON.parse(raw); // 不是合法 JSON 這行就會炸
    expect(parsed).toHaveProperty("exported_at");
    expect(parsed).toHaveProperty("version");
    expect(typeof parsed.settings).toBe("object");
    // 內容要是真的 server 設定，不是空殼
    expect(Object.keys(parsed.settings).length).toBeGreaterThan(3);
    const live = await admin.request.get(new URL("/get_settings", SERVER).toString());
    const liveJson = await live.json();
    expect(parsed.settings.Color, "快照的 Color 應與 /get_settings 一致").toEqual(liveJson.Color);
    // 快照宣稱剝掉機密欄位 —— 驗一下真的沒有
    expect(Object.keys(parsed.settings).join("|").toLowerCase()).not.toMatch(
      /password|token|secret|hash/,
    );
    // Danger 區（清除歷史 / factory reset）刻意不碰。
  });

  // ─── #/history 五個 tab ───────────────────────────────────────────────

  test("紀錄 & 匯出 #/history 五個 tab 逐一切換都渲染", async () => {
    const TABS = [
      ["sessions", "sec-sessions-overview"],
      ["search", "sec-search-overview"],
      ["audit", "sec-audit-overview"],
      ["replay", "sec-history"],
      ["audience", "sec-audience-overview"],
    ];

    await gotoRoute("history");
    for (const [tab, sectionId] of TABS) {
      await clickTab("history", tab);
      const section = admin.locator(`#${sectionId}`);
      await expect(section, `history/${tab} 的 section #${sectionId} 沒渲染`).toBeVisible({
        timeout: 10000,
      });
      const chars = await section.evaluate((el) => (el.innerText || "").trim().length);
      expect(chars, `history/${tab} 的 #${sectionId} 內容過少（${chars} 字）`).toBeGreaterThan(60);
    }
  });

  test("搜尋 tab：UI 送出查詢 → 命中時出現結果卡、未命中時出現空狀態卡", async () => {
    const marker = `E2E搜尋標的${Date.now()}`;
    await seedDanmu(marker);

    await gotoRoute("history");
    await clickTab("history", "search");
    const input = admin.locator("#admin-search-input");
    await expect(input).toBeVisible();

    // ① 命中：搜剛剛塞進去的 marker
    await input.fill(marker);
    await input.press("Enter");
    await expect(admin.locator(".admin-search-result-card")).toHaveCount(1, { timeout: 10000 });
    await expect(admin.locator(".admin-search-result-card").first()).toContainText(marker);
    await expect(admin.locator("#admin-search-results-head")).toContainText("1 筆結果");
    await expect(admin.locator("#admin-search-empty-state")).toBeHidden();
    // UI 顯示的筆數要跟 server 對得起來
    const server = await adminApi(`/admin/search?q=${encodeURIComponent(marker)}&hours=168`);
    expect(server.status).toBe(200);
    expect(server.body.total).toBe(1);

    // ② 未命中：一定搜不到的關鍵字 → 空狀態卡
    await input.fill(`不存在的關鍵字${Date.now()}xyzzy`);
    await input.press("Enter");
    await expect(admin.locator("#admin-search-empty-state")).toBeVisible({ timeout: 10000 });
    await expect(admin.locator("#admin-search-empty-state")).toHaveText("找不到符合的彈幕");
    await expect(admin.locator(".admin-search-result-card")).toHaveCount(0);
  });

  test("匯出精靈：選 JSON 格式並下載，檔案是合法 JSON 且含剛送出的彈幕", async () => {
    const marker = `E2E匯出標的${Date.now()}`;
    await seedDanmu(marker);

    await gotoRoute("history");
    await clickTab("history", "replay");

    // 匯出精靈（#history-v2-section）就掛在「重播」tab 底下，落地即可見。
    // 刻意不去點它上方那層舊 tabstrip（時間軸匯出 / 訊息清單 / 重播）——
    // 那層目前是壞的，見下面 test.skip 的說明。
    await expect(
      admin.locator("#history-v2-section"),
      "匯出精靈沒渲染（#history-v2-section 不可見）",
    ).toBeVisible({ timeout: 10000 });

    // ① 時間範圍：近 24 小時（marker 是剛剛送的，一定在範圍內）
    const range24 = admin.locator('[data-histv2-range="24h"]');
    await range24.click();
    await expect(range24).toHaveClass(/is-active/);

    // ③ 輸出格式選 JSON（預設就是 JSON，仍然真的點一次確認選取狀態）
    const jsonFmt = admin.locator('[data-histv2-fmt="JSON"]');
    await expect(jsonFmt).toBeVisible();
    await jsonFmt.click();
    await expect(jsonFmt).toHaveClass(/is-selected/);

    const go = admin.locator("#histv2-go");
    await expect(go).toBeEnabled();
    const [download] = await Promise.all([
      admin.waitForEvent("download", { timeout: 20000 }),
      go.click(),
    ]);

    expect(download.suggestedFilename()).toMatch(/^danmu-history-.*\.json$/);
    const file = await download.path();
    expect(file, "下載檔案不存在").toBeTruthy();
    const rows = JSON.parse(fs.readFileSync(file, "utf8"));
    expect(Array.isArray(rows), "匯出的 JSON 應該是紀錄陣列").toBe(true);
    expect(rows.length).toBeGreaterThan(0);
    expect(rows.map((r) => r.text)).toContain(marker);
    expect(rows[0]).toHaveProperty("timestamp");
    // 匯出完成後精靈會回報實際筆數
    await expect(admin.locator("#histv2-estimate")).toContainText(`${rows.length} 筆訊息`);
  });

  // B7 迴歸（2026-07-29 修好）：#/history/replay 上方那層舊 tabstrip
  // （#sec-history-tabs 內的 export / list / replay）是「重播」分頁底下的子分頁。
  // 修好前它與 AdminTabs 打架 —— 點「時間軸匯出」時 admin-replay.js 會把
  // body.dataset.historyTab 覆寫回 leaf 值，style.css 的
  // body[data-history-tab="replay"] #history-v2-section { display:none !important }
  // 於是把剛點開的匯出精靈藏起來。現在可見性只剩兩層且都在 JS：AdminTabs 管
  // 分頁、admin-history.js 管重播分頁內的三個 pane。
  //
  // 選擇器一律鎖在 #sec-history-tabs 內：<body> 自己也帶 data-history-tab
  // （admin-replay.js 寫的 leaf 值），裸選會撞上 strict mode。
  test("紀錄 & 匯出：舊 tabstrip 三個子分頁互斥切換", async () => {
    await gotoRoute("history");
    await clickTab("history", "replay");

    const subTab = (k) => admin.locator(`#sec-history-tabs [data-history-tab="${k}"]`);

    // 時間軸匯出 → 只剩匯出精靈
    await subTab("export").click();
    await expect(subTab("export")).toHaveClass(/is-active/);
    await expect(admin.locator("#history-v2-section")).toBeVisible();
    await expect(admin.locator("#sec-history")).toBeHidden();
    await expect(admin.locator("#sec-history-list")).toBeHidden();

    // 訊息清單 → 換成清單，且真的抓到資料（不是空殼）
    await subTab("list").click();
    await expect(subTab("list")).toHaveClass(/is-active/);
    await expect(admin.locator("#sec-history-list")).toBeVisible();
    await expect(admin.locator("#history-v2-section")).toBeHidden();

    // 重播 → 換回舊 sec-history 卡
    await subTab("replay").click();
    await expect(subTab("replay")).toHaveClass(/is-active/);
    await expect(admin.locator("#sec-history")).toBeVisible();
    await expect(admin.locator("#sec-history-list")).toBeHidden();

    // 離開重播分頁時整組都要收掉（子分頁選擇不能蓋過 AdminTabs）
    await clickTab("history", "sessions");
    await expect(admin.locator("#sec-history")).toBeHidden();
    await expect(admin.locator("#sec-history-tabs")).toBeHidden();
    await expect(admin.locator("#history-v2-section")).toBeHidden();
  });

  // ─── #/api-tokens ────────────────────────────────────────────────────

  test("API Tokens #/api-tokens：UI 建立帶 scope 的 token → 清單有它 → 撤銷後消失", async () => {
    const label = `E2E-token-${Date.now()}`;

    await gotoRoute("api-tokens");
    await expect(admin.locator("#sec-api-tokens-overview")).toBeVisible({ timeout: 10000 });

    let created = null;
    try {
      // 建立：填名稱 → 勾 scope → 送出
      await admin.locator("#adminAtLabel").fill(label);
      await admin.locator("#adminAtScope_read_history").check();
      await admin.locator("#adminAtScope_read_stats").check();
      await admin.locator("#adminAtSubmitBtn").click();

      // 明碼只顯示一次 → 成功橫幅
      const banner = admin.locator("#adminAtSuccessBanner");
      await expect(banner).toBeVisible({ timeout: 10000 });
      const raw = await admin.locator("#adminAtTokenDisplay").inputValue();
      expect(raw.length, "成功橫幅應該顯示明碼 token").toBeGreaterThan(10);

      // server 端真的有這顆 token，且 scope 就是勾的那兩個
      const list = (await adminApi("/admin/api-tokens")).body;
      created = (list.tokens || []).find((t) => t.label === label);
      expect(created, `/admin/api-tokens 清單找不到 ${label}`).toBeTruthy();
      expect(created.scopes.sort()).toEqual(["read:history", "read:stats"]);
      // 清單 UI 也要出現這一列
      await expect(
        admin.locator(`[data-at-action="revoke"][data-token-label="${label}"]`),
      ).toBeVisible({ timeout: 10000 });

      // 撤銷：點該列的撤銷鈕 → HudConfirm
      await admin.locator(`[data-at-action="revoke"][data-token-label="${label}"]`).click();
      await confirmHud();

      await expect
        .poll(
          async () =>
            ((await adminApi("/admin/api-tokens")).body.tokens || []).some(
              (t) => t.label === label,
            ),
          { timeout: 8000 },
        )
        .toBe(false);
      // UI 那一列要消失。用 toBeHidden 而不是 toHaveCount(0)：清單空掉時
      // _renderList() 只把 [data-at-table-wrap] 設成 hidden，舊的 <tr> 會留在
      // DOM 裡（下次有 token 才被 innerHTML 覆蓋）——所以「不可見」才是正解。
      await expect(
        admin.locator(`[data-at-action="revoke"][data-token-label="${label}"]`),
      ).toBeHidden({ timeout: 10000 });
      created = null;
    } finally {
      // 可重入：中途失敗時也不要留下垃圾 token。
      if (created) {
        await adminApi(`/admin/api-tokens/${encodeURIComponent(created.id)}`, {
          method: "DELETE",
        });
      }
    }
  });
});
