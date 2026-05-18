/**
 * Overlay · Poll active + result-celebration variants (P3 Group B, 2026-04-27).
 *
 * Mirrors:
 *   - admin-batch4.jsx OverlayPollLive — full-bleed centered panel with
 *     question, A/B/C/D bars, leading chip, countdown, QR placeholder
 *   - admin-batch4.jsx OverlayResultCelebration — winner reveal with
 *     sweeping radial light, falling confetti, big winner letter
 *
 * Replaces the legacy 280px corner panel in overlay.js — same WS event
 * (`poll_update`) drives both, dispatched server-side from poll_service.
 *
 * Public API (called from overlay.js):
 *   window.OverlayPoll.render(data)  // data shape per /admin/poll/status
 *
 * Loaded as <script defer> BEFORE overlay.js so window.OverlayPoll exists
 * when overlay.js's poll_update handler fires.
 */
(function () {
  "use strict";

  const ROOT_ID = "poll-overlay-root";
  const COLORS = ["#22d3ee", "#a78bfa", "#fbbf24", "#86efac", "#fb7185", "#fde047"];

  let _autoDismissTimer = 0;
  let _countdownTimer = 0;

  function _esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function _ensureRoot() {
    let root = document.getElementById(ROOT_ID);
    if (!root) {
      root = document.createElement("div");
      root.id = ROOT_ID;
      root.className = "poll-overlay-root";
      document.body.appendChild(root);
    }
    return root;
  }

  function _clearTimers() {
    if (_autoDismissTimer) { clearTimeout(_autoDismissTimer); _autoDismissTimer = 0; }
    if (_countdownTimer) { clearInterval(_countdownTimer); _countdownTimer = 0; }
  }

  function _hide() {
    _clearTimers();
    const root = document.getElementById(ROOT_ID);
    if (root) root.innerHTML = "";
    document.body.dataset.overlayPoll = "";
  }

  // ── active state ─────────────────────────────────────────────────

  function _renderActive(data) {
    const options = Array.isArray(data.options) ? data.options : [];
    const total = options.reduce(function (s, o) { return s + (Number(o.count) || 0); }, 0);
    const maxCount = Math.max(1, options.reduce(function (m, o) {
      const c = Number(o.count) || 0; return c > m ? c : m;
    }, 0));
    const leading = options.reduce(function (best, o) {
      const c = Number(o.count) || 0;
      if (!best || c > best.count) return o;
      return best;
    }, null);
    const qNum = Number(data.current_index) >= 0 ? (Number(data.current_index) + 1) : 1;
    const qTotal = Number(data.question_count) || 1;

    const optionsHtml = options.map(function (o, i) {
      const c = COLORS[i % COLORS.length];
      const count = Number(o.count) || 0;
      const pct = total > 0 ? Math.round((count / total) * 100) : 0;
      const isLeading = leading && o.key === leading.key && count > 0;
      return `
        <div class="poll-overlay-row">
          <div class="poll-overlay-row-head">
            <span class="key" style="color:${c}">${_esc(o.key)}</span>
            <span class="lbl">${_esc(o.text || o.label || "")}</span>
            ${isLeading ? `<span class="lead" style="color:${c};border-color:${c}88;background:${c}33;">★ LEADING</span>` : ""}
            <span class="pct" style="color:${c}">${pct}%</span>
            <span class="votes">${count} 票</span>
          </div>
          <div class="poll-overlay-row-bar">
            <div class="poll-overlay-row-fill" style="width:${pct}%;background:linear-gradient(90deg, ${c}88, ${c});box-shadow:0 0 12px ${c}66;"></div>
          </div>
        </div>`;
    }).join("");

    return `
      <div class="poll-overlay poll-overlay--active">
        <div class="poll-overlay-topbar">
          <span class="dot"></span>
          <span class="kicker">POLL · LIVE</span>
          <span class="qnum">第 ${qNum} / ${qTotal} 題</span>
        </div>

        <div class="poll-overlay-panel">
          <div class="poll-overlay-meta">
            <span class="qq">QUESTION ${String(qNum).padStart(2, "0")}</span>
            <span class="counts">${total} votes</span>
          </div>
          <h2 class="poll-overlay-question">${_esc(data.question || "")}</h2>

          <div class="poll-overlay-rows">
            ${optionsHtml || '<div class="poll-overlay-empty">尚未有選項</div>'}
          </div>

          <div class="poll-overlay-foot" data-poll-foot>
            <div class="time" data-poll-time></div>
            <div class="time-bar" data-poll-time-bar><div class="fill" data-poll-time-fill></div></div>
            <div class="qr" data-poll-qr>
              <span class="badge">QR</span>
              <span class="hint">於手機投票</span>
            </div>
          </div>
        </div>

        <div class="poll-overlay-ticker">
          ● ${total} 已投票${data.time_limit_seconds ? "" : ""}
        </div>
      </div>`;
  }

  function _wireCountdown(data) {
    const limit = Number(data.time_limit_seconds) || 0;
    const startedAt = Number(data.started_at) || 0;
    const timeEl = document.querySelector("[data-poll-time]");
    const fillEl = document.querySelector("[data-poll-time-fill]");
    if (!timeEl || !fillEl) return;
    if (!limit || !startedAt) {
      timeEl.textContent = "—";
      fillEl.style.width = "0%";
      return;
    }
    function tick() {
      const remaining = Math.max(0, (startedAt + limit) - (Date.now() / 1000));
      const m = Math.floor(remaining / 60);
      const s = Math.floor(remaining % 60);
      timeEl.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
      const pct = limit > 0 ? Math.max(0, Math.min(100, (remaining / limit) * 100)) : 0;
      fillEl.style.width = pct.toFixed(1) + "%";
      if (remaining <= 0 && _countdownTimer) {
        clearInterval(_countdownTimer);
        _countdownTimer = 0;
      }
    }
    tick();
    _countdownTimer = setInterval(tick, 500);
  }

  // ── ended / celebration ──────────────────────────────────────────

  function _renderCelebration(data) {
    const options = Array.isArray(data.options) ? data.options : [];
    const total = options.reduce(function (s, o) { return s + (Number(o.count) || 0); }, 0);
    let winner = null;
    options.forEach(function (o) {
      const c = Number(o.count) || 0;
      if (!winner || c > winner.count) winner = { key: o.key, label: o.text || o.label || "", count: c };
    });
    if (!winner) winner = { key: "—", label: "—", count: 0 };
    const winnerPct = total > 0 ? Math.round((winner.count / total) * 100) : 0;
    const winnerColor = "#22d3ee";

    const confettiHtml = (function () {
      const palette = ["#22d3ee", "#fbbf24", "#86efac", "#a78bfa", "#fb7185", "#fde047"];
      let out = "";
      for (let i = 0; i < 24; i++) {
        const c = palette[i % palette.length];
        const left = ((i * 13 + 8) % 96);
        const top = -(5 + (i * 7) % 30);
        const size = 6 + (i % 3) * 2;
        const round = i % 2 ? "50%" : "1px";
        const delay = (i * 0.2).toFixed(2);
        const dur = (4 + (i % 5) * 0.8).toFixed(1);
        out += `<span class="confetti" style="left:${left}%;top:${top}%;width:${size}px;height:${size}px;background:${c};border-radius:${round};animation-delay:${delay}s;animation-duration:${dur}s"></span>`;
      }
      return out;
    })();

    return `
      <div class="poll-overlay poll-overlay--celebration">
        <div class="poll-overlay-sweep"></div>
        <div class="poll-overlay-confetti">${confettiHtml}</div>

        <div class="poll-overlay-celebration-top">
          <div class="kicker" style="color:${winnerColor}">★ POLL CLOSED · 投票結果 ★</div>
          <div class="question">${_esc(data.question || "")}</div>
        </div>

        <div class="poll-overlay-winner">
          <div class="winner-kicker">WINNER · 最高票</div>
          <div class="winner-circle" style="border-color:${winnerColor};box-shadow:0 0 60px ${winnerColor}66, inset 0 0 40px ${winnerColor}22;background:radial-gradient(circle, ${winnerColor}33 0%, ${winnerColor}11 60%, transparent 100%);">
            <span class="winner-letter" style="color:${winnerColor}">${_esc(winner.key)}</span>
          </div>
          <div class="winner-label">${_esc(winner.label)}</div>
          <div class="winner-stats">
            <span class="pct" style="color:${winnerColor}">${winnerPct}%</span>
            <span class="votes">${winner.count} / ${total} 票</span>
          </div>
        </div>

        <div class="poll-overlay-celebration-foot">
          ${total} 人參與投票
        </div>
      </div>`;
  }

  // ── render dispatcher ────────────────────────────────────────────

  function render(data) {
    if (!data) return;
    _clearTimers();
    const root = _ensureRoot();
    if (data.state === "idle") {
      _hide();
      return;
    }
    if (data.state === "ended") {
      root.innerHTML = _renderCelebration(data);
      document.body.dataset.overlayPoll = "celebration";
      // Auto-dismiss after 12s of celebration (gives camera time to capture).
      _autoDismissTimer = setTimeout(_hide, 12000);
      return;
    }
    // active (default)
    root.innerHTML = _renderActive(data);
    document.body.dataset.overlayPoll = "active";
    _wireCountdown(data);
  }

  window.OverlayPoll = {
    render: render,
    hide: _hide,
  };
})();
