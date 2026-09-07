/**
 * Admin · Replay Playback + Recording Controls (extracted from admin.js
 * 2026-04-28 Group D-3 split).
 *
 * Owns the buttons inside sec-history that drive /admin/replay:
 *   - replayStartBtn / replayPauseBtn / replayResumeBtn / replayStopBtn
 *   - replayRecordBtn  (plus replayRecordingIndicator + replayRecordingTimer)
 *
 * 2026-09-07：暫停／繼續／停止／進度／錄製指示搬進全域的
 * `.admin-replay-bar`（admin-replay-bar.js），id 不變所以這裡的查找照舊。
 *   - exportJsonBtn    (JSON timeline export)
 *
 * Listens to admin-panel-rendered to wire up after admin.js renders the
 * history card. Uses globals: csrfFetch, showToast, ServerI18n,
 * AdminHistory.allHistoryRecords, ReplayRecorder.
 *
 * Loaded as <script defer> in admin.html after admin-history.js.
 */
(function () {
  "use strict";

  // ── Replay playback state ───────────────────────────────────────

  let _replayPollTimer = null;

  // 2026-09-07（設計稿 08 · H1）：進行中的控制項搬到全域的 .admin-replay-bar，
  // 所以不能再用「startBtn 不在就整個 return」——重播跑起來之後主持人多半
  // 已經離開紀錄頁，那顆按鈕本來就不在 DOM 裡，早退會讓暫停／停止永遠不出現。
  // 每個元素各自判斷有沒有。
  function _updateReplayUI(state) {
    if (window.AdminReplayBar) window.AdminReplayBar.ensure();
    const startBtn = document.getElementById("replayStartBtn");
    const pauseBtn = document.getElementById("replayPauseBtn");
    const resumeBtn = document.getElementById("replayResumeBtn");
    const stopBtn = document.getElementById("replayStopBtn");
    const progressEl = document.getElementById("replayProgress");
    const show = (el, on) => { if (el) el.classList.toggle("hidden", !on); };

    const playing = state === "playing";
    const paused = state === "paused";
    show(startBtn, !playing && !paused);
    show(pauseBtn, playing);
    show(resumeBtn, paused);
    show(stopBtn, playing || paused);
    show(progressEl, playing || paused);
    if (!playing && !paused && progressEl) progressEl.textContent = "";

    // 閒置就把整條列收起——一條永遠都在的空白列比沒有還糟
    if (window.AdminReplayBar) {
      const recording = !document
        .getElementById("replayRecordingIndicator")
        ?.classList.contains("hidden");
      window.AdminReplayBar.setActive(playing || paused || !!recording);
    }
  }

  function _pollReplayStatus() {
    if (_replayPollTimer) clearInterval(_replayPollTimer);
    _replayPollTimer = setInterval(async () => {
      try {
        const res = await fetch("/admin/replay/status", { credentials: "same-origin" });
        if (!res.ok) return;
        const data = await res.json();
        const progressEl = document.getElementById("replayProgress");
        if (progressEl) {
          progressEl.textContent = ServerI18n.t("replayingProgress").replace("{sent}", data.sent).replace("{total}", data.total);
        }
        _updateReplayUI(data.state);
        if (data.state === "stopped") {
          clearInterval(_replayPollTimer);
          _replayPollTimer = null;
        }
      } catch (e) {
        // ignore polling errors
      }
    }, 500);
  }

  function _gatherSelectedRecords() {
    const checkboxes = document.querySelectorAll(".replay-record-cb:checked");
    if (checkboxes.length === 0) {
      window.showToast(window.ServerI18n.t("noRecordsSelected"), false);
      return null;
    }
    const searchTerm = document.getElementById("historySearch")?.value?.toLowerCase() || "";
    const allRecords = (window.AdminHistory && window.AdminHistory.allHistoryRecords) || [];
    const displayedRecords = searchTerm
      ? allRecords.filter((r) => (r.text || "").toLowerCase().includes(searchTerm))
      : allRecords;
    const selectedRecords = [];
    checkboxes.forEach((cb) => {
      const idx = parseInt(cb.dataset.recordIndex, 10);
      if (displayedRecords[idx]) selectedRecords.push(displayedRecords[idx]);
    });
    return selectedRecords;
  }

  async function _startReplay() {
    const selectedRecords = _gatherSelectedRecords();
    if (!selectedRecords || selectedRecords.length === 0) return;

    const speed = parseFloat(document.getElementById("replaySpeed")?.value || "1");

    try {
      const res = await window.csrfFetch("/admin/replay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ records: selectedRecords, speedMultiplier: speed }),
      });
      if (res.ok) {
        await res.json();
        window.showToast(window.ServerI18n.t("replayStarted"), true);
        _updateReplayUI("playing");
        _pollReplayStatus();
      } else {
        const err = await res.json();
        window.showToast(window.ServerI18n.t("replayError").replace("{error}", err.error || res.statusText), false);
      }
    } catch (e) {
      window.showToast(window.ServerI18n.t("replayFailed"), false);
    }
  }

  async function _pauseReplay() {
    try {
      await window.csrfFetch("/admin/replay/pause", { method: "POST" });
      _updateReplayUI("paused");
    } catch (e) {
      window.showToast(window.ServerI18n.t("replayPauseFailed"), false);
    }
  }

  async function _resumeReplay() {
    try {
      await window.csrfFetch("/admin/replay/resume", { method: "POST" });
      _updateReplayUI("playing");
    } catch (e) {
      window.showToast(window.ServerI18n.t("replayResumeFailed"), false);
    }
  }

  async function _stopReplay() {
    try {
      await window.csrfFetch("/admin/replay/stop", { method: "POST" });
      _updateReplayUI("stopped");
      if (_replayPollTimer) {
        clearInterval(_replayPollTimer);
        _replayPollTimer = null;
      }
    } catch (e) {
      window.showToast(window.ServerI18n.t("replayStopFailed"), false);
    }
  }

  // ── Record Replay (capture poll → recorder) ─────────────────────

  let _replayRecorder = null;
  let _recordingTimerInterval = null;
  let _recordingStartTime = 0;
  let _recordingReplayPollTimer = null;

  function _updateRecordingTimer() {
    const timerEl = document.getElementById("replayRecordingTimer");
    if (!timerEl) return;
    const elapsed = Math.floor((Date.now() - _recordingStartTime) / 1000);
    const min = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const sec = String(elapsed % 60).padStart(2, "0");
    timerEl.textContent = `${min}:${sec}`;
  }

  function _showRecordingIndicator(show) {
    if (window.AdminReplayBar) window.AdminReplayBar.ensure();
    const indicator = document.getElementById("replayRecordingIndicator");
    const recordBtn = document.getElementById("replayRecordBtn");
    if (indicator) indicator.classList.toggle("hidden", !show);
    if (recordBtn) recordBtn.classList.toggle("hidden", show);
    // 錄製中也要讓全域列露出來（錄製不一定伴隨播放狀態變化）
    if (show && window.AdminReplayBar) window.AdminReplayBar.setActive(true);
  }

  async function _startRecordReplay() {
    const selectedRecords = _gatherSelectedRecords();
    if (!selectedRecords || selectedRecords.length === 0) return;

    if (typeof ReplayRecorder === "undefined") {
      window.showToast(window.ServerI18n.t("replayRecorderNotLoaded"), false);
      return;
    }

    _replayRecorder = new ReplayRecorder();
    _replayRecorder.init(1280, 720);
    _replayRecorder.startRecording();

    _recordingStartTime = Date.now();
    _recordingTimerInterval = setInterval(_updateRecordingTimer, 1000);
    _showRecordingIndicator(true);

    const speed = parseFloat(document.getElementById("replaySpeed")?.value || "1");

    try {
      const res = await window.csrfFetch("/admin/replay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ records: selectedRecords, speedMultiplier: speed }),
      });
      if (res.ok) {
        const data = await res.json();
        window.showToast(window.ServerI18n.t("recordingReplay").replace("{count}", data.count).replace("{speed}", speed), true);
        _updateReplayUI("playing");
        _pollReplayStatusForRecording();
      } else {
        const err = await res.json();
        window.showToast(window.ServerI18n.t("replayError").replace("{error}", err.error || res.statusText), false);
        _stopRecordReplay();
      }
    } catch (e) {
      window.showToast(window.ServerI18n.t("replayFailed"), false);
      _stopRecordReplay();
    }
  }

  function _pollReplayStatusForRecording() {
    if (_recordingReplayPollTimer) clearInterval(_recordingReplayPollTimer);
    let _lastSentCount = 0;

    _recordingReplayPollTimer = setInterval(async () => {
      try {
        const res = await fetch("/admin/replay/status", { credentials: "same-origin" });
        if (!res.ok) return;
        const data = await res.json();
        const progressEl = document.getElementById("replayProgress");
        if (progressEl) {
          progressEl.textContent = window.ServerI18n.t("recordingProgress").replace("{sent}", data.sent).replace("{total}", data.total);
          progressEl.classList.remove("hidden");
        }
        _updateReplayUI(data.state);

        if (data.sent > _lastSentCount && data.sentRecords) {
          const newRecords = data.sentRecords.slice(_lastSentCount);
          for (const r of newRecords) {
            if (_replayRecorder) _replayRecorder.addDanmu(r);
          }
        }
        _lastSentCount = data.sent || 0;

        if (data.state === "stopped") {
          clearInterval(_recordingReplayPollTimer);
          _recordingReplayPollTimer = null;
          setTimeout(() => _stopRecordReplay(), 3000);
        }
      } catch (e) {
        // ignore polling errors
      }
    }, 500);
  }

  async function _stopRecordReplay() {
    if (_recordingTimerInterval) {
      clearInterval(_recordingTimerInterval);
      _recordingTimerInterval = null;
    }
    if (_recordingReplayPollTimer) {
      clearInterval(_recordingReplayPollTimer);
      _recordingReplayPollTimer = null;
    }
    _showRecordingIndicator(false);
    _updateReplayUI("stopped");

    if (_replayRecorder) {
      await _replayRecorder.downloadRecording();
      _replayRecorder = null;
      window.showToast(window.ServerI18n.t("recordingSaved"), true);
    }
  }

  // ── JSON timeline export ────────────────────────────────────────

  async function _exportJsonTimeline() {
    const hours = document.getElementById("historyHours")?.value || "24";
    try {
      const res = await fetch(`/admin/history/export?hours=${hours}`, { credentials: "same-origin" });
      if (!res.ok) {
        await res.json().catch(() => ({}));
        window.showToast(window.ServerI18n.t("exportFailed"), false);
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `danmu-timeline-${hours}h.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      window.showToast(window.ServerI18n.t("jsonTimelineExported"), true);
    } catch (e) {
      window.showToast(window.ServerI18n.t("exportFailed"), false);
    }
  }

  // ── Wire-up ─────────────────────────────────────────────────────

  function _bindButtons() {
    const map = [
      ["replayStartBtn", _startReplay],
      ["replayPauseBtn", _pauseReplay],
      ["replayResumeBtn", _resumeReplay],
      ["replayStopBtn", _stopReplay],
      ["replayRecordBtn", _startRecordReplay],
      ["exportJsonBtn", _exportJsonTimeline],
    ];
    map.forEach(function ([id, handler]) {
      const el = document.getElementById(id);
      if (el && !el.dataset.replayCtrlsBound) {
        el.addEventListener("click", handler);
        el.dataset.replayCtrlsBound = "1";
      }
    });
  }

  document.addEventListener("admin-panel-rendered", _bindButtons);
  // Defensive: also try after a short delay in case event already fired.
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(_bindButtons, 800);
  });
})();
