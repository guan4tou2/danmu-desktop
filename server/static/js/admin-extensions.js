/**
 * Admin · Extensions Catalog (整合)
 *
 * v5.2 Sprint 1. Single page replacing the previous .env-only Slido setup.
 * 4 cards in a grid:
 *   - Slido Extension v0.2.0 — fully wired (token display + copy + regen + revoke)
 *   - Discord Bridge        — placeholder (即將支援)
 *   - OBS Plugin            — placeholder (即將支援)
 *   - Bookmarklet           — placeholder (即將支援)
 *
 * Status light per card driven by GET /admin/integrations/sources/recent —
 * lights up when the matching source label has fired in the last 5 minutes.
 *
 * Per Design Reply 2026-04-27: Fire Token (single shared bearer for /fire)
 * stays separate from the API Tokens lane (per-integration ACL, deferred).
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-extensions-overview";
  const escapeHtml = window.AdminUtils.escapeHtml;
  const SOURCE_REFRESH_MS = 15000;

  const EXTENSIONS = [
    {
      id: "slido",
      name: "Slido Extension",
      version: "v0.2.0",
      icon: "▦",
      color: "var(--color-primary)",
      desc: "Chrome 擴充功能，把 Slido 上的問題自動推到彈幕。",
      status: "ready",
      sourceMatch: "slido",
      install: {
        steps: [
          { kind: "download", label: "下載 .crx 安裝檔", href: "/static/extensions/danmu-slido-extension-0.2.0.zip" },
          { kind: "config",   label: "在 Slido 工作區點 Danmu icon → 貼入 Fire Token" },
        ],
      },
      hasFireTokenUI: true,
    },
    {
      id: "discord",
      name: "Discord Bridge",
      version: "—",
      icon: "✉",
      color: "#c4b5fd",
      desc: "把 Discord 頻道訊息橋接成彈幕（含 reaction 過濾）。",
      status: "soon",
      sourceMatch: "discord",
    },
    {
      id: "obs",
      name: "OBS Plugin",
      version: "—",
      icon: "◎",
      color: "#86efac",
      desc: "OBS Studio Lua 腳本，把 hotkey 觸發的彈幕送到伺服器。",
      status: "soon",
      sourceMatch: "obs",
    },
    {
      id: "bookmarklet",
      name: "Bookmarklet",
      version: "—",
      icon: "✦",
      color: "var(--color-warning, #fbbf24)",
      desc: "瀏覽器書籤一鍵打開 viewer + 預填暱稱 / 字色。",
      status: "soon",
      sourceMatch: "bookmarklet",
    },
  ];

  let _state = {
    fireToken: null,        // {enabled, prefix, has_token, rotated_at}
    plainToken: null,       // raw token, only set right after regenerate
    sources: [],            // [{source, last_seen, count}]
    sourcesTimer: 0,
  };

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-ext-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">INTEGRATIONS · 整合 · 第三方接入</div>
          <div class="admin-v2-title">整合</div>
          <p class="admin-v2-note">
            集中管理擴充功能與機器人接入。
            Slido extension / Discord bridge / OBS plugin / bookmarklet 等共用同一組 <b>Fire Token</b>，
            和 admin 的 API Tokens（per-integration ACL）是分開的兩條 lane。
          </p>
        </div>

        <div class="admin-ext-grid" id="adminExtensionsGrid">
          ${EXTENSIONS.map(_cardHtml).join("")}
        </div>
      </div>`;
  }

  function _cardHtml(ext) {
    const isReady = ext.status === "ready";
    const dotState = "is-cold";  // updated post-fetch
    const flag = isReady
      ? `<span class="admin-ext-flag is-ready">READY</span>`
      : `<span class="admin-ext-flag is-soon">即將支援</span>`;
    const installSection = isReady && ext.install
      ? `<div class="admin-ext-install">
          <div class="admin-v2-monolabel">INSTALL · 安裝步驟</div>
          <ol class="admin-ext-install-steps">
            ${ext.install.steps.map((s) => {
              if (s.kind === "download") {
                return `<li><a class="admin-ext-step-link" href="${s.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.label)} ↓</a></li>`;
              }
              return `<li>${escapeHtml(s.label)}</li>`;
            }).join("")}
          </ol>
        </div>`
      : "";
    const tokenSection = ext.hasFireTokenUI
      ? `<div class="admin-ext-token" data-ext-token>
          <div class="admin-v2-monolabel">FIRE TOKEN · 共享機密</div>
          <div class="admin-ext-token-row">
            <code class="admin-ext-token-code" data-fire-token-display>未設定</code>
            <button type="button" class="admin-ext-token-btn" data-fire-token-action="copy" disabled>複製</button>
            <button type="button" class="admin-ext-token-btn" data-fire-token-action="regen">產生</button>
            <button type="button" class="admin-ext-token-btn admin-ext-token-btn--danger" data-fire-token-action="revoke" disabled>撤銷</button>
          </div>
          <div class="admin-ext-token-hint">
            擴充功能在 popup 設定中貼入 token。撤銷會立即停用所有 extension（重 regen 後重新貼即可）。
          </div>
        </div>`
      : "";
    return `
      <article class="admin-ext-card" data-ext="${ext.id}">
        <div class="admin-ext-head">
          <span class="admin-ext-status-dot ${dotState}" data-ext-dot></span>
          <span class="admin-ext-icon" style="color:${ext.color}">${ext.icon}</span>
          <div class="admin-ext-title">
            <div class="name">${escapeHtml(ext.name)}</div>
            <div class="meta"><span class="ver">${escapeHtml(ext.version)}</span></div>
          </div>
          ${flag}
        </div>
        <p class="admin-ext-desc">${escapeHtml(ext.desc)}</p>
        ${installSection}
        ${tokenSection}
      </article>`;
  }

  // ── data fetch ─────────────────────────────────────────────────────

  async function _fetchTokenState() {
    try {
      const r = await fetch("/admin/integrations/fire-token", { credentials: "same-origin" });
      if (!r.ok) return;
      _state.fireToken = await r.json();
      _renderToken();
    } catch (_) { /* silent */ }
  }

  async function _fetchSources() {
    try {
      const r = await fetch("/admin/integrations/sources/recent", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      _state.sources = Array.isArray(data.sources) ? data.sources : [];
      _renderSourceLights();
    } catch (_) { /* silent */ }
  }

  async function _regenerateToken() {
    if (!confirm("產生新的 Fire Token 會讓現有 extension 立即失效，要繼續嗎？")) return;
    try {
      const r = await window.csrfFetch("/admin/integrations/fire-token/regenerate", { method: "POST" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      const data = await r.json();
      _state.fireToken = {
        enabled: data.enabled,
        prefix: data.prefix,
        has_token: true,
        rotated_at: data.rotated_at,
      };
      _state.plainToken = data.token;
      _renderToken();
      window.showToast && window.showToast("Fire Token 已產生 · 已複製到剪貼簿", true);
      _copyToClipboard(data.token);
    } catch (e) {
      console.warn("[ext] regen failed:", e);
      window.showToast && window.showToast("Token 產生失敗", false);
    }
  }

  async function _revokeToken() {
    if (!confirm("撤銷 Fire Token 會立刻停用所有 extension，要繼續嗎？")) return;
    try {
      const r = await window.csrfFetch("/admin/integrations/fire-token/revoke", { method: "POST" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      _state.fireToken = await r.json();
      _state.plainToken = null;
      _renderToken();
      window.showToast && window.showToast("Fire Token 已撤銷", true);
    } catch (e) {
      console.warn("[ext] revoke failed:", e);
      window.showToast && window.showToast("撤銷失敗", false);
    }
  }

  function _copyToClipboard(text) {
    if (!text) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (_) { /* */ }
      document.body.removeChild(ta);
    }
  }

  // ── render ─────────────────────────────────────────────────────────

  function _renderToken() {
    const display = document.querySelector("[data-fire-token-display]");
    const copyBtn = document.querySelector('[data-fire-token-action="copy"]');
    const regenBtn = document.querySelector('[data-fire-token-action="regen"]');
    const revokeBtn = document.querySelector('[data-fire-token-action="revoke"]');
    if (!display) return;
    const t = _state.fireToken;
    if (_state.plainToken) {
      display.textContent = _state.plainToken;
      display.classList.add("is-plain");
    } else if (t && t.has_token) {
      display.textContent = (t.prefix || "") + " (僅顯示前 6 碼，完整值僅產生時可見)";
      display.classList.remove("is-plain");
    } else {
      display.textContent = "未設定 — 點「產生」建立 token";
      display.classList.remove("is-plain");
    }
    if (copyBtn) copyBtn.disabled = !_state.plainToken;
    if (regenBtn) regenBtn.textContent = (t && t.has_token) ? "重新產生" : "產生";
    if (revokeBtn) revokeBtn.disabled = !(t && t.has_token);
  }

  function _renderSourceLights() {
    const seen = new Set(_state.sources.map((s) => s.source));
    document.querySelectorAll(".admin-ext-card").forEach((card) => {
      const ext = EXTENSIONS.find((e) => e.id === card.dataset.ext);
      if (!ext) return;
      const dot = card.querySelector("[data-ext-dot]");
      if (!dot) return;
      const live = ext.sourceMatch && seen.has(ext.sourceMatch);
      dot.classList.toggle("is-live", !!live);
      dot.classList.toggle("is-cold", !live);
    });
  }

  // ── init ───────────────────────────────────────────────────────────

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());

    // Token actions (single Slido card has the buttons; delegated click)
    const page = document.getElementById(PAGE_ID);
    if (page) {
      page.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-fire-token-action]");
        if (!btn) return;
        const action = btn.dataset.fireTokenAction;
        if (action === "regen") _regenerateToken();
        else if (action === "revoke") _revokeToken();
        else if (action === "copy") {
          if (_state.plainToken) {
            _copyToClipboard(_state.plainToken);
            window.showToast && window.showToast("已複製到剪貼簿", true);
          }
        }
      });
    }

    _fetchTokenState();
    _fetchSources();
    _state.sourcesTimer = setInterval(_fetchSources, SOURCE_REFRESH_MS);
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
