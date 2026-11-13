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
  // 使用者往下讀時，頂端又插進來的則數（跳轉 pill 的計數）。
  let _unseen = 0;

  // DOM references (set after section is injected)
  let listEl = null;
  let pauseBtn = null;
  let searchInput = null;

  // ── Helpers ──────────────────────────────────────────────

  // 2026-09-08：全站的跳脫統一走 AdminUtils.escapeHtml（五個字元都跳，屬性
  // 位置安全）。這裡原本各自實作，scheduler 那份還漏了單引號。
  function escapeAttr(s) {
    return (window.AdminUtils && window.AdminUtils.escapeHtml)
      ? window.AdminUtils.escapeHtml(s)
      : String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
          return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
        });
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
    // 只留「已封鎖」：它由本機封鎖動作標記（blockAction），是真的有資料來源。
    // 「含敏感字」「待審」兩個篩選曾經存在，但訊息快照（messaging.
    // _broadcast_live_feed）從來沒有 sensitive／status 欄位，待審訊息也不會進
    // 這條串流（它們在 mod_queue，/fire 回 202），所以兩個分頁永遠是 0。
    if (filterTab === "muted")   return !!entry.muted;
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

    // 2026-10-29：撤下單則。在這之前，處理一句不該出現的話只有兩條路——
    // 永久封鎖發話者，或清空整屏。兩者都是拿大砲打蚊子。
    if (d.message_id) {
      const recallBtn = document.createElement("button");
      recallBtn.type = "button";
      recallBtn.className = "admin-ui-chip admin-live-feed-action";
      recallBtn.textContent = ServerI18n.t("lfRecallBtn");
      recallBtn.title = ServerI18n.t("lfRecallTitle");
      recallBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        recallAction(entry);
      });
      actions.appendChild(recallBtn);
    }

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

    // 2026-10-29：點列／Enter 開啟訊息詳情抽屜（同指紋歷史、回覆到顯示層）。
    // 抽屜模組一直都在，但全庫沒有任何人呼叫它——能力等於不存在。
    row.classList.add("is-clickable");
    row.addEventListener("click", (e) => {
      if (e.target.closest(".admin-live-feed-actions")) return;
      openDetail(entry);
    });
    row.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" || e.target.closest("button")) return;
      e.preventDefault();
      openDetail(entry);
    });

    return row;
  }

  function openDetail(entry) {
    if (window.AdminMessageDrawer && typeof window.AdminMessageDrawer.open === "function") {
      window.AdminMessageDrawer.open(entry);
    }
  }

  // ── Recall one message（走共用 AdminModeration.recall）────
  // 不需要確認：它不刪資料、不動黑名單，只是把這一則從大螢幕拿下來。
  // 加一層 confirm 等於把「一鍵撤下」變回「三步撤下」，正好違背它的目的。

  async function recallAction(entry) {
    const id = entry && entry.data && entry.data.message_id;
    if (!id) return;
    const result = await window.AdminModeration.recall(id);
    if (!result.ok) {
      console.error("[LiveFeed] Recall failed:", result.error);
      showToast(ServerI18n.t("lfRecallFailed"), false);
      return;
    }
    entry.recalled = true;
    const row = _rowById(entry.id);
    if (row) row.classList.add("is-recalled");
    showToast(ServerI18n.t("lfRecallDone"));
  }

  // ── Block action（2026-10-29 改走共用的 AdminModeration）────────────────
  // 確認、API、提示都在那一層——訊息流只負責自己的本地狀態：把命中列標成
  // muted，讓「已封鎖」分頁立刻看得到。抽屜與未來的入口共用同一份確認文案
  // 與同一支 API，不會再各自漂移。

  async function blockAction(type, value, markEntryId) {
    if (!value) return;
    const blockFn = type === "keyword"
      ? window.AdminModeration.blockKeyword
      : window.AdminModeration.blockFingerprint;
    const ok = await blockFn.call(window.AdminModeration, value);
    if (!ok) return;
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
  }


  // ── Focus / lookup helpers (2026-10-29) ──────────────────
  // 焦點以前綁在 DOM 節點上，而列表每則訊息都整批重建 —— 於是 J/K 巡覽
  // 在真正有流量的時候每則斷一次。現在焦點記在 entry.id 上，重建後還原。

  function _rowById(id) {
    if (!listEl || !id) return null;
    const rows = listEl.children;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].dataset && rows[i].dataset.id === id) return rows[i];
    }
    return null;
  }

  function _focusedRowId() {
    const a = document.activeElement;
    const row = a && a.closest ? a.closest(".admin-live-feed-row") : null;
    return row ? row.dataset.id : null;
  }

  function _restoreRowFocus(id) {
    if (!id) return;
    const row = _rowById(id);
    if (row && document.activeElement !== row) row.focus({ preventScroll: true });
  }

  // ── Full re-render of visible list ───────────────────────

  function renderList() {
    if (!listEl) return;
    const focusId = _focusedRowId();
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

    _refreshChrome();
    _restoreRowFocus(focusId);
  }

  // ── Incremental insert (2026-10-29) ──────────────────────
  // 新訊息只插一列，不重建整張表。兩個副作用一併處理：
  //   · 使用者往下讀舊訊息時，插入不能把他正在看的那一段推走
  //   · 捲到頂（或本來就在頂）時才跟著最新訊息走

  function _insertRow(entry) {
    if (!listEl) return null;
    if (!matchesSearch(entry) || !matchesFilter(entry)) return null;
    const empty = listEl.querySelector("[data-empty-kind='live-feed']");
    if (empty) empty.remove();

    const stickToTop = listEl.scrollTop <= 8;
    const row = createEntryEl(entry);
    if (stickToTop) {
      // 最常見的情況：跟著最新訊息走。這條路不量 scrollHeight——
      // 批次進來 30 則時，量 30 次就是 30 次強制重排。
      listEl.insertBefore(row, listEl.firstChild);
    } else {
      // 使用者正在往下讀：補回被推走的高度，並累計「上面還有幾則沒看」。
      const beforeHeight = listEl.scrollHeight;
      listEl.insertBefore(row, listEl.firstChild);
      listEl.scrollTop += listEl.scrollHeight - beforeHeight;
      _unseen += 1;
    }
    return row;
  }

  function _trimRows() {
    const overflow = entries.length - MAX_ENTRIES;
    if (overflow <= 0) return;
    const dropped = entries.splice(0, overflow);
    dropped.forEach((e) => {
      const row = _rowById(e.id);
      if (row) row.remove();
    });
  }

  function _refreshChrome() {
    _updateRateBar();
    _updateChipCounts();
    _updateJumpPill();
  }

  // 2026-10-29：updateCountBadge() 移除。它一直在找 #liveFeedCount，
  // 而那個節點從分頁 chips 上線之後就不存在了——每則訊息都在更新一個
  // 永遠是 null 的元素。數量現在由 _updateChipCounts 寫進 chips。

  // ── Add entry ────────────────────────────────────────────

  function addEntry(data) {
    const entry = {
      ts: Date.now(),
      data: data,
      // message_id 是伺服器給的穩定識別碼，撤回與詳情抽屜都要用它。
      // 沒有它（舊資料／測試資料）才退回本機流水號。
      id: (data && data.message_id) ? "m" + data.message_id : "e" + (++_entryCounter),
    };
    if (data && data.status === "blocked") entry.muted = true;
    if (paused) {
      pauseBuffer.push(entry);
      _updateChipCounts();
      _updateJumpPill();
      return;
    }
    entries.push(entry);
    _insertRow(entry);
    _trimRows();
    _refreshChrome();
  }

  // Jump pill: shows when paused, or when the user has scrolled away from the
  // newest end and messages kept arriving. Before 2026-10-29 this element was
  // rendered but never bound — a visible button that did nothing.
  function _updateJumpPill() {
    const jump = document.querySelector("[data-lf-jump]");
    const n = document.querySelector("[data-lf-jump-n]");
    if (!jump || !n) return;
    const buffered = pauseBuffer.length;
    const count = buffered > 0 ? buffered : _unseen;
    if (count > 0) {
      jump.hidden = false;
      n.textContent = String(count);
    } else {
      jump.hidden = true;
    }
  }

  function _jumpToLatest() {
    if (paused) togglePause();
    _unseen = 0;
    if (listEl) listEl.scrollTop = 0;
    _updateJumpPill();
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
    setCnt("[data-cnt-mut]",  entries.filter((e) => e.muted).length);
    // [data-cnt-q]（待審）的數字來自審核佇列本身，見 _pollPending。
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
      _unseen = 0;
      renderList();
    } else {
      _updateChipCounts();
      _updateJumpPill();
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
              <button type="button" class="admin-lf-v4__chip admin-live-feed-tab" data-tab="muted" role="tab">
                ${ServerI18n.t("lfChipBlocked")} <span class="admin-lf-v4__count" data-cnt-mut>0</span>
              </button>
            </div>
            <!-- 待審不是這串訊息的篩選條件（待審訊息尚未顯示），是通往審核佇列的入口。
                 放在 tablist 外面，因為它是連結不是分頁。 -->
            <a class="admin-lf-v4__chip admin-lf-v4__chip--link" href="#/moderation/queue" data-lf-pending-link>
              ${ServerI18n.t("lfChipPending")} <span class="admin-lf-v4__count" data-cnt-q>0</span>
            </a>
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

  // 同時最多一個請求在飛：慢網路下第二個 tick 會用同一個游標再要一次，
  // 兩份回應都帶同一批訊息，列表就會重複插入。
  let _pollInFlight = false;

  async function _pollOnce() {
    if (_pollInFlight) return;
    _pollInFlight = true;
    try {
      const r = await fetch(
        "/admin/live-feed/recent?since=" + encodeURIComponent(_pollerSince),
        { credentials: "same-origin" }
      );
      if (!r.ok) return;
      const j = await r.json();
      if (Array.isArray(j.entries)) {
        for (const e of j.entries) {
          if (!e || !e.data) continue;
          // 第二道防線：只接受比游標新的資料（seq 單調遞增），
          // 重送或亂序的舊回應不會重複渲染。
          if (typeof e.seq === "number") {
            if (e.seq <= _pollerSince) continue;
            _pollerSince = e.seq;
          }
          addEntry(e.data);
        }
      }
      if (typeof j.next_since === "number" && j.next_since > _pollerSince) {
        _pollerSince = j.next_since;
      }
    } catch (_) {
      // network blip — next tick will retry from same cursor
    } finally {
      _pollInFlight = false;
    }
  }

  // 待審數量：審核佇列有自己的資料來源（/admin/modqueue/list），訊息流不會有。
  // 頻率比訊息流低——數字只是提醒，真正處理在審核頁；頁面隱藏時不打。
  const _PENDING_INTERVAL_MS = 5000;
  let _pendingTimer = null;
  let _pendingInFlight = false;

  async function _pollPending() {
    if (_pendingInFlight || document.hidden) return;
    _pendingInFlight = true;
    try {
      const r = await fetch("/admin/modqueue/list", { credentials: "same-origin" });
      if (!r.ok) return;
      const j = await r.json();
      const n = Array.isArray(j.pending) ? j.pending.length : 0;
      const root = document.getElementById(SECTION_ID);
      if (!root) return;
      const cnt = root.querySelector("[data-cnt-q]");
      if (cnt) cnt.textContent = String(n);
      const link = root.querySelector("[data-lf-pending-link]");
      if (link) link.classList.toggle("has-pending", n > 0);
    } catch (_) {
      // 下一輪再試
    } finally {
      _pendingInFlight = false;
    }
  }

  function _bindPoller() {
    if (_pollerBound) return;
    _pollerBound = true;
    // Initial fetch surfaces the current buffer head before polling kicks in
    _pollOnce();
    _pollerTimer = setInterval(_pollOnce, _POLL_INTERVAL_MS);
    _pollPending();
    _pendingTimer = setInterval(_pollPending, _PENDING_INTERVAL_MS);
    window.addEventListener("beforeunload", () => {
      if (_pendingTimer) {
        clearInterval(_pendingTimer);
        _pendingTimer = null;
      }
      if (_pollerTimer) {
        clearInterval(_pollerTimer);
        _pollerTimer = null;
      }
    });
  }

  function init() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    // The shell may replace settings-grid after DOMContentLoaded. Mount on
    // its explicit lifecycle event as well, without a permanent DOM observer.
    if (!document.getElementById(SECTION_ID) && injectSection()) {
      bindUI();
      renderList();
    }
  }

  function bindUI() {
    listEl = document.getElementById("liveFeedList");
    pauseBtn = document.getElementById("liveFeedPauseBtn");
    searchInput = document.getElementById("liveFeedSearch");

    const clearBtn = document.getElementById("liveFeedClearBtn");
    const tabs = document.querySelectorAll(".admin-live-feed-tab");

    if (pauseBtn) pauseBtn.addEventListener("click", togglePause);
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        entries = [];
        pauseBuffer = [];
        _unseen = 0;
        renderList();
      });
    }

    // 跳轉 pill 以前只會被顯示，按了沒有反應（沒有綁任何 listener）。
    const jumpBtn = document.querySelector("[data-lf-jump-btn]");
    if (jumpBtn) jumpBtn.addEventListener("click", _jumpToLatest);
    if (listEl) {
      listEl.addEventListener("scroll", () => {
        if (listEl.scrollTop <= 8 && _unseen > 0) {
          _unseen = 0;
          _updateJumpPill();
        }
      }, { passive: true });
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
      const id = row.dataset.id;
      const entry = entries.find((en) => en.id === id);
      const hasMsgId = !!(entry && entry.data && entry.data.message_id);
      const wrap = document.createElement("div");
      wrap.className = "admin-live-feed-row__swipe-actions";
      // 2026-10-29：原本三顆——遮罩／靜音／封禁。其中「靜音」與「封禁」打的
      // 是同一支 API（同一個永久效果），「遮罩」則是把整句文本加進黑名單。
      // 三個按鈕、兩種行為、零個「暫時」——比只有兩顆更糟，因為它承諾了
      // 一個不存在的選項。現在只留真的做得到的兩件事。
      wrap.innerHTML = `
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--mask" data-swipe-act="recall" ${hasMsgId ? "" : "disabled"}>
          <span class="admin-live-feed-row__swipe-btn-icon">◌</span>${ServerI18n.t("lfRecallBtn")}
        </button>
        <button type="button" class="admin-live-feed-row__swipe-btn admin-live-feed-row__swipe-btn--ban" data-swipe-act="ban">
          <span class="admin-live-feed-row__swipe-btn-icon">⊘</span>${ServerI18n.t("lfSwipeBan")}
        </button>`;
      wrap.addEventListener("click", function (e) {
        const btn = e.target.closest("[data-swipe-act]");
        if (!btn || btn.disabled) return;
        const rowId = row.dataset.id;
        const rowEntry = entries.find((en) => en.id === rowId);
        if (!rowEntry || !rowEntry.data) return;
        const act = btn.dataset.swipeAct;
        if (act === "ban") {
          if (rowEntry.data.fingerprint) blockAction("fingerprint", rowEntry.data.fingerprint, rowId);
        } else if (act === "recall") {
          recallAction(rowEntry);
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

  document.addEventListener("admin-panel-rendered", init);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
