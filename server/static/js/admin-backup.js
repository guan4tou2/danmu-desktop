/**
 * Admin Backup & Export (P1-10) — dedicated Soft Holo HUD page.
 *
 * Three zones: Export · Restore · Danger. Settings export is assembled
 * client-side from GET /get_settings (no dedicated export endpoint exists yet).
 *
 * Endpoints used:
 *   GET  /admin/history/export?hours=N&format=json|csv|srt
 *        → timeline download (server Content-Disposition)
 *   POST /admin/history/clear            → clear all danmu history
 *   GET  /get_settings                   → raw settings dump for client-side snapshot
 *   POST /admin/settings/restore         → apply settings JSON snapshot
 *   GET  /admin/backup/export            → full runtime/effects/plugins pack
 *   POST /admin/backup/import            → dry-run/apply full pack
 *   GET  /admin/backup/assets/export     → uploaded media asset pack
 *   POST /admin/backup/assets/import     → dry-run/apply asset pack
 *   POST /admin/backup/factory-reset     → reset runtime state files
 *   POST /logout                         → ends current admin session
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
    // v8（2026-08-19 設計稿 07）：ZONE 1/2/3 的 mono 標籤網格改成設定群組
    // 卡片。原本每個 subcard 都掛一條「SETTINGS · 設定快照」式的雙語
    // mono 標籤，讀起來像機器日誌而不是給主持人看的介面。
    //
    // 與設計稿的一處刻意差異：稿上「還原」是單一拖放區，靠副檔名自動
    // 判斷。這裡保留三個獨立流程——後端是三個不同 endpoint，而完整備份
    // 與素材包都是 .tar.gz，前端無法從副檔名分辨；猜錯會把素材包當完整
    // 備份套用而覆蓋設定。寧可多一列，不要有誤套的可能。
    const t = (k) => ServerI18n.t(k);
    return `
      <div id="${PAGE_ID}" class="admin-backup-page hud-page-stack lg:col-span-2" data-tpl="C">
        <div class="admin-ui-page-head">
          <h2 class="admin-ui-page-title">${t("backupPageTitle")}</h2>
          <p class="admin-ui-page-note">${t("backupPageNote")}</p>
          <!-- 2026-09-07：搬回頁首裡。頁首被併進 topbar 時，shell 的
               [data-route-action] 插槽會把這一塊接過去（見 admin.js 的
               _dedupSectionTitles），不會再跟著消失。 -->
          <div class="admin-ui-inline-toolbar admin-ui-page-actions">
            <button type="button" id="bk2-pack-export" class="admin-ui-action is-primary">${t("backupPackExportBtn")}</button>
          </div>
        </div>

        <div class="admin-ui-group-label">${t("backupGroupDownload")}</div>
        <div class="admin-ui-group" data-zone="export">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecFullState")}
              <span class="sub" id="bk2-pack-summary">${t("backupCalculatingSize")}</span>
              <span class="sub" id="bk2-pack-detail">${t("backupPackContentList")}</span>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecSettingsSnap")}
              <span class="sub">${t("backupSettingsSnapshotDesc")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-settings-download" class="admin-ui-action is-primary">${t("backupDownloadBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecAssetPack")}
              <span class="sub" id="bk2-assets-summary">${t("backupCalculatingAssetSize")}</span>
              <span class="sub" id="bk2-assets-detail">${t("backupAssetContentList")}</span>
            </span>
            <span class="val">
              <button type="button" id="bk2-assets-export" class="admin-ui-action is-primary">${t("backupAssetsExportBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecHistory")}</span>
            <span class="val">
              <select id="bk2-hist-hours" class="admin-ui-select">
                <option value="1">${t("backupRangeLast1h")}</option>
                <option value="6">${t("backupRangeLast6h")}</option>
                <option value="24" selected>${t("backupRangeLast24h")}</option>
                <option value="168">${t("backupRangeLast7d")}</option>
                <option value="720">${t("backupRangeLast30d")}</option>
              </select>
              <select id="bk2-hist-format" class="admin-ui-select">
                <option value="json">${t("backupFormatJson")}</option>
                <option value="csv">${t("backupFormatCsv")}</option>
                <option value="srt">${t("backupFormatSrt")}</option>
              </select>
              <button type="button" id="bk2-hist-download" class="admin-ui-action is-primary">${t("backupDownloadBtn")}</button>
            </span>
          </div>
        </div>

        <div class="admin-ui-group-label">${t("backupGroupRestore")}</div>
        <div class="admin-ui-group" data-zone="restore">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecRestoreSettings")}
              <span class="sub">${t("backupSettingsRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-settings-upload" type="file" accept="application/json,.json" class="admin-ui-input" />
              <button type="button" id="bk2-settings-dryrun" class="admin-ui-action">${t("backupDryRunBtn")}…</button>
              <button type="button" id="bk2-settings-apply" class="admin-ui-danger-btn" disabled title="${t("backupApplyDisabledTitle")}">${t("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-settings-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecRestoreFull")}
              <span class="sub">${t("backupFullPackRestoreNote")}</span>
              <span class="sub">${t("backupRestoreBeforeApplyHint")}</span>
            </span>
            <span class="val">
              <input id="bk2-pack-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-pack-dryrun" class="admin-ui-action">${t("backupDryRunBtn")}…</button>
              <button type="button" id="bk2-pack-apply" class="admin-ui-danger-btn" disabled title="${t("backupApplyDisabledTitle")}">${t("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-pack-diff" class="admin-backup-diff" hidden></pre></div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecRestoreAssets")}
              <span class="sub">${t("backupAssetRestoreNote")}</span>
            </span>
            <span class="val">
              <input id="bk2-assets-upload" type="file" accept=".tar.gz,application/gzip,application/x-gzip" class="admin-ui-input" />
              <button type="button" id="bk2-assets-dryrun" class="admin-ui-action">${t("backupDryRunBtn")}…</button>
              <button type="button" id="bk2-assets-apply" class="admin-ui-danger-btn" disabled title="${t("backupApplyDisabledTitle")}">${t("backupApplyBtn")}</button>
            </span>
          </div>
          <div class="admin-ui-group-row"><pre id="bk2-assets-diff" class="admin-backup-diff" hidden></pre></div>
        </div>

        <div class="admin-ui-danger-label">${t("backupGroupDanger")}</div>
        <div class="admin-ui-group is-danger" data-zone="danger">
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecClearHistory")}
              <span class="sub">${t("backupClearHistoryDesc")}</span>
            </span>
            <span class="val">
              <select id="bk2-clear-scope" class="admin-ui-select">
                <option value="all" selected>${t("backupClearScopeAll")}</option>
              </select>
              <button type="button" id="bk2-clear-history" class="admin-ui-danger-btn">${t("backupClearBtn")}…</button>
            </span>
          </div>
          <div class="admin-ui-group-row is-tall">
            <span class="lbl">${t("backupSecFactoryReset")}
              <span class="sub">${t("backupFactoryResetDesc")}</span>
            </span>
            <span class="val">
              <input id="bk2-factory-confirm" type="text" class="admin-ui-input" placeholder="reset" autocomplete="off" spellcheck="false" />
              <button type="button" id="bk2-factory-reset" class="admin-ui-danger-btn" disabled>${t("backupFactoryResetBtn")}…</button>
            </span>
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
      window.showToast && showToast(ServerI18n.t("backupSettingsSnapshotDownloaded"), true);
    } catch (e) {
      console.error("Settings snapshot error:", e);
      window.showToast && showToast(ServerI18n.t("backupSnapshotFailed"), false);
    }
  }

  // ---- Zone 2 · Restore ----

  let _pendingSettingsPayload = null;

  function resetSettingsApplyButton() {
    _pendingSettingsPayload = null;
    const applyBtn = document.getElementById("bk2-settings-apply");
    if (!applyBtn) return;
    applyBtn.disabled = true;
    applyBtn.title = ServerI18n.t("backupApplyDisabledTitle");
  }

  async function dryRunSettings() {
    const fileInput = document.getElementById("bk2-settings-upload");
    const diffEl = document.getElementById("bk2-settings-diff");
    const applyBtn = document.getElementById("bk2-settings-apply");
    const file = fileInput && fileInput.files && fileInput.files[0];
    if (!file) {
      resetSettingsApplyButton();
      window.showToast && showToast(ServerI18n.t("backupSelectJsonFirst"), false);
      return;
    }
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const uploaded = parsed.settings || parsed;
      if (!uploaded || typeof uploaded !== "object" || Array.isArray(uploaded)) {
        throw new Error(ServerI18n.t("backupSettingsMustBeObject"));
      }
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
        : ServerI18n.t("backupNoDiff");
      diffEl.hidden = false;
      _pendingSettingsPayload = uploaded;
      if (applyBtn) {
        applyBtn.disabled = false;
        applyBtn.title = ServerI18n.t("backupApplyEnabledTitle");
      }
      window.showToast && showToast(ServerI18n.t("backupDiffCount", { n: diff.length }), true);
    } catch (e) {
      console.error("Dry-run error:", e);
      resetSettingsApplyButton();
      diffEl.textContent = ServerI18n.t("backupParseFailedDetail", { msg: e && e.message ? e.message : String(e) });
      diffEl.hidden = false;
      window.showToast && showToast(ServerI18n.t("backupParseFailed"), false);
    }
  }

  async function applySettings() {
    const diffEl = document.getElementById("bk2-settings-diff");
    const applyBtn = document.getElementById("bk2-settings-apply");
    if (!_pendingSettingsPayload) {
      window.showToast && showToast(ServerI18n.t("backupDryRunFirst"), false);
      return;
    }
    const ok = await window.HudConfirm?.open({
      icon: "⚠",
      title: ServerI18n.t("backupApplySettingsConfirmTitle"),
      subtitle: "RESTORE SETTINGS · OVERWRITES MATCHING KEYS",
      severity: "warn",
      body: ServerI18n.t("backupApplySettingsConfirmBody"),
      confirmLabel: ServerI18n.t("backupApplyBtn"),
    });
    if (!ok) return;

    try {
      const res = await window.csrfFetch("/admin/settings/restore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings: _pendingSettingsPayload }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (diffEl) {
          diffEl.hidden = false;
          diffEl.textContent = ServerI18n.t("backupApplyFailedDetail", { details: JSON.stringify(result.details || result, null, 2) });
        }
        window.showToast && showToast(ServerI18n.t("backupSettingsApplyFailed"), false);
        return;
      }

      if (diffEl) {
        diffEl.hidden = false;
        diffEl.textContent = ServerI18n.t("backupApplyCompleteHeader") + "\nApplied " + (result.applied || []).length + " settings";
      }
      _pendingSettingsPayload = null;
      if (applyBtn) {
        applyBtn.disabled = true;
        applyBtn.title = ServerI18n.t("backupApplyDisabledTitle");
      }
      window.showToast && showToast(ServerI18n.t("backupSettingsApplied"), true);
    } catch (e) {
      if (diffEl) {
        diffEl.hidden = false;
        diffEl.textContent = ServerI18n.t("backupApplyErrorDetail", { msg: e && e.message ? e.message : String(e) });
      }
      window.showToast && showToast(ServerI18n.t("backupNetworkError"), false);
    }
  }

  // ---- Zone 3 · Danger ----

  async function clearHistory() {
    const ok = await window.HudConfirm?.open({
      icon: "⊘",
      title: ServerI18n.t("backupClearHistoryConfirmTitle"),
      subtitle: "CLEAR HISTORY · THIS ACTION CANNOT BE UNDONE",
      severity: "danger",
      body: ServerI18n.t("backupClearHistoryConfirmBody"),
      confirmLabel: ServerI18n.t("backupClearHistoryConfirmLabel"),
    });
    if (!ok) return;
    try {
      const res = await window.csrfFetch("/admin/history/clear", { method: "POST" });
      if (res.ok) {
        window.showToast && showToast(ServerI18n.t("backupHistoryCleared"), true);
      } else {
        window.showToast && showToast(ServerI18n.t("backupClearFailed"), false);
      }
    } catch (e) {
      window.showToast && showToast(ServerI18n.t("backupNetworkError"), false);
    }
  }


  function bindFactoryConfirm() {
    const input = document.getElementById("bk2-factory-confirm");
    const btn = document.getElementById("bk2-factory-reset");
    if (!input || !btn) return;
    input.addEventListener("input", () => {
      const typed = input.value.trim() === "reset";
      btn.classList.toggle("is-ready", typed);
      btn.disabled = !typed;
    });
    btn.addEventListener("click", factoryReset);
  }

  async function factoryReset() {
    const input = document.getElementById("bk2-factory-confirm");
    const btn = document.getElementById("bk2-factory-reset");
    if ((input?.value || "").trim() !== "reset") {
      window.showToast && showToast(ServerI18n.t("backupEnterResetToConfirm"), false);
      return;
    }
    const ok = await window.HudConfirm?.open({
      icon: "⊘",
      title: "Factory reset",
      subtitle: "FACTORY RESET · WIPES RUNTIME STATE AND QUEUE",
      severity: "danger",
      body: ServerI18n.t("backupFactoryResetConfirmBody"),
      confirmLabel: ServerI18n.t("backupFactoryResetConfirmLabel"),
    });
    if (!ok) return;
    try {
      if (btn) btn.disabled = true;
      const res = await window.csrfFetch("/admin/backup/factory-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirm: "reset" }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.ok) {
        window.showToast && showToast(ServerI18n.t("backupFactoryResetFailed"), false);
        if (btn) btn.disabled = false;
        return;
      }
      if (input) input.value = "";
      if (btn) {
        btn.classList.remove("is-ready");
        btn.disabled = true;
      }
      window.showToast && showToast(ServerI18n.t("backupFactoryResetDone"), true);
      fetchPackSummary();
    } catch (e) {
      if (btn) btn.disabled = false;
      window.showToast && showToast(ServerI18n.t("backupFactoryResetNetworkError"), false);
    }
  }

  function bind() {
    document.getElementById("bk2-hist-download")?.addEventListener("click", downloadHistory);
    document.getElementById("bk2-settings-download")?.addEventListener("click", downloadSettingsSnapshot);
    document.getElementById("bk2-settings-dryrun")?.addEventListener("click", dryRunSettings);
    document.getElementById("bk2-settings-apply")?.addEventListener("click", applySettings);
    document.getElementById("bk2-clear-history")?.addEventListener("click", clearHistory);
    // v5 (2026-05-19): full-state pack export/import wired to backup.py
    document.getElementById("bk2-pack-export")?.addEventListener("click", exportFullPack);
    document.getElementById("bk2-pack-dryrun")?.addEventListener("click", dryRunFullPack);
    document.getElementById("bk2-pack-apply")?.addEventListener("click", applyFullPack);
    document.getElementById("bk2-assets-export")?.addEventListener("click", exportAssetPack);
    document.getElementById("bk2-assets-dryrun")?.addEventListener("click", dryRunAssetPack);
    document.getElementById("bk2-assets-apply")?.addEventListener("click", applyAssetPack);
    bindFactoryConfirm();
    // Hydrate the "計算備份大小中…" line via manifest preview.
    fetchPackSummary();
    fetchAssetPackSummary();
  }

  // ── Full-pack helpers ─────────────────────────────────────────────

  // The decoded dry-run result, stashed so the Apply button knows what
  // file to actually POST (it's a Blob from the picker, can't be re-read).
  let _pendingPackFile = null;
  let _pendingAssetPackFile = null;

  async function fetchPackSummary() {
    const el = document.getElementById("bk2-pack-summary");
    if (!el) return;
    try {
      const r = await fetch("/admin/backup/manifest", { credentials: "same-origin" });
      if (!r.ok) {
        el.textContent = ServerI18n.t("backupPreviewUnavailable");
        return;
      }
      const j = await r.json();
      const mb = (j.total_bytes / (1024 * 1024)).toFixed(2);
      el.innerHTML = ServerI18n.t("backupPackSizeSummary", { count: j.file_count || 0, mb: mb });
    } catch (_) {
      el.textContent = ServerI18n.t("backupPreviewFailedNetwork");
    }
  }

  function exportFullPack() {
    // Navigate to the streaming endpoint — browser handles the download
    // headers (Content-Disposition: attachment; filename=...).
    window.location.href = "/admin/backup/export";
    window.showToast?.(ServerI18n.t("backupDownloadingFullSnapshot"), true);
  }

  async function fetchAssetPackSummary() {
    const el = document.getElementById("bk2-assets-summary");
    if (!el) return;
    try {
      const r = await fetch("/admin/backup/assets/manifest", { credentials: "same-origin" });
      if (!r.ok) {
        el.textContent = ServerI18n.t("backupAssetPreviewUnavailable");
        return;
      }
      const j = await r.json();
      const mb = (j.total_bytes / (1024 * 1024)).toFixed(2);
      el.innerHTML = ServerI18n.t("backupPackSizeSummary", { count: j.file_count || 0, mb: mb });
    } catch (_) {
      el.textContent = ServerI18n.t("backupAssetPreviewFailedNetwork");
    }
  }

  function exportAssetPack() {
    window.location.href = "/admin/backup/assets/export";
    window.showToast?.(ServerI18n.t("backupDownloadingAssetPack"), true);
  }

  async function dryRunFullPack() {
    const input = document.getElementById("bk2-pack-upload");
    const file = input?.files?.[0];
    if (!file) {
      window.showToast?.(ServerI18n.t("backupSelectTarGzFirst"), false);
      return;
    }
    if (file.size > 16 * 1024 * 1024) {
      window.showToast?.(ServerI18n.t("backupFileOver16MB"), false);
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
          out.textContent = ServerI18n.t("backupValidateFailedDetail", { details: JSON.stringify(result.errors || result, null, 2) });
        }
        window.showToast?.(ServerI18n.t("backupDryRunFailed"), false);
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
        applyBtn.title = ServerI18n.t("backupApplyEnabledTitle");
      }
      window.showToast?.(ServerI18n.t("backupDryRunPassedCount", { n: result.members?.length || 0 }), true);
    } catch (e) {
      window.showToast?.(ServerI18n.t("backupDryRunErrorDetail", { msg: e.message || "" }), false);
    }
  }

  async function applyFullPack() {
    if (!_pendingPackFile) {
      window.showToast?.(ServerI18n.t("backupDryRunFirst"), false);
      return;
    }
    const ok = await window.HudConfirm?.open({
      icon: "⚠",
      title: ServerI18n.t("backupApplyFullPackConfirmTitle"),
      subtitle: "RESTORE PACK · OVERWRITES RUNTIME AND ASSETS",
      severity: "danger",
      body: ServerI18n.t("backupApplyFullPackConfirmBody"),
      confirmLabel: ServerI18n.t("backupApplyPackConfirmLabel"),
    });
    if (!ok) return;
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
          lines.push("✓ " + ServerI18n.t("backupApplyCompleteHeader"));
          lines.push("");
          lines.push("Applied " + (result.applied || 0) + " files");
          if (result.skipped?.length) {
            lines.push("Skipped " + result.skipped.length + " (see above)");
          }
        } else {
          lines.push("✗ " + ServerI18n.t("backupApplyFailedHeader"));
          lines.push(JSON.stringify(result.errors || result, null, 2));
        }
        out.textContent = lines.join("\n");
      }
      if (result.ok) {
        window.showToast?.(ServerI18n.t("backupPackAppliedRestartHint", { n: result.applied }), true);
        _pendingPackFile = null;
        const applyBtn = document.getElementById("bk2-pack-apply");
        if (applyBtn) applyBtn.disabled = true;
      } else {
        window.showToast?.(ServerI18n.t("backupApplyFailedHeader"), false);
      }
    } catch (e) {
      window.showToast?.(ServerI18n.t("backupApplyErrorToast", { msg: e.message || "" }), false);
    }
  }

  async function dryRunAssetPack() {
    const input = document.getElementById("bk2-assets-upload");
    const file = input?.files?.[0];
    if (!file) {
      window.showToast?.(ServerI18n.t("backupSelectAssetTarGzFirst"), false);
      return;
    }
    if (file.size > 64 * 1024 * 1024) {
      window.showToast?.(ServerI18n.t("backupAssetPackOver64MB"), false);
      return;
    }
    const fd = new FormData();
    fd.append("file", file);
    const out = document.getElementById("bk2-assets-diff");
    const applyBtn = document.getElementById("bk2-assets-apply");
    try {
      const r = await window.csrfFetch("/admin/backup/assets/import?dry_run=true", {
        method: "POST",
        body: fd,
      });
      const result = await r.json().catch(() => ({}));
      if (!r.ok || !result.ok) {
        if (out) {
          out.hidden = false;
          out.textContent = ServerI18n.t("backupAssetValidateFailedDetail", { details: JSON.stringify(result.errors || result, null, 2) });
        }
        window.showToast?.(ServerI18n.t("backupAssetDryRunFailed"), false);
        if (applyBtn) applyBtn.disabled = true;
        _pendingAssetPackFile = null;
        return;
      }
      if (out) {
        out.hidden = false;
        const lines = [];
        const m = result.manifest || {};
        lines.push("manifest version: " + (m.version || "?"));
        lines.push("generated_at: " + (m.generated_at ? new Date(m.generated_at * 1000).toISOString() : "—"));
        lines.push("");
        lines.push("Will write " + (result.members?.length || 0) + " asset files:");
        (result.members || []).forEach((m) => {
          lines.push("  " + m.path + " (" + (m.size || 0) + " B)");
        });
        if (result.skipped?.length) {
          lines.push("");
          lines.push("Skipped " + result.skipped.length + " entries:");
          result.skipped.forEach((s) => lines.push("  " + s.path + " — " + s.reason));
        }
        out.textContent = lines.join("\n");
      }
      _pendingAssetPackFile = file;
      if (applyBtn) {
        applyBtn.disabled = false;
        applyBtn.title = ServerI18n.t("backupApplyEnabledTitle");
      }
      window.showToast?.(ServerI18n.t("backupAssetDryRunPassedCount", { n: result.members?.length || 0 }), true);
    } catch (e) {
      window.showToast?.(ServerI18n.t("backupAssetDryRunErrorDetail", { msg: e.message || "" }), false);
    }
  }

  async function applyAssetPack() {
    if (!_pendingAssetPackFile) {
      window.showToast?.(ServerI18n.t("backupDryRunFirst"), false);
      return;
    }
    const ok = await window.HudConfirm?.open({
      icon: "⚠",
      title: ServerI18n.t("backupApplyAssetPackConfirmTitle"),
      subtitle: "RESTORE ASSETS · OVERWRITES MATCHING FILES",
      severity: "warn",
      body: ServerI18n.t("backupApplyAssetPackConfirmBody"),
      confirmLabel: ServerI18n.t("backupApplyAssetPackConfirmTitle"),
    });
    if (!ok) return;
    const fd = new FormData();
    fd.append("file", _pendingAssetPackFile);
    try {
      const r = await window.csrfFetch("/admin/backup/assets/import", {
        method: "POST",
        body: fd,
      });
      const result = await r.json().catch(() => ({}));
      const out = document.getElementById("bk2-assets-diff");
      if (out) {
        out.hidden = false;
        const lines = [];
        if (result.ok) {
          lines.push("✓ " + ServerI18n.t("backupAssetApplyCompleteHeader"));
          lines.push("");
          lines.push("Applied " + (result.applied || 0) + " files");
          if (result.skipped?.length) {
            lines.push("Skipped " + result.skipped.length + " (see above)");
          }
        } else {
          lines.push("✗ " + ServerI18n.t("backupAssetApplyFailedHeader"));
          lines.push(JSON.stringify(result.errors || result, null, 2));
        }
        out.textContent = lines.join("\n");
      }
      if (result.ok) {
        window.showToast?.(ServerI18n.t("backupAssetPackApplied", { n: result.applied }), true);
        _pendingAssetPackFile = null;
        const applyBtn = document.getElementById("bk2-assets-apply");
        if (applyBtn) applyBtn.disabled = true;
        fetchAssetPackSummary();
      } else {
        window.showToast?.(ServerI18n.t("backupAssetApplyFailedHeader"), false);
      }
    } catch (e) {
      window.showToast?.(ServerI18n.t("backupAssetApplyErrorToast", { msg: e.message || "" }), false);
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
