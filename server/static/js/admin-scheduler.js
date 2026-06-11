// Admin Scheduler — v2 retrofit.
// List view: sortable rows (state · messages · interval · sent · repeat · actions) +
// inline create form. Replaces legacy <details> accordion.
(function () {
  "use strict";

  var escapeHTML = window.AdminUtils.escapeHtml;
  const SECTION_ID = "sec-scheduler";

  const REFRESH_INTERVAL = 5000;
  let refreshTimer = null;

  // --- HTML helpers ---

  function msgRowHTML(index, text, color, size) {
    return `
      <div class="admin-scheduler-msg-row" data-msg-index="${index}">
        <input type="text" placeholder="${escapeAttr(ServerI18n.t("messageTextPlaceholder"))}"
          class="scheduler-msg-text admin-ui-input"
          value="${escapeAttr(text)}" />
        <input type="color"
          class="scheduler-msg-color admin-ui-input"
          style="padding:2px;height:36px;cursor:pointer"
          value="${escapeAttr(color || "#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size admin-ui-input"
          value="${size || 48}" />
        <button type="button" class="admin-ui-chip is-danger scheduler-remove-msg" title="Remove" aria-label="Remove message">×</button>
      </div>`;
  }

  function stateDot(state) {
    var cls = state === "active" ? "is-good" : state === "paused" ? "is-warn" : "";
    return '<span class="admin-v2-dot ' + cls + '" title="' + escapeAttr(state) + '"></span>';
  }

  function jobRowHTML(job) {
    const isPaused = job.state === "paused";
    const repeat =
      job.repeat === undefined
        ? "—"
        : job.repeat === -1
          ? "∞"
          : String(job.repeat);
    return `
      <div class="admin-scheduler-job" data-job-id="${escapeAttr(job.id)}">
        ${stateDot(job.state)}
        <div>
          <div class="admin-scheduler-job-title">#${escapeHTML(job.id)}</div>
          <div class="admin-scheduler-job-meta">${escapeHTML(ServerI18n.t("schedulerMessages"))} ${job.message_count ?? "?"}</div>
        </div>
        <span class="admin-scheduler-job-val">${job.interval ?? "?"}s</span>
        <span class="admin-scheduler-job-val">${job.sent_count ?? 0}</span>
        <span class="admin-scheduler-job-val">${escapeHTML(repeat)}</span>
        <div class="admin-scheduler-job-actions">
          <button type="button" class="admin-ui-chip scheduler-job-toggle ${isPaused ? "is-active" : "is-warn"}"
            data-job-id="${escapeAttr(job.id)}" data-action="${isPaused ? "resume" : "pause"}">
            ${isPaused ? "▶" : "⏸"}
          </button>
          <button type="button" class="admin-ui-chip is-danger scheduler-job-cancel"
            data-job-id="${escapeAttr(job.id)}">×</button>
        </div>
      </div>`;
  }

  // --- Utility ---

  function escapeAttr(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // --- Core logic ---

  function getMessages() {
    const rows = document.querySelectorAll("#schedulerMessages [data-msg-index]");
    const msgs = [];
    rows.forEach(function (row) {
      const text = row.querySelector(".scheduler-msg-text").value.trim();
      const color = row.querySelector(".scheduler-msg-color").value;
      const size = parseInt(row.querySelector(".scheduler-msg-size").value, 10) || 48;
      if (text) {
        msgs.push({ text: text, color: color, size: size });
      }
    });
    return msgs;
  }

  function addMessageRow(text, color, size) {
    const container = document.getElementById("schedulerMessages");
    if (!container) return;
    const index = container.children.length;
    container.insertAdjacentHTML(
      "beforeend",
      msgRowHTML(index, text || "", color || "#ffffff", size || 48)
    );
  }

  function removeMessageRow(btn) {
    const row = btn.closest("[data-msg-index]");
    if (row) row.remove();
    const container = document.getElementById("schedulerMessages");
    if (container) {
      container.querySelectorAll("[data-msg-index]").forEach(function (el, i) {
        el.dataset.msgIndex = i;
      });
    }
  }

  async function createJob() {
    const messages = getMessages();
    if (messages.length === 0) {
      showToast(ServerI18n.t("schedulerNoMessages") || "Add at least one message", false);
      return;
    }

    const interval = parseInt(document.getElementById("schedulerInterval").value, 10);
    if (!interval || interval < 1 || interval > 3600) {
      showToast(ServerI18n.t("schedulerBadInterval") || "Interval must be 1-3600 seconds", false);
      return;
    }

    const repeat = parseInt(document.getElementById("schedulerRepeat").value, 10);
    if (isNaN(repeat) || repeat < -1 || repeat > 10000) {
      showToast(ServerI18n.t("schedulerBadRepeat") || "Repeat must be -1 to 10000", false);
      return;
    }

    const createBtn = document.getElementById("schedulerCreateBtn");
    if (createBtn) createBtn.disabled = true;

    try {
      const resp = await csrfFetch("/admin/scheduler/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: messages, interval: interval, repeat: repeat }),
      });
      const data = await resp.json();
      if (resp.ok && data.ok) {
        showToast(ServerI18n.t("schedulerCreated") || "Job created");
        await fetchJobs();
      } else {
        showToast(data.error || ServerI18n.t("schedulerCreateFailed"), false);
      }
    } catch (err) {
      console.error("Scheduler create error:", err);
      showToast(ServerI18n.t("schedulerCreateFailed") || "Failed to create job", false);
    } finally {
      if (createBtn) createBtn.disabled = false;
    }
  }

  // v4 P1-4 view renderers (2026-05-19). Both views project the same
  // job list against time. Backend jobs are interval-based (no cron), so
  // we anchor them at next_run_at when known, otherwise at "now".

  function _eventType(job) {
    // Heuristic per first message text — overlay can't tell apart
    // poll/theme/webhook from the message yet, so we default to msg.
    return "msg";
  }

  function _eventIcon(type) {
    return { poll: "⊷", msg: "◈", theme: "❖", mute: "🔇", webhook: "⇌" }[type] || "◈";
  }

  function _jobAnchorHour(job) {
    if (job.next_run_at) {
      const d = new Date(job.next_run_at * 1000);
      return d.getHours();
    }
    return new Date().getHours();
  }

  function _jobTimeLabel(job) {
    if (job.next_run_at) {
      const d = new Date(job.next_run_at * 1000);
      return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
    }
    return "--:--";
  }

  function _jobDesc(job) {
    const id = job.id || "job";
    const count = job.message_count;
    return "Job #" + id + (count != null ? " · " + count + " messages" : "");
  }

  function renderTimeline(jobs) {
    const host = document.querySelector("[data-sch-timeline]");
    if (!host) return;
    const hours = [];
    const nowHour = new Date().getHours();
    for (let h = 0; h < 24; h++) {
      const isPeak = h >= Math.max(0, nowHour - 1) && h <= Math.min(23, nowHour + 2);
      hours.push(
        '<div class="admin-sch-timeline-hour' + (isPeak ? " is-peak" : "") + '">' +
          String(h).padStart(2, "0") +
        "</div>"
      );
    }

    const rowsHtml = (jobs || []).map(function (job) {
      const t = _eventType(job);
      const ic = _eventIcon(t);
      const on = job.status !== "paused";
      const conflict = false; // backend doesn't surface conflicts yet
      return (
        '<div class="admin-sch-timeline-row' + (on ? "" : " is-off") + '">' +
          '<div class="admin-sch-timeline-row-time">' + escapeHTML(_jobTimeLabel(job)) + "</div>" +
          '<div class="admin-sch-timeline-row-body">' +
            '<span class="admin-sch-evt-icon is-' + t + '">' + ic + "</span>" +
            '<span class="admin-sch-evt-desc">' + escapeHTML(_jobDesc(job)) + "</span>" +
            (conflict ? '<span class="admin-sch-evt-conflict">⚠ CONFLICT</span>' : "") +
            '<span class="admin-sch-evt-state' + (on ? " is-on" : "") + '">' + (on ? "ON" : "OFF") + "</span>" +
          "</div>" +
        "</div>"
      );
    }).join("");

    host.innerHTML =
      '<div class="admin-sch-timeline-head">' +
        '<div class="admin-sch-timeline-head-label">HOUR</div>' +
        '<div class="admin-sch-timeline-hours">' + hours.join("") + "</div>" +
      "</div>" +
      (rowsHtml || '<div class="admin-emojis-empty" style="padding:24px;text-align:center">' + escapeHTML(ServerI18n.t("noActiveJobs")) + "</div>");
  }

  function renderCalendar(jobs) {
    const host = document.querySelector("[data-sch-calendar]");
    if (!host) return;
    const dayNames = ["一", "二", "三", "四", "五", "六", "日"];
    const today = new Date();
    const todayIdx = (today.getDay() + 6) % 7; // Mon=0, Sun=6
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - todayIdx);

    const headHtml = dayNames.map(function (d, i) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const isToday = i === todayIdx;
      return (
        '<div class="admin-sch-calendar-day-head' + (isToday ? " is-today" : "") + '">' +
          escapeHTML(d) +
          '<span class="date">' + date.getDate() + "</span>" +
        "</div>"
      );
    }).join("");

    // For now project every job into today's column (no per-day scheduling
    // in backend yet); future BE work: cron expression + per-day fan-out.
    const bodyHtml = [0, 1, 2, 3, 4, 5, 6].map(function (i) {
      const chips = i === todayIdx
        ? (jobs || []).slice(0, 5).map(function (job) {
            const t = _eventType(job);
            const ic = _eventIcon(t);
            return (
              '<span class="admin-sch-cal-chip is-' + t + '">' +
                escapeHTML(_jobTimeLabel(job)) + " " + ic +
              "</span>"
            );
          }).join("")
        : "";
      return '<div class="admin-sch-calendar-cell">' + chips + "</div>";
    }).join("");

    host.innerHTML =
      '<div class="admin-sch-calendar-head">' + headHtml + "</div>" +
      '<div class="admin-sch-calendar-body">' + bodyHtml + "</div>";
  }

  async function fetchJobs() {
    const list = document.getElementById("schedulerJobsList");
    const count = document.getElementById("schedulerJobsCount");
    if (!list) return;

    try {
      const resp = await csrfFetch("/admin/scheduler/list", { method: "GET" });
      // Skip JSON parse on non-OK so 502/504 (server restart, gateway error)
      // doesn't blow up with "Unexpected token '<'" trying to parse HTML.
      if (!resp.ok) {
        list.innerHTML =
          '<div class="admin-emojis-empty">' + escapeHTML(ServerI18n.t("loadJobsFailed")) + "</div>";
        if (count) count.textContent = "—";
        return;
      }
      const data = await resp.json();
      if (!Array.isArray(data.jobs)) {
        list.innerHTML =
          '<div class="admin-emojis-empty">' + escapeHTML(ServerI18n.t("loadJobsFailed")) + "</div>";
        if (count) count.textContent = "—";
        return;
      }
      if (count) count.textContent = data.jobs.length + " 項";

      // v4 P1-4 — render timeline + calendar from job list (2026-05-19).
      renderTimeline(data.jobs);
      renderCalendar(data.jobs);
      const meta = document.querySelector("[data-sch-meta]");
      if (meta) {
        const today = new Date().toISOString().slice(0, 10);
        meta.textContent = "今天 · " + today + " · " + data.jobs.length + " 排程";
      }

      if (data.jobs.length === 0) {
        list.innerHTML =
          '<div class="admin-emojis-empty">' + escapeHTML(ServerI18n.t("noActiveJobs")) + "</div>";
        return;
      }

      list.innerHTML =
        '<div class="admin-scheduler-jobs-head"><span></span><span>JOB · 訊息</span><span>INTERVAL</span><span>SENT</span><span>REPEAT</span><span style="text-align:right">ACTIONS</span></div>' +
        data.jobs.map(jobRowHTML).join("");
    } catch (err) {
      console.error("Scheduler fetch error:", err);
      list.innerHTML =
        '<div class="admin-emojis-empty" style="color:var(--hud-crimson)">' +
        escapeHTML(ServerI18n.t("loadJobsError")) +
        "</div>";
    }
  }

  async function toggleJob(jobId, action) {
    try {
      const resp = await csrfFetch("/admin/scheduler/" + encodeURIComponent(action), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: jobId }),
      });
      const data = await resp.json();
      if (resp.ok && data.ok) {
        showToast(action === "pause" ? ServerI18n.t("jobPaused") : ServerI18n.t("jobResumed"));
        await fetchJobs();
      } else {
        showToast(data.error || ServerI18n.t("actionFailed"), false);
      }
    } catch (err) {
      console.error("Scheduler toggle error:", err);
      showToast(ServerI18n.t("actionFailed"), false);
    }
  }

  async function cancelJob(jobId) {
    try {
      const resp = await csrfFetch("/admin/scheduler/cancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: jobId }),
      });
      const data = await resp.json();
      if (resp.ok && data.ok) {
        showToast(ServerI18n.t("schedulerCancelled") || "Job cancelled");
        await fetchJobs();
      } else {
        showToast(data.error || ServerI18n.t("cancelFailed"), false);
      }
    } catch (err) {
      console.error("Scheduler cancel error:", err);
      showToast(ServerI18n.t("cancelFailed"), false);
    }
  }

  // --- Init ---

  function init() {
    const settingsGrid =
      document.getElementById("advanced-grid") ||
      document.getElementById("settings-grid");
    if (!settingsGrid) return;

    settingsGrid.insertAdjacentHTML(
      "beforeend",
      `
      <div id="${SECTION_ID}" class="admin-scheduler-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">SYSTEM · SCHEDULER · CRON / AT / RECURRING</div>
          <div class="admin-v2-title">排程器</div>
          <p class="admin-v2-note">
            按時間/週期自動送出彈幕 — 使用 apscheduler,時區以伺服器為準。
          </p>
        </div>

        <!-- v4 P1-4 view toggle (2026-05-19) — 24H TIMELINE / 7-DAY CALENDAR.
             Visualizes active jobs against time so conflicts and load
             spread are obvious at a glance. Falls back to job list below. -->
        <div class="admin-ui-toolbar admin-sch-toolbar">
          <div class="admin-ui-chip-group admin-sch-view-toggle" role="tablist">
            <button type="button" class="admin-ui-chip admin-sch-view-btn is-active" data-sch-view="timeline" role="tab" aria-selected="true">24H TIMELINE</button>
            <button type="button" class="admin-ui-chip admin-sch-view-btn" data-sch-view="calendar" role="tab" aria-selected="false">7-DAY CALENDAR</button>
          </div>
          <span class="admin-ui-spacer"></span>
          <span class="admin-ui-summary admin-sch-meta" data-sch-meta>—</span>
        </div>

        <!-- 24H TIMELINE view (rendered by renderTimeline()) -->
        <div class="admin-sch-timeline" data-sch-timeline></div>

        <!-- 7-DAY CALENDAR view (hidden until view toggles) -->
        <div class="admin-sch-calendar" data-sch-calendar hidden></div>

        <!-- Create job form -->
        <div class="admin-v2-card">
          <div class="admin-ui-monolabel" style="margin-bottom:10px">+ 新增排程</div>
          <div class="admin-scheduler-form-stack">
            <div>
              <div class="admin-ui-monolabel" style="margin-bottom:6px">MESSAGES</div>
              <div id="schedulerMessages" class="admin-scheduler-message-stack"></div>
              <button type="button" id="schedulerAddMsg" class="admin-ui-action admin-sch-add-msg">+ ${escapeHTML(ServerI18n.t("addMessageBtn"))}</button>
            </div>
            <div class="admin-scheduler-config">
              <label>
                <span class="admin-ui-monolabel">INTERVAL · 秒</span>
                <input id="schedulerInterval" type="number" value="10" min="1" max="3600" class="admin-ui-input" />
              </label>
              <label>
                <span class="admin-ui-monolabel">REPEAT · -1=∞</span>
                <input id="schedulerRepeat" type="number" value="-1" min="-1" max="10000" class="admin-ui-input" />
              </label>
              <div class="admin-scheduler-create-cell">
                <button type="button" id="schedulerCreateBtn" class="admin-ui-action is-primary admin-sch-create-btn">${escapeHTML(ServerI18n.t("createBtn"))}</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Active jobs list -->
        <div class="admin-v2-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span class="admin-ui-monolabel">JOBS · 進行中</span>
            <span class="admin-ui-monolabel" style="margin-left:auto" id="schedulerJobsCount">—</span>
          </div>
          <div id="schedulerJobsList" class="admin-scheduler-jobs">
            <div class="admin-emojis-empty">${escapeHTML(ServerI18n.t("loadingJobs"))}</div>
          </div>
        </div>
      </div>
    `
    );

    // Bind view toggle (v4 P1-4 timeline/calendar) — renderTimeline /
    // renderCalendar both run from fetchJobs() result.
    const viewToggle = document.querySelectorAll("[data-sch-view]");
    viewToggle.forEach((btn) => {
      btn.addEventListener("click", () => {
        const view = btn.dataset.schView;
        viewToggle.forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });
        const tl = document.querySelector("[data-sch-timeline]");
        const cal = document.querySelector("[data-sch-calendar]");
        if (tl) tl.hidden = view !== "timeline";
        if (cal) cal.hidden = view !== "calendar";
      });
    });

    // Add initial empty message row
    addMessageRow("", "#ffffff", 48);

    // Event delegation for message rows
    const msgContainer = document.getElementById("schedulerMessages");
    if (msgContainer) {
      msgContainer.addEventListener("click", function (e) {
        const removeBtn = e.target.closest(".scheduler-remove-msg");
        if (removeBtn) {
          removeMessageRow(removeBtn);
        }
      });
    }

    // Add message button
    const addBtn = document.getElementById("schedulerAddMsg");
    if (addBtn) {
      addBtn.addEventListener("click", function () {
        addMessageRow("", "#ffffff", 48);
      });
    }

    // Create button
    const createBtn = document.getElementById("schedulerCreateBtn");
    if (createBtn) {
      createBtn.addEventListener("click", createJob);
    }

    // Job list event delegation (pause/resume/cancel)
    const jobsList = document.getElementById("schedulerJobsList");
    if (jobsList) {
      jobsList.addEventListener("click", function (e) {
        const toggleBtn = e.target.closest(".scheduler-job-toggle");
        if (toggleBtn) {
          toggleJob(toggleBtn.dataset.jobId, toggleBtn.dataset.action);
          return;
        }
        const cancelBtn = e.target.closest(".scheduler-job-cancel");
        if (cancelBtn) {
          cancelJob(cancelBtn.dataset.jobId);
        }
      });
    }

    // Initial fetch + auto-refresh
    fetchJobs();
    if (refreshTimer) clearInterval(refreshTimer);
    refreshTimer = setInterval(fetchJobs, REFRESH_INTERVAL);

    // Cleanup on page unload
    window.addEventListener("beforeunload", function () {
      if (refreshTimer) {
        clearInterval(refreshTimer);
        refreshTimer = null;
      }
    });
  }

  // Wait for admin.js to finish rendering.
  function waitForGridAndInit() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    let initializing = false;

    const observer = new MutationObserver(function () {
      const g =
        document.getElementById("advanced-grid") ||
        document.getElementById("settings-grid");
      if (g && !document.getElementById(SECTION_ID) && !initializing) {
        initializing = true;
        try {
          init();
        } finally {
          initializing = false;
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const grid =
      document.getElementById("advanced-grid") ||
      document.getElementById("settings-grid");
    if (grid && !document.getElementById(SECTION_ID)) {
      init();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", waitForGridAndInit);
  } else {
    waitForGridAndInit();
  }
})();
