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

            <!-- AutoSyncCard — prototype admin-display-settings.jsx:379+ replaces
                 the legacy DeployCard. Display Settings uses implicit deploy:
                 every postUpdate() ships immediately, no apply button. This
                 card is just the status indicator + revert + export JSON. -->
            <div class="admin-dsp2-card admin-dsp2-autosync" style="padding:14px;background:var(--admin-panel,var(--color-bg-base));border:1px solid var(--hud-line);border-radius:6px;display:flex;flex-direction:column;gap:10px">
              <div class="admin-v2-monolabel admin-dsp2-card-head">
                <span>${escapeHtml(t("displayAutoSyncTitle", "自動同步"))}</span>
                <span class="admin-dsp2-card-head-en">AUTO-SYNC · IMPLICIT DEPLOY</span>
              </div>
              <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:4px;background:var(--hud-cyan-soft);border:1px solid var(--color-primary)">
                <span aria-hidden="true" style="width:7px;height:7px;border-radius:50%;background:var(--color-primary);box-shadow:0 0 6px var(--color-primary);animation:hud-pulse 2s ease-in-out infinite"></span>
                <div style="flex:1;min-width:0">
                  <div style="font-family:var(--font-mono);font-size:11px;color:var(--color-primary);letter-spacing:0.1em;font-weight:700">${escapeHtml(t("displayAutoSyncLive", "同步中 · LIVE"))}</div>
                  <div style="font-family:var(--font-mono);font-size:9px;color:var(--color-text-muted);margin-top:2px;letter-spacing:0.04em">${escapeHtml(t("displayAutoSyncNote", "更動即推送 · overlay 與下次刷新觀眾即生效"))}</div>
                </div>
              </div>
              <div style="display:flex;gap:8px">
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-revert" style="flex:1;padding:8px;border-radius:4px;border:1px solid var(--hud-line);background:transparent;color:var(--color-text-strong);cursor:pointer;font-family:var(--font-mono);font-size:10px;letter-spacing:0.1em">
                  ↺ ${escapeHtml(t("displayDeployRevert", "還原預設"))}
                </button>
                <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export" style="flex:1;padding:8px;border-radius:4px;border:1px solid var(--hud-line);background:transparent;color:var(--color-text-strong);cursor:pointer;font-family:var(--font-mono);font-size:10px;letter-spacing:0.1em">
                  ↗ ${escapeHtml(t("displayExportJson", "匯出 JSON"))}
                </button>
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

  // ─── Apply-to-all / revert / export ─────────────────────────────────

  function exportSettingsJson() {
    if (!_state.options) {
      window.showToast && window.showToast(t("loading", "載入中…"), false);
      return;
    }
    const payload = {
      exported_at: new Date().toISOString(),
      app_version: (window.DANMU_CONFIG && window.DANMU_CONFIG.appVersion) || "",
      options: _state.options,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `danmu-display-settings-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    window.showToast && window.showToast(t("displayExportDone", "已匯出 JSON"), true);
  }

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
      if (e.target && e.target.id === "dsp2-revert") { revertDefaults(); return; }
      if (e.target && e.target.id === "dsp2-export") { exportSettingsJson(); return; }
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
  function _isDisplayOwner(route, leaf) {
    return route === "display" || leaf === "display";
  }

  function _isViewerOwner(route, leaf) {
    return (
      route === "viewer-config" ||
      route === "viewer" ||
      leaf === "viewer-config" ||
      leaf === "viewer"
    );
  }

  function syncVisibility() {
    const shell = document.querySelector(".admin-dash-grid");
    const page = document.getElementById(PAGE_ID);
    if (!shell || !page) return;
    const route = shell.dataset.activeRoute || "live";
    const leaf = shell.dataset.activeLeaf || route;
    const tab = (document.body.dataset.viewerConfigTab) || "page";
    // The main display-settings surface now belongs to the top-level
    // Display route from the handoff bundle, while the viewer route keeps
    // the /fire page theme + field toggles.
    //
    // Legacy `#/viewer-config` hashes are still accepted as viewer aliases
    // via the router, so the viewer-owned panels continue to render for both
    // `viewer` and `viewer-config`.
    const isDisplayOwner = _isDisplayOwner(route, leaf);
    const isViewerOwner = _isViewerOwner(route, leaf);
    page.style.display = isDisplayOwner ? "" : "none";
    const vt = document.getElementById("sec-viewer-theme");
    if (vt) {
      vt.style.display = (isViewerOwner && tab === "page") ? "" : "none";
    }
    const vf = document.getElementById("sec-viewer-config-fields");
    if (vf) {
      vf.style.display = (isViewerOwner && tab === "fields") ? "" : "none";
    }
    const info = document.getElementById("sec-viewer-config-info");
    if (info) {
      info.style.display = isViewerOwner ? "" : "none";
    }
    const tabs = document.getElementById("sec-viewer-config-tabs");
    if (tabs) {
      tabs.style.display = isViewerOwner ? "" : "none";
    }
    if (isDisplayOwner) {
      if (!_state.metricsTimer) startMetricsPoll();
    } else {
      stopMetricsPoll();
    }
    _lastVisibleRoute = route;
  }

  function _initViewerConfigTabs() {
    if (document.getElementById("sec-viewer-config-tabs")) return; // idempotent
    const grid = document.getElementById("settings-grid");
    if (!grid) return;

    // ── Tab strip bar ─────────────────────────────────────────────────────
    const bar = document.createElement("div");
    bar.id = "sec-viewer-config-tabs";
    bar.className = "admin-tabstrip lg:col-span-2";
    bar.setAttribute("role", "tablist");

    function _makeTabBtn(key, icon, zh, en) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.dataset.tab = key;
      btn.className = "admin-tabstrip-tab" + (key === "page" ? " is-active" : "");
      btn.setAttribute("aria-selected", key === "page" ? "true" : "false");
      btn.innerHTML =
        '<span style="display:inline-flex;align-items:center;gap:6px">' +
          '<span class="admin-tabstrip-icon">' + icon + "</span>" +
          "<span>" + zh + "</span>" +
          '<span class="admin-tabstrip-en">' + en + "</span>" +
        "</span>" +
        '<span class="admin-tabstrip-tab__indicator"></span>';
      btn.addEventListener("click", function () {
        bar.querySelectorAll(".admin-tabstrip-tab").forEach(function (b) {
          b.classList.remove("is-active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");
        document.body.dataset.viewerConfigTab = key;
        syncVisibility();
      });
      return btn;
    }

    bar.appendChild(_makeTabBtn("page",   "◧", "整頁主題", "PAGE"));
    bar.appendChild(_makeTabBtn("fields", "☷", "表單欄位", "FIELDS"));
    const spacer = document.createElement("span");
    spacer.style.flex = "1";
    bar.appendChild(spacer);

    // ── Info banner ───────────────────────────────────────────────────────
    const infoBanner = document.createElement("div");
    infoBanner.id = "sec-viewer-config-info";
    infoBanner.className = "lg:col-span-2";
    infoBanner.innerHTML =
      '<div class="admin-vc-info-banner">' +
        '<span class="admin-vc-info-accent">觀眾頁主題</span> 控制 <code>/fire</code> 的整體外觀（背景、tab、字色）；' +
        '<span class="admin-vc-info-accent" style="margin-left:4px">表單欄位</span> 控制觀眾在「發送 danmu」表單上看到的輸入（暱稱 / 顏色 / 字級 / 描邊 …）。兩者獨立。' +
      '</div>';

    // ── FIELDS panel ──────────────────────────────────────────────────────
    const FIELD_DEFS = [
      { k: "暱稱 / Nickname",  desc: "單行文字輸入，viewer 顯示為作者名",       on: true,  pinned: true },
      { k: "訊息 / Message",   desc: "主要 textarea（必填，長度上限 80）",       on: true,  pinned: true },
      { k: "顏色 / Color",     desc: "6 個預設色票 + 自訂 hex",                  on: true },
      { k: "字型 / Font",      desc: "從 Font Library 選擇",                     on: true },
      { k: "字級 / Size",      desc: "small / regular / large 三段",             on: true },
      { k: "透明度 / Opacity", desc: "0.4 / 0.7 / 1.0 三段",                     on: true },
      { k: "描邊 / Stroke",    desc: "黑邊 toggle",                               on: true },
      { k: "陰影 / Shadow",    desc: "soft / hard / none",                        on: true },
      { k: "效果 / Effect",    desc: "可選 1–3 個從 Effect Library",              on: false },
      { k: "匿名送出",          desc: "隱藏 nickname，顯示 fp_xxxx",               on: false },
      { k: "附加圖片",          desc: "BE 尚未支援",                              on: false, blocked: true },
    ];

    const fieldsPanel = document.createElement("div");
    fieldsPanel.id = "sec-viewer-config-fields";
    fieldsPanel.className = "admin-vc-fields-grid lg:col-span-2";

    // Left: field list
    const leftCol = document.createElement("div");
    leftCol.className = "admin-vc-col-panel";

    const head = document.createElement("div");
    head.className = "admin-vc-fields-head";
    const shownCount = FIELD_DEFS.filter(function (f) { return f.on; }).length;
    const hiddenCount = FIELD_DEFS.length - shownCount;
    head.innerHTML =
      '<span style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:1px">觀眾表單欄位 · ' + FIELD_DEFS.length + ' 項</span>' +
      '<span class="admin-vc-fields-count">顯示 ' + shownCount + " · 隱藏 " + hiddenCount + "</span>";
    leftCol.appendChild(head);

    const fieldsList = document.createElement("div");
    fieldsList.className = "admin-vc-fields-list";

    FIELD_DEFS.forEach(function (f) {
      const row = document.createElement("div");
      row.className = "admin-vc-field-row" + (f.blocked ? " is-blocked" : "");

      const dot = document.createElement("span");
      dot.className = "admin-vc-field-dot" + (f.on ? " is-on" : "");
      row.appendChild(dot);

      const info = document.createElement("div");
      var badgeHtml = "";
      if (f.pinned) badgeHtml = '<span class="admin-vc-field-badge admin-vc-field-badge--required">必填</span>';
      if (f.blocked) badgeHtml = '<span class="admin-vc-field-badge admin-vc-field-badge--blocked">BE BLOCKED</span>';
      info.innerHTML =
        '<div class="admin-vc-field-label">' + escapeHtml(f.k) + badgeHtml + "</div>" +
        '<div class="admin-vc-field-desc">' + escapeHtml(f.desc) + "</div>";
      row.appendChild(info);

      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "admin-vc-toggle " + (f.on ? "is-on" : "is-off");
      toggle.textContent = f.on ? "顯示" : "隱藏";
      if (f.blocked || f.pinned) {
        toggle.disabled = true;
        toggle.className += " disabled";
      } else {
        var _on = f.on;
        toggle.addEventListener("click", function () {
          _on = !_on;
          toggle.className = "admin-vc-toggle " + (_on ? "is-on" : "is-off");
          toggle.textContent = _on ? "顯示" : "隱藏";
          dot.className = "admin-vc-field-dot" + (_on ? " is-on" : "");
        });
      }
      row.appendChild(toggle);
      fieldsList.appendChild(row);
    });
    leftCol.appendChild(fieldsList);

    // Right: preview
    const rightCol = document.createElement("div");
    rightCol.className = "admin-vc-col-panel";
    const SWATCH_COLORS = ["#fde68a", "#a7f3d0", "#bae6fd", "#fbcfe8", "#c4b5fd", "#fff"];
    var swatchHtml = SWATCH_COLORS.map(function (c, i) {
      return '<span class="admin-vc-swatch-dot" style="background:' + c +
        ";border:" + (i === 0 ? "2px solid var(--color-primary,#38bdf8)" : "1px solid var(--color-border,#1f2944)") +
        '"></span>';
    }).join("");

    rightCol.innerHTML =
      '<div style="font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:0.5px">觀眾端預覽</div>' +
      '<div class="admin-vc-preview-form">' +
        '<div class="admin-vc-preview-field"><div class="admin-vc-preview-label">暱稱 / Nickname <span style="color:var(--hud-crimson,#f87171)">*</span></div><div class="admin-vc-preview-input">阿傑</div></div>' +
        '<div class="admin-vc-preview-field"><div class="admin-vc-preview-label">訊息 / Message <span style="color:var(--hud-crimson,#f87171)">*</span></div><div class="admin-vc-preview-input" style="min-height:56px">+1 求簡報</div></div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
          '<div class="admin-vc-preview-field"><div class="admin-vc-preview-label">顏色</div><div class="admin-vc-preview-input"><span class="admin-vc-swatch">' + swatchHtml + "</span></div></div>" +
          '<div class="admin-vc-preview-field"><div class="admin-vc-preview-label">字級</div><div class="admin-vc-preview-input">small · <b>regular</b> · large</div></div>' +
        "</div>" +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
          '<div class="admin-vc-preview-field"><div class="admin-vc-preview-label">透明度</div><div class="admin-vc-preview-input">0.4 · 0.7 · <b>1.0</b></div></div>' +
          '<div class="admin-vc-preview-field"><div class="admin-vc-preview-label">描邊</div><div class="admin-vc-preview-input">○ <b>● 黑邊</b></div></div>' +
        "</div>" +
        '<div class="admin-vc-preview-submit">↗ 發送 DANMU</div>' +
      "</div>" +
      '<div class="admin-vc-tip">· 隱藏的欄位仍會以預設值送出（顏色用主題色、字級 regular）。</div>';

    fieldsPanel.appendChild(leftCol);
    fieldsPanel.appendChild(rightCol);

    // ── Insert before sec-viewer-theme ────────────────────────────────────
    const vt = document.getElementById("sec-viewer-theme");
    if (vt && vt.parentNode === grid) {
      grid.insertBefore(bar, vt);
      grid.insertBefore(infoBanner, vt);
      grid.insertBefore(fieldsPanel, vt);
    } else {
      grid.appendChild(bar);
      grid.appendChild(infoBanner);
      grid.appendChild(fieldsPanel);
    }

    if (!document.body.dataset.viewerConfigTab) document.body.dataset.viewerConfigTab = "page";

    function _syncBar() {
      const shell = document.querySelector(".admin-dash-grid");
      const route = shell?.dataset.activeRoute || "";
      const leaf = shell?.dataset.activeLeaf || route;
      const visible = _isViewerConfigOwner(route, leaf);
      bar.style.display = visible ? "" : "none";
      infoBanner.style.display = visible ? "" : "none";
      syncVisibility();
    }
    window.addEventListener("hashchange", _syncBar);
    _syncBar();
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
      _initViewerConfigTabs();
      syncVisibility();
    });
    inject();
    _initViewerConfigTabs();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
