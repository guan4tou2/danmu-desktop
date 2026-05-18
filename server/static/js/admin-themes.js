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

    const count = document.querySelector("[data-theme-pack-count]");
    if (count) {
      const builtin = themes.filter(t => t.bundled !== false).length;
      const custom = themes.length - builtin;
      count.textContent = `${themes.length} PACKS · ${builtin} 內建${custom > 0 ? " · " + custom + " 社群" : ""}`;
    }

    if (themes.length === 0) {
      container.innerHTML = '<span class="theme-pack-muted" style="padding:14px">' + ServerI18n.t("noThemesFound") + '</span>';
      return;
    }

    // Theme pack card — prototype admin-theme-packs.jsx ThemePackCard.
    // Each card: swatches + name/en + desc + font/layout/effects/bg + actions.
    themes.forEach((theme) => {
      const isActive = theme.name === activeName;
      const label = escapeHtml(
        ServerI18n.t("theme_" + theme.name) !== "theme_" + theme.name
          ? ServerI18n.t("theme_" + theme.name)
          : (theme.label || theme.name)
      );
      const desc = escapeHtml(
        ServerI18n.t("theme_" + theme.name + "_desc") !== "theme_" + theme.name + "_desc"
          ? ServerI18n.t("theme_" + theme.name + "_desc")
          : (theme.description || "")
      );
      const palette = theme.palette && theme.palette.length
        ? theme.palette.slice(0, 3)
        : [theme.styles?.color || "#ffffff", "#38bdf8", "#e879f9"];
      const effects = (theme.effects_preset || [])
        .map(e => typeof e === "string" ? e : (e.name || ""))
        .filter(Boolean);
      const fontFam = theme.font?.family || "Noto Sans TC";
      const layout = theme.layout || "scroll · 右→左";
      const builtin = theme.bundled !== false;

      const card = document.createElement("div");
      card.className = `theme-pack-card${isActive ? " is-active" : ""}`;
      card.innerHTML = `
        <div class="theme-pack-card-head">
          <div class="theme-pack-swatches">
            ${palette.map(c => `<span class="theme-pack-swatch" style="background:${escapeHtml(c)}"></span>`).join("")}
          </div>
          <div class="theme-pack-title">
            <span class="zh">${label}</span>
            <span class="en">${escapeHtml((theme.name || "").toUpperCase())}</span>
          </div>
          <span class="theme-pack-status${isActive ? " is-active" : ""}">
            ${isActive ? "● ACTIVE" : "○ INACTIVE"}
          </span>
        </div>
        <p class="theme-pack-desc">${desc}</p>
        <div class="theme-pack-meta">
          <div class="row"><span class="k">FONT</span><span class="v">${escapeHtml(fontFam)}</span></div>
          <div class="row"><span class="k">LAYOUT</span><span class="v">${escapeHtml(layout)}</span></div>
          <div class="row"><span class="k">FX</span><span class="v">${
            effects.length
              ? effects.map(e => `<span class="theme-pack-chip">${escapeHtml(e)}</span>`).join(" ")
              : '<span class="theme-pack-muted">—</span>'
          }</span></div>
        </div>
        <div class="theme-pack-foot">
          <span class="theme-pack-badge${builtin ? " is-builtin" : ""}">${builtin ? "BUILT-IN" : "CUSTOM"}</span>
          <div class="theme-pack-actions">
            ${isActive
              ? '<span class="theme-pack-btn is-disabled">已啟用</span>'
              : `<button class="theme-pack-btn is-primary theme-activate-btn" data-theme="${escapeHtml(theme.name)}">啟用 ▶</button>`
            }
          </div>
        </div>
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
            showToast(ServerI18n.t("themeActivated").replace("{name}", themeName));
            _adminActiveTheme = themeName;
            renderThemesList(themes, themeName);
          } else {
            const err = await res.json().catch(() => ({}));
            showToast(err.error || ServerI18n.t("setThemeFailed"), false);
          }
        } catch (e) {
          showToast(ServerI18n.t("setThemeFailed"), false);
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
            showToast(ServerI18n.t("themesReloaded"));
            fetchThemes();
          } else {
            showToast(ServerI18n.t("themesReloadFailed"), false);
          }
        } catch (e) {
          showToast(ServerI18n.t("themesReloadFailed"), false);
        }
      });
    }
  }

  window.AdminThemes = { init: init };
})();
