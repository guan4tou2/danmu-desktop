(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    var loadDetailsState = window.AdminUtils.loadDetailsState;
    var saveDetailsState = window.AdminUtils.saveDetailsState;
    var escapeHtml = window.AdminUtils.escapeHtml;

    function isOpen(id, defaultOpen = false) {
      var state = loadDetailsState();
      return state[id] !== undefined ? state[id] : defaultOpen;
    }

    function saveDetailsToggle(detailsEl) {
      var state = loadDetailsState();
      state[detailsEl.id] = detailsEl.open;
      saveDetailsState(state);
    }

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
      const section = document.createElement("details");
      section.id = "sec-widgets";
      section.className = "settings-card";
      if (isOpen("sec-widgets")) section.setAttribute("open", "");
      section.addEventListener("toggle", () => saveDetailsToggle(section));

      section.innerHTML = `
        <summary><strong>${escapeHtml(ServerI18n.t("widgetsTitle"))}</strong>
          <span class="desc">${escapeHtml(ServerI18n.t("widgetsDesc"))}</span>
        </summary>
        <div class="settings-content" style="padding:12px;">
          <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
            <button id="widget-add-scoreboard" class="btn btn-sm">+ ${escapeHtml(ServerI18n.t("widgetScoreboard"))}</button>
            <button id="widget-add-ticker" class="btn btn-sm">+ ${escapeHtml(ServerI18n.t("widgetTicker"))}</button>
            <button id="widget-add-label" class="btn btn-sm">+ ${escapeHtml(ServerI18n.t("widgetLabel"))}</button>
            <button id="widget-clear-all" class="btn btn-sm btn-danger" style="margin-left:auto;">
              ${escapeHtml(ServerI18n.t("clearAll"))}
            </button>
          </div>
          <div id="widgets-list"></div>
        </div>`;

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
      const defaults = {
        scoreboard: {
          title: "Score",
          teams: [
            { name: "Team A", score: 0, color: "#06b6d4" },
            { name: "Team B", score: 0, color: "#f43f5e" },
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
      if (!confirm(ServerI18n.t("widgetDeleteConfirm"))) return;
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
      if (!confirm(ServerI18n.t("widgetClearConfirm"))) return;
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
        container.innerHTML = `<div style="color:#94a3b8;font-size:13px;padding:12px;">${escapeHtml(ServerI18n.t("widgetNone"))}</div>`;
        return;
      }

      widgets.forEach((w) => {
        const card = document.createElement("div");
        card.style.cssText = "border:1px solid #334155;border-radius:8px;padding:12px;margin-bottom:10px;background:#0f172a;";

        const header = document.createElement("div");
        header.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;";

        const typeLabel = document.createElement("span");
        typeLabel.style.cssText = "font-weight:bold;text-transform:uppercase;font-size:11px;letter-spacing:1px;color:#06b6d4;";
        typeLabel.textContent = w.type;
        header.appendChild(typeLabel);

        const actions = document.createElement("div");
        actions.style.display = "flex";
        actions.style.gap = "6px";

        const toggleBtn = document.createElement("button");
        toggleBtn.className = "btn btn-sm";
        toggleBtn.textContent = w.visible ? ServerI18n.t("widgetHide") : ServerI18n.t("widgetShow");
        toggleBtn.addEventListener("click", () => updateWidget(w.id, { visible: !w.visible }));
        actions.appendChild(toggleBtn);

        const delBtn = document.createElement("button");
        delBtn.className = "btn btn-sm btn-danger";
        delBtn.textContent = ServerI18n.t("remove");
        delBtn.addEventListener("click", () => deleteWidget(w.id));
        actions.appendChild(delBtn);

        header.appendChild(actions);
        card.appendChild(header);

        // Position selector
        const posRow = document.createElement("div");
        posRow.style.cssText = "margin-bottom:8px;display:flex;align-items:center;gap:8px;";
        const posLabel = document.createElement("span");
        posLabel.style.cssText = "font-size:12px;color:#94a3b8;";
        posLabel.textContent = ServerI18n.t("widgetPosition") + ":";
        posRow.appendChild(posLabel);

        const posSelect = document.createElement("select");
        posSelect.style.cssText = "font-size:12px;background:#1e293b;color:white;border:1px solid #334155;border-radius:4px;padding:2px 6px;";
        POSITIONS.forEach((p) => {
          const opt = document.createElement("option");
          opt.value = p;
          opt.textContent = p;
          if (p === w.position) opt.selected = true;
          posSelect.appendChild(opt);
        });
        posSelect.addEventListener("change", () => updateWidget(w.id, { position: posSelect.value }));
        posRow.appendChild(posSelect);
        card.appendChild(posRow);

        // Type-specific controls
        if (w.type === "scoreboard") renderScoreboardControls(card, w);
        else if (w.type === "ticker") renderTickerControls(card, w);
        else if (w.type === "label") renderLabelControls(card, w);

        container.appendChild(card);
      });
    }

    function renderScoreboardControls(card, w) {
      const cfg = w.config || {};

      // Title input
      const titleRow = _inputRow(ServerI18n.t("widgetScoreboardTitle"), cfg.title || "", (val) => {
        updateWidget(w.id, { title: val });
      });
      card.appendChild(titleRow);

      // Teams
      (cfg.teams || []).forEach((team, i) => {
        const teamRow = document.createElement("div");
        teamRow.style.cssText = "display:flex;align-items:center;gap:8px;margin-top:6px;";

        const colorInput = document.createElement("input");
        colorInput.type = "color";
        colorInput.value = team.color || "#06b6d4";
        colorInput.style.cssText = "width:28px;height:28px;border:none;cursor:pointer;";
        colorInput.addEventListener("change", () => {
          const teams = [...cfg.teams];
          teams[i] = { ...teams[i], color: colorInput.value };
          updateWidget(w.id, { teams });
        });
        teamRow.appendChild(colorInput);

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = team.name;
        nameInput.style.cssText = "flex:1;background:#1e293b;color:white;border:1px solid #334155;border-radius:4px;padding:4px 8px;font-size:13px;";
        nameInput.addEventListener("change", () => {
          const teams = [...cfg.teams];
          teams[i] = { ...teams[i], name: nameInput.value };
          updateWidget(w.id, { teams });
        });
        teamRow.appendChild(nameInput);

        const scoreDisplay = document.createElement("span");
        scoreDisplay.style.cssText = "font-size:20px;font-weight:bold;min-width:30px;text-align:center;";
        scoreDisplay.textContent = team.score;
        teamRow.appendChild(scoreDisplay);

        const minusBtn = document.createElement("button");
        minusBtn.className = "btn btn-sm";
        minusBtn.textContent = "-";
        minusBtn.addEventListener("click", () => updateScore(w.id, i, -1));
        teamRow.appendChild(minusBtn);

        const plusBtn = document.createElement("button");
        plusBtn.className = "btn btn-sm";
        plusBtn.textContent = "+";
        plusBtn.addEventListener("click", () => updateScore(w.id, i, 1));
        teamRow.appendChild(plusBtn);

        card.appendChild(teamRow);
      });
    }

    function renderTickerControls(card, w) {
      const cfg = w.config || {};

      // Speed slider
      const speedRow = document.createElement("div");
      speedRow.style.cssText = "display:flex;align-items:center;gap:8px;margin-bottom:6px;";
      const speedLabel = document.createElement("span");
      speedLabel.style.cssText = "font-size:12px;color:#94a3b8;min-width:60px;";
      speedLabel.textContent = ServerI18n.t("speed") + ":";
      speedRow.appendChild(speedLabel);

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
      card.appendChild(speedRow);

      // Messages textarea
      const msgsLabel = document.createElement("div");
      msgsLabel.style.cssText = "font-size:12px;color:#94a3b8;margin-bottom:4px;";
      msgsLabel.textContent = ServerI18n.t("widgetTickerMessages") + ":";
      card.appendChild(msgsLabel);

      const textarea = document.createElement("textarea");
      textarea.value = (cfg.messages || []).join("\n");
      textarea.rows = 3;
      textarea.style.cssText = "width:100%;background:#1e293b;color:white;border:1px solid #334155;border-radius:4px;padding:6px 8px;font-size:13px;resize:vertical;";
      textarea.placeholder = ServerI18n.t("widgetTickerPlaceholder");
      textarea.addEventListener("change", () => {
        const messages = textarea.value.split("\n").filter((m) => m.trim());
        updateWidget(w.id, { messages });
      });
      card.appendChild(textarea);
    }

    function renderLabelControls(card, w) {
      const cfg = w.config || {};

      const textRow = _inputRow(ServerI18n.t("widgetLabelText"), cfg.text || "", (val) => {
        updateWidget(w.id, { text: val });
      });
      card.appendChild(textRow);

      const sizeRow = _inputRow(ServerI18n.t("size"), String(cfg.fontSize || 24), (val) => {
        updateWidget(w.id, { fontSize: parseInt(val) || 24 });
      }, "number");
      card.appendChild(sizeRow);
    }

    function _inputRow(label, value, onChange, type = "text") {
      const row = document.createElement("div");
      row.style.cssText = "display:flex;align-items:center;gap:8px;margin-bottom:6px;";

      const lbl = document.createElement("span");
      lbl.style.cssText = "font-size:12px;color:#94a3b8;min-width:60px;";
      lbl.textContent = label + ":";
      row.appendChild(lbl);

      const input = document.createElement("input");
      input.type = type;
      input.value = value;
      input.style.cssText = "flex:1;background:#1e293b;color:white;border:1px solid #334155;border-radius:4px;padding:4px 8px;font-size:13px;";
      input.addEventListener("change", () => onChange(input.value));
      row.appendChild(input);

      return row;
    }
  });
})();
