// admin-poll.js — Poll management for admin dashboard
// Depends on: window.csrfFetch, window.showToast, window.ServerI18n
(function () {
  "use strict";

  var _pollStatusTimer = null;

  async function _createPoll() {
    var question = (document.getElementById("pollQuestion")?.value || "").trim();
    var optionInputs = document.querySelectorAll(".poll-option-input");
    var options = Array.from(optionInputs).map(function (el) { return el.value.trim(); }).filter(Boolean);

    if (!question) { window.showToast(ServerI18n.t("pollEnterQuestion"), false); return; }
    if (options.length < 2) { window.showToast(ServerI18n.t("pollMinOptions"), false); return; }

    try {
      var res = await window.csrfFetch("/admin/poll/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question, options: options }),
      });
      var data = await res.json();
      if (!res.ok) { window.showToast(data.error || ServerI18n.t("pollCreateFailed"), false); return; }
      window.showToast(ServerI18n.t("pollCreated"), true);
      _renderPollStatus(data);
      _pollPollStatus();
    } catch (e) {
      window.showToast(ServerI18n.t("pollCreateFailed"), false);
    }
  }

  async function _endPoll() {
    try {
      var res = await window.csrfFetch("/admin/poll/end", { method: "POST" });
      var data = await res.json();
      if (!res.ok) { window.showToast(data.error || ServerI18n.t("pollEndFailed"), false); return; }
      window.showToast(ServerI18n.t("pollEnded"), true);
      _renderPollStatus(data);
      if (_pollStatusTimer) { clearInterval(_pollStatusTimer); _pollStatusTimer = null; }
    } catch (e) {
      window.showToast(ServerI18n.t("pollEndFailed"), false);
    }
  }

  async function _resetPoll() {
    try {
      var res = await window.csrfFetch("/admin/poll/reset", { method: "POST" });
      var data = await res.json();
      if (!res.ok) { window.showToast(data.error || ServerI18n.t("pollResetFailed"), false); return; }
      window.showToast(ServerI18n.t("pollResetDone"), true);
      _renderPollStatus(data);
      if (_pollStatusTimer) { clearInterval(_pollStatusTimer); _pollStatusTimer = null; }
    } catch (e) {
      window.showToast(ServerI18n.t("pollResetFailed"), false);
    }
  }

  function _pollPollStatus() {
    if (_pollStatusTimer) { clearInterval(_pollStatusTimer); _pollStatusTimer = null; }
    var fetchStatus = async function () {
      try {
        var res = await fetch("/admin/poll/status", { credentials: "same-origin" });
        if (res.ok) {
          var data = await res.json();
          _renderPollStatus(data);
          if (data.state !== "active") {
            if (_pollStatusTimer) { clearInterval(_pollStatusTimer); _pollStatusTimer = null; }
          }
        }
      } catch (_) { /* ignore */ }
    };
    fetchStatus();
    _pollStatusTimer = setInterval(fetchStatus, 2000);
  }

  function _renderPollEmptyState() {
    var wrap = document.createElement("div");
    wrap.className = "admin-proto-empty admin-proto-empty--poll";
    wrap.setAttribute("data-empty-kind", "poll");
    wrap.innerHTML = `
      <div class="admin-proto-empty-title">還沒有任何投票</div>
      <div class="admin-proto-empty-desc">建好的投票會排在這裡,可即時推到 Overlay,也可以用模板快速建立。</div>
      <div class="admin-proto-empty-actions">
        <button type="button" class="admin-proto-empty-primary" data-empty-cta="poll-create">+ 新建投票</button>
        <span class="admin-be-placeholder-control admin-be-placeholder-inline" role="note">[PLACEHOLDER] 從模板（待 BE）</span>
      </div>
      <div class="admin-proto-poll-template-grid">
        <div class="admin-proto-poll-template-card">
          <div class="t">是 / 否</div>
          <div class="d">最簡 2 選項</div>
          <div class="eta">建立 ~5s</div>
        </div>
        <div class="admin-proto-poll-template-card">
          <div class="t">滿意度</div>
          <div class="d">1-5 星</div>
          <div class="eta">建立 ~10s</div>
        </div>
        <div class="admin-proto-poll-template-card">
          <div class="t">多選題</div>
          <div class="d">4 個 + 圖片</div>
          <div class="eta">建立 ~30s</div>
        </div>
      </div>
    `;
    var cta = wrap.querySelector('[data-empty-cta="poll-create"]');
    if (cta) {
      cta.addEventListener("click", function () {
        var addBtn = document.querySelector('#sec-polls [data-poll-action="add"]');
        if (addBtn) addBtn.click();
      });
    }
    return wrap;
  }

  function _renderPollStatus(data) {
    var display = document.getElementById("pollStatusDisplay");
    if (!display) return;
    display.textContent = "";

    if (!data || data.state === "idle") {
      display.appendChild(_renderPollEmptyState());
      return;
    }
    var total = data.total_votes || 0;
    var maxCount = Math.max(1, ...data.options.map(function (o) { return o.count; }));

    var card = document.createElement("div");
    card.className = "mt-2 p-3 bg-slate-800/60 rounded-lg border border-slate-700/50";

    var headerRow = document.createElement("div");
    headerRow.className = "flex items-center gap-2 mb-2";
    var dot = document.createElement("span");
    dot.className = "inline-block w-2 h-2 rounded-full " + (data.state === "active" ? "bg-green-400 animate-pulse" : "bg-yellow-400");
    headerRow.appendChild(dot);
    var questionEl = document.createElement("span");
    questionEl.className = "text-white font-semibold text-sm";
    questionEl.textContent = data.question || "";
    headerRow.appendChild(questionEl);
    var stateEl = document.createElement("span");
    stateEl.className = "text-xs text-slate-400 ml-auto";
    stateEl.textContent = data.state;
    headerRow.appendChild(stateEl);
    card.appendChild(headerRow);

    data.options.forEach(function (o) {
      var row = document.createElement("div");
      row.className = "mb-1.5";
      var labelRow = document.createElement("div");
      labelRow.className = "flex justify-between text-xs text-slate-300 mb-0.5";
      var labelLeft = document.createElement("span");
      var keyBold = document.createElement("b");
      keyBold.textContent = o.key + ".";
      labelLeft.appendChild(keyBold);
      labelLeft.appendChild(document.createTextNode(" " + o.text));
      var labelRight = document.createElement("span");
      labelRight.textContent = o.count + " (" + o.percentage + "%)";
      labelRow.appendChild(labelLeft);
      labelRow.appendChild(labelRight);
      var barBg = document.createElement("div");
      barBg.className = "bg-slate-700/50 rounded h-2 overflow-hidden";
      var barFill = document.createElement("div");
      barFill.className = "h-full rounded bg-gradient-to-r from-cyan-600 to-cyan-400 transition-all duration-300";
      barFill.style.width = (o.count / maxCount * 100) + "%";
      barBg.appendChild(barFill);
      row.appendChild(labelRow);
      row.appendChild(barBg);
      card.appendChild(row);
    });

    var footer = document.createElement("div");
    footer.className = "text-xs text-slate-400 mt-1";
    footer.textContent = ServerI18n.t("pollTotalVotes").replace("{0}", total);
    card.appendChild(footer);
    display.appendChild(card);
  }

  function _initPollEventListeners() {
    var pollRoot = document.getElementById("sec-polls");
    if (!pollRoot) return;
    if (pollRoot.dataset.pollLegacyBound === "1") return;
    pollRoot.dataset.pollLegacyBound = "1";

    var pollCreateBtn = document.getElementById("pollCreateBtn");
    if (pollCreateBtn) pollCreateBtn.addEventListener("click", _createPoll);
    var pollEndBtn = document.getElementById("pollEndBtn");
    if (pollEndBtn) pollEndBtn.addEventListener("click", _endPoll);
    var pollResetBtn = document.getElementById("pollResetBtn");
    if (pollResetBtn) pollResetBtn.addEventListener("click", _resetPoll);

    var pollAddOptionBtn = document.getElementById("pollAddOptionBtn");
    if (pollAddOptionBtn) {
      pollAddOptionBtn.addEventListener("click", function () {
        var container = document.getElementById("pollOptionsContainer");
        if (!container) return;
        var count = container.querySelectorAll(".poll-option-input").length;
        if (count >= 6) { window.showToast(ServerI18n.t("maxPollOptions"), false); return; }
        var input = document.createElement("input");
        input.type = "text";
        input.className = "poll-option-input w-full p-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm";
        input.placeholder = String.fromCharCode(65 + count) + ". Option " + (count + 1);
        input.maxLength = 100;
        container.appendChild(input);
      });
    }

    var pollRemoveOptionBtn = document.getElementById("pollRemoveOptionBtn");
    if (pollRemoveOptionBtn) {
      pollRemoveOptionBtn.addEventListener("click", function () {
        var container = document.getElementById("pollOptionsContainer");
        if (!container) return;
        var inputs = container.querySelectorAll(".poll-option-input");
        if (inputs.length <= 2) { window.showToast(ServerI18n.t("minPollOptions"), false); return; }
        inputs[inputs.length - 1].remove();
      });
    }

    var pollDetails = pollRoot;
    if (pollDetails) {
      pollDetails.addEventListener("toggle", function () {
        if (pollDetails.open) _pollPollStatus();
      });
      _pollPollStatus();
    }

    window.addEventListener("beforeunload", function () {
      if (_pollStatusTimer) { clearInterval(_pollStatusTimer); _pollStatusTimer = null; }
    });
  }

  // admin.js renders the control panel HTML asynchronously (after an HTTP fetch),
  // so DOMContentLoaded fires before poll DOM elements exist.
  // admin.js dispatches "admin-panel-rendered" once the DOM is ready.
  document.addEventListener("admin-panel-rendered", function () {
    _initPollEventListeners();
  });
  document.addEventListener("DOMContentLoaded", function () {
    _initPollEventListeners();
  });
  window.addEventListener("hashchange", function () {
    var hash = window.location.hash || "";
    if (hash.indexOf("/polls") !== -1) _initPollEventListeners();
  });
})();
