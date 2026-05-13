// admin-command-palette.js — ⌘K palette for admin (P3-4).
// Renders ONLY on admin pages (body.admin-body). No viewer / Electron mount.
//
// UX:
//   - ⌘K (mac) / Ctrl+K (win/linux) toggles open
//   - Esc closes
//   - Scope chips: 所有 / 訊息 / 用戶 / 設定 / 跳轉 / 主題包 / 快速動作
//   - Tab cycles scope, ↑↓ navigates results, Enter selects
//   - Results: routes (jump), settings (jump + scroll), messages (history),
//     users (fingerprints), themes (POST /admin/themes/active),
//     actions (predefined client-side mutations e.g. /effects/reload)
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
    history:        { title: "歷史",             kicker: "HISTORY · 匯出 / 重播" },
    polls:          { title: "投票",             kicker: "POLLS" },
    widgets:        { title: "Overlay Widgets",  kicker: "WIDGETS" },
    themes:         { title: "風格主題包",       kicker: "THEMES" },
    "viewer-config":{ title: "Viewer 設定",       kicker: "VIEWER CONFIG · 整頁主題 / 表單欄位" },
    assets:         { title: "素材庫",           kicker: "ASSETS" },
    integrations:   { title: "整合",              kicker: "INTEGRATIONS" },
    firetoken:      { title: "Fire Token",        kicker: "FIRE TOKEN" },
    moderation:     { title: "敏感字 & 黑名單",  kicker: "MODERATION" },
    ratelimit:      { title: "速率限制",         kicker: "RATELIMIT" },
    effects:        { title: "效果庫 .dme",      kicker: "EFFECTS" },
    plugins:        { title: "伺服器插件",       kicker: "PLUGINS" },
    fonts:          { title: "字型管理",         kicker: "FONTS" },
    system:         { title: "系統 & 指紋",      kicker: "SYSTEM" },
    security:       { title: "安全",             kicker: "SECURITY" },
    backup:         { title: "備份 & 匯出",      kicker: "BACKUP" },
    notifications:  { title: "通知",              kicker: "NOTIFICATIONS · 警示中心" },
    audience:       { title: "觀眾",              kicker: "AUDIENCE · 指紋聚合" },
    audit:          { title: "審計日誌",           kicker: "AUDIT LOG · 持久事件紀錄" },
    about:          { title: "關於",              kicker: "ABOUT · 版本 · CHANGELOG" },
  };

  // Setting → {route, sectionId} map. Selecting jumps to the route then
  // scrolls to the section id.
  const SETTINGS = [
    { label: "顏色 Color",          route: "viewer-config", section: "sec-color" },
    { label: "透明度 Opacity",      route: "viewer-config", section: "sec-opacity" },
    { label: "字級 Font size",      route: "viewer-config", section: "sec-fontsize" },
    { label: "速度 Speed",          route: "viewer-config", section: "sec-speed" },
    { label: "字型 Font family",    route: "viewer-config", section: "sec-fontfamily" },
    { label: "版型 Layout",         route: "viewer-config", section: "sec-layout" },
    { label: "觀眾頁主題",          route: "viewer-config", section: "sec-viewer-theme" },
    { label: "黑名單 Blacklist",    route: "moderation",section: "sec-blacklist" },
    { label: "敏感字過濾 Filters",  route: "moderation",section: "sec-filters" },
    { label: "速率限制 Rate limit", route: "ratelimit", section: "sec-ratelimit" },
    { label: "效果庫 Effects",      route: "effects",   section: "sec-effects" },
    { label: "效果管理 Effects mgmt", route: "effects", section: "sec-effects-mgmt" },
    { label: "Emoji",               route: "assets",    section: "sec-emojis" },
    { label: "Stickers",            route: "assets",    section: "sec-stickers" },
    { label: "Sounds",              route: "assets",    section: "sec-sounds" },
    { label: "字型管理",            route: "fonts",     section: "sec-fonts" },
    // Phase A IA reorg (2026-05-06): webhooks/scheduler/plugins live
    // under the automation tab strip; fingerprints lives under the
    // moderation tab strip. `#/system` does NOT own these `sec-*` IDs,
    // so jumping there leaves the section hidden. Use the deep-link
    // alias slugs — `_routeAliases` resolves each to the correct
    // {nav, tab} pair, which AdminTabs.applyTabSectionVisibility honors.
    { label: "Webhooks",            route: "webhooks",     section: "sec-webhooks" },
    { label: "Scheduler",           route: "scheduler",    section: "sec-scheduler" },
    { label: "Fingerprints",        route: "fingerprints", section: "sec-fingerprints" },
    { label: "系統概覽 Overview",   route: "system",    section: "sec-system-overview" },
  ];

  const SCOPES = [
    { id: "all",      label: "所有" },
    { id: "messages", label: "訊息" },
    { id: "users",    label: "用戶" },
    { id: "settings", label: "設定" },
    { id: "routes",   label: "跳轉" },
    { id: "themes",   label: "主題包" },
    { id: "actions",  label: "快速動作" },
  ];

  // Predefined quick-action corpus — no fetch needed. Each entry's `action`
  // is invoked on Enter; the palette closes immediately after dispatch.
  function _csrf() {
    const meta = document.querySelector('meta[name="csrf-token"]');
    return (meta && meta.content) || "";
  }
  function _csrfFetch(url, opts) {
    if (typeof window.csrfFetch === "function") return window.csrfFetch(url, opts);
    const o = Object.assign({ credentials: "same-origin" }, opts || {});
    const headers = new Headers((opts && opts.headers) || {});
    headers.set("X-CSRF-Token", _csrf());
    o.headers = headers;
    return fetch(url, o);
  }
  function _toast(msg, ok) {
    if (typeof window.showToast === "function") {
      window.showToast(msg, ok !== false);
    } else {
      console.log("[cmdk]", msg);
    }
  }
  const ACTIONS = [
    {
      id: "restart-effects",
      label: "重新載入特效",
      sub: "POST /effects/reload",
      action: () => _csrfFetch("/effects/reload", { method: "POST" })
        .then((r) => _toast(r.ok ? "特效已重新載入" : "重載失敗", r.ok))
        .catch(() => _toast("重載失敗", false)),
    },
    {
      id: "end-broadcast",
      label: "結束廣播",
      sub: "切到 STANDBY 模式",
      action: () => _csrfFetch("/admin/broadcast/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "standby" }),
      })
        .then((r) => _toast(r.ok ? "已切換為 STANDBY" : "切換失敗", r.ok))
        .catch(() => _toast("切換失敗", false)),
    },
    {
      id: "reset-poll",
      label: "重置投票",
      sub: "POST /admin/poll/reset",
      action: () => _csrfFetch("/admin/poll/reset", { method: "POST" })
        .then((r) => _toast(r.ok ? "投票已重置" : "重置失敗", r.ok))
        .catch(() => _toast("重置失敗", false)),
    },
    {
      id: "clear-history",
      label: "清空訊息歷史",
      sub: "POST /admin/history/clear · 危險",
      action: () => {
        if (!confirm("確定清空所有訊息歷史？此操作無法復原。")) return;
        return _csrfFetch("/admin/history/clear", { method: "POST" })
          .then((r) => _toast(r.ok ? "訊息歷史已清空" : "清空失敗", r.ok))
          .catch(() => _toast("清空失敗", false));
      },
    },
    {
      id: "logout",
      label: "登出",
      sub: "POST /logout",
      action: () => fetch("/logout", { method: "POST", credentials: "same-origin" })
        .finally(() => location.reload()),
    },
    {
      id: "reload-page",
      label: "重新整理頁面",
      sub: "Cmd+R",
      action: () => location.reload(),
    },
  ];

  let _root = null;
  let _input = null;
  let _list = null;
  let _scopeRow = null;
  let _scope = "all";
  let _query = "";
  let _items = [];
  let _activeIdx = 0;
  // Caches for messages (history), users (fingerprints) and themes so search
  // is client-side fuzzy filtering — endpoints don't accept `q`.
  let _msgCache = null;     // { at, records }
  let _userCache = null;    // { at, records }
  let _themeCache = null;   // { at, records, active }
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
          <input type="text" class="admin-cmdk-input" placeholder="搜尋訊息 · 用戶 · 設定 · 跳轉 · 主題 · 動作..." autocomplete="off" spellcheck="false" />
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
    } else if (item.type === "theme") {
      // Activate the theme via existing /admin/themes/active endpoint.
      _csrfFetch("/admin/themes/active", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: item.id }),
      })
        .then((r) => {
          if (r.ok) {
            _toast(`主題「${item.label}」已套用`, true);
            // Invalidate cache so the active flag refreshes next open.
            _themeCache = null;
          } else {
            _toast("套用主題失敗", false);
          }
        })
        .catch(() => _toast("套用主題失敗", false));
      close();
    } else if (item.type === "action") {
      try {
        const ret = item.action && item.action();
        if (ret && typeof ret.then === "function") ret.catch(() => {});
      } catch (_) { /* keep palette resilient */ }
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

  function _scoreThemes(q) {
    if (!_themeCache) return [];
    const records = _themeCache.records || [];
    const active = _themeCache.active || "";
    return records.map((t) => {
      const label = t.label || t.display_name || t.name || "";
      const desc = t.description || "套用此主題";
      const isActive = t.name === active;
      return {
        type: "theme",
        id: t.name,
        label: isActive ? `${label}  ✓ 使用中` : label,
        sub: desc,
        icon: "🎨",
        score: Math.max(_fuzzyScore(label, q), _fuzzyScore(t.name || "", q), _fuzzyScore(desc, q)),
      };
    }).filter((x) => x.score >= 0);
  }

  function _scoreActions(q) {
    return ACTIONS.map((a) => ({
      type: "action",
      id: a.id,
      label: a.label,
      sub: a.sub,
      icon: "⚡",
      action: a.action,
      score: Math.max(_fuzzyScore(a.label, q), _fuzzyScore(a.id, q), _fuzzyScore(a.sub, q)),
    })).filter((x) => x.score >= 0);
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
    if (_scope === "themes" || _scope === "all") {
      if (!_themeCache || now - _themeCache.at > CACHE_TTL_MS) {
        tasks.push(fetch("/admin/themes", { credentials: "same-origin" })
          .then((r) => r.ok ? r.json() : null)
          .then((d) => {
            _themeCache = {
              at: now,
              records: (d && d.themes) || [],
              active: (d && d.active) || "",
            };
          })
          .catch(() => { _themeCache = { at: now, records: [], active: "" }; }));
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
      themes:   _scoreThemes(q),
      actions:  _scoreActions(q),
    };
    const all = [].concat(
      byScope.routes,
      byScope.settings,
      byScope.messages,
      byScope.users,
      byScope.themes,
      byScope.actions,
    );
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
      themes: byScope.themes.length,
      actions: byScope.actions.length,
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
    return item.icon || ({
      route: "◇",
      setting: "⚙",
      message: "💬",
      user: "👤",
      theme: "🎨",
      action: "⚡",
    }[item.type] || "·");
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
