/**
 * Admin · Message Detail Drawer (P1, 2026-04-27).
 *
 * Mirrors docs/designs/design-v2/components/admin-batch7.jsx
 * AdminMessageDetailPage. Delivered as a slide-in side drawer (NOT a
 * full route page) — opens when clicking a message row on:
 *   - #/messages (admin-live-feed.js)
 *   - #/history  (admin-history.js, deferred — wires same event)
 *
 * Pure FE: no new backend endpoints. Data sources:
 *   ✓ Message data — passed via CustomEvent admin:message-detail-open
 *   ✓ Fingerprint stats — GET /admin/fingerprints (in-memory tracker)
 *   ✓ Same-fp recent msgs — filter in-memory live-feed entries
 *
 * Action buttons (★ pin / ◐ mask / ⊘ hide / ⊗ ban / ↗ overlay-reply):
 *   ⊗ ban-fingerprint wires to existing /admin/live/block (live-feed
 *     already does this); other BE-blocked controls render as non-clickable
 *     placeholder boxes in strict prototype mode.
 *
 * Loaded as <script defer> in admin.html. Globals: csrfFetch, showToast,
 * AdminUtils, AdminIdentity.
 */
(function () {
  "use strict";

  const ROOT_ID = "admin-message-drawer-root";
  const FP_DISPLAY_LEN = 8;
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  let _state = {
    open: false,
    entry: null,
    fingerprintRecord: null,
    sameFpEntries: [],
  };

  // ── trigger ──────────────────────────────────────────────────────

  function _onRequestOpen(e) {
    const data = e.detail && e.detail.entry;
    if (!data) return;
    _state.entry = data;
    _open();
    if (data.data && data.data.fingerprint) _fetchFingerprintStats(data.data.fingerprint);
    _collectSameFpEntries(data);
  }

  function _open() {
    _state.open = true;
    document.body.dataset.messageDrawerOpen = "1";
    if (!document.getElementById(ROOT_ID)) {
      document.body.insertAdjacentHTML("beforeend", _renderShell());
      _bindShell();
    }
    _render();
  }

  function _close() {
    _state.open = false;
    document.body.dataset.messageDrawerOpen = "";
    const root = document.getElementById(ROOT_ID);
    if (root) root.remove();
  }

  function _onKey(e) {
    if (!_state.open) return;
    if (e.key === "Escape") { _close(); return; }
    if (e.key === "ArrowLeft" || e.key === "k") { _navigate(-1); e.preventDefault(); return; }
    if (e.key === "ArrowRight" || e.key === "j") { _navigate(+1); e.preventDefault(); return; }
  }

  // ── prev / next ──────────────────────────────────────────────────

  // direction: -1 = 上一筆 (newer / 較新)、+1 = 下一筆 (older / 較舊)
  // Live-feed entries[] is oldest-first internally but rendered newest-first,
  // so "下一筆" means moving DOWN the visible list = index - 1 in storage.
  function _navigate(direction) {
    if (!_state.entry) return;
    let entries = [];
    if (window.AdminLiveFeed && typeof window.AdminLiveFeed.getEntries === "function") {
      entries = window.AdminLiveFeed.getEntries();
    }
    if (!entries.length) return;
    const idx = entries.findIndex(function (e) { return e.id === _state.entry.id; });
    if (idx < 0) return;
    // Flip direction: visual "下一筆" → older → entries[idx - 1]
    const targetIdx = idx + (-direction);
    if (targetIdx < 0 || targetIdx >= entries.length) {
      window.showToast && window.showToast(direction < 0 ? "已是最新一筆" : "已是最舊一筆", false);
      return;
    }
    const target = entries[targetIdx];
    _state.entry = target;
    _state.fingerprintRecord = null;
    _collectSameFpEntries(target);
    _render();
    if (target.data && target.data.fingerprint) _fetchFingerprintStats(target.data.fingerprint);
  }

  // ── data ─────────────────────────────────────────────────────────

  async function _fetchFingerprintStats(fp) {
    try {
      const r = await fetch("/admin/fingerprints?limit=500", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      const records = Array.isArray(data.records) ? data.records : [];
      const matching = records.find(function (rec) {
        return (rec.fingerprint || "").startsWith(fp.slice(0, 8));
      });
      _state.fingerprintRecord = matching || null;
      _render();
    } catch (_) { /* silent */ }
  }

  function _collectSameFpEntries(currentEntry) {
    const fp = currentEntry.data && currentEntry.data.fingerprint;
    if (!fp) { _state.sameFpEntries = []; return; }
    // Reach into the live-feed module for in-memory entries (best effort).
    let entries = [];
    if (window.AdminLiveFeed && typeof window.AdminLiveFeed.getEntries === "function") {
      entries = window.AdminLiveFeed.getEntries();
    } else if (window.AdminHistory && window.AdminHistory.allHistoryRecords) {
      entries = window.AdminHistory.allHistoryRecords;
    }
    _state.sameFpEntries = entries.filter(function (e) {
      const efp = (e.data && e.data.fingerprint) || e.fingerprint || "";
      return efp && efp.startsWith(fp.slice(0, 8));
    }).slice(0, 8); // keep latest 8
  }

  // ── render ───────────────────────────────────────────────────────

  function _renderShell() {
    return `
      <div id="${ROOT_ID}" class="admin-msgd-overlay" role="dialog" aria-modal="true" aria-labelledby="msgd-title">
        <div class="admin-msgd-backdrop" data-msgd-action="close"></div>
        <aside class="admin-msgd-drawer" data-msgd-body></aside>
      </div>`;
  }

  function _bindShell() {
    const root = document.getElementById(ROOT_ID);
    if (!root) return;
    root.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-msgd-action]");
      if (!btn) return;
      e.stopPropagation();
      const a = btn.dataset.msgdAction;
      if (a === "close") _close();
      else if (a === "ban-fp") _banFingerprint();
      else if (a === "prev") _navigate(-1);
      else if (a === "next") _navigate(+1);
    });
  }

  function _render() {
    const root = document.getElementById(ROOT_ID);
    if (!root) return;
    const body = root.querySelector("[data-msgd-body]");
    if (!body) return;
    body.innerHTML = _renderBody();
  }

  function _renderBody() {
    const entry = _state.entry;
    if (!entry) return '<div class="admin-msgd-empty">沒有資料</div>';
    const d = entry.data || {};
    const fp = d.fingerprint || "—";
    const fpShort = fp === "—" ? "—" : fp.slice(0, FP_DISPLAY_LEN);
    const ts = entry.ts ? new Date(entry.ts).toLocaleString("zh-TW", { hour12: false }) : "—";
    const nick = d.nickname || "匿名";
    const nickInitial = nick.charAt(0) || "?";
    const color = d.color || "#7c3aed";
    const status = entry.muted ? "MASKED" : "SHOWN";
    const statusCls = entry.muted ? "is-warn" : "is-good";

    const fpRec = _state.fingerprintRecord || {};
    const totalCount = Number(fpRec.message_count) || 0;
    const violations = Number(fpRec.violation_count) || 0;
    const firstSeen = fpRec.first_seen ? _humanDelta(fpRec.first_seen) : "—";

    const sameFp = _state.sameFpEntries || [];
    const sameFpRows = sameFp.map(function (e, i) {
      const sd = e.data || e;
      const text = sd.text || sd.message || "";
      const t = e.ts ? _shortTime(e.ts) : "—";
      const isCurrent = e.id && entry.id && e.id === entry.id;
      const masked = !!e.muted;
      return `
        <div class="admin-msgd-fp-row ${isCurrent ? "is-current" : ""}">
          <span class="t">${escapeHtml(t)}</span>
          <span class="m">${escapeHtml(text.slice(0, 60))}</span>
          <span class="s ${masked ? "is-masked" : ""}">${masked ? "MASKED" : "SENT"}</span>
        </div>`;
    }).join("");

    let _navCounter = "";
    {
      let _allEntries = [];
      if (window.AdminLiveFeed && typeof window.AdminLiveFeed.getEntries === "function") {
        _allEntries = window.AdminLiveFeed.getEntries();
      }
      if (_allEntries.length > 0) {
        const _idx = _allEntries.findIndex(function (en) { return en.id === entry.id; });
        if (_idx >= 0) _navCounter = (_idx + 1) + " / " + _allEntries.length;
      }
    }

    return `
      <header class="admin-msgd-head">
        <span class="admin-msgd-kicker">MESSAGE · INSPECTOR</span>
        ${_navCounter ? `<span class="admin-msgd-counter">${_navCounter}</span>` : ""}
        <button type="button" class="admin-msgd-nav" data-msgd-action="prev" aria-label="Previous message" title="上一筆 · K"><span class="arrow">↑</span><span class="admin-msgd-keycap">K</span></button>
        <button type="button" class="admin-msgd-nav" data-msgd-action="next" aria-label="Next message" title="下一筆 · J"><span class="arrow">↓</span><span class="admin-msgd-keycap">J</span></button>
        <button type="button" class="admin-msgd-close" data-msgd-action="close" aria-label="Close drawer" title="關閉 · Esc"><span class="arrow">✕</span><span class="admin-msgd-keycap">Esc</span></button>
      </header>

      <article class="admin-msgd-bubble">
        <div class="admin-msgd-bubble-head">
          <div class="admin-msgd-avatar" style="background:${escapeHtml(color)}">${escapeHtml(nickInitial)}</div>
          <div class="admin-msgd-bubble-meta">
            <div class="nick">${escapeHtml(nick)}</div>
            <div class="ts">fp:${escapeHtml(fpShort)} · ${escapeHtml(ts)}</div>
          </div>
          <span class="admin-msgd-status ${statusCls}">${status}</span>
        </div>
        <div class="admin-msgd-bubble-text">${escapeHtml(d.text || "")}</div>
        <div class="admin-msgd-bubble-foot">
          <span>id <b>${escapeHtml((entry.id || "—").slice(0, 12))}</b></span>
          ${d.layout ? `<span>layout <b>${escapeHtml(d.layout)}</b></span>` : ""}
          ${d.color ? `<span>color <b style="color:${escapeHtml(d.color)};">${escapeHtml(d.color)}</b></span>` : ""}
        </div>
      </article>

      <div class="admin-msgd-actions">
        <span class="admin-be-placeholder-control admin-msgd-action-placeholder" role="note"><span class="icon">★</span><span class="lbl">置頂</span></span>
        <span class="admin-be-placeholder-control admin-msgd-action-placeholder" role="note"><span class="icon">◐</span><span class="lbl">遮罩</span></span>
        <span class="admin-be-placeholder-control admin-msgd-action-placeholder" role="note"><span class="icon">⊘</span><span class="lbl">隱藏</span></span>
        <button type="button" data-msgd-action="ban-fp" class="is-danger" ${fp === "—" ? "disabled" : ""}><span class="icon">⊗</span><span class="lbl">封禁指紋</span></button>
        <span class="admin-be-placeholder-control admin-msgd-action-placeholder" role="note"><span class="icon">↗</span><span class="lbl">overlay</span></span>
      </div>

      <div class="admin-v2-monolabel">指紋活動 · fp:${escapeHtml(fpShort)}</div>
      <div class="admin-msgd-fp-stats">
        <div class="kpi"><div class="k">本場</div><div class="v">${sameFp.length}<span class="unit">則</span></div></div>
        <div class="kpi"><div class="k">追蹤總數</div><div class="v">${totalCount}<span class="unit">則</span></div></div>
        <div class="kpi"><div class="k">違規</div><div class="v ${violations > 0 ? "is-warn" : ""}">${violations}</div></div>
      </div>

      <div class="admin-msgd-fp-meta">
        ${firstSeen !== "—" ? `首次出現 <b>${escapeHtml(firstSeen)}</b>` : "首次出現 <b>—</b>"}
        ${nick && nick !== "匿名" ? ` · 暱稱 <b>${escapeHtml(nick)}</b>` : ""}
        ${fpRec.state ? ` · 狀態 <b class="state-${escapeHtml(fpRec.state)}">${escapeHtml(fpRec.state)}</b>` : ""}
      </div>

      <div class="admin-v2-monolabel admin-msgd-section-top">同指紋最近訊息</div>
      <div class="admin-msgd-fp-list">
        ${sameFpRows || '<div class="admin-msgd-empty-rows">本場沒有同指紋的其他訊息。</div>'}
      </div>

      ${fp !== "—" ? `
        <div class="admin-msgd-ban-preview">
          <span class="kicker">BAN 預覽</span>
          <div>封禁此指紋會把該觀眾在<b>本場後續</b>所有訊息都自動遮罩，<b>不會</b>影響歷史訊息。</div>
          <div class="impact">預估影響：本場已收到 <b style="color:var(--color-warning, #fbbf24);">${sameFp.length} 則</b> 此指紋訊息（其中 ${sameFp.filter(function (e) { return e.muted; }).length} 則已遮罩）。</div>
        </div>` : ""}
    `;
  }

  function _shortTime(ts) {
    try {
      const d = new Date(ts);
      const h = String(d.getHours()).padStart(2, "0");
      const m = String(d.getMinutes()).padStart(2, "0");
      const s = String(d.getSeconds()).padStart(2, "0");
      return h + ":" + m + ":" + s;
    } catch (_) { return "—"; }
  }

  function _humanDelta(unixOrIso) {
    let t;
    if (typeof unixOrIso === "number") t = unixOrIso * 1000;
    else if (typeof unixOrIso === "string") t = new Date(unixOrIso).getTime();
    else return "—";
    if (!t) return "—";
    const diffSec = (Date.now() - t) / 1000;
    if (diffSec < 60) return Math.floor(diffSec) + " 秒前";
    if (diffSec < 3600) return Math.floor(diffSec / 60) + " 分鐘前";
    if (diffSec < 86400) return Math.floor(diffSec / 3600) + " 小時前";
    return Math.floor(diffSec / 86400) + " 天前";
  }

  // ── ban via existing /admin/live/block ──────────────────────────

  async function _banFingerprint() {
    const fp = _state.entry && _state.entry.data && _state.entry.data.fingerprint;
    if (!fp) return;
    if (!confirm("確定封禁此指紋？該指紋之後在本場發出的訊息會自動遮罩。")) return;
    try {
      const r = await window.csrfFetch("/admin/live/block", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "fingerprint", value: fp }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast("已封禁 fp:" + fp.slice(0, 8), true);
      _close();
    } catch (e) {
      window.showToast && window.showToast("封禁失敗：" + (e.message || ""), false);
    }
  }

  // ── public API ───────────────────────────────────────────────────

  window.AdminMessageDrawer = {
    open: function (entry) {
      document.dispatchEvent(new CustomEvent("admin:message-detail-open", { detail: { entry: entry } }));
    },
    close: _close,
  };

  // ── init ─────────────────────────────────────────────────────────

  document.addEventListener("DOMContentLoaded", function () {
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    document.addEventListener("admin:message-detail-open", _onRequestOpen);
    document.addEventListener("keydown", _onKey);
  });
})();
