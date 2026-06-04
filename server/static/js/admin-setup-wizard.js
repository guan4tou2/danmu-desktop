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

  const STEPS = [
    { id: "server", label: "伺服器基本設定", en: "SERVER" },
    { id: "display", label: "顯示規則", en: "DISPLAY" },
    { id: "moderation", label: "審核策略", en: "MODERATION" },
    { id: "theme", label: "外觀主題", en: "THEME" },
    { id: "done", label: "完成", en: "DONE" },
  ];

  const FALLBACK_THEMES = [
    {
      name: "default",
      label: "預設",
      description: "標準白色彈幕，適合大多數直播畫面。",
      colors: ["#7dd3fc", "#e2e8f0", "#fbbf24", "#86efac"],
    },
    {
      name: "neon",
      label: "霓虹",
      description: "高對比發光色，適合深色背景與舞台燈光。",
      colors: ["#38bdf8", "#fbbf24", "#86efac", "#f87171"],
    },
    {
      name: "retro",
      label: "復古",
      description: "偏暖色與像素感排版，適合活動主視覺。",
      colors: ["#f97316", "#facc15", "#fb7185", "#60a5fa"],
    },
    {
      name: "cinema",
      label: "電影",
      description: "低飽和金色與字幕感，適合發布會與論壇。",
      colors: ["#f5d08a", "#fef3c7", "#94a3b8", "#e5e7eb"],
    },
  ];

  let _state = {
    open: false,
    step: 0,
    themes: FALLBACK_THEMES.slice(),
    activeTheme: FALLBACK_THEMES[0].name,
    selectedTheme: FALLBACK_THEMES[0].name,
    serverName: "Danmu Fire",
    publicUrl: "",
    httpPort: ":4000",
    wsPath: "/ws",
    displayRules: [
      {
        id: "dedupe",
        label: "重複訊息收束",
        desc: "短時間內相同內容併成單一軌道，避免畫面洗版。",
        enabled: true,
      },
      {
        id: "image-preview",
        label: "圖片彈幕預覽",
        desc: "圖片先以縮圖顯示，避免直接佔滿整個畫面。",
        enabled: true,
      },
      {
        id: "max-length",
        label: "長訊息折疊",
        desc: "超過 120 字先折疊顯示，點開後再看完整內容。",
        enabled: true,
      },
    ],
    moderationRules: [
      {
        id: "sensitive",
        label: "敏感字過濾",
        desc: "啟用內建敏感字詞庫，先擋掉常見違規內容。",
        enabled: true,
      },
      {
        id: "rate-limit",
        label: "速率限制",
        desc: "每分鐘最多 20 則訊息，降低機器人或洗頻風險。",
        enabled: true,
      },
      {
        id: "fingerprint",
        label: "指紋追蹤",
        desc: "自動辨識重複使用者，方便後續封鎖與追查。",
        enabled: true,
      },
    ],
  };

  function _deriveServerSnapshot() {
    const loc = window.location;
    const port = loc.port || (loc.protocol === "https:" ? "443" : "80");
    _state.serverName = "Danmu Fire";
    _state.publicUrl = loc.origin + "/";
    _state.httpPort = ":" + port;
    _state.wsPath = (window.DANMU_CONFIG && window.DANMU_CONFIG.wsPath) || "/ws";
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
              <div class="admin-setup-brand-sub">SETUP WIZARD · v5 YELLOW</div>
            </div>
            <button type="button" class="admin-setup-close" data-setup-action="close" aria-label="Close wizard">✕</button>
          </header>

          <div class="admin-setup-stepbar" data-setup-stepbar>
            ${STEPS.map(function (step, index) {
              return `
                <div class="admin-setup-step" data-step-index="${index}">
                  <span class="bullet">${index + 1}</span>
                  <span class="lbl">${escapeHtml(step.label)}</span>
                </div>
                ${index < STEPS.length - 1 ? '<span class="admin-setup-step-sep"></span>' : ""}
              `;
            }).join("")}
          </div>

          <div class="admin-setup-content" data-setup-content></div>

          <footer class="admin-setup-foot" data-setup-foot>
            <button type="button" class="admin-setup-foot-btn admin-setup-foot-btn--ghost" data-setup-action="close">跳過</button>
            <span class="admin-setup-foot-meta" data-setup-meta>步驟 1 / ${STEPS.length}</span>
            <span class="admin-setup-foot-spacer"></span>
            <button type="button" class="admin-setup-foot-btn admin-setup-foot-btn--ghost" data-setup-action="prev" disabled>← 上一步</button>
            <button type="button" class="admin-setup-foot-btn admin-setup-foot-btn--primary" data-setup-action="next">下一步 →</button>
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
    if (meta) meta.textContent = `步驟 ${_state.step + 1} / ${STEPS.length}`;

    const prev = root.querySelector('[data-setup-action="prev"]');
    if (prev) prev.disabled = _state.step === 0;

    const next = root.querySelector('[data-setup-action="next"]');
    if (next) {
      const stepId = STEPS[_state.step].id;
      next.textContent = stepId === "theme" ? "套用主題 →" : "下一步 →";
    }

    const foot = root.querySelector("[data-setup-foot]");
    if (foot) foot.hidden = STEPS[_state.step].id === "done";

    const content = root.querySelector("[data-setup-content]");
    if (!content) return;
    const stepId = STEPS[_state.step].id;
    if (stepId === "server") content.innerHTML = _renderServerStep();
    else if (stepId === "display") content.innerHTML = _renderDisplayStep();
    else if (stepId === "moderation") content.innerHTML = _renderModerationStep();
    else if (stepId === "theme") content.innerHTML = _renderThemeStep();
    else content.innerHTML = _renderDoneStep();
    _bindStep(stepId);
  }

  function _renderShellField(fieldId, label, sub, value) {
    return `
      <div class="admin-setup-field">
        <label class="admin-setup-field-label" for="setup-field-${fieldId}">${escapeHtml(label)}</label>
        <div class="admin-setup-field-sub">${escapeHtml(sub)}</div>
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
        <div class="admin-setup-step-kicker">STEP 01</div>
        <h2 class="admin-setup-step-title">伺服器基本設定</h2>
        <p class="admin-setup-step-desc">v5 設計把第一步收斂成目前部署快照，先確認公開入口與同源 WS path 是否正確，再往後配置顯示與審核策略。</p>
        <div class="admin-setup-server-fields">
          ${_renderShellField("server-name", "伺服器名稱", "SERVER NAME", _state.serverName)}
          ${_renderShellField("public-url", "公開 URL", "PUBLIC URL", _state.publicUrl)}
          ${_renderShellField("http-port", "HTTP Port", "PORT", _state.httpPort)}
          ${_renderShellField("ws-path", "WebSocket Path", "WS PATH", _state.wsPath)}
        </div>
      </div>`;
  }

  function _renderToggleStep(stepKicker, title, desc, items, attrName) {
    return `
      <div class="admin-setup-step-pad">
        <div class="admin-setup-step-kicker">${stepKicker}</div>
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
                  <span class="admin-setup-toggle-title">${escapeHtml(item.label)}</span>
                  <span class="admin-setup-toggle-desc">${escapeHtml(item.desc)}</span>
                </span>
                <span class="admin-setup-toggle-switch${item.enabled ? " is-on" : ""}">
                  <span class="thumb"></span>
                </span>
              </button>`;
          }).join("")}
        </div>
      </div>`;
  }

  function _renderDisplayStep() {
    return _renderToggleStep(
      "STEP 02",
      "顯示規則",
      "這一頁對應 v5 handoff 的 Display Rules。先選好輸出畫面的預設節奏，之後再到各個 viewer / overlay 頁面微調細節。",
      _state.displayRules,
      "data-setup-display-toggle"
    );
  }

  function _renderModerationStep() {
    return _renderToggleStep(
      "STEP 03",
      "審核策略",
      "Yellow 稿的第三步是 moderation baseline。這些開關目前作為啟動建議值，用來提醒首次部署時先把基本防線打開。",
      _state.moderationRules,
      "data-setup-moderation-toggle"
    );
  }

  function _renderThemeStep() {
    const cards = (_state.themes && _state.themes.length) ? _state.themes : FALLBACK_THEMES;
    return `
      <div class="admin-setup-step-pad">
        <div class="admin-setup-step-kicker">STEP 04</div>
        <h2 class="admin-setup-step-title">外觀主題</h2>
        <p class="admin-setup-step-desc">這一步會直接套用現有主題 API。選一個起手風格，日後再到「主題包」頁細修字型、顏色與特效。</p>
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
                    const samples = ["+1", "哈哈", "🔥", "✨"];
                    return `<span class="admin-setup-theme-swatch-token" style="color:${escapeHtml(color)};font-size:${10 + index * 2}px;text-shadow:0 0 6px ${escapeHtml(color)}66;">${samples[index] || "·"}</span>`;
                  }).join("")}
                </div>
                <div class="admin-setup-theme-name">${escapeHtml(theme.label || themeId || "—")}</div>
                <div class="admin-setup-theme-sub">${escapeHtml(theme.description || "")}</div>
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
          return theme.label || theme.name || "—";
        }
      }
      return _state.selectedTheme || _state.activeTheme || "—";
    })();
    const enabledDisplay = _state.displayRules.filter(function (item) { return item.enabled; }).length;
    const enabledModeration = _state.moderationRules.filter(function (item) { return item.enabled; }).length;
    return `
      <div class="admin-setup-step-pad admin-setup-done">
        <div class="admin-setup-done-icon">✓</div>
        <h2 class="admin-setup-step-title">設定完成</h2>
        <p class="admin-setup-step-desc">所有設定已就緒。你可以隨時回到各頁面再做細部調整，這個 wizard 只負責把 v5 的起手配置對齊。</p>
        <div class="admin-setup-done-summary">
          <div class="row"><span class="k">SERVER</span><span class="v">${escapeHtml(_state.publicUrl)}</span></div>
          <div class="row"><span class="k">THEME</span><span class="v">${escapeHtml(themeName)}</span></div>
          <div class="row"><span class="k">DISPLAY RULES</span><span class="v">${enabledDisplay} / ${_state.displayRules.length} 啟用</span></div>
          <div class="row"><span class="k">MODERATION</span><span class="v">${enabledModeration} / ${_state.moderationRules.length} 啟用</span></div>
        </div>
        <button type="button" class="admin-setup-done-cta" data-setup-complete-cta>進入控制台 →</button>
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
    if (stepId === "display") {
      root.querySelectorAll("[data-setup-display-toggle]").forEach(function (button) {
        button.addEventListener("click", function () {
          _state.displayRules = _toggleList(_state.displayRules, button.dataset.setupDisplayToggle);
          _renderStep();
        });
      });
      return;
    }
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
      window.showToast && window.showToast("主題已套用", true);
      return true;
    } catch (_) {
      window.showToast && window.showToast("主題包套用失敗", false);
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
    window.showToast && window.showToast("設定精靈完成", true);
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
