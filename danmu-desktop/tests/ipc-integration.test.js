// Tests for main-modules/ipc-handlers.js integration
// Simulates ipcMain/ipcRenderer communication patterns

// ---------------------------------------------------------------------------
// Mock Electron modules before requiring ipc-handlers
// ---------------------------------------------------------------------------
const mockIpcMainOn = jest.fn();
const mockIpcMainHandle = jest.fn();
const mockDisplays = [
  { id: 1, bounds: { x: 0, y: 0, width: 1920, height: 1080 }, size: { width: 1920, height: 1080 } },
  { id: 2, bounds: { x: 1920, y: 0, width: 2560, height: 1440 }, size: { width: 2560, height: 1440 } },
];
const mockScreenGetAllDisplays = jest.fn(() => mockDisplays);
const mockScreenGetPrimaryDisplay = jest.fn(() => mockDisplays[0]);
const mockAppGetLocale = jest.fn(() => "en-US");

jest.mock("electron", () => ({
  ipcMain: {
    on: mockIpcMainOn,
    handle: mockIpcMainHandle,
  },
  screen: {
    getAllDisplays: mockScreenGetAllDisplays,
    getPrimaryDisplay: mockScreenGetPrimaryDisplay,
  },
  app: {
    getLocale: mockAppGetLocale,
  },
  BrowserWindow: jest.fn(),
}));

// Mock window-manager's setupChildWindow (used by createChild handler)
jest.mock("../main-modules/window-manager", () => ({
  setupChildWindow: jest.fn(),
}));

let setupIpcHandlers;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * After setupIpcHandlers is called, extract a registered handler by channel name.
 * ipcMain.on calls are stored in mockIpcMainOn.mock.calls.
 * ipcMain.handle calls are stored in mockIpcMainHandle.mock.calls.
 */
function findOnHandler(channel) {
  const call = mockIpcMainOn.mock.calls.find((c) => c[0] === channel);
  return call ? call[1] : null;
}

function findHandleHandler(channel) {
  const call = mockIpcMainHandle.mock.calls.find((c) => c[0] === channel);
  return call ? call[1] : null;
}

/** Create a mock IPC event with a given sender webContents id. */
function makeEvent(senderId) {
  return { sender: { id: senderId } };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("ipc-handlers integration", () => {
  let mainWindow;
  let childWindows;
  let getMainWindow;

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset module registry so _ipcRegistered guard starts fresh for each test
    jest.resetModules();
    ({ setupIpcHandlers } = require("../main-modules/ipc-handlers"));

    mainWindow = {
      webContents: { id: 1, send: jest.fn() },
      isDestroyed: jest.fn(() => false),
    };

    childWindows = [];

    // getMainWindow is a getter function (see ipc-handlers.js signature)
    getMainWindow = () => mainWindow;

    setupIpcHandlers(getMainWindow, childWindows);
  });

  test("setupIpcHandlers registers all expected channels", () => {
    const onChannels = mockIpcMainOn.mock.calls.map((c) => c[0]);
    const handleChannels = mockIpcMainHandle.mock.calls.map((c) => c[0]);

    // ipcMain.on channels
    expect(onChannels).toContain("closeChildWindows");
    expect(onChannels).toContain("overlay-connection-status");
    expect(onChannels).toContain("send-test-danmu");
    expect(onChannels).toContain("update-overlay-settings");
    expect(onChannels).toContain("createChild");

    // ipcMain.handle channels
    expect(handleChannels).toContain("getDisplays");
    expect(handleChannels).toContain("getSystemLocale");
  });

  test("createChild IPC validates IP address", () => {
    const handler = findOnHandler("createChild");
    const event = { sender: mainWindow.webContents };
    const warnSpy = jest.spyOn(console, "warn").mockImplementation();

    // Invalid IP should be rejected
    handler(event, "not valid!", 9487, 0, false, null, "");

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("invalid IP address")
    );

    warnSpy.mockRestore();
  });

  test("send-test-danmu validates params and forwards to child windows", () => {
    const handler = findOnHandler("send-test-danmu");
    const event = { sender: mainWindow.webContents };

    // Set up a mock child window
    const mockChild = {
      isDestroyed: jest.fn(() => false),
      webContents: {
        id: 99,
        executeJavaScript: jest.fn(() => Promise.resolve()),
      },
    };
    childWindows.push(mockChild);

    const logSpy = jest.spyOn(console, "log").mockImplementation();

    handler(event, {
      text: "test danmu",
      opacity: 80,
      color: "#ff0000",
      size: 40,
      speed: 5,
    });

    expect(mockChild.webContents.executeJavaScript).toHaveBeenCalledTimes(1);
    const injectedScript = mockChild.webContents.executeJavaScript.mock.calls[0][0];
    expect(injectedScript).toContain("window.showdanmu");
    expect(injectedScript).toContain("test danmu");

    logSpy.mockRestore();
  });

  test("send-test-danmu rejects invalid opacity/size/speed", () => {
    const handler = findOnHandler("send-test-danmu");
    const event = { sender: mainWindow.webContents };
    const warnSpy = jest.spyOn(console, "warn").mockImplementation();

    // Opacity out of range (>100)
    handler(event, {
      text: "test",
      opacity: 150,
      color: "#ffffff",
      size: 40,
      speed: 5,
    });
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("numeric parameter validation failed")
    );

    warnSpy.mockClear();

    // Size out of range (0)
    handler(event, {
      text: "test",
      opacity: 50,
      color: "#ffffff",
      size: 0,
      speed: 5,
    });
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("numeric parameter validation failed")
    );

    warnSpy.mockClear();

    // Speed out of range (>10)
    handler(event, {
      text: "test",
      opacity: 50,
      color: "#ffffff",
      size: 40,
      speed: 99,
    });
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("numeric parameter validation failed")
    );

    warnSpy.mockRestore();
  });

  test("closeChildWindows destroys all child windows", () => {
    const handler = findOnHandler("closeChildWindows");
    const event = { sender: mainWindow.webContents };

    const child1 = { isDestroyed: jest.fn(() => false), destroy: jest.fn() };
    const child2 = { isDestroyed: jest.fn(() => false), destroy: jest.fn() };
    childWindows.push(child1, child2);

    const logSpy = jest.spyOn(console, "log").mockImplementation();

    handler(event);

    expect(child1.destroy).toHaveBeenCalledTimes(1);
    expect(child2.destroy).toHaveBeenCalledTimes(1);
    expect(childWindows.length).toBe(0);

    // Main window should receive stopped status
    expect(mainWindow.webContents.send).toHaveBeenCalledWith(
      "overlay-connection-status",
      { status: "stopped" }
    );

    logSpy.mockRestore();
  });

  test("getDisplays returns display list", async () => {
    const handler = findHandleHandler("getDisplays");
    const event = { sender: mainWindow.webContents };

    const displays = await handler(event);

    expect(displays).toHaveLength(2);
    expect(displays[0].id).toBe(1);
    expect(displays[1].bounds.width).toBe(2560);
  });

  test("sender validation rejects unknown senders", () => {
    const handler = findOnHandler("closeChildWindows");
    // Event from an unknown sender (different webContents id)
    const unknownEvent = { sender: { id: 999 } };
    const warnSpy = jest.spyOn(console, "warn").mockImplementation();

    handler(unknownEvent);

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("rejected IPC from untrusted sender")
    );

    // No child windows should have been destroyed
    const child = { isDestroyed: jest.fn(() => false), destroy: jest.fn() };
    childWindows.push(child);

    handler(unknownEvent);
    expect(child.destroy).not.toHaveBeenCalled();

    warnSpy.mockRestore();
  });
});
