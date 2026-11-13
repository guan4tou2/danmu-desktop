const loadScript = require("./helpers/load-script");

// Slido 卡上那一行狀態：等待／接收中／錯誤三種樣子，資料來自
// GET /admin/integrations/slido/status（擴充功能的心跳）。
describe("Slido card status line", () => {
  let statusBody;
  let pollTick;

  beforeEach(async () => {
    jest.useFakeTimers();
    document.body.innerHTML = '<div id="app-container"><div id="settings-grid"></div></div>';
    window.DANMU_CONFIG = { session: { logged_in: true } };
    window.ServerI18n = {
      t: (key, vars) => key + (vars ? JSON.stringify(vars) : ""),
    };
    window.AdminUtils = {
      escapeHtml: s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
      })[c]),
      pollWhileVisible: ({ tick }) => { pollTick = tick; tick(); return () => {}; },
    };
    statusBody = { report: null, age_sec: null, stale: true };
    global.fetch = jest.fn(async url => ({
      ok: true,
      json: async () => (String(url).includes("/slido/status") ? statusBody : { sources: [] }),
    }));
    loadScript("admin-extensions.js");
    document.dispatchEvent(new Event("DOMContentLoaded"));
    await jest.advanceTimersByTimeAsync(0);
  });

  afterEach(() => {
    jest.useRealTimers();
    delete window.AdminExtensions;
    delete window.DANMU_CONFIG;
  });

  const line = () => document.querySelector("[data-slido-status]");

  test("only the Slido card gets the line, and it starts in the waiting state", () => {
    expect(document.querySelectorAll("[data-slido-status]")).toHaveLength(1);
    expect(line().closest(".admin-ext-card").dataset.ext).toBe("slido");
    expect(line().textContent).toBe("extSlidoStatusNone");
    expect(line().getAttribute("role")).toBe("status");
  });

  test("view: fresh watching report shows counters, stale or missing shows waiting", () => {
    const view = window.AdminExtensions.slidoStatusView;
    const report = { state: "watching", error: "", sent: 3, blocked: 1 };
    expect(view({ report, stale: false })).toEqual({
      tone: "is-live",
      text: 'extSlidoStatusWatching{"sent":3,"blocked":1}',
    });
    expect(view({ report, stale: true }).text).toBe("extSlidoStatusNone");
    expect(view(null).text).toBe("extSlidoStatusNone");
  });

  test("view: known errors map to their own message, unknown ones never leak raw text", () => {
    const view = window.AdminExtensions.slidoStatusView;
    expect(view({ report: { state: "error", error: "no_overlay" }, stale: false }))
      .toEqual({ tone: "is-error", text: "extSlidoErr_no_overlay" });
    expect(view({ report: { state: "error", error: "<img onerror=x>" }, stale: false }))
      .toEqual({ tone: "is-error", text: "extSlidoErr_rejected" });
  });

  test("the line follows the server status on each poll", async () => {
    statusBody = { report: { state: "error", error: "rate_limited", sent: 0, blocked: 0 }, stale: false };
    pollTick();
    await jest.advanceTimersByTimeAsync(0);
    expect(line().textContent).toBe("extSlidoErr_rate_limited");
    expect(line().classList.contains("is-error")).toBe(true);

    statusBody = { report: { state: "watching", error: "", sent: 5, blocked: 0 }, stale: false };
    pollTick();
    await jest.advanceTimersByTimeAsync(0);
    expect(line().textContent).toBe('extSlidoStatusWatching{"sent":5,"blocked":0}');
    expect(line().classList.contains("is-live")).toBe(true);
    expect(line().classList.contains("is-error")).toBe(false);
  });
});
