/**
 * Admin · 重播進行中的控制（2026-04-28 從 admin.js 拆出）
 *
 * 只剩三顆：replayPauseBtn / replayResumeBtn / replayStopBtn，全部住在全域的
 * `.admin-replay-bar`（admin-replay-bar.js），所以離開任何頁面都停得下來。
 *
 * 2026-09-07（設計稿 08 · H1）「重播」分頁退場後一併移除的：
 *   - replayStartBtn（勾選訊息後重播）與 _gatherSelectedRecords
 *   - replayRecordBtn / ReplayRecorder（錄製回放）
 *   - exportJsonBtn（JSON 時間軸匯出）
 * 三者都只掛在退場的 sec-history 上。整場重播由「場次 › 重播這場」提供，
 * 而那條路徑只發 toast，所以本模組改成自己去認領正在跑的重播
 * （_adoptRunningReplay）＋ 對外開一個 notifyStarted()。
 *
 * Uses globals: csrfFetch, showToast, ServerI18n.
 * Loaded as <script defer> in admin.html.
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
    const pauseBtn = document.getElementById("replayPauseBtn");
    const resumeBtn = document.getElementById("replayResumeBtn");
    const stopBtn = document.getElementById("replayStopBtn");
    const progressEl = document.getElementById("replayProgress");
    const show = (el, on) => { if (el) el.classList.toggle("hidden", !on); };

    const playing = state === "playing";
    const paused = state === "paused";
    show(pauseBtn, playing);
    show(resumeBtn, paused);
    show(stopBtn, playing || paused);
    show(progressEl, playing || paused);
    if (!playing && !paused && progressEl) progressEl.textContent = "";

    // 閒置就把整條列收起——一條永遠都在的空白列比沒有還糟
    if (window.AdminReplayBar) window.AdminReplayBar.setActive(playing || paused);
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

  function _bindButtons() {
    const map = [
      ["replayPauseBtn", _pauseReplay],
      ["replayResumeBtn", _resumeReplay],
      ["replayStopBtn", _stopReplay],
    ];
    map.forEach(function ([id, handler]) {
      const el = document.getElementById(id);
      if (el && !el.dataset.replayCtrlsBound) {
        el.addEventListener("click", handler);
        el.dataset.replayCtrlsBound = "1";
      }
    });
  }

  // 2026-09-07（設計稿 08 · H1）：重播的啟動點只剩「場次 › 重播這場」，而它
  // 只發一個 toast——不像退場的 sec-history 啟動鈕那樣接著呼叫 _pollReplayStatus。
  // 沒有這一段，從場次面板啟動的重播會在背景跑完，全域控制列永遠不出現，
  // 也就沒有地方可以暫停或停止。
  //
  // 所以改成「不管誰啟動的都認得」：進 admin 時先問一次狀態，正在跑就把輪詢
  // 接上。啟動端另外呼叫 notifyStarted() 只是為了不用等下一次探詢。
  async function _adoptRunningReplay() {
    try {
      const res = await fetch("/admin/replay/status", { credentials: "same-origin" });
      if (!res.ok) return;
      const data = await res.json();
      if (data.state === "playing" || data.state === "paused") {
        _updateReplayUI(data.state);
        _pollReplayStatus();
      }
    } catch (_) { /* 探詢失敗就等下一次啟動時的 notifyStarted */ }
  }

  window.AdminReplayControls = {
    /** 任何啟動重播的地方都該叫一次，讓全域控制列立刻上台。 */
    notifyStarted: function () {
      _updateReplayUI("playing");
      _pollReplayStatus();
    },
  };

  document.addEventListener("admin-panel-rendered", function () {
    _bindButtons();
    _adoptRunningReplay();
  });
  // Defensive: also try after a short delay in case event already fired.
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(_bindButtons, 800);
  });
})();
