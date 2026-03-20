/**
 * Admin Live Feed — real-time danmu stream viewer
 *
 * Loaded as a separate <script defer> in admin.html.
 * Globals from admin.js: window.csrfFetch, window.showToast, window.ServerI18n, window.DANMU_CONFIG
 * Receives WS messages via CustomEvent "admin-ws-message" dispatched by admin.js.
 */
(function () {
  "use strict";

  const MAX_ENTRIES = 200;
  const TEXT_PREVIEW_LEN = 50;
  const FP_DISPLAY_LEN = 8;

  /** @type {{ ts: number, data: object }[]} */
  let entries = [];
  /** @type {{ ts: number, data: object }[]} buffer while paused */
  let pauseBuffer = [];
  let paused = false;
  let searchTerm = "";

  // DOM references (set after section is injected)
  let listEl = null;
  let pauseBtn = null;
  let searchInput = null;
  let countBadge = null;

  // ── Helpers ──────────────────────────────────────────────

  function escapeAttr(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function truncate(s, len) {
    if (!s) return "";
    return s.length > len ? s.slice(0, len) + "\u2026" : s;
  }

  function fmtTime(ts) {
    const d = new Date(ts);
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  function matchesSearch(entry) {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    const d = entry.data;
    return (
      (d.text && d.text.toLowerCase().includes(q)) ||
      (d.nickname && d.nickname.toLowerCase().includes(q)) ||
      (d.fingerprint && d.fingerprint.toLowerCase().includes(q)) ||
      (d.layout && d.layout.toLowerCase().includes(q))
    );
  }

  // ── Layout badge color ───────────────────────────────────

  function layoutBadgeClasses(layout) {
    switch (layout) {
      case "top":
        return "bg-amber-600/70 text-amber-100";
      case "bottom":
        return "bg-cyan-600/70 text-cyan-100";
      default:
        return "bg-slate-600/70 text-slate-200";
    }
  }

  // ── Render a single entry row ────────────────────────────

  function createEntryEl(entry) {
    const d = entry.data;
    const row = document.createElement("div");
    row.className =
      "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 text-sm group hover:bg-slate-700/60 transition-colors";

    // Timestamp
    const timeSpan = document.createElement("span");
    timeSpan.className = "text-slate-500 text-xs font-mono shrink-0";
    timeSpan.textContent = fmtTime(entry.ts);
    row.appendChild(timeSpan);

    // Color dot
    const dot = document.createElement("span");
    dot.className = "w-3 h-3 rounded-full shrink-0 border border-slate-600";
    dot.style.backgroundColor = d.color || "#ffffff";
    dot.title = d.color || "default";
    row.appendChild(dot);

    // Layout badge
    const badge = document.createElement("span");
    badge.className =
      "text-[10px] px-1.5 py-0.5 rounded font-medium shrink-0 " +
      layoutBadgeClasses(d.layout);
    badge.textContent = d.layout || "scroll";
    row.appendChild(badge);

    // Nickname (if present)
    if (d.nickname) {
      const nick = document.createElement("span");
      nick.className = "text-violet-300 text-xs truncate max-w-[80px] shrink-0";
      nick.textContent = d.nickname;
      nick.title = d.nickname;
      row.appendChild(nick);
    }

    // Text preview
    const text = document.createElement("span");
    text.className = "text-slate-200 truncate min-w-0 flex-1";
    text.textContent = truncate(d.text || "", TEXT_PREVIEW_LEN);
    text.title = d.text || "";
    row.appendChild(text);

    // Fingerprint
    if (d.fingerprint) {
      const fp = document.createElement("span");
      fp.className = "text-slate-500 text-xs font-mono shrink-0";
      fp.textContent = d.fingerprint.slice(0, FP_DISPLAY_LEN);
      fp.title = d.fingerprint;
      row.appendChild(fp);
    }

    // Action buttons (visible on hover)
    const actions = document.createElement("span");
    actions.className =
      "shrink-0 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity";

    const blockKwBtn = document.createElement("button");
    blockKwBtn.type = "button";
    blockKwBtn.className =
      "px-1.5 py-0.5 text-[10px] rounded bg-red-700/70 hover:bg-red-600 text-red-100 transition-colors";
    blockKwBtn.textContent = "Block Keyword";
    blockKwBtn.title = "Add text to blacklist";
    blockKwBtn.addEventListener("click", () => blockAction("keyword", d.text));
    actions.appendChild(blockKwBtn);

    if (d.fingerprint) {
      const blockFpBtn = document.createElement("button");
      blockFpBtn.type = "button";
      blockFpBtn.className =
        "px-1.5 py-0.5 text-[10px] rounded bg-orange-700/70 hover:bg-orange-600 text-orange-100 transition-colors";
      blockFpBtn.textContent = "Block FP";
      blockFpBtn.title = "Block fingerprint: " + d.fingerprint;
      blockFpBtn.addEventListener("click", () =>
        blockAction("fingerprint", d.fingerprint)
      );
      actions.appendChild(blockFpBtn);
    }

    row.appendChild(actions);
    return row;
  }

  // ── Block action (POST /admin/live/block) ────────────────

  async function blockAction(type, value) {
    if (!value) return;
    const label = type === "keyword" ? "keyword" : "fingerprint";
    const display =
      type === "keyword" ? truncate(value, 30) : value.slice(0, FP_DISPLAY_LEN);

    if (!confirm(`Block ${label}: "${display}"?`)) return;

    try {
      const resp = await window.csrfFetch("/admin/live/block", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: type, value: value }),
      });
      const result = await resp.json();
      if (resp.ok) {
        showToast(result.message || `${label} blocked`);
      } else {
        showToast(result.error || "Block failed", false);
      }
    } catch (err) {
      console.error("[LiveFeed] Block failed:", err);
      showToast("Block request failed", false);
    }
  }

  // ── Full re-render of visible list ───────────────────────

  function renderList() {
    if (!listEl) return;
    const frag = document.createDocumentFragment();
    const visible = entries.filter(matchesSearch);

    for (let i = visible.length - 1; i >= 0; i--) {
      frag.appendChild(createEntryEl(visible[i]));
    }

    listEl.textContent = ""; // clear
    if (frag.childNodes.length === 0) {
      const empty = document.createElement("p");
      empty.className = "text-slate-500 text-sm text-center py-4";
      empty.textContent = paused
        ? "Paused — messages buffered"
        : entries.length === 0
          ? "Waiting for danmu\u2026"
          : "No matches";
      listEl.appendChild(empty);
    } else {
      listEl.appendChild(frag);
    }

    updateCountBadge();
  }

  function updateCountBadge() {
    if (!countBadge) return;
    const total = entries.length;
    const buffered = pauseBuffer.length;
    countBadge.textContent =
      total + (buffered > 0 ? ` (+${buffered})` : "");
  }

  // ── Add entry ────────────────────────────────────────────

  function addEntry(data) {
    const entry = { ts: Date.now(), data: data };
    if (paused) {
      pauseBuffer.push(entry);
      updateCountBadge();
      return;
    }
    entries.push(entry);
    if (entries.length > MAX_ENTRIES) {
      entries.splice(0, entries.length - MAX_ENTRIES);
    }
    appendEntryToDOM(entry);
  }

  /** Append a single entry without full re-render (perf) */
  function appendEntryToDOM(entry) {
    if (!listEl) return;
    if (!matchesSearch(entry)) return;

    // Remove empty placeholder if present
    const placeholder = listEl.querySelector("p.text-slate-500");
    if (placeholder) placeholder.remove();

    const el = createEntryEl(entry);
    listEl.prepend(el);

    // Trim DOM to MAX_ENTRIES visible rows
    while (listEl.children.length > MAX_ENTRIES) {
      listEl.removeChild(listEl.lastChild);
    }

    updateCountBadge();
  }

  // ── Pause / Resume ──────────────────────────────────────

  function togglePause() {
    paused = !paused;
    if (pauseBtn) {
      pauseBtn.textContent = paused ? "Resume" : "Pause";
      pauseBtn.classList.toggle("bg-green-600", paused);
      pauseBtn.classList.toggle("hover:bg-green-500", paused);
      pauseBtn.classList.toggle("bg-slate-600", !paused);
      pauseBtn.classList.toggle("hover:bg-slate-500", !paused);
    }
    if (!paused) {
      // Flush buffer
      for (const entry of pauseBuffer) {
        entries.push(entry);
      }
      pauseBuffer = [];
      if (entries.length > MAX_ENTRIES) {
        entries.splice(0, entries.length - MAX_ENTRIES);
      }
      renderList();
    } else {
      updateCountBadge();
    }
  }

  // ── Build section HTML and inject ────────────────────────

  function injectSection() {
    const grid = document.getElementById("settings-grid");
    if (!grid) return false;

    // Determine open state from localStorage
    let isOpen = false;
    try {
      const raw = window.localStorage.getItem("admin-details-open-state");
      if (raw) {
        const state = JSON.parse(raw);
        if (state["sec-live-feed"] !== undefined) {
          isOpen = state["sec-live-feed"];
        }
      }
    } catch (_) {
      // ignore
    }

    const html = `
      <details id="sec-live-feed" class="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:border-slate-500 border border-transparent lg:col-span-2 scroll-mt-24" ${isOpen ? "open" : ""}>
        <summary class="flex items-center justify-between cursor-pointer list-none">
          <div>
            <h3 class="text-lg font-bold text-white">Live Feed</h3>
            <p class="text-sm text-slate-300">Real-time danmu stream monitor</p>
          </div>
          <span class="flex items-center gap-2">
            <span id="liveFeedCount" class="text-xs text-slate-500 font-mono">0</span>
            <span class="text-slate-400 transition-transform group-open:rotate-180">\u2304</span>
          </span>
        </summary>
        <div class="mt-4 pt-4 border-t border-slate-700/50 space-y-3">
          <div class="flex gap-2 items-center flex-wrap">
            <input id="liveFeedSearch" type="search" placeholder="Search text, nickname, fingerprint\u2026"
              class="flex-1 min-w-[180px] px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-white text-sm
                     placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400" />
            <button id="liveFeedPauseBtn" type="button"
              class="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors text-sm font-medium">Pause</button>
            <button id="liveFeedClearBtn" type="button"
              class="px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white rounded-lg transition-colors text-sm">Clear</button>
          </div>
          <div id="liveFeedList" class="space-y-1 max-h-96 overflow-y-auto">
            <p class="text-slate-500 text-sm text-center py-4">Waiting for danmu\u2026</p>
          </div>
        </div>
      </details>`;

    grid.insertAdjacentHTML("beforeend", html);
    return true;
  }

  // ── Init ─────────────────────────────────────────────────

  function init() {
    if (!injectSection()) {
      // Panel not yet rendered (not logged in); retry once after admin.js renders
      const observer = new MutationObserver(() => {
        if (document.getElementById("settings-grid")) {
          observer.disconnect();
          if (injectSection()) bindAndListen();
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      return;
    }
    bindAndListen();
  }

  function bindAndListen() {
    listEl = document.getElementById("liveFeedList");
    pauseBtn = document.getElementById("liveFeedPauseBtn");
    searchInput = document.getElementById("liveFeedSearch");
    countBadge = document.getElementById("liveFeedCount");

    const clearBtn = document.getElementById("liveFeedClearBtn");

    if (pauseBtn) {
      pauseBtn.addEventListener("click", togglePause);
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        entries = [];
        pauseBuffer = [];
        renderList();
      });
    }

    if (searchInput) {
      let debounceTimer = null;
      searchInput.addEventListener("input", () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          searchTerm = searchInput.value.trim();
          renderList();
        }, 200);
      });
    }

    // Persist details open/close state (same mechanism as admin.js)
    const detailsEl = document.getElementById("sec-live-feed");
    if (detailsEl) {
      detailsEl.addEventListener("toggle", () => {
        try {
          const raw = window.localStorage.getItem("admin-details-open-state");
          const state = raw ? JSON.parse(raw) : {};
          state["sec-live-feed"] = detailsEl.open;
          window.localStorage.setItem(
            "admin-details-open-state",
            JSON.stringify(state)
          );
        } catch (_) {
          // ignore
        }
      });
    }

    // Listen for WS messages dispatched by admin.js
    document.addEventListener("admin-ws-message", (e) => {
      const msg = e.detail;
      if (msg && msg.type === "danmu_live" && msg.data) {
        addEntry(msg.data);
      }
    });
  }

  // ── Bootstrap ────────────────────────────────────────────

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    // DOMContentLoaded already fired (unlikely with defer, but safe)
    init();
  }
})();
