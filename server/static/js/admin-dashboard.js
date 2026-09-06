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

  // Render 20-bar sparkline with v4 fade pattern: linear opacity ramp
  // from 0.3 (oldest) to 1.0 (current bucket). Last bar always renders at
  // full opacity. Color comes from the .is-* tile modifier in CSS so this
  // helper stays color-agnostic.
  // 2026-09-06 設計稿 06：KPI sparkline 退場，這支渲染器沒有消費者了。

  async function refreshDashboardKpi() {
    try {
      const boot = _bootstrap();
      await boot.prime();
      const cachedHist = boot.get("history_stats");
      // /admin/stats/hourly is not bundled — always fetch. /admin/history IS
      // bundled as history_stats (same shape), so consult cache first.
      const [histRes, hourlyRes, sessRes] = await Promise.all([
        cachedHist ? null : fetch("/admin/history?hours=24&limit=200", { credentials: "same-origin" }),
        fetch("/admin/stats/hourly?hours=24", { credentials: "same-origin" }),
        fetch("/admin/session/current", { credentials: "same-origin" }).catch(() => null),
      ]);
      if (!hourlyRes.ok) return;
      const hist = cachedHist || (histRes && histRes.ok ? await histRes.json() : null);
      if (!hist) return;
      const dist = (await hourlyRes.json()).distribution || [];
      const total = (hist.stats && hist.stats.total) || 0;
      const peakEntry = dist.reduce((m, e) => (e.count > (m?.count || -1) ? e : m), null);
      const peakVal = peakEntry ? peakEntry.count : 0;
      const peakHour = peakEntry ? (peakEntry.hour || "").slice(-5) : "—";

      const tileMsg = document.querySelector('[data-kpi="messages"]');
      if (tileMsg) {
        tileMsg.querySelector("[data-kpi-value]").textContent = total.toLocaleString();
      }
      const tilePeak = document.querySelector('[data-kpi="peak"]');
      if (tilePeak) {
        tilePeak.querySelector("[data-kpi-value]").textContent = peakVal.toLocaleString();
      }

      // 觀眾裝置 —— 由 /admin/history 的紀錄推出不重複指紋數。多花一點
      // payload（limit=200）換一個真數字，不必新開 endpoint。
      const tileFp = document.querySelector('[data-kpi="unique-fp"]');
      if (tileFp) {
        const fpSet = new Set();
        (hist.records || []).forEach((r) => {
          const fp = r.fingerprint || r.fp || r.user_fingerprint;
          if (fp) fpSet.add(fp);
        });
        tileFp.querySelector("[data-kpi-value]").textContent = fpSet.size.toLocaleString();
      }

      // 已進行 —— 目前場次時長。
      const tileSession = document.querySelector('[data-kpi="session"]');
      if (tileSession) {
        const sess = sessRes && sessRes.ok ? await sessRes.json() : null;
        const isLive = sess && sess.status === "live";
        const valEl = tileSession.querySelector("[data-kpi-value]");
        if (isLive && sess.started_at) {
          const secs = Math.max(0, Math.floor(Date.now() / 1000 - sess.started_at));
          const h = Math.floor(secs / 3600);
          const m = Math.floor((secs % 3600) / 60);
          valEl.textContent = h > 0
            ? `${h}:${String(m).padStart(2, "0")}:${String(secs % 60).padStart(2, "0")}`
            : `${m}:${String(secs % 60).padStart(2, "0")}`;
        } else {
          valEl.textContent = "—";
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

  // 2026-09-06 設計稿 06：Quick Actions F1–F4 與 My Actions 整區退場，
  // 連帶這裡的 quick-poll 內嵌表單、黑名單快速加入、四張面板的資料填充
  // 與操作紀錄摘要一起刪除（約 300 行）。它們的 DOM 已經不存在，留著
  // 只會讓下一個人以為控制台還有那些面板。
  //
  //   · 快速投票 → 投票頁（⌘K 輸入「投票」一步就到）
  //   · 快速黑名單 → 訊息流每列的「封鎖此人」，或審核頁
  //   · 我的操作 → 紀錄與匯出 › 操作紀錄
  async function refreshDashboardSummary() {
    refreshSidebarBadges();
    populateDashboardPoll();
    startCockpitPolling();
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
        body.innerHTML = `<div class="admin-dash-empty">${ServerI18n.t("dashNoPollHint")}</div>`;
        if (timer) timer.textContent = "";
        return;
      }
      const totalVotes = ps.options.reduce((s, o) => s + (o.votes || 0), 0);
      const keys = ["A", "B", "C", "D", "E", "F"];
      let winnerIdx = 0;
      ps.options.forEach((o, i) => { if ((o.votes || 0) > (ps.options[winnerIdx].votes || 0)) winnerIdx = i; });
      body.innerHTML =
        `<div class="admin-dash-poll-question" style="font-size:13px;margin-bottom:8px">${_escapeHtml(ps.question || ServerI18n.t("dashPollRunning"))}</div>` +
        ps.options.map((o, i) => {
          const pct = totalVotes ? Math.round((o.votes / totalVotes) * 100) : 0;
          const win = i === winnerIdx && totalVotes > 0;
          return `
            <div class="admin-dash-poll-opt ${win ? "is-winner" : ""}">
              <div class="row">
                <span class="tag">${keys[i] || String(i + 1)}</span>
                <span class="label">${_escapeHtml(o.label || "")}</span>
                <span class="pct">${pct}%</span>
                <span class="votes">${ServerI18n.t("dashVotesUnit", { n: o.votes || 0 })}</span>
              </div>
              <div class="bar"><span style="width:${pct}%"></span></div>
            </div>`;
        }).join("") +
        `<div class="admin-dash-empty" style="padding:6px 4px;margin-top:4px;font-size:11px">${ServerI18n.t("dashPollTotalLine", { n: totalVotes })}</div>`;
      if (timer) {
        const remain = ps.remaining_seconds;
        timer.textContent = typeof remain === "number" && remain > 0
          ? ServerI18n.t("dashPollRemaining", { mm: Math.floor(remain / 60), ss: String(remain % 60).padStart(2, "0") })
          : "● LIVE";
      }
    } catch (e) {
      // Silent.
    }
  }

  // Per-row classification — design v4 live-console.jsx tag tones:
  //   MSG  → cyan   (regular chat)
  //   POLL → amber  (single-letter vote A/B/C/…)
  //   Q&A  → amber  (ends with question mark)
  //   FLAG → crimson (masked / admin-blocked)



  // ── Message row actions binding ─────────────────────────────────────────
  //
  // Hook per-row chips: 遮罩 / 隱藏 / 黑名單 / ⋯. All routed through existing
  // admin endpoints. Failures show a toast; success refreshes the feed.
  function _bindMessageRowActions(container) {
    if (container.dataset.actionsBound === "1") return;
    container.dataset.actionsBound = "1";
    container.addEventListener("click", async (e) => {
      const btn = e.target.closest("[data-msg-action]");
      if (!btn) return;
      const row = btn.closest(".admin-dash-msg-row");
      if (!row) return;
      const action = btn.dataset.msgAction;
      const fp = row.dataset.msgFp;
      const msgId = row.dataset.msgId;
      if (action === "blacklist") {
        if (!fp) { window.showToast && window.showToast(ServerI18n.t("dashToastNoFp"), false); return; }
        const ok = await window.HudConfirm?.open({
          icon: "⊘",
          title: ServerI18n.t("dashBlacklistTitle"),
          subtitle: "BLACKLIST FINGERPRINT · BLOCKS FUTURE MESSAGES",
          severity: "danger",
          body:
            ServerI18n.t("dashBlacklistBody") +
            `<div style="margin-top:10px;font-family:var(--font-mono);font-size:13px;` +
            `color:var(--color-text-muted)">fp:${_escapeHtml(fp)}</div>`,
          confirmLabel: ServerI18n.t("dashBlacklistTitle"),
        });
        if (!ok) return;
        try {
          const r = await window.csrfFetch("/admin/blacklist/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ keyword: `fp:${fp}` }),
          });
          if (!r.ok) throw new Error("HTTP " + r.status);
          window.showToast && window.showToast(ServerI18n.t("dashToastBlacklistedFp", { fp: fp }), true);
        } catch (_) {
          window.showToast && window.showToast(ServerI18n.t("dashToastBlacklistFailed"), false);
        }
      } else if (action === "mask" || action === "hide") {
        // Both map to a soft-mask state in the message log. We don't have
        // a dedicated endpoint yet — visually mute the row and toast the
        // intent so the user sees feedback. Persistent moderation lives
        // on the /moderation page; this is the dashboard quick-act path.
        row.classList.add("is-masked-row");
        window.showToast && window.showToast(action === "mask" ? ServerI18n.t("dashToastMasked") : ServerI18n.t("dashToastHidden"), true);
      } else if (action === "more") {
        // Future: open message drawer (v4 P0-3 design). v7 IA: messages
        // merged into the live console, so jump there.
        const nav = document.querySelector('[data-route="live"]');
        if (nav) nav.click();
      }
    });
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
    // UPTIME — prototype admin-v3.jsx:177 shows e.g. `UPTIME · 02:41`. Backend
    // (services/widgets.py) stamps `created_at` on create_widget(); when the
    // server is restarted (or the widget pre-dates the field) we fall back to
    // STATUS so the tile doesn't render a confusing 0:00.
    const sinceCreated = w.created_at && running
      ? Math.max(0, Math.floor(Date.now() / 1000 - w.created_at))
      : null;
    const uptimeLabel = sinceCreated != null
      ? (() => {
          const d = Math.floor(sinceCreated / 86400);
          const h = Math.floor((sinceCreated % 86400) / 3600);
          const m = Math.floor((sinceCreated % 3600) / 60);
          const s = sinceCreated % 60;
          if (d > 0) return `UPTIME · ${d}d ${String(h).padStart(2, "0")}h`;
          if (h > 0) return `UPTIME · ${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
          return `UPTIME · ${m}:${String(s).padStart(2, "0")}`;
        })()
      : `STATUS · ${running ? "RUNNING" : "PAUSED"}`;
    return `
      <div class="admin-dash-widget-tile" data-widget-id="${_escapeHtml(w.id)}">
        <div class="admin-dash-widget-tile-head">
          <span class="dot" style="background:${dotColor}"></span>
          <span class="kind">${_escapeHtml(kind)}</span>
          <span class="cat">${_escapeHtml(cat)}</span>
        </div>
        <div class="title">${_escapeHtml(title)}</div>
        <div class="uptime">${uptimeLabel}</div>
        <div class="actions">
          <button type="button" class="admin-ui-chip admin-dash-widget-action${running ? " is-active" : ""}" data-widget-action="toggle" data-running="${running ? "1" : "0"}">${running ? "PAUSE" : "RUN"}</button>
          <button type="button" class="admin-ui-chip admin-dash-widget-action" data-widget-action="config">CONFIG</button>
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
      window.showToast && window.showToast(ServerI18n.t("dashToastWidgetFailed"), false);
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
          body.innerHTML = `<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;
          return;
        }
        data = await r.json();
      }
      const widgets = (data.widgets || data.items || []).slice(0, 4);
      if (widgets.length === 0) {
        body.innerHTML = `<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgetsEnabled")}</div>`;
        return;
      }
      body.innerHTML =
        `<div class="admin-dash-widget-grid">` +
        widgets.map(_widgetTile).join("") +
        `</div>`;
      _bindWidgetActions(body);
    } catch (e) {
      body.innerHTML = `<div class="admin-dash-empty">${ServerI18n.t("dashNoWidgets")}</div>`;
    }
  }

  // ── Session management ───────────────────────────────────────────────────
  // Session banner lives in #admin-session-banner (injected by admin.js into
  // the dashboard section, data-route-view="dashboard").
  // Polls /admin/session/current every 10 s while dashboard is visible.

  let _sessionState = null;
  let _sessionPollTimer = null;
  let _sessionTimerInterval = null;

  function _fmtDuration(startedAt) {
    const secs = Math.max(0, Math.floor((Date.now() / 1000) - startedAt));
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function _renderSessionBanner(state) {
    const banner = document.getElementById("admin-session-banner");
    // 版面跟著場次狀態走（2026-07-30）：無場次時「開啟場次」是頁面主角、
    // 即時訊息流收成薄卡（沒有訊息可看的時刻，別讓空面板佔主舞台）；
    // 場次中還原成全高主面板。直接切 class，樣式在 style.css。
    const feedSec = document.getElementById("sec-live-feed");
    if (feedSec) feedSec.classList.toggle("is-idle-collapsed", !(state && state.status === "live"));
    if (banner) banner.classList.toggle("is-hero", !(state && state.status === "live"));
    if (!banner) return;
    _sessionState = state;
    const isLive = state && state.status === "live";

    if (!isLive) {
      // IDLE — show "開啟場次" form
      banner.hidden = false;
      banner.innerHTML = `
        <div class="admin-session-banner-idle">
          <span class="admin-session-banner-idle-label">${ServerI18n.t("dashSessIdleLabel")}</span>
          <div class="admin-session-open-row">
            <input type="text" class="admin-ui-input admin-ui-grow admin-session-name-input" placeholder="${ServerI18n.t("dashSessNamePlaceholder")}" maxlength="120" data-sess-name />
            <button type="button" class="admin-ui-action is-primary admin-ui-nowrap admin-session-open-btn" data-sess-action="open">${ServerI18n.t("dashSessOpenBtn")}</button>
          </div>
          <div class="admin-session-banner-idle-hint">${ServerI18n.t("dashSessIdleHint")}</div>
        </div>`;
    } else {
      // LIVE — show session info + controls
      const started = state.started_at || (Date.now() / 1000);
      banner.hidden = false;
      banner.innerHTML = `
        <div class="admin-session-banner-live">
          <div class="admin-ui-dot is-success admin-session-live-dot"></div>
          <div class="admin-session-live-info">
            <span class="admin-session-live-name">${_escapeHtml(state.name || ServerI18n.t("dashSessFallbackName"))}</span>
            <span class="admin-session-live-timer" data-sess-timer></span>
          </div>
          <!-- 2026-07-30：拆掉這裡的「⏸ 暫停顯示」——它是同一個
               broadcast standby 開關的第三個入口（overlay 主按鈕、
               已砍的 overlay 次要鈕之外又一顆）。一功能一扇門：
               顯示控制住在 #/overlay，這裡只留場次生命週期＋捷徑。 -->
          <!-- 2026-07-30 場中審查：「結束後 viewer」下拉從橫幅移出——它是
               場次設定、場中每一秒都在旁邊等於干擾。改在「結束場次」確認
               彈窗裡一次設定（見 close handler）。data-current-behavior
               暫存目前值供彈窗預選。 -->
          <div class="admin-session-live-actions" data-current-behavior="${state.viewer_end_behavior || "continue"}">
            <a class="admin-ui-action admin-session-display-link" href="#/overlay" title="${ServerI18n.t("dashSessDisplayLinkTitle")}">${ServerI18n.t("dashSessDisplayLink")}</a>
            <button type="button" class="admin-ui-action is-danger admin-session-end-btn" data-sess-action="close">${ServerI18n.t("dashSessEndBtn")}</button>
          </div>
        </div>`;

      // Start ticking timer
      _startSessionTimer(started);
    }

    // Bind actions (delegate from banner)
    if (!banner.dataset.bound) {
      banner.dataset.bound = "1";
      banner.addEventListener("click", _handleSessionBannerClick);
    }
  }

  function _startSessionTimer(startedAt) {
    if (_sessionTimerInterval) clearInterval(_sessionTimerInterval);
    const updateTimer = () => {
      const el = document.querySelector("[data-sess-timer]");
      if (el) el.textContent = _fmtDuration(startedAt);
    };
    updateTimer();
    _sessionTimerInterval = setInterval(updateTimer, 1000);
  }

  function _stopSessionTimer() {
    if (_sessionTimerInterval) { clearInterval(_sessionTimerInterval); _sessionTimerInterval = null; }
  }

  async function _handleSessionBannerClick(e) {
    const btn = e.target.closest("[data-sess-action]");
    if (!btn) return;
    const action = btn.dataset.sessAction;

    if (action === "open") {
      const input = document.querySelector("[data-sess-name]");
      const name = (input ? input.value : "").trim();
      if (!name) { input && input.focus(); window.showToast && window.showToast(ServerI18n.t("dashToastNeedName"), false); return; }
      btn.disabled = true;
      try {
        const r = await window.csrfFetch("/admin/session/open", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
        const data = await r.json();
        if (!r.ok) { window.showToast && window.showToast(data.error || ServerI18n.t("dashToastOpenFailed"), false); return; }
        window.showToast && window.showToast(ServerI18n.t("dashToastSessOpened", { name: name }), true);
        _renderSessionBanner(data.session);
      } catch (err) {
        window.showToast && window.showToast(ServerI18n.t("dashToastOpenSessFailed"), false);
      } finally {
        btn.disabled = false;
      }
    } else if (action === "close") {
      const cur = btn.closest("[data-current-behavior]")?.dataset.currentBehavior || "continue";
      const opt = (v, zh) => `<option value="${v}"${v === cur ? " selected" : ""}>${zh}</option>`;
      const ok = await window.HudConfirm?.open({
        icon: "■",
        title: ServerI18n.t("dashCloseTitle"),
        subtitle: "CLOSE SESSION · DESKTOP SWITCHES OFF",
        severity: "danger",
        body: `
          <div style="font-size:13px;color:var(--hud-text,#f1f5f9);line-height:1.7;">
            ${ServerI18n.t("dashCloseBody")}
          </div>
          <label style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">
            <span class="admin-ui-monolabel">${ServerI18n.t("dashCloseBehaviorLabel")}</span>
            <select id="sessCloseBehavior" class="admin-ui-select" style="width:100%">
              ${opt("continue", ServerI18n.t("dashCloseBehaviorContinue"))}
              ${opt("ended_screen", ServerI18n.t("dashCloseBehaviorEnded"))}
              ${opt("reload", ServerI18n.t("dashCloseBehaviorReload"))}
            </select>
          </label>`,
        confirmLabel: ServerI18n.t("dashCloseTitle"),
      });
      if (!ok) return;
      btn.disabled = true;
      // 收場前先套用 viewer 結束行為（彈窗選的值可能與目前不同）
      const chosen = document.getElementById("sessCloseBehavior")?.value;
      if (chosen && chosen !== cur) {
        try {
          await window.csrfFetch("/admin/session/settings", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ viewer_end_behavior: chosen }),
          });
        } catch (_) { /* 設定失敗不擋收場，走原本的預設行為 */ }
      }
      try {
        const r = await window.csrfFetch("/admin/session/close", { method: "POST" });
        const data = await r.json();
        if (!r.ok) { window.showToast && window.showToast(data.error || ServerI18n.t("dashToastCloseFailed"), false); return; }
        window.showToast && window.showToast(ServerI18n.t("dashToastSessClosed"), true);
        _stopSessionTimer();
        _renderSessionBanner({ status: "idle", viewer_end_behavior: data.archived && data.archived.viewer_end_behavior || "continue" });
      } catch (err) {
        window.showToast && window.showToast(ServerI18n.t("dashToastCloseSessFailed"), false);
      } finally {
        btn.disabled = false;
      }
    }
  }


  async function refreshSessionBanner() {
    try {
      const r = await fetch("/admin/session/current", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      _renderSessionBanner(data);
    } catch (_) { /* silent */ }
  }

  function startSessionPolling() {
    refreshSessionBanner();
    if (_sessionPollTimer) clearInterval(_sessionPollTimer);
    _sessionPollTimer = setInterval(refreshSessionBanner, 10000);
  }

  function stopSessionPolling() {
    if (_sessionPollTimer) { clearInterval(_sessionPollTimer); _sessionPollTimer = null; }
    _stopSessionTimer();
  }

  // ── 控制台的顯示層卡（設計稿 06 · K1）────────────────────────────
  //
  // 全頁唯一的狀態顯示。狀態有兩個來源，缺一不可：
  //   · /overlay_status → 有幾台顯示層連著（沒有裝置就沒東西可顯示）
  //   · /admin/broadcast/status → 主持人有沒有把渲染打開
  // 兩者都成立才算「顯示中」。
  let _cockpitTimer = null;

  async function refreshCockpitOverlay() {
    const card = document.querySelector("[data-cockpit-overlay]");
    if (!card || card.offsetParent === null) return;
    let count = 0;
    let live = false;
    try {
      const r = await fetch("/overlay_status", { credentials: "same-origin" });
      if (r.ok) count = (await r.json()).overlay_count || 0;
    } catch (_) {}
    try {
      const r = await fetch("/admin/broadcast/status", { credentials: "same-origin" });
      if (r.ok) live = (await r.json()).mode === "live";
    } catch (_) {}

    const on = count > 0 && live;
    card.classList.toggle("is-on", on);
    const status = card.querySelector("[data-cockpit-status]");
    if (status) {
      status.textContent = on
        ? ServerI18n.t("adminCockpitOn", { n: count })
        : ServerI18n.t("adminCockpitOff");
    }
    const toggle = card.querySelector('[data-cockpit-action="toggle"]');
    if (toggle) {
      toggle.textContent = ServerI18n.t(on ? "adminCockpitTurnOff" : "adminCockpitTurnOn");
      toggle.classList.toggle("is-danger", on);
      toggle.classList.toggle("is-primary", !on);
      toggle.dataset.next = on ? "standby" : "live";
    }
    // 沒有裝置連著時，「清空畫面」沒有作用對象
    const clear = card.querySelector('[data-cockpit-action="clear"]');
    if (clear) clear.disabled = count === 0;
  }

  function bindCockpit() {
    const card = document.querySelector("[data-cockpit-overlay]");
    if (!card || card.dataset.bound) return;
    card.dataset.bound = "1";

    card.addEventListener("click", async (e) => {
      const btn = e.target.closest("[data-cockpit-action]");
      if (!btn) return;
      const action = btn.dataset.cockpitAction;
      if (action === "clear") {
        try {
          const r = await window.csrfFetch("/admin/overlay/clear", { method: "POST" });
          if (!r.ok) throw new Error("HTTP " + r.status);
          window.showToast && window.showToast(ServerI18n.t("toastCleared"), true);
        } catch (_) {
          window.showToast && window.showToast(ServerI18n.t("toastClearFailed"), false);
        }
        return;
      }
      if (action === "toggle") {
        try {
          const r = await window.csrfFetch("/admin/broadcast/toggle", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mode: btn.dataset.next || "standby" }),
          });
          if (!r.ok) throw new Error("HTTP " + r.status);
        } catch (_) {
          window.showToast && window.showToast(ServerI18n.t("broadcastToastToggleFailed", { msg: "" }), false);
        }
        refreshCockpitOverlay();
      }
    });

    // 兩顆次要動作只是入口，實際頁面各自擁有完整操作
    const qr = card.parentElement && card.parentElement.querySelector('[data-cockpit-action="idle-qr"]');
    if (qr) qr.addEventListener("click", () => { location.hash = "#/overlay"; });
    const poll = card.parentElement && card.parentElement.querySelector('[data-cockpit-action="poll"]');
    if (poll) poll.addEventListener("click", () => { location.hash = "#/polls"; });
  }

  function startCockpitPolling() {
    bindCockpit();
    refreshCockpitOverlay();
    if (_cockpitTimer) clearInterval(_cockpitTimer);
    _cockpitTimer = setInterval(refreshCockpitOverlay, 5000);
  }

  function stopCockpitPolling() {
    if (_cockpitTimer) { clearInterval(_cockpitTimer); _cockpitTimer = null; }
  }

  window.AdminDashboard = {
    refreshKpi: refreshDashboardKpi,
    refreshSummary: refreshDashboardSummary,
    refreshSidebarBadges: refreshSidebarBadges,
    populatePoll: populateDashboardPoll,
    populateWidgets: populateDashboardWidgets,
    refreshSessionBanner,
    startSessionPolling,
    stopSessionPolling,
    refreshCockpitOverlay,
    startCockpitPolling,
    stopCockpitPolling,
  };
})();
