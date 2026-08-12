/**
 * Admin Security (P1-9) — dedicated Soft Holo HUD page.
 *
 * Covers change password + WS token + session/audit skeletons.
 * As of 2026-04-28 (Group D-3 R6) this module fully owns the security
 * route — the legacy sec-security / sec-ws-auth <details> cards in
 * admin.js were deleted along with their inline handlers (changePasswordBtn,
 * wsAuth* IIFE, password-toggle). Form submit + token rotate / save / copy
 * all live here.
 *
 * Endpoints used (existing, no backend changes):
 *   POST /admin/change_password       { current_password, new_password, confirm_password }
 *   GET  /admin/ws-auth               → { require_token, token }
 *   POST /admin/ws-auth               { require_token, token }
 *   POST /admin/ws-auth/rotate        → { require_token, token }
 *
 * Section id is intentionally NOT prefixed `sec-` so admin.js router's
 * [id^="sec-"] visibility sweep leaves it alone — this module controls its
 * own show/hide via the shell's `data-active-route` attr.
 */
(function () {
  "use strict";

  const PAGE_ID = "admin-security-v2-page";
  var _escHtml = window.AdminUtils.escapeHtml;

  function pageTemplate() {
    // v5 Batch 12-3 (2026-05-19): 2-col SecCard grid with tinted left
    // border per batch12-system.jsx SecurityPage.
    return `
        <div id="${PAGE_ID}" class="admin-security-page hud-page-stack lg:col-span-2">
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">SECURITY · AUTH · ACCESS · TOKENS</div>
          <h2 class="admin-ui-page-title">${ServerI18n.t("security2PageTitle")}</h2>
          <p class="admin-ui-page-note">
            ${ServerI18n.t("security2PageNote")}
          </p>
        </div>

        <div class="admin-security-grid">

          <!-- ① Admin password — change password form -->
          <div class="admin-sec-card is-lime">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">${ServerI18n.t("security2CardPasswordTitle")}</span>
              <span class="admin-sec-card__en">ADMIN PASSWORD</span>
            </div>
            <div class="admin-sec-card__body">
              <form id="sec2-pw-form" class="admin-security-form" autocomplete="off">
                <label class="admin-security-field">
                  <span class="admin-ui-monolabel">CURRENT</span>
                  <input id="sec2-pw-current" type="password" required autocomplete="current-password" class="admin-ui-input" />
                </label>
                <label class="admin-security-field">
                  <span class="admin-ui-monolabel">NEW · ≥8</span>
                  <input id="sec2-pw-new" type="password" required minlength="8" autocomplete="new-password" class="admin-ui-input" />
                  <div class="admin-security-strength">
                    <div class="admin-security-strength-bar"><span id="sec2-pw-meter" style="width:0%"></span></div>
                    <span id="sec2-pw-label" class="admin-ui-monolabel">—</span>
                  </div>
                </label>
                <label class="admin-security-field">
                  <span class="admin-ui-monolabel">CONFIRM</span>
                  <input id="sec2-pw-confirm" type="password" required autocomplete="new-password" class="admin-ui-input" />
                </label>
                <button type="submit" class="admin-ui-action is-primary admin-sec-action">${ServerI18n.t("security2SubmitChangePassword")}</button>
              </form>
            </div>
          </div>

          <!-- ② Admin session -->
          <div class="admin-sec-card is-cyan">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">${ServerI18n.t("security2CardSessionTitle")}</span>
              <span class="admin-sec-card__en">ADMIN SESSION</span>
            </div>
            <div class="admin-sec-card__body">
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-lime"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">${ServerI18n.t("security2CurrentSessionRowLabel")}</div>
                  <div class="admin-sec-row__value" id="sec2-session-self-line">—</div>
                </div>
              </div>
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-lime"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">Token TTL</div>
                  <div class="admin-sec-row__value">${ServerI18n.t("security2TokenTtlValue")}</div>
                </div>
              </div>
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-lime"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">${ServerI18n.t("security2OtherDevicesLabel")}</div>
                  <div class="admin-sec-row__value">${ServerI18n.t("security2OtherDevicesValue")}</div>
                </div>
                <span class="admin-sec-row__hint">${ServerI18n.t("security2PendingBackendHint")}</span>
              </div>
            </div>
          </div>

          <!-- ③ WS token — overlay viewer auth -->
          <div class="admin-sec-card is-cyan">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">${ServerI18n.t("security2CardWsTokenTitle")}</span>
              <span class="admin-sec-card__en">WS TOKEN · VIEWER AUTH</span>
              <span class="admin-sec-card__spacer"></span>
              <span id="sec2-wsa-status" class="admin-ui-chip admin-sec-status-chip">${ServerI18n.t("security2Loading")}</span>
            </div>
            <div class="admin-sec-card__body">
              <label class="admin-security-toggle">
                <input id="sec2-wsa-toggle" type="checkbox" />
                <span>${ServerI18n.t("security2WsTokenToggleLabel")}</span>
              </label>
              <div class="admin-security-field">
                <span class="admin-ui-monolabel">${ServerI18n.t("security2TokenLengthLabel")}</span>
                <div class="admin-security-tokenrow">
                  <input id="sec2-wsa-token" type="password" class="admin-ui-input" placeholder="${ServerI18n.t("security2NotConfigured")}" autocomplete="off" spellcheck="false" />
                  <button type="button" id="sec2-wsa-reveal" class="admin-ui-action admin-sec-token-action">👁</button>
                  <button type="button" id="sec2-wsa-copy" class="admin-ui-action admin-sec-token-action">${ServerI18n.t("security2CopyButton")}</button>
                  <button type="button" id="sec2-wsa-rotate" class="admin-ui-action is-warn admin-sec-token-action">${ServerI18n.t("security2RegenerateButton")}</button>
                </div>
              </div>
              <div class="admin-security-tokenmeta">
                <span class="admin-ui-monolabel">LAST ROTATION</span>
                <span id="sec2-wsa-lastrot" class="admin-security-timestamp">—</span>
                <button type="button" id="sec2-wsa-save" class="admin-ui-action is-primary admin-sec-action admin-sec-action--end">${ServerI18n.t("security2SaveButton")}</button>
              </div>
            </div>
          </div>

          <!-- ④ IP allowlist -->
          <div class="admin-sec-card is-amber">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">${ServerI18n.t("security2CardIpTitle")}</span>
              <span class="admin-sec-card__en">IP ALLOWLIST</span>
              <span class="admin-sec-card__spacer"></span>
              <span id="sec2-ip-status-chip" class="admin-ui-chip admin-sec-status-chip">${ServerI18n.t("security2Loading")}</span>
            </div>
            <div class="admin-sec-card__body">
              <div class="admin-sec-row">
                <span id="sec2-ip-dot" class="admin-sec-row__dot is-amber"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">${ServerI18n.t("security2StatusLabel")}</div>
                  <div id="sec2-ip-status-line" class="admin-sec-row__value">—</div>
                </div>
              </div>
              <label class="admin-security-toggle">
                <input id="sec2-ip-toggle" type="checkbox" />
                <span>${ServerI18n.t("security2IpToggleLabel")}</span>
              </label>
              <label class="admin-security-field">
                <span class="admin-ui-monolabel">${ServerI18n.t("security2IpAllowlistLabel")}</span>
                <textarea id="sec2-ip-entries" class="admin-ui-input" rows="4" spellcheck="false" placeholder="127.0.0.1/32"></textarea>
              </label>
              <div class="admin-security-tokenmeta">
                <span class="admin-ui-monolabel">CURRENT IP</span>
                <span id="sec2-ip-current" class="admin-security-timestamp">—</span>
                <button type="button" id="sec2-ip-save" class="admin-ui-action is-primary admin-sec-action admin-sec-action--end">${ServerI18n.t("security2SaveButton")}</button>
              </div>
            </div>
          </div>

          <!-- ⑤ CORS — informational -->
          <div class="admin-sec-card">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">${ServerI18n.t("security2CardCorsTitle")}</span>
              <span class="admin-sec-card__en">CROSS-ORIGIN</span>
            </div>
            <div class="admin-sec-card__body">
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-amber"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">${ServerI18n.t("security2CorsOriginsRowLabel")}</div>
                  <div id="sec2-cors-origins-line" class="admin-sec-row__value">—</div>
                </div>
              </div>
              <div class="admin-sec-row">
                <span id="sec2-cors-cred-dot" class="admin-sec-row__dot is-lime"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">Credentials</div>
                  <div id="sec2-cors-credentials-line" class="admin-sec-row__value">—</div>
                </div>
              </div>
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-lime"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">Methods</div>
                  <div id="sec2-cors-methods-line" class="admin-sec-row__value">—</div>
                </div>
              </div>
              <label class="admin-security-field">
                <span class="admin-ui-monolabel">${ServerI18n.t("security2CorsOriginsLabel")}</span>
                <textarea id="sec2-cors-origins" class="admin-ui-input" rows="3" spellcheck="false" placeholder="*"></textarea>
              </label>
              <label class="admin-security-toggle">
                <input id="sec2-cors-credentials" type="checkbox" />
                <span>${ServerI18n.t("security2CorsCredentialsToggleLabel")}</span>
              </label>
              <label class="admin-security-field">
                <span class="admin-ui-monolabel">METHODS</span>
                <input id="sec2-cors-methods" type="text" class="admin-ui-input" spellcheck="false" placeholder="GET, POST, DELETE, PATCH, OPTIONS" />
              </label>
              <div class="admin-security-tokenmeta">
                <button type="button" id="sec2-cors-save" class="admin-ui-action is-primary admin-sec-action admin-sec-action--end">${ServerI18n.t("security2SaveCorsButton")}</button>
              </div>
            </div>
          </div>

          <!-- ⑥ HTTPS / TLS -->
          <div class="admin-sec-card">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">HTTPS / TLS</span>
              <span class="admin-sec-card__en">TRANSPORT SECURITY</span>
            </div>
            <div class="admin-sec-card__body">
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot" id="sec2-tls-dot"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">${ServerI18n.t("security2StatusLabel")}</div>
                  <div class="admin-sec-row__value" id="sec2-tls-status">—</div>
                </div>
              </div>
              <p class="admin-sec-card__note">
                ${ServerI18n.t("security2TlsRecommendationNote")}
              </p>
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-amber"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">HSTS Header</div>
                  <div class="admin-sec-row__value" id="sec2-hsts-status">—</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ⑦ Audit log link (span-2) -->
          <div class="admin-sec-card is-span2">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">${ServerI18n.t("security2CardAuditTitle")}</span>
              <span class="admin-sec-card__en">AUDIT LOG</span>
              <span class="admin-sec-card__spacer"></span>
              <a href="#/audit" class="admin-ui-action admin-sec-card__link">${ServerI18n.t("security2ViewFullLogLink")}</a>
            </div>
            <div class="admin-sec-card__body">
              <p class="admin-sec-card__note">
                ${ServerI18n.t("security2AuditLogNote")}
              </p>
            </div>
          </div>

          <!-- ⑧ DANGER ZONE (span-2 row) -->
          <div class="admin-sec-card is-crimson is-span2">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">${ServerI18n.t("security2CardDangerTitle")}</span>
              <span class="admin-sec-card__en">DANGER ZONE</span>
            </div>
            <div class="admin-sec-card__body">
              <div class="admin-sec-dangerzone">
                <button type="button" class="admin-ui-action is-danger admin-sec-danger" data-sec-danger="revoke-tokens">
                  <span class="admin-sec-danger__title">${ServerI18n.t("security2RevokeApiTokensTitle")}</span>
                  <span class="admin-sec-danger__desc">${ServerI18n.t("security2RevokeApiTokensDesc")}</span>
                </button>
                <button type="button" class="admin-ui-action is-danger admin-sec-danger" data-sec-danger="revoke-firetoken">
                  <span class="admin-sec-danger__title">${ServerI18n.t("security2RevokeFireTokenTitle")}</span>
                  <span class="admin-sec-danger__desc">${ServerI18n.t("security2RevokeFireTokenDesc")}</span>
                </button>
                <button type="button" class="admin-ui-action is-warn admin-sec-danger" data-sec-danger="reset-ws">
                  <span class="admin-sec-danger__title">${ServerI18n.t("security2ResetWsTokenTitle")}</span>
                  <span class="admin-sec-danger__desc">${ServerI18n.t("security2ResetWsTokenDesc")}</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>`;
  }

  // Rough zxcvbn-less strength: length + class variety. 0–4.
  function scorePassword(pw) {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (pw.length >= 12) score++;
    const classes =
      (/[a-z]/.test(pw) ? 1 : 0) +
      (/[A-Z]/.test(pw) ? 1 : 0) +
      (/\d/.test(pw) ? 1 : 0) +
      (/[^\w]/.test(pw) ? 1 : 0);
    if (classes >= 2) score++;
    if (classes >= 3) score++;
    return Math.min(4, score);
  }

  function renderStrength(pw) {
    const meter = document.getElementById("sec2-pw-meter");
    const label = document.getElementById("sec2-pw-label");
    if (!meter || !label) return;
    const score = scorePassword(pw);
    const widths = [0, 25, 50, 75, 100];
    const cls = ["", "is-bad", "is-warn", "is-warn", "is-good"];
    const txt = [
      "—",
      ServerI18n.t("security2PwWeak"),
      ServerI18n.t("security2PwFair"),
      ServerI18n.t("security2PwGood"),
      ServerI18n.t("security2PwStrong"),
    ];
    meter.style.width = widths[score] + "%";
    meter.className = cls[score];
    label.textContent = txt[score];
  }

  async function submitPasswordChange(e) {
    e.preventDefault();
    const cur = document.getElementById("sec2-pw-current").value;
    const nw = document.getElementById("sec2-pw-new").value;
    const cf = document.getElementById("sec2-pw-confirm").value;
    if (!cur || !nw || !cf) {
      window.showToast && showToast(ServerI18n.t("security2ToastFillAllFields"), false);
      return;
    }
    if (nw.length < 8) {
      window.showToast && showToast(ServerI18n.t("security2ToastPasswordMinLength"), false);
      return;
    }
    if (nw !== cf) {
      window.showToast && showToast(ServerI18n.t("security2ToastPasswordMismatch"), false);
      return;
    }
    try {
      const res = await window.csrfFetch("/admin/change_password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ current_password: cur, new_password: nw, confirm_password: cf }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        window.showToast && showToast(ServerI18n.t("security2ToastPasswordChanged"), true);
        document.getElementById("sec2-pw-form").reset();
        renderStrength("");
      } else {
        window.showToast && showToast(data.error || ServerI18n.t("security2ToastChangeFailed"), false);
      }
    } catch (err) {
      console.error("Password change error:", err);
      window.showToast && showToast(ServerI18n.t("security2ToastNetworkError"), false);
    }
  }

  async function loadWsAuth() {
    const statusEl = document.getElementById("sec2-wsa-status");
    try {
      const res = await fetch("/admin/ws-auth", { credentials: "same-origin" });
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      document.getElementById("sec2-wsa-toggle").checked = !!data.require_token;
      document.getElementById("sec2-wsa-token").value = data.token || "";
      statusEl.textContent = data.require_token ? ServerI18n.t("security2StatusEnabled") : ServerI18n.t("security2StatusDisabled");
      statusEl.className = "admin-ui-chip admin-sec-status-chip " + (data.require_token ? "is-active" : "");
      // Last-rotation persisted client-side (no backend field yet)
      const lr = localStorage.getItem("ws-auth-last-rotation");
      document.getElementById("sec2-wsa-lastrot").textContent = lr
        ? new Date(parseInt(lr, 10)).toLocaleString()
        : "—";
    } catch (e) {
      statusEl.textContent = ServerI18n.t("security2LoadFailed");
      statusEl.className = "admin-ui-chip is-danger admin-sec-status-chip";
    }
  }

  function _listFromLines(value) {
    return String(value || "")
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean);
  }

  function _listFromCsv(value) {
    return String(value || "")
      .split(",")
      .map((s) => s.trim().toUpperCase())
      .filter(Boolean);
  }

  function _setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value == null || value === "" ? "—" : String(value);
  }

  async function loadSecuritySettings() {
    try {
      const res = await fetch("/admin/security/settings", { credentials: "same-origin" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || res.status);

      const ip = data.ip_allowlist || {};
      const cors = data.cors || {};
      const tls = data.tls || {};

      const ipEnabled = !!ip.enabled;
      const ipEntries = Array.isArray(ip.entries) ? ip.entries : [];
      const ipDot = document.getElementById("sec2-ip-dot");
      const ipChip = document.getElementById("sec2-ip-status-chip");
      const ipToggle = document.getElementById("sec2-ip-toggle");
      const ipTextarea = document.getElementById("sec2-ip-entries");
      if (ipDot) {
        ipDot.classList.toggle("is-lime", ipEnabled);
        ipDot.classList.toggle("is-amber", !ipEnabled);
      }
      if (ipChip) {
        ipChip.textContent = ipEnabled ? ServerI18n.t("security2IpRestricted") : ServerI18n.t("security2StatusDisabled");
        ipChip.className = "admin-ui-chip admin-sec-status-chip " + (ipEnabled ? "is-active" : "is-warn");
      }
      if (ipToggle) ipToggle.checked = ipEnabled;
      if (ipTextarea) ipTextarea.value = ipEntries.join("\n");
      _setText("sec2-ip-current", ip.current_ip || "—");
      _setText(
        "sec2-ip-status-line",
        ipEnabled
          ? ServerI18n.t("security2IpStatusEnabled", { n: ipEntries.length })
          : ServerI18n.t("security2IpStatusDisabled")
      );

      const origins = Array.isArray(cors.origins) ? cors.origins : ["*"];
      const methods = Array.isArray(cors.methods) ? cors.methods : [];
      const corsOrigins = document.getElementById("sec2-cors-origins");
      const corsCred = document.getElementById("sec2-cors-credentials");
      const corsMethods = document.getElementById("sec2-cors-methods");
      const corsCredDot = document.getElementById("sec2-cors-cred-dot");
      if (corsOrigins) corsOrigins.value = origins.join("\n");
      if (corsCred) corsCred.checked = !!cors.supports_credentials;
      if (corsMethods) corsMethods.value = methods.join(", ");
      if (corsCredDot) {
        corsCredDot.classList.toggle("is-lime", !cors.supports_credentials);
        corsCredDot.classList.toggle("is-amber", !!cors.supports_credentials);
      }
      _setText("sec2-cors-origins-line", origins.join(", "));
      _setText("sec2-cors-credentials-line", cors.supports_credentials ? "true" : "false");
      _setText("sec2-cors-methods-line", methods.join(", "));

      const hsts = tls.hsts_enabled
        ? ServerI18n.t("security2HstsConfigured", { header: tls.hsts_header || "Strict-Transport-Security" })
        : ServerI18n.t("security2NotConfigured");
      _setText("sec2-hsts-status", hsts);
    } catch (err) {
      console.error("Security settings load error:", err);
      const chip = document.getElementById("sec2-ip-status-chip");
      if (chip) {
        chip.textContent = ServerI18n.t("security2LoadFailed");
        chip.className = "admin-ui-chip is-danger admin-sec-status-chip";
      }
    }
  }

  async function saveSecuritySettings(section) {
    const payload = {};
    if (section === "ip") {
      payload.ip_allowlist = {
        enabled: !!document.getElementById("sec2-ip-toggle")?.checked,
        entries: _listFromLines(document.getElementById("sec2-ip-entries")?.value || ""),
      };
    } else if (section === "cors") {
      const origins = _listFromLines(document.getElementById("sec2-cors-origins")?.value || "");
      payload.cors = {
        origins: origins.length ? origins : ["*"],
        supports_credentials: !!document.getElementById("sec2-cors-credentials")?.checked,
        methods: _listFromCsv(document.getElementById("sec2-cors-methods")?.value || ""),
      };
    }

    try {
      const res = await window.csrfFetch("/admin/security/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        window.showToast && showToast(data.error || ServerI18n.t("security2ToastSaveFailed"), false);
        return;
      }
      window.showToast && showToast(ServerI18n.t("security2ToastSecuritySettingsSaved"), true);
      await loadSecuritySettings();
    } catch (err) {
      console.error("Security settings save error:", err);
      window.showToast && showToast(ServerI18n.t("security2ToastNetworkError"), false);
    }
  }

  async function saveWsAuth() {
    const require_token = document.getElementById("sec2-wsa-toggle").checked;
    const token = document.getElementById("sec2-wsa-token").value.trim();
    if (require_token && !token) {
      window.showToast && showToast(ServerI18n.t("security2ToastTokenRequiredWhenEnabled"), false);
      return;
    }
    try {
      const res = await window.csrfFetch("/admin/ws-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ require_token, token }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        window.showToast && showToast(ServerI18n.t("security2ToastWsAuthSaved"), true);
        await loadWsAuth();
      } else {
        window.showToast && showToast(data.error || ServerI18n.t("security2ToastSaveFailed"), false);
      }
    } catch (e) {
      window.showToast && showToast(ServerI18n.t("security2ToastNetworkError"), false);
    }
  }

  async function rotateWsAuth() {
    const ok = await window.HudConfirm?.open({
      icon: "⟳",
      title: ServerI18n.t("security2ResetWsTokenTitle"),
      subtitle: "ROTATE WS TOKEN · DESKTOP MUST RECONNECT",
      severity: "warn",
      body: ServerI18n.t("security2RotateConfirmBody"),
      confirmLabel: ServerI18n.t("security2GenerateNewTokenLabel"),
    });
    if (!ok) return;
    try {
      const res = await window.csrfFetch("/admin/ws-auth/rotate", { method: "POST" });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        window.showToast && showToast(ServerI18n.t("security2ToastNewTokenGenerated"), true);
        try { localStorage.setItem("ws-auth-last-rotation", String(Date.now())); } catch (_) {}
        await loadWsAuth();
      } else {
        window.showToast && showToast(data.error || ServerI18n.t("security2ToastRegenerateFailed"), false);
      }
    } catch (e) {
      window.showToast && showToast(ServerI18n.t("security2ToastNetworkError"), false);
    }
  }

  function copyToken() {
    const token = document.getElementById("sec2-wsa-token").value;
    if (!token) {
      window.showToast && showToast(ServerI18n.t("security2ToastTokenEmpty"), false);
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(token)
        .then(() => window.showToast && showToast(ServerI18n.t("security2ToastCopied"), true))
        .catch(() => window.showToast && showToast(ServerI18n.t("security2ToastCopyFailed"), false));
    } else {
      window.showToast && showToast(ServerI18n.t("security2ToastCopyFailed"), false);
    }
  }

  function revealToken() {
    const input = document.getElementById("sec2-wsa-token");
    input.type = input.type === "password" ? "text" : "password";
  }

  async function runDangerAction(action) {
    const config = {
      "revoke-tokens": {
        confirm: ServerI18n.t("security2ConfirmRevokeApiTokens"),
        url: "/admin/security/revoke-api-tokens",
        ok: (data) => ServerI18n.t("security2ToastApiTokensRevoked", { n: data.revoked || 0 }),
      },
      "revoke-firetoken": {
        confirm: ServerI18n.t("security2ConfirmRevokeFireToken"),
        url: "/admin/integrations/fire-token/revoke",
        ok: () => ServerI18n.t("security2ToastFireTokenRevoked"),
      },
      "reset-ws": {
        confirm: ServerI18n.t("security2ConfirmResetWsToken"),
        url: "/admin/ws-auth/rotate",
        ok: () => ServerI18n.t("security2ToastWsTokenReset"),
      },
    }[action];
    if (!config) return;
    const ok = await window.HudConfirm?.open({
      icon: "⚠",
      title: config.title || ServerI18n.t("security2ConfirmDefaultTitle"),
      subtitle: config.subtitle || "SECURITY ACTION",
      severity: config.severity || "warn",
      body: config.confirm,
      confirmLabel: config.confirmLabel || ServerI18n.t("security2ConfirmDefaultLabel"),
    });
    if (!ok) return;
    try {
      const res = await window.csrfFetch(config.url, { method: "POST" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        window.showToast && showToast(data.error || ServerI18n.t("security2ToastActionFailed"), false);
        return;
      }
      window.showToast && showToast(config.ok(data), true);
      if (action === "reset-ws") {
        try { localStorage.setItem("ws-auth-last-rotation", String(Date.now())); } catch (_) {}
        await loadWsAuth();
      }
    } catch (err) {
      console.error("Security danger action error:", err);
      window.showToast && showToast(ServerI18n.t("security2ToastNetworkError"), false);
    }
  }

  function fillSessionRow() {
    // v5 layout uses sec2-session-self-line — single line summary instead
    // of the old multi-column table. Old IDs (sec2-session-ip/-ua) no
    // longer exist; this function targets the new structure.
    const line = document.getElementById("sec2-session-self-line");
    if (line) {
      const ua = (navigator.userAgent || "").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/);
      const platform = navigator.platform || navigator.userAgentData?.platform || "";
      const browser = ua ? ua[0].split("/")[0] : "Browser";
      line.textContent = ServerI18n.t("security2SessionSelfLine", { browser: browser, platform: platform });
    }
    // TLS status — driven by location.protocol since we can't probe the
    // server's HSTS / cert config from the client.
    const tlsDot = document.getElementById("sec2-tls-dot");
    const tlsStatus = document.getElementById("sec2-tls-status");
    if (tlsDot && tlsStatus) {
      const isHttps = location.protocol === "https:";
      tlsDot.classList.add(isHttps ? "is-lime" : "is-crimson");
      tlsStatus.textContent = isHttps ? ServerI18n.t("security2TlsEnabledHttps") : ServerI18n.t("security2TlsDisabledHttp");
    }
  }

  function bind() {
    const form = document.getElementById("sec2-pw-form");
    if (form) form.addEventListener("submit", submitPasswordChange);
    const pwNew = document.getElementById("sec2-pw-new");
    if (pwNew) pwNew.addEventListener("input", (e) => renderStrength(e.target.value));

    document.getElementById("sec2-wsa-save")?.addEventListener("click", saveWsAuth);
    document.getElementById("sec2-wsa-rotate")?.addEventListener("click", rotateWsAuth);
    document.getElementById("sec2-wsa-copy")?.addEventListener("click", copyToken);
    document.getElementById("sec2-wsa-reveal")?.addEventListener("click", revealToken);
    document.getElementById("sec2-ip-save")?.addEventListener("click", () => saveSecuritySettings("ip"));
    document.getElementById("sec2-cors-save")?.addEventListener("click", () => saveSecuritySettings("cors"));
    document.querySelectorAll("[data-sec-danger]").forEach((btn) => {
      if (btn.dataset.secBound === "1") return;
      btn.dataset.secBound = "1";
      btn.addEventListener("click", () => runDangerAction(btn.dataset.secDanger));
    });

    fillSessionRow();
    loadWsAuth();
    loadSecuritySettings();
  }

  // Legacy cards (sec-security / sec-ws-auth) were removed from admin.js
  // 2026-04-28 (Group D-3 R6). Function kept as a no-op so callers below
  // don't need conditional wiring; safe to delete in a follow-up.
  function hideLegacyCards() { /* noop — cards removed */ }

  // Own visibility: the admin.js router only touches [id^="sec-"]. Our page
  // id starts with "admin-", so we manage display from the shell's
  // active route + active leaf.
  function syncVisibility() {
    const shell = document.querySelector(".admin-dash-grid");
    const page = document.getElementById(PAGE_ID);
    if (!shell || !page) return;
    const route = shell.dataset.activeRoute || "live";
    const leaf = shell.dataset.activeLeaf || route;
    page.style.display = (route === "security") || (route === "system" && leaf === "security") ? "" : "none";
  }

  function inject() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", pageTemplate());
    hideLegacyCards();
    bind();
    syncVisibility();
  }

  function boot() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    let shellObserver = null;
    function bindShellObserver() {
      const shell = document.querySelector(".admin-dash-grid");
      if (!shell || shellObserver) return;
      shellObserver = new MutationObserver(syncVisibility);
      shellObserver.observe(shell, {
        attributes: true,
        attributeFilter: ["data-active-route", "data-active-leaf"],
      });
    }
    const observer = new MutationObserver(() => {
      if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
        inject();
      } else {
        // legacy cards re-injected on admin re-render; keep them hidden
        hideLegacyCards();
      }
      bindShellObserver();
      syncVisibility();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("hashchange", syncVisibility);
    document.addEventListener("admin-panel-rendered", () => {
      // admin.js fires this after re-rendering settings-grid; re-inject.
      inject();
      hideLegacyCards();
      bindShellObserver();
      syncVisibility();
    });
    bindShellObserver();
    inject();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
