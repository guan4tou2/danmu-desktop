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
      const html = `
        <div id="sec-plugins" class="hud-page-stack lg:col-span-2">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-bold text-white">${ServerI18n.t("pluginsTitle")}</h3>
              <p class="text-sm text-slate-300">${ServerI18n.t("pluginsDesc")}</p>
            </div>
            <button id="pluginsReloadBtn" class="hud-toolbar-action" type="button">
              + \u4e0a\u50b3 .py/.js \u00b7 \u21bb ${ServerI18n.t("reloadBtn")}
            </button>
          </div>

          <div class="hud-stats-strip" id="pluginsStatsStrip">
            <div class="hud-stat-tile">
              <span class="hud-stat-tile-en">LOADED</span>
              <span class="hud-stat-tile-value" data-plugins-stat="loaded">\u2014</span>
              <span class="hud-stat-tile-label">\u5df2\u8f09\u5165</span>
            </div>
            <div class="hud-stat-tile">
              <span class="hud-stat-tile-en">RUNNING</span>
              <span class="hud-stat-tile-value is-lime" data-plugins-stat="running">\u2014</span>
              <span class="hud-stat-tile-label">\u904b\u884c\u4e2d</span>
            </div>
            <div class="hud-stat-tile">
              <span class="hud-stat-tile-en">PAUSED</span>
              <span class="hud-stat-tile-value is-amber" data-plugins-stat="paused">\u2014</span>
              <span class="hud-stat-tile-label">\u5df2\u66ab\u505c</span>
            </div>
            <div class="hud-stat-tile">
              <span class="hud-stat-tile-en">PRIORITY \u00b7 AVG</span>
              <span class="hud-stat-tile-value is-cyan" data-plugins-stat="priority">\u2014</span>
              <span class="hud-stat-tile-label">\u5e73\u5747\u512a\u5148\u5ea6</span>
            </div>
          </div>

          <div class="hud-table" id="pluginsTable">
            <div class="hud-table-head" style="grid-template-columns: 24px 1fr 120px 100px 80px 100px;">
              <span>\u25cf</span>
              <span>PLUGIN \u00b7 \u63cf\u8ff0</span>
              <span>VERSION</span>
              <span>PRIORITY</span>
              <span>LANG</span>
              <span style="text-align:right">STATUS</span>
            </div>
            <div id="pluginsList">
              <div class="hud-table-row" style="grid-template-columns: 1fr;">
                <span class="text-xs text-slate-400">${ServerI18n.t("loadingPlugins")}</span>
              </div>
            </div>
          </div>

          <div class="hud-console">
            <div class="hud-console-head">
              <span class="hud-status-dot is-live"></span>
              <span style="font-size:13px;font-weight:600;color:var(--color-text-strong)">LIVE CONSOLE</span>
              <span class="admin-v3-card-kicker" style="margin:0">stdout + stderr \u00b7 filter by plugin</span>
              <span style="margin-left:auto;font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:0.1em">TAIL \u00b7 LIVE</span>
            </div>
            <div class="hud-console-body" id="pluginsConsoleBody">
              <div class="hud-console-line">
                <span style="color:var(--color-text-muted)">\u2014</span>
                <span class="hud-console-lv-debug">INFO</span>
                <span style="color:var(--color-primary)">plugin-manager</span>
                <span style="color:var(--color-text-strong)">Console stream becomes live when plugins emit stdout/stderr.</span>
              </div>
            </div>
          </div>
        </div>
      `;
      settingsGrid.insertAdjacentHTML("beforeend", html);

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
    const _consoleLines = [];
    const CONSOLE_MAX_LINES = 80;

    function lvClass(level) {
      const lv = (level || "INFO").toUpperCase();
      if (lv === "ERROR") return "hud-console-lv-error";
      if (lv === "WARN") return "hud-console-lv-warn";
      if (lv === "DEBUG") return "hud-console-lv-debug";
      return "hud-console-lv-info";
    }

    function fmtConsoleTime(ts) {
      const d = new Date(ts * 1000);
      const pad = (n) => String(n).padStart(2, "0");
      return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    }

    function renderConsole() {
      const body = document.getElementById("pluginsConsoleBody");
      if (!body) return;
      if (_consoleLines.length === 0) {
        body.innerHTML = `
          <div class="hud-console-line">
            <span style="color:var(--color-text-muted)">—</span>
            <span class="hud-console-lv-debug">INFO</span>
            <span style="color:var(--color-primary)">plugin-manager</span>
            <span style="color:var(--color-text-strong)">Console stream becomes live when plugins emit stdout/stderr.</span>
          </div>`;
        return;
      }
      body.innerHTML = _consoleLines.map((e) => {
        const ts = fmtConsoleTime(e.ts);
        const msg = (e.msg || "").replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c]));
        const plugin = (e.plugin || "—").replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c]));
        return `<div class="hud-console-line">
          <span style="color:var(--color-text-muted)">${ts}</span>
          <span class="${lvClass(e.level)}">${(e.level || "INFO").toUpperCase()}</span>
          <span style="color:var(--color-primary)">${plugin}</span>
          <span style="color:var(--color-text-strong)">${msg}</span>
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
            '<div class="hud-table-row" style="grid-template-columns: 1fr;"><span class="text-xs text-slate-400">' +
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
          '<div class="hud-table-row" style="grid-template-columns: 1fr;"><span class="text-xs text-red-400">' +
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
      const { name, version, description, priority, enabled } = plugin;
      const toggleId = `plugin-toggle-${name}`;
      const dotClass = enabled ? "is-live" : "is-paused";
      const priorityPill = priorityPillClass(priority);
      const lang = detectLang(plugin);

      return `
        <div class="hud-table-row" style="grid-template-columns: 24px 1fr 120px 100px 80px 100px;" data-plugin="${escapeHtml(name)}">
          <span class="hud-status-dot ${dotClass}" aria-hidden="true"></span>
          <div class="min-w-0">
            <div style="font-size:13px;font-weight:600;color:var(--color-text-strong)" class="truncate">${escapeHtml(name)}</div>
            ${description ? `<div style="font-size:11px;color:var(--color-text-muted);margin-top:2px" class="truncate">${escapeHtml(description)}</div>` : ""}
          </div>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${version ? "v" + escapeHtml(version) : "—"}</span>
          <span class="hud-pill ${priorityPill}">${priority != null ? priority : "—"}</span>
          <span class="hud-pill" style="text-transform:uppercase">${lang}</span>
          <div style="display:flex;justify-content:flex-end;align-items:center">
            <div class="relative inline-block w-12 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" id="${toggleId}" role="switch"
                aria-checked="${!!enabled}" aria-label="Toggle plugin ${escapeHtml(name)}"
                class="plugin-toggle toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer"
                data-plugin-name="${escapeHtml(name)}"
                ${enabled ? "checked" : ""} />
              <label for="${toggleId}" class="toggle-label block overflow-hidden h-7 rounded-full bg-slate-700 cursor-pointer"></label>
            </div>
          </div>
        </div>
      `;
    }

    function detectLang(plugin) {
      const file = plugin.file || plugin.path || plugin.source || "";
      if (typeof file === "string") {
        if (file.endsWith(".py")) return "PY";
        if (file.endsWith(".js")) return "JS";
      }
      return plugin.language || "PY";
    }

    function priorityPillClass(priority) {
      if (priority == null) return "is-default";
      if (priority <= 10) return "is-danger";
      if (priority <= 50) return "is-amber";
      return "is-cyan";
    }

    function bindToggleListeners(container) {
      container.querySelectorAll(".plugin-toggle").forEach((toggle) => {
        toggle.addEventListener("change", async function () {
          const pluginName = this.dataset.pluginName;
          const enable = this.checked;
          await togglePlugin(pluginName, enable, this);
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

    // ---- Utility ----

    function priorityBadgeColor(priority) {
      if (priority == null) return "bg-slate-600 text-slate-300";
      if (priority <= 10) return "bg-red-900/60 text-red-300";
      if (priority <= 50) return "bg-amber-900/60 text-amber-300";
      return "bg-slate-700 text-slate-300";
    }

  });
})();
