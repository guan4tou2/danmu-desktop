// localStorage settings persistence
const { sanitizeLog } = require("../shared/utils");

function saveSettings(host, port, displayIndex, syncMultiDisplay) {
  localStorage.setItem(
    "danmu-settings",
    JSON.stringify({ host, port, displayIndex, syncMultiDisplay })
  );
}

function loadSettings() {
  try {
    const saved = localStorage.getItem("danmu-settings");
    return saved ? JSON.parse(saved) : null;
  } catch (e) {
    console.error("[loadSettings] Error:", sanitizeLog(e.message));
    return null;
  }
}

function saveStartupAnimationSettings(enabled, type, customText) {
  localStorage.setItem(
    "danmu-startup-animation",
    JSON.stringify({ enabled, type, customText })
  );
}

function loadStartupAnimationSettings() {
  try {
    const saved = localStorage.getItem("danmu-startup-animation");
    return saved
      ? JSON.parse(saved)
      : { enabled: true, type: "link-start", customText: "" };
  } catch (e) {
    console.error(
      "[loadStartupAnimationSettings] Error:",
      sanitizeLog(e.message)
    );
    return { enabled: true, type: "link-start", customText: "" };
  }
}

module.exports = {
  saveSettings,
  loadSettings,
  saveStartupAnimationSettings,
  loadStartupAnimationSettings,
};
