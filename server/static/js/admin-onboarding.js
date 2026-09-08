/**
 * Admin · 首次導覽（設計稿 10 · G1）。
 *
 * 3 步氣泡：顯示層 → 觀眾怎麼進來 → 遇到不當內容。第一次進控制台時
 * 自動開；也可從「關於」頁 AdminOnboarding.start() 或 #/onboarding-tour
 * 叫回來。
 *
 * 2026-09-07 依設計稿重寫（原本是 5 步、深色 tooltip、clip-path 打洞）。
 * 舊版的三個問題：
 *   - 5 步裡有 3 步在教工具（⌘K／Fire Token／通知中心），第一次用的人
 *     還沒有東西要通知；稿上收斂成「把場開起來」的最短路徑。
 *   - clip-path polygon 手算八個頂點，視窗一縮就漏縫。改用聚光燈自己的
 *     9999px 外陰影當遮罩，打洞和遮罩不可能對不齊。
 *   - 樣式全部 inline 且寫死深色 hex，淺色主題下是深卡片配深字。
 *
 * 樣式在 server/static/css/style.css 的 .admin-ob-* 區塊。
 * 以 <script defer> 掛在 admin.html。
 */
(function () {
  "use strict";

  const DONE_KEY = "danmu.onboarding.done";
  const ROOT_ID  = "admin-onboarding-root";

  // 氣泡與目標的間距、聚光燈往外撐開的留白。
  const GAP = 16;
  const PAD = 8;
  const BUBBLE_W = 360;

  // STEPS 是頂層常數（parse 時 ServerI18n 還沒 init），所以文案只存 key，
  // 渲染當下才 t()。
  //
  // target 一律指向控制台上真的存在、而且看得見的東西——找不到就退回
  // 置中無聚光燈，不會空指一塊。
  const STEPS = [
    {
      titleKey: "obStep1Title",
      bodyKey: "obStep1Body",
      labelKey: "obStep1Label",
      target: ".admin-cockpit-overlay",
      side: "bottom",
    },
    {
      titleKey: "obStep2Title",
      bodyKey: "obStep2Body",
      labelKey: "obStep2Label",
      target: ".admin-cockpit-stats-actions",
      side: "bottom",
    },
    {
      titleKey: "obStep3Title",
      bodyKey: "obStep3Body",
      labelKey: "obStep3Label",
      target: "#sec-live-feed .admin-lf-v4__card, #sec-live-feed",
      side: "top",
    },
  ];

  let _step = 0;
  let _active = false;

  // ── public API ───────────────────────────────────────────────────

  window.AdminOnboarding = {
    start: _start,
    isDone: function () {
      try { return !!localStorage.getItem(DONE_KEY); } catch (_) { return false; }
    },
    reset: function () {
      try { localStorage.removeItem(DONE_KEY); } catch (_) {}
    },
  };

  // ── trigger ──────────────────────────────────────────────────────

  // cockpit slug 是 `live`；`dashboard` 是保留的別名，書籤還會指過來。
  const COCKPIT_ROUTES = new Set(["live", "dashboard"]);

  function _tryAutoStart() {
    if (_active || window.AdminOnboarding.isDone()) return;
    if (!COCKPIT_ROUTES.has(_currentRoute())) return;
    // 場次進行中絕不自動彈導覽（會直接蓋住即時訊息流——場中實測抓到）。
    // 用場次橫幅的 live 態當訊號；橫幅還沒渲染就先等一拍再判。
    const sessionLive = () => !!document.querySelector(".admin-session-banner-live");
    if (sessionLive()) return;
    setTimeout(() => {
      if (_active || window.AdminOnboarding.isDone() || sessionLive()) return;
      if (!COCKPIT_ROUTES.has(_currentRoute())) return;
      _start();
    }, 1200);
  }

  function _currentRoute() {
    const grid = document.querySelector(".admin-dash-grid");
    return (grid && grid.dataset.activeRoute) || "live";
  }

  function _onHashChange() {
    const hash = (window.location.hash.match(/^#\/(\S+)/) || [])[1] || "";
    if (hash === "onboarding-tour") _start();
  }

  // ── core ─────────────────────────────────────────────────────────

  function _start() {
    if (_active) return;
    _active = true;
    _step = 0;
    _mount();
  }

  function _stop(done) {
    if (!_active) return;
    _active = false;
    document.body.removeEventListener("click", _handleBodyClick);
    document.removeEventListener("keydown", _handleKeydown);
    window.removeEventListener("resize", _renderStep);
    const root = document.getElementById(ROOT_ID);
    if (root) root.remove();
    if (done) {
      try { localStorage.setItem(DONE_KEY, "1"); } catch (_) {}
    }
    // 從 #/onboarding-tour 進來的話把 hash 彈回控制台
    if (window.location.hash === "#/onboarding-tour") {
      try { history.replaceState(null, "", "#/live"); } catch (_) {}
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }

  function _advance() {
    if (_step < STEPS.length - 1) { _step++; _renderStep(); }
    else { _stop(true); }
  }

  // ── events ───────────────────────────────────────────────────────
  // root 是 pointer-events:none（導覽不擋底下的 UI），所以從 body 委派。

  function _handleBodyClick(e) {
    const btn = e.target.closest("[data-ob-action]");
    if (!btn) return;
    e.stopPropagation();
    if (btn.dataset.obAction === "next") _advance();
    else if (btn.dataset.obAction === "skip") _stop(false);
  }

  function _handleKeydown(e) {
    if (!_active) return;
    if (e.key === "Escape") { e.preventDefault(); _stop(false); }
  }

  // ── render ───────────────────────────────────────────────────────

  function _mount() {
    const old = document.getElementById(ROOT_ID);
    if (old) old.remove();

    const root = document.createElement("div");
    root.id = ROOT_ID;
    root.className = "admin-ob-root";
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "false");
    root.setAttribute("aria-label", ServerI18n.t("obAriaLabel"));
    document.body.appendChild(root);

    document.body.addEventListener("click", _handleBodyClick);
    document.addEventListener("keydown", _handleKeydown);
    window.addEventListener("resize", _renderStep);

    _renderStep();
  }

  function _renderStep() {
    const root = document.getElementById(ROOT_ID);
    if (!root) return;

    const cur = STEPS[_step];
    const total = STEPS.length;
    const rect = _findRect(cur.target);
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // ── 聚光燈 ──
    let spot = "";
    if (rect) {
      spot =
        '<div class="admin-ob-spot" style="' +
        "left:" + (rect.left - PAD) + "px;" +
        "top:" + (rect.top - PAD) + "px;" +
        "width:" + (rect.width + PAD * 2) + "px;" +
        "height:" + (rect.height + PAD * 2) + "px;" +
        '"></div>';
    } else {
      spot = '<div class="admin-ob-scrim"></div>';
    }

    // ── 氣泡位置 ──
    // 高度先量不到（還沒進 DOM），先用估值定位，插入後再照實際高度修一次。
    let left = (vw - BUBBLE_W) / 2;
    let top = vh / 2 - 110;
    let arrow = "none";

    if (rect) {
      // 上／下方的氣泡對齊目標中心。靠左對齊在窄目標上還行，但控制台的
      // 目標從 103px（QR 鈕）到 1103px（訊息流卡）都有，靠左對齊時箭頭
      // 會被夾在卡片邊緣，看起來像指錯地方。
      const cx = rect.left + rect.width / 2;
      if (cur.side === "top") {
        left = cx - BUBBLE_W / 2;
        top = rect.top - GAP;      // 下面用實際高度往上推
        arrow = "bottom";
      } else if (cur.side === "right") {
        left = rect.right + GAP + PAD;
        top = rect.top;
        arrow = "left";
      } else {
        left = cx - BUBBLE_W / 2;
        top = rect.bottom + GAP + PAD;
        arrow = "top";
      }
      left = Math.max(GAP, Math.min(vw - BUBBLE_W - GAP, left));
    }

    const progress = STEPS.map(function (s, i) {
      return (
        '<span class="admin-ob-progress-item' + (i === _step ? " is-current" : "") + '">' +
        (i + 1) + " " + _esc(ServerI18n.t(s.labelKey)) +
        "</span>" +
        (i < total - 1 ? '<span class="admin-ob-progress-sep">·</span>' : "")
      );
    }).join("");

    root.innerHTML =
      spot +
      '<div class="admin-ob-bubble" data-arrow="' + arrow + '" style="left:' + left + "px;top:" + top + 'px">' +
        '<div class="admin-ob-count">' + (_step + 1) + " / " + total + "</div>" +
        '<div class="admin-ob-title">' + _esc(ServerI18n.t(cur.titleKey)) + "</div>" +
        '<div class="admin-ob-body">' + _esc(ServerI18n.t(cur.bodyKey)) + "</div>" +
        '<div class="admin-ob-foot">' +
          '<button type="button" class="admin-ob-skip" data-ob-action="skip">' +
            _esc(ServerI18n.t("obSkip")) +
          "</button>" +
          '<div class="admin-ob-foot-spacer"></div>' +
          '<button type="button" class="admin-ob-next" data-ob-action="next">' +
            _esc(ServerI18n.t(_step === total - 1 ? "obDone" : "obNext")) +
          "</button>" +
        "</div>" +
        '<div class="admin-ob-progress">' + progress + "</div>" +
      "</div>";

    // 插入後才量得到實際高度：往上開的氣泡要整個推上去，往下開的要確定
    // 沒有掉出視窗底（掉出去的話翻到上方，箭頭跟著換邊）。
    const bubble = root.querySelector(".admin-ob-bubble");
    if (!bubble || !rect) return;
    const h = bubble.offsetHeight;
    if (cur.side === "top") {
      bubble.style.top = Math.max(GAP, rect.top - GAP - PAD - h) + "px";
    } else if (top + h > vh - GAP) {
      const flipped = rect.top - GAP - PAD - h;
      if (flipped >= GAP) {
        bubble.style.top = flipped + "px";
        bubble.setAttribute("data-arrow", "bottom");
      } else {
        bubble.style.top = Math.max(GAP, vh - h - GAP) + "px";
        bubble.setAttribute("data-arrow", "none");
      }
    }
    _aimArrow(bubble, rect);
  }

  // 箭頭永遠指在目標中心，不跟著卡片走——氣泡被視窗邊緣夾住時（例如
  // 目標貼在最右邊），卡片只能往左退，箭頭再固定 32px 就會指到空白處。
  function _aimArrow(bubble, rect) {
    const side = bubble.getAttribute("data-arrow");
    if (side === "none") return;
    const box = bubble.getBoundingClientRect();
    const isVertical = side === "top" || side === "bottom";
    const center = isVertical
      ? rect.left + rect.width / 2 - box.left
      : rect.top + rect.height / 2 - box.top;
    const span = isVertical ? box.width : box.height;
    const offset = Math.max(16, Math.min(span - 32, center - 8));
    bubble.style.setProperty("--ob-arrow", offset + "px");
  }

  function _findRect(selector) {
    if (!selector) return null;
    const el = document.querySelector(selector);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    if (r.width < 8 || r.height < 8) return null;
    // 捲出視窗外的目標指了也看不到——退回置中。
    if (r.bottom < 0 || r.top > window.innerHeight) return null;
    return r;
  }

  // 2026-09-08：原本這裡各自實作，而且漏跳引號（屬性位置會被撐開）。
  // 全站統一走 AdminUtils.escapeHtml；fallback 保留是為了載入順序的保險，
  // 內容與那支一致（`& < > " '` 五個都跳）。
  function _esc(s) {
    if (window.AdminUtils && window.AdminUtils.escapeHtml) {
      return window.AdminUtils.escapeHtml(s);
    }
    if (s == null) return "";
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }

  // ── init ─────────────────────────────────────────────────────────

  document.addEventListener("DOMContentLoaded", function () {
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    window.addEventListener("hashchange", _onHashChange);
    _onHashChange();

    window.addEventListener("hashchange", function () {
      if (COCKPIT_ROUTES.has(_currentRoute())) setTimeout(_tryAutoStart, 600);
    });
    setTimeout(_tryAutoStart, 800);
  });
})();
