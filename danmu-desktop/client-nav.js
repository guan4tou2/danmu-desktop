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

    // 5.1.0: when first-run gate is showing (not yet configured), land on
    // the conn tab so the gate is the visible content. Sidebar stays
    // clickable; user can navigate to other tabs while gate persists.
    var gate = document.getElementById("firstRunGate");
    var gateOpen = gate && !gate.hasAttribute("hidden");
    activate(gateOpen ? "conn" : "overlay");

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

  // ─────────────────────────────────────────────────────────────
  // Connection section — prototype ConnSection:250 live status.
  //
  // Derives the displayed ws URL + TLS label from the existing
  // #host-input / #port-input fields (which still drive ws-manager).
  // Tracks reconnect count & connected-at timestamp from the legacy
  // #status-indicator color changes.
  // ─────────────────────────────────────────────────────────────
  function initConnCard() {
    var host = document.getElementById("host-input");
    var port = document.getElementById("port-input");
    var token = document.getElementById("ws-token-input");
    var urlEl = document.querySelector("[data-client-server-url]");
    var tlsTitle = document.querySelector("[data-client-tls-title]");
    var tlsNote = document.querySelector("[data-client-tls-note]");
    var uptimeEl = document.querySelector("[data-client-uptime]");
    var reconnectEl = document.querySelector("[data-client-reconnect]");
    var latencyEl = document.querySelector("[data-client-latency]");

    function isPrivateHost(h) {
      if (!h) return true;
      h = h.toLowerCase();
      return (
        h === "localhost" ||
        h.startsWith("127.") ||
        h.startsWith("10.") ||
        h.startsWith("192.168.") ||
        /^172\.(1[6-9]|2\d|3[01])\./.test(h) ||
        h.endsWith(".local")
      );
    }

    function renderUrl() {
      if (!urlEl) return;
      var h = (host && host.value) || "—";
      var p = (port && port.value) || "—";
      var hasToken = token && token.value;
      var isPrivate = isPrivateHost(h);
      var scheme = isPrivate ? "ws" : "wss";
      urlEl.textContent = scheme + "://" + h + ":" + p + (hasToken ? " · 🔒 token" : "");
      if (tlsTitle && tlsNote) {
        if (scheme === "wss") {
          tlsTitle.textContent = "TLS · 已加密";
          tlsNote.textContent = "公網連線使用 wss:// · 憑證由伺服器端提供";
        } else {
          tlsTitle.textContent = "本機 · 無 TLS";
          tlsNote.textContent = "區網連線不需 TLS · 公網建議 wss://";
        }
      }
    }

    // Track reconnect count + uptime by watching the legacy status indicator.
    var reconnectCount = 0;
    var connectedAt = null;
    var wasConnected = false;

    function tickUptime() {
      if (!uptimeEl) return;
      if (!connectedAt) {
        uptimeEl.textContent = "—";
        return;
      }
      var s = Math.floor((Date.now() - connectedAt) / 1000);
      var h = String(Math.floor(s / 3600)).padStart(2, "0");
      var m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      var sec = String(s % 60).padStart(2, "0");
      uptimeEl.textContent = h + ":" + m + ":" + sec;
    }

    function onStatusChange() {
      var dot = document.getElementById("status-indicator");
      if (!dot) return;
      var bg = (dot.style.backgroundColor || "").toLowerCase();
      // connected state uses green (#10b981 → rgb(16, 185, 129))
      var nowConnected = bg.indexOf("16, 185, 129") >= 0 || bg.indexOf("#10b981") >= 0;
      if (nowConnected && !wasConnected) {
        if (connectedAt) reconnectCount++;
        connectedAt = Date.now();
        if (reconnectEl) reconnectEl.textContent = String(reconnectCount);
      } else if (!nowConnected && wasConnected) {
        connectedAt = null;
      }
      wasConnected = nowConnected;
    }

    if (host) host.addEventListener("input", renderUrl);
    if (port) port.addEventListener("input", renderUrl);
    if (token) token.addEventListener("input", renderUrl);

    // Watch the legacy status indicator via MutationObserver (style changes).
    var dot = document.getElementById("status-indicator");
    if (dot && typeof MutationObserver !== "undefined") {
      var mo = new MutationObserver(onStatusChange);
      mo.observe(dot, { attributes: true, attributeFilter: ["style"] });
    }

    setInterval(tickUptime, 1000);
    renderUrl();
    onStatusChange();

    // Action buttons
    document.querySelectorAll("[data-client-action]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var action = btn.getAttribute("data-client-action");
        if (action === "edit-conn") {
          var panel = document.querySelector("[data-client-conn-edit]");
          if (panel) panel.removeAttribute("hidden");
        } else if (action === "close-conn-edit") {
          var panel2 = document.querySelector("[data-client-conn-edit]");
          if (panel2) panel2.setAttribute("hidden", "");
        } else if (action === "reconnect") {
          // Trigger the legacy Start button — it handles disconnect + reconnect.
          var start = document.getElementById("start-button");
          if (start && !start.disabled) start.click();
        }
      });
    });
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
    var toggle = document.querySelector("[data-client-overlay-toggle]");
    var screenRow = document.querySelector("[data-client-screens]");
    var screenCount = document.querySelector("[data-client-screen-count]");

    function running() {
      return startBtn && startBtn.disabled; // start disabled ⇒ overlay running
    }

    function renderToggle() {
      if (!toggle) return;
      toggle.checked = running();
    }

    if (toggle) {
      toggle.addEventListener("change", function () {
        if (toggle.checked) {
          if (startBtn && !startBtn.disabled) startBtn.click();
        } else {
          if (stopBtn && !stopBtn.disabled) stopBtn.click();
        }
      });
    }

    // Watch Start/Stop disabled state to keep toggle in sync.
    if (startBtn && typeof MutationObserver !== "undefined") {
      var mo = new MutationObserver(renderToggle);
      mo.observe(startBtn, { attributes: true, attributeFilter: ["disabled"] });
    }

    // Render screen chips from #screen-select options.
    function renderScreens() {
      if (!screenRow || !screenSelect) return;
      var opts = Array.prototype.slice.call(screenSelect.options);
      if (screenCount) {
        screenCount.textContent =
          "DISPLAY · 偵測到 " + opts.length + " 個螢幕";
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
        screenCount.textContent = "DISPLAY · 偵測中…";
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

    // Action buttons
    document.querySelectorAll("[data-client-overlay-action]").forEach(function (b) {
      b.addEventListener("click", function () {
        var a = b.getAttribute("data-client-overlay-action");
        if (a === "start") {
          if (startBtn && !startBtn.disabled) startBtn.click();
        } else if (a === "pause") {
          if (stopBtn && !stopBtn.disabled) stopBtn.click();
        } else if (a === "clear") {
          // Trigger clear via IPC if available, else fallback to stop+start.
          if (window.API && window.API.clearOverlay) {
            window.API.clearOverlay();
          } else if (stopBtn && !stopBtn.disabled) {
            stopBtn.click();
          }
        }
      });
    });

    renderToggle();
  }

  function bootstrap() {
    init();
    initConnCard();
    initOverlayCards();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
