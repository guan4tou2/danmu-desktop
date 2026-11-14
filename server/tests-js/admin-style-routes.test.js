const loadScript = require("./helpers/load-script");
const zh = require("../static/locales/zh/translation.json");

// 2026-11-14 彈幕樣式合一：顯示層的外觀、主題頁、觀眾頁併成 #/viewer 一頁。
// 舊網址落在這一頁，並展開、捲到對應的區塊（AdminTabs 的 PageAnchors）；
// 側欄亮的是「彈幕樣式」。跑真的 admin.js 開機流程（同 admin-router-folds）。
jest.setTimeout(20000);

const settle = () => new Promise((r) => setTimeout(r, 40));
const scrolled = [];

function boot(hash) {
  window.history.replaceState(null, "", "/admin/" + hash);
  document.body.innerHTML = '<div id="app-container"></div>';
  window.ServerI18n = {
    currentLang: "zh",
    t: (key) => zh[key] || key,
    updateUI() { if (window._adminNavigateTo) window._adminNavigateTo(); },
  };
  loadScript("admin-tabs.js");
  loadScript("admin.js");
  document.dispatchEvent(new Event("DOMContentLoaded"));
}

beforeAll(() => {
  window.fetch = jest.fn((url) => url === "/get_settings"
    ? Promise.resolve({ ok: true, json: async () => ({}) })
    : new Promise(() => {}));
  window.AdminUtils = { loadDetailsState: () => ({}), saveDetailsState() {}, escapeHtml: String };
  window.DANMU_CONFIG = { session: { logged_in: true } };
  window.showToast = jest.fn();
  jest.spyOn(console, "info").mockImplementation(() => {});
  Element.prototype.getClientRects = function () {
    for (let n = this; n; n = n.parentElement) if (n.style && n.style.display === "none") return [];
    return [{}];
  };
  Element.prototype.scrollIntoView = function () { scrolled.push(this.id); };
});

beforeEach(() => {
  scrolled.length = 0;
  sessionStorage.clear();
});

test.each([
  // [網址, 改寫後的網址, 晚到的區塊, 是不是 <details>]
  ["#/themes", "#/viewer/themes", "sec-themes", false],
  ["#/appearance", "#/viewer/themes", "sec-themes", false],
  ["#/display", "#/viewer/defaults", "sec-viewer-config-defaults", false],
  ["#/viewer/fields", "#/viewer/fields", "sec-viewer-config-defaults", false],
  ["#/viewer/page", "#/viewer/page", "sec-viewer-theme", true],
  ["#/viewer-config/limits", "#/viewer/limits", "sec-viewer-config-limits", true],
])("%s → %s, %s opened and scrolled to", async (hash, finalHash, id, isFold) => {
  boot(hash);
  await settle(); await settle();
  const tag = isFold ? "details" : "div";
  document.getElementById("settings-grid").insertAdjacentHTML("beforeend",
    `<${tag} id="${id}" class="lg:col-span-2">${isFold ? "<summary>x</summary>" : ""}<div>body</div></${tag}>`);
  await settle(); await settle();
  const shell = document.querySelector(".admin-dash-grid");
  expect(shell.dataset.activeRoute).toBe("viewer");
  expect(window.location.hash).toBe(finalHash);
  expect(scrolled).toEqual([id]);
  expect(document.getElementById(id).style.display).toBe("");
  if (isFold) expect(document.getElementById(id).open).toBe(true);
  expect(document.querySelector(".admin-dash-nav-row.is-active").dataset.route).toBe("viewer");
});

test("the sidebar has one style row and no themes row", async () => {
  boot("#/viewer");
  await settle();
  expect(document.querySelector('.admin-dash-nav-row[data-route="themes"]')).toBeNull();
  const row = document.querySelector('.admin-dash-nav-row[data-route="viewer"]');
  expect(row.textContent).toContain(zh.adminNavViewer);
  expect(document.querySelector("[data-route-title]").textContent).toBe(zh.adminRouteTitle_viewer);
});

test("the overlay page keeps its live controls and folds only the screen layout", async () => {
  boot("#/overlay");
  await settle();
  const grid = document.getElementById("settings-grid");
  grid.insertAdjacentHTML("beforeend",
    '<details id="sec-overlay-layout"><summary>x</summary></details><div id="sec-viewer-config-defaults"></div>');
  await settle(); await settle();
  expect(document.getElementById("sec-overlay-layout").style.display).toBe("");
  expect(document.getElementById("sec-overlay-layout").open).toBe(false);
  expect(document.getElementById("sec-viewer-config-defaults").style.display).toBe("none");
});
