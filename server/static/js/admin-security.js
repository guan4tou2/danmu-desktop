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
    // border per batch12-system.jsx SecurityPage. 7 cards total — 4
    // working (password / session / WS / audit-link) + 3 informational
    // 待-BE placeholders (IP allowlist / CORS / TLS) + DANGER ZONE
    // (span-2 row at bottom). Working JS handlers untouched.
    return `
        <div id="${PAGE_ID}" class="admin-security-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">SECURITY · AUTH · ACCESS · TOKENS</div>
          <div class="admin-v2-title">安全性</div>
          <p class="admin-v2-note">
            單一管理員模式、無角色分離。下方卡片左側色條代表狀態：lime = 已就緒、cyan = 進行中、amber = 警告、crimson = 危險。
          </p>
        </div>

        <div class="admin-security-grid">

          <!-- ① Admin password — change password form -->
          <div class="admin-sec-card is-lime">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">管理員密碼</span>
              <span class="admin-sec-card__en">ADMIN PASSWORD</span>
            </div>
            <div class="admin-sec-card__body">
              <form id="sec2-pw-form" class="admin-security-form" autocomplete="off">
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
              </form>
            </div>
          </div>

          <!-- ② Admin session -->
          <div class="admin-sec-card is-cyan">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">工作階段</span>
              <span class="admin-sec-card__en">ADMIN SESSION</span>
            </div>
            <div class="admin-sec-card__body">
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-lime"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">目前 Session</div>
                  <div class="admin-sec-row__value" id="sec2-session-self-line">—</div>
                </div>
              </div>
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-lime"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">Token TTL</div>
                  <div class="admin-sec-row__value">24h · 自動續期</div>
                </div>
              </div>
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-lime"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">其他裝置</div>
                  <div class="admin-sec-row__value">無（單會話）</div>
                </div>
                <span class="admin-sec-row__hint">待 BE</span>
              </div>
            </div>
          </div>

          <!-- ③ WS token — overlay viewer auth -->
          <div class="admin-sec-card is-cyan">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">WebSocket 令牌</span>
              <span class="admin-sec-card__en">WS TOKEN · VIEWER AUTH</span>
              <span class="admin-sec-card__spacer"></span>
              <span id="sec2-wsa-status" class="admin-v2-chip">載入中…</span>
            </div>
            <div class="admin-sec-card__body">
              <label class="admin-security-toggle">
                <input id="sec2-wsa-toggle" type="checkbox" />
                <span>啟用 token 驗證（overlay 連線需帶 token）</span>
              </label>
              <div class="admin-security-field">
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
          </div>

          <!-- ④ IP allowlist — 待 BE -->
          <div class="admin-sec-card is-amber">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">IP 存取限制</span>
              <span class="admin-sec-card__en">IP ALLOWLIST</span>
            </div>
            <div class="admin-sec-card__body">
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-amber"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">狀態</div>
                  <div class="admin-sec-row__value">未啟用 — 所有 IP 可存取 admin</div>
                </div>
              </div>
              <p class="admin-sec-card__note">
                啟用後僅允許列表內 IP 存取 <code>/admin</code>。viewer 端不受影響。
              </p>
              <div class="admin-sec-card__deferred">+ 新增允許 IP / CIDR</div>
              <div class="admin-sec-card__be-hint">⚠ 待 BE</div>
            </div>
          </div>

          <!-- ⑤ CORS — informational -->
          <div class="admin-sec-card">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">CORS 設定</span>
              <span class="admin-sec-card__en">CROSS-ORIGIN</span>
            </div>
            <div class="admin-sec-card__body">
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-amber"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">允許來源</div>
                  <div class="admin-sec-row__value">* (全部)</div>
                </div>
                <span class="admin-sec-row__action">編輯</span>
              </div>
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-lime"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">Credentials</div>
                  <div class="admin-sec-row__value">false（與 wildcard origin 互斥）</div>
                </div>
              </div>
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-lime"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">Methods</div>
                  <div class="admin-sec-row__value">GET, POST, DELETE</div>
                </div>
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
                  <div class="admin-sec-row__label">狀態</div>
                  <div class="admin-sec-row__value" id="sec2-tls-status">—</div>
                </div>
              </div>
              <p class="admin-sec-card__note">
                建議在反向代理（nginx / Caddy）層啟用 TLS。
              </p>
              <div class="admin-sec-row">
                <span class="admin-sec-row__dot is-amber"></span>
                <div class="admin-sec-row__main">
                  <div class="admin-sec-row__label">HSTS Header</div>
                  <div class="admin-sec-row__value">未設定</div>
                </div>
                <span class="admin-sec-row__hint">待 BE</span>
              </div>
            </div>
          </div>

          <!-- ⑦ Audit log link (span-2) -->
          <div class="admin-sec-card is-span2">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">操作審計</span>
              <span class="admin-sec-card__en">AUDIT LOG</span>
              <span class="admin-sec-card__spacer"></span>
              <a href="#/audit" class="admin-sec-card__link">查看完整日誌 →</a>
            </div>
            <div class="admin-sec-card__body">
              <p class="admin-sec-card__note">
                每筆 admin 動作（登入 / 密碼變更 / token 輪替 / plugin 上傳 / overlay clear / 等）
                都自動寫入 audit log，可在 <a href="#/audit">#/audit</a> 查詢與匯出。
              </p>
            </div>
          </div>

          <!-- ⑧ DANGER ZONE (span-2 row) -->
          <div class="admin-sec-card is-crimson is-span2">
            <div class="admin-sec-card__head">
              <span class="admin-sec-card__zh">危險操作</span>
              <span class="admin-sec-card__en">DANGER ZONE</span>
            </div>
            <div class="admin-sec-card__body">
              <div class="admin-sec-dangerzone">
                <button type="button" class="admin-sec-danger" data-sec-danger="revoke-tokens">
                  <span class="admin-sec-danger__title">撤銷所有 API Token</span>
                  <span class="admin-sec-danger__desc">立即停用所有整合</span>
                </button>
                <button type="button" class="admin-sec-danger" data-sec-danger="revoke-firetoken">
                  <span class="admin-sec-danger__title">撤銷 Fire Token</span>
                  <span class="admin-sec-danger__desc">所有 extension 斷線</span>
                </button>
                <button type="button" class="admin-sec-danger is-amber" data-sec-danger="reset-ws">
                  <span class="admin-sec-danger__title">重設 WS Token</span>
                  <span class="admin-sec-danger__desc">所有 viewer 需重連</span>
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
    // v5 layout uses sec2-session-self-line — single line summary instead
    // of the old multi-column table. Old IDs (sec2-session-ip/-ua) no
    // longer exist; this function targets the new structure.
    const line = document.getElementById("sec2-session-self-line");
    if (line) {
      const ua = (navigator.userAgent || "").match(/(Chrome|Firefox|Safari|Edg|Opera)\/[\d.]+/);
      const platform = navigator.platform || navigator.userAgentData?.platform || "";
      const browser = ua ? ua[0].split("/")[0] : "Browser";
      line.textContent = `${browser} · ${platform} · 目前主機 · 活躍中`;
    }
    // TLS status — driven by location.protocol since we can't probe the
    // server's HSTS / cert config from the client.
    const tlsDot = document.getElementById("sec2-tls-dot");
    const tlsStatus = document.getElementById("sec2-tls-status");
    if (tlsDot && tlsStatus) {
      const isHttps = location.protocol === "https:";
      tlsDot.classList.add(isHttps ? "is-lime" : "is-crimson");
      tlsStatus.textContent = isHttps ? "已啟用 — HTTPS" : "未啟用 — 使用 HTTP";
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
