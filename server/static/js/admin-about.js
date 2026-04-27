/**
 * Admin · About page (Phase 2 P0-1, 2026-04-27).
 *
 * Mirrors docs/designs/design-v2/components/admin-batch9.jsx
 * AdminAboutPage. We're open-source / single-tenant, so the prototype's
 * "Pro Edition · License · cust_xxx" license card doesn't fit. Layout:
 *
 *   ┌─ LEFT (1fr) ──────────────────┐ ┌─ RIGHT (1fr) ───────────────┐
 *   │ Big version card              │ │ Changelog (recent versions) │
 *   │  • app icon + name            │ │  • per-version notes        │
 *   │  • v5.0.0 + build channel     │ │  • feat/fix/perf tags       │
 *   │  • 4 stat tiles               │ ├─────────────────────────────┤
 *   │  • check-update + copy btns   │ │ Support links               │
 *   ├──────────────────────────────┤ │  • docs / github / issues   │
 *   │ OSS Notices (key dependencies)│ └─────────────────────────────┘
 *   └──────────────────────────────┘
 *
 * Sidebar nav slug: `about` (added under "設定" group bottom).
 *
 * Loaded as <script defer> in admin.html. Globals: csrfFetch, ServerI18n.
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-about-overview";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  const APP_NAME = "Danmu Fire";
  const REPO_URL = "https://github.com/guan4tou2/danmu-desktop";

  const CHANGELOG = [
    {
      v: "5.0.0", d: "2026-04-25", tag: "current", notes: [
        { t: "feat", l: "Design v2 retrofit · 22 commit sprint · 整套 admin shell + 10 個 page 重構" },
        { t: "feat", l: "⌘K 命令面板 · effects 8-card live preview · Edge state pages" },
        { t: "feat", l: "Slido extension v0.2.0 + Fire Token shared bearer + Audit timeline" },
        { t: "feat", l: "Sidebar 整併 · 20 → 17 row · history/viewer-config 加 2-tab strip" },
      ],
    },
    {
      v: "4.8.7", d: "2026-04-22", tag: "", notes: [
        { t: "feat", l: "Design tokens (shared/tokens.css) · type scale · 4px spacing grid" },
        { t: "feat", l: "Effects .dme 熱插拔 · 8 個內建效果 · 5 秒掃目錄" },
        { t: "fix",  l: "WebKit slider track 顯示 cyan progress" },
      ],
    },
    {
      v: "4.8.0", d: "2026-04-18", tag: "", notes: [
        { t: "feat", l: "WS Token live-state auth · 持久化 + chmod 0o600" },
        { t: "feat", l: "ProxyFix wrapper · X-Forwarded-For 信任" },
        { t: "fix",  l: "graceful-degradation on unwritable disk" },
      ],
    },
    {
      v: "4.6.0", d: "2026-04-19", tag: "", notes: [
        { t: "feat", l: "Electron build · macOS / Windows / Ubuntu · 6 binaries" },
        { t: "feat", l: "auto-update flow · GitHub Release manifest" },
        { t: "feat", l: "skip-link · WCAG · prefers-reduced-motion" },
      ],
    },
  ];

  const OSS_DEPS = [
    { n: "Flask",          v: "3.x",      l: "BSD-3" },
    { n: "Electron",       v: "32.x",     l: "MIT" },
    { n: "Tailwind CSS",   v: "3.x",      l: "MIT" },
    { n: "Playwright",     v: "1.x",      l: "Apache-2.0" },
    { n: "Werkzeug",       v: "3.x",      l: "BSD-3" },
    { n: "websockets",     v: "12.x",     l: "BSD-3" },
    { n: "marshmallow",    v: "3.x",      l: "MIT" },
  ];

  let _state = {
    serverStartedAt: 0,
    serverTime: 0,
    appVersion: "—",
  };

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-about-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">ABOUT · 版本 / 授權 / CHANGELOG</div>
          <div class="admin-v2-title">關於 Danmu Fire</div>
          <p class="admin-v2-note">開源彈幕互動系統，server (Flask) + desktop (Electron) + viewer (web)。</p>
        </div>

        <div class="admin-about-grid">
          <div class="admin-about-col">
            <article class="admin-about-version-card" data-about-version>
              <div class="admin-about-version-glow" aria-hidden="true"></div>
              <div class="admin-about-version-head">
                <div class="admin-about-version-icon">▲</div>
                <div class="admin-about-version-meta">
                  <div class="admin-about-version-name">${APP_NAME}</div>
                  <div class="admin-about-version-tag" data-about-tag>v—</div>
                  <div class="admin-about-version-build" data-about-build>—</div>
                </div>
              </div>
              <div class="admin-about-stats" data-about-stats>
                <div class="admin-about-stat"><div class="k">UPTIME</div><div class="v" data-about-uptime>—</div></div>
                <div class="admin-about-stat"><div class="k">CHANNEL</div><div class="v" data-about-channel>stable</div></div>
                <div class="admin-about-stat"><div class="k">PLATFORM</div><div class="v" data-about-platform>web · electron</div></div>
                <div class="admin-about-stat"><div class="k">LICENSE</div><div class="v">MIT</div></div>
              </div>
              <div class="admin-about-actions">
                <button type="button" class="admin-about-btn" data-about-action="copy">📋 複製版本資訊</button>
                <a class="admin-about-btn admin-about-btn--accent" href="${REPO_URL}/releases/latest" target="_blank" rel="noopener noreferrer">↻ GitHub Releases</a>
              </div>
            </article>

            <article class="admin-about-oss">
              <div class="admin-v2-monolabel">第三方授權 · OSS NOTICES</div>
              <div class="admin-about-oss-list">
                ${OSS_DEPS.map((d) => `
                  <div class="admin-about-oss-row">
                    <span class="n">${escapeHtml(d.n)}</span>
                    <span class="v">${escapeHtml(d.v)}</span>
                    <span class="l">${escapeHtml(d.l)}</span>
                  </div>
                `).join("")}
              </div>
              <a class="admin-about-oss-more" href="${REPO_URL}/blob/main/server/pyproject.toml" target="_blank" rel="noopener noreferrer">完整 dependency 清單 →</a>
            </article>
          </div>

          <div class="admin-about-col">
            <article class="admin-about-changelog">
              <div class="admin-about-changelog-head">
                <span class="admin-v2-monolabel">更新紀錄 · CHANGELOG</span>
                <a class="admin-about-changelog-more" href="${REPO_URL}/releases" target="_blank" rel="noopener noreferrer">完整紀錄 →</a>
              </div>
              ${CHANGELOG.map((cl) => `
                <div class="admin-about-cl-entry">
                  <div class="admin-about-cl-head">
                    <span class="ver">v${escapeHtml(cl.v)}</span>
                    ${cl.tag === "current" ? '<span class="cur">● 目前版本</span>' : ""}
                    <span class="date">${escapeHtml(cl.d)}</span>
                  </div>
                  <div class="admin-about-cl-notes">
                    ${cl.notes.map((n) => `
                      <div class="admin-about-cl-row">
                        <span class="tag tag-${escapeHtml(n.t)}">${escapeHtml(n.t.toUpperCase())}</span>
                        <span class="msg">${escapeHtml(n.l)}</span>
                      </div>
                    `).join("")}
                  </div>
                </div>
              `).join("")}

              <div class="admin-about-support">
                <div class="t">有問題？</div>
                <a href="${REPO_URL}#readme" target="_blank" rel="noopener noreferrer">📖 README</a>
                <a href="${REPO_URL}/issues" target="_blank" rel="noopener noreferrer">🐛 GitHub Issues</a>
                <a href="${REPO_URL}/discussions" target="_blank" rel="noopener noreferrer">💬 Discussions</a>
              </div>
            </article>
          </div>
        </div>
      </div>`;
  }

  function _formatUptime(seconds) {
    if (!seconds || seconds < 0) return "—";
    const d = Math.floor(seconds / 86400);
    const h = Math.floor((seconds % 86400) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    if (d > 0) return `${d}d ${h}h`;
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
  }

  function _renderState() {
    const tagEl = document.querySelector("[data-about-tag]");
    const buildEl = document.querySelector("[data-about-build]");
    const upEl = document.querySelector("[data-about-uptime]");
    if (tagEl) tagEl.textContent = `v${_state.appVersion}`;
    if (buildEl) {
      const channel = (window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.environment) || "production";
      buildEl.textContent = `${channel} · stable channel`;
    }
    if (upEl) {
      const upSec = _state.serverStartedAt ? (_state.serverTime - _state.serverStartedAt) : 0;
      upEl.textContent = _formatUptime(upSec);
    }
  }

  async function _fetchMetrics() {
    try {
      const r = await fetch("/admin/metrics", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      _state.serverStartedAt = Number(data.server_started_at) || 0;
      _state.serverTime = Number(data.server_time) || (Date.now() / 1000);
      _renderState();
    } catch (_) { /* silent */ }
  }

  function _copyVersionInfo() {
    const channel = (window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.environment) || "production";
    const upSec = _state.serverStartedAt ? (_state.serverTime - _state.serverStartedAt) : 0;
    const ua = (navigator.userAgent || "").slice(0, 200);
    const text = [
      `${APP_NAME} v${_state.appVersion}`,
      `Channel: ${channel}`,
      `Uptime: ${_formatUptime(upSec)}`,
      `User-Agent: ${ua}`,
      `URL: ${location.origin}`,
    ].join("\n");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        window.showToast && window.showToast("版本資訊已複製到剪貼簿", true);
      }).catch(() => {
        window.showToast && window.showToast("複製失敗 · 瀏覽器拒絕剪貼簿存取", false);
      });
    } else {
      window.showToast && window.showToast("此瀏覽器不支援剪貼簿 API", false);
    }
  }

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());
    _state.appVersion = (window.DANMU_CONFIG && (window.DANMU_CONFIG.appVersion || window.DANMU_CONFIG.app_version)) || "—";
    _renderState();

    const page = document.getElementById(PAGE_ID);
    if (page) {
      page.addEventListener("click", function (e) {
        const btn = e.target.closest("[data-about-action]");
        if (!btn) return;
        if (btn.dataset.aboutAction === "copy") _copyVersionInfo();
      });
    }

    _fetchMetrics();
    // Refresh uptime every 30s while page is mounted.
    setInterval(_fetchMetrics, 30000);
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    const observer = new MutationObserver(function () {
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
