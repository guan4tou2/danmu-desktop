/**
 * Admin · Setup Wizard (Phase 2 P0-2, 2026-04-27).
 *
 * Mirrors docs/designs/design-v2/components/admin-batch3.jsx SetupWizard.
 * Prototype is 5 steps: password / logo / theme / lang / done.
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
    { id: "password", label: "密碼",  en: "PASSWORD" },
    { id: "logo",     label: "Logo",  en: "LOGO" },
    { id: "theme",    label: "主題包", en: "THEME" },
    { id: "lang",     label: "語言",  en: "LANGUAGE" },
    { id: "done",     label: "完成",  en: "DONE" },
  ];

  let _state = {
    open: false,
    step: 0,
    // password step
    currentPw: "",
    newPw: "",
    confirmPw: "",
    pwStrength: 0,
    // logo step
    logoFile: null,
    logoDataUrl: "",
    logoUploaded: false,
    // theme step
    themes: [],
    activeTheme: "",
    selectedTheme: "",
    // lang step
    selectedLang: "",
    allowViewerLangSwitch: true,
    capabilities: {
      password: null,
      logo: null,
    },
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
    _fetchCapabilities();
    _fetchThemes();
    _renderStep();
  }

  function _close({ silent } = {}) {
    _state.open = false;
    document.body.dataset.setupWizardOpen = "";
    const root = document.getElementById(ROOT_ID);
    if (root) root.remove();
    if (!silent && window.location.hash === "#/setup") {
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
            ${STEPS.map(function (s, i) {
              return `
                <div class="admin-setup-step" data-step-index="${i}">
                  <span class="bullet">${i + 1}</span>
                  <span class="lbl">${escapeHtml(s.label)}</span>
                </div>
                ${i < STEPS.length - 1 ? '<span class="admin-setup-step-sep"></span>' : ''}
              `;
            }).join("")}
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
      if (e.target === root) { _close(); return; }
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
    switch (stepId) {
      case "password": content.innerHTML = _renderPasswordStep(); break;
      case "logo":     content.innerHTML = _renderLogoStep();     break;
      case "theme":    content.innerHTML = _renderThemeStep();    break;
      case "lang":     content.innerHTML = _renderLangStep();     break;
      case "done":     content.innerHTML = _renderDoneStep();     break;
    }
    _bindStep(stepId);
  }

  // ── step renderers ───────────────────────────────────────────────

  function _renderPasswordStep() {
    const pwVal = escapeHtml(_state.newPw);
    const confVal = escapeHtml(_state.confirmPw);
    const mismatch = _state.newPw && _state.confirmPw && _state.newPw !== _state.confirmPw;
    const barW = Math.min(100, _state.pwStrength * 20) + "%";
    const barCol = _state.pwStrength >= 4 ? "#86efac" : _state.pwStrength >= 2 ? "#fbbf24" : "#f87171";
    const strengthLabel = ["", "弱", "普通", "中等", "強", "很好"][Math.min(_state.pwStrength, 5)] || "";
    const blocked = _state.capabilities.password === false;
    return `
      <div class="admin-setup-step-pad">
        <div class="admin-setup-step-kicker">STEP 01</div>
        <h2 class="admin-setup-step-title">變更管理密碼</h2>
        <p class="admin-setup-step-desc">可選。如要設定新密碼,請填寫下方三個欄位；若想跳過,直接按「下一步」。</p>
        ${blocked ? `
          <div class="admin-setup-backend-blocked" data-setup-blocked="password">
            <b>Blocked by backend</b>
            <span>/admin/change_password endpoint unavailable，已切換為略過此步驟。</span>
          </div>` : ""}
        <div class="admin-setup-pw-form">
          <div class="admin-setup-field">
            <label class="admin-setup-field-label">目前密碼</label>
            <input type="password" class="admin-setup-input" data-setup-pw="current"
              placeholder="輸入目前密碼" autocomplete="current-password" />
          </div>
          <div class="admin-setup-field">
            <label class="admin-setup-field-label">新密碼</label>
            <input type="password" class="admin-setup-input" data-setup-pw="new"
              placeholder="至少 8 個字元" autocomplete="new-password" value="${pwVal}" />
          </div>
          <div class="admin-setup-field">
            <label class="admin-setup-field-label">確認新密碼</label>
            <input type="password" class="admin-setup-input ${mismatch ? "is-error" : ""}"
              data-setup-pw="confirm" placeholder="再輸入一次" autocomplete="new-password" value="${confVal}" />
            ${mismatch ? '<div class="admin-setup-field-err">密碼不一致</div>' : ''}
          </div>
          ${_state.newPw ? `
            <div class="admin-setup-pw-strength">
              <div class="bar"><div class="fill" style="width:${barW};background:${escapeHtml(barCol)}"></div></div>
              <span class="lbl" style="color:${escapeHtml(barCol)}">${strengthLabel}</span>
            </div>` : ''}
        </div>
        <div class="admin-setup-note">
          <div class="kicker">NOTE</div>
          忘記密碼可重新執行 <code>./setup.sh init</code> 重設。密碼以 bcrypt 雜湊儲存。
        </div>
      </div>`;
  }

  function _renderLogoStep() {
    const hasLogo = !!_state.logoDataUrl;
    const blocked = _state.capabilities.logo === false;
    return `
      <div class="admin-setup-step-pad">
        <div class="admin-setup-step-kicker">STEP 02</div>
        <h2 class="admin-setup-step-title">上傳活動 Logo</h2>
        <p class="admin-setup-step-desc">可選。Logo 會顯示在觀眾頁頂部。建議 PNG 透明背景，512×512 以上。可略過,日後在素材庫上傳。</p>
        ${blocked ? `
          <div class="admin-setup-backend-blocked" data-setup-blocked="logo">
            <b>Blocked by backend</b>
            <span>/admin/logo endpoint unavailable，已切換為略過此步驟。</span>
          </div>` : ""}
        <div class="admin-setup-logo-grid">
          <div class="admin-setup-dropzone ${hasLogo ? "has-file" : ""}" data-setup-dropzone>
            ${hasLogo
              ? `<img src="${escapeHtml(_state.logoDataUrl)}" class="admin-setup-logo-preview-img" alt="Logo preview" />
                 <button type="button" class="admin-setup-logo-remove" data-setup-logo-action="remove">✕ 移除</button>`
              : `<div class="icon">⇪</div>
                 <div class="t">拖放圖片到這裡</div>
                 <div class="s">PNG / SVG / JPG · 最大 2 MB</div>
                 <label class="admin-setup-file-btn">
                   選擇檔案
                   <input type="file" data-setup-logo-input accept="image/png,image/svg+xml,image/jpeg" style="display:none" />
                 </label>`}
          </div>
          <div class="admin-setup-logo-preview-panel">
            <div class="admin-setup-logo-preview-label">預覽</div>
            <div class="admin-setup-logo-preview-box">
              ${hasLogo
                ? `<img src="${escapeHtml(_state.logoDataUrl)}" class="admin-setup-logo-preview-box-img" alt="" />`
                : `<div class="admin-setup-logo-fallback">ACME · 2025</div>
                   <div class="admin-setup-logo-fallback-sub">EVENT KEYNOTE</div>
                   <div class="admin-setup-logo-fallback-note">🅢 模擬:未上傳會用文字 lockup</div>`}
            </div>
          </div>
        </div>
      </div>`;
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
        <div class="admin-setup-step-kicker">STEP 03</div>
        <h2 class="admin-setup-step-title">挑一個起手主題包</h2>
        <p class="admin-setup-step-desc">每個主題包配好彈幕色、字型、效果。日後可以在「風格主題包」頁微調或自訂。</p>
        <div class="admin-setup-theme-grid">
          ${cards.length ? cardsHtml : '<div class="admin-setup-theme-empty">載入主題包中…</div>'}
        </div>
      </div>`;
  }

  function _renderLangStep() {
    const langs = [
      { k: "zh", name: "繁體中文",  sub: "Traditional Chinese (Taiwan)" },
      { k: "en", name: "English",   sub: "United States · 英文" },
      { k: "ja", name: "日本語",    sub: "日本 · Japanese" },
      { k: "ko", name: "한국어",    sub: "한국 · Korean" },
    ];
    const sel = _state.selectedLang || (window.ServerI18n && window.ServerI18n.currentLang) || "zh";
    return `
      <div class="admin-setup-step-pad">
        <div class="admin-setup-step-kicker">STEP 04</div>
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
          ${_state.logoUploaded ? '<div class="row"><span class="k">Logo</span><span class="v">✓ 已上傳</span></div>' : ''}
        </div>
        <p class="admin-setup-done-tip">要重新走精靈,到 <b>關於</b> 頁點 <i>重新開啟精靈</i>。</p>
      </div>`;
  }

  // ── step bindings ────────────────────────────────────────────────

  function _bindStep(stepId) {
    const root = document.getElementById(ROOT_ID);
    if (!root) return;
    if (stepId === "password") {
      root.querySelectorAll("[data-setup-pw]").forEach(function (inp) {
        inp.addEventListener("input", function () {
          const which = inp.dataset.setupPw;
          if (which === "current") _state.currentPw = inp.value;
          else if (which === "new") { _state.newPw = inp.value; _state.pwStrength = _calcStrength(inp.value); _renderStep(); }
          else if (which === "confirm") { _state.confirmPw = inp.value; _renderStep(); }
        });
      });
    } else if (stepId === "logo") {
      const dz = root.querySelector("[data-setup-dropzone]");
      const fileInput = root.querySelector("[data-setup-logo-input]");
      const removeBtn = root.querySelector("[data-setup-logo-action='remove']");
      if (fileInput) {
        fileInput.addEventListener("change", function () {
          const file = fileInput.files[0];
          if (file) _readLogoFile(file);
        });
      }
      if (removeBtn) {
        removeBtn.addEventListener("click", function () {
          _state.logoFile = null;
          _state.logoDataUrl = "";
          _state.logoUploaded = false;
          _renderStep();
        });
      }
      if (dz) {
        dz.addEventListener("dragover", function (e) { e.preventDefault(); dz.classList.add("is-dragover"); });
        dz.addEventListener("dragleave", function () { dz.classList.remove("is-dragover"); });
        dz.addEventListener("drop", function (e) {
          e.preventDefault();
          dz.classList.remove("is-dragover");
          const file = e.dataTransfer.files[0];
          if (file) _readLogoFile(file);
        });
      }
    } else if (stepId === "theme") {
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

  // ── helpers ──────────────────────────────────────────────────────

  function _calcStrength(pw) {
    if (!pw) return 0;
    let s = 0;
    if (pw.length >= 8)  s++;
    if (pw.length >= 12) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    return s;
  }

  function _readLogoFile(file) {
    const MB2 = 2 * 1024 * 1024;
    if (file.size > MB2) {
      window.showToast && window.showToast("圖片超過 2 MB 上限", false);
      return;
    }
    const validTypes = ["image/png", "image/svg+xml", "image/jpeg"];
    if (!validTypes.includes(file.type)) {
      window.showToast && window.showToast("只接受 PNG / SVG / JPG 格式", false);
      return;
    }
    _state.logoFile = file;
    const reader = new FileReader();
    reader.onload = function (e) {
      _state.logoDataUrl = e.target.result;
      _renderStep();
    };
    reader.readAsDataURL(file);
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
      if (_state.open && STEPS[_state.step].id === "theme") _renderStep();
    } catch (_) { /* silent */ }
  }

  async function _probeEndpoint(url) {
    try {
      const r = await fetch(url, { method: "OPTIONS", credentials: "same-origin" });
      if (r.status === 404) return false;
      return true;
    } catch (_) {
      return false;
    }
  }

  async function _fetchCapabilities() {
    const [passwordOk, logoOk] = await Promise.all([
      _probeEndpoint("/admin/change_password"),
      _probeEndpoint("/admin/logo"),
    ]);
    _state.capabilities.password = !!passwordOk;
    _state.capabilities.logo = !!logoOk;
    if (_state.open && (_state.step === 0 || _state.step === 1)) _renderStep();
  }

  async function _savePassword() {
    const cur = _state.currentPw;
    const nw  = _state.newPw;
    const cf  = _state.confirmPw;
    // All empty → skip
    if (!cur && !nw && !cf) return true;
    if (!cur || !nw || !cf) {
      window.showToast && window.showToast("請填寫目前密碼 + 新密碼 + 確認密碼", false);
      return false;
    }
    if (nw !== cf) {
      window.showToast && window.showToast("兩次輸入的新密碼不一致", false);
      return false;
    }
    if (nw.length < 8) {
      window.showToast && window.showToast("新密碼至少需要 8 個字元", false);
      return false;
    }
    try {
      const r = await window.csrfFetch("/admin/change_password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ current_password: cur, new_password: nw, confirm_password: cf }),
      });
      const data = await r.json().catch(function () { return {}; });
      if (!r.ok) {
        window.showToast && window.showToast(data.error || "密碼變更失敗", false);
        return false;
      }
      window.showToast && window.showToast("密碼已更新", true);
      _state.currentPw = "";
      _state.newPw = "";
      _state.confirmPw = "";
      return true;
    } catch (_) {
      window.showToast && window.showToast("網路錯誤，無法變更密碼", false);
      return false;
    }
  }

  async function _saveLogo() {
    if (!_state.logoFile) return true; // skip
    const fd = new FormData();
    fd.append("logo", _state.logoFile);
    try {
      const r = await window.csrfFetch("/admin/logo", { method: "POST", body: fd });
      const data = await r.json().catch(function () { return {}; });
      if (!r.ok) {
        window.showToast && window.showToast(data.error || "Logo 上傳失敗", false);
        return false;
      }
      _state.logoUploaded = true;
      window.showToast && window.showToast("Logo 已上傳", true);
      return true;
    } catch (_) {
      window.showToast && window.showToast("網路錯誤，Logo 上傳失敗", false);
      return false;
    }
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
    try { localStorage.setItem("danmu.viewer.allowLangSwitch", _state.allowViewerLangSwitch ? "1" : "0"); } catch (_) {}
  }

  async function _onNext() {
    const cur = STEPS[_state.step];
    if (cur.id === "password") {
      if (_state.capabilities.password === false) {
        window.showToast && window.showToast("後端尚未提供 /admin/change_password，已略過此步驟", false);
        _state.step += 1;
        _renderStep();
        return;
      }
      const ok = await _savePassword();
      if (!ok) return;
      _state.step += 1;
      _renderStep();
    } else if (cur.id === "logo") {
      if (_state.capabilities.logo === false) {
        window.showToast && window.showToast("後端尚未提供 /admin/logo，已略過此步驟", false);
        _state.step += 1;
        _renderStep();
        return;
      }
      const ok = await _saveLogo();
      if (!ok) return;
      _state.step += 1;
      _renderStep();
    } else if (cur.id === "theme") {
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
    close: function () {
      _close();
    },
    __setCapabilityForTest: function (key, value) {
      if (!key || !Object.prototype.hasOwnProperty.call(_state.capabilities, key)) return;
      _state.capabilities[key] = !!value;
      if (_state.open) _renderStep();
    },
  };

  // ── init ─────────────────────────────────────────────────────────

  document.addEventListener("DOMContentLoaded", function () {
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    window.addEventListener("hashchange", _onHashChange);
    _onHashChange();
  });
})();
