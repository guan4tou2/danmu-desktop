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

  const PRESETS = [
    { id: "default",  name: "預設 · Midnight", bg: "#050910", primary: "#7DD3FC", hero: "#FCD34D", mode: "dark",  font: "Zen Kaku Gothic New" },
    { id: "daylight", name: "日光 · Daylight", bg: "#F8FAFC", primary: "#0284C7", hero: "#D97706", mode: "light", font: "Zen Kaku Gothic New" },
    { id: "cinema",   name: "劇院 · Cinema",   bg: "#0A0A0F", primary: "#F472B6", hero: "#FCD34D", mode: "dark",  font: "Chakra Petch" },
    { id: "retro",    name: "復古 · Retro",    bg: "#1A1511", primary: "#FB923C", hero: "#FDE68A", mode: "dark",  font: "Bebas Neue" },
  ];

  function _renderHtml() {
    return `
      <div id="${SECTION_ID}" class="admin-vt-page hud-page-stack lg:col-span-2">
        <div class="admin-vt-scope">
          <span class="icon">◉</span>
          <div>
            <div class="kicker">SCOPE</div>
            <p>僅影響觀眾進入 <code>/fire</code> 時看到的頁面外觀;彈幕本身的顏色 / 描邊 / 陰影由 <b>Theme Packs</b> 管理。Overlay 排版 / 顯示器 / 連線狀態請到 <b>Display</b>。</p>
          </div>
        </div>

        <div class="admin-vt-grid">
          <div class="admin-vt-controls">
            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">主題預設</span><span class="kicker">PRESETS</span></div>
              <div class="admin-vt-presets" data-vt-presets></div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">明暗模式</span><span class="kicker">MODE</span></div>
              <div class="admin-vt-mode" data-vt-mode>
                <button type="button" data-vt-mode-btn="dark"><span class="icon">◐</span><span class="lbl">深色</span><span class="sub">DARK</span></button>
                <button type="button" data-vt-mode-btn="light"><span class="icon">☼</span><span class="lbl">淺色</span><span class="sub">LIGHT</span></button>
                <button type="button" data-vt-mode-btn="auto"><span class="icon">◑</span><span class="lbl">跟隨系統</span><span class="sub">AUTO</span></button>
              </div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">顏色</span><span class="kicker">COLORS · BG / PRIMARY / HERO</span></div>
              <div class="admin-vt-color-rows" data-vt-colors></div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">LOGO</span><span class="kicker">LOGO · PNG 200×80 建議透明底</span></div>
              <label class="admin-vt-logo-drop" data-vt-logo-drop>
                <span class="hint-empty">拖放 PNG · 或點擊選擇<br><small>建議尺寸 200×80 · 透明底</small></span>
                <img class="hint-preview" hidden data-vt-logo-preview alt="logo" />
                <input type="file" accept="image/png,image/jpeg" hidden data-vt-logo-input />
              </label>
              <div class="admin-vt-logo-actions" hidden data-vt-logo-actions>
                <button type="button" data-vt-logo-remove>移除</button>
              </div>
            </div>

            <div class="admin-vt-card">
              <div class="admin-vt-card-head"><span class="title">介面字型</span><span class="kicker">UI FONT · /fire 頁面用</span></div>
              <select data-vt-font>
                <option value="Zen Kaku Gothic New">Zen Kaku · 預設現代</option>
                <option value="Noto Sans TC">Noto Sans TC · 全字型</option>
                <option value="Chakra Petch">Chakra Petch · 科幻 HUD</option>
                <option value="Bebas Neue">Bebas Neue · 海報粗體</option>
                <option value="IBM Plex Mono">IBM Plex Mono · 等寬</option>
                <option value="system-ui">System UI · 系統預設</option>
              </select>
              <div class="admin-vt-font-specimen" data-vt-font-specimen>發送彈幕 · 2026 現場</div>
            </div>

            <div class="admin-vt-persist">
              <span class="admin-be-placeholder-control admin-be-placeholder-inline" role="note">[PLACEHOLDER] 立即套用（待 BE 廣播）</span>
              <button type="button" class="admin-poll-btn is-ghost" data-vt-action="reset">恢復預設</button>
            </div>
          </div>

          <div class="admin-vt-preview">
            <div class="admin-vt-preview-head">
              <span class="kicker">LIVE PREVIEW · /fire</span>
              <div class="admin-vt-device" data-vt-device>
                <button type="button" data-vt-device-btn="desktop" class="is-active">桌面</button>
                <button type="button" data-vt-device-btn="tablet">平板</button>
                <button type="button" data-vt-device-btn="mobile">手機</button>
              </div>
            </div>
            <div class="admin-vt-contrast" data-vt-contrast></div>
            <div class="admin-vt-preview-frame" data-vt-frame>
              <div class="admin-vt-preview-stage" data-vt-stage>
                <div class="hero">
                  <div class="logo" data-vt-preview-logo>DANMU FIRE</div>
                  <p class="subtitle">把你的訊息送上螢幕！</p>
                  <span class="chip"><span class="dot"></span>CONNECTED · LIVE</span>
                </div>
                <div class="stream">
                  <span class="row"><b>@guest</b><span>大家好 👋</span></span>
                  <span class="row"><b>@alice</b><span>這場很讚 🔥</span></span>
                  <span class="row self"><b>@你</b><span>好看</span></span>
                </div>
                <div class="composer">
                  <input type="text" placeholder="想對現場說點什麼?" disabled />
                  <button type="button">FIRE ▶</button>
                </div>
              </div>
            </div>

            <div class="admin-viewer-theme-legend" data-vt-legend>
              <div class="admin-viewer-theme-legend-head">
                <span class="title">不在此頁面控制</span>
                <span class="kicker">OUT OF SCOPE · 跳轉至對應頁</span>
              </div>
              <div class="admin-viewer-theme-legend-rows">
                <button type="button" class="admin-viewer-theme-legend-row" data-vt-jump="themes">
                  <span class="k">彈幕顏色 / 描邊 / 陰影</span>
                  <span class="v">↗ Theme Packs</span>
                </button>
                <button type="button" class="admin-viewer-theme-legend-row" data-vt-jump="display">
                  <span class="k">字級 / 速度 / 透明度</span>
                  <span class="v">↗ Display Settings</span>
                </button>
                <button type="button" class="admin-viewer-theme-legend-row" data-vt-jump="effects">
                  <span class="k">效果(.dme)</span>
                  <span class="v">↗ Effects</span>
                </button>
                <button type="button" class="admin-viewer-theme-legend-row" data-vt-jump="ratelimit">
                  <span class="k">速率限制 · 黑名單</span>
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
          <div class="name">${p.name}</div>
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
      const rows = [
        { key: "bg",      label: "背景", en: "BG",      vs: fg,          vsLbl: "文字" },
        { key: "primary", label: "主色", en: "PRIMARY", vs: state.bg,    vsLbl: "背景" },
        { key: "hero",    label: "強調色", en: "HERO",  vs: state.bg,    vsLbl: "背景" },
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
      const rows = [
        { lbl: "文字 vs 背景",   ratio: contrast(fg, state.bg) },
        { lbl: "主色 vs 背景",   ratio: contrast(state.primary, state.bg) },
        { lbl: "強調色 vs 背景", ratio: contrast(state.hero, state.bg) },
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

    function render() {
      renderPresets();
      renderMode();
      renderColors();
      renderLogo();
      renderFont();
      renderContrast();
      renderPreview();
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
