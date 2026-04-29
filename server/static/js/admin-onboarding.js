/**
 * Admin · Onboarding Tour (2026-04-29).
 *
 * Mirrors docs/designs/design-v2/components/admin-batch9.jsx
 * AdminOnboardingTour. Shows a 5-step spotlight+tooltip overlay on the
 * first dashboard visit. Triggered again via:
 *   - AdminOnboarding.start() (called from About page)
 *   - URL hash #/onboarding-tour
 *
 * Steps highlight specific UI regions via clip-path cutout + border ring.
 * Target regions are looked up via data attributes / CSS selectors at
 * runtime so the positions stay correct across viewport sizes.
 *
 * Loaded as <script defer> in admin.html.
 */
(function () {
  "use strict";

  const DONE_KEY  = "danmu.onboarding.done";
  const ROOT_ID   = "admin-onboarding-root";

  const STEPS = [
    {
      n: 1,
      title: "即時控制台",
      body: "你會在這個頁面看到正在進行的場次概況 — 觀眾數、訊息流、Polls、健康度。所有重要資訊都在第一屏。",
      target: ".admin-dash-kpi-row, [data-section='dashboard-kpi']",
      fallbackRect: { x: 12, y: 80, w: 700, h: 120 },
      tipSide: "bottom",
    },
    {
      n: 2,
      title: "⌘K 命令面板",
      body: "隨時按 ⌘K 開啟。可搜尋訊息、跳到任何頁面、執行快速動作。學會這個就能少點 3/4 的次數。",
      target: "[data-admin-palette-trigger], .admin-palette-trigger, [data-cmd-palette-open]",
      fallbackRect: { x: 0.55, y: 12, w: 240, h: 36, relative: true },
      tipSide: "bottom",
    },
    {
      n: 3,
      title: "Fire Token 整合",
      body: "想接 Slido、OBS、自製 bot？在「整合」頁取得 Fire Token，任何工具都能 POST 訊息到你的場次。",
      target: "[data-route='integrations']",
      fallbackRect: { x: 0, y: 480, w: 200, h: 36, relative: false },
      tipSide: "right",
    },
    {
      n: 4,
      title: "通知中心",
      body: "當 webhook 失敗、quota 接近上限、備份失敗時，會集中在這裡通知。建議養成每天看一次的習慣。",
      target: "[data-route='notifications']",
      fallbackRect: { x: 0, y: 440, w: 200, h: 36, relative: false },
      tipSide: "right",
    },
    {
      n: 5,
      title: "完成 · 開始使用",
      body: "指引隨時可以從「關於」頁點「重新顯示提示」叫回來。試著開一個測試場次，看看觀眾發訊息會怎麼跑。",
      target: null,
      tipSide: "center",
    },
  ];

  let _step = 0;
  let _active = false;

  // ── public API ───────────────────────────────────────────────────

  window.AdminOnboarding = {
    start: _start,
    isDone: function () { try { return !!localStorage.getItem(DONE_KEY); } catch (_) { return false; } },
    reset: function () { try { localStorage.removeItem(DONE_KEY); } catch (_) {} },
  };

  // ── trigger ──────────────────────────────────────────────────────

  function _tryAutoStart() {
    if (window.AdminOnboarding.isDone()) return;
    const route = _currentRoute();
    if (route !== "dashboard") return;
    _start();
  }

  function _currentRoute() {
    const grid = document.querySelector(".admin-dash-grid");
    return (grid && grid.dataset.activeRoute) || "dashboard";
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
    _renderOverlay();
  }

  function _stop(done) {
    _active = false;
    document.body.removeEventListener("click", _handleBodyClick);
    const root = document.getElementById(ROOT_ID);
    if (root) root.remove();
    if (done) {
      try { localStorage.setItem(DONE_KEY, "1"); } catch (_) {}
    }
    // bounce hash away if we got here via #/onboarding-tour
    if (window.location.hash === "#/onboarding-tour") {
      try { history.replaceState(null, "", "#/dashboard"); } catch (_) {}
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }

  // ── body-level click delegate ────────────────────────────────────
  // root has pointer-events:none so we delegate from document.body instead.

  function _handleBodyClick(e) {
    const btn = e.target.closest("[data-ob-action]");
    if (!btn) return;
    const action = btn.dataset.obAction;
    if (action === "next") { e.stopPropagation(); _advance(); }
    else if (action === "prev") { e.stopPropagation(); _retreat(); }
    else if (action === "skip") { e.stopPropagation(); _stop(false); }
  }

  // ── render ───────────────────────────────────────────────────────

  function _renderOverlay() {
    // Remove stale root if any
    const old = document.getElementById(ROOT_ID);
    if (old) old.remove();

    const root = document.createElement("div");
    root.id = ROOT_ID;
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-label", "新手導覽");
    // pointer-events:none on root so the overlay never blocks clicks on the
    // underlying admin UI (logout button, nav, etc.).  Only the tooltip card
    // is set to pointer-events:auto in _renderStep so its buttons work.
    root.style.cssText = "position:fixed;inset:0;z-index:9900;pointer-events:none";
    document.body.appendChild(root);

    // Delegate clicks from the tooltip card — no need for a root-level handler
    // because root itself has pointer-events:none.  The tooltip div uses a
    // data-ob-root attribute so we can target the correct element.
    document.body.addEventListener("click", _handleBodyClick);

    _renderStep();
  }

  function _renderStep() {
    const root = document.getElementById(ROOT_ID);
    if (!root) return;

    const cur = STEPS[_step];
    const total = STEPS.length;
    const rect  = cur.target ? _findRect(cur.target) : null;
    const isCenter = cur.tipSide === "center" || !rect;

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const PAD = 6;

    // ── dim layer ──
    let clipPath = "none";
    if (!isCenter && rect) {
      const x1 = rect.left - PAD;
      const y1 = rect.top - PAD;
      const x2 = rect.right + PAD;
      const y2 = rect.bottom + PAD;
      clipPath = `polygon(
        0 0, ${vw}px 0, ${vw}px ${vh}px, 0 ${vh}px, 0 0,
        ${x1}px ${y1}px,
        ${x1}px ${y2}px,
        ${x2}px ${y2}px,
        ${x2}px ${y1}px,
        ${x1}px ${y1}px
      )`;
    }

    // ── tooltip position ──
    const TIP_W = 340;
    const TIP_H = 200; // approximate
    let tipLeft = (vw - TIP_W) / 2;
    let tipTop  = (vh - TIP_H) / 2;
    let arrowClass = "";

    if (!isCenter && rect) {
      if (cur.tipSide === "bottom") {
        tipLeft = Math.max(8, Math.min(vw - TIP_W - 8, rect.left));
        tipTop  = rect.bottom + 16;
        arrowClass = "ob-tip-arrow-top";
      } else if (cur.tipSide === "right") {
        tipLeft = rect.right + 16;
        tipTop  = Math.max(8, rect.top - 20);
        arrowClass = "ob-tip-arrow-left";
      } else if (cur.tipSide === "top") {
        tipLeft = Math.max(8, Math.min(vw - TIP_W - 8, rect.left));
        tipTop  = rect.top - TIP_H - 16;
        arrowClass = "ob-tip-arrow-bottom";
      }
      // Clamp within viewport
      tipLeft = Math.max(8, Math.min(vw - TIP_W - 8, tipLeft));
      tipTop  = Math.max(8, Math.min(vh - TIP_H - 8, tipTop));
    }

    const progressDots = STEPS.map(function (_, i) {
      return `<span class="ob-prog-dot ${i <= _step ? "ob-prog-dot--done" : ""}"></span>`;
    }).join("");

    root.innerHTML = `
      <!-- dim overlay -->
      <div class="ob-dim" style="
        position:absolute;inset:0;
        background:rgba(0,0,0,0.6);
        clip-path:${clipPath};
        transition:clip-path .3s ease;
        pointer-events:none;
      "></div>

      <!-- spotlight ring -->
      ${!isCenter && rect ? `<div class="ob-ring" style="
        position:absolute;
        left:${rect.left - PAD}px;top:${rect.top - PAD}px;
        width:${rect.width + PAD * 2}px;height:${rect.height + PAD * 2}px;
        border:2px solid var(--color-primary,#38bdf8);
        border-radius:6px;
        box-shadow:0 0 0 2px rgba(56,189,248,.25),0 0 20px rgba(56,189,248,.45);
        animation:ob-pulse 2s ease-in-out infinite;
        pointer-events:none;
      "></div>` : ""}

      <!-- tooltip -->
      <div class="ob-tip ${arrowClass}" style="
        position:absolute;
        left:${tipLeft}px;top:${tipTop}px;
        width:${TIP_W}px;
        pointer-events:auto;
        background:var(--bg-panel,#0f1421);
        border:1px solid rgba(56,189,248,.45);
        border-radius:8px;
        padding:18px;
        box-shadow:0 20px 48px rgba(0,0,0,.5),0 0 0 1px rgba(56,189,248,.15);
      ">
        <!-- progress header -->
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
          <span style="
            font-family:var(--font-mono,'IBM Plex Mono',monospace);
            font-size:9px;letter-spacing:1.5px;
            color:var(--color-primary,#38bdf8);
            padding:3px 8px;
            background:rgba(56,189,248,.1);
            border:1px solid rgba(56,189,248,.35);
            border-radius:2px;
          ">STEP ${cur.n} / ${total}</span>
          <div style="flex:1;display:flex;gap:3px">${progressDots}</div>
        </div>

        <div style="font-size:16px;font-weight:600;color:var(--color-text,#e6e8ee);margin-bottom:6px;letter-spacing:.2px">
          ${cur.title}
        </div>
        <div style="font-size:13px;color:var(--color-text-dim,#9aa4b2);line-height:1.6;letter-spacing:.2px">
          ${cur.body}
        </div>

        <div style="margin-top:16px;display:flex;align-items:center;gap:8px">
          <button type="button" class="ob-btn ob-btn--ghost" data-ob-action="skip"
            style="font-size:11px;color:var(--color-text-dim,#9aa4b2);background:none;border:none;cursor:pointer;padding:4px 0">
            跳過導覽
          </button>
          <div style="flex:1"></div>
          ${_step > 0 ? `<button type="button" class="ob-btn ob-btn--outline" data-ob-action="prev"
            style="padding:7px 14px;font-family:var(--font-mono,'IBM Plex Mono',monospace);font-size:11px;
            color:var(--color-text,#e6e8ee);border:1px solid rgba(255,255,255,.2);border-radius:3px;
            background:none;cursor:pointer;letter-spacing:.3px">← 上一步</button>` : ""}
          <button type="button" class="ob-btn ob-btn--primary" data-ob-action="next"
            style="padding:7px 16px;font-family:var(--font-mono,'IBM Plex Mono',monospace);font-size:11px;
            background:var(--color-primary,#38bdf8);color:#000;border:none;border-radius:3px;
            cursor:pointer;font-weight:700;letter-spacing:.4px">
            ${_step === total - 1 ? "✓ 完成" : "下一步 →"}
          </button>
        </div>
      </div>

      <style>
        @keyframes ob-pulse {
          0%,100% { box-shadow:0 0 0 2px rgba(56,189,248,.25),0 0 20px rgba(56,189,248,.45); }
          50%      { box-shadow:0 0 0 4px rgba(56,189,248,.4),0 0 32px rgba(56,189,248,.7); }
        }
        .ob-tip-arrow-top::before {
          content:"";position:absolute;top:-7px;left:40px;
          width:12px;height:12px;
          background:var(--bg-panel,#0f1421);
          border-top:1px solid rgba(56,189,248,.45);
          border-left:1px solid rgba(56,189,248,.45);
          transform:rotate(45deg);
        }
        .ob-tip-arrow-left::before {
          content:"";position:absolute;top:28px;left:-7px;
          width:12px;height:12px;
          background:var(--bg-panel,#0f1421);
          border-top:1px solid rgba(56,189,248,.45);
          border-left:1px solid rgba(56,189,248,.45);
          transform:rotate(-45deg);
        }
        .ob-prog-dot {
          display:inline-block;width:100%;height:2px;border-radius:1px;
          background:rgba(56,189,248,.25);flex:1;
        }
        .ob-prog-dot--done { background:var(--color-primary,#38bdf8); }
      </style>`;
  }

  function _findRect(selector) {
    const el = document.querySelector(selector);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return null;
    return r;
  }

  function _advance() {
    if (_step < STEPS.length - 1) {
      _step++;
      _renderStep();
    } else {
      _stop(true);
    }
  }

  function _retreat() {
    if (_step > 0) { _step--; _renderStep(); }
  }

  // ── init ─────────────────────────────────────────────────────────

  document.addEventListener("DOMContentLoaded", function () {
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    window.addEventListener("hashchange", _onHashChange);
    _onHashChange();

    // Auto-start on first dashboard visit (delay so dashboard content renders first)
    window.addEventListener("hashchange", function () {
      if (_currentRoute() === "dashboard") {
        setTimeout(_tryAutoStart, 600);
      }
    });
    // Also check on initial load
    setTimeout(_tryAutoStart, 800);
  });
})();
