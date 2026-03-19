// Window creation and lifecycle management
const { app, BrowserWindow, screen } = require("electron");
const path = require("path");
const { sanitizeLog } = require("../shared/utils");
const { getChildWsScript } = require("./child-ws-script");

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

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 900,
    minHeight: 700,
    resizable: true,
    autoHideMenuBar: true,
    show: false,
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

  // macOS Space 修復：把視窗定位到游標所在的螢幕
  // 這會讓 macOS 把視窗歸屬到使用者目前所在的 Space
  // （參考 electron/electron#8734 最高票解法）
  if (process.platform === "darwin") {
    const cursorPoint = screen.getCursorScreenPoint();
    const currentDisplay = screen.getDisplayNearestPoint(cursorPoint);
    const { x, y, width, height } = currentDisplay.workArea;
    mainWindow.setPosition(
      Math.round(x + (width - 800) / 2),
      Math.round(y + (height - 900) / 2)
    );
  }

  mainWindow.loadFile(path.join(__dirname, "../index.html"));

  mainWindow.once("ready-to-show", () => {
    if (process.platform === "darwin") {
      mainWindow.show();
      mainWindow.focus();
      app.focus({ steal: true });
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

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

module.exports = { createWindow, setupChildWindow };
