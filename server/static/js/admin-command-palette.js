// admin-command-palette.js — ⌘K palette for admin (P3-4).
// Renders ONLY on admin pages (body.admin-body). No viewer / Electron mount.
//
// UX:
//   - ⌘K (mac) / Ctrl+K (win/linux) toggles open
//   - Esc closes
//   - Scope chips: 所有 / 訊息 / 用戶 / 設定 / 跳轉
//   - Tab cycles scope, ↑↓ navigates results, Enter selects
//   - Results: routes (jump), settings (jump + scroll), messages (history), users (fingerprints)
//
// Mounts independently — talks to admin.js only via location.hash for routes.
(function () {
  "use strict";

  // Guard: admin pages only (per docs/design-v2-backlog.md P3-4).
  if (!document.body || !document.body.classList.contains("admin-body")) return;

  // Routes mirror admin.js ADMIN_ROUTES — duplicated to avoid coupling.
  const ROUTES = {
    dashboard:      { title: "控制台",           kicker: "DASHBOARD" },
    messages:       { title: "訊息紀錄",         kicker: "MESSAGES" },
    history:        { title: "時間軸匯出",       kicker: "HISTORY" },
    replay:         { title: "歷史重播",         kicker: "REPLAY" },
    polls:          { title: "投票",             kicker: "POLLS" },
    widgets:        { title: "Overlay Widgets",  kicker: "WIDGETS" },
    themes:         { title: "風格主題包",       kicker: "THEMES" },
    display:        { title: "顯示設定",         kicker: "DISPLAY" },
    "viewer-theme": { title: "觀眾頁主題",       kicker: "VIEWER" },
    assets:         { title: "素材庫",           kicker: "ASSETS" },
    moderation:     { title: "敏感字 & 黑名單",  kicker: "MODERATION" },
    ratelimit:      { title: "速率限制",         kicker: "RATELIMIT" },
    effects:        { title: "效果庫 .dme",      kicker: "EFFECTS" },
    plugins:        { title: "伺服器插件",       kicker: "PLUGINS" },
    fonts:          { title: "字型管理",         kicker: "FONTS" },
    system:         { title: "系統 & 指紋",      kicker: "SYSTEM" },
    security:       { title: "安全",             kicker: "SECURITY" },
    backup:         { title: "備份 & 匯出",      kicker: "BACKUP" },
  };

  // Setting → {route, sectionId} map. Selecting jumps to the route then
  // scrolls to the section id.
  const SETTINGS = [
    { label: "顏色 Color",          route: "display",   section: "sec-color" },
    { label: "透明度 Opacity",      route: "display",   section: "sec-opacity" },
    { label: "字級 Font size",      route: "display",   section: "sec-fontsize" },
    { label: "速度 Speed",          route: "display",   section: "sec-speed" },
    { label: "字型 Font family",    route: "display",   section: "sec-fontfamily" },
    { label: "版型 Layout",         route: "display",   section: "sec-layout" },
    { label: "觀眾頁主題",          route: "viewer-theme", section: "sec-viewer-theme" },
    { label: "黑名單 Blacklist",    route: "moderation",section: "sec-blacklist" },
    { label: "敏感字過濾 Filters",  route: "moderation",section: "sec-filters" },
    { label: "速率限制 Rate limit", route: "ratelimit", section: "sec-ratelimit" },
    { label: "效果庫 Effects",      route: "effects",   section: "sec-effects" },
    { label: "效果管理 Effects mgmt", route: "effects", section: "sec-effects-mgmt" },
    { label: "Emoji",               route: "assets",    section: "sec-emojis" },
    { label: "Stickers",            route: "assets",    section: "sec-stickers" },
    { label: "Sounds",              route: "assets",    section: "sec-sounds" },
    { label: "字型管理",            route: "fonts",     section: "sec-fonts" },
    { label: "Webhooks",            route: "system",    section: "sec-webhooks" },
    { label: "Scheduler",           route: "system",    section: "sec-scheduler" },
    { label: "Fingerprints",        route: "system",    section: "sec-fingerprints" },
    { label: "系統概覽 Overview",   route: "system",    section: "sec-system-overview" },
  ];

  const SCOPES = [
    { id: "all",      label: "所有" },
    { id: "messages", label: "訊息" },
    { id: "users",    label: "用戶" },
    { id: "settings", label: "設定" },
    { id: "routes",   label: "跳轉" },
  ];

  let _root = null;
  let _input = null;
  let _list = null;
  let _scopeRow = null;
  let _scope = "all";
  let _query = "";
  let _items = [];
  let _activeIdx = 0;
  // Caches for messages (history) and users (fingerprints) so search is
  // client-side fuzzy filtering — endpoints don't accept `q`.
  let _msgCache = null;     // { at, records }
  let _userCache = null;    // { at, records }
  const CACHE_TTL_MS = 15000;

  function _esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }

  // Lightweight subsequence fuzzy match scoring. Returns -1 on no match.
  function _fuzzyScore(text, q) {
    if (!q) return 0;
    const t = String(text || "").toLowerCase();
    const needle = q.toLowerCase();
    let ti = 0, ni = 0, score = 0, streak = 0;
    while (ti < t.length && ni < needle.length) {
      if (t[ti] === needle[ni]) { ni++; streak++; score += 2 + streak; }
      else { streak = 0; }
      ti++;
    }
    if (ni < needle.length) return -1;
    // Prefix bonus.
    if (t.startsWith(needle)) score += 10;
    return score;
  }

  function _build() {
    const root = document.createElement("div");
    root.className = "admin-cmdk";
    root.setAttribute("hidden", "");
    root.setAttribute("aria-hidden", "true");
    root.innerHTML = `
      <div class="admin-cmdk-backdrop" data-cmdk-close></div>
      <div class="admin-cmdk-panel" role="dialog" aria-modal="true" aria-label="Command palette">
        <div class="admin-cmdk-search">
          <span class="admin-cmdk-search-icon" aria-hidden="true">⌕</span>
          <input type="text" class="admin-cmdk-input" placeholder="搜尋訊息 · 用戶 · 設定 · 跳轉..." autocomplete="off" spellcheck="false" />
          <span class="admin-cmdk-prompt">⌘K</span>
        </div>
        <div class="admin-cmdk-scope" role="tablist">
          ${SCOPES.map(s => `
            <button type="button" class="admin-cmdk-chip ${s.id === "all" ? "is-on" : ""}"
                    data-scope="${s.id}" role="tab" aria-selected="${s.id === "all"}">
              <span class="lbl">${_esc(s.label)}</span>
              <span class="num" data-scope-count="${s.id}">·</span>
            </button>
          `).join("")}
          <span class="admin-cmdk-hint">Tab · Esc</span>
        </div>
        <ul class="admin-cmdk-list" role="listbox"></ul>
        <div class="admin-cmdk-foot">
          <span><kbd>↑↓</kbd> 選擇</span>
          <span><kbd>Enter</kbd> 跳轉</span>
          <span><kbd>Tab</kbd> 切換範圍</span>
          <span><kbd>Esc</kbd> 關閉</span>
        </div>
        <div class="admin-cmdk-note">所有動作在 Server 執行 · Desktop Client 只負責顯示彈幕</div>
      </div>
    `;
    document.body.appendChild(root);
    _root = root;
    _input = root.querySelector(".admin-cmdk-input");
    _list = root.querySelector(".admin-cmdk-list");
    _scopeRow = root.querySelector(".admin-cmdk-scope");

    root.addEventListener("click", (e) => {
      if (e.target.matches("[data-cmdk-close]")) close();
    });
    _scopeRow.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-scope]");
      if (!chip) return;
      _setScope(chip.dataset.scope);
    });
    _input.addEventListener("input", (e) => {
      _query = e.target.value;
      _refresh();
    });
    _input.addEventListener("keydown", _onKey);
    _list.addEventListener("click", (e) => {
      const row = e.target.closest("[data-cmdk-idx]");
      if (!row) return;
      _activeIdx = parseInt(row.dataset.cmdkIdx, 10) || 0;
      _activate();
    });
  }

  function _setScope(id) {
    _scope = id;
    _scopeRow.querySelectorAll("[data-scope]").forEach((c) => {
      const on = c.dataset.scope === id;
      c.classList.toggle("is-on", on);
      c.setAttribute("aria-selected", on ? "true" : "false");
    });
    _refresh();
  }

  function _onKey(e) {
    if (e.key === "Escape") { e.preventDefault(); close(); return; }
    if (e.key === "ArrowDown") { e.preventDefault(); _moveActive(1); return; }
    if (e.key === "ArrowUp") { e.preventDefault(); _moveActive(-1); return; }
    if (e.key === "Enter") { e.preventDefault(); _activate(); return; }
    if (e.key === "Tab") { e.preventDefault(); _cycleScope(e.shiftKey ? -1 : 1); return; }
  }

  function _cycleScope(dir) {
    const idx = SCOPES.findIndex((s) => s.id === _scope);
    const next = (idx + dir + SCOPES.length) % SCOPES.length;
    _setScope(SCOPES[next].id);
  }

  function _moveActive(dir) {
    if (!_items.length) return;
    _activeIdx = (_activeIdx + dir + _items.length) % _items.length;
    _renderList();
    const el = _list.querySelector(`[data-cmdk-idx="${_activeIdx}"]`);
    if (el) el.scrollIntoView({ block: "nearest" });
  }

  function _activate() {
    const item = _items[_activeIdx];
    if (!item) return;
    if (item.type === "route") {
      window.location.hash = "#/" + item.route;
      close();
    } else if (item.type === "setting") {
      window.location.hash = "#/" + item.route;
      // Scroll after route applies (admin.js applyRoute toggles display).
      setTimeout(() => {
        const el = document.getElementById(item.section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          if (el.tagName === "DETAILS" && !el.open) el.open = true;
        }
      }, 80);
      close();
    } else if (item.type === "message") {
      // Jump to messages route — palette can't deep-link to a record id.
      window.location.hash = "#/messages";
      close();
    } else if (item.type === "user") {
      window.location.hash = "#/system";
      setTimeout(() => {
        const el = document.getElementById("sec-fingerprints");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      close();
    }
  }

  function _scoreRoutes(q) {
    return Object.entries(ROUTES).map(([id, r]) => {
      const score = Math.max(_fuzzyScore(r.title, q), _fuzzyScore(id, q), _fuzzyScore(r.kicker, q));
      return {
        type: "route",
        route: id,
        label: r.title,
        sub: `route → ${r.kicker}`,
        icon: "◇",
        score,
      };
    }).filter((x) => x.score >= 0);
  }

  function _scoreSettings(q) {
    return SETTINGS.map((s) => ({
      type: "setting",
      route: s.route,
      section: s.section,
      label: s.label,
      sub: `setting · ${s.section.replace("sec-", "")} · ${s.route}`,
      icon: "⚙",
      score: _fuzzyScore(s.label, q),
    })).filter((x) => x.score >= 0);
  }

  function _scoreMessages(q) {
    if (!_msgCache) return [];
    const records = _msgCache.records || [];
    return records.map((rec) => {
      const text = rec.text || rec.message || "";
      const user = rec.nickname || rec.user || "guest";
      const ts = (rec.timestamp || "").slice(11, 19) || "—";
      const fp = (rec.fingerprint || rec.fp || "").slice(0, 8);
      return {
        type: "message",
        label: `${text}  ·  @${user}`,
        sub: fp ? `${ts} · fp:${fp}` : ts,
        icon: "💬",
        score: Math.max(_fuzzyScore(text, q), _fuzzyScore(user, q)),
      };
    }).filter((x) => x.score >= 0);
  }

  function _scoreUsers(q) {
    if (!_userCache) return [];
    const records = _userCache.records || [];
    return records.map((rec) => {
      const fp = rec.fingerprint || rec.fp || rec.id || "";
      const ip = rec.ip || rec.last_ip || "";
      const nick = rec.nickname || "";
      return {
        type: "user",
        label: nick ? `@${nick}  ·  ${fp.slice(0, 12)}…` : `${fp.slice(0, 12)}…`,
        sub: `user · ${ip || "ip 未知"}`,
        icon: "👤",
        score: Math.max(_fuzzyScore(fp, q), _fuzzyScore(ip, q), _fuzzyScore(nick, q)),
      };
    }).filter((x) => x.score >= 0);
  }

  async function _ensureCaches() {
    const now = Date.now();
    const tasks = [];
    if (_scope === "messages" || _scope === "all") {
      if (!_msgCache || now - _msgCache.at > CACHE_TTL_MS) {
        tasks.push(fetch("/admin/history?hours=24&limit=50", { credentials: "same-origin" })
          .then((r) => r.ok ? r.json() : null)
          .then((d) => { _msgCache = { at: now, records: (d && d.records) || [] }; })
          .catch(() => { _msgCache = { at: now, records: [] }; }));
      }
    }
    if (_scope === "users" || _scope === "all") {
      if (!_userCache || now - _userCache.at > CACHE_TTL_MS) {
        tasks.push(fetch("/admin/fingerprints?limit=50", { credentials: "same-origin" })
          .then((r) => r.ok ? r.json() : null)
          .then((d) => { _userCache = { at: now, records: (d && d.records) || [] }; })
          .catch(() => { _userCache = { at: now, records: [] }; }));
      }
    }
    if (tasks.length) await Promise.all(tasks);
  }

  async function _refresh() {
    await _ensureCaches();
    const q = _query.trim();
    // Always compute per-scope candidate counts so chip badges stay live, even
    // when the active scope filter restricts the visible result set.
    const byScope = {
      routes:   _scoreRoutes(q),
      settings: _scoreSettings(q),
      messages: _scoreMessages(q),
      users:    _scoreUsers(q),
    };
    const all = [].concat(byScope.routes, byScope.settings, byScope.messages, byScope.users);
    let pool;
    if (_scope === "all") pool = all;
    else if (byScope[_scope]) pool = byScope[_scope];
    else pool = [];

    pool.sort((a, b) => b.score - a.score);
    _items = pool.slice(0, 50);
    _activeIdx = 0;
    _renderList();
    _updateScopeCounts({
      all: all.length,
      routes: byScope.routes.length,
      settings: byScope.settings.length,
      messages: byScope.messages.length,
      users: byScope.users.length,
    });
  }

  function _updateScopeCounts(counts) {
    if (!_scopeRow) return;
    Object.entries(counts).forEach(([id, n]) => {
      const el = _scopeRow.querySelector(`[data-scope-count="${id}"]`);
      if (el) el.textContent = `· ${n}`;
    });
  }

  // Per-result icon chip glyph by item type. Falls back to the row's own
  // ``item.icon`` when present (settings/messages/users set their own).
  function _iconFor(item) {
    return item.icon || ({ route: "◇", setting: "⚙", message: "💬", user: "👤" }[item.type] || "·");
  }

  function _renderList() {
    if (!_items.length) {
      _list.innerHTML = `<li class="admin-cmdk-empty">無結果 · 試試切換範圍 (Tab)</li>`;
      return;
    }
    _list.innerHTML = _items.slice(0, 10).map((item, i) => {
      const isActive = i === _activeIdx;
      const shortcut = isActive ? "ENTER" : "";
      return `
        <li class="admin-cmdk-row ${isActive ? "is-active" : ""}"
            data-cmdk-idx="${i}" role="option" aria-selected="${isActive}">
          <span class="admin-cmdk-icon" aria-hidden="true">${_esc(_iconFor(item))}</span>
          <span class="admin-cmdk-body">
            <span class="admin-cmdk-label">${_esc(item.label)}</span>
            <span class="admin-cmdk-sub">${_esc(item.sub || "")}</span>
          </span>
          <span class="admin-cmdk-shortcut">${_esc(shortcut)}</span>
        </li>
      `;
    }).join("");
    if (_items.length > 10) {
      _list.insertAdjacentHTML("beforeend", `<li class="admin-cmdk-more">+${_items.length - 10} 個更多 · 縮小搜尋範圍</li>`);
    }
  }

  function open() {
    if (!_root) _build();
    _root.removeAttribute("hidden");
    _root.setAttribute("aria-hidden", "false");
    _root.classList.add("is-open");
    _query = "";
    _input.value = "";
    _setScope("all");
    setTimeout(() => _input.focus(), 20);
  }

  function close() {
    if (!_root) return;
    _root.setAttribute("hidden", "");
    _root.setAttribute("aria-hidden", "true");
    _root.classList.remove("is-open");
  }

  function isOpen() {
    return !!(_root && !_root.hasAttribute("hidden"));
  }

  // Global ⌘K / Ctrl+K toggle.
  document.addEventListener("keydown", (e) => {
    const cmdk = (e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K");
    if (cmdk) {
      e.preventDefault();
      isOpen() ? close() : open();
    }
  });

  window.AdminCommandPalette = { open, close, isOpen };
})();
