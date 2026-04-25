// WebSocket overlay connection management and UI handlers
const { sanitizeLog } = require("../shared/utils");

// Shared UI element references — queried once, reused by both init functions
let _els = null;

function getOverlayElements() {
  if (_els) return _els;
  _els = {
    startButton: document.getElementById("start-button"),
    stopButton: document.getElementById("stop-button"),
    ipInput: document.getElementById("host-input"),
    portInput: document.getElementById("port-input"),
    wsTokenInput: document.getElementById("ws-token-input"),
    screenSelect: document.getElementById("screen-select"),
    syncMultiDisplayCheckbox: document.getElementById("sync-multi-display-checkbox"),
  };
  return _els;
}

function initOverlayControls({
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
}) {
  const {
    startButton,
    stopButton,
    ipInput,
    portInput,
    wsTokenInput,
    screenSelect,
    syncMultiDisplayCheckbox,
  } = getOverlayElements();

  if (!startButton || !stopButton || !ipInput || !portInput) return;

  // Start button handler
  startButton.addEventListener("click", () => {
    const hostValue = ipInput.value.trim();
    const portValue = portInput.value.trim();

    if (!hostValue) {
      showToast(t("errorEmptyHost"), "error");
      ipInput.classList.add("input-invalid");
      return;
    }

    if (!validateIP(hostValue)) {
      showToast(t("errorInvalidHost"), "error");
      ipInput.classList.add("input-invalid");
      return;
    }

    if (!portValue) {
      showToast(t("errorEmptyPort"), "error");
      portInput.classList.add("input-invalid");
      return;
    }

    if (!validatePort(portValue)) {
      showToast(t("errorInvalidPort"), "error");
      portInput.classList.add("input-invalid");
      return;
    }

    const IP = hostValue;
    const PORT = portValue;
    const wsToken = wsTokenInput ? wsTokenInput.value.trim() : "";
    const displayIndex = parseInt(screenSelect.value);
    const enableSyncMultiDisplay = syncMultiDisplayCheckbox.checked;

    // Startup animation settings come from persisted prefs (the legacy form
    // controls were removed in P5-2). Settings still ship to child windows so
    // overlays can show LINK START / 領域展開 on first connect.
    const persistedAnim = loadStartupAnimationSettings();
    const startupAnimationSettings = {
      enabled: persistedAnim.enabled,
      type: persistedAnim.type,
      customText: persistedAnim.customText,
    };

    saveSettings(IP, PORT, displayIndex, enableSyncMultiDisplay, wsToken);

    console.log(
      `[Renderer] Starting overlay with: IP=${sanitizeLog(IP)}, PORT=${sanitizeLog(
        PORT
      )}, DisplayIndex=${displayIndex}, SyncMultiDisplay=${enableSyncMultiDisplay}`
    );

    const api = window.API;
    if (!api) {
      console.error("[Renderer] window.API not available");
      return;
    }
    api.create(IP, PORT, displayIndex, enableSyncMultiDisplay, startupAnimationSettings, wsToken);

    state.overlayActive = true;
    state.connectionFailureNotified = false;
    state.connectionSuccessNotified = false;

    startButton.disabled = true;
    startButton.setAttribute("aria-busy", "true");
    startButton.setAttribute("aria-disabled", "true");
    stopButton.disabled = false;
    stopButton.setAttribute("aria-disabled", "false");
    ipInput.disabled = true;
    portInput.disabled = true;
    if (wsTokenInput) wsTokenInput.disabled = true;
    screenSelect.disabled = true;
    syncMultiDisplayCheckbox.disabled = true;

    startButton.classList.remove("btn-primary", "btn-connected");
    startButton.classList.add("btn-connecting");
    stopButton.classList.remove("btn-stopped");
    stopButton.classList.add("btn-active");

    updateConnectionStatus("connecting", t("statusConnecting"));
    showToast(t("toastStarting"), "info");
  });

  // Stop button handler
  stopButton.addEventListener("click", () => {
    startButton.disabled = false;
    startButton.setAttribute("aria-busy", "false");
    startButton.setAttribute("aria-disabled", "false");
    stopButton.disabled = true;
    stopButton.setAttribute("aria-disabled", "true");
    ipInput.disabled = false;
    portInput.disabled = false;
    if (wsTokenInput) wsTokenInput.disabled = false;
    syncMultiDisplayCheckbox.disabled = false;
    syncMultiDisplayCheckbox.dispatchEvent(new Event("change"));

    state.overlayActive = false;
    state.connectionFailureNotified = false;
    state.connectionSuccessNotified = false;

    startButton.classList.remove("btn-connecting", "btn-connected");
    startButton.classList.add("btn-primary");
    stopButton.classList.remove("btn-active");
    stopButton.classList.add("btn-stopped");

    updateConnectionStatus("idle", t("statusIdle"));
    showToast(t("toastStopped"), "info");
    hideConnectionStatus(2000);

    const api = window.API;
    if (!api) {
      console.error("[Renderer] window.API not available");
      return;
    }
    api.close();
  });

  // Sync multi-display checkbox
  if (syncMultiDisplayCheckbox) {
    syncMultiDisplayCheckbox.addEventListener("change", () => {
      if (syncMultiDisplayCheckbox.checked) {
        screenSelect.disabled = true;
      } else {
        if (!startButton.disabled) {
          screenSelect.disabled = false;
        }
      }
    });
  }

  // Real-time input validation
  ipInput.addEventListener("input", () => {
    ipInput.classList.remove("input-valid", "input-invalid");
    if (ipInput.value.trim() && validateIP(ipInput.value.trim())) {
      ipInput.classList.add("input-valid");
    } else if (ipInput.value.trim()) {
      ipInput.classList.add("input-invalid");
    }
  });

  portInput.addEventListener("input", () => {
    portInput.classList.remove("input-valid", "input-invalid");
    if (portInput.value.trim() && validatePort(portInput.value.trim())) {
      portInput.classList.add("input-valid");
    } else if (portInput.value.trim()) {
      portInput.classList.add("input-invalid");
    }
  });

  // Load saved connection settings
  const savedSettings = loadSettings();
  if (savedSettings) {
    ipInput.value = savedSettings.host || "";
    portInput.value = savedSettings.port || "";
    if (wsTokenInput && typeof savedSettings.wsToken === "string") {
      wsTokenInput.value = savedSettings.wsToken;
    }
    if (savedSettings.displayIndex !== undefined) {
      screenSelect.value = savedSettings.displayIndex;
    }
    if (savedSettings.syncMultiDisplay !== undefined) {
      syncMultiDisplayCheckbox.checked = savedSettings.syncMultiDisplay;
    }
    ipInput.dispatchEvent(new Event("input"));
    portInput.dispatchEvent(new Event("input"));
    showToast(t("toastSettingsLoaded"), "info");
  }

  // Startup animation settings — UI controls were removed in P5-2; this
  // reduces to a touch of `loadStartupAnimationSettings()` so the underlying
  // localStorage entry is created with sensible defaults if missing.
  loadStartupAnimationSettings();

  // Initial sync multi-display state
  if (syncMultiDisplayCheckbox && syncMultiDisplayCheckbox.checked) {
    screenSelect.disabled = true;
  }
}

function initConnectionStatusHandler({
  state,
  showToast,
  t,
  getLocalizedText,
  updateConnectionStatus,
  hideConnectionStatus,
  getCurrentStatus,
}) {
  if (!window.API || typeof window.API.onConnectionStatus !== "function") return;

  // Reuse cached elements — no second getElementById
  const { startButton, stopButton, ipInput, portInput, screenSelect, syncMultiDisplayCheckbox } =
    getOverlayElements();

  window.API.onConnectionStatus((data) => {
    console.log("[Renderer] Connection status update:", data);

    if (data.status === "connected") {
      if (getCurrentStatus() !== "connected") {
        state.overlayActive = true;
        state.connectionFailureNotified = false;
        if (startButton) {
          startButton.disabled = true;
          startButton.setAttribute("aria-disabled", "true");
          startButton.setAttribute("aria-busy", "false");
          startButton.classList.remove("btn-connecting");
          startButton.classList.add("btn-connected");
        }
        updateConnectionStatus("connected", t("statusConnected"));
      }
      if (!state.connectionSuccessNotified) {
        showToast(t("toastConnected"), "success");
        state.connectionSuccessNotified = true;
      }
    } else if (data.status === "disconnected") {
      if (!state.overlayActive) return;
      const wasConnected = getCurrentStatus() === "connected";
      if (getCurrentStatus() !== "disconnected") {
        if (startButton) {
          startButton.disabled = true;
          startButton.setAttribute("aria-disabled", "true");
          startButton.classList.remove("btn-connected");
          startButton.classList.add("btn-connecting");
        }
        const attempt = data.attempt;
        const max = data.maxAttempts;
        const attemptLabel =
          attempt != null && max != null ? ` (${attempt}/${max})` : "";
        updateConnectionStatus("disconnected", t("statusDisconnected") + attemptLabel);
        if (wasConnected) {
          showToast(t("toastReconnecting"), "warning");
        }
      }
      state.connectionSuccessNotified = false;
    } else if (data.status === "connection-failed") {
      if (state.connectionFailureNotified) return;
      state.connectionFailureNotified = true;
      state.overlayActive = false;
      state.connectionSuccessNotified = false;

      if (startButton) {
        startButton.disabled = false;
        startButton.setAttribute("aria-busy", "false");
        startButton.setAttribute("aria-disabled", "false");
        startButton.classList.remove("btn-connecting", "btn-connected");
        startButton.classList.add("btn-primary");
      }
      if (stopButton) {
        stopButton.disabled = true;
        stopButton.setAttribute("aria-disabled", "true");
        stopButton.classList.remove("btn-active");
        stopButton.classList.add("btn-stopped");
      }
      if (ipInput) ipInput.disabled = false;
      if (portInput) portInput.disabled = false;
      if (screenSelect) screenSelect.disabled = false;
      if (syncMultiDisplayCheckbox) syncMultiDisplayCheckbox.disabled = false;

      const failureStatusText = getLocalizedText(
        "statusConnectionFailed",
        "Connection failed",
        "連線失敗"
      );
      const failureToastText = getLocalizedText(
        "toastConnectionFailed",
        "Unable to reach the server. Please verify settings.",
        "無法連線至伺服器，請檢查設定"
      );
      updateConnectionStatus("connection-failed", failureStatusText);
      showToast(failureToastText, "error");
      hideConnectionStatus(3000);
    } else if (data.status === "stopped") {
      state.overlayActive = false;
      state.connectionFailureNotified = false;

      if (startButton) {
        startButton.disabled = false;
        startButton.setAttribute("aria-busy", "false");
        startButton.setAttribute("aria-disabled", "false");
        startButton.classList.remove("btn-connecting", "btn-connected");
        startButton.classList.add("btn-primary");
      }
      if (stopButton) {
        stopButton.disabled = true;
        stopButton.setAttribute("aria-disabled", "true");
        stopButton.classList.remove("btn-active");
        stopButton.classList.add("btn-stopped");
      }
      if (ipInput) ipInput.disabled = false;
      if (portInput) portInput.disabled = false;
      if (screenSelect) screenSelect.disabled = false;
      if (syncMultiDisplayCheckbox) syncMultiDisplayCheckbox.disabled = false;

      updateConnectionStatus("idle", t("statusStopped"));
    }
  });
}

module.exports = { initOverlayControls, initConnectionStatusHandler };
