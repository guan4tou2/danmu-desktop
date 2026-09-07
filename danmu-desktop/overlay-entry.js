// Overlay (child window) entry point — bundled as dist/child.bundle.js.
//
// child.html used to load the full renderer.bundle.js; everything the overlay
// actually uses is track-manager (window.showdanmu + the in-flight count, which
// pulls in store/danmu-effects/shared-utils) and konami's global effects
// (startup animation + konami IPC subscriptions; it no-ops without
// window.API). The ~70KB of main-window-only modules (ws-manager,
// conn-section-wire, particle-bg, window-picker, update-status, …) stay out.
require("./renderer-modules/store");
const { initTrackManager } = require("./renderer-modules/track-manager");
const { initGlobalEffects } = require("./renderer-modules/konami");
const { initOverlayWs } = require("./renderer-modules/overlay-ws");
// 淺底自動描邊（設計稿 16 · OS2）——自我註冊，只需要被 require 進 bundle。
require("./renderer-modules/stage-luminance");
// 投影安全區與描邊模式的接收端（設計稿 16 · OS1／OS2）。要在 overlay-ws
// 之前註冊 window.OverlayDisplayLayer——連上線的第一件事就是抓它。
require("./renderer-modules/display-layer");

const initOverlay = async () => {
  initTrackManager();
  initGlobalEffects();

  // WS client boot: main stamps overlayConfig on the BrowserWindow before
  // loadFile, so by DOM-ready the invoke always resolves. Guards cover a
  // direct-open child.html (no preload API), an older preload without
  // getOverlayConfig, and a window already superseded by a newer
  // createChild (main answers null → don't connect; this window is about
  // to be destroyed anyway).
  if (window.API && typeof window.API.getOverlayConfig === "function") {
    try {
      const cfg = await window.API.getOverlayConfig();
      if (cfg) initOverlayWs(cfg);
    } catch (err) {
      console.error("[Overlay] Failed to fetch overlay config:", err && err.message);
    }
  }
};

// Run after DOM is ready — handles the case where DOMContentLoaded has already
// fired (e.g. readyState is "interactive" or "complete"). Same pattern as
// renderer.js.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initOverlay());
} else {
  initOverlay();
}
