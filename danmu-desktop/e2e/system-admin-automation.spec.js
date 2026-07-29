// @ts-check
// 系統整合測試（互動與自動化篇）：投票 / 排程 / Webhooks 三個後台頁面，
// 全部走**真實 UI 操作**（fill / click / selectOption），操作後回頭查 server
// 狀態或開 viewer 分頁確認觀眾端真的變了。
//
// 與 system-admin.spec.js 同樣需要外部 server，預設 skip：
//   DANMU_E2E_SERVER=http://127.0.0.1:4000 npx playwright test e2e/system-admin-automation.spec.js
// server 需以 ADMIN_PASSWORD=test 啟動（.claude/launch.json 的 danmu-server 即是）。
const { test, expect, chromium } = require("@playwright/test");

const SERVER = process.env.DANMU_E2E_SERVER || "";
const ADMIN_PASSWORD = process.env.DANMU_E2E_ADMIN_PASSWORD || "test";

test.skip(!SERVER, "需要 DANMU_E2E_SERVER（本機系統測試專用，CI 略過）");

test.describe("後台互動與自動化（投票 / 排程 / Webhooks）", () => {
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

  /** 切到某個 admin 路由並等 section 掛上。 */
  async function gotoRoute(hash, sectionId) {
    await admin.evaluate((h) => { window.location.hash = h; }, hash);
    await admin.waitForSelector(`#${sectionId}`, { state: "visible", timeout: 15000 });
  }

  /** 目前畫面上的 toast 文字（toast.js 3 秒後自動移除）。 */
  async function toastText() {
    return admin.evaluate(() => {
      const c = document.getElementById("toast-container");
      return c ? (c.innerText || "").trim() : "";
    });
  }

  /**
   * 清掉草稿並重新載入 #/polls，讓每次跑測都從乾淨的 builder 開始。
   *
   * builder 的草稿存在 localStorage（danmu.adminPollQueue.v2）。
   *
   * 一定要用 reload()：`goto("/admin/#/polls")` 在已經停在同一個 URL 時只是
   * same-document navigation，頁面不會重載，builder 會沿用記憶體裡的舊題目
   * 佇列 —— 清了 localStorage 也沒用。
   */
  async function openFreshPollBuilder() {
    await admin.evaluate(() => {
      try { localStorage.removeItem("danmu.adminPollQueue.v2"); } catch (_) {}
      window.location.hash = "#/polls";
    });
    await admin.reload({ waitUntil: "domcontentloaded" });
    await admin.waitForSelector("#logoutButton", { timeout: 15000 });
    await admin.evaluate(() => { document.getElementById("admin-onboarding-root")?.remove(); });
    await admin.waitForSelector("#sec-polls [data-ed-text]", { state: "visible", timeout: 15000 });
    // 乾淨草稿 = 一題、兩個空選項
    await expect(admin.locator(".admin-poll-qrow")).toHaveCount(1);
    await expect(admin.locator("[data-ed-text]")).toHaveValue("");
  }

  /** 用 UI 建一個兩題投票並按 START SESSION；回傳兩題的題目文字供比對。 */
  async function buildAndStartTwoQuestionPoll(stamp) {
    const q1 = `E2E-投票-Q1-${stamp}`;
    const q2 = `E2E-投票-Q2-${stamp}`;
    await adminApi("/admin/poll/reset", { method: "POST" });
    await openFreshPollBuilder();

    // 第一題：題幹 + 兩個選項
    await admin.locator("[data-ed-text]").fill(q1);
    await admin.locator("[data-ed-opt-text]").nth(0).fill("蘋果");
    await admin.locator("[data-ed-opt-text]").nth(1).fill("香蕉");

    // 第二題：新增題目後 editor 會整塊重繪，locator 重新解析即可
    await admin.locator("[data-poll-action='add']").click();
    await expect(admin.locator(".admin-poll-qrow")).toHaveCount(2);
    await admin.locator("[data-ed-text]").fill(q2);
    await admin.locator("[data-ed-opt-text]").nth(0).fill("紅色");
    await admin.locator("[data-ed-opt-text]").nth(1).fill("藍色");
    await admin.locator("[data-ed-opt-add]").click();
    await expect(admin.locator("[data-ed-opt-text]")).toHaveCount(3);
    await admin.locator("[data-ed-opt-text]").nth(2).fill("綠色");

    await admin.locator("[data-poll-session-action='start']").click();
    // START 成功後 builder 切到 LIVE HUD（data-poll-view=live）
    await expect(admin.locator("#sec-polls")).toHaveAttribute("data-poll-view", "live", {
      timeout: 15000,
    });
    return { q1, q2 };
  }

  /** 開一個「開了 Poll 分頁」的 viewer。 */
  async function openPollViewer() {
    // viewer 的 Poll 分頁預設關閉（main.js `_resolveViewerPollEnabled`：
    // 只有 DANMU_CONFIG.viewer.pollEnabled 或 ?poll=1 才開），沒有 server 端
    // 設定會打開它 —— 這是產品行為不是測試問題，所以測試用 ?poll=1 進場。
    const page = await browser.newPage();
    await page.goto(new URL("/?poll=1", SERVER).toString());
    await page.waitForSelector("#danmuText", { timeout: 15000 });
    await page.locator('[data-viewer-tab="poll"]').click();
    await expect(page.locator("#viewerPollPane")).toBeVisible();
    return page;
  }

  test.beforeAll(async () => {
    // 登入 + 拉限流 + 清殘留，預設 30s hook timeout 不夠（限流本身要重試）。
    test.setTimeout(180000);
    browser = await chromium.launch();
    admin = await browser.newPage();
    await admin.goto(new URL("/admin/", SERVER).toString());
    await admin.waitForSelector("#password", { timeout: 15000 });
    await admin.fill("#password", ADMIN_PASSWORD);
    await admin.locator("#loginForm button[type=submit]").click();
    await admin.waitForSelector("#logoutButton", { timeout: 15000 });
    // 導覽 overlay 會攔截點擊，關掉。
    await admin.evaluate(() => {
      try { localStorage.setItem("danmu.onboarding.done", "1"); } catch (_) {}
      document.getElementById("admin-onboarding-root")?.remove();
    });
    // 本檔會在短時間內打出大量 admin 請求，預設 300/60s 會 429 打爆自己。
    // live-apply 本身也吃 admin 限流，所以要重試到成功為止。
    for (let i = 0; i < 20; i += 1) {
      const r = await adminApi("/admin/ratelimit/apply", {
        method: "POST",
        body: JSON.stringify({ scope: "admin", limit: 5000, window: 60 }),
      });
      if (r.status === 200) break;
      await admin.waitForTimeout(1500);
    }

    // 可重入：清掉前次跑測留下的殘留（本檔自己建的東西才清）。
    await adminApi("/admin/poll/reset", { method: "POST" });
    const jobs = await adminApi("/admin/scheduler/list");
    for (const job of (jobs.body && jobs.body.jobs) || []) {
      const first = (job.messages && job.messages[0] && job.messages[0].text) || "";
      if (String(first).startsWith("E2E-排程-")) {
        await adminApi("/admin/scheduler/cancel", {
          method: "POST",
          body: JSON.stringify({ job_id: job.id }),
        });
      }
    }
    const hooks = await adminApi("/admin/webhooks/list");
    for (const hook of (hooks.body && hooks.body.webhooks) || []) {
      if (String(hook.url || "").includes("/e2e-hook-")) {
        await adminApi("/admin/webhooks/unregister", {
          method: "POST",
          body: JSON.stringify({ hook_id: hook.id }),
        });
      }
    }
  });

  test.afterAll(async () => {
    if (admin) await adminApi("/admin/poll/reset", { method: "POST" });
    if (browser) await browser.close();
  });

  // ─── 投票 #/polls ────────────────────────────────────────────────────

  test("投票：UI 建兩題 → 啟動 → 推進 → 結束，server 與觀眾端全程跟著走", async () => {
    test.setTimeout(150000);
    const stamp = Date.now();
    /** @type {import('@playwright/test').Page | null} */
    let viewer = null;
    try {
      const { q1, q2 } = await buildAndStartTwoQuestionPoll(stamp);

      // ① server 端：兩題都建起來了，第一題是 current
      const status = await adminApi("/admin/poll/status");
      expect(status.status).toBe(200);
      expect(status.body.state).toBe("active");
      expect(status.body.active).toBe(true);
      expect(status.body.current_index).toBe(0);
      expect(status.body.questions.map((q) => q.text)).toEqual([q1, q2]);
      expect(status.body.questions[0].options.map((o) => o.text)).toEqual(["蘋果", "香蕉"]);
      expect(status.body.questions[1].options.map((o) => o.text)).toEqual(["紅色", "藍色", "綠色"]);

      // ② 觀眾端：Poll 分頁看得到題目與選項
      viewer = await openPollViewer();
      await expect(viewer.locator("[data-vpoll-question]")).toHaveText(q1, { timeout: 15000 });
      await expect(viewer.locator("[data-vpoll-options] .viewer-poll-option")).toHaveCount(2);
      await expect(viewer.locator("[data-vpoll-options]")).toContainText("蘋果");
      await expect(viewer.locator("[data-vpoll-options]")).toContainText("香蕉");

      // ③ 產品硬規則：觀眾**永遠看不到票數與百分比** —— DOM 與 wire 兩層都驗。
      const paneText = await viewer.locator("#viewerPollPane").innerText();
      expect(paneText).not.toMatch(/\d+\s*票/);
      expect(paneText).not.toContain("%");
      const wire = await viewer.evaluate(async () =>
        (await fetch("/poll/public-status", { credentials: "same-origin" })).json(),
      );
      // 逐一檢查選項物件的鍵：只能有 key / text，不能有 count / percentage。
      // （不能用字串比對 "count" —— payload 本身有合法的 question_count。）
      for (const q of wire.questions) {
        for (const o of q.options) {
          expect(Object.keys(o).sort()).toEqual(["key", "text"]);
        }
        expect(q).not.toHaveProperty("total_votes");
        expect(q).not.toHaveProperty("duplicate_attempts");
      }
      expect(wire).not.toHaveProperty("total_votes");
      expect(wire.question).toBe(q1);

      // ④ 用 LIVE HUD 的「⏭ 下一題」推進 —— builder 側欄的 advance 鈕在 live
      //    檢視下是隱藏的，真正給人按的是 HUD 這顆。
      await admin.locator("[data-live-action='advance']").click();
      await expect
        .poll(async () => (await adminApi("/admin/poll/status")).body.current_index, {
          timeout: 15000,
        })
        .toBe(1);
      // 觀眾端跟著換題（viewer 每 ~2s 輪詢 /poll/public-status）
      await expect(viewer.locator("[data-vpoll-question]")).toHaveText(q2, { timeout: 15000 });
      await expect(viewer.locator("[data-vpoll-options] .viewer-poll-option")).toHaveCount(3);

      // ⑤ 結束：server 轉 ended，admin 切到結果檢視，觀眾端看到「已結束」
      await admin.locator("[data-live-action='end']").click();
      await expect
        .poll(async () => (await adminApi("/admin/poll/status")).body.state, { timeout: 15000 })
        .toBe("ended");
      expect((await adminApi("/admin/poll/status")).body.active).toBe(false);
      await expect(admin.locator("#sec-polls")).toHaveAttribute("data-poll-view", "results", {
        timeout: 10000,
      });
      await expect(viewer.locator("[data-vpoll-state-label]")).toContainText("已結束", {
        timeout: 15000,
      });

      // ⑥ 結果頁的「▶ 開新投票」把 admin 帶回 builder
      await admin.locator("[data-results-action='reset']").click();
      await expect(admin.locator("#sec-polls")).toHaveAttribute("data-poll-view", "builder", {
        timeout: 10000,
      });
    } finally {
      if (viewer) await viewer.close();
      // 收尾：server 端回 idle，下一次跑測才乾淨
      const reset = await adminApi("/admin/poll/reset", { method: "POST" });
      expect([200, 204]).toContain(reset.status);
      expect((await adminApi("/admin/poll/status")).body.state).toBe("idle");
    }
  });

  test("投票：題幹留白時 START 不會建立投票（server 維持 idle）", async () => {
    test.setTimeout(90000);
    await adminApi("/admin/poll/reset", { method: "POST" });
    await openFreshPollBuilder();

    // 只填選項、題幹留白
    await admin.locator("[data-ed-opt-text]").nth(0).fill("A");
    await admin.locator("[data-ed-opt-text]").nth(1).fill("B");
    await admin.locator("[data-poll-session-action='start']").click();
    await admin.waitForTimeout(2000);

    // 真實效果：畫面沒切到 live，server 也還是 idle。
    // 注意這裡**不驗 toast** —— admin-poll-builder.js 的 sessionStart() 是先
    // `queue.map(...)` 再進 try/catch，題幹留白丟出的 Error 落在 try 之外，
    // 只會變成 unhandled rejection，使用者看不到任何回饋（次要疑似產品問題）。
    await expect(admin.locator("#sec-polls")).toHaveAttribute("data-poll-view", "builder");
    expect((await adminApi("/admin/poll/status")).body.state).toBe("idle");
  });

  // ─── 排程 #/system/scheduler ─────────────────────────────────────────

  // 疑似產品問題（2026-07-29）：排程頁的三個寫入動作全部因為欄位名稱對不上
  // 而失效，UI 按了沒有任何 server 效果 ——
  //   建立：admin-scheduler.js 送 {messages, interval, repeat}，
  //         SchedulerCreateSchema 要的是 interval_sec / repeat_count
  //         → 400 "Validation failed"（toast 顯示 Validation failed）。
  //   暫停/恢復/取消：FE 送 {id}，routes/admin/scheduler.py 讀 data["job_id"]
  //         → 一律 "Job not found"。
  // 依指示不動產品碼，這個案例整段保留但 skip；下面那個測試改驗「列表 UI
  // 真的會反映 server 狀態」，至少讓渲染路徑有回歸保護。
  test.skip("排程：UI 建立 → 暫停 → 取消（疑似產品問題，見上方註解）", async () => {
    test.setTimeout(90000);
    const stamp = Date.now();
    await gotoRoute("#/system/scheduler", "sec-scheduler");

    await admin.locator("#schedulerMessages .scheduler-msg-text").first().fill(`E2E-排程-${stamp}`);
    await admin.locator("#schedulerInterval").fill("120");
    await admin.locator("#schedulerRepeat").fill("3");
    await admin.locator("#schedulerCreateBtn").click();

    // 建立後 server 端要看得到
    const findJob = async () => {
      const r = await adminApi("/admin/scheduler/list");
      return ((r.body && r.body.jobs) || []).find((j) =>
        (j.messages || []).some((m) => m.text === `E2E-排程-${stamp}`),
      );
    };
    await expect.poll(async () => !!(await findJob()), { timeout: 10000 }).toBe(true);
    const jobId = (await findJob()).id;

    // 暫停
    await admin.locator(`.admin-scheduler-job[data-job-id="${jobId}"] .scheduler-job-toggle`).click();
    await expect
      .poll(async () => {
        const r = await adminApi("/admin/scheduler/list");
        return ((r.body && r.body.jobs) || []).find((j) => j.id === jobId).state;
      }, { timeout: 10000 })
      .toBe("paused");

    // 恢復
    await admin.locator(`.admin-scheduler-job[data-job-id="${jobId}"] .scheduler-job-toggle`).click();
    await expect
      .poll(async () => {
        const r = await adminApi("/admin/scheduler/list");
        return ((r.body && r.body.jobs) || []).find((j) => j.id === jobId).state;
      }, { timeout: 10000 })
      .toBe("active");

    // 取消 → 從清單消失
    await admin.locator(`.admin-scheduler-job[data-job-id="${jobId}"] .scheduler-job-cancel`).click();
    await expect
      .poll(async () => {
        const r = await adminApi("/admin/scheduler/list");
        return ((r.body && r.body.jobs) || []).some((j) => j.id === jobId);
      }, { timeout: 10000 })
      .toBe(false);
  });

  test("排程：清單 UI 會反映 server 的排程狀態（建立即出現、取消即消失）", async () => {
    test.setTimeout(90000);
    const stamp = Date.now();
    const text = `E2E-排程-${stamp}`;
    // 寫入動作走 API 是刻意的：UI 的建立/取消鈕目前打不通後端（見上方 skip
    // 案例的註解），這裡驗的是「排程頁把 server 狀態忠實畫出來」這條路徑。
    const created = await adminApi("/admin/scheduler/create", {
      method: "POST",
      body: JSON.stringify({ messages: [{ text }], interval_sec: 600, repeat_count: 2 }),
    });
    expect(created.status).toBe(200);
    const jobId = created.body.job_id;

    try {
      await gotoRoute("#/system/scheduler", "sec-scheduler");
      // 清單每 5s 自動重抓，等它把新 job 畫出來
      const row = admin.locator(`.admin-scheduler-job[data-job-id="${jobId}"]`);
      await expect(row).toBeVisible({ timeout: 15000 });
      await expect(row).toContainText(jobId);
      // 暫停/取消鈕都在，UI 契約沒破
      await expect(row.locator(".scheduler-job-toggle")).toBeVisible();
      await expect(row.locator(".scheduler-job-cancel")).toBeVisible();
      // 24H TIMELINE 也把它排進去了
      await expect(admin.locator("[data-sch-timeline]")).toContainText(`Job #${jobId}`);
    } finally {
      const cancelled = await adminApi("/admin/scheduler/cancel", {
        method: "POST",
        body: JSON.stringify({ job_id: jobId }),
      });
      expect(cancelled.status).toBe(200);
    }

    // 取消之後 UI 那一列要自己消失
    await expect(admin.locator(`.admin-scheduler-job[data-job-id="${jobId}"]`)).toHaveCount(0, {
      timeout: 15000,
    });
  });

  test("排程：TIMELINE / CALENDAR 檢視切換（真點擊）", async () => {
    await gotoRoute("#/system/scheduler", "sec-scheduler");
    const timeline = admin.locator("[data-sch-timeline]");
    const calendar = admin.locator("[data-sch-calendar]");
    await expect(timeline).toBeVisible();
    await expect(calendar).toBeHidden();

    await admin.locator("[data-sch-view='calendar']").click();
    await expect(calendar).toBeVisible();
    await expect(timeline).toBeHidden();
    await expect(admin.locator("[data-sch-view='calendar']")).toHaveAttribute(
      "aria-selected",
      "true",
    );

    await admin.locator("[data-sch-view='timeline']").click();
    await expect(timeline).toBeVisible();
    await expect(calendar).toBeHidden();
  });

  // ─── Webhooks #/webhooks ─────────────────────────────────────────────

  test("Webhooks：UI 註冊 endpoint → 出現在 /admin/webhooks/list 與清單卡片", async () => {
    test.setTimeout(90000);
    const stamp = Date.now();
    const url = `https://example.com/e2e-hook-${stamp}`;
    await gotoRoute("#/webhooks", "sec-webhooks");

    await admin.locator("[data-wh-action='show-add']").click();
    await expect(admin.locator("#wh-register-form")).toBeVisible();
    await admin.locator("#wh-url").fill(url);
    await admin.locator("#wh-format").selectOption("json");
    // EVENTS 預設就勾了 on_danmu（WebhookSchema 只收 on_danmu /
    // on_poll_create / on_poll_end / on_connect / on_disconnect 這五個，
    // 目錄裡其他 slug 送出去會 400 —— 所以維持預設）。
    await expect(admin.locator('input[name="wh-event"][value="on_danmu"]')).toBeChecked();
    await admin.locator("#wh-register-form button[type=submit]").click();

    let hookId = "";
    try {
      // 真實效果：server 端清單多出這一筆
      await expect
        .poll(
          async () => {
            const r = await adminApi("/admin/webhooks/list");
            const hit = ((r.body && r.body.webhooks) || []).find((h) => h.url === url);
            hookId = hit ? hit.id : "";
            return hit ? { url: hit.url, format: hit.format, events: hit.events } : null;
          },
          { timeout: 10000 },
        )
        .toEqual({ url, format: "json", events: ["on_danmu"] });

      // UI 也要畫出這張卡。註冊成功後 admin-webhooks.js 並沒有立刻重抓
      // （它比對的是 data.status === "ok"，但 /webhooks/register 回的是
      // {hook_id}），所以這裡等 12s 的輪詢把卡片補上 —— 見回報的疑似產品問題。
      await expect(admin.locator(`.admin-wh-card[data-wh-hook-id="${hookId}"]`)).toBeVisible({
        timeout: 25000,
      });
      await expect(admin.locator(`.admin-wh-card[data-wh-hook-id="${hookId}"]`)).toContainText(url);
    } finally {
      if (hookId) {
        await adminApi("/admin/webhooks/unregister", {
          method: "POST",
          body: JSON.stringify({ hook_id: hookId }),
        });
      }
    }
  });

  test("Webhooks：UI「測試」鈕會真的觸發一次投遞嘗試（審計留痕）", async () => {
    test.setTimeout(90000);
    const stamp = Date.now();
    const url = `https://example.com/e2e-hook-${stamp}`;
    const reg = await adminApi("/admin/webhooks/register", {
      method: "POST",
      body: JSON.stringify({ url, events: ["on_danmu"], format: "json" }),
    });
    expect(reg.status).toBe(200);
    const hookId = reg.body.hook_id;

    try {
      await gotoRoute("#/webhooks", "sec-webhooks");
      const card = admin.locator(`.admin-wh-card[data-wh-hook-id="${hookId}"]`);
      await expect(card).toBeVisible({ timeout: 25000 });

      await card.locator("[data-wh-action='test']").click();
      // UI 回饋
      await expect.poll(toastText, { timeout: 10000 }).toMatch(/Test payload sent|測試/);
      // 真實效果：審計軌跡留下一筆 webhooks/test。
      // （投遞本身不會成功 —— example.com 對 POST 回 405，而且 /webhooks/test
      //   emit 的事件名是 "test"，沒有任何 hook 訂閱得到它，所以 delivery log
      //   不見得會多一筆；審計才是這顆鈕唯一可靠的落點。）
      await expect
        .poll(
          async () => {
            const r = await adminApi("/admin/audit?source=webhooks&action=test&limit=50");
            return ((r.body && r.body.events) || []).some(
              (e) => e.meta && e.meta.hook_id === hookId,
            );
          },
          { timeout: 15000 },
        )
        .toBe(true);
    } finally {
      await adminApi("/admin/webhooks/unregister", {
        method: "POST",
        body: JSON.stringify({ hook_id: hookId }),
      });
    }
  });

  test("Webhooks：UI 從詳情面板刪除 endpoint（含 HudConfirm 確認）", async () => {
    test.setTimeout(90000);
    const stamp = Date.now();
    const url = `https://example.com/e2e-hook-${stamp}`;
    const reg = await adminApi("/admin/webhooks/register", {
      method: "POST",
      body: JSON.stringify({ url, events: ["on_danmu"], format: "json" }),
    });
    expect(reg.status).toBe(200);
    const hookId = reg.body.hook_id;
    let deleted = false;

    try {
      await gotoRoute("#/webhooks", "sec-webhooks");
      const card = admin.locator(`.admin-wh-card[data-wh-hook-id="${hookId}"]`);
      await expect(card).toBeVisible({ timeout: 25000 });

      await card.locator("[data-wh-action='settings']").click();
      const detail = admin.locator("[data-wh-detail]");
      await expect(detail).toBeVisible();
      await expect(detail).toContainText("RETRY POLICY");

      await detail.locator("[data-wh-action='detail-delete']").click();
      // HudConfirm（admin-hud-modal.js）—— 不是原生 confirm()
      const modal = admin.locator("#admin-hud-modal-root");
      await expect(modal).toBeVisible();
      await modal.locator(".admin-hud-modal__btn--confirm").click();

      // 真實效果：server 端清單不再有它，UI 卡片也消失
      await expect
        .poll(
          async () => {
            const r = await adminApi("/admin/webhooks/list");
            return ((r.body && r.body.webhooks) || []).some((h) => h.id === hookId);
          },
          { timeout: 10000 },
        )
        .toBe(false);
      deleted = true;
      await expect(card).toHaveCount(0, { timeout: 15000 });
    } finally {
      if (!deleted) {
        await adminApi("/admin/webhooks/unregister", {
          method: "POST",
          body: JSON.stringify({ hook_id: hookId }),
        });
      }
    }
  });
});
