// Tests for window-manager.js child window setup and lifecycle

const mockLoadFile = jest.fn();
const mockSetBounds = jest.fn();
const mockGetBounds = jest.fn(() => ({ x: 0, y: 0, width: 1920, height: 1080 }));
const mockSetAlwaysOnTop = jest.fn();
const mockSetVisibleOnAllWorkspaces = jest.fn();
const mockSetIgnoreMouseEvents = jest.fn();
const mockShow = jest.fn();
const mockOnce = jest.fn();
const mockOn = jest.fn();
const mockExecuteJavaScript = jest.fn(() => Promise.resolve());
const mockFocus = jest.fn();
const mockHide = jest.fn();
const mockIsDestroyed = jest.fn(() => false);
const mockDestroy = jest.fn();
const mockSetPosition = jest.fn();

// Store BrowserWindow constructor calls for inspection
let browserWindowOptions = null;

jest.mock("electron", () => ({
  app: {
    getLocale: jest.fn(() => "en-US"),
    focus: jest.fn(),
  },
  BrowserWindow: jest.fn(function (options) {
    browserWindowOptions = options;
    this.loadFile = mockLoadFile;
    this.setBounds = mockSetBounds;
    this.getBounds = mockGetBounds;
    this.setAlwaysOnTop = mockSetAlwaysOnTop;
    this.setVisibleOnAllWorkspaces = mockSetVisibleOnAllWorkspaces;
    this.setIgnoreMouseEvents = mockSetIgnoreMouseEvents;
    this.show = mockShow;
    this.focus = mockFocus;
    this.hide = mockHide;
    this.once = mockOnce;
    this.on = mockOn;
    this.isDestroyed = mockIsDestroyed;
    this.destroy = mockDestroy;
    this.setPosition = mockSetPosition;
    this.webContents = {
      id: 100,
      on: jest.fn(),
      once: jest.fn(),
      send: jest.fn(),
      executeJavaScript: mockExecuteJavaScript,
      setWindowOpenHandler: jest.fn(),
    };
    return this;
  }),
  screen: {
    getAllDisplays: jest.fn(() => [
      { id: 1, bounds: { x: 0, y: 0, width: 1920, height: 1080 } },
    ]),
    getCursorScreenPoint: jest.fn(() => ({ x: 500, y: 400 })),
  },
}));

const { setupChildWindow } = require("../main-modules/window-manager");

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("window-lifecycle: setupChildWindow", () => {
  let targetWindow;
  let childWindows;
  const display = { id: 1, bounds: { x: 0, y: 0, width: 1920, height: 1080 } };

  beforeEach(() => {
    jest.clearAllMocks();
    browserWindowOptions = null;

    targetWindow = {
      loadFile: mockLoadFile,
      setBounds: mockSetBounds,
      getBounds: mockGetBounds,
      setAlwaysOnTop: mockSetAlwaysOnTop,
      setVisibleOnAllWorkspaces: mockSetVisibleOnAllWorkspaces,
      setIgnoreMouseEvents: mockSetIgnoreMouseEvents,
      show: mockShow,
      once: mockOnce,
      on: mockOn,
      isDestroyed: mockIsDestroyed,
      startupAnimationSettings: null,
      webContents: {
        id: 100,
        on: jest.fn(),
        once: jest.fn(),
        executeJavaScript: mockExecuteJavaScript,
        setWindowOpenHandler: jest.fn(),
      },
    };

    childWindows = [];
  });

  test("setupChildWindow loads child.html", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation();

    setupChildWindow(
      targetWindow, display, "127.0.0.1", 9487, "", null, childWindows
    );

    expect(mockLoadFile).toHaveBeenCalledTimes(1);
    const loadedPath = mockLoadFile.mock.calls[0][0];
    expect(loadedPath).toContain("child.html");

    logSpy.mockRestore();
  });

  test("setupChildWindow injects WS script after did-finish-load", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation();

    setupChildWindow(
      targetWindow, display, "127.0.0.1", 9487, "", null, childWindows
    );

    // webContents.once should have been called with "did-finish-load"
    expect(targetWindow.webContents.once).toHaveBeenCalledWith(
      "did-finish-load",
      expect.any(Function)
    );

    // Simulate did-finish-load
    const didFinishLoadCall = targetWindow.webContents.once.mock.calls.find(
      (c) => c[0] === "did-finish-load"
    );
    const didFinishLoadHandler = didFinishLoadCall[1];
    didFinishLoadHandler();

    // executeJavaScript should have been called with the WS script
    expect(mockExecuteJavaScript).toHaveBeenCalledTimes(1);
    const injectedScript = mockExecuteJavaScript.mock.calls[0][0];
    expect(injectedScript).toContain("127.0.0.1");
    expect(injectedScript).toContain("9487");

    logSpy.mockRestore();
  });

  test("child window closed event removes from childWindows array", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation();

    childWindows.push(targetWindow);

    setupChildWindow(
      targetWindow, display, "127.0.0.1", 9487, "", null, childWindows
    );

    // targetWindow.on should have been called with "closed"
    const closedCall = mockOn.mock.calls.find((c) => c[0] === "closed");
    expect(closedCall).toBeDefined();

    // Simulate the closed event
    const closedHandler = closedCall[1];
    expect(childWindows).toContain(targetWindow);
    closedHandler();
    expect(childWindows).not.toContain(targetWindow);

    logSpy.mockRestore();
  });

  test("ready-to-show sets window properties correctly", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation();

    setupChildWindow(
      targetWindow, display, "127.0.0.1", 9487, "", null, childWindows
    );

    // targetWindow.once should have been called with "ready-to-show"
    const readyCall = mockOnce.mock.calls.find((c) => c[0] === "ready-to-show");
    expect(readyCall).toBeDefined();

    // Simulate ready-to-show
    const readyHandler = readyCall[1];
    readyHandler();

    expect(mockSetBounds).toHaveBeenCalledWith(display.bounds);
    expect(mockSetAlwaysOnTop).toHaveBeenCalledWith(true, "screen-saver");
    expect(mockSetVisibleOnAllWorkspaces).toHaveBeenCalledWith(true, {
      visibleOnFullScreen: true,
    });
    expect(mockSetIgnoreMouseEvents).toHaveBeenCalledWith(true);
    expect(mockShow).toHaveBeenCalledTimes(1);

    logSpy.mockRestore();
  });

  test("setupChildWindow stores startupAnimationSettings on window", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation();
    const animSettings = { enabled: true, type: "domain-expansion" };

    setupChildWindow(
      targetWindow, display, "127.0.0.1", 9487, "", animSettings, childWindows
    );

    // Simulate ready-to-show to trigger the settings assignment
    const readyCall = mockOnce.mock.calls.find((c) => c[0] === "ready-to-show");
    readyCall[1]();

    expect(targetWindow.startupAnimationSettings).toEqual(animSettings);

    logSpy.mockRestore();
  });
});

describe("window-lifecycle: createWindow security options", () => {
  test("createWindow sets correct security webPreferences", () => {
    // Import createWindow fresh — BrowserWindow is already mocked
    const { createWindow } = require("../main-modules/window-manager");

    const logSpy = jest.spyOn(console, "log").mockImplementation();
    const childWindows = [];
    const onKonamiTrigger = jest.fn();

    createWindow(childWindows, onKonamiTrigger);

    // Inspect BrowserWindow constructor options
    expect(browserWindowOptions).toBeDefined();
    expect(browserWindowOptions.webPreferences.nodeIntegration).toBe(false);
    expect(browserWindowOptions.webPreferences.contextIsolation).toBe(true);
    expect(browserWindowOptions.webPreferences.webSecurity).toBe(true);
    expect(browserWindowOptions.webPreferences.allowRunningInsecureContent).toBe(false);
    expect(browserWindowOptions.webPreferences.experimentalFeatures).toBe(false);

    logSpy.mockRestore();
  });
});
