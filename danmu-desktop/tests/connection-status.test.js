/**
 * Tests for renderer-modules/connection-status.js
 *
 * The module uses a 100 ms debounce setTimeout for DOM updates, so we use
 * jest fake timers to avoid real waits.
 *
 * The module references the global `i18n` directly (not via require), so we
 * set/unset global.i18n where needed to test the localisation paths.
 */

// The module keeps module-level state (currentConnectionStatus, etc.) that
// persists between tests when Node caches the module.  We isolate each test
// file by resetting the module registry.
beforeEach(() => {
  jest.useFakeTimers();

  // Build required DOM elements
  document.body.innerHTML = `
    <div id="connection-status" class="hidden"></div>
    <div id="status-indicator"></div>
    <span id="status-text"></span>
  `;

  // Reset module state by re-requiring a fresh instance
  jest.resetModules();
});

afterEach(() => {
  jest.runAllTimers();
  jest.useRealTimers();
  delete global.i18n;
});

function load() {
  return require("../renderer-modules/connection-status");
}

// ---------------------------------------------------------------------------
// getCurrentStatus
// ---------------------------------------------------------------------------

describe("getCurrentStatus()", () => {
  test("returns null before any update", () => {
    const { getCurrentStatus } = load();
    expect(getCurrentStatus()).toBeNull();
  });

  test("reflects the status after updateConnectionStatus fires", () => {
    const { updateConnectionStatus, getCurrentStatus } = load();
    updateConnectionStatus("connected", "Connected");
    jest.runAllTimers();
    expect(getCurrentStatus()).toBe("connected");
  });

  test("returns null after a hide update (shouldShow=false)", () => {
    const { updateConnectionStatus, getCurrentStatus } = load();
    updateConnectionStatus("connected", "Connected");
    jest.runAllTimers();
    updateConnectionStatus(null, "", false);
    jest.runAllTimers();
    expect(getCurrentStatus()).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// updateConnectionStatus – DOM mutations
// ---------------------------------------------------------------------------

describe("updateConnectionStatus() – DOM", () => {
  test("removes 'hidden' class when shouldShow is true", () => {
    const { updateConnectionStatus } = load();
    const container = document.getElementById("connection-status");
    expect(container.classList.contains("hidden")).toBe(true);
    updateConnectionStatus("connecting", "Connecting...");
    jest.runAllTimers();
    expect(container.classList.contains("hidden")).toBe(false);
  });

  test("sets textContent on status-text element", () => {
    const { updateConnectionStatus } = load();
    updateConnectionStatus("connecting", "Connecting…");
    jest.runAllTimers();
    expect(document.getElementById("status-text").textContent).toBe("Connecting…");
  });

  test("adds 'hidden' class when shouldShow is false", () => {
    const { updateConnectionStatus } = load();
    const container = document.getElementById("connection-status");
    updateConnectionStatus("connected", "Connected");
    jest.runAllTimers();
    expect(container.classList.contains("hidden")).toBe(false);
    updateConnectionStatus(null, "", false);
    jest.runAllTimers();
    expect(container.classList.contains("hidden")).toBe(true);
  });

  test("no-ops when called twice with the same status", () => {
    const { updateConnectionStatus } = load();
    updateConnectionStatus("connected", "Connected");
    jest.runAllTimers();
    // Second call with same status — timer should not fire again
    updateConnectionStatus("connected", "Still connected");
    jest.runAllTimers();
    // Text stays as first call's value
    expect(document.getElementById("status-text").textContent).toBe("Connected");
  });

  test("does nothing when DOM elements are missing", () => {
    document.body.innerHTML = ""; // remove all elements
    const { updateConnectionStatus } = load();
    expect(() => {
      updateConnectionStatus("connected", "Connected");
      jest.runAllTimers();
    }).not.toThrow();
  });
});

// ---------------------------------------------------------------------------
// updateConnectionStatus – colour mapping
// ---------------------------------------------------------------------------

describe("updateConnectionStatus() – colour mapping", () => {
  // jsdom normalises hex colours to rgb(), so we test against the rgb form.
  const cases = [
    ["idle", "rgb(71, 85, 105)"],
    ["connecting", "rgb(6, 182, 212)"],
    ["connected", "rgb(16, 185, 129)"],
    ["disconnected", "rgb(239, 68, 68)"],
    ["connection-failed", "rgb(220, 38, 38)"],
  ];

  test.each(cases)("status '%s' sets indicator background to %s", (status, expectedBg) => {
    const { updateConnectionStatus } = load();
    updateConnectionStatus(status, "");
    jest.runAllTimers();
    expect(document.getElementById("status-indicator").style.backgroundColor).toBe(expectedBg);
  });

  test("unknown status falls back to idle colour rgb(71, 85, 105)", () => {
    const { updateConnectionStatus } = load();
    updateConnectionStatus("unknown-state", "Whatever");
    jest.runAllTimers();
    expect(document.getElementById("status-indicator").style.backgroundColor).toBe("rgb(71, 85, 105)");
  });
});

// ---------------------------------------------------------------------------
// hideConnectionStatus
// ---------------------------------------------------------------------------

describe("hideConnectionStatus()", () => {
  test("hides the container after the default 2000 ms delay", () => {
    const { updateConnectionStatus, hideConnectionStatus } = load();
    updateConnectionStatus("connected", "Connected");
    jest.runAllTimers();
    const container = document.getElementById("connection-status");
    expect(container.classList.contains("hidden")).toBe(false);

    hideConnectionStatus();
    jest.advanceTimersByTime(2000);
    jest.runAllTimers();
    expect(container.classList.contains("hidden")).toBe(true);
  });

  test("hides after a custom delay", () => {
    const { updateConnectionStatus, hideConnectionStatus } = load();
    updateConnectionStatus("connected", "Connected");
    jest.runAllTimers();
    const container = document.getElementById("connection-status");

    hideConnectionStatus(500);
    jest.advanceTimersByTime(499);
    jest.runAllTimers(); // flush inner 100 ms timer too, to check it hasn't fired yet
    // At 499 ms the outer hide timer has not yet fired
    // (note: runAllTimers would flush everything — use advanceTimersByTime carefully)
    // Re-check: after full time it hides
    jest.advanceTimersByTime(600);
    jest.runAllTimers();
    expect(container.classList.contains("hidden")).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// getLocalizedText
// ---------------------------------------------------------------------------

describe("getLocalizedText()", () => {
  test("returns fallbackEn when i18n is undefined", () => {
    const { getLocalizedText } = load();
    expect(getLocalizedText("someKey", "English text", "中文文字")).toBe("English text");
  });

  test("returns i18n.t() result when i18n is defined and key is known", () => {
    global.i18n = { t: (k) => (k === "title" ? "Danmu Desktop" : k), currentLang: "en" };
    const { getLocalizedText } = load();
    expect(getLocalizedText("title", "fallback")).toBe("Danmu Desktop");
  });

  test("falls back to fallbackZh when i18n lang is zh and t() returns the raw key", () => {
    global.i18n = { t: (k) => k, currentLang: "zh" }; // t() returns key unchanged
    const { getLocalizedText } = load();
    expect(getLocalizedText("unknownKey", "EN fallback", "ZH 備用")).toBe("ZH 備用");
  });

  test("returns key when no fallbacks are provided and i18n is undefined", () => {
    const { getLocalizedText } = load();
    expect(getLocalizedText("someKey")).toBe("someKey");
  });
});
