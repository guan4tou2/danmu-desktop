/**
 * Overlay Idle · Hero Lockup controller (Electron child window).
 *
 * Loaded in child.html. Manual-only. No auto-show / auto-hide.
 * Invoked from:
 *   • Tray menu → IPC → window.API.onToggleIdle()
 *   • Main window → window.API.toggleOverlayIdle()
 *   • Programmatic → window.OverlayIdle.{show,hide,toggle}()
 */
(function () {
  "use strict";

  var idleEl = null;

  function ensureRef() {
    if (!idleEl) idleEl = document.getElementById("overlay-idle");
    return idleEl;
  }

  function show() {
    var el = ensureRef();
    if (!el) return;
    el.classList.remove("is-fading");
    el.classList.add("is-visible");
  }

  function hide() {
    var el = ensureRef();
    if (!el) return;
    el.classList.add("is-fading");
    setTimeout(function () {
      if (el) {
        el.classList.remove("is-visible");
        el.classList.remove("is-fading");
      }
    }, 550);
  }

  function toggle() {
    var el = ensureRef();
    if (!el) return;
    if (el.classList.contains("is-visible")) hide();
    else show();
  }

  window.OverlayIdle = { show: show, hide: hide, toggle: toggle };

  document.addEventListener("DOMContentLoaded", function () {
    ensureRef();
    if (window.API && typeof window.API.onToggleIdle === "function") {
      window.API.onToggleIdle(function (data) {
        var mode = (data && data.mode) || "toggle";
        if (mode === "show") show();
        else if (mode === "hide") hide();
        else toggle();
      });
    }
  });
})();
