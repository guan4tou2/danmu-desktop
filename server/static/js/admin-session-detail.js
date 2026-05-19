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
    annotations: [],
    activeAnnId: null,
    hoverTsMs: null,
  };
  let _hashListenerBound = false;

  // Annotation label spec — kept in lockstep with admin-brief-0518.jsx
  // (design v4 2026-05-18). Shape glyph maps to CSS clip-path / border-radius.
  const ANN_LABEL_SPEC = {
    highlight: { icon: "★", color: "var(--color-primary)", label: "HIGHLIGHT", shape: "star" },
    vote:      { icon: "⊷", color: "var(--hud-amber)", label: "VOTE",      shape: "circle" },
    note:      { icon: "●", color: "var(--color-text-muted)", label: "NOTE",      shape: "circle" },
    warning:   { icon: "!", color: "var(--hud-crimson)", label: "WARNING",   shape: "square" },
  };

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
          <div class="admin-v2-kicker">SESSION DETAIL · 切片明細 · DENSITY TIMELINE</div>
          <div class="admin-v2-title" data-sd-title>場次詳情</div>
          <p class="admin-v2-note">展開單一資料切片：密度時間軸、訊息逐則、投票統計。內容唯讀（場次結束即定型）。</p>
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

            <!-- density timeline + annotation overlay -->
            <div class="admin-sd-timeline-wrap" data-sd-timeline-wrap hidden>
              <div class="admin-v2-monolabel admin-sd-timeline-head" style="margin-bottom:10px">
                <span>DENSITY TIMELINE · 每分鐘訊息密度</span>
                <span class="admin-sd-peak-marker" data-sd-peak-label></span>
                <span class="admin-sd-timeline-spacer"></span>
                <span class="admin-sd-ann-count" data-sd-ann-count></span>
                <button type="button" class="admin-sd-ann-add" data-sd-action="add-annotation">+ 加註記</button>
              </div>
              <div class="admin-sd-timeline-inner" data-sd-timeline-inner>
                <div class="admin-sd-timeline" data-sd-timeline></div>
                <div class="admin-sd-ann-layer" data-sd-ann-layer aria-hidden="true"></div>
                <div class="admin-sd-ann-hover" data-sd-ann-hover hidden></div>
              </div>
              <div class="admin-sd-timeline-axis" data-sd-timeline-axis></div>
              <div class="admin-sd-ann-legend" data-sd-ann-legend></div>
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

            <!-- annotations panel (design v4 brief 0518-1, 2026-05-18) -->
            <section class="admin-sd-card admin-sd-ann-card">
              <div class="admin-sd-card-head">
                <span class="admin-v2-monolabel" data-sd-ann-head>ANNOTATIONS</span>
                <span class="admin-sd-card-head-spacer"></span>
                <button type="button" class="admin-sd-ann-card-add" data-sd-action="add-annotation">+ 新增</button>
              </div>
              <div class="admin-sd-ann-list" data-sd-ann-list>
                <div class="admin-sd-ann-empty">
                  <div class="admin-sd-ann-empty-icon">📌</div>
                  <div class="admin-sd-ann-empty-t">尚無註記</div>
                  <div class="admin-sd-ann-empty-s">時間軸 hover 任意位置 · 點 + 新增。</div>
                </div>
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
      _fetchAnnotations();
    } catch (e) {
      _setLoading(false);
      _showError(`無法載入場次：${e.message || "未知錯誤"}`);
    }
  }

  async function _fetchAnnotations() {
    if (!_state.sessionId) return;
    try {
      const r = await fetch(
        `/admin/replay/annotations?session_id=${encodeURIComponent(_state.sessionId)}`,
        { credentials: "same-origin" }
      );
      if (!r.ok) return;
      const data = await r.json();
      _state.annotations = Array.isArray(data.annotations) ? data.annotations : [];
      _renderAnnotations();
    } catch (_) { /* silent — annotation panel falls back to empty */ }
  }

  function _sessionDurationMs() {
    const sess = _state.session;
    if (!sess) return 0;
    if (sess.duration_s) return Math.round(sess.duration_s * 1000);
    if (sess.duration)   return Math.round(sess.duration * 1000);
    const start = sess.started_at || sess.start_time;
    const end = sess.ended_at || sess.end_time;
    if (start && end) {
      try { return Math.max(0, new Date(end) - new Date(start)); } catch (_) { return 0; }
    }
    // For an in-progress session, derive from density length (per-minute bars).
    if (_state.density && _state.density.length) return _state.density.length * 60 * 1000;
    return 0;
  }

  function _fmtTsMs(tsMs) {
    const s = Math.floor(tsMs / 1000);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    const pad = (n) => String(n).padStart(2, "0");
    if (h > 0) return `${pad(h)}:${pad(m)}:${pad(sec)}`;
    return `${pad(m)}:${pad(sec)}`;
  }

  // ── state setters ─────────────────────────────────────────────────────────

  function _setLoading(on) {
    _state.loading = on;
    const loadEl = document.querySelector("[data-sd-loading]");
    const errEl = document.querySelector("[data-sd-error]");
    if (loadEl) loadEl.hidden = !on;
    if (errEl && on) errEl.hidden = true;
    // Skeleton chart preview during load (design v4 2026-05-18) — shows
    // chart-shaped layout placeholder while the density timeline fetches.
    // Avoids the "blank page → suddenly full content" jank.
    const tlWrap = document.querySelector("[data-sd-timeline-wrap]");
    if (tlWrap && window.AdminSkeletons) {
      let skel = tlWrap.querySelector("[data-sd-timeline-skel]");
      if (on) {
        tlWrap.hidden = false;
        if (!skel) {
          skel = window.AdminSkeletons.chart();
          skel.setAttribute("data-sd-timeline-skel", "1");
          tlWrap.appendChild(skel);
        }
      } else if (skel) {
        skel.remove();
      }
    }
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
    _renderAnnotations();
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

  // ── annotations (design v4 brief 0518-1, 2026-05-18) ──────────────────────

  function _renderAnnotations() {
    const anns = _state.annotations || [];
    const durMs = _sessionDurationMs();
    const countEl = document.querySelector("[data-sd-ann-count]");
    if (countEl) countEl.textContent = anns.length ? `${anns.length} ANNOTATIONS` : "";
    const headEl = document.querySelector("[data-sd-ann-head]");
    if (headEl) headEl.textContent = anns.length ? `ANNOTATIONS · ${anns.length}` : "ANNOTATIONS";

    // ── marker layer ───────────────────────────────────────────────
    const layer = document.querySelector("[data-sd-ann-layer]");
    if (layer) {
      if (!durMs || anns.length === 0) {
        layer.innerHTML = "";
      } else {
        layer.innerHTML = anns.map(function (a) {
          const spec = ANN_LABEL_SPEC[a.label] || ANN_LABEL_SPEC.note;
          const leftPct = Math.min(100, Math.max(0, (a.ts_ms / durMs) * 100));
          const isActive = a.id === _state.activeAnnId;
          return `
            <button type="button"
              class="admin-sd-ann-marker is-shape-${spec.shape}${isActive ? " is-active" : ""}"
              data-sd-ann-marker="${escapeHtml(a.id)}"
              style="left:${leftPct.toFixed(2)}%;--ann-color:${spec.color}"
              title="${escapeHtml(spec.label)} · ${_fmtTsMs(a.ts_ms)}"
              aria-label="${escapeHtml(spec.label)} at ${_fmtTsMs(a.ts_ms)}: ${escapeHtml(a.note || "")}">
              ${spec.shape === "square" ? `<span class="admin-sd-ann-marker-glyph">!</span>` : ""}
              ${isActive ? `<span class="admin-sd-ann-tip"><span style="color:${spec.color}">${spec.icon}</span> ${escapeHtml((a.note || "").slice(0, 40))}${(a.note || "").length > 40 ? "…" : ""}</span>` : ""}
            </button>`;
        }).join("");
      }
    }

    // ── legend ────────────────────────────────────────────────────
    const legendEl = document.querySelector("[data-sd-ann-legend]");
    if (legendEl) {
      legendEl.innerHTML = Object.keys(ANN_LABEL_SPEC).map(function (key) {
        const spec = ANN_LABEL_SPEC[key];
        const radius = spec.shape === "square" ? "2px" : spec.shape === "star" ? "0" : "50%";
        return `<span class="admin-sd-ann-legend-item">
          <span class="admin-sd-ann-legend-dot" style="background:${spec.color};border-radius:${radius}"></span>
          <span class="admin-sd-ann-legend-label">${spec.label}</span>
        </span>`;
      }).join("");
    }

    // ── list panel ────────────────────────────────────────────────
    const listEl = document.querySelector("[data-sd-ann-list]");
    if (!listEl) return;
    if (anns.length === 0) {
      listEl.innerHTML = `
        <div class="admin-sd-ann-empty">
          <div class="admin-sd-ann-empty-icon">📌</div>
          <div class="admin-sd-ann-empty-t">尚無註記</div>
          <div class="admin-sd-ann-empty-s">時間軸 hover 任意位置 · 點 + 新增。</div>
        </div>`;
      return;
    }
    listEl.innerHTML = anns.map(function (a) {
      const spec = ANN_LABEL_SPEC[a.label] || ANN_LABEL_SPEC.note;
      const isActive = a.id === _state.activeAnnId;
      const truncated = (a.note || "").length > 80;
      const preview = truncated ? (a.note || "").slice(0, 80) + "…" : (a.note || "");
      return `
        <div class="admin-sd-ann-row${isActive ? " is-active" : ""}" data-sd-ann-row="${escapeHtml(a.id)}">
          <span class="admin-sd-ann-ts" style="color:${spec.color}">${_fmtTsMs(a.ts_ms)}</span>
          <span class="admin-sd-ann-chip" style="--ann-color:${spec.color}">${spec.icon} ${spec.label}</span>
          <span class="admin-sd-ann-note">${escapeHtml(preview)}</span>
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${escapeHtml(a.id)}" aria-label="刪除註記" title="刪除">🗑</button>
        </div>`;
    }).join("");
  }

  function _showAddAnnotationModal(tsMs) {
    if (!_state.sessionId) return;
    const helper = window.HudConfirm;
    const fallbackPrompt = !helper;

    if (fallbackPrompt) {
      const note = window.prompt(`新增註記 @ ${_fmtTsMs(tsMs)}\n（label=note）`, "");
      if (note != null && note.trim()) _createAnnotation(tsMs, "note", note.trim());
      return;
    }

    let selectedLabel = "highlight";
    let noteVal = "";
    const body = document.createElement("div");
    body.className = "admin-sd-ann-modal-body";
    body.innerHTML = `
      <div class="admin-sd-ann-modal-row">
        <div class="admin-v2-monolabel">TIME</div>
        <div class="admin-sd-ann-modal-time">${_fmtTsMs(tsMs)}</div>
        <div class="admin-sd-ann-modal-hint">PRE-FILLED FROM TIMELINE HOVER POSITION</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-v2-monolabel">LABEL</div>
        <div class="admin-sd-ann-modal-labels" data-ann-modal-labels>
          ${Object.keys(ANN_LABEL_SPEC).map(function (key) {
            const spec = ANN_LABEL_SPEC[key];
            return `
              <button type="button" class="admin-sd-ann-modal-lbl${key === "highlight" ? " is-active" : ""}"
                data-ann-label="${key}" style="--ann-color:${spec.color}">
                <span class="admin-sd-ann-modal-lbl-icon">${spec.icon}</span>
                <span class="admin-sd-ann-modal-lbl-text">${spec.label}</span>
              </button>`;
          }).join("")}
        </div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-v2-monolabel">NOTE · ≤ 280 字</div>
        <textarea class="admin-sd-ann-modal-note" data-ann-modal-note
          placeholder="觀眾爆笑點、投票揭曉時刻、重要問答…" maxlength="280"></textarea>
        <div class="admin-sd-ann-modal-counter" data-ann-modal-counter>0 / 280</div>
      </div>`;
    body.addEventListener("click", function (e) {
      const lbl = e.target.closest("[data-ann-label]");
      if (!lbl) return;
      selectedLabel = lbl.dataset.annLabel;
      body.querySelectorAll(".admin-sd-ann-modal-lbl").forEach(function (b) {
        b.classList.toggle("is-active", b === lbl);
      });
    });
    const noteEl = body.querySelector("[data-ann-modal-note]");
    const counterEl = body.querySelector("[data-ann-modal-counter]");
    noteEl.addEventListener("input", function () {
      noteVal = noteEl.value;
      counterEl.textContent = `${noteVal.length} / 280`;
    });
    setTimeout(function () { noteEl && noteEl.focus(); }, 50);

    helper.open({
      icon: "📌",
      title: "新增註記",
      subtitle: "ADD ANNOTATION · TIMELINE MARKER",
      severity: "info",
      confirmLabel: "新增",
      cancelLabel: "取消",
      body: body,
      width: 460,
    }).then(function (ok) {
      if (ok) _createAnnotation(tsMs, selectedLabel, noteEl.value.trim());
    });
  }

  async function _createAnnotation(tsMs, label, note) {
    if (!_state.sessionId) return;
    try {
      const r = await (window.csrfFetch || fetch)("/admin/replay/annotations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          session_id: _state.sessionId,
          ts_ms: Math.max(0, Math.round(tsMs)),
          label: label || "note",
          note: note || "",
        }),
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const data = await r.json();
      if (data.annotation) {
        _state.annotations.push(data.annotation);
        _state.annotations.sort(function (a, b) { return a.ts_ms - b.ts_ms; });
        _state.activeAnnId = data.annotation.id;
        _renderAnnotations();
        if (window.showToast) window.showToast("註記已新增", true);
      }
    } catch (e) {
      if (window.showToast) window.showToast(`新增失敗：${e.message || "未知錯誤"}`, false);
    }
  }

  async function _deleteAnnotation(annId) {
    if (!annId) return;
    try {
      const r = await (window.csrfFetch || fetch)(
        `/admin/replay/annotations/${encodeURIComponent(annId)}`,
        { method: "DELETE", credentials: "same-origin" }
      );
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      _state.annotations = _state.annotations.filter(function (a) { return a.id !== annId; });
      if (_state.activeAnnId === annId) _state.activeAnnId = null;
      _renderAnnotations();
      if (window.showToast) window.showToast("註記已刪除", true);
    } catch (e) {
      if (window.showToast) window.showToast(`刪除失敗：${e.message || "未知錯誤"}`, false);
    }
  }

  function _onTimelineHover(e) {
    const inner = document.querySelector("[data-sd-timeline-inner]");
    const hover = document.querySelector("[data-sd-ann-hover]");
    if (!inner || !hover) return;
    const rect = inner.getBoundingClientRect();
    if (!rect.width) return;
    const x = e.clientX - rect.left;
    const pct = Math.min(1, Math.max(0, x / rect.width));
    const durMs = _sessionDurationMs();
    if (!durMs) { hover.hidden = true; return; }
    const tsMs = Math.round(pct * durMs);
    _state.hoverTsMs = tsMs;
    hover.hidden = false;
    hover.style.left = `${(pct * 100).toFixed(2)}%`;
    hover.textContent = `+ 在 ${_fmtTsMs(tsMs)} 加註記`;
  }

  function _onTimelineLeave() {
    const hover = document.querySelector("[data-sd-ann-hover]");
    if (hover) hover.hidden = true;
    _state.hoverTsMs = null;
  }

  function _onTimelineClick(e) {
    if (e.target.closest("[data-sd-ann-marker]")) return; // handled separately
    const inner = document.querySelector("[data-sd-timeline-inner]");
    if (!inner) return;
    const rect = inner.getBoundingClientRect();
    if (!rect.width) return;
    const x = e.clientX - rect.left;
    const pct = Math.min(1, Math.max(0, x / rect.width));
    const durMs = _sessionDurationMs();
    if (!durMs) return;
    _showAddAnnotationModal(Math.round(pct * durMs));
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
    } else if (action === "add-annotation") {
      // Use hover position if available, otherwise mid-session.
      const dur = _sessionDurationMs();
      const tsMs = _state.hoverTsMs != null ? _state.hoverTsMs : Math.round(dur / 2);
      _showAddAnnotationModal(tsMs);
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
        // Annotation delete (high priority, stops other handlers)
        const delBtn = e.target.closest("[data-sd-ann-del]");
        if (delBtn) {
          e.stopPropagation();
          _deleteAnnotation(delBtn.dataset.sdAnnDel);
          return;
        }
        // Annotation marker → activate + scroll list row into view
        const marker = e.target.closest("[data-sd-ann-marker]");
        if (marker) {
          e.stopPropagation();
          _state.activeAnnId = marker.dataset.sdAnnMarker;
          _renderAnnotations();
          const row = document.querySelector(`[data-sd-ann-row="${_state.activeAnnId}"]`);
          if (row && row.scrollIntoView) row.scrollIntoView({ block: "nearest", behavior: "smooth" });
          return;
        }
        // Annotation list row → activate marker
        const annRow = e.target.closest("[data-sd-ann-row]");
        if (annRow) {
          _state.activeAnnId = annRow.dataset.sdAnnRow;
          _renderAnnotations();
          return;
        }
        // Timeline click → open add modal (if not on a marker)
        const tlInner = e.target.closest("[data-sd-timeline-inner]");
        if (tlInner) {
          _onTimelineClick(e);
          return;
        }
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
      // Timeline hover for "+ add" CTA
      page.addEventListener("mousemove", function (e) {
        if (e.target.closest("[data-sd-timeline-inner]")) _onTimelineHover(e);
      });
      page.addEventListener("mouseleave", function (e) {
        if (e.target.closest && e.target.closest("[data-sd-timeline-inner]")) _onTimelineLeave();
      }, true);
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
