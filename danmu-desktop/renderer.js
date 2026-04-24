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
  saveStartupAnimationSettings,
  loadStartupAnimationSettings,
} = require("./renderer-modules/settings");
const {
  DEFAULT_DANMU_SETTINGS,
  initDanmuSettings,
  loadDanmuSettings,
} = require("./renderer-modules/danmu-settings");
const { initTrackManager } = require("./renderer-modules/track-manager");
const {
  initOverlayControls,
  initConnectionStatusHandler,
} = require("./renderer-modules/ws-manager");
const { initGlobalEffects } = require("./renderer-modules/konami");
const { initParticleBg } = require("./renderer-modules/particle-bg");

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

// Danmu display settings (shared between danmu-settings and ws-manager)
const danmuSettings = { ...DEFAULT_DANMU_SETTINGS };

// Main initialization — runs after DOM is ready.
// Uses try/finally so .main-content.loaded is always added even if init throws.
const initRenderer = async () => {
  try {
    // ── Synchronous module initialization (before any awaits) ────────────
    initTrackManager();
    initGlobalEffects();

    initOverlayControls({
      state,
      showToast,
      t,
      validateIP,
      validatePort,
      saveSettings,
      saveStartupAnimationSettings,
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

    initDanmuSettings(danmuSettings, showToast, t);
    loadDanmuSettings(danmuSettings);

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
        await Promise.race([
          i18n.loadLanguage(),
          new Promise((resolve) => setTimeout(resolve, 2000)),
        ]);
        i18n.updateUI();

        const languageSelect = document.getElementById("language-select");
        if (languageSelect) {
          languageSelect.value = i18n.currentLang;
          languageSelect.addEventListener("change", (e) => {
            i18n.setLanguage(e.target.value);
          });
        }
      } catch (_) {
        // i18n failure — continue with HTML defaults
      }
    }

    // ── Screen select population ─────────────────────────────────────────
    const api = window.API;
    if (api) {
      const screenSelect = document.getElementById("screen-select");
      if (screenSelect) {
        const selectedBeforePopulate = parseInt(screenSelect.value, 10);

        api.getDisplays().then((displays) => {
          screenSelect.innerHTML = "";
          displays.forEach((display, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = `Display ${index + 1} (${display.size.width}x${
              display.size.height
            }) ${display.primary ? "[Primary]" : ""}`;
            screenSelect.appendChild(option);
          });

          const hasSavedSelection =
            Number.isInteger(selectedBeforePopulate) &&
            selectedBeforePopulate >= 0 &&
            selectedBeforePopulate < displays.length;
          const primaryIndex = displays.findIndex((display) => display.primary);
          const fallbackIndex = primaryIndex >= 0 ? primaryIndex : 0;
          screenSelect.value = String(
            hasSavedSelection ? selectedBeforePopulate : fallbackIndex
          );
        });
      }
    }
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
