// client-nav.js — Sidebar router for the Electron main window.
// Matches prototype desktop.jsx ControlWindow section switching.
// CSP on index.html forbids inline <script>, so this lives as its own file.

(function () {
  // Exposed section-switch entry — set by init(), used by the tray-driven
  // navigation wiring in bootstrap().
  var activateFn = null;

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
    activateFn = activate;

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
  // Drives the overlay session through window.OverlayControl, the direct
  // API exposed by renderer-modules/ws-manager.js (the bundle loads before
  // this file in index.html, so it's defined by bootstrap time; the guard
  // covers an old bundle). State updates arrive via OverlayControl.subscribe
  // — the retired proxy path clicked hidden legacy buttons and mirrored
  // their disabled attribute through a MutationObserver.
  // ─────────────────────────────────────────────────────────────
  function initOverlayCards() {
    var control = window.OverlayControl || null;
    var screenSelect = document.getElementById("screen-select");
    var overlayButton = document.querySelector("[data-client-overlay-button]");
    var overlayState = document.querySelector("[data-client-overlay-state]");
    var screenRow = document.querySelector("[data-client-screens]");
    var screenCount = document.querySelector("[data-client-screen-count]");

    function running() {
      return !!(control && control.isRunning());
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
          : (isRunning ? "■ 關閉 Desktop" : "▶ 開啟 Desktop");
      }
      // Pre-show test-danmu button follows the same running() heuristic; the
      // OverlayControl subscription below re-runs this on state change.
      var testBtn = document.querySelector('[data-client-overlay-action="test-danmu"]');
      if (testBtn) testBtn.disabled = !isRunning;
    }

    if (overlayButton) {
      overlayButton.addEventListener("click", function () {
        if (!control) return;
        if (control.isRunning()) {
          control.stop();
        } else {
          control.start();
        }
      });
    }

    // Re-render on every published overlay state change.
    if (control && typeof control.subscribe === "function") {
      control.subscribe(renderOverlayButton);
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
        } else if (a === "test-danmu") {
          // Fixed-style acceptance shot — params must satisfy ipc-handlers
          // validateDanmuParams; fontInfo is injected main-side (NotoSansTC).
          if (window.API && typeof window.API.sendTestDanmu === "function") {
            var text = (typeof i18n !== "undefined")
              ? i18n.t("overlayTestDanmuText")
              : "測試彈幕 · Danmu Fire ✓";
            if (text === "overlayTestDanmuText") text = "測試彈幕 · Danmu Fire ✓";
            window.API.sendTestDanmu(
              text,
              100,
              "#38bdf8",
              48,
              5,
              { textStroke: true, strokeWidth: 2, strokeColor: "#000000", textShadow: false, shadowBlur: 4 },
              { top: 0, height: 100 }
            );
          } else {
            console.warn("[Renderer] sendTestDanmu IPC not available");
          }
        } else if (a === "idle-qr") {
          // No local state flip — main owns idleActive and broadcasts
          // overlay-idle-state back (subscribed below), so tray checkbox
          // and this button converge on the same source of truth.
          if (window.API && typeof window.API.toggleOverlayIdle === "function") {
            window.API.toggleOverlayIdle("toggle");
          } else {
            console.warn("[Renderer] toggleOverlayIdle IPC not available");
          }
        }
      });
    });

    // Idle-QR button state pushed from main (single source of truth).
    // Markup default (disabled, aria-pressed=false) matches the no-overlay
    // boot state, so no initial query is needed.
    if (window.API && typeof window.API.onOverlayIdleState === "function") {
      window.API.onOverlayIdleState(function (s) {
        var b = document.querySelector('[data-client-overlay-action="idle-qr"]');
        if (!b) return;
        b.disabled = !s.hasOverlay;
        b.setAttribute("aria-pressed", s.active ? "true" : "false");
        b.classList.toggle("is-active", !!s.active);
      });
    }

    renderOverlayButton();
  }

  function bootstrap() {
    init();
    initOverlayCards();

    // Tray「關於」(and any future main-process navigation) lands here.
    // Key is validated against the actual DOM sections, not a hard-coded
    // whitelist.
    if (window.API && typeof window.API.onNavigateSection === "function") {
      window.API.onNavigateSection(function (key) {
        if (typeof key !== "string" || !activateFn) return;
        if (!document.querySelector('.client-section[data-section="' + key + '"]')) return;
        activateFn(key);
      });
    }

    // About 分頁的 GitHub 按鈕 — about.html 退役後唯一的 repo 連結入口。
    // open-external IPC 只放行 main window sender + https，這裡天然符合。
    var githubBtn = document.getElementById("about-github-link");
    if (githubBtn) {
      githubBtn.addEventListener("click", function () {
        if (window.API && typeof window.API.openExternal === "function") {
          window.API.openExternal("https://github.com/guan4tou2/danmu-desktop");
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
