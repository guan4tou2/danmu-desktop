// Verify setupIpcHandlers has a duplication guard
const { ipcMain } = require("electron");

jest.mock("electron", () => ({
  app: { whenReady: jest.fn(() => Promise.resolve()), on: jest.fn(), dock: { setIcon: jest.fn() } },
  BrowserWindow: jest.fn(),
  ipcMain: { on: jest.fn(), handle: jest.fn() },
  screen: { getAllDisplays: jest.fn(() => []) },
  Tray: jest.fn(() => ({ setContextMenu: jest.fn(), on: jest.fn(), setImage: jest.fn() })),
  Menu: { buildFromTemplate: jest.fn() },
  nativeImage: { createFromPath: jest.fn() },
}));

const { setupIpcHandlers } = require("../main-modules/ipc-handlers");

describe("setupIpcHandlers duplication guard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  test("calling setupIpcHandlers twice should not double-register handlers", () => {
    // Re-require after reset to get fresh module state
    jest.mock("electron", () => ({
      app: { whenReady: jest.fn(() => Promise.resolve()), on: jest.fn(), dock: { setIcon: jest.fn() } },
      BrowserWindow: jest.fn(),
      ipcMain: { on: jest.fn(), handle: jest.fn() },
      screen: { getAllDisplays: jest.fn(() => []) },
      Tray: jest.fn(() => ({ setContextMenu: jest.fn(), on: jest.fn(), setImage: jest.fn() })),
      Menu: { buildFromTemplate: jest.fn() },
      nativeImage: { createFromPath: jest.fn() },
    }));
    const { ipcMain: freshIpcMain } = require("electron");
    const { setupIpcHandlers: freshSetup } = require("../main-modules/ipc-handlers");

    const mainWindow = { webContents: { id: 1 } };
    const childWindows = [];

    freshSetup(() => mainWindow, childWindows);
    const firstCallCount = freshIpcMain.on.mock.calls.length + freshIpcMain.handle.mock.calls.length;

    freshSetup(() => mainWindow, childWindows);
    const secondCallCount = freshIpcMain.on.mock.calls.length + freshIpcMain.handle.mock.calls.length;

    // Second call should NOT add more handlers
    expect(secondCallCount).toBe(firstCallCount);
  });
});
