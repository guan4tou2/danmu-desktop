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

    // Wait for admin.js to render the settings grid before injecting.
    // admin.js rebuilds the entire DOM via innerHTML on every renderControlPanel()
    // call, so we keep observing and re-inject when our section is wiped out.
    let pluginsInjecting = false;
    const observer = new MutationObserver(() => {
      const settingsGrid = document.getElementById("settings-grid");
      if (!settingsGrid) return;
      if (document.getElementById("sec-plugins") || pluginsInjecting) return;

      pluginsInjecting = true;
      try { injectPluginsSection(settingsGrid); } finally { pluginsInjecting = false; }
    });
    observer.observe(document.getElementById("app-container"), {
      childList: true,
      subtree: true,
    });

    function injectPluginsSection(settingsGrid) {
      // v5 batch10-plugins.jsx retrofit (2026-05-19) \u2014 full v4 chrome
      // rewrite from legacy Tailwind/hud-table. KPI panel grid,
      // admin-ui-page-head, kpi-strip is-4col, plugin-row table with v4
      // pills, console with 4-level filter chips.
      const html = `
        <div id="sec-plugins" class="hud-page-stack lg:col-span-2">
          <div class="admin-ui-page-head">
            <div class="admin-ui-page-kicker">PLUGIN SDK \u00b7 ${ServerI18n.t("pluginsDesc")} \u00b7 HOT-RELOAD</div>
            <div class="admin-ui-page-title">${ServerI18n.t("pluginsTitle")}</div>
          </div>

          <div class="admin-ui-toolbar admin-plugins-toolbar">
            <span class="admin-ui-spacer"></span>
            <button id="pluginsUploadBtn" class="admin-ui-action is-primary admin-plugins-toolbar-btn" type="button">\uff0b \u4e0a\u50b3 .py/.js</button>
            <button id="pluginsReloadBtn" class="admin-ui-action admin-plugins-toolbar-btn" type="button">\u21bb ${ServerI18n.t("reloadBtn")}</button>
          </div>

          <section class="admin-kpi-strip is-4col">
            <div class="admin-kpi-tile is-text" data-plugins-kpi="loaded">
              <div class="admin-kpi-tile-head">
                <span class="label">\u5df2\u8f09\u5165</span>
                <span class="en">LOADED</span>
              </div>
              <div class="admin-kpi-tile-value" data-plugins-stat="loaded">\u2014</div>
              <div class="admin-kpi-tile-delta is-muted">SDK plugin slots</div>
            </div>
            <div class="admin-kpi-tile is-lime" data-plugins-kpi="running">
              <div class="admin-kpi-tile-head">
                <span class="label">\u904b\u884c\u4e2d</span>
                <span class="en">RUNNING</span>
              </div>
              <div class="admin-kpi-tile-value" data-plugins-stat="running">\u2014</div>
              <div class="admin-kpi-tile-delta is-success">\u5373\u6642 enabled</div>
            </div>
            <div class="admin-kpi-tile is-amber" data-plugins-kpi="paused">
              <div class="admin-kpi-tile-head">
                <span class="label">\u5df2\u66ab\u505c</span>
                <span class="en">PAUSED</span>
              </div>
              <div class="admin-kpi-tile-value" data-plugins-stat="paused">\u2014</div>
              <div class="admin-kpi-tile-delta is-warn">\u5f85\u958b\u555f</div>
            </div>
            <div class="admin-kpi-tile is-cyan" data-plugins-kpi="priority">
              <div class="admin-kpi-tile-head">
                <span class="label">\u5e73\u5747\u512a\u5148\u5ea6</span>
                <span class="en">AVG PRIORITY</span>
              </div>
              <div class="admin-kpi-tile-value" data-plugins-stat="priority">\u2014</div>
              <div class="admin-kpi-tile-delta is-info">\u8d8a\u5c0f\u8d8a\u512a\u5148</div>
            </div>
          </section>

          <div class="admin-plugins-card">
            <div class="admin-plugins-table">
              <div class="admin-plugins-row admin-plugins-row--head">
                <span>\u25cf</span>
                <span>PLUGIN \u00b7 \u63cf\u8ff0</span>
                <span>VERSION</span>
                <span>PRIORITY</span>
                <span>LANG</span>
                <span style="text-align:right">STATUS</span>
              </div>
              <div id="pluginsList">
                <div class="admin-plugins-row admin-plugins-empty">
                  <span></span>
                  <span class="admin-plugins-loading">${ServerI18n.t("loadingPlugins")}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="admin-plugins-card admin-plugins-console-card">
            <div class="admin-plugins-console-head">
              <span class="admin-plugins-console-dot"></span>
              <span class="admin-plugins-console-title">LIVE CONSOLE</span>
              <span class="admin-ui-monolabel" style="margin:0">stdout + stderr</span>
              <span class="admin-ui-spacer"></span>
              <span class="admin-ui-chip-group admin-plugins-console-filters" data-console-filters>
                <button type="button" class="admin-ui-chip admin-plugins-console-chip is-active" data-console-filter="all">ALL</button>
                <button type="button" class="admin-ui-chip admin-plugins-console-chip" data-console-filter="INFO">INFO</button>
                <button type="button" class="admin-ui-chip admin-plugins-console-chip" data-console-filter="WARN">WARN</button>
                <button type="button" class="admin-ui-chip admin-plugins-console-chip" data-console-filter="ERROR">ERROR</button>
              </span>
              <span class="admin-ui-monolabel" style="margin-left:8px">TAIL \u00b7 LIVE</span>
            </div>
            <div class="admin-plugins-console-body" id="pluginsConsoleBody">
              <div class="admin-plugins-console-line">
                <span class="ts">\u2014</span>
                <span class="lv is-info">INFO</span>
                <span class="plg">plugin-manager</span>
                <span class="msg">Console stream becomes live when plugins emit stdout/stderr.</span>
              </div>
            </div>
          </div>
        </div>
      `;
      settingsGrid.insertAdjacentHTML("beforeend", html);

      // Wire console filter chips
      const filtersHost = document.querySelector("[data-console-filters]");
      if (filtersHost) {
        filtersHost.addEventListener("click", (e) => {
          const btn = e.target.closest("[data-console-filter]");
          if (!btn) return;
          filtersHost.querySelectorAll("[data-console-filter]").forEach((b) =>
            b.classList.toggle("is-active", b === btn)
          );
          _consoleFilter = btn.dataset.consoleFilter;
          renderConsole();
        });
      }

      // Wire up reload button
      document
        .getElementById("pluginsReloadBtn")
        .addEventListener("click", reloadPlugins);

      // Initial load
      fetchPlugins();
      // Live console tail
      startConsoleTail();
    }

    // ---- Live console tail (LIVE CONSOLE panel) ----

    let _consoleSeq = 0;
    let _consoleTimer = 0;
    let _consoleFilter = "all";  // all / INFO / WARN / ERROR
    const _consoleLines = [];
    const CONSOLE_MAX_LINES = 80;

    function lvClass(level) {
      const lv = (level || "INFO").toUpperCase();
      if (lv === "ERROR") return "is-error";
      if (lv === "WARN") return "is-warn";
      if (lv === "DEBUG") return "is-debug";
      return "is-info";
    }

    function fmtConsoleTime(ts) {
      const d = new Date(ts * 1000);
      const pad = (n) => String(n).padStart(2, "0");
      return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    }

    function renderConsole() {
      const body = document.getElementById("pluginsConsoleBody");
      if (!body) return;
      const filtered = _consoleFilter === "all"
        ? _consoleLines
        : _consoleLines.filter((e) => (e.level || "INFO").toUpperCase() === _consoleFilter);
      if (filtered.length === 0) {
        const hint = _consoleFilter === "all"
          ? "Console stream becomes live when plugins emit stdout/stderr."
          : `No ${_consoleFilter} lines yet · waiting…`;
        body.innerHTML = `
          <div class="admin-plugins-console-line">
            <span class="ts">—</span>
            <span class="lv is-info">INFO</span>
            <span class="plg">plugin-manager</span>
            <span class="msg">${hint}</span>
          </div>`;
        return;
      }
      body.innerHTML = filtered.map((e) => {
        const ts = fmtConsoleTime(e.ts);
        const msg = (e.msg || "").replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c]));
        const plugin = (e.plugin || "—").replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c]));
        const lv = (e.level || "INFO").toUpperCase();
        return `<div class="admin-plugins-console-line">
          <span class="ts">${ts}</span>
          <span class="lv ${lvClass(e.level)}">${lv}</span>
          <span class="plg">${plugin}</span>
          <span class="msg">${msg}</span>
        </div>`;
      }).join("");
    }

    async function pollConsole() {
      try {
        const r = await fetch(`/admin/plugins/console?since=${_consoleSeq}`, { credentials: "same-origin" });
        if (!r.ok) return;
        const data = await r.json();
        if (!Array.isArray(data.events) || data.events.length === 0) return;
        // Server returns newest-first; prepend so the panel shows newest first.
        _consoleLines.unshift(...data.events);
        while (_consoleLines.length > CONSOLE_MAX_LINES) _consoleLines.pop();
        _consoleSeq = data.latest_seq || _consoleSeq;
        renderConsole();
      } catch (_) { /* silent */ }
    }

    function startConsoleTail() {
      if (_consoleTimer) return;
      pollConsole();
      _consoleTimer = setInterval(pollConsole, 5000);
    }

    // ---- API helpers ----

    async function fetchPlugins() {
      const listEl = document.getElementById("pluginsList");
      if (!listEl) return;

      try {
        const res = await csrfFetch("/admin/plugins/list");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        const plugins = data.plugins || [];

        if (plugins.length === 0) {
          listEl.innerHTML =
            '<div class="admin-plugins-row admin-plugins-empty">' +
            '<span></span><span class="admin-plugins-loading">' +
            ServerI18n.t("noPluginsFound") +
            "</span></div>";
          renderPluginsStats([]);
          return;
        }

        listEl.innerHTML = plugins.map(renderPlugin).join("");
        bindToggleListeners(listEl);
        renderPluginsStats(plugins);
      } catch (err) {
        console.error("Failed to load plugins:", err);
        listEl.innerHTML =
          '<div class="admin-plugins-row admin-plugins-empty is-error">' +
          '<span></span><span class="admin-plugins-loading">' +
          ServerI18n.t("loadPluginsFailed") +
          "</span></div>";
      }
    }

    function renderPluginsStats(plugins) {
      const loaded = plugins.length;
      const running = plugins.filter((p) => p.enabled).length;
      const paused = loaded - running;
      const priorityList = plugins
        .map((p) => p.priority)
        .filter((p) => typeof p === "number");
      const avgPriority = priorityList.length
        ? Math.round(
            priorityList.reduce((sum, v) => sum + v, 0) / priorityList.length,
          )
        : null;

      const set = (key, value) => {
        document
          .querySelectorAll(`[data-plugins-stat="${key}"]`)
          .forEach((el) => {
            el.textContent = value;
          });
      };
      set("loaded", loaded);
      set("running", running);
      set("paused", paused);
      set("priority", avgPriority != null ? avgPriority : "—");
    }

    function renderPlugin(plugin) {
      const { name, version, description, priority, enabled, is_user: isUser, file: filename } = plugin;
      const toggleId = `plugin-toggle-${name}`;
      const priorityCls = priorityPillClass(priority);
      const priorityLabel = priorityLabelFor(priority);
      const lang = detectLang(plugin);

      // v5 batch10-plugins.jsx row spec: dot / name+desc / version mono /
      // PRI · LABEL pill (3-color) / LANG pill / sliding toggle switch.
      // User-uploaded plugins get an extra ⊘ uninstall icon — bundled
      // examples stay read-only (no removal button).
      const uninstallBtn = isUser && filename
        ? `<button type="button" class="plugin-uninstall admin-plugins-uninstall"
            data-plugin-filename="${escapeHtml(filename)}"
            data-plugin-name="${escapeHtml(name)}"
            title="移除此使用者上傳的插件"
            aria-label="Uninstall plugin ${escapeHtml(name)}">⊘</button>`
        : "";

      return `
        <div class="admin-plugins-row" data-plugin="${escapeHtml(name)}">
          <span class="admin-plugins-dot ${enabled ? "is-running" : "is-paused"}" aria-hidden="true"></span>
          <div class="admin-plugins-cell-name">
            <div class="name">${escapeHtml(name)}</div>
            ${description ? `<div class="desc">${escapeHtml(description)}</div>` : ""}
          </div>
          <span class="admin-plugins-ver">${version ? "v" + escapeHtml(version) : "—"}</span>
          <span class="admin-ui-pill admin-plugins-pill ${priorityCls}">${priority != null ? priority : "—"}${priorityLabel ? " · " + priorityLabel : ""}</span>
          <span class="admin-ui-pill admin-plugins-pill is-lang ${langPillClass(lang)}">${lang}</span>
          <div class="admin-plugins-toggle-cell">
            ${uninstallBtn}
            <label class="admin-plugins-switch" for="${toggleId}">
              <input type="checkbox" id="${toggleId}" role="switch"
                aria-checked="${!!enabled}" aria-label="Toggle plugin ${escapeHtml(name)}"
                class="plugin-toggle admin-plugins-switch-input"
                data-plugin-name="${escapeHtml(name)}"
                ${enabled ? "checked" : ""} />
              <span class="admin-plugins-switch-track">
                <span class="admin-plugins-switch-thumb"></span>
              </span>
            </label>
          </div>
        </div>
      `;
    }

    async function uninstallPlugin(name, filename) {
      if (!confirm(`確定移除插件「${name}」？\n\n檔案 server/user_plugins/${filename} 會被刪除，無法復原。`)) return;
      try {
        const res = await csrfFetch("/admin/plugins/uninstall", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          showToast(data.error || `移除失敗 (HTTP ${res.status})`, false);
          return;
        }
        showToast(`${name} 已移除`, true);
        await fetchPlugins();
      } catch (e) {
        showToast(`網路錯誤：${e.message || ""}`, false);
      }
    }

    function detectLang(plugin) {
      const file = plugin.file || plugin.path || plugin.source || "";
      if (typeof file === "string") {
        if (file.endsWith(".py")) return "PY";
        if (file.endsWith(".js")) return "JS";
      }
      return (plugin.language || "PY").toUpperCase();
    }

    function priorityPillClass(priority) {
      if (priority == null) return "is-muted";
      if (priority <= 10) return "is-danger";
      if (priority <= 50) return "is-warn";
      return "is-cyan";
    }

    function langPillClass(lang) {
      if (lang === "JS") return "is-cyan";
      if (lang === "PY") return "is-warn";
      return "is-muted";
    }

    function priorityLabelFor(priority) {
      if (priority == null) return "";
      if (priority <= 10) return "CRITICAL";
      if (priority <= 50) return "HIGH";
      return "NORMAL";
    }

    function bindToggleListeners(container) {
      container.querySelectorAll(".plugin-toggle").forEach((toggle) => {
        toggle.addEventListener("change", async function () {
          const pluginName = this.dataset.pluginName;
          const enable = this.checked;
          await togglePlugin(pluginName, enable, this);
        });
      });
      // v5 Batch 11 follow-up — uninstall button on user-uploaded rows.
      container.querySelectorAll(".plugin-uninstall").forEach((btn) => {
        btn.addEventListener("click", function () {
          uninstallPlugin(this.dataset.pluginName, this.dataset.pluginFilename);
        });
      });
    }

    async function togglePlugin(name, enable, toggleEl) {
      const endpoint = enable
        ? "/admin/plugins/enable"
        : "/admin/plugins/disable";

      try {
        const res = await csrfFetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || `HTTP ${res.status}`);
        }

        showToast(
          enable ? ServerI18n.t("pluginEnabled").replace("{name}", name) : ServerI18n.t("pluginDisabled").replace("{name}", name),
          true
        );
      } catch (err) {
        console.error(`Failed to ${enable ? "enable" : "disable"} plugin:`, err);
        showToast(err.message || ServerI18n.t("operationFailed"), false);
        // Revert toggle state
        if (toggleEl) toggleEl.checked = !enable;
      }
    }

    async function reloadPlugins() {
      const btn = document.getElementById("pluginsReloadBtn");
      if (btn) btn.disabled = true;

      try {
        const res = await csrfFetch("/admin/plugins/reload", {
          method: "POST",
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || `HTTP ${res.status}`);
        }

        showToast(ServerI18n.t("pluginsReloaded"), true);
        await fetchPlugins();
      } catch (err) {
        console.error("Failed to reload plugins:", err);
        showToast(err.message || ServerI18n.t("reloadFailed"), false);
      } finally {
        if (btn) btn.disabled = false;
      }
    }

  });
})();
