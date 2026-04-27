/**
 * Admin · Setup Wizard (Phase 2 P0-2, 2026-04-27).
 *
 * Mirrors docs/designs/design-v2/components/admin-batch3.jsx SetupWizard.
 * Prototype is 4 steps + done (password / logo / theme / lang). v1 cuts:
 *
 *  - Password step: skipped — admin already authenticated; password change
 *    needs current-pw verification flow that doesn't fit a forward-only
 *    wizard. Direct users to Security route.
 *  - Logo step: skipped — no /admin/logo upload endpoint yet (v5.3 scope).
 *
 * v1 ships: Theme Pack → Language → Done (3 steps).
 *
 * Trigger paths:
 *  1. URL hash `#/setup` (any time; auto-opens wizard)
 *  2. About page action button (relays to #/setup)
 *  3. NOT auto-shown on first run — too risky to interrupt operators who
 *     already configured things via legacy UI. Auto-show could be added
 *     with a /admin/setup-status endpoint in v5.3.
 *
 * Loaded as <script defer> in admin.html. Globals: csrfFetch, ServerI18n,
 * showToast, AdminUtils.
 */
(function () {
  "use strict";

  const ROOT_ID = "admin-setup-wizard-root";
  const STORAGE_KEY = "danmu.setupWizard.completed";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  const STEPS = [
    { id: "theme", label: "主題包", en: "THEME" },
    { id: "lang", label: "語言", en: "LANGUAGE" },
    { id: "done", label: "完成", en: "DONE" },
  ];

  let _state = {
    open: false,
    step: 0,
    themes: [],
    activeTheme: "",
    selectedTheme: "",
    selectedLang: "",
    allowViewerLangSwitch: true,
  };

  // ── trigger ──────────────────────────────────────────────────────

  function _onHashChange() {
    const hash = (window.location.hash.match(/^#\/(\w[\w-]*)/) || [])[1] || "";
    if (hash === "setup" && !_state.open) _open();
    else if (hash !== "setup" && _state.open) _close({ silent: true });
  }

  function _open() {
    _state.open = true;
    _state.step = 0;
    document.body.dataset.setupWizardOpen = "1";
    if (!document.getElementById(ROOT_ID)) {
      document.body.insertAdjacentHTML("beforeend", _renderShell());
      _bindShell();
    }
    _fetchThemes();
    _renderStep();
  }

  function _close({ silent } = {}) {
    _state.open = false;
    document.body.dataset.setupWizardOpen = "";
    const root = document.getElementById(ROOT_ID);
    if (root) root.remove();
    if (!silent && window.location.hash === "#/setup") {
      // Wizard route is overlay-only — bounce back to dashboard.
      try { history.replaceState(null, "", "#/dashboard"); } catch (_) {}
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }

  // ── render ───────────────────────────────────────────────────────

  function _renderShell() {
    return `
      <div id="${ROOT_ID}" class="admin-setup-overlay" role="dialog" aria-modal="true" aria-labelledby="setup-wiz-title">
        <div class="admin-setup-modal">
          <header class="admin-setup-head">
            <div class="admin-setup-brand">
              <div class="admin-setup-brand-name">Danmu Fire</div>
              <div class="admin-setup-brand-sub">SETUP WIZARD · 設定精靈</div>
            </div>
            <button type="button" class="admin-setup-close" data-setup-action="close" aria-label="Close wizard">✕</button>
          </header>

          <div class="admin-setup-stepbar" data-setup-stepbar>
            ${STEPS.map((s, i) => `
              <div class="admin-setup-step" data-step-index="${i}">
                <span class="bullet">${i + 1}</span>
                <span class="lbl">${escapeHtml(s.label)}</span>
              </div>
              ${i < STEPS.length - 1 ? '<span class="admin-setup-step-sep"></span>' : ''}
            `).join("")}
          </div>

          <div class="admin-setup-content" data-setup-content></div>

          <footer class="admin-setup-foot">
            <button type="button" class="admin-setup-foot-btn admin-setup-foot-btn--ghost" data-setup-action="close">跳過</button>
            <span class="admin-setup-foot-meta" data-setup-meta>步驟 1 / ${STEPS.length}</span>
            <span class="admin-setup-foot-spacer"></span>
            <button type="button" class="admin-setup-foot-btn admin-setup-foot-btn--ghost" data-setup-action="prev" disabled>← 上一步</button>
            <button type="button" class="admin-setup-foot-btn admin-setup-foot-btn--primary" data-setup-action="next">下一步 →</button>
          </footer>
        </div>
      </div>`;
  }

  function _bindShell() {
    const root = document.getElementById(ROOT_ID);
    if (!root) return;
    root.addEventListener("click", function (e) {
      // dismiss on backdrop click only
      if (e.target === root) {
        _close();
        return;
      }
      const btn = e.target.closest("[data-setup-action]");
      if (!btn) return;
      switch (btn.dataset.setupAction) {
        case "close": _close(); break;
        case "prev":  if (_state.step > 0) { _state.step -= 1; _renderStep(); } break;
        case "next":  _onNext(); break;
      }
    });
  }

  function _renderStep() {
    const root = document.getElementById(ROOT_ID);
    if (!root) return;
    const stepBar = root.querySelector("[data-setup-stepbar]");
    if (stepBar) {
      stepBar.querySelectorAll(".admin-setup-step").forEach(function (el, i) {
        el.classList.toggle("is-done", i < _state.step);
        el.classList.toggle("is-active", i === _state.step);
      });
      stepBar.querySelectorAll(".admin-setup-step-sep").forEach(function (el, i) {
        el.classList.toggle("is-done", i < _state.step);
      });
    }
    const meta = root.querySelector("[data-setup-meta]");
    if (meta) meta.textContent = `步驟 ${_state.step + 1} / ${STEPS.length}`;

    const prev = root.querySelector('[data-setup-action="prev"]');
    if (prev) prev.disabled = _state.step === 0;
    const next = root.querySelector('[data-setup-action="next"]');
    if (next) {
      const last = _state.step === STEPS.length - 1;
      next.textContent = last ? "✓ 完成" : "下一步 →";
    }

    const content = root.querySelector("[data-setup-content]");
    if (!content) return;
    const stepId = STEPS[_state.step].id;
    if (stepId === "theme") content.innerHTML = _renderThemeStep();
    else if (stepId === "lang") content.innerHTML = _renderLangStep();
    else if (stepId === "done") content.innerHTML = _renderDoneStep();
    _bindStep(stepId);
  }

  function _renderThemeStep() {
    const cards = (_state.themes && _state.themes.length) ? _state.themes : [];
    const cardsHtml = cards.map(function (t) {
      const id = t.name || t.id || "";
      const sel = (_state.selectedTheme || _state.activeTheme) === id;
      const swatch = (t.colors || ["#7DD3FC", "#FCD34D", "#86efac", "#F472B6"]).slice(0, 4);
      return `
        <div class="admin-setup-theme-card ${sel ? "is-selected" : ""}" data-setup-theme="${escapeHtml(id)}">
          ${sel ? '<span class="admin-setup-theme-check">✓</span>' : ''}
          <div class="admin-setup-theme-swatch">
            ${swatch.map(function (c, j) {
              const samples = ["+1", "哈哈", "🔥", "✨"];
              return `<span class="admin-setup-theme-swatch-token" style="color:${escapeHtml(c)};font-size:${10 + j * 2}px;text-shadow:0 0 6px ${escapeHtml(c)}66;">${samples[j] || "·"}</span>`;
            }).join("")}
          </div>
          <div class="admin-setup-theme-name">${escapeHtml(t.label || id || "—")}</div>
          <div class="admin-setup-theme-sub">${escapeHtml(t.description || "")}</div>
        </div>`;
    }).join("");
    return `
      <div class="admin-setup-step-pad">
        <div class="admin-setup-step-kicker">STEP 01</div>
        <h2 class="admin-setup-step-title">挑一個起手主題包</h2>
        <p class="admin-setup-step-desc">每個主題包配好彈幕色、字型、效果。日後可以在「風格主題包」頁微調或自訂。</p>
        <div class="admin-setup-theme-grid">
          ${cards.length ? cardsHtml : '<div class="admin-setup-theme-empty">載入主題包中…</div>'}
        </div>
      </div>`;
  }

  function _renderLangStep() {
    const langs = [
      { k: "zh", name: "繁體中文",     sub: "Traditional Chinese (Taiwan)" },
      { k: "en", name: "English",      sub: "United States · 英文" },
      { k: "ja", name: "日本語",        sub: "日本 · Japanese" },
      { k: "ko", name: "한국어",        sub: "한국 · Korean" },
    ];
    const sel = _state.selectedLang || (window.ServerI18n && window.ServerI18n.currentLang) || "zh";
    return `
      <div class="admin-setup-step-pad">
        <div class="admin-setup-step-kicker">STEP 02</div>
        <h2 class="admin-setup-step-title">預設語言</h2>
        <p class="admin-setup-step-desc">管理後台 + 觀眾頁的初始語言。觀眾仍可在頁面右上角切換。</p>
        <div class="admin-setup-lang-grid">
          ${langs.map(function (l) {
            const on = sel === l.k;
            return `
              <div class="admin-setup-lang-card ${on ? "is-selected" : ""}" data-setup-lang="${escapeHtml(l.k)}">
                <span class="lang-key">${escapeHtml(l.k)}</span>
                <div class="lang-meta">
                  <div class="name">${escapeHtml(l.name)}</div>
                  <div class="sub">${escapeHtml(l.sub)}</div>
                </div>
                ${on ? '<span class="lang-check">✓</span>' : ''}
              </div>`;
          }).join("")}
        </div>
        <div class="admin-setup-lang-toggle">
          <label>
            <input type="checkbox" data-setup-lang-switch ${_state.allowViewerLangSwitch ? "checked" : ""} />
            <span>允許觀眾自行切換語言（觀眾頁右上角下拉）</span>
          </label>
        </div>
      </div>`;
  }

  function _renderDoneStep() {
    const themeName = _state.selectedTheme || _state.activeTheme || "—";
    const langName = (function () {
      const m = { zh: "繁體中文", en: "English", ja: "日本語", ko: "한국어" };
      return m[_state.selectedLang] || m[(window.ServerI18n && window.ServerI18n.currentLang)] || "—";
    })();
    return `
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">✓</div>
        <h2 class="admin-setup-step-title">設定完成</h2>
        <p class="admin-setup-step-desc">已套用初步配置。所有設定可日後在 admin 中修改。</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">主題包</span><span class="v">${escapeHtml(themeName)}</span></div>
          <div class="row"><span class="k">介面語言</span><span class="v">${escapeHtml(langName)}</span></div>
          <div class="row"><span class="k">觀眾可切語</span><span class="v">${_state.allowViewerLangSwitch ? "是" : "否"}</span></div>
        </div>
        <p class="admin-setup-done-tip">沒有上傳活動 logo 嗎？日後可在 <b>素材庫</b> 上傳。要重新走精靈，到 <b>關於</b> 頁點 <i>重新開啟</i>。</p>
      </div>`;
  }

  function _bindStep(stepId) {
    const root = document.getElementById(ROOT_ID);
    if (!root) return;
    if (stepId === "theme") {
      root.querySelectorAll("[data-setup-theme]").forEach(function (card) {
        card.addEventListener("click", function () {
          _state.selectedTheme = card.dataset.setupTheme;
          _renderStep();
        });
      });
    } else if (stepId === "lang") {
      root.querySelectorAll("[data-setup-lang]").forEach(function (card) {
        card.addEventListener("click", function () {
          _state.selectedLang = card.dataset.setupLang;
          _renderStep();
        });
      });
      const toggle = root.querySelector("[data-setup-lang-switch]");
      if (toggle) {
        toggle.addEventListener("change", function (e) {
          _state.allowViewerLangSwitch = !!e.target.checked;
        });
      }
    }
  }

  // ── data ─────────────────────────────────────────────────────────

  async function _fetchThemes() {
    try {
      const r = await fetch("/admin/themes", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      const list = Array.isArray(data.themes) ? data.themes : [];
      _state.themes = list.map(function (t) {
        return {
          name: t.name || t.id || "",
          label: t.label || t.display_name || t.name || "",
          description: t.description || "",
          colors: t.preview_colors || t.colors,
        };
      });
      _state.activeTheme = data.active || (_state.themes[0] && _state.themes[0].name) || "";
      if (!_state.selectedTheme) _state.selectedTheme = _state.activeTheme;
      _renderStep();
    } catch (_) { /* silent */ }
  }

  async function _saveTheme() {
    if (!_state.selectedTheme || _state.selectedTheme === _state.activeTheme) return true;
    try {
      const r = await window.csrfFetch("/admin/themes/active", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: _state.selectedTheme }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      _state.activeTheme = _state.selectedTheme;
      return true;
    } catch (_) {
      window.showToast && window.showToast("主題包套用失敗", false);
      return false;
    }
  }

  function _saveLang() {
    const code = _state.selectedLang;
    if (!code) return;
    try {
      if (window.ServerI18n && typeof window.ServerI18n.setLang === "function") {
        window.ServerI18n.setLang(code);
      } else {
        localStorage.setItem("danmu.serverLang", code);
      }
    } catch (_) { /* */ }
    // Persist toggle (UI-side only — viewer page reads this)
    try { localStorage.setItem("danmu.viewer.allowLangSwitch", _state.allowViewerLangSwitch ? "1" : "0"); } catch (_) {}
  }

  async function _onNext() {
    const cur = STEPS[_state.step];
    if (cur.id === "theme") {
      const ok = await _saveTheme();
      if (!ok) return;
      _state.step += 1;
      _renderStep();
    } else if (cur.id === "lang") {
      _saveLang();
      _state.step += 1;
      _renderStep();
    } else if (cur.id === "done") {
      try { localStorage.setItem(STORAGE_KEY, "1"); } catch (_) {}
      window.showToast && window.showToast("設定精靈完成", true);
      _close();
    }
  }

  // ── public API ───────────────────────────────────────────────────

  window.AdminSetupWizard = {
    open: function () {
      try { history.replaceState(null, "", "#/setup"); } catch (_) {}
      _open();
    },
    isCompleted: function () {
      try { return !!localStorage.getItem(STORAGE_KEY); } catch (_) { return false; }
    },
  };

  // ── init ─────────────────────────────────────────────────────────

  document.addEventListener("DOMContentLoaded", function () {
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    window.addEventListener("hashchange", _onHashChange);
    _onHashChange();  // run once in case URL already #/setup
  });
})();
