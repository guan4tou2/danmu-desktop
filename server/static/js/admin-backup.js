/**
 * Admin Backup & Export (P1-10) — dedicated Soft Holo HUD page.
 *
 * Three zones: Export · Restore · Danger. Reuses existing endpoints; no
 * server code changes. Settings export is assembled client-side from
 * GET /get_settings (no dedicated export endpoint exists yet).
 *
 * Endpoints used (existing, no backend changes):
 *   GET  /admin/history/export?hours=N   → JSON timeline download (server Content-Disposition)
 *   POST /admin/history/clear            → clear all danmu history
 *   GET  /get_settings                   → raw settings dump for client-side snapshot
 *   POST /logout                         → ends current admin session
 *
 * Deferred (即將支援, labelled in UI):
 *   - CSV / SRT history export formats  (backend returns JSON only)
 *   - Effects/Emojis/Stickers pack tarballs  (no pack endpoint yet)
 *   - Upload settings JSON → apply  (no backend apply route; dry-run preview only)
 *   - Upload effect/emoji/sticker pack  (no backend route yet)
 *   - Factory reset  (no backend route — confirm UI skeleton only)
 *
 * Nav slug `backup` does NOT exist in admin.js ADMIN_ROUTES. Per instruction,
 * this page renders under the `system` route alongside Security (P1-9).
 * Section id is intentionally NOT prefixed `sec-` so admin.js router's
 * [id^="sec-"] sweep leaves it alone; visibility is self-managed.
 */
(function () {
  "use strict";

  const PAGE_ID = "admin-backup-v2-page";
  var _escHtml = window.AdminUtils.escapeHtml;

  function pageTemplate() {
    return `
      <div id="${PAGE_ID}" class="admin-backup-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">BACKUP · EXPORT · DANGER</div>
          <div class="admin-v2-title">備份 &amp; 匯出</div>
          <p class="admin-v2-note">
            匯出歷史/設定、還原備份、危險操作分區 — 系統性重置請手動刪除 <code>server/runtime/</code>。
          </p>
        </div>

        <!-- Zone 1 · Export -->
        <div class="admin-v2-card admin-backup-zone" data-zone="export">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <span class="admin-v2-dot is-good"></span>
            <span class="admin-v2-monolabel">ZONE 1 · EXPORT</span>
          </div>

          <!-- History export -->
          <div class="admin-backup-subcard">
            <div class="admin-v2-monolabel">HISTORY · 彈幕歷史</div>
            <div class="admin-backup-row">
              <label class="admin-backup-field">
                <span class="admin-v2-monolabel">RANGE</span>
                <select id="bk2-hist-hours" class="admin-v2-select">
                  <option value="1">最近 1 小時</option>
                  <option value="6">最近 6 小時</option>
                  <option value="24" selected>最近 24 小時</option>
                  <option value="168">最近 7 天</option>
                  <option value="720">最近 30 天</option>
                </select>
              </label>
              <label class="admin-backup-field">
                <span class="admin-v2-monolabel">FORMAT</span>
                <select id="bk2-hist-format" class="admin-v2-select">
                  <option value="json">JSON · 完整</option>
                  <option value="csv" disabled>CSV · 即將支援</option>
                  <option value="srt" disabled>SRT · 即將支援</option>
                </select>
              </label>
              <button type="button" id="bk2-hist-download" class="admin-poll-btn is-primary">下載</button>
            </div>
          </div>

          <!-- Settings export -->
          <div class="admin-backup-subcard">
            <div class="admin-v2-monolabel">SETTINGS · 設定快照</div>
            <div class="admin-backup-row">
              <div class="admin-backup-desc">
                一鍵 JSON 快照(client-side 組合)。不含密碼雜湊與 token,已自動剝除。
              </div>
              <button type="button" id="bk2-settings-download" class="admin-poll-btn is-primary">下載</button>
            </div>
          </div>

          <!-- Packs (deferred) -->
          <div class="admin-backup-subcard is-deferred">
            <div class="admin-v2-monolabel">PACKS · EFFECTS / EMOJIS / STICKERS</div>
            <div class="admin-backup-row">
              <div class="admin-backup-desc">每類資產獨立 tarball 下載 — 即將支援 (需後端 endpoint)</div>
              <button type="button" class="admin-poll-btn is-ghost" disabled>下載</button>
            </div>
          </div>
        </div>

        <!-- Zone 2 · Restore -->
        <div class="admin-v2-card admin-backup-zone" data-zone="restore">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <span class="admin-v2-dot is-warn"></span>
            <span class="admin-v2-monolabel">ZONE 2 · RESTORE</span>
          </div>

          <!-- Settings restore -->
          <div class="admin-backup-subcard">
            <div class="admin-v2-monolabel">SETTINGS · 還原設定</div>
            <div class="admin-backup-row">
              <label class="admin-backup-field">
                <span class="admin-v2-monolabel">JSON FILE</span>
                <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-v2-input" />
              </label>
              <button type="button" id="bk2-settings-dryrun" class="admin-poll-btn">Dry-run 預覽</button>
              <button type="button" class="admin-poll-btn is-ghost" disabled title="即將支援 (需後端 endpoint)">套用</button>
            </div>
            <pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre>
            <p class="admin-backup-deferred-note">套用階段 — 即將支援 (需後端 endpoint)。目前僅可 client-side 解析預覽。</p>
          </div>

          <!-- Pack restore (deferred) -->
          <div class="admin-backup-subcard is-deferred">
            <div class="admin-v2-monolabel">PACKS · 上傳資產包</div>
            <div class="admin-backup-row">
              <div class="admin-backup-desc">上傳 effect / emoji / sticker 資產包 → 驗證 → 安裝 — 即將支援</div>
              <button type="button" class="admin-poll-btn is-ghost" disabled>上傳</button>
            </div>
          </div>
        </div>

        <!-- Zone 3 · Danger -->
        <div class="admin-v2-card admin-backup-zone is-danger" data-zone="danger">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <span class="admin-v2-dot is-bad"></span>
            <span class="admin-v2-monolabel" style="color:#f87171">ZONE 3 · DANGER</span>
          </div>

          <!-- Clear history -->
          <div class="admin-backup-subcard">
            <div class="admin-v2-monolabel">CLEAR HISTORY · 清除彈幕歷史</div>
            <div class="admin-backup-row">
              <label class="admin-backup-field">
                <span class="admin-v2-monolabel">RANGE</span>
                <select id="bk2-clear-scope" class="admin-v2-select">
                  <option value="all" selected>全部</option>
                </select>
              </label>
              <div class="admin-backup-desc">清除所有彈幕歷史。此動作無法復原。</div>
              <button type="button" id="bk2-clear-history" class="admin-poll-btn is-bad">清除</button>
            </div>
          </div>

          <!-- End session -->
          <div class="admin-backup-subcard">
            <div class="admin-v2-monolabel">END SESSION · 結束管理工作階段</div>
            <div class="admin-backup-row">
              <div class="admin-backup-desc">登出目前管理員,不影響 overlay / viewer 連線。</div>
              <button type="button" id="bk2-end-session" class="admin-poll-btn is-bad">END SESSION</button>
            </div>
          </div>

          <!-- Factory reset (deferred) -->
          <div class="admin-backup-subcard is-deferred">
            <div class="admin-v2-monolabel">FACTORY RESET · 回復原廠 (即將支援)</div>
            <div class="admin-backup-row">
              <label class="admin-backup-field">
                <span class="admin-v2-monolabel">輸入 <code>reset</code> 以確認</span>
                <input id="bk2-factory-confirm" type="text" class="admin-v2-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              </label>
              <div class="admin-backup-desc">即將支援 — 目前請手動刪除 <code>server/runtime/</code> 後重啟。</div>
              <button type="button" id="bk2-factory-reset" class="admin-poll-btn is-bad" disabled>FACTORY RESET</button>
            </div>
          </div>
        </div>
      </div>`;
  }

  // ---- Zone 1 · Export ----

  function downloadHistory() {
    const hours = document.getElementById("bk2-hist-hours").value || "24";
    const format = document.getElementById("bk2-hist-format").value || "json";
    if (format !== "json") {
      window.showToast && showToast(format.toUpperCase() + " 格式尚未支援", false);
      return;
    }
    // Browser follows Content-Disposition from /admin/history/export.
    const a = document.createElement("a");
    a.href = "/admin/history/export?hours=" + encodeURIComponent(hours);
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  async function downloadSettingsSnapshot() {
    try {
      const res = await fetch("/get_settings", { credentials: "same-origin" });
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      // Defensive: strip any keys that look like secrets.
      const SECRET_KEYS = ["password", "token", "secret", "hash"];
      const clean = {};
      Object.keys(data || {}).forEach((k) => {
        if (SECRET_KEYS.some((s) => k.toLowerCase().includes(s))) return;
        clean[k] = data[k];
      });
      const blob = new Blob(
        [JSON.stringify({ exported_at: new Date().toISOString(), version: 1, settings: clean }, null, 2)],
        { type: "application/json" }
      );
      const url = URL.createObjectURL(blob);
      const stamp = new Date().toISOString().replace(/[:.]/g, "-");
      const a = document.createElement("a");
      a.href = url;
      a.download = "danmu-settings-" + stamp + ".json";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      window.showToast && showToast("設定快照已下載", true);
    } catch (e) {
      console.error("Settings snapshot error:", e);
      window.showToast && showToast("快照失敗", false);
    }
  }

  // ---- Zone 2 · Restore (dry-run only; apply deferred) ----

  async function dryRunSettings() {
    const fileInput = document.getElementById("bk2-settings-upload");
    const diffEl = document.getElementById("bk2-settings-diff");
    const file = fileInput && fileInput.files && fileInput.files[0];
    if (!file) {
      window.showToast && showToast("請先選擇 JSON 檔", false);
      return;
    }
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const uploaded = parsed.settings || parsed;
      const res = await fetch("/get_settings", { credentials: "same-origin" });
      const current = res.ok ? await res.json() : {};
      const diff = [];
      const keys = new Set([...Object.keys(current), ...Object.keys(uploaded)]);
      keys.forEach((k) => {
        const a = JSON.stringify(current[k]);
        const b = JSON.stringify(uploaded[k]);
        if (a === b) return;
        if (a === undefined) diff.push("+ " + k + ": " + b);
        else if (b === undefined) diff.push("- " + k + ": " + a);
        else diff.push("~ " + k + ": " + a + " → " + b);
      });
      diffEl.textContent = diff.length
        ? diff.join("\n")
        : "(設定內容相同 · 無差異)";
      diffEl.hidden = false;
      window.showToast && showToast(diff.length + " 項差異", true);
    } catch (e) {
      console.error("Dry-run error:", e);
      diffEl.textContent = "解析失敗: " + (e && e.message ? e.message : String(e));
      diffEl.hidden = false;
      window.showToast && showToast("解析失敗", false);
    }
  }

  // ---- Zone 3 · Danger ----

  async function clearHistory() {
    if (!confirm("確定清除所有彈幕歷史?此動作無法復原。")) return;
    try {
      const res = await window.csrfFetch("/admin/history/clear", { method: "POST" });
      if (res.ok) {
        window.showToast && showToast("歷史已清除", true);
      } else {
        window.showToast && showToast("清除失敗", false);
      }
    } catch (e) {
      window.showToast && showToast("網路錯誤", false);
    }
  }

  async function endSession() {
    if (!confirm("確定登出目前管理員?")) return;
    try {
      const res = await window.csrfFetch("/logout", { method: "POST" });
      if (res.redirected) window.location.href = res.url;
      else window.location.reload();
    } catch (e) {
      window.showToast && showToast("登出失敗", false);
    }
  }

  function bindFactoryConfirm() {
    const input = document.getElementById("bk2-factory-confirm");
    const btn = document.getElementById("bk2-factory-reset");
    if (!input || !btn) return;
    input.addEventListener("input", () => {
      // Even when typed correctly, button stays disabled — feature deferred.
      // We still visually acknowledge the confirmation state.
      const typed = input.value.trim() === "reset";
      btn.classList.toggle("is-ready", typed);
    });
    btn.addEventListener("click", () => {
      window.showToast && showToast("Factory reset 即將支援", false);
    });
  }

  function bind() {
    document.getElementById("bk2-hist-download")?.addEventListener("click", downloadHistory);
    document.getElementById("bk2-settings-download")?.addEventListener("click", downloadSettingsSnapshot);
    document.getElementById("bk2-settings-dryrun")?.addEventListener("click", dryRunSettings);
    document.getElementById("bk2-clear-history")?.addEventListener("click", clearHistory);
    document.getElementById("bk2-end-session")?.addEventListener("click", endSession);
    bindFactoryConfirm();
  }

  function syncVisibility() {
    const shell = document.querySelector(".admin-dash-grid");
    const page = document.getElementById(PAGE_ID);
    if (!shell || !page) return;
    const route = shell.dataset.activeLeaf || "dashboard";
    page.style.display = route === "backup" ? "" : "none";
  }

  function inject() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", pageTemplate());
    bind();
    syncVisibility();
  }

  function boot() {
    if (!window.DANMU_CONFIG?.session?.logged_in) return;
    const observer = new MutationObserver(() => {
      if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
        inject();
      }
      syncVisibility();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("hashchange", syncVisibility);
    document.addEventListener("admin-panel-rendered", () => {
      inject();
      syncVisibility();
    });
    inject();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
