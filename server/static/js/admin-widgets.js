// admin-widgets.js — Overlay widgets manager (P6-2 split, 5.1.0 Soft Holo retrofit)
//
// Replaces the legacy <details class="settings-card"> + .btn .btn-sm shell
// with the v2 chrome (page header / hud-page-stack / admin-widget-* atoms).
// Behavior unchanged — same /admin/widgets/* API, same widget kinds, same
// position whitelist. Only the DOM + classes changed.

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    var escapeHtml = window.AdminUtils.escapeHtml;

    let widgetsInjecting = false;
    const observer = new MutationObserver(() => {
      const settingsGrid = document.getElementById("settings-grid");
      if (!settingsGrid) return;
      if (document.getElementById("sec-widgets") || widgetsInjecting) return;

      widgetsInjecting = true;
      try { injectWidgetsSection(settingsGrid); } finally { widgetsInjecting = false; }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // ── Section injection ────────────────────────────────────────────────
    function injectWidgetsSection(grid) {
      const section = document.createElement("div");
      section.id = "sec-widgets";
      section.className = "admin-widgets-page hud-page-stack lg:col-span-2";

      const i18n = (k, fallback) => {
        const v = window.ServerI18n?.t?.(k);
        return (v && v !== k) ? v : (fallback || k);
      };

      section.innerHTML = `
        <div class="admin-poll-head">
          <div class="admin-poll-kicker">OVERLAY WIDGETS · 分數板 · 跑馬燈 · 標籤</div>
          <div class="admin-poll-title">${escapeHtml(i18n("widgetsTitle", "Overlay Widgets"))}</div>
          <p class="admin-poll-subnote">${escapeHtml(i18n("widgetsDesc", "在 OBS 覆蓋層上新增分數板、跑馬燈或文字標籤"))}</p>
        </div>
        <div class="admin-widgets-actions">
          <button id="widget-add-scoreboard" type="button" class="admin-poll-btn is-primary">
            + ${escapeHtml(i18n("widgetScoreboard", "分數板"))}
          </button>
          <button id="widget-add-ticker" type="button" class="admin-poll-btn is-primary">
            + ${escapeHtml(i18n("widgetTicker", "跑馬燈"))}
          </button>
          <button id="widget-add-label" type="button" class="admin-poll-btn is-primary">
            + ${escapeHtml(i18n("widgetLabel", "標籤"))}
          </button>
          <span class="spacer"></span>
          <button id="widget-clear-all" type="button" class="admin-poll-btn is-ghost">
            ${escapeHtml(i18n("clearAll", "全部清除"))}
          </button>
        </div>
        <div id="widgets-list" class="admin-widgets-list"></div>`;

      grid.appendChild(section);

      document.getElementById("widget-add-scoreboard").addEventListener("click", () => createWidget("scoreboard"));
      document.getElementById("widget-add-ticker").addEventListener("click", () => createWidget("ticker"));
      document.getElementById("widget-add-label").addEventListener("click", () => createWidget("label"));
      document.getElementById("widget-clear-all").addEventListener("click", clearAllWidgets);

      loadWidgets();
    }

    // ── API helpers ──────────────────────────────────────────────────────
    async function api(endpoint, method = "GET", body = null) {
      const opts = {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
      };
      if (body) {
        const csrf = document.querySelector('meta[name="csrf-token"]');
        if (csrf) opts.headers["X-CSRF-Token"] = csrf.content;
        opts.body = JSON.stringify(body);
      }
      const resp = await fetch("/admin/widgets/" + endpoint, opts);
      return resp.json();
    }

    async function loadWidgets() {
      try {
        const data = await api("list");
        renderWidgetsList(data.widgets || []);
      } catch (e) {
        console.error("[admin-widgets] Load failed:", e);
      }
    }

    async function createWidget(type) {
      // Default colors picked from the locked palette (cyan / amber).
      // No more #f43f5e — STYLE-CONTRACT bans it for chrome; the user can
      // still pick any color they want via the per-team color input below.
      const defaults = {
        scoreboard: {
          title: "Score",
          teams: [
            { name: "Team A", score: 0, color: "#38bdf8" },
            { name: "Team B", score: 0, color: "#fbbf24" },
          ],
          position: "top-left",
        },
        ticker: {
          messages: ["Welcome!", "Subscribe for updates"],
          speed: 60,
          position: "bottom-center",
        },
        label: {
          text: "Hello World",
          fontSize: 28,
          position: "top-right",
        },
      };

      try {
        await api("create", "POST", { type, config: defaults[type] || {} });
        loadWidgets();
      } catch (e) {
        console.error("[admin-widgets] Create failed:", e);
      }
    }

    async function deleteWidget(id) {
      const t = window.ServerI18n?.t?.("widgetDeleteConfirm") || "刪除這個小工具?";
      if (!confirm(t)) return;
      try {
        await api("delete", "POST", { id });
        loadWidgets();
      } catch (e) {
        console.error("[admin-widgets] Delete failed:", e);
      }
    }

    async function updateWidget(id, config) {
      try {
        await api("update", "POST", { id, config });
        loadWidgets();
      } catch (e) {
        console.error("[admin-widgets] Update failed:", e);
      }
    }

    async function updateScore(id, teamIndex, delta) {
      try {
        await api("score", "POST", { id, team_index: teamIndex, delta });
        loadWidgets();
      } catch (e) {
        console.error("[admin-widgets] Score update failed:", e);
      }
    }

    async function clearAllWidgets() {
      const t = window.ServerI18n?.t?.("widgetClearConfirm") || "清除所有小工具?";
      if (!confirm(t)) return;
      try {
        await api("clear", "POST", {});
        loadWidgets();
      } catch (e) {
        console.error("[admin-widgets] Clear failed:", e);
      }
    }

    // ── Rendering ────────────────────────────────────────────────────────
    const POSITIONS = [
      "top-left", "top-center", "top-right",
      "bottom-left", "bottom-center", "bottom-right", "center",
    ];

    function renderWidgetsList(widgets) {
      const container = document.getElementById("widgets-list");
      if (!container) return;
      container.innerHTML = "";

      if (widgets.length === 0) {
        const empty = document.createElement("div");
        empty.className = "admin-widgets-empty";
        empty.textContent = window.ServerI18n?.t?.("widgetNone") || "尚無小工具，點擊上方按鈕新增。";
        container.appendChild(empty);
        return;
      }

      widgets.forEach((w) => {
        container.appendChild(_renderCard(w));
      });
    }

    function _renderCard(w) {
      const card = document.createElement("div");
      card.className = "admin-widget-card";

      // Head: type kicker + position label + actions
      const head = document.createElement("div");
      head.className = "admin-widget-card-head";

      const typeLabel = document.createElement("span");
      typeLabel.className = "admin-widget-card-type";
      typeLabel.textContent = w.type;
      head.appendChild(typeLabel);

      const posLabel = document.createElement("span");
      posLabel.className = "admin-widget-card-pos";
      posLabel.textContent = "POS · " + (w.position || "?");
      head.appendChild(posLabel);

      const actions = document.createElement("div");
      actions.className = "admin-widget-card-actions";

      const toggleBtn = document.createElement("button");
      toggleBtn.type = "button";
      toggleBtn.className = "admin-poll-btn is-ghost";
      toggleBtn.textContent = w.visible
        ? (window.ServerI18n?.t?.("widgetHide") || "隱藏")
        : (window.ServerI18n?.t?.("widgetShow") || "顯示");
      toggleBtn.addEventListener("click", () => updateWidget(w.id, { visible: !w.visible }));
      actions.appendChild(toggleBtn);

      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "admin-poll-btn is-ghost";
      delBtn.textContent = window.ServerI18n?.t?.("remove") || "移除";
      delBtn.addEventListener("click", () => deleteWidget(w.id));
      actions.appendChild(delBtn);

      head.appendChild(actions);
      card.appendChild(head);

      // Body
      const body = document.createElement("div");
      body.className = "admin-widget-card-body";

      // Position selector row
      const posRow = _selectRow(
        window.ServerI18n?.t?.("widgetPosition") || "POSITION",
        POSITIONS,
        w.position,
        (val) => updateWidget(w.id, { position: val }),
      );
      body.appendChild(posRow);

      // Type-specific controls
      if (w.type === "scoreboard") _renderScoreboardControls(body, w);
      else if (w.type === "ticker") _renderTickerControls(body, w);
      else if (w.type === "label") _renderLabelControls(body, w);

      card.appendChild(body);
      return card;
    }

    function _renderScoreboardControls(body, w) {
      const cfg = w.config || {};

      const titleRow = _inputRow(
        window.ServerI18n?.t?.("widgetScoreboardTitle") || "TITLE",
        cfg.title || "",
        (val) => updateWidget(w.id, { title: val }),
      );
      body.appendChild(titleRow);

      (cfg.teams || []).forEach((team, i) => {
        const row = document.createElement("div");
        row.className = "admin-widget-team";

        const colorInput = document.createElement("input");
        colorInput.type = "color";
        colorInput.value = team.color || "#38bdf8";
        colorInput.className = "admin-widget-team-color";
        colorInput.addEventListener("change", () => {
          const teams = [...cfg.teams];
          teams[i] = { ...teams[i], color: colorInput.value };
          updateWidget(w.id, { teams });
        });
        row.appendChild(colorInput);

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = team.name;
        nameInput.className = "admin-widget-input";
        nameInput.addEventListener("change", () => {
          const teams = [...cfg.teams];
          teams[i] = { ...teams[i], name: nameInput.value };
          updateWidget(w.id, { teams });
        });
        row.appendChild(nameInput);

        const scoreSpan = document.createElement("span");
        scoreSpan.className = "admin-widget-team-score";
        scoreSpan.textContent = team.score;
        row.appendChild(scoreSpan);

        const minusBtn = document.createElement("button");
        minusBtn.type = "button";
        minusBtn.className = "admin-widget-step";
        minusBtn.textContent = "−";
        minusBtn.addEventListener("click", () => updateScore(w.id, i, -1));
        row.appendChild(minusBtn);

        const plusBtn = document.createElement("button");
        plusBtn.type = "button";
        plusBtn.className = "admin-widget-step";
        plusBtn.textContent = "+";
        plusBtn.addEventListener("click", () => updateScore(w.id, i, 1));
        row.appendChild(plusBtn);

        body.appendChild(row);
      });
    }

    function _renderTickerControls(body, w) {
      const cfg = w.config || {};

      const speedRow = document.createElement("div");
      speedRow.className = "admin-widget-row";
      const speedLbl = document.createElement("span");
      speedLbl.className = "lbl";
      speedLbl.textContent = window.ServerI18n?.t?.("speed") || "SPEED";
      speedRow.appendChild(speedLbl);
      const speedSlider = document.createElement("input");
      speedSlider.type = "range";
      speedSlider.min = "10";
      speedSlider.max = "200";
      speedSlider.value = cfg.speed || 60;
      speedSlider.style.flex = "1";
      speedSlider.addEventListener("change", () => {
        updateWidget(w.id, { speed: parseInt(speedSlider.value) });
      });
      speedRow.appendChild(speedSlider);
      const speedVal = document.createElement("span");
      speedVal.style.cssText = "min-width:38px;font-family:var(--font-mono);font-size:12px;color:var(--color-primary,#38bdf8);text-align:right";
      speedVal.textContent = speedSlider.value;
      speedSlider.addEventListener("input", () => { speedVal.textContent = speedSlider.value; });
      speedRow.appendChild(speedVal);
      body.appendChild(speedRow);

      const msgsRow = document.createElement("div");
      msgsRow.className = "admin-widget-row";
      msgsRow.style.alignItems = "flex-start";
      const msgsLbl = document.createElement("span");
      msgsLbl.className = "lbl";
      msgsLbl.textContent = window.ServerI18n?.t?.("widgetTickerMessages") || "MESSAGES";
      msgsRow.appendChild(msgsLbl);
      const textarea = document.createElement("textarea");
      textarea.className = "admin-widget-textarea";
      textarea.value = (cfg.messages || []).join("\n");
      textarea.rows = 3;
      textarea.placeholder = window.ServerI18n?.t?.("widgetTickerPlaceholder") || "每行一則訊息";
      textarea.addEventListener("change", () => {
        const messages = textarea.value.split("\n").filter((m) => m.trim());
        updateWidget(w.id, { messages });
      });
      msgsRow.appendChild(textarea);
      body.appendChild(msgsRow);
    }

    function _renderLabelControls(body, w) {
      const cfg = w.config || {};

      body.appendChild(_inputRow(
        window.ServerI18n?.t?.("widgetLabelText") || "TEXT",
        cfg.text || "",
        (val) => updateWidget(w.id, { text: val }),
      ));

      body.appendChild(_inputRow(
        window.ServerI18n?.t?.("size") || "SIZE",
        String(cfg.fontSize || 24),
        (val) => updateWidget(w.id, { fontSize: parseInt(val) || 24 }),
        "number",
      ));
    }

    function _inputRow(label, value, onChange, type = "text") {
      const row = document.createElement("div");
      row.className = "admin-widget-row";

      const lbl = document.createElement("span");
      lbl.className = "lbl";
      lbl.textContent = label;
      row.appendChild(lbl);

      const input = document.createElement("input");
      input.type = type;
      input.value = value;
      input.className = "admin-widget-input";
      input.addEventListener("change", () => onChange(input.value));
      row.appendChild(input);
      return row;
    }

    function _selectRow(label, options, current, onChange) {
      const row = document.createElement("div");
      row.className = "admin-widget-row";

      const lbl = document.createElement("span");
      lbl.className = "lbl";
      lbl.textContent = label;
      row.appendChild(lbl);

      const select = document.createElement("select");
      select.className = "admin-widget-select";
      options.forEach((opt) => {
        const o = document.createElement("option");
        o.value = opt;
        o.textContent = opt;
        if (opt === current) o.selected = true;
        select.appendChild(o);
      });
      select.addEventListener("change", () => onChange(select.value));
      row.appendChild(select);
      return row;
    }
  });
})();
