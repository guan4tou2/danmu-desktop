// Content of danmu-desktop/preload.js

// Add this at the top if not already present
const { contextBridge, ipcRenderer } = require("electron");

console.log('[Preload] Script started V2'); // V2 to differentiate from previous logs

window.addEventListener('DOMContentLoaded', () => {
  console.log('[Preload] DOMContentLoaded event fired V2');
  // Original DOMContentLoaded content (replaceText calls) can remain if they were there
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
});

try {
  console.log('[Preload] Attempting to expose API via contextBridge V2...');
  contextBridge.exposeInMainWorld("API", {
    getDisplays: () => {
      console.log('[Preload] API.getDisplays called');
      return ipcRenderer.invoke('getDisplays');
    },
    create: (ip, port, displayIndex, enableSyncMultiDisplay) => {
      console.log('[Preload] API.create called with:', ip, port, displayIndex, enableSyncMultiDisplay);
      ipcRenderer.send('createChild', ip, port, displayIndex, enableSyncMultiDisplay);
    },
    close: () => {
      console.log('[Preload] API.close called');
      ipcRenderer.send('closeChildWindows');
    },
    // Add showDanmu to the API
    showDanmu: (string, opacity, color, size, speed, fontInfo) => { // Changed fontFamily to fontInfo
      console.log('[Preload] API.showDanmu called with:', string, opacity, color, size, speed, fontInfo);
      // Potentially, you might want to send this to the main process
      // if the main process is responsible for distributing to child windows.
      // However, if child windows directly render, this might be called from child's preload.
      // For now, assuming it's for the child window's renderer to use directly.
      // If child windows have their own renderer process and preload, this is where it would be.
      // This example assumes `showdanmu` is a global function in the child window's renderer.
      if (window.showdanmu) {
        window.showdanmu(string, opacity, color, size, speed, fontInfo); // Pass fontInfo
      } else {
        console.error('[Preload] window.showdanmu is not defined in this context.');
      }
    }
  });
  // Note: Logging window.API here is from preload's context, not renderer's.
  // The important check is logging window.API in the renderer.
  console.log('[Preload] API exposure call completed V2.');
} catch (error) {
  console.error('[Preload] ERROR during contextBridge.exposeInMainWorld:', error);
}

console.log('[Preload] Script finished V2');