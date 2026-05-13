/**
 * Admin · Poll Builder (multi-question master-detail) — extracted
 * from admin.js 2026-04-28 Group D-3 split, fifth pass.
 *
 * Owns sec-polls — the v5 master-detail poll editor + live HUD +
 * results view + session controls. NOT the legacy single-question
 * flow (that lives in admin-poll.js, which still binds to
 * #pollQuestion / .poll-option-input via a hidden compat shim).
 *
 * Renders into #settings-grid on `admin-panel-rendered`. ~975 lines
 * of master-detail rendering / DnD reorder / live tick / countdown /
 * session start-advance-end / poll-results aggregation.
 *
 * Globals: csrfFetch / showToast / AdminUtils.escapeHtml.
 *
 * Pattern matches earlier Group D-3 extractions (admin-replay-controls /
 * admin-ratelimit / admin-viewer-theme / admin-system-overview): IIFE
 * + module-private state + admin-panel-rendered self-bind +
 * MutationObserver fallback + idempotent guards.
 */
(function () {
  "use strict";

  const SECTION_ID = "sec-polls";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  const POLL_HTML = `
      <div id="sec-polls" class="admin-poll-page-v5 hud-page-stack lg:col-span-2" data-poll-view="builder">
        <div class="admin-poll-head">
          <div class="admin-poll-kicker">POLL · 多題目 · 拖曳排序 · 每題可上傳圖片</div>
          <div class="admin-poll-title">
            投票
            <a class="admin-poll-deeplink" href="#/poll-deepdive" title="投票深度分析">📊 深度分析 →</a>
          </div>
        </div>

        <!-- BUILDER VIEW -->
        <div class="admin-poll-master-detail" data-poll-view-builder>
          <!-- LEFT · queue with real DnD -->
          <aside class="admin-poll-queue-panel">
            <div class="admin-poll-card-head">
              <span class="title">題目佇列</span>
              <span class="kicker">QUEUE · 按住 ⋮⋮ 拖曳排序</span>
            </div>
            <div class="admin-poll-queue" data-poll-queue></div>
            <button type="button" class="admin-poll-add-btn" data-poll-action="add">＋ 新增題目</button>

            <div class="admin-poll-mode">
              <div class="mode-label">播放模式</div>
              <div class="mode-row">
                <button type="button" class="is-active" data-poll-mode="manual">
                  <span class="lbl">手動</span>
                  <span class="sub">每題按 Next</span>
                </button>
                <button type="button" data-poll-mode="auto">
                  <span class="lbl">自動</span>
                  <span class="sub">時限到自動下一題</span>
                </button>
              </div>
            </div>

            <!-- Multi-question session controls (P0-1) -->
            <div class="admin-poll-session" data-poll-session>
              <div class="session-status" data-poll-session-status>
                <span class="kicker">SESSION · 尚未開始</span>
              </div>
              <div class="session-actions">
                <button type="button" class="admin-poll-btn is-primary" data-poll-session-action="start">START SESSION ▶</button>
                <button type="button" class="admin-poll-btn" data-poll-session-action="advance" hidden>下一題 ▶</button>
                <button type="button" class="admin-poll-btn is-ghost" data-poll-session-action="end" hidden>結束 ✕</button>
              </div>
            </div>
          </aside>

          <!-- RIGHT · active question editor -->
          <main class="admin-poll-editor" data-poll-editor></main>
        </div>

        <!-- LIVE HUD VIEW (rendered by renderLive()) -->
        <div class="admin-polls-live" data-poll-view-live hidden></div>

        <!-- RESULTS VIEW (rendered by renderResults()) -->
        <div class="admin-polls-results" data-poll-view-results hidden></div>

        <!-- Legacy single-question inputs retained for admin-poll.js compatibility -->
        <div class="admin-poll-legacy" hidden>
          <input type="text" id="pollQuestion" />
          <div id="pollOptionsContainer">
            <input type="text" class="poll-option-input" />
            <input type="text" class="poll-option-input" />
          </div>
          <button id="pollAddOptionBtn"></button>
          <button id="pollRemoveOptionBtn"></button>
          <button id="pollCreateBtn"></button>
          <button id="pollEndBtn"></button>
          <button id="pollResetBtn"></button>
        </div>

        <div id="pollStatusDisplay" class="admin-poll-status"></div>
      </div>
  `;

  function _renderHtml() { return POLL_HTML; }

  function _initController() {
      const sec = document.getElementById("sec-polls");
      if (!sec) return;
      const queueEl = sec.querySelector("[data-poll-queue]");
      const editorEl = sec.querySelector("[data-poll-editor]");
      const builderEl = sec.querySelector("[data-poll-view-builder]");
      const liveEl = sec.querySelector("[data-poll-view-live]");
      const resultsEl = sec.querySelector("[data-poll-view-results]");

      const STORAGE_KEY = "danmu.adminPollQueue.v2";
      function qid() { return "q_" + Math.random().toString(36).slice(2, 8); }
      function oid() { return "o_" + Math.random().toString(36).slice(2, 6); }
      function newOpt(letter) {
        return { id: oid(), label: "", img: "" };
      }
      function newQuestion() {
        return {
          id: qid(), text: "", timer: 90, multi: false, crop: "16:9",
          image_url: "", server_q_id: "",
          options: [newOpt("A"), newOpt("B")],
        };
      }

      // Live mirror of GET /admin/poll/status — populated by beginSessionPolling().
      // Contains { state, active, current_index, started_at, questions: [{ id, text,
      // total_votes, options: [{ key, text, count, percentage }], time_limit_seconds }] }.
      let pollState = null;
      // viewMode: "builder" | "live" | "results"; derived from pollState + last
      // ended snapshot. Builder is the default; transitions:
      //   builder → live  on session start (pollState.active === true)
      //   live    → results on END (pollState.state === "ended" && we have data)
      //   results → builder on "新投票 / Reset"
      let viewMode = "builder";
      // Last server snapshot captured at end-time so Results stays available
      // after the server clears state. Cleared when user resets.
      let endedSnapshot = null;
      // Per-question results pagination index (0-based).
      let resultsIdx = 0;
      // Live HUD broadcast toggles + UI animation timer.
      const liveBroadcast = { showResults: true, showTotals: true, anonymous: false, autoAdvance: false };
      let liveTickTimer = null;
      let queue = [];
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          // localStorage may contain either raw array (old) or {queue, ...} (new).
          if (Array.isArray(parsed)) queue = parsed;
          else if (parsed && Array.isArray(parsed.queue)) queue = parsed.queue;
        }
      } catch (_) {}
      if (!Array.isArray(queue) || queue.length === 0) queue = [newQuestion()];
      // Backfill new fields on questions saved by older clients.
      queue.forEach(q => {
        if (typeof q.image_url !== "string") q.image_url = "";
        if (typeof q.server_q_id !== "string") q.server_q_id = "";
      });
      let activeId = queue[0].id;
      let mode = "manual";
      let runningIdx = -1;
      let dragQId = null;
      let dragOptId = null;
      // Multi-question session state (P0-1)
      let session = { pollId: "", active: false, currentIndex: -1, statusTimer: null };
      function persist() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ queue, activeId, mode })); } catch (_) {} }
      function findQ(id) { return queue.find(q => q.id === id); }
      function patchQ(id, v) { const q = findQ(id); if (q) Object.assign(q, v); }
      function reorder(arr, from, to) { const next = arr.slice(); const [m] = next.splice(from, 1); next.splice(to, 0, m); return next; }

      function renderQueue() {
        queueEl.innerHTML = "";
        queue.forEach((q, i) => {
          const row = document.createElement("div");
          row.className = "admin-poll-qrow";
          if (q.id === activeId) row.classList.add("is-active");
          const sessionRunning = session.active && session.currentIndex === i;
          if (i === runningIdx || sessionRunning) row.classList.add("is-running");
          row.dataset.qid = q.id;
          row.draggable = true;
          const hasImg = !!q.image_url || q.options.some(o => o.img);
          row.innerHTML = `
            <span class="drag-handle" title="拖曳排序">⋮⋮</span>
            <span class="idx">${i + 1}</span>
            <div class="info">
              <div class="text">${escapeHtml(q.text || "(空題目)")}</div>
              <div class="meta">${q.options.length} 選項 · ${q.timer === 0 ? "無時限" : q.timer + "s"} · ${hasImg ? "含圖 " + q.crop : "純文字"}</div>
            </div>
            ${sessionRunning ? '<span class="editing-chip" style="background:#86efac20;color:#86efac">● LIVE</span>' : (q.id === activeId ? '<span class="editing-chip">● 編輯中</span>' : "")}
          `;
          queueEl.appendChild(row);
        });
      }

      function renderEditor() {
        const q = findQ(activeId) || queue[0];
        if (!q) { editorEl.innerHTML = ""; return; }
        const idx = queue.indexOf(q);
        editorEl.innerHTML = `
          <div class="admin-poll-edit-head">
            <span class="idx">${idx + 1}</span>
            <div class="head-info">
              <span class="title">編輯題目 ${idx + 1}</span>
              <span class="kicker">EDITING · 變更即時同步</span>
            </div>
            <span class="progress">Q${idx + 1} / ${queue.length}</span>
          </div>

          <div class="admin-poll-field-label">問題</div>
          <input type="text" class="admin-poll-q-text" data-ed-text value="${escapeHtml(q.text || "")}" placeholder="輸入題目文字…" maxlength="200" />

          <div class="admin-poll-field-label">題目圖片 · 可選</div>
          <div class="admin-poll-q-image">
            ${q.image_url ? `
              <img class="admin-poll-q-image-thumb" src="${escapeHtml(q.image_url)}" alt="" />
              <button type="button" class="admin-poll-btn is-ghost" data-ed-action="remove-q-image">移除圖片</button>
            ` : `
              <button type="button" class="admin-poll-btn" data-ed-action="upload-q-image">＋ 上傳圖片 (JPG/PNG/WebP, ≤2 MB)</button>
              <input type="file" data-ed-q-image-input accept="image/jpeg,image/png,image/webp" hidden />
            `}
          </div>

          <div class="admin-poll-crop" data-ed-crop-row>
            <span class="crop-label">圖片裁切比例 · CROP</span>
            ${["16:9", "1:1", "4:3"].map(r => `
              <button type="button" data-ed-crop="${r}" class="${q.crop === r ? "is-active" : ""}">${r}</button>
            `).join("")}
            <span class="crop-note">套用到此題所有選項圖片</span>
          </div>

          <div class="admin-poll-field-label">選項 · 2–6 · 拖曳 ⋮⋮ 排序 · 可切換顯示圖片</div>
          <div class="admin-poll-opts" data-ed-opts>
            ${q.options.map((opt, oi) => `
              <div class="admin-poll-opt" data-oid="${opt.id}" draggable="true">
                <span class="drag-handle">⋮⋮</span>
                <span class="opt-tag">${String.fromCharCode(65 + oi)}</span>
                <button type="button" class="opt-img-toggle ${opt.img ? "is-on" : ""}" data-ed-opt-img="${opt.id}" title="切換圖片">
                  ${opt.img ? '<span class="img-on">🖼</span>' : '<span class="img-off">+ 圖</span>'}
                </button>
                <input type="text" data-ed-opt-text="${opt.id}" value="${escapeHtml(opt.label || "")}" placeholder="選項 ${String.fromCharCode(65 + oi)}" maxlength="100" />
                ${q.options.length > 2 ? `<button type="button" class="opt-remove" data-ed-opt-remove="${opt.id}" title="刪除">×</button>` : ""}
              </div>
            `).join("")}
            ${q.options.length < 6 ? `<button type="button" class="admin-poll-opt-add" data-ed-opt-add>＋ 新增選項 (${q.options.length}/6)</button>` : ""}
          </div>

          <div class="admin-poll-edit-foot">
            <label class="foot-field">
              <span>時限</span>
              <select data-ed-timer>
                <option value="30"${q.timer === 30 ? " selected" : ""}>30s</option>
                <option value="90"${q.timer === 90 ? " selected" : ""}>90s</option>
                <option value="180"${q.timer === 180 ? " selected" : ""}>3 分</option>
                <option value="300"${q.timer === 300 ? " selected" : ""}>5 分</option>
                <option value="0"${q.timer === 0 ? " selected" : ""}>無時限</option>
              </select>
            </label>
            <label class="foot-field foot-check">
              <input type="checkbox" data-ed-multi ${q.multi ? "checked" : ""} />
              <span>允許複選</span>
            </label>
            <div class="foot-spacer"></div>
            <button type="button" class="admin-poll-btn is-ghost" data-ed-action="remove-q">刪除此題</button>
            <button type="button" class="admin-poll-btn is-primary" data-ed-action="start-this">START Q${idx + 1} ▶</button>
          </div>
        `;
      }

      function render() {
        // Decide view mode based on session + ended snapshot.
        if (pollState && pollState.active) viewMode = "live";
        else if (endedSnapshot) viewMode = "results";
        else viewMode = "builder";
        sec.dataset.pollView = viewMode;
        builderEl.hidden = viewMode !== "builder";
        liveEl.hidden = viewMode !== "live";
        resultsEl.hidden = viewMode !== "results";
        renderQueue();
        renderEditor();
        renderSessionStatus();
        if (viewMode === "live") renderLive();
        else if (viewMode === "results") renderResults();
        // Toggle the live tick (1Hz UI refresh for the countdown ring) only
        // when on Live view — saves CPU on Builder/Results.
        if (viewMode === "live") startLiveTick();
        else stopLiveTick();
      }

      function startLiveTick() {
        if (liveTickTimer) return;
        liveTickTimer = setInterval(() => {
          if (viewMode !== "live" || !pollState || !pollState.active) return;
          updateLiveCountdown();
        }, 1000);
      }
      function stopLiveTick() {
        if (liveTickTimer) { clearInterval(liveTickTimer); liveTickTimer = null; }
      }

      // ─── Live HUD ────────────────────────────────────────────────────────
      // Computes time-left in seconds from started_at + time_limit. null if no limit.
      function computeRemain(question, startedAt) {
        if (!question || !question.time_limit_seconds) return null;
        if (!startedAt) return question.time_limit_seconds;
        const elapsed = Date.now() / 1000 - startedAt;
        return Math.max(0, Math.round(question.time_limit_seconds - elapsed));
      }
      function fmtMmSs(secs) {
        if (secs == null) return "∞";
        const m = String(Math.floor(secs / 60)).padStart(2, "0");
        const s = String(secs % 60).padStart(2, "0");
        return `${m}:${s}`;
      }

      function renderLive() {
        if (!pollState || !pollState.questions || pollState.questions.length === 0) {
          liveEl.innerHTML = "";
          return;
        }
        const idx = pollState.current_index >= 0 ? pollState.current_index : 0;
        const total = pollState.questions.length;
        const q = pollState.questions[idx];
        const remain = computeRemain(q, pollState.started_at);
        const limit = q.time_limit_seconds || 0;
        const ringPct = limit > 0 && remain != null ? Math.max(0, Math.min(1, remain / limit)) : 1;
        const lowTime = limit > 0 && remain != null && remain <= Math.max(5, limit * 0.15);
        const totalVotes = q.options.reduce((s, o) => s + (o.count || 0), 0);
        // Sort options by votes desc for the bar list (leader on top), but
        // preserve original letter labels.
        const sortedOpts = [...q.options].sort((a, b) => (b.count || 0) - (a.count || 0));
        const maxCount = sortedOpts[0] ? sortedOpts[0].count : 0;
        const nextQ = pollState.questions[idx + 1];

        const ringSize = 110;
        const ringR = ringSize / 2 - 6;
        const ringC = 2 * Math.PI * ringR;
        const ringDash = ringC * ringPct;

        liveEl.innerHTML = `
          <div class="admin-polls-live-grid">
            <!-- LEFT · big HUD -->
            <div class="admin-polls-live-card">
              <div class="admin-polls-live-strip">
                <span class="admin-polls-live-chip">
                  <span class="dot"></span>LIVE · #${escapeHtml((pollState.poll_id || "").slice(-6))}
                </span>
                <span class="admin-polls-live-progress">
                  第 <strong>${idx + 1}</strong> / ${total} 題
                </span>
                <div class="admin-polls-live-time" data-live-time>
                  <div class="admin-polls-live-ring">
                    <svg viewBox="0 0 ${ringSize} ${ringSize}" width="56" height="56">
                      <circle cx="${ringSize/2}" cy="${ringSize/2}" r="${ringR}" fill="none"
                        stroke="rgba(148,163,184,0.25)" stroke-width="4" />
                      <circle data-live-ring cx="${ringSize/2}" cy="${ringSize/2}" r="${ringR}" fill="none"
                        stroke="${lowTime ? '#f87171' : 'var(--color-primary)'}" stroke-width="5"
                        stroke-dasharray="${ringDash} ${ringC}" stroke-linecap="round"
                        transform="rotate(-90 ${ringSize/2} ${ringSize/2})"
                        style="filter: drop-shadow(0 0 4px ${lowTime ? '#f87171' : 'var(--color-primary)'})" />
                    </svg>
                  </div>
                  <div>
                    <div class="kicker">剩餘</div>
                    <div class="mmss ${lowTime ? 'is-low' : ''}" data-live-mmss>${remain == null ? '無時限' : fmtMmSs(remain)}</div>
                  </div>
                </div>
              </div>

              <div class="admin-polls-live-question">
                <div class="kicker">QUESTION Q${idx + 1}</div>
                <div class="text">${escapeHtml(q.text || "")}</div>
              </div>

              <div class="admin-polls-live-bars">
                ${sortedOpts.map(o => {
                  const pct = totalVotes > 0 ? (o.count / totalVotes) * 100 : 0;
                  const isLeader = (o.count || 0) > 0 && (o.count === maxCount);
                  return `
                    <div class="admin-polls-live-bar ${isLeader ? 'is-leader' : ''}">
                      <div class="row">
                        <span class="tag">${escapeHtml(o.key)}</span>
                        <span class="lbl">${escapeHtml(o.text || "")}</span>
                        ${isLeader ? '<span class="lead">▲ 領先</span>' : ''}
                        <span class="pct">${pct.toFixed(0)}%</span>
                        <span class="cnt">${o.count} 票</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${pct.toFixed(1)}%"></div></div>
                    </div>
                  `;
                }).join("")}
              </div>

              <div class="admin-polls-live-foot">
                <span class="meta">總票數 <strong data-live-total>${totalVotes}</strong></span>
                ${nextQ ? `<span class="sep"></span><span class="meta">下一題 <em>${escapeHtml(nextQ.text || "")}</em></span>` : ''}
                <div class="actions">
                  <button type="button" class="admin-polls-live-btn" data-live-action="advance" ${idx >= total - 1 ? 'disabled' : ''}>⏭ 下一題</button>
                  <button type="button" class="admin-polls-live-btn is-danger" data-live-action="end">◾ 結束投票</button>
                </div>
              </div>
            </div>

            <!-- RIGHT · queue mini + broadcast -->
            <aside class="admin-polls-live-rail">
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">題目進度</span>
                  <span class="kicker">PROGRESS · ${idx + 1}/${total}</span>
                </div>
                <div class="admin-polls-live-queue">
                  ${pollState.questions.map((qq, i) => {
                    const status = i < idx ? "done" : (i === idx ? "active" : "queued");
                    return `
                      <div class="admin-polls-live-qmini is-${status}">
                        <span class="idx">${status === "done" ? "✓" : (i + 1)}</span>
                        <span class="t">${escapeHtml(qq.text || "(空)")}</span>
                        ${status === "active" ? '<span class="dot"></span>' : ''}
                      </div>
                    `;
                  }).join("")}
                </div>
              </div>
              <div class="admin-polls-live-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">即時廣播</span>
                  <span class="kicker">BROADCAST</span>
                </div>
                <div class="admin-polls-live-toggles">
                  ${[
                    { k: "showResults", label: "結果即時顯示" },
                    { k: "showTotals", label: "顯示總票數" },
                    { k: "autoAdvance", label: "時限到自動下一題" },
                    { k: "anonymous", label: "匿名投票" },
                  ].map(t => `
                    <label class="admin-polls-live-toggle ${liveBroadcast[t.k] ? 'is-on' : ''}" data-live-toggle="${t.k}">
                      <span class="lbl">${t.label}</span>
                      <span class="sw"><span class="knob"></span></span>
                    </label>
                  `).join("")}
                </div>
              </div>
            </aside>
          </div>
        `;
      }

      // Updates only the countdown ring + mmss + total (avoids full re-render
      // every second; the bars only change when /admin/poll/status fetch returns).
      function updateLiveCountdown() {
        if (!pollState || !pollState.active) return;
        const idx = pollState.current_index >= 0 ? pollState.current_index : 0;
        const q = pollState.questions[idx];
        if (!q) return;
        const remain = computeRemain(q, pollState.started_at);
        const limit = q.time_limit_seconds || 0;
        const mmssEl = liveEl.querySelector("[data-live-mmss]");
        const ringEl = liveEl.querySelector("[data-live-ring]");
        if (mmssEl) {
          mmssEl.textContent = remain == null ? "無時限" : fmtMmSs(remain);
          mmssEl.classList.toggle("is-low", limit > 0 && remain != null && remain <= Math.max(5, limit * 0.15));
        }
        if (ringEl && limit > 0 && remain != null) {
          const r = +ringEl.getAttribute("r");
          const c = 2 * Math.PI * r;
          const pct = Math.max(0, Math.min(1, remain / limit));
          ringEl.setAttribute("stroke-dasharray", `${c * pct} ${c}`);
          const low = remain <= Math.max(5, limit * 0.15);
          ringEl.setAttribute("stroke", low ? "#f87171" : "var(--color-primary)");
          ringEl.style.filter = `drop-shadow(0 0 4px ${low ? '#f87171' : 'var(--color-primary)'})`;
        }
        // Auto-advance hook: if toggle is on and timer elapsed, fire advance.
        if (liveBroadcast.autoAdvance && limit > 0 && remain === 0) {
          const onLast = idx >= pollState.questions.length - 1;
          if (!onLast) sessionAdvance();
          else sessionEnd();
        }
      }

      // ─── Results ─────────────────────────────────────────────────────────
      function renderResults() {
        const snap = endedSnapshot;
        if (!snap || !snap.questions || snap.questions.length === 0) {
          resultsEl.innerHTML = "";
          return;
        }
        const total = snap.questions.length;
        const safeIdx = Math.max(0, Math.min(resultsIdx, total - 1));
        const q = snap.questions[safeIdx];
        const totalVotes = q.options.reduce((s, o) => s + (o.count || 0), 0);
        const ranked = [...q.options].sort((a, b) => (b.count || 0) - (a.count || 0));
        const winner = ranked[0] || { key: "-", text: "—", count: 0 };
        const runnerUp = ranked[1];
        const winnerPct = totalVotes > 0 ? (winner.count / totalVotes) * 100 : 0;
        const lead = runnerUp ? Math.max(0, winner.count - runnerUp.count) : winner.count;
        const startedAt = snap.started_at || 0;
        const endedAt = snap.ended_at || (Date.now() / 1000);
        const durSec = Math.max(0, Math.round(endedAt - startedAt));

        resultsEl.innerHTML = `
          <div class="admin-polls-results-grid">
            <div class="admin-polls-results-main">
              <!-- Tabs for per-question pagination -->
              ${total > 1 ? `
                <div class="admin-polls-results-tabs" role="tablist">
                  ${snap.questions.map((qq, i) => `
                    <button type="button" role="tab" class="${i === safeIdx ? 'is-active' : ''}" data-results-tab="${i}">
                      Q${i + 1}<span class="t">${escapeHtml((qq.text || "").slice(0, 24))}</span>
                    </button>
                  `).join("")}
                </div>` : ''}

              <div class="admin-polls-results-head">
                <div class="meta">
                  <span class="chip">ENDED</span>
                  <span>Q${safeIdx + 1}/${total} · 進行 ${fmtMmSs(durSec)} · 共 ${totalVotes} 票</span>
                </div>
                <div class="text">${escapeHtml(q.text || "")}</div>
              </div>

              <div class="admin-polls-results-winner">
                <div class="badge">${escapeHtml(winner.key)}</div>
                <div class="info">
                  <div class="kicker">WINNER · 領先選項</div>
                  <div class="lbl">${escapeHtml(winner.text || "—")}</div>
                  <div class="sub">${winner.count} 票 · ${winnerPct.toFixed(1)}% ${runnerUp ? `· 領先第 2 名 ${lead} 票` : ''}</div>
                </div>
                <div class="pct">${winnerPct.toFixed(0)}<span>%</span></div>
              </div>

              <div class="admin-polls-results-list">
                <div class="admin-poll-card-head">
                  <span class="title">完整結果</span>
                  <span class="kicker">RESULTS · ${totalVotes} 票</span>
                </div>
                ${ranked.map((o, rank) => {
                  const pct = totalVotes > 0 ? (o.count / totalVotes) * 100 : 0;
                  const isW = rank === 0 && o.count > 0;
                  return `
                    <div class="admin-polls-results-bar ${isW ? 'is-winner' : ''}">
                      <div class="row">
                        <span class="rank">#${rank + 1}</span>
                        <span class="tag">${escapeHtml(o.key)}</span>
                        <span class="lbl">${escapeHtml(o.text || "")}</span>
                        <span class="pct">${pct.toFixed(1)}%</span>
                        <span class="cnt">${o.count} 票</span>
                      </div>
                      <div class="track"><div class="fill" style="width:${pct.toFixed(1)}%"></div></div>
                    </div>
                  `;
                }).join("")}
              </div>
            </div>

            <aside class="admin-polls-results-rail">
              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">參與度</span>
                  <span class="kicker">PARTICIPATION</span>
                </div>
                <div class="admin-polls-results-stat">
                  <span class="big">${totalVotes}</span>
                  <span class="unit">票 · 此題</span>
                </div>
                <div class="admin-polls-results-meter">
                  <div class="fill" style="width:${Math.min(100, totalVotes ? 100 : 0)}%"></div>
                </div>
                <div class="admin-polls-results-meta-row">
                  <span>選項 ${q.options.length}</span>
                  <span>時限 ${q.time_limit_seconds ? fmtMmSs(q.time_limit_seconds) : '無'}</span>
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">時序</span>
                  <span class="kicker">TIMELINE</span>
                </div>
                <div class="admin-polls-results-timeline">
                  <div class="row"><span class="k">開始</span><span class="v">${snap.started_at ? new Date(snap.started_at * 1000).toLocaleTimeString() : '—'}</span></div>
                  <div class="row"><span class="k">結束</span><span class="v">${snap.ended_at ? new Date(snap.ended_at * 1000).toLocaleTimeString() : '—'}</span></div>
                  <div class="row"><span class="k">時長</span><span class="v">${fmtMmSs(durSec)}</span></div>
                </div>
                <div class="admin-polls-results-spark">
                  ${(function(){
                    // Cheap sparkline derived from options' counts (no per-second history available
                    // server-side yet — surfaces relative shape of votes by option).
                    const peak = Math.max(1, ...ranked.map(o => o.count));
                    return ranked.map(o => `<div class="bar" style="height:${Math.max(6, (o.count / peak) * 100)}%"></div>`).join("");
                  })()}
                </div>
              </div>

              <div class="admin-polls-results-rail-card">
                <div class="admin-poll-card-head">
                  <span class="title">動作</span>
                  <span class="kicker">EXPORT</span>
                </div>
                <div class="admin-polls-results-actions">
                  <button type="button" class="admin-polls-results-btn" data-results-action="copy">⎘ 複製結果</button>
                  <button type="button" class="admin-polls-results-btn" data-results-action="csv">⇣ 匯出 CSV</button>
                  <button type="button" class="admin-polls-results-btn" data-results-action="json">⇣ 匯出 JSON</button>
                  <button type="button" class="admin-polls-results-btn is-primary" data-results-action="reset">▶ 開新投票</button>
                </div>
              </div>
            </aside>
          </div>
        `;
      }

      // Build a CSV line from the snapshot for export.
      function buildResultsCsv(snap) {
        const rows = [["question_index", "question", "option_key", "option_text", "count", "percentage"]];
        snap.questions.forEach((qq, i) => {
          const tot = qq.options.reduce((s, o) => s + (o.count || 0), 0);
          qq.options.forEach(o => {
            const pct = tot > 0 ? ((o.count / tot) * 100).toFixed(1) : "0";
            rows.push([i + 1, qq.text, o.key, o.text, o.count, pct]);
          });
        });
        return rows.map(r => r.map(c => {
          const s = String(c == null ? "" : c);
          return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
        }).join(",")).join("\n");
      }

      function downloadBlob(name, mime, text) {
        const blob = new Blob([text], { type: mime });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = name;
        document.body.appendChild(a); a.click();
        setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
      }

      // ─── Click delegation for Live + Results views ────────────────────────
      sec.addEventListener("click", (e) => {
        // Live HUD
        const liveAction = e.target.closest("[data-live-action]");
        if (liveAction) {
          const a = liveAction.dataset.liveAction;
          if (a === "advance") sessionAdvance();
          else if (a === "end") sessionEnd();
          else if (a === "pause") {
            // Client-side: stops auto-advance + keeps state. Reflected as visual hint only.
            liveBroadcast.autoAdvance = false;
            renderLive();
          }
          return;
        }
        const liveToggle = e.target.closest("[data-live-toggle]");
        if (liveToggle) {
          const k = liveToggle.dataset.liveToggle;
          if (k in liveBroadcast) {
            liveBroadcast[k] = !liveBroadcast[k];
            liveToggle.classList.toggle("is-on", liveBroadcast[k]);
          }
          return;
        }
        // Results
        const resTab = e.target.closest("[data-results-tab]");
        if (resTab) {
          resultsIdx = +resTab.dataset.resultsTab || 0;
          renderResults();
          return;
        }
        const resAct = e.target.closest("[data-results-action]");
        if (resAct) {
          const a = resAct.dataset.resultsAction;
          const snap = endedSnapshot;
          if (!snap) return;
          if (a === "copy") {
            const text = snap.questions.map((qq, i) => {
              const tot = qq.options.reduce((s, o) => s + (o.count || 0), 0);
              const lines = qq.options.map(o => {
                const pct = tot > 0 ? ((o.count / tot) * 100).toFixed(1) : "0.0";
                return `  ${o.key}. ${o.text} — ${o.count} 票 (${pct}%)`;
              });
              return `Q${i + 1}: ${qq.text}\n${lines.join("\n")}`;
            }).join("\n\n");
            (navigator.clipboard?.writeText(text) || Promise.resolve())
              .then(() => showToast && showToast("結果已複製", true))
              .catch(() => showToast && showToast("複製失敗", false));
          } else if (a === "csv") {
            downloadBlob(`poll_${(snap.poll_id || "results").slice(-8)}.csv`, "text/csv;charset=utf-8", buildResultsCsv(snap));
          } else if (a === "json") {
            downloadBlob(`poll_${(snap.poll_id || "results").slice(-8)}.json`, "application/json", JSON.stringify(snap, null, 2));
          } else if (a === "reset") {
            endedSnapshot = null;
            resultsIdx = 0;
            render();
          }
          return;
        }
      });

      // Queue drag-reorder
      queueEl.addEventListener("dragstart", (e) => {
        const row = e.target.closest(".admin-poll-qrow");
        if (!row) return;
        dragQId = row.dataset.qid;
        row.classList.add("is-dragging");
      });
      queueEl.addEventListener("dragend", (e) => {
        const row = e.target.closest(".admin-poll-qrow");
        if (row) row.classList.remove("is-dragging");
        dragQId = null;
        queueEl.querySelectorAll(".is-drag-over").forEach(r => r.classList.remove("is-drag-over"));
      });
      queueEl.addEventListener("dragover", (e) => {
        e.preventDefault();
        const row = e.target.closest(".admin-poll-qrow");
        if (!row || !dragQId || row.dataset.qid === dragQId) return;
        queueEl.querySelectorAll(".is-drag-over").forEach(r => r.classList.remove("is-drag-over"));
        row.classList.add("is-drag-over");
      });
      queueEl.addEventListener("drop", (e) => {
        e.preventDefault();
        const row = e.target.closest(".admin-poll-qrow");
        if (!row || !dragQId) return;
        const from = queue.findIndex(q => q.id === dragQId);
        const to = queue.findIndex(q => q.id === row.dataset.qid);
        if (from < 0 || to < 0 || from === to) return;
        queue = reorder(queue, from, to);
        persist(); render();
      });
      queueEl.addEventListener("click", (e) => {
        const row = e.target.closest(".admin-poll-qrow");
        if (!row) return;
        activeId = row.dataset.qid;
        persist(); render();
      });

      // Editor inputs
      editorEl.addEventListener("input", (e) => {
        const q = findQ(activeId);
        if (!q) return;
        if (e.target.matches("[data-ed-text]")) {
          q.text = e.target.value;
          persist(); renderQueue();
          return;
        }
        if (e.target.matches("[data-ed-opt-text]")) {
          const oid = e.target.dataset.edOptText;
          const opt = q.options.find(o => o.id === oid);
          if (opt) { opt.label = e.target.value; persist(); renderQueue(); }
        }
      });
      editorEl.addEventListener("change", (e) => {
        const q = findQ(activeId);
        if (!q) return;
        if (e.target.matches("[data-ed-timer]")) { q.timer = +e.target.value; persist(); renderQueue(); }
        else if (e.target.matches("[data-ed-multi]")) { q.multi = e.target.checked; persist(); }
      });
      editorEl.addEventListener("click", (e) => {
        const q = findQ(activeId);
        if (!q) return;
        const cropBtn = e.target.closest("[data-ed-crop]");
        if (cropBtn) { q.crop = cropBtn.dataset.edCrop; persist(); renderEditor(); return; }
        const imgToggle = e.target.closest("[data-ed-opt-img]");
        if (imgToggle) {
          const opt = q.options.find(o => o.id === imgToggle.dataset.edOptImg);
          if (opt) { opt.img = opt.img ? "" : "placeholder"; persist(); renderEditor(); }
          return;
        }
        const rem = e.target.closest("[data-ed-opt-remove]");
        if (rem) {
          const oid = rem.dataset.edOptRemove;
          if (q.options.length > 2) { q.options = q.options.filter(o => o.id !== oid); persist(); renderEditor(); renderQueue(); }
          return;
        }
        if (e.target.closest("[data-ed-opt-add]")) {
          if (q.options.length < 6) { q.options.push(newOpt()); persist(); renderEditor(); renderQueue(); }
          return;
        }
        const act = e.target.closest("[data-ed-action]");
        if (act) {
          if (act.dataset.edAction === "remove-q") {
            if (queue.length > 1 && confirm("刪除此題目?")) {
              const idx = queue.findIndex(q2 => q2.id === activeId);
              queue = queue.filter(q2 => q2.id !== activeId);
              activeId = queue[Math.min(idx, queue.length - 1)].id;
              persist(); render();
            }
          } else if (act.dataset.edAction === "start-this") {
            startAt(queue.findIndex(q2 => q2.id === activeId));
          } else if (act.dataset.edAction === "upload-q-image") {
            const input = editorEl.querySelector("[data-ed-q-image-input]");
            if (input) input.click();
          } else if (act.dataset.edAction === "remove-q-image") {
            q.image_url = "";
            persist(); renderEditor(); renderQueue();
          }
        }
      });
      // File-input change → upload to server (requires active session)
      editorEl.addEventListener("change", async (e) => {
        if (!e.target.matches("[data-ed-q-image-input]")) return;
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const q = findQ(activeId);
        if (!q) return;
        if (!session.pollId) {
          showToast && showToast("請先按 START SESSION 建立投票後再上傳圖片", false);
          e.target.value = "";
          return;
        }
        if (!q.server_q_id) {
          showToast && showToast("此題目尚未同步到伺服器", false);
          e.target.value = "";
          return;
        }
        if (file.size > 2 * 1024 * 1024) {
          showToast && showToast("圖片過大 (最多 2 MB)", false);
          e.target.value = "";
          return;
        }
        const formData = new FormData();
        formData.append("file", file);
        try {
          const res = await csrfFetch(
            `/admin/poll/${encodeURIComponent(session.pollId)}/upload-image/${encodeURIComponent(q.server_q_id)}`,
            { method: "POST", body: formData }
          );
          const data = await res.json().catch(() => ({}));
          if (!res.ok) throw new Error(data.error || "upload failed");
          q.image_url = data.image_url;
          persist(); renderEditor(); renderQueue();
          showToast && showToast("圖片已上傳", true);
        } catch (err) {
          showToast && showToast(String(err.message || err), false);
        } finally {
          e.target.value = "";
        }
      });

      // Options drag-reorder (within active question)
      editorEl.addEventListener("dragstart", (e) => {
        const row = e.target.closest(".admin-poll-opt");
        if (!row) return;
        dragOptId = row.dataset.oid;
        row.classList.add("is-dragging");
      });
      editorEl.addEventListener("dragend", (e) => {
        editorEl.querySelectorAll(".is-dragging, .is-drag-over").forEach(r => r.classList.remove("is-dragging", "is-drag-over"));
        dragOptId = null;
      });
      editorEl.addEventListener("dragover", (e) => {
        const row = e.target.closest(".admin-poll-opt");
        if (!row || !dragOptId || row.dataset.oid === dragOptId) return;
        e.preventDefault();
        editorEl.querySelectorAll(".is-drag-over").forEach(r => r.classList.remove("is-drag-over"));
        row.classList.add("is-drag-over");
      });
      editorEl.addEventListener("drop", (e) => {
        e.preventDefault();
        const row = e.target.closest(".admin-poll-opt");
        const q = findQ(activeId);
        if (!row || !dragOptId || !q) return;
        const from = q.options.findIndex(o => o.id === dragOptId);
        const to = q.options.findIndex(o => o.id === row.dataset.oid);
        if (from < 0 || to < 0 || from === to) return;
        q.options = reorder(q.options, from, to);
        persist(); renderEditor();
      });

      // Sidebar actions
      sec.addEventListener("click", (e) => {
        const add = e.target.closest("[data-poll-action='add']");
        if (add) { const q = newQuestion(); queue.push(q); activeId = q.id; persist(); render(); return; }
        const mb = e.target.closest("[data-poll-mode]");
        if (mb) {
          mode = mb.dataset.pollMode;
          sec.querySelectorAll("[data-poll-mode]").forEach(b => b.classList.toggle("is-active", b === mb));
          persist();
        }
        const sa = e.target.closest("[data-poll-session-action]");
        if (sa) {
          const action = sa.dataset.pollSessionAction;
          if (action === "start") sessionStart();
          else if (action === "advance") sessionAdvance();
          else if (action === "end") sessionEnd();
        }
      });

      // ─── Multi-question session controls (P0-1) ─────────────────────────
      function renderSessionStatus() {
        const wrap = sec.querySelector("[data-poll-session]");
        if (!wrap) return;
        const statusEl = wrap.querySelector("[data-poll-session-status]");
        const startBtn = wrap.querySelector("[data-poll-session-action='start']");
        const advBtn = wrap.querySelector("[data-poll-session-action='advance']");
        const endBtn = wrap.querySelector("[data-poll-session-action='end']");
        if (!session.pollId || !session.active) {
          statusEl.innerHTML = '<span class="kicker">SESSION · 尚未開始</span>';
          startBtn.hidden = false;
          advBtn.hidden = true;
          endBtn.hidden = true;
          return;
        }
        const total = queue.length;
        const pos = session.currentIndex + 1;
        const onLast = session.currentIndex >= total - 1;
        statusEl.innerHTML = `<span class="kicker">SESSION · ACTIVE</span><span class="progress">Q ${pos} / ${total}</span>`;
        startBtn.hidden = true;
        advBtn.hidden = onLast;
        endBtn.hidden = false;
      }

      async function sessionStart() {
        // Validate every question first
        const payload = queue.map((q, idx) => {
          const text = (q.text || "").trim();
          const options = q.options.map(o => (o.label || "").trim()).filter(Boolean);
          if (!text) throw new Error(`第 ${idx + 1} 題缺少題目文字`);
          if (options.length < 2) throw new Error(`第 ${idx + 1} 題選項不足 2 個`);
          return {
            text,
            options,
            time_limit_seconds: q.timer && q.timer > 0 ? q.timer : null,
          };
        });
        try {
          const createRes = await csrfFetch("/admin/poll/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ questions: payload }),
          });
          const createData = await createRes.json().catch(() => ({}));
          if (!createRes.ok) throw new Error(createData.error || "建立失敗");
          // Map server question ids back onto local state so image upload works.
          session.pollId = createData.poll_id;
          (createData.questions || []).forEach((sq, i) => {
            if (queue[i]) queue[i].server_q_id = sq.id;
          });
          persist();

          const startRes = await csrfFetch("/admin/poll/start", { method: "POST" });
          const startData = await startRes.json().catch(() => ({}));
          if (!startRes.ok) throw new Error(startData.error || "開始失敗");
          session.active = true;
          session.currentIndex = startData.current_index ?? 0;
          // Seed the live mirror so renderLive() has data immediately.
          pollState = startData;
          endedSnapshot = null;
          render();
          showToast && showToast("Session 已開始", true);
          beginSessionPolling();
        } catch (err) {
          showToast && showToast(String(err.message || err), false);
        }
      }

      async function sessionAdvance() {
        try {
          const res = await csrfFetch("/admin/poll/advance", { method: "POST" });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) throw new Error(data.error || "推進失敗");
          session.currentIndex = data.current_index;
          session.active = !!data.active;
          pollState = data;
          render();
          showToast && showToast(`已推進至 Q${session.currentIndex + 1}`, true);
        } catch (err) {
          showToast && showToast(String(err.message || err), false);
        }
      }

      async function sessionEnd() {
        try {
          // Snapshot the current pollState BEFORE telling the server to clear it,
          // so the Results view has data after the broadcast.
          const beforeEnd = pollState;
          const res = await csrfFetch("/admin/poll/end", { method: "POST" });
          if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            throw new Error(data.error || "結束失敗");
          }
          if (beforeEnd && beforeEnd.questions) {
            endedSnapshot = {
              ...beforeEnd,
              ended_at: Date.now() / 1000,
            };
            resultsIdx = beforeEnd.current_index >= 0 ? beforeEnd.current_index : 0;
          }
          session.active = false;
          session.pollId = "";
          session.currentIndex = -1;
          pollState = null;
          if (session.statusTimer) { clearInterval(session.statusTimer); session.statusTimer = null; }
          render();
          showToast && showToast("Session 已結束", true);
        } catch (err) {
          showToast && showToast(String(err.message || err), false);
        }
      }

      function beginSessionPolling() {
        if (session.statusTimer) clearInterval(session.statusTimer);
        session.statusTimer = setInterval(async () => {
          if (!session.pollId) return;
          try {
            const res = await fetch("/admin/poll/status", { credentials: "same-origin" });
            if (!res.ok) return;
            const data = await res.json();
            if (data.poll_id !== session.pollId) return;
            session.active = !!data.active;
            session.currentIndex = data.current_index ?? -1;
            const wasActive = !!(pollState && pollState.active);
            pollState = data;
            if (!data.active) {
              clearInterval(session.statusTimer);
              session.statusTimer = null;
              // If we were active and the server flipped to ended (e.g. via WS
              // broadcast / external action), capture the snapshot so Results renders.
              if (wasActive && data.questions && !endedSnapshot) {
                endedSnapshot = { ...data, ended_at: Date.now() / 1000 };
                resultsIdx = data.current_index >= 0 ? data.current_index : 0;
              }
              pollState = null;
            }
            // Live HUD: only re-render bars when counts actually changed,
            // otherwise the countdown ring tick handles itself.
            if (viewMode === "live") {
              renderLive();
            } else {
              render();
            }
          } catch (_) { /* ignore */ }
        }, 2000);
      }

      window.addEventListener("beforeunload", () => {
        if (session.statusTimer) { clearInterval(session.statusTimer); session.statusTimer = null; }
        stopLiveTick();
      });

      // Start engine
      async function startAt(idx) {
        if (idx < 0 || idx >= queue.length) return;
        const q = queue[idx];
        const cleanOpts = q.options.map(o => (o.label || "").trim()).filter(Boolean);
        if (!(q.text || "").trim()) { showToast && showToast(`第 ${idx + 1} 題缺少題目文字`, false); return; }
        if (cleanOpts.length < 2) { showToast && showToast(`第 ${idx + 1} 題選項不足 2 個`, false); return; }
        runningIdx = idx;
        renderQueue();
        try {
          const res = await csrfFetch("/admin/poll/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: q.text, options: cleanOpts }),
          });
          if (!res.ok) { const err = await res.json().catch(() => ({})); throw new Error(err.error || "poll create failed"); }
          showToast && showToast(`第 ${idx + 1} 題已開始`, true);
          if (mode === "auto") watchAndAdvance(idx);
        } catch (err) {
          runningIdx = -1; renderQueue();
          showToast && showToast(String(err.message || err), false);
        }
      }
      async function watchAndAdvance(idx) {
        const loop = async () => {
          if (runningIdx !== idx) return;
          try {
            const res = await fetch("/admin/poll/status", { credentials: "same-origin" });
            if (res.ok) {
              const data = await res.json();
              if (data.state !== "active") {
                setTimeout(() => { if (idx + 1 < queue.length) startAt(idx + 1); else { runningIdx = -1; renderQueue(); showToast && showToast("全部題目已結束", true); } }, 800);
                return;
              }
            }
          } catch (_) {}
          setTimeout(loop, 2000);
        };
        setTimeout(loop, 2000);
      }

      render();
  }

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(SECTION_ID)) return;
    grid.insertAdjacentHTML("beforeend", _renderHtml());
    if (document.getElementById(SECTION_ID)) _initController();
  }

  document.addEventListener("admin-panel-rendered", init);
  document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById(SECTION_ID)) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true, subtree: true,
    });
    init();
  });
})();
