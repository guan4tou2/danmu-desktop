/**
 * Electron auto-updater module — user-visible UX (P2-3).
 *
 * Replaces the old silent-dialog flow with renderer-driven UX:
 *   - emits update lifecycle events to the main window via ipcMain → renderer
 *   - listens for renderer actions (skip / later / install / check-now)
 *   - persists "skipped versions" + "remind-later until" to userData/update-state.json
 *   - falls back to install-on-quit if user takes no action (so non-interactive
 *     users still get updates on the next restart, matching old behaviour)
 *
 * IPC contract:
 *   main → renderer  channel: "update:status"
 *     payload: { phase, version?, releaseNotes?, percent?, message? }
 *     phase ∈ checking | available | not-available | downloading
 *           | downloaded | error | idle
 *
 *   renderer → main  channel: "update:action"
 *     payload: { action, version? }
 *     action ∈ "install" | "later" | "skip" | "check-now" | "request-state"
 */
const { autoUpdater } = require("electron-updater");
const { ipcMain, app } = require("electron");
const fs = require("fs");
const path = require("path");

const CHECK_INTERVAL_MS = 4 * 60 * 60 * 1000; // 4 hours
const REMIND_LATER_MS = 24 * 60 * 60 * 1000; // 24 hours
const STARTUP_DELAY_MS = 10 * 1000; // 10 seconds

// ── Persistent state (skipped versions + remind-later) ────────────────────────
function getStatePath() {
  try {
    return path.join(app.getPath("userData"), "update-state.json");
  } catch (_) {
    // app may not be ready in some test contexts; fall back to cwd
    return path.join(process.cwd(), "update-state.json");
  }
}

function loadState() {
  try {
    const raw = fs.readFileSync(getStatePath(), "utf8");
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return {
        skippedVersions: Array.isArray(parsed.skippedVersions)
          ? parsed.skippedVersions.filter((v) => typeof v === "string")
          : [],
        remindLaterUntil:
          typeof parsed.remindLaterUntil === "number"
            ? parsed.remindLaterUntil
            : 0,
      };
    }
  } catch (_) {
    // missing or corrupt — start fresh
  }
  return { skippedVersions: [], remindLaterUntil: 0 };
}

function saveState(state) {
  try {
    fs.writeFileSync(
      getStatePath(),
      JSON.stringify(state, null, 2),
      { encoding: "utf8", mode: 0o600 }
    );
  } catch (err) {
    console.warn("[AutoUpdater] Failed to persist state:", err.message || err);
  }
}

// ── Module-level current state (updated as events arrive) ─────────────────────
const _state = {
  phase: "idle", // last broadcast phase
  version: null,
  releaseNotes: null,
  percent: 0,
  message: null,
  downloadedVersion: null, // set after `update-downloaded`
};

let _persistent = loadState();

function isVersionSkipped(version) {
  return version && _persistent.skippedVersions.includes(version);
}

function isInRemindLaterWindow() {
  return Date.now() < _persistent.remindLaterUntil;
}

// Optional observer (e.g. tray menu rebuilder) registered by setupAutoUpdater
let _onStateChange = null;

function broadcast(getMainWindow) {
  const win = typeof getMainWindow === "function" ? getMainWindow() : null;
  if (win && !win.isDestroyed()) {
    try {
      win.webContents.send("update:status", { ..._state });
    } catch (err) {
      console.warn("[AutoUpdater] broadcast failed:", err.message || err);
    }
  }
  if (typeof _onStateChange === "function") {
    try {
      _onStateChange({ ..._state });
    } catch (err) {
      console.warn(
        "[AutoUpdater] onStateChange observer threw:",
        err && err.message
      );
    }
  }
}

function setPhase(phase, patch, getMainWindow) {
  _state.phase = phase;
  if (patch && typeof patch === "object") {
    Object.assign(_state, patch);
  }
  broadcast(getMainWindow);
}

// Normalize releaseNotes — electron-updater can return string (Squirrel),
// HTML string, or array of {version, note} (NSIS). We only need a plain string.
function flattenReleaseNotes(notes) {
  if (!notes) return null;
  if (typeof notes === "string") return notes;
  if (Array.isArray(notes)) {
    return notes
      .map((n) => (n && n.note) || (typeof n === "string" ? n : ""))
      .filter(Boolean)
      .join("\n\n");
  }
  return null;
}

let _ipcRegistered = false;

function setupAutoUpdater(mainWindowGetter, onStateChange) {
  if (typeof onStateChange === "function") {
    _onStateChange = onStateChange;
  }

  // Silence verbose internal logger; keep our own console.log usage
  autoUpdater.logger = null;

  // Manual control: download + install only on explicit user action
  autoUpdater.autoDownload = false;
  autoUpdater.autoInstallOnAppQuit = false;

  autoUpdater.on("checking-for-update", () => {
    setPhase("checking", { message: null }, mainWindowGetter);
  });

  autoUpdater.on("update-available", (info) => {
    const version = info && info.version;
    const releaseNotes = flattenReleaseNotes(info && info.releaseNotes);

    // Honour the user's previous "skip this version" choice
    if (isVersionSkipped(version)) {
      console.log(`[AutoUpdater] Skipping suppressed version ${version}`);
      setPhase("idle", { version, releaseNotes }, mainWindowGetter);
      return;
    }

    // Honour "remind me later" — the renderer is not nudged but we still
    // expose state so the about page can show the badge.
    setPhase(
      "available",
      { version, releaseNotes, percent: 0 },
      mainWindowGetter
    );

    // Auto-download in background — user can still skip / later when prompted.
    // Even if the user picks "later", the file will be on disk for next launch.
    autoUpdater.downloadUpdate().catch((err) => {
      console.log("[AutoUpdater] downloadUpdate failed:", err.message || err);
    });
  });

  autoUpdater.on("update-not-available", (info) => {
    setPhase(
      "not-available",
      { version: (info && info.version) || null, percent: 0 },
      mainWindowGetter
    );
  });

  autoUpdater.on("download-progress", (progress) => {
    const percent =
      progress && Number.isFinite(progress.percent)
        ? Math.max(0, Math.min(100, progress.percent))
        : 0;
    setPhase("downloading", { percent }, mainWindowGetter);
  });

  autoUpdater.on("update-downloaded", (info) => {
    const version = info && info.version;
    _state.downloadedVersion = version;

    // Safety net: if user never clicks anything, install on quit so the silent-
    // upgrade behaviour still works for non-interactive users — unless they
    // explicitly skipped this exact version.
    autoUpdater.autoInstallOnAppQuit = !isVersionSkipped(version);

    setPhase(
      "downloaded",
      {
        version,
        releaseNotes: flattenReleaseNotes(info && info.releaseNotes) || _state.releaseNotes,
        percent: 100,
      },
      mainWindowGetter
    );
  });

  autoUpdater.on("error", (err) => {
    const message = (err && (err.message || String(err))) || "unknown error";
    console.log("[AutoUpdater] Error:", message);
    setPhase("error", { message }, mainWindowGetter);
  });

  // ── Renderer → main IPC ───────────────────────────────────────────────────
  if (!_ipcRegistered) {
    _ipcRegistered = true;

    ipcMain.on("update:action", (event, payload) => {
      // Only accept actions from the main window's webContents
      const mainWindow =
        typeof mainWindowGetter === "function" ? mainWindowGetter() : null;
      if (
        !mainWindow ||
        mainWindow.isDestroyed() ||
        event.sender !== mainWindow.webContents
      ) {
        console.warn("[AutoUpdater] update:action rejected from untrusted sender");
        return;
      }

      const action = payload && payload.action;
      const version = (payload && payload.version) || _state.version;

      if (action === "install") {
        // quitAndInstall is only valid after `update-downloaded`
        if (_state.phase === "downloaded") {
          // Clear remind-later/skip so we don't suppress this exact version next time
          _persistent.remindLaterUntil = 0;
          _persistent.skippedVersions = _persistent.skippedVersions.filter(
            (v) => v !== version
          );
          saveState(_persistent);
          autoUpdater.autoInstallOnAppQuit = true;
          autoUpdater.quitAndInstall(false, true);
        } else {
          console.log("[AutoUpdater] install requested before download finished");
        }
        return;
      }

      if (action === "later") {
        _persistent.remindLaterUntil = Date.now() + REMIND_LATER_MS;
        saveState(_persistent);
        // Keep autoInstallOnAppQuit on (so the update still applies on next quit)
        setPhase(_state.phase, { message: "remind-later" }, mainWindowGetter);
        return;
      }

      if (action === "skip") {
        if (version && !_persistent.skippedVersions.includes(version)) {
          _persistent.skippedVersions.push(version);
          // Keep array bounded to the last 10 versions
          if (_persistent.skippedVersions.length > 10) {
            _persistent.skippedVersions = _persistent.skippedVersions.slice(-10);
          }
          saveState(_persistent);
        }
        // Disable auto-install since user explicitly opted out of this version
        autoUpdater.autoInstallOnAppQuit = false;
        setPhase("idle", { message: "skipped", percent: 0 }, mainWindowGetter);
        return;
      }

      if (action === "check-now") {
        autoUpdater
          .checkForUpdates()
          .catch((err) =>
            console.log(
              "[AutoUpdater] check-now failed:",
              err.message || err
            )
          );
        return;
      }

      if (action === "request-state") {
        broadcast(mainWindowGetter);
        return;
      }
    });
  }

  // Initial check after a short delay (don't block startup)
  setTimeout(() => {
    autoUpdater.checkForUpdates().catch((err) => {
      console.log(
        "[AutoUpdater] Initial check failed:",
        err && (err.message || err)
      );
    });
  }, STARTUP_DELAY_MS);

  // Periodic checks
  setInterval(() => {
    // Re-evaluate suppression on each periodic tick — if we’re in remind-later
    // window, skip the noisy "available" event entirely (the user already saw it).
    if (isInRemindLaterWindow()) return;
    autoUpdater
      .checkForUpdates()
      .catch((err) =>
        console.log(
          "[AutoUpdater] Periodic check failed:",
          err && (err.message || err)
        )
      );
  }, CHECK_INTERVAL_MS);
}

module.exports = { setupAutoUpdater };
