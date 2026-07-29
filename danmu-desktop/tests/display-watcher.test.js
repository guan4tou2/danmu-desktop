// Tests for main-modules/display-watcher.js — hotplug reconciliation.
// The pure layer (plan/build/debounce) needs no Electron; setupDisplayWatcher
// takes `screen` via injection, so a plain EventEmitter stands in.

const { EventEmitter } = require("events");
const {
  DISPLAY_DEBOUNCE_MS,
  createTrailingDebounce,
  buildDisplayOptions,
  planOverlayReconciliation,
  setupDisplayWatcher,
} = require("../main-modules/display-watcher");

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

function makeDisplay(id, { x = 0, y = 0, width = 1920, height = 1080, label = "", primary = false } = {}) {
  return {
    id,
    label,
    bounds: { x, y, width, height },
    workArea: { x, y: y + 25, width, height: height - 25 },
    size: { width, height },
    scaleFactor: 2,
    _primary: primary,
  };
}

const PRIMARY = makeDisplay(1, { label: "Built-in", primary: true });
const SECOND = makeDisplay(2, { x: 1920, label: "HDMI" });

// ---------------------------------------------------------------------------
// buildDisplayOptions
// ---------------------------------------------------------------------------

describe("buildDisplayOptions", () => {
  test("produces the getDisplays sanitized shape with primary flag", () => {
    const out = buildDisplayOptions([PRIMARY, SECOND], 1);
    expect(out).toHaveLength(2);
    // Exactly the fields the getDisplays invoke handler returns — no extras
    expect(Object.keys(out[0]).sort()).toEqual(
      ["bounds", "id", "label", "primary", "scaleFactor", "size", "workArea"]
    );
    expect(out[0]).toMatchObject({ id: 1, label: "Built-in", primary: true });
    expect(out[1]).toMatchObject({ id: 2, label: "HDMI", primary: false });
    expect(out[1].bounds).toEqual({ x: 1920, y: 0, width: 1920, height: 1080 });
  });

  test("empty label falls back to empty string", () => {
    const noLabel = makeDisplay(3);
    delete noLabel.label;
    expect(buildDisplayOptions([noLabel], 3)[0].label).toBe("");
  });
});

// ---------------------------------------------------------------------------
// planOverlayReconciliation
// ---------------------------------------------------------------------------

describe("planOverlayReconciliation", () => {
  test("metrics change → move with the display's new bounds", () => {
    const moved = makeDisplay(2, { x: 1920, width: 2560, height: 1440 });
    const plan = planOverlayReconciliation({
      children: [{ key: 0, displayId: 2, bounds: { x: 1920, y: 0, width: 1920, height: 1080 } }],
      displays: [PRIMARY, moved],
      primaryDisplayId: 1,
      syncMultiDisplay: false,
    });
    expect(plan.moves).toEqual([{ key: 0, bounds: moved.bounds }]);
    expect(plan.migrations).toEqual([]);
    expect(plan.destroys).toEqual([]);
    expect(plan.additions).toEqual([]);
  });

  test("identical bounds → no-op", () => {
    const plan = planOverlayReconciliation({
      children: [{ key: 0, displayId: 1, bounds: { ...PRIMARY.bounds } }],
      displays: [PRIMARY, SECOND],
      primaryDisplayId: 1,
      syncMultiDisplay: false,
    });
    expect(plan).toEqual({ moves: [], migrations: [], destroys: [], additions: [] });
  });

  test("removed display in single mode → migration to primary bounds", () => {
    const plan = planOverlayReconciliation({
      children: [{ key: 0, displayId: 2, bounds: { ...SECOND.bounds } }],
      displays: [PRIMARY],
      primaryDisplayId: 1,
      syncMultiDisplay: false,
    });
    expect(plan.migrations).toEqual([
      { key: 0, toDisplayId: 1, bounds: PRIMARY.bounds },
    ]);
    expect(plan.destroys).toEqual([]);
  });

  test("removed display in sync mode → destroy, NOT migration", () => {
    const plan = planOverlayReconciliation({
      children: [
        { key: 0, displayId: 1, bounds: { ...PRIMARY.bounds } },
        { key: 1, displayId: 2, bounds: { ...SECOND.bounds } },
      ],
      displays: [PRIMARY],
      primaryDisplayId: 1,
      syncMultiDisplay: true,
    });
    expect(plan.destroys).toEqual([1]);
    expect(plan.migrations).toEqual([]);
  });

  test("sync mode with a newly added display → additions entry", () => {
    const plan = planOverlayReconciliation({
      children: [{ key: 0, displayId: 1, bounds: { ...PRIMARY.bounds } }],
      displays: [PRIMARY, SECOND],
      primaryDisplayId: 1,
      syncMultiDisplay: true,
    });
    expect(plan.additions).toEqual([2]);
  });

  test("single mode never emits additions", () => {
    const plan = planOverlayReconciliation({
      children: [{ key: 0, displayId: 1, bounds: { ...PRIMARY.bounds } }],
      displays: [PRIMARY, SECOND],
      primaryDisplayId: 1,
      syncMultiDisplay: false,
    });
    expect(plan.additions).toEqual([]);
  });

  test("no displays → empty plan (nothing to reconcile against)", () => {
    const plan = planOverlayReconciliation({
      children: [{ key: 0, displayId: 1, bounds: { ...PRIMARY.bounds } }],
      displays: [],
      primaryDisplayId: 1,
      syncMultiDisplay: false,
    });
    expect(plan).toEqual({ moves: [], migrations: [], destroys: [], additions: [] });
  });
});

// ---------------------------------------------------------------------------
// createTrailingDebounce
// ---------------------------------------------------------------------------

describe("createTrailingDebounce", () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  test("trailing-edge only: burst of triggers → single call after the delay", () => {
    const fn = jest.fn();
    const d = createTrailingDebounce(fn, DISPLAY_DEBOUNCE_MS);
    for (let i = 0; i < 5; i++) d.trigger();
    expect(fn).not.toHaveBeenCalled();
    jest.advanceTimersByTime(DISPLAY_DEBOUNCE_MS);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("cancel drops a pending call", () => {
    const fn = jest.fn();
    const d = createTrailingDebounce(fn, DISPLAY_DEBOUNCE_MS);
    d.trigger();
    d.cancel();
    jest.advanceTimersByTime(DISPLAY_DEBOUNCE_MS);
    expect(fn).not.toHaveBeenCalled();
  });

  test("flush runs a pending call immediately, and only once", () => {
    const fn = jest.fn();
    const d = createTrailingDebounce(fn, DISPLAY_DEBOUNCE_MS);
    d.trigger();
    d.flush();
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(DISPLAY_DEBOUNCE_MS);
    expect(fn).toHaveBeenCalledTimes(1);
    // flush with nothing pending is a no-op
    d.flush();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

// ---------------------------------------------------------------------------
// setupDisplayWatcher — integration on stubbed screen/windows
// ---------------------------------------------------------------------------

function makeFakeScreen(displays, primary) {
  const screen = new EventEmitter();
  screen.getAllDisplays = jest.fn(() => displays.current);
  screen.getPrimaryDisplay = jest.fn(() => primary.current);
  return screen;
}

function makeStubWindow(displayId, bounds) {
  const calls = [];
  return {
    overlayDisplayId: displayId,
    _calls: calls,
    isDestroyed: jest.fn(() => false),
    getBounds: jest.fn(() => bounds),
    setBounds: jest.fn((b) => calls.push(["setBounds", b])),
    setResizable: jest.fn((v) => calls.push(["setResizable", v])),
    destroy: jest.fn(() => calls.push(["destroy"])),
  };
}

describe("setupDisplayWatcher", () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  function boot({ displays, primary, childWindows = [], session = null, createOverlayForDisplay = jest.fn() }) {
    const displaysRef = { current: displays };
    const primaryRef = { current: primary };
    const screen = makeFakeScreen(displaysRef, primaryRef);
    const webContentsSend = jest.fn();
    const mainWindow = {
      isDestroyed: () => false,
      webContents: { send: webContentsSend },
    };
    const watcher = setupDisplayWatcher({
      screen,
      getMainWindow: () => mainWindow,
      childWindows,
      getOverlaySession: () => session,
      createOverlayForDisplay,
    });
    return { screen, webContentsSend, watcher, displaysRef, primaryRef, createOverlayForDisplay };
  }

  test("5 metrics-changed events within the debounce window → exactly one reconcile + E1 re-emit", () => {
    const { screen, webContentsSend } = boot({ displays: [PRIMARY, SECOND], primary: PRIMARY });
    for (let i = 0; i < 5; i++) screen.emit("display-metrics-changed");
    expect(webContentsSend).not.toHaveBeenCalled();
    jest.advanceTimersByTime(DISPLAY_DEBOUNCE_MS);
    expect(webContentsSend).toHaveBeenCalledTimes(1);
    const [channel, payload] = webContentsSend.mock.calls[0];
    expect(channel).toBe("update-display-options");
    expect(payload.map((d) => d.id)).toEqual([1, 2]);
    expect(payload[0].primary).toBe(true);
  });

  test("vanished display (single mode): setResizable(true)/setBounds/setResizable(false) order, stamp update, migration toast", () => {
    const win = makeStubWindow(2, { ...SECOND.bounds });
    const { screen, webContentsSend } = boot({
      displays: [PRIMARY],
      primary: PRIMARY,
      childWindows: [win],
      session: { ip: "h", port: 1, token: "", syncMultiDisplay: false },
    });
    screen.emit("display-removed");
    jest.advanceTimersByTime(DISPLAY_DEBOUNCE_MS);

    // Overlay windows are resizable:false — bounds change is wrapped
    expect(win._calls).toEqual([
      ["setResizable", true],
      ["setBounds", PRIMARY.bounds],
      ["setResizable", false],
    ]);
    expect(win.overlayDisplayId).toBe(1);

    const statusCalls = webContentsSend.mock.calls.filter(
      ([ch]) => ch === "overlay-connection-status"
    );
    expect(statusCalls).toEqual([
      ["overlay-connection-status", { status: "display-migrated", migrated: 1, removed: 0 }],
    ]);
  });

  test("vanished display (sync mode): orphan destroyed, primary overlay untouched, removed counted in toast", () => {
    const primaryWin = makeStubWindow(1, { ...PRIMARY.bounds });
    const orphan = makeStubWindow(2, { ...SECOND.bounds });
    const { screen, webContentsSend } = boot({
      displays: [PRIMARY],
      primary: PRIMARY,
      childWindows: [primaryWin, orphan],
      session: { ip: "h", port: 1, token: "", syncMultiDisplay: true },
    });
    screen.emit("display-removed");
    jest.advanceTimersByTime(DISPLAY_DEBOUNCE_MS);

    expect(orphan.destroy).toHaveBeenCalledTimes(1);
    expect(primaryWin.setBounds).not.toHaveBeenCalled();
    expect(primaryWin.destroy).not.toHaveBeenCalled();
    const statusCalls = webContentsSend.mock.calls.filter(
      ([ch]) => ch === "overlay-connection-status"
    );
    expect(statusCalls[0][1]).toEqual({ status: "display-migrated", migrated: 0, removed: 1 });
  });

  test("sync mode addition: creates an overlay only when a session is stored", () => {
    const primaryWin = makeStubWindow(1, { ...PRIMARY.bounds });
    const session = { ip: "h", port: 1, token: "", syncMultiDisplay: true };
    const { screen, createOverlayForDisplay } = boot({
      displays: [PRIMARY, SECOND],
      primary: PRIMARY,
      childWindows: [primaryWin],
      session,
    });
    screen.emit("display-added");
    jest.advanceTimersByTime(DISPLAY_DEBOUNCE_MS);
    expect(createOverlayForDisplay).toHaveBeenCalledTimes(1);
    expect(createOverlayForDisplay).toHaveBeenCalledWith(SECOND, session);
  });

  test("no session (overlay stopped) → no auto-created overlays, no toast", () => {
    const { screen, webContentsSend, createOverlayForDisplay } = boot({
      displays: [PRIMARY, SECOND],
      primary: PRIMARY,
      childWindows: [],
      session: null,
    });
    screen.emit("display-added");
    jest.advanceTimersByTime(DISPLAY_DEBOUNCE_MS);
    expect(createOverlayForDisplay).not.toHaveBeenCalled();
    const statusCalls = webContentsSend.mock.calls.filter(
      ([ch]) => ch === "overlay-connection-status"
    );
    expect(statusCalls).toEqual([]);
    // E1 still fires — the display list itself changed
    expect(webContentsSend).toHaveBeenCalledWith("update-display-options", expect.any(Array));
  });

  test("dispose removes listeners and cancels the pending debounce", () => {
    const { screen, webContentsSend, watcher } = boot({ displays: [PRIMARY], primary: PRIMARY });
    screen.emit("display-metrics-changed");
    watcher.dispose();
    jest.advanceTimersByTime(DISPLAY_DEBOUNCE_MS);
    expect(webContentsSend).not.toHaveBeenCalled();
    expect(screen.listenerCount("display-added")).toBe(0);
    expect(screen.listenerCount("display-removed")).toBe(0);
    expect(screen.listenerCount("display-metrics-changed")).toBe(0);
  });
});
