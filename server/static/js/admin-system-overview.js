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

  function _renderHtml() {
    return `
      <div id="${SECTION_ID}" class="hud-page-stack lg:col-span-2">
        <div class="hud-system-grid">
          <div class="hud-inspector hud-system-server" style="min-height:auto">
            <div class="hud-inspector-head">
              <span class="hud-status-dot is-live"></span>
              <span style="font-size:14px;font-weight:600;color:var(--color-text-strong)">Danmu Server</span>
              <span class="admin-v3-card-kicker" id="sysoVersion" style="margin:0">v—</span>
              <span style="margin-left:auto;font-family:var(--font-mono);font-size:10px;color:#86efac;letter-spacing:0.12em" id="sysoUptime">UPTIME —</span>
            </div>
            <div style="padding:16px;display:grid;grid-template-columns:repeat(3, 1fr);gap:12px">
              <div class="hud-kv"><span class="hud-kv-k">HTTP</span><span class="hud-kv-v" id="sysoHttpPort">:—</span></div>
              <div class="hud-kv" title="專屬 WebSocket server (Electron desktop + overlay 連線)"><span class="hud-kv-k">WS</span><span class="hud-kv-v" id="sysoWsPort">:—</span></div>
              <div class="hud-kv"><span class="hud-kv-k">BIND</span><span class="hud-kv-v" id="sysoBind">—</span></div>
              <div class="hud-kv"><span class="hud-kv-k">CPU USAGE</span><span class="hud-kv-v" id="sysoCpu">—</span></div>
              <div class="hud-kv"><span class="hud-kv-k">MEM RSS</span><span class="hud-kv-v" id="sysoMem">—</span></div>
              <div class="hud-kv"><span class="hud-kv-k">MSG RATE</span><span class="hud-kv-v" id="sysoMsgRate">—</span></div>
              <div class="hud-kv"><span class="hud-kv-k">WS CLIENTS</span><span class="hud-kv-v" id="sysoWsClients">—</span></div>
              <div class="hud-kv"><span class="hud-kv-k">QUEUE</span><span class="hud-kv-v" id="sysoQueue">—</span></div>
              <div class="hud-kv"><span class="hud-kv-k">WIDGETS</span><span class="hud-kv-v" id="sysoWidgets">—</span></div>
            </div>
            <div style="padding:0 16px 16px 16px">
              <div style="padding:12px;background:color-mix(in srgb, var(--color-bg-deep) 65%, transparent);border-radius:4px;font-family:var(--font-mono);font-size:11px">
                <div class="admin-v3-card-kicker" style="margin:0 0 6px 0">PUBLIC URL</div>
                <div id="sysoPublicUrl" style="color:var(--color-primary);word-break:break-all">${location.origin}</div>
                <div style="margin-top:4px;color:var(--color-text-muted);font-size:10px">觀眾掃碼即可加入</div>
              </div>
            </div>
          </div>

          <div class="hud-inspector hud-system-rates" style="min-height:auto">
            <div class="hud-inspector-head">
              <span class="admin-v3-card-kicker" style="margin:0">RATE LIMITS · 反刷屏</span>
            </div>
            <div style="padding:16px;display:flex;flex-direction:column;gap:14px" id="sysoRatesBody">
              ${[
                { key: "fire",  label: "每用戶 · FIRE",  width: 40 },
                { key: "api",   label: "每用戶 · API",   width: 40 },
                { key: "admin", label: "ADMIN · 保護",   width: 40 },
                { key: "login", label: "LOGIN · 登入",   width: 20 },
              ].map(r => `
                <div class="hud-rate-item" data-rate="${r.key}">
                  <div style="display:flex;align-items:center;gap:8px;font-size:12px">
                    <span style="color:var(--color-text-strong)">${r.label}</span>
                    <span style="margin-left:auto;font-family:var(--font-mono);color:var(--color-primary);font-weight:600" data-rate-val>—</span>
                  </div>
                  <div style="margin-top:6px;height:4px;border-radius:2px;background:color-mix(in srgb, var(--color-bg-deep) 60%, transparent);overflow:hidden">
                    <div style="width:${r.width}%;height:100%;background:var(--color-primary);opacity:0.7" data-rate-bar></div>
                  </div>
                  <div style="margin-top:2px;font-family:var(--font-mono);font-size:9px;color:var(--color-text-muted);letter-spacing:0.1em" data-rate-cap>—</div>
                </div>`).join("")}
            </div>
          </div>

          <div class="hud-inspector hud-system-backup" style="min-height:auto">
            <div class="hud-inspector-head">
              <span class="admin-v3-card-kicker" style="margin:0">BACKUP · EXPORT</span>
            </div>
            <div style="padding:16px;display:flex;flex-direction:column;gap:14px">
              <div style="padding:12px;background:color-mix(in srgb, var(--color-bg-deep) 65%, transparent);border-radius:4px">
                <div style="display:flex;align-items:center;gap:10px">
                  <span class="hud-status-dot is-live"></span>
                  <span style="font-size:12px;font-weight:600;color:var(--color-text-strong)">自動訊息日誌</span>
                  <span style="margin-left:auto;font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:0.12em" id="sysoBackupStatus">SQLite · active</span>
                </div>
                <div style="margin-top:8px;font-family:var(--font-mono);font-size:10px;color:var(--color-text-muted);letter-spacing:0.05em">
                  儲存於 <code style="color:var(--color-primary)">server/runtime/</code>
                </div>
              </div>
              <div>
                <div class="admin-v3-card-kicker" style="margin:0">匯出格式</div>
                <div style="margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:6px">
                  <a href="/admin/history/export?format=json" class="hud-toolbar-action is-primary" style="text-align:center;text-decoration:none">JSON · 完整</a>
                  <a href="/admin/history/export?format=csv" class="hud-toolbar-action" style="text-align:center;text-decoration:none">CSV · 訊息</a>
                </div>
              </div>
              <div style="margin-top:auto;padding:12px;border:1px dashed #f87171;border-radius:4px">
                <div class="admin-v3-card-kicker" style="margin:0;color:#f87171">DANGER ZONE</div>
                <div style="font-size:11px;color:var(--color-text-muted);margin-top:4px">清除歷史訊息，日誌保留</div>
                <button id="sysoEndSessionBtn" type="button" style="margin-top:10px;width:100%;padding:8px;border-radius:4px;border:1px solid #f87171;background:transparent;color:#f87171;font-family:var(--font-mono);font-size:11px;letter-spacing:0.15em;font-weight:700;cursor:pointer">END SESSION</button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function _wire() {
    const verEl = document.getElementById("sysoVersion");
    const cfg = window.DANMU_CONFIG || {};
    if (verEl && cfg.appVersion) verEl.textContent = "v" + cfg.appVersion;
    const portEl = document.getElementById("sysoHttpPort");
    if (portEl) portEl.textContent = ":" + (location.port || "80");
    // WS port = the dedicated websockets server (Electron desktop + overlay
    // clients connect here). Distinct from the flask-sock channel mounted
    // on /ws on the HTTP port (admin live feed). The "WS CLIENTS" KPI below
    // counts connections to *this* dedicated server, so they have to match.
    const wsPortEl = document.getElementById("sysoWsPort");
    const wsPort = (cfg && cfg.wsPort) || 4001;
    if (wsPortEl) wsPortEl.textContent = ":" + wsPort;
    const bindEl = document.getElementById("sysoBind");
    if (bindEl) bindEl.textContent = location.hostname;

    Object.keys(RATE_DEFAULTS).forEach((k) => {
      const row = document.querySelector(`.hud-rate-item[data-rate="${k}"]`);
      if (!row) return;
      const val = RATE_DEFAULTS[k];
      const win = RATE_WINDOWS[k];
      const max = RATE_CAPS[k].max;
      row.querySelector("[data-rate-val]").textContent = `${val} 則 / ${win}s`;
      row.querySelector("[data-rate-cap]").textContent = `UP TO ${max} · ${RATE_CAPS[k].label}`;
      const bar = row.querySelector("[data-rate-bar]");
      if (bar) bar.style.width = Math.min(100, (val / max) * 100) + "%";
    });

    (async () => {
      try {
        const res = await window.csrfFetch("/admin/metrics");
        if (!res.ok) return;
        const data = await res.json();
        const last = (a) => Array.isArray(a) && a.length ? a[a.length - 1] : null;
        const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
        set("sysoWsClients", String(data.ws_clients ?? 0));
        set("sysoQueue", `${data.queue_size ?? 0} / ${data.queue_capacity ?? "—"}`);
        set("sysoWidgets", String(data.active_widgets ?? 0));
        const cpu = last(data.cpu_series);
        if (cpu != null) set("sysoCpu", `${Number(cpu).toFixed(0)}%`);
        const memMb = last(data.mem_mb_series);
        if (memMb != null) set("sysoMem", `${Number(memMb).toFixed(0)} MB`);
        const rate = last(data.rate_series);
        if (rate != null) set("sysoMsgRate", `${(Number(rate) / 60).toFixed(1)}/s`);
        const uptEl = document.getElementById("sysoUptime");
        if (uptEl && data.server_started_at) {
          const sec = Math.max(0, Math.floor(Date.now() / 1000 - data.server_started_at));
          const d = Math.floor(sec / 86400);
          const h = Math.floor((sec % 86400) / 3600);
          const m = Math.floor((sec % 3600) / 60);
          uptEl.textContent = "UPTIME · " + (d > 0 ? `${d}d ${String(h).padStart(2, "0")}h` :
            h > 0 ? `${h}h ${String(m).padStart(2, "0")}m` :
            `${m}m ${String(sec % 60).padStart(2, "0")}s`);
        }
      } catch (_) { /* ignore */ }
    })();

    const endBtn = document.getElementById("sysoEndSessionBtn");
    if (endBtn) {
      endBtn.addEventListener("click", () => {
        if (!confirm("確定要清除歷史訊息嗎？此動作無法復原。")) return;
        window.csrfFetch("/admin/history/clear", { method: "POST" })
          .then((r) => r.ok ? r.json() : Promise.reject(r))
          .then(() => {
            if (typeof showToast === "function") showToast("歷史已清除", true);
          })
          .catch(() => {
            if (typeof showToast === "function") showToast("清除失敗（端點可能尚未實作）", false);
          });
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
