const fs = require("node:fs");
const path = require("node:path");
const loadScript = require("./helpers/load-script");
const zh = require("../static/locales/zh/translation.json");
const en = require("../static/locales/en/translation.json");

// 整頁載入「系統 › 擴充」的區塊網址（#/system/webhooks）時，那一塊要展開，
// 網址不能被改回 #/system/integrations。這次的 bug 在 applyRoute 那一層：
// 開機時 init() 會呼叫 ServerI18n.updateUI()，updateUI 會呼叫
// window._adminNavigateTo()；它原本只帶分頁（applyRoute(currentRoute,
// _activeTab)），把區塊降級成「擴充」分頁、改寫網址、清掉還沒執行的展開——
// 而區塊模組是在那之後才注入的。所以這裡跑真的 admin.js 開機流程，不只測
// AdminRouter.resolve。
//
// ServerI18n 是替身，但 updateUI 照真的 i18n.js 做兩件事：依 data-i18n
// 換字、呼叫 _adminNavigateTo（下面那條測試釘住真的 i18n.js 確實這麼做）。

// 晚到的區塊走 MutationObserver → requestAnimationFrame（jsdom 約 16ms）
const settle = () => new Promise((r) => setTimeout(r, 40));
const scrolled = [];

function boot(hash) {
  window.history.replaceState(null, "", "/admin/" + hash);
  document.body.innerHTML = '<div id="app-container"></div>';
  let dict = zh;
  window.ServerI18n = {
    currentLang: "zh",
    t: (key) => dict[key] || key,
    setLang(lang) { dict = lang === "en" ? en : zh; this.currentLang = lang; this.updateUI(); },
    updateUI() {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const text = dict[el.getAttribute("data-i18n")];
        if (text) el.textContent = text;
      });
      if (window._adminNavigateTo) window._adminNavigateTo();
    },
  };
  loadScript("admin-tabs.js");
  loadScript("admin.js");
  document.dispatchEvent(new Event("DOMContentLoaded"));
}

// 區塊模組晚到才注入：照 admin-webhooks.js 的模板骨架塞一塊進 settings-grid。
function injectWebhooksFold() {
  document.getElementById("settings-grid").insertAdjacentHTML("beforeend",
    `<details id="sec-webhooks" class="admin-dsp2-fold lg:col-span-2">
       <summary class="admin-ui-page-title" data-i18n="tabExtWebhooks">${zh.tabExtWebhooks}</summary>
       <div>body</div></details>`);
}

describe("fold deep links survive a full page load", () => {
  beforeAll(() => {
    window.fetch = jest.fn((url) => url === "/get_settings"
      ? Promise.resolve({ ok: true, json: async () => ({}) })
      : new Promise(() => {}));
    window.AdminUtils = { loadDetailsState: () => ({}), saveDetailsState() {}, escapeHtml: String };
    window.DANMU_CONFIG = { session: { logged_in: true } };
    window.showToast = jest.fn();
    jest.spyOn(console, "info").mockImplementation(() => {});
    // jsdom 沒有版面：藏在 display:none 底下的元素沒有 rect，其餘當成有畫出來。
    Element.prototype.getClientRects = function () {
      for (let n = this; n; n = n.parentElement) if (n.style && n.style.display === "none") return [];
      return [{}];
    };
    Element.prototype.scrollIntoView = function () { scrolled.push(this.id); };
  });

  test("the real i18n runtime re-applies the route from updateUI", () => {
    const src = fs.readFileSync(path.resolve(__dirname, "../static/js/i18n.js"), "utf8");
    const body = src.slice(src.indexOf("updateUI: function"), src.indexOf("bindLanguageSelector: function"));
    expect(body).toContain("window._adminNavigateTo()");
  });

  test("a fold injected after boot (and after updateUI) still opens, hash untouched", async () => {
    scrolled.length = 0;
    boot("#/system/webhooks");
    await settle(); await settle();
    const shell = document.querySelector(".admin-dash-grid");
    expect(shell.dataset.activeRoute).toBe("system");
    expect(shell.dataset.activeLeaf).toBe("integrations");
    // init() 已經跑完 render() 與 updateUI()——以前到這裡就變成 #/system/integrations
    expect(window.location.hash).toBe("#/system/webhooks");

    injectWebhooksFold();
    await settle(); await settle();
    const fold = document.getElementById("sec-webhooks");
    expect(fold.open).toBe(true);
    expect(scrolled).toEqual(["sec-webhooks"]);
    expect(window.location.hash).toBe("#/system/webhooks");
    expect(document.querySelector(".admin-dash-nav-row.is-active").dataset.route).toBe("system");
  });

  test("_adminNavigateTo keeps the fold: same hash, no second scroll, still open", async () => {
    window._adminNavigateTo();
    await settle();
    expect(window.location.hash).toBe("#/system/webhooks");
    expect(document.querySelector(".admin-dash-grid").dataset.activeLeaf).toBe("integrations");
    expect(document.getElementById("sec-webhooks").open).toBe(true);
    expect(scrolled).toEqual(["sec-webhooks"]);
  });

  test("switching language keeps the fold and relabels its title", async () => {
    window.ServerI18n.setLang("en");
    await settle();
    const fold = document.getElementById("sec-webhooks");
    expect(window.location.hash).toBe("#/system/webhooks");
    expect(fold.open).toBe(true);
    expect(fold.querySelector("summary").textContent).toBe(en.tabExtWebhooks);
    window.ServerI18n.setLang("zh");
  });

  test("navigating to another tab drops the fold from the route", async () => {
    document.querySelector('.admin-tabs-btn[data-tab="security"]').click();
    await settle();
    expect(window.location.hash).toBe("#/system/security");
    window._adminNavigateTo();
    expect(window.location.hash).toBe("#/system/security");
  });

  test("an old block URL loaded directly also opens once the block arrives", async () => {
    scrolled.length = 0;
    sessionStorage.clear();
    boot("#/integrations/webhooks");
    await settle(); await settle();
    expect(window.location.hash).toBe("#/system/webhooks");
    injectWebhooksFold();
    await settle(); await settle();
    expect(document.getElementById("sec-webhooks").open).toBe(true);
    expect(scrolled).toEqual(["sec-webhooks"]);
  });

  test("the extensions tab shows catalog, Webhook, plugins, API keys, scheduler — in one container", async () => {
    boot("#/system/integrations");
    await settle();
    const grid = document.getElementById("settings-grid");
    // 故意倒著注入（真實環境裡注入順序取決於各模組何時醒來）
    for (const id of ["sec-scheduler", "sec-api-tokens-overview", "sec-plugins", "sec-webhooks", "sec-extensions-overview"]) {
      grid.insertAdjacentHTML("beforeend", `<details id="${id}"><summary>x</summary></details>`);
    }
    await settle(); await settle();
    const ids = [...grid.children].map((el) => el.id)
      .filter((id) => ["sec-extensions-overview", "sec-webhooks", "sec-plugins", "sec-api-tokens-overview", "sec-scheduler"].includes(id));
    expect(ids).toEqual(["sec-extensions-overview", "sec-webhooks", "sec-plugins", "sec-api-tokens-overview", "sec-scheduler"]);
    // 舊的 sec-advanced 容器、把插件搬去 assets-grid 的版面群組都不在了
    expect(document.getElementById("sec-advanced")).toBeNull();
    expect(document.getElementById("sec-plugins").parentElement.id).toBe("settings-grid");
  });
});
