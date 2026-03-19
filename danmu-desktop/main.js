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
  setupIpcHandlers(() => mainWindow, childWindows);

  let trayIcon;
  if (process.platform === "darwin") {
    // macOS：使用黑色 template image，讓系統依選單列明暗自動反色，
    // 不會出現白色圓角框（非 template 圖示的 Big Sur 預設行為）
    const templatePath = path.join(__dirname, "../assets/tray-template.png");
    trayIcon = nativeImage.createFromPath(templatePath);
    trayIcon.setTemplateImage(true);
  } else {
    const iconPath = path.join(__dirname, "../assets/icon.png");
    trayIcon = nativeImage.createFromPath(iconPath).resize({ width: 32, height: 32 });
  }
  tray = new Tray(trayIcon);

  const showMainWindow = () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      if (process.platform === "darwin") {
        // setVisibleOnAllWorkspaces(true) → show → setTimeout → false
        // 需要延遲讓 macOS 有時間把視窗定位到目前的 Space，
        // 同步呼叫 false 會在視窗定位完成前鎖定，導致仍開在別的桌面
        mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
        mainWindow.show();
        mainWindow.focus();
        app.focus({ steal: true });
        setTimeout(() => {
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.setVisibleOnAllWorkspaces(false);
          }
        }, 200);
      } else {
        mainWindow.show();
        mainWindow.focus();
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
      // IPC handlers are already registered globally at app startup;
      // re-registering would duplicate all listeners. Only recreate the window.
    } else {
      // 視窗已存在但可能在別的 Space — 用同樣的 workaround 拉到目前桌面
      showMainWindow();
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
