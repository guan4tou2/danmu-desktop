// Main process entry point
const { app, Tray, Menu, nativeImage } = require("electron");
const path = require("path");
const { sanitizeLog } = require("./shared/utils");
const { createWindow } = require("./main-modules/window-manager");
const { setupIpcHandlers } = require("./main-modules/ipc-handlers");

let mainWindow;
const childWindows = [];
let tray;

// Trigger Konami effect on all child windows
function onKonamiTrigger() {
  childWindows.forEach((cw) => {
    if (cw && !cw.isDestroyed()) {
      cw.webContents.send("konami-effect");
    }
  });
}

app.whenReady().then(() => {
  mainWindow = createWindow(childWindows, onKonamiTrigger);
  setupIpcHandlers(mainWindow, childWindows);

  // macOS menu bar 需要 16×16 template image（自動適應深淺色模式）
  // Windows/Linux 使用 32×32 彩色圖示
  const iconPath = path.join(__dirname, "../assets/icon.png");
  let trayIcon = nativeImage.createFromPath(iconPath);
  if (process.platform === "darwin") {
    trayIcon = trayIcon.resize({ width: 16, height: 16 });
    trayIcon.setTemplateImage(true);
  } else {
    trayIcon = trayIcon.resize({ width: 32, height: 32 });
  }
  tray = new Tray(trayIcon);

  const showMainWindow = () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.show();
      mainWindow.focus();
    }
  };

  const menu = [
    {
      label: "open manager",
      click: showMainWindow,
    },
    {
      label: "quit",
      click: () => {
        childWindows.forEach((win) => {
          if (win && !win.isDestroyed()) {
            win.destroy();
          }
        });
        childWindows.length = 0;
        console.log("[Main] All child windows destroyed on tray quit.");
        app.quit();
      },
    },
  ];
  tray.setContextMenu(Menu.buildFromTemplate(menu));
  tray.setToolTip("danmu manager");

  // macOS 設了 contextMenu 後 double-click 不觸發，改用 click
  // Windows/Linux 保留 double-click 開啟視窗
  if (process.platform === "darwin") {
    tray.on("click", showMainWindow);
  } else {
    tray.on("double-click", showMainWindow);
  }

  app.on("activate", () => {
    const { BrowserWindow } = require("electron");
    if (BrowserWindow.getAllWindows().length === 0) {
      mainWindow = createWindow(childWindows, onKonamiTrigger);
      setupIpcHandlers(mainWindow, childWindows);
    }
  });
});

app.on("window-all-closed", () => {
  // macOS 習慣：關閉所有視窗後 app 繼續存活（由 tray 或 Cmd+Q 結束）
  // Windows/Linux：關閉所有視窗即結束程式
  if (process.platform !== "darwin") {
    app.quit();
  }
});
