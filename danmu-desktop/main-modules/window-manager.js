// Window creation and lifecycle management
const { app, BrowserWindow, screen, shell } = require("electron");
const path = require("path");
const { sanitizeLog } = require("../shared/utils");
const { getChildWsScript } = require("./child-ws-script");

/**
 * Pick a display with a stable fallback chain:
 * preferred ID -> preferred index -> primary -> first display.
 */
function pickOverlayDisplay(displays, options = {}) {
  if (!Array.isArray(displays) || displays.length === 0) return null;
  const preferredDisplayId = Number.isInteger(options.preferredDisplayId)
    ? options.preferredDisplayId
    : null;
  const preferredIndex = Number.isInteger(options.preferredIndex)
    ? options.preferredIndex
    : null;
  const primaryDisplayId = Number.isInteger(options.primaryDisplayId)
    ? options.primaryDisplayId
    : null;

  if (preferredDisplayId !== null) {
    const byId = displays.find((d) => d && d.id === preferredDisplayId);
    if (byId) return byId;
  }
  if (preferredIndex !== null && preferredIndex >= 0 && preferredIndex < displays.length) {
    return displays[preferredIndex];
  }
  if (primaryDisplayId !== null) {
    const primary = displays.find((d) => d && d.id === primaryDisplayId);
    if (primary) return primary;
  }
  return displays[0];
}

/**
 * Blocks renderer-initiated navigation to any URL that isn't the bundled file://
 * location and forbids opening new Electron windows. Prevents a compromised
 * renderer (e.g. via a dependency XSS) from loading an attacker page that would
 * inherit preload access to IPC.
 */
function hardenWebContents(webContents) {
  webContents.on("will-navigate", (event, url) => {
    if (!url.startsWith("file://")) {
      event.preventDefault();
      console.warn("[Main] Blocked navigation to:", sanitizeLog(url));
    }
  });
  webContents.setWindowOpenHandler(({ url }) => {
    console.warn("[Main] Blocked window.open to:", sanitizeLog(url));
    return { action: "deny" };
  });
  webContents.on("will-attach-webview", (event) => {
    event.preventDefault();
    console.warn("[Main] Blocked <webview> attach");
  });
}

/**
 * Creates and configures the main application window.
 * @param {Object[]} childWindows - Mutable array shared with IPC handlers
 * @param {Function} onKonamiTrigger - Callback to trigger Konami effect on all child windows
 * @returns {BrowserWindow} The created main window
 */
function createWindow(childWindows, onKonamiTrigger) {
  const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a",
  ];
  let konamiIndex = 0;
  let lastKeyTime = Date.now();
  let isKeyDown = false;

  // v5.0.0: titleBarStyle "hidden" only on macOS. macOS keeps painting
  // native traffic lights (close/min/max) floating top-left over the
  // hidden title bar region — no duplication with the HTML titlebar.
  // On Windows/Linux this same option would HIDE all window controls
  // entirely (no close button), so we only apply it on darwin and let
  // Windows/Linux keep their default frame chrome with native controls.
  const isMac = process.platform === "darwin";
  const titleBarOpts = isMac ? { titleBarStyle: "hidden" } : {};

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 900,
    minHeight: 700,
    resizable: true,
    autoHideMenuBar: true,
    ...titleBarOpts,
    // macOS Space 修復：不使用 show:false + ready-to-show 模式
    // macOS 在建立隱藏視窗時會把它分配到任意 Space，
    // 之後 show() 時視窗就出現在錯誤的桌面。
    // 改為立即顯示 + 深色背景，避免白閃且確保出現在當前 Space。
    show: true,
    backgroundColor: "#0f172a",
    icon: path.join(__dirname, "../assets/icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "../dist/preload.bundle.js"),
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      experimentalFeatures: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "../index.html"));
  hardenWebContents(mainWindow.webContents);

  mainWindow.on("minimize", (ev) => {
    ev.preventDefault();
    mainWindow.hide();
  });

  mainWindow.on("close", (e) => {
    console.log("[Main] Window close event triggered");
    // 使用 spread 複製陣列，避免 destroy() 觸發 "closed" 事件
    // 導致 splice 修改正在迭代的陣列（index 跑掉，第二個視窗被略過）
    [...childWindows].forEach((win) => {
      if (win && !win.isDestroyed()) {
        try {
          win.destroy();
        } catch (err) {
          console.error(
            "[Main] Error destroying child window:",
            sanitizeLog(err.message)
          );
        }
      }
    });
    childWindows.length = 0;
  });

  mainWindow.webContents.on("did-finish-load", () => {
    try {
      const displays = screen.getAllDisplays();
      const displayOptions = displays.map((display, index) => {
        const bounds = display.bounds;
        return {
          value: index,
          text: `Display ${index + 1} (${bounds.width}x${bounds.height})`,
        };
      });
      mainWindow.webContents.send("update-display-options", displayOptions);
    } catch (error) {
      console.error(
        "Error getting display information:",
        sanitizeLog(error.message)
      );
    }
  });

  // Konami Code listener
  mainWindow.webContents.on("before-input-event", (event, input) => {
    const currentTime = Date.now();

    if (currentTime - lastKeyTime > 2000) {
      konamiIndex = 0;
      isKeyDown = false;
    }

    if (input.type === "keyUp") {
      isKeyDown = false;
      return;
    }

    if (input.type === "keyDown" && !isKeyDown) {
      isKeyDown = true;
      lastKeyTime = currentTime;

      console.log(
        "Key pressed:",
        sanitizeLog(input.key),
        "Current index:",
        konamiIndex
      );

      if (input.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        console.log("Match successful, current progress:", konamiIndex);
        if (konamiIndex === konamiCode.length) {
          konamiIndex = 0;
          isKeyDown = false;
          console.log("Konami Code triggered successfully!");
          onKonamiTrigger();
        }
      } else {
        console.log("Match failed, resetting index");
        konamiIndex = 0;
        isKeyDown = false;
      }
    }
  });

  return mainWindow;
}

/**
 * Configures a child overlay window: loads child.html, sets bounds, and injects WebSocket script.
 */
function setupChildWindow(
  targetWindow,
  display,
  ip,
  port,
  wsAuthToken,
  startupAnimationSettings,
  childWindows
) {
  const initialBounds = targetWindow.getBounds();
  console.log(
    `[Main] Setting up child window for display ID ${sanitizeLog(
      display.id
    )}. Initial bounds: x=${initialBounds.x}, y=${initialBounds.y}, width=${
      initialBounds.width
    }, height=${initialBounds.height}`
  );

  targetWindow.loadFile(path.join(__dirname, "../child.html"));
  hardenWebContents(targetWindow.webContents);

  targetWindow.once("ready-to-show", () => {
    console.log(
      `[Main] In ready-to-show for display ID ${sanitizeLog(display.id)}.`
    );
    targetWindow.setBounds(display.bounds);
    const boundsAfterSet = targetWindow.getBounds();
    console.log(
      `[Main] Bounds after setBounds for display ID ${sanitizeLog(
        display.id
      )}: x=${boundsAfterSet.x}, y=${boundsAfterSet.y}, width=${
        boundsAfterSet.width
      }, height=${boundsAfterSet.height}`
    );

    targetWindow.setAlwaysOnTop(true, "screen-saver");
    targetWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
    targetWindow.setIgnoreMouseEvents(true);
    targetWindow.show();

    targetWindow.startupAnimationSettings = startupAnimationSettings;

    const finalBounds = targetWindow.getBounds();
    console.log(
      `[Main] Child window for display ID ${sanitizeLog(
        display.id
      )} shown. Final bounds: x=${finalBounds.x}, y=${finalBounds.y}, width=${
        finalBounds.width
      }, height=${finalBounds.height}`
    );
  });

  targetWindow.on("closed", () => {
    const index = childWindows.indexOf(targetWindow);
    if (index > -1) {
      childWindows.splice(index, 1);
    }
    console.log(
      `[Main] Child window for display ID ${sanitizeLog(
        display.id
      )} removed from list upon close.`
    );
  });

  // Inject WebSocket connection script after page (including synchronous scripts) finishes loading
  targetWindow.webContents.once("did-finish-load", () => {
    const script = getChildWsScript(ip, port, startupAnimationSettings, wsAuthToken);
    targetWindow.webContents.executeJavaScript(script).catch((err) => {
      console.error(
        "[Main] Error injecting WebSocket script:",
        sanitizeLog(err.message)
      );
    });
  });
}

/**
 * Creates the About window.
 * @param {BrowserWindow} mainWindow - The parent window (for modal behaviour)
 */
function createAboutWindow(mainWindow) {
  const aboutWindow = new BrowserWindow({
    width: 420,
    height: 320,
    resizable: false,
    autoHideMenuBar: true,
    title: "About Danmu Fire",
    parent: mainWindow && !mainWindow.isDestroyed() ? mainWindow : null,
    modal: true,
    webPreferences: {
      preload: path.join(__dirname, "../dist/preload.bundle.js"),
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
    },
  });
  aboutWindow.loadFile(path.join(__dirname, "../about.html"));
  hardenWebContents(aboutWindow.webContents);
  return aboutWindow;
}

module.exports = {
  createWindow,
  setupChildWindow,
  createAboutWindow,
  pickOverlayDisplay,
  hardenWebContents,
};
