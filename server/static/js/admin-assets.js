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
    dme:   { label: "效果",   en: "DME",     color: "var(--color-warning, #fbbf24)", route: "effects",      icon: "✦" },
    font:  { label: "字型",   en: "FONTS",   color: "var(--color-primary)",          route: "fonts",        icon: "⌂" },
    logo:  { label: "圖片",   en: "IMAGES",  color: "#86efac",                        route: "viewer-theme", icon: "◐" },
    theme: { label: "主題",   en: "THEMES",  color: "#c4b5fd",                        route: "themes",       icon: "❖" },
    sound: { label: "音效",   en: "SOUNDS",  color: "#f87171",                        route: "assets",       icon: "♪" },
  };

  let _state = {
    filter: "all",
    assets: [],   // [{id, kind, name, size, author, ago, flag}]
    loaded: false,
  };

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-assets-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">ASSETS LIBRARY · UNIFIED OVERVIEW · 點卡片跳轉源頁編輯</div>
          <div class="admin-v2-title">素材庫</div>
          <p class="admin-v2-note">
            集中查看 .dme 效果 · 字型 · 主題包 · 觀眾頁圖片 · 音效。
            上傳與編輯仍在各自頁面（效果庫 / 字型管理 / 風格主題包 / 觀眾頁主題）。
          </p>
        </div>

        <!-- Stat strip -->
        <div class="admin-assets-statstrip">
          <div class="admin-assets-stat">
            <div class="admin-assets-stat-head"><span class="lbl">總素材</span><span class="en">ASSETS</span></div>
            <div class="admin-assets-stat-val" data-assets-stat="total">—</div>
          </div>
          <div class="admin-assets-stat">
            <div class="admin-assets-stat-head"><span class="lbl">效果庫</span><span class="en">DME</span></div>
            <div class="admin-assets-stat-val is-amber" data-assets-stat="dme">—</div>
          </div>
          <div class="admin-assets-stat">
            <div class="admin-assets-stat-head"><span class="lbl">字型</span><span class="en">FONTS</span></div>
            <div class="admin-assets-stat-val is-cyan" data-assets-stat="font">—</div>
          </div>
          <div class="admin-assets-stat">
            <div class="admin-assets-stat-head"><span class="lbl">主題包</span><span class="en">THEMES</span></div>
            <div class="admin-assets-stat-val" data-assets-stat="theme" style="color:#c4b5fd">—</div>
          </div>
        </div>

        <!-- Filter chips -->
        <div class="admin-assets-filter-row" data-assets-filter-row>
          <span class="admin-assets-chip is-active" data-filter="all">全部 <span data-count="all">0</span></span>
          <span class="admin-assets-chip" data-filter="dme">效果 <span data-count="dme">0</span></span>
          <span class="admin-assets-chip" data-filter="font">字型 <span data-count="font">0</span></span>
          <span class="admin-assets-chip" data-filter="theme">主題 <span data-count="theme">0</span></span>
          <span class="admin-assets-chip" data-filter="sound">音效 <span data-count="sound">0</span></span>
        </div>

        <!-- Grid + right rail -->
        <div class="admin-assets-grid-wrap">
          <div class="admin-assets-grid" id="adminAssetsGrid">
            <div class="admin-assets-empty">載入素材…</div>
          </div>

          <aside class="admin-assets-rail">
            <div class="admin-assets-rail-card">
              <div class="admin-v2-monolabel">SOURCE PAGES · 來源頁面</div>
              <div class="admin-assets-source-list">
                ${Object.entries(KIND_META)
                  .filter(([k]) => k !== "sound")
                  .map(
                    ([k, m]) => `
                      <a class="admin-assets-source" href="#/${m.route}" data-assets-source="${k}">
                        <span class="ico" style="color:${m.color}">${m.icon}</span>
                        <span class="lbl">${escapeHtml(m.label)}</span>
                        <span class="en">${m.en}</span>
                        <span class="arrow">→</span>
                      </a>`
                  )
                  .join("")}
              </div>
              <div class="admin-assets-source-hint">
                點素材卡或來源頁面跳轉到對應編輯頁。素材庫只負責總覽。
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
        collected.push({
          id: "dme-" + e.name,
          kind: "dme",
          name: e.filename || e.name + ".dme",
          author: e.author || (e.builtin ? "built-in" : "user"),
          flag: e.builtin ? "" : "user",
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
      grid.innerHTML = `<div class="admin-assets-empty">${_state.loaded ? "此分類無素材" : "載入素材…"}</div>`;
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
