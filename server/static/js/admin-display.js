/**
 * Admin Display Settings (P0-3) — dedicated Soft Holo HUD page.
 *
 * Replaces the legacy 6 setting cards (sec-color · sec-opacity · sec-fontsize
 * · sec-speed · sec-fontfamily · sec-layout) with a single v2-styled page
 * where each row exposes:
 *   - A 允許觀眾自訂 toggle that flips options.<Key>[0]
 *   - When ON: compound min/max controls (Opacity/FontSize/Speed) or a
 *     value picker (Color/FontFamily/Layout) for the "default" everyone
 *     starts with — viewers may then override within the allowed band
 *   - When OFF: a single-value picker that becomes the unified locked default
 *   - Live preview rendering the danmu pill at the current settings
 *   - Collapsed summary like "✓ 允許 · 20–64 px" / "✕ 鎖定 · 50 px"
 *
 * Endpoints used (existing, no backend changes):
 *   GET  /get_settings        → options snapshot (public, no CSRF)
 *   GET  /fonts               → available font families
 *   POST /admin/Set           → toggle index 0 (broadcasts to viewers)
 *   POST /admin/update        → update value at index (broadcasts to viewers)
 *   GET  /admin/metrics       → live ws_clients count for connected-viewer chip
 *
 * "套用至所有觀眾" button does NOT introduce a new endpoint — every control
 * auto-saves via /admin/Set or /admin/update, and the existing `set_option`
 * / `update` handlers already call `messaging.send_message(settings_changed)`
 * to push the snapshot to /ws/settings subscribers. The button explicitly
 * re-broadcasts the current toggles to confirm and surface a viewer-count
 * toast.
 *
 * Section id is intentionally NOT prefixed `sec-` so admin.js router's
 * [id^="sec-"] visibility sweep leaves it alone. This module owns its own
 * show/hide via the shell's `data-active-route` attr, mirroring
 * admin-security.js / admin-backup.js.
 */
(function () {
  "use strict";

  const PAGE_ID = "admin-display-v2-page";
  const LEGACY_IDS = ["sec-color", "sec-opacity", "sec-fontsize", "sec-speed", "sec-fontfamily", "sec-layout"];
  const METRICS_INTERVAL_MS = 5000;
  const PREVIEW_DEBOUNCE_MS = 120;

  var escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c];
    });
  };

  // Defaults if /get_settings hasn't returned yet.
  const DEFAULT_RANGES = {
    Opacity:  { min: 0,  max: 100 },
    FontSize: { min: 12, max: 100 },
    Speed:    { min: 1,  max: 10 },
  };

  const COLOR_PRESETS = ["FFFFFF", "38BDF8", "F472B6", "F59E0B", "10B981", "A855F7", "EF4444", "1E293B"];
  const LAYOUT_OPTIONS = ["scroll", "top_fixed", "bottom_fixed", "float", "rise"];

  function t(key, fallback) {
    if (window.ServerI18n && typeof window.ServerI18n.t === "function") {
      const v = window.ServerI18n.t(key);
      if (v && v !== key) return v;
    }
    return fallback != null ? fallback : key;
  }

  // ─── State ──────────────────────────────────────────────────────────

  let _state = {
    options: null,
    ranges: (window.DANMU_CONFIG && window.DANMU_CONFIG.settingRanges) || DEFAULT_RANGES,
    fonts: [],
    metricsTimer: null,
    previewTimer: null,
  };

  // ─── HTML ───────────────────────────────────────────────────────────

  function pageTemplate() {
    return `
      <div id="${PAGE_ID}" class="admin-display-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">DISPLAY · 觀眾可自訂欄位</div>
          <div class="admin-v2-title">${escapeHtml(t("displaySettingsTitle", "顯示設定"))}</div>
          <p class="admin-v2-note">
            ${escapeHtml(t("displaySettingsNote", "設定哪些彈幕參數允許觀眾自訂 — OFF 時所有觀眾使用統一預設值"))}
          </p>
          <div class="admin-display-meta">
            <span class="admin-v2-chip" id="dsp2-viewers" title="目前 /ws/settings 連線數">
              VIEWERS · <span data-viewer-count>—</span>
            </span>
            <button type="button" id="dsp2-broadcast" class="admin-poll-btn is-primary">
              ${escapeHtml(t("displaySettingsApply", "套用至所有觀眾"))}
            </button>
          </div>
        </div>

        <div id="dsp2-rows" class="admin-display-rows">
          <div class="admin-display-empty">${escapeHtml(t("loading", "載入中…"))}</div>
        </div>
      </div>`;
  }

  // ─── Row builders ───────────────────────────────────────────────────

  function summaryFor(key, opt) {
    if (!Array.isArray(opt)) return "";
    const enabled = opt[0] !== false;
    const allow = enabled ? "✓ 允許" : "✕ 鎖定";
    if (key === "Opacity")  return `${allow} · ${enabled ? `${opt[1]}–${opt[2]}%` : `${opt[3]}%`}`;
    if (key === "FontSize") return `${allow} · ${enabled ? `${opt[1]}–${opt[2]} px` : `${opt[3]} px`}`;
    if (key === "Speed")    return `${allow} · ${enabled ? `${opt[1]}–${opt[2]}` : opt[3]}`;
    if (key === "Color")    return `${allow} · #${String(opt[3] || "FFFFFF").replace(/^#/, "").toUpperCase()}`;
    if (key === "FontFamily") return `${allow} · ${opt[3] || "—"}`;
    if (key === "Layout")     return `${allow} · ${opt[3] || "scroll"}`;
    return allow;
  }

  function rowHead(key, label, kicker, opt) {
    const enabled = Array.isArray(opt) && opt[0] !== false;
    return `
      <summary class="admin-display-row-head">
        <div class="admin-display-row-titleblock">
          <div class="admin-v2-monolabel">${escapeHtml(kicker)}</div>
          <div class="admin-display-row-title">${escapeHtml(label)}</div>
        </div>
        <div class="admin-display-row-summary" data-row-summary>${escapeHtml(summaryFor(key, opt))}</div>
        <label class="admin-display-toggle ${enabled ? "is-on" : ""}" data-toggle-host>
          <input type="checkbox" data-toggle-key="${escapeHtml(key)}" ${enabled ? "checked" : ""} />
          <span class="admin-display-toggle-track"><span class="admin-display-toggle-thumb"></span></span>
          <span class="admin-display-toggle-label">${enabled ? "ON" : "OFF"}</span>
        </label>
      </summary>`;
  }

  function rangeBand(key, opt, range) {
    const min = range.min;
    const max = range.max;
    const lo = Math.max(min, Number(opt[1]) || min);
    const hi = Math.min(max, Number(opt[2]) || max);
    const span = Math.max(1, max - min);
    const left  = ((lo - min) / span) * 100;
    const right = 100 - ((hi - min) / span) * 100;
    return `
      <div class="admin-display-band" aria-hidden="true">
        <div class="admin-display-band-fill" style="left:${left}%;right:${right}%"></div>
        <div class="admin-display-band-axis"><span>${min}</span><span>${max}</span></div>
      </div>`;
  }

  function compoundBody(key, opt, label, suffix) {
    const range = _state.ranges[key] || DEFAULT_RANGES[key] || { min: 0, max: 100 };
    const enabled = opt[0] !== false;
    return `
      <div class="admin-display-row-body" data-body-key="${escapeHtml(key)}">
        <div class="admin-display-fields ${enabled ? "" : "is-locked"}">
          <label class="admin-display-field" ${enabled ? "" : "hidden"}>
            <span class="admin-v2-monolabel">${escapeHtml(t("minPercent", "最小"))}${suffix ? " · " + suffix : ""}</span>
            <input type="number" class="admin-v2-input" data-key="${escapeHtml(key)}" data-index="1"
              value="${escapeHtml(String(opt[1] != null ? opt[1] : range.min))}"
              min="${range.min}" max="${range.max}" step="1" ${enabled ? "" : "disabled"} />
          </label>
          <label class="admin-display-field" ${enabled ? "" : "hidden"}>
            <span class="admin-v2-monolabel">${escapeHtml(t("maxPercent", "最大"))}${suffix ? " · " + suffix : ""}</span>
            <input type="number" class="admin-v2-input" data-key="${escapeHtml(key)}" data-index="2"
              value="${escapeHtml(String(opt[2] != null ? opt[2] : range.max))}"
              min="${range.min}" max="${range.max}" step="1" ${enabled ? "" : "disabled"} />
          </label>
          <label class="admin-display-field" ${enabled ? "hidden" : ""}>
            <span class="admin-v2-monolabel">${escapeHtml(t("specificValue", "預設值"))}${suffix ? " · " + suffix : ""}</span>
            <input type="number" class="admin-v2-input" data-key="${escapeHtml(key)}" data-index="3"
              value="${escapeHtml(String(opt[3] != null ? opt[3] : range.min))}"
              min="${range.min}" max="${range.max}" step="1" />
          </label>
        </div>
        ${enabled ? rangeBand(key, opt, range) : ""}
        <div class="admin-display-preview" data-preview-key="${escapeHtml(key)}">
          <div class="admin-v2-monolabel">PREVIEW · 觀眾頁渲染</div>
          <div class="admin-display-preview-stage" data-preview-stage>
            <span class="admin-display-preview-pill" data-preview-pill>觀眾彈幕示意</span>
          </div>
        </div>
      </div>`;
  }

  function chipsBody(key, opt, choices, options) {
    options = options || {};
    const enabled = opt[0] !== false;
    const current = opt[3] != null ? String(opt[3]) : "";
    const chips = choices.map((c) => {
      const val = typeof c === "object" ? c.value : c;
      const label = typeof c === "object" ? c.label : c;
      const swatch = typeof c === "object" ? c.swatch : null;
      const isCurrent = String(val) === String(current);
      return `
        <button type="button" class="admin-display-chip ${isCurrent ? "is-active" : ""}"
          data-chip-key="${escapeHtml(key)}" data-chip-value="${escapeHtml(val)}">
          ${swatch ? `<span class="admin-display-chip-swatch" style="background:${escapeHtml(swatch)}"></span>` : ""}
          <span>${escapeHtml(label)}</span>
        </button>`;
    }).join("");

    const customSlot = options.customSlot || "";
    return `
      <div class="admin-display-row-body" data-body-key="${escapeHtml(key)}">
        <div class="admin-display-pickset">
          <div class="admin-v2-monolabel" style="margin-bottom:6px">
            ${escapeHtml(enabled ? t("displayDefaultLabel", "預設值（觀眾起始）") : t("displayLockedLabel", "鎖定值（所有觀眾）"))}
          </div>
          <div class="admin-display-chips">${chips}</div>
          ${customSlot}
        </div>
        <div class="admin-display-preview" data-preview-key="${escapeHtml(key)}">
          <div class="admin-v2-monolabel">PREVIEW · 觀眾頁渲染</div>
          <div class="admin-display-preview-stage" data-preview-stage>
            <span class="admin-display-preview-pill" data-preview-pill>觀眾彈幕示意</span>
          </div>
        </div>
      </div>`;
  }

  function buildRow(key, label, kicker, opt) {
    let body;
    if (key === "Opacity")  body = compoundBody(key, opt, label, "%");
    else if (key === "FontSize") body = compoundBody(key, opt, label, "px");
    else if (key === "Speed")    body = compoundBody(key, opt, label, "");
    else if (key === "Color") {
      const choices = COLOR_PRESETS.map((hex) => ({ value: hex, label: "#" + hex, swatch: "#" + hex }));
      const customColor = "#" + String(opt[3] || "FFFFFF").toUpperCase().replace(/^#/, "");
      const customSlot = `
        <label class="admin-display-field" style="margin-top:10px;max-width:220px">
          <span class="admin-v2-monolabel">${escapeHtml(t("specificColor", "自訂顏色"))}</span>
          <input type="color" class="admin-v2-input" data-key="Color" data-index="3"
            value="${escapeHtml(customColor)}" />
        </label>`;
      body = chipsBody(key, opt, choices, { customSlot });
    } else if (key === "FontFamily") {
      const choices = (_state.fonts.length ? _state.fonts : ["NotoSansTC", "Inter"]).map((f) => ({
        value: typeof f === "string" ? f : (f.name || f.family || ""),
        label: typeof f === "string" ? f : (f.label || f.name || f.family || ""),
      })).filter((c) => c.value);
      body = chipsBody(key, opt, choices);
    } else if (key === "Layout") {
      const choices = LAYOUT_OPTIONS.map((m) => ({
        value: m,
        label: t("layout_" + m, m === "scroll" ? "滾動" : m === "top_fixed" ? "頂部固定" :
                m === "bottom_fixed" ? "底部固定" : m === "float" ? "浮動" : "上升"),
      }));
      body = chipsBody(key, opt, choices);
    } else {
      body = "";
    }

    return `
      <details class="admin-display-row" data-row-key="${escapeHtml(key)}" open>
        ${rowHead(key, label, kicker, opt)}
        ${body}
      </details>`;
  }

  function renderRows() {
    const host = document.getElementById("dsp2-rows");
    if (!host) return;
    if (!_state.options) {
      host.innerHTML = `<div class="admin-display-empty">${escapeHtml(t("loading", "載入中…"))}</div>`;
      return;
    }
    const rows = [
      { key: "Color",      kicker: "COLOR · 文字顏色",         label: t("colorSetting", "顏色設定") },
      { key: "Opacity",    kicker: "OPACITY · 透明度 %",       label: t("opacitySetting", "透明度設定") },
      { key: "FontSize",   kicker: "FONT-SIZE · 字級 px",      label: t("fontSizeSetting", "字型大小設定") },
      { key: "Speed",      kicker: "SPEED · 滾動速度",         label: t("speedSetting", "速度設定") },
      { key: "FontFamily", kicker: "FONT-FAMILY · 字型家族",   label: t("fontFamilyConfig", "字型設定") },
      { key: "Layout",     kicker: "LAYOUT · 排版模式",        label: t("layoutSetting", "佈局模式") },
    ];
    host.innerHTML = rows.map((r) => buildRow(r.key, r.label, r.kicker, _state.options[r.key] || [false, "", "", ""])).join("");
    rows.forEach((r) => updatePreview(r.key));
  }

  // ─── Live preview ───────────────────────────────────────────────────

  function updatePreview(key) {
    const stage = document.querySelector(`[data-preview-key="${key}"] [data-preview-stage]`);
    const pill  = document.querySelector(`[data-preview-key="${key}"] [data-preview-pill]`);
    if (!stage || !pill || !_state.options) return;

    const opt = _state.options[key] || [];
    const enabled = opt[0] !== false;
    // When enabled, show midpoint of band; when locked, show the default.
    let pillStyle = {};

    // Always pull current settings of OTHER fields from _state to make the
    // preview holistic (e.g. preview Opacity row using current FontSize).
    const color   = "#" + String((_state.options.Color || [])[3] || "FFFFFF").replace(/^#/, "");
    const fontSize = Number((_state.options.FontSize || [])[3] || 36);
    const opacity  = Number((_state.options.Opacity || [])[3] || 70);
    const family   = String((_state.options.FontFamily || [])[3] || "NotoSansTC");
    const layout   = String((_state.options.Layout || [])[3] || "scroll");

    pillStyle.color = color;
    pillStyle.fontSize = fontSize + "px";
    pillStyle.opacity = (opacity / 100).toFixed(2);
    pillStyle.fontFamily = family + ", system-ui, sans-serif";

    // Per-row override — let the row preview show the *current row* mid value.
    if (key === "Opacity") {
      const lo = Number(opt[1] || 0), hi = Number(opt[2] || 100);
      const v  = enabled ? Math.round((lo + hi) / 2) : Number(opt[3] || 70);
      pillStyle.opacity = (v / 100).toFixed(2);
    }
    if (key === "FontSize") {
      const lo = Number(opt[1] || 12), hi = Number(opt[2] || 100);
      const v  = enabled ? Math.round((lo + hi) / 2) : Number(opt[3] || 36);
      pillStyle.fontSize = v + "px";
    }
    if (key === "Speed") {
      const v = enabled ? Math.round((Number(opt[1] || 1) + Number(opt[2] || 10)) / 2) : Number(opt[3] || 4);
      // Speed visualised by translating the pill across the stage.
      pill.dataset.speedV = String(v);
      pill.classList.add("admin-display-preview-anim");
      pill.style.animationDuration = (12 - Math.min(10, Math.max(1, v))) + "s";
    } else {
      pill.classList.remove("admin-display-preview-anim");
      pill.style.animationDuration = "";
      delete pill.dataset.speedV;
    }
    if (key === "Color") {
      pillStyle.color = "#" + String(opt[3] || "FFFFFF").replace(/^#/, "");
    }
    if (key === "FontFamily") {
      pillStyle.fontFamily = (opt[3] || "NotoSansTC") + ", system-ui, sans-serif";
    }

    Object.assign(pill.style, pillStyle);

    // Layout — adjust stage layout class
    stage.dataset.layout = key === "Layout" ? (opt[3] || "scroll") : (_state.options.Layout?.[3] || "scroll");
    stage.dataset.locked = enabled ? "0" : "1";
  }

  function debouncedPreview(key) {
    if (_state.previewTimer) clearTimeout(_state.previewTimer);
    _state.previewTimer = setTimeout(() => updatePreview(key), PREVIEW_DEBOUNCE_MS);
  }

  // ─── Backend calls ──────────────────────────────────────────────────

  async function postToggle(key, enabled) {
    try {
      const res = await window.csrfFetch("/admin/Set", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: key, enabled: !!enabled }),
      });
      if (!res.ok) throw new Error("toggle " + res.status);
      // Update local state and re-render that row.
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
        const r = _state.ranges[key] || DEFAULT_RANGES[key];
        if (Number.isNaN(v) || (r && (v < r.min || v > r.max))) {
          window.showToast && window.showToast(`${key} ${r.min}–${r.max}`, false);
          return;
        }
      }
      const res = await window.csrfFetch("/admin/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: key, value: v, index: index }),
      });
      if (!res.ok) throw new Error("update " + res.status);
      if (!Array.isArray(_state.options[key])) _state.options[key] = [false, "", "", ""];
      _state.options[key][index] = v;
      // Update summary + preview without full re-render to keep focus.
      const summaryEl = document.querySelector(`[data-row-key="${key}"] [data-row-summary]`);
      if (summaryEl) summaryEl.textContent = summaryFor(key, _state.options[key]);
      updatePreview(key);
      window.showToast && window.showToast(`${key} ${t("settingsUpdated", "已更新")}`, true);
    } catch (e) {
      console.warn("[admin-display] update failed:", e);
      window.showToast && window.showToast(t("updateFailed", "更新失敗"), false);
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
      const el = document.querySelector("[data-viewer-count]");
      if (el) el.textContent = String(data.ws_clients ?? 0);
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

  // ─── Apply-to-all broadcast ─────────────────────────────────────────

  async function broadcastAll() {
    if (!_state.options) return;
    const btn = document.getElementById("dsp2-broadcast");
    if (btn) { btn.disabled = true; btn.classList.add("is-pending"); }
    try {
      // Re-post each toggle to force a fresh `settings_changed` push to all
      // connected /ws/settings clients. The endpoint already broadcasts on
      // every set_toggle call, so this acts as the explicit "apply now".
      const keys = ["Color", "Opacity", "FontSize", "Speed", "FontFamily", "Layout"];
      for (const k of keys) {
        const opt = _state.options[k];
        if (!Array.isArray(opt)) continue;
        await window.csrfFetch("/admin/Set", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key: k, enabled: !!opt[0] }),
        });
      }
      await fetchMetrics();
      const el = document.querySelector("[data-viewer-count]");
      const n = el ? el.textContent : "?";
      window.showToast && window.showToast(t("displayBroadcastDone", "已套用，") + ` ${n} 位觀眾收到更新`, true);
    } catch (e) {
      console.warn("[admin-display] broadcast failed:", e);
      window.showToast && window.showToast(t("updateFailed", "更新失敗"), false);
    } finally {
      if (btn) { btn.disabled = false; btn.classList.remove("is-pending"); }
    }
  }

  // ─── Event delegation ───────────────────────────────────────────────

  function bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;

    // Toggle (allow audience customisation)
    page.addEventListener("change", (e) => {
      const target = e.target;
      if (target && target.matches("input[data-toggle-key]")) {
        const key = target.getAttribute("data-toggle-key");
        postToggle(key, target.checked);
        return;
      }
      // number / color inputs auto-save on change
      if (target && target.matches(".admin-v2-input[data-key]")) {
        const key = target.getAttribute("data-key");
        const idx = parseInt(target.getAttribute("data-index"), 10);
        postUpdate(key, idx, target.value);
        return;
      }
    });

    // Range inputs — live preview while typing (debounced)
    page.addEventListener("input", (e) => {
      const target = e.target;
      if (target && target.matches(".admin-v2-input[data-key]")) {
        const key = target.getAttribute("data-key");
        const idx = parseInt(target.getAttribute("data-index"), 10);
        if (!Array.isArray(_state.options[key])) return;
        // Mirror to local state (without POST) so preview reacts immediately
        let v = target.value;
        if (target.type === "number") v = Number(v);
        _state.options[key][idx] = v;
        debouncedPreview(key);
      }
    });

    // Pick-set chips (Color/FontFamily/Layout) — POST + active state swap
    page.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-chip-key]");
      if (chip) {
        const key = chip.getAttribute("data-chip-key");
        const val = chip.getAttribute("data-chip-value");
        // Visual swap
        document.querySelectorAll(`[data-chip-key="${key}"]`).forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        postUpdate(key, 3, val);
        return;
      }
      if (e.target && e.target.id === "dsp2-broadcast") {
        broadcastAll();
        return;
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
      // Refresh on route entry so admin sees up-to-date settings (e.g. after
      // changes from another tab or after a stale render).
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
