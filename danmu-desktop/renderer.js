// Renderer entry point - orchestrates all renderer modules
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

// Initialize track manager and showdanmu (used in both main and child windows)
initTrackManager();

// Initialize global effect handlers (konami, startup animation, display options)
initGlobalEffects();

// Initialize overlay controls (start/stop buttons, connection status)
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

// Initialize connection status handler (IPC events from main process)
initConnectionStatusHandler({
  state,
  showToast,
  t,
  getLocalizedText,
  updateConnectionStatus,
  hideConnectionStatus,
  getCurrentStatus,
});

// Initialize danmu settings UI (sliders, preview, batch test)
initDanmuSettings(danmuSettings, showToast, t);
loadDanmuSettings(danmuSettings);

// Canvas 2D particle network background (main window only)
const { initParticleBg } = require("./renderer-modules/particle-bg");
if (document.getElementById("vanta-bg")) {
  initParticleBg("#vanta-bg");
}

// Settings export / import buttons (main window only)
const _exportBtn = document.getElementById("export-settings-btn");
if (_exportBtn) {
  _exportBtn.addEventListener("click", () => {
    exportSettings();
    showToast(t("exportSettings") + " OK", "success");
  });
}

const _importBtn = document.getElementById("import-settings-btn");
if (_importBtn) {
  _importBtn.addEventListener("click", async () => {
    const result = await importSettings();
    showToast(result.message, result.ok ? "success" : "error");
  });
}

// i18n and display population (main window only)
document.addEventListener("DOMContentLoaded", async () => {
  if (typeof i18n !== "undefined") {
    await i18n.loadLanguage();
    i18n.updateUI();

    const languageSelect = document.getElementById("language-select");
    if (languageSelect) {
      languageSelect.value = i18n.currentLang;
      languageSelect.addEventListener("change", (e) => {
        i18n.setLanguage(e.target.value);
      });
    }
  }

  const api = window.API;
  if (!api) return;

  const screenSelect = document.getElementById("screen-select");
  if (!screenSelect) return;

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
    screenSelect.value = String(hasSavedSelection ? selectedBeforePopulate : fallbackIndex);
  });
});
