/**
 * Admin · Rate Limits page (extracted from admin.js 2026-04-28
 * Group D-3 split, second pass).
 *
 * Owns sec-ratelimit · 4-scope rate-limit editor + summary tiles +
 * sparklines + violations feed. Mirrors prototype admin-ratelimits.jsx.
 *
 * Renders into #settings-grid on `admin-panel-rendered`. Shares the
 * /admin/bootstrap fan-out cache via window.AdminBootstrap.
 *
 * Globals: csrfFetch / showToast / ServerI18n / AdminUtils / AdminBootstrap.
 */
(function () {
  "use strict";

  const SECTION_ID = "sec-ratelimit";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // D-4 (2026-08-07)：label 存 labelKey，渲染時才組 "{EN scope} · " + t(...)
  // （模組 parse 時 ServerI18n 尚未 init）。EN scope tag 直接沿用
  // r.key.toUpperCase()，不必再存一份、也不必跟著 4 語變動。
  const ROWS = [
    { key: "fire",  labelKey: "ratelimitScopeFireDesc",  envLimit: "FIRE_RATE_LIMIT",  envWindow: "FIRE_RATE_WINDOW",  defLimit: 20,  defWindow: 60,  defLockout: null },
    { key: "api",   labelKey: "ratelimitScopeApiDesc",   envLimit: "API_RATE_LIMIT",   envWindow: "API_RATE_WINDOW",   defLimit: 30,  defWindow: 60,  defLockout: null },
    { key: "admin", labelKey: "ratelimitScopeAdminDesc", envLimit: "ADMIN_RATE_LIMIT", envWindow: "ADMIN_RATE_WINDOW", defLimit: 300, defWindow: 60,  defLockout: null },
    { key: "login", labelKey: "ratelimitScopeLoginDesc", envLimit: "LOGIN_RATE_LIMIT", envWindow: "LOGIN_RATE_WINDOW", defLimit: 5,   defWindow: 300, defLockout: 900 },
  ];

  function _renderHtml() {
    return `
      <div id="${SECTION_ID}" class="admin-ratelimit-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">RATE LIMITS · 4 SCOPES · .env</div>
          <h2 class="admin-ui-page-title">${ServerI18n.t("ratelimitPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("ratelimitPageNote")}</p>
        </div>

        <!-- D-6 階段 4 (2026-07-29): 本頁原本自製 .admin-ratelimit-summary >
             .tile，跟審核區其他 KPI 帶（黑名單／敏感字都用 .hud-stat-tile）長
             得不一樣。改用共用元件，順帶把語意色從 10px 的 delta 移到 28px 的
             數字上 —— 淺色模式下 hud-lime / hud-amber 當 10px 內文只有
             3.30 / 3.19，本來就過不了 4.5；同一個顏色掛在大字上門檻是 3.0，
             而 label 改用 muted 之後是 7.58。資料綁定 data-rl-sum-* 全部沿用。
             BLACKLIST 的 is-cyan 對齊敏感字頁同名指標。 -->
        <div class="hud-stats-strip">
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">REQUESTS · 24H</span>
            <span class="hud-stat-tile-value" data-rl-sum-hits>—</span>
            <span class="hud-stat-tile-label" data-rl-sum-hits-delta>${ServerI18n.t("ratelimitCalculatingLabel")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">VIOLATIONS · 24H</span>
            <span class="hud-stat-tile-value is-amber" data-rl-sum-viol>—</span>
            <span class="hud-stat-tile-label" data-rl-sum-viol-rate>${ServerI18n.t("ratelimitBlockRateLabel")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">LOCKED</span>
            <span class="hud-stat-tile-value is-crimson" data-rl-sum-locked>—</span>
            <span class="hud-stat-tile-label">LOGIN · ${ServerI18n.t("ratelimitLockedHint")}</span>
          </div>
          <div class="hud-stat-tile">
            <span class="hud-stat-tile-en">BLACKLIST</span>
            <span class="hud-stat-tile-value is-cyan" data-rl-sum-black>—</span>
            <span class="hud-stat-tile-label">${ServerI18n.t("ratelimitBlacklistHint")}</span>
          </div>
        </div>
        <div class="admin-ratelimit-rows">
          ${ROWS.map((r) => `
            <div class="admin-ratelimit-row" data-rl-key="${r.key}">
              <div class="admin-ratelimit-row-head">
                <span class="admin-ratelimit-row-label">${escapeHtml(r.key.toUpperCase() + " · " + ServerI18n.t(r.labelKey))}</span>
                <span class="admin-ratelimit-row-env">${r.envLimit}</span>
              </div>
              <div class="admin-ratelimit-row-body">
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLimit")}</span>
                  <input type="number" min="1" max="1000" value="${r.defLimit}" data-rl-limit="${r.key}" />
                </label>
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldWindow")}</span>
                  <select data-rl-window="${r.key}">
                    <option value="10"${r.defWindow === 10 ? " selected" : ""}>10s</option>
                    <option value="30"${r.defWindow === 30 ? " selected" : ""}>30s</option>
                    <option value="60"${r.defWindow === 60 ? " selected" : ""}>60s</option>
                    <option value="300"${r.defWindow === 300 ? " selected" : ""}>5 min</option>
                    <option value="3600"${r.defWindow === 3600 ? " selected" : ""}>1 hr</option>
                  </select>
                </label>
                ${r.key === "login" ? `
                <label class="admin-ratelimit-field">
                  <span>${ServerI18n.t("ratelimitFieldLockout")}</span>
                  <input type="number" min="60" max="86400" value="${r.defLockout}" data-rl-lockout="${r.key}" title="${ServerI18n.t("ratelimitLockoutFieldTitle")}" />
                </label>` : ""}
                <div class="admin-ratelimit-field admin-ratelimit-bar-field">
                  <span>${ServerI18n.t("ratelimitFieldCurrentUsage")}</span>
                  <div class="admin-ratelimit-bar">
                    <div class="admin-ratelimit-bar-fill" data-rl-bar="${r.key}" style="width:18%"></div>
                  </div>
                  <span class="admin-ratelimit-bar-text" data-rl-current="${r.key}">—</span>
                </div>
                <div class="admin-ratelimit-field admin-ratelimit-save-field">
                  <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="save" data-rl-save="${r.key}" title="${ServerI18n.t("ratelimitApplyBtnTitle")}">${ServerI18n.t("ratelimitApplyBtn")}</button>
                </div>
              </div>
              <div class="admin-ratelimit-row-foot">
                <svg class="admin-ratelimit-sparkline" data-rl-spark="${r.key}" viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="" fill="none" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <span class="admin-ratelimit-effective" data-rl-effective="${r.key}">
                  effective_rate = ${r.defLimit} / ${r.defWindow}s = ${(r.defLimit / r.defWindow).toFixed(2)} req/s · burst = ${Math.round(r.defLimit * 1.5)}${r.key === "login" ? " · lock = " + r.defLockout + "s" : ""}
                </span>
              </div>
              <div class="admin-ratelimit-suggest" data-rl-suggest="${r.key}" hidden>
                <span class="admin-ratelimit-suggest-icon" aria-hidden="true">▲</span>
                <span class="admin-ratelimit-suggest-body">
                  <span class="admin-ratelimit-suggest-title">${ServerI18n.t("ratelimitSuggestTitle")}</span>
                  <span class="admin-ratelimit-suggest-detail" data-rl-suggest-detail>—</span>
                </span>
                <button type="button" class="admin-ui-action is-primary admin-rl-action" data-rl-action="apply-suggest" data-rl-apply="${r.key}">${ServerI18n.t("ratelimitApplySuggestBtn")}</button>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="admin-ratelimit-bottom">
          <div class="admin-ratelimit-violations">
            <div class="admin-ratelimit-vfeed-head">
              <span class="title">${ServerI18n.t("ratelimitViolationsTitle")}</span>
              <span class="kicker" data-rl-vcount>RECENT VIOLATIONS · ${ServerI18n.t("ratelimitFiveMinWindow")}</span>
            </div>
            <div class="admin-ratelimit-vfeed-table">
              <div class="admin-ratelimit-vfeed-row is-head">
                <span>TIME</span><span>SCOPE</span><span>IP</span>
              </div>
              <div class="admin-ratelimit-vfeed-body" data-rl-vbody>
                <div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>
              </div>
            </div>
          </div>
          <div class="admin-ratelimit-ip-policy">
            <div class="admin-ratelimit-vfeed-head">
              <span class="title">${ServerI18n.t("ratelimitIpPolicyTitle")}</span>
              <span class="kicker" data-rl-ip-summary>IP POLICY · ${ServerI18n.t("ratelimitLoadingEllipsis")}</span>
            </div>
            <div class="admin-ratelimit-ip-form">
              <input type="text" data-rl-ip-input placeholder="${ServerI18n.t("ratelimitIpInputPlaceholder")}" maxlength="43" autocomplete="off" spellcheck="false" />
              <select data-rl-ip-select aria-label="${ServerI18n.t("ratelimitIpSelectAriaLabel")}">
                <option value="allowlist">${ServerI18n.t("ratelimitAllowlistOption")}</option>
                <option value="denylist">${ServerI18n.t("ratelimitDenylistOption")}</option>
              </select>
              <button type="button" class="admin-ui-action is-primary" data-rl-ip-add>${ServerI18n.t("ratelimitIpAddBtn")}</button>
            </div>
            <p class="admin-ratelimit-ip-help">${ServerI18n.t("ratelimitIpHelp")}</p>
            <div class="admin-ratelimit-ip-error" data-rl-ip-error hidden></div>
            <div class="admin-ratelimit-ip-lists">
              <div class="admin-ratelimit-ip-col" data-rl-ip-col="allowlist">
                <div class="admin-ratelimit-ip-col-head">
                  <span class="lbl">ALLOWLIST</span>
                  <span class="cnt" data-rl-ip-allow-count>0</span>
                </div>
                <div class="admin-ratelimit-ip-col-body" data-rl-ip-body="allowlist">
                  <div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet", { list: ServerI18n.t("ratelimitAllowlistName") })}</div>
                </div>
              </div>
              <div class="admin-ratelimit-ip-col" data-rl-ip-col="denylist">
                <div class="admin-ratelimit-ip-col-head">
                  <span class="lbl">DENYLIST</span>
                  <span class="cnt" data-rl-ip-deny-count>0</span>
                </div>
                <div class="admin-ratelimit-ip-col-body" data-rl-ip-body="denylist">
                  <div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet", { list: ServerI18n.t("ratelimitDenylistName") })}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="admin-ratelimit-footer">
          <button type="button" class="admin-ui-action admin-rl-footer-action" data-rl-action="reset">${ServerI18n.t("ratelimitResetBtn")}</button>
          <button type="button" class="admin-ui-action is-primary admin-rl-footer-action" data-rl-action="export">${ServerI18n.t("ratelimitExportBtn")}</button>
        </div>

        <pre id="rlEnvExport" class="admin-ratelimit-export" hidden></pre>
      </div>`;
  }

  function _wire(section) {
    const exportPre = section.querySelector("#rlEnvExport");

    // Fetch summary tiles — prefers bulk /admin/bootstrap cache primed
    // on page load. Falls back to per-endpoint fetches if cache absent.
    setTimeout(async () => {
      try {
        const Boot = window.AdminBootstrap;
        if (Boot && typeof Boot.primeBootstrap === "function") await Boot.primeBootstrap();
        const cachedHist = Boot && Boot.bootstrapSection ? Boot.bootstrapSection("history_stats") : null;
        const cachedBl   = Boot && Boot.bootstrapSection ? Boot.bootstrapSection("blacklist") : null;
        const cachedMet  = Boot && Boot.bootstrapSection ? Boot.bootstrapSection("metrics") : null;
        const need = [];
        need.push(cachedHist ? null : fetch("/admin/history?hours=24&limit=1", { credentials: "same-origin" }));
        need.push(cachedBl   ? null : fetch("/admin/blacklist/get",            { credentials: "same-origin" }));
        need.push(cachedMet  ? null : fetch("/admin/metrics",                  { credentials: "same-origin" }));
        const [histR, blR, metR] = await Promise.all(need);
        const h = cachedHist || (histR && histR.ok ? await histR.json() : null);
        if (h) {
          const n24 = (h.stats && h.stats.last_24h) || 0;
          const tot = (h.stats && h.stats.total) || 0;
          const hits = section.querySelector("[data-rl-sum-hits]");
          const delta = section.querySelector("[data-rl-sum-hits-delta]");
          if (hits) hits.textContent = n24.toLocaleString();
          if (delta) delta.textContent = ServerI18n.t("ratelimitSumTotal", { n: tot.toLocaleString() });
        }
        const b = cachedBl || (blR && blR.ok ? await blR.json() : null);
        if (b) {
          const arr = Array.isArray(b) ? b : (b.entries || b.keywords || []);
          const bl = section.querySelector("[data-rl-sum-black]");
          if (bl) bl.textContent = arr.length ? ServerI18n.t("ratelimitCountUnit", { n: arr.length }) : "0";
        }
        const viol = section.querySelector("[data-rl-sum-viol]");
        const violRate = section.querySelector("[data-rl-sum-viol-rate]");
        const locked = section.querySelector("[data-rl-sum-locked]");
        const m = cachedMet || (metR && metR.ok ? await metR.json() : null);
        if (m) {
          const rl = m && m.rate_limits;
          if (rl && rl.totals) {
            const tHits = rl.totals.hits || 0;
            const tViol = rl.totals.violations || 0;
            const tLock = rl.totals.locked_sources || 0;
            if (viol) viol.textContent = tViol.toLocaleString();
            if (violRate) {
              const denom = tHits + tViol;
              violRate.textContent = denom > 0
                ? ServerI18n.t("ratelimitBlockRateValue", { rate: ((tViol / denom) * 100).toFixed(1) })
                : "—";
            }
            if (locked) locked.textContent = ServerI18n.t("ratelimitLockedSources", { n: tLock.toLocaleString() });
            ROWS.forEach(({ key }) => {
              const row = rl[key];
              const el = section.querySelector(`[data-rl-current="${key}"]`);
              if (el && row) {
                const rh = (row.hits || 0).toLocaleString();
                const rv = (row.violations || 0).toLocaleString();
                el.textContent = ServerI18n.t("ratelimitHitsViolations", { hits: rh, viol: rv });
              }
            });
            _renderSuggestBanners(rl);
          } else {
            if (viol) viol.textContent = "—";
            if (violRate) violRate.textContent = ServerI18n.t("ratelimitCountPendingBackend");
            if (locked) locked.textContent = "—";
          }
        } else {
          if (viol) viol.textContent = "—";
          if (violRate) violRate.textContent = ServerI18n.t("ratelimitCountPendingBackend");
          if (locked) locked.textContent = "—";
        }
        _renderViolationsFeed(m && m.recent_violations);
      } catch (_) { /* silent */ }
    }, 4500);

    function _renderViolationsFeed(events) {
      const body = section.querySelector("[data-rl-vbody]");
      const count = section.querySelector("[data-rl-vcount]");
      if (!body) return;
      const arr = Array.isArray(events) ? events : [];
      if (count) count.textContent = "RECENT VIOLATIONS · " + ServerI18n.t("ratelimitViolationsCountKicker", { n: arr.length });
      if (arr.length === 0) {
        body.innerHTML = `<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoViolationsYet")}</div>`;
        return;
      }
      const fmtTime = (ts) => {
        const d = new Date(ts * 1000);
        const pad = (n) => String(n).padStart(2, "0");
        return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
      };
      const scopeColor = (s) => ({
        fire: "var(--color-primary)",
        api: "var(--hud-lime)",
        admin: "var(--hud-amber)",
        login: "var(--hud-crimson)",
      }[s] || "var(--color-text-muted)");
      body.innerHTML = arr.slice(0, 30).map((e) => `
        <div class="admin-ratelimit-vfeed-row">
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted)">${fmtTime(e.ts)}</span>
          <span style="font-family:var(--font-mono);font-size:11px;letter-spacing:1px;font-weight:700;color:${scopeColor(e.scope)}">${(e.scope || "").toUpperCase()}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--color-text-strong)">${escapeHtml(e.ip || "")}</span>
        </div>
      `).join("");
    }

    function _renderSuggestBanners(rl) {
      if (!rl) return;
      ROWS.forEach(({ key }) => {
        const row = rl[key];
        const banner = section.querySelector(`[data-rl-suggest="${key}"]`);
        if (!banner) return;
        const sug = row && row.suggestion;
        if (!sug) {
          banner.hidden = true;
          return;
        }
        const detail = banner.querySelector("[data-rl-suggest-detail]");
        if (detail) {
          detail.textContent = ServerI18n.t("ratelimitSuggestDetail", {
            p95: Number(sug.p95_per_second || 0).toFixed(2),
            limit: row.limit || "—",
            window: row.window || "—",
            suggLimit: sug.suggested_limit,
            suggWindow: sug.suggested_window,
          });
        }
        const btn = banner.querySelector("[data-rl-apply]");
        if (btn) {
          btn.dataset.rlSuggestLimit = String(sug.suggested_limit);
          btn.dataset.rlSuggestWindow = String(sug.suggested_window);
        }
        banner.hidden = false;
      });
    }

    async function refreshRateLimitMetrics() {
      try {
        const r = await fetch("/admin/metrics", { credentials: "same-origin" });
        if (!r.ok) return;
        const m = await r.json();
        const rl = m && m.rate_limits;
        if (!rl) return;
        ROWS.forEach(({ key }) => {
          const row = rl[key];
          const el = section.querySelector(`[data-rl-current="${key}"]`);
          if (el && row) {
            const rh = (row.hits || 0).toLocaleString();
            const rv = (row.violations || 0).toLocaleString();
            el.textContent = ServerI18n.t("ratelimitHitsViolations", { hits: rh, viol: rv });
          }
        });
        _renderSuggestBanners(rl);
      } catch (_) { /* silent */ }
    }

    section.addEventListener("click", async (e) => {
      const btn = e.target.closest("[data-rl-action]");
      if (!btn) return;
      const action = btn.dataset.rlAction;
      if (action === "save") {
        const scope = btn.dataset.rlSave;
        const limitEl = section.querySelector(`[data-rl-limit="${scope}"]`);
        const winEl = section.querySelector(`[data-rl-window="${scope}"]`);
        if (!limitEl || !winEl) return;
        const limit = parseInt(limitEl.value, 10);
        const window_ = parseInt(winEl.value, 10);
        if (!Number.isFinite(limit) || !Number.isFinite(window_)) {
          if (typeof showToast === "function") showToast(ServerI18n.t("ratelimitInvalidInputToast"), false);
          return;
        }
        const orig = btn.textContent;
        btn.disabled = true;
        btn.textContent = ServerI18n.t("ratelimitApplyingBtn");
        try {
          const resp = await window.csrfFetch("/admin/ratelimit/apply", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ scope, limit, window: window_ }),
          });
          if (resp.ok) {
            if (typeof showToast === "function") {
              showToast(ServerI18n.t("ratelimitToastApplied", { scope: scope.toUpperCase(), limit, window: window_ }), true);
            }
            refreshRateLimitMetrics();
          } else {
            const body = await resp.json().catch(() => ({}));
            const msg = (body && body.error) || `HTTP ${resp.status}`;
            if (typeof showToast === "function") showToast(ServerI18n.t("ratelimitApplyFailedToast", { msg }), false);
          }
        } catch (err) {
          if (typeof showToast === "function") showToast(ServerI18n.t("ratelimitApplyFailedToast", { msg: ServerI18n.t("ratelimitNetworkError") }), false);
        } finally {
          btn.disabled = false;
          btn.textContent = orig;
        }
        return;
      }
      if (action === "apply-suggest") {
        const scope = btn.dataset.rlApply;
        const limit = parseInt(btn.dataset.rlSuggestLimit, 10);
        const window_ = parseInt(btn.dataset.rlSuggestWindow, 10);
        if (!scope || !Number.isFinite(limit) || !Number.isFinite(window_)) return;
        const orig = btn.textContent;
        btn.disabled = true;
        btn.textContent = ServerI18n.t("ratelimitApplyingBtn");
        try {
          const resp = await window.csrfFetch("/admin/ratelimit/apply", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ scope, limit, window: window_ }),
          });
          if (resp.ok) {
            const limEl = section.querySelector(`[data-rl-limit="${scope}"]`);
            const winEl = section.querySelector(`[data-rl-window="${scope}"]`);
            if (limEl) limEl.value = limit;
            if (winEl) winEl.value = window_;
            if (typeof showToast === "function") {
              showToast(ServerI18n.t("ratelimitToastAppliedSuggestion", { scope: scope.toUpperCase(), limit, window: window_ }), true);
            }
            refreshRateLimitMetrics();
            renderEffectiveRates();
          } else {
            const body = await resp.json().catch(() => ({}));
            const msg = (body && body.error) || `HTTP ${resp.status}`;
            if (typeof showToast === "function") showToast(ServerI18n.t("ratelimitApplyFailedToast", { msg }), false);
          }
        } catch (err) {
          if (typeof showToast === "function") showToast(ServerI18n.t("ratelimitApplyFailedToast", { msg: ServerI18n.t("ratelimitNetworkError") }), false);
        } finally {
          btn.disabled = false;
          btn.textContent = orig;
        }
        return;
      }
      if (action === "export") {
        const lines = [];
        section.querySelectorAll("[data-rl-limit]").forEach((el) => {
          const k = el.dataset.rlLimit.toUpperCase();
          lines.push(`${k}_RATE_LIMIT=${el.value}`);
        });
        section.querySelectorAll("[data-rl-window]").forEach((el) => {
          const k = el.dataset.rlWindow.toUpperCase();
          lines.push(`${k}_RATE_WINDOW=${el.value}`);
        });
        exportPre.textContent = lines.join("\n");
        exportPre.hidden = false;
        try {
          navigator.clipboard?.writeText(lines.join("\n"));
          if (typeof showToast === "function") showToast(ServerI18n.t("ratelimitCopiedToast"), true);
        } catch (_) { /* */ }
      } else if (action === "reset") {
        const defs = { fire: [20, 60], api: [30, 60], admin: [60, 60], login: [5, 300] };
        Object.entries(defs).forEach(([k, [lim, win]]) => {
          const l = section.querySelector(`[data-rl-limit="${k}"]`);
          const w = section.querySelector(`[data-rl-window="${k}"]`);
          if (l) l.value = lim;
          if (w) w.value = win;
        });
        exportPre.hidden = true;
        renderEffectiveRates();
      }
    });

    function renderEffectiveRates() {
      ROWS.forEach(({ key }) => {
        const limEl = section.querySelector(`[data-rl-limit="${key}"]`);
        const winEl = section.querySelector(`[data-rl-window="${key}"]`);
        const lockEl = section.querySelector(`[data-rl-lockout="${key}"]`);
        const eff = section.querySelector(`[data-rl-effective="${key}"]`);
        if (!limEl || !winEl || !eff) return;
        const lim = parseInt(limEl.value, 10) || 0;
        const win = parseInt(winEl.value, 10) || 1;
        const rate = (lim / win).toFixed(2);
        const burst = Math.round(lim * 1.5);
        let txt = `effective_rate = ${lim} / ${win}s = ${rate} req/s · burst = ${burst}`;
        if (key === "login" && lockEl) {
          const lock = parseInt(lockEl.value, 10) || 0;
          txt += ` · lock = ${lock}s`;
        }
        eff.textContent = txt;
      });
    }
    section.addEventListener("input", (e) => {
      const t = e.target;
      if (!t || (!t.dataset.rlLimit && !t.dataset.rlLockout)) return;
      renderEffectiveRates();
    });
    section.addEventListener("change", (e) => {
      const t = e.target;
      if (!t || !t.dataset.rlWindow) return;
      renderEffectiveRates();
    });
    renderEffectiveRates();

    function renderSparkline(svgEl, series) {
      if (!svgEl || !Array.isArray(series)) return;
      const W = 96, H = 24;
      const arr = series.length ? series : new Array(24).fill(0);
      const max = Math.max(1, ...arr);
      const step = W / Math.max(1, arr.length - 1);
      const pts = arr.map((v, i) => `${(i * step).toFixed(1)},${(H - 2 - (v / max) * (H - 4)).toFixed(1)}`).join(" ");
      const line = svgEl.querySelector("polyline");
      if (line) line.setAttribute("points", pts);
    }
    ROWS.forEach(({ key }) => {
      const svg = section.querySelector(`[data-rl-spark="${key}"]`);
      if (svg) renderSparkline(svg, new Array(24).fill(0));
    });

    // ── IP allow/deny editor ────────────────────────────────────────────
    // Loose client-side check — server does the authoritative validation
    // via ipaddress.ip_network(). Reject only clearly-broken input so we
    // don't round-trip on typos like "abc".
    const IP_HINT_RE = /^([0-9a-f:.]+)(\/\d{1,3})?$/i;
    let ipState = { allowlist: [], denylist: [] };

    const ipEls = {
      input: section.querySelector("[data-rl-ip-input]"),
      select: section.querySelector("[data-rl-ip-select]"),
      addBtn: section.querySelector("[data-rl-ip-add]"),
      summary: section.querySelector("[data-rl-ip-summary]"),
      error: section.querySelector("[data-rl-ip-error]"),
      allowCount: section.querySelector("[data-rl-ip-allow-count]"),
      denyCount: section.querySelector("[data-rl-ip-deny-count]"),
      allowBody: section.querySelector('[data-rl-ip-body="allowlist"]'),
      denyBody: section.querySelector('[data-rl-ip-body="denylist"]'),
    };

    function showIpError(msg) {
      if (!ipEls.error) return;
      if (!msg) { ipEls.error.hidden = true; ipEls.error.textContent = ""; return; }
      ipEls.error.hidden = false;
      ipEls.error.textContent = msg;
    }

    function renderIpList(kind) {
      const body = kind === "allowlist" ? ipEls.allowBody : ipEls.denyBody;
      const count = kind === "allowlist" ? ipEls.allowCount : ipEls.denyCount;
      if (!body || !count) return;
      const arr = Array.isArray(ipState[kind]) ? ipState[kind] : [];
      count.textContent = String(arr.length);
      if (arr.length === 0) {
        const listName = ServerI18n.t(kind === "allowlist" ? "ratelimitAllowlistName" : "ratelimitDenylistName");
        body.innerHTML = `<div class="admin-ratelimit-vfeed-empty">${ServerI18n.t("ratelimitNoEntriesYet", { list: listName })}</div>`;
        return;
      }
      body.innerHTML = arr.map((entry) => {
        const removeTitle = ServerI18n.t("ratelimitRemoveEntryTitle", { entry: escapeHtml(entry) });
        return `
        <div class="admin-ratelimit-ip-chip" data-rl-ip-entry="${escapeHtml(entry)}">
          <span class="admin-ratelimit-ip-chip-cidr">${escapeHtml(entry)}</span>
          <button type="button" class="admin-ratelimit-ip-chip-remove" data-rl-ip-remove="${escapeHtml(entry)}" data-rl-ip-remove-kind="${kind}" title="${removeTitle}" aria-label="${removeTitle}">×</button>
        </div>
      `;
      }).join("");
    }

    function renderIpAll() {
      renderIpList("allowlist");
      renderIpList("denylist");
      if (ipEls.summary) {
        const a = (ipState.allowlist || []).length;
        const d = (ipState.denylist || []).length;
        ipEls.summary.textContent = "IP POLICY · " + ServerI18n.t("ratelimitIpCounts", { allow: a, deny: d });
      }
    }

    async function loadIpRules() {
      try {
        const r = await fetch("/admin/ratelimit/ip-rules", { credentials: "same-origin" });
        if (!r.ok) {
          if (ipEls.summary) ipEls.summary.textContent = "IP POLICY · " + ServerI18n.t("ratelimitLoadFailedStatus", { status: r.status });
          return;
        }
        const data = await r.json();
        if (data && typeof data === "object") {
          ipState = {
            allowlist: Array.isArray(data.allowlist) ? data.allowlist : [],
            denylist: Array.isArray(data.denylist) ? data.denylist : [],
          };
          renderIpAll();
        }
      } catch (_) {
        if (ipEls.summary) ipEls.summary.textContent = "IP POLICY · " + ServerI18n.t("ratelimitNetworkError");
      }
    }

    async function saveIpRules(patch, { toastLabel } = {}) {
      try {
        const r = await window.csrfFetch("/admin/ratelimit/ip-rules", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(patch),
        });
        if (r.ok) {
          const data = await r.json();
          ipState = {
            allowlist: Array.isArray(data.allowlist) ? data.allowlist : [],
            denylist: Array.isArray(data.denylist) ? data.denylist : [],
          };
          renderIpAll();
          showIpError("");
          if (toastLabel && typeof showToast === "function") showToast(toastLabel, true);
          return true;
        }
        const body = await r.json().catch(() => ({}));
        const msg = (body && body.error) || `HTTP ${r.status}`;
        showIpError(msg);
        return false;
      } catch (_) {
        showIpError(ServerI18n.t("ratelimitNetworkError"));
        return false;
      }
    }

    if (ipEls.addBtn) {
      ipEls.addBtn.addEventListener("click", async () => {
        if (!ipEls.input || !ipEls.select) return;
        const raw = (ipEls.input.value || "").trim();
        if (!raw) { showIpError(ServerI18n.t("ratelimitIpRequiredError")); return; }
        if (!IP_HINT_RE.test(raw)) { showIpError(ServerI18n.t("ratelimitIpFormatError")); return; }
        const kind = ipEls.select.value === "denylist" ? "denylist" : "allowlist";
        const next = Array.from(new Set([...(ipState[kind] || []), raw]));
        const ok = await saveIpRules({ [kind]: next }, {
          toastLabel: ServerI18n.t("ratelimitToastAdded", {
            list: ServerI18n.t(kind === "allowlist" ? "ratelimitAllowlistName" : "ratelimitDenylistName"),
            value: raw,
          }),
        });
        if (ok) ipEls.input.value = "";
      });
    }

    if (ipEls.input) {
      ipEls.input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (ipEls.addBtn) ipEls.addBtn.click();
        }
      });
      ipEls.input.addEventListener("input", () => { if (ipEls.error && !ipEls.error.hidden) showIpError(""); });
    }

    section.addEventListener("click", async (e) => {
      const btn = e.target.closest("[data-rl-ip-remove]");
      if (!btn) return;
      const entry = btn.dataset.rlIpRemove;
      const kind = btn.dataset.rlIpRemoveKind === "denylist" ? "denylist" : "allowlist";
      const next = (ipState[kind] || []).filter((x) => x !== entry);
      await saveIpRules({ [kind]: next }, {
        toastLabel: ServerI18n.t("ratelimitToastRemoved", {
          list: ServerI18n.t(kind === "allowlist" ? "ratelimitAllowlistName" : "ratelimitDenylistName"),
          value: entry,
        }),
      });
    });

    loadIpRules();
    setTimeout(async () => {
      try {
        const r = await fetch("/admin/metrics", { credentials: "same-origin" });
        if (!r.ok) return;
        const m = await r.json();
        const rl = m && m.rate_limits;
        if (!rl) return;
        ROWS.forEach(({ key }) => {
          const hist = rl[key] && (rl[key].bucket_history || rl[key].history);
          if (Array.isArray(hist) && hist.length) {
            const svg = section.querySelector(`[data-rl-spark="${key}"]`);
            if (svg) renderSparkline(svg, hist.slice(-24));
          }
        });
      } catch (_) { /* */ }
    }, 5500);

  }

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(SECTION_ID)) return;
    grid.insertAdjacentHTML("beforeend", _renderHtml());
    const section = document.getElementById(SECTION_ID);
    if (section) _wire(section);
  }

  document.addEventListener("admin-panel-rendered", init);
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById(SECTION_ID)) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true, subtree: true,
    });
    init();
  });
})();
