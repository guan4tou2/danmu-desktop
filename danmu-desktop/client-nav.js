// client-nav.js — Sidebar router for the Electron main window.
// Matches prototype desktop.jsx ControlWindow:141 useState('overlay').
// CSP on index.html forbids inline <script>, so this lives as its own file.

(function () {
  function init() {
    var shell = document.querySelector("[data-client-shell]");
    if (!shell) return;
    var buttons = shell.querySelectorAll(".client-nav-btn");
    var sections = document.querySelectorAll(".client-section");

    function activate(key) {
      buttons.forEach(function (b) {
        b.classList.toggle("is-active", b.getAttribute("data-nav") === key);
      });
      sections.forEach(function (s) {
        if (s.getAttribute("data-section") === key) {
          s.removeAttribute("hidden");
        } else {
          s.setAttribute("hidden", "");
        }
      });
      document.body.setAttribute("data-active-section", key);
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        activate(b.getAttribute("data-nav"));
      });
    });

    activate("overlay");

    // Platform stamp — macOS / Windows / Linux
    try {
      var plat = (navigator.platform || "").toLowerCase();
      var label = plat.indexOf("mac") >= 0
        ? "macOS"
        : plat.indexOf("win") >= 0
        ? "Windows"
        : plat.indexOf("linux") >= 0
        ? "Linux"
        : "Desktop";
      document
        .querySelectorAll("[data-client-platform], [data-client-about-platform]")
        .forEach(function (el) { el.textContent = label; });
    } catch (e) {
      // ignore
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
