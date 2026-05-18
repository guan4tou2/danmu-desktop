/**
 * Admin · API Tokens page (prototype admin-integrations / developer access).
 *
 * PAGE_ID: sec-api-tokens-overview
 * Route: #/api-tokens (or #/integrations/tokens)
 *
 * Layout: two-column — token list (left) + create form (right, 380px).
 *
 * API:
 *   GET    /admin/api-tokens          → { tokens: [...] }
 *   POST   /admin/api-tokens          ← { label, scopes, expiry_days }
 *   DELETE /admin/api-tokens/<id>
 *   PATCH  /admin/api-tokens/<id>     ← { enabled: bool }
 *
 * Globals: csrfFetch, showToast, AdminUtils, DANMU_CONFIG
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-api-tokens-overview";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // ── config ────────────────────────────────────────────────────────────────

  const SCOPES = [
    { id: "read:history",  label: "讀取彈幕歷史",       badge: "green",  badgeTxt: "read:history" },
    { id: "read:stats",    label: "讀取統計資料",       badge: "cyan",   badgeTxt: "read:stats" },
    { id: "fire:danmu",    label: "發射彈幕",           badge: "amber",  badgeTxt: "fire:danmu" },
    { id: "admin:*",       label: "完整管理員權限",     badge: "red",    badgeTxt: "admin:*" },
  ];

  const EXPIRY_OPTIONS = [
    { label: "7天",      days: 7 },
    { label: "30天",     days: 30 },
    { label: "90天",     days: 90,  default: true },
    { label: "永久",     days: null },
  ];

  // ── state ─────────────────────────────────────────────────────────────────

  let _state = {
    tokens: [],
    loading: false,
    creating: false,
    newTokenRaw: null,   // set after successful create
    formError: null,
  };

  // ── helpers ───────────────────────────────────────────────────────────────

  function _fmtDate(iso) {
    if (!iso) return "—";
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return String(iso);
      const pad = (n) => String(n).padStart(2, "0");
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    } catch (_) { return String(iso); }
  }

  function _fmtDateTime(iso) {
    if (!iso) return null;
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return null;
      const pad = (n) => String(n).padStart(2, "0");
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    } catch (_) { return null; }
  }

  function _fmtNum(n) {
    const v = Number(n);
    return isNaN(v) ? "0" : v.toLocaleString();
  }

  /** Returns "active" | "expiring" | "expired" | "inactive" */
  function _tokenStatus(token) {
    if (!token) return "inactive";
    if (token.enabled === false) return "inactive";
    if (!token.expires_at) return "active"; // permanent
    try {
      const expMs = new Date(token.expires_at).getTime();
      const now = Date.now();
      if (expMs < now) return "expired";
      if (expMs - now < 7 * 24 * 3600 * 1000) return "expiring";
    } catch (_) {}
    return "active";
  }

  function _daysSinceUsed(lastUsedAt) {
    if (!lastUsedAt) return Infinity;
    try {
      return Math.floor((Date.now() - new Date(lastUsedAt).getTime()) / 86400000);
    } catch (_) { return Infinity; }
  }

  function _scopeBadgeHtml(scopes) {
    if (!scopes || !scopes.length) return '<span class="admin-at-scope-badge admin-at-scope-badge--dim">—</span>';
    return scopes.map(function (s) {
      let cls = "admin-at-scope-badge";
      if (s === "admin:*") cls += " is-red";
      else if (s.startsWith("fire:")) cls += " is-amber";
      else if (s.startsWith("read:stats")) cls += " is-cyan";
      else cls += " is-lime";
      return `<span class="${cls}">${escapeHtml(s)}</span>`;
    }).join(" ");
  }

  function _statusDotHtml(status) {
    let cls = "admin-at-dot";
    if (status === "active") cls += " is-green";
    else if (status === "expiring") cls += " is-amber";
    else if (status === "expired") cls += " is-red";
    else cls += " is-dim";
    return `<span class="${cls}" aria-hidden="true"></span>`;
  }

  // ── HTML builders ─────────────────────────────────────────────────────────

  function buildSection() {
    const scopeCheckboxes = SCOPES.map(function (sc) {
      const warnHtml = sc.id === "admin:*"
        ? `<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>⚠ 高風險：擁有全部後台能力</span>`
        : "";
      const badgeClass = `admin-at-scope-badge is-${sc.badge}`;
      return `
        <label class="admin-at-scope-row" for="adminAtScope_${sc.id.replace(/[^a-z0-9]/g, "_")}">
          <input
            type="checkbox"
            id="adminAtScope_${sc.id.replace(/[^a-z0-9]/g, "_")}"
            class="admin-at-scope-cb"
            value="${escapeHtml(sc.id)}"
          >
          <span class="${badgeClass}">${escapeHtml(sc.badgeTxt)}</span>
          <span class="admin-at-scope-label">${escapeHtml(sc.label)}</span>
          ${warnHtml}
        </label>
      `;
    }).join("");

    const expiryBtns = EXPIRY_OPTIONS.map(function (opt) {
      const checked = opt.default ? "checked" : "";
      const val = opt.days !== null ? String(opt.days) : "null";
      return `
        <label class="admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${val}" ${checked} class="sr-only">
          <span>${escapeHtml(opt.label)}</span>
        </label>
      `;
    }).join("");

    return `
      <div id="${PAGE_ID}" class="admin-at-page hud-page-stack lg:col-span-2">
        <!-- Page header -->
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">API TOKENS · DEVELOPER ACCESS · 整合 / CI / EXTENSION</div>
          <div class="admin-v2-title">API Tokens</div>
          <p class="admin-v2-note">為外部整合、CI/CD 或 extension 核發具有限定 scope 的 token。Token 僅在產生後顯示一次。</p>
        </div>

        <div class="admin-at-grid">
          <!-- ── LEFT: token list ──────────────────────────────────── -->
          <div class="admin-at-main">
            <div class="admin-v2-monolabel" style="margin-bottom:10px">已核發 API Tokens</div>

            <!-- list loading state -->
            <div class="admin-at-list-loading" data-at-list-loading hidden>載入中…</div>

            <!-- empty state -->
            <div class="admin-at-empty" data-at-empty hidden>
              <span class="admin-at-empty-icon" aria-hidden="true">⚿</span>
              <span>尚無 API Token</span>
              <span class="admin-at-empty-hint">使用右側表單核發第一個 token</span>
            </div>

            <!-- table -->
            <div class="admin-v2-table-wrap" data-at-table-wrap hidden>
              <table class="admin-v2-table admin-at-table">
                <thead>
                  <tr>
                    <th>LABEL</th>
                    <th>前綴 · 權限</th>
                    <th>最後使用</th>
                    <th>用量</th>
                    <th>建立日期</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody data-at-tbody>
                  <!-- populated by _renderList() -->
                </tbody>
              </table>
            </div>
          </div>

          <!-- ── RIGHT: create form (380px) ───────────────────────── -->
          <aside class="admin-at-rail">
            <div class="admin-at-form-card" id="adminAtFormCard">
              <div class="admin-at-form-head">
                <span class="admin-v2-monolabel">產生新 Token</span>
              </div>

              <!-- Success banner (shown after create) -->
              <div class="admin-at-success-banner" id="adminAtSuccessBanner" hidden>
                <div class="admin-at-success-title">✓ Token 已產生</div>
                <p class="admin-at-success-note">請立即複製並儲存。離開後將無法再次查看。</p>
                <div class="admin-at-token-display-row">
                  <input
                    type="text"
                    id="adminAtTokenDisplay"
                    class="admin-at-token-raw"
                    readonly
                    aria-label="產生的 Token"
                  >
                  <button type="button" class="admin-at-copy-btn" id="adminAtCopyBtn" data-at-action="copy-token">
                    📋 複製
                  </button>
                </div>
              </div>

              <!-- Create form -->
              <form id="adminAtCreateForm" class="admin-at-form" novalidate>
                <!-- Label -->
                <div class="admin-at-field">
                  <label class="admin-v2-monolabel" for="adminAtLabel">LABEL</label>
                  <input
                    type="text"
                    id="adminAtLabel"
                    name="label"
                    class="admin-at-input"
                    placeholder="e.g. OBS Widget · ci-bot · SlideSync"
                    maxlength="80"
                    required
                    autocomplete="off"
                  >
                </div>

                <!-- Scopes -->
                <div class="admin-at-field">
                  <div class="admin-v2-monolabel" style="margin-bottom:8px">SCOPES · 權限範圍</div>
                  <div class="admin-at-scopes" id="adminAtScopes">
                    ${scopeCheckboxes}
                  </div>
                </div>

                <!-- Expiry -->
                <div class="admin-at-field">
                  <div class="admin-v2-monolabel" style="margin-bottom:8px">EXPIRY · 有效期限</div>
                  <div class="admin-at-expiry-row" id="adminAtExpiryRow">
                    ${expiryBtns}
                  </div>
                </div>

                <!-- Warning note -->
                <p class="admin-at-once-note">
                  ⚠ Token 僅在產生後顯示一次，請立即複製保存。
                </p>

                <!-- Form error -->
                <div class="admin-at-form-error" id="adminAtFormError" hidden></div>

                <!-- Submit -->
                <button type="submit" class="admin-at-submit-btn" id="adminAtSubmitBtn">
                  ⚿ 產生 Token
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    `;
  }

  // ── fetch ─────────────────────────────────────────────────────────────────

  async function _fetchList() {
    _setListLoading(true);
    try {
      const r = await fetch("/admin/api-tokens", { credentials: "same-origin" });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const data = await r.json();
      _state.tokens = data.tokens || data || [];
      _renderList();
    } catch (e) {
      window.showToast && window.showToast(`載入 Token 失敗：${e.message || "未知錯誤"}`, false);
    } finally {
      _setListLoading(false);
    }
  }

  async function _createToken(payload) {
    _state.creating = true;
    _setSubmitBusy(true);
    _clearFormError();
    try {
      const r = await csrfFetch("/admin/api-tokens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!r.ok) {
        const err = await r.json().catch(() => ({}));
        throw new Error(err.error || err.message || `HTTP ${r.status}`);
      }
      const data = await r.json();
      const rawToken = data.token || data.raw_token || data.access_token || null;
      _state.newTokenRaw = rawToken;
      _showSuccessBanner(rawToken);
      _resetForm();
      await _fetchList();
      window.showToast && window.showToast("API Token 已建立", true);
    } catch (e) {
      _showFormError(`建立失敗：${e.message || "未知錯誤"}`);
      window.showToast && window.showToast(`建立 Token 失敗：${e.message || ""}`, false);
    } finally {
      _state.creating = false;
      _setSubmitBusy(false);
    }
  }

  async function _revokeToken(tokenId, label) {
    if (!confirm(`確定撤銷此 Token？此操作無法復原。\n\n${label || tokenId}`)) return;
    try {
      const r = await csrfFetch(`/admin/api-tokens/${encodeURIComponent(tokenId)}`, {
        method: "DELETE",
      });
      if (!r.ok) {
        const err = await r.json().catch(() => ({}));
        throw new Error(err.error || err.message || `HTTP ${r.status}`);
      }
      window.showToast && window.showToast("Token 已撤銷", true);
      await _fetchList();
    } catch (e) {
      window.showToast && window.showToast(`撤銷失敗：${e.message || ""}`, false);
    }
  }

  async function _toggleToken(tokenId, enabled) {
    try {
      const r = await csrfFetch(`/admin/api-tokens/${encodeURIComponent(tokenId)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled: enabled }),
      });
      if (!r.ok) {
        const err = await r.json().catch(() => ({}));
        throw new Error(err.error || err.message || `HTTP ${r.status}`);
      }
      window.showToast && window.showToast(enabled ? "Token 已啟用" : "Token 已停用", true);
      await _fetchList();
    } catch (e) {
      window.showToast && window.showToast(`操作失敗：${e.message || ""}`, false);
    }
  }

  // ── rendering ─────────────────────────────────────────────────────────────

  function _setListLoading(on) {
    const loadEl = document.querySelector("[data-at-list-loading]");
    if (loadEl) loadEl.hidden = !on;
  }

  function _setSubmitBusy(busy) {
    const btn = document.getElementById("adminAtSubmitBtn");
    if (!btn) return;
    btn.disabled = busy;
    btn.textContent = busy ? "產生中…" : "⚿ 產生 Token";
  }

  function _renderList() {
    const tokens = _state.tokens;
    const emptyEl = document.querySelector("[data-at-empty]");
    const tableWrap = document.querySelector("[data-at-table-wrap]");
    const tbody = document.querySelector("[data-at-tbody]");

    if (!emptyEl || !tableWrap || !tbody) return;

    if (!tokens || tokens.length === 0) {
      emptyEl.hidden = false;
      tableWrap.hidden = true;
      return;
    }
    emptyEl.hidden = true;
    tableWrap.hidden = false;

    tbody.innerHTML = tokens.map(function (tok) {
      const status = _tokenStatus(tok);
      const dotHtml = _statusDotHtml(status);
      const scopes = tok.scopes || tok.scope || [];
      const scopeArr = Array.isArray(scopes) ? scopes : String(scopes).split(",").map((s) => s.trim()).filter(Boolean);
      const daysSince = _daysSinceUsed(tok.last_used_at);
      const unusedWarn = daysSince >= 90 ? '<span class="admin-at-badge admin-at-badge--amber">⚠ 90天未使用</span>' : "";
      const expiredBadge = status === "expired" ? '<span class="admin-at-badge admin-at-badge--red">已過期</span>' : "";
      const expiringBadge = status === "expiring" ? '<span class="admin-at-badge admin-at-badge--amber">即將過期</span>' : "";
      const lastUsedStr = tok.last_used_at
        ? `${_fmtDateTime(tok.last_used_at) || _fmtDate(tok.last_used_at)}<br><span class="admin-at-ip">${escapeHtml(tok.last_used_ip || "")}</span>`
        : "從未使用";

      return `
        <tr class="admin-at-row" data-token-id="${escapeHtml(tok.id || tok.token_id || "")}">
          <td class="admin-at-td-label">
            ${dotHtml}
            <span class="admin-at-label-text">${escapeHtml(tok.label || tok.name || "—")}</span>
            ${unusedWarn}${expiredBadge}${expiringBadge}
          </td>
          <td class="admin-at-td-prefix">
            <span class="admin-at-prefix">${escapeHtml(tok.prefix || tok.id_prefix || "—")}</span>
            <div class="admin-at-scopes-cell">${_scopeBadgeHtml(scopeArr)}</div>
          </td>
          <td class="admin-at-td-used">${lastUsedStr}</td>
          <td class="admin-at-td-usage">${_fmtNum(tok.usage_count || tok.use_count)}</td>
          <td class="admin-at-td-created">${_fmtDate(tok.created_at)}</td>
          <td class="admin-at-td-actions">
            <button
              type="button"
              class="admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${escapeHtml(tok.id || tok.token_id || "")}"
              data-token-enabled="${tok.enabled === false ? "0" : "1"}"
              title="${tok.enabled === false ? "啟用 Token" : "停用 Token"}"
            >${tok.enabled === false ? "啟用" : "停用"}</button>
            <button
              type="button"
              class="admin-at-row-btn is-danger"
              data-at-action="revoke"
              data-token-id="${escapeHtml(tok.id || tok.token_id || "")}"
              data-token-label="${escapeHtml(tok.label || tok.name || "")}"
            >撤銷</button>
          </td>
        </tr>
      `;
    }).join("");
  }

  function _showSuccessBanner(rawToken) {
    const banner = document.getElementById("adminAtSuccessBanner");
    const display = document.getElementById("adminAtTokenDisplay");
    const form = document.getElementById("adminAtCreateForm");
    if (banner) banner.hidden = false;
    if (display && rawToken) display.value = rawToken;
    if (form) form.style.opacity = "0.5";
    // Scroll banner into view
    if (banner) banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function _hideSuccessBanner() {
    const banner = document.getElementById("adminAtSuccessBanner");
    const form = document.getElementById("adminAtCreateForm");
    if (banner) banner.hidden = true;
    if (form) form.style.opacity = "";
    _state.newTokenRaw = null;
  }

  function _resetForm() {
    const form = document.getElementById("adminAtCreateForm");
    if (form) form.reset();
    // Re-apply default expiry selection visual state
    document.querySelectorAll(".admin-at-expiry-btn").forEach(function (btn) {
      btn.classList.remove("is-active");
    });
    const defaultRadio = document.querySelector("input[name='adminAtExpiry'][value='90']");
    if (defaultRadio) {
      defaultRadio.checked = true;
      const label = defaultRadio.closest(".admin-at-expiry-btn");
      if (label) label.classList.add("is-active");
    }
    // Hide admin warning
    const adminWarn = document.getElementById("adminAtAdminWarn");
    if (adminWarn) adminWarn.hidden = true;
    _clearFormError();
  }

  function _showFormError(msg) {
    const errEl = document.getElementById("adminAtFormError");
    if (!errEl) return;
    errEl.hidden = false;
    errEl.textContent = msg;
  }

  function _clearFormError() {
    const errEl = document.getElementById("adminAtFormError");
    if (errEl) { errEl.hidden = true; errEl.textContent = ""; }
  }

  // ── form validation + submit ──────────────────────────────────────────────

  function _getFormValues() {
    const labelInput = document.getElementById("adminAtLabel");
    const label = labelInput ? labelInput.value.trim() : "";

    const scopes = [];
    document.querySelectorAll(".admin-at-scope-cb:checked").forEach(function (cb) {
      scopes.push(cb.value);
    });

    const expiryRadio = document.querySelector("input[name='adminAtExpiry']:checked");
    const expiryRaw = expiryRadio ? expiryRadio.value : "90";
    const expiry_days = expiryRaw === "null" ? null : parseInt(expiryRaw, 10);

    return { label, scopes, expiry_days };
  }

  function _validateForm(values) {
    if (!values.label) return "請填寫 Token 名稱 (LABEL)";
    if (values.label.length > 80) return "名稱不能超過 80 字";
    if (!values.scopes || values.scopes.length === 0) return "請至少選擇一個 scope";
    return null;
  }

  function _handleSubmit(e) {
    e.preventDefault();
    if (_state.creating) return;
    _clearFormError();
    const values = _getFormValues();
    const err = _validateForm(values);
    if (err) { _showFormError(err); return; }
    _createToken(values);
  }

  function _handleCopyToken() {
    const raw = _state.newTokenRaw;
    if (!raw) return;
    const copyBtn = document.getElementById("adminAtCopyBtn");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(raw).then(function () {
        if (copyBtn) {
          copyBtn.textContent = "已複製 ✓";
          setTimeout(function () { copyBtn.textContent = "📋 複製"; }, 2500);
        }
        window.showToast && window.showToast("Token 已複製到剪貼簿", true);
      }).catch(function () {
        window.showToast && window.showToast("複製失敗 · 請手動選取", false);
      });
    } else {
      // Fallback: select the input
      const display = document.getElementById("adminAtTokenDisplay");
      if (display) { display.select(); document.execCommand("copy"); }
      if (copyBtn) {
        copyBtn.textContent = "已複製 ✓";
        setTimeout(function () { copyBtn.textContent = "📋 複製"; }, 2500);
      }
    }
  }

  // ── event wiring ──────────────────────────────────────────────────────────

  function _wireEvents() {
    const page = document.getElementById(PAGE_ID);
    if (!page) return;

    // Delegated click handler
    page.addEventListener("click", function (e) {
      // Row action buttons (revoke / toggle)
      const rowBtn = e.target.closest("[data-at-action]");
      if (rowBtn) {
        const action = rowBtn.dataset.atAction;
        if (action === "revoke") {
          const id = rowBtn.dataset.tokenId;
          const label = rowBtn.dataset.tokenLabel;
          _revokeToken(id, label);
        } else if (action === "toggle") {
          const id = rowBtn.dataset.tokenId;
          const nowEnabled = rowBtn.dataset.tokenEnabled === "1";
          _toggleToken(id, !nowEnabled);
        } else if (action === "copy-token") {
          _handleCopyToken();
        }
        return;
      }

      // Expiry radio buttons — visual active state
      const expiryLabel = e.target.closest(".admin-at-expiry-btn");
      if (expiryLabel) {
        document.querySelectorAll(".admin-at-expiry-btn").forEach(function (l) {
          l.classList.remove("is-active");
        });
        expiryLabel.classList.add("is-active");
      }
    });

    // admin:* checkbox: show/hide high-risk warning
    const adminCb = document.getElementById("adminAtScope_admin__");
    if (adminCb) {
      adminCb.addEventListener("change", function () {
        const warn = document.getElementById("adminAtAdminWarn");
        if (warn) warn.hidden = !adminCb.checked;
      });
    }

    // Form submit
    const form = document.getElementById("adminAtCreateForm");
    if (form) form.addEventListener("submit", _handleSubmit);

    // Set initial active expiry button
    const defaultRadio = document.querySelector("input[name='adminAtExpiry'][value='90']");
    if (defaultRadio) {
      const label = defaultRadio.closest(".admin-at-expiry-btn");
      if (label) label.classList.add("is-active");
    }
  }

  // ── init ──────────────────────────────────────────────────────────────────

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());
    _wireEvents();
    _fetchList();
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.DANMU_CONFIG || !window.DANMU_CONFIG.session || !window.DANMU_CONFIG.session.logged_in) return;
    const observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true, subtree: true,
    });
    if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
      init();
    }
  });
})();
