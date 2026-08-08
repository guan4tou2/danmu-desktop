/**
 * Admin · 素材庫 (Assets Library) — unified asset overview.
 *
 * Aggregates dme effects / fonts / theme packs / viewer-theme logos /
 * sounds into a single browse-only dashboard. Editing happens on the
 * source pages (Effects / Fonts / Themes / Viewer Theme); clicking a
 * card navigates there.
 *
 * Per prototype admin-assets.jsx (2026-04-27 redesign bundle).
 *
 * Globals: window.csrfFetch, ServerI18n, AdminUtils, ADMIN_ROUTES.
 */
(function () {
  "use strict";

  const escapeHtml = window.AdminUtils.escapeHtml;
  const PAGE_ID = "sec-assets-overview";

  // Matches design palette — kind → { en, color }
  const KIND_META = {
    // 這五個色一律畫成文字（9–26px 的 kind 標籤、圖示、統計數字），所以走
    // ink 版而不是 --color-*／--hud-*：後者的淺色臂是給色塊挑的中間調，
    // 白底上只有 3.2–4.1。theme 這格原本是寫死的紫色系色碼（不隨主題翻面，
    // 白底 1.85），改成 teal —— 五個分類色裡唯一還沒被佔用的色相。
    dme:   { labelKey: "assetsKindDme",   en: "DME",     color: "var(--color-ink-warning)",      route: "effects",      icon: "✦" },
    font:  { labelKey: "assetsKindFont",  en: "FONTS",   color: "var(--color-ink-accent)",       route: "fonts",        icon: "⌂" },
    logo:  { labelKey: "assetsKindLogo",  en: "IMAGES",  color: "var(--color-ink-success)",      route: "viewer", icon: "◐" },
    theme: { labelKey: "assetsKindTheme", en: "THEMES",  color: "var(--color-ink-theme)",        route: "themes",       icon: "❖" },
    sound: { labelKey: "assetsKindSound", en: "SOUNDS",  color: "var(--color-ink-error)",        route: "assets",       icon: "♪" },
  };

  let _state = {
    filter: "all",
    assets: [],   // [{id, kind, name, size, author, ago, flag}]
    loaded: false,
  };

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-assets-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">ASSETS LIBRARY · UNIFIED OVERVIEW · ${ServerI18n.t("assetsKickerTail")}</div>
          <div class="admin-ui-page-title">${ServerI18n.t("assetsPageTitle")}</div>
          <p class="admin-ui-page-note">
            ${ServerI18n.t("assetsPageNote")}
          </p>
        </div>

        <!-- TPL-B KPI 條：共用 hud-stat-tile（私有 admin-assets-stat 退役） -->
        <div class="hud-stats-strip">
          <div class="hud-stat-tile"><span class="hud-stat-tile-en">ASSETS</span><span class="hud-stat-tile-value" data-assets-stat="total">—</span><span class="hud-stat-tile-label">${ServerI18n.t("assetsStatTotal")}</span></div>
          <div class="hud-stat-tile"><span class="hud-stat-tile-en">DME</span><span class="hud-stat-tile-value is-amber" data-assets-stat="dme">—</span><span class="hud-stat-tile-label">${ServerI18n.t("assetsStatDme")}</span></div>
          <div class="hud-stat-tile"><span class="hud-stat-tile-en">FONTS</span><span class="hud-stat-tile-value is-cyan" data-assets-stat="font">—</span><span class="hud-stat-tile-label">${ServerI18n.t("assetsStatFont")}</span></div>
          <div class="hud-stat-tile"><span class="hud-stat-tile-en">THEMES</span><span class="hud-stat-tile-value" style="color:var(--color-ink-theme)" data-assets-stat="theme">—</span><span class="hud-stat-tile-label">${ServerI18n.t("assetsStatTheme")}</span></div>
        </div>

        <!-- Filter chips -->
        <div class="admin-assets-filter-row" data-assets-filter-row>
          <span class="admin-assets-chip is-active" data-filter="all">${ServerI18n.t("assetsFilterAll")} <span data-count="all">0</span></span>
          <span class="admin-assets-chip" data-filter="dme">${ServerI18n.t("assetsKindDme")} <span data-count="dme">0</span></span>
          <span class="admin-assets-chip" data-filter="font">${ServerI18n.t("assetsKindFont")} <span data-count="font">0</span></span>
          <span class="admin-assets-chip" data-filter="theme">${ServerI18n.t("assetsKindTheme")} <span data-count="theme">0</span></span>
          <span class="admin-assets-chip" data-filter="sound">${ServerI18n.t("assetsKindSound")} <span data-count="sound">0</span></span>
        </div>

        <!-- Grid + right rail -->
        <div class="admin-assets-grid-wrap">
          <div class="admin-assets-grid" id="adminAssetsGrid">
            <div class="admin-assets-empty">${ServerI18n.t("assetsLoading")}</div>
          </div>

          <aside class="admin-assets-rail">
            <div class="admin-assets-rail-card">
              <div class="admin-ui-monolabel">SOURCE PAGES · 來源頁面</div>
              <div class="admin-assets-source-list">
                ${Object.entries(KIND_META)
                  .filter(([k]) => k !== "sound")
                  .map(
                    ([k, m]) => `
                      <a class="admin-assets-source" href="#/${m.route}" data-assets-source="${k}">
                        <span class="ico" style="color:${m.color}">${m.icon}</span>
                        <span class="lbl">${escapeHtml(ServerI18n.t(m.labelKey))}</span>
                        <span class="en">${m.en}</span>
                        <span class="arrow">→</span>
                      </a>`
                  )
                  .join("")}
              </div>
              <div class="admin-assets-source-hint">
                ${ServerI18n.t("assetsSourceHint")}
              </div>
            </div>
          </aside>
        </div>
      </div>`;
  }

  // ── data fetch helpers ─────────────────────────────────────────────

  async function _fetchJson(url) {
    try {
      const r = await fetch(url, { credentials: "same-origin" });
      if (!r.ok) return null;
      return await r.json();
    } catch (_) {
      return null;
    }
  }

  function _formatSize(bytes) {
    if (bytes == null || bytes < 0) return "—";
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }

  async function _loadAll() {
    const collected = [];

    // Effects (.dme)
    const effects = await _fetchJson("/admin/effects");
    if (effects && Array.isArray(effects.effects)) {
      effects.effects.forEach((e) => {
        // F-104：/admin/effects 沒有 builtin/author 欄位——判定借
        // admin-effects-mgmt 的內建名單（單一事實來源），別再對
        // 不存在的欄位瞎猜（曾把八個內建全標成 USER）。
        const isBuiltin = !!(window.AdminEffectsMeta
          && window.AdminEffectsMeta.isBuiltin(e.name));
        collected.push({
          id: "dme-" + e.name,
          kind: "dme",
          name: e.filename || e.name + ".dme",
          author: e.author || (isBuiltin ? "built-in" : "user"),
          flag: isBuiltin ? "" : "user",
        });
      });
    }

    // Fonts
    const fonts = await _fetchJson("/fonts");
    if (fonts && Array.isArray(fonts.fonts)) {
      fonts.fonts.forEach((f) => {
        collected.push({
          id: "font-" + f.name,
          kind: "font",
          name: f.name,
          author: f.type || "system",
          size: f.sizeLabel || "",
          flag: f.type === "uploaded" ? "uploaded" : "",
        });
      });
    }

    // Theme packs
    const themes = await _fetchJson("/admin/themes");
    if (themes && Array.isArray(themes.themes)) {
      themes.themes.forEach((t) => {
        collected.push({
          id: "theme-" + t.name,
          kind: "theme",
          name: t.label || t.name,
          author: t.bundled === false ? "user" : "built-in",
          flag: t.active ? "active" : "",
        });
      });
    }

    _state.assets = collected;
    _state.loaded = true;
    _renderAll();
  }

  // ── rendering ──────────────────────────────────────────────────────

  function _renderAll() {
    const grid = document.getElementById("adminAssetsGrid");
    if (!grid) return;
    const counts = {
      all: _state.assets.length,
      dme: 0, font: 0, theme: 0, sound: 0, logo: 0,
    };
    _state.assets.forEach((a) => {
      if (counts[a.kind] != null) counts[a.kind]++;
    });

    // Update stat tiles + filter chip counts
    const setStat = (key, val) => {
      const el = document.querySelector(`[data-assets-stat="${key}"]`);
      if (el) el.textContent = String(val);
    };
    setStat("total", counts.all);
    setStat("dme", counts.dme);
    setStat("font", counts.font);
    setStat("theme", counts.theme);
    Object.keys(counts).forEach((k) => {
      const el = document.querySelector(`[data-count="${k}"]`);
      if (el) el.textContent = String(counts[k]);
    });

    // Filter chip active state
    document.querySelectorAll(".admin-assets-chip").forEach((c) => {
      c.classList.toggle("is-active", c.dataset.filter === _state.filter);
    });

    // Grid
    const visible = _state.filter === "all"
      ? _state.assets
      : _state.assets.filter((a) => a.kind === _state.filter);

    if (visible.length === 0) {
      grid.innerHTML = `<div class="admin-assets-empty">${_state.loaded ? ServerI18n.t("assetsEmptyCategory") : ServerI18n.t("assetsLoading")}</div>`;
      return;
    }

    grid.innerHTML = visible.map(_assetCardHtml).join("");
  }

  function _assetCardHtml(a) {
    const m = KIND_META[a.kind] || KIND_META.dme;
    const flag = a.flag
      ? `<span class="admin-assets-card-flag">${escapeHtml(a.flag)}</span>`
      : "";
    return `
      <a class="admin-assets-card" href="#/${m.route}" data-assets-card="${escapeHtml(a.id)}">
        <div class="admin-assets-card-head">
          <span class="kind" style="color:${m.color}">${m.icon} ${m.en}</span>
          ${flag}
        </div>
        <div class="admin-assets-card-name">${escapeHtml(a.name || "—")}</div>
        <div class="admin-assets-card-meta">
          <span>${escapeHtml(a.author || "—")}</span>
          ${a.size ? `<span class="dot">·</span><span>${escapeHtml(a.size)}</span>` : ""}
        </div>
      </a>`;
  }

  // ── init ───────────────────────────────────────────────────────────

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());

    // Filter chip clicks
    const row = document.querySelector("[data-assets-filter-row]");
    if (row) {
      row.addEventListener("click", (e) => {
        const chip = e.target.closest(".admin-assets-chip");
        if (!chip) return;
        _state.filter = chip.dataset.filter;
        _renderAll();
      });
    }

    _loadAll();
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (!window.DANMU_CONFIG || !window.DANMU_CONFIG.session || !window.DANMU_CONFIG.session.logged_in) return;
    const observer = new MutationObserver(() => {
      if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true, subtree: true,
    });
    if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
      init();
    }
  });
})();
