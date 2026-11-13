const loadScript = require("./helpers/load-script");

// Slido 卡：一行狀態（等待／接收中／錯誤，資料來自擴充功能心跳）、
// 以及版本字樣與下載連結（取自伺服器實際提供的 zip）。
describe("Slido card", () => {
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
    statusBody = { report: null, age_sec: null, stale: true, token_rejected: false, extension: null };
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
  const card = () => document.querySelector('.admin-ext-card[data-ext="slido"]');
  async function poll(body) {
    statusBody = Object.assign({ report: null, stale: true, token_rejected: false, extension: null }, body);
    pollTick();
    await jest.advanceTimersByTimeAsync(0);
  }

  test("only the Slido card gets the line, and it starts in the waiting state", () => {
    expect(document.querySelectorAll("[data-slido-status]")).toHaveLength(1);
    expect(line().closest(".admin-ext-card").dataset.ext).toBe("slido");
    expect(line().textContent).toBe("extSlidoStatusNone");
    expect(line().getAttribute("role")).toBe("status");
  });

  test("view: fresh watching report shows sent / held / blocked; stale or missing shows waiting", () => {
    const view = window.AdminExtensions.slidoStatusView;
    const report = { state: "watching", error: "", sent: 3, held: 2, blocked: 1 };
    expect(view({ report, stale: false })).toEqual({
      tone: "is-live",
      text: 'extSlidoStatusWatching{"sent":3,"held":2,"blocked":1}',
    });
    expect(view({ report, stale: true }).text).toBe("extSlidoStatusNone");
    expect(view(null).text).toBe("extSlidoStatusNone");
  });

  test("view: each known error has its own message, unknown ones never leak raw text", () => {
    const view = window.AdminExtensions.slidoStatusView;
    for (const code of ["screen_full", "captcha_required", "token_invalid", "no_overlay"]) {
      expect(view({ report: { state: "error", error: code }, stale: false }))
        .toEqual({ tone: "is-error", text: "extSlidoErr_" + code });
    }
    expect(view({ report: { state: "error", error: "<img onerror=x>" }, stale: false }))
      .toEqual({ tone: "is-error", text: "extSlidoErr_rejected" });
  });

  test("view: a rejected token replaces 'waiting' but never a fresh valid report", () => {
    const view = window.AdminExtensions.slidoStatusView;
    expect(view({ report: null, stale: true, token_rejected: true }))
      .toEqual({ tone: "is-error", text: "extSlidoErr_token_invalid" });
    expect(view({ report: { state: "watching", sent: 1 }, stale: true, token_rejected: true }).text)
      .toBe("extSlidoErr_token_invalid");
    // Forged bad-token heartbeats must not mask a live extension.
    expect(view({ report: { state: "watching", sent: 1 }, stale: false, token_rejected: true }).tone).toBe("is-live");
  });

  test("the line follows the server status on each poll", async () => {
    await poll({ report: { state: "error", error: "rate_limited", sent: 0, blocked: 0 }, stale: false });
    expect(line().textContent).toBe("extSlidoErr_rate_limited");
    expect(line().classList.contains("is-error")).toBe(true);

    await poll({ report: { state: "watching", error: "", sent: 5, held: 0, blocked: 0 }, stale: false });
    expect(line().textContent).toBe('extSlidoStatusWatching{"sent":5,"held":0,"blocked":0}');
    expect(line().classList.contains("is-live")).toBe(true);
    expect(line().classList.contains("is-error")).toBe(false);
  });

  test("download link stays hidden until the server names the zip, then matches its version", async () => {
    const step = card().querySelector("[data-ext-download-step]");
    expect(step.hidden).toBe(true);
    expect(card().querySelector("[data-ext-version]").textContent).toBe("—");

    await poll({ extension: { version: "0.3.0", download_url: "/static/extensions/danmu-slido-extension-0.3.0.zip" } });
    expect(step.hidden).toBe(false);
    expect(card().querySelector("[data-ext-download]").getAttribute("href"))
      .toBe("/static/extensions/danmu-slido-extension-0.3.0.zip");
    expect(card().querySelector("[data-ext-version]").textContent).toBe("v0.3.0");

    await poll({ extension: null });
    expect(step.hidden).toBe(true);
  });

  test("the config step shows this site's URL for the extension's Server URL field", () => {
    expect(card().querySelector(".admin-ext-step-code").textContent).toBe(window.location.origin);
  });
});
