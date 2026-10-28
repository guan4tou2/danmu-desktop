// client-shell.js — 設計稿 04「桌面端示範」的單頁控制器。
//
// 側欄／分頁被拿掉之後，這支負責把原本散在三個 section 的狀態收成一頁：
//
//   · ⚙ 設定面板開關（取代「連線」與「關於」兩分頁）
//   · 主卡的狀態行（色點＋一行文字）——全視窗唯一的狀態顯示
//   · S1 首次啟動精靈（localStorage 沒有伺服器位址時）
//   · S4 連線失敗橫幅（原因、已重試次數、重試／變更位址）
//   · S6 更新橫幅 ＋ ⚙ 小紅點
//
// CSP 禁止 inline script，所以獨立成檔；載入順序在 client-nav.js 之後，
// OverlayControl（ws-manager.js）此時已經掛上 window。
(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };
  function t(key, fallback) {
    try {
      var v = (typeof i18n !== "undefined") && i18n.t(key);
      return v && v !== key ? v : fallback;
    } catch (e) { return fallback; }
  }

  // ── ⚙ 設定面板 ────────────────────────────────────────────────────
  var settings = $("#client-settings");
  var gear = $("#client-settings-btn");
  var lastFocus = null;

  function openSettings() {
    if (!settings) return;
    lastFocus = document.activeElement;
    settings.hidden = false;
    $$(".client-shell, .client-titlebar").forEach(function (el) { el.inert = true; });
    document.body.classList.add("is-settings-open");
    if (gear) gear.setAttribute("aria-expanded", "true");
    var first = settings.querySelector("input, button, select");
    if (first) setTimeout(function () { try { first.focus(); } catch (e) {} }, 30);
  }

  function closeSettings() {
    if (!settings) return;
    settings.hidden = true;
    $$(".client-shell, .client-titlebar").forEach(function (el) { el.inert = false; });
    document.body.classList.remove("is-settings-open");
    if (gear) gear.setAttribute("aria-expanded", "false");
    if (lastFocus) { try { lastFocus.focus(); } catch (e) {} }
  }

  if (gear) gear.addEventListener("click", openSettings);
  $$("[data-settings-close]").forEach(function (el) {
    el.addEventListener("click", closeSettings);
  });
  document.addEventListener("keydown", function (e) {
    var dialog = $(".client-onboarding:not([hidden]), .client-settings:not([hidden])");
    if (e.key === "Tab" && dialog) {
      var controls = $$("button:not(:disabled), input:not(:disabled), select:not(:disabled), a[href], [tabindex='0']", dialog)
        .filter(function (el) { return el.getClientRects().length > 0 && !el.hidden; });
      var first = controls[0], last = controls[controls.length - 1];
      if (controls.length && (e.shiftKey ? document.activeElement === first : document.activeElement === last)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
      }
    }
    if (e.key !== "Escape") return;
    if (settings && !settings.hidden) { e.preventDefault(); closeSettings(); }
  });

  // 橫幅上的「變更位址」轉發到設定群組裡那一列——編輯模式本身由
  // conn-section-wire.js 的 data-client-action="edit-conn" 契約負責。
  $$("[data-conn-banner-edit]").forEach(function (el) {
    el.addEventListener("click", function () {
      var host = $('[data-client-action="edit-conn"]');
      if (host) host.click();
    });
  });

  // 系統匣的「偏好設定…／關於」導覽（client-nav.js 轉發）。分頁沒了之後，
  // 除了 overlay（＝主畫面）以外都開 ⚙ 面板。
  document.addEventListener("client:navigate-section", function (e) {
    if (e.detail && e.detail !== "overlay") openSettings();
  });

  // ── 主卡狀態（設計稿 04：全視窗只有這一處）───────────────────────
  var dot = $("[data-client-overlay-dot]");
  var statusText = $("[data-client-overlay-status]");
  var mainCard = $("[data-client-main-card]");
  var overlayBtn = $("[data-client-overlay-button]");
  var diagnostics = null;
  var displayBanner = $("#client-display-banner");

  function connectionState() {
    return $(".client-titlebar-status-dot")?.getAttribute("data-client-status") || "disconnected";
  }

  function savedServer() {
    try { return JSON.parse(localStorage.getItem("danmu-settings") || "null") || {}; }
    catch (_) { return {}; }
  }

  function hasServer() {
    try {
      var h = savedServer().host || localStorage.getItem("host") || localStorage.getItem("serverUrl") || "";
      return !!String(h).trim();
    } catch (e) { return true; }
  }

  function screenLabel() {
    var sel = $("#screen-select");
    if (!sel || !sel.options || sel.selectedIndex < 0) return "";
    var opt = sel.options[sel.selectedIndex];
    return opt ? opt.textContent.trim() : "";
  }

  function targetScreenLabel(state) {
    return state?.displays?.map(function (id) {
      var option = $(`#screen-select option[data-display-id="${Number(id)}"]`);
      return option ? option.textContent.trim() : String(id);
    }).join("、") || screenLabel();
  }

  function renderMainCard() {
    var control = window.OverlayControl || null;
    var running = !!(control && control.isRunning());
    var connected = running && connectionState() === "connected";
    var showing = connected && diagnostics?.mode === "live";
    if (mainCard) {
      mainCard.classList.toggle("is-running", !!showing);
      mainCard.dataset.state = running ? "running" : "off";
    }
    if (dot) dot.dataset.state = showing ? "on" : "off";
    renderDiagnostics(connected);
    if (!statusText) return;

    if (running) {
      var screen = targetScreenLabel(diagnostics);
      statusText.textContent = !connected ? t("clientDiagConnecting", "等待連線")
        : !diagnostics ? t("clientDiagLoading", "已連線 · 等待伺服器顯示狀態")
        : diagnostics.mode === "standby"
          ? t("clientDisplayPausedCount", "已連線 · 顯示暫停 · {n} 則排隊").replace("{n}", diagnostics.queue_size)
          : t("clientDisplayReady", "顯示已啟動 · {screen}").replace("{screen}", screen);
    } else if (!hasServer()) {
      statusText.textContent = t("clientOverlayNoServer", "尚未設定伺服器");
    } else {
      statusText.textContent = t("clientOverlayOff", "未開啟");
    }
  }

  function renderDiagnostics(connected) {
    var state = connected ? diagnostics : null;
    var fields = {
      connection: connected ? t("statusConnected", "已連線") : t("disconnected", "未連線"),
      display: state ? t(state.mode === "live" ? "clientDiagOn" : "clientDiagPaused", state.mode === "live" ? "已啟動" : "已暫停") : t("clientDiagUnknown", "尚未確認"),
      session: state ? (state.session_status === "live" ? state.session_name || t("clientSessionLive", "場次進行中") : t("clientSessionIdle", "未建立場次")) : "—",
      queue: state ? String(state.queue_size) : "—",
      screens: targetScreenLabel(state) || "—",
      last: state?.lastMessageAt ? new Date(state.lastMessageAt).toLocaleTimeString() : t("clientDiagNoMessage", "尚未收到"),
    };
    Object.keys(fields).forEach(function (key) {
      var node = $(`[data-diag="${key}"]`);
      if (node) node.textContent = fields[key];
    });
    if (!displayBanner) return;
    var paused = state?.mode === "standby";
    var noSession = state?.session_status === "idle";
    displayBanner.hidden = !connected || !state || (!paused && !noSession);
    displayBanner.classList.toggle("is-warning", !!paused);
    displayBanner.classList.toggle("is-info", !paused);
    var title = $("[data-display-banner-title]");
    var body = $("[data-display-banner-text]");
    if (title) title.textContent = paused ? t("clientDisplayPausedTitle", "已連線，但尚未開始顯示") : t("clientSessionIdle", "未建立場次");
    if (body) body.textContent = paused
      ? t("clientDisplayPausedBody", "請在後台開始或繼續顯示。目前有 {n} 則訊息等待播出。").replace("{n}", state.queue_size)
      : t("clientSessionIdleBody", "彈幕可正常顯示；可在後台建立場次，方便整理本場活動。");
  }

  window.API?.onOverlayDiagnostics?.(function (data) {
    diagnostics = data;
    renderMainCard();
  });
  var adminButton = $("[data-display-open-admin]");
  if (adminButton) adminButton.addEventListener("click", function () {
    var server = diagnostics || savedServer();
    if (!server.host) return;
    var port = Number(server.port) || 443;
    var route = diagnostics?.mode === "standby" ? "overlay" : "dashboard";
    window.API?.openExternal?.(`https://${server.host}:${port}/admin#/${route}`);
  });

  if (window.OverlayControl && typeof window.OverlayControl.subscribe === "function") {
    window.OverlayControl.subscribe(renderMainCard);
  }
  if (overlayBtn) overlayBtn.addEventListener("click", function () {
    setTimeout(renderMainCard, 60);
  });
  var screenSelect = $("#screen-select");
  if (screenSelect) screenSelect.addEventListener("change", renderMainCard);
  setInterval(renderMainCard, 2000);
  renderMainCard();

  // ── S4 · 連線失敗橫幅 ─────────────────────────────────────────────
  // 真值仍在 connection-status.js 寫的 .client-titlebar-status-dot 上；
  // 這裡讀那個唯一來源，不另外開一條狀態管線。
  var connBanner = $("#client-conn-banner");
  var connBannerText = $("[data-conn-banner-text]");
  var legacyDot = $(".client-titlebar-status-dot");
  var retries = 0;
  var wasFailed = false;

  function currentHost() {
    var el = $("[data-client-server-host]");
    var v = el ? (el.textContent || "").trim() : "";
    return v && v !== "—" ? v : t("connHostEmptyHint", "未設定");
  }

  function renderConnBanner() {
    if (!connBanner || !legacyDot) return;
    var state = legacyDot.getAttribute("data-client-status") || "";
    var failed = state === "disconnected" || state === "failed" || state === "error";
    // 沒設定伺服器不是「連線失敗」，那是還沒開始——由精靈或主卡說明。
    if (failed && hasServer()) {
      // 進到失敗狀態的那一刻還沒重試過；之後每次重新掉線才 +1，
      // 這樣「已重試 n 次」講的才是真的次數。
      if (!connBanner.hidden || wasFailed) retries += 1;
      wasFailed = true;
      connBanner.hidden = false;
      if (connBannerText) {
        // 還沒重試過就不要寫「已重試 0 次」——那句只有在真的重試過才成立。
        var key = retries > 0 ? "clientConnFailBody" : "clientConnFailBodyFirst";
        var fallback = retries > 0
          ? "無法連線到 {host}。已重試 {n} 次。請確認伺服器已啟動、網路相同，或位址是否正確。"
          : "無法連線到 {host}。請確認伺服器已啟動、網路相同，或位址是否正確。";
        connBannerText.textContent = t(key, fallback)
          .replace("{host}", currentHost())
          .replace("{n}", String(retries));
        connBanner.dataset.retries = String(retries);
      }
    } else {
      retries = 0;
      wasFailed = false;
      connBanner.hidden = true;
    }
  }

  if (legacyDot) {
    new MutationObserver(renderConnBanner).observe(legacyDot, {
      attributes: true, attributeFilter: ["data-client-status"],
    });
    renderConnBanner();
    new MutationObserver(function () {
      if (connectionState() !== "connected") diagnostics = null;
      renderMainCard();
    }).observe(legacyDot, { attributes: true, attributeFilter: ["data-client-status"] });
  }

  var retryBtn = $("[data-conn-banner-retry]");
  if (retryBtn) {
    retryBtn.addEventListener("click", function () {
      var test = $("[data-conn-test-btn]");
      if (test) test.click();
    });
  }

  // ── S6 · 更新橫幅 ＋ ⚙ 小紅點 ───────────────────────────────────
  // update-status.js 仍然操作 #update-card 與它底下那組 id；橫幅只是
  // 把同一組元素換個位置呈現，所以這裡只鏡射 #update-card 的顯隱。
  var updateCard = $("#update-card");
  var updateBanner = $("#client-update-banner");
  var gearDot = $("#titlebar-update-badge");

  function renderUpdateBanner() {
    if (!updateCard || !updateBanner) return;
    var staged = !updateCard.hidden;
    updateBanner.hidden = !staged;
    if (gearDot) gearDot.hidden = !staged;
  }

  if (updateCard) {
    new MutationObserver(renderUpdateBanner).observe(updateCard, {
      attributes: true, attributeFilter: ["hidden"],
    });
    renderUpdateBanner();
  }

  var skipBtn = $("#update-card-skip");
  if (skipBtn) {
    skipBtn.addEventListener("click", function () {
      if (updateBanner) updateBanner.hidden = true;
    });
  }

  // ── S1 · 首次啟動精靈 ─────────────────────────────────────────────
  var onboarding = $("#client-onboarding");
  if (onboarding) {
    var input = $("#client-onboarding-input");
    var status = $("[data-onboarding-status]");
    var seen = false;
    try { seen = localStorage.getItem("danmu_onboarded") === "1"; } catch (e) {}

    if (!seen && !hasServer()) {
      onboarding.hidden = false;
      setTimeout(function () { try { input.focus(); } catch (e) {} }, 60);
    }

    function finish() {
      try { localStorage.setItem("danmu_onboarded", "1"); } catch (e) {}
      onboarding.hidden = true;
      renderMainCard();
    }

    function applyAndTest() {
      var v = input ? (input.value || "").trim() : "";
      if (!v) { finish(); return; }
      // 把位址交給既有的連線編輯流程，精靈不自己解析 host/port。
      var editRow = $('[data-conn-display] [data-client-action="edit-conn"]');
      if (editRow) editRow.click();
      var field = $("#conn-server-input");
      if (field) {
        field.value = v;
        field.dispatchEvent(new Event("input", { bubbles: true }));
      }
      var save = $("[data-conn-edit-save]");
      if (save) save.click();

      if (status) {
        status.hidden = false;
        status.textContent = t("clientOnboardTesting", "測試中…");
      }
      var test = $("[data-conn-test-btn]");
      if (test) test.click();
      setTimeout(finish, 900);
    }

    var contBtn = $("[data-onboarding-continue]");
    if (contBtn) contBtn.addEventListener("click", applyAndTest);
    var skipOnboard = $("[data-onboarding-skip]");
    if (skipOnboard) skipOnboard.addEventListener("click", finish);
    if (input) {
      input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); applyAndTest(); }
      });
    }
  }

  // ── 快速鍵標籤依平台（設計稿 17：Windows 以 Ctrl 取代 ⌘）────────
  var kbd = $("[data-client-shortcut]");
  if (kbd) {
    var plat = (navigator.platform || "").toLowerCase();
    kbd.textContent = plat.indexOf("mac") >= 0 ? "⌘⇧D" : "Ctrl+Shift+D";
  }
})();
