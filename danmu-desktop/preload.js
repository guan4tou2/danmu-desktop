/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 * 
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const { contextBridge, ipcRenderer } = require("electron");

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})


contextBridge.exposeInMainWorld("API", {
  getDisplays: () => ipcRenderer.invoke('getDisplays'),
  create: (ip, port, displayIndex, enableSyncMultiDisplay) => ipcRenderer.send('createChild', ip, port, displayIndex, enableSyncMultiDisplay),
  close: () => ipcRenderer.send('closeChildWindows'),
});
