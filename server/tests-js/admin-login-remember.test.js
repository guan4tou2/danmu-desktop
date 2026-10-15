const loadScript = require("./helpers/load-script");
const zh = require("../static/locales/zh/translation.json");

const settle = async () => { for (let i = 0; i < 8; i++) await Promise.resolve(); };

describe("admin remember sign-in", () => {
  let listeners;
  beforeEach(() => {
    document.body.innerHTML = '<main id="app-container"></main>';
    document.head.innerHTML = '<meta name="csrf-token" content="old-csrf">';
    window.ServerI18n = { t: key => zh[key] || key, updateUI: jest.fn() };
    window.__adminCtx = { appContainer: document.getElementById("app-container") };
    window.DANMU_CONFIG = { appVersion: "test" };
    window.showToast = jest.fn();
    delete window.__adminRawFetch;
    localStorage.clear();
    sessionStorage.clear();
    listeners = jest.spyOn(document, "addEventListener");
    jest.useFakeTimers();
  });
  afterEach(() => {
    listeners.mock.calls.forEach(args => document.removeEventListener(...args));
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  test.each([false, true])("login form submits explicit choice (%s) without storing credentials", async remember => {
    // A rate-limit response keeps the unit test on this page instead of
    // asking jsdom to perform the browser navigation on a completed login.
    window.fetch = jest.fn().mockResolvedValue({ status: 429, headers: { get: () => "10" } });
    loadScript("admin-login.js");
    window.AdminLogin.render();
    const checkbox = document.getElementById("admin-login-remember");
    expect(checkbox.checked).toBe(false);
    expect(checkbox.labels[0].textContent).toContain(zh.adminLoginRemember);
    checkbox.checked = remember;
    document.getElementById("password").value = "isolated-password";
    document.getElementById("loginForm").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    await settle();
    const body = new URLSearchParams(window.fetch.mock.calls[0][1].body);
    expect(body.get("password")).toBe("isolated-password");
    expect(body.get("remember")).toBe(remember ? "1" : null);
    expect(Object.keys(localStorage)).toEqual([]);
    expect(JSON.stringify(sessionStorage)).not.toContain("isolated-password");
  });

  test.each([false, true])("expiry dialog submits choice (%s), refreshes CSRF, and preserves the current page", async remember => {
    document.getElementById("app-container").innerHTML = '<input id="unsaved" value="keep this draft">';
    window.fetch = jest.fn().mockResolvedValue({ status: 200, json: async () => ({ ok: true, csrf_token: "new-csrf" }) });
    loadScript("admin-session-expired.js");
    window.AdminSessionExpired.open();
    const checkbox = document.getElementById("admin-sx-remember");
    expect(checkbox.checked).toBe(false);
    checkbox.checked = remember;
    document.getElementById("admin-sx-password").value = "isolated-password";
    document.querySelector("[data-sx-form]").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    await settle();
    const body = new URLSearchParams(window.fetch.mock.calls[0][1].body);
    expect(body.get("remember")).toBe(remember ? "1" : null);
    expect(document.querySelector('meta[name="csrf-token"]').content).toBe("new-csrf");
    expect(window.AdminSessionExpired.isOpen()).toBe(false);
    expect(document.getElementById("unsaved").value).toBe("keep this draft");
    expect(Object.keys(localStorage)).toEqual([]);
    expect(Object.keys(sessionStorage)).toEqual([]);
  });

  test("failed dialog login preserves the choice and allows another attempt", async () => {
    window.fetch = jest.fn().mockResolvedValue({ status: 401, json: async () => ({ ok: false }) });
    loadScript("admin-session-expired.js");
    window.AdminSessionExpired.open();
    document.getElementById("admin-sx-remember").checked = true;
    document.getElementById("admin-sx-password").value = "incorrect";
    document.querySelector("[data-sx-form]").dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    await settle();
    expect(window.AdminSessionExpired.isOpen()).toBe(true);
    expect(document.getElementById("admin-sx-remember").checked).toBe(true);
    expect(document.querySelector("[data-sx-error]").textContent).toBe(zh.sxWrongPassword);
    expect(document.querySelector(".admin-sx__submit").disabled).toBe(false);
  });
});
