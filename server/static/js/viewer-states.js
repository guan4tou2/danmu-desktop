/**
 * Viewer · special states (Group B P3, 2026-04-27).
 *
 * Mirrors:
 *   - docs/designs/design-v2/components/admin-batch4.jsx ViewerBanned
 *   - docs/designs/design-v2/components/admin-batch9.jsx ViewerPollThankYou
 *
 * Three full-screen viewer states that overlay the normal /fire page:
 *
 *   1. ViewerBanned — IP/fingerprint blocked, replaces the send form
 *      with a HUD-styled BLOCKED panel + identifier + reason.
 *
 *   2. ViewerPollThankYou — submitted a poll vote, shows confirmation
 *      with recap card + live participation count + 「回到聊天」 button.
 *
 *   3. ViewerRateLimited — /fire returns HTTP 429, show cooldown screen.
 *
 * Triggers:
 *   - URL param `?state=banned` or `?state=thankyou` → preview / demo
 *   - 403 from /fire with error containing "block" or "ban" → ViewerBanned
 *   - Successful fire when poll is active AND text matches option key →
 *     ViewerPollThankYou (wired in main.js after fire 200)
 *   - 429 from /fire → ViewerRateLimited
 *
 * Loaded on the viewer page (/fire) only — admin pages skip via guard.
 */
(function () {
  "use strict";

  const ROOT_ID = "viewer-state-overlay";

  function _html(strings) {
    // Tag-template helper to keep IDE syntax-highlight on long HTML strings.
    return Array.prototype.join.call(strings, "");
  }

  // ── ViewerBanned ─────────────────────────────────────────────────

  function _renderBanned(opts) {
    const fp = (opts && opts.fp) || "—";
    const fpShort = fp === "—" ? "—" : (fp.startsWith("fp:") ? fp : "fp:" + fp.slice(0, 8).toUpperCase());
    const reason = (opts && opts.reason) || "違反社群守則";
    const duration = (opts && opts.duration) || "本場活動結束";
    return `
      <div class="viewer-state viewer-state--banned" data-vs-key="banned">
        <div class="viewer-state-frame"></div>
        <div class="viewer-state-corner viewer-state-corner--tl"></div>
        <div class="viewer-state-corner viewer-state-corner--tr"></div>
        <div class="viewer-state-corner viewer-state-corner--bl"></div>
        <div class="viewer-state-corner viewer-state-corner--br"></div>

        <div class="viewer-state-banned-icon">
          <span class="circle">⊘</span>
          <span class="slash" aria-hidden="true"></span>
        </div>

        <div class="viewer-state-kicker">BLOCKED · 已被禁言</div>
        <h2 class="viewer-state-title">你的訊息暫時無法送出</h2>
        <p class="viewer-state-desc">
          因違反活動社群守則，主辦方已暫停你發送彈幕的權限。<br>
          其他訊息仍可正常觀看，本次禁言只影響發送。
        </p>

        <div class="viewer-state-info">
          <div class="row"><span class="k">你的識別碼</span><span class="v">${fpShort}</span></div>
          <div class="row"><span class="k">禁言原因</span><span class="v">${_escape(reason)}</span></div>
          <div class="row"><span class="k">禁言時間</span><span class="v">${_escape(duration)}</span></div>
        </div>

        <div class="viewer-state-tip">
          <span class="kicker">覺得是誤判？</span>
          請在現場詢問工作人員，提供上面的識別碼。
        </div>
      </div>`;
  }

  // ── ViewerPollThankYou ───────────────────────────────────────────

  function _renderThankYou(opts) {
    const question = (opts && opts.question) || "—";
    const choice = (opts && opts.choice) || "—";
    const ts = new Date().toLocaleTimeString("zh-TW", { hour12: false });
    const fp = (opts && opts.fp) || "";
    const fpShort = fp ? "fp:" + fp.slice(0, 8) : "";
    const voteId = (opts && opts.voteId) || ("vote_" + Math.random().toString(36).slice(2, 8));
    return `
      <div class="viewer-state viewer-state--thankyou" data-vs-key="thankyou">
        <div class="viewer-state-thanks-icon">
          <span class="check">✓</span>
          <span class="ring ring-1"></span>
          <span class="ring ring-2"></span>
        </div>

        <h2 class="viewer-state-title viewer-state-title--center">已送出投票</h2>
        <p class="viewer-state-desc viewer-state-desc--center">
          結果會在主持人關閉投票後一起公佈，不會即時顯示。
        </p>

        <div class="viewer-state-recap">
          <div class="kicker">你的選擇</div>
          <div class="question">${_escape(question)}</div>
          <div class="choice">
            <span class="check">✓</span>
            <span class="lbl">${_escape(choice)}</span>
            <span class="ts">${ts}</span>
          </div>
          <div class="meta">
            <div><span class="dot is-good"></span>投票已記錄 · 不可重投</div>
            <div><span class="dot"></span>結果將在主持人關閉投票後公佈</div>
          </div>
        </div>

        <button type="button" class="viewer-state-action" data-vs-action="hide">← 回到聊天</button>
        ${voteId ? `<div class="viewer-state-trace">記錄編號 ${_escape(voteId)}${fpShort ? " · " + fpShort : ""}</div>` : ""}
      </div>`;
  }

  // ── ViewerRateLimited ───────────────────────────────────────────

  function _renderRateLimited(opts) {
    const retryAfter = Number((opts && opts.retryAfter) || 0);
    const retryText = retryAfter > 0 ? `${retryAfter} 秒後再試` : "請稍後再試";
    return `
      <div class="viewer-state viewer-state--ratelimit" data-vs-key="ratelimit">
        <div class="viewer-state-thanks-icon viewer-state-ratelimit-icon">
          <span class="check">⏱</span>
        </div>

        <div class="viewer-state-kicker viewer-state-kicker--warn">RATE LIMITED · 暫時限流</div>
        <h2 class="viewer-state-title viewer-state-title--center">訊息送太快了</h2>
        <p class="viewer-state-desc viewer-state-desc--center">
          為了避免刷屏，系統暫時限制發送頻率。<br>
          ${_escape(retryText)}
        </p>

        <button type="button" class="viewer-state-action viewer-state-action--warn" data-vs-action="hide">知道了</button>
      </div>`;
  }

  function _escape(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ── public API ───────────────────────────────────────────────────

  function _ensureRoot() {
    let root = document.getElementById(ROOT_ID);
    if (!root) {
      root = document.createElement("div");
      root.id = ROOT_ID;
      root.className = "viewer-state-root";
      document.body.appendChild(root);
      root.addEventListener("click", function (e) {
        const btn = e.target.closest("[data-vs-action]");
        if (!btn) return;
        if (btn.dataset.vsAction === "hide") _hide();
      });
    }
    return root;
  }

  function _showBanned(opts) {
    const root = _ensureRoot();
    root.innerHTML = _renderBanned(opts || {});
    document.body.dataset.viewerState = "banned";
  }

  function _showThankYou(opts) {
    const root = _ensureRoot();
    root.innerHTML = _renderThankYou(opts || {});
    document.body.dataset.viewerState = "thankyou";
  }

  function _showRateLimited(opts) {
    const root = _ensureRoot();
    root.innerHTML = _renderRateLimited(opts || {});
    document.body.dataset.viewerState = "ratelimit";
  }

  function _hide() {
    const root = document.getElementById(ROOT_ID);
    if (root) root.innerHTML = "";
    document.body.dataset.viewerState = "";
  }

  window.ViewerStates = {
    showBanned: _showBanned,
    showThankYou: _showThankYou,
    showRateLimited: _showRateLimited,
    hide: _hide,
  };

  // ── auto-trigger from URL params (preview / demo) ────────────────

  document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(location.search);
    const state = params.get("state");
    if (state === "banned") {
      _showBanned({
        fp: params.get("fp") || undefined,
        reason: params.get("reason") || undefined,
        duration: params.get("duration") || undefined,
      });
    } else if (state === "thankyou") {
      _showThankYou({
        question: params.get("q") || "示範題目：你最喜歡哪個主題包?",
        choice: params.get("choice") || "選項 A",
        fp: params.get("fp") || "",
      });
    } else if (state === "ratelimit") {
      _showRateLimited({
        retryAfter: Number(params.get("retry_after") || 0),
      });
    }
  });
})();
