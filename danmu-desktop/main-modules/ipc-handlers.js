// All IPC event handler definitions
const { ipcMain, screen, app } = require("electron");
const { BrowserWindow } = require("electron");
const net = require("net");
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
 * Validates numeric IPC parameters and color format to prevent injection.
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

  // 驗證顏色格式必須為合法的 CSS 十六進位色碼，防止非預期值注入
  const colorRegex = /^#[0-9a-fA-F]{6}$/;
  const color = typeof data.color === "string" ? data.color : "#ffffff";
  const validatedColor = colorRegex.test(color) ? color : "#ffffff";

  return { opacity, size, speed, color: validatedColor };
}

function isValidIpAddress(ip) {
  if (typeof ip !== "string") {
    return false;
  }
  const trimmed = ip.trim();
  if (!trimmed) {
    return false;
  }
  return trimmed === "localhost" || net.isIP(trimmed) !== 0;
}

let _ipcRegistered = false;

/**
 * Registers all ipcMain handlers for the application.
 * Guarded against duplicate registration (e.g. on macOS activate event).
 * @param {Function} getMainWindow - Getter that returns the current main window
 * @param {Object[]} childWindows - Mutable array of child windows
 */
function setupIpcHandlers(getMainWindow, childWindows) {
  if (_ipcRegistered) {
    return;
  }
  _ipcRegistered = true;
  // Close all child windows — must originate from the main window
  ipcMain.on("closeChildWindows", (event) => {
    const mainWindow = getMainWindow();
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
    const mainWindow = getMainWindow();
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("overlay-connection-status", data);
    }
  });

  // Get all displays — restricted to main window
  ipcMain.handle("getDisplays", async (event) => {
    const mainWindow = getMainWindow();
    if (!isFromMainWindow(event, mainWindow)) {
      console.warn("[Main] getDisplays: rejected IPC from untrusted sender");
      return [];
    }
    const displays = screen.getAllDisplays();
    console.log(
      "[Main] getDisplays handled, returning %d displays",
      displays.length
    );
    return displays;
  });

  // Get system locale — restricted to main window
  ipcMain.handle("getSystemLocale", async (event) => {
    const mainWindow = getMainWindow();
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
    const mainWindow = getMainWindow();
    if (!isFromMainWindow(event, mainWindow)) {
      console.warn("[Main] send-test-danmu: rejected IPC from untrusted sender");
      return;
    }
    if (!data || typeof data !== "object") {
      console.warn("[Main] send-test-danmu: invalid data payload");
      return;
    }

    // Validate text field
    if (typeof data.text !== "string" || data.text.length > 500) {
      console.warn("[Main] send-test-danmu: invalid or oversized text");
      return;
    }

    const validated = validateDanmuParams(data);
    if (!validated) {
      console.warn("[Main] send-test-danmu: numeric parameter validation failed");
      return;
    }
    const { opacity, size, speed, color } = validated;

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
              ${JSON.stringify(color)},
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
    const mainWindow = getMainWindow();
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

    // Validate size if present
    if (settings.size !== undefined) {
      const size = Number(settings.size);
      if (!Number.isFinite(size) || size <= 0 || size > 500) {
        console.warn("[Main] update-overlay-settings: invalid size");
        return;
      }
    }

    // Validate speed if present
    if (settings.speed !== undefined) {
      const speed = Number(settings.speed);
      if (!Number.isFinite(speed) || speed < 1 || speed > 10) {
        console.warn("[Main] update-overlay-settings: invalid speed");
        return;
      }
    }

    // Validate color if present
    if (settings.color !== undefined && typeof settings.color === "string") {
      if (!/^#[0-9a-fA-F]{6}$/.test(settings.color)) {
        console.warn("[Main] update-overlay-settings: invalid color format");
        return;
      }
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
    (
      event,
      ip,
      port,
      displayIndex,
      enableSyncMultiDisplay,
      startupAnimationSettings,
      wsAuthToken
    ) => {
      const mainWindow = getMainWindow();
      if (!isFromMainWindow(event, mainWindow)) {
        console.warn("[Main] createChild: rejected IPC from untrusted sender");
        return;
      }
      if (!isValidIpAddress(ip)) {
        console.warn(
          `[Main] createChild: invalid IP address: ${sanitizeLog(ip)}`
        );
        return;
      }
      const normalizedIp = ip.trim();
      const portNum = Number(port);
      if (!Number.isInteger(portNum) || portNum < 1 || portNum > 65535) {
        console.warn("[Main] createChild: port out of valid range");
        return;
      }
      const authToken = typeof wsAuthToken === "string" ? wsAuthToken.trim() : "";
      console.log(
        `[Main] createChild IPC received: IP=${sanitizeLog(ip)}, Port=${sanitizeLog(
          port
        )}, DisplayIndex=${sanitizeLog(displayIndex)}, SyncMultiDisplay=${enableSyncMultiDisplay}, HasWSToken=${authToken ? "yes" : "no"}`
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
            normalizedIp,
            portNum,
            authToken,
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
          normalizedIp,
          portNum,
          authToken,
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
