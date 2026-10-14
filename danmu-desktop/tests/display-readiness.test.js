let diagnosticsCallback;

beforeEach(() => {
  jest.resetModules();
  jest.useFakeTimers();
  localStorage.clear();
  localStorage.setItem("danmu-settings", JSON.stringify({ host: "example.com", port: 443 }));
  document.body.innerHTML = `
    <span class="client-titlebar-status-dot" data-client-status="connected"></span>
    <section data-client-main-card><span data-client-overlay-dot></span><span data-client-overlay-status></span></section>
    <div id="client-display-banner" hidden><span data-display-banner-title></span><span data-display-banner-text></span><button data-display-open-admin></button></div>
    <select id="screen-select"><option data-display-id="101">Built-in display</option></select>
    ${["connection", "display", "session", "queue", "screens", "last"].map(k => `<span data-diag="${k}"></span>`).join("")}`;
  window.OverlayControl = { isRunning: () => true, subscribe: jest.fn() };
  window.API = {
    onOverlayDiagnostics: callback => { diagnosticsCallback = callback; },
    openExternal: jest.fn(),
  };
  require("../client-shell");
});

afterEach(() => { jest.clearAllTimers(); jest.useRealTimers(); delete window.API; delete window.OverlayControl; });

function report(overrides = {}) {
  diagnosticsCallback({ mode: "live", session_status: "live", session_name: "Event", queue_size: 0,
    displays: [101], host: "example.com", port: 443, ...overrides });
}

test("connected without a server snapshot does not claim display is running", () => {
  expect(document.querySelector("[data-client-overlay-status]").textContent).toContain("等待伺服器");
  expect(document.querySelector("[data-client-main-card]").classList.contains("is-running")).toBe(false);
});

test("paused display shows persistent queue warning and the correct admin link", () => {
  report({ mode: "standby", queue_size: 6 });
  expect(document.getElementById("client-display-banner").hidden).toBe(false);
  expect(document.querySelector("[data-display-banner-text]").textContent).toContain("6");
  expect(document.querySelector("[data-client-overlay-status]").textContent).toContain("顯示暫停");
  document.querySelector("[data-display-open-admin]").click();
  expect(window.API.openExternal).toHaveBeenCalledWith("https://example.com:443/admin#/overlay");
});

test("no active session is informational while display is live", () => {
  report({ session_status: "idle" });
  const banner = document.getElementById("client-display-banner");
  expect(banner.hidden).toBe(false);
  expect(banner.classList.contains("is-info")).toBe(true);
  expect(document.querySelector("[data-client-main-card]").classList.contains("is-running")).toBe(true);
  document.querySelector("[data-display-open-admin]").click();
  expect(window.API.openExternal).toHaveBeenCalledWith("https://example.com:443/admin#/dashboard");
});

test("diagnostics show actual target screens and message receive time", () => {
  report({ lastMessageAt: Date.now() });
  expect(document.querySelector('[data-diag="screens"]').textContent).toBe("Built-in display");
  expect(document.querySelector('[data-diag="session"]').textContent).toBe("Event");
  expect(document.querySelector('[data-diag="last"]').textContent).not.toBe("尚未收到");
  expect(document.getElementById("client-display-banner").hidden).toBe(true);
});

test("disconnect clears stale readiness until the next server snapshot", async () => {
  report({ mode: "standby" });
  document.querySelector(".client-titlebar-status-dot").dataset.clientStatus = "disconnected";
  await Promise.resolve();
  expect(document.getElementById("client-display-banner").hidden).toBe(true);
  expect(document.querySelector('[data-diag="display"]').textContent).toBe("尚未確認");
});
