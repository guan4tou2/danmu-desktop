// Contract test for the `conn:test` IPC handler. Asserts the handler is
// registered, accepts the expected input shape, and returns one of the
// documented result shapes. Actual WSS handshake behaviour is covered by
// integration/e2e — this test pins the contract.

jest.mock("electron", () => {
  const handlers = new Map();
  return {
    app: {
      whenReady: jest.fn(() => Promise.resolve()),
      on: jest.fn(),
      getVersion: jest.fn(() => "5.0.0"),
      getLocale: jest.fn(() => "en"),
      dock: { setIcon: jest.fn() },
    },
    BrowserWindow: jest.fn(() => ({
      loadURL: jest.fn(() => Promise.resolve()),
      destroy: jest.fn(),
      isDestroyed: jest.fn(() => false),
      webContents: { send: jest.fn() },
    })),
    ipcMain: {
      on: jest.fn(),
      handle: jest.fn((channel, fn) => handlers.set(channel, fn)),
      once: jest.fn(),
      removeListener: jest.fn(),
      __handlers: handlers,
    },
    screen: {
      getAllDisplays: jest.fn(() => []),
      getPrimaryDisplay: jest.fn(() => ({ id: 1 })),
    },
    Tray: jest.fn(() => ({ setContextMenu: jest.fn(), on: jest.fn(), setImage: jest.fn() })),
    Menu: { buildFromTemplate: jest.fn() },
    nativeImage: { createFromPath: jest.fn() },
    shell: { openExternal: jest.fn() },
  };
});

const { ipcMain } = require("electron");
const { setupIpcHandlers } = require("../main-modules/ipc-handlers");

describe("conn:test IPC handler", () => {
  beforeAll(() => {
    const mainWindow = { webContents: { id: 1 }, isDestroyed: () => false };
    setupIpcHandlers(() => mainWindow, []);
  });

  test("registers a handler for `conn:test` channel", () => {
    expect(ipcMain.__handlers.has("conn:test")).toBe(true);
  });

  test("handler signature accepts { host, port, token? } and returns a Promise", () => {
    const handler = ipcMain.__handlers.get("conn:test");
    expect(typeof handler).toBe("function");
    // Invoke with minimal valid input. Don't await — we only need to confirm
    // it returns a Promise. The handler may take real time and we mock the
    // BrowserWindow, so it will resolve to an error / timeout — that's fine.
    const result = handler({}, { host: "danmu.local", port: 443 });
    expect(typeof result.then).toBe("function");
  });

  test("invalid host returns { ok: false, error: 'invalid-input' }", async () => {
    const handler = ipcMain.__handlers.get("conn:test");
    const result = await handler({}, { host: "", port: 443 });
    expect(result).toEqual({ ok: false, error: "invalid-input" });
  });

  test("invalid port returns { ok: false, error: 'invalid-input' }", async () => {
    const handler = ipcMain.__handlers.get("conn:test");
    const result = await handler({}, { host: "danmu.local", port: 0 });
    expect(result).toEqual({ ok: false, error: "invalid-input" });
  });

  test("result shape — error codes are from the documented vocabulary", async () => {
    // We verify the vocabulary by inspecting the handler source: it must
    // map at least these error codes by name. Future hardening will use
    // a fake WS server, but for the contract test source inspection
    // catches drift cheaply.
    const fs = require("fs");
    const path = require("path");
    const src = fs.readFileSync(
      path.join(__dirname, "..", "main-modules", "ipc-handlers.js"),
      "utf8"
    );
    expect(src).toMatch(/error:\s*["']timeout["']/);
    expect(src).toMatch(/error:\s*["']unauthorized["']/);
    expect(src).toMatch(/error:\s*["']connection-refused["']/);
    expect(src).toMatch(/error:\s*["']dns-failure["']/);
    expect(src).toMatch(/error:\s*["']tls-error["']/);
    expect(src).toMatch(/error:\s*["']unknown["']/);
  });
});
