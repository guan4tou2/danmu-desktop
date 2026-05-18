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
      else if (a === "ban-fp") _openBanConfirm();
      else if (a === "ban-fp-quick") _banFingerprint();
      else if (a === "mute-fp") _muteFingerprint();
      else if (a === "mask-msg") _maskMessage();
      else if (a === "blacklist-kw") _blacklistKeyword();
      else if (a === "reply") _sendHostReply();
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

  // 2026-05-17 design v4 drawer layout:
  //   header (avatar + @nick + fp + time) → message body → Sender Profile
  //   → Moderation → Reply → footer (PREV / NEXT)
  function _renderBody() {
    const entry = _state.entry;
    if (!entry) return '<div class="admin-msgd-empty">沒有資料</div>';
    const d = entry.data || {};
    const fp = d.fingerprint || "—";
    const fpShort = fp === "—" ? "—" : fp.slice(0, FP_DISPLAY_LEN);
    const fpFull  = fp === "—" ? "—" : fp.slice(0, 12);
    const ts = entry.ts ? _shortTime(entry.ts) : "—";
    const nick = d.nickname || "匿名";

    const fpRec = _state.fingerprintRecord || {};
    const totalCount = Number(fpRec.message_count) || 0;
    const violations = Number(fpRec.violation_count) || 0;

    const sameFp = _state.sameFpEntries || [];
    const avgLen = sameFp.length
      ? Math.round(sameFp.reduce((s, e) => s + (((e.data || e).text || "").length), 0) / sameFp.length)
      : (d.text || "").length;

    // fp-derived hue for avatar (matches design v4 P0Avatar).
    let hue = 0;
    for (let i = 0; i < fp.length; i++) hue = (hue * 31 + fp.charCodeAt(i)) & 0xffff;
    hue = hue % 360;

    return `
      <header class="admin-msgd-v4__topbar">
        <span class="admin-msgd-v4__kicker">MESSAGE DETAIL</span>
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="關閉 · Esc">✕</button>
      </header>

      <div class="admin-msgd-v4__header">
        <span class="admin-msgd-v4__avatar" style="background: oklch(0.65 0.18 ${hue})">${escapeHtml((nick || "?").slice(0, 2).toUpperCase())}</span>
        <div class="admin-msgd-v4__id">
          <div class="admin-msgd-v4__nick">@${escapeHtml(nick)}</div>
          <div class="admin-msgd-v4__fp">fp:${escapeHtml(fpFull)}</div>
        </div>
        <span class="admin-msgd-v4__ts">${escapeHtml(ts)}</span>
      </div>

      <div class="admin-msgd-v4__body">${escapeHtml(d.text || "")}</div>

      <section class="admin-msgd-v4__section">
        <div class="admin-msgd-v4__seclabel">發送者 · SENDER PROFILE</div>
        <div class="admin-msgd-v4__sender-stats">
          <div><div class="k">累計訊息</div><div class="v">${totalCount || sameFp.length}</div></div>
          <div><div class="k">平均長度</div><div class="v dim">${avgLen}<span class="u">字</span></div></div>
          <div><div class="k">敏感字次</div><div class="v ${violations > 0 ? "warn" : "good"}">${violations}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP · ${escapeHtml(d.ip || "—")}<br/>
          UA · ${escapeHtml(d.user_agent || d.ua || "—")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <div class="admin-msgd-v4__seclabel">審核 · MODERATION</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${fp === "—" ? "disabled" : ""}>⊘ Ban</button>
          <button type="button" class="admin-msgd-v4__modbtn is-mute" data-msgd-action="mute-fp" ${fp === "—" ? "disabled" : ""}>◐ Mute</button>
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="mask-msg">◑ Mask</button>
          <button type="button" class="admin-msgd-v4__modbtn is-blacklist" data-msgd-action="blacklist-kw">+ 黑名單</button>
        </div>
      </section>

      <section class="admin-msgd-v4__section is-grow">
        <div class="admin-msgd-v4__seclabel">回覆 · REPLY AS ADMIN</div>
        <textarea class="admin-msgd-v4__reply" data-msgd-reply placeholder="以管理者身分回覆…" rows="3"></textarea>
        <button type="button" class="admin-msgd-v4__replybtn" data-msgd-action="reply">發送回覆</button>
      </section>

      <footer class="admin-msgd-v4__footer">
        <button type="button" data-msgd-action="prev">← PREV</button>
        <button type="button" data-msgd-action="next">NEXT →</button>
      </footer>
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

  async function _banFingerprint(reason) {
    const fp = _state.entry && _state.entry.data && _state.entry.data.fingerprint;
    if (!fp) return;
    try {
      const r = await window.csrfFetch("/admin/live/block", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "fingerprint", value: fp, reason: reason || "" }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast("已封禁 fp:" + fp.slice(0, 8), true);
      _closeBanConfirm();
      _close();
    } catch (e) {
      window.showToast && window.showToast("封禁失敗：" + (e.message || ""), false);
    }
  }

  // 2026-05-18 design v4-r2: BanConfirm migrated to the shared HudConfirm
  // helper. Keeps the same 4-chip duration UI + reason input (built as a
  // detached DOM node and passed as `body`). Backend still only supports
  // permanent — the timed chips remain disabled.
  async function _openBanConfirm() {
    const d = (_state.entry && _state.entry.data) || {};
    const fp = d.fingerprint || "—";
    if (fp === "—") return;
    const fpFull = fp.slice(0, 12);
    const nick = d.nickname || "匿名";
    let hue = 0;
    for (let i = 0; i < fp.length; i++) hue = (hue * 31 + fp.charCodeAt(i)) & 0xffff;
    hue = hue % 360;

    const body = document.createElement("div");
    body.innerHTML = `
      <div class="admin-bancfm-target">
        <span class="admin-bancfm-avatar" style="background: oklch(0.65 0.18 ${hue})">${escapeHtml((nick || "?").slice(0, 2).toUpperCase())}</span>
        <div class="admin-bancfm-meta">
          <div class="nick">@${escapeHtml(nick)}</div>
          <div class="fp">fp:${escapeHtml(fpFull)}</div>
          <div class="ip">IP · ${escapeHtml(d.ip || "—")} · ${escapeHtml(d.user_agent || d.ua || "—")}</div>
        </div>
      </div>
      <div class="admin-bancfm-section">
        <div class="admin-bancfm-sec-label">封禁時長</div>
        <div class="admin-bancfm-duration">
          <span class="admin-bancfm-dchip is-disabled" title="後端尚未支援時限 ban">1 小時</span>
          <span class="admin-bancfm-dchip is-disabled" title="後端尚未支援時限 ban">24 小時</span>
          <span class="admin-bancfm-dchip is-disabled" title="後端尚未支援時限 ban">7 天</span>
          <span class="admin-bancfm-dchip is-active">永久</span>
        </div>
      </div>
      <div class="admin-bancfm-section">
        <div class="admin-bancfm-sec-label">原因（選填）</div>
        <input type="text" class="admin-bancfm-reason" data-ban-reason placeholder="e.g. 持續發送垃圾訊息" maxlength="200" />
      </div>
      <div class="admin-bancfm-warn">⚠ 該指紋下所有訊息將被遮罩，該指紋將被加入黑名單。</div>`;

    if (!window.HudConfirm) {
      // Fallback to native confirm if helper hasn't loaded yet.
      if (confirm("確定封禁此指紋？該指紋之後在本場發出的訊息會自動遮罩。")) {
        return _banFingerprint("");
      }
      return;
    }
    const ok = await window.HudConfirm.open({
      icon: "⊘",
      title: "封禁確認",
      subtitle: "BAN CONFIRM · IRREVERSIBLE UNTIL MANUAL LIFT",
      severity: "danger",
      body,
      confirmLabel: "確認封禁",
      cancelLabel: "取消",
      width: 480,
    });
    if (!ok) return;
    const reason = (body.querySelector("[data-ban-reason]") || {}).value || "";
    return _banFingerprint(reason.trim());
  }
  // Stub kept for any straggler call sites that referenced the old close
  // function; HudConfirm now manages its own close lifecycle.
  function _closeBanConfirm() { /* no-op; HudConfirm self-closes */ }

  async function _muteFingerprint() {
    // Mute = same backend call as ban (permanent block of fp). Surfaced as
    // "softer" action just because design v4 spec separates them; backend
    // model is identical until tiered moderation lands.
    return _banFingerprint("[mute]");
  }
  async function _maskMessage() {
    // Mask a single message in the live feed (frontend-only — same UX as
    // /admin/live/block with type=keyword on the message text).
    const text = _state.entry && _state.entry.data && _state.entry.data.text;
    if (!text) return;
    if (!confirm("把此訊息加入黑名單關鍵字？")) return;
    try {
      const r = await window.csrfFetch("/admin/live/block", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "keyword", value: text }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast("已加入黑名單", true);
      _close();
    } catch (e) {
      window.showToast && window.showToast("失敗：" + (e.message || ""), false);
    }
  }
  async function _blacklistKeyword() {
    // Alias of _maskMessage — design v4 shows both buttons (Mask vs 黑名單)
    // but backend has one endpoint. We keep both for UI parity, future
    // server-side split (mask = current-session only / 黑名單 = persistent)
    // is the natural follow-up.
    return _maskMessage();
  }
  async function _sendHostReply() {
    const ta = document.querySelector("[data-msgd-reply]");
    const text = ta ? ta.value.trim() : "";
    if (!text) return;
    try {
      const r = await window.csrfFetch("/admin/broadcast/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!r.ok) throw new Error("HTTP " + r.status);
      window.showToast && window.showToast("已以管理者身分發送", true);
      if (ta) ta.value = "";
    } catch (e) {
      window.showToast && window.showToast("發送失敗：" + (e.message || ""), false);
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
