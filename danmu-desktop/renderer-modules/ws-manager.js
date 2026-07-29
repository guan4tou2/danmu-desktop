// WebSocket overlay connection management and UI handlers.
//
// L3 (2026-07-29): the hidden #start-button/#stop-button proxy chain was
// removed. The runtime control surface is a direct-call API exposed as
// window.OverlayControl { start, stop, isRunning, subscribe } — consumed by
// the non-bundled client-nav.js for the visible
// [data-client-overlay-button]. State changes are published on the events
// bus ("overlay:state") instead of being observed off button.disabled
// mutations.
const { sanitizeLog } = require("../shared/utils");
const events = require("./events");

// Shared UI element references — queried once, reused by both init functions
let _els = null;
// Dependencies captured by initOverlayControls — startOverlay/stopOverlay
// need them when invoked later through window.OverlayControl.
let _deps = null;

function getOverlayElements() {
  if (_els) return _els;
  _els = {
    ipInput: document.getElementById("host-input"),
    portInput: document.getElementById("port-input"),
    wsTokenInput: document.getElementById("ws-token-input"),
    screenSelect: document.getElementById("screen-select"),
    syncMultiDisplayCheckbox: document.getElementById("sync-multi-display-checkbox"),
  };
  return _els;
}

function isOverlayRunning() {
  return !!(_deps && _deps.state.overlayActive);
}

/** Subscribe to overlay state changes; returns an unsubscribe function. */
function subscribeOverlayState(fn) {
  events.on("overlay:state", fn);
  return () => events.off("overlay:state", fn);
}

/**
 * Single UI transition point — every connection-state branch must route
 * through here, or the subscribed visible button (client-nav.js) freezes on
 * a stale label. mode: "idle" | "connecting" | "connected" | "reconnecting"
 * | "failed". Inputs are locked while the overlay session is live.
 */
function setUiState(mode) {
  const { ipInput, portInput, wsTokenInput, screenSelect, syncMultiDisplayCheckbox } =
    getOverlayElements();
  const running = mode === "connecting" || mode === "connected" || mode === "reconnecting";

  if (ipInput) ipInput.disabled = running;
  if (portInput) portInput.disabled = running;
  if (wsTokenInput) wsTokenInput.disabled = running;
  if (syncMultiDisplayCheckbox) syncMultiDisplayCheckbox.disabled = running;
  if (screenSelect) {
    screenSelect.disabled =
      running || !!(syncMultiDisplayCheckbox && syncMultiDisplayCheckbox.checked);
  }

  events.emit("overlay:state", { running, status: mode });
}

/**
 * Starts the overlay session: validates host/port, persists settings, and
 * asks main to create the child window(s). No-op with an error toast when
 * validation fails (same semantics as the old start-button click handler).
 */
function startOverlay() {
  if (!_deps) return;
  const {
    state,
    showToast,
    t,
    validateIP,
    validatePort,
    saveSettings,
    loadStartupAnimationSettings,
    updateConnectionStatus,
  } = _deps;
  const { ipInput, portInput, wsTokenInput, screenSelect, syncMultiDisplayCheckbox } =
    getOverlayElements();
  if (!ipInput || !portInput) return;

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
  // v5.3.0+: WSS-only deployment uses the same HTTPS/web port with /ws.
  // The legacy split desktop transport was removed.

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

  setUiState("connecting");
  updateConnectionStatus("connecting", t("statusConnecting"));
  showToast(t("toastStarting"), "info");
}

/** Stops the overlay session and resets the UI to idle. */
function stopOverlay() {
  if (!_deps) return;
  const { state, showToast, t, updateConnectionStatus, hideConnectionStatus } = _deps;

  state.overlayActive = false;
  state.connectionFailureNotified = false;
  state.connectionSuccessNotified = false;

  setUiState("idle");
  updateConnectionStatus("idle", t("statusIdle"));
  showToast(t("toastStopped"), "info");
  hideConnectionStatus(2000);

  const api = window.API;
  if (!api) {
    console.error("[Renderer] window.API not available");
    return;
  }
  api.close();
}

function initOverlayControls(deps) {
  _deps = deps;
  const {
    showToast,
    t,
    validateIP,
    validatePort,
    loadSettings,
    loadStartupAnimationSettings,
  } = deps;
  const { ipInput, portInput, wsTokenInput, screenSelect, syncMultiDisplayCheckbox } =
    getOverlayElements();

  if (!ipInput || !portInput) return;

  // Direct-call control surface for the non-bundled client-nav.js (loaded
  // after the renderer bundle in index.html, so this is always defined
  // before its bootstrap runs). Main window only — the overlay bundle
  // doesn't include this module.
  window.OverlayControl = {
    start: startOverlay,
    stop: stopOverlay,
    isRunning: isOverlayRunning,
    subscribe: subscribeOverlayState,
  };

  // Sync multi-display checkbox
  if (syncMultiDisplayCheckbox) {
    syncMultiDisplayCheckbox.addEventListener("change", () => {
      if (syncMultiDisplayCheckbox.checked) {
        screenSelect.disabled = true;
      } else if (!isOverlayRunning()) {
        screenSelect.disabled = false;
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

  window.API.onConnectionStatus((data) => {
    console.log("[Renderer] Connection status update:", data);

    if (data.status === "connected") {
      if (getCurrentStatus() !== "connected") {
        state.overlayActive = true;
        state.connectionFailureNotified = false;
        setUiState("connected");
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
        setUiState("reconnecting");
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
      // Dedupe guard: repeated connection-failed events after the first are
      // dropped whole — the UI was already reset to "failed" by the first
      // one, so skipping setUiState here can't strand the visible button.
      if (state.connectionFailureNotified) return;
      state.connectionFailureNotified = true;
      state.overlayActive = false;
      state.connectionSuccessNotified = false;

      setUiState("failed");

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

      setUiState("idle");
      updateConnectionStatus("idle", t("statusStopped"));
    } else if (data.status === "display-migrated") {
      // Display unplugged → main migrated/destroyed overlay windows.
      // Bounds-only change: the WS connection is unaffected, so leave
      // inputs, state.overlayActive and the status line untouched (no
      // setUiState — subscribers would only re-render the same state).
      showToast(
        getLocalizedText(
          "toastDisplayMigrated",
          "Display disconnected — overlay moved to the primary display",
          "螢幕已拔除，Desktop 已移至主螢幕"
        ),
        "warning"
      );
    } else if (data.status === "validation-error") {
      // Main-side validation rejected a payload (e.g. test danmu). Toast
      // only — the connection is untouched, so no state or UI changes.
      showToast(
        getLocalizedText(
          "toastValidationFailed",
          "Validation failed — message not sent",
          "驗證失敗，訊息未送出"
        ),
        "error"
      );
    }
  });
}

module.exports = {
  initOverlayControls,
  initConnectionStatusHandler,
  startOverlay,
  stopOverlay,
  isOverlayRunning,
  subscribeOverlayState,
};
