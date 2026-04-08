# Frontend State Management Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modularize admin.js (2089 lines) into focused modules with a shared event bus and store; introduce the same pattern into the Electron renderer to eliminate `window.*` globals.

**Architecture:** Two independent environments share the same conceptual pattern: a tiny event bus + state store + focused modules. Server admin uses plain IIFEs on `window.*`; Electron uses CommonJS modules and webpack. No frameworks.

**Tech Stack:** Vanilla JS (server admin), CommonJS + webpack (Electron renderer)

---

## File Map

### Server Admin
| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `server/static/js/admin-events.js` | Event bus (window.DanmuEvents) |
| Create | `server/static/js/admin-store.js` | State store (window.DanmuStore) |
| Create | `server/static/js/admin-poll.js` | Poll management + poll event listeners |
| Create | `server/static/js/admin-history.js` | Danmu history + blacklist + their event listeners |
| Rename/Modify | `server/static/js/admin.js` → stays as admin.js | Remove poll + history sections; slim to core |
| Modify | `server/templates/admin.html` | Add new script tags in correct load order |

### Electron Renderer
| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `danmu-desktop/renderer-modules/store.js` | Centralized state (tracks, trackSettings) |
| Create | `danmu-desktop/renderer-modules/events.js` | EventEmitter-based event bus |
| Modify | `danmu-desktop/renderer-modules/track-manager.js` | Replace window.danmuTracks/danmuTrackSettings with store |
| Modify | `danmu-desktop/renderer.js` | Require store and events early |

---

### Task 1: Create admin-events.js

**Files:**
- Create: `server/static/js/admin-events.js`

- [ ] **Step 1: Write admin-events.js**

```js
// admin-events.js — Lightweight publish/subscribe event bus
// Load before all admin-*.js modules.
(function () {
  "use strict";
  var _listeners = {};
  window.DanmuEvents = {
    on: function (event, fn) {
      if (!_listeners[event]) _listeners[event] = [];
      _listeners[event].push(fn);
    },
    off: function (event, fn) {
      _listeners[event] = (_listeners[event] || []).filter(function (f) { return f !== fn; });
    },
    emit: function (event, data) {
      (_listeners[event] || []).forEach(function (fn) { fn(data); });
    },
  };
})();
```

- [ ] **Step 2: Verify it loads without error**

Open browser console on `/admin`, run:
```js
DanmuEvents.on('test', (d) => console.log('got', d));
DanmuEvents.emit('test', 42);
```
Expected: `got 42` printed

- [ ] **Step 3: Commit**

```bash
git add server/static/js/admin-events.js
git commit -m "feat(admin): add DanmuEvents event bus"
```

---

### Task 2: Create admin-store.js

**Files:**
- Create: `server/static/js/admin-store.js`

- [ ] **Step 1: Write admin-store.js**

```js
// admin-store.js — Centralized state store for admin dashboard
// Load after admin-events.js, before all other admin modules.
(function () {
  "use strict";
  var _state = {
    csrfToken: null,
    settings: {},
    session: { logged_in: false },
    fontCache: [],
    wsConnected: false,
  };
  var _subscribers = [];

  window.DanmuStore = {
    get: function (key) { return _state[key]; },
    set: function (key, value) {
      _state[key] = value;
      _subscribers.forEach(function (fn) { fn(key, value); });
      window.DanmuEvents && window.DanmuEvents.emit("store:" + key, value);
    },
    subscribe: function (fn) { _subscribers.push(fn); },
    getAll: function () {
      return Object.assign({}, _state);
    },
  };
})();
```

- [ ] **Step 2: Verify in browser console**

```js
DanmuStore.set('wsConnected', true);
DanmuStore.get('wsConnected'); // true
```

Expected: `true`

- [ ] **Step 3: Commit**

```bash
git add server/static/js/admin-store.js
git commit -m "feat(admin): add DanmuStore state store"
```

---

### Task 3: Extract poll management → admin-poll.js

**Files:**
- Create: `server/static/js/admin-poll.js`
- Modify: `server/static/js/admin.js`

The poll section in admin.js is lines 884–1037 (`// --- Poll Management ---` through before `// Expose csrfFetch`). The poll event listeners are inside `addEventListeners()`.

- [ ] **Step 1: Write admin-poll.js**

Copy the poll functions from admin.js (lines 884–1037) and wrap them in an IIFE with its own event listener setup:

```js
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

  function _renderPollStatus(data) {
    var display = document.getElementById("pollStatusDisplay");
    if (!display) return;
    display.textContent = "";

    if (!data || data.state === "idle") {
      var noActive = document.createElement("span");
      noActive.className = "text-slate-500";
      noActive.textContent = ServerI18n.t("pollNoActive");
      display.appendChild(noActive);
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
    footer.className = "text-xs text-slate-500 mt-1";
    footer.textContent = ServerI18n.t("pollTotalVotes").replace("{0}", total);
    card.appendChild(footer);
    display.appendChild(card);
  }

  function _initPollEventListeners() {
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

    var pollDetails = document.getElementById("sec-polls");
    if (pollDetails) {
      pollDetails.addEventListener("toggle", function () {
        if (pollDetails.open) _pollPollStatus();
      });
      if (pollDetails.open) _pollPollStatus();
    }

    window.addEventListener("beforeunload", function () {
      if (_pollStatusTimer) { clearInterval(_pollStatusTimer); _pollStatusTimer = null; }
    });
  }

  // Wait for core to expose csrfFetch before initializing
  document.addEventListener("DOMContentLoaded", function () {
    _initPollEventListeners();
  });
})();
```

- [ ] **Step 2: Remove poll section from admin.js**

In `server/static/js/admin.js`, delete lines from `// --- Poll Management ---` (line 884) through the end of `window.csrfFetch = csrfFetch;` assignment at line 1038 — but keep the `window.csrfFetch = csrfFetch;` line (move it up to right after `csrfFetch` is defined, around line 37).

Also remove from `addEventListeners()` these blocks:
- Poll management buttons (`pollCreateBtn`, `pollEndBtn`, `pollResetBtn`)
- `pollAddOptionBtn` and `pollRemoveOptionBtn`
- Poll section toggle `sec-polls` listener
- `_pollStatusTimer` declaration at module scope

And remove from the `beforeunload` cleanup: any reference to `_pollStatusTimer` (it now lives in admin-poll.js).

- [ ] **Step 3: Verify no duplicate poll event listeners**

Load `/admin` in browser. Open poll section. Create a poll. Check that only one poll creation request fires in Network tab (not two).

- [ ] **Step 4: Commit**

```bash
git add server/static/js/admin-poll.js server/static/js/admin.js
git commit -m "feat(admin): extract poll management to admin-poll.js"
```

---

### Task 4: Extract history/blacklist → admin-history.js

**Files:**
- Create: `server/static/js/admin-history.js`
- Modify: `server/static/js/admin.js`

The history/blacklist section in admin.js is lines 252–586 (functions: `fetchBlacklist`, `addKeyword`, `removeKeyword`, `formatTimestamp`, `renderHistoryRecords`, `fetchDanmuHistory`, `clearDanmuHistory`). History event listeners are in `addEventListeners()`.

- [ ] **Step 1: Write admin-history.js**

```js
// admin-history.js — Danmu history and blacklist management
// Depends on: window.csrfFetch, window.showToast, window.ServerI18n
(function () {
  "use strict";

  var _allHistoryRecords = [];
  var _autoRefreshTimer = null;

  async function fetchBlacklist() {
    try {
      var response = await fetch("/admin/blacklist/get", { method: "GET", credentials: "same-origin" });
      if (!response.ok) {
        var errorData = await response.json();
        window.showToast(ServerI18n.t("errorFetchingBlacklist").replace("{error}", errorData.error || response.statusText), false);
        return;
      }
      var blacklist = await response.json();
      var blacklistKeywordsDiv = document.getElementById("blacklistKeywords");
      if (!blacklistKeywordsDiv) return;
      blacklistKeywordsDiv.innerHTML = "";
      if (blacklist.length === 0) {
        blacklistKeywordsDiv.innerHTML = '<p class="text-slate-400 text-sm">' + ServerI18n.t("noKeywordsYet") + "</p>";
      } else {
        blacklist.forEach(function (keyword) {
          var keywordEl = document.createElement("div");
          keywordEl.className = "flex items-center justify-between bg-slate-700/50 p-2 rounded-lg";
          var keywordSpan = document.createElement("span");
          keywordSpan.className = "text-slate-200";
          keywordSpan.textContent = keyword;
          var removeButton = document.createElement("button");
          removeButton.className = "removeKeywordBtn text-red-400 hover:text-red-600 font-semibold";
          removeButton.textContent = ServerI18n.t("remove");
          removeButton.setAttribute("data-keyword", keyword);
          keywordEl.appendChild(keywordSpan);
          keywordEl.appendChild(removeButton);
          blacklistKeywordsDiv.appendChild(keywordEl);
        });
      }
    } catch (error) {
      console.error("Fetch blacklist error:", error);
      window.showToast(ServerI18n.t("fetchBlacklistError"), false);
    }
  }

  async function addKeyword() {
    var keywordInput = document.getElementById("newKeywordInput");
    var keyword = keywordInput ? keywordInput.value.trim() : "";
    if (!keyword) { window.showToast(ServerI18n.t("keywordEmpty"), false); return; }
    try {
      var response = await window.csrfFetch("/admin/blacklist/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: keyword }),
      });
      var data = await response.json();
      if (response.ok) {
        window.showToast(data.message || "Keyword added.", true);
        if (keywordInput) keywordInput.value = "";
        fetchBlacklist();
      } else {
        window.showToast(data.error || "Failed to add keyword.", false);
      }
    } catch (error) {
      window.showToast(ServerI18n.t("addKeywordError"), false);
    }
  }

  async function removeKeyword(keyword) {
    if (!confirm(ServerI18n.t("confirmRemoveKeyword").replace("{keyword}", keyword))) return;
    try {
      var response = await window.csrfFetch("/admin/blacklist/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: keyword }),
      });
      var data = await response.json();
      if (response.ok) {
        window.showToast(data.message || "Keyword removed.", true);
        fetchBlacklist();
      } else {
        window.showToast(data.error || "Failed to remove keyword.", false);
      }
    } catch (error) {
      window.showToast(ServerI18n.t("removeKeywordError"), false);
    }
  }

  function formatTimestamp(timestamp) {
    try {
      var date = new Date(timestamp);
      var now = new Date();
      var diffMs = now - date;
      var diffMins = Math.floor(diffMs / 60000);
      var diffHours = Math.floor(diffMs / 3600000);
      var diffDays = Math.floor(diffMs / 86400000);
      if (diffMins < 1) return ServerI18n.t("justNow");
      if (diffMins < 60) return diffMins + "m ago";
      if (diffHours < 24) return diffHours + "h ago";
      if (diffDays < 7) return diffDays + "d ago";
      return date.toLocaleString("zh-TW", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
    } catch (e) { return timestamp; }
  }

  function renderHistoryRecords(records) {
    var historyListDiv = document.getElementById("danmuHistoryList");
    if (!historyListDiv) return;
    historyListDiv.innerHTML = "";
    if (!records || records.length === 0) {
      historyListDiv.innerHTML = '<p class="text-slate-400 text-sm py-4 text-center">' + ServerI18n.t("noHistoryRecords") + "</p>";
      return;
    }
    records.forEach(function (record) {
      var item = document.createElement("div");
      item.className = "flex items-start gap-3 p-2 rounded-lg hover:bg-slate-800/40 group";
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "replay-record-cb mt-1 rounded border-slate-600";
      checkbox.dataset.recordId = record.id || "";
      item.appendChild(checkbox);
      var content = document.createElement("div");
      content.className = "flex-1 min-w-0";
      var textEl = document.createElement("p");
      textEl.className = "text-slate-200 text-sm truncate";
      textEl.textContent = record.text || "(image)";
      var meta = document.createElement("p");
      meta.className = "text-slate-500 text-xs mt-0.5";
      meta.textContent = formatTimestamp(record.timestamp) + (record.clientIp ? " · " + record.clientIp : "");
      content.appendChild(textEl);
      content.appendChild(meta);
      item.appendChild(content);
      historyListDiv.appendChild(item);
    });
  }

  async function fetchDanmuHistory() {
    var hoursSelect = document.getElementById("historyHours");
    var hours = hoursSelect ? parseInt(hoursSelect.value) || 24 : 24;
    try {
      var response = await fetch("/admin/history?hours=" + hours, { credentials: "same-origin" });
      if (!response.ok) { window.showToast("Failed to load history.", false); return; }
      var data = await response.json();
      _allHistoryRecords = data.records || [];
      renderHistoryRecords(_allHistoryRecords);
    } catch (error) {
      console.error("Fetch history error:", error);
      window.showToast("Failed to load history.", false);
    }
  }

  async function clearDanmuHistory() {
    if (!confirm(ServerI18n.t("confirmClearHistory"))) return;
    try {
      var response = await window.csrfFetch("/admin/history/clear", { method: "POST" });
      if (response.ok) {
        window.showToast(ServerI18n.t("historyClearedSuccess"), true);
        _allHistoryRecords = [];
        renderHistoryRecords([]);
      } else {
        window.showToast("Failed to clear history.", false);
      }
    } catch (error) {
      window.showToast("Failed to clear history.", false);
    }
  }

  function _initHistoryEventListeners() {
    // Blacklist
    var addKeywordBtn = document.getElementById("addKeywordBtn");
    if (addKeywordBtn) addKeywordBtn.addEventListener("click", addKeyword);
    var newKeywordInput = document.getElementById("newKeywordInput");
    if (newKeywordInput) {
      newKeywordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter" || event.keyCode === 13) { event.preventDefault(); addKeyword(); }
      });
    }
    var blacklistKeywordsDiv = document.getElementById("blacklistKeywords");
    if (blacklistKeywordsDiv) {
      blacklistKeywordsDiv.addEventListener("click", function (event) {
        var removeButton = event.target.closest(".removeKeywordBtn");
        if (removeButton) {
          var keyword = removeButton.dataset.keyword;
          if (keyword) removeKeyword(keyword);
        }
      });
    }

    // History
    var refreshHistoryBtn = document.getElementById("refreshHistoryBtn");
    if (refreshHistoryBtn) refreshHistoryBtn.addEventListener("click", fetchDanmuHistory);
    var clearHistoryBtn = document.getElementById("clearHistoryBtn");
    if (clearHistoryBtn) clearHistoryBtn.addEventListener("click", clearDanmuHistory);
    var historyHoursSelect = document.getElementById("historyHours");
    if (historyHoursSelect) historyHoursSelect.addEventListener("change", fetchDanmuHistory);
    var historySearch = document.getElementById("historySearch");
    if (historySearch) {
      historySearch.addEventListener("input", function () {
        var term = historySearch.value.toLowerCase();
        var filtered = term
          ? _allHistoryRecords.filter(function (r) { return (r.text || "").toLowerCase().includes(term); })
          : _allHistoryRecords;
        renderHistoryRecords(filtered);
      });
    }
    var autoRefreshCheckbox = document.getElementById("historyAutoRefresh");
    if (autoRefreshCheckbox) {
      autoRefreshCheckbox.addEventListener("change", function () {
        if (_autoRefreshTimer) { clearInterval(_autoRefreshTimer); _autoRefreshTimer = null; }
        if (autoRefreshCheckbox.checked) {
          _autoRefreshTimer = setInterval(fetchDanmuHistory, 30000);
        }
      });
    }

    // Export history CSV
    var exportHistoryBtn = document.getElementById("exportHistoryBtn");
    if (exportHistoryBtn) {
      exportHistoryBtn.addEventListener("click", function () {
        if (_allHistoryRecords.length === 0) { window.showToast(ServerI18n.t("noRecordsToExport"), false); return; }
        var headers = ["timestamp", "text", "color", "size", "speed", "opacity", "isImage", "fontName", "clientIp", "fingerprint"];
        var escape = function (v) {
          var s = v == null ? "" : String(v);
          return (s.includes(",") || s.includes('"') || s.includes("\n")) ? '"' + s.replace(/"/g, '""') + '"' : s;
        };
        var rows = _allHistoryRecords.map(function (r) {
          return [
            escape(r.timestamp || ""), escape(r.text || ""),
            escape(r.color ? "#" + r.color : ""), escape(r.size ?? ""),
            escape(r.speed ?? ""), escape(r.opacity ?? ""),
            escape(r.isImage ? "true" : "false"), escape(r.fontInfo?.name || ""),
            escape(r.clientIp || ""), escape(r.fingerprint || ""),
          ].join(",");
        });
        var csv = [headers.join(",")].concat(rows).join("\r\n");
        var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        var ts = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
        a.href = url;
        a.download = "danmu-history-" + ts + ".csv";
        a.click();
        URL.revokeObjectURL(url);
        window.showToast("Exported " + _allHistoryRecords.length + " records.", true);
      });
    }

    // Select all for replay
    var historySelectAll = document.getElementById("historySelectAll");
    if (historySelectAll) {
      historySelectAll.addEventListener("change", function () {
        document.querySelectorAll(".replay-record-cb").forEach(function (cb) {
          cb.checked = historySelectAll.checked;
        });
      });
    }

    window.addEventListener("beforeunload", function () {
      if (_autoRefreshTimer) { clearInterval(_autoRefreshTimer); _autoRefreshTimer = null; }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    fetchBlacklist();
    _initHistoryEventListeners();
  });

  // Expose fetchDanmuHistory for use by admin-ws.js (settings_changed event)
  window.AdminHistory = { fetchDanmuHistory: fetchDanmuHistory, fetchBlacklist: fetchBlacklist };
})();
```

- [ ] **Step 2: Remove history/blacklist section from admin.js**

Delete from `admin.js`:
- The `fetchBlacklist`, `addKeyword`, `removeKeyword`, `formatTimestamp`, `renderHistoryRecords`, `fetchDanmuHistory`, `clearDanmuHistory` functions (lines 252–586)
- The `_allHistoryRecords` variable declaration
- The `_autoRefreshTimer` variable declaration (it now lives in admin-history.js)
- In `addEventListeners()`: remove the blacklist event listeners, history event listeners, export history, historySelectAll, and auto-refresh checkbox handlers
- In `beforeunload` cleanup: remove `_autoRefreshTimer` reference

Also update the WebSocket message handler in admin.js (`// --- Real-time WebSocket Listener ---`):
- Replace `fetchBlacklist()` call with `window.AdminHistory && window.AdminHistory.fetchBlacklist()`

- [ ] **Step 3: Verify history and blacklist work**

Load `/admin`, open history section. Click "Refresh". Verify records load. Add a keyword. Verify it appears in blacklist. Export CSV.

- [ ] **Step 4: Commit**

```bash
git add server/static/js/admin-history.js server/static/js/admin.js
git commit -m "feat(admin): extract history and blacklist to admin-history.js"
```

---

### Task 5: Update admin.html script load order

**Files:**
- Modify: `server/templates/admin.html`

- [ ] **Step 1: Add new script tags before admin.js**

In `server/templates/admin.html`, find the existing script block (around lines 70–84). The current order is:

```html
<script defer src="{{ url_for('static', filename='js/toast.js') }}"></script>
...
<script defer src="{{ url_for('static', filename='js/admin-utils.js') }}"></script>
<script defer src="{{ url_for('static', filename='js/admin-themes.js') }}"></script>
<script defer src="{{ url_for('static', filename='js/admin-effects-mgmt.js') }}"></script>
<script defer src="{{ url_for('static', filename='js/admin.js') }}"></script>
```

Replace with:

```html
<script defer src="{{ url_for('static', filename='js/toast.js') }}"></script>
<script defer src="{{ url_for('static', filename='js/replay-recorder.js') }}"></script>
<script defer src="{{ url_for('static', filename='js/admin-utils.js') }}"></script>
<script defer src="{{ url_for('static', filename='js/admin-events.js') }}"></script>
<script defer src="{{ url_for('static', filename='js/admin-store.js') }}"></script>
<script defer src="{{ url_for('static', filename='js/admin-themes.js') }}"></script>
<script defer src="{{ url_for('static', filename='js/admin-effects-mgmt.js') }}"></script>
<script defer src="{{ url_for('static', filename='js/admin.js') }}"></script>
<script defer src="{{ url_for('static', filename='js/admin-poll.js') }}"></script>
<script defer src="{{ url_for('static', filename='js/admin-history.js') }}"></script>
```

- [ ] **Step 2: Run full smoke test**

Start the server:
```bash
cd server && PYTHONPATH=.. uv run python -m server.app
```

Open http://localhost:4000/admin. Log in. Test:
1. Settings save (any slider change → verify toast "Saved")
2. Poll section: create poll, see status, end poll
3. History section: refresh records, blacklist add/remove, export CSV
4. WebSocket status badge shows connected

- [ ] **Step 3: Commit**

```bash
git add server/templates/admin.html
git commit -m "feat(admin): update admin.html script load order for new modules"
```

---

### Task 6: Create Electron store.js and events.js

**Files:**
- Create: `danmu-desktop/renderer-modules/store.js`
- Create: `danmu-desktop/renderer-modules/events.js`

- [ ] **Step 1: Write store.js**

```js
// renderer-modules/store.js — Centralized renderer state
"use strict";

const _state = {
  tracks: [],
  trackSettings: { maxTracks: 5, collisionDetection: true },
  fixedTracks: [],
  connectionStatus: "idle",
};
const _subscribers = [];

const store = {
  get(key) { return _state[key]; },
  set(key, value) {
    _state[key] = value;
    _subscribers.forEach((fn) => fn(key, value));
  },
  subscribe(fn) { _subscribers.push(fn); },
};

module.exports = store;
```

- [ ] **Step 2: Write events.js**

```js
// renderer-modules/events.js — EventEmitter bus for renderer modules
"use strict";

const { EventEmitter } = require("events");
module.exports = new EventEmitter();
```

- [ ] **Step 3: Commit**

```bash
git add danmu-desktop/renderer-modules/store.js danmu-desktop/renderer-modules/events.js
git commit -m "feat(electron): add renderer store and events modules"
```

---

### Task 7: Refactor track-manager.js to use store

**Files:**
- Modify: `danmu-desktop/renderer-modules/track-manager.js`

- [ ] **Step 1: Replace window.danmuTracks and window.danmuTrackSettings with store**

At the top of `track-manager.js`, add the store require after the existing `DanmuEffects` require:

```js
const store = require("./store");
```

Replace the initialization block (lines 8–34):

**Before:**
```js
window.danmuTracks = [];
window.danmuTrackSettings = {
  maxTracks: 5,
  collisionDetection: true,
};
window.DanmuEffects = DanmuEffects;
```

**After:**
```js
store.set("tracks", []);
store.set("trackSettings", { maxTracks: 5, collisionDetection: true });
store.set("fixedTracks", []);
window.DanmuEffects = DanmuEffects;
```

Replace `window.updateDanmuTrackSettings` (lines 31–35):

**Before:**
```js
window.updateDanmuTrackSettings = function (maxTracks, collisionDetection) {
  window.danmuTrackSettings.maxTracks = maxTracks;
  window.danmuTrackSettings.collisionDetection = collisionDetection;
  console.log("[Track Settings] Updated:", window.danmuTrackSettings);
};
```

**After:**
```js
window.updateDanmuTrackSettings = function (maxTracks, collisionDetection) {
  store.set("trackSettings", { maxTracks, collisionDetection });
  console.log("[Track Settings] Updated:", store.get("trackSettings"));
};
```

Replace `window.findAvailableTrack` — change all `window.danmuTracks` references to `store.get("tracks")` and `window.danmuTrackSettings` to `store.get("trackSettings")` and `window._fixedTracks` to `store.get("fixedTracks")`:

```js
window.findAvailableTrack = function (displayArea, danmuHeight, danmuWidth, speed) {
  const now = Date.now();
  const { maxTracks, collisionDetection } = store.get("trackSettings");
  const tracks = store.get("tracks");
  const fixedTracks = store.get("fixedTracks");

  // Remove expired tracks
  const activeTracks = tracks.filter((t) => t.endTime > now);
  store.set("tracks", activeTracks);

  // ... rest of track allocation logic unchanged, using activeTracks instead of window.danmuTracks
  // Replace window.danmuTracks.push(...) with:
  //   const t = store.get("tracks"); t.push(...); store.set("tracks", t);
  // Replace window._fixedTracks with store.get("fixedTracks") / store.set("fixedTracks", ...)
};
```

Also in `window.showdanmu`, replace:
- `window.danmuTrackSettings` → `store.get("trackSettings")`
- `window._fixedTracks` → `store.get("fixedTracks")` (read) / `store.set("fixedTracks", ...)` (write)
- `window.findAvailableTrack(...)` stays (it's a window function)

- [ ] **Step 2: Build and verify**

```bash
cd danmu-desktop && npx webpack 2>&1 | tail -10
```

Expected: webpack builds successfully, no errors about `store` not found

- [ ] **Step 3: Manual test**

Launch Electron app: `cd danmu-desktop && npm start`
Connect to a server. Send a test danmu via the admin dashboard. Verify danmu appears on screen. Send 5+ danmu rapidly. Verify collision detection still works.

- [ ] **Step 4: Commit**

```bash
git add danmu-desktop/renderer-modules/track-manager.js
git commit -m "refactor(electron): replace window.danmuTracks/TrackSettings with store"
```

---

### Task 8: Update renderer.js to require store and events early

**Files:**
- Modify: `danmu-desktop/renderer.js`

- [ ] **Step 1: Add store and events requires at top**

In `renderer.js`, at the top of the file after any existing `require` statements, add:

```js
const store = require("./renderer-modules/store");
const events = require("./renderer-modules/events");
// Expose on window for modules that don't use require (legacy pattern)
window._store = store;
window._events = events;
```

- [ ] **Step 2: Build and verify**

```bash
cd danmu-desktop && npx webpack 2>&1 | tail -5
```

Expected: clean build

- [ ] **Step 3: Commit**

```bash
git add danmu-desktop/renderer.js
git commit -m "feat(electron): require store and events early in renderer.js"
```

---

### Task 9: Final verification

- [ ] **Step 1: Run Python test suite**

```bash
cd server && PYTHONPATH=.. uv run python -m pytest -q
```

Expected: all tests pass (frontend changes don't affect Python tests)

- [ ] **Step 2: Build webpack**

```bash
cd danmu-desktop && npx webpack 2>&1 | grep -E "error|ERROR|warning" | grep -v "^$"
```

Expected: no errors

- [ ] **Step 3: Verify admin dashboard manually**

Start server: `cd server && PYTHONPATH=.. uv run python -m server.app`
Open http://localhost:4000/admin. Verify:
- `window.DanmuEvents` exists in console
- `window.DanmuStore` exists in console
- Settings, poll, history, blacklist all work
- No duplicate event handler errors (DevTools → Network: only 1 request per user action)

- [ ] **Step 4: Final commit and push**

```bash
git push
```
