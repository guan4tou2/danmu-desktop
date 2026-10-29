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
 * Action buttons (⊘ ban-fingerprint / ↗ recall / + blacklist / reply):
 *   2026-10-29：API 一律走共用的 window.AdminModeration（admin-moderation-
 *     actions.js）——分流（有時限 /admin/modbans、永久 /admin/live/block）、
 *     錯誤處理與提示都在那一層；這裡只留確認 UI 與本地狀態。
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

  // 開啟前後把焦點記住：關閉時要回到原本那一列，鍵盤使用者才不會被丟回
  // 文件開頭（抽屜 2026-10-29 才接上入口，之前沒有人會被丟掉）。
  let _prevFocus = null;

  function _onRequestOpen(e) {
    const data = e.detail && e.detail.entry;
    if (!data) return;
    if (!_state.open) _prevFocus = document.activeElement;
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
    // 把焦點送進抽屜，Tab 才不會跑到背後那張列表。
    const first = document.querySelector("#" + ROOT_ID + " .admin-msgd-v4__close")
      || document.querySelector("#" + ROOT_ID + " button");
    if (first) {
      try { first.focus({ preventScroll: true }); } catch (_) {}
    }
  }

  function _close() {
    _state.open = false;
    document.body.dataset.messageDrawerOpen = "";
    const root = document.getElementById(ROOT_ID);
    if (root) root.remove();
    if (_prevFocus && typeof _prevFocus.focus === "function" && document.contains(_prevFocus)) {
      try { _prevFocus.focus({ preventScroll: true }); } catch (_) {}
    }
    _prevFocus = null;
  }

  function _onKey(e) {
    if (!_state.open) return;
    if (e.key === "Escape") { _close(); return; }
    // 2026-10-29：在回覆框裡打 j / k 不該翻頁——抽屜一直到這一天才接上
    // 入口，這個衝突之前沒有任何機會被發現。
    const el = document.activeElement;
    const tag = el ? (el.tagName || "").toLowerCase() : "";
    if (el && (el.isContentEditable || tag === "input" || tag === "textarea" || tag === "select")) return;
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
      window.showToast && window.showToast(direction < 0 ? ServerI18n.t("msgDrawerNavAtNewest") : ServerI18n.t("msgDrawerNavAtOldest"), false);
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
    // 2026-09-07：原本還有一條 AdminHistory.allHistoryRecords 的 fallback，
    // 但那份記憶體清單隨「重播」分頁的歷史卡一起退場，永遠會是空陣列——
    // 留著只是讓人以為還有第二個來源。
    let entries = [];
    if (window.AdminLiveFeed && typeof window.AdminLiveFeed.getEntries === "function") {
      entries = window.AdminLiveFeed.getEntries();
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
      else if (a === "recall-msg") _recallMessage();
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
    if (!entry) return `<div class="admin-msgd-empty">${ServerI18n.t("msgDrawerEmptyState")}</div>`;
    const d = entry.data || {};
    const fp = d.fingerprint || "—";
    const fpShort = fp === "—" ? "—" : fp.slice(0, FP_DISPLAY_LEN);
    const fpFull  = fp === "—" ? "—" : fp.slice(0, 12);
    const ts = entry.ts ? _shortTime(entry.ts) : "—";
    const nick = d.nickname || ServerI18n.t("msgDrawerAnonymous");

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
        <span class="admin-msgd-v4__spacer"></span>
        <button type="button" class="admin-msgd-v4__close" data-msgd-action="close" title="${ServerI18n.t("msgDrawerCloseTitle")}">${window.AdminUtils.closeIcon}</button>
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
        <!-- D-4 i18n: "發送者 · SENDER PROFILE" is the sitewide EN·中文
             bilingual monolabel pattern (same family as admin-ui-monolabel,
             pattern-level decision still deferred — see TODOS.md "「EN ·
             中文」雙語 monolabel 的 pattern 決策", precedent commit 4771242).
             .admin-msgd-v4__seclabel mirrors .admin-ui-monolabel styling
             (style.css) so it's treated the same — left untouched, as are the
             two seclabel headers below. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecSender")}</div>
        <div class="admin-msgd-v4__sender-stats">
          <div><div class="k">${ServerI18n.t("msgDrawerStatTotalMessages")}</div><div class="v">${totalCount || sameFp.length}</div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatAvgLength")}</div><div class="v dim">${avgLen}<span class="u">${ServerI18n.t("msgDrawerCharUnit")}</span></div></div>
          <div><div class="k">${ServerI18n.t("msgDrawerStatSensitiveHits")}</div><div class="v ${violations > 0 ? "warn" : "good"}">${violations}</div></div>
        </div>
        <div class="admin-msgd-v4__sender-meta">
          IP · ${escapeHtml(d.ip || "—")}<br/>
          UA · ${escapeHtml(d.user_agent || d.ua || "—")}
        </div>
      </section>

      <section class="admin-msgd-v4__section">
        <!-- D-4 i18n: same deferred EN·中文 bilingual monolabel pattern as
             SENDER PROFILE above — left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecModeration")}</div>
        <div class="admin-msgd-v4__mod-buttons">
          <button type="button" class="admin-msgd-v4__modbtn is-ban" data-msgd-action="ban-fp" ${fp === "—" ? "disabled" : ""}>${escapeHtml(ServerI18n.t("msgdBanFpBtn"))}</button>
          <!-- 2026-10-29：原本這裡是「靜音指紋」＋「◑ Mask」兩顆。
               靜音與封禁打的是同一支 API（同一個永久效果），而 Mask 其實是
               把整句文本加進黑名單——兩顆都在承諾一個不存在的選項。
               換成真的做得到的事：把這一則從大螢幕撤下。 -->
          <button type="button" class="admin-msgd-v4__modbtn is-mask" data-msgd-action="recall-msg" ${d.message_id ? "" : "disabled"}>${escapeHtml(ServerI18n.t("lfRecallBtn"))}</button>
          <button type="button" class="admin-msgd-v4__modbtn is-blacklist" data-msgd-action="blacklist-kw">${ServerI18n.t("msgDrawerBlacklistBtn")}</button>
        </div>
      </section>

      <section class="admin-msgd-v4__section is-grow">
        <!-- D-4 i18n: same deferred EN·中文 bilingual monolabel pattern as
             SENDER PROFILE above — left untouched. -->
        <div class="admin-msgd-v4__seclabel">${ServerI18n.t("msgDrawerSecReply")}</div>
        <textarea class="admin-msgd-v4__reply" data-msgd-reply placeholder="${ServerI18n.t("msgDrawerReplyPlaceholder")}" rows="3"></textarea>
        <button type="button" class="admin-msgd-v4__replybtn" data-msgd-action="reply">${ServerI18n.t("msgDrawerSendReply")}</button>
      </section>

      <footer class="admin-msgd-v4__footer">
        <button type="button" data-msgd-action="prev">← ${ServerI18n.t("uiPrev")}</button>
        <button type="button" data-msgd-action="next">${ServerI18n.t("uiNext")} →</button>
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
    if (diffSec < 60) return ServerI18n.t("msgDrawerSecAgo", { n: Math.floor(diffSec) });
    if (diffSec < 3600) return ServerI18n.t("msgDrawerMinAgo", { n: Math.floor(diffSec / 60) });
    if (diffSec < 86400) return ServerI18n.t("msgDrawerHourAgo", { n: Math.floor(diffSec / 3600) });
    return ServerI18n.t("msgDrawerDayAgo", { n: Math.floor(diffSec / 86400) });
  }

  // ── ban（2026-10-29：API 呼叫改走共用 AdminModeration）──────────────
  // 確認 UI 留在這裡——封禁時長對話框（4 顆時長 chip＋原因）是這個入口
  // 專有的，共用層不該知道它。但**打哪支 API** 不該由入口決定：
  // 有時限走 /admin/modbans、永久走 /admin/live/block 的分流在共用層。

  async function _banFingerprint(reason, durationS, durationLabel) {
    const fp = _state.entry && _state.entry.data && _state.entry.data.fingerprint;
    if (!fp) return;
    const seconds = parseInt(durationS || 0, 10) || 0;
    // 永久封禁沿用 /admin/live/block（黑名單，訊息會被遮罩）；有時限的走
    // /admin/modbans，那裡才有 duration_s 與到期判定。兩者都會讓 /fire 擋下
    // 後續訊息，差別在於前者不會自己失效。對話框已經確認過，skipConfirm。
    const result = seconds > 0
      ? await window.AdminModeration.banFingerprint(fp, seconds, reason)
      : await window.AdminModeration.callBlock("fingerprint", fp, reason);
    if (!result.ok) {
      window.showToast && window.showToast(ServerI18n.t("msgDrawerBanFailed", { msg: result.error || "" }), false);
      return;
    }
    const label = durationLabel || (seconds > 0 ? ServerI18n.t("msgDrawerSecondsLabel", { n: seconds }) : ServerI18n.t("msgDrawerPermanent"));
    window.showToast && window.showToast(ServerI18n.t("msgDrawerToastBanned", { fp: fp.slice(0, 8), label: label }), true);
    _closeBanConfirm();
    _close();
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
    const nick = d.nickname || ServerI18n.t("msgDrawerAnonymous");
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
        <div class="admin-bancfm-sec-label">${ServerI18n.t("msgDrawerBanDurationLabel")}</div>
        <div class="admin-bancfm-duration">
          <span class="admin-bancfm-dchip" role="button" tabindex="0" data-ban-duration="3600">${ServerI18n.t("msgDrawerDurationHour1")}</span>
          <span class="admin-bancfm-dchip" role="button" tabindex="0" data-ban-duration="86400">${ServerI18n.t("msgDrawerDurationHour24")}</span>
          <span class="admin-bancfm-dchip" role="button" tabindex="0" data-ban-duration="604800">${ServerI18n.t("msgDrawerDurationDay7")}</span>
          <span class="admin-bancfm-dchip is-active" role="button" tabindex="0" data-ban-duration="0">${ServerI18n.t("msgDrawerPermanent")}</span>
        </div>
      </div>
      <div class="admin-bancfm-section">
        <div class="admin-bancfm-sec-label">${ServerI18n.t("msgDrawerReasonLabel")}</div>
        <input type="text" class="admin-bancfm-reason" data-ban-reason placeholder="${ServerI18n.t("msgDrawerReasonPlaceholder")}" maxlength="200" />
      </div>
      <div class="admin-bancfm-warn">${ServerI18n.t("msgDrawerBanWarn")}</div>`;

    // 時長為單選：點一下就把 is-active 移到那顆。鍵盤也要能操作 —— chip 不是
    // <button>，所以 Enter / Space 要自己接。
    const _pickDuration = (el) => {
      body.querySelectorAll(".admin-bancfm-dchip").forEach((c) => c.classList.remove("is-active"));
      el.classList.add("is-active");
    };
    body.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-ban-duration]");
      if (chip) _pickDuration(chip);
    });
    body.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const chip = e.target.closest("[data-ban-duration]");
      if (!chip) return;
      e.preventDefault();
      _pickDuration(chip);
    });

    if (!window.HudConfirm) return;
    const ok = await window.HudConfirm.open({
      icon: "⊘",
      title: ServerI18n.t("msgDrawerBanConfirmTitle"),
      subtitle: ServerI18n.t("cfmSubBanConfirm"),
      severity: "danger",
      body,
      confirmLabel: ServerI18n.t("msgDrawerConfirmBan"),
      cancelLabel: ServerI18n.t("cancel"),
      width: 480,
    });
    if (!ok) return;
    const reason = (body.querySelector("[data-ban-reason]") || {}).value || "";
    const active = body.querySelector(".admin-bancfm-dchip.is-active");
    const durationS = active ? parseInt(active.dataset.banDuration || "0", 10) || 0 : 0;
    // 標籤直接用 chip 上的文字，不另外從秒數推算 —— 推算過一次，7 天被算成
    // 「1 天」（除數誤用 604800），跟 24 小時的提示變得一模一樣。
    const durationLabel = active ? active.textContent.trim() : ServerI18n.t("msgDrawerPermanent");
    return _banFingerprint(reason.trim(), durationS, durationLabel);
  }
  // Stub kept for any straggler call sites that referenced the old close
  // function; HudConfirm now manages its own close lifecycle.
  function _closeBanConfirm() { /* no-op; HudConfirm self-closes */ }

  // 2026-10-29：撤回單則。與「黑名單」的差別是它不寫入任何規則——
  // 只把這一則從大螢幕拿下來，發話的人與後續訊息都不受影響。
  // API 呼叫走共用的 AdminModeration；確認在這裡也省了（同上理由）。
  async function _recallMessage() {
    const entry = _state.entry;
    const id = entry && entry.data && entry.data.message_id;
    if (!id) return;
    const result = await window.AdminModeration.recall(id);
    if (!result.ok) {
      window.showToast && window.showToast(ServerI18n.t("lfRecallFailed"), false);
      return;
    }
    window.showToast && window.showToast(ServerI18n.t("lfRecallDone"), true);
    _close();
  }

  async function _blacklistKeyword() {
    // 2026-10-29：改走共用的 AdminModeration.blockKeyword——確認、API、提示
    // 都在那層。原本這裡與訊息流各有一份確認文案（msgDrawerBlacklistKw* vs
    // lfBlock*），同一個操作兩種說法，正是「各自實作」必然的漂移。
    const text = _state.entry && _state.entry.data && _state.entry.data.text;
    if (!text) return;
    const ok = await window.AdminModeration.blockKeyword(text);
    if (ok) _close();
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
      window.showToast && window.showToast(ServerI18n.t("msgDrawerReplySent"), true);
      if (ta) ta.value = "";
    } catch (e) {
      window.showToast && window.showToast(ServerI18n.t("msgDrawerReplyFailed", { msg: e.message || "" }), false);
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
