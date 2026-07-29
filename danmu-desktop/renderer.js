// Renderer entry point - orchestrates all renderer modules
require("./renderer-modules/store");
require("./renderer-modules/events");
const { showToast } = require("./renderer-modules/toast");
const { exportSettings, importSettings } = require("./renderer-modules/settings-io");
const {
  updateConnectionStatus,
  hideConnectionStatus,
  getLocalizedText,
  getCurrentStatus,
} = require("./renderer-modules/connection-status");
const { validateIP, validatePort } = require("./renderer-modules/validation");
const {
  saveSettings,
  loadSettings,
  loadStartupAnimationSettings,
} = require("./renderer-modules/settings");
const { initTrackManager } = require("./renderer-modules/track-manager");
const {
  initOverlayControls,
  initConnectionStatusHandler,
} = require("./renderer-modules/ws-manager");
const { initGlobalEffects } = require("./renderer-modules/konami");
const { initParticleBg } = require("./renderer-modules/particle-bg");
const { initUpdateStatus } = require("./renderer-modules/update-status");
const { initConnSection } = require("./renderer-modules/conn-section-wire");
const { initWindowPicker } = require("./renderer-modules/window-picker");
const { initAppShellMeta } = require("./renderer-modules/app-shell-meta");
const { initDisplaySelect } = require("./renderer-modules/display-select");

// Translation helper
function t(key) {
  return typeof i18n !== "undefined" ? i18n.t(key) : key;
}

// Shared mutable state for overlay connection
const state = {
  overlayActive: false,
  connectionFailureNotified: false,
  connectionSuccessNotified: false,
};

// Main initialization — runs after DOM is ready.
// Uses try/finally so .main-content.loaded is always added even if init throws.
const initRenderer = async () => {
  // Preload bridge — declared before any use; a late declaration inside the
  // same block once TDZ-crashed init halfway (issue: initWindowPicker at the
  // top referenced it before the old `const api` further down).
  const api = window.API;
  try {
    // ── Synchronous module initialization (before any awaits) ────────────
    initTrackManager();
    initGlobalEffects();

    // Conn section wire — unified Server field ↔ hidden host/port compat
    // fields, canonical preview, and ⚐ 測試 button. Must run BEFORE
    // initOverlayControls hydrates from settings.
    initConnSection({});

    initOverlayControls({
      state,
      showToast,
      t,
      validateIP,
      validatePort,
      saveSettings,
      loadSettings,
      loadStartupAnimationSettings,
      updateConnectionStatus,
      hideConnectionStatus,
    });

    initConnectionStatusHandler({
      state,
      showToast,
      t,
      getLocalizedText,
      updateConnectionStatus,
      hideConnectionStatus,
      getCurrentStatus,
    });

    // Auto-updater UX (P2-3) — title bar badge + About card + toast.
    // Safe no-op if API.onUpdateStatus is missing (e.g. older preload).
    initUpdateStatus({ t, showToast });
    initWindowPicker(api);
    initAppShellMeta({ api });

    // Canvas 2D particle network background (main window only)
    if (document.getElementById("vanta-bg")) {
      initParticleBg("#vanta-bg");
    }

    // Settings export / import buttons (main window only)
    const exportBtn = document.getElementById("export-settings-btn");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        exportSettings();
        showToast(t("exportSettings") + " OK", "success");
      });
    }

    const importBtn = document.getElementById("import-settings-btn");
    if (importBtn) {
      importBtn.addEventListener("click", async () => {
        const result = await importSettings();
        showToast(result.message, result.ok ? "success" : "error");
      });
    }

    // ── i18n (async, with timeout guard to prevent hang in CI) ──────────
    if (typeof i18n !== "undefined") {
      try {
        // 2026-05-16: language selector removed — Electron follows the
        // system locale via window.API.getSystemLocale() (resolves to
        // main process `app.getLocale()`); no in-app toggle.
        await Promise.race([
          i18n.loadLanguage(),
          new Promise((resolve) => setTimeout(resolve, 2000)),
        ]);
        i18n.updateUI();
      } catch (_) {
        // i18n failure — continue with HTML defaults
      }
    }

    // ── Screen select population ─────────────────────────────────────────
    // Extracted to display-select.js; also re-populates on hotplug via
    // update-display-options. Kept after the i18n await so first-populate
    // ordering vs. window-picker is unchanged.
    initDisplaySelect({ api });
  } finally {
    // Always signal that the renderer has finished initializing.
    // E2e tests wait for this class before interacting with the page.
    // Post design-v2 retrofit the wrapper class is `client-main`; target by
    // the stable `#main-content` id which exists in both shells.
    const mainContent =
      document.querySelector("#main-content") ||
      document.querySelector(".main-content") ||
      document.querySelector(".client-main");
    if (mainContent) mainContent.classList.add("loaded");
  }
};

// Run after DOM is ready — handles the case where DOMContentLoaded has already
// fired (e.g. readyState is "interactive" or "complete").
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initRenderer());
} else {
  initRenderer();
}
