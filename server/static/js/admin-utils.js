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

  window.AdminUtils = {
    DETAILS_STATE_KEY: DETAILS_STATE_KEY,
    loadDetailsState: loadDetailsState,
    saveDetailsState: saveDetailsState,
    escapeHtml: escapeHtml,
  };
})();
