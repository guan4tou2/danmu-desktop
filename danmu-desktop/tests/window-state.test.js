// Tests for window-manager.js main-window bounds persistence (A8).

jest.mock("fs", () => ({
  readFileSync: jest.fn(),
  writeFileSync: jest.fn(),
}));

jest.mock("electron", () => ({
  app: {
    getPath: jest.fn(() => "/tmp/userData"),
  },
  BrowserWindow: jest.fn(),
  screen: {
    getAllDisplays: jest.fn(() => []),
  },
  shell: {},
}));

const fs = require("fs");
const {
  loadWindowState,
  saveWindowState,
  isBoundsOnScreen,
  getWindowStatePath,
} = require("../main-modules/window-manager");

describe("window-state persistence", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("getWindowStatePath joins userData with window-state.json", () => {
    expect(getWindowStatePath()).toBe("/tmp/userData/window-state.json");
  });

  test("loadWindowState returns parsed bounds from disk", () => {
    fs.readFileSync.mockReturnValue(
      JSON.stringify({ x: 10, y: 20, width: 800, height: 900 })
    );
    expect(loadWindowState()).toEqual({ x: 10, y: 20, width: 800, height: 900 });
    expect(fs.readFileSync).toHaveBeenCalledWith(
      "/tmp/userData/window-state.json",
      "utf8"
    );
  });

  test("loadWindowState returns null when file is missing", () => {
    fs.readFileSync.mockImplementation(() => {
      throw new Error("ENOENT");
    });
    expect(loadWindowState()).toBeNull();
  });

  test("loadWindowState returns null on malformed JSON", () => {
    fs.readFileSync.mockReturnValue("{not json");
    expect(loadWindowState()).toBeNull();
  });

  test("loadWindowState rejects a payload without a positive width/height", () => {
    fs.readFileSync.mockReturnValue(JSON.stringify({ x: 0, y: 0, width: 0, height: 900 }));
    expect(loadWindowState()).toBeNull();
  });

  test("saveWindowState writes JSON to the state path", () => {
    saveWindowState({ x: 1, y: 2, width: 800, height: 900 });
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "/tmp/userData/window-state.json",
      JSON.stringify({ x: 1, y: 2, width: 800, height: 900 }),
      "utf8"
    );
  });

  test("saveWindowState ignores an invalid bounds object", () => {
    saveWindowState(null);
    saveWindowState({ width: "big" });
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });

  test("isBoundsOnScreen is true when bounds overlap a display work area", () => {
    const displays = [{ bounds: { x: 0, y: 0, width: 1920, height: 1080 } }];
    expect(
      isBoundsOnScreen({ x: 100, y: 100, width: 800, height: 900 }, displays)
    ).toBe(true);
  });

  test("isBoundsOnScreen is false when bounds sit entirely off every display", () => {
    const displays = [{ bounds: { x: 0, y: 0, width: 1920, height: 1080 } }];
    expect(
      isBoundsOnScreen({ x: 5000, y: 5000, width: 800, height: 900 }, displays)
    ).toBe(false);
  });

  test("isBoundsOnScreen is false when no displays are connected", () => {
    expect(
      isBoundsOnScreen({ x: 0, y: 0, width: 800, height: 900 }, [])
    ).toBe(false);
  });

  test("isBoundsOnScreen prefers workArea over bounds when both exist (F9)", () => {
    // Display's usable workArea starts at y=1000 (e.g. a menu bar / dock
    // reserved region), while the full physical bounds start at y=0. Saved
    // bounds overlap the physical bounds but sit entirely above the workArea,
    // so the window would open under a reserved region — must be rejected.
    const displays = [
      {
        bounds: { x: 0, y: 0, width: 1920, height: 1080 },
        workArea: { x: 0, y: 1000, width: 1920, height: 80 },
      },
    ];
    expect(
      isBoundsOnScreen({ x: 100, y: 0, width: 800, height: 900 }, displays)
    ).toBe(false);
  });
});
