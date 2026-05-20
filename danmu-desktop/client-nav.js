// client-nav.js — Sidebar router for the Electron main window.
// Matches prototype desktop.jsx ControlWindow section switching.
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

    activate("conn");

    // Platform stamp — macOS / Windows / Linux. Used for:
    //   - sidebar version footer label (data-client-platform)
    //   - about page (data-client-about-platform)
    //   - body[data-os] gate so CSS can adapt to platform-specific
    //     chrome — e.g. macOS leaves room for native traffic lights
    //     overlapping the HTML titlebar (titleBarStyle: "hidden"),
    //     Windows/Linux keep their default frame and don't overlap.
    try {
      var plat = (navigator.platform || "").toLowerCase();
      var os = plat.indexOf("mac") >= 0
        ? "mac"
        : plat.indexOf("win") >= 0
        ? "win"
        : plat.indexOf("linux") >= 0
        ? "linux"
        : "desktop";
      var label = os === "mac" ? "macOS" : os === "win" ? "Windows" : os === "linux" ? "Linux" : "Desktop";
      document.body.setAttribute("data-os", os);
      document
        .querySelectorAll("[data-client-platform], [data-client-about-platform]")
        .forEach(function (el) { el.textContent = label; });
    } catch (e) {
      // ignore
    }
  }

  // ─────────────────────────────────────────────────────────────
  // Overlay section — prototype OverlaySection:203.
  //
  // Proxies to the legacy Start/Stop buttons + screen-select dropdown so
  // the new cards stay in sync with whatever ws-manager / track-manager
  // already do. No new IPC plumbing — just DOM re-wiring.
  // ─────────────────────────────────────────────────────────────
  function initOverlayCards() {
    var startBtn = document.getElementById("start-button");
    var stopBtn = document.getElementById("stop-button");
    var screenSelect = document.getElementById("screen-select");
    var overlayButton = document.querySelector("[data-client-overlay-button]");
    var overlayState = document.querySelector("[data-client-overlay-state]");
    var screenRow = document.querySelector("[data-client-screens]");
    var screenCount = document.querySelector("[data-client-screen-count]");

    function running() {
      return startBtn && startBtn.disabled; // start disabled ⇒ overlay running
    }

    function renderOverlayButton() {
      if (!overlayButton) return;
      var isRunning = running();
      var key = isRunning ? "overlayButtonStop" : "overlayButtonStart";
      overlayButton.classList.toggle("is-running", isRunning);
      overlayButton.setAttribute("aria-pressed", isRunning ? "true" : "false");
      overlayButton.setAttribute("data-state", isRunning ? "running" : "stopped");
      if (overlayState) {
        overlayState.setAttribute("data-i18n", key);
        overlayState.textContent = (typeof i18n !== "undefined")
          ? i18n.t(key)
          : (isRunning ? "■ 關閉 Overlay" : "▶ 開啟 Overlay");
      }
    }

    if (overlayButton) {
      overlayButton.addEventListener("click", function () {
        if (!running()) {
          if (startBtn && !startBtn.disabled) startBtn.click();
        } else {
          if (stopBtn && !stopBtn.disabled) stopBtn.click();
        }
      });
    }

    // Watch Start/Stop disabled state to keep the visible button in sync.
    if (startBtn && typeof MutationObserver !== "undefined") {
      var mo = new MutationObserver(renderOverlayButton);
      mo.observe(startBtn, { attributes: true, attributeFilter: ["disabled"] });
    }

    // Render screen chips from #screen-select options.
    function renderScreens() {
      if (!screenRow || !screenSelect) return;
      var opts = Array.prototype.slice.call(screenSelect.options);
      if (screenCount) {
        screenCount.textContent = (typeof i18n !== "undefined")
          ? i18n.t("overlayScreenCount", { count: opts.length })
          : ("DISPLAY · 偵測到 " + opts.length + " 個螢幕");
      }
      screenRow.innerHTML = "";
      opts.forEach(function (opt) {
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "client-screen-chip";
        if (opt.selected) chip.classList.add("is-active");
        var title = opt.textContent || opt.value || "Screen";
        // Split "主螢幕 · 2560×1600" style labels into name + meta if " · " present
        var parts = title.split(/\s·\s/);
        var name = parts[0] || title;
        var meta = parts.slice(1).join(" · ") || opt.value;
        chip.innerHTML =
          '<div class="head">' +
          '<span class="box"></span>' +
          '<span class="name"></span>' +
          '<span class="check">✓</span>' +
          "</div>" +
          '<div class="meta"></div>';
        chip.querySelector(".name").textContent = name;
        chip.querySelector(".meta").textContent = meta;
        chip.addEventListener("click", function () {
          screenSelect.value = opt.value;
          screenSelect.dispatchEvent(new Event("change", { bubbles: true }));
          renderScreens();
        });
        screenRow.appendChild(chip);
      });
      if (opts.length === 0 && screenCount) {
        screenCount.textContent = (typeof i18n !== "undefined")
          ? i18n.t("overlayScreenDetecting")
          : "DISPLAY · 偵測中…";
      }
    }

    // Screen list is populated async by the renderer (IPC→detectScreens).
    // Poll until we see options, then observe changes.
    var tries = 0;
    var poll = setInterval(function () {
      if (!screenSelect) { clearInterval(poll); return; }
      if (screenSelect.options.length > 0) {
        clearInterval(poll);
        renderScreens();
        if (typeof MutationObserver !== "undefined") {
          var smo = new MutationObserver(renderScreens);
          smo.observe(screenSelect, { childList: true, subtree: true });
          screenSelect.addEventListener("change", renderScreens);
        }
      } else if (++tries > 60) {
        clearInterval(poll);
      }
    }, 250);

    // Secondary action buttons
    document.querySelectorAll("[data-client-overlay-action]").forEach(function (b) {
      b.addEventListener("click", function () {
        var a = b.getAttribute("data-client-overlay-action");
        if (a === "clear") {
          // Real clear: tell main to broadcast an `overlay-clear` IPC
          // message to every child overlay window. They drop currently-
          // rendered danmu without disconnecting WS. preload exposes
          // window.API.clearOverlay; if it's missing on an old binary,
          // do nothing rather than fall back to stop (which would
          // silently disconnect — the prior fallback was a footgun).
          if (window.API && typeof window.API.clearOverlay === "function") {
            window.API.clearOverlay();
          } else {
            console.warn("[Renderer] clearOverlay IPC not available");
          }
        }
      });
    });

    renderOverlayButton();
  }

  function bootstrap() {
    init();
    initOverlayCards();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
