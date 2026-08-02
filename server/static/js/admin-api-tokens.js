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

  // D-4：label 改存 labelKey，buildSection() 組 HTML 時才 ServerI18n.t()
  // （模組 parse 時 ServerI18n 尚未 init）。id / badgeTxt 是 API 契約，不譯。
  const SCOPES = [
    { id: "read:history",  labelKey: "apiTokensScopeReadHistory", badge: "green",  badgeTxt: "read:history" },
    { id: "read:stats",    labelKey: "apiTokensScopeReadStats",   badge: "cyan",   badgeTxt: "read:stats" },
    { id: "fire:danmu",    labelKey: "apiTokensScopeFireDanmu",   badge: "amber",  badgeTxt: "fire:danmu" },
    { id: "admin:*",       labelKey: "apiTokensScopeAdminAll",    badge: "red",    badgeTxt: "admin:*" },
  ];

  const EXPIRY_OPTIONS = [
    { labelKey: "apiTokensExpiry7d",        days: 7 },
    { labelKey: "apiTokensExpiry30d",       days: 30 },
    { labelKey: "apiTokensExpiry90d",       days: 90,  default: true },
    { labelKey: "apiTokensExpiryPermanent", days: null },
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
    if (!scopes || !scopes.length) return '<span class="admin-ui-pill admin-at-scope-badge is-muted">—</span>';
    return scopes.map(function (s) {
      let cls = "admin-ui-pill admin-at-scope-badge";
      if (s === "admin:*") cls += " is-danger";
      else if (s.startsWith("fire:")) cls += " is-warn";
      else if (s.startsWith("read:stats")) cls += " is-cyan";
      else cls += " is-success";
      return `<span class="${cls}">${escapeHtml(s)}</span>`;
    }).join(" ");
  }

  function _statusDotHtml(status) {
    let cls = "admin-ui-dot admin-at-dot";
    if (status === "active") cls += " is-success";
    else if (status === "expiring") cls += " is-warn";
    else if (status === "expired") cls += " is-danger";
    else cls += " is-muted";
    return `<span class="${cls}" aria-hidden="true"></span>`;
  }

  // ── HTML builders ─────────────────────────────────────────────────────────

  function buildSection() {
    const scopeCheckboxes = SCOPES.map(function (sc) {
      const warnHtml = sc.id === "admin:*"
        ? `<span class="admin-at-scope-warn" id="adminAtAdminWarn" hidden>${ServerI18n.t("apiTokensAdminScopeWarn")}</span>`
        : "";
      const badgeTone = sc.badge === "red" ? "danger"
        : sc.badge === "amber" ? "warn"
          : sc.badge === "green" ? "success"
            : sc.badge;
      const badgeClass = `admin-ui-pill admin-at-scope-badge is-${badgeTone}`;
      return `
        <label class="admin-ui-option-row admin-at-scope-row" for="adminAtScope_${sc.id.replace(/[^a-z0-9]/g, "_")}">
          <input
            type="checkbox"
            id="adminAtScope_${sc.id.replace(/[^a-z0-9]/g, "_")}"
            class="admin-ui-checkbox admin-at-scope-cb"
            value="${escapeHtml(sc.id)}"
          >
          <span class="${badgeClass}">${escapeHtml(sc.badgeTxt)}</span>
          <span class="admin-at-scope-label">${escapeHtml(ServerI18n.t(sc.labelKey))}</span>
          ${warnHtml}
        </label>
      `;
    }).join("");

    const expiryBtns = EXPIRY_OPTIONS.map(function (opt) {
      const checked = opt.default ? "checked" : "";
      const val = opt.days !== null ? String(opt.days) : "null";
      return `
        <label class="admin-ui-choice admin-at-expiry-btn">
          <input type="radio" name="adminAtExpiry" value="${val}" ${checked} class="sr-only">
          <span>${escapeHtml(ServerI18n.t(opt.labelKey))}</span>
        </label>
      `;
    }).join("");

    return `
      <div id="${PAGE_ID}" class="admin-at-page hud-page-stack lg:col-span-2" data-tpl="B">
        <!-- Page header -->
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">API TOKENS · DEVELOPER ACCESS · ${ServerI18n.t("apiTokensKicker")}</div>
          <div class="admin-ui-page-title">API Tokens</div>
          <p class="admin-ui-page-note">${ServerI18n.t("apiTokensPageNote")}</p>
        </div>

        <div class="admin-at-grid">
          <!-- ── LEFT: token list ──────────────────────────────────── -->
          <div class="admin-at-main">
            <div class="admin-ui-monolabel" style="margin-bottom:10px">${ServerI18n.t("apiTokensIssuedLabel")}</div>

            <!-- list loading state -->
            <div class="admin-at-list-loading" data-at-list-loading hidden>${ServerI18n.t("apiTokensListLoading")}</div>

            <!-- empty state（內容由 AdminEmpty 於首次顯示時填充） -->
            <div data-at-empty hidden></div>

            <!-- table -->
            <div class="admin-ui-table-wrap" data-at-table-wrap hidden>
              <table class="admin-ui-table admin-at-table">
                <thead>
                  <tr>
                    <th>LABEL</th>
                    <th>${ServerI18n.t("apiTokensThPrefixScope")}</th>
                    <th>${ServerI18n.t("apiTokensThLastUsed")}</th>
                    <th>${ServerI18n.t("apiTokensThUsage")}</th>
                    <th>${ServerI18n.t("apiTokensThCreated")}</th>
                    <th>${ServerI18n.t("apiTokensThActions")}</th>
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
                <span class="admin-ui-monolabel">${ServerI18n.t("apiTokensGenerateNewLabel")}</span>
              </div>

              <!-- Success banner (shown after create) -->
              <div class="admin-at-success-banner" id="adminAtSuccessBanner" hidden>
                <div class="admin-at-success-title">${ServerI18n.t("apiTokensSuccessTitle")}</div>
                <p class="admin-at-success-note">${ServerI18n.t("apiTokensSuccessNote")}</p>
                <div class="admin-at-token-display-row">
                  <input
                    type="text"
                    id="adminAtTokenDisplay"
                    class="admin-ui-input admin-at-token-raw"
                    readonly
                    aria-label="${ServerI18n.t("apiTokensRawTokenAriaLabel")}"
                  >
                  <button type="button" class="admin-ui-action admin-at-copy-btn" id="adminAtCopyBtn" data-at-action="copy-token">
                    ${ServerI18n.t("apiTokensCopyBtn")}
                  </button>
                </div>
              </div>

              <!-- Create form -->
              <form id="adminAtCreateForm" class="admin-at-form" novalidate>
                <!-- Label -->
                <div class="admin-at-field">
                  <label class="admin-ui-monolabel" for="adminAtLabel">LABEL</label>
                  <input
                    type="text"
                    id="adminAtLabel"
                    name="label"
                    class="admin-ui-input admin-at-input"
                    placeholder="e.g. OBS Widget · ci-bot · SlideSync"
                    maxlength="80"
                    required
                    autocomplete="off"
                  >
                </div>

                <!-- Scopes -->
                <div class="admin-at-field">
                  <div class="admin-ui-monolabel" style="margin-bottom:8px">SCOPES · ${ServerI18n.t("apiTokensScopesLabel")}</div>
                  <div class="admin-at-scopes" id="adminAtScopes">
                    ${scopeCheckboxes}
                  </div>
                </div>

                <!-- Expiry -->
                <div class="admin-at-field">
                  <div class="admin-ui-monolabel" style="margin-bottom:8px">EXPIRY · ${ServerI18n.t("apiTokensExpiryLabel")}</div>
                  <div class="admin-at-expiry-row" id="adminAtExpiryRow">
                    ${expiryBtns}
                  </div>
                </div>

                <!-- Warning note -->
                <p class="admin-ui-notice is-warn admin-at-once-note">
                  ${ServerI18n.t("apiTokensOnceWarnNote")}
                </p>

                <!-- Form error -->
                <div class="admin-ui-notice is-danger admin-at-form-error" id="adminAtFormError" hidden></div>

                <!-- Submit -->
                <button type="submit" class="admin-ui-action is-primary is-block admin-at-submit-btn" id="adminAtSubmitBtn">
                  ${ServerI18n.t("apiTokensGenerateBtn")}
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
      window.showToast && window.showToast(ServerI18n.t("apiTokensToastLoadFailed", { msg: e.message || ServerI18n.t("apiTokensUnknownError") }), false);
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
      window.showToast && window.showToast(ServerI18n.t("apiTokensToastCreated"), true);
    } catch (e) {
      _showFormError(ServerI18n.t("apiTokensFormErrCreateFailed", { msg: e.message || ServerI18n.t("apiTokensUnknownError") }));
      window.showToast && window.showToast(ServerI18n.t("apiTokensToastCreateFailed", { msg: e.message || "" }), false);
    } finally {
      _state.creating = false;
      _setSubmitBusy(false);
    }
  }

  async function _revokeToken(tokenId, label) {
    const ok = await window.HudConfirm?.open({
      icon: "⊘",
      title: ServerI18n.t("apiTokensRevokeModalTitle"),
      subtitle: "REVOKE · THIS ACTION CANNOT BE UNDONE",
      severity: "danger",
      body:
        `<div style="line-height:1.7">${ServerI18n.t("apiTokensRevokeBody")}</div>` +
        `<div style="margin-top:10px;font-family:var(--font-mono);font-size:12px;` +
        `color:var(--color-text-muted)">${escapeHtml(label || tokenId)}</div>`,
      confirmLabel: ServerI18n.t("apiTokensRevoke"),
    });
    if (!ok) return;
    try {
      const r = await csrfFetch(`/admin/api-tokens/${encodeURIComponent(tokenId)}`, {
        method: "DELETE",
      });
      if (!r.ok) {
        const err = await r.json().catch(() => ({}));
        throw new Error(err.error || err.message || `HTTP ${r.status}`);
      }
      window.showToast && window.showToast(ServerI18n.t("apiTokensToastRevoked"), true);
      await _fetchList();
    } catch (e) {
      window.showToast && window.showToast(ServerI18n.t("apiTokensToastRevokeFailed", { msg: e.message || "" }), false);
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
      window.showToast && window.showToast(enabled ? ServerI18n.t("apiTokensToastEnabled") : ServerI18n.t("apiTokensToastDisabled"), true);
      await _fetchList();
    } catch (e) {
      window.showToast && window.showToast(ServerI18n.t("apiTokensToastActionFailed", { msg: e.message || "" }), false);
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
    btn.textContent = busy ? ServerI18n.t("apiTokensGenerating") : ServerI18n.t("apiTokensGenerateBtn");
  }

  function _renderList() {
    const tokens = _state.tokens;
    const emptyEl = document.querySelector("[data-at-empty]");
    const tableWrap = document.querySelector("[data-at-table-wrap]");
    const tbody = document.querySelector("[data-at-tbody]");

    if (!emptyEl || !tableWrap || !tbody) return;

    if (!tokens || tokens.length === 0) {
      // D-6 批次二 (2026-07-29): 首次顯示時以共用 AdminEmpty 填充（wrapper
      // 保留 hidden 切換機制）。
      if (!emptyEl.firstElementChild && window.AdminEmpty) {
        const card = window.AdminEmpty.renderCustom({
          icon: "⚿",
          title: ServerI18n.t("apiTokensEmptyTitle"),
          desc: ServerI18n.t("apiTokensEmptyDesc"),
        });
        card.dataset.emptyKind = "api-tokens";
        emptyEl.appendChild(card);
      }
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
      const unusedWarn = daysSince >= 90 ? `<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensUnusedWarn")}</span>` : "";
      const expiredBadge = status === "expired" ? `<span class="admin-ui-pill admin-at-badge is-danger">${ServerI18n.t("apiTokensExpiredBadge")}</span>` : "";
      const expiringBadge = status === "expiring" ? `<span class="admin-ui-pill admin-at-badge is-warn">${ServerI18n.t("apiTokensExpiringBadge")}</span>` : "";
      const lastUsedStr = tok.last_used_at
        ? `${_fmtDateTime(tok.last_used_at) || _fmtDate(tok.last_used_at)}<br><span class="admin-at-ip">${escapeHtml(tok.last_used_ip || "")}</span>`
        : ServerI18n.t("apiTokensNeverUsed");

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
              class="admin-ui-action admin-at-row-btn"
              data-at-action="toggle"
              data-token-id="${escapeHtml(tok.id || tok.token_id || "")}"
              data-token-enabled="${tok.enabled === false ? "0" : "1"}"
              title="${tok.enabled === false ? ServerI18n.t("apiTokensEnableTitle") : ServerI18n.t("apiTokensDisableTitle")}"
            >${tok.enabled === false ? ServerI18n.t("apiTokensEnableLabel") : ServerI18n.t("apiTokensDisableLabel")}</button>
            <button
              type="button"
              class="admin-ui-action is-danger admin-at-row-btn"
              data-at-action="revoke"
              data-token-id="${escapeHtml(tok.id || tok.token_id || "")}"
              data-token-label="${escapeHtml(tok.label || tok.name || "")}"
            >${ServerI18n.t("apiTokensRevoke")}</button>
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
    if (!values.label) return ServerI18n.t("apiTokensErrNeedLabel");
    if (values.label.length > 80) return ServerI18n.t("apiTokensErrLabelTooLong");
    if (!values.scopes || values.scopes.length === 0) return ServerI18n.t("apiTokensErrNeedScope");
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
          copyBtn.textContent = ServerI18n.t("apiTokensCopiedLabel");
          setTimeout(function () { copyBtn.textContent = ServerI18n.t("apiTokensCopyBtn"); }, 2500);
        }
        window.showToast && window.showToast(ServerI18n.t("apiTokensToastCopied"), true);
      }).catch(function () {
        window.showToast && window.showToast(ServerI18n.t("apiTokensToastCopyFailed"), false);
      });
    } else {
      // Fallback: select the input
      const display = document.getElementById("adminAtTokenDisplay");
      if (display) { display.select(); document.execCommand("copy"); }
      if (copyBtn) {
        copyBtn.textContent = ServerI18n.t("apiTokensCopiedLabel");
        setTimeout(function () { copyBtn.textContent = ServerI18n.t("apiTokensCopyBtn"); }, 2500);
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
