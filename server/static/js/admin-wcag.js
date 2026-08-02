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
 *
 * 2026-07-29 淺色模式修復：這頁原本渲染 20+ 個 admin-wcag-* class，但全 repo
 * 沒有任何一條對應 CSS 規則——深淺色都是裸 HTML（滿版色塊、零面板）。改法是
 * 把版面全部收回既有原語（admin-ui-page-head / hud-page-grid-2-wide /
 * hud-stats-strip / hud-table / hud-pill / admin-ui-card / admin-ui-input），
 * 這樣雙主題由 token 自動處理；style.css 尾端只留「這頁才有」的量表、色彩
 * 樣本盤與等級清單。
 *
 * 色彩紀律：chrome 文字一律用 --color-text-primary / -secondary（雙主題
 * 都 ≥6:1），語意色只當邊框／量表填色這類圖形元素（門檻 3.0）。理由寫在
 * style.css 的 §WCAG 區塊註解。
 *
 * [data-wcag-specimen] 標記「受測色」本身（顏色對樣本、預覽盤、建議色片）
 * ——那裡的低對比是工具要呈現的結果，不是設計缺陷，量測時要排除。
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

  // D-4：name 存 key，渲染時才 t()（模組 parse 時 ServerI18n 尚未 init）。
  const PAIRS = [
    { nameKey: "wcagPairWhiteBlack",        fg: "#FFFFFF", bg: "#000000" },
    { nameKey: "wcagPairCyanBlack",         fg: "#38BDF8", bg: "#000000" },
    { nameKey: "wcagPairYellowBlack",       fg: "#FBBF24", bg: "#000000" },
    { nameKey: "wcagPairRedBlack",          fg: "#F87171", bg: "#000000" },
    { nameKey: "wcagPairSystemRedWhite",    fg: "#DC2626", bg: "#FFFFFF" },
    { nameKey: "wcagPairGreenProjection",   fg: "#86EFAC", bg: "#0F172A" },
    { nameKey: "wcagPairSystemMessagePanel", fg: "#94A3B8", bg: "#1E293B" },
    { nameKey: "wcagPairAuxGrayCard",       fg: "#64748B", bg: "#1E293B" },
  ];

  let _tester = { fg: "#FB7185", bg: "#000000" };

  // Shared column track for the pairs table head + rows (repo idiom: hud-table
  // consumers set grid-template-columns inline, see admin-fonts.js).
  const PAIR_COLS = "minmax(0, 1.2fr) minmax(0, 1.6fr) 68px 88px";

  // level → { pill modifier, label }. Colour lives on the pill BORDER only;
  // the text stays on a neutral token so it clears AA in both themes.
  // D-4：僅 AA-large 含中文（"大字"）——存 labelKey 延後 t()；其餘三個純拉丁
  // 符號＋WCAG 術語，語言中立，維持字面 label。
  const LEVEL_UI = {
    AAA:         { mod: "is-pass",  label: "✓ AAA" },
    AA:          { mod: "is-pass",  label: "✓ AA" },
    "AA-large":  { mod: "is-large", labelKey: "wcagPillLevelAALarge" },
    fail:        { mod: "is-fail",  label: "✗ FAIL" },
  };

  // ── render ───────────────────────────────────────────────────────

  function buildSection() {
    const passCount = PAIRS.filter(function (p) { return _level(_contrast(p.fg, p.bg)) !== "fail"; }).length;
    const failCount = PAIRS.length - passCount;
    const rate = Math.round((passCount / PAIRS.length) * 100);

    return `
      <div id="${PAGE_ID}" class="admin-wcag-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">A11Y · WCAG 2.1 CONTRAST CHECKER</div>
          <div class="admin-ui-page-title">${ServerI18n.t("wcagPageTitle")}</div>
          <p class="admin-ui-page-note">${ServerI18n.t("wcagPageNote")}</p>
        </div>

        <div class="hud-page-grid-2-wide">
          <!-- Left: pairs table -->
          <div class="hud-page-col-gap">
            <div class="hud-stats-strip">
              ${_renderStatTile("PASS AA+", passCount, ServerI18n.t("wcagStatPassLabel"))}
              ${_renderStatTile("BELOW AA", failCount, ServerI18n.t("wcagStatFailLabel"))}
              ${_renderStatTile("PAIRS", PAIRS.length, ServerI18n.t("wcagStatPairsLabel"))}
              ${_renderStatTile("PASS RATE", rate + "%", ServerI18n.t("wcagStatRateLabel"))}
              <div class="admin-wcag-meter" role="img" aria-label="${ServerI18n.t("wcagMeterAriaLabel", { rate: rate })}">
                <div class="admin-wcag-meter-fill" style="width:${rate}%"></div>
              </div>
            </div>

            <div class="hud-table" data-wcag-pairs>
              <div class="hud-table-head" style="grid-template-columns:${PAIR_COLS}">
                <span>${ServerI18n.t("wcagColHeadTheme")}</span>
                <span>${ServerI18n.t("wcagColHeadSample")}</span>
                <span class="admin-wcag-col-num">${ServerI18n.t("wcagColHeadContrast")}</span>
                <span>${ServerI18n.t("wcagColHeadLevel")}</span>
              </div>
              ${PAIRS.map(function (p, i) { return _renderPairRow(p, i); }).join("")}
            </div>

            <div class="admin-wcag-guardrail">
              <span class="admin-ui-monolabel">BUILT-IN GUARDRAIL</span>
              ${ServerI18n.t("wcagGuardrailNote")}
            </div>
          </div>

          <!-- Right: single-pair tester -->
          <div class="admin-ui-card hud-page-col-gap admin-wcag-tester" data-wcag-tester>
            ${_renderTester()}
          </div>
        </div>
      </div>`;
  }

  function _renderStatTile(en, value, label) {
    return `
      <div class="hud-stat-tile">
        <span class="hud-stat-tile-en">${escapeHtml(en)}</span>
        <span class="hud-stat-tile-value">${escapeHtml(String(value))}</span>
        <span class="hud-stat-tile-label">${escapeHtml(label)}</span>
      </div>`;
  }

  function _renderPairRow(p, i) {
    const ratio  = _contrast(p.fg, p.bg);
    const lvl    = _level(ratio);
    const ui     = LEVEL_UI[lvl];
    const name   = ServerI18n.t(p.nameKey);
    const uiLabel = ui.labelKey ? ServerI18n.t(ui.labelKey) : ui.label;
    const warn   = lvl === "fail"
      ? ServerI18n.t("wcagWarnFail")
      : (lvl === "AA-large" ? ServerI18n.t("wcagWarnLargeOnly") : "");
    return `
      <div class="hud-table-row admin-wcag-pair-row" style="grid-template-columns:${PAIR_COLS}"
        data-wcag-pair-idx="${i}" role="button" tabindex="0"
        aria-label="${escapeHtml(ServerI18n.t("wcagPairAriaLabel", {
          name: name,
          ratio: ratio.toFixed(2),
          level: uiLabel.slice(2),
        }))}">
        <span class="admin-wcag-pair-name">${escapeHtml(name)}</span>
        <span class="admin-wcag-swatch" data-wcag-specimen style="background:${escapeHtml(p.bg)}">
          <span class="admin-wcag-swatch-aa" style="color:${escapeHtml(p.fg)}">${ServerI18n.t("wcagSwatchSample")}</span>
          <span class="admin-wcag-swatch-hex" style="color:${escapeHtml(p.fg)}">${escapeHtml(p.fg)} / ${escapeHtml(p.bg)}</span>
        </span>
        <span class="admin-wcag-ratio">${ratio.toFixed(2)}<span class="unit">:1</span></span>
        <span class="hud-pill admin-wcag-pill ${ui.mod}">${uiLabel}</span>
        ${warn ? `<span class="admin-wcag-warn">⚠ ${warn}</span>` : ""}
      </div>`;
  }

  function _renderTester() {
    const ratio = _contrast(_tester.fg, _tester.bg);
    const lvl   = _level(ratio);
    const ui    = LEVEL_UI[lvl];
    const uiLabel = ui.labelKey ? ServerI18n.t(ui.labelKey) : ui.label;
    const sugg  = _suggestions(_tester.fg, _tester.bg);
    return `
      <div class="admin-ui-section-head">
        <span class="admin-ui-monolabel">${ServerI18n.t("wcagSinglePairTesterLabel")}</span>
      </div>

      <div class="admin-wcag-fields">
        ${_renderField("FOREGROUND", ServerI18n.t("wcagForegroundLabel"), _tester.fg, "fg")}
        ${_renderField("BACKGROUND", ServerI18n.t("wcagBackgroundLabel"), _tester.bg, "bg")}
      </div>

      <div class="admin-wcag-preview" data-wcag-specimen style="background:${escapeHtml(_tester.bg)}">
        <div class="admin-wcag-preview-lg" style="color:${escapeHtml(_tester.fg)}">${ServerI18n.t("wcagPreviewLarge")}</div>
        <div class="admin-wcag-preview-md" style="color:${escapeHtml(_tester.fg)}">The quick brown fox jumps over</div>
        <div class="admin-wcag-preview-sm" style="color:${escapeHtml(_tester.fg)}">${ServerI18n.t("wcagPreviewSmall")}</div>
      </div>

      <div class="admin-wcag-result">
        <div class="hud-stat-tile">
          <span class="hud-stat-tile-en">CONTRAST RATIO</span>
          <span class="hud-stat-tile-value">${ratio.toFixed(2)}<span class="admin-wcag-unit"> : 1</span></span>
        </div>
        <span class="hud-pill admin-wcag-pill ${ui.mod}">${uiLabel}</span>
      </div>

      <div class="admin-wcag-levels">
        ${_renderLevel(ServerI18n.t("wcagCheckAANormal"), ratio >= 4.5)}
        ${_renderLevel(ServerI18n.t("wcagCheckAALarge"), ratio >= 3)}
        ${_renderLevel(ServerI18n.t("wcagCheckAAANormal"), ratio >= 7)}
        ${_renderLevel(ServerI18n.t("wcagCheckAAALarge"), ratio >= 4.5)}
      </div>

      ${sugg.length ? `
        <div class="admin-wcag-sugg">
          <div class="admin-ui-monolabel">${ServerI18n.t("wcagSuggForegroundLabel")}</div>
          <div class="admin-wcag-sugg-chips">
            ${sugg.map(function (s) {
              return `<button type="button" class="admin-wcag-sugg-chip" data-wcag-sugg="${escapeHtml(s.hex)}"
                title="${escapeHtml(ServerI18n.t("wcagSuggApplyTitle", { ratio: s.ratio.toFixed(2) }))}">
                <span class="admin-wcag-sugg-plate" data-wcag-specimen
                  style="background:${escapeHtml(_tester.bg)};color:${escapeHtml(s.hex)}">${escapeHtml(s.hex)}</span>
                <span class="admin-wcag-sugg-ratio">${s.ratio.toFixed(1)}:1</span>
              </button>`;
            }).join("")}
          </div>
        </div>` : ""}`;
  }

  function _renderField(en, label, value, which) {
    const id = "wcag-tester-" + which;
    return `
      <div class="admin-wcag-field">
        <label class="admin-ui-monolabel" for="${id}">${escapeHtml(en)}</label>
        <div class="admin-wcag-field-row">
          <span class="admin-wcag-dot" style="background:${escapeHtml(value)}"></span>
          <input type="text" id="${id}" class="admin-ui-input" data-wcag-tester-${which}
            aria-label="${escapeHtml(label)} HEX"
            value="${escapeHtml(value)}" placeholder="#RRGGBB" maxlength="7" />
        </div>
      </div>`;
  }

  function _renderLevel(label, pass) {
    return `<div class="admin-wcag-level ${pass ? "is-pass" : "is-fail"}">
      <span class="admin-wcag-level-icon">${pass ? "✓" : "✗"}</span>
      <span>${escapeHtml(label)}</span>
    </div>`;
  }

  // ── bind ─────────────────────────────────────────────────────────

  function _bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;

    // Pair row click → populate tester
    page.addEventListener("click", function (e) {
      const row = e.target.closest("[data-wcag-pair-idx]");
      if (row) { _loadPair(row); return; }
      const chip = e.target.closest("[data-wcag-sugg]");
      if (chip) {
        _tester.fg = chip.dataset.wcagSugg;
        _updateTester();
      }
    });

    // Pair rows are role="button" — Enter / Space must work too (this page is
    // the a11y checker; it does not get to be keyboard-inaccessible itself).
    page.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
      const row = e.target.closest("[data-wcag-pair-idx]");
      if (!row) return;
      e.preventDefault();
      _loadPair(row);
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

  function _loadPair(row) {
    const p = PAIRS[parseInt(row.dataset.wcagPairIdx, 10)];
    if (!p) return;
    _tester.fg = p.fg;
    _tester.bg = p.bg;
    _updateTester();
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
