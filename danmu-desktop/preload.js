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
    }
  });
  // Note: Logging window.API here is from preload's context, not renderer's.
  // The important check is logging window.API in the renderer.
  console.log('[Preload] API exposure call completed V2.');
} catch (error) {
  console.error('[Preload] ERROR during contextBridge.exposeInMainWorld:', error);
}

console.log('[Preload] Script finished V2');