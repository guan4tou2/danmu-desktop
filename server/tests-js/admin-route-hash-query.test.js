const loadScript = require("./helpers/load-script");
const zh = require("../static/locales/zh/translation.json");

// 路由整理網址（applyRoute 的 wantedHash / history.replaceState）時要把 hash
// 的查詢參數原樣帶回去。紀錄頁點場次會導到 #/session-detail?id=<編號>，而
// admin-session-detail.js 是從 window.location.hash 讀 ?id=——以前整理網址會
// 把 ?id= 丟掉，詳情頁永遠拿不到場次。跑真的 admin.js＋admin-session-detail.js。
jest.setTimeout(20000);

const settle = () => new Promise((r) => setTimeout(r, 40));
let fetched = [];

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
  loadScript("admin-session-detail.js");
  document.dispatchEvent(new Event("DOMContentLoaded"));
}

// 詳情模組拿到的場次編號＝它抓的 /admin/sessions/<id>。
const detailIds = () => fetched
  .filter((u) => /^\/admin\/sessions\/[^/?]+$/.test(u))
  .map((u) => decodeURIComponent(u.split("/").pop()));

beforeAll(() => {
  window.fetch = jest.fn((url) => {
    fetched.push(String(url));
    if (url === "/get_settings") return Promise.resolve({ ok: true, json: async () => ({}) });
    return new Promise(() => {});
  });
  window.AdminUtils = { loadDetailsState: () => ({}), saveDetailsState() {}, escapeHtml: String };
  window.DANMU_CONFIG = { session: { logged_in: true } };
  window.showToast = jest.fn();
  window.AdminEmpty = { renderCustom: () => document.createElement("div") };
  window.csrfFetch = window.fetch;
  jest.spyOn(console, "info").mockImplementation(() => {});
  Element.prototype.getClientRects = function () {
    for (let n = this; n; n = n.parentElement) if (n.style && n.style.display === "none") return [];
    return [{}];
  };
  Element.prototype.scrollIntoView = function () {};
});

beforeEach(() => {
  fetched = [];
  sessionStorage.clear();
});

test("full page load of #/session-detail?id=abc keeps the query and the detail module reads it", async () => {
  boot("#/session-detail?id=abc");
  await settle(); await settle();
  expect(document.querySelector(".admin-dash-grid").dataset.activeRoute).toBe("session-detail");
  expect(detailIds()).toContain("abc");
  expect(detailIds().every((id) => id === "abc")).toBe(true);
  expect(window.location.hash).toBe("#/session-detail?id=abc");
  expect(document.querySelector("[data-sd-error-msg]").textContent)
    .not.toBe(zh.sessionDetailErrNoSessionSelected);
});

test("in-page navigation to #/session-detail?id=abc keeps the query and the detail module reads it", async () => {
  boot("#/history/sessions");
  await settle(); await settle();
  fetched = [];
  window.location.hash = "#/session-detail?id=abc";
  await settle(); await settle();
  expect(document.querySelector(".admin-dash-grid").dataset.activeRoute).toBe("session-detail");
  expect(detailIds()).toContain("abc");
  expect(detailIds().every((id) => id === "abc")).toBe(true);
  expect(window.location.hash).toBe("#/session-detail?id=abc");
  expect(document.querySelector("[data-sd-error-msg]").textContent)
    .not.toBe(zh.sessionDetailErrNoSessionSelected);
});

test("an ordinary route keeps its query while the path is normalized", async () => {
  boot("#/display?x=1&y=two");
  await settle(); await settle();
  expect(document.querySelector(".admin-dash-grid").dataset.activeRoute).toBe("viewer");
  expect(window.location.hash).toBe("#/viewer/defaults?x=1&y=two");
});

test("a tabbed route keeps its query", async () => {
  boot("#/history/sessions?page=2");
  await settle(); await settle();
  expect(window.location.hash).toBe("#/history/sessions?page=2");
});

test("section anchors added for the style page are unchanged", async () => {
  boot("#/themes");
  await settle(); await settle();
  expect(window.location.hash).toBe("#/viewer/themes");
  window.location.hash = "#/viewer/limits";
  await settle(); await settle();
  expect(window.location.hash).toBe("#/viewer/limits");
});

test("leaving a route by a sidebar click does not carry the old query along", async () => {
  boot("#/session-detail?id=abc");
  await settle(); await settle();
  document.querySelector('.admin-dash-nav-row[data-route="viewer"]').click();
  await settle();
  expect(window.location.hash.indexOf("?")).toBe(-1);
  expect(document.querySelector(".admin-dash-grid").dataset.activeRoute).toBe("viewer");
});
