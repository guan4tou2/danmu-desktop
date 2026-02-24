// Main process entry point
const { app, Tray, Menu } = require("electron");
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

  tray = new Tray(path.join(__dirname, "assets/icon.png"));
  const menu = [
    {
      label: "open manager",
      click: () => {
        mainWindow.show();
      },
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

  tray.on("double-click", () => {
    mainWindow.show();
  });

  app.on("activate", () => {
    const { BrowserWindow } = require("electron");
    if (BrowserWindow.getAllWindows().length === 0) {
      mainWindow = createWindow(childWindows, onKonamiTrigger);
      setupIpcHandlers(mainWindow, childWindows);
    }
  });
});

app.on("window-all-closed", () => {
  app.quit();
});
