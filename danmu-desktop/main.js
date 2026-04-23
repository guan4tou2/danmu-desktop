// Main process entry point
const { app, Tray, Menu, nativeImage, ipcMain } = require("electron");
const path = require("path");
const { sanitizeLog } = require("./shared/utils");
const { createWindow, createAboutWindow } = require("./main-modules/window-manager");
const { setupIpcHandlers } = require("./main-modules/ipc-handlers");
const { setupAutoUpdater } = require("./main-modules/auto-updater");

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
  setupAutoUpdater(() => mainWindow);

  // macOS Dock icon（開發模式下 Electron 預設顯示通用圖示，需手動設定）
  if (process.platform === "darwin" && app.dock) {
    const dockIcon = nativeImage.createFromPath(
      path.join(__dirname, "../assets/icon.png")
    );
    app.dock.setIcon(dockIcon);
  }

  let trayIcon;
  if (process.platform === "darwin") {
    // macOS：使用黑色 template image，讓系統依選單列明暗自動反色，
    // 不會出現白色圓角框（非 template 圖示的 Big Sur 預設行為）
    // Electron 會自動偵測 @2x 後綴並在 Retina 螢幕使用高解析度版本
    const templatePath = path.join(__dirname, "../assets/tray-template.png");
    trayIcon = nativeImage.createFromPath(templatePath);
    trayIcon.setTemplateImage(true);
  } else {
    // Windows/Linux：使用彩色 tray icon，設計語言與 app icon 一致
    const iconPath = path.join(__dirname, "../assets/tray-icon.png");
    trayIcon = nativeImage.createFromPath(iconPath);
  }
  tray = new Tray(trayIcon);

  const showMainWindow = () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.show();
      mainWindow.focus();
      if (process.platform === "darwin") {
        app.focus({ steal: true });
      }
    }
  };

  let trayStatusText = "⊘ Disconnected";
  let trayServerUrl = "";

  // Broadcast an overlay-idle-toggle message to every live child window.
  // mode: 'show' | 'hide' | 'toggle'
  function broadcastIdleToggle(mode) {
    const payload = { mode: mode || "toggle" };
    let delivered = 0;
    childWindows.forEach((cw) => {
      if (cw && !cw.isDestroyed()) {
        cw.webContents.send("overlay-idle-toggle", payload);
        delivered++;
      }
    });
    console.log(`[Main] overlay-idle-toggle → ${delivered} child window(s) · mode=${payload.mode}`);
    return delivered;
  }

  // Send a generic command to the main renderer (pause receive / clear screen).
  function dispatchToRenderer(command) {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("client-command", { command });
    }
  }

  // Rebuild tray menu — mirrors prototype desktop.jsx TrayMenu:550 structure:
  // header (● Danmu Client + version + server status)
  // → 顯示 overlay (✓ toggle · ⌘⇧D)
  // → 暫停接收 (⌘⇧P)
  // → 清空畫面 (⌘⇧K)
  // ─────────────
  // → 顯示於 ▸ submenu
  // → 伺服器 ▸ submenu
  // ─────────────
  // → 開啟控制視窗…
  // → 偏好設定…
  // → 結束 Danmu
  function rebuildTrayMenu() {
    const hasOverlay = childWindows.some((cw) => cw && !cw.isDestroyed());
    const version = app.getVersion();
    const pkgName = "Danmu Client";
    const template = [
      { label: `● ${pkgName}    v${version}`, enabled: false },
      { label: trayServerUrl ? `${trayStatusText} · ${trayServerUrl}` : trayStatusText, enabled: false },
      { type: "separator" },
      {
        label: "顯示 overlay",
        type: "checkbox",
        checked: hasOverlay,
        accelerator: "CommandOrControl+Shift+D",
        click: () => broadcastIdleToggle("toggle"),
      },
      {
        label: "暫停接收",
        accelerator: "CommandOrControl+Shift+P",
        enabled: hasOverlay,
        click: () => dispatchToRenderer("pause"),
      },
      {
        label: "清空畫面",
        accelerator: "CommandOrControl+Shift+K",
        enabled: hasOverlay,
        click: () => dispatchToRenderer("clear"),
      },
      { type: "separator" },
      {
        label: "顯示於",
        submenu: [
          { label: "主螢幕", type: "radio", checked: true, click: () => dispatchToRenderer("display:primary") },
          { label: "副螢幕", type: "radio", click: () => dispatchToRenderer("display:secondary") },
        ],
      },
      {
        label: "伺服器",
        submenu: [
          { label: trayStatusText, enabled: false },
          { type: "separator" },
          { label: "重新連線", click: () => dispatchToRenderer("reconnect") },
          { label: "更改連線…", click: showMainWindow },
        ],
      },
      { type: "separator" },
      {
        label: "開啟控制視窗…",
        accelerator: "CommandOrControl+Shift+C",
        click: showMainWindow,
      },
      { label: "偏好設定…", click: showMainWindow },
      { label: "關於 Danmu Fire", click: () => createAboutWindow(mainWindow) },
      { type: "separator" },
      {
        label: "結束 Danmu",
        click: () => {
          [...childWindows].forEach((win) => {
            if (win && !win.isDestroyed()) win.destroy();
          });
          childWindows.length = 0;
          console.log("[Main] All child windows destroyed on tray quit.");
          app.quit();
        },
      },
    ];
    tray.setContextMenu(Menu.buildFromTemplate(template));
  }

  rebuildTrayMenu();
  tray.setToolTip("Danmu Desktop");

  // Update tray status label from renderer
  ipcMain.on("update-tray-status", (_, text) => {
    trayStatusText = String(text).slice(0, 50); // cap length for safety
    rebuildTrayMenu();
  });

  // Main window requests an overlay-idle toggle (button / shortcut)
  ipcMain.on("overlay-idle-request", (_, data) => {
    const mode = (data && data.mode) || "toggle";
    if (!["show", "hide", "toggle"].includes(mode)) return;
    broadcastIdleToggle(mode);
  });

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
