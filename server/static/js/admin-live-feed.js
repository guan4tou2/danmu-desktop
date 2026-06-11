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
    if (filterTab === "muted")   return !!entry.muted;
    if (filterTab === "sensitive") return !!entry.sensitive;
    if (filterTab === "queued")  return entry.data && entry.data.status === "queued";
    return true;
  }

  // 2026-05-17 v4: msg/s rate over a rolling 10s window.
  const _rateBuf = [];
  function _trackRate() {
    const now = Date.now();
    _rateBuf.push(now);
    while (_rateBuf.length > 0 && _rateBuf[0] < now - 10000) _rateBuf.shift();
  }
  function _currentRate() {
    return (_rateBuf.length / 10).toFixed(1);
  }

  function _setAllTabActive() {
    filterTab = "all";
    document
      .querySelectorAll(".admin-live-feed-tab")
      .forEach((x) => x.classList.toggle("is-active", x.dataset.tab === "all"));
  }

  function _clearSearchAndFilters() {
    searchTerm = "";
    if (searchInput) searchInput.value = "";
    _setAllTabActive();
  }

  // 2026-05-18 design v4-r2: replaced ad-hoc placeholder boxes with the
  // shared AdminEmpty / AdminSkeletons renderers. Kept legacy class on
  // the returned element so existing tests that selector-match on
  // `admin-proto-placeholder-box` still work.
  function _createPlaceholderEmptyState(kind, hint) {
    if (window.AdminEmpty && typeof window.AdminEmpty.renderCustom === "function") {
      let el;
      if (kind === "paused") {
        el = window.AdminEmpty.renderCustom({
          icon: "⏸", title: "Live Feed 已暫停",
          desc: hint || "目前不接收新訊息 — 點頂部「Resume」恢復串流。",
          accent: "var(--hud-amber)",
        });
      } else if (kind === "no-result") {
        el = window.AdminEmpty.renderCustom({
          icon: "○", title: "沒有符合的訊息",
          desc: hint || "清除搜尋或切回「全部」標籤檢視所有訊息。",
        });
      } else {
        el = window.AdminEmpty.render("messages");
      }
      el.classList.add("admin-proto-placeholder-box", "admin-live-feed-empty-placeholder");
      el.setAttribute("data-empty-kind", "live-feed");
      return el;
    }
    // Fallback if AdminEmpty hasn't loaded yet — preserve original look.
    const box = document.createElement("div");
    box.className = "admin-proto-placeholder-box admin-live-feed-empty-placeholder";
    box.setAttribute("data-empty-kind", "live-feed");
    box.innerHTML = `<div class="admin-proto-placeholder-title">${escapeAttr(kind)}</div><div class="admin-proto-placeholder-body">${escapeAttr(hint || "")}</div>`;
    return box;
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
    badge.className = "admin-ui-chip admin-live-feed-tag";
    badge.textContent = d.layout || "scroll";
    row.appendChild(badge);

    // Text preview
    const text = document.createElement("span");
    text.className = "admin-live-feed-text";
    text.textContent = truncate(d.text || "", TEXT_PREVIEW_LEN);
    text.title = d.text || "";
    row.appendChild(text);

    // Identity stack (@nick / fp:xxx) via shared AdminIdentity.
    // Live-feed payload has no IP; we get the @nick + fp lines.
    const identity = document.createElement("span");
    identity.className = "admin-live-feed-identity";
    if (window.AdminIdentity) {
      identity.appendChild(
        AdminIdentity.render({
          nickname: d.nickname || "",
          fp: d.fingerprint || "",
          onNicknameClick: function (nick) {
            if (!nick || !searchInput) return;
            searchInput.value = nick;
            searchInput.dispatchEvent(new Event("input", { bubbles: true }));
            searchInput.focus();
          },
        })
      );
    }
    row.appendChild(identity);

    // Action buttons
    const actions = document.createElement("span");
    actions.className = "admin-live-feed-actions";

    const blockKwBtn = document.createElement("button");
    blockKwBtn.type = "button";
    blockKwBtn.className = "admin-ui-chip is-danger admin-live-feed-action";
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
      blockFpBtn.className = "admin-ui-chip is-warn admin-live-feed-action";
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
      // 2026-05-18 design v4-r2: shared empty-state cards.
      const empty = paused
        ? _createPlaceholderEmptyState("paused")
        : entries.length === 0
          ? _createPlaceholderEmptyState("empty")
          : _createPlaceholderEmptyState("no-result");
      listEl.appendChild(empty);
    } else {
      listEl.appendChild(frag);
    }

    updateCountBadge();
    updateBulkBar();
    _updateRateBar();
    _updateChipCounts();
    _updateJumpPill();
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
    _trackRate();
    const entry = { ts: Date.now(), data: data, id: "e" + (++_entryCounter) };
    // 2026-05-17 v4: tag entries with status flags for filter chips.
    if (data && data.status === "blocked") entry.muted = true;
    if (data && (data.sensitive || data.flagged)) entry.sensitive = true;
    if (paused) {
      pauseBuffer.push(entry);
      updateCountBadge();
      _updateJumpPill();
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

  // Jump pill: shows when paused (or user has scrolled up) — count buffered.
  function _updateJumpPill() {
    const jump = document.querySelector("[data-lf-jump]");
    const n = document.querySelector("[data-lf-jump-n]");
    if (!jump || !n) return;
    const buffered = pauseBuffer.length;
    if (buffered > 0) {
      jump.hidden = false;
      n.textContent = String(buffered);
    } else {
      jump.hidden = true;
    }
  }

  function _updateRateBar() {
    const rate = document.querySelector("[data-lf-rate]");
    const total = document.getElementById("liveFeedCount");
    const dot = document.querySelector("[data-lf-statedot]");
    const lbl = document.querySelector("[data-lf-statelabel]");
    if (rate) rate.textContent = `${_currentRate()} MSG/S`;
    if (total) total.textContent = `${entries.length} TOTAL`;
    if (dot) dot.dataset.state = paused ? "paused" : "on";
    if (lbl) lbl.textContent = paused ? "已暫停" : "自動滾動 · ON";
  }

  function _updateChipCounts() {
    const setCnt = (sel, n) => { const el = document.querySelector(sel); if (el) el.textContent = String(n); };
    setCnt("[data-cnt-all]",  entries.length);
    setCnt("[data-cnt-sens]", entries.filter((e) => e.sensitive).length);
    setCnt("[data-cnt-mut]",  entries.filter((e) => e.muted).length);
    setCnt("[data-cnt-q]",    entries.filter((e) => e.data && e.data.status === "queued").length);
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

    // 2026-05-17 design v4: 4 filter chips with counts + density toggle +
    // bottom rate-bar + sticky jump-to-bottom pill. Existing bulk-select
    // bar is kept for batch-block flow (design v4 has Ban/Mask in drawer).
    const html = `
      <div id="${SECTION_ID}" class="admin-live-feed-page admin-lf-v4 hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">LIVE FEED · AUTO-SCROLL · REAL-TIME</div>
          <div class="admin-v2-title">即時訊息流</div>
        </div>

        <div class="admin-lf-v4__card">
          <!-- Filter bar — design v4 chips with counts -->
          <div class="admin-lf-v4__filterbar">
            <div class="admin-lf-v4__chips" role="tablist">
              <button type="button" class="admin-lf-v4__chip is-active admin-live-feed-tab" data-tab="all" role="tab">
                全部 <span class="admin-lf-v4__count" data-cnt-all>0</span>
              </button>
              <button type="button" class="admin-lf-v4__chip admin-live-feed-tab" data-tab="sensitive" role="tab">
                含敏感字 <span class="admin-lf-v4__count" data-cnt-sens>0</span>
              </button>
              <button type="button" class="admin-lf-v4__chip admin-live-feed-tab" data-tab="muted" role="tab">
                已封鎖 <span class="admin-lf-v4__count" data-cnt-mut>0</span>
              </button>
              <button type="button" class="admin-lf-v4__chip admin-live-feed-tab" data-tab="queued" role="tab">
                待審 <span class="admin-lf-v4__count" data-cnt-q>0</span>
              </button>
            </div>
            <span class="admin-lf-v4__spacer"></span>
            <input id="liveFeedSearch" type="search"
              placeholder="${escapeAttr(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <span class="admin-lf-v4__density-label">DENSITY</span>
            <button type="button" class="admin-lf-v4__dchip" data-density="compact">COMPACT</button>
            <button type="button" class="admin-lf-v4__dchip is-active" data-density="comfy">COMFY</button>
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${escapeAttr(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${escapeAttr(ServerI18n.t("clearBtn"))}</button>
          </div>

          <!-- Bulk-select bar (kept for batch fingerprint block flow) -->
          <div id="liveFeedBulk" class="admin-lf-v4__bulk" hidden>
            <span class="admin-ui-monolabel">BULK ·
              <span class="admin-live-feed-bulk-count">0</span> 已選
            </span>
            <span class="admin-lf-v4__spacer"></span>
            <button type="button" id="liveFeedBulkBlock" class="admin-ui-action is-primary admin-live-feed-bulk-action">批次遮罩指紋</button>
            <button type="button" id="liveFeedBulkClear" class="admin-ui-action admin-live-feed-bulk-action">清除選取</button>
          </div>

          <!-- Message list (relative for sticky jump pill) -->
          <div class="admin-lf-v4__streamwrap">
            <div id="liveFeedList" class="admin-live-feed-list admin-lf-v4__list" role="list" data-density="comfy">
              <div class="admin-live-feed-empty">${escapeAttr(ServerI18n.t("liveFeedWaiting"))}</div>
            </div>
            <div class="admin-lf-v4__jump" data-lf-jump hidden>
              <button type="button" data-lf-jump-btn>↓ <span data-lf-jump-n>0</span> 新訊息</button>
            </div>
          </div>

          <!-- Bottom rate bar -->
          <div class="admin-lf-v4__bottom">
            <span class="admin-lf-v4__statedot" data-lf-statedot></span>
            <span class="admin-lf-v4__statelabel" data-lf-statelabel>自動滾動 · ON</span>
            <span class="admin-lf-v4__spacer"></span>
            <span class="admin-lf-v4__counts">
              <span class="admin-ui-monolabel admin-live-feed-count" id="liveFeedCount">0 TOTAL</span>
              · <span data-lf-rate>0.0 MSG/S</span>
            </span>
          </div>
        </div>
      </div>`;

    grid.insertAdjacentHTML("beforeend", html);
    return true;
  }

  // ── Init ─────────────────────────────────────────────────

  // v5.0.0+ admin-WS removal (Phase 1): live feed used to subscribe via
  // CustomEvent `admin-ws-message` dispatched by admin.js's flask-sock
  // bootstrap. Now admin polls /admin/live-feed/recent with a cursor.
  let _pollerBound = false;
  let _pollerTimer = null;
  let _pollerSince = 0;
  const _POLL_INTERVAL_MS = 1500;

  async function _pollOnce() {
    try {
      const r = await fetch(
        "/admin/live-feed/recent?since=" + encodeURIComponent(_pollerSince),
        { credentials: "same-origin" }
      );
      if (!r.ok) return;
      const j = await r.json();
      if (Array.isArray(j.entries)) {
        for (const e of j.entries) {
          if (e && e.data) addEntry(e.data);
        }
      }
      if (typeof j.next_since === "number") _pollerSince = j.next_since;
    } catch (_) {
      // network blip — next tick will retry from same cursor
    }
  }

  function _bindPoller() {
    if (_pollerBound) return;
    _pollerBound = true;
    // Initial fetch surfaces the current buffer head before polling kicks in
    _pollOnce();
    _pollerTimer = setInterval(_pollOnce, _POLL_INTERVAL_MS);
    window.addEventListener("beforeunload", () => {
      if (_pollerTimer) {
        clearInterval(_pollerTimer);
        _pollerTimer = null;
      }
    });
  }

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

    _bindPoller();

    // 2026-05-17 v4: density toggle (compact/comfy) — propagated as
    // data-density on the list element so CSS can shrink row padding.
    const dchips = document.querySelectorAll(".admin-lf-v4__dchip");
    dchips.forEach((c) => {
      c.addEventListener("click", () => {
        dchips.forEach((x) => x.classList.toggle("is-active", x === c));
        if (listEl) listEl.dataset.density = c.dataset.density || "comfy";
      });
    });

    // 2026-05-17 v4: jump-to-bottom pill — drains pauseBuffer into the live
    // list immediately (without flipping paused state, so user can stay
    // paused but catch up to current).
    const jumpBtn = document.querySelector("[data-lf-jump-btn]");
    if (jumpBtn) {
      jumpBtn.addEventListener("click", () => {
        if (pauseBuffer.length === 0) return;
        for (const e of pauseBuffer) entries.push(e);
        pauseBuffer = [];
        if (entries.length > MAX_ENTRIES) entries.splice(0, entries.length - MAX_ENTRIES);
        renderList();
        if (listEl) listEl.scrollTop = listEl.scrollHeight;
      });
    }

    // Update rate bar every second even if no new entries (drains old samples).
    setInterval(_updateRateBar, 1000);

    renderList();

    // 2026-04-27 P1: row click → open Message Detail Drawer.
    // Ignore clicks on existing inline action buttons
    // and on the bulk-select checkbox to keep their behavior.
    if (listEl) {
      listEl.addEventListener("click", function (e) {
        // Ignore swipe-action buttons too — they call blockAction directly.
        if (e.target.closest("button, input, .admin-live-feed-actions, .admin-live-feed-check, .admin-live-feed-row__swipe-actions")) return;
        const row = e.target.closest(".admin-live-feed-row");
        if (!row) return;
        // If row is mid-swipe, a tap should close the actions, not open the drawer.
        if (row.classList.contains("is-swiped")) {
          row.classList.remove("is-swiped");
          return;
        }
        const id = row.dataset.id;
        if (!id) return;
        const entry = entries.find(function (en) { return en.id === id; });
        if (entry && window.AdminMessageDrawer) {
          window.AdminMessageDrawer.open(entry);
        }
      });

      // 2026-05-18 design v4-r4: swipe-to-action on touch devices.
      // Left-swipe reveals MASK / MUTE / BAN buttons inside the row.
      // Touch threshold 60px, full reveal at 180px (matches CSS).
      _bindLiveFeedSwipe(listEl);
    }
  }

  function _bindLiveFeedSwipe(host) {
    if (!("ontouchstart" in window)) return; // desktop pointer → skip
    let startX = 0, startY = 0, deltaX = 0;
    let active = null;     // currently-tracked row
    let injected = null;   // row whose action buttons are mounted
    let aborted = false;

    function _ensureActions(row) {
      if (row.querySelector(".admin-live-feed-row__swipe-actions")) return;
      const wrap = document.createElement("div");
      wrap.className = "admin-live-feed-row__swipe-actions";
      wrap.innerHTML = `
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="mask">
          <span class="admin-live-feed-row__swipe-btn-icon">◐</span>MASK
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mute" data-swipe-act="mute">
          <span class="admin-live-feed-row__swipe-btn-icon">◐</span>MUTE
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">⊘</span>BAN
        </button>`;
      wrap.addEventListener("click", function (e) {
        const btn = e.target.closest("[data-swipe-act]");
        if (!btn) return;
        const id = row.dataset.id;
        const entry = entries.find((en) => en.id === id);
        if (!entry || !entry.data) return;
        const act = btn.dataset.swipeAct;
        if (act === "ban" || act === "mute") {
          if (entry.data.fingerprint) blockAction("fingerprint", entry.data.fingerprint, id);
        } else if (act === "mask") {
          if (entry.data.text) blockAction("keyword", entry.data.text, id);
        }
        row.classList.remove("is-swiped");
      });
      row.appendChild(wrap);
    }

    host.addEventListener("touchstart", function (e) {
      const row = e.target.closest(".admin-live-feed-row");
      if (!row) return;
      // Allow tapping a row that's already swiped to dismiss via click handler.
      if (e.target.closest(".admin-live-feed-row__swipe-actions")) return;
      active = row;
      aborted = false;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      deltaX = 0;
    }, { passive: true });

    host.addEventListener("touchmove", function (e) {
      if (!active || aborted) return;
      const t = e.touches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      // If user is mostly scrolling vertically, abandon the swipe gesture.
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 12) { aborted = true; return; }
      deltaX = dx;
      if (dx < -10) {
        _ensureActions(active);
        injected = active;
        active.classList.add("is-swiping");
        const tx = Math.max(-180, dx);
        active.style.transform = `translateX(${tx}px)`;
      } else if (dx > 10 && active.classList.contains("is-swiped")) {
        active.style.transform = "";
      }
    }, { passive: true });

    host.addEventListener("touchend", function () {
      if (!active) return;
      active.classList.remove("is-swiping");
      active.style.transform = "";
      if (deltaX <= -60) {
        active.classList.add("is-swiped");
      } else {
        active.classList.remove("is-swiped");
      }
      active = null;
      injected = null;
      deltaX = 0;
    }, { passive: true });
  }

  // Expose for admin-message-drawer.js to read same-fp messages.
  window.AdminLiveFeed = {
    getEntries: function () { return entries.slice(); },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
