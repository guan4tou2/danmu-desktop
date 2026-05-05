// Main process entry point
const { app, Tray, Menu, nativeImage, ipcMain } = require("electron");
const path = require("path");
const { sanitizeLog } = require("./shared/utils");
const { createWindow, createAboutWindow } = require("./main-modules/window-manager");
const { buildTrayPopoverSections } = require("./main-modules/tray-popover");
const { setupIpcHandlers } = require("./main-modules/ipc-handlers");
const { setupAutoUpdater } = require("./main-modules/auto-updater");
const trustedWssHosts = require("./main-modules/trusted-wss-hosts");

// Self-signed cert acceptance for user-configured WSS hosts only.
// When the user enables WSS and connects to a host:port pair via the
// Conn panel, ipc-handlers calls trustedWssHosts.add(host, port).
// We accept ONLY the "untrusted authority" error class (self-signed,
// unknown CA) for those exact host:port pairs. Every other failure —
// hostname mismatch, expired cert, revoked cert, generally invalid —
// is rejected even for trusted hosts. This narrows the bypass to the
// specific case our auto-generated nginx self-signed cert produces
// and keeps real TLS guarantees against active MITM (different cert
// presented at the same host:port would be rejected unless its CN /
// validity / revocation also satisfied normal Chromium checks).
//
// Electron's `error` value is a Chromium net error string (e.g.
// "net::ERR_CERT_AUTHORITY_INVALID"). See chromium/src/net/cert/cert_status_flags.h
// for the full enum.
//
// MUST be registered BEFORE app.whenReady — Electron emits this event
// on the app object and ignores handlers attached after the first
// network request fires.
const _SELF_SIGNED_ACCEPTABLE_ERRORS = new Set([
  "net::ERR_CERT_AUTHORITY_INVALID", // self-signed or unknown CA
]);

app.on("certificate-error", (event, _webContents, url, error, _cert, callback) => {
  try {
    const u = new URL(url);
    const host = u.hostname;
    const port = u.port || (u.protocol === "wss:" || u.protocol === "https:" ? 443 : 80);
    if (
      trustedWssHosts.has(host, port) &&
      _SELF_SIGNED_ACCEPTABLE_ERRORS.has(String(error))
    ) {
      event.preventDefault();
      callback(true);
      return;
    }
  } catch (_) {
    /* fall through to default behaviour */
  }
  callback(false);
});

let mainWindow;
const childWindows = [];
let tray;

// Updater state shared with the tray menu (rebuilt on every update event)
const updateInfo = { phase: "idle", version: null };

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
  setupAutoUpdater(
    () => mainWindow,
    (state) => {
      // Mirror updater phase into tray menu
      updateInfo.phase = state.phase || "idle";
      updateInfo.version = state.version || null;
      try {
        if (tray) rebuildTrayMenu();
      } catch (_) {
        // tray may not yet be created (very early checks) — ignore
      }
    }
  );

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

  // Keep tray actions narrow: status, optional idle-scene toggle,
  // app/window maintenance. Display selection and connection edits belong in
  // the main client window so tray does not become a second controller.
  function rebuildTrayMenu() {
    const hasOverlay = childWindows.some((cw) => cw && !cw.isDestroyed());
    const version = app.getVersion();
    const pkgName = "Danmu Fire";

    // Update entry — shown only when an update is available/downloading/ready.
    const updateEntries = [];
    if (updateInfo.phase === "downloaded" && updateInfo.version) {
      updateEntries.push({
        label: `↻ Restart to install v${updateInfo.version}`,
        click: () => {
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send("update:status", {
              phase: "downloaded",
              version: updateInfo.version,
              percent: 100,
            });
          }
          showMainWindow();
        },
      });
      updateEntries.push({ type: "separator" });
    } else if (
      (updateInfo.phase === "available" || updateInfo.phase === "downloading") &&
      updateInfo.version
    ) {
      updateEntries.push({
        label: `↓ New version v${updateInfo.version} available`,
        click: showMainWindow,
      });
      updateEntries.push({ type: "separator" });
    }

    const template = [
      { label: `● ${pkgName}    v${version}`, enabled: false },
      { label: trayServerUrl ? `${trayStatusText} · ${trayServerUrl}` : trayStatusText, enabled: false },
      { type: "separator" },
      ...buildTrayPopoverSections({
        overlayCount: childWindows.filter((cw) => cw && !cw.isDestroyed()).length,
        serverText: trayStatusText,
        updaterPhase: updateInfo.phase,
      }),
      ...updateEntries,
      {
        label: "待機畫面",
        type: "checkbox",
        checked: hasOverlay,
        accelerator: "CommandOrControl+Shift+D",
        enabled: hasOverlay,
        click: () => broadcastIdleToggle("toggle"),
      },
      {
        label: "伺服器",
        submenu: [
          { label: trayStatusText, enabled: false },
          { type: "separator" },
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
  tray.setToolTip("Danmu Fire");

  // Update tray status label from renderer — restricted to main window
  ipcMain.on("update-tray-status", (event, text) => {
    if (
      !mainWindow ||
      mainWindow.isDestroyed() ||
      event.sender !== mainWindow.webContents
    ) {
      console.warn("[Main] update-tray-status: rejected IPC from untrusted sender");
      return;
    }
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
