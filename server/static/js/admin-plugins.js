(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const DETAILS_STATE_KEY = "admin-details-open-state";

    function isOpen(id, defaultOpen = false) {
      try {
        const raw = window.localStorage.getItem(DETAILS_STATE_KEY);
        const state = raw ? JSON.parse(raw) : {};
        return state[id] !== undefined ? state[id] : defaultOpen;
      } catch (_) {
        return defaultOpen;
      }
    }

    function saveDetailsToggle(detailsEl) {
      try {
        const raw = window.localStorage.getItem(DETAILS_STATE_KEY);
        const state = raw ? JSON.parse(raw) : {};
        state[detailsEl.id] = detailsEl.open;
        window.localStorage.setItem(DETAILS_STATE_KEY, JSON.stringify(state));
      } catch (_) {
        // Ignore localStorage write failures
      }
    }

    // Wait for admin.js to render the settings grid before injecting
    const observer = new MutationObserver(() => {
      const settingsGrid = document.querySelector("#app-container .grid");
      if (!settingsGrid) return;

      // Avoid double-injection
      if (document.getElementById("sec-plugins")) {
        observer.disconnect();
        return;
      }

      observer.disconnect();
      injectPluginsSection(settingsGrid);
    });
    observer.observe(document.getElementById("app-container"), {
      childList: true,
      subtree: true,
    });

    function injectPluginsSection(settingsGrid) {
      const html = `
        <details id="sec-plugins" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent scroll-mt-24" ${isOpen("sec-plugins") ? "open" : ""}>
          <summary class="flex items-center justify-between cursor-pointer list-none">
            <div>
              <h3 class="text-lg font-bold text-white">Plugins</h3>
              <p class="text-sm text-slate-300">Manage server-side plugin extensions</p>
            </div>
            <span class="text-slate-400 transition-transform group-open:rotate-180">\u2304</span>
          </summary>
          <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-3">
            <div class="flex justify-between items-center">
              <p class="text-xs text-slate-400">Place .py plugin files in server/plugins/ directory</p>
              <button id="pluginsReloadBtn"
                class="px-3 py-1.5 text-xs font-medium bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                Reload
              </button>
            </div>
            <div id="pluginsList" class="space-y-2">
              <span class="text-xs text-slate-500">Loading plugins...</span>
            </div>
          </div>
        </details>
      `;
      settingsGrid.insertAdjacentHTML("beforeend", html);

      // Persist details open/close state
      const detailsEl = document.getElementById("sec-plugins");
      detailsEl.addEventListener("toggle", () => saveDetailsToggle(detailsEl));

      // Wire up reload button
      document
        .getElementById("pluginsReloadBtn")
        .addEventListener("click", reloadPlugins);

      // Initial load
      fetchPlugins();
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
            '<p class="text-xs text-slate-500 text-center py-4">No plugins found</p>';
          return;
        }

        listEl.innerHTML = plugins.map(renderPlugin).join("");
        bindToggleListeners(listEl);
      } catch (err) {
        console.error("Failed to load plugins:", err);
        listEl.innerHTML =
          '<p class="text-xs text-red-400">Failed to load plugins</p>';
      }
    }

    function renderPlugin(plugin) {
      const { name, version, description, priority, enabled } = plugin;
      const toggleId = `plugin-toggle-${name}`;
      const priorityColor = priorityBadgeColor(priority);

      return `
        <div class="flex items-center justify-between bg-slate-800/60 rounded-xl px-4 py-3 gap-3" data-plugin="${escapeHtml(name)}">
          <div class="flex-grow min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-sm font-semibold text-white truncate">${escapeHtml(name)}</span>
              ${version ? `<span class="text-[10px] text-slate-400 font-mono">v${escapeHtml(version)}</span>` : ""}
              <span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium ${priorityColor}">
                ${priority != null ? priority : "—"}
              </span>
            </div>
            ${description ? `<p class="text-xs text-slate-400 mt-0.5 truncate">${escapeHtml(description)}</p>` : ""}
          </div>
          <div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in flex-shrink-0">
            <input type="checkbox" id="${toggleId}" role="switch"
              aria-checked="${!!enabled}" aria-label="Toggle plugin ${escapeHtml(name)}"
              class="plugin-toggle toggle-checkbox absolute block w-7 h-7 rounded-full bg-white border-4 appearance-none cursor-pointer"
              data-plugin-name="${escapeHtml(name)}"
              ${enabled ? "checked" : ""} />
            <label for="${toggleId}" class="toggle-label block overflow-hidden h-7 rounded-full bg-slate-700 cursor-pointer"></label>
          </div>
        </div>
      `;
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
          `Plugin "${name}" ${enable ? "enabled" : "disabled"}`,
          true
        );
      } catch (err) {
        console.error(`Failed to ${enable ? "enable" : "disable"} plugin:`, err);
        showToast(err.message || "Operation failed", false);
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

        showToast("Plugins reloaded", true);
        await fetchPlugins();
      } catch (err) {
        console.error("Failed to reload plugins:", err);
        showToast(err.message || "Reload failed", false);
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

    function escapeHtml(str) {
      if (!str) return "";
      const div = document.createElement("div");
      div.appendChild(document.createTextNode(String(str)));
      return div.innerHTML;
    }
  });
})();
