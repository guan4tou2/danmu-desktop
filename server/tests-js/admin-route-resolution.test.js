const loadScript = require("./helpers/load-script");

// 2026-11-14 側欄收斂：安全／備份與還原／擴充併進「系統」。每一條舊網址都要
// 落在系統頁對應的分頁（擴充底下的四塊還要指出要展開哪一個收合區塊）。
// AdminRouter.resolve 跟 hashchange handler 走同一條解析路徑。
describe("admin hash routes", () => {
  beforeAll(() => {
    window.fetch = jest.fn(() => new Promise(() => {}));
    window.AdminUtils = { loadDetailsState: () => ({}), saveDetailsState() {}, escapeHtml: String };
    window.DANMU_CONFIG = { session: { logged_in: false } };
    jest.spyOn(console, "info").mockImplementation(() => {});
    loadScript("admin-tabs.js");
    loadScript("admin.js");
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });
  beforeEach(() => sessionStorage.clear());

  const resolve = (hash) => {
    const r = window.AdminRouter.resolve(hash);
    return [r.route, r.tab, r.foldSection];
  };

  test.each([
    // 這一批併進系統頁的三個側欄列
    ["#/security", "system", "security", null],
    ["#/backup", "system", "backup", null],
    ["#/integrations", "system", "integrations", null],
    ["#/extensions", "system", "integrations", null],
    ["#/firetoken", "system", "firetoken", null],
    // 擴充原本的四個分段 → 擴充分頁裡的收合區塊
    ["#/integrations/webhooks", "system", "integrations", "sec-webhooks"],
    ["#/integrations/plugins", "system", "integrations", "sec-plugins"],
    ["#/integrations/api-tokens", "system", "integrations", "sec-api-tokens-overview"],
    ["#/integrations/scheduler", "system", "integrations", "sec-scheduler"],
    ["#/webhooks", "system", "integrations", "sec-webhooks"],
    ["#/plugins", "system", "integrations", "sec-plugins"],
    ["#/api-tokens", "system", "integrations", "sec-api-tokens-overview"],
    ["#/scheduler", "system", "integrations", "sec-scheduler"],
    ["#/automation", "system", "integrations", "sec-scheduler"],
    ["#/automation/webhooks", "system", "integrations", "sec-webhooks"],
    // 新的正式網址
    ["#/system", "system", "overview", null],
    ["#/system/overview", "system", "overview", null],
    ["#/system/security", "system", "security", null],
    ["#/system/backup", "system", "backup", null],
    ["#/system/integrations", "system", "integrations", null],
    ["#/system/webhooks", "system", "integrations", "sec-webhooks"],
    ["#/system/plugins", "system", "integrations", "sec-plugins"],
    ["#/system/api-tokens", "system", "integrations", "sec-api-tokens-overview"],
    ["#/system/scheduler", "system", "integrations", "sec-scheduler"],
    ["#/system/firetoken", "system", "firetoken", null],
    ["#/system/wcag", "system", "wcag", null],
    ["#/system/about", "system", "about", null],
    // 舊系統手風琴的葉節點（SYSTEM_LEGACY_LEAF_HOMES）
    ["#/system/system", "system", "overview", null],
    ["#/mobile", "system", "overview", null],
    ["#/system/sessions", "history", "sessions", null],
    ["#/system/audit", "history", "audit", null],
    ["#/system/audience", "history", "audience", null],
    ["#/system/search", "history", "search", null],
    // 其他頁的轉址表沒有被這批動到
    ["#/dashboard", "live", null, null],
    ["#/messages", "live", null, null],
    ["#/ratelimit", "moderation", "ratelimit", null],
    ["#/fingerprints", "moderation", "bans", null],
    ["#/modqueue", "moderation", "queue", null],
    ["#/audit", "history", "audit", null],
    ["#/fonts", "assets", "fonts", null],
    ["#/broadcast", "overlay", null, null],
    ["#/viewer-config", "viewer", null, null],
    ["#/display", "viewer", null, null],
    ["#/appearance", "themes", null, null],
  ])("%s → %s / %s / %s", (hash, route, tab, fold) => {
    expect(resolve(hash)).toEqual([route, tab, fold]);
  });

  test("the remembered tab never overrides an explicit fold link", () => {
    window.AdminRouter.tabMemory.set("system", "about");
    expect(resolve("#/webhooks")).toEqual(["system", "integrations", "sec-webhooks"]);
    expect(resolve("#/system")).toEqual(["system", "about", null]);
  });
});

describe("AdminTabs folds", () => {
  beforeAll(() => loadScript("admin-tabs.js"));

  test("fold slugs map to the extensions tab and their section", () => {
    expect(window.AdminTabs.foldFor("system", "webhooks")).toEqual({ tab: "integrations", section: "sec-webhooks" });
    expect(window.AdminTabs.foldFor("system", "integrations")).toBeNull();
    expect(window.AdminTabs.foldFor("moderation", "webhooks")).toBeNull();
    expect(window.AdminTabs.getConfig("integrations")).toBeNull();
  });

  test("system tab order: overview, security, backup, extensions, then the existing three", () => {
    expect(window.AdminTabs.getConfig("system").tabs.map((t) => t.slug))
      .toEqual(["overview", "security", "backup", "integrations", "firetoken", "wcag", "about"]);
  });

  test("the extensions tab puts its sections in config order within each container", () => {
    document.body.innerHTML = `
      <div id="shell">
        <div id="settings-grid">
          <details id="sec-api-tokens-overview"></details>
          <div id="sec-other"></div>
          <details id="sec-plugins"></details>
          <div id="sec-extensions-overview"></div>
        </div>
        <div id="advanced-grid"><details id="sec-scheduler"></details><details id="sec-webhooks"></details></div>
      </div>`;
    const shell = document.getElementById("shell");
    window.AdminTabs.applyTabSectionVisibility("system", "integrations", shell);
    const ids = (sel) => [...shell.querySelectorAll(sel + " > [id]")].map((e) => e.id);
    expect(ids("#settings-grid")).toEqual(["sec-other", "sec-extensions-overview", "sec-plugins", "sec-api-tokens-overview"]);
    expect(ids("#advanced-grid")).toEqual(["sec-webhooks", "sec-scheduler"]);
    // 已經排好就不再搬（router 的 MutationObserver 才不會一直重跑）
    const observer = new MutationObserver(() => {});
    observer.observe(shell, { childList: true, subtree: true });
    window.AdminTabs.applyTabSectionVisibility("system", "integrations", shell);
    expect(observer.takeRecords()).toEqual([]);
    // 其他分頁不碰順序，只藏起來
    window.AdminTabs.applyTabSectionVisibility("system", "security", shell);
    expect(document.getElementById("sec-plugins").style.display).toBe("none");
  });
});
