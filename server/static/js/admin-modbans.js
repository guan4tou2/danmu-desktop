/**
 * Admin · Time-Bound Bans page (design v4 brief 0518-2, 2026-05-18).
 *
 * Maps directly to admin-brief-0518.jsx BanDurationPicker + BanExpiresChips.
 *
 * Route: #/modbans
 * Page ID: sec-modbans-overview
 *
 * Backend: /admin/mod/bans/list (GET), /admin/mod/bans/add (POST),
 * /admin/mod/bans/remove (POST). Source of truth is audit_log.
 *
 * Also exposes a public picker API for other admin pages (fingerprints,
 * blacklist) to invoke without leaving their context:
 *
 *   window.ModBans.openPicker({
 *     target_kind: "fingerprint",  // | "ip" | "nick"
 *     target: "a3f200b1",
 *     kind: "ban",                  // | "mute"
 *   }).then(() => fetchActiveBans());
 *
 * Loaded as <script defer> in admin.html.
 */
(function () {
  "use strict";

  const PAGE_ID = "sec-modbans-overview";
  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // Five preset durations (seconds) — matches admin-brief-0518.jsx.
  // val=0 marks permanent.
  const PRESETS = [
    { label: "1h",  val: 3600 },
    { label: "6h",  val: 21600 },
    { label: "24h", val: 86400, defaultPick: true },
    { label: "7d",  val: 604800 },
    { label: "永久", val: 0, permanent: true },
  ];

  const KIND_ICONS = { fingerprint: "◉", ip: "⊙", nick: "@" };
  const KIND_LABELS = { fingerprint: "FP", ip: "IP", nick: "NICK" };

  let _state = { rows: [], refreshTimer: 0 };

  // ── data ────────────────────────────────────────────────────────────────
  async function _fetch() {
    try {
      const r = await fetch("/admin/mod/bans/list", { credentials: "same-origin" });
      if (!r.ok) return;
      const data = await r.json();
      _state.rows = Array.isArray(data.bans) ? data.bans : [];
      _renderList();
    } catch (_) { /* silent */ }
  }

  function _fmtRemaining(s) {
    if (!s || s <= 0) return "—";
    const d = Math.floor(s / 86400);
    const h = Math.floor((s % 86400) / 3600);
    const m = Math.floor((s % 3600) / 60);
    if (d > 0) return `${d}d ${h}h`;
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
  }

  function _fmtTarget(row) {
    const k = row.target_kind;
    if (k === "fingerprint") return `fp:${(row.target || "").slice(0, 8)}`;
    if (k === "nick")        return `@${row.target}`;
    return row.target || "—";
  }

  // ── ban list render ─────────────────────────────────────────────────────
  function _renderList() {
    const bodyEl = document.querySelector("[data-modbans-list]");
    if (!bodyEl) return;
    const rows = _state.rows || [];
    if (rows.length === 0) {
      bodyEl.innerHTML = '<div class="admin-modbans-empty">目前沒有 ban 記錄</div>';
      return;
    }
    bodyEl.innerHTML = rows.map(function (r) {
      const isExpired = r.status === "expired";
      const isPerm = r.status === "permanent";
      const chipClass = "admin-modbans-chip is-" + r.status;
      const chipText = isPerm
        ? "永久"
        : isExpired
          ? "已過期 · auto-unban"
          : `${_fmtRemaining(r.remaining_s)} 剩餘`;
      const targetKey = encodeURIComponent(r.target_kind) + "|" + encodeURIComponent(r.target);
      return `
        <div class="admin-modbans-row ${isExpired ? "is-expired" : ""}">
          <span class="admin-modbans-target">${escapeHtml(_fmtTarget(r))}</span>
          <span class="admin-modbans-kind">${escapeHtml(KIND_LABELS[r.target_kind] || r.target_kind)}</span>
          <span class="admin-modbans-reason">${escapeHtml(r.reason || "—")}</span>
          <span class="${chipClass}">
            ${r.status === "active" ? '<span class="admin-modbans-chip-pulse"></span>' : ""}
            ${escapeHtml(chipText)}
          </span>
          <button type="button" class="admin-modbans-unban" data-modbans-unban="${targetKey}"
            ${isExpired ? "disabled" : ""}
            title="${isExpired ? "已自動解封" : "解除封禁"}">
            ${isExpired ? "—" : "解封"}
          </button>
        </div>`;
    }).join("");
  }

  // ── picker modal ────────────────────────────────────────────────────────
  function openPicker(opts) {
    const o = opts || {};
    const target_kind = o.target_kind || "fingerprint";
    const target = o.target || "";
    const kind = o.kind || "ban";
    const helper = window.HudConfirm;

    return new Promise(function (resolve) {
      if (!helper || !target) { resolve(false); return; }

      let selectedDuration = 86400; // 24h default
      let isCustom = false;          // brief 0518-v2 #2: custom chip state
      let customValue = 12;          // default for "自訂" input
      let customUnit = "hour";       // "hour" | "day"

      const body = document.createElement("div");
      body.className = "admin-modbans-modal-body";
      body.innerHTML = `
        <div class="admin-modbans-modal-target">
          <span class="admin-modbans-modal-target-icon">${escapeHtml(KIND_ICONS[target_kind] || "?")}</span>
          <div>
            <div class="admin-ui-monolabel">${escapeHtml(KIND_LABELS[target_kind] || "?")} ${escapeHtml((kind || "ban").toUpperCase())}</div>
            <div class="admin-modbans-modal-target-val">${escapeHtml(_fmtTarget({ target_kind: target_kind, target: target }))}</div>
          </div>
        </div>
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">BAN DURATION</div>
          <div class="admin-modbans-modal-presets" data-modbans-presets>
            ${PRESETS.map(function (p) {
              const cls = "admin-modbans-modal-preset"
                + (p.defaultPick ? " is-active" : "")
                + (p.permanent ? " is-permanent" : "");
              return `<button type="button" class="${cls}" data-modbans-duration="${p.val}">${p.label}</button>`;
            }).join("")}
            <button type="button" class="admin-modbans-modal-preset is-custom" data-modbans-custom>自訂</button>
          </div>
          <!-- Custom duration input row — brief 0518-v2 #2 decision B.
               Hidden until 自訂 chip is selected. -->
          <div class="admin-modbans-modal-custom-row" data-modbans-custom-row hidden>
            <span class="admin-modbans-modal-custom-label">自訂</span>
            <input type="number" min="1" max="999" class="admin-modbans-modal-custom-input"
              data-modbans-custom-input value="12" />
            <div class="admin-modbans-modal-custom-units" data-modbans-custom-units>
              <button type="button" class="admin-modbans-modal-custom-unit is-active" data-modbans-custom-unit="hour">小時</button>
              <button type="button" class="admin-modbans-modal-custom-unit" data-modbans-custom-unit="day">天</button>
            </div>
            <span class="admin-modbans-modal-custom-spacer"></span>
            <span class="admin-modbans-modal-custom-seconds" data-modbans-custom-seconds>= 43,200s</span>
          </div>
          <div class="admin-modbans-modal-when" data-modbans-when></div>
        </div>
        <div class="admin-modbans-modal-row">
          <div class="admin-ui-monolabel">REASON（選填 · 記錄到 audit log）</div>
          <input type="text" class="admin-modbans-modal-reason" data-modbans-reason
            placeholder="e.g. 持續發送垃圾訊息" maxlength="200" />
        </div>
        <div class="admin-modbans-modal-hint">⚠ 限時 ban：到期後 reaper 自動解封 · 永久 ban 需手動解除</div>`;

      // ── Internal helpers (capture outer state) ────────────────────
      const customRow = body.querySelector("[data-modbans-custom-row]");
      const customInput = body.querySelector("[data-modbans-custom-input]");
      const customSecondsEl = body.querySelector("[data-modbans-custom-seconds]");
      const whenEl = body.querySelector("[data-modbans-when]");
      const customChipBtn = body.querySelector("[data-modbans-custom]");

      const computeCustomSeconds = function () {
        const v = Math.max(1, parseInt(customInput.value, 10) || 1);
        return v * (customUnit === "day" ? 86400 : 3600);
      };

      const updateWhen = function () {
        if (selectedDuration === 0) {
          whenEl.textContent = "永久封禁 · 無自動解封時間";
          whenEl.classList.remove("is-custom");
          return;
        }
        const at = new Date(Date.now() + selectedDuration * 1000);
        const pad = (n) => String(n).padStart(2, "0");
        const stamp = `${at.getFullYear()}-${pad(at.getMonth() + 1)}-${pad(at.getDate())} ${pad(at.getHours())}:${pad(at.getMinutes())}`;
        if (isCustom) {
          whenEl.textContent = `自訂 ${customValue} ${customUnit === "day" ? "天" : "小時"} · 將於 ${stamp} 自動解封`;
          whenEl.classList.add("is-custom");
        } else {
          whenEl.textContent = `選擇 ${_fmtRemaining(selectedDuration)} · 將於 ${stamp} 自動解封`;
          whenEl.classList.remove("is-custom");
        }
      };

      const refreshCustomSeconds = function () {
        const secs = computeCustomSeconds();
        customSecondsEl.textContent = `= ${secs.toLocaleString()}s`;
        if (isCustom) {
          customValue = Math.max(1, parseInt(customInput.value, 10) || 1);
          selectedDuration = secs;
          updateWhen();
        }
      };

      const enterCustom = function () {
        isCustom = true;
        customRow.hidden = false;
        body.querySelectorAll(".admin-modbans-modal-preset").forEach(function (b) {
          b.classList.toggle("is-active", b === customChipBtn);
        });
        refreshCustomSeconds();
      };

      const exitCustom = function (selectedPresetBtn) {
        isCustom = false;
        customRow.hidden = true;
        body.querySelectorAll(".admin-modbans-modal-preset").forEach(function (b) {
          b.classList.toggle("is-active", b === selectedPresetBtn);
        });
      };

      updateWhen();
      refreshCustomSeconds();

      // ── Click delegation ─────────────────────────────────────────
      body.addEventListener("click", function (e) {
        // Custom chip
        if (e.target.closest("[data-modbans-custom]")) {
          enterCustom();
          return;
        }
        // Custom unit toggle (小時 / 天)
        const unitBtn = e.target.closest("[data-modbans-custom-unit]");
        if (unitBtn) {
          customUnit = unitBtn.dataset.modbansCustomUnit || "hour";
          body.querySelectorAll("[data-modbans-custom-unit]").forEach(function (b) {
            b.classList.toggle("is-active", b === unitBtn);
          });
          refreshCustomSeconds();
          return;
        }
        // Preset chip
        const btn = e.target.closest("[data-modbans-duration]");
        if (!btn) return;
        selectedDuration = parseInt(btn.dataset.modbansDuration, 10) || 0;
        exitCustom(btn);
        updateWhen();
      });

      customInput.addEventListener("input", refreshCustomSeconds);

      const reasonInput = body.querySelector("[data-modbans-reason]");

      helper.open({
        icon: "⊘",
        title: "封禁",
        subtitle: "BAN · TIME-BOUND DURATION",
        severity: "danger",
        confirmLabel: "確認封禁",
        cancelLabel: "取消",
        body: body,
        width: 480,
      }).then(function (ok) {
        if (!ok) { resolve(false); return; }
        // Permanent → second confirm to avoid mis-clicks
        if (selectedDuration === 0) {
          helper.open({
            icon: "⚠",
            title: "確認永久封禁？",
            subtitle: "PERMANENT BAN · CANNOT AUTO-EXPIRE",
            severity: "warn",
            confirmLabel: "確認永久",
            cancelLabel: "返回",
            body: `將永久封禁 <b>${escapeHtml(_fmtTarget({ target_kind: target_kind, target: target }))}</b>。此後僅能手動解封。`,
          }).then(function (ok2) {
            if (!ok2) { resolve(false); return; }
            _submitBan(target_kind, target, selectedDuration, reasonInput.value.trim(), kind).then(resolve);
          });
        } else {
          _submitBan(target_kind, target, selectedDuration, reasonInput.value.trim(), kind).then(resolve);
        }
      });
    });
  }

  async function _submitBan(target_kind, target, duration_s, reason, kind) {
    try {
      const r = await (window.csrfFetch || fetch)("/admin/mod/bans/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({
          target_kind: target_kind,
          target: target,
          duration_s: duration_s,
          reason: reason || "",
          kind: kind || "ban",
        }),
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      if (window.showToast) {
        window.showToast(
          duration_s === 0 ? "已永久封禁" : `已封禁 ${_fmtRemaining(duration_s)}`,
          true,
        );
      }
      _fetch();
      return true;
    } catch (e) {
      if (window.showToast) window.showToast(`封禁失敗：${e.message || "未知"}`, false);
      return false;
    }
  }

  async function _unban(targetKey) {
    const parts = (targetKey || "").split("|");
    if (parts.length !== 2) return;
    const target_kind = decodeURIComponent(parts[0]);
    const target = decodeURIComponent(parts[1]);
    try {
      const r = await (window.csrfFetch || fetch)("/admin/mod/bans/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ target_kind: target_kind, target: target }),
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      if (window.showToast) window.showToast("已解除封禁", true);
      _fetch();
    } catch (e) {
      if (window.showToast) window.showToast(`解封失敗：${e.message || "未知"}`, false);
    }
  }

  // ── page shell ──────────────────────────────────────────────────────────
  function buildSection() {
    return `
      <div id="${PAGE_ID}" class="admin-modbans-page hud-page-stack lg:col-span-2">
        <div class="admin-v2-head">
          <div class="admin-v2-kicker">MODERATION · BANS · TIME-BOUND</div>
          <div class="admin-v2-title">封禁管理</div>
          <p class="admin-v2-note">時限封禁 / 永久封禁的統一管理。Source of truth = audit log；列表狀態 = 各 target 最後一筆事件。倒數到期由 client lazy-check（不跑 reaper thread）。</p>
        </div>
        <div class="admin-v2-card admin-modbans-card">
          <div class="admin-modbans-header">
            <span class="admin-ui-monolabel">TARGET</span>
            <span class="admin-ui-monolabel">KIND</span>
            <span class="admin-ui-monolabel">REASON</span>
            <span class="admin-ui-monolabel">STATUS</span>
            <span></span>
          </div>
          <div class="admin-modbans-list" data-modbans-list>
            <!-- skeleton injected by _bind() on first paint; see polestar
                 polish pass (2026-05-18) — replaces the "載入中…" flash
                 with a structural preview matching the row layout. -->
          </div>
        </div>
      </div>`;
  }

  function _bind() {
    const page = document.getElementById(PAGE_ID);
    if (!page || page.dataset.modbansBound === "1") return;
    page.dataset.modbansBound = "1";
    page.addEventListener("click", function (e) {
      const unbanBtn = e.target.closest("[data-modbans-unban]");
      if (unbanBtn && !unbanBtn.disabled) {
        _unban(unbanBtn.dataset.modbansUnban);
      }
    });
    // First-paint skeleton — replaced once _fetch resolves (renders rows
    // or empty state). Polestar polish 2026-05-18.
    const listEl = page.querySelector("[data-modbans-list]");
    if (listEl && window.AdminSkeletons && !listEl.children.length) {
      listEl.appendChild(window.AdminSkeletons.listRows({ rows: 4 }));
    }
  }

  function init() {
    const grid = document.getElementById("settings-grid");
    if (!grid || document.getElementById(PAGE_ID)) return;
    grid.insertAdjacentHTML("beforeend", buildSection());
    _bind();
    _fetch();
    if (!_state.refreshTimer) _state.refreshTimer = setInterval(_fetch, 30000);
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!(window.DANMU_CONFIG && window.DANMU_CONFIG.session && window.DANMU_CONFIG.session.logged_in)) return;
    const observer = new MutationObserver(function () {
      if (document.getElementById("settings-grid") && !document.getElementById(PAGE_ID)) {
        init();
      }
    });
    observer.observe(document.getElementById("app-container") || document.body, {
      childList: true, subtree: true,
    });
    if (document.getElementById("settings-grid")) init();
  });

  // Public API for other admin pages
  window.ModBans = {
    openPicker: openPicker,
    refreshList: _fetch,
    formatTarget: _fmtTarget,
    formatRemaining: _fmtRemaining,
  };
})();
