// All IPC event handler definitions
const { ipcMain, screen, app, shell } = require("electron");
const { BrowserWindow } = require("electron");
const net = require("net");
const path = require("path");
const { sanitizeLog } = require("../shared/utils");
const { setupChildWindow, pickOverlayDisplay } = require("./window-manager");
const trustedWssHosts = require("./trusted-wss-hosts");

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
 * Validates numeric IPC parameters, text, and color format to prevent injection.
 */
function validateDanmuParams(data) {
  // Validate text: must be string, max 500 chars
  if (typeof data.text !== "string" || data.text.length > 500) {
    console.log("[Main] Invalid danmu text: must be string <= 500 chars");
    return null;
  }

  const opacity = Number(data.opacity);
  const size = Number(data.size);
  const speed = Number(data.speed);

  if (
    !Number.isFinite(opacity) || opacity < 0 || opacity > 100 ||
    !Number.isFinite(size) || size <= 0 || size > 200 ||
    !Number.isFinite(speed) || speed < 1 || speed > 10
  ) {
    return null;
  }

  // 驗證顏色格式：接受含或不含 # 前綴的十六進位色碼（server 端 strip #，IPC 端需相容兩種格式）
  const rawColor = typeof data.color === "string" ? data.color : "";
  const normalizedColor = rawColor.startsWith("#") ? rawColor : `#${rawColor}`;
  const colorRegex = /^#[0-9a-fA-F]{3,8}$/;
  const validatedColor = colorRegex.test(normalizedColor) ? normalizedColor : "#ffffff";

  return { opacity, size, speed, color: validatedColor, text: data.text };
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
let _preferredOverlayDisplayId = null;

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
    // Revoke self-signed cert exceptions when overlay stops. Without
    // this the trusted host:port stays in the registry for the rest of
    // the app lifetime, allowing self-signed acceptance for endpoints
    // the user is no longer connected to.
    trustedWssHosts.clear();
    console.log("[Main] All child windows destroyed on closeChildWindows event.");
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("overlay-connection-status", {
        status: "stopped",
      });
    }
  });

  // Persist preferred overlay display ID for single-display mode.
  ipcMain.on("set-overlay-display-id", (event, displayId) => {
    const mainWindow = getMainWindow();
    if (!isFromMainWindow(event, mainWindow)) {
      console.warn("[Main] set-overlay-display-id: rejected IPC from untrusted sender");
      return;
    }
    const normalized = Number(displayId);
    if (!Number.isInteger(normalized)) return;
    _preferredOverlayDisplayId = normalized;
    console.log(`[Main] Preferred overlay display set to ID ${sanitizeLog(normalized)}`);
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
    // Return only the fields the renderer needs — prevents leaking internal
    // Electron display properties and avoids IPC serialization of unexpected data.
    const primaryDisplay = screen.getPrimaryDisplay();
    const sanitizedDisplays = displays.map((d) => ({
      id: d.id,
      label: d.label || "",
      bounds: d.bounds,
      workArea: d.workArea,
      size: d.size,
      scaleFactor: d.scaleFactor,
      primary: d.id === primaryDisplay.id,
    }));
    console.log(
      "[Main] getDisplays handled, returning %d displays",
      sanitizedDisplays.length
    );
    return sanitizedDisplays;
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

  ipcMain.handle("get-app-version", () => app.getVersion());

  ipcMain.handle("open-external", (event, url) => {
    const mainWindow = getMainWindow();
    if (!isFromMainWindow(event, mainWindow)) {
      console.warn("[Main] open-external: rejected IPC from untrusted sender");
      return;
    }
    // Only allow https:// URLs with a parseable hostname to prevent
    // protocol-handler abuse and credentials-in-URL attacks.
    if (typeof url !== "string" || !url.startsWith("https://")) {
      console.warn("[Main] open-external: rejected non-https URL");
      return;
    }
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== "https:" || parsed.username || parsed.password) {
        console.warn("[Main] open-external: rejected URL with credentials or bad protocol");
        return;
      }
      shell.openExternal(parsed.toString());
    } catch {
      console.warn("[Main] open-external: rejected unparseable URL");
    }
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

    const validated = validateDanmuParams(data);
    if (!validated) {
      console.warn("[Main] send-test-danmu: numeric parameter validation failed");
      return;
    }
    const { opacity, size, speed, color, text } = validated;

    // Validate textStyles if provided
    if (data.textStyles && typeof data.textStyles === "object") {
      const ts = data.textStyles;
      if (ts.strokeColor !== undefined && (typeof ts.strokeColor !== "string" || !/^#[0-9a-fA-F]{3,8}$/.test(ts.strokeColor.startsWith("#") ? ts.strokeColor : `#${ts.strokeColor}`))) {
        console.log("[Main] Invalid strokeColor");
        return;
      }
      if (ts.strokeWidth !== undefined && (typeof ts.strokeWidth !== "number" || ts.strokeWidth < 0 || ts.strokeWidth > 10)) {
        console.log("[Main] Invalid strokeWidth");
        return;
      }
      if (ts.shadowBlur !== undefined && (typeof ts.shadowBlur !== "number" || ts.shadowBlur < 0 || ts.shadowBlur > 50)) {
        console.log("[Main] Invalid shadowBlur");
        return;
      }
    }

    // Validate displayArea if provided
    if (data.displayArea && typeof data.displayArea === "object") {
      const da = data.displayArea;
      if (da.top !== undefined && (typeof da.top !== "number" || da.top < 0 || da.top > 100)) {
        console.log("[Main] Invalid displayArea.top");
        return;
      }
      if (da.height !== undefined && (typeof da.height !== "number" || da.height < 0 || da.height > 100)) {
        console.log("[Main] Invalid displayArea.height");
        return;
      }
    }

    console.log("[Main] send-test-danmu received:", data);
    childWindows.forEach((win) => {
      if (win && !win.isDestroyed()) {
        win.webContents
          .executeJavaScript(
            `
          if (typeof window.showdanmu === 'function') {
            window.showdanmu(
              ${JSON.stringify(text)},
              ${opacity},
              ${JSON.stringify(color)},
              ${size},
              ${speed},
              { name: "NotoSansTC", url: null, type: "default" },
              ${JSON.stringify((() => {
                const ts = data.textStyles || {};
                return {
                  textStroke: !!ts.textStroke,
                  strokeWidth: typeof ts.strokeWidth === "number" ? ts.strokeWidth : 2,
                  strokeColor: typeof ts.strokeColor === "string" ? ts.strokeColor : "#000000",
                  textShadow: !!ts.textShadow,
                  shadowBlur: typeof ts.shadowBlur === "number" ? ts.shadowBlur : 4,
                };
              })())},
              ${JSON.stringify((() => {
                const da = data.displayArea || {};
                return {
                  top: typeof da.top === "number" ? da.top : 0,
                  height: typeof da.height === "number" ? da.height : 100,
                };
              })())}
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
      if (!Number.isFinite(size) || size <= 0 || size > 200) {
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
      const rawSettingsColor = settings.color;
      const normalizedSettingsColor = rawSettingsColor.startsWith("#")
        ? rawSettingsColor
        : `#${rawSettingsColor}`;
      if (!/^#[0-9a-fA-F]{3,8}$/.test(normalizedSettingsColor)) {
        console.warn("[Main] update-overlay-settings: invalid color format");
        return;
      }
      settings = { ...settings, color: normalizedSettingsColor };
    }

    console.log("[Main] update-overlay-settings received");
    childWindows.forEach((win) => {
      if (win && !win.isDestroyed()) {
        win.setOpacity(opacity / 100);
        win.webContents
          .executeJavaScript(
            `
          window.defaultDanmuSettings = ${JSON.stringify({
              opacity: Number(settings.opacity),
              ...(settings.size !== undefined && { size: Number(settings.size) }),
              ...(settings.speed !== undefined && { speed: Number(settings.speed) }),
              ...(settings.color !== undefined && { color: settings.color }),
            })};
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

      // Self-signed cert pre-authorisation: v5.0.0+ unified WSS-only,
      // every connection records the configured host so
      // app.on('certificate-error') in main.js will accept the cert for
      // that host only. Clear first so reconfigured connections drop
      // the previous endpoint — the trust list stays scoped to the
      // currently-active configuration, never the union of every host
      // ever connected to.
      trustedWssHosts.clear();
      trustedWssHosts.add(normalizedIp, portNum);

      // Clear existing child windows (copy array to avoid splice-during-iteration)
      [...childWindows].forEach((win) => {
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
        const primary = screen.getPrimaryDisplay();
        const selectedDisplay = pickOverlayDisplay(displays, {
          preferredDisplayId: _preferredOverlayDisplayId,
          preferredIndex: Number.isInteger(displayIndex) ? displayIndex : null,
          primaryDisplayId: primary && primary.id,
        });
        if (!selectedDisplay) {
          console.error("[Main] Unable to resolve display target");
          return;
        }
        console.log(
          `[Main] Creating child window for selected display (ID: ${sanitizeLog(selectedDisplay.id)}).`
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

module.exports = { setupIpcHandlers, validateDanmuParams };
