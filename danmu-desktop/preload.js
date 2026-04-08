// Content of danmu-desktop/preload.js

// Add this at the top if not already present
const { contextBridge, ipcRenderer } = require("electron");

console.log("[Preload] Script started V2"); // V2 to differentiate from previous logs

window.addEventListener("DOMContentLoaded", () => {
  console.log("[Preload] DOMContentLoaded event fired V2");
  // Original DOMContentLoaded content (replaceText calls) can remain if they were there
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };
  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});

try {
  console.log("[Preload] Attempting to expose API via contextBridge V2...");
  // Store per-channel handler references so we remove only our own listener,
  // not any other listeners that may be registered on the same channel.
  const _handlers = {};
  contextBridge.exposeInMainWorld("API", {
    getDisplays: () => {
      console.log("[Preload] API.getDisplays called");
      return ipcRenderer.invoke("getDisplays");
    },
    create: (ip, port, displayIndex, enableSyncMultiDisplay, startupAnimationSettings, wsAuthToken = "") => {
      console.log(
        "[Preload] API.create called with:",
        ip,
        port,
        displayIndex,
        enableSyncMultiDisplay,
        startupAnimationSettings,
        wsAuthToken ? "(token set)" : "(no token)"
      );
      ipcRenderer.send(
        "createChild",
        ip,
        port,
        displayIndex,
        enableSyncMultiDisplay,
        startupAnimationSettings,
        wsAuthToken
      );
    },
    close: () => {
      console.log("[Preload] API.close called");
      ipcRenderer.send("closeChildWindows");
    },
    sendConnectionStatus: (status, attempt, maxAttempts) => {
      console.log("[Preload] API.sendConnectionStatus called with:", status);
      ipcRenderer.send("overlay-connection-status", { status, attempt, maxAttempts });
    },
    onConnectionStatus: (callback) => {
      console.log("[Preload] API.onConnectionStatus listener registered");
      if (_handlers.connectionStatus) {
        ipcRenderer.removeListener("overlay-connection-status", _handlers.connectionStatus);
      }
      _handlers.connectionStatus = (event, data) => callback(data);
      ipcRenderer.on("overlay-connection-status", _handlers.connectionStatus);
    },
    // Send test danmu to overlay
    sendTestDanmu: (text, opacity, color, size, speed, textStyles, displayArea) => {
      console.log("[Preload] API.sendTestDanmu called with:", {
        text,
        opacity,
        color,
        size,
        speed,
        textStyles,
        displayArea,
      });
      ipcRenderer.send("send-test-danmu", {
        text,
        opacity,
        color,
        size,
        speed,
        textStyles,
        displayArea,
      });
    },
    // Update overlay settings
    updateOverlaySettings: (settings) => {
      console.log("[Preload] API.updateOverlaySettings called with:", settings);
      ipcRenderer.send("update-overlay-settings", settings);
    },
    // Get system locale
    getSystemLocale: () => {
      console.log("[Preload] API.getSystemLocale called");
      return ipcRenderer.invoke("getSystemLocale");
    },
    getAppVersion: () => ipcRenderer.invoke("get-app-version"),
    openExternal: (url) => ipcRenderer.invoke("open-external", url),
    updateTrayStatus: (text) => ipcRenderer.send("update-tray-status", text),
    // IPC Listeners for main -> renderer events
    onUpdateDisplayOptions: (callback) => {
      if (_handlers.updateDisplayOptions) {
        ipcRenderer.removeListener("update-display-options", _handlers.updateDisplayOptions);
      }
      _handlers.updateDisplayOptions = (event, options) => callback(options);
      ipcRenderer.on("update-display-options", _handlers.updateDisplayOptions);
    },
    onShowStartupAnimation: (callback) => {
      if (_handlers.showStartupAnimation) {
        ipcRenderer.removeListener("show-startup-animation", _handlers.showStartupAnimation);
      }
      _handlers.showStartupAnimation = (event, data) => callback(data);
      ipcRenderer.on("show-startup-animation", _handlers.showStartupAnimation);
    },
    onKonamiEffect: (callback) => {
      if (_handlers.konamiEffect) {
        ipcRenderer.removeListener("konami-effect", _handlers.konamiEffect);
      }
      _handlers.konamiEffect = () => callback();
      ipcRenderer.on("konami-effect", _handlers.konamiEffect);
    },
  });
  // Note: Logging window.API here is from preload's context, not renderer's.
  // The important check is logging window.API in the renderer.
  console.log("[Preload] API exposure call completed V2.");
} catch (error) {
  console.error(
    "[Preload] ERROR during contextBridge.exposeInMainWorld:",
    error
  );
}

console.log("[Preload] Script finished V2");
