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

  // ── Sidebar badge counts — prototype admin-pages.jsx:36–57 ─────────────
  // Reads bootstrap data (single round trip) to populate the count badges
  // that the prototype sidebar shows next to each nav item. Failures are
  // silent — badges just stay hidden if data isn't available.
  function _setBadge(selector, count) {
    const el = document.querySelector(selector);
    if (!el) return;
    if (typeof count !== "number" || count <= 0) {
      el.hidden = true;
      return;
    }
    el.hidden = false;
    el.textContent = count > 999 ? "999+" : String(count);
  }

  async function refreshSidebarBadges() {
    try {
      const boot = _bootstrap();
      await boot.prime();
      const blacklist = boot.get("blacklist");
      const widgets = boot.get("widgets");
      const histStats = boot.get("history_stats");
      const effects = boot.get("effects");
      const themes = boot.get("themes");
      _setBadge(
        "[data-count-blacklist]",
        Array.isArray(blacklist) ? blacklist.length : 0
      );
      _setBadge(
        "[data-count-widgets]",
        Array.isArray(widgets?.widgets) ? widgets.widgets.length : 0
      );
      _setBadge("[data-count-messages]", histStats?.stats?.last_24h || 0);
      _setBadge(
        "[data-count-effects]",
        Array.isArray(effects?.effects) ? effects.effects.length : 0
      );
      _setBadge(
        "[data-count-themes]",
        Array.isArray(themes?.themes) ? themes.themes.length : 0
      );
      // Plugins not in bootstrap; fetch separately + ignore failures.
      try {
        const r = await fetch("/admin/plugins/list", { credentials: "same-origin" });
        if (r.ok) {
          const d = await r.json();
          _setBadge(
            "[data-count-plugins]",
            Array.isArray(d?.plugins) ? d.plugins.length : 0
          );
        }
      } catch (_) {}
    } catch (_) {
      /* silent */
    }
  }

  // ── Quick poll inline form — prototype admin-v3.jsx:77 ─────────────────
  const POLL_KEYS = ["A", "B", "C", "D", "E", "F"];

  function _qpRow(letter, removable) {
    return (
      `<div class="admin-dash-qp-row">` +
        `<span class="key">${letter}</span>` +
        `<input type="text" placeholder="選項 ${letter}" maxlength="60" />` +
        `<button type="button" class="rm" data-qp-rm ${removable ? "" : "hidden"}>✕</button>` +
      `</div>`
    );
  }

  function _qpRefreshKeys(card) {
    const rows = card.querySelectorAll(".admin-dash-qp-row");
    rows.forEach((row, i) => {
      const k = POLL_KEYS[i] || "+";
      row.querySelector(".key").textContent = k;
      const inp = row.querySelector("input");
      if (inp) inp.placeholder = `選項 ${k}`;
      const rm = row.querySelector("[data-qp-rm]");
      // Always show remove on rows past the first 2
      if (rm) rm.hidden = i < 2;
    });
    const add = card.querySelector("[data-qp-add]");
    if (add) add.hidden = rows.length >= 6;
  }

  async function _qpSubmit(card) {
    const startBtn = card.querySelector("[data-qp-start]");
    const question = (card.querySelector("[data-qp='question']").value || "").trim();
    const opts = Array.from(card.querySelectorAll(".admin-dash-qp-row input"))
      .map((i) => (i.value || "").trim())
      .filter(Boolean);
    if (!question) {
      window.showToast && window.showToast("請輸入問題文字", false);
      return;
    }
    if (opts.length < 2) {
      window.showToast && window.showToast("至少需要 2 個選項", false);
      return;
    }
    if (startBtn) startBtn.disabled = true;
    try {
      const r = await window.csrfFetch("/admin/poll/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, options: opts }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast("投票已開始", true);
      // Reset form
      card.querySelector("[data-qp='question']").value = "";
      card.querySelectorAll(".admin-dash-qp-row input").forEach((i) => (i.value = ""));
      // Refresh active poll card immediately
      populateDashboardPoll();
    } catch (e) {
      console.error("[admin-dashboard] quick poll create failed:", e);
      window.showToast && window.showToast("投票建立失敗", false);
    } finally {
      if (startBtn) startBtn.disabled = false;
    }
  }

  function bindQuickPoll() {
    const card = document.querySelector("[data-dash-card='poll-builder']");
    if (!card || card.dataset.bound === "1") return;
    card.dataset.bound = "1";
    const optionsEl = card.querySelector("[data-qp='options']");
    const addLink = card.querySelector("[data-qp-add]");
    if (addLink) {
      addLink.addEventListener("click", (e) => {
        e.preventDefault();
        const count = optionsEl.querySelectorAll(".admin-dash-qp-row").length;
        if (count >= 6) return;
        optionsEl.insertAdjacentHTML("beforeend", _qpRow(POLL_KEYS[count] || "+", true));
        _qpRefreshKeys(card);
      });
    }
    optionsEl.addEventListener("click", (e) => {
      const rm = e.target.closest("[data-qp-rm]");
      if (!rm) return;
      const row = rm.closest(".admin-dash-qp-row");
      if (!row) return;
      if (optionsEl.querySelectorAll(".admin-dash-qp-row").length <= 2) return;
      row.remove();
      _qpRefreshKeys(card);
    });
    const startBtn = card.querySelector("[data-qp-start]");
    if (startBtn) startBtn.addEventListener("click", () => _qpSubmit(card));
    _qpRefreshKeys(card);
  }

  // Wire up filter chips above the messages stream. Filter is purely visual
  // (tag info isn't on /admin/history records yet) — clicking just swaps the
  // is-active class. Idempotent: only binds once.
  function bindMessageFilters() {
    const chips = document.querySelectorAll(".admin-dash-msg-filter");
    if (!chips.length || chips[0].dataset.bound === "1") return;
    chips.forEach((c) => {
      c.dataset.bound = "1";
      c.addEventListener("click", () => {
        chips.forEach((x) => x.classList.remove("is-active"));
        c.classList.add("is-active");
      });
    });
  }

  // Dashboard summary cards — prototype admin-v3.jsx active-poll + messages + widgets.
  async function refreshDashboardSummary() {
    bindMessageFilters();
    bindQuickPoll();
    refreshSidebarBadges();
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

  // Tile template per prototype admin-v3.jsx:160. Real widget data has
  // {id, type, position, visible, config}; we map type→title/kind,
  // position→category chip, visible→running dot.
  function _widgetTile(w) {
    const running = w.visible !== false;
    const title = (w.config && w.config.title) || w.type || "widget";
    const kind = (w.type || "widget").toUpperCase();
    const cat = (w.position || "—").toUpperCase();
    const dotColor = running
      ? "var(--color-success, #86efac)"
      : "var(--color-warning, #fbbf24)";
    return `
      <div class="admin-dash-widget-tile" data-widget-id="${_escapeHtml(w.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${dotColor}"></span>
          <span class="kind">${_escapeHtml(kind)}</span>
          <span class="cat">${_escapeHtml(cat)}</span>
        </div>
        <div class="title">${_escapeHtml(title)}</div>
        <div class="uptime">STATUS · ${running ? "RUNNING" : "PAUSED"}</div>
        <div class="actions">
          <button type="button" class="chip" data-widget-action="toggle" data-running="${running ? "1" : "0"}">${running ? "PAUSE" : "RUN"}</button>
          <button type="button" class="chip is-muted" data-widget-action="config">CONFIG</button>
        </div>
      </div>`;
  }

  async function _widgetToggle(id, currentlyRunning) {
    try {
      const r = await window.csrfFetch("/admin/widgets/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ widget_id: id, config: { visible: !currentlyRunning } }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      populateDashboardWidgets();
    } catch (e) {
      window.showToast && window.showToast("切換 widget 失敗", false);
    }
  }

  function _bindWidgetActions(container) {
    if (container.dataset.bound === "1") return;
    container.dataset.bound = "1";
    container.addEventListener("click", (e) => {
      const tile = e.target.closest(".admin-dash-widget-tile");
      if (!tile) return;
      const action = e.target.dataset.widgetAction;
      const id = tile.dataset.widgetId;
      if (!action || !id) return;
      if (action === "toggle") {
        _widgetToggle(id, e.target.dataset.running === "1");
      } else if (action === "config") {
        // Navigate to widgets admin page
        const navBtn = document.querySelector('[data-route="widgets"]');
        if (navBtn) navBtn.click();
      }
    });
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
      body.innerHTML =
        `<div class="admin-dash-widget-grid">` +
        widgets.map(_widgetTile).join("") +
        `</div>`;
      _bindWidgetActions(body);
    } catch (e) {
      body.innerHTML = `<div class="admin-dash-empty">無可用 widgets</div>`;
    }
  }

  window.AdminDashboard = {
    refreshKpi: refreshDashboardKpi,
    refreshSummary: refreshDashboardSummary,
    refreshSidebarBadges: refreshSidebarBadges,
    populatePoll: populateDashboardPoll,
    populateMessages: populateDashboardMessages,
    populateWidgets: populateDashboardWidgets,
  };
})();
