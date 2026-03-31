/**
 * Electron auto-updater module.
 *
 * Checks GitHub Releases for new versions on startup, then every 4 hours.
 * Notifies the user via dialog when an update is available.
 */
const { autoUpdater } = require("electron-updater");
const { dialog } = require("electron");

const CHECK_INTERVAL = 4 * 60 * 60 * 1000; // 4 hours

let updateNotified = false;

function setupAutoUpdater(mainWindowGetter) {
  // Silence console noise in dev
  autoUpdater.logger = null;

  // Don't auto-download — let the user decide
  autoUpdater.autoDownload = false;
  autoUpdater.autoInstallOnAppQuit = true;

  autoUpdater.on("update-available", (info) => {
    if (updateNotified) return;
    updateNotified = true;

    const win = typeof mainWindowGetter === "function" ? mainWindowGetter() : null;
    dialog
      .showMessageBox(win, {
        type: "info",
        title: "Update Available",
        message: `A new version (v${info.version}) is available.`,
        detail: "Would you like to download and install it now?",
        buttons: ["Download", "Later"],
        defaultId: 0,
        cancelId: 1,
      })
      .then(({ response }) => {
        if (response === 0) {
          autoUpdater.downloadUpdate();
        }
      });
  });

  autoUpdater.on("update-downloaded", () => {
    const win = typeof mainWindowGetter === "function" ? mainWindowGetter() : null;
    dialog
      .showMessageBox(win, {
        type: "info",
        title: "Update Ready",
        message: "Update downloaded. Restart now to apply?",
        buttons: ["Restart", "Later"],
        defaultId: 0,
        cancelId: 1,
      })
      .then(({ response }) => {
        if (response === 0) {
          autoUpdater.quitAndInstall();
        }
      });
  });

  autoUpdater.on("error", (err) => {
    // Silently ignore update errors (offline, no releases, etc.)
    console.log("[AutoUpdater] Check failed:", err.message || err);
  });

  // Initial check after 10 seconds (don't block startup)
  setTimeout(() => {
    autoUpdater.checkForUpdates().catch(() => {});
  }, 10000);

  // Periodic checks
  setInterval(() => {
    updateNotified = false; // Reset so user gets notified of newer versions
    autoUpdater.checkForUpdates().catch(() => {});
  }, CHECK_INTERVAL);
}

module.exports = { setupAutoUpdater };
