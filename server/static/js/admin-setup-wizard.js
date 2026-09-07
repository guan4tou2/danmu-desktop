/**
 * Admin · Setup Wizard (v5 Yellow alignment, 2026-05-19).
 *
 * Mirrors Danmu Redesign v5 Batch 10 Yellow:
 *   1. 伺服器基本設定
 *   2. 顯示規則
 *   3. 審核策略
 *   4. 外觀主題
 *   5. 完成
 *
 * Only the theme step persists to the existing backend endpoint.
 * The remaining steps are a guided review of current defaults, which keeps
 * the wizard aligned with the handoff without inventing new backend APIs.
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

  // D-4：STEPS 是模組 parse 時就建構的頂層常數，ServerI18n 尚未 init，
  // 故 label 一律存 labelKey，交給 _renderShell / 各 _render*Step 在
  // 渲染當下才 t()。`en` 欄位是既有全大寫 kicker，本檔目前無渲染點會讀
  // 它，維持原樣不動。
  // 設計稿 08 · F1：四步——`1 伺服器網址 · 2 主題 · 3 審核基本防線 · 4 完成`。
  //
  // 原本是五步，多一步「顯示規則」。那一步是四個開關的巡覽（不是設定，是
  // 「看一下現在是什麼」），首次設定要問的是「非問不可的事」——多一步就是
  // 多一個讓人按「跳過」的理由。顯示層的細節在「顯示層」頁隨時可以調。
  const STEPS = [
    { id: "server", labelKey: "setupWizardStepServer" },
    { id: "theme", labelKey: "setupWizardStepTheme" },
    { id: "moderation", labelKey: "setupWizardStepModeration" },
    { id: "done", labelKey: "setupWizardStepDone" },
  ];

  // 同理，label/description 存 key；_themeLabel/_themeDesc 兩個 helper
  // 負責在渲染當下解析（並相容 _fetchThemes() 從後端直接拿到的
  // label/description 純文字，見下方兩個函式）。
  const FALLBACK_THEMES = [
    {
      name: "default",
      labelKey: "setupWizardThemeDefaultLabel",
      descriptionKey: "setupWizardThemeDefaultDesc",
      colors: ["#7dd3fc", "#e2e8f0", "#fbbf24", "#86efac"],
    },
    {
      name: "neon",
      labelKey: "setupWizardThemeNeonLabel",
      descriptionKey: "setupWizardThemeNeonDesc",
      colors: ["#38bdf8", "#fbbf24", "#86efac", "#f87171"],
    },
    {
      name: "retro",
      labelKey: "setupWizardThemeRetroLabel",
      descriptionKey: "setupWizardThemeRetroDesc",
      colors: ["#f97316", "#facc15", "#fb7185", "#60a5fa"],
    },
    {
      name: "cinema",
      labelKey: "setupWizardThemeCinemaLabel",
      descriptionKey: "setupWizardThemeCinemaDesc",
      colors: ["#f5d08a", "#fef3c7", "#94a3b8", "#e5e7eb"],
    },
  ];

  /** Resolves a theme's display label — FALLBACK_THEMES carries a lazy
   *  labelKey (parsed before ServerI18n init); server-fetched themes
   *  (see _fetchThemes) carry a literal label instead. */
  function _themeLabel(theme) {
    if (!theme) return "—";
    if (theme.label) return theme.label;
    if (theme.labelKey) return ServerI18n.t(theme.labelKey);
    return theme.name || theme.id || "—";
  }

  function _themeDesc(theme) {
    if (!theme) return "";
    // 稿上的定位說明優先——server 的 description 是功能描述，不是選擇依據。
    if (theme.descriptionKey) return ServerI18n.t(theme.descriptionKey);
    return theme.description || "";
  }

  let _state = {
    open: false,
    step: 0,
    themes: FALLBACK_THEMES.slice(),
    activeTheme: FALLBACK_THEMES[0].name,
    selectedTheme: FALLBACK_THEMES[0].name,
    serverName: "Danmu Fire",
    publicUrl: "",
    // 頂層常數，同樣延後解析——labelKey/descKey 交給 _renderToggleStep
    // 在渲染當下 t()。
    moderationRules: [
      {
        id: "sensitive",
        labelKey: "setupWizardModSensitiveLabel",
        descKey: "setupWizardModSensitiveDesc",
        enabled: true,
      },
      {
        id: "rate-limit",
        labelKey: "setupWizardModRateLimitLabel",
        descKey: "setupWizardModRateLimitDesc",
        enabled: true,
      },
      {
        id: "fingerprint",
        labelKey: "setupWizardModFingerprintLabel",
        descKey: "setupWizardModFingerprintDesc",
        enabled: true,
      },
    ],
  };

  function _deriveServerSnapshot() {
    _state.serverName = "Danmu Fire";
    _state.publicUrl = window.location.origin + "/";
  }

  function _onHashChange() {
    const hash = (window.location.hash.match(/^#\/(\w[\w-]*)/) || [])[1] || "";
    if (hash === "setup" && !_state.open) _open();
    else if (hash !== "setup" && _state.open) _close({ silent: true });
  }

  function _open() {
    _state.open = true;
    _state.step = 0;
    _deriveServerSnapshot();
    document.body.dataset.setupWizardOpen = "1";
    if (!document.getElementById(ROOT_ID)) {
      document.body.insertAdjacentHTML("beforeend", _renderShell());
      _bindShell();
    }
    _fetchThemes();
    _renderStep();
  }

  function _close(options) {
    const silent = options && options.silent;
    _state.open = false;
    document.body.dataset.setupWizardOpen = "";
    const root = document.getElementById(ROOT_ID);
    if (root) root.remove();
    if (!silent && window.location.hash === "#/setup") {
      try { history.replaceState(null, "", "#/dashboard"); } catch (_) {}
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }

  function _renderShell() {
    return `
      <div id="${ROOT_ID}" class="admin-setup-overlay" role="dialog" aria-modal="true" aria-labelledby="setup-wiz-title">
        <div class="admin-setup-modal">
          <header class="admin-setup-head">
            <div class="admin-setup-brand">
              <div class="admin-setup-brand-name">Danmu Fire</div>
              <!-- 「SETUP WIZARD · v5 YELLOW」是內部版本代號，對第一次
                   打開這個產品的人沒有任何意義（設計稿 14）。 -->
              <div class="admin-setup-brand-sub">${ServerI18n.t("setupWizardTitle")}</div>
            </div>
            <button type="button" class="admin-setup-close" data-setup-action="close" aria-label="Close wizard">${window.AdminUtils.closeIcon}</button>
          </header>

          <div class="admin-setup-stepbar" data-setup-stepbar>
            ${STEPS.map(function (step, index) {
              return `
                <div class="admin-setup-step" data-step-index="${index}">
                  <span class="bullet">${index + 1}</span>
                  <span class="lbl">${escapeHtml(ServerI18n.t(step.labelKey))}</span>
                </div>
                ${index < STEPS.length - 1 ? '<span class="admin-setup-step-sep"></span>' : ""}
              `;
            }).join("")}
          </div>

          <div class="admin-setup-content" data-setup-content></div>

          <footer class="admin-setup-foot" data-setup-foot>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="close">${ServerI18n.t("setupWizardSkip")}</button>
            <span class="admin-setup-foot-meta" data-setup-meta>${ServerI18n.t("setupWizardStepMeta", { current: 1, total: STEPS.length })}</span>
            <span class="admin-setup-foot-spacer"></span>
            <button type="button" class="admin-ui-action admin-setup-foot-action" data-setup-action="prev" disabled>${ServerI18n.t("setupWizardBack")}</button>
            <button type="button" class="admin-ui-action is-primary admin-setup-foot-action" data-setup-action="next">${ServerI18n.t("setupWizardNext")}</button>
          </footer>
        </div>
      </div>`;
  }

  function _renderStep() {
    const root = document.getElementById(ROOT_ID);
    if (!root) return;

    root.querySelectorAll(".admin-setup-step").forEach(function (el, index) {
      el.classList.toggle("is-done", index < _state.step);
      el.classList.toggle("is-active", index === _state.step);
    });
    root.querySelectorAll(".admin-setup-step-sep").forEach(function (el, index) {
      el.classList.toggle("is-done", index < _state.step);
    });

    const meta = root.querySelector("[data-setup-meta]");
    if (meta) meta.textContent = ServerI18n.t("setupWizardStepMeta", { current: _state.step + 1, total: STEPS.length });

    const prev = root.querySelector('[data-setup-action="prev"]');
    if (prev) prev.disabled = _state.step === 0;

    const next = root.querySelector('[data-setup-action="next"]');
    if (next) {
      const stepId = STEPS[_state.step].id;
      // 稿上底部只有「‹ 上一步」與「繼續」——每一步的主按鈕都是同一個字。
      next.textContent = ServerI18n.t("setupWizardNext");
    }

    const foot = root.querySelector("[data-setup-foot]");
    if (foot) foot.hidden = STEPS[_state.step].id === "done";

    const content = root.querySelector("[data-setup-content]");
    if (!content) return;
    const stepId = STEPS[_state.step].id;
    if (stepId === "server") content.innerHTML = _renderServerStep();
    else if (stepId === "moderation") content.innerHTML = _renderModerationStep();
    else if (stepId === "theme") content.innerHTML = _renderThemeStep();
    else content.innerHTML = _renderDoneStep();
    _bindStep(stepId);
  }

  // 設計稿 14：中文標籤旁邊不再擺一行大寫英文。原本每個欄位下面都有一行
  // SERVER NAME / PUBLIC URL / PORT / WS PATH。
  function _renderShellField(fieldId, label, value) {
    return `
      <div class="admin-setup-field">
        <label class="admin-setup-field-label" for="setup-field-${fieldId}">${escapeHtml(label)}</label>
        <input
          id="setup-field-${fieldId}"
          class="admin-setup-input"
          data-setup-field="${fieldId}"
          value="${escapeHtml(value)}"
          readonly
        />
      </div>`;
  }

  function _renderServerStep() {
    return `
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardStepServer")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardServerDesc")}</p>
        <div class="admin-setup-server-fields">
          ${_renderShellField("public-url", ServerI18n.t("setupWizardPublicUrlLabel"), _state.publicUrl)}
          ${_renderShellField("server-name", ServerI18n.t("setupWizardServerNameLabel"), _state.serverName)}
        </div>
      </div>`;
  }

  function _renderToggleStep(title, desc, items, attrName) {
    return `
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${escapeHtml(title)}</h2>
        <p class="admin-setup-step-desc">${escapeHtml(desc)}</p>
        <div class="admin-setup-toggle-list">
          ${items.map(function (item) {
            return `
              <button
                type="button"
                class="admin-setup-toggle-row${item.enabled ? " is-on" : ""}"
                ${attrName}="${escapeHtml(item.id)}"
                aria-pressed="${item.enabled ? "true" : "false"}"
              >
                <span class="admin-setup-toggle-body">
                  <span class="admin-setup-toggle-title">${escapeHtml(ServerI18n.t(item.labelKey))}</span>
                  <span class="admin-setup-toggle-desc">${escapeHtml(ServerI18n.t(item.descKey))}</span>
                </span>
                <span class="admin-setup-toggle-switch${item.enabled ? " is-on" : ""}">
                  <span class="thumb"></span>
                </span>
              </button>`;
          }).join("")}
        </div>
      </div>`;
  }

  function _renderModerationStep() {
    return _renderToggleStep(
      ServerI18n.t("setupWizardStepModeration"),
      ServerI18n.t("setupWizardModerationDesc"),
      _state.moderationRules,
      "data-setup-moderation-toggle"
    );
  }

  // 設計稿 08 · F1 的四張卡帶的是**定位說明**（「暖色像素感，適合活動主視覺」），
  // 不是 server 那份功能描述（「復古像素風格，帶閃爍效果」）。首次設定要回答的
  // 是「我這場該選哪個」，不是「這個主題做了什麼」。順序也照稿。
  const SETUP_THEME_ORDER = ["default", "neon", "retro", "cinema"];

  function _setupThemeCards() {
    const byName = {};
    (_state.themes || []).forEach(function (t) { byName[t.name || t.id] = t; });
    return SETUP_THEME_ORDER.map(function (name) {
      const fallback = FALLBACK_THEMES.filter(function (f) { return f.name === name; })[0];
      const server = byName[name];
      if (!fallback) return server;
      // 名稱可以用 server 的（它才知道使用者自己改過沒有），描述一律用稿上的。
      return {
        name: name,
        label: server && server.label,
        labelKey: fallback.labelKey,
        descriptionKey: fallback.descriptionKey,
        colors: fallback.colors,
      };
    }).filter(Boolean);
  }

  function _renderThemeStep() {
    const cards = _setupThemeCards();
    return `
      <div class="admin-setup-step-pad">
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardThemeStepTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardThemeDesc")}</p>
        <div class="admin-setup-theme-grid">
          ${cards.map(function (theme) {
            const themeId = theme.name || theme.id || "";
            const selected = (_state.selectedTheme || _state.activeTheme) === themeId;
            const swatch = (theme.colors || []).slice(0, 4);
            return `
              <button type="button" class="admin-setup-theme-card${selected ? " is-selected" : ""}" data-setup-theme="${escapeHtml(themeId)}">
                ${selected ? '<span class="admin-setup-theme-check">✓</span>' : ""}
                <div class="admin-setup-theme-swatch">
                  ${swatch.map(function (color, index) {
                    const samples = ["+1", ServerI18n.t("setupWizardThemeSwatchLaugh"), "🔥", "✨"];
                    return `<span class="admin-setup-theme-swatch-token" style="color:${escapeHtml(color)};font-size:${10 + index * 2}px;text-shadow:0 0 6px ${escapeHtml(color)}66;">${samples[index] || "·"}</span>`;
                  }).join("")}
                </div>
                <div class="admin-setup-theme-name">${escapeHtml(_themeLabel(theme))}</div>
                <div class="admin-setup-theme-sub">${escapeHtml(_themeDesc(theme))}</div>
              </button>`;
          }).join("")}
        </div>
      </div>`;
  }

  function _renderDoneStep() {
    const themeName = (function () {
      for (let i = 0; i < _state.themes.length; i += 1) {
        const theme = _state.themes[i];
        if ((theme.name || theme.id) === (_state.selectedTheme || _state.activeTheme)) {
          return _themeLabel(theme);
        }
      }
      return _state.selectedTheme || _state.activeTheme || "—";
    })();
    const enabledModeration = _state.moderationRules.filter(function (item) { return item.enabled; }).length;
    return `
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">✓</div>
        <h2 class="admin-setup-step-title">${ServerI18n.t("setupWizardDoneTitle")}</h2>
        <p class="admin-setup-step-desc">${ServerI18n.t("setupWizardDoneDesc")}</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepServer")}</span><span class="v">${escapeHtml(_state.publicUrl)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepTheme")}</span><span class="v">${escapeHtml(themeName)}</span></div>
          <div class="row"><span class="k">${ServerI18n.t("setupWizardStepModeration")}</span><span class="v">${ServerI18n.t("setupWizardEnabledCount", { n: enabledModeration, total: _state.moderationRules.length })}</span></div>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>${ServerI18n.t("setupWizardEnterConsole")}</button>
      </div>`;
  }

  function _bindShell() {
    const root = document.getElementById(ROOT_ID);
    if (!root) return;
    root.addEventListener("click", function (event) {
      if (event.target === root) {
        _close();
        return;
      }
      const action = event.target.closest("[data-setup-action]");
      if (!action) return;
      if (action.dataset.setupAction === "close") {
        _close();
        return;
      }
      if (action.dataset.setupAction === "prev" && _state.step > 0) {
        _state.step -= 1;
        _renderStep();
        return;
      }
      if (action.dataset.setupAction === "next") {
        _onNext();
      }
    });
  }

  function _toggleList(items, id) {
    return items.map(function (item) {
      if (item.id === id) {
        return Object.assign({}, item, { enabled: !item.enabled });
      }
      return item;
    });
  }

  function _bindStep(stepId) {
    const root = document.getElementById(ROOT_ID);
    if (!root) return;
    if (stepId === "moderation") {
      root.querySelectorAll("[data-setup-moderation-toggle]").forEach(function (button) {
        button.addEventListener("click", function () {
          _state.moderationRules = _toggleList(_state.moderationRules, button.dataset.setupModerationToggle);
          _renderStep();
        });
      });
      return;
    }
    if (stepId === "theme") {
      root.querySelectorAll("[data-setup-theme]").forEach(function (button) {
        button.addEventListener("click", function () {
          _state.selectedTheme = button.dataset.setupTheme || _state.selectedTheme;
          _renderStep();
        });
      });
      return;
    }
    if (stepId === "done") {
      const complete = root.querySelector("[data-setup-complete-cta]");
      if (complete) {
        complete.addEventListener("click", _complete);
      }
    }
  }

  async function _fetchThemes() {
    try {
      const response = await fetch("/admin/themes", { credentials: "same-origin" });
      if (!response.ok) return;
      const data = await response.json();
      const list = Array.isArray(data.themes) ? data.themes : [];
      if (!list.length) return;
      _state.themes = list.map(function (theme) {
        return {
          name: theme.name || theme.id || "",
          label: theme.label || theme.display_name || theme.name || "",
          description: theme.description || "",
          colors: theme.preview_colors || theme.colors || theme.palette || FALLBACK_THEMES[0].colors,
        };
      });
      _state.activeTheme = data.active || (_state.themes[0] && _state.themes[0].name) || _state.activeTheme;
      if (!_state.selectedTheme) _state.selectedTheme = _state.activeTheme;
      if (_state.open && STEPS[_state.step].id === "theme") _renderStep();
    } catch (_) {
      /* silent */
    }
  }

  async function _saveTheme() {
    if (!_state.selectedTheme || _state.selectedTheme === _state.activeTheme) return true;
    try {
      const response = await window.csrfFetch("/admin/themes/active", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: _state.selectedTheme }),
      });
      if (!response.ok) throw new Error("HTTP " + response.status);
      _state.activeTheme = _state.selectedTheme;
      window.showToast && window.showToast(ServerI18n.t("setupWizardToastThemeApplied"), true);
      return true;
    } catch (_) {
      window.showToast && window.showToast(ServerI18n.t("setupWizardToastThemeApplyFailed"), false);
      return false;
    }
  }

  async function _onNext() {
    const stepId = STEPS[_state.step].id;
    if (stepId === "theme") {
      const ok = await _saveTheme();
      if (!ok) return;
    }
    if (_state.step < STEPS.length - 1) {
      _state.step += 1;
      _renderStep();
      return;
    }
    _complete();
  }

  function _complete() {
    try { localStorage.setItem(STORAGE_KEY, "1"); } catch (_) {}
    window.showToast && window.showToast(ServerI18n.t("setupWizardToastComplete"), true);
    _close();
  }

  window.AdminSetupWizard = {
    open: function () {
      try { history.replaceState(null, "", "#/setup"); } catch (_) {}
      _open();
    },
    close: function () {
      _close();
    },
    isCompleted: function () {
      try { return !!localStorage.getItem(STORAGE_KEY); } catch (_) { return false; }
    },
    __setCapabilityForTest: function () {
      /* kept for compatibility with older test helpers */
    },
  };

  function init() {
    window.addEventListener("hashchange", _onHashChange);
    _onHashChange();
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    init();
  });
})();
