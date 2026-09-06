// admin-widgets.js — Overlay widgets manager (P6-2 split, v5.0.0 Soft Holo retrofit)
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

    // 這個模組裡到處都要翻譯，包含 section 注入之後才跑的列與預覽渲染，
    // 所以放在最外層而不是 injectWidgetsSection 裡。
    const i18n = (k, fallback) => {
      const v = window.ServerI18n?.t?.(k);
      return (v && v !== k) ? v : (fallback || k);
    };

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

      // v5 Batch 12-6 (2026-05-19): added KPI strip + right-rail OBS
      // Browser Source URL card per batch12-overlay-widgets.jsx
      // OverlayWidgetsPage. The widget cards themselves keep the
      // existing edit-modal flow — only the page chrome lifts to v5.
      const obsBase = location.origin + "/overlay";
      section.dataset.tpl = "B";
      // 設計稿 08 · W1：左邊是三列摘要（圖示＋名稱＋摘要＋›），右邊是
      // 真的「大螢幕預覽」。
      //
      // 退場的是三格 KPI（小工具總數／使用中／種類數——一眼就數得完的東西
      // 不需要一條統計列）與三顆並排的「+ 計分板／+ 跑馬燈／+ 標籤」，後者
      // 收成頁首右側一顆「新增小工具」。原本右欄那塊「大螢幕預覽」是一個寫死
      // 的 <span>Desktop preview</span> 佔位——現在它真的畫出小工具擺在哪。
      section.innerHTML = `
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${escapeHtml(i18n("widgetsTitle"))}</h2>
          <p class="admin-ui-page-note">${escapeHtml(i18n("widgetsDesc"))}</p>
        </div>

        <div class="hud-page-grid-2">
          <div class="hud-page-stack" style="gap:12px">
            <!-- 稿上這顆鈕在頁首右側，但 admin shell 會把「標題與路由同名」的
                 頁首整塊併進 topbar（is-merged-into-topbar），放進去會直接消失。
                 把「路由主要動作」做成 shell 的插槽是一次要為所有頁面做的事，
                 不該夾帶在這一頁裡，所以先靠右擺在清單上方。 -->
            <div class="admin-ow-addrow">
              <button id="widget-add" type="button" class="admin-ui-action is-primary">
                ${escapeHtml(i18n("widgetsAddBtn"))}
              </button>
              <div class="admin-ow-addmenu" data-ow-addmenu hidden>
                <button type="button" data-ow-add="scoreboard">${escapeHtml(i18n("widgetScoreboard"))}</button>
                <button type="button" data-ow-add="ticker">${escapeHtml(i18n("widgetTicker"))}</button>
                <button type="button" data-ow-add="label">${escapeHtml(i18n("widgetLabel"))}</button>
              </div>
            </div>
            <div id="widgets-list" class="admin-widgets-list"></div>
            <div class="admin-widgets-actions">
              <button id="widget-clear-all" type="button" class="admin-ui-action is-danger admin-widget-toolbar-action">
                ${escapeHtml(i18n("clearAll"))}
              </button>
            </div>
          </div>

          <aside class="hud-page-stack" style="gap:12px;position:sticky;top:0">
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${escapeHtml(i18n("widgetsPreviewLabel"))}</div>
              <div class="admin-ow-stage" data-ow-stage></div>
              <p class="admin-ow-card-note">${escapeHtml(i18n("widgetsDragHint"))}</p>
            </div>
            <div class="admin-ui-card admin-ow-railcard">
              <div class="admin-ui-monolabel">${escapeHtml(i18n("widgetsObsLabel"))}</div>
              <p class="admin-ow-card-note">
                ${escapeHtml(i18n("widgetsObsNote"))}
              </p>
              <div class="admin-ow-urlrow">
                <code class="admin-ow-url" data-ow-obs-url>${escapeHtml(obsBase)}</code>
                <button type="button" class="admin-ui-action admin-widget-toolbar-action" data-ow-copy>${escapeHtml(i18n("widgetsCopyBtn"))}</button>
              </div>
              <div class="admin-ow-card-meta">
                <span>${escapeHtml(i18n("widgetsResolutionHint"))}</span><code>1920 × 1080</code>
              </div>
            </div>
          </aside>
        </div>`;

      grid.appendChild(section);

      const addBtn = document.getElementById("widget-add");
      const addMenu = section.querySelector("[data-ow-addmenu]");
      addBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        addMenu.hidden = !addMenu.hidden;
      });
      addMenu.addEventListener("click", (e) => {
        const kind = e.target.closest("[data-ow-add]")?.dataset.owAdd;
        if (!kind) return;
        addMenu.hidden = true;
        createWidget(kind);
      });
      document.addEventListener("click", (e) => {
        if (!addMenu.hidden && !e.target.closest(".admin-ow-addrow")) addMenu.hidden = true;
      });
      document.getElementById("widget-clear-all").addEventListener("click", clearAllWidgets);

      // v5: OBS URL copy
      section.querySelector("[data-ow-copy]")?.addEventListener("click", () => {
        const url = section.querySelector("[data-ow-obs-url]")?.textContent || "";
        navigator.clipboard?.writeText(url).then(
          () => window.showToast?.(ServerI18n.t("widgetsToastUrlCopied"), true),
          () => window.showToast?.(ServerI18n.t("widgetsToastCopyFailed"), false)
        );
      });

      loadWidgets();
    }

    // v5: update KPI strip whenever the widget list changes.
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
      // Defaults stay in the locked palette; the user can
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
      const t = ServerI18n.t("widgetDeleteConfirm");
      const ok = await window.HudConfirm?.open({
        icon: "⊘",
        title: ServerI18n.t("widgetsDeleteTitle"),
        subtitle: "DELETE WIDGET",
        severity: "danger",
        body: t,
        confirmLabel: ServerI18n.t("widgetsDeleteConfirmBtn"),
      });
      if (!ok) return;
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
      const t = ServerI18n.t("widgetClearConfirm");
      const ok = await window.HudConfirm?.open({
        icon: "⊘",
        title: ServerI18n.t("widgetsClearTitle"),
        subtitle: "CLEAR ALL WIDGETS · THIS ACTION CANNOT BE UNDONE",
        severity: "danger",
        body: t,
        confirmLabel: ServerI18n.t("clearAll"),
      });
      if (!ok) return;
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
      _renderStage(widgets);

      if (widgets.length === 0) {
        // D-6 批次二 (2026-07-29): 原文案指向「上方按鈕」卻不給按鈕——
        // 換共用 AdminEmpty 並直接給 CTA。
        const card = window.AdminEmpty.renderCustom({
          icon: "⬚",
          title: ServerI18n.t("widgetNone"),
          desc: ServerI18n.t("widgetsEmptyDesc"),
          actionLabel: ServerI18n.t("widgetsEmptyAction"),
          action: () => document.getElementById("widget-add")?.click(),
        });
        card.dataset.emptyKind = "widgets";
        container.appendChild(card);
        return;
      }

      widgets.forEach((w) => {
        container.appendChild(_renderCard(w));
      });
    }

    // ── 一列＝圖示＋名稱＋摘要＋›（設計稿 08 · W1）────────────────────
    //
    // 之前每一列都是「永遠攤開的編輯器」，頂上還掛著 L0 圖層碼、type slug、
    // `/overlay/scoreboard` 這種內部路徑、以及 `POS · top-right`。主持人掃這
    // 一頁是要確認「大螢幕上現在擺了什麼」，不是要讀規格。摘要照稿寫成
    // 「資工 12 · 電機 9 · 右上」，編輯器收到 › 後面。

    const KIND_ICON = { scoreboard: "▦", ticker: "≋", label: "▭" };

    function _posLabel(pos) {
      return i18n("widgetPos_" + String(pos || "top-left").replace("-", "_"), pos || "");
    }

    function _summary(w) {
      const cfg = w.config || {};
      let head = "";
      if (w.type === "scoreboard") {
        head = (cfg.teams || [])
          .map((t) => `${t.name} ${t.score}`)
          .join(" · ");
      } else if (w.type === "ticker") {
        head = (cfg.messages || [])[0] || "";
        if (head) head = `「${head}」`;
      } else if (w.type === "label") {
        head = cfg.text ? `「${cfg.text}」` : "";
      }
      const pos = _posLabel(w.position);
      return head ? `${head} · ${pos}` : pos;
    }

    function _kindLabel(type) {
      if (type === "scoreboard") return i18n("widgetScoreboard");
      if (type === "ticker") return i18n("widgetTicker");
      if (type === "label") return i18n("widgetLabel");
      return type;
    }

    function _renderCard(w) {
      const card = document.createElement("div");
      card.className = "admin-widget-card";
      if (w.visible !== false) card.classList.add("is-on");

      const row = document.createElement("button");
      row.type = "button";
      row.className = "admin-widget-summary";
      row.setAttribute("aria-expanded", "false");
      row.innerHTML =
        '<span class="admin-widget-summary-icon" aria-hidden="true">' +
        escapeHtml(KIND_ICON[w.type] || "▫") + "</span>" +
        '<span class="admin-widget-summary-name">' + escapeHtml(_kindLabel(w.type)) + "</span>" +
        '<span class="admin-widget-summary-text">' + escapeHtml(_summary(w)) + "</span>" +
        (w.visible === false
          ? '<span class="admin-widget-summary-off">' + escapeHtml(i18n("widgetHiddenChip")) + "</span>"
          : "") +
        '<span class="admin-widget-summary-chev" aria-hidden="true">›</span>';
      card.appendChild(row);

      const body = document.createElement("div");
      body.className = "admin-widget-card-body";
      body.hidden = true;

      row.addEventListener("click", () => {
        body.hidden = !body.hidden;
        row.setAttribute("aria-expanded", body.hidden ? "false" : "true");
        card.classList.toggle("is-open", !body.hidden);
      });

      const posRow = _selectRow(
        i18n("widgetPosition"),
        POSITIONS,
        w.position,
        (val) => updateWidget(w.id, { position: val }),
      );
      body.appendChild(posRow);

      if (w.type === "scoreboard") _renderScoreboardControls(body, w);
      else if (w.type === "ticker") _renderTickerControls(body, w);
      else if (w.type === "label") _renderLabelControls(body, w);

      const actions = document.createElement("div");
      actions.className = "admin-widget-card-actions";

      const toggleBtn = document.createElement("button");
      toggleBtn.type = "button";
      toggleBtn.className = "admin-ui-action admin-widget-card-action";
      toggleBtn.textContent = w.visible ? i18n("widgetHide") : i18n("widgetShow");
      toggleBtn.addEventListener("click", () => updateWidget(w.id, { visible: !w.visible }));
      actions.appendChild(toggleBtn);

      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "admin-ui-action is-danger admin-widget-card-action";
      delBtn.textContent = i18n("remove");
      delBtn.addEventListener("click", () => deleteWidget(w.id));
      actions.appendChild(delBtn);

      body.appendChild(actions);
      card.appendChild(body);
      return card;
    }

    // ── 大螢幕預覽（設計稿 08 · W1）──────────────────────────────────
    //
    // 原本這塊是寫死的 `<span>Desktop preview</span>`。稿上它要「實際渲染
    // 計分板、底部跑馬燈、已關閉的標籤（灰）」，而且說明那句「拖預覽裡的方塊
    // 可改位置」得是真的——所以方塊可以拖，放開時吸附到最近的預設位置。

    const _STAGE_SPOTS = {
      "top-left": [0, 0], "top-center": [1, 0], "top-right": [2, 0],
      "center": [1, 1],
      "bottom-left": [0, 2], "bottom-center": [1, 2], "bottom-right": [2, 2],
    };

    function _nearestPosition(xRatio, yRatio) {
      let best = "top-left";
      let bestDist = Infinity;
      for (const [name, [cx, cy]] of Object.entries(_STAGE_SPOTS)) {
        const dx = xRatio - cx / 2;
        const dy = yRatio - cy / 2;
        const dist = dx * dx + dy * dy;
        if (dist < bestDist) { bestDist = dist; best = name; }
      }
      return best;
    }

    function _stageBoxLabel(w) {
      const cfg = w.config || {};
      if (w.type === "scoreboard") {
        return (cfg.teams || []).map((t) => `${t.name} ${t.score}`).join("  ") || i18n("widgetScoreboard");
      }
      if (w.type === "ticker") return (cfg.messages || [])[0] || i18n("widgetTicker");
      if (w.type === "label") return cfg.text || i18n("widgetLabel");
      return w.type;
    }

    function _renderStage(widgets) {
      const stage = document.querySelector("[data-ow-stage]");
      if (!stage) return;
      stage.innerHTML = "";
      if (!widgets.length) {
        stage.innerHTML = '<span class="admin-ow-stage-empty">' +
          escapeHtml(i18n("widgetsStageEmpty")) + "</span>";
        return;
      }
      widgets.forEach((w) => {
        const box = document.createElement("div");
        box.className = "admin-ow-box is-" + (w.position || "top-left");
        if (w.visible === false) box.classList.add("is-off");
        box.dataset.owBox = w.id;
        box.draggable = true;
        box.textContent = _stageBoxLabel(w);
        box.title = _kindLabel(w.type);
        box.addEventListener("dragend", (e) => {
          const rect = stage.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          const x = (e.clientX - rect.left) / rect.width;
          const y = (e.clientY - rect.top) / rect.height;
          if (x < 0 || x > 1 || y < 0 || y > 1) return;
          const pos = _nearestPosition(x, y);
          if (pos !== w.position) updateWidget(w.id, { position: pos });
        });
        stage.appendChild(box);
      });
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
      speedVal.style.cssText = "min-width:38px;font-family:var(--font-mono);font-size:13px;color: var(--color-ink-accent);text-align:right";
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
      textarea.placeholder = ServerI18n.t("widgetTickerPlaceholder");
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
