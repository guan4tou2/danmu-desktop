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
  let _entryCounter = 0;

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

  function matchesFilter(entry) {
    if (filterTab === "muted")   return !!entry.muted;
    if (filterTab === "sensitive") return !!entry.sensitive;
    if (filterTab === "queued")  return entry.data && entry.data.status === "queued";
    return true;
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
          icon: "⏸", title: ServerI18n.t("lfPausedTitle"),
          desc: hint || ServerI18n.t("lfPausedDesc"),
          accent: "var(--color-ink-warning)",
        });
      } else if (kind === "no-result") {
        el = window.AdminEmpty.renderCustom({
          icon: "○", title: ServerI18n.t("lfNoMatchTitle"),
          desc: hint || ServerI18n.t("lfNoMatchDesc"),
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
    // J/K 走訪需要列本身可 focus。順帶讓 `:focus-within` 把只在 hover
    // 浮現的動作鈕叫出來——鍵盤使用者才看得到自己正在對哪一列動手。
    row.tabIndex = -1;

    // Timestamp
    const timeSpan = document.createElement("span");
    timeSpan.className = "admin-live-feed-time";
    timeSpan.textContent = fmtTime(entry.ts);
    row.appendChild(timeSpan);

    // Layout tag — 只在「非預設排版」時出現。整條訊息流每列都掛同一個
    // "SCROLL" chip 是純噪音（2026-07-30 場中審查）；預設值不標記。
    const layoutVal = (d.layout || "scroll").toLowerCase();
    if (layoutVal !== "scroll") {
      const badge = document.createElement("span");
      badge.className = "admin-ui-chip admin-live-feed-tag";
      badge.textContent = d.layout;
      row.appendChild(badge);
    }

    // Text preview
    const text = document.createElement("span");
    text.className = "admin-live-feed-text";
    text.textContent = truncate(d.text || "", TEXT_PREVIEW_LEN);
    text.title = d.text || "";
    row.appendChild(text);

    // Identity stack via shared AdminIdentity — **只給暱稱，不給 fp**。
    // 設計稿 06 §3 的移除清單明列「fp 識別碼」：訊息流是拿來讀訊息的，一整排
    // 8 碼 hex 只會讓人讀不下去。指紋仍然在 `d.fingerprint` 裡，給下面那顆
    // 「封鎖指紋」按鈕用——2026-09-08 之前它是空字串，所以那顆按鈕從來沒
    // 出現過，這一行也一直是空的（於是沒有人發現稿上的移除其實沒做到）。
    const identity = document.createElement("span");
    identity.className = "admin-live-feed-identity";
    if (window.AdminIdentity) {
      identity.appendChild(
        AdminIdentity.render({
          nickname: d.nickname || "",
          fp: "",
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
    // 動作鈕預設收起，hover/focus 該列才浮現——常駐紅色「封鎖」鈕會讓
    // 整條訊息流像警報現場（2026-07-30 場中審查）。鍵盤 focus 也會顯示，
    // 不犧牲可及性。
    const actions = document.createElement("span");
    actions.className = "admin-live-feed-actions is-hover-reveal";

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

    const ok = await window.HudConfirm?.open({
      icon: "⊘",
      title: ServerI18n.t("lfBlockTitle"),
      subtitle: ServerI18n.t("cfmSubBlockFuture"),
      severity: "danger",
      bodyText: ServerI18n.t("blockConfirm").replace("{label}", label).replace("{display}", display),
      confirmLabel: ServerI18n.t("lfBlockTitle"),
    });
    if (!ok) return;

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
    _updateRateBar();
    _updateChipCounts();
    _updateJumpPill();
  }

  function updateCountBadge() {
    if (!countBadge) return;
    const total = entries.length;
    const buffered = pauseBuffer.length;
    countBadge.textContent =
      ServerI18n.t("lfCountUnit", { n: total }) + (buffered > 0 ? ` (+${buffered})` : "");
  }

  // ── Add entry ────────────────────────────────────────────

  function addEntry(data) {
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
    // 計數器（TOTAL／MSG/S）已依設計稿 06 · §3 移除；這裡只剩卡底的狀態。
    const state = document.querySelector("[data-lf-state]");
    if (state) {
      // 暫停是「還連著但不再自動捲」——是警告不是錯誤，所以走 is-warning。
      state.className = paused ? "ui-status is-warning" : "ui-status is-success";
      state.textContent = paused
        ? ServerI18n.t("lfAutoScrollPaused")
        : ServerI18n.t("lfAutoScrollOn");
    }
  }

  function _updateChipCounts() {
    // 一定要 scope 在自己的 section 裡查：退役的 sec-notifications-overview
    // 還留著同名 data-cnt-* 節點且在 DOM 前面，document.querySelector 會
    // 更新到那個「隱藏的」計數——可見的 chips 永遠卡 0（場中實測抓到）。
    const root = document.getElementById(SECTION_ID) || document;
    const setCnt = (sel, n) => { const el = root.querySelector(sel); if (el) el.textContent = String(n); };
    setCnt("[data-cnt-all]",  entries.length);
    setCnt("[data-cnt-sens]", entries.filter((e) => e.sensitive).length);
    setCnt("[data-cnt-mut]",  entries.filter((e) => e.muted).length);
    setCnt("[data-cnt-q]",    entries.filter((e) => e.data && e.data.status === "queued").length);
  }

  // ── Pause / Resume ──────────────────────────────────────

  function togglePause() {
    paused = !paused;
    // 暫停時停掉朗讀：使用者刻意讓畫面停住，背景還在唸新訊息就是在吵他
    // （設計稿 17）。
    if (listEl) listEl.setAttribute("aria-live", paused ? "off" : "polite");
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

    // 卡頭 4 顆分段（帶數量）＋ 卡底一行狀態說明 ＋ 置底跳轉 pill。
    // density 切換與卡底計數器已依設計稿 06 · §3 移除。
    const html = `
      <div id="${SECTION_ID}" class="admin-live-feed-page admin-lf-v4 hud-page-stack lg:col-span-2" data-tpl="A">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${ServerI18n.t("lfPageTitle")}</h2>
          <p class="admin-ui-page-note">${ServerI18n.t("lfPageNote")}</p>
        </div>

        <div class="admin-lf-v4__card">
          <!-- Filter bar — design v4 chips with counts -->
          <div class="admin-lf-v4__filterbar">
            <div class="admin-lf-v4__chips" role="tablist">
              <button type="button" class="admin-lf-v4__chip is-active admin-live-feed-tab" data-tab="all" role="tab">
                ${ServerI18n.t("lfChipAll")} <span class="admin-lf-v4__count" data-cnt-all>0</span>
              </button>
              <button type="button" class="admin-lf-v4__chip admin-live-feed-tab" data-tab="sensitive" role="tab">
                ${ServerI18n.t("lfChipSensitive")} <span class="admin-lf-v4__count" data-cnt-sens>0</span>
              </button>
              <button type="button" class="admin-lf-v4__chip admin-live-feed-tab" data-tab="muted" role="tab">
                ${ServerI18n.t("lfChipBlocked")} <span class="admin-lf-v4__count" data-cnt-mut>0</span>
              </button>
              <button type="button" class="admin-lf-v4__chip admin-live-feed-tab" data-tab="queued" role="tab">
                ${ServerI18n.t("lfChipPending")} <span class="admin-lf-v4__count" data-cnt-q>0</span>
              </button>
            </div>
            <span class="admin-lf-v4__spacer"></span>
            <input id="liveFeedSearch" type="search"
              placeholder="${escapeAttr(ServerI18n.t("liveFeedSearchPlaceholder"))}"
              class="admin-lf-v4__search" />
            <button id="liveFeedPauseBtn" type="button" class="admin-lf-v4__pausebtn">${escapeAttr(ServerI18n.t("pauseBtn"))}</button>
            <button id="liveFeedClearBtn" type="button" class="admin-lf-v4__pausebtn">${escapeAttr(ServerI18n.t("clearBtn"))}</button>
          </div>


          <!-- Message list (relative for sticky jump pill) -->
          <div class="admin-lf-v4__streamwrap">
            <!-- role="log" ＋ aria-live（設計稿 17）：這是一串會自己長出新
                 項目的內容，螢幕閱讀器要唸出新到的訊息。原本是 role="list"
                 且沒有 aria-live——新彈幕進來完全不會被朗讀。
                 aria-relevant="additions" 讓它只唸新增的，不會因為列表重排
                 就把整串重唸一遍。暫停捲動時切成 "off"（見 togglePause）。 -->
            <div
              id="liveFeedList"
              class="admin-live-feed-list admin-lf-v4__list"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
              aria-label="${ServerI18n.t("lfAriaLabel")}"
            ></div>
            <div class="admin-lf-v4__jump" data-lf-jump hidden>
              <button type="button" data-lf-jump-btn><span data-lf-jump-n>0</span> ${ServerI18n.t("lfJumpNew")}</button>
            </div>
          </div>

          <!-- 卡底一行（設計稿 06 · §3）：「自動捲動中 · 滑鼠停在訊息上可隱藏或封鎖」。
               原本這裡是 0 TOTAL · 0.0 MSG/S 兩個計數器——寫死的全大寫英文，
               沒進 i18n，違反設計稿 14 的文案規則；而且數量本來就在卡頭的分段
               控制上（全部 N／可疑 N／已封鎖 N），這裡是第二次講同一件事。
               狀態＝色點＋文字（設計稿 03「原則 4」），一顆 .ui-status 承載兩者。 -->
          <div class="admin-lf-v4__bottom">
            <span class="ui-status is-success" data-lf-state>${ServerI18n.t("lfAutoScrollOn")}</span>
            <span class="admin-lf-v4__hint">${ServerI18n.t("lfRowHint")}</span>
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

    const clearBtn = document.getElementById("liveFeedClearBtn");
    const tabs = document.querySelectorAll(".admin-live-feed-tab");

    if (pauseBtn) pauseBtn.addEventListener("click", togglePause);
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        entries = [];
        pauseBuffer = [];
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

    // 2026-09-08：DENSITY 切換依設計稿 06 · §3 的移除清單整組拿掉。列高由
    // 稿指定（52px），不再讓使用者自己調——多一個沒人會動的開關而已。
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
          <span class="admin-live-feed-row__swipe-btn-icon">◐</span>${ServerI18n.t("lfSwipeMask")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mute" data-swipe-act="mute">
          <span class="admin-live-feed-row__swipe-btn-icon">◐</span>${ServerI18n.t("lfSwipeMute")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">⊘</span>${ServerI18n.t("lfSwipeBan")}
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

  // ── 鍵盤操作（設計稿 15 · KS1）──────────────────────────────────
  // 快速鍵的實作留在這裡而不是 admin-shortcuts.js：訊息流的 DOM 與
  // paused/entries 狀態都在這個模組裡，隔一層去戳只會生出兩份真相。

  function _rows() {
    return listEl ? Array.from(listEl.querySelectorAll(".admin-live-feed-row")) : [];
  }

  function _focusedRow() {
    const rows = _rows();
    const active = document.activeElement;
    for (const row of rows) {
      if (row === active || row.contains(active)) return row;
    }
    return null;
  }

  function moveFocus(delta) {
    const rows = _rows();
    if (!rows.length) return false;
    const cur = _focusedRow();
    let idx = cur ? rows.indexOf(cur) + delta : (delta > 0 ? 0 : rows.length - 1);
    idx = Math.max(0, Math.min(rows.length - 1, idx));
    rows[idx].focus();
    rows[idx].scrollIntoView({ block: "nearest" });
    return true;
  }

  function blockFocused(kind) {
    const row = _focusedRow();
    if (!row) return false;
    const entry = entries.find((e) => e.id === row.dataset.id);
    if (!entry) return false;
    const value = kind === "keyword" ? entry.data.text : entry.data.fingerprint;
    if (!value) return false;
    blockAction(kind, value, entry.id);
    return true;
  }

  // Expose for admin-message-drawer.js to read same-fp messages, and for
  // admin-shortcuts.js to drive J / K / B / ⇧B / Space.
  window.AdminLiveFeed = {
    getEntries: function () { return entries.slice(); },
    isVisible: function () { return !!(listEl && listEl.offsetParent !== null); },
    isPaused: function () { return paused; },
    moveFocus: moveFocus,
    blockFocused: blockFocused,
    togglePause: function () { togglePause(); },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
