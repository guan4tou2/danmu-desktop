// Overlay (child window) entry point — bundled as dist/child.bundle.js.
//
// child.html used to load the full renderer.bundle.js; everything the overlay
// actually uses is track-manager (window.showdanmu + #danmu-counter HUD, which
// pulls in store/danmu-effects/shared-utils) and konami's global effects
// (startup animation + konami IPC subscriptions; it no-ops without
// window.API). The ~70KB of main-window-only modules (ws-manager,
// conn-section-wire, particle-bg, window-picker, update-status, …) stay out.
require("./renderer-modules/store");
const { initTrackManager } = require("./renderer-modules/track-manager");
const { initGlobalEffects } = require("./renderer-modules/konami");

const initOverlay = () => {
  initTrackManager();
  initGlobalEffects();
};

// Run after DOM is ready — handles the case where DOMContentLoaded has already
// fired (e.g. readyState is "interactive" or "complete"). Same pattern as
// renderer.js.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initOverlay());
} else {
  initOverlay();
}
