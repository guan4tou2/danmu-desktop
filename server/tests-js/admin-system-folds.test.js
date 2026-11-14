const loadScript = require("./helpers/load-script");
const zh = require("../static/locales/zh/translation.json");

// 2026-11-14：「系統 › 擴充」底下給 IT 人員的四塊各自是預設收合的 <details>，
// summary 就是標題（沿用顯示層頁的 .admin-dsp2-fold）。內容原封不動——這裡
// 確認每個模組真的把自己的控制項包在自己的收合區塊裡，而不是 HTML 沒關好
// 漏到外面。
const FOLDS = [
  ["admin-plugins.js", "sec-plugins", "tabExtPlugins",
    ["#pluginsUploadBtn", "#pluginsReloadBtn", "#pluginsList", "[data-console-filter='ERROR']", "#pluginsConsoleBody"]],
  ["admin-webhooks.js", "sec-webhooks", "tabExtWebhooks",
    ["#wh-register-form", "#wh-url", "#wh-format", "#wh-secret", ".admin-wh-add-btn[data-wh-action='show-add']", "#wh-log-list", "[data-wh-detail]"]],
  ["admin-api-tokens.js", "sec-api-tokens-overview", "tabExtApiKeys",
    ["#adminAtSubmitBtn", "#adminAtFormError", "[data-at-table-wrap]", "input[name='adminAtExpiry']"]],
  ["admin-scheduler.js", "sec-scheduler", "tabExtScheduler",
    ["[data-sch-view='calendar']", "#schedulerJobsList", "[data-sch-meta]"]],
];

describe("system › extensions folds", () => {
  // 模組各自掛了 MutationObserver（插件模組只靠它注入）；測完全部斷開，
  // 免得 jsdom 拆環境時的 DOM 變動又叫醒它們。
  const observers = [];
  const RealObserver = window.MutationObserver;
  beforeAll(() => {
    window.MutationObserver = class extends RealObserver {
      constructor(cb) { super(cb); observers.push(this); }
    };
    document.body.innerHTML = `
      <div id="app-container"><div id="settings-grid"></div></div>`;
    window.ServerI18n = { t: (key) => zh[key] || key };
    window.DANMU_CONFIG = { session: { logged_in: true } };
    window.AdminUtils = {
      escapeHtml: String,
      loadDetailsState: () => ({}),
      saveDetailsState() {},
      pollWhileVisible: () => () => {},
      copyText() {},
    };
    window.fetch = jest.fn(() => new Promise(() => {}));
    window.csrfFetch = window.fetch;
    window.showToast = jest.fn();
    FOLDS.forEach(([file]) => loadScript(file));
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });
  afterAll(() => {
    observers.forEach((o) => o.disconnect());
    window.MutationObserver = RealObserver;
  });

  test("the Webhook block has one add button (the duplicate in its head is gone)", () => {
    expect(document.querySelectorAll("#sec-webhooks [data-wh-action='show-add']")).toHaveLength(1);
    expect(document.querySelector("#sec-webhooks .admin-ui-page-head [data-wh-action]")).toBeNull();
  });

  test.each(FOLDS)("%s renders a closed fold titled by its tab label", (_file, id, key, controls) => {
    const fold = document.getElementById(id);
    expect(fold.tagName).toBe("DETAILS");
    expect(fold.classList.contains("admin-dsp2-fold")).toBe(true);
    expect(fold.open).toBe(false);
    expect(fold.firstElementChild.tagName).toBe("SUMMARY");
    expect(fold.firstElementChild.textContent.trim()).toBe(zh[key]);
    // 切語言時 updateUI 靠 data-i18n 換字，不用重新載入
    expect(fold.firstElementChild.getAttribute("data-i18n")).toBe(key);
    // 四塊都住在同一個容器（settings-grid），畫面順序才由 TabConfig 一處決定
    expect(fold.parentElement.id).toBe("settings-grid");
    // 標題只有 summary 一個：頁首裡不再有第二個 h2
    expect(fold.querySelector(".admin-ui-page-head .admin-ui-page-title")).toBeNull();
    for (const sel of controls) {
      const el = document.querySelector("#" + id + " " + sel);
      expect([sel, !!el]).toEqual([sel, true]);
      expect(el.closest("summary")).toBeNull();
    }
    // 下一個兄弟節點不是自己漏出來的內容
    const next = fold.nextElementSibling;
    if (next) expect(next.id).toMatch(/^(sec-|admin-)/);
  });
});
