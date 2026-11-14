const loadScript = require("./helpers/load-script");

// 顯示層狀態只有一個來源（AdminOverlayControl）。控制台的顯示層卡看不見時
// 也要跟著換，切回 #/live 的那一刻先用已知狀態重畫，不等 5 秒輪詢。
describe("cockpit display card follows the shared display state", () => {
  const flush = () => new Promise((resolve) => setTimeout(resolve, 0));
  let serverMode;
  let overlayCount;

  beforeAll(() => {
    window.ServerI18n = {
      t: (key, params) => key + (params ? ":" + JSON.stringify(params) : ""),
      currentLang: "zh",
    };
    window.showToast = jest.fn();
    window.fetch = jest.fn(async (url) => ({
      ok: true,
      json: async () => (String(url).includes("/overlay_status")
        ? { overlay_count: overlayCount }
        : { mode: serverMode }),
    }));
    window.csrfFetch = jest.fn(async (url, opts) => {
      serverMode = JSON.parse(opts.body).mode;
      return { ok: true, json: async () => ({ mode: serverMode }) };
    });
    // 沒有登入 → 兩支模組都不 boot，只留下共用 API 與事件監聽。
    loadScript("admin-broadcast.js");
    loadScript("admin-dashboard.js");
  });

  beforeEach(() => {
    serverMode = "live";
    overlayCount = 2;
    document.body.innerHTML = `
      <section><div data-cockpit-overlay>
        <span data-cockpit-status></span>
        <button data-cockpit-action="toggle"></button>
      </div></section>`;
  });

  afterEach(() => jest.restoreAllMocks());

  const status = () => document.querySelector("[data-cockpit-status]").textContent;
  const toggle = () => document.querySelector('[data-cockpit-action="toggle"]');

  test("pausing elsewhere updates the hidden card, which shows the new state when it becomes visible", async () => {
    document.dispatchEvent(new CustomEvent("admin-overlay-state", { detail: { live: true, count: 2 } }));
    expect(status()).toBe('uiDisplayOn · setupWizardReadyDisplayOk:{"n":2}');

    // jsdom has no layout: the card is "not visible" (offsetParent === null),
    // exactly like #/live while the host is on #/overlay.
    await window.AdminOverlayControl.setDisplay(false);
    expect(status()).toBe('uiDisplayOff · setupWizardReadyDisplayOk:{"n":2}');
    expect(toggle().dataset.i18n).toBe("broadcastBigResume");
    expect(toggle().dataset.next).toBe("live");

    // Route to #/live: repaint from the known state at once, then ask once.
    overlayCount = 1;
    jest.spyOn(HTMLElement.prototype, "offsetParent", "get").mockImplementation(function () {
      return this.parentElement;
    });
    document.dispatchEvent(new CustomEvent("admin-route-applied", { detail: { route: "live" } }));
    expect(status()).toBe('uiDisplayOff · setupWizardReadyDisplayOk:{"n":2}');
    await flush();
    expect(status()).toBe('uiDisplayOff · setupWizardReadyDisplayOk:{"n":1}');
  });

  const showCard = () => jest.spyOn(HTMLElement.prototype, "offsetParent", "get")
    .mockImplementation(function () { return this.parentElement; });

  test("a poll that started before a pause does not put the old state back", async () => {
    showCard();
    document.dispatchEvent(new CustomEvent("admin-overlay-state", { detail: { live: true, count: 2 } }));

    // The poll reads "live" but its response is still in flight...
    let answerPoll;
    window.fetch.mockImplementation((url) => (String(url).includes("/overlay_status")
      ? Promise.resolve({ ok: true, json: async () => ({ overlay_count: 2 }) })
      : new Promise((resolve) => {
        answerPoll = () => resolve({ ok: true, json: async () => ({ mode: "live" }) });
      })));
    document.dispatchEvent(new CustomEvent("admin-route-applied", { detail: { route: "live" } }));
    await flush();

    // ...when the host pauses. The pause is the newer fact.
    document.dispatchEvent(new CustomEvent("admin-overlay-state", { detail: { live: false, count: 2 } }));
    answerPoll();
    await flush();
    await flush();

    expect(status()).toBe('uiDisplayOff · setupWizardReadyDisplayOk:{"n":2}');
    expect(toggle().dataset.next).toBe("live");
  });

  test("a poll that could not reach the server keeps the known state", async () => {
    showCard();
    document.dispatchEvent(new CustomEvent("admin-overlay-state", { detail: { live: true, count: 2 } }));
    window.fetch.mockImplementation(async () => ({ ok: false, json: async () => ({}) }));
    document.dispatchEvent(new CustomEvent("admin-route-applied", { detail: { route: "live" } }));
    await flush();
    await flush();
    expect(status()).toBe('uiDisplayOn · setupWizardReadyDisplayOk:{"n":2}');
  });

  test("the shortcut pauses as soon as the mode is known, without waiting for the display count", async () => {
    window.fetch.mockImplementation((url) => (String(url).includes("/overlay_status")
      ? new Promise(() => {}) // never answers
      : Promise.resolve({ ok: true, json: async () => ({ mode: "live" }) })));
    window.csrfFetch.mockClear();

    await window.AdminOverlayControl.toggleDisplay();

    expect(window.csrfFetch).toHaveBeenCalledTimes(1);
    expect(JSON.parse(window.csrfFetch.mock.calls[0][1].body)).toEqual({ mode: "standby" });
  });

  test("repainting with nothing new does not touch the DOM", () => {
    document.dispatchEvent(new CustomEvent("admin-overlay-state", { detail: { live: true, count: 2 } }));
    const node = document.querySelector("[data-cockpit-status]").firstChild;
    document.dispatchEvent(new CustomEvent("admin-overlay-state", { detail: { live: true, count: 2 } }));
    expect(document.querySelector("[data-cockpit-status]").firstChild).toBe(node);
  });

  test("leaving for another route does not touch the card", () => {
    document.dispatchEvent(new CustomEvent("admin-overlay-state", { detail: { live: true, count: 3 } }));
    document.dispatchEvent(new CustomEvent("admin-route-applied", { detail: { route: "overlay" } }));
    expect(status()).toBe('uiDisplayOn · setupWizardReadyDisplayOk:{"n":3}');
    expect(window.fetch).not.toHaveBeenCalled();
  });
});

// 複製一定有結果：沒有 Clipboard API（http + 區網 IP 開後台）時退回
// execCommand("copy")，成功或失敗都有 toast。
describe("AdminUtils.copyText", () => {
  let toasts;
  const realClipboard = Object.getOwnPropertyDescriptor(window.navigator, "clipboard");

  beforeAll(() => loadScript("admin-utils.js"));

  beforeEach(() => {
    toasts = [];
    window.ServerI18n = { t: (key) => key };
    window.showToast = (msg, ok) => toasts.push([msg, ok]);
    document.execCommand = jest.fn(() => true);
  });

  afterEach(() => {
    if (realClipboard) Object.defineProperty(window.navigator, "clipboard", realClipboard);
    else delete window.navigator.clipboard;
  });

  function setClipboard(value) {
    Object.defineProperty(window.navigator, "clipboard", { value, configurable: true });
  }

  test("without navigator.clipboard it falls back to execCommand and toasts success", async () => {
    setClipboard(undefined);
    await expect(window.AdminUtils.copyText("https://example.test", "copied!")).resolves.toBe(true);
    expect(document.execCommand).toHaveBeenCalledWith("copy");
    expect(toasts).toEqual([["copied!", true]]);
    expect(document.querySelector("textarea")).toBeNull();
  });

  test("without navigator.clipboard a failed fallback toasts failure", async () => {
    setClipboard(undefined);
    document.execCommand = jest.fn(() => false);
    await expect(window.AdminUtils.copyText("x")).resolves.toBe(false);
    expect(toasts).toEqual([["sohCopyFailed", false]]);
  });

  test("a rejected Clipboard API write also falls back", async () => {
    setClipboard({ writeText: jest.fn(() => Promise.reject(new Error("denied"))) });
    await expect(window.AdminUtils.copyText("x")).resolves.toBe(true);
    expect(document.execCommand).toHaveBeenCalledWith("copy");
    expect(toasts).toEqual([["sohCopied", true]]);
  });

  test("the Clipboard API path toasts success without the fallback", async () => {
    const writeText = jest.fn(() => Promise.resolve());
    setClipboard({ writeText });
    await expect(window.AdminUtils.copyText("x")).resolves.toBe(true);
    expect(writeText).toHaveBeenCalledWith("x");
    expect(document.execCommand).not.toHaveBeenCalled();
    expect(toasts).toEqual([["sohCopied", true]]);
  });
});
