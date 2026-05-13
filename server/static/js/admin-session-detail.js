/**
 * Admin · Session Detail page (prototype admin-batch-replay / session deep-dive).
 *
 * Shows replay analysis for a single session: density timeline, message list,
 * stats panel, and export actions.
 *
 * Route: #/session-detail?id=<session_id>
 * PAGE_ID: sec-session-detail-overview
 *
 * Session ID is read from `window.location.hash` on every hashchange.
 * API: GET /admin/sessions/<session_id>  →  { session, records, density }
 *
 * Loaded as <script defer> in admin.html.
 * Globals: csrfFetch, showToast, AdminUtils, DANMU_CONFIG
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-session-detail-overview";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // ── state ─────────────────────────────────────────────────────────────────
  let _state = {
    sessionId: null,
    session: null,
    records: [],
    density: [],
    loading: false,
    error: null,
    playbackSpeed: 1,
  };
  let _hashListenerBound = false;

  // ── helpers ───────────────────────────────────────────────────────────────

  /** Parse ?id=xxx from a hash like "#/session-detail?id=sess_abc" */
  function _parseSessionId() {
    const hash = window.location.hash || "";
    const idx = hash.indexOf("?");
    if (idx === -1) return null;
    const qs = hash.slice(idx + 1);
    const params = new URLSearchParams(qs);
    return params.get("id") || null;
  }

  function _fmtTimestamp(iso) {
    if (!iso) return "—";
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return String(iso);
      const pad = (n) => String(n).padStart(2, "0");
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    } catch (_) { return String(iso); }
  }

  function _fmtDuration(seconds) {
    if (!seconds || seconds < 0) return "—";
    const s = Math.round(Number(seconds));
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    if (h > 0) return `${h}h ${m}m ${sec}s`;
    if (m > 0) return `${m}m ${sec}s`;
    return `${sec}s`;
  }

  /** Relative offset from session start, e.g. "+02:34" */
  function _fmtOffset(recordIso, startIso) {
    if (!recordIso || !startIso) return "";
    try {
      const diff = Math.max(0, Math.round((new Date(recordIso) - new Date(startIso)) / 1000));
      const m = Math.floor(diff / 60);
      const s = diff % 60;
      return `+${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    } catch (_) { return ""; }
  }

  function _fmtNum(n) {
    const v = Number(n);
    if (isNaN(v)) return "—";
    return v.toLocaleString();
  }

  /** Dot color based on a fingerprint string (simple hash → hue). */
  function _fpColor(fp) {
    if (!fp) return "#64748b";
    let h = 0;
    for (let i = 0; i < fp.length; i++) h = (h * 31 + fp.charCodeAt(i)) >>> 0;
    const hue = h % 360;
    return `hsl(${hue}, 60%, 60%)`;
  }

  // ── HTML builders ─────────────────────────────────────────────────────────

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-sd-page hud-page-stack lg:col-span-2">
        <!-- Page header -->
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">SESSION DETAIL · 場次深度分析 / 回放</div>
          <div class="admin-v2-title" data-sd-title>場次詳情</div>
          <p class="admin-v2-note">選取單場次的密度時間軸、逐則訊息與統計。</p>
        </div>

        <div class="admin-sd-grid">
          <!-- ── LEFT: main content ────────────────────────────────── -->
          <div class="admin-sd-main" data-sd-main>
            <!-- breadcrumb -->
            <nav class="admin-sd-breadcrumb" aria-label="上一頁">
              <a href="#" class="admin-sd-back-link" data-sd-action="back">← 返回場次列表</a>
            </nav>

            <!-- loading / error states -->
            <div class="admin-sd-loading" data-sd-loading hidden>
              <div class="admin-sd-loading-spinner" aria-hidden="true"></div>
              <span>載入場次資料中…</span>
            </div>
            <div class="admin-sd-error" data-sd-error hidden>
              <span data-sd-error-msg></span>
              <button type="button" class="admin-sd-btn" data-sd-action="retry" style="margin-left:12px">↻ 重試</button>
            </div>

            <!-- session header (hidden until loaded) -->
            <div class="admin-sd-session-header" data-sd-session-header hidden>
              <div class="admin-sd-session-id" data-sd-session-id></div>
              <div class="admin-sd-session-meta">
                <span class="admin-sd-meta-item" data-sd-meta-start></span>
                <span class="admin-sd-meta-sep" aria-hidden="true">·</span>
                <span class="admin-sd-meta-item" data-sd-meta-duration></span>
              </div>
            </div>

            <!-- playback controls bar -->
            <div class="admin-sd-playback" data-sd-playback hidden>
              <div class="admin-v2-monolabel" style="margin-bottom:8px">PLAYBACK · 回放控制 (VISUAL ONLY)</div>
              <div class="admin-sd-pb-row">
                <div class="admin-sd-speed-group" role="group" aria-label="播放速度">
                  <button type="button" class="admin-sd-speed-btn" data-speed="0.5">0.5×</button>
                  <button type="button" class="admin-sd-speed-btn is-active" data-speed="1">1×</button>
                  <button type="button" class="admin-sd-speed-btn" data-speed="2">2×</button>
                  <button type="button" class="admin-sd-speed-btn" data-speed="4">4×</button>
                </div>
                <div class="admin-sd-pb-time" data-sd-pb-time>—</div>
                <div class="admin-sd-pb-note">← 在歷史頁面可進行實際回放</div>
              </div>
            </div>

            <!-- density timeline -->
            <div class="admin-sd-timeline-wrap" data-sd-timeline-wrap hidden>
              <div class="admin-v2-monolabel" style="margin-bottom:10px">
                DENSITY TIMELINE · 每分鐘訊息密度
                <span class="admin-sd-peak-marker" data-sd-peak-label></span>
              </div>
              <div class="admin-sd-timeline" data-sd-timeline></div>
              <div class="admin-sd-timeline-axis" data-sd-timeline-axis></div>
            </div>

            <!-- messages list -->
            <div class="admin-sd-msgs-wrap" data-sd-msgs-wrap hidden>
              <div class="admin-v2-monolabel" style="margin-bottom:8px">訊息 (最多顯示 200 則)</div>
              <div class="admin-sd-msgs-list" data-sd-msgs-list></div>
            </div>
          </div>

          <!-- ── RIGHT: stats rail ─────────────────────────────────── -->
          <aside class="admin-sd-rail" data-sd-rail>
            <!-- stats panel -->
            <section class="admin-sd-card" data-sd-stats-card>
              <div class="admin-sd-card-head">
                <span class="admin-v2-monolabel">統計</span>
              </div>
              <div class="admin-sd-kv-list">
                <div class="admin-sd-kv"><span class="k">訊息數</span><span class="v" data-sd-stat="msg_count">—</span></div>
                <div class="admin-sd-kv"><span class="k">觀眾數</span><span class="v" data-sd-stat="viewer_count">—</span></div>
                <div class="admin-sd-kv"><span class="k">時長</span><span class="v" data-sd-stat="duration">—</span></div>
                <div class="admin-sd-kv"><span class="k">開始</span><span class="v" data-sd-stat="started_at">—</span></div>
                <div class="admin-sd-kv"><span class="k">結束</span><span class="v" data-sd-stat="ended_at">—</span></div>
              </div>
            </section>

            <!-- actions -->
            <section class="admin-sd-card">
              <div class="admin-sd-card-head">
                <span class="admin-v2-monolabel">操作</span>
              </div>
              <div class="admin-sd-actions">
                <button type="button" class="admin-sd-action-btn admin-sd-action-btn--accent" data-sd-action="export-json">
                  ↓ 匯出 JSON
                </button>
                <button type="button" class="admin-sd-action-btn" data-sd-action="go-history">
                  → 在歷史頁查看
                </button>
              </div>
            </section>

            <!-- top keywords -->
            <section class="admin-sd-card">
              <div class="admin-sd-card-head">
                <span class="admin-v2-monolabel">TOP 關鍵字</span>
              </div>
              <div class="admin-sd-keywords" data-sd-keywords>
                <span class="admin-sd-empty-note">無資料</span>
              </div>
            </section>
          </aside>
        </div>
      </div>
    `;
  }

  // ── fetch ─────────────────────────────────────────────────────────────────

  async function _fetchSession(sessionId) {
    if (!sessionId) { _showError("缺少場次 ID"); return; }
    _setLoading(true);
    try {
      // Try history-derived sessions first; fall back to lifecycle archive.
      let r = await fetch(`/admin/sessions/${encodeURIComponent(sessionId)}`, {
        credentials: "same-origin",
      });
      if (r.status === 404) {
        r = await fetch(`/admin/session/archive/${encodeURIComponent(sessionId)}`, {
          credentials: "same-origin",
        });
      }
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const data = await r.json();
      _state.session = data.session || null;
      _state.records = data.records || [];
      _state.density = data.density || [];
      _setLoading(false);
      _renderAll();
    } catch (e) {
      _setLoading(false);
      _showError(`無法載入場次：${e.message || "未知錯誤"}`);
    }
  }

  // ── state setters ─────────────────────────────────────────────────────────

  function _setLoading(on) {
    _state.loading = on;
    const loadEl = document.querySelector("[data-sd-loading]");
    const errEl = document.querySelector("[data-sd-error]");
    if (loadEl) loadEl.hidden = !on;
    if (errEl && on) errEl.hidden = true;
  }

  function _showError(msg) {
    _state.error = msg;
    const errEl = document.querySelector("[data-sd-error]");
    const msgEl = document.querySelector("[data-sd-error-msg]");
    if (errEl) errEl.hidden = false;
    if (msgEl) msgEl.textContent = msg;
    // Also hide content sections
    ["data-sd-session-header", "data-sd-playback", "data-sd-timeline-wrap", "data-sd-msgs-wrap"].forEach(function (attr) {
      const el = document.querySelector(`[${attr}]`);
      if (el) el.hidden = true;
    });
  }

  // ── render ────────────────────────────────────────────────────────────────

  function _renderAll() {
    _renderHeader();
    _renderPlayback();
    _renderStats();
    _renderTimeline();
    _renderMessages();
    _renderKeywords();
    // Show error section cleared
    const errEl = document.querySelector("[data-sd-error]");
    if (errEl) errEl.hidden = true;
  }

  function _renderHeader() {
    const sess = _state.session;
    const hdrEl = document.querySelector("[data-sd-session-header]");
    if (!hdrEl) return;
    hdrEl.hidden = false;

    const idEl = document.querySelector("[data-sd-session-id]");
    const startEl = document.querySelector("[data-sd-meta-start]");
    const durEl = document.querySelector("[data-sd-meta-duration]");
    const titleEl = document.querySelector("[data-sd-title]");

    const sid = (sess && (sess.session_id || sess.id)) || _state.sessionId || "—";
    if (idEl) idEl.textContent = sid;
    if (startEl) startEl.textContent = _fmtTimestamp(sess && (sess.started_at || sess.start_time));
    if (durEl) durEl.textContent = _fmtDuration(sess && (sess.duration_s || sess.duration));
    if (titleEl) titleEl.textContent = `場次 ${String(sid).slice(-8)}`;
  }

  function _renderPlayback() {
    const pbEl = document.querySelector("[data-sd-playback]");
    if (!pbEl) return;
    pbEl.hidden = false;

    const sess = _state.session;
    const start = sess && (sess.started_at || sess.start_time);
    const end = sess && (sess.ended_at || sess.end_time);
    const timeEl = document.querySelector("[data-sd-pb-time]");
    if (timeEl) {
      timeEl.textContent = start ? `${_fmtTimestamp(start)} / ${end ? _fmtTimestamp(end) : "進行中"}` : "—";
    }
  }

  function _renderStats() {
    const sess = _state.session;
    if (!sess) return;

    const set = function (key, val) {
      const el = document.querySelector(`[data-sd-stat="${key}"]`);
      if (el) el.textContent = val;
    };

    set("msg_count", _fmtNum(sess.msg_count || sess.message_count));
    set("viewer_count", _fmtNum(sess.viewer_count));
    set("duration", _fmtDuration(sess.duration_s || sess.duration));
    set("started_at", _fmtTimestamp(sess.started_at || sess.start_time));
    set("ended_at", _fmtTimestamp(sess.ended_at || sess.end_time) || "進行中");
  }

  function _renderTimeline() {
    const wrapEl = document.querySelector("[data-sd-timeline-wrap]");
    const tlEl = document.querySelector("[data-sd-timeline]");
    const axisEl = document.querySelector("[data-sd-timeline-axis]");
    const peakEl = document.querySelector("[data-sd-peak-label]");
    if (!wrapEl || !tlEl || !axisEl) return;

    const density = _state.density;
    if (!density || density.length === 0) {
      wrapEl.hidden = true;
      return;
    }
    wrapEl.hidden = false;

    const maxVal = Math.max(1, ...density);
    let peakIdx = 0;
    density.forEach(function (v, i) { if (v > density[peakIdx]) peakIdx = i; });

    // Build bars
    const bars = density.map(function (v, i) {
      const pct = Math.max(2, Math.round((v / maxVal) * 100));
      const isPeak = i === peakIdx;
      return `<div class="admin-sd-bar${isPeak ? " is-peak" : ""}" style="height:${pct}%" title="${v} 則 · 第 ${i + 1} 分鐘" aria-label="${v} 則"></div>`;
    }).join("");
    tlEl.innerHTML = bars;

    // Build axis labels: start / midpoint / end
    const sess = _state.session;
    const startLabel = _fmtTimestamp(sess && (sess.started_at || sess.start_time)).slice(11, 16) || "00:00";
    const endLabel = _fmtTimestamp(sess && (sess.ended_at || sess.end_time)).slice(11, 16) || "";
    const midLabel = density.length > 2 ? `+${Math.round(density.length / 2)}min` : "";
    axisEl.innerHTML = `
      <span class="admin-sd-axis-label">${escapeHtml(startLabel)}</span>
      <span class="admin-sd-axis-label" style="text-align:center">${escapeHtml(midLabel)}</span>
      <span class="admin-sd-axis-label" style="text-align:right">${escapeHtml(endLabel)}</span>
    `;

    if (peakEl) {
      peakEl.textContent = `· 峰值 ${density[peakIdx]} 則 @ +${peakIdx}min`;
    }
  }

  function _renderMessages() {
    const wrapEl = document.querySelector("[data-sd-msgs-wrap]");
    const listEl = document.querySelector("[data-sd-msgs-list]");
    if (!wrapEl || !listEl) return;

    const records = _state.records.slice(0, 200);
    if (records.length === 0) {
      wrapEl.hidden = true;
      return;
    }
    wrapEl.hidden = false;

    const sess = _state.session;
    const startIso = sess && (sess.started_at || sess.start_time);

    listEl.innerHTML = records.map(function (r) {
      const fp = r.fingerprint || r.fp || "";
      const fpShort = fp.slice(0, 8) || "????????";
      const color = _fpColor(fp);
      const offset = _fmtOffset(r.timestamp || r.created_at, startIso);
      const text = escapeHtml(r.text || r.message || r.content || "");
      return `
        <div class="admin-sd-msg-row">
          <span class="admin-sd-msg-dot" style="background:${color}" aria-hidden="true"></span>
          <span class="admin-sd-msg-fp" title="${escapeHtml(fp)}">${escapeHtml(fpShort)}</span>
          <span class="admin-sd-msg-offset">${escapeHtml(offset)}</span>
          <span class="admin-sd-msg-text">${text}</span>
        </div>
      `;
    }).join("");
  }

  function _renderKeywords() {
    const kwEl = document.querySelector("[data-sd-keywords]");
    if (!kwEl) return;

    const records = _state.records;
    if (!records || records.length === 0) {
      kwEl.innerHTML = '<span class="admin-sd-empty-note">無資料</span>';
      return;
    }

    // Count word frequency (simple split on whitespace/punctuation, CJK chars count as tokens)
    const freq = {};
    records.forEach(function (r) {
      const txt = (r.text || r.message || r.content || "").replace(/[,，。！？「」【】()（）\s]+/g, " ").trim();
      if (!txt) return;
      // Split on whitespace; CJK bigrams
      txt.split(" ").forEach(function (token) {
        const t = token.trim();
        if (t.length < 2) return;
        freq[t] = (freq[t] || 0) + 1;
      });
    });

    const sorted = Object.keys(freq).sort(function (a, b) { return freq[b] - freq[a]; }).slice(0, 10);
    if (sorted.length === 0) {
      kwEl.innerHTML = '<span class="admin-sd-empty-note">無資料</span>';
      return;
    }

    const maxFreq = freq[sorted[0]] || 1;
    kwEl.innerHTML = sorted.map(function (w) {
      const pct = Math.round((freq[w] / maxFreq) * 100);
      return `
        <div class="admin-sd-kw-row">
          <span class="admin-sd-kw-label">${escapeHtml(w)}</span>
          <span class="admin-sd-kw-bar" style="width:${pct}%" aria-hidden="true"></span>
          <span class="admin-sd-kw-count">${freq[w]}</span>
        </div>
      `;
    }).join("");
  }

  // ── actions ───────────────────────────────────────────────────────────────

  function _handleAction(action, target) {
    if (action === "back") {
      window.location.hash = "#/sessions";
    } else if (action === "retry") {
      if (_state.sessionId) _fetchSession(_state.sessionId);
    } else if (action === "export-json") {
      const sess = _state.session;
      if (!sess) return;
      // Use hours=1 as a proxy — in production this would be per-session export
      const url = `/admin/history/export?format=JSON&hours=1&session_id=${encodeURIComponent(_state.sessionId || "")}`;
      window.open(url, "_blank", "noopener");
    } else if (action === "go-history") {
      window.location.hash = "#/history";
    }
  }

  function _handleSpeedClick(speedVal) {
    _state.playbackSpeed = speedVal;
    const btns = document.querySelectorAll(".admin-sd-speed-btn");
    btns.forEach(function (btn) {
      const v = parseFloat(btn.dataset.speed);
      btn.classList.toggle("is-active", v === speedVal);
    });
  }

  // ── hash routing ──────────────────────────────────────────────────────────

  function _onHashChange() {
    const hash = window.location.hash || "";
    if (hash.indexOf("/session-detail") === -1) return;

    const newId = _parseSessionId();
    if (!newId) {
      _state.sessionId = null;
      _showError("請從場次列表選擇一個場次");
      return;
    }
    _state.sessionId = newId;
    _fetchSession(newId);
  }

  // ── init ──────────────────────────────────────────────────────────────────

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid) return;

    let page = document.getElementById(PAGE_ID);
    if (!page) {
      grid.insertAdjacentHTML("beforeend", buildSection());
      page = document.getElementById(PAGE_ID);
    }

    if (page && page.dataset.sdBound !== "1") {
      page.dataset.sdBound = "1";
      // Delegated click handler
      page.addEventListener("click", function (e) {
        // Action buttons (data-sd-action)
        const actionBtn = e.target.closest("[data-sd-action]");
        if (actionBtn) {
          e.preventDefault();
          _handleAction(actionBtn.dataset.sdAction, actionBtn);
          return;
        }
        // Speed buttons
        const speedBtn = e.target.closest(".admin-sd-speed-btn");
        if (speedBtn) {
          const v = parseFloat(speedBtn.dataset.speed);
          if (!isNaN(v)) _handleSpeedClick(v);
        }
      });
    }

    // Read session ID from current hash
    _state.sessionId = _parseSessionId();
    if (_state.sessionId) {
      _fetchSession(_state.sessionId);
    } else {
      _showError("請從場次列表選擇一個場次");
    }

    // Listen for hash changes to support in-page navigation
    if (!_hashListenerBound) {
      _hashListenerBound = true;
      window.addEventListener("hashchange", _onHashChange);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.DANMU_CONFIG || !window.DANMU_CONFIG.session || !window.DANMU_CONFIG.session.logged_in) return;
    const observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
        const hash = window.location.hash || "";
        if (hash.indexOf("/session-detail") !== -1) init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true, subtree: true,
    });
    const hash = window.location.hash || "";
    if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID) && hash.indexOf("/session-detail") !== -1) {
      init();
    }
    window.addEventListener("admin-route-changed", function (ev) {
      const route = ev && ev.detail && ev.detail.route;
      if (route === "session-detail") init();
    });
    window.addEventListener("hashchange", function () {
      const cur = window.location.hash || "";
      if (cur.indexOf("/session-detail") !== -1) init();
    });
  });
})();
