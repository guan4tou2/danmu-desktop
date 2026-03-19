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

  mainWindow.loadFile(path.join(__dirname, "../index.html"));

  // macOS Space 修復：確保視窗出現在使用者目前所在的桌面
  //
  // 問題：macOS 在 BrowserWindow 建立時就決定 Space 歸屬，
  // 如果 app 之前在 Space A 啟動過，新視窗會再次開在 Space A，
  // 即使使用者已切到 Space B。
  //
  // 修復策略（三階段）：
  // 1. ready-to-show: setVisibleOnAllWorkspaces(true) 讓視窗暫時出現在所有桌面
  // 2. app.focus({ steal: true }) 強制 macOS 把焦點（和使用者的注意力）帶到 app
  // 3. 延遲 500ms 後 setVisibleOnAllWorkspaces(false)，鎖定在目前 Space
  //    （200ms 在某些 Mac 上不夠，macOS 動畫需要更多時間）
  mainWindow.once("ready-to-show", () => {
    if (process.platform === "darwin") {
      mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
      mainWindow.show();
      mainWindow.focus();
      app.dock.show();
      app.focus({ steal: true });
      mainWindow.moveTop();
      setTimeout(() => {
        if (!mainWindow.isDestroyed()) {
          mainWindow.setVisibleOnAllWorkspaces(false);
        }
      }, 500);
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
