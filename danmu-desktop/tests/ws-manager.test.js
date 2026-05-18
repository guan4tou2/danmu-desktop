/**
 * Tests for renderer-modules/ws-manager.js
 *
 * The module exports two functions that are deeply entangled with DOM and
 * window.API.  We test:
 *
 * 1. initOverlayControls early-return when required DOM elements are absent.
 * 2. initOverlayControls — start button validation (empty host, bad IP, bad port).
 * 3. initConnectionStatusHandler early-return when window.API is absent.
 * 4. initConnectionStatusHandler — state mutations driven by the
 *    onConnectionStatus callback for each status variant.
 *
 * DOM helpers and the full wiring (saveSettings, etc.) are minimal stubs.
 */

// Build a minimal DOM matching the element IDs the module queries
function buildDOM() {
  document.body.innerHTML = `
    <input id="host-input" value="" />
    <input id="port-input" value="" />
    <input id="ws-token-input" value="" />
    <select id="screen-select"><option value="0">0</option></select>
    <input id="sync-multi-display-checkbox" type="checkbox" />
    <input id="use-wss-checkbox" type="checkbox" />
    <button id="start-button">Start</button>
    <button id="stop-button" disabled>Stop</button>
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

// ---------------------------------------------------------------------------
// Module exports
// ---------------------------------------------------------------------------

test("module exports initOverlayControls and initConnectionStatusHandler", () => {
  const mod = require("../renderer-modules/ws-manager");
  expect(typeof mod.initOverlayControls).toBe("function");
  expect(typeof mod.initConnectionStatusHandler).toBe("function");
});

// ---------------------------------------------------------------------------
// initOverlayControls – early return when DOM is absent
// ---------------------------------------------------------------------------

describe("initOverlayControls() – DOM guard", () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = ""; // no DOM elements
  });

  test("returns without throwing when required elements are missing", () => {
    const { initOverlayControls } = require("../renderer-modules/ws-manager");
    expect(() => initOverlayControls(makeDeps())).not.toThrow();
  });
});

// ---------------------------------------------------------------------------
// initOverlayControls – start-button validation
// ---------------------------------------------------------------------------

describe("initOverlayControls() – start button validation", () => {
  let deps;

  beforeEach(() => {
    jest.resetModules();
    buildDOM();
    deps = makeDeps();
    const { initOverlayControls } = require("../renderer-modules/ws-manager");
    initOverlayControls(deps);
  });

  function clickStart() {
    document.getElementById("start-button").click();
  }

  test("shows error toast when host input is empty", () => {
    document.getElementById("host-input").value = "";
    clickStart();
    expect(deps.showToast).toHaveBeenCalledWith("errorEmptyHost", "error");
  });

  test("adds input-invalid class to ip input when host is empty", () => {
    document.getElementById("host-input").value = "";
    clickStart();
    expect(document.getElementById("host-input").classList.contains("input-invalid")).toBe(true);
  });

  test("shows error toast when host fails validateIP", () => {
    deps.validateIP.mockReturnValue(false);
    document.getElementById("host-input").value = "not-valid";
    clickStart();
    expect(deps.showToast).toHaveBeenCalledWith("errorInvalidHost", "error");
  });

  test("shows error toast when port input is empty", () => {
    document.getElementById("host-input").value = "localhost";
    document.getElementById("port-input").value = "";
    clickStart();
    expect(deps.showToast).toHaveBeenCalledWith("errorEmptyPort", "error");
  });

  test("shows error toast when port fails validatePort", () => {
    document.getElementById("host-input").value = "localhost";
    document.getElementById("port-input").value = "99999";
    deps.validatePort.mockReturnValue(false);
    clickStart();
    expect(deps.showToast).toHaveBeenCalledWith("errorInvalidPort", "error");
  });

  test("does NOT call window.API.create when validation fails", () => {
    const create = jest.fn();
    window.API = { create, close: jest.fn() };
    document.getElementById("host-input").value = ""; // will fail
    clickStart();
    expect(create).not.toHaveBeenCalled();
    delete window.API;
  });

  test("calls window.API.create with correct args on valid input", () => {
    const create = jest.fn();
    window.API = { create, close: jest.fn() };
    document.getElementById("host-input").value = "localhost";
    document.getElementById("port-input").value = "8080";
    clickStart();
    // v5.0.0+: WSS-only — useWss param dropped from api.create.
    expect(create).toHaveBeenCalledWith(
      "localhost", "8080", expect.any(Number), expect.any(Boolean),
      expect.any(Object), expect.any(String)
    );
    delete window.API;
  });

  test("sets state.overlayActive = true after successful start", () => {
    window.API = { create: jest.fn(), close: jest.fn() };
    document.getElementById("host-input").value = "localhost";
    document.getElementById("port-input").value = "8080";
    clickStart();
    expect(deps.state.overlayActive).toBe(true);
    delete window.API;
  });
});

// ---------------------------------------------------------------------------
// initOverlayControls – stop button
// ---------------------------------------------------------------------------

describe("initOverlayControls() – stop button", () => {
  let deps;

  beforeEach(() => {
    jest.resetModules();
    buildDOM();
    // Stop button must NOT be disabled so the click is handled
    document.getElementById("stop-button").disabled = false;
    deps = makeDeps();
    deps.state.overlayActive = true;
    const { initOverlayControls } = require("../renderer-modules/ws-manager");
    initOverlayControls(deps);
  });

  test("clicking stop sets state.overlayActive = false", () => {
    window.API = { create: jest.fn(), close: jest.fn() };
    document.getElementById("stop-button").click();
    expect(deps.state.overlayActive).toBe(false);
    delete window.API;
  });

  test("clicking stop calls updateConnectionStatus with 'idle'", () => {
    window.API = { create: jest.fn(), close: jest.fn() };
    document.getElementById("stop-button").click();
    expect(deps.updateConnectionStatus).toHaveBeenCalledWith("idle", "statusIdle");
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
// initConnectionStatusHandler – state mutations via callback
// ---------------------------------------------------------------------------

describe("initConnectionStatusHandler() – onConnectionStatus state mutations", () => {
  let deps, notify;

  beforeEach(() => {
    jest.resetModules();
    buildDOM();

    window.API = {
      onConnectionStatus: jest.fn((cb) => { notify = cb; }),
    };

    deps = makeDeps();
    const { initConnectionStatusHandler } = require("../renderer-modules/ws-manager");

    // Also call initOverlayControls to populate cached element references
    const { initOverlayControls } = require("../renderer-modules/ws-manager");
    initOverlayControls({ ...deps, loadSettings: jest.fn().mockReturnValue(null) });

    initConnectionStatusHandler(deps);
  });

  afterEach(() => {
    delete window.API;
  });

  test("'connected' status sets state.overlayActive = true", () => {
    notify({ status: "connected" });
    expect(deps.state.overlayActive).toBe(true);
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

  test("'disconnected' while overlayActive=false is ignored", () => {
    deps.state.overlayActive = false;
    notify({ status: "disconnected", attempt: 1, maxAttempts: 5 });
    expect(deps.updateConnectionStatus).not.toHaveBeenCalled();
  });

  test("'disconnected' while overlayActive=true updates status", () => {
    deps.state.overlayActive = true;
    notify({ status: "disconnected", attempt: 1, maxAttempts: 5 });
    expect(deps.updateConnectionStatus).toHaveBeenCalledWith(
      "disconnected", expect.stringContaining("statusDisconnected")
    );
  });

  test("'connection-failed' resets overlayActive to false", () => {
    deps.state.overlayActive = true;
    notify({ status: "connection-failed" });
    expect(deps.state.overlayActive).toBe(false);
  });

  test("'connection-failed' shows error toast", () => {
    notify({ status: "connection-failed" });
    expect(deps.showToast).toHaveBeenCalledWith(
      expect.any(String), "error"
    );
  });

  test("'connection-failed' second call is ignored (connectionFailureNotified guard)", () => {
    notify({ status: "connection-failed" });
    const callCount = deps.showToast.mock.calls.length;
    notify({ status: "connection-failed" });
    expect(deps.showToast.mock.calls.length).toBe(callCount);
  });

  test("'stopped' sets overlayActive to false", () => {
    deps.state.overlayActive = true;
    notify({ status: "stopped" });
    expect(deps.state.overlayActive).toBe(false);
  });

  test("'stopped' calls updateConnectionStatus with 'idle'", () => {
    notify({ status: "stopped" });
    expect(deps.updateConnectionStatus).toHaveBeenCalledWith("idle", "statusStopped");
  });
});
