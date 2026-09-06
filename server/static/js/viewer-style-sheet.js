/**
 * viewer-style-sheet.js — 觀眾頁樣式抽層與首屏摘要
 *
 * 設計稿 05「觀眾頁示範」把首屏的 6 組控制（暱稱／顏色／3 滑桿／效果／排版）
 * 收成一列「樣式」摘要，控制項全部搬進抽層。這支負責：
 *
 *   · 抽層開關與兩層切換（樣式 ↔ 暱稱）
 *   · 大小三段控制 ↔ #sizeInput（真值仍在那顆 range，送出流程不動）
 *   · 摘要文字「白 · 中 · 發光」與左側色點
 *   · 送出列的「小明 · 改暱稱」
 *   · 大螢幕未開時的說明卡與預覽替代文案（V4）
 *   · 送出成功 Toast 與「我送過的」（V3）
 *   · 投票分段控制只在有投票時浮出（V6）
 *   · 鍵盤上方常用 emoji 快捷（設計稿 16 · VK1）
 *   · 首次進入的暱稱提示（設計稿 16 · VN1）
 *
 * 桌面 ≥768 由 CSS 把抽層改成右側常駐面板（設計稿 16 · VP1），這支不分裝置。
 */
(function () {
  "use strict";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const t = (key, fallback) => {
    try {
      const v = window.ServerI18n && ServerI18n.t(key);
      return v && v !== key ? v : fallback;
    } catch (_) {
      return fallback;
    }
  };

  const sheet = $("#viewerStyleSheet");
  const styleRow = $("#viewerStyleRow");
  const sizeInput = $("#sizeInput");
  const nicknameInput = $("#nicknameInput");

  // ── 抽層開關 ───────────────────────────────────────────────────────
  // 桌面 ≥768 抽層是常駐面板（設計稿 16 · VP1），不能靠 CSS 覆蓋 [hidden]：
  // tailwind preflight 的 `[hidden]{display:none!important}` 在 @layer base
  // 裡，而 important 宣告的層級順序是反過來的——分層的 important 會贏過
  // 未分層的 important。所以桌面直接拿掉 hidden 屬性。
  const DESKTOP = window.matchMedia("(min-width: 768px)");

  function syncSheetMode() {
    if (!sheet) return;
    if (DESKTOP.matches) {
      sheet.hidden = false;
      sheet.removeAttribute("aria-modal");
      showView("root");
    } else if (!document.body.classList.contains("is-style-sheet-open")) {
      sheet.hidden = true;
      sheet.setAttribute("aria-modal", "true");
    }
  }

  let _lastFocus = null;

  function showView(name) {
    if (!sheet) return;
    $$("[data-style-view]", sheet).forEach((v) => {
      v.hidden = v.dataset.styleView !== name;
    });
  }

  function openSheet(view) {
    if (!sheet) return;
    if (DESKTOP.matches) { showView(view || "root"); return; }
    _lastFocus = document.activeElement;
    showView(view || "root");
    sheet.hidden = false;
    document.body.classList.add("is-style-sheet-open");
    if (styleRow) styleRow.setAttribute("aria-expanded", "true");
    // focus trap 起點（設計稿 17）
    const first = sheet.querySelector(
      ".viewer-style-sheet-view:not([hidden]) button, .viewer-style-sheet-view:not([hidden]) input",
    );
    if (first) setTimeout(() => { try { first.focus(); } catch (_) {} }, 30);
  }

  function closeSheet() {
    if (!sheet) return;
    if (DESKTOP.matches) { showView("root"); return; }
    sheet.hidden = true;
    document.body.classList.remove("is-style-sheet-open");
    if (styleRow) styleRow.setAttribute("aria-expanded", "false");
    if (_lastFocus) { try { _lastFocus.focus(); } catch (_) {} }
  }

  if (styleRow) styleRow.addEventListener("click", () => openSheet("root"));
  $$("[data-style-sheet-close]").forEach((el) => el.addEventListener("click", closeSheet));
  $$("[data-open-nickname]").forEach((el) =>
    el.addEventListener("click", (e) => { e.preventDefault(); openSheet("nickname"); }),
  );
  $$("[data-style-view-back]").forEach((el) =>
    el.addEventListener("click", () => showView("root")),
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sheet && !sheet.hidden) { e.preventDefault(); closeSheet(); }
  });

  // ── 大小三段 ↔ #sizeInput ──────────────────────────────────────────
  // 三段對應到 admin 設定的 min/max 區間：小 = min、中 = 中位數、大 = max。
  // #sizeInput 仍是唯一真值，維持 main.js 的送出與預覽流程不變。
  function sizeSteps() {
    if (!sizeInput) return null;
    const min = Number(sizeInput.min) || 16;
    const max = Number(sizeInput.max) || 72;
    return { small: min, medium: Math.round((min + max) / 2), large: max };
  }

  function stepForValue(v) {
    const s = sizeSteps();
    if (!s) return "medium";
    const n = Number(v);
    const d = (a) => Math.abs(n - a);
    if (d(s.small) <= d(s.medium) && d(s.small) <= d(s.large)) return "small";
    if (d(s.large) <= d(s.medium)) return "large";
    return "medium";
  }

  function paintSizeSeg() {
    const cur = sizeInput ? stepForValue(sizeInput.value) : "medium";
    $$("[data-size-seg] [data-size-step]").forEach((b) => {
      const on = b.dataset.sizeStep === cur;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-checked", on ? "true" : "false");
    });
  }

  $$("[data-size-seg] [data-size-step]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const s = sizeSteps();
      if (!s || !sizeInput) return;
      sizeInput.value = String(s[btn.dataset.sizeStep]);
      sizeInput.dispatchEvent(new Event("input", { bubbles: true }));
      sizeInput.dispatchEvent(new Event("change", { bubbles: true }));
      paintSizeSeg();
      refreshSummary();
    });
  });

  // ── 摘要文字與色點 ─────────────────────────────────────────────────
  const COLOR_NAMES = {
    "#ffffff": ["swatchWhite", "白"],
    "#38bdf8": ["swatchSky", "天藍"],
    "#fbbf24": ["swatchAmber", "黃"],
    "#86efac": ["swatchGreen", "綠"],
    "#f87171": ["swatchRed", "紅"],
    "#c084fc": ["swatchPurple", "紫"],
  };

  function currentColor() {
    const active = $(".viewer-swatch-preset.is-active");
    if (active && active.dataset.color) return active.dataset.color.toLowerCase();
    const picker = $("#colorInput");
    return ((picker && picker.value) || "#ffffff").toLowerCase();
  }

  function colorLabel(hex) {
    const entry = COLOR_NAMES[hex];
    return entry ? t(entry[0], entry[1]) : hex.toUpperCase();
  }

  function sizeLabel() {
    const step = sizeInput ? stepForValue(sizeInput.value) : "medium";
    return {
      small: t("viewerSizeSmall", "小"),
      medium: t("viewerSizeMedium", "中"),
      large: t("viewerSizeLarge", "大"),
    }[step];
  }

  function effectLabels() {
    return $$("#effectButtons [aria-pressed='true'], #effectButtons .is-active")
      .map((b) => (b.textContent || "").trim())
      .filter(Boolean);
  }

  function refreshSummary() {
    const hex = currentColor();
    const swatch = $("[data-style-swatch]");
    if (swatch) swatch.style.background = hex;

    const fx = effectLabels();
    const parts = [colorLabel(hex), sizeLabel()];
    parts.push(fx.length ? fx.join("・") : t("viewerNoEffect", "無效果"));
    const out = $("[data-style-summary]");
    if (out) out.textContent = parts.join(" · ");

    // 抽層內的即時預覽跟著換色／換字級
    $$("[data-sheet-preview-text]").forEach((el) => {
      el.style.color = hex;
      if (sizeInput) el.style.fontSize = Math.min(32, Number(sizeInput.value) || 32) + "px";
    });
  }

  // 顏色／效果的點擊在 main.js 裡處理，這裡只在事件冒泡後重算摘要。
  document.addEventListener("click", (e) => {
    if (!e.target.closest) return;
    if (e.target.closest(".viewer-swatch-preset, #effectButtons button")) {
      setTimeout(refreshSummary, 0);
    }
  });
  const colorPicker = $("#colorInput");
  if (colorPicker) colorPicker.addEventListener("input", () => setTimeout(refreshSummary, 0));
  if (sizeInput) sizeInput.addEventListener("input", () => { paintSizeSeg(); refreshSummary(); });
  document.addEventListener("viewer:style-changed", refreshSummary);

  // ── 暱稱：送出列顯示、字數、抽層預覽 ──────────────────────────────
  function anonLabel() { return t("anonymousPlaceholder", "匿名"); }

  function renderNickEverywhere() {
    const v = nicknameInput ? (nicknameInput.value || "").trim() : "";
    const shown = v || anonLabel();
    const who = $("[data-sendbar-nick]");
    if (who) who.textContent = shown + "\u00a0·\u00a0";
    $$("[data-sheet-preview-nick]").forEach((el) => { el.textContent = v; });
    const count = $("[data-nickname-count]");
    if (count) count.textContent = v.length + "/12";
    const disp = $("[data-nickname-display]");
    if (disp) disp.textContent = shown;
  }

  if (nicknameInput) {
    nicknameInput.addEventListener("input", renderNickEverywhere);
    nicknameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); showView("root"); }
    });
  }

  // 「顯示暱稱」開關：關掉就清空暱稱（等同以匿名送出）。
  const nickShow = $("[data-nickname-show]");
  if (nickShow && nicknameInput) {
    let _stash = "";
    nickShow.addEventListener("change", () => {
      if (nickShow.checked) {
        if (_stash) nicknameInput.value = _stash;
      } else {
        _stash = nicknameInput.value || "";
        nicknameInput.value = "";
      }
      nicknameInput.dispatchEvent(new Event("input", { bubbles: true }));
    });
  }

  // ── 首次進入的暱稱提示（設計稿 16 · VN1）─────────────────────────
  const NAMEASK_KEY = "danmu_nameask_seen";
  const nameAsk = $("#viewerNameAsk");
  if (nameAsk) {
    let seen = false;
    try { seen = localStorage.getItem(NAMEASK_KEY) === "1"; } catch (_) {}
    const hasNick = nicknameInput && (nicknameInput.value || "").trim();
    if (!seen && !hasNick) nameAsk.hidden = false;

    const dismiss = () => {
      nameAsk.hidden = true;
      try { localStorage.setItem(NAMEASK_KEY, "1"); } catch (_) {}
    };
    const askInput = $("[data-nameask-input]", nameAsk);
    const commit = () => {
      const v = askInput ? (askInput.value || "").trim() : "";
      if (v && nicknameInput) {
        nicknameInput.value = v;
        nicknameInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
      dismiss();
    };
    const dismissBtn = $("[data-nameask-dismiss]", nameAsk);
    if (dismissBtn) dismissBtn.addEventListener("click", dismiss);
    const okBtn = $("[data-nameask-ok]", nameAsk);
    if (okBtn) okBtn.addEventListener("click", commit);
    if (askInput) {
      askInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { e.preventDefault(); commit(); }
      });
    }
  }

  // ── 大螢幕開關狀態（設計稿 05 · V1 vs V4）─────────────────────────
  // main.js 只把狀態寫進 #overlayStatus 的色點 class，這裡用 MutationObserver
  // 讀那個唯一真相，不另外再打一次 /overlay_status。
  const overlayStatus = $("#overlayStatus");
  const offlineCard = $("[data-viewer-screenoff-card]");
  const previewIdle = $("[data-viewer-preview-idle]");
  const previewRow = $(".viewer-preview-row");

  function applyOverlayState() {
    if (!overlayStatus) return;
    const dot = overlayStatus.querySelector("[class*='connection-dot--']");
    const online = !!(dot && dot.classList.contains("connection-dot--connected"));
    overlayStatus.classList.toggle("is-online", online);
    overlayStatus.classList.toggle("is-offline", !online);
    if (offlineCard) offlineCard.hidden = online;
    if (previewIdle) previewIdle.hidden = online;
    if (previewRow) previewRow.hidden = !online;
    document.body.classList.toggle("viewer-screen-off", !online);
  }

  if (overlayStatus) {
    new MutationObserver(applyOverlayState).observe(overlayStatus, {
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });
    applyOverlayState();
  }

  // ── 投票分段控制只在有投票時浮出（設計稿 05 · V6）────────────────
  const tabbar = $(".viewer-tabbar");
  const pollPane = $("#viewerPollPane");
  const tabLive = $("[data-viewer-tab-live]");

  function pollIsLive() {
    if (!pollPane) return false;
    const label = $("[data-vpoll-state-label]", pollPane);
    const q = $("[data-vpoll-question]", pollPane);
    const opts = $("[data-vpoll-options]", pollPane);
    if (opts && opts.children.length > 0) return true;
    const txt = ((label && label.textContent) || "") + ((q && q.textContent) || "");
    return !/沒有進行中|No active|進行中の投票はありません|진행 중인 투표가 없습니다/.test(txt)
      && !!(opts && opts.children.length);
  }

  function refreshPollTab() {
    const live = pollIsLive();
    if (tabbar) tabbar.hidden = !live;
    if (tabLive) tabLive.hidden = !live;
    // 投票收掉時把使用者拉回彈幕頁，避免停在空面板上
    if (!live && pollPane && !pollPane.hidden) {
      const fireTab = $("[data-viewer-tab='fire']");
      if (fireTab) fireTab.click();
    }
  }

  if (pollPane) {
    new MutationObserver(refreshPollTab).observe(pollPane, {
      subtree: true, childList: true, characterData: true,
    });
    refreshPollTab();
  }

  // ── 鍵盤上方常用 emoji（設計稿 16 · VK1）─────────────────────────
  const danmuText = $("#danmuText");
  $$("[data-quick-insert]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!danmuText) return;
      const ins = btn.dataset.quickInsert || "";
      const start = danmuText.selectionStart != null ? danmuText.selectionStart : danmuText.value.length;
      const end = danmuText.selectionEnd != null ? danmuText.selectionEnd : start;
      const next = danmuText.value.slice(0, start) + ins + danmuText.value.slice(end);
      if (next.length > Number(danmuText.maxLength || 100)) return;
      danmuText.value = next;
      danmuText.dispatchEvent(new Event("input", { bubbles: true }));
      try {
        danmuText.focus();
        danmuText.setSelectionRange(start + ins.length, start + ins.length);
      } catch (_) {}
    });
  });

  // ── 送出成功：Toast ＋「我送過的」（設計稿 05 · V3）───────────────
  const sentWrap = $("[data-viewer-sent]");
  const sentList = $("[data-viewer-sent-list]");
  const SENT_MAX = 5;
  const _sent = [];

  function relTime(ts) {
    const mins = Math.floor((Date.now() - ts) / 60000);
    if (mins < 1) return t("viewerJustNow", "剛剛");
    return t("viewerMinutesAgo", "{n} 分鐘前").replace("{n}", String(mins));
  }

  function renderSent() {
    if (!sentWrap || !sentList) return;
    sentWrap.hidden = _sent.length === 0;
    sentList.textContent = "";
    _sent.forEach((item) => {
      const li = document.createElement("li");
      li.className = "viewer-sent-item";
      const dot = document.createElement("span");
      dot.className = "viewer-sent-dot";
      dot.style.background = item.color;
      dot.setAttribute("aria-hidden", "true");
      const text = document.createElement("span");
      text.className = "viewer-sent-text";
      text.textContent = item.text;
      const time = document.createElement("span");
      time.className = "viewer-sent-time";
      time.textContent = relTime(item.ts);
      li.append(dot, text, time);
      sentList.appendChild(li);
    });
  }

  setInterval(() => { if (_sent.length) renderSent(); }, 30000);

  // main.js 的成功回饋是 #sendStatusBanner 加上 .is-sent，這裡掛在同一個
  // 訊號上，不重複攔 fetch。
  const banner = $("#sendStatusBanner");
  if (banner) {
    let _lastText = "";
    new MutationObserver(() => {
      if (banner.hidden || !banner.classList.contains("is-sent")) return;
      const text = _lastText;
      if (!text) return;
      _sent.unshift({ text: text, color: currentColor(), ts: Date.now() });
      if (_sent.length > SENT_MAX) _sent.length = SENT_MAX;
      renderSent();
      _lastText = "";
      if (window.showToast) {
        try { showToast(t("viewerSentToast", "已送上大螢幕"), "success"); } catch (_) {}
      }
    }).observe(banner, { attributes: true, attributeFilter: ["class", "hidden"] });

    // 記住送出當下的內容（main.js 送出後會清空 input）
    const btnSend = $("#btnSend");
    const remember = () => {
      if (danmuText && danmuText.value.trim()) _lastText = danmuText.value.trim();
    };
    if (btnSend) btnSend.addEventListener("click", remember, true);
    if (danmuText) {
      danmuText.addEventListener("keydown", (e) => { if (e.key === "Enter") remember(); }, true);
    }
  }

  // ── 起始渲染 ───────────────────────────────────────────────────────
  function boot() {
    syncSheetMode();
    paintSizeSeg();
    refreshSummary();
    renderNickEverywhere();
  }
  boot();
  DESKTOP.addEventListener("change", syncSheetMode);
  // main.js 是 defer 載入且會非同步補上效果按鈕，等它一輪再算一次摘要。
  setTimeout(boot, 300);
  setTimeout(refreshSummary, 1200);
  document.addEventListener("i18n:changed", boot);
})();
