/**
 * Tests for renderer-modules/ws-manager.js
 *
 * L3 (2026-07-29): the hidden #start-button/#stop-button proxy chain is
 * gone. The runtime control surface is window.OverlayControl
 * { start, stop, isRunning, subscribe } and UI state changes are published
 * on the events bus ("overlay:state"). The behavioral semantics under test
 * are unchanged from the button era — validation failures never reach
 * API.create, toasts stay deduped, stopped/failed reset the inputs — only
 * the entry points moved from DOM clicks to direct calls.
 */

// Build a minimal DOM matching the element IDs the module queries
function buildDOM() {
  document.body.innerHTML = `
    <input id="host-input" value="" />
    <input id="port-input" value="" />
    <input id="ws-token-input" value="" />
    <select id="screen-select"><option value="0">0</option></select>
    <input id="sync-multi-display-checkbox" type="checkbox" />
    <div id="toast-container"></div>
    <div id="connection-status" class="hidden"></div>
    <div id="status-indicator"></div>
    <span id="status-text"></span>
  `;
}

function makeDeps(overrides = {}) {
  return {
    state: { overlayActive: false, connectionFailureNotified: false, connectionSuccessNotified: false },
    showToast: jest.fn(),
    t: (k) => k,
    validateIP: jest.fn().mockReturnValue(true),
    validatePort: jest.fn().mockReturnValue(true),
    saveSettings: jest.fn(),
    saveStartupAnimationSettings: jest.fn(),
    loadSettings: jest.fn().mockReturnValue(null),
    loadStartupAnimationSettings: jest.fn().mockReturnValue({ enabled: true, type: "link-start", customText: "" }),
    updateConnectionStatus: jest.fn(),
    hideConnectionStatus: jest.fn(),
    getLocalizedText: jest.fn((k, en) => en || k),
    getCurrentStatus: jest.fn().mockReturnValue(null),
    ...overrides,
  };
}

afterEach(() => {
  delete window.OverlayControl;
});

// ---------------------------------------------------------------------------
// Module exports
// ---------------------------------------------------------------------------

test("module exports the init functions and the OverlayControl primitives", () => {
  const mod = require("../renderer-modules/ws-manager");
  expect(typeof mod.initOverlayControls).toBe("function");
  expect(typeof mod.initConnectionStatusHandler).toBe("function");
  expect(typeof mod.startOverlay).toBe("function");
  expect(typeof mod.stopOverlay).toBe("function");
  expect(typeof mod.isOverlayRunning).toBe("function");
  expect(typeof mod.subscribeOverlayState).toBe("function");
});

// ---------------------------------------------------------------------------
// initOverlayControls – early return when DOM is absent
// ---------------------------------------------------------------------------

describe("initOverlayControls() – DOM guard", () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = ""; // no DOM elements
  });

  test("returns without throwing when host/port inputs are missing", () => {
    const { initOverlayControls } = require("../renderer-modules/ws-manager");
    expect(() => initOverlayControls(makeDeps())).not.toThrow();
    // Early return ⇒ the control surface is not exposed either.
    expect(window.OverlayControl).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// window.OverlayControl exposure contract
// ---------------------------------------------------------------------------

describe("initOverlayControls() – OverlayControl exposure", () => {
  beforeEach(() => {
    jest.resetModules();
    buildDOM();
  });

  test("exposes start/stop/isRunning/subscribe on window.OverlayControl", () => {
    const { initOverlayControls } = require("../renderer-modules/ws-manager");
    initOverlayControls(makeDeps());
    expect(typeof window.OverlayControl.start).toBe("function");
    expect(typeof window.OverlayControl.stop).toBe("function");
    expect(typeof window.OverlayControl.isRunning).toBe("function");
    expect(typeof window.OverlayControl.subscribe).toBe("function");
    expect(window.OverlayControl.isRunning()).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// startOverlay – validation
// ---------------------------------------------------------------------------

describe("startOverlay() – validation", () => {
  let deps;

  beforeEach(() => {
    jest.resetModules();
    buildDOM();
    deps = makeDeps();
    const { initOverlayControls } = require("../renderer-modules/ws-manager");
    initOverlayControls(deps);
  });

  function start() {
    window.OverlayControl.start();
  }

  test("shows error toast when host input is empty", () => {
    document.getElementById("host-input").value = "";
    start();
    expect(deps.showToast).toHaveBeenCalledWith("errorEmptyHost", "error");
  });

  test("adds input-invalid class to ip input when host is empty", () => {
    document.getElementById("host-input").value = "";
    start();
    expect(document.getElementById("host-input").classList.contains("input-invalid")).toBe(true);
  });

  test("shows error toast when host fails validateIP", () => {
    deps.validateIP.mockReturnValue(false);
    document.getElementById("host-input").value = "not-valid";
    start();
    expect(deps.showToast).toHaveBeenCalledWith("errorInvalidHost", "error");
  });

  test("shows error toast when port input is empty", () => {
    document.getElementById("host-input").value = "localhost";
    document.getElementById("port-input").value = "";
    start();
    expect(deps.showToast).toHaveBeenCalledWith("errorEmptyPort", "error");
  });

  test("shows error toast when port fails validatePort", () => {
    document.getElementById("host-input").value = "localhost";
    document.getElementById("port-input").value = "99999";
    deps.validatePort.mockReturnValue(false);
    start();
    expect(deps.showToast).toHaveBeenCalledWith("errorInvalidPort", "error");
  });

  test("does NOT call window.API.create when validation fails", () => {
    const create = jest.fn();
    window.API = { create, close: jest.fn() };
    document.getElementById("host-input").value = ""; // will fail
    start();
    expect(create).not.toHaveBeenCalled();
    delete window.API;
  });

  test("calls window.API.create with correct args on valid input", () => {
    const create = jest.fn();
    window.API = { create, close: jest.fn() };
    document.getElementById("host-input").value = "localhost";
    document.getElementById("port-input").value = "8080";
    start();
    // v5.0.0+: WSS-only — useWss param dropped from api.create.
    expect(create).toHaveBeenCalledWith(
      "localhost", "8080", expect.any(Number), expect.any(Boolean),
      expect.any(Object), expect.any(String)
    );
    delete window.API;
  });

  test("sets state.overlayActive = true and disables inputs after successful start", () => {
    window.API = { create: jest.fn(), close: jest.fn() };
    document.getElementById("host-input").value = "localhost";
    document.getElementById("port-input").value = "8080";
    start();
    expect(deps.state.overlayActive).toBe(true);
    expect(window.OverlayControl.isRunning()).toBe(true);
    expect(document.getElementById("host-input").disabled).toBe(true);
    expect(document.getElementById("port-input").disabled).toBe(true);
    expect(document.getElementById("screen-select").disabled).toBe(true);
    delete window.API;
  });

  test("validation failure does not flip running state or lock inputs", () => {
    window.API = { create: jest.fn(), close: jest.fn() };
    document.getElementById("host-input").value = "";
    start();
    expect(window.OverlayControl.isRunning()).toBe(false);
    expect(document.getElementById("host-input").disabled).toBe(false);
    delete window.API;
  });
});

// ---------------------------------------------------------------------------
// stopOverlay
// ---------------------------------------------------------------------------

describe("stopOverlay()", () => {
  let deps;

  beforeEach(() => {
    jest.resetModules();
    buildDOM();
    deps = makeDeps();
    deps.state.overlayActive = true;
    const { initOverlayControls } = require("../renderer-modules/ws-manager");
    initOverlayControls(deps);
  });

  test("stop sets state.overlayActive = false and re-enables inputs", () => {
    window.API = { create: jest.fn(), close: jest.fn() };
    document.getElementById("host-input").disabled = true;
    window.OverlayControl.stop();
    expect(deps.state.overlayActive).toBe(false);
    expect(document.getElementById("host-input").disabled).toBe(false);
    delete window.API;
  });

  test("stop calls updateConnectionStatus with 'idle' and API.close", () => {
    const close = jest.fn();
    window.API = { create: jest.fn(), close };
    window.OverlayControl.stop();
    expect(deps.updateConnectionStatus).toHaveBeenCalledWith("idle", "statusIdle");
    expect(close).toHaveBeenCalledTimes(1);
    delete window.API;
  });
});

// ---------------------------------------------------------------------------
// initConnectionStatusHandler – early return when window.API absent
// ---------------------------------------------------------------------------

describe("initConnectionStatusHandler() – early return guard", () => {
  beforeEach(() => {
    jest.resetModules();
    buildDOM();
    delete window.API;
  });

  test("does not throw when window.API is undefined", () => {
    const { initConnectionStatusHandler } = require("../renderer-modules/ws-manager");
    expect(() => initConnectionStatusHandler(makeDeps())).not.toThrow();
  });

  test("does not throw when window.API.onConnectionStatus is not a function", () => {
    window.API = {};
    const { initConnectionStatusHandler } = require("../renderer-modules/ws-manager");
    expect(() => initConnectionStatusHandler(makeDeps())).not.toThrow();
    delete window.API;
  });
});

// ---------------------------------------------------------------------------
// initConnectionStatusHandler – state mutations + published events
// ---------------------------------------------------------------------------

describe("initConnectionStatusHandler() – onConnectionStatus state mutations", () => {
  let deps, notify, published;

  beforeEach(() => {
    jest.resetModules();
    buildDOM();

    window.API = {
      onConnectionStatus: jest.fn((cb) => { notify = cb; }),
    };

    deps = makeDeps();
    const {
      initConnectionStatusHandler,
      initOverlayControls,
    } = require("../renderer-modules/ws-manager");

    // Also call initOverlayControls to populate cached element references
    // and expose window.OverlayControl.
    initOverlayControls({ ...deps, loadSettings: jest.fn().mockReturnValue(null) });
    initConnectionStatusHandler(deps);

    published = [];
    window.OverlayControl.subscribe((s) => published.push(s));
  });

  afterEach(() => {
    delete window.API;
  });

  test("'connected' status sets state.overlayActive = true and publishes running", () => {
    notify({ status: "connected" });
    expect(deps.state.overlayActive).toBe(true);
    expect(published).toEqual([{ running: true, status: "connected" }]);
  });

  test("'connected' status disables inputs", () => {
    notify({ status: "connected" });
    expect(document.getElementById("host-input").disabled).toBe(true);
    expect(document.getElementById("port-input").disabled).toBe(true);
  });

  test("'connected' status calls showToast once and sets connectionSuccessNotified", () => {
    notify({ status: "connected" });
    expect(deps.showToast).toHaveBeenCalledWith("toastConnected", "success");
    expect(deps.state.connectionSuccessNotified).toBe(true);
  });

  test("'connected' status — second call does not show toast again", () => {
    notify({ status: "connected" });
    deps.getCurrentStatus.mockReturnValue("connected"); // simulate already-connected
    notify({ status: "connected" });
    expect(deps.showToast).toHaveBeenCalledTimes(1);
  });

  test("'disconnected' while overlayActive=false is ignored (no event published)", () => {
    deps.state.overlayActive = false;
    notify({ status: "disconnected", attempt: 1, maxAttempts: 5 });
    expect(deps.updateConnectionStatus).not.toHaveBeenCalled();
    expect(published).toEqual([]);
  });

  test("'disconnected' while overlayActive=true updates status and publishes reconnecting", () => {
    deps.state.overlayActive = true;
    notify({ status: "disconnected", attempt: 1, maxAttempts: 5 });
    expect(deps.updateConnectionStatus).toHaveBeenCalledWith(
      "disconnected", expect.stringContaining("statusDisconnected")
    );
    expect(published).toEqual([{ running: true, status: "reconnecting" }]);
  });

  test("'connection-failed' resets overlayActive to false and publishes failed", () => {
    deps.state.overlayActive = true;
    notify({ status: "connection-failed" });
    expect(deps.state.overlayActive).toBe(false);
    expect(published).toEqual([{ running: false, status: "failed" }]);
  });

  test("'connection-failed' re-enables inputs and shows error toast", () => {
    notify({ status: "connected" });
    notify({ status: "connection-failed" });
    expect(document.getElementById("host-input").disabled).toBe(false);
    expect(document.getElementById("port-input").disabled).toBe(false);
    expect(deps.showToast).toHaveBeenCalledWith(expect.any(String), "error");
  });

  test("'connection-failed' second call is ignored (connectionFailureNotified guard)", () => {
    notify({ status: "connection-failed" });
    const callCount = deps.showToast.mock.calls.length;
    const publishedCount = published.length;
    notify({ status: "connection-failed" });
    expect(deps.showToast.mock.calls.length).toBe(callCount);
    // No new event — the UI was already reset by the first failure.
    expect(published.length).toBe(publishedCount);
  });

  test("'stopped' sets overlayActive to false and publishes idle", () => {
    deps.state.overlayActive = true;
    notify({ status: "stopped" });
    expect(deps.state.overlayActive).toBe(false);
    expect(published).toEqual([{ running: false, status: "idle" }]);
  });

  test("'stopped' calls updateConnectionStatus with 'idle'", () => {
    notify({ status: "stopped" });
    expect(deps.updateConnectionStatus).toHaveBeenCalledWith("idle", "statusStopped");
  });

  test("subscribe fires once per transition across a connected→stopped→failed sequence", () => {
    notify({ status: "connected" });
    notify({ status: "stopped" });
    notify({ status: "connection-failed" });
    expect(published).toEqual([
      { running: true, status: "connected" },
      { running: false, status: "idle" },
      { running: false, status: "failed" },
    ]);
  });

  test("'display-migrated' shows exactly one warning toast", () => {
    notify({ status: "display-migrated", migrated: 1, removed: 0 });
    expect(deps.showToast).toHaveBeenCalledTimes(1);
    expect(deps.showToast).toHaveBeenCalledWith(expect.any(String), "warning");
  });

  test("'display-migrated' leaves inputs, state and status untouched (bounds-only change)", () => {
    deps.state.overlayActive = true;
    const hostInput = document.getElementById("host-input");
    hostInput.disabled = true; // running

    notify({ status: "display-migrated", migrated: 1, removed: 0 });

    expect(deps.state.overlayActive).toBe(true);
    expect(hostInput.disabled).toBe(true);
    expect(deps.updateConnectionStatus).not.toHaveBeenCalled();
    expect(published).toEqual([]);
  });

  test("'validation-error' shows an error toast only — no state or UI reset", () => {
    deps.state.overlayActive = true;
    const hostInput = document.getElementById("host-input");
    hostInput.disabled = true; // running

    notify({ status: "validation-error", context: "test-danmu" });

    expect(deps.showToast).toHaveBeenCalledTimes(1);
    expect(deps.showToast).toHaveBeenCalledWith(expect.any(String), "error");
    expect(deps.state.overlayActive).toBe(true);
    expect(hostInput.disabled).toBe(true);
    expect(deps.updateConnectionStatus).not.toHaveBeenCalled();
    expect(published).toEqual([]);
  });

  test("unknown statuses still no-op (older main + newer renderer degrade gracefully)", () => {
    notify({ status: "some-future-status" });
    expect(deps.showToast).not.toHaveBeenCalled();
    expect(deps.updateConnectionStatus).not.toHaveBeenCalled();
    expect(published).toEqual([]);
  });
});
