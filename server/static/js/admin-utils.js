/**
 * admin-utils.js — Shared utilities for admin page modules.
 * Loaded before all other admin-*.js scripts via <script defer>.
 */
(function () {
  "use strict";

  var DETAILS_STATE_KEY = "admin-details-open-state";

  function loadDetailsState() {
    try {
      return JSON.parse(localStorage.getItem(DETAILS_STATE_KEY)) || {};
    } catch (_) {
      return {};
    }
  }

  function saveDetailsState(state) {
    try {
      localStorage.setItem(DETAILS_STATE_KEY, JSON.stringify(state));
    } catch (_) {
      // Ignore localStorage write failures (private browsing, quota)
    }
  }

  function escapeHtml(str) {
    if (!str) return "";
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(String(str)));
    return div.innerHTML;
  }

  // Shared close/dismiss/remove glyph. Replaces the ad-hoc ✕ / × text nodes
  // (mixed U+2715 and U+00D7) scattered across admin modules with one crisp,
  // theme-aware SVG: strokes currentColor so it inherits each button's color
  // in both light/dark, sizes to 1em so it scales with the button's font-size,
  // and is aria-hidden (every call site carries its own aria-label / title).
  var CLOSE_ICON =
    '<svg class="admin-icon-close" viewBox="0 0 24 24" width="1em" height="1em" ' +
    'fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" ' +
    'style="vertical-align:middle" aria-hidden="true" focusable="false">' +
    '<path d="M6 6l12 12M18 6 6 18"/></svg>';

  window.AdminUtils = {
    DETAILS_STATE_KEY: DETAILS_STATE_KEY,
    loadDetailsState: loadDetailsState,
    saveDetailsState: saveDetailsState,
    escapeHtml: escapeHtml,
    closeIcon: CLOSE_ICON,
  };
})();
