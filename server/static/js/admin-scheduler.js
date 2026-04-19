(function () {
  "use strict";

  var loadDetailsState = window.AdminUtils.loadDetailsState;
  var saveDetailsState = window.AdminUtils.saveDetailsState;
  var escapeHTML = window.AdminUtils.escapeHtml;

  const REFRESH_INTERVAL = 5000;
  let refreshTimer = null;

  function isOpen(id) {
    var s = loadDetailsState();
    return s[id] !== undefined ? s[id] : false;
  }

  // --- HTML helpers ---

  function msgRowHTML(index, text, color, size) {
    return `
      <div class="flex items-center gap-2" data-msg-index="${index}">
        <input type="text" placeholder="${ServerI18n.t("messageTextPlaceholder")}"
          class="scheduler-msg-text flex-1 bg-slate-800/60 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2 focus:ring-sky-400 focus:border-sky-400 placeholder-slate-500"
          value="${escapeAttr(text)}" />
        <input type="color"
          class="scheduler-msg-color w-10 h-10 rounded-lg border border-slate-700 bg-slate-800/60 cursor-pointer p-1"
          value="${escapeAttr(color || "#ffffff")}" title="Color" />
        <input type="number" min="12" max="200" placeholder="Size"
          class="scheduler-msg-size w-20 bg-slate-800/60 border border-slate-700 text-slate-200 text-sm rounded-lg px-2 py-2 focus:ring-sky-400 focus:border-sky-400"
          value="${size || 48}" />
        <button type="button" class="scheduler-remove-msg text-red-400 hover:text-red-300 transition-colors p-1" title="Remove" aria-label="Remove message">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>`;
  }

  function stateBadge(state) {
    if (state === "active") {
      return '<span class="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-green-600/30 text-green-300 border border-green-500/40">' + ServerI18n.t("stateActive") + '</span>';
    }
    if (state === "paused") {
      return '<span class="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-yellow-600/30 text-yellow-300 border border-yellow-500/40">' + ServerI18n.t("statePaused") + '</span>';
    }
    return '<span class="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-slate-600/30 text-slate-400 border border-slate-500/40">' + escapeHTML(state) + '</span>';
  }

  function jobCardHTML(job) {
    const isPaused = job.state === "paused";
    return `
      <div class="bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 space-y-2" data-job-id="${escapeAttr(job.id)}">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono text-slate-400">#${escapeHTML(job.id)}</span>
            ${stateBadge(job.state)}
          </div>
          <div class="flex items-center gap-1">
            <button type="button" class="scheduler-job-toggle px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${isPaused ? "bg-green-600/80 hover:bg-green-500 text-white" : "bg-yellow-600/80 hover:bg-yellow-500 text-white"}"
              data-job-id="${escapeAttr(job.id)}" data-action="${isPaused ? "resume" : "pause"}">
              ${isPaused ? ServerI18n.t("resumeJobBtn") : ServerI18n.t("pauseJobBtn")}
            </button>
            <button type="button" class="scheduler-job-cancel px-3 py-1 text-xs font-semibold rounded-lg bg-red-600/80 hover:bg-red-500 text-white transition-colors"
              data-job-id="${escapeAttr(job.id)}">
              ${ServerI18n.t("cancelJobBtn")}
            </button>
          </div>
        </div>
        <div class="text-xs text-slate-400 flex flex-wrap gap-x-4 gap-y-1">
          <span>${ServerI18n.t("schedulerMessages")} <strong class="text-slate-200">${job.message_count ?? "?"}</strong></span>
          <span>${ServerI18n.t("schedulerInterval")} <strong class="text-slate-200">${job.interval ?? "?"}s</strong></span>
          <span>${ServerI18n.t("schedulerSent")} <strong class="text-slate-200">${job.sent_count ?? 0}</strong></span>
          ${job.repeat !== undefined ? '<span>' + ServerI18n.t("schedulerRepeat") + ' <strong class="text-slate-200">' + (job.repeat === -1 ? ServerI18n.t("repeatInfinite") : job.repeat) + "</strong></span>" : ""}
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
    container.insertAdjacentHTML("beforeend", msgRowHTML(index, text || "", color || "#ffffff", size || 48));
  }

  function removeMessageRow(btn) {
    const row = btn.closest("[data-msg-index]");
    if (row) row.remove();
    // Re-index remaining rows
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

  async function fetchJobs() {
    const list = document.getElementById("schedulerJobsList");
    if (!list) return;

    try {
      const resp = await csrfFetch("/admin/scheduler/list", { method: "GET" });
      const data = await resp.json();
      if (!resp.ok || !Array.isArray(data.jobs)) {
        list.innerHTML = '<p class="text-sm text-slate-400">' + ServerI18n.t("loadJobsFailed") + '</p>';
        return;
      }

      if (data.jobs.length === 0) {
        list.innerHTML = '<p class="text-sm text-slate-400">' + ServerI18n.t("noActiveJobs") + '</p>';
        return;
      }

      list.innerHTML = data.jobs.map(jobCardHTML).join("");
    } catch (err) {
      console.error("Scheduler fetch error:", err);
      list.innerHTML = '<p class="text-sm text-red-400">' + ServerI18n.t("loadJobsError") + '</p>';
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
    const settingsGrid = document.getElementById("advanced-grid") || document.getElementById("settings-grid");
    if (!settingsGrid) return; // not logged in or grid not rendered yet

    const openAttr = isOpen("sec-scheduler") ? "open" : "";

    settingsGrid.insertAdjacentHTML("beforeend", `
      <details id="sec-scheduler" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent lg:col-span-2 scroll-mt-24" ${openAttr}>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white" data-i18n="schedulerTitle">${ServerI18n.t("schedulerTitle") || "Scheduled Broadcasts"}</h3>
            <p class="text-sm text-slate-400 mt-1" data-i18n="schedulerDesc">${ServerI18n.t("schedulerDesc") || "Automatically send messages on a timer"}</p>
          </div>
          <svg class="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        </summary>

        <div class="space-y-4 mt-4">
          <!-- Message editor -->
          <div>
            <label class="block text-sm font-medium text-slate-300 mb-2">${ServerI18n.t("messagesLabel")}</label>
            <div id="schedulerMessages" class="space-y-2"></div>
            <button type="button" id="schedulerAddMsg"
              class="mt-2 px-3 py-1.5 text-sm font-semibold rounded-lg bg-slate-700/80 hover:bg-slate-600 text-slate-200 transition-colors">
              ${ServerI18n.t("addMessageBtn")}
            </button>
          </div>

          <!-- Config row -->
          <div class="flex flex-wrap items-end gap-3">
            <div>
              <label for="schedulerInterval" class="block text-xs text-slate-400 mb-1">${ServerI18n.t("intervalLabel")}</label>
              <input id="schedulerInterval" type="number" value="10" min="1" max="3600"
                class="w-28 bg-slate-800/60 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2 focus:ring-sky-400 focus:border-sky-400" />
            </div>
            <div>
              <label for="schedulerRepeat" class="block text-xs text-slate-400 mb-1">${ServerI18n.t("repeatLabel")}</label>
              <input id="schedulerRepeat" type="number" value="-1" min="-1" max="10000"
                class="w-28 bg-slate-800/60 border border-slate-700 text-slate-200 text-sm rounded-lg px-3 py-2 focus:ring-sky-400 focus:border-sky-400" />
            </div>
            <button type="button" id="schedulerCreateBtn"
              class="px-5 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              ${ServerI18n.t("createBtn")}
            </button>
          </div>

          <!-- Active jobs -->
          <div>
            <h4 class="text-sm font-medium text-slate-300 mb-2">${ServerI18n.t("activeJobsTitle")}</h4>
            <div id="schedulerJobsList" class="space-y-2">
              <p class="text-sm text-slate-400">${ServerI18n.t("loadingJobs")}</p>
            </div>
          </div>
        </div>
      </details>
    `);

    // Persist open/close state
    const detailsEl = document.getElementById("sec-scheduler");
    if (detailsEl) {
      detailsEl.addEventListener("toggle", function () {
        const current = loadDetailsState();
        current["sec-scheduler"] = detailsEl.open;
        saveDetailsState(current);
      });
    }

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
    refreshTimer = setInterval(fetchJobs, REFRESH_INTERVAL);

    // Cleanup on page unload
    window.addEventListener("beforeunload", function () {
      if (refreshTimer) {
        clearInterval(refreshTimer);
        refreshTimer = null;
      }
    });
  }

  // Wait for admin.js to finish rendering. admin.js rebuilds the entire DOM
  // via innerHTML on every renderControlPanel() call, so we keep observing
  // and re-inject when our section is wiped out.
  function waitForGridAndInit() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    let initializing = false;

    const observer = new MutationObserver(function () {
      const g = document.getElementById("advanced-grid") || document.getElementById("settings-grid");
      if (g && !document.getElementById("sec-scheduler") && !initializing) {
        initializing = true;
        try { init(); } finally { initializing = false; }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Also check immediately
    const grid = document.getElementById("advanced-grid") || document.getElementById("settings-grid");
    if (grid && !document.getElementById("sec-scheduler")) {
      init();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", waitForGridAndInit);
  } else {
    waitForGridAndInit();
  }
})();
