/**
 * Admin Live Feed — real-time danmu stream viewer
 *
 * Loaded as a separate <script defer> in admin.html.
 * Globals from admin.js: window.csrfFetch, window.showToast, window.ServerI18n, window.DANMU_CONFIG
 * Receives WS messages via CustomEvent "admin-ws-message" dispatched by admin.js.
 *
 * v2 retrofit: page-level v2 shell (kicker + title + note) + full-height stream
 * with filter tabs (ALL / MUTED), auto-scroll toggle, keyword filter, bulk
 * select with batch block. Q&A / Poll tabs deferred — server has no message.type.
 */
(function () {
  "use strict";

  const MAX_ENTRIES = 200;
  const TEXT_PREVIEW_LEN = 80;
  const FP_DISPLAY_LEN = 8;
  const SECTION_ID = "sec-live-feed";

  /** @type {{ ts: number, data: object, muted?: boolean, id: string }[]} */
  let entries = [];
  /** @type {{ ts: number, data: object, id: string }[]} buffer while paused */
  let pauseBuffer = [];
  let paused = false;
  let searchTerm = "";
  let filterTab = "all"; // "all" | "muted"
  /** @type {Set<string>} */
  const selected = new Set();
  let _entryCounter = 0;

  // DOM references (set after section is injected)
  let listEl = null;
  let pauseBtn = null;
  let searchInput = null;
  let countBadge = null;
  let bulkBar = null;

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

  function matchesFilter(entry) {
    if (filterTab === "muted") return !!entry.muted;
    return true;
  }

  // ── Render a single entry row ────────────────────────────

  function createEntryEl(entry) {
    const d = entry.data;
    const row = document.createElement("div");
    row.className = "admin-live-feed-row" + (entry.muted ? " is-muted" : "");
    row.dataset.id = entry.id;

    // Bulk-select checkbox
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "admin-live-feed-check";
    cb.checked = selected.has(entry.id);
    cb.addEventListener("click", (e) => e.stopPropagation());
    cb.addEventListener("change", () => {
      if (cb.checked) selected.add(entry.id);
      else selected.delete(entry.id);
      updateBulkBar();
    });
    row.appendChild(cb);

    // Timestamp
    const timeSpan = document.createElement("span");
    timeSpan.className = "admin-live-feed-time";
    timeSpan.textContent = fmtTime(entry.ts);
    row.appendChild(timeSpan);

    // Layout tag
    const badge = document.createElement("span");
    badge.className = "admin-v2-chip admin-live-feed-tag";
    badge.textContent = d.layout || "scroll";
    row.appendChild(badge);

    // Text preview
    const text = document.createElement("span");
    text.className = "admin-live-feed-text";
    text.textContent = truncate(d.text || "", TEXT_PREVIEW_LEN);
    text.title = d.text || "";
    row.appendChild(text);

    // Nickname (if present)
    const nick = document.createElement("span");
    nick.className = "admin-live-feed-nick";
    nick.textContent = d.nickname ? "@" + d.nickname : "";
    nick.title = d.nickname || "";
    row.appendChild(nick);

    // Fingerprint short
    const fp = document.createElement("span");
    fp.className = "admin-live-feed-fp";
    fp.textContent = d.fingerprint ? "fp:" + d.fingerprint.slice(0, FP_DISPLAY_LEN) : "";
    fp.title = d.fingerprint || "";
    row.appendChild(fp);

    // Action buttons
    const actions = document.createElement("span");
    actions.className = "admin-live-feed-actions";

    const blockKwBtn = document.createElement("button");
    blockKwBtn.type = "button";
    blockKwBtn.className = "admin-v2-chip is-bad";
    blockKwBtn.textContent = ServerI18n.t("blockKeywordBtn");
    blockKwBtn.title = ServerI18n.t("blockKeywordTitle");
    blockKwBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      blockAction("keyword", d.text, entry.id);
    });
    actions.appendChild(blockKwBtn);

    if (d.fingerprint) {
      const blockFpBtn = document.createElement("button");
      blockFpBtn.type = "button";
      blockFpBtn.className = "admin-v2-chip is-warn";
      blockFpBtn.textContent = ServerI18n.t("blockFpBtn");
      blockFpBtn.title = ServerI18n.t("blockFpTitle").replace("{fp}", d.fingerprint);
      blockFpBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        blockAction("fingerprint", d.fingerprint, entry.id);
      });
      actions.appendChild(blockFpBtn);
    }

    row.appendChild(actions);
    return row;
  }

  // ── Block action (POST /admin/live/block) ────────────────

  async function blockAction(type, value, markEntryId) {
    if (!value) return;
    const label = type === "keyword" ? ServerI18n.t("blockLabelKeyword") : ServerI18n.t("blockLabelFingerprint");
    const display =
      type === "keyword" ? truncate(value, 30) : value.slice(0, FP_DISPLAY_LEN);

    if (!confirm(ServerI18n.t("blockConfirm").replace("{label}", label).replace("{display}", display))) return;

    try {
      const resp = await window.csrfFetch("/admin/live/block", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: type, value: value }),
      });
      const result = await resp.json();
      if (resp.ok) {
        showToast(result.message || ServerI18n.t("blockFallback").replace("{label}", label));
        // Mark local entry(ies) matching this block as muted so they show in "MUTED" tab
        if (markEntryId) {
          const e = entries.find((x) => x.id === markEntryId);
          if (e) e.muted = true;
        } else {
          entries.forEach((e) => {
            if (type === "keyword" && e.data.text === value) e.muted = true;
            if (type === "fingerprint" && e.data.fingerprint === value) e.muted = true;
          });
        }
        renderList();
      } else {
        showToast(result.error || ServerI18n.t("blockFailed"), false);
      }
    } catch (err) {
      console.error("[LiveFeed] Block failed:", err);
      showToast(ServerI18n.t("blockRequestFailed"), false);
    }
  }

  async function bulkBlock() {
    if (selected.size === 0) return;
    const ids = Array.from(selected);
    const targets = ids
      .map((id) => entries.find((e) => e.id === id))
      .filter(Boolean);
    if (targets.length === 0) return;
    if (!confirm(`批次遮罩 ${targets.length} 則訊息 (依指紋)?`)) return;

    let ok = 0;
    for (const t of targets) {
      if (!t.data.fingerprint) continue;
      try {
        const resp = await window.csrfFetch("/admin/live/block", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "fingerprint", value: t.data.fingerprint }),
        });
        if (resp.ok) {
          t.muted = true;
          ok += 1;
        }
      } catch (_) {
        /* ignore */
      }
    }
    selected.clear();
    showToast(`已遮罩 ${ok} / ${targets.length}`);
    renderList();
  }

  // ── Full re-render of visible list ───────────────────────

  function renderList() {
    if (!listEl) return;
    const frag = document.createDocumentFragment();
    const visible = entries.filter((e) => matchesSearch(e) && matchesFilter(e));

    for (let i = visible.length - 1; i >= 0; i--) {
      frag.appendChild(createEntryEl(visible[i]));
    }

    listEl.textContent = "";
    if (frag.childNodes.length === 0) {
      const empty = document.createElement("div");
      empty.className = "admin-live-feed-empty";
      empty.textContent = paused
        ? ServerI18n.t("liveFeedPaused")
        : entries.length === 0
          ? ServerI18n.t("liveFeedWaiting")
          : ServerI18n.t("liveFeedNoMatches");
      listEl.appendChild(empty);
    } else {
      listEl.appendChild(frag);
    }

    updateCountBadge();
    updateBulkBar();
  }

  function updateCountBadge() {
    if (!countBadge) return;
    const total = entries.length;
    const buffered = pauseBuffer.length;
    countBadge.textContent =
      total + " 筆" + (buffered > 0 ? ` (+${buffered})` : "");
  }

  function updateBulkBar() {
    if (!bulkBar) return;
    if (selected.size === 0) {
      bulkBar.classList.remove("is-active");
      bulkBar.setAttribute("hidden", "");
    } else {
      bulkBar.classList.add("is-active");
      bulkBar.removeAttribute("hidden");
      const countEl = bulkBar.querySelector(".admin-live-feed-bulk-count");
      if (countEl) countEl.textContent = String(selected.size);
    }
  }

  // ── Add entry ────────────────────────────────────────────

  function addEntry(data) {
    const entry = { ts: Date.now(), data: data, id: "e" + (++_entryCounter) };
    if (paused) {
      pauseBuffer.push(entry);
      updateCountBadge();
      return;
    }
    entries.push(entry);
    if (entries.length > MAX_ENTRIES) {
      const dropped = entries.splice(0, entries.length - MAX_ENTRIES);
      dropped.forEach((d) => selected.delete(d.id));
    }
    // Simple full re-render — keeps filter tabs correct and perf is fine at MAX_ENTRIES=200.
    renderList();
  }

  // ── Pause / Resume ──────────────────────────────────────

  function togglePause() {
    paused = !paused;
    if (pauseBtn) {
      pauseBtn.textContent = paused ? ServerI18n.t("resumeBtn") : ServerI18n.t("pauseBtn");
      pauseBtn.classList.toggle("is-primary", paused);
      pauseBtn.classList.toggle("is-ghost", !paused);
    }
    if (!paused) {
      for (const entry of pauseBuffer) entries.push(entry);
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

    const html = `
      <div id="${SECTION_ID}" class="admin-live-feed-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">LIVE FEED · 即時訊息流 · MODERATION</div>
          <div class="admin-v2-title">即時訊息</div>
          <p class="admin-v2-note">
            觀眾彈幕即時串流 — 可即時遮罩/刪除/標記,捲動自動暫停。
          </p>
        </div>

        <div class="admin-v2-card">
          <div class="admin-live-feed-toolbar">
            <div class="admin-live-feed-tabs" role="tablist">
              <button type="button" class="admin-live-feed-tab is-active" data-tab="all" role="tab">全部</button>
              <button type="button" class="admin-live-feed-tab" data-tab="muted" role="tab">已遮罩</button>
            </div>
            <input id="liveFeedSearch" type="search"
              placeholder="${escapeAttr(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-v2-input admin-live-feed-search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-poll-btn is-ghost">${escapeAttr(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-poll-btn is-ghost">${escapeAttr(ServerI18n.t("clearBtn"))}</button>
            <span class="admin-v2-monolabel admin-live-feed-count" id="liveFeedCount">0 筆</span>
          </div>
        </div>

        <div id="liveFeedBulk" class="admin-v2-card admin-live-feed-bulk" hidden>
          <span class="admin-v2-monolabel">BULK ·
            <span class="admin-live-feed-bulk-count">0</span> 已選
          </span>
          <div class="admin-v2-toolbar" style="margin-left:auto">
            <button type="button" id="liveFeedBulkBlock" class="admin-poll-btn is-primary">批次遮罩指紋</button>
            <button type="button" id="liveFeedBulkClear" class="admin-poll-btn is-ghost">清除選取</button>
          </div>
        </div>

        <div class="admin-v2-card admin-live-feed-stream-wrap">
          <div id="liveFeedList" class="admin-live-feed-list" role="list">
            <div class="admin-live-feed-empty">${escapeAttr(ServerI18n.t("liveFeedWaiting"))}</div>
          </div>
        </div>
      </div>`;

    grid.insertAdjacentHTML("beforeend", html);
    return true;
  }

  // ── Init ─────────────────────────────────────────────────

  let wsListenerBound = false;

  function init() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    const observer = new MutationObserver(() => {
      if (document.getElementById("settings-grid") && !document.getElementById(SECTION_ID)) {
        if (injectSection()) bindUI();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    if (injectSection()) bindUI();
  }

  function bindUI() {
    listEl = document.getElementById("liveFeedList");
    pauseBtn = document.getElementById("liveFeedPauseBtn");
    searchInput = document.getElementById("liveFeedSearch");
    countBadge = document.getElementById("liveFeedCount");
    bulkBar = document.getElementById("liveFeedBulk");

    const clearBtn = document.getElementById("liveFeedClearBtn");
    const bulkBlockBtn = document.getElementById("liveFeedBulkBlock");
    const bulkClearBtn = document.getElementById("liveFeedBulkClear");
    const tabs = document.querySelectorAll(".admin-live-feed-tab");

    if (pauseBtn) pauseBtn.addEventListener("click", togglePause);
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        entries = [];
        pauseBuffer = [];
        selected.clear();
        renderList();
      });
    }
    if (bulkBlockBtn) bulkBlockBtn.addEventListener("click", bulkBlock);
    if (bulkClearBtn) {
      bulkClearBtn.addEventListener("click", () => {
        selected.clear();
        renderList();
      });
    }
    tabs.forEach((t) => {
      t.addEventListener("click", () => {
        tabs.forEach((x) => x.classList.remove("is-active"));
        t.classList.add("is-active");
        filterTab = t.dataset.tab || "all";
        renderList();
      });
    });

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

    if (!wsListenerBound) {
      wsListenerBound = true;
      document.addEventListener("admin-ws-message", (e) => {
        const msg = e.detail;
        if (msg && msg.type === "danmu_live" && msg.data) {
          addEntry(msg.data);
        }
      });
    }

    if (entries.length > 0) renderList();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
