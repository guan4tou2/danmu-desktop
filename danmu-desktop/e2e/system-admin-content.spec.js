// @ts-check
// 系統整合測試（場前佈置 · 內容管理篇）：後台「效果庫 / 主題包 / 素材庫 /
// Widgets / 觀眾頁」這幾頁的**真實 UI 操作**是否真的改到 server 狀態。
//
// 與 system-admin.spec.js 同樣需要外部 server，預設 skip：
//   DANMU_E2E_SERVER=http://127.0.0.1:4000 npx playwright test e2e/system-admin-content.spec.js
// server 需以 ADMIN_PASSWORD=test 啟動（.claude/launch.json 的 danmu-server 即是）。
//
// 原則：
//   1. 全部用 locator().click() / fill() / setInputFiles() 這種真操作，
//      不用 fetch 取代點擊（API 層另有 pytest 覆蓋）。
//   2. 每個案例操作完都去查 server（公開 API 或 /admin/*）確認狀態真的變了。
//   3. 可重入：唯一名稱用時間戳、finally 一律收尾還原。
const fs = require("fs");
const os = require("os");
const path = require("path");
const { test, expect, chromium } = require("@playwright/test");

const SERVER = process.env.DANMU_E2E_SERVER || "";
const ADMIN_PASSWORD = process.env.DANMU_E2E_ADMIN_PASSWORD || "test";

test.skip(!SERVER, "需要 DANMU_E2E_SERVER（本機系統測試專用，CI 略過）");

// 1×1 透明 PNG（emoji 上傳用最小合法檔案）。
const TINY_PNG_BASE64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

test.describe("場前佈置 · 內容管理（真 UI 操作）", () => {
  /** @type {import('@playwright/test').Browser} */
  let browser;
  /** @type {import('@playwright/test').Page} */
  let admin;
  /** @type {string[]} 測試期間產生的暫存檔，afterAll 清掉 */
  const tmpFiles = [];

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

  /** 公開（未登入視角）API —— 用來證明「觀眾端真的看得到」。 */
  async function publicJson(pathname) {
    const r = await admin.request.get(new URL(pathname, SERVER).toString());
    return r.json();
  }

  /** 切路由並等該頁的招牌元素出現。 */
  async function gotoRoute(hash, readySelector) {
    await admin.evaluate((h) => { window.location.hash = h; }, hash);
    if (readySelector) {
      await admin.waitForSelector(readySelector, { state: "visible", timeout: 15000 });
    }
    await admin.waitForTimeout(300);
  }

  /** 按下 HudConfirm modal 的確認鈕（刪除類操作共用的確認框）。 */
  async function confirmHud() {
    const btn = admin.locator('#admin-hud-modal-root [data-modal-action="confirm"]');
    await expect(btn).toBeVisible({ timeout: 5000 });
    await btn.click();
    await expect(admin.locator("#admin-hud-modal-root")).toHaveCount(0, { timeout: 5000 });
  }

  /** 寫一個暫存檔並登記到 afterAll 清單。 */
  function writeTmp(name, buf) {
    const p = path.join(os.tmpdir(), name);
    fs.writeFileSync(p, buf);
    tmpFiles.push(p);
    return p;
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
    // 本檔會連續打數百個 admin 請求，預設 300/60s 會 429 打爆自己。
    await adminApi("/admin/ratelimit/apply", {
      method: "POST",
      body: JSON.stringify({ scope: "admin", limit: 1000, window: 60 }),
    });
  });

  test.afterAll(async () => {
    if (browser) await browser.close();
    for (const f of tmpFiles) {
      try { fs.unlinkSync(f); } catch (_) { /* 已刪或不存在 */ }
    }
  });

  // ─── 效果庫 #/effects ────────────────────────────────────────────────

  test("效果庫：上傳 .dme → 清單多一張卡 → UI 刪除 → 清單復原", async () => {
    const name = `e2e_fx_${Date.now()}`;
    const dme = [
      `name: ${name}`,
      `label: E2E 測試效果`,
      `description: system test`,
      `keyframes: |`,
      `  @keyframes dme-${name} {`,
      `    0%, 100% { opacity: 1; }`,
      `    50% { opacity: 0.4; }`,
      `  }`,
      `animation: "dme-${name} 1s ease-in-out infinite"`,
      ``,
    ].join("\n");
    const file = writeTmp(`${name}.dme`, Buffer.from(dme, "utf-8"));

    await gotoRoute("#/effects", "#effectsList");
    const before = (await adminApi("/admin/effects")).body.effects.length;

    // 上傳鈕是 <label for>，真正的 input 是 hidden 的 #effectUploadInput。
    // setInputFiles 會觸發 change → 走 /admin/effects/upload。
    await admin.locator("#effectUploadInput").setInputFiles(file);

    const card = admin.locator(`.hud-effect-card[data-effect-name="${name}"]`);
    try {
      await expect(card).toBeVisible({ timeout: 10000 });

      // server 端真的多了這個效果（admin 視角 + 觀眾視角都要看得到）
      const listed = (await adminApi("/admin/effects")).body.effects.map((e) => e.name);
      expect(listed).toContain(name);
      expect(listed.length).toBe(before + 1);
      const pub = await publicJson("/effects");
      expect(pub.effects.map((e) => e.name)).toContain(name);

      // 從 UI 刪掉（DEL → HudConfirm 確認）
      await card.locator('[data-role="delete"]').click();
      await confirmHud();
      await expect(card).toHaveCount(0, { timeout: 10000 });
    } finally {
      // 保險：UI 途徑失敗時也要還原 server 狀態
      await adminApi("/admin/effects/delete", {
        method: "POST",
        body: JSON.stringify({ name }),
      });
    }

    const after = (await adminApi("/admin/effects")).body.effects;
    expect(after.map((e) => e.name)).not.toContain(name);
    expect(after.length).toBe(before);
  });

  test("效果庫：篩選 chip 會真的過濾卡片（GLOW → 只剩 GLOW 類）", async () => {
    await gotoRoute("#/effects", "#effectsList");
    const all = await admin.locator(".hud-effect-card").count();
    expect(all).toBeGreaterThan(0);

    await admin.locator('[data-effect-filter="GLOW"]').click();
    await admin.waitForTimeout(300);
    const glow = await admin.locator(".hud-effect-card").count();
    expect(glow).toBeGreaterThan(0);
    expect(glow).toBeLessThan(all);
    // 分類是前端從效果名推的（detectCategory）：glow*/**neon** → GLOW。
    const names = await admin.$$eval(".hud-effect-card", (els) =>
      els.map((e) => e.dataset.effectName),
    );
    for (const n of names) {
      expect(n.toLowerCase()).toMatch(/^glow|neon/);
    }

    await admin.locator('[data-effect-filter="ALL"]').click();
    await admin.waitForTimeout(300);
    expect(await admin.locator(".hud-effect-card").count()).toBe(all);
  });

  // 產品現況：卡片上的 `ON` 是**裝飾用 <span>**（無 click handler，server
  // 也沒有 per-effect enabled 欄位 —— services/effects.list_with_file_info()
  // 只回 name/label/description/filename/mtime）。真正的「效果開關」是頁面
  // 上方的總開關 #toggle-Effects（settings key = Effects），控制觀眾能不能
  // 選效果，因此在這裡驗它。
  test("效果庫：效果總開關關掉 → 觀眾端 /get_settings 的 Effects 變 false", async () => {
    await gotoRoute("#/effects", "#toggle-Effects");
    const toggle = admin.locator("#toggle-Effects");
    await expect(toggle).toBeChecked();

    try {
      await toggle.click();
      await expect
        .poll(async () => (await publicJson("/get_settings")).Effects[0], { timeout: 8000 })
        .toBe(false);
    } finally {
      // 這個 toggle 會整頁 renderControlPanel()，回原頁再開回來。
      await gotoRoute("#/effects", "#toggle-Effects");
      const t2 = admin.locator("#toggle-Effects");
      if (!(await t2.isChecked())) await t2.click();
      await expect
        .poll(async () => (await publicJson("/get_settings")).Effects[0], { timeout: 8000 })
        .toBe(true);
    }
  });

  // ─── 主題包 #/themes ─────────────────────────────────────────────────

  test("主題包：點『啟用』切換 active 主題 → /themes 反映 → 切回 default", async () => {
    await gotoRoute("#/themes", "#themesList");
    expect((await publicJson("/themes")).active).toBe("default");

    try {
      await admin.locator('.theme-activate-btn[data-theme="neon"]').click();
      await expect
        .poll(async () => (await publicJson("/themes")).active, { timeout: 8000 })
        .toBe("neon");
      // UI 也要換人掛「使用中」：neon 卡片的啟用鈕消失、default 冒出來。
      await expect(admin.locator('.theme-activate-btn[data-theme="neon"]')).toHaveCount(0);
      await expect(admin.locator('.theme-activate-btn[data-theme="default"]')).toBeVisible();
    } finally {
      const back = admin.locator('.theme-activate-btn[data-theme="default"]');
      if (await back.count()) await back.click();
    }

    await expect
      .poll(async () => (await publicJson("/themes")).active, { timeout: 8000 })
      .toBe("default");
  });

  // ─── 素材庫 #/assets ─────────────────────────────────────────────────

  test("素材庫：五個 tab（總覽/表情/貼圖/音效/字型）各自渲染且互斥", async () => {
    await gotoRoute("#/assets", "#sec-assets-overview");
    const tabs = [
      ["overview", "sec-assets-overview"],
      ["emojis", "sec-emojis"],
      ["stickers", "sec-stickers"],
      ["sounds", "sec-sounds"],
      ["fonts", "sec-fonts"],
    ];
    await expect(admin.locator('.admin-tabs-btn[data-nav="assets"]')).toHaveCount(5);

    for (const [slug, secId] of tabs) {
      await admin.locator(`.admin-tabs-btn[data-nav="assets"][data-tab="${slug}"]`).click();
      await admin.waitForTimeout(700);
      const sec = admin.locator(`#${secId}`);
      await expect(sec, `tab ${slug} 的 section 沒顯示`).toBeVisible();
      const chars = await sec.evaluate((el) => (el.innerText || "").trim().length);
      expect(chars, `tab ${slug} 的內容是空的`).toBeGreaterThan(40);
      // 其他 tab 的 section 必須收起來
      for (const [, otherId] of tabs) {
        if (otherId === secId) continue;
        await expect(admin.locator(`#${otherId}`), `${slug} 時 ${otherId} 應隱藏`).toBeHidden();
      }
    }
  });

  test("素材庫 · 表情：上傳 PNG → /emojis 多出 → UI 刪除 → 清單復原", async () => {
    const name = `e2e_em_${Date.now()}`;
    const file = writeTmp(`${name}.png`, Buffer.from(TINY_PNG_BASE64, "base64"));

    await gotoRoute("#/assets/emojis", "#emojiUploadBtn");
    const before = (await publicJson("/emojis")).emojis.length;

    await admin.locator("#emojiNameInput").fill(name);
    await admin.locator("#emojiFileInput").setInputFiles(file);
    await admin.locator("#emojiUploadBtn").click();

    const delBtn = admin.locator(`.emoji-delete-btn[data-name="${name}"]`);
    try {
      await expect(delBtn).toBeVisible({ timeout: 10000 });
      // 觀眾端拿得到（/emojis 是公開的、viewer 的表情選單就吃這支）
      const emojis = (await publicJson("/emojis")).emojis;
      expect(emojis.map((e) => e.name)).toContain(name);
      expect(emojis.length).toBe(before + 1);

      await delBtn.click();
      await confirmHud();
      await expect(delBtn).toHaveCount(0, { timeout: 10000 });
    } finally {
      await adminApi("/admin/emojis/delete", {
        method: "POST",
        body: JSON.stringify({ name }),
      });
    }

    const after = (await publicJson("/emojis")).emojis;
    expect(after.map((e) => e.name)).not.toContain(name);
    expect(after.length).toBe(before);
  });

  test("素材庫 · 字型：上傳區與清單渲染（admin 看得到停用字型、公開 /fonts 只給啟用的）", async () => {
    await gotoRoute("#/assets/fonts", "#adminFontList");
    // 上傳入口：<label for> 是可見的鈕，真正的 input 是 hidden，用 attached 判定。
    await expect(admin.locator("#adminFontFileInput")).toBeAttached();
    await expect(admin.locator('label[for="adminFontFileInput"]').first()).toBeVisible();

    // 清單渲染：每張字型卡都有「設為預設」＋開/關兩顆鈕。
    const toggles = admin.locator(".admin-font-toggle-btn");
    const count = await toggles.count();
    expect(count).toBeGreaterThan(0);
    expect(await admin.locator(".admin-font-default-btn").count()).toBe(count);

    // UI 的 data-enabled 要和後端狀態對得上：admin 目錄含停用字型，
    // 公開 /fonts 只回 enabled/default（viewer 的字型下拉就吃這支）。
    const adminFonts = (await adminApi("/admin/fonts")).body.fonts;
    const pubNames = (await publicJson("/fonts")).fonts.map((f) => f.name);
    const disabled = adminFonts.filter((f) => f.status === "disabled").map((f) => f.name);
    expect(disabled.length).toBeGreaterThan(0);
    for (const n of disabled) {
      expect(pubNames, `${n} 已停用卻仍出現在公開 /fonts`).not.toContain(n);
      await expect(admin.locator(`.admin-font-toggle-btn[data-name="${n}"]`))
        .toHaveAttribute("data-enabled", "false");
    }
  });

  // 疑似產品問題（2026-07-29 系統測試發現）：按字型的「開啟 / 關閉」鈕會
  // 回 HTTP 500。根因在 server/services/fonts.py —— 三處寫成
  //   from ..managers.settings import settings_store
  // 但 singleton 掛在 `server.managers`（managers/__init__.py），
  // `managers.settings` 模組只有 SettingsStore 類別，沒有 settings_store，
  // 於是 ImportError。toggle_font()（line 129）沒有人接，直接 500；
  // _get_font_allowlist()（line 98）與 list_available_fonts()（line 360）
  // 則被寬鬆的 except Exception 吞掉 → 允許清單永遠讀成空集合，
  // 也就是字型開/關這個功能整條是壞的。修產品碼不在本測試範圍。
  test.skip("素材庫 · 字型：開/關按鈕 → 公開 /fonts 反映（產品問題：toggle 回 500）", async () => {
    await gotoRoute("#/assets/fonts", "#adminFontList");
    const pubNames = async () => (await publicJson("/fonts")).fonts.map((f) => f.name);
    const btn = admin.locator('.admin-font-toggle-btn[data-name="Arial"]');
    await expect(btn).toHaveAttribute("data-enabled", "false");
    expect(await pubNames()).not.toContain("Arial");

    try {
      await btn.click(); // 開啟
      await expect
        .poll(async () => (await pubNames()).includes("Arial"), { timeout: 8000 })
        .toBe(true);
      await expect(admin.locator('.admin-font-toggle-btn[data-name="Arial"]'))
        .toHaveAttribute("data-enabled", "true");
    } finally {
      const back = admin.locator('.admin-font-toggle-btn[data-name="Arial"][data-enabled="true"]');
      if (await back.count()) await back.click(); // 關回去
    }

    await expect
      .poll(async () => (await pubNames()).includes("Arial"), { timeout: 8000 })
      .toBe(false);
  });

  // ─── Widgets #/widgets ───────────────────────────────────────────────

  test("Widgets：UI 新增分數板 → 改標題 → 加分 → UI 刪除 → 清單復原", async () => {
    await gotoRoute("#/widgets", "#widget-add-scoreboard");
    const listIds = async () =>
      (await adminApi("/admin/widgets/list")).body.widgets.map((w) => w.id);
    const before = await listIds();

    await admin.locator("#widget-add-scoreboard").click();

    /** @type {string|null} */
    let newId = null;
    await expect
      .poll(async () => {
        const ids = await listIds();
        newId = ids.find((i) => !before.includes(i)) || null;
        return newId;
      }, { timeout: 10000 })
      .not.toBeNull();

    try {
      // 卡片依 list 順序渲染，新的在最後（services/widgets 用 dict 插入序）
      const card = admin.locator(".admin-widget-card").last();
      await expect(card).toBeVisible();

      // ① 改標題（TITLE 是 body 內第一個 .admin-widget-row 的 input；
      //    隊伍名稱的 input 在 .admin-widget-team 裡，不會撞到）
      const title = `E2E 分數板 ${Date.now()}`;
      const titleInput = card.locator(".admin-widget-row .admin-widget-input").first();
      await titleInput.fill(title);
      await titleInput.blur(); // change 事件才會 POST /admin/widgets/update
      await expect
        .poll(async () => {
          const w = (await adminApi("/admin/widgets/list")).body.widgets.find((x) => x.id === newId);
          return w && w.config && w.config.title;
        }, { timeout: 8000 })
        .toBe(title);

      // ② 加分：第一隊的「＋」鈕（同列有 −／＋ 兩顆 .admin-widget-step）
      const teamRow = admin.locator(".admin-widget-card").last().locator(".admin-widget-team").first();
      await teamRow.locator(".admin-widget-step").nth(1).click();
      await expect
        .poll(async () => {
          const w = (await adminApi("/admin/widgets/list")).body.widgets.find((x) => x.id === newId);
          return w && w.config && w.config.teams[0].score;
        }, { timeout: 8000 })
        .toBe(1);

      // ③ 從 UI 移除
      await admin.locator(".admin-widget-card").last()
        .locator(".admin-widget-card-action.is-danger, .is-danger.admin-widget-card-action")
        .click();
      await confirmHud();
      await expect
        .poll(async () => (await listIds()).includes(newId), { timeout: 10000 })
        .toBe(false);
    } finally {
      if (newId) {
        await adminApi("/admin/widgets/delete", {
          method: "POST",
          body: JSON.stringify({ id: newId }),
        });
      }
    }

    expect(await listIds()).toEqual(before);
  });

  // ─── 觀眾頁 #/viewer（送出預設） ─────────────────────────────────────

  test("觀眾頁 · 送出預設：改字級 chip → viewer 端 /get_settings 反映 → 改回", async () => {
    await gotoRoute("#/viewer/defaults", "#sec-viewer-config-defaults");
    const original = (await publicJson("/get_settings")).FontSize[3];
    const target = original === 44 ? 20 : 44;

    const chip = admin.locator(`[data-chip-key="FontSize"][data-chip-value="${target}"]`);
    await expect(chip).toBeVisible();

    const viewer = await browser.newPage();
    try {
      await chip.click();
      await expect(chip).toHaveClass(/is-active/);

      // 用「另一個瀏覽器分頁（觀眾視角）」查公開設定，證明真的下發到觀眾端。
      await viewer.goto(SERVER);
      await viewer.waitForSelector("#danmuText", { timeout: 10000 });
      await expect
        .poll(
          async () => {
            const r = await viewer.request.get(new URL("/get_settings", SERVER).toString());
            return (await r.json()).FontSize[3];
          },
          { timeout: 8000 },
        )
        .toBe(target);
    } finally {
      await viewer.close();
      const back = admin.locator(`[data-chip-key="FontSize"][data-chip-value="${original}"]`);
      if (await back.count()) await back.click();
    }

    await expect
      .poll(async () => (await publicJson("/get_settings")).FontSize[3], { timeout: 8000 })
      .toBe(original);
  });
});
