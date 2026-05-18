/**
 * Admin · WCAG Contrast Checker (2026-04-29).
 *
 * Mirrors docs/designs/design-v2/components/admin-batch5.jsx AdminWcagPage.
 * Pure frontend — no backend requests. Calculates WCAG 2.1 relative
 * luminance + contrast ratio in JS, reports AA / AAA / FAIL for each
 * predefined theme color pair.
 *
 * Route: #/wcag (設定 group in sidebar)
 * Section id: sec-wcag-overview
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-wcag-overview";

  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // ── WCAG maths ───────────────────────────────────────────────────

  function _hexToRgb(hex) {
    const h = hex.replace(/^#/, "");
    const full = h.length === 3 ? h.split("").map(function (c) { return c + c; }).join("") : h;
    return [
      parseInt(full.slice(0, 2), 16) / 255,
      parseInt(full.slice(2, 4), 16) / 255,
      parseInt(full.slice(4, 6), 16) / 255,
    ];
  }

  function _linearize(c) {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }

  function _luminance(hex) {
    const rgb = _hexToRgb(hex);
    return 0.2126 * _linearize(rgb[0]) + 0.7152 * _linearize(rgb[1]) + 0.0722 * _linearize(rgb[2]);
  }

  function _contrast(fg, bg) {
    const L1 = _luminance(fg);
    const L2 = _luminance(bg);
    const lighter = Math.max(L1, L2);
    const darker  = Math.min(L1, L2);
    return (lighter + 0.05) / (darker + 0.05);
  }

  function _level(ratio) {
    if (ratio >= 7)   return "AAA";
    if (ratio >= 4.5) return "AA";
    if (ratio >= 3)   return "AA-large";
    return "fail";
  }

  // Suggest lighter/darker variants that pass AA for a given bg
  function _suggestions(fg, bg) {
    const baseLum = _luminance(bg);
    const results = [];
    const hex2rgb = _hexToRgb(fg);
    for (let delta = 0.05; delta <= 0.6 && results.length < 3; delta += 0.05) {
      const candidate = hex2rgb.map(function (c) {
        return Math.min(1, c + delta);
      });
      const cHex = "#" + candidate.map(function (c) {
        return Math.round(c * 255).toString(16).padStart(2, "0");
      }).join("").toUpperCase();
      const r = _contrast(cHex, bg);
      if (r >= 4.5) results.push({ hex: cHex, ratio: r });
    }
    return results;
  }

  // ── state ────────────────────────────────────────────────────────

  const PAIRS = [
    { name: "彈幕白字 / 黑底",     fg: "#FFFFFF", bg: "#000000" },
    { name: "彈幕青色 / 黑底",     fg: "#38BDF8", bg: "#000000" },
    { name: "彈幕黃色 / 黑底",     fg: "#FBBF24", bg: "#000000" },
    { name: "彈幕粉紅 / 黑底",     fg: "#FB7185", bg: "#000000" },
    { name: "彈幕紫色 / 白底",     fg: "#A78BFA", bg: "#FFFFFF" },
    { name: "彈幕綠色 / 投影底",   fg: "#86EFAC", bg: "#0F172A" },
    { name: "系統訊息 / 面板",     fg: "#94A3B8", bg: "#1E293B" },
    { name: "輔助灰文字 / 卡片",   fg: "#64748B", bg: "#1E293B" },
  ];

  let _tester = { fg: "#FB7185", bg: "#000000" };

  // ── render ───────────────────────────────────────────────────────

  function buildSection() {
    const passCount = PAIRS.filter(function (p) { return _level(_contrast(p.fg, p.bg)) !== "fail"; }).length;
    const failCount = PAIRS.length - passCount;

    return `
      <div id="${PAGE_ID}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">A11Y · WCAG 2.1 CONTRAST CHECKER</div>
          <div class="admin-v2-title">無障礙對比度檢查</div>
          <p class="admin-v2-note">驗證彈幕顏色在各種背景下符合 WCAG AA / AAA 標準。觀眾自選顏色時系統會自動拒絕未過 AA 的組合。</p>
        </div>

        <div class="admin-wcag-grid">
          <!-- Left: pairs table -->
          <div class="admin-wcag-table-panel">
            <div class="admin-wcag-table-header">
              <span class="admin-v2-monolabel">當前主題顏色</span>
              <span class="admin-wcag-stat pass">${passCount} 過 AA+</span>
              <span class="admin-wcag-stat fail">${failCount} 未過</span>
              <span class="admin-wcag-theme-label">${PAIRS.length} 對顏色</span>
            </div>

            <div class="admin-wcag-passbar">
              <div class="admin-wcag-passbar-fill" style="width:${Math.round(passCount / PAIRS.length * 100)}%"></div>
              <span class="admin-wcag-passbar-lbl">${Math.round(passCount / PAIRS.length * 100)}% PASS</span>
            </div>

            <div class="admin-wcag-pairs" data-wcag-pairs>
              ${PAIRS.map(function (p, i) { return _renderPairRow(p, i); }).join("")}
            </div>

            <div class="admin-wcag-guardrail">
              <span class="kicker">BUILT-IN GUARDRAIL</span>
              觀眾自選顏色時,系統會自動拒絕未過 AA 的組合並提示替代色。
            </div>
          </div>

          <!-- Right: single-pair tester -->
          <div class="admin-wcag-tester" data-wcag-tester>
            ${_renderTester()}
          </div>
        </div>
      </div>`;
  }

  function _renderPairRow(p, i) {
    const ratio  = _contrast(p.fg, p.bg);
    const lvl    = _level(ratio);
    const isFail = lvl === "fail";
    const isLarge = lvl === "AA-large";
    const displayLvl = isLarge ? "AA*" : lvl;
    return `
      <div class="admin-wcag-pair-row ${isFail ? "is-fail" : ""}" data-wcag-pair-idx="${i}">
        <span class="admin-wcag-pair-name">${escapeHtml(p.name)}</span>
        <div class="admin-wcag-swatch" style="background:${escapeHtml(p.bg)}">
          <span style="color:${escapeHtml(p.fg)};font-weight:700;font-size:18px">Aa 彈幕</span>
          <span style="color:${escapeHtml(p.fg)};font-size:10px;opacity:0.75">${escapeHtml(p.fg)} / ${escapeHtml(p.bg)}</span>
        </div>
        <span class="admin-wcag-ratio ${isFail ? "is-fail" : ""}">${ratio.toFixed(2)}<span class="unit">:1</span></span>
        <span class="admin-wcag-pill admin-wcag-pill--${lvl}">${displayLvl === "fail" ? "✗ FAIL" : "✓ " + displayLvl}</span>
        ${isFail || isLarge ? `<div class="admin-wcag-pair-warn">⚠ ${isFail ? "未過 AA · 建議調整前景亮度 +10~15%" : "僅大字通過 AA · 小字未過"}</div>` : ""}
      </div>`;
  }

  function _renderTester() {
    const ratio = _contrast(_tester.fg, _tester.bg);
    const lvl   = _level(ratio);
    const sugg  = _suggestions(_tester.fg, _tester.bg);
    return `
      <div class="admin-v2-monolabel">單對測試器</div>
      <div class="admin-wcag-tester-inputs">
        <div class="admin-wcag-tester-field">
          <div class="admin-wcag-tester-label">FOREGROUND</div>
          <div class="admin-wcag-tester-row">
            <span class="admin-wcag-color-swatch" style="background:${escapeHtml(_tester.fg)}"></span>
            <input type="text" class="admin-wcag-tester-input" data-wcag-tester-fg
              value="${escapeHtml(_tester.fg)}" placeholder="#RRGGBB" maxlength="7" />
          </div>
        </div>
        <div class="admin-wcag-tester-field">
          <div class="admin-wcag-tester-label">BACKGROUND</div>
          <div class="admin-wcag-tester-row">
            <span class="admin-wcag-color-swatch" style="background:${escapeHtml(_tester.bg)}"></span>
            <input type="text" class="admin-wcag-tester-input" data-wcag-tester-bg
              value="${escapeHtml(_tester.bg)}" placeholder="#RRGGBB" maxlength="7" />
          </div>
        </div>
      </div>

      <div class="admin-wcag-preview" style="background:${escapeHtml(_tester.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${escapeHtml(_tester.fg)}">太精彩了!</div>
        <div class="admin-wcag-preview-md" style="color:${escapeHtml(_tester.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${escapeHtml(_tester.fg)}">9px sample text · 小字測試</div>
      </div>

      <div class="admin-wcag-result">
        <div class="admin-wcag-result-ratio">
          <span class="big">${ratio.toFixed(2)}</span><span class="unit"> : 1</span>
        </div>
        <div class="admin-wcag-result-levels">
          ${_renderLevel("AA · 一般文字 (≥4.5)",  ratio >= 4.5)}
          ${_renderLevel("AA · 大字 (≥3.0)",       ratio >= 3)}
          ${_renderLevel("AAA · 一般 (≥7.0)",      ratio >= 7)}
          ${_renderLevel("AAA · 大字 (≥4.5)",      ratio >= 4.5)}
        </div>
      </div>

      ${sugg.length ? `
        <div class="admin-wcag-sugg">
          <div class="admin-wcag-sugg-label">建議前景色</div>
          <div class="admin-wcag-sugg-chips">
            ${sugg.map(function (s) {
              return `<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${escapeHtml(s.hex)}"
                style="background:${escapeHtml(_tester.bg)}" title="${s.ratio.toFixed(2)}:1">
                <span class="dot" style="background:${escapeHtml(s.hex)}"></span>
                <span style="color:${escapeHtml(s.hex)}">${escapeHtml(s.hex)}</span>
                <span class="ratio">${s.ratio.toFixed(1)}:1</span>
              </button>`;
            }).join("")}
          </div>
        </div>` : ""}`;
  }

  function _renderLevel(label, pass) {
    return `<div class="admin-wcag-level">
      <span class="icon ${pass ? "pass" : "fail"}">${pass ? "✓" : "✗"}</span>
      <span class="lbl">${escapeHtml(label)}</span>
    </div>`;
  }

  // ── bind ─────────────────────────────────────────────────────────

  function _bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;

    // Pair row click → populate tester
    page.addEventListener("click", function (e) {
      const row = e.target.closest("[data-wcag-pair-idx]");
      if (row) {
        const idx = parseInt(row.dataset.wcagPairIdx, 10);
        const p = PAIRS[idx];
        if (p) { _tester.fg = p.fg; _tester.bg = p.bg; _updateTester(); }
        return;
      }
      const chip = e.target.closest("[data-wcag-sugg]");
      if (chip) {
        _tester.fg = chip.dataset.wcagSugg;
        _updateTester();
      }
    });

    // Live tester inputs
    page.addEventListener("input", function (e) {
      const fg = e.target.closest("[data-wcag-tester-fg]");
      const bg = e.target.closest("[data-wcag-tester-bg]");
      if (fg && /^#[0-9A-Fa-f]{6}$/.test(fg.value)) {
        _tester.fg = fg.value.toUpperCase();
        _updateTester();
      }
      if (bg && /^#[0-9A-Fa-f]{6}$/.test(bg.value)) {
        _tester.bg = bg.value.toUpperCase();
        _updateTester();
      }
    });
  }

  function _updateTester() {
    const panel = document.querySelector("[data-wcag-tester]");
    if (panel) panel.innerHTML = _renderTester();
    // Re-bind sugg chips (delegated via parent, so no rebind needed)
  }

  // ── init ─────────────────────────────────────────────────────────

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());
    _bind();
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    const observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) init();
    });
    observer.observe(document.getElementById("app-container") || document.body, { childList: true, subtree: true });
    if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) init();
  });
})();
