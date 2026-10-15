/** @jest-environment node */

describe("ad-hoc Mac update delivery", () => {
  let events, ipc, updater, shell, sent, originalPlatform;
  beforeEach(() => {
    jest.resetModules();
    jest.useFakeTimers();
    originalPlatform = Object.getOwnPropertyDescriptor(process, "platform");
    Object.defineProperty(process, "platform", { value: "darwin" });
    events = {};
    ipc = {};
    updater = {
      on: jest.fn((event, handler) => { events[event] = handler; }),
      downloadUpdate: jest.fn().mockResolvedValue([]),
      checkForUpdates: jest.fn().mockResolvedValue({}),
      quitAndInstall: jest.fn(),
    };
    shell = { openExternal: jest.fn().mockResolvedValue() };
    sent = jest.fn();
    jest.doMock("electron-updater", () => ({ autoUpdater: updater }));
    jest.doMock("electron", () => ({
      app: { getPath: () => "/tmp/mac-update-test" },
      shell,
      ipcMain: { on: (event, handler) => { ipc[event] = handler; } },
    }));
    jest.doMock("fs", () => ({
      readFileSync: () => { throw new Error("no saved state"); },
      writeFileSync: jest.fn(),
    }));
  });
  afterEach(() => {
    Object.defineProperty(process, "platform", originalPlatform);
    jest.useRealTimers();
    jest.dontMock("fs");
    jest.dontMock("electron");
    jest.dontMock("electron-updater");
  });

  function start() {
    const win = { isDestroyed: () => false, webContents: { send: sent } };
    require("../main-modules/auto-updater").setupAutoUpdater(() => win);
    return win;
  }

  test("offers a release download without claiming Squirrel can install it", () => {
    const win = start();
    events["update-available"]({ version: "5.4.2" });
    expect(sent).toHaveBeenLastCalledWith("update:status", expect.objectContaining({
      phase: "available", manualInstall: true, version: "5.4.2",
    }));
    expect(updater.downloadUpdate).not.toHaveBeenCalled();
    events["update-downloaded"]({ version: "5.4.2" });
    expect(updater.autoInstallOnAppQuit).toBe(false);
    ipc["update:action"]({ sender: win.webContents }, { action: "install", version: "untrusted" });
    expect(shell.openExternal).toHaveBeenCalledWith("https://github.com/guan4tou2/danmu-desktop/releases/tag/v5.4.2");
    expect(updater.quitAndInstall).not.toHaveBeenCalled();
  });

  test("does not open downloads before an update exists or from an untrusted window", () => {
    const win = start();
    ipc["update:action"]({ sender: win.webContents }, { action: "install" });
    events["update-available"]({ version: "5.4.2" });
    ipc["update:action"]({ sender: {} }, { action: "install" });
    expect(shell.openExternal).not.toHaveBeenCalled();
  });

  test("preserves native updater behavior on other platforms", () => {
    Object.defineProperty(process, "platform", { value: "linux" });
    const win = start();
    events["update-available"]({ version: "5.4.2" });
    expect(updater.downloadUpdate).toHaveBeenCalledTimes(1);
    events["update-downloaded"]({ version: "5.4.2" });
    ipc["update:action"]({ sender: win.webContents }, { action: "install" });
    expect(updater.quitAndInstall).toHaveBeenCalledWith(false, true);
    expect(shell.openExternal).not.toHaveBeenCalled();
  });
});
