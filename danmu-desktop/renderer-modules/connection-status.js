// Connection status UI management

let currentConnectionStatus = null;
let statusUpdateTimeout = null;
let statusHideTimeout = null;

// Status indicator colours — read from shared/tokens.css custom properties
// (2026-07-07 UIUX polish E3) with a hex fallback so behaviour is identical
// if tokens.css hasn't loaded yet (or in the jsdom test environment, which
// doesn't fetch external stylesheets). Read once at module load — these are
// static design tokens, not values that change at runtime.
function readToken(name, fallback) {
  if (typeof document === "undefined" || typeof getComputedStyle !== "function") {
    return fallback;
  }
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

const STATUS_COLORS = {
  idle: { bg: readToken("--color-surface-muted", "#475569"), shadow: "none" },
  connecting: {
    bg: readToken("--color-accent", "#06b6d4"),
    shadow: `0 0 10px ${readToken("--glow-accent", "rgba(6, 182, 212, 0.6)")}`,
  },
  connected: {
    bg: readToken("--color-connected-bright", "#10b981"),
    shadow: `0 0 10px ${readToken("--glow-connected-bright", "rgba(16, 185, 129, 0.6)")}`,
  },
  disconnected: {
    bg: readToken("--color-error", "#ef4444"),
    shadow: `0 0 10px ${readToken("--ring-error-strong", "rgba(239, 68, 68, 0.6)")}`,
  },
  "connection-failed": {
    bg: readToken("--color-error-hover", "#dc2626"),
    shadow: `0 0 12px ${readToken("--glow-error-hover", "rgba(220, 38, 38, 0.7)")}`,
  },
};

function getLocalizedText(key, fallbackEn = "", fallbackZh = "") {
  const localized = typeof i18n !== "undefined" ? i18n.t(key) : key;
  if (localized && localized !== key) {
    return localized;
  }
  if (typeof i18n !== "undefined" && i18n.currentLang) {
    if (i18n.currentLang.startsWith("zh") && fallbackZh) {
      return fallbackZh;
    }
  }
  return fallbackEn || fallbackZh || key;
}

function updateConnectionStatus(status, text, shouldShow = true) {
  if (currentConnectionStatus === status && shouldShow) {
    return;
  }

  if (statusHideTimeout) {
    clearTimeout(statusHideTimeout);
    statusHideTimeout = null;
  }

  if (statusUpdateTimeout) {
    clearTimeout(statusUpdateTimeout);
  }

  statusUpdateTimeout = setTimeout(() => {
    const statusContainer = document.getElementById("connection-status");
    const statusIndicator = document.getElementById("status-indicator");
    const statusText = document.getElementById("status-text");

    if (!statusContainer || !statusIndicator || !statusText) return;

    currentConnectionStatus = status;

    // Update tray status label
    if (typeof window !== "undefined" && window.API && window.API.updateTrayStatus) {
      const trayLabels = {
        idle: "⊘ 未連線",
        connecting: "◐ 連線中…",
        connected: "● 已連線",
        disconnected: "⊘ 連線中斷",
        "connection-failed": "⊘ 連線失敗",
      };
      const label = shouldShow ? (trayLabels[status] || "⊘ 未連線") : "⊘ 未連線";
      let serverUrl = "";
      try {
        const host = localStorage.getItem("serverHost") || "";
        const port = localStorage.getItem("serverPort") || "";
        if (host) serverUrl = port ? host + ":" + port : host;
      } catch (_) {}
      window.API.updateTrayStatus(label, serverUrl);
    }

    if (shouldShow) {
      statusContainer.classList.remove("hidden");
      statusText.textContent = text;

      const color = STATUS_COLORS[status] || STATUS_COLORS.idle;
      statusIndicator.style.backgroundColor = color.bg;
      statusIndicator.style.boxShadow = color.shadow;
    } else {
      statusContainer.classList.add("hidden");
      currentConnectionStatus = null;
    }

    // Title bar status dot — prototype desktop.jsx ControlWindow:160
    const titleDot = document.querySelector(".client-titlebar-status-dot");
    const titleText = document.querySelector(".client-titlebar-status-text");
    if (titleDot && titleText) {
      const titleMap = {
        idle:          { key: "disconnected",       label: "DISCONNECTED" },
        connecting:    { key: "connecting",         label: "CONNECTING…" },
        connected:     { key: "connected",          label: "CONNECTED" },
        disconnected:  { key: "disconnected",       label: "DISCONNECTED" },
        "connection-failed": { key: "disconnected", label: "FAILED" },
      };
      const m = titleMap[status] || titleMap.disconnected;
      titleDot.setAttribute("data-client-status", m.key);
      titleText.textContent = m.label;
    }

    statusUpdateTimeout = null;
  }, 100);
}

function hideConnectionStatus(delay = 2000) {
  if (statusHideTimeout) {
    clearTimeout(statusHideTimeout);
  }

  statusHideTimeout = setTimeout(() => {
    updateConnectionStatus(null, "", false);
    statusHideTimeout = null;
  }, delay);
}

function getCurrentStatus() {
  return currentConnectionStatus;
}

module.exports = {
  updateConnectionStatus,
  hideConnectionStatus,
  getLocalizedText,
  getCurrentStatus,
};
