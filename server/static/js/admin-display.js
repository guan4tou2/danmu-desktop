/**
 * Admin Display Settings — 2026-04-25 prototype rewrite.
 *
 * Replaces the legacy 6 setting cards (sec-color · sec-opacity · sec-fontsize
 * · sec-speed · sec-fontfamily · sec-layout) with a single Soft Holo HUD page
 * matching docs/designs/design-v2/components/admin-display-settings.jsx:
 *
 *   ┌─ 1fr ──────────────────────────────────┐  ┌─ 340px ────────┐
 *   │ TABLE HEAD (param · default · audience) │  │ PreviewCard    │
 *   │ ROW · OPACITY                           │  │ (180px stage)  │
 *   │ ROW · FONT SIZE                         │  ├────────────────┤
 *   │ ROW · SPEED                             │  │ DeployCard     │
 *   │ ROW · COLOR                             │  ├────────────────┤
 *   │ ROW · FONT FAMILY                       │  │ SummaryCard    │
 *   │ ROW · LAYOUT                            │  │ (6 rows)       │
 *   └─────────────────────────────────────────┘  └────────────────┘
 *
 * Each row is one tabular line: [label + value-badge | default-picker
 * (+ dashed range band when audience ON) | audience pill toggle].
 *
 * Endpoints used (existing — no backend changes):
 *   GET  /get_settings   → options snapshot, shape options[Key] = [bool, min, max, default]
 *   GET  /fonts          → font catalog
 *   POST /admin/Set      → toggle index 0
 *   POST /admin/update   → update value at index { type, value, index }
 *   GET  /admin/metrics  → ws_clients gauge for SummaryCard / DeployCard banner
 */
(function () {
  "use strict";

  const PAGE_ID = "admin-display-v2-page";
  const LEGACY_IDS = ["sec-color", "sec-opacity", "sec-fontsize", "sec-speed", "sec-fontfamily", "sec-layout"];
  const METRICS_INTERVAL_MS = 5000;

  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[c];
    });
  };

  // Server stores [bool, min, max, default]. Prototype's `step` is a UI hint
  // only — kept in client-side state, not persisted.
  const DEFAULT_RANGES = {
    Opacity:  { min: 0,  max: 100, step: 1, unit: "%" },
    FontSize: { min: 12, max: 100, step: 2, unit: "px" },
    Speed:    { min: 1,  max: 10,  step: 1, unit: "" },
  };

  const FONT_SIZE_PRESETS = [14, 20, 32, 44, 64];
  const COLOR_PRESETS = ["#F8FAFC", "#7DD3FC", "#FCD34D", "#F472B6", "#86EFAC", "#C084FC", "#FB923C", "#FCA5A5"];
  const LAYOUT_PRESETS = [
    { value: "scroll",       label: "SCROLL", icon: "→" },
    { value: "top_fixed",    label: "TOP",    icon: "▀" },
    { value: "bottom_fixed", label: "BOTTOM", icon: "▄" },
    { value: "float",        label: "CENTER", icon: "■" },
    { value: "rise",         label: "SIDE",   icon: "▌" },
  ];

  function t(key, fallback) {
    if (window.ServerI18n && typeof window.ServerI18n.t === "function") {
      const v = window.ServerI18n.t(key);
      if (v && v !== key) return v;
    }
    return fallback != null ? fallback : key;
  }

  // Client-only step storage. Server doesn't persist step, so stash it locally.
  const _stepCache = {};
  function getStep(key) {
    if (_stepCache[key] != null) return _stepCache[key];
    const r = DEFAULT_RANGES[key];
    return r ? r.step : 1;
  }
  function setStep(key, v) { _stepCache[key] = Number(v) || getStep(key); }

  // ─── State ──────────────────────────────────────────────────────────

  const _state = {
    options: null,
    fonts: [],
    metricsTimer: null,
    viewerCount: 0,
    // key → Set<string> of admin-toggled allowlist entries (mirrors options[key][1]).
    // null = not in edit mode for this row.
    allowlistEdit: {},
  };

  const PICK_SET_KEYS = ["Color", "FontFamily", "Layout"];

  function isAllowlistKey(key) { return PICK_SET_KEYS.indexOf(key) !== -1; }

  function readAllowlist(key) {
    const opt = _state.options && _state.options[key];
    const slot1 = opt && opt[1];
    return Array.isArray(slot1) ? slot1.slice() : [];
  }

  function presetValuesFor(key) {
    if (key === "Color") return COLOR_PRESETS.map((c) => c.replace(/^#/, "").toUpperCase());
    if (key === "Layout") return LAYOUT_PRESETS.map((l) => l.value);
    if (key === "FontFamily") {
      const fonts = _state.fonts && _state.fonts.length ? _state.fonts : ["NotoSansTC", "Inter"];
      return fonts.map((f) => (typeof f === "string" ? f : (f.name || f.family || ""))).filter(Boolean);
    }
    return [];
  }

  function normalizeAllowValue(key, value) {
    if (key === "Color") return String(value || "").replace(/^#/, "").toUpperCase();
    return String(value || "");
  }

  // ─── HTML shell ─────────────────────────────────────────────────────

  function pageTemplate() {
    return `
      <div id="${PAGE_ID}" class="admin-dsp2-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">DISPLAY SETTINGS · 每列決定該參數的預設值 + 是否讓觀眾自訂 + 自訂範圍</div>
          <div class="admin-v2-title">${escapeHtml(t("displaySettingsTitle", "顯示設定"))}</div>
        </div>

        <div class="admin-dsp2-grid">
          <!-- Left · row list -->
          <div class="admin-dsp2-list" id="dsp2-list">
            <div class="admin-dsp2-list-head">
              <span>參數 · PARAM</span>
              <span>預設值 · DEFAULT</span>
              <span class="admin-dsp2-list-head-right">觀眾自訂 · AUDIENCE</span>
            </div>
            <div id="dsp2-rows">
              <div class="admin-dsp2-empty">${escapeHtml(t("loading", "載入中…"))}</div>
            </div>
          </div>

          <!-- Right rail -->
          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-v2-monolabel">LIVE PREVIEW</span>
                <span class="admin-dsp2-preview-sync">
                  <span class="admin-dsp2-dot"></span>
                  ${escapeHtml(t("displayPreviewSync", "同步 Overlay"))}
                </span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>這個想法真的很棒 ✨</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>先舉手發問 🙋</span>
                </div>
              </div>
              <div class="admin-dsp2-preview-foot">
                <span data-preview-foot-l>—</span>
                <span data-preview-foot-r>—</span>
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-deploy">
              <div class="admin-v2-monolabel admin-dsp2-card-head">
                <span>${escapeHtml(t("displayDeployTitle", "推送動作"))}</span>
                <span class="admin-dsp2-card-head-en">DEPLOY</span>
              </div>
              <div class="admin-dsp2-deploy-row">
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-primary" id="dsp2-deploy">
                  ${escapeHtml(t("displayDeployApply", "▶ 即時套用"))}
                </button>
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-revert">
                  ${escapeHtml(t("displayDeployRevert", "還原預設"))}
                </button>
              </div>
              <div class="admin-dsp2-deploy-note">
                ${escapeHtml(t("displayDeployNote", "即時同步到 overlay · 觀眾端下次刷新 viewer 生效"))}
              </div>
            </div>

            <div class="admin-dsp2-card admin-dsp2-summary" id="dsp2-summary">
              <div class="admin-v2-monolabel admin-dsp2-card-head">
                <span>${escapeHtml(t("displaySummaryTitle", "觀眾端摘要"))}</span>
                <span class="admin-dsp2-card-head-en" data-summary-count>AUDIENCE · 0/6 OPEN</span>
              </div>
              <div class="admin-dsp2-summary-list" data-summary-list></div>
            </div>
          </div>
        </div>
      </div>`;
  }

  // ─── Row rendering ──────────────────────────────────────────────────

  const ROWS = [
    { key: "Opacity",    label: "透明度",   en: "OPACITY",     fmt: (v) => `${Math.round(v)}%` },
    { key: "FontSize",   label: "字級",     en: "FONT SIZE",   fmt: (v) => `${v}px` },
    { key: "Speed",      label: "滾動速度", en: "SPEED",       fmt: (v) => `${(+v).toFixed(1)}×` },
    { key: "Color",      label: "顏色",     en: "COLOR",       fmt: (v) => `#${String(v || "").replace(/^#/, "").toUpperCase() || "—"}`, noRange: true },
    { key: "FontFamily", label: "字型",     en: "FONT FAMILY", fmt: (v) => v || "—",                       noRange: true },
    { key: "Layout",     label: "排版",     en: "LAYOUT",      fmt: (v) => layoutLabel(v),                  noRange: true },
  ];

  function layoutLabel(v) {
    const m = LAYOUT_PRESETS.find((l) => l.value === v);
    return m ? m.label : (v || "—");
  }

  function pickerHtml(row, opt) {
    const enabled = opt[0] !== false;
    const def = opt[3];
    const range = DEFAULT_RANGES[row.key];

    if (row.key === "Opacity" || row.key === "Speed") {
      const r = range;
      const cur = def != null ? Number(def) : r.min;
      const safeCur = isFinite(cur) ? cur : r.min;
      const pct = ((safeCur - r.min) / Math.max(1e-6, r.max - r.min)) * 100;
      return `
        <div class="admin-dsp2-track" data-track="${row.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${row.key}" data-num-index="3"
            min="${r.min}" max="${r.max}" step="${getStep(row.key)}" value="${escapeHtml(String(safeCur))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${pct.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${pct.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${row.key}"
              min="${r.min}" max="${r.max}" step="${getStep(row.key)}" value="${escapeHtml(String(safeCur))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${r.min}${r.unit}</span><span>${r.max}${r.unit}</span>
            </div>
          </div>
        </div>`;
    }

    if (row.key === "FontSize") {
      const cur = Number(def);
      return `
        <div class="admin-dsp2-chiprow">
          ${FONT_SIZE_PRESETS.map((s) => {
            const on = cur === s;
            return `<button type="button" class="admin-dsp2-fchip ${on ? "is-active" : ""}"
              data-chip-key="FontSize" data-chip-value="${s}">${s}</button>`;
          }).join("")}
        </div>`;
    }

    if (row.key === "Color") {
      const cur = "#" + String(def || "FFFFFF").replace(/^#/, "").toUpperCase();
      const editing = !!_state.allowlistEdit.Color;
      const allowSet = editing
        ? _state.allowlistEdit.Color
        : new Set(readAllowlist("Color").map((v) => normalizeAllowValue("Color", v)));
      const allowAll = !editing && allowSet.size === 0;
      return `
        <div class="admin-dsp2-swatches">
          ${COLOR_PRESETS.map((c) => {
            const code = c.replace(/^#/, "").toUpperCase();
            const on = c.toUpperCase() === cur;
            const inAllow = editing ? allowSet.has(code) : (allowAll || allowSet.has(code));
            const cls = [
              "admin-dsp2-swatch",
              on ? "is-active" : "",
              editing ? "is-editing" : "",
              !inAllow ? "is-blocked" : "",
            ].filter(Boolean).join(" ");
            const dataAttrs = editing
              ? `data-allow-key="Color" data-allow-value="${code}"`
              : `data-chip-key="Color" data-chip-value="${code}"`;
            return `<button type="button" class="${cls}" ${dataAttrs}
              style="background:${c}" aria-label="${c}" aria-pressed="${inAllow ? "true" : "false"}">
              ${editing ? `<span class="admin-dsp2-allow-mark">${inAllow ? "✓" : ""}</span>` : ""}
            </button>`;
          }).join("")}
          <label class="admin-dsp2-swatch-custom" title="${escapeHtml(t("specificColor", "自訂顏色"))}">
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${escapeHtml(cur)}" />
          </label>
        </div>
        ${allowlistControlsHtml(row)}
      `;
    }

    if (row.key === "FontFamily") {
      const fonts = (_state.fonts && _state.fonts.length ? _state.fonts : ["NotoSansTC", "Inter"]).map((f) => {
        const v = typeof f === "string" ? f : (f.name || f.family || "");
        const l = typeof f === "string" ? f : (f.label || f.name || f.family || "");
        return { value: v, label: l };
      }).filter((c) => c.value);
      const cur = String(def || "");
      const editing = !!_state.allowlistEdit.FontFamily;
      const allowSet = editing
        ? _state.allowlistEdit.FontFamily
        : new Set(readAllowlist("FontFamily").map((v) => normalizeAllowValue("FontFamily", v)));
      const allowAll = !editing && allowSet.size === 0;
      return `
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${fonts.map((f) => {
            const on = f.value === cur;
            const inAllow = editing ? allowSet.has(f.value) : (allowAll || allowSet.has(f.value));
            const cls = [
              "admin-dsp2-tchip",
              on ? "is-active" : "",
              editing ? "is-editing" : "",
              !inAllow ? "is-blocked" : "",
            ].filter(Boolean).join(" ");
            const dataAttrs = editing
              ? `data-allow-key="FontFamily" data-allow-value="${escapeHtml(f.value)}"`
              : `data-chip-key="FontFamily" data-chip-value="${escapeHtml(f.value)}"`;
            return `<button type="button" class="${cls}" ${dataAttrs}
              aria-pressed="${inAllow ? "true" : "false"}">
              ${editing ? `<span class="admin-dsp2-allow-mark">${inAllow ? "✓ " : ""}</span>` : ""}${escapeHtml(f.label)}
            </button>`;
          }).join("")}
        </div>
        ${allowlistControlsHtml(row)}
      `;
    }

    if (row.key === "Layout") {
      const cur = String(def || "scroll");
      const editing = !!_state.allowlistEdit.Layout;
      const allowSet = editing
        ? _state.allowlistEdit.Layout
        : new Set(readAllowlist("Layout").map((v) => normalizeAllowValue("Layout", v)));
      const allowAll = !editing && allowSet.size === 0;
      return `
        <div class="admin-dsp2-tiles">
          ${LAYOUT_PRESETS.map((l) => {
            const on = l.value === cur;
            const inAllow = editing ? allowSet.has(l.value) : (allowAll || allowSet.has(l.value));
            const cls = [
              "admin-dsp2-tile",
              on ? "is-active" : "",
              editing ? "is-editing" : "",
              !inAllow ? "is-blocked" : "",
            ].filter(Boolean).join(" ");
            const dataAttrs = editing
              ? `data-allow-key="Layout" data-allow-value="${l.value}"`
              : `data-chip-key="Layout" data-chip-value="${l.value}"`;
            return `<button type="button" class="${cls}" ${dataAttrs}
              aria-pressed="${inAllow ? "true" : "false"}">
              <span class="admin-dsp2-tile-icon">${l.icon}</span>
              <span class="admin-dsp2-tile-label">${l.label}</span>
              ${editing ? `<span class="admin-dsp2-allow-mark">${inAllow ? "✓" : ""}</span>` : ""}
            </button>`;
          }).join("")}
        </div>
        ${allowlistControlsHtml(row)}
      `;
    }
    return "";
  }

  function allowlistControlsHtml(row) {
    if (!isAllowlistKey(row.key)) return "";
    const editing = !!_state.allowlistEdit[row.key];
    const list = readAllowlist(row.key);
    const total = presetValuesFor(row.key).length || 0;
    const summary = list.length > 0
      ? `允許 ${list.length} / ${total} ${labelForKey(row.key)}`
      : `允許全部 (${total})`;
    return `
      <div class="admin-dsp2-allow-controls" data-allow-controls="${row.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${row.key}">${escapeHtml(summary)}</span>
        ${editing ? `
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${row.key}">套用</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${row.key}">取消</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${row.key}">允許全部</button>
        ` : `
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${row.key}" title="編輯允許清單">[編輯允許清單]</button>
        `}
      </div>`;
  }

  function labelForKey(key) {
    if (key === "Color") return "顏色";
    if (key === "FontFamily") return "字型";
    if (key === "Layout") return "排版";
    return "選項";
  }

  function rangeBandHtml(row, opt) {
    if (row.noRange) return "";
    const enabled = opt[0] !== false;
    if (!enabled) return "";
    const r = DEFAULT_RANGES[row.key];
    const lo = opt[1] != null ? opt[1] : r.min;
    const hi = opt[2] != null ? opt[2] : r.max;
    const step = getStep(row.key);
    return `
      <div class="admin-dsp2-band">
        <div class="admin-dsp2-band-cell">
          <span class="admin-v2-monolabel">${escapeHtml(t("displayMinAudience", "觀眾 MIN"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${row.key}" data-num-index="1"
              min="${r.min}" max="${r.max}" step="${step}" value="${escapeHtml(String(lo))}" />
            ${r.unit ? `<span>${r.unit}</span>` : ""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-v2-monolabel">${escapeHtml(t("displayMaxAudience", "觀眾 MAX"))}</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${row.key}" data-num-index="2"
              min="${r.min}" max="${r.max}" step="${step}" value="${escapeHtml(String(hi))}" />
            ${r.unit ? `<span>${r.unit}</span>` : ""}
          </div>
        </div>
        <div class="admin-dsp2-band-cell">
          <span class="admin-v2-monolabel">STEP</span>
          <div class="admin-dsp2-band-input">
            <input type="number" data-num-key="${row.key}" data-num-index="step"
              min="0.1" step="0.1" value="${escapeHtml(String(step))}" />
            ${r.unit ? `<span>${r.unit}</span>` : ""}
          </div>
        </div>
      </div>`;
  }

  function rowHtml(row, opt) {
    const enabled = opt[0] !== false;
    const def = opt[3];
    const valStr = row.fmt ? row.fmt(def) : (def != null ? String(def) : "—");
    const isLast = row.key === "Layout";
    return `
      <div class="admin-dsp2-row ${enabled ? "is-on" : "is-off"} ${isLast ? "is-last" : ""}" data-row-key="${row.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${escapeHtml(row.label)}</div>
          <div class="admin-dsp2-cell-label-en">${row.en}</div>
          <div class="admin-dsp2-value-badge ${enabled ? "is-on" : ""}" data-value-badge>${escapeHtml(valStr)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <div class="admin-dsp2-cell-hint">
            <span class="admin-dsp2-cell-hint-arrow">▸</span>
            ${escapeHtml(enabled
              ? t("displayHintAudienceOn", "觀眾拖動滑桿時的起始值")
              : t("displayHintAudienceOff", "所有觀眾看到的固定值"))}
          </div>
          <div class="admin-dsp2-picker" data-picker-host>${pickerHtml(row, opt)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${rangeBandHtml(row, opt)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">
          <button type="button" class="admin-dsp2-pill ${enabled ? "is-on" : ""}"
            data-toggle-key="${row.key}" aria-pressed="${enabled ? "true" : "false"}">
            <span class="admin-dsp2-pill-track"><span class="admin-dsp2-pill-thumb"></span></span>
            <span class="admin-dsp2-pill-label">${enabled ? "可自訂" : "鎖定"}</span>
          </button>
          <div class="admin-dsp2-toggle-hint">
            ${escapeHtml(enabled
              ? t("displayToggleHintOn", "觀眾端顯示此欄位")
              : (row.noRange
                  ? t("displayToggleHintOffPick", "觀眾看不到選項")
                  : t("displayToggleHintOffSlider", "觀眾看不到 slider")))}
          </div>
        </div>
      </div>`;
  }

  function renderRows() {
    const host = document.getElementById("dsp2-rows");
    if (!host) return;
    if (!_state.options) {
      host.innerHTML = `<div class="admin-dsp2-empty">${escapeHtml(t("loading", "載入中…"))}</div>`;
      return;
    }
    host.innerHTML = ROWS
      .map((row) => rowHtml(row, _state.options[row.key] || [false, "", "", ""]))
      .join("");
    renderPreview();
    renderSummary();
  }

  // ─── Preview / Summary ──────────────────────────────────────────────

  function previewVal(key, fallback) {
    const opt = _state.options && _state.options[key];
    if (!opt) return fallback;
    return opt[3] != null ? opt[3] : fallback;
  }

  function renderPreview() {
    const stage = document.querySelector("[data-preview-stage]");
    const pill1 = document.querySelector("[data-preview-pill='1']");
    const pill2 = document.querySelector("[data-preview-pill='2']");
    const footL = document.querySelector("[data-preview-foot-l]");
    const footR = document.querySelector("[data-preview-foot-r]");
    if (!stage || !pill1 || !pill2 || !_state.options) return;

    const fontSize = Number(previewVal("FontSize", 32));
    const opacity  = Number(previewVal("Opacity", 92));
    const speed    = Number(previewVal("Speed", 1));
    const color    = "#" + String(previewVal("Color", "7DD3FC")).replace(/^#/, "");
    const family   = String(previewVal("FontFamily", "NotoSansTC"));
    const layout   = String(previewVal("Layout", "scroll"));

    // Cap visual font-size so the stage doesn't blow up.
    const capped = Math.min(fontSize, 36);
    const op = Math.max(0, Math.min(100, opacity)) / 100;

    pill1.style.fontSize = capped + "px";
    pill1.style.color = color;
    pill1.style.opacity = op.toFixed(2);
    pill1.style.fontFamily = family + ", system-ui, sans-serif";
    pill1.style.textShadow = `0 0 14px ${color}66`;

    pill2.style.fontSize = (capped * 0.78).toFixed(0) + "px";
    pill2.style.opacity = (op * 0.9).toFixed(2);
    pill2.style.fontFamily = family + ", system-ui, sans-serif";

    stage.dataset.layout = layout;

    if (footL) footL.textContent = `${layoutLabel(layout)} · ${fontSize}px · ${(+speed).toFixed(1)}×`;
    if (footR) footR.textContent = `${Math.round(opacity)}% OPACITY`;
  }

  function renderSummary() {
    const list = document.querySelector("[data-summary-list]");
    const headEn = document.querySelector("[data-summary-count]");
    if (!list || !_state.options) return;
    const opens = ROWS.filter((r) => (_state.options[r.key] || [])[0]).length;
    if (headEn) headEn.textContent = `AUDIENCE · ${opens}/6 OPEN`;
    list.innerHTML = ROWS.map((r) => {
      const open = !!(_state.options[r.key] || [])[0];
      return `<div class="admin-dsp2-srow ${open ? "is-on" : ""}">
        <span class="admin-dsp2-srow-dot"></span>
        <span class="admin-dsp2-srow-label">${escapeHtml(r.label)}</span>
        <span class="admin-dsp2-srow-tag">${open ? "觀眾可改" : "鎖定"}</span>
      </div>`;
    }).join("");
  }

  // ─── Backend calls ──────────────────────────────────────────────────

  async function postToggle(key, enabled) {
    try {
      const res = await window.csrfFetch("/admin/Set", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, enabled: !!enabled }),
      });
      if (!res.ok) throw new Error("toggle " + res.status);
      if (!Array.isArray(_state.options[key])) _state.options[key] = [false, "", "", ""];
      _state.options[key][0] = !!enabled;
      renderRows();
      window.showToast && window.showToast(`${key} ${t("settingsUpdated", "已更新")}`, true);
    } catch (e) {
      console.warn("[admin-display] toggle failed:", e);
      window.showToast && window.showToast(t("updateFailed", "更新失敗"), false);
      await fetchSettings();
      renderRows();
    }
  }

  async function postUpdate(key, index, value) {
    try {
      let v = value;
      if (key === "Color") {
        const hex = String(v).replace(/^#/, "");
        if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
          window.showToast && window.showToast(t("colorFormatError", "色碼格式錯誤"), false);
          return;
        }
        v = hex.toUpperCase();
      } else if (key === "Opacity" || key === "FontSize" || key === "Speed") {
        v = parseInt(v, 10);
        const r = DEFAULT_RANGES[key];
        if (Number.isNaN(v) || (r && (v < r.min || v > r.max))) {
          window.showToast && window.showToast(`${key} ${r.min}–${r.max}`, false);
          return;
        }
      }
      const res = await window.csrfFetch("/admin/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: key, value: v, index }),
      });
      if (!res.ok) throw new Error("update " + res.status);
      if (!Array.isArray(_state.options[key])) _state.options[key] = [false, "", "", ""];
      _state.options[key][index] = v;
      // Light update: refresh the row + preview/summary without full re-render
      // so the open <input> doesn't lose focus.
      refreshRow(key);
      renderPreview();
      renderSummary();
    } catch (e) {
      console.warn("[admin-display] update failed:", e);
      window.showToast && window.showToast(t("updateFailed", "更新失敗"), false);
    }
  }

  async function postAllowlist(key, list) {
    try {
      const res = await window.csrfFetch(`/admin/options/${encodeURIComponent(key)}/allowlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ allowlist: list }),
      });
      if (!res.ok) throw new Error("allowlist " + res.status);
      const body = await res.json().catch(() => ({}));
      if (body && Array.isArray(body.option)) {
        _state.options[key] = body.option;
      } else if (Array.isArray(_state.options[key])) {
        _state.options[key][1] = list.slice();
      }
      refreshRow(key);
      renderPreview();
      renderSummary();
      const total = presetValuesFor(key).length || 0;
      const msg = list.length > 0
        ? `${key} 允許 ${list.length} / ${total}`
        : `${key} 允許全部`;
      window.showToast && window.showToast(msg, true);
    } catch (e) {
      console.warn("[admin-display] allowlist failed:", e);
      window.showToast && window.showToast(t("updateFailed", "更新失敗"), false);
    }
  }

  // Re-render only the value-badge / picker chip-active state for one row.
  function refreshRow(key) {
    const row = document.querySelector(`[data-row-key="${key}"]`);
    if (!row || !_state.options) return;
    const meta = ROWS.find((r) => r.key === key);
    if (!meta) return;
    const opt = _state.options[key] || [false, "", "", ""];
    const def = opt[3];
    const badge = row.querySelector("[data-value-badge]");
    if (badge) badge.textContent = meta.fmt ? meta.fmt(def) : (def != null ? String(def) : "—");

    // For pick-set keys, re-render the picker entirely so the allowlist
    // edit-mode chips / [編輯] / [套用] controls stay in sync. The slider
    // path below skips this branch (uses class toggles to avoid stealing
    // focus from <input type="number">).
    if (isAllowlistKey(key)) {
      const pickerHost = row.querySelector("[data-picker-host]");
      if (pickerHost) pickerHost.innerHTML = pickerHtml(meta, opt);
      return;
    }

    // Sync chip active states (FontSize / Color / FontFamily / Layout)
    if (key === "FontSize" || key === "Color" || key === "FontFamily" || key === "Layout") {
      row.querySelectorAll(`[data-chip-key="${key}"]`).forEach((el) => {
        const v = el.getAttribute("data-chip-value");
        const cur = key === "Color"
          ? String(def || "").replace(/^#/, "").toUpperCase()
          : String(def != null ? def : "");
        el.classList.toggle("is-active", String(v) === cur);
      });
    }
    // Sync slider visual fill for Opacity / Speed
    if (key === "Opacity" || key === "Speed") {
      const r = DEFAULT_RANGES[key];
      const cur = Number(def != null ? def : r.min);
      const pct = ((cur - r.min) / Math.max(1e-6, r.max - r.min)) * 100;
      const fill = row.querySelector(".admin-dsp2-slider-fill");
      const thumb = row.querySelector(".admin-dsp2-slider-thumb");
      if (fill) fill.style.width = pct.toFixed(2) + "%";
      if (thumb) thumb.style.left = `calc(${pct.toFixed(2)}% - 8px)`;
      const range = row.querySelector(".admin-dsp2-range");
      if (range && document.activeElement !== range) range.value = String(cur);
      const num = row.querySelector(".admin-dsp2-num");
      if (num && document.activeElement !== num) num.value = String(cur);
    }
  }

  async function fetchSettings() {
    try {
      const res = await fetch("/get_settings", { credentials: "same-origin" });
      if (!res.ok) throw new Error(res.status);
      _state.options = await res.json();
    } catch (e) {
      console.warn("[admin-display] /get_settings failed:", e);
      _state.options = _state.options || {};
    }
  }

  async function fetchFonts() {
    try {
      const res = await fetch("/fonts", { credentials: "same-origin" });
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      _state.fonts = Array.isArray(data) ? data : (data.fonts || []);
    } catch (e) {
      _state.fonts = ["NotoSansTC", "Inter"];
    }
  }

  async function fetchMetrics() {
    try {
      const res = await fetch("/admin/metrics", { credentials: "same-origin" });
      if (!res.ok) return;
      const data = await res.json();
      _state.viewerCount = data.ws_clients ?? 0;
    } catch (e) { /* silent */ }
  }

  function startMetricsPoll() {
    stopMetricsPoll();
    fetchMetrics();
    _state.metricsTimer = setInterval(fetchMetrics, METRICS_INTERVAL_MS);
  }
  function stopMetricsPoll() {
    if (_state.metricsTimer) {
      clearInterval(_state.metricsTimer);
      _state.metricsTimer = null;
    }
  }

  // ─── Apply-to-all / revert ──────────────────────────────────────────

  async function deployAll() {
    if (!_state.options) return;
    const btn = document.getElementById("dsp2-deploy");
    if (btn) { btn.disabled = true; btn.classList.add("is-pending"); }
    try {
      // Re-post each toggle to force a fresh `settings_changed` push to all
      // /ws/settings clients. The endpoint already broadcasts on every
      // set_toggle call, so this acts as the explicit "apply now".
      for (const r of ROWS) {
        const opt = _state.options[r.key];
        if (!Array.isArray(opt)) continue;
        await window.csrfFetch("/admin/Set", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key: r.key, enabled: !!opt[0] }),
        });
      }
      await fetchMetrics();
      window.showToast && window.showToast(
        t("displayBroadcastDone", "已套用，") + ` ${_state.viewerCount} ${t("viewersReceivedSuffix", "位觀眾收到更新")}`,
        true,
      );
    } catch (e) {
      console.warn("[admin-display] deploy failed:", e);
      window.showToast && window.showToast(t("updateFailed", "更新失敗"), false);
    } finally {
      if (btn) { btn.disabled = false; btn.classList.remove("is-pending"); }
    }
  }

  async function revertDefaults() {
    const presets = {
      Opacity:    [true, 0,  100, 70],
      FontSize:   [true, 20, 100, 50],
      Speed:      [true, 1,  10,  8],
      Color:      [true, 0,  0,   "FFFFFF"],
      FontFamily: [false, "", "", "NotoSansTC"],
      Layout:     [true, "", "", "scroll"],
    };
    const ok = window.confirm(t("displayRevertConfirm", "還原預設將覆寫目前設定，確定？"));
    if (!ok) return;
    try {
      for (const [k, target] of Object.entries(presets)) {
        await window.csrfFetch("/admin/Set", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key: k, enabled: !!target[0] }),
        });
        for (let i = 1; i <= 3; i++) {
          // Skip min/max for non-numeric rows
          if (i < 3 && (k === "Color" || k === "FontFamily" || k === "Layout")) continue;
          if (target[i] === "" || target[i] == null) continue;
          await window.csrfFetch("/admin/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ type: k, value: target[i], index: i }),
          });
        }
      }
      await fetchSettings();
      renderRows();
      window.showToast && window.showToast(t("displayRevertDone", "已還原預設"), true);
    } catch (e) {
      console.warn("[admin-display] revert failed:", e);
      window.showToast && window.showToast(t("updateFailed", "更新失敗"), false);
    }
  }

  // ─── Event delegation ───────────────────────────────────────────────

  function bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;

    // Pill toggle (audience on/off)
    page.addEventListener("click", (e) => {
      const pill = e.target.closest("[data-toggle-key]");
      if (pill) {
        const key = pill.getAttribute("data-toggle-key");
        const cur = !!(_state.options[key] || [])[0];
        postToggle(key, !cur);
        return;
      }

      // Allowlist edit-mode action buttons (edit / apply / cancel / clear).
      const allowBtn = e.target.closest("[data-allow-action]");
      if (allowBtn) {
        const action = allowBtn.getAttribute("data-allow-action");
        const key = allowBtn.getAttribute("data-allow-key");
        if (!key) return;
        if (action === "edit") {
          // Seed edit set from current persisted allowlist (or all-on if empty).
          const cur = readAllowlist(key).map((v) => normalizeAllowValue(key, v));
          if (cur.length) {
            _state.allowlistEdit[key] = new Set(cur);
          } else {
            _state.allowlistEdit[key] = new Set(presetValuesFor(key));
          }
          refreshRow(key);
          return;
        }
        if (action === "cancel") {
          delete _state.allowlistEdit[key];
          refreshRow(key);
          return;
        }
        if (action === "clear") {
          _state.allowlistEdit[key] = new Set();
          // "Clear" semantically means "allow all" → POST empty list.
          postAllowlist(key, []);
          delete _state.allowlistEdit[key];
          return;
        }
        if (action === "apply") {
          const set = _state.allowlistEdit[key] || new Set();
          // If admin checked everything, send empty list (= allow all) to keep
          // the persisted form minimal and forward-compatible.
          const presets = presetValuesFor(key);
          const list = Array.from(set);
          const allChecked = presets.length > 0 && list.length === presets.length
            && presets.every((v) => set.has(v));
          postAllowlist(key, allChecked ? [] : list);
          delete _state.allowlistEdit[key];
          return;
        }
      }

      // Per-chip allowlist toggle (only in edit mode).
      const allowChip = e.target.closest("[data-allow-key][data-allow-value]");
      if (allowChip) {
        const key = allowChip.getAttribute("data-allow-key");
        const val = allowChip.getAttribute("data-allow-value");
        const set = _state.allowlistEdit[key];
        if (set) {
          const norm = normalizeAllowValue(key, val);
          if (set.has(norm)) set.delete(norm);
          else set.add(norm);
          refreshRow(key);
        }
        return;
      }

      const chip = e.target.closest("[data-chip-key]");
      if (chip) {
        const key = chip.getAttribute("data-chip-key");
        const val = chip.getAttribute("data-chip-value");
        document.querySelectorAll(`[data-chip-key="${key}"]`).forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        postUpdate(key, 3, val);
        return;
      }
      if (e.target && e.target.id === "dsp2-deploy") { deployAll(); return; }
      if (e.target && e.target.id === "dsp2-revert") { revertDefaults(); return; }
    });

    // Number / range / color inputs
    page.addEventListener("change", (e) => {
      const t1 = e.target;
      if (!t1) return;
      const key = t1.getAttribute("data-num-key");
      if (!key) return;
      const idxAttr = t1.getAttribute("data-num-index");
      if (idxAttr === "step") {
        setStep(key, t1.value);
        // Step is client-only — re-render the band so step propagates to siblings.
        refreshRow(key);
        return;
      }
      const idx = parseInt(idxAttr, 10);
      if (Number.isNaN(idx)) return;
      let v = t1.value;
      if (key === "Color") v = String(v).replace(/^#/, "").toUpperCase();
      postUpdate(key, idx, v);
    });

    // Live slider — keep number + fill in sync while dragging, post on change
    page.addEventListener("input", (e) => {
      const t1 = e.target;
      if (!t1) return;
      // Slider drag
      if (t1.classList && t1.classList.contains("admin-dsp2-range")) {
        const key = t1.getAttribute("data-range-key");
        const r = DEFAULT_RANGES[key];
        const cur = Number(t1.value);
        const pct = ((cur - r.min) / Math.max(1e-6, r.max - r.min)) * 100;
        const row = t1.closest("[data-row-key]");
        if (row) {
          const fill = row.querySelector(".admin-dsp2-slider-fill");
          const thumb = row.querySelector(".admin-dsp2-slider-thumb");
          if (fill) fill.style.width = pct.toFixed(2) + "%";
          if (thumb) thumb.style.left = `calc(${pct.toFixed(2)}% - 8px)`;
          const num = row.querySelector(".admin-dsp2-num");
          if (num) num.value = String(cur);
        }
        // Mirror to local state for live preview but DON'T post on every input
        if (Array.isArray(_state.options[key])) _state.options[key][3] = cur;
        renderPreview();
        return;
      }
      // Number text input — live mirror to preview without POST
      if (t1.classList && t1.classList.contains("admin-dsp2-num")) {
        const key = t1.getAttribute("data-num-key");
        const idx = parseInt(t1.getAttribute("data-num-index"), 10);
        if (Number.isNaN(idx) || !Array.isArray(_state.options[key])) return;
        let v = t1.value;
        if (t1.type === "number") v = Number(v);
        _state.options[key][idx] = v;
        renderPreview();
      }
    });

    // Slider commit — POST on `change`
    page.addEventListener("change", (e) => {
      const t1 = e.target;
      if (!t1) return;
      if (t1.classList && t1.classList.contains("admin-dsp2-range")) {
        const key = t1.getAttribute("data-range-key");
        postUpdate(key, 3, t1.value);
      }
    });
  }

  // ─── Visibility / lifecycle ─────────────────────────────────────────

  function hideLegacy() {
    LEGACY_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute("data-admin-v2-replaced", "1");
    });
  }

  let _lastVisibleRoute = null;
  function syncVisibility() {
    const shell = document.querySelector(".admin-dash-grid");
    const page = document.getElementById(PAGE_ID);
    if (!shell || !page) return;
    const route = shell.dataset.activeRoute || "dashboard";
    const onPage = route === "display";
    page.style.display = onPage ? "" : "none";
    if (onPage) {
      startMetricsPoll();
      if (_lastVisibleRoute !== "display") {
        fetchSettings().then(renderRows).catch(() => {});
      }
    } else {
      stopMetricsPoll();
    }
    _lastVisibleRoute = route;
  }

  async function inject() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) {
      hideLegacy();
      return;
    }
    grid.insertAdjacentHTML("beforeend", pageTemplate());
    bind();
    hideLegacy();
    syncVisibility();
    if (!_state.options) await Promise.all([fetchSettings(), fetchFonts()]);
    renderRows();
  }

  function boot() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    const observer = new MutationObserver(() => {
      if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
        inject();
      } else {
        hideLegacy();
      }
      syncVisibility();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("hashchange", syncVisibility);
    document.addEventListener("admin-panel-rendered", () => {
      inject();
      hideLegacy();
      syncVisibility();
    });
    inject();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
