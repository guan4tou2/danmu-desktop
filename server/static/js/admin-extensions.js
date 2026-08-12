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
      color: "var(--color-ink-accent)",
      // D-4：頂層常數，模組 parse 時 ServerI18n 尚未 init——存 key，
      // 渲染時（_cardHtml）才 t()。
      descKey: "extSlidoDesc",
      status: "ready",
      sourceMatch: "slido",
      install: {
        steps: [
          { kind: "download", labelKey: "extSlidoStepDownload", href: "/static/extensions/danmu-slido-extension-0.2.0.zip" },
          { kind: "config",   labelKey: "extSlidoStepConfig" },
        ],
      },
      hasFireTokenUI: true,
    },
    {
      id: "discord",
      name: "Discord Bridge",
      version: "—",
      icon: "✉",
      color: "var(--color-ink-theme)",
      descKey: "extDiscordDesc",
      status: "soon",
      sourceMatch: "discord",
    },
    {
      id: "obs",
      name: "OBS Plugin",
      version: "—",
      icon: "◎",
      color: "var(--color-ink-success)",
      descKey: "extObsDesc",
      status: "soon",
      sourceMatch: "obs",
    },
    {
      id: "bookmarklet",
      name: "Bookmarklet",
      version: "—",
      icon: "✦",
      color: "var(--color-ink-warning)",
      descKey: "extBookmarkletDesc",
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
      <div id="${PAGE_ID}" class="admin-ext-page hud-page-stack lg:col-span-2" data-tpl="B">
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">INTEGRATIONS · ${ServerI18n.t("extKickerTail")}</div>
          <h2 class="admin-ui-page-title">${ServerI18n.t("adminRouteTitle_integrations")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("extPageNote", { tag: "<b>Fire Token</b>" })}</p>
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
      : `<span class="admin-ext-flag is-soon">${ServerI18n.t("extFlagSoon")}</span>`;
    const installSection = isReady && ext.install
      ? `<div class="admin-ext-install">
          <div class="admin-ui-monolabel">INSTALL · ${ServerI18n.t("extSecInstall")}</div>
          <ol class="admin-ext-install-steps">
            ${ext.install.steps.map((s) => {
              if (s.kind === "download") {
                return `<li><a class="admin-ext-step-link" href="${s.href}" target="_blank" rel="noopener noreferrer">${escapeHtml(ServerI18n.t(s.labelKey))} ↓</a></li>`;
              }
              return `<li>${escapeHtml(ServerI18n.t(s.labelKey))}</li>`;
            }).join("")}
          </ol>
        </div>`
      : "";
    const tokenSection = ext.hasFireTokenUI
      ? `<div class="admin-ext-token" data-ext-token>
          <div class="admin-ui-monolabel">
            FIRE TOKEN · ${ServerI18n.t("extSecFireToken")}
            <a href="#/firetoken" class="admin-ext-token-deeplink">${ServerI18n.t("extTokenDeepLink")}</a>
          </div>
          <div class="admin-ext-token-row">
            <code class="admin-ext-token-code" data-fire-token-display>${ServerI18n.t("firetokenTokenUnsetPlaceholder")}</code>
            <button type="button" class="admin-ui-action admin-ext-token-action" data-fire-token-action="copy" disabled>${ServerI18n.t("extTokenCopyBtn")}</button>
            <button type="button" class="admin-ui-action admin-ext-token-action" data-fire-token-action="regen">${ServerI18n.t("firetokenGenerateBtn")}</button>
            <button type="button" class="admin-ui-action is-danger admin-ext-token-action" data-fire-token-action="revoke" disabled>${ServerI18n.t("firetokenRevokeBtn")}</button>
          </div>
          <div class="admin-ext-token-hint">
            ${ServerI18n.t("extTokenHint")}
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
        <p class="admin-ext-desc">${escapeHtml(ServerI18n.t(ext.descKey))}</p>
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
    const ok = await window.HudConfirm?.open({
      icon: "⟳",
      title: ServerI18n.t("firetokenRegenModalTitle"),
      subtitle: "ROTATE · EXISTING EXTENSIONS STOP WORKING IMMEDIATELY",
      severity: "warn",
      body: ServerI18n.t("firetokenRegenModalBody"),
      confirmLabel: ServerI18n.t("firetokenRegenModalConfirm"),
    });
    if (!ok) return;
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
      window.showToast && window.showToast(ServerI18n.t("extToastTokenGenerated"), true);
      _copyToClipboard(data.token);
    } catch (e) {
      console.warn("[ext] regen failed:", e);
      window.showToast && window.showToast(ServerI18n.t("firetokenToastGenerateFailed"), false);
    }
  }

  async function _revokeToken() {
    const ok = await window.HudConfirm?.open({
      icon: "⊘",
      title: ServerI18n.t("firetokenRevokeModalTitle"),
      subtitle: "REVOKE · ALL EXTENSIONS STOP WORKING",
      severity: "danger",
      body: ServerI18n.t("firetokenRevokeModalBody"),
      confirmLabel: ServerI18n.t("firetokenRevokeBtn"),
    });
    if (!ok) return;
    try {
      const r = await window.csrfFetch("/admin/integrations/fire-token/revoke", { method: "POST" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      _state.fireToken = await r.json();
      _state.plainToken = null;
      _renderToken();
      window.showToast && window.showToast(ServerI18n.t("extToastTokenRevoked"), true);
    } catch (e) {
      console.warn("[ext] revoke failed:", e);
      window.showToast && window.showToast(ServerI18n.t("firetokenToastRevokeFailed"), false);
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
      display.textContent = ServerI18n.t("extTokenPrefixHint", { prefix: t.prefix || "" });
      display.classList.remove("is-plain");
    } else {
      display.textContent = ServerI18n.t("extTokenNotSetHint");
      display.classList.remove("is-plain");
    }
    if (copyBtn) copyBtn.disabled = !_state.plainToken;
    if (regenBtn) regenBtn.textContent = (t && t.has_token) ? ServerI18n.t("extTokenRegenerateLabel") : ServerI18n.t("firetokenGenerateBtn");
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
            window.showToast && window.showToast(ServerI18n.t("firetokenToastCopied"), true);
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
