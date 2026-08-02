/**
 * Admin · Viewer Theme page (extracted from admin.js 2026-04-28
 * Group D-3 split, third pass).
 *
 * Owns sec-viewer-theme — controls /fire page chrome (bg / primary /
 * hero / mode / logo / UI font). Independent from Theme Packs (彈幕
 * themes); shows up under the top-level Viewer route.
 *
 * Mirrors prototype admin-viewer-theme.jsx. Client-side state via
 * localStorage(danmu.viewerTheme.v1); backend persistence pending
 * (backlog P0-2).
 *
 * Renders into #settings-grid on `admin-panel-rendered`. Fully
 * self-contained: PRESETS / WCAG helpers / event wiring all here.
 *
 * Globals: showToast (optional).
 */
(function () {
  "use strict";

  const SECTION_ID = "sec-viewer-theme";
  const STORAGE = "danmu.viewerTheme.v1";

  // D-4：name 是模組頂層常數（parse 時 ServerI18n 尚未 init），存 nameKey，
  // renderPresets() 渲染時才解析。bg/primary/hero/mode/font 是 CSS 值 / 契約
  // 字面，語言中立，不搬。
  const PRESETS = [
    { id: "default",  nameKey: "viewerThemePresetDefaultName",  bg: "#050910", primary: "#7DD3FC", hero: "#FCD34D", mode: "dark",  font: "Zen Kaku Gothic New" },
    { id: "daylight", nameKey: "viewerThemePresetDaylightName", bg: "#F8FAFC", primary: "#0284C7", hero: "#D97706", mode: "light", font: "Zen Kaku Gothic New" },
    { id: "cinema",   nameKey: "viewerThemePresetCinemaName",   bg: "#0A0A0F", primary: "#FBBF24", hero: "#FCD34D", mode: "dark",  font: "Chakra Petch" },
    { id: "retro",    nameKey: "viewerThemePresetRetroName",    bg: "#1A1511", primary: "#FB923C", hero: "#FDE68A", mode: "dark",  font: "Bebas Neue" },
  ];

  function _renderHtml() {
    return `
      <div id="${SECTION_ID}" class="admin-vt-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">VIEWER PAGE THEME · SCOPE</div>
          <div class="admin-ui-page-title">${ServerI18n.t("viewerThemePageTitle")}</div>
          <p class="admin-ui-page-note">${ServerI18n.t("viewerThemePageNote")}</p>
        </div>

        <div class="admin-vt-grid">
          <div class="admin-vt-controls">
            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">${ServerI18n.t("viewerThemePresetsTitle")}</span><span class="kicker">PRESETS</span></div>
              <div class="admin-vt-presets" data-vt-presets></div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">${ServerI18n.t("viewerThemePreviewModeTitle")}</span><span class="kicker">PREVIEW MODE · ${ServerI18n.t("viewerThemePreviewModeKickerNote")}</span></div>
              <div class="admin-vt-mode" data-vt-mode>
                <button type="button" data-vt-mode-btn="dark"><span class="icon">◐</span><span class="lbl">${ServerI18n.t("viewerThemeModeDark")}</span><span class="sub">DARK</span></button>
                <button type="button" data-vt-mode-btn="light"><span class="icon">☼</span><span class="lbl">${ServerI18n.t("viewerThemeModeLight")}</span><span class="sub">LIGHT</span></button>
                <button type="button" data-vt-mode-btn="auto"><span class="icon">◑</span><span class="lbl">${ServerI18n.t("viewerThemeModeAuto")}</span><span class="sub">AUTO</span></button>
              </div>
            </div>

            <!-- 2026-05-16: VIEWER FORCE OVERRIDE — pushes to backend.
                 Audience /fire follows prefers-color-scheme + navigator.language
                 by default; admin can force theme + language from here. The
                 in-viewer toggles were removed, so this card is the only
                 way to override. -->
            <div class="admin-vt-card admin-vt-force">
              <div class="admin-vt-card-head">
                <span class="title">${ServerI18n.t("viewerThemeForceOverrideTitle")}</span>
                <span class="kicker">VIEWER FORCE OVERRIDE · ${ServerI18n.t("viewerThemeForceOverrideKickerNote")}</span>
              </div>
              <div class="admin-vt-force-row">
                <div class="admin-vt-force-label">
                  <span class="title">${ServerI18n.t("viewerThemeForceThemeLabel")}</span>
                  <span class="kicker">THEME MODE · ${ServerI18n.t("viewerThemeThemeModeKickerNote")}</span>
                </div>
                <div class="admin-vt-mode" data-vt-theme-force>
                  <button type="button" data-vt-theme-btn="auto"><span class="icon">◑</span><span class="lbl">${ServerI18n.t("viewerThemeModeAuto")}</span><span class="sub">AUTO</span></button>
                  <button type="button" data-vt-theme-btn="force-light"><span class="icon">☼</span><span class="lbl">${ServerI18n.t("viewerThemeForceLight")}</span><span class="sub">FORCE LIGHT</span></button>
                  <button type="button" data-vt-theme-btn="force-dark"><span class="icon">◐</span><span class="lbl">${ServerI18n.t("viewerThemeForceDark")}</span><span class="sub">FORCE DARK</span></button>
                </div>
              </div>
              <div class="admin-vt-force-row">
                <div class="admin-vt-force-label">
                  <span class="title">${ServerI18n.t("viewerThemeForceLangLabel")}</span>
                  <span class="kicker">LANGUAGE MODE · ${ServerI18n.t("viewerThemeLangModeKickerNote")}</span>
                </div>
                <div class="admin-vt-mode" data-vt-lang-force>
                  <button type="button" data-vt-lang-btn="auto"><span class="icon">⌬</span><span class="lbl">${ServerI18n.t("viewerThemeFollowBrowser")}</span><span class="sub">AUTO</span></button>
                  <!-- D-4：語言自稱名（繁體中文／English／日本語／한국어）是語言選擇器
                       慣例——用該語言自身文字呈現，不隨 admin UI 語言翻譯，不搬。icon
                       字符（中/EN/日/한）同理，維持原樣。 -->
                  <button type="button" data-vt-lang-btn="force-zh"><span class="icon">中</span><span class="lbl">繁體中文</span><span class="sub">FORCE ZH</span></button>
                  <button type="button" data-vt-lang-btn="force-en"><span class="icon">EN</span><span class="lbl">English</span><span class="sub">FORCE EN</span></button>
                  <button type="button" data-vt-lang-btn="force-ja"><span class="icon">日</span><span class="lbl">日本語</span><span class="sub">FORCE JA</span></button>
                  <button type="button" data-vt-lang-btn="force-ko"><span class="icon">한</span><span class="lbl">한국어</span><span class="sub">FORCE KO</span></button>
                </div>
              </div>
              <div class="admin-vt-force-note">
                <span class="kicker">BOUNDARY</span>
                <p>${ServerI18n.t("viewerThemeForceBoundaryNote")}</p>
              </div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">${ServerI18n.t("viewerThemeColorsTitle")}</span><span class="kicker">COLORS · BG / PRIMARY / HERO</span></div>
              <div class="admin-vt-color-rows" data-vt-colors></div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">LOGO</span><span class="kicker">LOGO · ${ServerI18n.t("viewerThemeLogoKickerSpec")}</span></div>
              <label class="admin-vt-logo-drop" data-vt-logo-drop>
                <span class="hint-empty">${ServerI18n.t("viewerThemeLogoDropHint")}<br><small>${ServerI18n.t("viewerThemeLogoDropHintSmall")}</small></span>
                <img class="hint-preview" hidden data-vt-logo-preview alt="logo" />
                <input type="file" accept="image/png,image/jpeg" hidden data-vt-logo-input />
              </label>
              <div class="admin-vt-logo-actions" hidden data-vt-logo-actions>
                <button type="button" data-vt-logo-remove>${ServerI18n.t("viewerThemeLogoRemove")}</button>
              </div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">${ServerI18n.t("viewerThemeFontTitle")}</span><span class="kicker">UI FONT · ${ServerI18n.t("viewerThemeFontKickerNote")}</span></div>
              <select data-vt-font>
                <option value="Zen Kaku Gothic New">Zen Kaku · ${ServerI18n.t("viewerThemeFontDescDefault")}</option>
                <option value="Noto Sans TC">Noto Sans TC · ${ServerI18n.t("viewerThemeFontDescNotoTC")}</option>
                <option value="Chakra Petch">Chakra Petch · ${ServerI18n.t("viewerThemeFontDescChakra")}</option>
                <option value="Bebas Neue">Bebas Neue · ${ServerI18n.t("viewerThemeFontDescBebas")}</option>
                <option value="IBM Plex Mono">IBM Plex Mono · ${ServerI18n.t("viewerThemeFontDescMono")}</option>
                <option value="system-ui">System UI · ${ServerI18n.t("viewerThemeFontDescSystem")}</option>
              </select>
              <div class="admin-vt-font-specimen" data-vt-font-specimen>${ServerI18n.t("viewerThemeFontSpecimen")}</div>
            </div>

            <div class="admin-vt-persist">
              <button type="button" class="admin-ui-action admin-vt-reset" data-vt-action="reset">${ServerI18n.t("viewerThemeResetBtn")}</button>
            </div>
          </div>

          <div class="admin-vt-preview">
            <div class="admin-vt-preview-head">
              <span class="kicker">LIVE PREVIEW · /fire</span>
              <div class="admin-vt-device" data-vt-device>
                <button type="button" data-vt-device-btn="desktop" class="is-active">${ServerI18n.t("viewerThemeDeviceDesktop")}</button>
                <button type="button" data-vt-device-btn="tablet">${ServerI18n.t("viewerThemeDeviceTablet")}</button>
                <button type="button" data-vt-device-btn="mobile">${ServerI18n.t("viewerThemeDeviceMobile")}</button>
              </div>
            </div>
            <div class="admin-vt-contrast" data-vt-contrast></div>
            <div class="admin-vt-preview-frame" data-vt-frame>
              <div class="admin-vt-preview-stage" data-vt-stage>
                <div class="hero">
                  <div class="logo" data-vt-preview-logo>DANMU FIRE</div>
                  <!-- D-4 REUSED：這是 /fire 頁面的 live 標語逐字重現於預覽卡片，
                       語意完全相同——直接複用既有 mainSubtitle key，不另開新 key。 -->
                  <p class="subtitle">${ServerI18n.t("mainSubtitle")}</p>
                  <span class="admin-ui-chip admin-vt-preview-status"><span class="dot"></span>CONNECTED · LIVE</span>
                </div>
                <div class="stream">
                  <span class="row"><b>@guest</b><span>${ServerI18n.t("viewerThemeDemoMsgGuest")}</span></span>
                  <span class="row"><b>@alice</b><span>${ServerI18n.t("viewerThemeDemoMsgAlice")}</span></span>
                  <span class="row self"><b>@${ServerI18n.t("viewerThemeDemoYouLabel")}</b><span>${ServerI18n.t("viewerThemeDemoMsgYou")}</span></span>
                </div>
                <div class="composer">
                  <input type="text" placeholder="${ServerI18n.t("viewerThemeComposerPlaceholder")}" disabled />
                  <button type="button">FIRE ▶</button>
                </div>
              </div>
            </div>

            <div class="admin-viewer-theme-legend" data-vt-legend>
              <div class="admin-viewer-theme-legend-head">
                <span class="title">${ServerI18n.t("viewerThemeLegendTitle")}</span>
                <span class="kicker">OUT OF SCOPE · ${ServerI18n.t("viewerThemeLegendKickerNote")}</span>
              </div>
              <div class="admin-viewer-theme-legend-rows">
                <button type="button" class="admin-viewer-theme-legend-row" data-vt-jump="themes">
                  <span class="k">${ServerI18n.t("viewerThemeLegendRowThemePacks")}</span>
                  <span class="v">↗ Theme Packs</span>
                </button>
                <button type="button" class="admin-viewer-theme-legend-row" data-vt-jump="display">
                  <span class="k">${ServerI18n.t("viewerThemeLegendRowDisplay")}</span>
                  <span class="v">↗ Display Settings</span>
                </button>
                <button type="button" class="admin-viewer-theme-legend-row" data-vt-jump="effects">
                  <span class="k">${ServerI18n.t("viewerThemeLegendRowEffects")}</span>
                  <span class="v">↗ Effects</span>
                </button>
                <button type="button" class="admin-viewer-theme-legend-row" data-vt-jump="ratelimit">
                  <span class="k">${ServerI18n.t("viewerThemeLegendRowModeration")}</span>
                  <span class="v">↗ Moderation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function _wire(root) {
    let state = { ...PRESETS[0], logo: null };
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) state = { ...state, ...JSON.parse(raw) };
    } catch (_) { /* */ }
    let presetId = "default";

    function persist() { try { localStorage.setItem(STORAGE, JSON.stringify(state)); } catch (_) { /* */ } }

    function hex2rgb(h) {
      const m = /^#?([0-9a-f]{6})$/i.exec(h);
      if (!m) return [0, 0, 0];
      const n = parseInt(m[1], 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }
    function relLum([r, g, b]) {
      const c = [r, g, b].map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
      return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
    }
    function contrast(a, b) {
      const la = relLum(hex2rgb(a)); const lb = relLum(hex2rgb(b));
      const [hi, lo] = la > lb ? [la, lb] : [lb, la];
      return (hi + 0.05) / (lo + 0.05);
    }
    function cGrade(ratio) {
      if (ratio >= 7) return { label: "AAA", cls: "is-good" };
      if (ratio >= 4.5) return { label: "AA",  cls: "is-ok" };
      if (ratio >= 3)   return { label: "AA/LG", cls: "is-meh" };
      return { label: "FAIL", cls: "is-fail" };
    }

    function renderPresets() {
      const box = root.querySelector("[data-vt-presets]");
      box.innerHTML = "";
      PRESETS.forEach(p => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "admin-vt-preset" + (presetId === p.id ? " is-active" : "");
        btn.innerHTML = `
          <div class="swatch" style="background:${p.bg}">
            <span style="background:${p.primary}"></span>
            <span style="background:${p.hero}"></span>
          </div>
          <div class="name">${ServerI18n.t(p.nameKey)}</div>
          <div class="mode">${p.mode.toUpperCase()}</div>
        `;
        btn.addEventListener("click", () => { state = { ...state, ...p }; presetId = p.id; persist(); render(); });
        box.appendChild(btn);
      });
    }

    function renderMode() {
      root.querySelectorAll("[data-vt-mode-btn]").forEach(b => {
        b.classList.toggle("is-active", state.mode === b.dataset.vtModeBtn);
      });
    }

    function renderColors() {
      const box = root.querySelector("[data-vt-colors]");
      const fg = state.mode === "dark" ? "#F8FAFC" : "#0F172A";
      // D-4：label/vsLbl 是函式內建構（每次 render 呼叫），可直接 t()；
      // en 欄位維持全大寫 EN 設計標籤（BG/PRIMARY/HERO），不搬。
      const rows = [
        { key: "bg",      label: ServerI18n.t("viewerThemeColorLabelBg"),      en: "BG",      vs: fg,       vsLbl: ServerI18n.t("viewerThemeColorLabelText") },
        { key: "primary", label: ServerI18n.t("viewerThemeColorLabelPrimary"), en: "PRIMARY", vs: state.bg, vsLbl: ServerI18n.t("viewerThemeColorLabelBg") },
        { key: "hero",    label: ServerI18n.t("viewerThemeColorLabelHero"),    en: "HERO",    vs: state.bg, vsLbl: ServerI18n.t("viewerThemeColorLabelBg") },
      ];
      box.innerHTML = rows.map(r => {
        const ratio = contrast(state[r.key], r.vs);
        const g = cGrade(ratio);
        return `
          <div class="admin-vt-color-row">
            <div class="swatch" style="background:${state[r.key]}"></div>
            <div class="meta">
              <div class="top">
                <span class="label">${r.label}</span>
                <span class="kicker">${r.en}</span>
                <span class="grade ${g.cls}">${g.label} · ${ratio.toFixed(1)}</span>
              </div>
              <div class="bottom">
                <input type="color" value="${state[r.key]}" data-vt-color="${r.key}" />
                <input type="text" value="${state[r.key]}" data-vt-hex="${r.key}" spellcheck="false" />
                <span class="vs">vs ${r.vsLbl}</span>
              </div>
            </div>
          </div>`;
      }).join("");
    }

    function renderLogo() {
      const preview = root.querySelector("[data-vt-logo-preview]");
      const hint = root.querySelector(".hint-empty");
      const actions = root.querySelector("[data-vt-logo-actions]");
      if (state.logo) {
        preview.src = state.logo;
        preview.hidden = false;
        hint.style.display = "none";
        actions.hidden = false;
      } else {
        preview.hidden = true;
        hint.style.display = "";
        actions.hidden = true;
      }
    }

    function renderFont() {
      const sel = root.querySelector("[data-vt-font]");
      sel.value = state.font;
      const spec = root.querySelector("[data-vt-font-specimen]");
      spec.style.fontFamily = state.font;
    }

    function renderContrast() {
      const fg = state.mode === "dark" ? "#F8FAFC" : "#0F172A";
      // D-4："vs" 是語言中立字面（renderColors 的 <span class="vs"> 已是此
      // 慣例），只有兩側顏色名稱走 t()，複用 renderColors 同一批 key。
      const rows = [
        { lbl: ServerI18n.t("viewerThemeColorLabelText") + " vs " + ServerI18n.t("viewerThemeColorLabelBg"),      ratio: contrast(fg, state.bg) },
        { lbl: ServerI18n.t("viewerThemeColorLabelPrimary") + " vs " + ServerI18n.t("viewerThemeColorLabelBg"),   ratio: contrast(state.primary, state.bg) },
        { lbl: ServerI18n.t("viewerThemeColorLabelHero") + " vs " + ServerI18n.t("viewerThemeColorLabelBg"),      ratio: contrast(state.hero, state.bg) },
      ];
      root.querySelector("[data-vt-contrast]").innerHTML = rows.map(r => {
        const g = cGrade(r.ratio);
        return `<span class="vt-contrast-chip ${g.cls}">${r.lbl} · ${g.label} ${r.ratio.toFixed(1)}</span>`;
      }).join("");
    }

    function renderPreview() {
      const stage = root.querySelector("[data-vt-stage]");
      const fg = state.mode === "dark" ? "#F8FAFC" : "#0F172A";
      stage.style.setProperty("--vt-bg", state.bg);
      stage.style.setProperty("--vt-primary", state.primary);
      stage.style.setProperty("--vt-hero", state.hero);
      stage.style.setProperty("--vt-fg", fg);
      stage.style.fontFamily = state.font;
      const logoEl = root.querySelector("[data-vt-preview-logo]");
      if (state.logo) {
        logoEl.innerHTML = `<img src="${state.logo}" style="max-height:40px" />`;
      } else {
        logoEl.textContent = "DANMU FIRE";
      }
    }

    // ── Viewer force-override (theme + lang) — pushes to /admin/update ──
    // Default to "auto" until hydrateForceModes() fetches the persisted
    // value from /get_settings.
    let forceTheme = "auto";
    let forceLang = "auto";

    function renderForceModes() {
      root.querySelectorAll("[data-vt-theme-btn]").forEach(b => {
        b.classList.toggle("is-active", b.dataset.vtThemeBtn === forceTheme);
      });
      root.querySelectorAll("[data-vt-lang-btn]").forEach(b => {
        b.classList.toggle("is-active", b.dataset.vtLangBtn === forceLang);
      });
    }

    async function hydrateForceModes() {
      try {
        const res = await fetch("/get_settings", { credentials: "same-origin" });
        if (!res.ok) return;
        const opts = await res.json();
        const t = opts && opts.ViewerThemeMode && opts.ViewerThemeMode[1];
        const l = opts && opts.ViewerLangMode && opts.ViewerLangMode[1];
        if (typeof t === "string") forceTheme = t;
        if (typeof l === "string") forceLang = l;
        renderForceModes();
      } catch (_) { /* leave defaults */ }
    }

    async function postForceMode(key, value) {
      if (!window.csrfFetch) return;
      try {
        const res = await window.csrfFetch("/admin/update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: key, value, index: 1 }),
        });
        if (!res.ok) throw new Error(res.status);
        if (window.showToast) window.showToast(`${key} = ${value}`, true);
      } catch (e) {
        console.warn("[admin-viewer-theme] force-mode update failed:", e);
        if (window.showToast) window.showToast(ServerI18n.t("viewerThemeForceUpdateFailed", { field: key }), false);
      }
    }

    function render() {
      renderPresets();
      renderMode();
      renderColors();
      renderLogo();
      renderFont();
      renderContrast();
      renderPreview();
      renderForceModes();
    }

    root.addEventListener("input", (e) => {
      if (e.target.matches("[data-vt-color]")) {
        const k = e.target.dataset.vtColor;
        state[k] = e.target.value;
        presetId = "custom";
        persist(); render();
      } else if (e.target.matches("[data-vt-hex]")) {
        const k = e.target.dataset.vtHex;
        if (/^#[0-9a-f]{6}$/i.test(e.target.value)) {
          state[k] = e.target.value;
          presetId = "custom";
          persist(); render();
        }
      } else if (e.target.matches("[data-vt-font]")) {
        state.font = e.target.value;
        persist(); render();
      }
    });

    root.addEventListener("change", (e) => {
      if (e.target.matches("[data-vt-logo-input]")) {
        const f = e.target.files && e.target.files[0];
        if (!f) return;
        if (f.size > 500 * 1024) {
          if (typeof showToast === "function") showToast("Logo ≤ 500 KB", false);
          return;
        }
        const reader = new FileReader();
        reader.onload = () => {
          state.logo = String(reader.result || "");
          persist(); render();
        };
        reader.readAsDataURL(f);
      }
    });

    root.addEventListener("click", (e) => {
      const modeBtn = e.target.closest("[data-vt-mode-btn]");
      if (modeBtn) {
        state.mode = modeBtn.dataset.vtModeBtn;
        presetId = "custom";
        persist(); render();
        return;
      }
      const themeForceBtn = e.target.closest("[data-vt-theme-btn]");
      if (themeForceBtn) {
        forceTheme = themeForceBtn.dataset.vtThemeBtn;
        renderForceModes();
        postForceMode("ViewerThemeMode", forceTheme);
        return;
      }
      const langForceBtn = e.target.closest("[data-vt-lang-btn]");
      if (langForceBtn) {
        forceLang = langForceBtn.dataset.vtLangBtn;
        renderForceModes();
        postForceMode("ViewerLangMode", forceLang);
        return;
      }
      const logoRem = e.target.closest("[data-vt-logo-remove]");
      if (logoRem) {
        state.logo = null;
        persist(); render();
        return;
      }
      const dev = e.target.closest("[data-vt-device-btn]");
      if (dev) {
        root.querySelectorAll("[data-vt-device-btn]").forEach(b => b.classList.toggle("is-active", b === dev));
        root.querySelector("[data-vt-frame]").dataset.device = dev.dataset.vtDeviceBtn;
        return;
      }
      const act = e.target.closest("[data-vt-action]");
      if (act) {
        if (act.dataset.vtAction === "reset") {
          state = { ...PRESETS[0], logo: null };
          presetId = "default";
          persist(); render();
        }
      }
    });

    render();
    hydrateForceModes();
  }

  // Document-level legend click delegate (deeplink to other admin routes)
  document.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-vt-jump]");
    if (!btn) return;
    const route = btn.dataset.vtJump;
    if (!route) return;
    e.preventDefault();
    try { location.hash = "#/" + route; } catch (_) { /* */ }
  });

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(SECTION_ID)) return;
    grid.insertAdjacentHTML("beforeend", _renderHtml());
    const root = document.getElementById(SECTION_ID);
    if (root) _wire(root);
  }

  document.addEventListener("admin-panel-rendered", init);
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById(SECTION_ID)) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true, subtree: true,
    });
    init();
  });
})();
