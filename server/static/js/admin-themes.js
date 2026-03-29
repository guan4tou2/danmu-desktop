/**
 * Admin Themes Management Section
 *
 * Extracted from admin.js to reduce file size.
 * Globals: csrfFetch (window.csrfFetch), showToast (window.showToast),
 *          AdminUtils (window.AdminUtils)
 */
(function () {
  "use strict";

  var escapeHtml = window.AdminUtils.escapeHtml;
  function csrfFetch(url, opts) { return window.csrfFetch(url, opts); }
  function showToast(msg, ok) { return window.showToast(msg, ok); }

  let _adminActiveTheme = "default";

  async function fetchThemes() {
    try {
      const res = await csrfFetch("/admin/themes");
      if (!res.ok) return;
      const data = await res.json();
      _adminActiveTheme = data.active || "default";
      renderThemesList(data.themes || [], _adminActiveTheme);
    } catch (e) {
      console.warn("[Themes] Failed to fetch themes:", e);
    }
  }

  function renderThemesList(themes, activeName) {
    const container = document.getElementById("themesList");
    if (!container) return;
    container.innerHTML = "";

    if (themes.length === 0) {
      container.innerHTML = '<span class="text-xs text-slate-500">No themes found</span>';
      return;
    }

    themes.forEach((theme) => {
      const isActive = theme.name === activeName;
      const card = document.createElement("div");
      card.className = `flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${
        isActive
          ? "border-violet-500 bg-violet-500/10"
          : "border-slate-700 bg-slate-800/60 hover:border-slate-500"
      }`;

      card.innerHTML = `
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-sm font-semibold text-white">${escapeHtml(theme.label)}</span>
            <span class="text-xs text-slate-500">${escapeHtml(theme.name)}</span>
            ${isActive ? '<span class="text-[10px] px-1.5 py-0.5 bg-violet-600 text-white rounded-full font-medium">Active</span>' : ""}
          </div>
          <p class="text-xs text-slate-400 mt-0.5 truncate">${escapeHtml(theme.description)}</p>
        </div>
        ${
          isActive
            ? ""
            : '<button class="theme-activate-btn px-3 py-1.5 text-xs font-medium bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors shrink-0" data-theme="' + escapeHtml(theme.name) + '">Set Active</button>'
        }
      `;

      container.appendChild(card);
    });

    // Bind activate buttons
    container.querySelectorAll(".theme-activate-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const themeName = btn.dataset.theme;
        try {
          const res = await csrfFetch("/admin/themes/active", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: themeName }),
          });
          if (res.ok) {
            showToast(`Theme "${themeName}" activated`);
            _adminActiveTheme = themeName;
            renderThemesList(themes, themeName);
          } else {
            const err = await res.json().catch(() => ({}));
            showToast(err.error || "Failed to set theme", false);
          }
        } catch (e) {
          showToast("Failed to set theme", false);
        }
      });
    });
  }

  function init() {
    fetchThemes();

    const reloadBtn = document.getElementById("themeReloadBtn");
    if (reloadBtn) {
      reloadBtn.addEventListener("click", async () => {
        try {
          const res = await csrfFetch("/admin/themes/reload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          });
          if (res.ok) {
            showToast("Themes reloaded");
            fetchThemes();
          } else {
            showToast("Failed to reload themes", false);
          }
        } catch (e) {
          showToast("Failed to reload themes", false);
        }
      });
    }
  }

  window.AdminThemes = { init: init };
})();
