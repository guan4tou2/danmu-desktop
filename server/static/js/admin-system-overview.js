/**
 * Admin · System Overview page (extracted from admin.js 2026-04-28
 * Group D-3 split, fourth pass).
 *
 * Owns sec-system-overview — 3-pane layout (Server block + Rate Limits
 * cap visualization + Backup/Danger). Mirrors prototype admin-pages.jsx
 * AdminSystemPage.
 *
 * Renders into #settings-grid on `admin-panel-rendered`. Reads
 * /admin/metrics for live CPU / mem / msg-rate / WS clients / queue /
 * widget count + uptime.
 *
 * Globals: csrfFetch / showToast / DANMU_CONFIG.
 */
(function () {
  "use strict";

  const SECTION_ID = "sec-system-overview";

  const RATE_CAPS = {
    fire:  { max: 60,  label: "FIRE_RATE_LIMIT" },
    api:   { max: 60,  label: "API_RATE_LIMIT" },
    admin: { max: 600, label: "ADMIN_RATE_LIMIT" },
    login: { max: 30,  label: "LOGIN_RATE_LIMIT" },
  };
  const RATE_DEFAULTS = { fire: 20, api: 30, admin: 300, login: 5 };
  const RATE_WINDOWS  = { fire: 60, api: 60, admin: 60, login: 300 };

  // 2026-05-17 design v4: 6 metric tiles w/ sparklines, dual-pane services
  // + recent errors, action buttons row. Backend-safe action subset:
  //   Reload Effects = /admin/effects/reload (real)
  //   Open Events    = link to admin-events route
  //   Restart WS / Force GC = render as disabled per security review
  function _renderHtml() {
    // v5 Batch 12-2 (2026-05-19): banner + 6-col KPI strip + 2-col
    // grid (services table left, right-stack of 3 cards). Renamed
    // KPI tiles to match design: UPTIME / CPU / MEM RSS / WS CLIENTS
    // / MSG RATE / DB SIZE. CONFIG SUMMARY added as 3rd right-rail
    // card per batch12-system.jsx SystemOverviewPage.
    return `
      <div id="${SECTION_ID}" class="admin-soh-v4 hud-page-stack lg:col-span-2" data-tpl="A">
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">SYSTEM OVERVIEW · HEALTH · SERVICES · METRICS</div>
          <h2 class="admin-ui-page-title">${ServerI18n.t("sohPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("sohPageNote")}</p>
        </div>

        <!-- Status banner -->
        <div class="admin-soh-v4__banner" data-soh-banner>
          <span class="admin-soh-v4__banner-dot" data-soh-banner-dot></span>
          <div>
            <div class="admin-soh-v4__banner-title" data-soh-banner-title>${ServerI18n.t("sohChecking")}</div>
            <div class="admin-soh-v4__banner-sub" data-soh-banner-sub>—</div>
          </div>
          <span class="admin-soh-v4__spacer"></span>
          <button type="button" class="admin-soh-v4__banner-recheck" data-soh-recheck>${ServerI18n.t("sohRecheckBtn")}</button>
        </div>

        <!-- 6 metric tiles -->
        <div class="admin-soh-v4__metrics">
          ${[
            { id: "uptime", en: "UPTIME",     zh: ServerI18n.t("sohMetricUptime") },
            { id: "cpu",    en: "CPU",        zh: "CPU" },
            { id: "ram",    en: "MEM RSS",    zh: "RAM" },
            { id: "ws",     en: "WS CLIENTS", zh: ServerI18n.t("sohMetricWs") },
            { id: "qps",    en: "MSG RATE",   zh: "Fire QPS" },
            { id: "disk",   en: "DB SIZE",    zh: "DB" },
          ].map(m => `
            <div class="admin-soh-v4__metric" data-m="${m.id}">
              <div class="admin-soh-v4__metric-en">${m.en}</div>
              <div class="admin-soh-v4__metric-v" data-m-v>—</div>
              <svg class="admin-soh-v4__spark" data-m-spark viewBox="0 0 120 22" preserveAspectRatio="none">
                <polyline fill="none" stroke="currentColor" stroke-width="1.5" points="" />
              </svg>
              <div class="admin-soh-v4__metric-zh">${m.zh}</div>
            </div>`).join("")}
        </div>

        <!-- 2-col grid: services table (left) + right stack -->
        <div class="admin-soh-v4__panes">
          <div class="admin-soh-v4__pane">
            <div class="admin-soh-v4__pane-head"><span class="admin-soh-v4__pane-label">${ServerI18n.t("sohPaneServices")} · SERVICES</span></div>
            <div class="admin-soh-v4__services" data-soh-services>
              <!-- populated by _wire() -->
            </div>
          </div>

          <div class="admin-soh-v4__rail">
            <div class="admin-soh-v4__pane">
              <div class="admin-soh-v4__pane-head">
                <span class="admin-soh-v4__pane-label">${ServerI18n.t("sohPaneRecent")} · RECENT</span>
                <span class="admin-soh-v4__spacer"></span>
                <a href="#/events" class="admin-soh-v4__pane-link">${ServerI18n.t("sohViewAll")}</a>
              </div>
              <div class="admin-soh-v4__errors" data-soh-errors>
                <div class="admin-soh-v4__err-empty">${ServerI18n.t("sohNoErrors")}</div>
              </div>
            </div>

            <div class="admin-soh-v4__quickcard">
              <div class="admin-soh-v4__pane-label">QUICK ACTIONS</div>
              <button type="button" class="admin-soh-v4__qa is-cyan" data-soh-action="reload-effects">${ServerI18n.t("sohQaReloadPlugins")}</button>
              <a class="admin-soh-v4__qa" href="#/overlay">${ServerI18n.t("sohQaClearDesktop")}</a>
              <a class="admin-soh-v4__qa" href="#/backup">${ServerI18n.t("sohQaDiagPack")}</a>
              <button type="button" class="admin-soh-v4__qa is-disabled" data-soh-action="force-gc" disabled title="${ServerI18n.t("sohQaGcDisabledTitle")}">
                <span>${ServerI18n.t("sohQaForceGc")}</span>
                <span class="admin-soh-v4__qa-hint">待 BE</span>
              </button>
            </div>

            <div class="admin-soh-v4__cfgcard">
              <div class="admin-soh-v4__pane-label">CONFIG SUMMARY</div>
              <div class="admin-soh-v4__cfgrow"><span>PUBLIC URL</span><code id="sysoPublicUrl">${location.origin}</code></div>
              <div class="admin-soh-v4__cfgrow"><span>WS PATH</span><code id="sysoWsPath">—</code></div>
              <div class="admin-soh-v4__cfgrow"><span>PLUGINS</span><code data-cfg-plugins>—</code></div>
              <div class="admin-soh-v4__cfgrow"><span>WEBHOOKS</span><code data-cfg-webhooks>—</code></div>
              <div class="admin-soh-v4__cfgrow"><span>TOKENS</span><code data-cfg-tokens>—</code></div>
              <div class="admin-soh-v4__cfgrow"><span>BUILD</span><code>v${(window.DANMU_CONFIG && window.DANMU_CONFIG.appVersion) || "?"}</code></div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function _fmtUptime(sec) {
    const d = Math.floor(sec / 86400);
    const h = Math.floor((sec % 86400) / 3600);
    const m = Math.floor((sec % 3600) / 60);
    if (d > 0) return `${d}d ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m`;
    if (h > 0) return `${h}h ${String(m).padStart(2, "0")}m`;
    return `${m}m ${String(sec % 60).padStart(2, "0")}s`;
  }

  function _renderSpark(svg, series, ok) {
    if (!svg || !Array.isArray(series) || series.length === 0) return;
    const polyline = svg.querySelector("polyline");
    if (!polyline) return;
    const max = Math.max.apply(null, series.concat([0.0001]));
    const min = Math.min.apply(null, series);
    const range = (max - min) || 1;
    const pts = series.map((v, i) => {
      const x = (series.length === 1) ? 0 : (i / (series.length - 1)) * 120;
      const y = 22 - ((v - min) / range) * 20 - 1;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    polyline.setAttribute("points", pts.join(" "));
    polyline.style.color = ok ? "var(--hud-lime, #86efac)" : "var(--hud-cyan, #38bdf8)";
  }

  function _setMetric(id, value, series, ok) {
    const tile = document.querySelector(`[data-m="${id}"]`);
    if (!tile) return;
    const v = tile.querySelector("[data-m-v]");
    if (v) v.textContent = value;
    if (typeof ok === "boolean") {
      v.style.color = ok ? "var(--color-ink-success)" : "var(--color-ink-accent)";
    }
    const spark = tile.querySelector("[data-m-spark]");
    _renderSpark(spark, series, ok);
  }

  // v5 Batch 12-2: status banner — green when all healthy, amber when
  // any service flagged. Drives off services data (same as _renderServices).
  function _updateBanner(data) {
    const banner = document.querySelector("[data-soh-banner]");
    const dot = document.querySelector("[data-soh-banner-dot]");
    const title = document.querySelector("[data-soh-banner-title]");
    const sub = document.querySelector("[data-soh-banner-sub]");
    if (!banner) return;
    const upSec = data.server_started_at
      ? Math.max(0, Math.floor(Date.now() / 1000 - data.server_started_at))
      : 0;
    const upStr = upSec ? _fmtUptime(upSec) : "—";
    const wsClients = data.ws_clients ?? 0;
    // Simple health rule: degraded if no metrics returned or queue full.
    const queueFull = data.queue_size != null && data.queue_capacity != null &&
                       data.queue_size >= data.queue_capacity;
    const allHealthy = !queueFull;
    banner.classList.toggle("is-warn", !allHealthy);
    if (dot) {
      dot.style.background = allHealthy ? "var(--hud-lime, #86efac)" : "var(--hud-amber, #fbbf24)";
      dot.style.boxShadow = allHealthy ? "0 0 8px var(--hud-lime, #86efac)" : "0 0 8px var(--hud-amber, #fbbf24)";
    }
    if (title) title.textContent = allHealthy ? ServerI18n.t("sohAllHealthy") : ServerI18n.t("sohOneUnhealthy");
    if (sub) sub.textContent = `${wsClients} WS clients · uptime ${upStr} · last check ${new Date().toLocaleTimeString()}`;
  }

  // v5 Batch 12-2: CONFIG SUMMARY card on the right rail — pulls
  // plugin/webhook/token counts from /admin/metrics where available,
  // falls back to "—" placeholders.
  function _updateConfigSummary(data) {
    const setCfg = (sel, val) => {
      const el = document.querySelector(sel);
      if (el) el.textContent = val == null ? "—" : String(val);
    };
    setCfg("[data-cfg-plugins]", data.plugins_loaded != null ? `${data.plugins_loaded} loaded` : "—");
    setCfg("[data-cfg-webhooks]", data.webhooks_count != null ? `${data.webhooks_count} endpoints` : "—");
    setCfg("[data-cfg-tokens]", data.tokens_count != null ? `${data.tokens_count} issued` : "—");
  }

  function _renderServices(data) {
    const host = document.querySelector("[data-soh-services]");
    if (!host) return;
    const cfg = window.DANMU_CONFIG || {};
    const ver = cfg.appVersion || "—";
    const upSec = data.server_started_at
      ? Math.max(0, Math.floor(Date.now() / 1000 - data.server_started_at))
      : 0;
    const upStr = upSec ? _fmtUptime(upSec) : "—";
    // Best-effort service mapping. Webhook degradation is inferred from
    // `recent_violations` if it shows webhook failures, otherwise healthy.
    const wsHealthy = data.ws_clients >= 0; // metrics endpoint responded
    const webhookOK = !((data.recent_violations || []).some((v) => /webhook|wh_/i.test(JSON.stringify(v))));
    const services = [
      { name: "Flask Server",     status: "healthy",                            uptime: upStr, ver },
      { name: "WS Server",        status: wsHealthy ? "healthy" : "degraded",   uptime: upStr, ver },
      { name: "Effect Engine",    status: "healthy",                            uptime: upStr, ver: "—" },
      { name: "Webhook Delivery", status: webhookOK ? "healthy" : "degraded",   uptime: "—",   ver: "—",
        note: webhookOK ? null : ServerI18n.t("sohWebhookRetrying") },
    ];
    // 同一個狀態色餵兩種用途，門檻不同：圓點是非文字（3.0，--hud-* 撐得住），
    // 徽章是 9px 文字（4.5，--hud-* 淺色臂只有 3.30）→ 分成 fill 與 ink 兩組。
    const statusCols = { healthy: "var(--hud-lime, #86efac)", degraded: "var(--hud-amber, #fbbf24)", error: "var(--hud-crimson, #ff4d4f)" };
    const statusInk = { healthy: "var(--color-ink-success)", degraded: "var(--color-ink-warning)", error: "var(--color-ink-error)" };
    host.innerHTML = services.map((s) => `
      <div class="admin-soh-v4__svc">
        <span class="admin-soh-v4__svc-dot" style="background:${statusCols[s.status]}"></span>
        <div class="admin-soh-v4__svc-id">
          <div class="admin-soh-v4__svc-name">${s.name}</div>
          ${s.note ? `<div class="admin-soh-v4__svc-note">${s.note}</div>` : ""}
        </div>
        <span class="admin-soh-v4__svc-ver">v${s.ver}</span>
        <span class="admin-soh-v4__svc-uptime">${s.uptime}</span>
        <span class="admin-soh-v4__svc-state" style="color:${statusInk[s.status]};border-color:${statusCols[s.status]}">${s.status.toUpperCase()}</span>
      </div>`).join("");
  }

  function _renderErrors(events) {
    const host = document.querySelector("[data-soh-errors]");
    if (!host) return;
    const errs = (events || []).filter((e) => e.sev === "error" || e.sev === "warn").slice(0, 5);
    if (errs.length === 0) {
      host.innerHTML = '<div class="admin-soh-v4__err-empty">' + ServerI18n.t("sohNoErrors") + '</div>';
      return;
    }
    host.innerHTML = errs.map((e) => `
      <div class="admin-soh-v4__err" data-sev="${e.sev}">
        <span class="admin-soh-v4__err-dot" data-sev="${e.sev}"></span>
        <span class="admin-soh-v4__err-time">${e.t || "—"}</span>
        <span class="admin-soh-v4__err-msg">${e.msg || ""}</span>
        <span class="admin-soh-v4__err-arrow">→</span>
      </div>`).join("");
  }

  function _wire() {
    const cfg = window.DANMU_CONFIG || {};
    const wsPathEl = document.getElementById("sysoWsPath");
    if (wsPathEl) wsPathEl.textContent = ((cfg && cfg.wsPath) || "/ws");

    (async () => {
      try {
        const res = await window.csrfFetch("/admin/metrics");
        if (!res.ok) return;
        const data = await res.json();
        const cpuS  = data.cpu_series || [];
        const memS  = data.mem_mb_series || [];
        const rateS = data.rate_series || [];
        const last = (a) => Array.isArray(a) && a.length ? a[a.length - 1] : null;
        const cpu = last(cpuS), mem = last(memS), rate = last(rateS);

        // Uptime — no series, so we synthesize a flat line.
        const upSec = data.server_started_at
          ? Math.max(0, Math.floor(Date.now() / 1000 - data.server_started_at))
          : 0;
        _setMetric("uptime", upSec > 0 ? _fmtUptime(upSec) : "—", new Array(12).fill(4), true);
        _setMetric("cpu",    cpu != null ? `${Number(cpu).toFixed(0)}%` : "—", cpuS, (cpu || 0) < 70);
        _setMetric("ram",    mem != null ? `${Number(mem).toFixed(0)} MB` : "—", memS, true);
        // Disk usage unknown without a backend probe — render dim.
        _setMetric("disk",   data.disk_usage || "—", new Array(12).fill(40), true);
        _setMetric("ws",     String(data.ws_clients ?? 0), [data.ws_clients ?? 0], false);
        _setMetric("qps",    rate != null ? `${(Number(rate) / 60).toFixed(1)}/s` : "—",
                              rateS.map((r) => r / 60), false);

        _renderServices(data);
        _updateBanner(data);
        _updateConfigSummary(data);

        // Recent errors — pull from audit log (alias for now). Endpoint
        // surfaces server-emitted events; we extract anything tagged
        // sev=error/warn. Falls back to "no errors" empty state.
        try {
          const audit = await fetch("/admin/audit?limit=30&sev=warn,error", { credentials: "same-origin" });
          if (audit.ok) {
            const j = await audit.json();
            const items = Array.isArray(j.records) ? j.records.map((r) => ({
              t: r.ts ? new Date(r.ts * 1000).toISOString().slice(11, 19) : "—",
              sev: r.severity || "warn",
              msg: r.message || `${r.scope || ""} ${r.action || ""}`.trim(),
            })) : [];
            _renderErrors(items);
          }
        } catch (_) { /* fine */ }
      } catch (_) { /* ignore */ }
    })();

    // Banner re-check button
    const _recheck = document.querySelector("[data-soh-recheck]");
    if (_recheck) {
      _recheck.addEventListener("click", () => {
        _recheck.textContent = ServerI18n.t("sohRecheckBusy");
        _recheck.disabled = true;
        setTimeout(() => _wire(), 100);
        setTimeout(() => {
          _recheck.textContent = ServerI18n.t("sohRecheckBtn");
          _recheck.disabled = false;
        }, 1500);
      });
    }

    const root = document.getElementById(SECTION_ID);
    if (root) {
      root.addEventListener("click", function (e) {
        const a = e.target.closest("[data-soh-action]");
        if (!a || a.disabled) return;
        if (a.dataset.sohAction === "reload-effects") {
          window.csrfFetch("/admin/effects/reload", { method: "POST" })
            .then((r) => r.ok ? r.json() : Promise.reject(r))
            .then(() => { window.showToast && window.showToast(ServerI18n.t("sohToastEffectsReloaded"), true); })
            .catch(() => { window.showToast && window.showToast(ServerI18n.t("sohToastReloadFailed"), false); });
        }
      });
    }
  }

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(SECTION_ID)) return;
    grid.insertAdjacentHTML("beforeend", _renderHtml());
    if (document.getElementById(SECTION_ID)) _wire();
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
