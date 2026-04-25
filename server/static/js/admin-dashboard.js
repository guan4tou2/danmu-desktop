// admin-dashboard.js — Dashboard KPI + summary helpers extracted from admin.js (P6-2).
// Loads BEFORE admin.js. Exposes window.AdminDashboard.
// Reads bootstrap cache via window.__danmuAdminBootstrap (set by admin.js)
// and uses window.AdminUtils.escapeHtml for safe HTML.
(function () {
  "use strict";

  function _bootstrap() { return window.__danmuAdminBootstrap || { prime: () => Promise.resolve(null), get: () => null }; }
  function _escapeHtml(s) {
    return (window.AdminUtils && window.AdminUtils.escapeHtml)
      ? window.AdminUtils.escapeHtml(s)
      : String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  async function refreshDashboardKpi() {
    try {
      const boot = _bootstrap();
      await boot.prime();
      const cachedHist = boot.get("history_stats");
      // /admin/stats/hourly is not bundled — always fetch. /admin/history IS
      // bundled as history_stats (same shape), so consult cache first.
      const [histRes, hourlyRes] = await Promise.all([
        cachedHist ? null : fetch("/admin/history?hours=24&limit=1", { credentials: "same-origin" }),
        fetch("/admin/stats/hourly?hours=24", { credentials: "same-origin" }),
      ]);
      if (!hourlyRes.ok) return;
      const hist = cachedHist || (histRes && histRes.ok ? await histRes.json() : null);
      if (!hist) return;
      const dist = (await hourlyRes.json()).distribution || [];
      const total = (hist.stats && hist.stats.total) || 0;
      const last24h = (hist.stats && hist.stats.last_24h) || 0;
      const peakEntry = dist.reduce((m, e) => (e.count > (m?.count || -1) ? e : m), null);
      const peakVal = peakEntry ? peakEntry.count : 0;
      const peakHour = peakEntry ? (peakEntry.hour || "").slice(-5) : "—";

      const tileMsg = document.querySelector('[data-kpi="messages"]');
      if (tileMsg) {
        tileMsg.querySelector("[data-kpi-value]").textContent = total.toLocaleString();
        tileMsg.querySelector("[data-kpi-delta]").textContent = `+${last24h.toLocaleString()} / 24h`;
      }
      const tilePeak = document.querySelector('[data-kpi="peak"]');
      if (tilePeak) {
        tilePeak.querySelector("[data-kpi-value]").textContent = peakVal.toLocaleString();
        tilePeak.querySelector("[data-kpi-delta]").textContent = peakEntry ? `於 ${peakHour}` : "無資料";
        if (dist.length) {
          const bars = dist.slice(-12).map(e => Math.max(2, Math.round((e.count / Math.max(1, peakVal)) * 12)));
          tilePeak.querySelector("[data-kpi-bars]").innerHTML = bars.map(h =>
            `<span style="height:${h}px;opacity:${0.3 + h/20}"></span>`
          ).join("");
        }
      }
    } catch (e) {
      // Silent — dashboard falls back to placeholders.
    }
  }

  // Dashboard summary cards — prototype admin-v3.jsx active-poll + messages + widgets.
  async function refreshDashboardSummary() {
    populateDashboardPoll();
    populateDashboardMessages();
    populateDashboardWidgets();
  }

  async function populateDashboardPoll() {
    const body = document.querySelector("[data-dash-poll-body]");
    const timer = document.querySelector("[data-dash-poll-timer]");
    if (!body) return;
    try {
      const boot = _bootstrap();
      await boot.prime();
      const cachedMet = boot.get("metrics");
      let m = cachedMet;
      if (!m) {
        const r = await fetch("/admin/metrics", { credentials: "same-origin" });
        if (!r.ok) return;
        m = await r.json();
      }
      const ps = m.poll_state;
      if (!ps || !ps.active || !Array.isArray(ps.options) || ps.options.length === 0) {
        body.innerHTML = `<div class="admin-dash-empty">尚無進行中投票 · 切換至「投票」頁建立</div>`;
        if (timer) timer.textContent = "";
        return;
      }
      const totalVotes = ps.options.reduce((s, o) => s + (o.votes || 0), 0);
      const keys = ["A", "B", "C", "D", "E", "F"];
      let winnerIdx = 0;
      ps.options.forEach((o, i) => { if ((o.votes || 0) > (ps.options[winnerIdx].votes || 0)) winnerIdx = i; });
      body.innerHTML =
        `<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${_escapeHtml(ps.question || "投票進行中")}</div>` +
        ps.options.map((o, i) => {
          const pct = totalVotes ? Math.round((o.votes / totalVotes) * 100) : 0;
          const win = i === winnerIdx && totalVotes > 0;
          return `
            <div class="admin-dash-poll-opt ${win ? "is-winner" : ""}">
              <div class="row">
                <span class="tag">${keys[i] || String(i + 1)}</span>
                <span class="label">${_escapeHtml(o.label || "")}</span>
                <span class="pct">${pct}%</span>
                <span class="votes">${(o.votes || 0)} 票</span>
              </div>
              <div class="bar"><span style="width:${pct}%"></span></div>
            </div>`;
        }).join("") +
        `<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:10px">TOTAL · ${totalVotes} 票 · 觀眾輸入 A B C D 即可投票</div>`;
      if (timer) {
        const remain = ps.remaining_seconds;
        timer.textContent = typeof remain === "number" && remain > 0
          ? `● ${Math.floor(remain / 60)}:${String(remain % 60).padStart(2, "0")} 剩餘`
          : "● LIVE";
      }
    } catch (e) {
      // Silent.
    }
  }

  async function populateDashboardMessages() {
    const body = document.querySelector("[data-dash-messages]");
    if (!body) return;
    try {
      const r = await fetch("/admin/history?hours=24&limit=7", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      const records = (data.records || []).slice(0, 7);
      if (records.length === 0) {
        body.innerHTML = `<div class="admin-dash-empty">等待訊息…</div>`;
        return;
      }
      body.innerHTML = records.map(rec => {
        const ts = (rec.timestamp || "").slice(11, 19);
        const txt = _escapeHtml(rec.text || rec.message || "");
        const user = _escapeHtml(rec.nickname || rec.user || "guest");
        const tag = "MSG";
        const tagStyle = `color:var(--admin-text-dim)`;
        return `
          <div class="admin-dash-msg-row">
            <span class="time">${ts}</span>
            <span class="tag" style="${tagStyle}">${tag}</span>
            <div>
              <div class="text">${txt}</div>
              <div class="meta">@${user}</div>
            </div>
            <span class="more">⋯</span>
          </div>`;
      }).join("");
    } catch (e) {
      // Silent.
    }
  }

  async function populateDashboardWidgets() {
    const body = document.querySelector("[data-dash-widgets]");
    if (!body) return;
    try {
      const boot = _bootstrap();
      await boot.prime();
      let data = boot.get("widgets");
      if (!data) {
        const r = await fetch("/admin/widgets/list", { credentials: "same-origin" });
        if (!r.ok) {
          body.innerHTML = `<div class="admin-dash-empty">無可用 widgets</div>`;
          return;
        }
        data = await r.json();
      }
      const widgets = (data.widgets || data.items || []).slice(0, 4);
      if (widgets.length === 0) {
        body.innerHTML = `<div class="admin-dash-empty">尚未啟用任何 widget</div>`;
        return;
      }
      body.innerHTML = `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">` +
        widgets.map(w => {
          const running = w.enabled || w.running;
          const dotColor = running ? "var(--color-success, #22c55e)" : "var(--admin-text-dim)";
          return `
            <div class="admin-dash-widget-tile">
              <div style="display:flex;align-items:center;gap:6px">
                <span style="width:6px;height:6px;border-radius:50%;background:${dotColor}"></span>
                <span class="kind">${_escapeHtml(w.kind || "WIDGET")}</span>
              </div>
              <div class="title">${_escapeHtml(w.name || w.title || w.id || "widget")}</div>
              <div class="uptime">${running ? "● RUNNING" : "○ PAUSED"}</div>
            </div>`;
        }).join("") +
        `</div>`;
    } catch (e) {
      body.innerHTML = `<div class="admin-dash-empty">無可用 widgets</div>`;
    }
  }

  window.AdminDashboard = {
    refreshKpi: refreshDashboardKpi,
    refreshSummary: refreshDashboardSummary,
    populatePoll: populateDashboardPoll,
    populateMessages: populateDashboardMessages,
    populateWidgets: populateDashboardWidgets,
  };
})();
