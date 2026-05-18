window.addEventListener("DOMContentLoaded", async () => {
  const $ = (sel) => document.querySelector(sel);

  // Version
  try {
    const v = await window.API.getAppVersion();
    $("#appVersion").textContent = "v" + v;
  } catch (_) {}

  // Initial state from main process
  try {
    const state = await window.API.getTrayPopoverState();
    applyState(state);
  } catch (_) {}

  // Live updates
  window.API.onTrayPopoverUpdate((state) => applyState(state));

  function applyState(s) {
    if (!s) return;

    // Connection
    const dot = $("#statusDot");
    const text = $("#statusText");
    const url = $("#serverUrl");
    dot.className = "popover-status-dot";
    if (s.connected) {
      dot.classList.add("connected");
      text.textContent = "Connected";
    } else if (s.connecting) {
      dot.classList.add("connecting");
      text.textContent = "Connecting…";
    } else {
      text.textContent = "Disconnected";
    }
    url.textContent = s.serverUrl || "";

    // Overlay
    $("#overlayCount").textContent = String(s.overlayCount || 0);

    // Idle toggle
    const toggle = $("#idleToggle");
    toggle.disabled = !s.overlayCount;
    toggle.classList.toggle("active", !!s.idleActive);

    // Update banner
    const banner = $("#updateBanner");
    const utext = $("#updateText");
    if (s.updatePhase === "downloaded" && s.updateVersion) {
      utext.textContent = "↻ v" + s.updateVersion + " ready — restart to install";
      banner.hidden = false;
    } else if (s.updatePhase === "available" && s.updateVersion) {
      utext.textContent = "↓ v" + s.updateVersion + " available";
      banner.hidden = false;
    } else if (s.updatePhase === "downloading") {
      utext.textContent = "↓ Downloading update…";
      banner.hidden = false;
    } else {
      banner.hidden = true;
    }
  }

  // Idle toggle
  $("#idleToggle").addEventListener("click", () => {
    window.API.toggleOverlayIdle("toggle");
  });

  // Actions
  $("#btnOpen").addEventListener("click", () => {
    window.API.trayPopoverAction("open-main");
  });
  $("#btnAbout").addEventListener("click", () => {
    window.API.trayPopoverAction("about");
  });
  $("#btnQuit").addEventListener("click", () => {
    window.API.trayPopoverAction("quit");
  });
});
