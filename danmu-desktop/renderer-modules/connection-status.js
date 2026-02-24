// Connection status UI management

let currentConnectionStatus = null;
let statusUpdateTimeout = null;
let statusHideTimeout = null;

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

    if (shouldShow) {
      statusContainer.classList.remove("hidden");
      statusText.textContent = text;

      const statusColors = {
        idle: { bg: "#475569", shadow: "none" },
        connecting: { bg: "#06b6d4", shadow: "0 0 10px rgba(6, 182, 212, 0.6)" },
        connected: { bg: "#10b981", shadow: "0 0 10px rgba(16, 185, 129, 0.6)" },
        disconnected: { bg: "#ef4444", shadow: "0 0 10px rgba(239, 68, 68, 0.6)" },
        "connection-failed": { bg: "#dc2626", shadow: "0 0 12px rgba(220, 38, 38, 0.7)" },
      };

      const color = statusColors[status] || statusColors.idle;
      statusIndicator.style.backgroundColor = color.bg;
      statusIndicator.style.boxShadow = color.shadow;
    } else {
      statusContainer.classList.add("hidden");
      currentConnectionStatus = null;
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
