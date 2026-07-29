// @ts-check
// 系統測試（審核頁篇）：#/moderation 六個 tab 的**真實 UI 操作**，每一步都回頭
// 查 server 狀態，確認畫面上的按鈕真的改到了後端。
//
// 與其他 system-*.spec.js 一樣需要外部 server，預設 skip：
//   DANMU_E2E_SERVER=http://127.0.0.1:4000 npx playwright test e2e/system-admin-moderation.spec.js
// server 需以 ADMIN_PASSWORD=test 啟動。
//
// 涵蓋：tab strip、黑名單新增/移除、敏感字沙盒測試＋新增/刪除、封禁 picker
// （1 小時時限）＋解封、速率限制即時套用、審核佇列空狀態、指紋頁空狀態。
const { test, expect, chromium } = require("@playwright/test");

const SERVER = process.env.DANMU_E2E_SERVER || "";
const ADMIN_PASSWORD = process.env.DANMU_E2E_ADMIN_PASSWORD || "test";

test.skip(!SERVER, "需要 DANMU_E2E_SERVER（本機系統測試專用，CI 略過）");

// tab slug → 該 tab 擁有的 section id（來源：admin-tabs.js TabConfig.moderation）
const TAB_SECTION = {
  queue: "sec-modqueue",
  bans: "sec-modbans-overview",
  blacklist: "sec-blacklist",
  filters: "sec-filters",
  ratelimit: "sec-ratelimit",
  fingerprints: "sec-fingerprints",
};

test.describe("後台審核頁 · 真實 UI 操作", () => {
  /** @type {import('@playwright/test').Browser} */
  let browser;
  /** @type {import('@playwright/test').Page} */
  let admin;

  /** admin 頁面內發 API 請求（帶 session cookie 與 CSRF token）。純驗證用途。 */
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

  /** 用真的 tab 按鈕切換，並等該 tab 的 section 真的可見。 */
  async function openTab(slug) {
    const btn = admin.locator(`.admin-tabs-btn[data-nav="moderation"][data-tab="${slug}"]`);
    await btn.click();
    await expect(btn).toHaveClass(/is-active/);
    await expect(admin.locator(`#${TAB_SECTION[slug]}`)).toBeVisible();
  }

  /** HudConfirm modal 的「確認」鍵 —— 產品用自製 modal，不是原生 confirm()。 */
  async function confirmHudModal() {
    const modal = admin.locator("#admin-hud-modal-root");
    await expect(modal).toBeVisible();
    await modal.locator(".admin-hud-modal__btn--confirm").click();
    await expect(modal).toHaveCount(0);
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
    // 審核頁每個 tab 都在輪詢（modbans 30s、fingerprints 10s、modqueue…），
    // 預設 admin 300/60s 會被自己打爆成 429。拉高額度。
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
    await admin.evaluate(() => { window.location.hash = "#/moderation"; });
    await admin.waitForSelector('.admin-tabs-strip[data-nav="moderation"]', { timeout: 10000 });
  });

  test.afterAll(async () => {
    if (browser) await browser.close();
  });

  // ─── tab strip ───────────────────────────────────────────────────────

  test("審核頁有 6 個 tab，每個 tab 都掛出自己的 section", async () => {
    const tabs = admin.locator('.admin-tabs-btn[data-nav="moderation"]');
    await expect(tabs).toHaveCount(6);
    await expect(tabs).toHaveText([
      /審核佇列/, /封禁管理/, /黑名單/, /敏感字/, /速率限制/, /指紋/,
    ]);

    for (const slug of Object.keys(TAB_SECTION)) {
      await openTab(slug);
      // 只有當前 tab 的 section 該露出來
      for (const [other, secId] of Object.entries(TAB_SECTION)) {
        const sec = admin.locator(`#${secId}`);
        if (other === slug) await expect(sec).toBeVisible();
        else await expect(sec).toBeHidden();
      }
    }
  });

  // ─── 黑名單 tab ──────────────────────────────────────────────────────

  test("黑名單：輸入框＋新增鈕加關鍵字 → server 有 → UI 刪除鈕移除 → server 沒有", async () => {
    await openTab("blacklist");
    const word = `e2e禁字${Date.now()}`;

    await admin.locator("#newKeywordInput").fill(word);
    await admin.locator("#addKeywordBtn").click();

    // 真實效果：server 的黑名單清單要有這個字
    await expect
      .poll(async () => JSON.stringify((await adminApi("/admin/blacklist/get")).body), { timeout: 8000 })
      .toContain(word);
    // UI 也要長出那一列（含 UNBAN 鈕）
    const removeBtn = admin.locator(`#blacklistKeywords .removeKeywordBtn[data-keyword="${word}"]`);
    await expect(removeBtn).toBeVisible();

    try {
      await removeBtn.click();
      // 移除走 HudConfirm（自製 modal，不是原生 confirm → 不用 page.on("dialog")）
      await confirmHudModal();

      await expect
        .poll(async () => JSON.stringify((await adminApi("/admin/blacklist/get")).body), { timeout: 8000 })
        .not.toContain(word);
      await expect(removeBtn).toHaveCount(0);
    } finally {
      // 可重入保險：上面任一步失敗時別把髒關鍵字留在 server 上
      await adminApi("/admin/blacklist/remove", {
        method: "POST",
        body: JSON.stringify({ keyword: word }),
      });
    }
  });

  // ─── 敏感字（filters）tab ────────────────────────────────────────────

  test("敏感字：沙盒測試命中 block → 新增 keyword 規則 → server 有 → UI 刪除", async () => {
    await openTab("filters");
    const pattern = `e2e敏感字${Date.now()}`;

    // 先用「測試」沙盒：testRule 讀的是**表單當下的值**（不是已存規則），
    // 而 addRule 成功後會清空 pattern 欄位 —— 所以順序必須是先測試再新增。
    await admin.locator("#filterType").selectOption("keyword");
    await admin.locator("#filterAction").selectOption("block");
    await admin.locator("#filterPattern").fill(pattern);
    await admin.locator("#filterTestText").fill(`這句話裡面有 ${pattern} 應該被擋下來`);

    const [testResp] = await Promise.all([
      admin.waitForResponse(
        (r) => r.url().includes("/admin/filters/test") && r.request().method() === "POST",
      ),
      admin.locator("#filterTestBtn").click(),
    ]);
    expect((await testResp.json()).action).toBe("block");
    // 結果也要回饋到畫面上（BLOCKED / 已封鎖，語系不同字不同，只驗非空）
    await expect(admin.locator("#filterTestResult")).not.toBeEmpty();

    // 再真的新增這條規則
    await admin.locator("#filterAddBtn").click();

    const ruleRow = admin.locator(`#filterRulesList .hud-rule-row:has-text("${pattern}")`);
    let ruleId = null;
    try {
      await expect
        .poll(async () => JSON.stringify((await adminApi("/admin/filters/list")).body), { timeout: 8000 })
        .toContain(pattern);
      await expect(ruleRow).toBeVisible();
      ruleId = await ruleRow.getAttribute("data-rule-id");
      expect(ruleId).toBeTruthy();

      // 刪除也走 UI（× 鈕 + HudConfirm）
      await ruleRow.locator(".filter-delete-btn").click();
      await confirmHudModal();

      await expect
        .poll(async () => JSON.stringify((await adminApi("/admin/filters/list")).body), { timeout: 8000 })
        .not.toContain(pattern);
      await expect(ruleRow).toHaveCount(0);
    } finally {
      if (ruleId) {
        await adminApi("/admin/filters/remove", {
          method: "POST",
          body: JSON.stringify({ rule_id: ruleId }),
        });
      }
    }
  });

  // ─── 封禁管理 tab ────────────────────────────────────────────────────

  test("封禁管理：picker 選 1 小時封禁 nickname → server 有時限 ban → UI 解封", async () => {
    await openTab("bans");
    const nick = `e2e封禁${Date.now()}`;

    // B4 修正前這裡是 page.evaluate 直接叫 openPicker——當時封禁管理頁沒有任何
    // 新增封禁的入口，picker modal 是一扇沒有門把的門。現在頁面有「＋ 新增封禁」
    // 主行動鈕，且 openPicker 不帶 target 時會長出對象輸入列，所以整段走真實點擊。
    await admin.locator("#sec-modbans-overview [data-modbans-add]").click();
    const modal = admin.locator("#admin-hud-modal-root");
    await expect(modal).toBeVisible();
    await modal.locator('[data-modbans-target-kind="nick"]').click();
    await modal.locator("[data-modbans-target]").fill(nick);
    await expect(modal.locator("[data-modbans-target-val]")).toHaveText(`@${nick}`);
    await modal.locator('[data-modbans-duration="3600"]').click();
    await expect(modal.locator('[data-modbans-duration="3600"]')).toHaveClass(/is-active/);
    await expect(modal.locator("[data-modbans-when]")).toContainText("自動解封");
    await modal.locator("[data-modbans-reason]").fill("E2E 系統測試");
    await modal.locator(".admin-hud-modal__btn--confirm").click();
    await expect(modal).toHaveCount(0);

    const row = admin.locator(`#sec-modbans-overview .admin-modbans-row:has-text("@${nick}")`);
    try {
      // 真實效果：server 記了一筆 active、剩餘時間 ≤ 1 小時的封禁
      await expect
        .poll(
          async () => {
            const r = await adminApi("/admin/mod/bans/list");
            const bans = (r.body && r.body.bans) || [];
            return bans.find((b) => b.target === nick) || null;
          },
          { timeout: 8000 },
        )
        .toMatchObject({ target_kind: "nick", status: "active", reason: "E2E 系統測試" });
      const seeded = (await adminApi("/admin/mod/bans/list")).body.bans.find((b) => b.target === nick);
      expect(seeded.remaining_s).toBeGreaterThan(3000);
      expect(seeded.remaining_s).toBeLessThanOrEqual(3600);

      // UI 也要出現這一列（_submitBan 成功後會自己重抓清單）
      await expect(row).toBeVisible();

      // 解封走列上的按鈕
      await row.locator(".admin-modbans-unban").click();
      await expect
        .poll(
          async () => {
            const r = await adminApi("/admin/mod/bans/list");
            return ((r.body && r.body.bans) || []).some((b) => b.target === nick);
          },
          { timeout: 8000 },
        )
        .toBe(false);
      await expect(row).toHaveCount(0);
    } finally {
      await adminApi("/admin/mod/bans/remove", {
        method: "POST",
        body: JSON.stringify({ target_kind: "nick", target: nick }),
      });
    }
  });

  // ─── 速率限制 tab ────────────────────────────────────────────────────

  test("速率限制：改 FIRE count 後按「即時套用」→ /admin/metrics 的 fire.limit 真的變了", async () => {
    await openTab("ratelimit");

    /** 從 /admin/metrics 讀目前生效的 fire 設定（config 快照，不是計數器）。 */
    const liveFire = async () => {
      const m = await adminApi("/admin/metrics");
      expect(m.status).toBe(200);
      return m.body.rate_limits.fire;
    };
    const before = await liveFire();

    const limitInput = admin.locator('[data-rl-limit="fire"]');
    const windowSelect = admin.locator('[data-rl-window="fire"]');
    const applyBtn = admin.locator('[data-rl-save="fire"]');

    try {
      await limitInput.fill("33");
      await windowSelect.selectOption("60");
      await applyBtn.click();

      await expect.poll(async () => (await liveFire()).limit, { timeout: 8000 }).toBe(33);
      expect((await liveFire()).window).toBe(60);
      // 畫面上的 effective_rate 也要跟著重算
      await expect(admin.locator('[data-rl-effective="fire"]')).toContainText("33 / 60s");
    } finally {
      // 收尾：改回進場前的值（同一台 server 上還有別的測試在跑，別留 33）。
      // window 只能是 select 提供的五個值，落在外面就退回 60s 預設。
      const restoreLimit = String(before.limit || 20);
      const restoreWindow = ["10", "30", "60", "300", "3600"].includes(String(before.window))
        ? String(before.window)
        : "60";
      await limitInput.fill(restoreLimit);
      await windowSelect.selectOption(restoreWindow);
      await applyBtn.click();
      await expect
        .poll(async () => (await liveFire()).limit, { timeout: 8000 })
        .toBe(Number(restoreLimit));
    }
  });

  // ─── 審核佇列 tab ────────────────────────────────────────────────────

  test("審核佇列：後端回空佇列時渲染 All-Clear 空狀態（泳道收起）", async () => {
    await openTab("queue");

    // 產品現況：filter engine 還沒有 `review` action，/admin/modqueue/list
    // 永遠回空佇列（routes/admin/modqueue.py 自己的 docstring 寫明了）。
    // 所以這裡驗的是空狀態這條路徑，不是「佇列壞了」。
    const q = await adminApi("/admin/modqueue/list");
    expect(q.status).toBe(200);
    expect(q.body.pending).toEqual([]);

    const empty = admin.locator("#sec-modqueue [data-mq-empty]");
    await expect(empty).toBeVisible();
    await expect(empty).toContainText("佇列已清空");
    await expect(empty.locator(".admin-empty__btn")).toBeVisible();
    // 空狀態出現時泳道要收起來
    await expect(admin.locator("#sec-modqueue .admin-mq__body")).toBeHidden();
  });

  // 完整 approve 流程做不到：要有待審訊息才點得到 ✓ APPROVE。而待審訊息只能
  // 由 filter engine 的 `review` action 產生 —— 那個 action 還沒實作（filters
  // 只支援 block / replace / allow），modqueue 後端也直說「returns an empty
  // queue」。另一條路（真的 fire 一則）在本 spec 也不通：零 overlay 時 /fire
  // 直接 503，擋在過濾鏈之前。等 review action 落地再補。
  test.skip("審核佇列：approve 一則待審訊息（待 filter engine 的 review action 實作）", async () => {});

  // ─── 指紋 tab ────────────────────────────────────────────────────────

  test("指紋：頁面渲染，且列表／空狀態與 /admin/fingerprints 的實際筆數一致", async () => {
    await openTab("fingerprints");
    await expect(admin.locator("#sec-fingerprints .admin-ui-page-title")).toBeVisible();
    await expect(admin.locator("#adminFingerprintRefreshBtn")).toBeVisible();

    // 用 UI 的重新整理鈕觸發一次真的抓取，再比對 server 實際資料。
    const [resp] = await Promise.all([
      admin.waitForResponse((r) => r.url().includes("/admin/fingerprints?")),
      admin.locator("#adminFingerprintRefreshBtn").click(),
    ]);
    const data = await resp.json();
    const records = data.records || [];

    // 筆數要對得起來（並行測試可能剛好造出指紋，所以不寫死 0）
    await expect(admin.locator("#adminFingerprintCount")).toContainText(
      `${data.count != null ? data.count : records.length} UNIQUE`,
    );
    if (records.length === 0) {
      await expect(admin.locator('#sec-fingerprints [data-empty-kind="fingerprints"]')).toBeVisible();
    } else {
      await expect(admin.locator("#sec-fingerprints .admin-fp-data")).toHaveCount(records.length);
    }
  });
});
