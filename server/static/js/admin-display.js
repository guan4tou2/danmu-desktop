/**
 * 彈幕樣式（#/viewer）與顯示層的大螢幕設定（#/overlay 收合區）。
 *
 * 2026-11-14 合併與摺疊第四批「彈幕樣式合一」：以前同一個屬性散在三頁——
 * 顯示層收合區設預設值與範圍、觀眾頁設「觀眾可不可以改」、主題頁設描邊與
 * 陰影。現在一頁一張表，一列一個屬性：
 *
 *   [屬性名＋目前值] [預設值控制（觀眾可改時露出範圍／可選清單）] [觀眾可改]
 *
 * 主題卡片（admin-themes.js）是同一頁最上面的一塊，套用主題會改掉「描邊」
 * 「陰影」兩列的值；兩列透過 window.AdminThemes 讀寫，聽 admin-themes-changed
 * 重畫。顯示層頁只留大螢幕本身的排版（行數、範圍、安全區、描邊模式、投票
 * 調暗），那些觀眾永遠碰不到，也不是單則彈幕的樣子。
 *
 * 這一頁不改任何資料模型，端點全是既有的：
 *   GET  /get_settings   → options[Key] = [觀眾可改, min|清單, max, 預設值]
 *   GET  /fonts          → 字型清單
 *   POST /admin/Set      → slot 0（觀眾可改）
 *   POST /admin/update   → { type, value, index }
 *   POST /admin/options/<Key>/allowlist → 可選清單（Color 的色票也是它）
 *   PATCH /admin/display-layer、/admin/viewer-images
 *
 * 後端沒有旗標的屬性（效果的總開關在動畫效果頁、描邊與陰影觀眾不能改）
 * 照現況呈現：開關是固定狀態，按不動。
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-viewer-config-defaults";
  const LAYOUT_ID = "sec-overlay-layout";
  const LIMITS_ID = "sec-viewer-config-limits";
  // 彈幕樣式頁的畫面順序（與 ADMIN_ROUTES.viewer.sections 相同）。各區塊由
  // 不同模組在不同時間注入，這裡負責排成這個順序。
  const VIEWER_ORDER = ["sec-themes", PAGE_ID, "sec-viewer-theme", LIMITS_ID];
  const LEGACY_IDS = ["sec-color", "sec-opacity", "sec-fontsize", "sec-speed", "sec-fontfamily", "sec-layout"];

  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[c];
    });
  };

  // Server stores [bool, min, max, default]. Prototype's `step` is a UI hint
  // only — kept in client-side state, not persisted.
  // min／max 以伺服器驗證的範圍為準（DANMU_CONFIG.settingRanges，來自
  // managers/settings.py 的 _RANGES）；這裡只補步進與單位這種顯示用的值。
  const SERVER_RANGES = window.DANMU_CONFIG?.settingRanges || {};
  const DEFAULT_RANGES = Object.fromEntries(Object.entries({
    Opacity:  { min: 20, max: 100, step: 1, unit: "%" },
    FontSize: { min: 16, max: 64, step: 2, unit: "px" },
    Speed:    { min: 0.5, max: 3, step: 0.1, unit: "×" },
  }).map(([k, r]) => {
    const srv = SERVER_RANGES[k] || {};
    return [k, {
      ...r,
      min: Number.isFinite(Number(srv.min)) ? Number(srv.min) : r.min,
      max: Number.isFinite(Number(srv.max)) ? Number(srv.max) : r.max,
    }];
  }));

  const FONT_SIZE_PRESETS = [14, 20, 32, 44, 64];
  const COLOR_PRESETS = window.DANMU_CONFIG?.defaultColorPalette || [];
  // 頂層常數 parse 時 ServerI18n 尚未 init，所以存 key、渲染時才 t()。
  const LAYOUT_PRESETS = [
    { value: "scroll",       labelKey: "layoutPresetScroll", icon: "→" },
    { value: "top_fixed",    labelKey: "layoutPresetTop",    icon: "▀" },
    { value: "bottom_fixed", labelKey: "layoutPresetBottom", icon: "▄" },
    { value: "float",        labelKey: "layoutPresetCenter", icon: "■" },
    { value: "rise",         labelKey: "layoutPresetSide",   icon: "▌" },
  ];
  // 描邊與陰影是主題覆寫的分段（services/theme_overrides.py 的 STROKE_MODES /
  // SHADOW_MODES）。
  const THEME_SEGS = {
    stroke: [
      { value: "none", labelKey: "themeStrokeNone" },
      { value: "thin", labelKey: "themeStrokeThin" },
      { value: "thick", labelKey: "themeStrokeThick" },
    ],
    shadow: [
      { value: "none", labelKey: "themeShadowNone" },
      { value: "soft", labelKey: "themeShadowSoft" },
      { value: "strong", labelKey: "themeShadowStrong" },
    ],
  };

  // key 未收錄時退回 key 字串本身（i18next 標準行為），第二參數是插值 vars。
  function t(key, vars) {
    if (window.ServerI18n && typeof window.ServerI18n.t === "function") {
      const v = window.ServerI18n.t(key, vars);
      if (v && v !== key) return v;
    }
    return key;
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
    // key → Set<string> of admin-toggled allowlist entries (mirrors options[key][1]).
    // null = not in edit mode for this row.
    allowlistEdit: {},
    paletteBusy: false,
    paletteDraft: "#38BDF8",
    // 色票區塊會被 renderRows() 整段重繪，只寫在 DOM 上的 aria-invalid 會在
    // 重繪時消失，所以「格式錯誤」標記跟草稿一樣存在 state。
    paletteInvalid: false,
    palettePreview: null,
    paletteNotice: null,
  };

  // 觀眾外部圖片的副檔名勾選框（與 services/viewer_images.py 的
  // SUPPORTED_EXTENSIONS 同序；jpg 同時代表 .jpg 與 .jpeg）。標籤是格式名稱，不翻譯。
  const VI_EXTENSIONS = [
    { value: "png", label: "PNG" },
    { value: "jpg", label: "JPG" },
    { value: "gif", label: "GIF" },
    { value: "webp", label: "WebP" },
  ];

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

  // ─── HTML shells ────────────────────────────────────────────────────

  // 彈幕樣式頁的樣式表。頁面標題由頂欄負責，這裡不再放頁首。
  function pageTemplate() {
    return `
      <div id="${PAGE_ID}" class="admin-dsp2-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-dsp2-grid">
          <div class="admin-dsp2-list" id="dsp2-list">
            <div class="admin-dsp2-list-head" aria-hidden="true">
              <span>${escapeHtml(t("displayColParam"))}</span>
              <span>${escapeHtml(t("displayColValue"))}</span>
              <span class="admin-dsp2-list-head-right">${escapeHtml(t("displayColAudience"))}</span>
            </div>
            <div id="dsp2-rows">
              ${window.AdminSkeletons ? window.AdminSkeletons.html("listRows", { rows: 3 }) : escapeHtml(t("loading"))}
            </div>
          </div>

          <div class="admin-dsp2-rail">
            <div class="admin-dsp2-card admin-dsp2-preview" id="dsp2-preview">
              <div class="admin-dsp2-preview-head">
                <span class="admin-ui-monolabel">${escapeHtml(t("mlLivePreview"))}</span>
              </div>
              <div class="admin-dsp2-preview-stage" data-preview-stage>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-1" data-preview-pill="1">
                  <span class="admin-dsp2-preview-tag">@guest#1284</span>
                  <span data-preview-text>${escapeHtml(t("displayPreviewSample1"))}</span>
                </div>
                <div class="admin-dsp2-preview-pill admin-dsp2-preview-pill-2" data-preview-pill="2">
                  <span class="admin-dsp2-preview-tag">@annie</span>
                  <span>${escapeHtml(t("displayPreviewSample2"))}</span>
                </div>
              </div>
              <div class="admin-dsp2-preview-foot">
                <span data-preview-foot-l>—</span>
                <span data-preview-foot-r>—</span>
              </div>
            </div>
            <!-- 每一次變更都直接存，沒有「套用」鈕；這裡只剩還原與匯出。 -->
            <div class="admin-dsp2-actions">
              <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-revert">
                ↺ ${escapeHtml(t("displayDeployRevert"))}
              </button>
              <button type="button" class="admin-dsp2-btn admin-dsp2-btn-ghost" id="dsp2-export">
                ↗ ${escapeHtml(t("displayExportJson"))}
              </button>
            </div>
          </div>
        </div>

        <!-- 觀眾外部圖片（5.8.0）。預設關閉；判斷在伺服器（/fire），這裡只讀寫
             /admin/viewer-images。關閉時網站與格式兩列收起來。 -->
        <div id="viewer-images-group">
          <div class="admin-ui-group-label">${escapeHtml(t("viGroupLabel"))}</div>
          <div class="admin-ui-group">
            <label class="admin-ui-group-row" for="viewer-images-enabled">
              <span class="lbl">${escapeHtml(t("viAllowExternal"))}</span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" id="viewer-images-enabled" data-vi-toggle />
              </span>
            </label>
            <div class="admin-ui-group-row is-tall admin-vi-row" data-vi-row style="display:none">
              <label class="lbl" for="viewer-images-hosts">${escapeHtml(t("viHosts"))}</label>
              <span class="val admin-vi-hosts">
                <textarea id="viewer-images-hosts" class="admin-ui-input" rows="3" spellcheck="false"
                  autocapitalize="off" autocomplete="off"
                  placeholder="${escapeHtml(t("viHostsPlaceholder"))}"></textarea>
              </span>
            </div>
            <div class="admin-ui-group-row admin-vi-row" data-vi-row style="display:none" role="group"
                 aria-labelledby="viewer-images-ext-label">
              <span class="lbl" id="viewer-images-ext-label">${escapeHtml(t("viExtensions"))}</span>
              <span class="val admin-vi-exts" id="viewer-images-extensions">
                ${VI_EXTENSIONS.map((ext) => `
                <label class="admin-vi-ext">
                  <input type="checkbox" class="admin-ui-checkbox" data-vi-ext="${ext.value}" />
                  <span>${ext.label}</span>
                </label>`).join("")}
              </span>
            </div>
          </div>
        </div>
      </div>`;
  }

  // 顯示層頁的收合區：大螢幕本身怎麼排。觀眾永遠碰不到，所以不進樣式表。
  function layoutTemplate() {
    return `
      <details id="${LAYOUT_ID}" class="admin-dsp2-fold lg:col-span-2" data-dsp-fold data-tpl="C">
        <summary class="admin-ui-page-title">${escapeHtml(t("overlayLayoutFoldTitle"))}</summary>
        <div class="admin-dsp2-page hud-page-stack">
          <div class="admin-ui-group-label">${escapeHtml(t("dlGroupLayout"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${escapeHtml(t("dlMaxTracks"))}
                <span class="sub">${escapeHtml(t("dlMaxTracksHint"))}</span>
              </span>
              <span class="val admin-ui-stepper" data-dl-stepper="max_tracks">
                <button type="button" data-dl-step="-1">−</button>
                <span class="stepper-val" data-dl-value="max_tracks">—</span>
                <button type="button" data-dl-step="1">+</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${escapeHtml(t("dlAvoidOverlap"))}
                <span class="sub">${escapeHtml(t("dlAvoidOverlapHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="avoid_overlap" />
              </span>
            </div>
          </div>

          <div class="admin-ui-group-label">${escapeHtml(t("dlGroupArea"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${escapeHtml(t("dlAreaTop"))}</span>
              <span class="val">
                <input type="range" min="0" max="90" step="5" data-dl-range="area_top" />
                <span class="stepper-val" data-dl-value="area_top">—</span>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${escapeHtml(t("dlAreaHeight"))}</span>
              <span class="val">
                <input type="range" min="10" max="100" step="5" data-dl-range="area_height" />
                <span class="stepper-val" data-dl-value="area_height">—</span>
              </span>
            </div>
          </div>

          <!-- 投影安全區與淺底描邊（設計稿 16 · OS1／OS2）。 -->
          <div class="admin-ui-group-label">${escapeHtml(t("dlGroupStage"))}</div>
          <div class="admin-ui-group">
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${escapeHtml(t("dlSafeArea"))}
                <span class="sub">${escapeHtml(t("dlSafeAreaHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="safe_area">
                <button type="button" data-dl-opt="0">0%</button>
                <button type="button" data-dl-opt="5">5%</button>
                <button type="button" data-dl-opt="8">8%</button>
              </span>
            </div>
            <div class="admin-ui-group-row is-tall">
              <span class="lbl">${escapeHtml(t("dlStrokeMode"))}
                <span class="sub">${escapeHtml(t("dlStrokeModeHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="stroke_mode">
                <button type="button" data-dl-opt="auto">${escapeHtml(t("dlStrokeAuto"))}</button>
                <button type="button" data-dl-opt="always">${escapeHtml(t("dlStrokeAlways"))}</button>
                <button type="button" data-dl-opt="never">${escapeHtml(t("dlStrokeNever"))}</button>
              </span>
            </div>
            <!-- 2026-09-08：打字投票會讓大螢幕出現一整片 A / B / C / D。不藏起來，
                 而是調暗。一次按下即投票（POST /poll/vote）不產生彈幕，不受影響。 -->
            <div class="admin-ui-group-row">
              <span class="lbl">${escapeHtml(t("dlDimPollVotes"))}
                <span class="sub">${escapeHtml(t("dlDimPollVotesHint"))}</span>
              </span>
              <span class="val">
                <input type="checkbox" class="admin-ui-checkbox" data-dl-toggle="dim_poll_votes" />
              </span>
            </div>
            <div class="admin-ui-group-row is-tall" data-dl-row="poll_vote_opacity">
              <span class="lbl">${escapeHtml(t("dlPollVoteOpacity"))}
                <span class="sub">${escapeHtml(t("dlPollVoteOpacityHint"))}</span>
              </span>
              <span class="val admin-ui-seg" data-dl-seg="poll_vote_opacity">
                <button type="button" data-dl-opt="15">15%</button>
                <button type="button" data-dl-opt="25">25%</button>
                <button type="button" data-dl-opt="40">40%</button>
              </span>
            </div>
          </div>
        </div>
      </details>`;
  }

  // ─── Row rendering ──────────────────────────────────────────────────

  // kind：
  //   slider / size / color / pick → 後端有 slot 0 旗標，開關是真的
  //   effects                      → 旗標是動畫效果頁的總開關（關掉時連主題
  //                                  內建的效果也不送），這裡只顯示、不改
  //   theme                        → 主題覆寫；觀眾沒有任何入口能改
  const ROWS = [
    { key: "Opacity",    labelKey: "displayLabelOpacity",    kind: "slider", fmt: (v) => `${Math.round(v)}%` },
    { key: "FontSize",   labelKey: "displayLabelFontSize",   kind: "size",   fmt: (v) => `${v}px` },
    { key: "Speed",      labelKey: "displayLabelSpeed",      kind: "slider", fmt: (v) => `${(+v).toFixed(1)}×` },
    { key: "Color",      labelKey: "displayLabelColor",      kind: "color",  fmt: (v) => `#${String(v || "").replace(/^#/, "").toUpperCase() || "—"}` },
    { key: "FontFamily", labelKey: "displayLabelFontFamily", kind: "pick",   fmt: (v) => v || "—" },
    { key: "Layout",     labelKey: "displayLabelLayout",     kind: "pick",   fmt: (v) => layoutLabel(v) },
    { key: "Effects",    labelKey: "displayLabelEffect",     kind: "effects", fixed: true },
    { key: "stroke",     labelKey: "themeDetailStroke",      kind: "theme",  fixed: true },
    { key: "shadow",     labelKey: "themeDetailShadow",      kind: "theme",  fixed: true },
  ];

  function layoutLabel(v) {
    const m = LAYOUT_PRESETS.find((l) => l.value === v);
    return m ? t(m.labelKey) : (v || "—");
  }

  function themeSeg(kind) {
    const api = window.AdminThemes;
    return api && typeof api.segOf === "function" ? api.segOf(kind) : null;
  }

  // 一列的「觀眾可改」。effects 讀 Effects[0]（缺省＝開，與 main.js 同），
  // theme 永遠是不可改。
  function rowEnabled(row) {
    const opts = _state.options || {};
    if (row.kind === "theme") return false;
    if (row.kind === "effects") return !opts.Effects || opts.Effects[0] !== false;
    const opt = opts[row.key];
    return !!(opt && opt[0] !== false);
  }

  // 預設顏色／字型可能來自使用中主題的覆寫（services/danmu_style.py）。
  // 來源資訊由 admin-themes.js 從後端拿（style_defaults）；還沒載入時是 null。
  function themeDefault(key) {
    const api = window.AdminThemes;
    const d = api && typeof api.styleDefaults === "function" ? api.styleDefaults() : null;
    return (d && d[key]) || null;
  }

  // 觀眾沒選時實際用的值：主題值有被採用就是它，否則是這一列的全域預設。
  function effectiveDefault(key) {
    const d = themeDefault(key);
    if (d && d.source === "theme") return d.value;
    const opt = (_state.options && _state.options[key]) || [];
    return opt[3];
  }

  // 標籤欄的來源標記：預設值來自主題時標「來自主題」；主題有設值但沒被
  // 採用（字型停用／刪除、顏色不在色盤上）時標「主題值未採用」。
  function sourceChipHtml(row) {
    if (row.key !== "Color" && row.key !== "FontFamily") return "";
    const d = themeDefault(row.key);
    if (!d) return "";
    if (d.source === "theme") {
      return `<span class="admin-ui-chip" data-source-chip="theme">${escapeHtml(t("styleFromTheme"))}</span>`;
    }
    if (d.rejected) {
      return `<span class="admin-ui-chip is-warn" data-source-chip="rejected"
        title="${escapeHtml(String(d.theme_value || ""))}">${escapeHtml(t("styleThemeValueUnused"))}</span>`;
    }
    return "";
  }

  function labelBadgesHtml(row) {
    const enabled = rowEnabled(row);
    const valStr = rowValueText(row);
    return (valStr ? `<div class="admin-dsp2-value-badge ${enabled ? "is-on" : ""}" data-value-badge>${escapeHtml(valStr)}</div>` : "")
      + sourceChipHtml(row);
  }

  function rowValueText(row) {
    if (row.key === "Color" || row.key === "FontFamily") return row.fmt(effectiveDefault(row.key));
    if (row.kind === "theme") {
      const seg = themeSeg(row.key);
      const m = THEME_SEGS[row.key].find((s) => s.value === seg);
      return m ? t(m.labelKey) : "—";
    }
    if (row.kind === "effects") return "";
    const opt = (_state.options && _state.options[row.key]) || [];
    const def = opt[3];
    return row.fmt ? row.fmt(def) : (def != null ? String(def) : "—");
  }

  function pickerHtml(row, opt) {
    const def = opt[3];
    const range = DEFAULT_RANGES[row.key];
    const enabled = rowEnabled(row);

    if (row.kind === "slider") {
      const r = range;
      const cur = def != null ? Number(def) : r.min;
      const safeCur = isFinite(cur) ? cur : r.min;
      const pct = ((safeCur - r.min) / Math.max(1e-6, r.max - r.min)) * 100;
      const label = escapeHtml(t(row.labelKey));
      return `
        <div class="admin-dsp2-track" data-track="${row.key}">
          <input type="number" class="admin-dsp2-num" data-num-key="${row.key}" data-num-index="3"
            aria-label="${label}"
            min="${r.min}" max="${r.max}" step="${getStep(row.key)}" value="${escapeHtml(String(safeCur))}" />
          <div class="admin-dsp2-slider">
            <div class="admin-dsp2-slider-track">
              <div class="admin-dsp2-slider-fill" style="width:${pct.toFixed(2)}%"></div>
              <div class="admin-dsp2-slider-thumb" style="left:calc(${pct.toFixed(2)}% - 8px)"></div>
            </div>
            <input type="range" class="admin-dsp2-range" data-range-key="${row.key}" aria-label="${label}"
              min="${r.min}" max="${r.max}" step="${getStep(row.key)}" value="${escapeHtml(String(safeCur))}" />
            <div class="admin-dsp2-slider-axis">
              <span>${r.min}${r.unit}</span><span>${r.max}${r.unit}</span>
            </div>
          </div>
        </div>`;
    }

    if (row.kind === "size") {
      const cur = Number(def);
      return `
        <div class="admin-dsp2-chiprow admin-dsp2-chiprow-wrap">
          ${FONT_SIZE_PRESETS.map((s) => {
            const on = cur === s;
            return `<button type="button" class="admin-dsp2-fchip ${on ? "is-active" : ""}"
              data-chip-key="FontSize" data-chip-value="${s}" aria-pressed="${on}">${s}</button>`;
          }).join("")}
        </div>`;
    }

    if (row.kind === "color") {
      const cur = "#" + String(def || "FFFFFF").replace(/^#/, "").toUpperCase();
      return `
        <div class="admin-dsp2-swatches">
          ${paletteColors().map((c) => {
            const code = c.slice(1);
            const on = c.toUpperCase() === cur;
            return `<button type="button" class="admin-dsp2-swatch ${on ? "is-active" : ""}"
              data-chip-key="Color" data-chip-value="${code}"
              style="background:${c}" aria-label="${c}" aria-pressed="${on}"></button>`;
          }).join("")}
          <label class="admin-dsp2-swatch-custom" title="${escapeHtml(t("specificColor"))}">
            <span class="sr-only">${escapeHtml(t("specificColor"))}</span>
            <input type="color" data-num-key="Color" data-num-index="3"
              value="${escapeHtml(cur)}" />
          </label>
        </div>
      `;
    }

    if (row.key === "FontFamily") {
      const fonts = (_state.fonts && _state.fonts.length ? _state.fonts : ["NotoSansTC", "Inter"]).map((f) => {
        const v = typeof f === "string" ? f : (f.name || f.family || "");
        const l = typeof f === "string" ? f : (f.label || f.name || f.family || "");
        return { value: v, label: l };
      }).filter((c) => c.value);
      const cur = String(def || "");
      const editing = enabled && !!_state.allowlistEdit.FontFamily;
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
              enabled && !inAllow ? "is-blocked" : "",
            ].filter(Boolean).join(" ");
            const dataAttrs = editing
              ? `data-allow-key="FontFamily" data-allow-value="${escapeHtml(f.value)}"`
              : `data-chip-key="FontFamily" data-chip-value="${escapeHtml(f.value)}"`;
            return `<button type="button" class="${cls}" ${dataAttrs}
              aria-pressed="${editing ? (inAllow ? "true" : "false") : (on ? "true" : "false")}">
              ${editing ? `<span class="admin-dsp2-allow-mark">${inAllow ? "✓ " : ""}</span>` : ""}${escapeHtml(f.label)}
            </button>`;
          }).join("")}
          <a class="admin-dsp2-link" href="#/assets/fonts">${escapeHtml(t("adminRouteTitle_fonts"))} ›</a>
        </div>
        ${allowlistControlsHtml(row)}
      `;
    }

    if (row.key === "Layout") {
      const cur = String(def || "scroll");
      const editing = enabled && !!_state.allowlistEdit.Layout;
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
              enabled && !inAllow ? "is-blocked" : "",
            ].filter(Boolean).join(" ");
            const dataAttrs = editing
              ? `data-allow-key="Layout" data-allow-value="${l.value}"`
              : `data-chip-key="Layout" data-chip-value="${l.value}"`;
            return `<button type="button" class="${cls}" ${dataAttrs}
              aria-pressed="${editing ? (inAllow ? "true" : "false") : (on ? "true" : "false")}">
              <span class="admin-dsp2-tile-icon" aria-hidden="true">${l.icon}</span>
              <span class="admin-dsp2-tile-label">${t(l.labelKey)}</span>
              ${editing ? `<span class="admin-dsp2-allow-mark">${inAllow ? "✓" : ""}</span>` : ""}
            </button>`;
          }).join("")}
        </div>
        ${allowlistControlsHtml(row)}
      `;
    }

    if (row.kind === "effects") {
      return `<a class="admin-dsp2-link" href="#/effects">${escapeHtml(t("adminNavEffects"))} ›</a>`;
    }

    if (row.kind === "theme") {
      const cur = themeSeg(row.key);
      return `
        <span class="admin-ui-seg admin-dsp2-seg" data-theme-seg="${row.key}" role="group"
              aria-label="${escapeHtml(t(row.labelKey))}">
          ${THEME_SEGS[row.key].map((s) => {
            const on = s.value === cur;
            return `<button type="button" data-theme-opt="${s.value}" class="${on ? "is-active" : ""}"
              aria-pressed="${on ? "true" : "false"}">${escapeHtml(t(s.labelKey))}</button>`;
          }).join("")}
        </span>`;
    }
    return "";
  }

  // 可選清單只有在「觀眾可改」開著時才有意義（關著時觀眾根本看不到選項），
  // 所以和數值列的範圍一樣，開關打開才露出。
  function allowlistControlsHtml(row) {
    if (!isAllowlistKey(row.key) || !rowEnabled(row)) return "";
    const editing = !!_state.allowlistEdit[row.key];
    const list = readAllowlist(row.key);
    const total = presetValuesFor(row.key).length || 0;
    const summary = list.length > 0
      ? t("displayAllowSummaryPartial", { n: list.length, total: total, label: labelForKey(row.key) })
      : t("displayAllowSummaryAll", { total: total });
    return `
      <div class="admin-dsp2-allow-controls" data-allow-controls="${row.key}">
        <span class="admin-dsp2-allow-summary" data-allow-summary="${row.key}">${escapeHtml(summary)}</span>
        ${editing ? `
          <button type="button" class="admin-dsp2-allow-btn is-apply" data-allow-action="apply" data-allow-key="${row.key}">${escapeHtml(t("displayApply"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-cancel" data-allow-action="cancel" data-allow-key="${row.key}">${escapeHtml(t("cancel"))}</button>
          <button type="button" class="admin-dsp2-allow-btn is-clear" data-allow-action="clear" data-allow-key="${row.key}">${escapeHtml(t("displayAllowAllBtn"))}</button>
        ` : `
          <button type="button" class="admin-dsp2-allow-btn" data-allow-action="edit" data-allow-key="${row.key}">${escapeHtml(t("displayEditAllowlistTitle"))}</button>
        `}
      </div>`;
  }

  function labelForKey(key) {
    if (key === "Color") return t("displayLabelColor");
    if (key === "FontFamily") return t("displayLabelFontFamily");
    if (key === "Layout") return t("displayLabelLayout");
    return t("displayLabelOption");
  }

  // 數值列的觀眾範圍（slot 1／2）與只存在前端的步進值。
  function rangeBandHtml(row, opt) {
    if (row.kind !== "slider" && row.kind !== "size") return "";
    if (!rowEnabled(row)) return "";
    const r = DEFAULT_RANGES[row.key];
    const lo = opt[1] != null ? opt[1] : r.min;
    const hi = opt[2] != null ? opt[2] : r.max;
    const step = getStep(row.key);
    const cell = (labelKey, index, value, extra) => `
        <label class="admin-dsp2-band-cell">
          <span class="admin-ui-monolabel">${escapeHtml(t(labelKey))}</span>
          <span class="admin-dsp2-band-input">
            <input type="number" data-num-key="${row.key}" data-num-index="${index}" ${extra}
              value="${escapeHtml(String(value))}" />
            ${r.unit ? `<span>${r.unit}</span>` : ""}
          </span>
        </label>`;
    return `
      <div class="admin-dsp2-band">
        ${cell("displayMinAudience", 1, lo, `min="${r.min}" max="${r.max}" step="${step}"`)}
        ${cell("displayMaxAudience", 2, hi, `min="${r.min}" max="${r.max}" step="${step}"`)}
        ${cell("mlStep", "step", step, `min="0.1" step="0.1"`)}
      </div>`;
  }

  function pillHtml(row) {
    const enabled = rowEnabled(row);
    const label = escapeHtml(t(row.labelKey) + " · " + t("displayColAudience"));
    const text = escapeHtml(enabled ? t("displayCustomizable") : t("displayLocked"));
    // 後端沒有對應旗標的列：開關照現況顯示，但按不動（不偷偷改觀眾端行為）。
    const attrs = row.fixed
      ? `disabled aria-disabled="true" data-fixed-toggle="${row.key}"`
      : `data-toggle-key="${row.key}"`;
    return `
      <button type="button" class="admin-dsp2-pill ${enabled ? "is-on" : ""}" ${attrs}
        aria-pressed="${enabled ? "true" : "false"}" aria-label="${label}">
        <span class="admin-dsp2-pill-track" aria-hidden="true"><span class="admin-dsp2-pill-thumb"></span></span>
        <span class="admin-dsp2-pill-label">${text}</span>
      </button>`;
  }

  function rowHtml(row) {
    const opt = (_state.options && _state.options[row.key]) || [false, "", "", ""];
    const enabled = rowEnabled(row);
    const ext = row.kind === "color" && enabled
      ? `<div class="admin-dsp2-row-ext admin-color-palette" data-row-ext="Color" data-admin-color-palette></div>`
      : "";
    return `
      <div class="admin-dsp2-row ${enabled ? "is-on" : "is-off"} ${row.fixed ? "is-fixed" : ""}" data-row-key="${row.key}">
        <div class="admin-dsp2-cell-label">
          <div class="admin-dsp2-cell-label-name">${escapeHtml(t(row.labelKey))}</div>
          <div class="admin-dsp2-cell-badges" data-row-badges>${labelBadgesHtml(row)}</div>
        </div>
        <div class="admin-dsp2-cell-center">
          <div class="admin-dsp2-picker" data-picker-host>${pickerHtml(row, opt)}</div>
          <div class="admin-dsp2-band-host" data-band-host>${rangeBandHtml(row, opt)}</div>
        </div>
        <div class="admin-dsp2-cell-toggle">${pillHtml(row)}</div>
      </div>${ext}`;
  }

  function renderRows() {
    const host = document.getElementById("dsp2-rows");
    if (!host) return;
    if (!_state.options) {
      host.innerHTML = `${window.AdminSkeletons ? window.AdminSkeletons.html("listRows", { rows: 3 }) : escapeHtml(t("loading"))}`;
      return;
    }
    host.innerHTML = ROWS.map(rowHtml).join("");
    renderColorPalette();
    renderPreview();
  }

  function paletteColors() {
    const configured = readAllowlist("Color");
    return [...new Set((configured.length ? configured : COLOR_PRESETS)
      .map(value => "#" + String(value).replace(/^#/, "").toUpperCase())
      .filter(value => /^#[0-9A-F]{6}$/.test(value)))];
  }

  function paletteInk(color) {
    const rgb = color.slice(1).match(/.{2}/g).map(value => {
      const channel = parseInt(value, 16) / 255;
      return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    });
    return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722 > 0.179
      ? "var(--slate-950)" : "var(--color-white)";
  }

  function paletteFeedback(message, type = "error") {
    _state.paletteNotice = { message, type };
    const feedback = document.querySelector("[data-palette-feedback]");
    if (feedback) {
      feedback.textContent = message;
      feedback.classList.toggle("is-error", type === "error");
    }
  }

  function previewPaletteColor(color, animate = true) {
    const host = document.querySelector("[data-admin-color-palette]");
    const sample = host?.querySelector("[data-palette-preview-text]");
    if (!sample || !/^#[0-9A-F]{6}$/i.test(color)) return;
    _state.palettePreview = color.toUpperCase();
    sample.style.color = color;
    host.querySelector("[data-palette-preview-code]").textContent = color.toUpperCase();
    host.querySelectorAll("[data-palette-preview]").forEach(button => {
      const active = button.dataset.palettePreview === color.toUpperCase();
      button.setAttribute("aria-pressed", String(active));
      button.closest(".admin-color-palette-chip").classList.toggle("is-previewing", active);
    });
    if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sample.getAnimations().forEach(animation => animation.cancel());
      sample.animate([{ opacity: 0, transform: "translateX(12px)" }, { opacity: 1, transform: "translateX(0)" }],
        { duration: 260, easing: "cubic-bezier(.2,.7,.2,1)" });
    }
  }

  function renderColorPalette() {
    const host = document.querySelector("[data-admin-color-palette]");
    if (!host || !_state.options) return;
    const colors = paletteColors();
    const allowPicker = (_state.options.ViewerColorPicker || [true])[0] !== false;
    const disabled = _state.paletteBusy ? "disabled" : "";
    const selected = _state.palettePreview || colors[0];
    const draft = escapeHtml(_state.paletteDraft);
    const notice = _state.paletteNotice;
    host.setAttribute("aria-busy", String(_state.paletteBusy));
    host.innerHTML = `
      <div class="admin-color-palette-head">
        <div>
          <!-- 2026-10-29：key 從 viewerPaletteEyebrow 改名為 viewerPaletteLabel。
               文案沒變；設計契約禁的是 *Eyebrow / *Kicker 這種命名（那代表
               「中文標籤旁邊再擺一行大寫英文」的舊版型）。這裡的 eyebrow 是
               使用者語言的小標，與下方標題不重複。 -->
          <span class="admin-color-palette-eyebrow">${escapeHtml(t("viewerPaletteLabel"))}</span>
          <h3 class="admin-color-palette-title">${escapeHtml(t("viewerPaletteTitle"))}</h3>
          <p class="admin-color-palette-note">${escapeHtml(t("viewerPaletteHint"))}</p>
        </div>
        <span class="admin-color-palette-count"><strong data-palette-count>${colors.length}</strong><span>${escapeHtml(t("viewerPaletteCountUnit"))}</span></span>
      </div>
      <div class="admin-color-palette-body">
        <div class="admin-color-palette-editor">
          <div class="admin-color-palette-list">
            ${colors.map((color, index) => `<div class="admin-color-palette-chip" style="--palette-color:${color};--palette-ink:${paletteInk(color)}">
              <button type="button" class="admin-color-palette-sample" data-palette-preview="${color}"
                aria-label="${escapeHtml(t("viewerPalettePreviewColor", { color }))}" aria-pressed="${color === selected}" ${disabled}>
                <span class="admin-color-palette-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
                <span class="admin-color-palette-tick" aria-hidden="true">✓</span>
              </button>
              <code>${color}</code>
              <button type="button" class="admin-color-palette-remove" data-palette-remove="${color}" ${colors.length <= 1 ? "disabled" : disabled}
                aria-label="${escapeHtml(t("viewerPaletteRemove", { color }))}"><span aria-hidden="true">×</span></button>
            </div>`).join("")}
          </div>
          <div class="admin-color-palette-compose">
            <label class="admin-color-palette-compose-label" for="adminPaletteHex">${escapeHtml(t("viewerPaletteAdd"))}</label>
            <div class="admin-color-palette-add">
              <label class="admin-color-palette-picker">
                <span class="sr-only">${escapeHtml(t("viewerCustomColor"))}</span>
                <input type="color" value="${/^#[0-9A-F]{6}$/i.test(_state.paletteDraft) ? draft : "#38bdf8"}" data-palette-picker ${disabled} />
              </label>
              <input id="adminPaletteHex" class="admin-color-palette-code" type="text" data-palette-hex value="${draft}"
                ${_state.paletteInvalid ? 'aria-invalid="true"' : ""}
                placeholder="#RRGGBB" maxlength="7" spellcheck="false" autocomplete="off" ${disabled} />
              <button type="button" class="admin-color-palette-add-btn" data-palette-add ${colors.length >= 64 ? "disabled" : disabled}>
                <span aria-hidden="true">＋</span> ${escapeHtml(t("viewerPaletteAdd"))}
              </button>
            </div>
            <p class="admin-color-palette-note">${escapeHtml(t(colors.length >= 64 ? "viewerPaletteLimit" : "viewerPaletteMinimum"))}</p>
            <p class="admin-color-palette-feedback ${notice?.type === "error" ? "is-error" : ""}" data-palette-feedback role="status" aria-live="polite">${notice ? escapeHtml(notice.message) : ""}</p>
          </div>
        </div>
        <aside class="admin-color-palette-aside">
          <div class="admin-color-palette-stage">
            <div class="admin-color-palette-stage-head"><span>${escapeHtml(t("viewerPalettePreview"))}</span><span class="admin-color-palette-stage-dot" aria-hidden="true"></span></div>
            <div class="admin-color-palette-stage-content"><span data-palette-preview-text>${escapeHtml(t("viewerPreviewSample"))}</span></div>
            <div class="admin-color-palette-stage-foot"><span data-palette-preview-code>${selected}</span><span aria-hidden="true">→</span></div>
          </div>
          <p class="admin-color-palette-note admin-color-palette-preview-hint">${escapeHtml(t("viewerPalettePreviewHint"))}</p>
          <label class="admin-color-palette-policy">
            <span><strong>${escapeHtml(t("viewerPaletteAllowPicker"))}</strong>
              <span class="admin-color-palette-note">${escapeHtml(t("viewerPaletteAllowPickerHint"))}</span></span>
            <span class="admin-color-palette-switch">
              <input type="checkbox" data-viewer-color-picker ${allowPicker ? "checked" : ""} ${disabled} />
              <span class="admin-color-palette-switch-track" aria-hidden="true"></span>
            </span>
          </label>
          <div class="admin-color-palette-sync" role="status"><span aria-hidden="true"></span><span data-palette-sync-status>${escapeHtml(t("viewerPaletteSync"))}</span></div>
        </aside>
      </div>`;
    previewPaletteColor(selected, false);
  }

  async function savePalette(colors, focusColor) {
    if (_state.paletteBusy) return;
    const host = document.querySelector("[data-admin-color-palette]");
    _state.paletteBusy = true;
    host.setAttribute("aria-busy", "true");
    host.querySelector("[data-palette-sync-status]").textContent = t("viewerPaletteSaving");
    host.querySelectorAll("input, button").forEach(el => { el.disabled = true; });
    const saved = await postAllowlist("Color", colors);
    _state.paletteBusy = false;
    _state.paletteNotice = { type: saved ? "success" : "error", message: t(saved ? "viewerPaletteSaved" : "updateFailed") };
    if (saved && focusColor) _state.palettePreview = focusColor;
    renderColorPalette();
    const focus = focusColor && saved
      ? host.querySelector(`[data-palette-preview="${focusColor}"]`)
      : host.querySelector("[data-palette-hex]");
    focus?.focus({ preventScroll: true });
  }

  // ─── Preview ────────────────────────────────────────────────────────

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
    const color    = "#" + String(effectiveDefault("Color") || previewVal("Color", "7DD3FC")).replace(/^#/, "");
    const family   = String(effectiveDefault("FontFamily") || previewVal("FontFamily", "NotoSansTC"));
    const layout   = String(previewVal("Layout", "scroll"));

    // Cap visual font-size so the stage doesn't blow up.
    const capped = Math.min(fontSize, 36);
    const op = Math.max(0, Math.min(100, opacity)) / 100;

    // 描邊與陰影來自使用中的主題（套用主題、改那兩列都會重畫這裡）。
    const styles = (window.AdminThemes && window.AdminThemes.activeStyles && window.AdminThemes.activeStyles()) || {};
    const strokeW = styles.textStroke ? Math.max(0, Math.min(6, Number(styles.strokeWidth) || 0)) : 0;
    const strokeColor = /^#[0-9a-fA-F]{3,8}$/.test(String(styles.strokeColor || "")) ? styles.strokeColor : "#000000";
    const blur = styles.textShadow ? Math.max(0, Math.min(40, Number(styles.shadowBlur) || 0)) : 0;

    pill1.style.fontSize = capped + "px";
    pill1.style.color = color;
    pill1.style.opacity = op.toFixed(2);
    pill1.style.fontFamily = family + ", system-ui, sans-serif";
    pill1.style.webkitTextStroke = strokeW ? `${strokeW}px ${strokeColor}` : "";
    pill1.style.paintOrder = strokeW ? "stroke fill" : "";
    pill1.style.textShadow = blur ? `0 0 ${blur}px ${color}` : "none";

    pill2.style.fontSize = (capped * 0.78).toFixed(0) + "px";
    pill2.style.opacity = (op * 0.9).toFixed(2);
    pill2.style.fontFamily = family + ", system-ui, sans-serif";

    stage.dataset.layout = layout;

    if (footL) footL.textContent = `${layoutLabel(layout)} · ${fontSize}px · ${(+speed).toFixed(1)}×`;
    if (footR) footR.textContent = t("displayOpacitySuffix", { n: Math.round(opacity) });
  }

  // ─── Backend calls ──────────────────────────────────────────────────

  // 顏色／字型列的「來自主題／主題值未採用」取決於這幾個設定（可改與否、
  // 色盤、只准色盤、字型清單），改完請主題模組重算一次（它會發事件重畫列）。
  const STYLE_SOURCE_KEYS = ["Color", "ViewerColorPicker", "FontFamily"];
  function refreshStyleSource(key) {
    if (!STYLE_SOURCE_KEYS.includes(key)) return;
    if (window.AdminThemes && window.AdminThemes.refresh) window.AdminThemes.refresh();
  }

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
      if (!enabled) delete _state.allowlistEdit[key];
      renderRows();
      refreshStyleSource(key);
      if (key === "ViewerColorPicker") document.querySelector("[data-viewer-color-picker]")?.focus({ preventScroll: true });
      else document.querySelector(`[data-toggle-key="${key}"]`)?.focus({ preventScroll: true });
      const row = ROWS.find((r) => r.key === key);
      const label = key === "ViewerColorPicker" ? t("viewerPaletteAllowPicker") : (row ? t(row.labelKey) : key);
      window.showToast && window.showToast(`${label} ${t("settingsUpdated")}`, true);
    } catch (e) {
      console.warn("[admin-display] toggle failed:", e);
      window.showToast && window.showToast(t("updateFailed"), false);
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
          window.showToast && window.showToast(t("colorFormatError"), false);
          return;
        }
        v = hex.toUpperCase();
      } else if (key === "Opacity" || key === "FontSize" || key === "Speed") {
        v = key === "Speed" ? parseFloat(v) : parseInt(v, 10);
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
      // Light update: refresh the row + preview without full re-render
      // so the open <input> doesn't lose focus.
      refreshRow(key);
      renderPreview();
      refreshStyleSource(key);
    } catch (e) {
      console.warn("[admin-display] update failed:", e);
      window.showToast && window.showToast(t("updateFailed"), false);
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
      refreshStyleSource(key);
      const total = presetValuesFor(key).length || 0;
      const msg = key === "Color" ? t("settingsUpdated") : list.length > 0
        ? t("displayAllowlistToastPartial", { key: key, n: list.length, total: total })
        : t("displayAllowlistToastAll", { key: key });
      if (key !== "Color") window.showToast && window.showToast(msg, true);
      return true;
    } catch (e) {
      console.warn("[admin-display] allowlist failed:", e);
      if (key !== "Color") window.showToast && window.showToast(t("updateFailed"), false);
      return false;
    }
  }

  // Re-render only the value-badge / picker state for one row.
  function refreshRow(key) {
    const row = document.querySelector(`#${PAGE_ID} [data-row-key="${key}"]`);
    if (!row || !_state.options) return;
    const meta = ROWS.find((r) => r.key === key);
    if (!meta) return;
    const opt = _state.options[key] || [false, "", "", ""];
    const def = opt[3];
    const badges = row.querySelector("[data-row-badges]");
    if (badges) badges.innerHTML = labelBadgesHtml(meta);

    // 清單類與主題類整個 picker 重畫（編輯模式的勾選、[編輯]／[套用] 才會同步）；
    // 滑桿走下面的 class 切換，才不會搶走 <input type="number"> 的焦點。
    if (isAllowlistKey(key) || meta.kind === "theme") {
      const pickerHost = row.querySelector("[data-picker-host]");
      if (pickerHost) pickerHost.innerHTML = pickerHtml(meta, opt);
      return;
    }

    if (key === "FontSize") {
      row.querySelectorAll(`[data-chip-key="${key}"]`).forEach((el) => {
        const on = String(el.getAttribute("data-chip-value")) === String(def != null ? def : "");
        el.classList.toggle("is-active", on);
        el.setAttribute("aria-pressed", on ? "true" : "false");
      });
      const bandHost = row.querySelector("[data-band-host]");
      if (bandHost && !bandHost.contains(document.activeElement)) bandHost.innerHTML = rangeBandHtml(meta, opt);
    }
    if (meta.kind === "slider") {
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
      const bandHost = row.querySelector("[data-band-host]");
      if (bandHost && !bandHost.contains(document.activeElement)) bandHost.innerHTML = rangeBandHtml(meta, opt);
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

  // ─── Revert / export ────────────────────────────────────────────────

  function exportSettingsJson() {
    if (!_state.options) {
      window.showToast && window.showToast(t("loading"), false);
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
    window.showToast && window.showToast(t("displayExportDone"), true);
  }

  // 只還原六個有後端旗標的屬性；主題的描邊／陰影由主題自己決定。
  // 目標值是伺服器的出廠預設（DANMU_CONFIG.settingDefaults），數值列的觀眾
  // 範圍是伺服器驗證用的範圍（settingRanges）——兩者都不在前端寫死，送出去
  // 一定落在 /admin/update 接受的範圍內。任何一個請求失敗都停下來報錯，
  // 再重抓一次設定，畫面顯示伺服器上真正的狀態。
  const REVERT_KEYS = ["Opacity", "FontSize", "Speed", "Color", "FontFamily", "Layout"];
  const PICK_KEYS = ["Color", "FontFamily", "Layout"];

  function revertPlan() {
    const defaults = window.DANMU_CONFIG?.settingDefaults || {};
    const ranges = window.DANMU_CONFIG?.settingRanges || {};
    const steps = [];
    for (const key of REVERT_KEYS) {
      const row = defaults[key];
      if (!Array.isArray(row) || row.length < 4) return null;
      steps.push({ url: "/admin/Set", body: { key, enabled: !!row[0] } });
      if (!PICK_KEYS.includes(key)) {
        const r = ranges[key];
        if (!r) return null;
        const clamp = (v) => Math.min(r.max, Math.max(r.min, Number(v)));
        steps.push({ url: "/admin/update", body: { type: key, value: r.min, index: 1 } });
        steps.push({ url: "/admin/update", body: { type: key, value: r.max, index: 2 } });
        steps.push({ url: "/admin/update", body: { type: key, value: clamp(row[3]), index: 3 } });
      } else if (row[3] !== "" && row[3] != null) {
        const value = key === "Color" ? String(row[3]).replace(/^#/, "").toUpperCase() : row[3];
        steps.push({ url: "/admin/update", body: { type: key, value, index: 3 } });
      }
    }
    return steps;
  }

  async function revertDefaults() {
    const ok = await window.HudConfirm?.open({
      icon: "↩",
      title: t("displayRevertConfirmTitle"),
      subtitle: t("cfmSubRevertDefaults"),
      severity: "danger",
      body: t("displayRevertConfirm"),
      confirmLabel: t("displayDeployRevert"),
    });
    if (!ok) return;
    let failed = false;
    try {
      const steps = revertPlan();
      if (!steps) throw new Error("server defaults unavailable");
      for (const step of steps) {
        const res = await window.csrfFetch(step.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(step.body),
        });
        if (!res || !res.ok) throw new Error(`${step.url} ${res ? res.status : "?"}`);
      }
    } catch (e) {
      failed = true;
      console.warn("[admin-display] revert failed:", e);
    }
    await fetchSettings();
    renderRows();
    if (window.AdminThemes && window.AdminThemes.refresh) window.AdminThemes.refresh();
    window.showToast && window.showToast(t(failed ? "updateFailed" : "displayRevertDone"), !failed);
  }

  // ─── Event delegation ───────────────────────────────────────────────
  //
  // 全部委派在區塊外殼上：換語言時內容整份重畫也不會掉 listener。

  function bindPage(page) {
    page.addEventListener("click", (e) => {
      const previewColor = e.target.closest("[data-palette-preview]");
      if (previewColor) { previewPaletteColor(previewColor.dataset.palettePreview); return; }
      const removeColor = e.target.closest("[data-palette-remove]");
      if (removeColor) {
        const colors = paletteColors();
        if (colors.length > 1) {
          const remaining = colors.filter(color => color !== removeColor.dataset.paletteRemove);
          savePalette(remaining, remaining.includes(_state.palettePreview) ? _state.palettePreview : remaining[0]);
        }
        return;
      }
      if (e.target.closest("[data-palette-add]")) {
        const input = page.querySelector("[data-palette-hex]");
        const hex = String(input.value).trim().replace(/^#/, "").toUpperCase();
        if (!/^[0-9A-F]{6}$/.test(hex)) {
          _state.paletteInvalid = true;
          input.setAttribute("aria-invalid", "true");
          paletteFeedback(t("colorFormatError"));
          return;
        }
        const colors = paletteColors();
        if (colors.includes("#" + hex)) { paletteFeedback(t("viewerPaletteDuplicate")); return; }
        if (colors.length < 64) savePalette([...colors, "#" + hex], "#" + hex);
        return;
      }
      const pill = e.target.closest("[data-toggle-key]");
      if (pill) {
        const key = pill.getAttribute("data-toggle-key");
        const cur = !!(_state.options[key] || [])[0];
        postToggle(key, !cur);
        return;
      }

      // 描邊／陰影：使用中主題的覆寫（admin-themes.js 存檔後重抓主題、發事件重畫這兩列）
      const themeOpt = e.target.closest("[data-theme-opt]");
      if (themeOpt) {
        const seg = themeOpt.closest("[data-theme-seg]");
        if (seg && window.AdminThemes && window.AdminThemes.setSeg) {
          window.AdminThemes.setSeg(seg.getAttribute("data-theme-seg"), themeOpt.getAttribute("data-theme-opt"));
        }
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
          _state.allowlistEdit[key] = new Set(cur.length ? cur : presetValuesFor(key));
          refreshRow(key);
          return;
        }
        if (action === "cancel") {
          delete _state.allowlistEdit[key];
          refreshRow(key);
          return;
        }
        if (action === "clear") {
          // "Clear" semantically means "allow all" → POST empty list.
          delete _state.allowlistEdit[key];
          postAllowlist(key, []);
          return;
        }
        if (action === "apply") {
          const set = _state.allowlistEdit[key] || new Set();
          // If admin checked everything, send empty list (= allow all).
          const presets = presetValuesFor(key);
          const list = Array.from(set);
          const allChecked = presets.length > 0 && list.length === presets.length
            && presets.every((v) => set.has(v));
          delete _state.allowlistEdit[key];
          postAllowlist(key, allChecked ? [] : list);
          return;
        }
      }

      // Per-chip allowlist toggle (only in edit mode).
      const allowChip = e.target.closest("[data-allow-key][data-allow-value]");
      if (allowChip) {
        const key = allowChip.getAttribute("data-allow-key");
        const set = _state.allowlistEdit[key];
        if (set) {
          const norm = normalizeAllowValue(key, allowChip.getAttribute("data-allow-value"));
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
        page.querySelectorAll(`[data-chip-key="${key}"]`).forEach((c) => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        postUpdate(key, 3, val);
        return;
      }
      if (e.target.closest("#dsp2-revert")) { revertDefaults(); return; }
      if (e.target.closest("#dsp2-export")) { exportSettingsJson(); return; }
    });

    page.addEventListener("keydown", event => {
      if (event.key === "Enter" && event.target.matches("[data-palette-hex]") && !event.isComposing) {
        event.preventDefault();
        page.querySelector("[data-palette-add]")?.click();
      }
    });

    // Number / range / color inputs
    page.addEventListener("change", (e) => {
      const t1 = e.target;
      if (!t1) return;
      if (t1.matches("[data-viewer-color-picker]")) {
        t1.disabled = true;
        postToggle("ViewerColorPicker", t1.checked);
        return;
      }
      // 觀眾外部圖片 — 走 /admin/viewer-images
      if (t1.closest("[data-vi-toggle]")) { postViewerImages({ enabled: t1.checked }); return; }
      if (t1.closest("[data-vi-ext]")) {
        const picked = Array.from(page.querySelectorAll("[data-vi-ext]"))
          .filter((el) => el.checked)
          .map((el) => el.getAttribute("data-vi-ext"));
        postViewerImages({ extensions: picked });
        return;
      }
      if (t1.id === "viewer-images-hosts") {
        postViewerImages({ hosts: t1.value.split(/[\s,]+/).filter(Boolean) });
        return;
      }
      // Slider commit — POST on `change`
      if (t1.classList && t1.classList.contains("admin-dsp2-range")) {
        postUpdate(t1.getAttribute("data-range-key"), 3, t1.value);
        return;
      }
      const key = t1.getAttribute("data-num-key");
      if (!key) return;
      const idxAttr = t1.getAttribute("data-num-index");
      if (idxAttr === "step") {
        setStep(key, t1.value);
        // Step is client-only — re-render the band so step propagates to siblings.
        const row = t1.closest("[data-row-key]");
        const meta = ROWS.find((r) => r.key === key);
        const host = row && row.querySelector("[data-band-host]");
        if (host && meta) host.innerHTML = rangeBandHtml(meta, _state.options[key] || []);
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
      if (t1.matches("[data-palette-picker]")) {
        _state.paletteDraft = t1.value.toUpperCase();
        _state.paletteInvalid = false;
        const hexInput = page.querySelector("[data-palette-hex]");
        hexInput.value = _state.paletteDraft;
        hexInput.removeAttribute("aria-invalid");
        paletteFeedback("", "success");
        previewPaletteColor(_state.paletteDraft);
        return;
      }
      if (t1.matches("[data-palette-hex]")) {
        _state.paletteDraft = t1.value;
        _state.paletteInvalid = false;
        const hex = t1.value.replace(/^#/, "");
        t1.removeAttribute("aria-invalid");
        paletteFeedback("", "success");
        if (/^[0-9a-fA-F]{6}$/.test(hex)) {
          page.querySelector("[data-palette-picker]").value = "#" + hex;
          previewPaletteColor("#" + hex);
        }
        return;
      }
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
        _state.options[key][idx] = t1.type === "number" ? Number(t1.value) : t1.value;
        renderPreview();
      }
    });
  }

  // ── 顯示層的大螢幕設定 ── 走 /admin/display-layer，與 /admin/update 那組分開。
  function bindLayout(root) {
    root.addEventListener("click", (e) => {
      const step = e.target.closest("[data-dl-step]");
      if (step) {
        const wrap = step.closest("[data-dl-stepper]");
        if (!wrap) return;
        const key = wrap.getAttribute("data-dl-stepper");
        const cur = Number(_dlState[key] ?? 0);
        postDisplayLayer(key, cur + Number(step.getAttribute("data-dl-step")));
        return;
      }
      const opt = e.target.closest("[data-dl-opt]");
      if (opt) {
        const wrap = opt.closest("[data-dl-seg]");
        if (!wrap) return;
        const key = wrap.getAttribute("data-dl-seg");
        const raw = opt.getAttribute("data-dl-opt");
        // safe_area / poll_vote_opacity 是數字、stroke_mode 是字串——後端會擋型別
        const numericSegs = ["safe_area", "poll_vote_opacity"];
        postDisplayLayer(key, numericSegs.indexOf(key) !== -1 ? Number(raw) : raw);
      }
    });

    root.addEventListener("change", (e) => {
      const tg = e.target.closest("[data-dl-toggle]");
      if (tg) { postDisplayLayer(tg.getAttribute("data-dl-toggle"), tg.checked); return; }
      const rg = e.target.closest("[data-dl-range]");
      if (rg) postDisplayLayer(rg.getAttribute("data-dl-range"), Number(rg.value));
    });

    // 拖動時先更新數字，放開才送出——不然每一格都打一次 API
    root.addEventListener("input", (e) => {
      const rg = e.target.closest("[data-dl-range]");
      if (!rg) return;
      const key = rg.getAttribute("data-dl-range");
      const out = root.querySelector(`[data-dl-value="${key}"]`);
      if (out) out.textContent = rg.value + "%";
    });
  }

  // ── 觀眾外部圖片狀態 ──────────────────────────────────────────────────
  //
  // PATCH 只送變動的欄位，伺服器逐欄合併（JsonState.update）。為了讓最後存下
  // 來的一定是使用者最後看到的狀態，寫入一律**單線排隊**：
  //   · 同一時間只有一個 PATCH 在途（_viInFlight）。在途期間的變更合併進
  //     _viPending（同一欄位後蓋前，值都是當下從畫面讀的），前一個完成才送，
  //     所以抵達伺服器的順序就是操作的順序。
  //   · 畫面顯示的是「伺服器確認的狀態 + 在途 + 排隊中」疊起來的結果
  //     （_viEffective），任何回應都不會把還沒確認的操作改回去。
  //   · 任何一個 PATCH 失敗：顯示錯誤、丟掉排在它後面的變更、重抓伺服器狀態
  //     把畫面對齊。被拒的網站清單留在欄位裡讓使用者改。
  //   · GET（初次載入、失敗後對齊）只在沒有任何寫入在途或排隊、而且發出後
  //     使用者沒再動過時才套用。
  //   · 網站欄位另有基準值：上次由伺服器寫進去、或上次送出時的內容。只有欄位
  //     仍等於基準值、不在輸入中、也沒有網站變更在途或排隊時才回填伺服器的
  //     正規化結果——送出 A 後又開始打 B，A 的回應不會把 B 蓋掉。
  let _viState = null;
  let _viInFlight = null;
  let _viPending = {};
  let _viEdits = 0; // 使用者每做一次變更 +1；GET 用它判斷回應是否已過時
  let _viHostsBaseline = ""; // 模板裡的欄位一開始是空的
  const _viHostsText = (state) => ((state && state.hosts) || []).join("\n");

  function _viEffective() {
    return Object.assign({}, _viState || {}, _viInFlight || {}, _viPending);
  }

  function renderViewerImages() {
    const page = document.getElementById(PAGE_ID);
    if (!page || !_viState) return;
    const view = _viEffective();
    const toggle = page.querySelector("[data-vi-toggle]");
    if (toggle) toggle.checked = !!view.enabled;
    _viShowRows(page, !!view.enabled);
    const hosts = page.querySelector("#viewer-images-hosts");
    const hostsUnconfirmed = (_viInFlight && "hosts" in _viInFlight) || "hosts" in _viPending;
    if (hosts && !hostsUnconfirmed && document.activeElement !== hosts
        && hosts.value === _viHostsBaseline) {
      hosts.value = _viHostsText(_viState);
      _viHostsBaseline = hosts.value;
    }
    const exts = view.extensions || [];
    page.querySelectorAll("[data-vi-ext]").forEach((el) => {
      el.checked = exts.indexOf(el.getAttribute("data-vi-ext")) !== -1;
    });
  }

  function _viShowRows(page, on) {
    page.querySelectorAll("[data-vi-row]").forEach((row) => {
      row.style.display = on ? "" : "none";
    });
  }

  async function _viSend(doFetch) {
    try {
      const res = await doFetch();
      let body = null;
      try { body = await res.json(); } catch (_) { body = null; }
      return { ok: !!(res.ok && body), body };
    } catch (e) {
      console.warn("[admin-display] viewer-images request failed:", e);
      return { ok: false, body: null };
    }
  }

  async function fetchViewerImages() {
    const editsAtStart = _viEdits;
    const result = await _viSend(() => fetch("/admin/viewer-images", { credentials: "same-origin" }));
    const idle = !_viInFlight && !Object.keys(_viPending).length;
    if (result.ok && idle && editsAtStart === _viEdits) {
      _viState = result.body;
      renderViewerImages();
    }
  }

  function _viErrorMessage(body) {
    const code = body && body.code;
    if (code === "invalid_host") return t("viErrInvalidHost", { host: String(body.detail || "") });
    if (code === "too_many_hosts") return t("viErrTooManyHosts", { max: body.max });
    return t("updateFailed");
  }

  function postViewerImages(patch) {
    _viEdits += 1;
    const hostsField = document.getElementById("viewer-images-hosts");
    if ("hosts" in patch && hostsField) _viHostsBaseline = hostsField.value;
    if ("enabled" in patch) {
      const page = document.getElementById(PAGE_ID);
      if (page) _viShowRows(page, !!patch.enabled); // 樂觀顯示
    }
    Object.assign(_viPending, patch);
    if (!_viInFlight) _viFlush();
  }

  async function _viFlush() {
    if (_viInFlight || !Object.keys(_viPending).length) return;
    const patch = _viPending;
    _viPending = {};
    _viInFlight = patch;
    const result = await _viSend(() => window.csrfFetch("/admin/viewer-images", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    }));
    _viInFlight = null;
    if (result.ok) {
      _viState = result.body;
      renderViewerImages(); // 排隊中的變更疊在上面，不會被改回去
      _viFlush();
      return;
    }
    // 失敗：排在後面的變更是疊在這次失敗之上的，一併丟掉，重抓伺服器狀態對齊。
    const dropped = _viPending;
    _viPending = {};
    window.showToast && window.showToast(_viErrorMessage(result.body), false);
    // 被拒的網站清單留在欄位裡讓使用者改：基準值設成不可能相等，之後的回應
    // 都不會回填，直到他再送出一次。
    if ("hosts" in patch || "hosts" in dropped) _viHostsBaseline = null;
    renderViewerImages(); // 先回到最後一次確認過的狀態，重抓的結果回來再對齊
    fetchViewerImages();
  }

  // ── 顯示層排版狀態 ────────────────────────────────────────────────────
  let _dlState = {};

  function renderDisplayLayer() {
    const page = document.getElementById(LAYOUT_ID);
    if (!page) return;
    Object.entries(_dlState).forEach(([key, val]) => {
      const out = page.querySelector(`[data-dl-value="${key}"]`);
      if (out) {
        out.textContent = key === "max_tracks"
          ? (Number(val) === 0 ? t("dlMaxTracksAuto") : String(val))
          : String(val) + "%";
      }
      const rg = page.querySelector(`[data-dl-range="${key}"]`);
      if (rg && document.activeElement !== rg) rg.value = String(val);
      const tg = page.querySelector(`[data-dl-toggle="${key}"]`);
      if (tg) tg.checked = !!val;
      const seg = page.querySelector(`[data-dl-seg="${key}"]`);
      if (seg) {
        seg.querySelectorAll("[data-dl-opt]").forEach((b) => {
          const on = b.getAttribute("data-dl-opt") === String(val);
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-pressed", on ? "true" : "false");
        });
      }
    });
  }

  async function fetchDisplayLayer() {
    try {
      const res = await fetch("/admin/display-layer", { credentials: "same-origin" });
      if (!res.ok) return;
      _dlState = await res.json();
      renderDisplayLayer();
    } catch (e) {
      console.warn("[admin-display] display-layer fetch failed:", e);
    }
  }

  async function postDisplayLayer(key, value) {
    const prev = _dlState[key];
    _dlState[key] = value;          // 樂觀更新——滑桿不該等 round-trip 才動
    renderDisplayLayer();
    try {
      const res = await window.csrfFetch("/admin/display-layer", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [key]: value }),
      });
      if (!res.ok) throw new Error("display-layer " + res.status);
      _dlState = await res.json();
      renderDisplayLayer();
    } catch (e) {
      _dlState[key] = prev;         // 打回原值，不要留下「畫面說改了但其實沒有」
      renderDisplayLayer();
      console.warn("[admin-display] display-layer update failed:", e);
      window.showToast && window.showToast(t("updateFailed"), false);
    }
  }

  // 「發送與內容限制」的數字從 /admin/metrics 拉。**必須是邊緣觸發**
  // （syncVisibility 的 _viewerEntered）：這個函式自己會寫 textContent，也就是
  // 自己製造下一次 mutation，水平觸發會變成自我維持的 fetch 迴圈。
  let _limitsInFlight = false;
  async function _hydrateLimitsTab() {
    const root = document.getElementById("sec-viewer-config-limits");
    if (!root || _limitsInFlight) return;
    _limitsInFlight = true;
    const set = (sel, val) => {
      const el = root.querySelector(sel);
      if (el) el.textContent = val == null ? "—" : String(val);
    };
    try {
      const r = await fetch("/admin/metrics", { credentials: "same-origin" });
      if (!r.ok) return;
      const body = await r.json();
      const fire = (body.rate_limits && body.rate_limits.fire) || {};
      const totals = (body.rate_limits && body.rate_limits.totals) || {};
      // 2026-05-19 (PR review): pull config from rate_limit_config
      // instead of hard-coding. Old responses (pre-config-injection
      // server) fall back to per-deployment defaults.
      const cfg = (body.rate_limit_config && body.rate_limit_config.fire) || {};
      const uptime = Math.max(
        1,
        (body.server_time || 0) - (body.server_started_at || 0)
      );
      // Rate limits — `fire` scope drives the visible per-FP limit.
      // Global/burst/cooldown don't have their own config keys yet,
      // so render "—" rather than mislead with hardcoded numbers.
      set("[data-vc-rate-fp]", cfg.limit || "—");
      set("[data-vc-rate-global]", "—");
      set("[data-vc-rate-burst]", "—");
      set("[data-vc-rate-cooldown]", cfg.window || "—");
      // Content limits — text max from validation.py is 100. Surface
      // as "—" until exposed via a config endpoint to avoid drift.
      set("[data-vc-msg-len]", 100);
      set("[data-vc-nick-len]", "—");
      set("[data-vc-dedup]", "—");
      // Current session strip — live counter data, fine to compute
      const avgRate = (fire.hits || 0) / uptime;
      set("[data-vc-avg-rate]", avgRate.toFixed(2) + "/s");
      set("[data-vc-throttled]", fire.violations || 0);
      set("[data-vc-blocked]", totals.locked_sources || 0);
      set("[data-vc-deduped]", 0);  // dedup counter not yet emitted
    } catch (_) {
      // network error — keep "—" placeholders, no toast spam
    } finally {
      _limitsInFlight = false;
    }
  }

  // ─── Visibility / lifecycle ─────────────────────────────────────────
  //
  // 顯示與隱藏全交給 router（ADMIN_ROUTES 的 sections）；這個模組只負責
  // 注入、排序、換語言重畫，以及進入彈幕樣式頁時重抓一次設定。

  function hideLegacy() {
    LEGACY_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute("data-admin-ui-replaced", "1");
    });
  }

  function _isViewerRoute() {
    const shell = document.querySelector(".admin-dash-grid");
    return !!shell && shell.dataset.activeRoute === "viewer";
  }

  // 各區塊晚到才注入，注入順序不等於畫面順序。只在順序不對時才搬，
  // MutationObserver 才不會因此一直重跑。
  function orderViewerSections() {
    let prev = null;
    VIEWER_ORDER.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (prev && prev.parentElement === el.parentElement && prev.nextElementSibling !== el) prev.after(el);
      prev = el;
    });
  }

  // 只切語言不重新載入時，兩個區塊整份照新語言重畫：模板裡的字串都是渲染
  // 時才 t() 的，逐個補 data-i18n 會漏。事件委派在外殼上，換掉內容不會掉
  // listener；顯示層收合區的展開狀態照舊。
  let _renderedLang = null;
  function relocalize() {
    const lang = window.ServerI18n && window.ServerI18n.currentLang;
    if (!lang || lang === _renderedLang) return;
    const first = _renderedLang === null;
    _renderedLang = lang;
    if (first) return;
    const tmp = document.createElement("div");
    const page = document.getElementById(PAGE_ID);
    if (page) {
      tmp.innerHTML = pageTemplate();
      page.replaceChildren(...tmp.firstElementChild.childNodes);
      renderRows();
      _viHostsBaseline = ""; // 模板重畫後網站欄位是空的
      renderViewerImages();
    }
    const layout = document.getElementById(LAYOUT_ID);
    if (layout) {
      const wasOpen = layout.open;
      tmp.innerHTML = layoutTemplate();
      layout.replaceChildren(...tmp.firstElementChild.childNodes);
      layout.open = wasOpen;
      renderDisplayLayer();
    }
  }

  // 邊緣觸發：只在「進入彈幕樣式頁」那一刻做一次，離開時重置。syncVisibility
  // 掛在 subtree MutationObserver 上，而這裡做的事本身就會改 DOM，水平觸發
  // 會變成自我維持的 fetch 迴圈（實測 6 秒 26 次，被自己的限流擋成 429）。
  let _viewerEntered = false;
  function syncVisibility() {
    relocalize();
    if (!_isViewerRoute()) { _viewerEntered = false; return; }
    orderViewerSections();
    if (_viewerEntered) return;
    _viewerEntered = true;
    _hydrateLimitsTab();
    // 「效果」列的開關讀的是動畫效果頁的總開關；從那頁切回來要看到新值。
    if (_state.options) fetchSettings().then(renderRows);
    // 字型在字型頁停用／刪除後，主題字型會變成「未採用」——回到這頁時重算。
    if (window.AdminThemes && window.AdminThemes.refresh) window.AdminThemes.refresh();
  }

  // 「發送與內容限制」：唯讀的數字摘要，速率限制的編輯器在審核 › 發送上限。
  function _initLimitsPanel() {
    if (document.getElementById(LIMITS_ID)) return; // idempotent
    const grid = document.getElementById("settings-grid");
    if (!grid) return;
    // v5 IA (2026-05-19): Limits tab redesigned per Batch 11 viewer-4tab
    // canvas — two cards (RATE LIMITS amber dot · CONTENT LIMITS cyan dot)
    // each with 4 numeric rows + hint copy, plus a span-2 status strip
    // showing this-session AVG RATE / THROTTLED / BLOCKED / DEDUP. The
    // numeric values are read-only summaries; the rate side links out to
    // #/ratelimit (which owns the actual editor + audit trail), and the
    // content side will gain inline editors once SettingUpdateSchema is
    // extended (BE TODO — see ratelimit/audience briefs).
    // v8（2026-08-19 設計稿 07）：第二參數 en 不再渲染——第一參數已經是
    // 中文標籤，再擺一行 PER FP / MIN 是同一件事說兩次。參數保留在簽章裡
    // （十幾個呼叫點都在傳），只是不輸出。
    function _vcLimitRow(label, en, value, unit, hint, danger) {
      const valColor = danger ? "var(--color-crimson, #f87171)" : "var(--color-text-strong)";
      return (
        '<div class="admin-vc-limit-row">' +
          '<div class="admin-vc-limit-row__label">' +
            '<div class="admin-vc-limit-row__zh">' + label + '</div>' +
          '</div>' +
          '<div class="admin-vc-limit-row__value" style="color:' + valColor + '">' +
            value +
            '<span class="admin-vc-limit-row__unit">' + (unit || "") + '</span>' +
          '</div>' +
          (hint ? '<div class="admin-vc-limit-row__hint">' + hint + '</div>' : '') +
        '</div>'
      );
    }

    const limitsPanel = document.createElement("details");
    limitsPanel.id = LIMITS_ID;
    limitsPanel.className = "admin-dsp2-fold lg:col-span-2";
    limitsPanel.innerHTML =
      '<summary class="admin-ui-page-title">' + escapeHtml(t("viewerLimitsFoldTitle")) + '</summary>' +
      '<div class="admin-vc-limits-grid">' +
      // ── Rate Limits card ───────────────────────────────────────
      '<div class="admin-vc-limit-card">' +
        '<div class="admin-vc-limit-card__head">' +
          '<span class="admin-vc-limit-card__dot is-amber"></span>' +
          '<span class="admin-vc-limit-card__zh">' + escapeHtml(t("displayRateLimitsTitle")) + '</span>' +
          '<a href="#/ratelimit" class="admin-vc-limit-card__edit">' + escapeHtml(t("displayEditLink")) + '</a>' +
        '</div>' +
        _vcLimitRow(escapeHtml(t("displayRateFpLabel")), "PER FP / MIN", '<span data-vc-rate-fp>—</span>', escapeHtml(t("displayRateFpUnit")), escapeHtml(t("displayRateFpHint"))) +
        _vcLimitRow(escapeHtml(t("displayRateGlobalLabel")), "GLOBAL / SEC", '<span data-vc-rate-global>—</span>', "/s", escapeHtml(t("displayRateGlobalHint"))) +
        _vcLimitRow(escapeHtml(t("displayRateBurstLabel")), "BURST WINDOW", '<span data-vc-rate-burst>—</span>', escapeHtml(t("displayRateBurstUnit")), escapeHtml(t("displayRateBurstHint"))) +
        _vcLimitRow(escapeHtml(t("displayRateCooldownLabel")), "COOLDOWN", '<span data-vc-rate-cooldown>—</span>', "s", escapeHtml(t("displayRateCooldownHint"))) +
        '<div class="admin-vc-limit-card__foot">' +
          '⚠ ' + escapeHtml(t("displayRateLimitsFooter")) +
        '</div>' +
      '</div>' +

      // ── Content Limits card ────────────────────────────────────
      '<div class="admin-vc-limit-card">' +
        '<div class="admin-vc-limit-card__head">' +
          '<span class="admin-vc-limit-card__dot is-cyan"></span>' +
          '<span class="admin-vc-limit-card__zh">' + escapeHtml(t("displayContentLimitsTitle")) + '</span>' +
        '</div>' +
        _vcLimitRow(escapeHtml(t("displayMsgLenLabel")), "MAX LENGTH", '<span data-vc-msg-len>—</span>', escapeHtml(t("displayMsgLenUnit")), escapeHtml(t("displayMsgLenHint"))) +
        _vcLimitRow(escapeHtml(t("displayNickLenLabel")), "NICK MAX", '<span data-vc-nick-len>—</span>', escapeHtml(t("displayNickLenUnit")), escapeHtml(t("displayNickLenHint"))) +
        _vcLimitRow(escapeHtml(t("displayDedupLabel")), "DEDUP WINDOW", '<span data-vc-dedup>—</span>', "s", escapeHtml(t("displayDedupHint"))) +
        _vcLimitRow(escapeHtml(t("displayProfanityLabel")), "PROFANITY ACTION", '<span data-vc-profanity>' + escapeHtml(t("displayProfanityDefaultValue")) + '</span>', "", escapeHtml(t("displayProfanityHint"))) +
        '<div class="admin-vc-limit-card__deferred">' +
          '<div class="admin-vc-limit-card__deferred-row">' +
            '<span>' + escapeHtml(t("displayAttachmentLimitLabel")) + '</span>' +
            '<span class="admin-vc-limit-card__deferred-tag">' + escapeHtml(t("displayComingSoonTag")) + '</span>' +
          '</div>' +
          '<div class="admin-vc-limit-card__deferred-row">' +
            '<span>' + escapeHtml(t("displayLinkDetectionLabel")) + '</span>' +
            '<span class="admin-vc-limit-card__deferred-tag">' + escapeHtml(t("displayComingSoonTag")) + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +

      // ── Current session strip (span 2 columns) ────────────────
      '<div class="admin-vc-limit-status">' +
        '<span class="admin-vc-limit-status__label">' + ServerI18n.t("lbCurrentSession") + '</span>' +
        '<div class="admin-vc-limit-status__metric">' +
          '' +
          '<span class="admin-vc-limit-status__metric-val" data-vc-avg-rate>—</span>' +
        '</div>' +
        '<div class="admin-vc-limit-status__metric">' +
          '' +
          '<span class="admin-vc-limit-status__metric-val is-amber" data-vc-throttled>—</span>' +
        '</div>' +
        '<div class="admin-vc-limit-status__metric">' +
          '' +
          '<span class="admin-vc-limit-status__metric-val is-crimson" data-vc-blocked>—</span>' +
        '</div>' +
        '<div class="admin-vc-limit-status__metric">' +
          '' +
          '<span class="admin-vc-limit-status__metric-val is-mute" data-vc-deduped>—</span>' +
        '</div>' +
        '<span class="admin-vc-limit-status__spacer"></span>' +
        '<a href="#/audit" class="admin-vc-limit-status__detail">' + escapeHtml(t("displayAuditLogLink")) + '</a>' +
      '</div>' +
      '</div>';

    grid.appendChild(limitsPanel);
    orderViewerSections();
  }

  async function inject() {
    const grid = document.getElementById("settings-grid");
    if (!grid) return;
    let fresh = false;
    if (!document.getElementById(PAGE_ID)) {
      grid.insertAdjacentHTML("beforeend", pageTemplate());
      bindPage(document.getElementById(PAGE_ID));
      fresh = true;
    }
    if (!document.getElementById(LAYOUT_ID)) {
      grid.insertAdjacentHTML("beforeend", layoutTemplate());
      bindLayout(document.getElementById(LAYOUT_ID));
      fresh = true;
    }
    hideLegacy();
    _initLimitsPanel();
    syncVisibility();
    if (!fresh) return;
    if (!_state.options) await Promise.all([fetchSettings(), fetchFonts()]);
    fetchDisplayLayer();
    fetchViewerImages();
    renderRows();
  }

  function boot() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    const observer = new MutationObserver(() => {
      if (document.getElementById("settings-grid")
          && (!document.getElementById(PAGE_ID) || !document.getElementById(LAYOUT_ID))) {
        inject();
      } else {
        hideLegacy();
      }
      syncVisibility();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("hashchange", syncVisibility);
    document.addEventListener("admin-route-applied", syncVisibility);
    document.addEventListener("admin-panel-rendered", inject);
    // 套用主題、改描邊／陰影之後，主題模組重抓完會發這個事件。
    document.addEventListener("admin-themes-changed", () => {
      refreshRow("stroke");
      refreshRow("shadow");
      refreshRow("Color");
      refreshRow("FontFamily");
      renderPreview();
    });
    inject();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
