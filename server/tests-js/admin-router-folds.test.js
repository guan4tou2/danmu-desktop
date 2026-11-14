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

// 每條測試都載入並執行真的 admin.js（約 0.5–1 秒），再等好幾段固定的觀察窗；
// 最長的一條在忙碌的 CI 機器上會超過 jest 預設的 5 秒。逾時不是這些測試要
// 驗的東西——它們驗的是「觀察窗內同步了幾次」，機器慢只會讓次數更少。
jest.setTimeout(20000);

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

// 整個檔案共用的環境替身。每條測試都自己 boot()、自己注入區塊，不依賴前一條
// 留下的頁面狀態——用 `jest -t` 單獨跑任何一條都要能過。
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
  // jsdom 的 offsetParent 永遠是 null；_dedupSectionTitles 靠它判斷「這一屏
  // 真正可見的頁首」。照瀏覽器的語意：自己或祖先 display:none 時為 null。
  Object.defineProperty(HTMLElement.prototype, "offsetParent", {
    configurable: true,
    get() {
      for (let n = this; n; n = n.parentElement) if (n.style && n.style.display === "none") return null;
      return this.parentElement;
    },
  });
});

beforeEach(() => {
  scrolled.length = 0;
  sessionStorage.clear();
});

// 開機到 #/system/webhooks、等區塊晚到注入並展開——下面幾條測試的共同起點。
async function bootWithWebhooksFoldOpen() {
  boot("#/system/webhooks");
  await settle(); await settle();
  injectWebhooksFold();
  await settle(); await settle();
}

describe("fold deep links survive a full page load", () => {

  test("the real i18n runtime re-applies the route from updateUI", () => {
    const src = fs.readFileSync(path.resolve(__dirname, "../static/js/i18n.js"), "utf8");
    const body = src.slice(src.indexOf("updateUI: function"), src.indexOf("bindLanguageSelector: function"));
    expect(body).toContain("window._adminNavigateTo()");
  });

  test("a fold injected after boot (and after updateUI) still opens, hash untouched", async () => {
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
    await bootWithWebhooksFoldOpen();
    expect(scrolled).toEqual(["sec-webhooks"]);
    window._adminNavigateTo();
    await settle();
    expect(window.location.hash).toBe("#/system/webhooks");
    expect(document.querySelector(".admin-dash-grid").dataset.activeLeaf).toBe("integrations");
    expect(document.getElementById("sec-webhooks").open).toBe(true);
    expect(scrolled).toEqual(["sec-webhooks"]);
  });

  test("switching language keeps the fold and relabels its title", async () => {
    await bootWithWebhooksFoldOpen();
    window.ServerI18n.setLang("en");
    await settle();
    const fold = document.getElementById("sec-webhooks");
    expect(window.location.hash).toBe("#/system/webhooks");
    expect(fold.open).toBe(true);
    expect(fold.querySelector("summary").textContent).toBe(en.tabExtWebhooks);
  });

  test("navigating to another tab drops the fold from the route", async () => {
    await bootWithWebhooksFoldOpen();
    document.querySelector('.admin-tabs-btn[data-tab="security"]').click();
    await settle();
    expect(window.location.hash).toBe("#/system/security");
    window._adminNavigateTo();
    expect(window.location.hash).toBe("#/system/security");
  });

  test("an old block URL loaded directly also opens once the block arrives", async () => {
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

// 2026-11-14 第二輪：整頁載入落在「擴充」分頁時整頁空白（#settings-grid 被藏起來）。
// 開機那次容器同步發生在各模組注入 section 之前，容器被判空、藏起來是預期的；
// 之後每個晚到的 section 都要觸發一次重新同步（MutationObserver → 排程）。
// 排程原本只用 requestAnimationFrame，而被遮住或在背景的分頁裡 visibilityState
// 仍是 "visible"、rAF 卻停住——同步永遠不跑，容器一直藏著，直到下一次換路由。
// 這裡把 rAF 凍住重現那個環境。
describe("full page load in a tab where requestAnimationFrame never fires", () => {
  const realRaf = window.requestAnimationFrame;
  beforeAll(() => { window.requestAnimationFrame = () => 0; });
  afterAll(() => { window.requestAnimationFrame = realRaf; });
  // 排程的保底計時器是 100ms
  const settleLong = () => new Promise((r) => setTimeout(r, 250));

  test.each([
    // [hash, 晚到的 section, 它最後該在的容器, 要展開的區塊]
    ["#/system/integrations", "sec-extensions-overview", "settings-grid", null],
    ["#/system/scheduler", "sec-extensions-overview", "settings-grid", "sec-scheduler"],
    ["#/plugins", "sec-extensions-overview", "settings-grid", "sec-plugins"],
    ["#/system/security", "admin-security-v2-page", "settings-grid", null],
    ["#/system/backup", "admin-backup-v2-page", "settings-grid", null],
    ["#/system/overview", "sec-system-overview", "settings-grid", null],
    ["#/assets", "sec-emojis", "assets-grid", null],
    ["#/live", "sec-live-feed", "moderation-grid", null],
  ])("%s: the container shows once %s arrives", async (hash, sectionId, containerId, foldId) => {
    boot(hash);
    await settleLong();
    const grid = document.getElementById("settings-grid");
    grid.insertAdjacentHTML("beforeend", `<div id="${sectionId}">content</div>`);
    if (foldId) {
      grid.insertAdjacentHTML("beforeend",
        `<details id="${foldId}"><summary>t</summary><div>b</div></details>`);
    }
    await settleLong();
    const section = document.getElementById(sectionId);
    expect(section.parentElement.id).toBe(containerId);
    expect(getComputedStyle(document.getElementById(containerId)).display).not.toBe("none");
    expect(getComputedStyle(section).display).not.toBe("none");
    if (foldId) {
      expect(document.getElementById(foldId).open).toBe(true);
      expect(scrolled).toEqual([foldId]);
    }
  });
});

// 2026-11-14 第三輪：上面那個保底計時器沒有取消對應的 rAF，CI 的瀏覽器測試
// 整批逾時（頁面卡死）。條件是「每次同步都會引發新的 DOM 變動」——同步會發
// admin-route-applied，聽到就重繪的模組讓 MutationObserver 立刻再排一輪；
// 這時上一輪沒取消的回呼醒來，把新的一輪當成自己的來跑，於是每輪跑兩次、
// 各自再排一輪。rAF 正常的前景分頁才會發生，所以背景分頁的實機驗證看不到。
describe("a module that re-renders on every sync does not multiply the syncs", () => {
  test("syncs stay at one per animation frame", async () => {
    boot("#/system/overview");
    // 等開機那幾輪同步跑完再開始數。單獨跑這條時是冷啟動，開機收尾比較慢，
    // 只等一輪會把開機時就排好（在 rAF 被包起來之前）的同步也算進來。
    await settle(); await settle(); await settle();
    const grid = document.getElementById("settings-grid");
    let syncs = 0;
    let frames = 0;
    const realRaf = window.requestAnimationFrame;
    window.requestAnimationFrame = (cb) => realRaf((t) => { frames += 1; cb(t); });
    const rerender = () => {
      syncs += 1;
      grid.insertAdjacentHTML("beforeend", "<i></i>");
      grid.lastElementChild.remove();
    };
    document.addEventListener("admin-route-applied", rerender);
    try {
      grid.insertAdjacentHTML("beforeend", '<div id="sec-system-overview">content</div>');
      // 夠長，讓保底計時器（100ms）醒來好幾輪
      await new Promise((r) => setTimeout(r, 600));
    } finally {
      document.removeEventListener("admin-route-applied", rerender);
      window.requestAnimationFrame = realRaf;
    }
    expect(syncs).toBeGreaterThan(0);
    // 每一輪只會有一個回呼真的執行；rAF 先到，所以同步次數不會超過畫格數。
    expect(syncs).toBeLessThanOrEqual(frames + 1);
  });
});

// 2026-11-14 第四輪：頁首併進頂欄的那一步（_dedupSectionTitles）每次同步都重寫
// [data-route-note] 的內容、把借來的動作搬回原處再搬過來——即使什麼都沒變。
// 這些都是 MutationObserver 看得到的變動，於是同步 → 變動 → 再排一輪同步，
// 前景分頁每個畫格跑一次、永不停止。同步必須冪等：沒變就不動 DOM。
describe("merging a section header into the top bar settles", () => {
  const quietWindow = () => new Promise((r) => setTimeout(r, 400));

  function injectOverviewWithHeader(note) {
    document.getElementById("settings-grid").insertAdjacentHTML("beforeend",
      `<div id="sec-extensions-overview">
         <div class="admin-ui-page-head">
           <h2 class="admin-ui-page-title">${zh.adminNavIntegrations}</h2>
           <p class="admin-ui-page-note">${note}</p>
           <div class="admin-ui-page-actions"><button type="button" id="ext-primary">+</button></div>
         </div>
         <div>body</div>
       </div>`);
  }

  async function countRouteApplied(during) {
    let applied = 0;
    const count = () => { applied += 1; };
    document.addEventListener("admin-route-applied", count);
    try { await during(); } finally { document.removeEventListener("admin-route-applied", count); }
    return applied;
  }

  async function bootWithHeader() {
    boot("#/system/integrations");
    await settle();
    injectOverviewWithHeader('Connect <a href="#/system/webhooks">Webhook</a> &amp; more');
    await settle(); await settle(); await settle();
    const shell = document.querySelector(".admin-dash-grid");
    return {
      note: shell.querySelector("[data-route-note]"),
      actionSlot: shell.querySelector("[data-route-action]"),
      head: document.querySelector("#sec-extensions-overview .admin-ui-page-head"),
    };
  }

  test("once settled, no further syncs run while nothing changes", async () => {
    const { note, actionSlot } = await bootWithHeader();
    expect(note.hidden).toBe(false);
    expect(note.textContent).toBe("Connect Webhook & more");
    expect(actionSlot.querySelector("#ext-primary")).not.toBeNull();
    expect(await countRouteApplied(quietWindow)).toBe(0);
  });

  test("the borrowed action keeps its listener", async () => {
    const { actionSlot } = await bootWithHeader();
    let clicks = 0;
    document.getElementById("ext-primary").addEventListener("click", () => { clicks += 1; });
    await quietWindow();
    actionSlot.querySelector("#ext-primary").click();
    expect(clicks).toBe(1);
  });

  test("a real content change still updates the top bar, then settles again", async () => {
    const { note, head } = await bootWithHeader();
    head.querySelector(".admin-ui-page-note").textContent = "Updated note";
    await settle(); await settle();
    expect(note.textContent).toBe("Updated note");
    expect(await countRouteApplied(quietWindow)).toBe(0);
  });

  test("leaving the tab returns the action home; coming back borrows it again", async () => {
    const { note, actionSlot, head } = await bootWithHeader();
    document.querySelector('.admin-tabs-btn[data-tab="security"]').click();
    await settle(); await settle();
    expect(actionSlot.children.length).toBe(0);
    expect(head.querySelector("#ext-primary")).not.toBeNull();
    expect(note.hidden).toBe(true);
    expect(await countRouteApplied(quietWindow)).toBe(0);

    document.querySelector('.admin-tabs-btn[data-tab="integrations"]').click();
    await settle(); await settle();
    expect(actionSlot.querySelector("#ext-primary")).not.toBeNull();
    expect(note.textContent).toBe("Connect Webhook & more");
    expect(await countRouteApplied(quietWindow)).toBe(0);
  });

  test("switching language keeps the merged header and settles", async () => {
    const { note, actionSlot } = await bootWithHeader();
    window.ServerI18n.setLang("en");
    await settle(); await settle();
    expect(note.textContent).toBe("Connect Webhook & more");
    expect(actionSlot.querySelector("#ext-primary")).not.toBeNull();
    expect(await countRouteApplied(quietWindow)).toBe(0);
  });
});
