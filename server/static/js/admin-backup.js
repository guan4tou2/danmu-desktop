/**
 * Admin Backup & Export (P1-10) — dedicated Soft Holo HUD page.
 *
 * Three zones: Export · Restore · Danger. Settings export is assembled
 * client-side from GET /get_settings (no dedicated export endpoint exists yet).
 *
 * Endpoints used (existing, no backend changes):
 *   GET  /admin/history/export?hours=N&format=json|csv|srt
 *        → timeline download (server Content-Disposition)
 *   POST /admin/history/clear            → clear all danmu history
 *   GET  /get_settings                   → raw settings dump for client-side snapshot
 *   POST /logout                         → ends current admin session
 *
 * Deferred (即將支援, labelled in UI):
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
        <div class="admin-ui-page-head">
          <div class="admin-ui-page-kicker">BACKUP · EXPORT · DANGER</div>
          <div class="admin-ui-page-title">備份 &amp; 匯出</div>
          <p class="admin-ui-page-note">
            匯出歷史/設定、還原備份、危險操作分區 — 系統性重置請手動刪除 <code>server/runtime/</code>。
          </p>
        </div>

        <!-- Zone 1 · Export -->
        <div class="admin-ui-card admin-backup-zone" data-zone="export">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <span class="admin-v2-dot is-good"></span>
            <span class="admin-ui-monolabel">ZONE 1 · EXPORT</span>
          </div>

          <!-- History export -->
          <div class="admin-backup-subcard">
            <div class="admin-ui-monolabel">HISTORY · 彈幕歷史</div>
            <div class="admin-backup-row">
              <label class="admin-backup-field">
                <span class="admin-ui-monolabel">RANGE</span>
                <select id="bk2-hist-hours" class="admin-ui-select">
                  <option value="1">最近 1 小時</option>
                  <option value="6">最近 6 小時</option>
                  <option value="24" selected>最近 24 小時</option>
                  <option value="168">最近 7 天</option>
                  <option value="720">最近 30 天</option>
                </select>
              </label>
              <label class="admin-backup-field">
                <span class="admin-ui-monolabel">FORMAT</span>
                <select id="bk2-hist-format" class="admin-ui-select">
                  <option value="json">JSON · 完整</option>
                  <option value="csv">CSV · 試算表</option>
                  <option value="srt">SRT · 字幕</option>
                </select>
              </label>
              <button type="button" id="bk2-hist-download" class="admin-ui-action is-primary admin-bk-action">下載</button>
            </div>
          </div>

          <!-- Settings export -->
          <div class="admin-backup-subcard">
            <div class="admin-ui-monolabel">SETTINGS · 設定快照</div>
            <div class="admin-backup-row">
              <div class="admin-backup-desc">
                一鍵 JSON 快照(client-side 組合)。不含密碼雜湊與 token,已自動剝除。
              </div>
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary admin-bk-action">下載</button>
            </div>
          </div>

          <!-- Full pack (2026-05-19 — wired to /admin/backup/export) -->
          <div class="admin-backup-subcard">
            <div class="admin-ui-monolabel">FULL BACKUP · 全狀態 .tar.gz</div>
            <div class="admin-backup-row">
              <div class="admin-backup-desc" id="bk2-pack-summary">
                計算備份大小中…
              </div>
              <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary admin-bk-action">下載快照</button>
            </div>
            <p class="admin-backup-deferred-note" id="bk2-pack-detail">
              內容：runtime/*.json · effects/*.dme · plugins/* · user_plugins/*
              <br>不含：圖片素材（emojis / stickers / sounds）— 仍走 client-side 包。
            </p>
          </div>
        </div>

        <!-- Zone 2 · Restore -->
        <div class="admin-ui-card admin-backup-zone" data-zone="restore">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <span class="admin-v2-dot is-warn"></span>
            <span class="admin-ui-monolabel">ZONE 2 · RESTORE</span>
          </div>

          <!-- Settings restore -->
          <div class="admin-backup-subcard">
            <div class="admin-ui-monolabel">SETTINGS · 還原設定</div>
            <div class="admin-backup-row">
              <label class="admin-backup-field">
                <span class="admin-ui-monolabel">JSON FILE</span>
                <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              </label>
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action admin-bk-action">Dry-run 預覽</button>
              <button type="button" class="admin-ui-action admin-bk-action" disabled title="即將支援 (需後端 endpoint)">套用</button>
            </div>
            <pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre>
            <p class="admin-backup-deferred-note">套用階段 — 即將支援 (需後端 endpoint)。目前僅可 client-side 解析預覽。</p>
          </div>

          <!-- Full pack restore (2026-05-19 — wired to /admin/backup/import) -->
          <div class="admin-backup-subcard">
            <div class="admin-ui-monolabel">FULL BACKUP · 還原 .tar.gz</div>
            <div class="admin-backup-row">
              <label class="admin-backup-field">
                <span class="admin-ui-monolabel">TARBALL · ≤ 16 MB</span>
                <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              </label>
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action admin-bk-action">Dry-run 預覽</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-action is-danger admin-bk-action" disabled title="先 dry-run 預覽後才能套用">套用</button>
            </div>
            <pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre>
            <p class="admin-backup-deferred-note">
              先 Dry-run 確認 manifest + 將被覆蓋的檔案；套用會原子化逐檔覆蓋
              <code>runtime/ · effects/ · plugins/ · user_plugins/</code>。<br>
              <b>建議套用前先下載目前快照</b>，作為復原備案。
            </p>
          </div>
        </div>

        <!-- Zone 3 · Danger -->
        <div class="admin-ui-card admin-backup-zone is-danger" data-zone="danger">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <span class="admin-v2-dot is-bad"></span>
            <span class="admin-ui-monolabel" style="color:var(--hud-crimson)">ZONE 3 · DANGER</span>
          </div>

          <!-- Clear history -->
          <div class="admin-backup-subcard">
            <div class="admin-ui-monolabel">CLEAR HISTORY · 清除彈幕歷史</div>
            <div class="admin-backup-row">
              <label class="admin-backup-field">
                <span class="admin-ui-monolabel">RANGE</span>
                <select id="bk2-clear-scope" class="admin-ui-select">
                  <option value="all" selected>全部</option>
                </select>
              </label>
              <div class="admin-backup-desc">清除所有彈幕歷史。此動作無法復原。</div>
              <button type="button" id="bk2-clear-history" class="admin-ui-action is-danger admin-bk-action">清除</button>
            </div>
          </div>

          <!-- End session -->
          <div class="admin-backup-subcard">
            <div class="admin-ui-monolabel">END SESSION · 結束管理工作階段</div>
            <div class="admin-backup-row">
              <div class="admin-backup-desc">登出目前管理員,不影響 Desktop / viewer 連線。</div>
              <button type="button" id="bk2-end-session" class="admin-ui-action is-danger admin-bk-action">END SESSION</button>
            </div>
          </div>

          <!-- Factory reset (deferred) -->
          <div class="admin-backup-subcard is-deferred">
            <div class="admin-ui-monolabel">FACTORY RESET · 回復原廠 (即將支援)</div>
            <div class="admin-backup-row">
              <label class="admin-backup-field">
                <span class="admin-ui-monolabel">輸入 <code>reset</code> 以確認</span>
                <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              </label>
              <div class="admin-backup-desc">即將支援 — 目前請手動刪除 <code>server/runtime/</code> 後重啟。</div>
              <button type="button" id="bk2-factory-reset" class="admin-ui-action is-danger admin-bk-action" disabled>FACTORY RESET</button>
            </div>
          </div>
        </div>
      </div>`;
  }

  // ---- Zone 1 · Export ----

  function downloadHistory() {
    const hours = document.getElementById("bk2-hist-hours").value || "24";
    const format = document.getElementById("bk2-hist-format").value || "json";
    // Browser follows Content-Disposition from /admin/history/export.
    const a = document.createElement("a");
    a.href = "/admin/history/export?hours=" + encodeURIComponent(hours) + "&format=" + encodeURIComponent(format);
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
    // v5 (2026-05-19): full-state pack export/import wired to backup.py
    document.getElementById("bk2-pack-export")?.addEventListener("click", exportFullPack);
    document.getElementById("bk2-pack-dryrun")?.addEventListener("click", dryRunFullPack);
    document.getElementById("bk2-pack-apply")?.addEventListener("click", applyFullPack);
    bindFactoryConfirm();
    // Hydrate the "計算備份大小中…" line via manifest preview.
    fetchPackSummary();
  }

  // ── Full-pack helpers ─────────────────────────────────────────────

  // The decoded dry-run result, stashed so the Apply button knows what
  // file to actually POST (it's a Blob from the picker, can't be re-read).
  let _pendingPackFile = null;

  async function fetchPackSummary() {
    const el = document.getElementById("bk2-pack-summary");
    if (!el) return;
    try {
      const r = await fetch("/admin/backup/manifest", { credentials: "same-origin" });
      if (!r.ok) {
        el.textContent = "預覽不可用";
        return;
      }
      const j = await r.json();
      const mb = (j.total_bytes / (1024 * 1024)).toFixed(2);
      el.innerHTML =
        '<b>' + (j.file_count || 0) + '</b> 檔案 · 約 <b>' + mb + '</b> MB（壓縮前）';
    } catch (_) {
      el.textContent = "預覽失敗 · 網路錯誤";
    }
  }

  function exportFullPack() {
    // Navigate to the streaming endpoint — browser handles the download
    // headers (Content-Disposition: attachment; filename=...).
    window.location.href = "/admin/backup/export";
    window.showToast?.("正在下載完整快照…", true);
  }

  async function dryRunFullPack() {
    const input = document.getElementById("bk2-pack-upload");
    const file = input?.files?.[0];
    if (!file) {
      window.showToast?.("請先選擇 .tar.gz 檔案", false);
      return;
    }
    if (file.size > 16 * 1024 * 1024) {
      window.showToast?.("檔案超過 16 MB", false);
      return;
    }
    const fd = new FormData();
    fd.append("file", file);
    const out = document.getElementById("bk2-pack-diff");
    const applyBtn = document.getElementById("bk2-pack-apply");
    try {
      const r = await window.csrfFetch("/admin/backup/import?dry_run=true", {
        method: "POST",
        body: fd,
      });
      const result = await r.json().catch(() => ({}));
      if (!r.ok || !result.ok) {
        if (out) {
          out.hidden = false;
          out.textContent = "驗證失敗\n" + JSON.stringify(result.errors || result, null, 2);
        }
        window.showToast?.("Dry-run 失敗", false);
        if (applyBtn) applyBtn.disabled = true;
        _pendingPackFile = null;
        return;
      }
      // Success — show member list + enable apply
      if (out) {
        out.hidden = false;
        const lines = [];
        const m = result.manifest || {};
        lines.push("manifest version: " + (m.version || "?"));
        lines.push("generated_at: " + (m.generated_at ? new Date(m.generated_at * 1000).toISOString() : "—"));
        lines.push("");
        lines.push("Will write " + (result.members?.length || 0) + " files:");
        (result.members || []).forEach((m) => {
          lines.push("  " + m.label + "/" + m.path.split("/").slice(1).join("/") +
                     " (" + (m.size || 0) + " B)");
        });
        if (result.skipped?.length) {
          lines.push("");
          lines.push("Skipped " + result.skipped.length + " entries:");
          result.skipped.forEach((s) => lines.push("  " + s.path + " — " + s.reason));
        }
        out.textContent = lines.join("\n");
      }
      _pendingPackFile = file;
      if (applyBtn) {
        applyBtn.disabled = false;
        applyBtn.title = "已通過 dry-run，可套用";
      }
      window.showToast?.("Dry-run 通過 · " + (result.members?.length || 0) + " 檔案待寫入", true);
    } catch (e) {
      window.showToast?.("Dry-run 錯誤：" + (e.message || ""), false);
    }
  }

  async function applyFullPack() {
    if (!_pendingPackFile) {
      window.showToast?.("請先 Dry-run 通過後再套用", false);
      return;
    }
    if (!confirm(
      "套用備份會覆蓋目前的 runtime/, effects/, plugins/, user_plugins/ — " +
      "套用前已下載目前快照作為復原備案了嗎？"
    )) return;
    const fd = new FormData();
    fd.append("file", _pendingPackFile);
    try {
      const r = await window.csrfFetch("/admin/backup/import", {
        method: "POST",
        body: fd,
      });
      const result = await r.json().catch(() => ({}));
      const out = document.getElementById("bk2-pack-diff");
      if (out) {
        out.hidden = false;
        const lines = [];
        if (result.ok) {
          lines.push("✓ 套用完成");
          lines.push("");
          lines.push("Applied " + (result.applied || 0) + " files");
          if (result.skipped?.length) {
            lines.push("Skipped " + result.skipped.length + " (see above)");
          }
        } else {
          lines.push("✗ 套用失敗");
          lines.push(JSON.stringify(result.errors || result, null, 2));
        }
        out.textContent = lines.join("\n");
      }
      if (result.ok) {
        window.showToast?.("已套用 " + result.applied + " 檔案 · 請重啟服務以重載 .dme / plugins", true);
        _pendingPackFile = null;
        const applyBtn = document.getElementById("bk2-pack-apply");
        if (applyBtn) applyBtn.disabled = true;
      } else {
        window.showToast?.("套用失敗", false);
      }
    } catch (e) {
      window.showToast?.("套用錯誤：" + (e.message || ""), false);
    }
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
