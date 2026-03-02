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

  const iconPath = path.join(__dirname, "../assets/icon.png");
  let trayIcon = nativeImage.createFromPath(iconPath);
  // macOS：彩色圖示縮至 16×16 即可（不用 setTemplateImage，
  // template 模式只讀 alpha channel，彩色 PNG 會渲染成空白方塊）
  trayIcon = trayIcon.resize({ width: process.platform === "darwin" ? 16 : 32, height: process.platform === "darwin" ? 16 : 32 });
  tray = new Tray(trayIcon);

  const showMainWindow = () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      // setVisibleOnAllWorkspaces(true) 讓視窗強制出現在目前的 macOS Space
      if (process.platform === "darwin") {
        mainWindow.setVisibleOnAllWorkspaces(true);
      }
      mainWindow.show();
      mainWindow.focus();
      if (process.platform === "darwin") {
        mainWindow.setVisibleOnAllWorkspaces(false);
      }
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
        // spread 複製陣列，避免 destroy 觸發的 "closed" 修改迭代中的陣列
        [...childWindows].forEach((win) => {
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

// 安全網：任何退出路徑（Cmd+Q、dock Quit 等）都確保子視窗先被銷毀
app.on("before-quit", () => {
  [...childWindows].forEach((win) => {
    if (win && !win.isDestroyed()) {
      win.destroy();
    }
  });
  childWindows.length = 0;
});

app.on("window-all-closed", () => {
  // 關閉視窗 → 結束程式（minimize 只是 hide，不觸發此事件）
  app.quit();
});
