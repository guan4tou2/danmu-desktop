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
    msgQuery: "",
    msgFilter: "all",
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

  // ── 版面（設計稿 10 · G2）────────────────────────────────────────
  //
  // 稿上四塊：頁首（‹ 紀錄與匯出／場次名／時間／重播＋匯出）、KPI 四格、
  // 搜尋列＋「全部／被擋下 N」分段、訊息表（時間戳／顏色點／內文／暱稱，
  // 被擋下的那幾列淡紅底＋刪除線＋標出是哪條規則擋的）。
  //
  // 退場的：
  //   · 回放控制列——它的標籤自己寫著「(VISUAL ONLY)」。四顆倍速鈕點了只會
  //     換 is-active，沒有任何東西在播
  //   · 右側 stats rail（五列 KV）——四格 KPI 已經講完同樣的事
  //   · 熱門關鍵字卡
  //
  // 保留但收進摺疊區的：密度時間軸與標記。稿上沒有，但標記有後端
  // （/admin/replay/annotations）與測試——把一個有實作的功能的唯一入口拿掉
  // 等於把功能廢掉，那超出「照版型實作」的範圍。

  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-sd-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title" data-sd-title>${ServerI18n.t("sessionDetailPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("sessionDetailPageNote")}</p>
        </div>

        <div class="admin-sd-loading" data-sd-loading hidden>
          <div class="admin-sd-loading-spinner" aria-hidden="true"></div>
          <span>${ServerI18n.t("sessionDetailLoadingText")}</span>
        </div>
        <div class="admin-sd-error" data-sd-error hidden>
          <span data-sd-error-msg></span>
          <button type="button" class="admin-ui-action admin-sd-retry-action" data-sd-action="retry">${ServerI18n.t("sessionDetailRetryBtn")}</button>
        </div>

        <article class="admin-sd-card admin-sd-header" data-sd-session-header hidden>
          <a class="admin-sd-back-link" href="#/history/sessions" data-sd-action="back">‹ ${ServerI18n.t("adminRouteTitle_history")}</a>
          <div class="admin-sd-name" data-sd-session-id></div>
          <div class="admin-sd-time"><span data-sd-meta-start></span> · <span data-sd-meta-duration></span></div>
          <div class="admin-sd-headactions">
            <button type="button" class="admin-ui-action" data-sd-action="replay">${ServerI18n.t("sessionsReplayBtn")}</button>
            <button type="button" class="admin-ui-action is-primary" data-sd-action="export">${ServerI18n.t("sessionsExportBtn")}</button>
          </div>
        </article>

        <div class="admin-sd-kpis" data-sd-kpis hidden>
          <div class="admin-sd-kpi"><div class="k">${ServerI18n.t("sessionDetailStatMsgCount")}</div><div class="v" data-sd-stat="msg_count">—</div></div>
          <div class="admin-sd-kpi"><div class="k">${ServerI18n.t("sessionDetailStatViewerCount")}</div><div class="v" data-sd-stat="viewer_count">—</div></div>
          <div class="admin-sd-kpi"><div class="k">${ServerI18n.t("sessionDetailStatPeak")}</div><div class="v" data-sd-stat="peak">—</div><div class="sub" data-sd-stat-sub="peak"></div></div>
          <div class="admin-sd-kpi"><div class="k">${ServerI18n.t("sessionDetailStatBlocked")}</div><div class="v" data-sd-stat="blocked">—</div></div>
        </div>

        <div class="admin-sd-msgs-wrap" data-sd-msgs-wrap hidden>
          <div class="admin-sd-msgbar">
            <input type="search" class="admin-ui-input admin-sd-search" data-sd-search
                   placeholder="${ServerI18n.t("sessionDetailSearchPlaceholder")}"
                   aria-label="${ServerI18n.t("sessionDetailSearchPlaceholder")}" />
            <span class="admin-sd-seg" role="group">
              <button type="button" class="is-active" data-sd-filter="all">${ServerI18n.t("sessionDetailFilterAll")}</button>
              <button type="button" data-sd-filter="blocked" data-sd-blocked-btn>${ServerI18n.t("sessionDetailStatBlocked")}</button>
            </span>
          </div>
          <div class="admin-sd-msgs-list" data-sd-msgs-list></div>
        </div>

        <details class="admin-sd-timeline-wrap" data-sd-timeline-wrap hidden>
          <summary class="admin-sd-timeline-summary">${ServerI18n.t("sessionDetailSecDensity")}</summary>
          <div class="admin-sd-timeline-head">
            <span class="admin-sd-peak-marker" data-sd-peak-label></span>
            <span class="admin-sd-timeline-spacer"></span>
            <span class="admin-sd-ann-count" data-sd-ann-count></span>
            <button type="button" class="admin-sd-ann-add" data-sd-action="add-annotation">${ServerI18n.t("sessionDetailAddAnnotationBtn")}</button>
          </div>
          <div class="admin-sd-timeline-inner" data-sd-timeline-inner>
            <div class="admin-sd-timeline" data-sd-timeline></div>
            <div class="admin-sd-ann-layer" data-sd-ann-layer aria-hidden="true"></div>
            <div class="admin-sd-ann-hover" data-sd-ann-hover hidden></div>
          </div>
          <div class="admin-sd-timeline-axis" data-sd-timeline-axis></div>
          <div class="admin-sd-ann-legend" data-sd-ann-legend></div>
          <div class="admin-sd-ann-list" data-sd-ann-list></div>
        </details>
      </div>
    `;
  }

  // ── fetch ─────────────────────────────────────────────────────────────────

  async function _fetchSession(sessionId) {
    if (!sessionId) { _showError(ServerI18n.t("sessionDetailErrMissingId")); return; }
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
      _showError(ServerI18n.t("sessionDetailErrLoadFailed", { msg: e.message || ServerI18n.t("sessionDetailUnknownError") }));
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

  /** 牆上時鐘（設計稿 10 · G2 的時間戳欄）。24 小時制——「下午01:44」比
      「13:44」長又難掃，而這一欄是拿來對時間軸的。 */
  function _fmtClock(iso) {
    const ms = Date.parse(iso || 0);
    if (Number.isNaN(ms)) return "—";
    const d = new Date(ms);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
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
    ["data-sd-session-header", "data-sd-kpis", "data-sd-timeline-wrap", "data-sd-msgs-wrap"].forEach(function (attr) {
      const el = document.querySelector(`[${attr}]`);
      if (el) el.hidden = true;
    });
  }

  // ── render ────────────────────────────────────────────────────────────────

  function _renderAll() {
    _renderHeader();
    _renderStats();
    _renderTimeline();
    _renderMessages();
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
    if (titleEl) titleEl.textContent = ServerI18n.t("sessionDetailTitleWithId", { id: String(sid).slice(-8) });
  }

  /** KPI 四格（設計稿 10 · G2）：訊息／觀眾／每分鐘高峰／被擋下。 */
  function _renderStats() {
    const sess = _state.session;
    if (!sess) return;
    const kpis = document.querySelector("[data-sd-kpis]");
    if (kpis) kpis.hidden = false;

    const set = function (key, val, sub) {
      const el = document.querySelector(`[data-sd-stat="${key}"]`);
      if (el) el.textContent = val;
      const subEl = document.querySelector(`[data-sd-stat-sub="${key}"]`);
      if (subEl) subEl.textContent = sub || "";
    };

    set("msg_count", _fmtNum(sess.msg_count));
    set("viewer_count", _fmtNum(sess.viewer_count));

    // 每分鐘高峰＋那一分鐘是幾點（稿上寫「86 (09:47)」）。density 是
    // 從場次開始算的每分鐘計數，所以峰值的時間＝開始時間 + N 分鐘。
    const density = Array.isArray(_state.density) ? _state.density : [];
    if (density.length) {
      let peak = 0;
      let peakIdx = 0;
      density.forEach(function (n, i) { if (n > peak) { peak = n; peakIdx = i; } });
      const startMs = Date.parse(sess.started_at || sess.start_time || 0);
      let clock = "";
      if (!Number.isNaN(startMs)) {
        const at = new Date(startMs + peakIdx * 60000);
        const pad = (n) => String(n).padStart(2, "0");
        clock = `${pad(at.getHours())}:${pad(at.getMinutes())}`;
      }
      set("peak", _fmtNum(peak), clock);
    } else {
      set("peak", "—", "");
    }

    const blocked = Number(sess.blocked_count) || 0;
    set("blocked", _fmtNum(blocked));
    const blockedBtn = document.querySelector("[data-sd-blocked-btn]");
    if (blockedBtn) {
      blockedBtn.textContent =
        ServerI18n.t("sessionDetailStatBlocked") + (blocked ? " " + blocked : "");
      blockedBtn.disabled = blocked === 0;
    }
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
      return `<div class="admin-sd-bar${isPeak ? " is-peak" : ""}" style="height:${pct}%" title="${ServerI18n.t("sessionDetailBarTitle", { count: v, minute: i + 1 })}" aria-label="${ServerI18n.t("sessionDetailBarAriaLabel", { count: v })}"></div>`;
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
      peakEl.textContent = ServerI18n.t("sessionDetailPeakLabel", { count: density[peakIdx], minute: peakIdx });
    }
  }

  /** 訊息表（設計稿 10 · G2）：時間戳／顏色點／內文／暱稱。

      被擋下的那幾列：淡紅底、內文刪除線、右側標出是哪條規則擋的。
      在這之前被擋的彈幕根本沒有留下紀錄，這一段是空的。 */
  function _visibleRecords() {
    const q = (_state.msgQuery || "").trim().toLowerCase();
    return _state.records.filter(function (r) {
      const blocked = (r.status || "shown") === "blocked";
      if (_state.msgFilter === "blocked" && !blocked) return false;
      if (!q) return true;
      return String(r.text || "").toLowerCase().indexOf(q) !== -1
        || String(r.nickname || "").toLowerCase().indexOf(q) !== -1;
    });
  }

  function _renderMessages() {
    const wrapEl = document.querySelector("[data-sd-msgs-wrap]");
    const listEl = document.querySelector("[data-sd-msgs-list]");
    if (!wrapEl || !listEl) return;
    if (!_state.records.length) { wrapEl.hidden = true; return; }
    wrapEl.hidden = false;

    const records = _visibleRecords().slice(0, 300);
    if (!records.length) {
      listEl.innerHTML = '<div class="admin-sd-msgs-empty">' +
        escapeHtml(ServerI18n.t("sessionDetailNoMatch")) + "</div>";
      return;
    }

    listEl.innerHTML = records.map(function (r) {
      const blocked = (r.status || "shown") === "blocked";
      const color = _fpColor(r.fingerprint || r.fp || "");
      const clock = _fmtClock(r.timestamp || r.created_at);
      const nick = String(r.nickname || "").trim();
      return `
        <div class="admin-sd-msg-row${blocked ? " is-blocked" : ""}">
          <span class="admin-sd-msg-time">${escapeHtml(clock)}</span>
          <span class="admin-sd-msg-dot" style="background:${color}" aria-hidden="true"></span>
          <span class="admin-sd-msg-text">${escapeHtml(r.text || "")}</span>
          ${blocked && r.blockedBy
            ? `<span class="admin-sd-msg-rule">${escapeHtml(ServerI18n.t("sessionDetailBlockedBy", { rule: r.blockedBy }))}</span>`
            : ""}
          <span class="admin-sd-msg-nick">${escapeHtml(nick || ServerI18n.t("audienceAnonymous"))}</span>
        </div>`;
    }).join("");
  }

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
      // D-6 批次二 (2026-07-29): 原本同一份 HTML 複製兩處，收斂為單一
      // AdminEmpty 呼叫（初始 markup 的靜態複本已移除）。
      listEl.innerHTML = "";
      const card = window.AdminEmpty.renderCustom({
        icon: "📌",
        title: ServerI18n.t("sessionDetailAnnEmptyTitle"),
        desc: ServerI18n.t("sessionDetailAnnEmptyDesc"),
      });
      card.dataset.emptyKind = "session-annotations";
      listEl.appendChild(card);
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
          <button type="button" class="admin-sd-ann-del" data-sd-ann-del="${escapeHtml(a.id)}" aria-label="${ServerI18n.t("sessionDetailAnnDeleteAria")}" title="${ServerI18n.t("sessionDetailAnnDeleteTitle")}">🗑</button>
        </div>`;
    }).join("");
  }

  function _showAddAnnotationModal(tsMs) {
    if (!_state.sessionId) return;
    const helper = window.HudConfirm;
    const fallbackPrompt = !helper;

    if (fallbackPrompt) {
      const note = window.prompt(ServerI18n.t("sessionDetailPromptFallback", { time: _fmtTsMs(tsMs) }), "");
      if (note != null && note.trim()) _createAnnotation(tsMs, "note", note.trim());
      return;
    }

    let selectedLabel = "highlight";
    let noteVal = "";
    const body = document.createElement("div");
    body.className = "admin-sd-ann-modal-body";
    body.innerHTML = `
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlTime")}</div>
        <div class="admin-sd-ann-modal-time">${_fmtTsMs(tsMs)}</div>
        <div class="admin-sd-ann-modal-hint">PRE-FILLED FROM TIMELINE HOVER POSITION</div>
      </div>
      <div class="admin-sd-ann-modal-row">
        <div class="admin-ui-monolabel">${ServerI18n.t("mlLabel")}</div>
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
        <!-- D-4 i18n: "NOTE · ≤ 280 字" is the same deferred EN·中文
             bilingual monolabel pattern — left untouched (see PLAYBACK
             note in buildSection() above). -->
        <div class="admin-ui-monolabel">NOTE · ${ServerI18n.t("sessionDetailSecNote")}</div>
        <textarea class="admin-sd-ann-modal-note" data-ann-modal-note
          placeholder="${ServerI18n.t("sessionDetailNotePlaceholder")}" maxlength="280"></textarea>
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
      title: ServerI18n.t("sessionDetailAddAnnotationModalTitle"),
      subtitle: "ADD ANNOTATION · TIMELINE MARKER",
      severity: "info",
      confirmLabel: ServerI18n.t("sessionDetailConfirmAdd"),
      cancelLabel: ServerI18n.t("cancel"),
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
        if (window.showToast) window.showToast(ServerI18n.t("sessionDetailToastAdded"), true);
      }
    } catch (e) {
      if (window.showToast) window.showToast(ServerI18n.t("sessionDetailErrAddFailed", { msg: e.message || ServerI18n.t("sessionDetailUnknownError") }), false);
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
      if (window.showToast) window.showToast(ServerI18n.t("sessionDetailToastDeleted"), true);
    } catch (e) {
      if (window.showToast) window.showToast(ServerI18n.t("sessionDetailErrDeleteFailed", { msg: e.message || ServerI18n.t("sessionDetailUnknownError") }), false);
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
    hover.textContent = ServerI18n.t("sessionDetailHoverAddCta", { time: _fmtTsMs(tsMs) });
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

  /** 「重播」——跟場次表匯出面板裡那顆同一條路（設計稿 08 · H1 / 10 · G2）。 */
  async function _replaySession() {
    if (!_state.sessionId) return;
    try {
      const records = _state.records.slice(0, 500);
      if (!records.length) {
        window.showToast && window.showToast(ServerI18n.t("sessionsReplayEmpty"), false);
        return;
      }
      const res = await window.csrfFetch("/admin/replay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ records: records, speedMultiplier: 1.0 }),
      });
      if (res.status === 503) {
        window.showToast && window.showToast(ServerI18n.t("sessionsReplayNoOverlay"), false);
        return;
      }
      if (!res.ok) throw new Error("HTTP " + res.status);
      window.showToast && window.showToast(ServerI18n.t("sessionsReplayStarted"), true);
    } catch (_) {
      window.showToast && window.showToast(ServerI18n.t("sessionsReplayFailed"), false);
    }
  }

  function _handleAction(action, target) {
    if (action === "back") {
      window.location.hash = "#/history/sessions";
    } else if (action === "retry") {
      if (_state.sessionId) _fetchSession(_state.sessionId);
    } else if (action === "export") {
      // 2026-09-07：改用真的「這一場」的匯出端點。原本是
      // `/admin/history/export?hours=1&session_id=…`，註解自己寫著
      // 「Use hours=1 as a proxy」——它匯出的是最近一小時，跟看的這場無關。
      if (!_state.sessionId) return;
      const a = document.createElement("a");
      a.href = "/admin/sessions/" + encodeURIComponent(_state.sessionId) + "/export?format=csv";
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } else if (action === "replay") {
      _replaySession();
    } else if (action === "add-annotation") {
      // Use hover position if available, otherwise mid-session.
      const dur = _sessionDurationMs();
      const tsMs = _state.hoverTsMs != null ? _state.hoverTsMs : Math.round(dur / 2);
      _showAddAnnotationModal(tsMs);
    }
  }

  function _onHashChange() {
    const hash = window.location.hash || "";
    if (hash.indexOf("/session-detail") === -1) return;

    const newId = _parseSessionId();
    if (!newId) {
      _state.sessionId = null;
      _showError(ServerI18n.t("sessionDetailErrNoSessionSelected"));
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
      // D-6: 靜態空狀態複本移除後，mount 時先渲染一次（無 id 深連結
      // 或標註 fetch 失敗時，面板仍顯示「尚無註記」而非全空）。
      _renderAnnotations();
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
        // 設計稿 10 · G2 的「全部 / 被擋下 N」分段
        const filterBtn = e.target.closest("[data-sd-filter]");
        if (filterBtn) {
          _state.msgFilter = filterBtn.dataset.sdFilter;
          page.querySelectorAll("[data-sd-filter]").forEach(function (b) {
            b.classList.toggle("is-active", b === filterBtn);
          });
          _renderMessages();
        }
      });

      page.addEventListener("input", function (e) {
        const box = e.target.closest("[data-sd-search]");
        if (!box) return;
        _state.msgQuery = box.value || "";
        _renderMessages();
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
      _showError(ServerI18n.t("sessionDetailErrNoSessionSelected"));
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
