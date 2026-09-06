/**
 * Admin · 鍵盤快速鍵（設計稿 15 · KS1）
 *
 * 兩件事：真的把快速鍵綁上去，以及按 `?` 會跳出一張列出它們的表。
 *
 * 表跟綁定寫在同一個 SHORTCUTS 陣列裡，不是兩份清單。改這裡之前先想清楚：
 * 一張列著沒接線的鍵的表比沒有表更糟——使用者按了沒反應，之後就不會再信
 * 任何一條。（說明抽屜以前正是這樣，advertise 了 ⌘⇧L／⌘⇧S／⌘⇧C 三個從來
 * 沒有被綁定過的鍵。）
 *
 * 全域鍵在任何路由都有效；訊息流那組只有控制台的訊息流看得見時才會接手，
 * 而且輸入框裡一律讓路（J / K / Space / P / B 都是可打字的字元）。
 */
(function () {
  "use strict";

  var ROOT_ID = "admin-shortcuts-root";
  var IS_MAC = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || "");

  function t(key, fallback) {
    try {
      var v = window.ServerI18n && ServerI18n.t(key);
      return v && v !== key ? v : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function toast(msg, ok) {
    if (window.showToast) window.showToast(msg, ok !== false);
  }

  function cfetch(url, opts) {
    return (window.csrfFetch || window.fetch)(url, opts || {});
  }

  // ── 全域動作 ──────────────────────────────────────────────────────

  function openPalette() {
    if (window.AdminCommandPalette) window.AdminCommandPalette.toggle();
  }

  async function toggleDisplayLayer() {
    var live = false;
    try {
      var r = await fetch("/admin/broadcast/status", { credentials: "same-origin" });
      if (r.ok) live = (await r.json()).mode === "live";
    } catch (e) {}
    try {
      var res = await cfetch("/admin/broadcast/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: live ? "standby" : "live" }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      toast(t(live ? "ksToastDisplayOff" : "ksToastDisplayOn", live ? "已關閉" : "已開啟"));
      if (window.AdminDashboard && window.AdminDashboard.refreshCockpitOverlay) {
        window.AdminDashboard.refreshCockpitOverlay();
      }
    } catch (e) {
      toast(t("cmdkToastToggleFailed", "切換失敗"), false);
    }
  }

  async function clearScreen() {
    try {
      var r = await cfetch("/admin/overlay/clear", { method: "POST" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      toast(t("toastCleared", "已清空"));
    } catch (e) {
      toast(t("toastClearFailed", "清空失敗"), false);
    }
  }

  async function togglePoll() {
    var state = "idle";
    try {
      var r = await fetch("/admin/poll/status", { credentials: "same-origin" });
      if (r.ok) state = (await r.json()).state || "idle";
    } catch (e) {}
    if (state === "idle") {
      // 還沒建過投票，「開始」沒有對象——帶去投票頁，而不是靜靜地什麼都沒發生。
      location.hash = "#/polls";
      toast(t("ksToastNoPoll", "還沒有投票，先建立一個"), false);
      return;
    }
    var end = state === "active";
    try {
      var res = await cfetch(end ? "/admin/poll/end" : "/admin/poll/start", { method: "POST" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      toast(t(end ? "ksToastPollEnded" : "ksToastPollStarted", end ? "已結束" : "已開始"));
    } catch (e) {
      toast(t("ksToastPollFailed", "投票操作失敗"), false);
    }
  }

  // ── 清單（表與綁定的單一來源）────────────────────────────────────
  //
  // combo：判斷是否命中的函式。cmd 代表 ⌘（mac）/ Ctrl（其他）。
  // keys：畫在表上的按鍵符號，已依平台換過。

  function cmdKey(e) {
    return IS_MAC ? e.metaKey : e.ctrlKey;
  }
  var CMD = IS_MAC ? "⌘" : "Ctrl";

  var SHORTCUTS = [
    {
      group: "global",
      keys: [CMD, "K"],
      labelKey: "ksOpenPalette",
      fallback: "開啟命令面板",
      match: function (e) { return cmdKey(e) && (e.key === "k" || e.key === "K"); },
      run: openPalette,
    },
    {
      group: "global",
      keys: ["?"],
      labelKey: "ksThisSheet",
      fallback: "這份快速鍵",
      // 稿上的標題是「按 ? 或 ⌘/」，但表格那欄只畫 ?——⌘/ 是給
      // 按不出 ? 的鍵盤配置的後路，不需要佔表格的版面。
      match: function (e) {
        return (e.key === "?" && !cmdKey(e) && !e.altKey) || (e.key === "/" && cmdKey(e));
      },
      run: function () { toggle(); },
    },
    {
      group: "global",
      keys: [CMD, "⇧", "D"],
      labelKey: "ksToggleDisplay",
      fallback: "切換顯示層",
      match: function (e) { return cmdKey(e) && e.shiftKey && (e.key === "d" || e.key === "D"); },
      run: toggleDisplayLayer,
    },
    {
      group: "global",
      keys: [CMD, "⇧", "⌫"],
      labelKey: "ksClearScreen",
      fallback: "清空大螢幕",
      match: function (e) { return cmdKey(e) && e.shiftKey && e.key === "Backspace"; },
      run: clearScreen,
    },
    {
      group: "feed",
      keys: ["J", "/", "K"],
      labelKey: "ksFeedMove",
      fallback: "上／下一則",
      match: function (e) { return !cmdKey(e) && "jkJK".indexOf(e.key) >= 0; },
      run: function (e) { window.AdminLiveFeed.moveFocus(e.key === "j" || e.key === "J" ? 1 : -1); },
    },
    {
      group: "feed",
      keys: ["B", "/", "⇧B"],
      labelKey: "ksFeedBlock",
      fallback: "封鎖這則的字／人",
      match: function (e) { return !cmdKey(e) && (e.key === "b" || e.key === "B"); },
      run: function (e) { window.AdminLiveFeed.blockFocused(e.shiftKey ? "fingerprint" : "keyword"); },
    },
    {
      group: "feed",
      keys: ["Space"],
      labelKey: "ksFeedPause",
      fallback: "暫停／繼續捲動",
      match: function (e) { return !cmdKey(e) && e.key === " "; },
      run: function () { window.AdminLiveFeed.togglePause(); },
    },
    {
      group: "feed",
      keys: ["P"],
      labelKey: "ksFeedPoll",
      fallback: "開始／結束投票",
      match: function (e) { return !cmdKey(e) && (e.key === "p" || e.key === "P"); },
      run: togglePoll,
    },
  ];

  // ── 這張表本身 ────────────────────────────────────────────────────

  function _esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function _rowsHtml(group) {
    return SHORTCUTS.filter(function (s) { return s.group === group; })
      .map(function (s) {
        var keys = s.keys
          .map(function (k) {
            return k === "/"
              ? '<span class="admin-ks__sep">/</span>'
              : '<kbd class="admin-ks__key">' + _esc(k) + "</kbd>";
          })
          .join("");
        return (
          '<div class="admin-ks__row">' +
          '<span class="admin-ks__desc">' + _esc(t(s.labelKey, s.fallback)) + "</span>" +
          '<span class="admin-ks__keys">' + keys + "</span>" +
          "</div>"
        );
      })
      .join("");
  }

  function close() {
    var el = document.getElementById(ROOT_ID);
    if (el) el.remove();
    document.removeEventListener("keydown", _onSheetKey, true);
  }

  function _onSheetKey(e) {
    if (e.key === "Escape" || e.key === "?") {
      e.preventDefault();
      close();
    }
  }

  function open() {
    if (document.getElementById(ROOT_ID)) return;
    var root = document.createElement("div");
    root.id = ROOT_ID;
    root.className = "admin-ks";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-labelledby", "admin-ks-title");
    root.innerHTML =
      '<div class="admin-ks__backdrop" data-ks-close></div>' +
      '<div class="admin-ks__panel">' +
      '<h2 class="admin-ks__title" id="admin-ks-title">' + _esc(t("ksTitle", "鍵盤快速鍵")) + "</h2>" +
      '<div class="admin-ks__group-label">' + _esc(t("ksGroupGlobal", "全域")) + "</div>" +
      '<div class="admin-ks__group">' + _rowsHtml("global") + "</div>" +
      '<div class="admin-ks__group-label">' + _esc(t("ksGroupFeed", "控制台訊息流")) + "</div>" +
      '<div class="admin-ks__group">' + _rowsHtml("feed") + "</div>" +
      '<p class="admin-ks__note">' + _esc(t("ksNote", "Windows 以 Ctrl 取代 ⌘。")) + "</p>" +
      '<button type="button" class="admin-ks__close" data-ks-close>' + _esc(t("closeBtn", "關閉")) + "</button>" +
      "</div>";
    document.body.appendChild(root);
    root.addEventListener("click", function (e) {
      if (e.target.closest("[data-ks-close]")) close();
    });
    document.addEventListener("keydown", _onSheetKey, true);
    var btn = root.querySelector(".admin-ks__close");
    if (btn) setTimeout(function () { try { btn.focus(); } catch (e) {} }, 30);
  }

  function toggle() {
    if (document.getElementById(ROOT_ID)) close();
    else open();
  }

  // ── 派送 ──────────────────────────────────────────────────────────

  function _isTyping(el) {
    if (!el) return false;
    if (el.isContentEditable) return true;
    var tag = (el.tagName || "").toLowerCase();
    return tag === "input" || tag === "textarea" || tag === "select";
  }

  function _feedActive() {
    return !!(window.AdminLiveFeed && window.AdminLiveFeed.isVisible && window.AdminLiveFeed.isVisible());
  }

  document.addEventListener("keydown", function (e) {
    if (!document.body.classList.contains("admin-body")) return;
    // 登入頁也掛著 admin-body，但那裡沒有一個快速鍵是有意義的
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    // 對話框開著時只讓它自己處理鍵——那時使用者正在打密碼。
    if (document.getElementById("admin-session-expired-root")) return;
    var typing = _isTyping(document.activeElement);

    for (var i = 0; i < SHORTCUTS.length; i++) {
      var s = SHORTCUTS[i];
      if (s.group === "feed") {
        // 訊息流那組都是可打字的字元，所以條件比全域嚴：不能在輸入框裡，
        // 而且訊息流要真的在畫面上。
        if (typing || !_feedActive()) continue;
      } else if (typing && !cmdKey(e)) {
        continue;
      }
      if (!s.match(e)) continue;
      e.preventDefault();
      s.run(e);
      return;
    }
  });

  window.AdminShortcuts = {
    open: open,
    close: close,
    toggle: toggle,
    list: function () { return SHORTCUTS.slice(); },
  };
})();
