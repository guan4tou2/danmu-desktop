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
    return `
      <div id="${PAGE_ID}" class="admin-security-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">SECURITY · 密碼 · WS TOKEN · 審計</div>
          <div class="admin-v2-title">安全</div>
          <p class="admin-v2-note">
            管理員密碼、WS 認證 Token 與操作審計。單一管理員模式,無角色分離。
          </p>
        </div>

        <!-- Change password -->
        <form id="sec2-pw-form" class="admin-v2-card" autocomplete="off">
          <div class="admin-v2-monolabel" style="margin-bottom:10px">CHANGE PASSWORD · 變更密碼</div>
          <div class="admin-security-form">
            <label class="admin-security-field">
              <span class="admin-v2-monolabel">CURRENT</span>
              <input id="sec2-pw-current" type="password" required autocomplete="current-password" class="admin-v2-input" />
            </label>
            <label class="admin-security-field">
              <span class="admin-v2-monolabel">NEW · ≥8</span>
              <input id="sec2-pw-new" type="password" required minlength="8" autocomplete="new-password" class="admin-v2-input" />
              <div class="admin-security-strength">
                <div class="admin-security-strength-bar"><span id="sec2-pw-meter" style="width:0%"></span></div>
                <span id="sec2-pw-label" class="admin-v2-monolabel">—</span>
              </div>
            </label>
            <label class="admin-security-field">
              <span class="admin-v2-monolabel">CONFIRM</span>
              <input id="sec2-pw-confirm" type="password" required autocomplete="new-password" class="admin-v2-input" />
            </label>
            <button type="submit" class="admin-poll-btn is-primary">變更密碼</button>
          </div>
        </form>

        <!-- WS Token -->
        <div class="admin-v2-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span class="admin-v2-monolabel">WS TOKEN · OVERLAY 驗證</span>
            <span id="sec2-wsa-status" class="admin-v2-chip">載入中…</span>
          </div>
          <label class="admin-security-toggle">
            <input id="sec2-wsa-toggle" type="checkbox" />
            <span>啟用 token 驗證（overlay 連線需帶 token）</span>
          </label>
          <div class="admin-security-field" style="margin-top:10px">
            <span class="admin-v2-monolabel">TOKEN · 12–128 字元</span>
            <div class="admin-security-tokenrow">
              <input id="sec2-wsa-token" type="password" class="admin-v2-input" placeholder="未設定" autocomplete="off" spellcheck="false" />
              <button type="button" id="sec2-wsa-reveal" class="admin-v2-chip">👁</button>
              <button type="button" id="sec2-wsa-copy" class="admin-v2-chip">複製</button>
              <button type="button" id="sec2-wsa-rotate" class="admin-v2-chip is-warn">重新產生</button>
            </div>
          </div>
          <div class="admin-security-tokenmeta">
            <span class="admin-v2-monolabel">LAST ROTATION</span>
            <span id="sec2-wsa-lastrot" class="admin-security-timestamp">—</span>
            <button type="button" id="sec2-wsa-save" class="admin-poll-btn is-primary" style="margin-left:auto">儲存</button>
          </div>
        </div>

        <!-- Session table (skeleton) -->
        <div class="admin-v2-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span class="admin-v2-monolabel">SESSIONS · 活躍登入</span>
            <span class="admin-v2-chip">1 項</span>
          </div>
          <div class="admin-security-table">
            <div class="admin-security-row is-head">
              <span>IP</span><span>UA</span><span>LAST-ACTIVE</span><span>ACTION</span>
            </div>
            <div class="admin-security-row" id="sec2-session-self">
              <span id="sec2-session-ip" class="admin-security-mono">—</span>
              <span id="sec2-session-ua" class="admin-security-mono admin-security-truncate" title="">—</span>
              <span class="admin-security-mono">此刻</span>
              <span class="admin-v2-chip">目前登入</span>
            </div>
          </div>
          <p class="admin-security-deferred">多會話列表 · 逐一撤銷 — 即將支援 (需後端 endpoint)</p>
        </div>

        <!-- Audit log (skeleton) -->
        <div class="admin-v2-card">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
            <span class="admin-v2-monolabel">AUDIT LOG · 操作審計</span>
          </div>
          <div class="admin-security-audit-empty">
            <div class="admin-v2-monolabel">NO DATA</div>
            <p>操作審計日誌 — 即將支援 (需後端 endpoint)</p>
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
    const txt = ["—", "弱", "普通", "良好", "強"];
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
      window.showToast && showToast("請填寫所有欄位", false);
      return;
    }
    if (nw.length < 8) {
      window.showToast && showToast("新密碼至少 8 字元", false);
      return;
    }
    if (nw !== cf) {
      window.showToast && showToast("兩次輸入的新密碼不一致", false);
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
        window.showToast && showToast("密碼已變更", true);
        document.getElementById("sec2-pw-form").reset();
        renderStrength("");
      } else {
        window.showToast && showToast(data.error || "變更失敗", false);
      }
    } catch (err) {
      console.error("Password change error:", err);
      window.showToast && showToast("網路錯誤", false);
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
      statusEl.textContent = data.require_token ? "已啟用" : "未啟用";
      statusEl.className = "admin-v2-chip " + (data.require_token ? "is-good" : "");
      // Last-rotation persisted client-side (no backend field yet)
      const lr = localStorage.getItem("ws-auth-last-rotation");
      document.getElementById("sec2-wsa-lastrot").textContent = lr
        ? new Date(parseInt(lr, 10)).toLocaleString()
        : "—";
    } catch (e) {
      statusEl.textContent = "載入失敗";
      statusEl.className = "admin-v2-chip is-bad";
    }
  }

  async function saveWsAuth() {
    const require_token = document.getElementById("sec2-wsa-toggle").checked;
    const token = document.getElementById("sec2-wsa-token").value.trim();
    if (require_token && !token) {
      window.showToast && showToast("啟用時必須填入 token", false);
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
        window.showToast && showToast("WS 驗證設定已儲存", true);
        await loadWsAuth();
      } else {
        window.showToast && showToast(data.error || "儲存失敗", false);
      }
    } catch (e) {
      window.showToast && showToast("網路錯誤", false);
    }
  }

  async function rotateWsAuth() {
    if (!confirm("將產生全新 token,舊 token 立即失效。繼續?")) return;
    try {
      const res = await window.csrfFetch("/admin/ws-auth/rotate", { method: "POST" });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        window.showToast && showToast("已產生新 token", true);
        try { localStorage.setItem("ws-auth-last-rotation", String(Date.now())); } catch (_) {}
        await loadWsAuth();
      } else {
        window.showToast && showToast(data.error || "重新產生失敗", false);
      }
    } catch (e) {
      window.showToast && showToast("網路錯誤", false);
    }
  }

  function copyToken() {
    const token = document.getElementById("sec2-wsa-token").value;
    if (!token) {
      window.showToast && showToast("Token 為空", false);
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(token)
        .then(() => window.showToast && showToast("已複製", true))
        .catch(() => window.showToast && showToast("複製失敗 — 請手動選取", false));
    } else {
      window.showToast && showToast("複製失敗 — 請手動選取", false);
    }
  }

  function revealToken() {
    const input = document.getElementById("sec2-wsa-token");
    input.type = input.type === "password" ? "text" : "password";
  }

  function fillSessionRow() {
    const ipEl = document.getElementById("sec2-session-ip");
    const uaEl = document.getElementById("sec2-session-ua");
    // Session IP isn't readable client-side; leave as placeholder.
    if (ipEl) ipEl.textContent = "目前主機";
    if (uaEl) {
      uaEl.textContent = (navigator.userAgent || "unknown").slice(0, 96);
      uaEl.title = navigator.userAgent || "";
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

    fillSessionRow();
    loadWsAuth();
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
    page.style.display = route === "system" && leaf === "security" ? "" : "none";
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
