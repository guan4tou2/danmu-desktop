/**
 * Admin · Poll Deep-Dive (Phase 2 P0-3, 2026-04-27).
 *
 * Mirrors docs/designs/design-v2/components/admin-batch8.jsx
 * AdminPollDeepDivePage. Some sections of the prototype need backend
 * telemetry we don't yet capture; this page surfaces what we have today
 * and makes the gaps explicit so v5.3 work can fill them.
 *
 * Real data (from /admin/poll/status):
 *   ✓ Question text + option labels
 *   ✓ Per-option vote counts + percentages
 *   ✓ Total votes + unique voter fingerprints
 *   ✓ Active / ended status
 *
 * Placeholders (require new persistence):
 *   ✗ Time histogram — vote timestamps not stored per-vote
 *   ✗ Geo distribution — IP geolocation not implemented
 *   ✗ Sentiment / Δ vs prior — no historical poll comparison layer
 *   ✗ Cross-tab geo × option, bot risk, VPN flags
 *
 * Sidebar nav: NONE — entry point is the 📊 button on the polls page.
 * Route slug: poll-deepdive (rendered into #settings-grid).
 *
 * Loaded as <script defer> in admin.html. Globals: csrfFetch.
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-poll-deepdive-overview";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  let _state = {
    poll: null,
    refreshTimer: 0,
  };

  // ── render ───────────────────────────────────────────────────────

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-pdd-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-pdd-title>${ServerI18n.t("adminRouteTitle_poll-deepdive")}</h2>
          <!-- 返回連結在卡片頁首（‹ 投票，設計稿 08 · P1）——這裡再放一個
               「← 回投票列表」是同一件事說兩次。 -->
          <p class="admin-ui-page-note" data-pdd-note>${ServerI18n.t("pollDeepdivePageNote")}</p>
        </div>

        <div class="admin-pdd-grid" data-pdd-grid>
          <div class="admin-pdd-loading">${ServerI18n.t("pollDeepdiveLoadingText")}</div>
        </div>
      </div>`;
  }

  // D-6 (2026-07-28): 自造的 admin-pdd-empty-* 四段結構收斂到共用 AdminEmpty。
  function _renderEmptyInto(grid) {
    grid.innerHTML = "";
    if (!window.AdminEmpty) {
      grid.innerHTML = '<div class="admin-pdd-loading">' + ServerI18n.t("pollDeepdiveEmptyTitle") + '</div>';
      return;
    }
    const card = window.AdminEmpty.renderCustom({
      icon: "◌",
      title: ServerI18n.t("pollDeepdiveEmptyTitle"),
      desc: ServerI18n.t("pollDeepdiveEmptyDesc"),
      actionLabel: ServerI18n.t("pollDeepdiveEmptyActionLabel"),
      action: () => { location.hash = "#/polls"; },
    });
    card.classList.add("lg:col-span-2");
    card.dataset.emptyKind = "poll-deepdive";
    grid.appendChild(card);
  }

  // ── 版面（設計稿 08 · P1）────────────────────────────────────────
  //
  // 稿上四樣東西：頁首（‹ 投票／題目／狀態時間／推結果到大螢幕＋匯出）、
  // KPI 四格、結果長條、「投票時序 · 每 10 秒」折線圖。
  //
  // 退場的一整批都是「還沒有資料的格子」：
  //   · 第五格 KPI「作弊嘗試」——值永遠是「—」，副標寫著「待 BE 擴張」
  //   · SENTIMENT INDEX——把選項當成 Likert 量表、前半算正面後半算負面，
  //     再把兩者相減。選項順序根本不保證有這個意義，那是一個編出來的數字
  //   · 「vs 上一次」——值永遠是「—」
  //   · TIMELINE 佔位卡——連結指向一份 prototype-gaps 文件（給使用者看的
  //     畫面上不該有內部設計文件的連結）。這次它變成真的折線圖
  //   · GEO 佔位卡——值永遠是空的
  //   · INTEGRITY 卡——四列裡有兩列寫著「未強制」「無」，等於在宣傳沒有的
  //     防護；rate limit 那列還是硬編的 20/min。重複票被擋幾次已經有 KPI

  const _BAR_COLORS = [
    "var(--color-ink-success)",
    "var(--color-ink-accent)",
    "var(--color-ink-warning)",
    "var(--color-danger)",
  ];

  function _fmtClock(sec) {
    if (!sec) return "";
    const d = new Date(sec * 1000);
    return d.toLocaleTimeString(
      (window.ServerI18n && ServerI18n.dateLocale && ServerI18n.dateLocale()) || undefined,
      { hour: "2-digit", minute: "2-digit" }
    );
  }

  function _timelineSvg(points) {
    if (!points || points.length < 2) return "";
    const max = Math.max.apply(null, points.map(function (p) { return p.n; }).concat([1]));
    const w = 100;
    const h = 32;
    const step = w / (points.length - 1);
    const coords = points.map(function (p, i) {
      const x = (i * step).toFixed(2);
      const y = (h - (p.n / max) * (h - 2) - 1).toFixed(2);
      return x + "," + y;
    });
    return (
      '<svg class="admin-pdd-timeline-svg" viewBox="0 0 ' + w + " " + h + '" preserveAspectRatio="none" aria-hidden="true">' +
      '<polyline points="' + coords.join(" ") + '" />' +
      "</svg>"
    );
  }

  function _renderPoll(poll) {
    const state = poll.state || (poll.active ? "active" : "ended");
    const question = poll.question || "—";
    const options = Array.isArray(poll.options) ? poll.options : [];
    const votesOf = function (o) { return Number(o.votes != null ? o.votes : o.count) || 0; };
    const total = options.reduce(function (s2, o) { return s2 + votesOf(o); }, 0);

    const stateLine = state === "active"
      ? ServerI18n.t("pollDeepdiveStateActive")
      : ServerI18n.t("pollDeepdiveStateEnded", { time: _fmtClock(poll.ended_at) });

    // 時長
    const durationVal = (function () {
      const started = Number(poll.started_at) || 0;
      if (!started) return "—";
      const ended = state === "active" ? Date.now() / 1000 : (Number(poll.ended_at) || started);
      const sec = Math.max(0, Math.floor(ended - started));
      return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");
    })();

    // 參與率——分母是目前連著的顯示層數量，這是 server 唯一知道的「在線」。
    const audience = Number(window._lastOverlayCount) || 0;
    const participationVal = audience > 0 ? Math.round((total / audience) * 100) + "%" : "—";
    const participationSub = audience > 0
      ? ServerI18n.t("pollDeepdiveParticipationSub", { total: total, audience: audience })
      : ServerI18n.t("pollDeepdiveParticipationUnknown");

    const duplicates = (function () {
      const qs = Array.isArray(poll.questions) ? poll.questions : [];
      let sum = 0;
      for (const q of qs) sum += Number(q.duplicate_attempts) || 0;
      if (!qs.length) sum = Number(poll.duplicate_attempts) || 0;
      return sum;
    })();

    const optionRows = options.map(function (o, i) {
      const votes = votesOf(o);
      const pct = total > 0 ? (votes / total) * 100 : 0;
      const c = _BAR_COLORS[i % _BAR_COLORS.length];
      return `
        <div class="admin-pdd-row">
          <div class="admin-pdd-row-head">
            <span class="lbl">${escapeHtml(o.label || o.text || o.key || ServerI18n.t("pollDeepdiveOptionFallbackLabel", { n: i + 1 }))}</span>
            <span class="votes">${votes} · ${pct.toFixed(0)}%</span>
          </div>
          <div class="admin-pdd-row-bar">
            <div class="admin-pdd-row-fill" style="width:${pct.toFixed(2)}%;background:${c}"></div>
          </div>
        </div>`;
    }).join("");

    const timeline = Array.isArray(poll.vote_timeline) ? poll.vote_timeline : [];
    const timelineBody = timeline.length >= 2
      ? _timelineSvg(timeline)
      : '<div class="admin-pdd-timeline-empty">' + ServerI18n.t("pollDeepdiveTimelineTooShort") + "</div>";

    return `
      <div class="admin-pdd-main">
        <article class="admin-pdd-card admin-pdd-header">
          <a class="admin-pdd-back" href="#/polls">‹ ${ServerI18n.t("adminNavPolls")}</a>
          <div class="admin-pdd-question">${escapeHtml(question)}</div>
          <div class="admin-pdd-state">${escapeHtml(stateLine)}</div>
          <div class="admin-pdd-headactions">
            <button type="button" class="admin-ui-action" data-pdd-action="export-csv">${ServerI18n.t("pollDeepdiveExportCsvBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-pdd-action="push">${ServerI18n.t("pollDeepdivePushBtn")}</button>
          </div>
        </article>

        <div class="admin-pdd-kpis">
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiTotalVotes")}</div><div class="v">${total}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiParticipation")}</div><div class="v">${participationVal}</div><div class="sub">${escapeHtml(participationSub)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuration")}</div><div class="v">${escapeHtml(durationVal)}</div></div>
          <div class="admin-pdd-kpi"><div class="k">${ServerI18n.t("pollDeepdiveKpiDuplicates")}</div><div class="v">${duplicates}</div><div class="sub">${ServerI18n.t("pollDeepdiveKpiDuplicatesSub")}</div></div>
        </div>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecDistribution")}</div>
          <div class="admin-pdd-rows">
            ${options.length ? optionRows : '<div class="admin-pdd-empty-rows">' + ServerI18n.t("pollDeepdiveNoOptions") + "</div>"}
          </div>
        </article>

        <article class="admin-pdd-card">
          <div class="admin-pdd-seclabel">${ServerI18n.t("pollDeepdiveSecTimeline")}</div>
          <div class="admin-pdd-timeline">${timelineBody}</div>
        </article>
      </div>`;
  }

  function _refresh() {
    const grid = document.querySelector("[data-pdd-grid]");
    if (!grid) return;
    if (!_state.poll || !_state.poll.poll_id) {
      _renderEmptyInto(grid);
      return;
    }
    grid.innerHTML = _renderPoll(_state.poll);
  }

  // ── data ─────────────────────────────────────────────────────────

  async function _fetchPoll() {
    try {
      const r = await fetch("/admin/poll/status", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      _state.poll = data;
      _refresh();
    } catch (_) { /* silent */ }
  }

  function _exportCsv() {
    if (!_state.poll || !Array.isArray(_state.poll.options)) {
      window.showToast && window.showToast(ServerI18n.t("pollDeepdiveToastNoData"), false);
      return;
    }
    const rows = [["option_label", "votes", "percentage"]];
    const total = _state.poll.options.reduce(function (s, o) { return s + (Number(o.votes != null ? o.votes : o.count) || 0); }, 0);
    _state.poll.options.forEach(function (o, i) {
      const votes = Number(o.votes != null ? o.votes : o.count) || 0;
      const pct = total > 0 ? (votes / total * 100).toFixed(2) : "0.00";
      rows.push([o.label || ("option_" + (i + 1)), votes, pct]);
    });
    const csv = rows.map(function (r) {
      return r.map(function (c) {
        const s = String(c);
        return s.includes(",") || s.includes('"') ? '"' + s.replace(/"/g, '""') + '"' : s;
      }).join(",");
    }).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "poll-" + (_state.poll.poll_id || "current") + ".csv";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    window.showToast && window.showToast(ServerI18n.t("pollDeepdiveToastCsvExported"), true);
  }

  /** 設計稿 08 · P1 的「推結果到大螢幕」。

      顯示層是中途才連上的話，在下一票進來之前它手上沒有任何投票狀態——
      這顆鈕就是把現在的狀態再送一次。 */
  async function _pushToScreen() {
    try {
      const r = await window.csrfFetch("/admin/poll/broadcast", { method: "POST" });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast(ServerI18n.t("pollDeepdivePushDone"), true);
    } catch (_) {
      window.showToast && window.showToast(ServerI18n.t("pollDeepdivePushFailed"), false);
    }
  }
  function _syncVisibility() {
    const route = document.querySelector(".admin-dash-grid")?.dataset?.activeLeaf || "dashboard";
    const onPage = route === "poll-deepdive";
    if (onPage) {
      _fetchPoll();
      if (!_state.refreshTimer) _state.refreshTimer = setInterval(_fetchPoll, 5000);
    } else if (_state.refreshTimer) {
      clearInterval(_state.refreshTimer);
      _state.refreshTimer = 0;
    }
  }

  // ── init ─────────────────────────────────────────────────────────

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());
    const page = document.getElementById(PAGE_ID);
    if (page) {
      page.addEventListener("click", function (e) {
        const btn = e.target.closest("[data-pdd-action]");
        if (!btn) return;
        if (btn.dataset.pddAction === "export-csv") _exportCsv();
        else if (btn.dataset.pddAction === "push") _pushToScreen();
      });
    }
    // Always do an initial fetch so the route is ready when the user
    // navigates to it later (avoids race where _syncVisibility runs before
    // admin.js applyRoute sets data-active-route).
    _fetchPoll();
    _syncVisibility();
    window.addEventListener("hashchange", _syncVisibility);
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
