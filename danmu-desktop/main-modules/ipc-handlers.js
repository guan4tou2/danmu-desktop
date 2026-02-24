// All IPC event handler definitions
const { ipcMain, screen, app } = require("electron");
const { BrowserWindow } = require("electron");
const path = require("path");
const { sanitizeLog } = require("../shared/utils");
const { setupChildWindow } = require("./window-manager");

/**
 * Returns true if the IPC event sender is the main window's webContents.
 * Prevents other renderer processes from triggering privileged IPC handlers.
 */
function isFromMainWindow(event, mainWindow) {
  return (
    mainWindow &&
    !mainWindow.isDestroyed() &&
    event.sender === mainWindow.webContents
  );
}

/**
 * Returns true if the IPC event sender is one of the known child windows.
 */
function isFromChildWindow(event, childWindows) {
  return childWindows.some(
    (win) => win && !win.isDestroyed() && event.sender === win.webContents
  );
}

/**
 * Validates numeric IPC parameters to prevent injection through non-string fields.
 */
function validateDanmuParams(data) {
  const opacity = Number(data.opacity);
  const size = Number(data.size);
  const speed = Number(data.speed);

  if (
    !Number.isFinite(opacity) || opacity < 0 || opacity > 100 ||
    !Number.isFinite(size) || size <= 0 || size > 500 ||
    !Number.isFinite(speed) || speed < 1 || speed > 10
  ) {
    return null;
  }

  return { opacity, size, speed };
}

/**
 * Registers all ipcMain handlers for the application.
 * @param {BrowserWindow} mainWindow
 * @param {Object[]} childWindows - Mutable array of child windows
 */
function setupIpcHandlers(mainWindow, childWindows) {
  // Close all child windows — must originate from the main window
  ipcMain.on("closeChildWindows", (event) => {
    if (!isFromMainWindow(event, mainWindow)) {
      console.warn("[Main] closeChildWindows: rejected IPC from untrusted sender");
      return;
    }
    [...childWindows].forEach((win) => {
      if (win && !win.isDestroyed()) {
        win.destroy();
      }
    });
    childWindows.length = 0;
    console.log("[Main] All child windows destroyed on closeChildWindows event.");
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("overlay-connection-status", {
        status: "stopped",
      });
    }
  });

  // Forward connection status from child windows to main window
  ipcMain.on("overlay-connection-status", (event, data) => {
    if (!isFromChildWindow(event, childWindows)) {
      console.warn("[Main] overlay-connection-status: rejected IPC from untrusted sender");
      return;
    }
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("overlay-connection-status", data);
    }
  });

  // Get all displays — restricted to main window
  ipcMain.handle("getDisplays", async (event) => {
    if (!isFromMainWindow(event, mainWindow)) {
      console.warn("[Main] getDisplays: rejected IPC from untrusted sender");
      return [];
    }
    const displays = screen.getAllDisplays();
    const sanitizedDisplays = displays.map((d) => ({
      ...d,
      id: sanitizeLog(d.id),
    }));
    console.log("[Main] getDisplays handled, returning:", sanitizedDisplays);
    return displays;
  });

  // Get system locale — restricted to main window
  ipcMain.handle("getSystemLocale", async (event) => {
    if (!isFromMainWindow(event, mainWindow)) {
      console.warn("[Main] getSystemLocale: rejected IPC from untrusted sender");
      return "";
    }
    const locale = app.getLocale();
    console.log(
      "[Main] getSystemLocale handled, returning:",
      sanitizeLog(locale)
    );
    return locale;
  });

  // Send test danmu to all child windows — restricted to main window
  ipcMain.on("send-test-danmu", (event, data) => {
    if (!isFromMainWindow(event, mainWindow)) {
      console.warn("[Main] send-test-danmu: rejected IPC from untrusted sender");
      return;
    }
    if (!data || typeof data !== "object") {
      console.warn("[Main] send-test-danmu: invalid data payload");
      return;
    }

    const validated = validateDanmuParams(data);
    if (!validated) {
      console.warn("[Main] send-test-danmu: numeric parameter validation failed");
      return;
    }
    const { opacity, size, speed } = validated;

    console.log("[Main] send-test-danmu received:", data);
    childWindows.forEach((win) => {
      if (win && !win.isDestroyed()) {
        win.webContents
          .executeJavaScript(
            `
          if (typeof window.showdanmu === 'function') {
            window.showdanmu(
              ${JSON.stringify(data.text)},
              ${opacity},
              ${JSON.stringify(data.color)},
              ${size},
              ${speed},
              { name: "NotoSansTC", url: null, type: "default" },
              ${JSON.stringify(
                data.textStyles || {
                  textStroke: true,
                  strokeWidth: 2,
                  strokeColor: "#000000",
                  textShadow: false,
                  shadowBlur: 4,
                }
              )},
              ${JSON.stringify(
                data.displayArea || {
                  top: 0,
                  height: 100,
                }
              )}
            );
          }
        `
          )
          .catch((err) => {
            console.error(
              "[Main] Error sending test danmu:",
              sanitizeLog(err.message)
            );
          });
      }
    });
  });

  // Update overlay settings on all child windows — restricted to main window
  ipcMain.on("update-overlay-settings", (event, settings) => {
    if (!isFromMainWindow(event, mainWindow)) {
      console.warn("[Main] update-overlay-settings: rejected IPC from untrusted sender");
      return;
    }
    if (!settings || typeof settings !== "object") {
      console.warn("[Main] update-overlay-settings: invalid settings payload");
      return;
    }

    const opacity = Number(settings.opacity);
    if (!Number.isFinite(opacity) || opacity < 0 || opacity > 100) {
      console.warn("[Main] update-overlay-settings: opacity out of range");
      return;
    }

    console.log("[Main] update-overlay-settings received");
    childWindows.forEach((win) => {
      if (win && !win.isDestroyed()) {
        win.setOpacity(opacity / 100);
        win.webContents
          .executeJavaScript(
            `
          window.defaultDanmuSettings = ${JSON.stringify(settings)};
          console.log("[Overlay] Default danmu settings updated");
        `
          )
          .catch((err) => {
            console.error(
              "[Main] Error updating overlay settings:",
              sanitizeLog(err.message)
            );
          });
      }
    });
  });

  // Create child overlay windows — restricted to main window
  ipcMain.on(
    "createChild",
    (event, ip, port, displayIndex, enableSyncMultiDisplay, startupAnimationSettings) => {
      if (!isFromMainWindow(event, mainWindow)) {
        console.warn("[Main] createChild: rejected IPC from untrusted sender");
        return;
      }
      if (typeof ip !== "string" || !ip) {
        console.warn(
          `[Main] createChild: invalid IP address type: ${typeof ip}`
        );
        return;
      }
      const portNum = Number(port);
      if (!Number.isInteger(portNum) || portNum < 1 || portNum > 65535) {
        console.warn("[Main] createChild: port out of valid range");
        return;
      }
      console.log(
        `[Main] createChild IPC received: IP=${sanitizeLog(ip)}, Port=${sanitizeLog(
          port
        )}, DisplayIndex=${sanitizeLog(displayIndex)}, SyncMultiDisplay=${enableSyncMultiDisplay}`
      );

      // Clear existing child windows
      childWindows.forEach((win) => {
        if (win && !win.isDestroyed()) {
          win.destroy();
        }
      });
      childWindows.length = 0;
      console.log("[Main] Cleared existing child windows before creating new ones.");

      const displays = screen.getAllDisplays();
      console.log(`[Main] Detected ${displays.length} displays.`);

      const childWindowOptions = {
        closable: false,
        skipTaskbar: true,
        transparent: true,
        frame: false,
        resizable: false,
        icon: path.join(__dirname, "../assets/icon.png"),
        webPreferences: {
          preload: path.join(__dirname, "../dist/preload.bundle.js"),
          nodeIntegration: false,
          contextIsolation: true,
          webSecurity: true,
          allowRunningInsecureContent: false,
          experimentalFeatures: false,
        },
      };

      if (enableSyncMultiDisplay) {
        console.log("[Main] Sync multi-display ENABLED. Creating windows for all displays.");
        displays.forEach((display, index) => {
          console.log(
            `[Main] Creating child window for display ${index} (ID: ${sanitizeLog(display.id)}).`
          );
          const newChild = new BrowserWindow(childWindowOptions);
          setupChildWindow(
            newChild,
            display,
            ip,
            port,
            startupAnimationSettings,
            childWindows
          );
          childWindows.push(newChild);
        });
        console.log(
          `[Main] Created ${childWindows.length} child windows for sync multi-display.`
        );
      } else {
        console.log("[Main] Sync multi-display DISABLED. Creating window for selected display.");
        if (displayIndex < 0 || displayIndex >= displays.length) {
          console.error(
            "[Main] Invalid display index:",
            sanitizeLog(displayIndex)
          );
          return;
        }
        const selectedDisplay = displays[displayIndex];
        console.log(
          `[Main] Creating child window for selected display ${sanitizeLog(
            displayIndex
          )} (ID: ${sanitizeLog(selectedDisplay.id)}).`
        );
        const newChild = new BrowserWindow(childWindowOptions);
        setupChildWindow(
          newChild,
          selectedDisplay,
          ip,
          port,
          startupAnimationSettings,
          childWindows
        );
        childWindows.push(newChild);
        console.log("[Main] Created 1 child window for single display mode.");
      }
    }
  );
}

module.exports = { setupIpcHandlers };
