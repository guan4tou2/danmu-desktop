const loadScript = require("./helpers/load-script");
const zh = require("../static/locales/zh/translation.json");

describe("display connection password migration", () => {
  let saved;
  let getAuth;
  let documentListeners;
  let windowListeners;
  const response = (data, ok = true) => ({ ok, status: ok ? 200 : 500, json: async () => data });
  const el = id => document.getElementById("sec2-wsa-" + id);
  const settle = async () => { for (let n = 0; n < 8; n++) await Promise.resolve(); };

  beforeEach(() => {
    document.body.innerHTML = '<div class="admin-dash-grid" data-active-route="security"><div id="settings-grid"></div></div>';
    saved = { require_token: false, token: "private-desktop-password" };
    getAuth = () => Promise.resolve(response({ ...saved }));
    window.AdminUtils = { escapeHtml: value => String(value ?? "") };
    window.ServerI18n = { t: key => zh[key] || key };
    window.DANMU_CONFIG = { session: { logged_in: true } };
    window.showToast = jest.fn();
    window.HudConfirm = { open: jest.fn().mockResolvedValue(true) };
    window.fetch = jest.fn(url => url === "/admin/ws-auth" ? getAuth() : Promise.resolve(response({})));
    window.csrfFetch = jest.fn(async (url, options) => {
      if (url.endsWith("/rotate")) saved.token = "new-private-desktop-password";
      else saved = JSON.parse(options.body);
      return response({ ...saved });
    });
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: jest.fn().mockResolvedValue() } });
    jest.spyOn(document, "readyState", "get").mockReturnValue("complete");
    jest.spyOn(window, "MutationObserver").mockImplementation(() => ({ observe() {}, disconnect() {} }));
    documentListeners = jest.spyOn(document, "addEventListener");
    windowListeners = jest.spyOn(window, "addEventListener");
    localStorage.clear();
  });

  afterEach(() => {
    documentListeners.mock.calls.forEach(args => document.removeEventListener(...args));
    windowListeners.mock.calls.forEach(args => window.removeEventListener(...args));
    jest.restoreAllMocks();
  });

  test("load keeps controls disabled until saved state is known and exposes no password in page text", async () => {
    let resolve;
    getAuth = () => new Promise(done => { resolve = done; });
    loadScript("admin-security.js");
    expect(el("toggle").disabled).toBe(true);
    expect(el("save").disabled).toBe(true);
    expect(el("disabled-warning").hidden).toBe(true);
    resolve(response(saved));
    await settle();
    expect(el("toggle").disabled).toBe(false);
    expect(el("toggle").checked).toBe(false);
    expect(el("disabled-warning").hidden).toBe(false);
    expect(el("token").type).toBe("password");
    expect(document.body.textContent).not.toContain(saved.token);
    expect(window.csrfFetch).not.toHaveBeenCalled();
  });

  test("staging a password does not enable auth; enabling takes effect only after Save", async () => {
    loadScript("admin-security.js");
    await settle();
    el("copy").click();
    await settle();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(saved.token);
    expect(window.csrfFetch).not.toHaveBeenCalled();
    el("toggle").checked = true;
    el("toggle").dispatchEvent(new Event("change"));
    expect(el("draft-hint").hidden).toBe(false);
    expect(el("disabled-warning").hidden).toBe(false);
    expect(el("status").textContent).toBe(zh.security2StatusDisabled);
    el("save").click();
    await settle();
    expect(saved.require_token).toBe(true);
    expect(el("disabled-warning").hidden).toBe(true);
    expect(el("draft-hint").hidden).toBe(true);
    expect(el("status").textContent).toBe(zh.security2StatusEnabled);
  });

  test("failed save retains the current server warning and unsaved draft", async () => {
    loadScript("admin-security.js");
    await settle();
    window.csrfFetch.mockResolvedValue(response({ error: "Save failed" }, false));
    el("toggle").checked = true;
    el("toggle").dispatchEvent(new Event("change"));
    el("save").click();
    await settle();
    expect(el("disabled-warning").hidden).toBe(false);
    expect(el("draft-hint").hidden).toBe(false);
    expect(el("status").textContent).toBe(zh.security2StatusDisabled);
    expect(saved.require_token).toBe(false);
  });

  test("a slow post-save read locks all auth writes until the server state is confirmed", async () => {
    loadScript("admin-security.js");
    await settle();
    let resolvePost;
    window.csrfFetch.mockImplementationOnce(() => new Promise(done => { resolvePost = done; }));
    let resolveRead;
    getAuth = () => new Promise(done => { resolveRead = done; });
    el("toggle").checked = true;
    el("toggle").dispatchEvent(new Event("change"));
    el("save").click();
    expect(el("toggle").disabled).toBe(true);
    expect(el("save").disabled).toBe(true);
    expect(el("rotate").disabled).toBe(true);
    expect(el("saving-hint").hidden).toBe(false);
    expect(el("status").textContent).toBe(zh.security2Loading);
    expect(window.showToast).not.toHaveBeenCalledWith(zh.security2ToastWsAuthSaved, true);
    saved.require_token = true;
    resolvePost(response(saved));
    await settle();
    // Regression: the first write's GET is still slow. A second write used
    // to race it and let the late first GET hide the real disabled warning.
    el("toggle").checked = false;
    el("toggle").dispatchEvent(new Event("change"));
    el("save").dispatchEvent(new Event("click"));
    el("rotate").dispatchEvent(new Event("click"));
    document.querySelector('[data-sec-danger="reset-ws"]').dispatchEvent(new Event("click"));
    await settle();
    expect(window.csrfFetch).toHaveBeenCalledTimes(1);
    expect(window.HudConfirm.open).not.toHaveBeenCalled();
    expect(el("saving-hint").hidden).toBe(false);
    expect(el("draft-hint").hidden).toBe(true);
    resolveRead(response(saved));
    await settle();
    expect(el("toggle").checked).toBe(true);
    expect(el("toggle").disabled).toBe(false);
    expect(el("saving-hint").hidden).toBe(true);
    expect(el("status").textContent).toBe(zh.security2StatusEnabled);
    expect(window.showToast).toHaveBeenCalledWith(zh.security2ToastWsAuthSaved, true);
  });

  test("an older read cannot overwrite a newer page's disabled server state", async () => {
    let resolveOlder;
    getAuth = () => new Promise(done => { resolveOlder = done; });
    loadScript("admin-security.js");
    let resolveNewer;
    getAuth = () => new Promise(done => { resolveNewer = done; });
    document.getElementById("admin-security-v2-page").remove();
    document.dispatchEvent(new Event("admin-panel-rendered"));
    resolveNewer(response({ require_token: false, token: "current-server-password" }));
    await settle();
    resolveOlder(response({ require_token: true, token: "stale-server-password" }));
    await settle();
    expect(el("toggle").checked).toBe(false);
    expect(el("token").value).toBe("current-server-password");
    expect(el("status").textContent).toBe(zh.security2StatusDisabled);
    expect(el("disabled-warning").hidden).toBe(false);
    expect(el("draft-hint").hidden).toBe(true);
  });

  test("a successful POST followed by a failed confirmation read never reports a confirmed saved state", async () => {
    loadScript("admin-security.js");
    await settle();
    getAuth = () => Promise.reject(new Error("offline"));
    el("toggle").checked = true;
    el("save").click();
    await settle();
    expect(el("save").disabled).toBe(true);
    expect(el("saving-hint").hidden).toBe(true);
    expect(el("load-error").hidden).toBe(false);
    expect(window.showToast).not.toHaveBeenCalledWith(zh.security2ToastWsAuthSaved, true);
  });

  test("failed load disables editing instead of letting unknown defaults overwrite settings", async () => {
    getAuth = () => Promise.reject(new Error("offline"));
    loadScript("admin-security.js");
    await settle();
    expect(el("load-error").hidden).toBe(false);
    expect(el("disabled-warning").hidden).toBe(true);
    expect(el("toggle").disabled).toBe(true);
    expect(el("save").disabled).toBe(true);
    expect(window.csrfFetch).not.toHaveBeenCalled();
  });

  test("generating a password while off preserves auth and documents connection continuity", async () => {
    loadScript("admin-security.js");
    await settle();
    el("rotate").click();
    await settle();
    expect(window.HudConfirm.open).toHaveBeenCalledWith(expect.objectContaining({ body: zh.security2RotateConfirmBody }));
    expect(saved.require_token).toBe(false);
    expect(el("token").value).toBe("new-private-desktop-password");
    expect(el("disabled-warning").hidden).toBe(false);
    expect(el("connection-hint").textContent).toBe(zh.security2WsAuthConnectionHint);
  });

  test("disabling is a draft until saved; reveal/hide controls retain accessible state", async () => {
    saved.require_token = true;
    loadScript("admin-security.js");
    await settle();
    el("reveal").click();
    expect(el("token").type).toBe("text");
    expect(el("reveal").getAttribute("aria-pressed")).toBe("true");
    expect(el("reveal").textContent).toBe(zh.security2WsAuthHideLabel);
    el("reveal").click();
    expect(el("token").type).toBe("password");
    el("toggle").checked = false;
    el("toggle").dispatchEvent(new Event("change"));
    expect(el("disabled-warning").hidden).toBe(true);
    el("save").click();
    await settle();
    expect(el("disabled-warning").hidden).toBe(false);
    expect(el("draft-hint").hidden).toBe(true);
  });

  test.each(["en", "ja", "ko"])("%s has all connection migration messages", lang => {
    const translations = require(`../static/locales/${lang}/translation.json`);
    Object.keys(zh).filter(key => key.startsWith("security2WsAuth")).forEach(key => {
      expect(translations[key]).toEqual(expect.any(String));
      expect(translations[key].length).toBeGreaterThan(0);
    });
  });
});
