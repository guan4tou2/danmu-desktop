/**
 * Admin · Moderation Actions — 共用的業務操作層 (2026-10-29)
 *
 * 為什麼要有這一層：同一個業務操作（封鎖關鍵字／封鎖指紋／撤下單則）過去
 * 在訊息流、訊息詳情抽屜、（已刪除的）Dashboard 快速操作裡**各自實作**，
 * 各自決定打哪支 API、用哪份確認文案。下場就是外部審查抓到的那顆地雷：
 * Dashboard 把 `fp:<fingerprint>` 餵給**文字關鍵字**黑名單 API，收到 200、
 * 顯示成功，實際上沒有封鎖任何人。
 *
 * 這層的契約：
 *   · 低階 `call*` — 只負責呼叫正確的 API、回傳 {ok, error}，不確認、不提示。
 *     給已經有自己的確認 UI 的呼叫端（抽屜的封禁時長對話框）。
 *   · 高階 `block*` — 確認（HudConfirm）＋呼叫＋toast，一個操作一份文案。
 *     給「按下去就該走完」的入口（訊息流 hover／鍵盤／手機滑動）。
 *   · 所有成功提示走本層的 i18n 文案——後端 /admin/live/block 回傳的
 *     message 是硬編英文，不採用。
 *
 * UI 只負責顯示與自己的本地狀態（例如訊息流把列標成 muted）。
 *
 * Globals: window.csrfFetch, window.HudConfirm, window.showToast, window.ServerI18n
 */
(function () {
  "use strict";

  var FP_DISPLAY_LEN = 8;
  var KEYWORD_DISPLAY_LEN = 30;

  function t(key, params) {
    return window.ServerI18n ? window.ServerI18n.t(key, params) : key;
  }

  function truncate(s, len) {
    if (!s) return "";
    return s.length > len ? s.slice(0, len) + "\u2026" : s;
  }

  function _label(type) {
    return t(type === "keyword" ? "blockLabelKeyword" : "blockLabelFingerprint");
  }

  function _display(type, value) {
    return type === "keyword" ? truncate(value, KEYWORD_DISPLAY_LEN) : value.slice(0, FP_DISPLAY_LEN);
  }

  // ── 低階：API 呼叫，不確認、不提示 ─────────────────────────────────────

  /**
   * POST /admin/live/block — 永久規則（keyword 或 fingerprint）。
   * @returns {Promise<{ok: boolean, error?: string}>}
   */
  async function callBlock(type, value, reason) {
    if (!value) return { ok: false, error: "empty-value" };
    try {
      var body = { type: type === "keyword" ? "keyword" : "fingerprint", value: value };
      if (reason) body.reason = reason;
      var resp = await window.csrfFetch("/admin/live/block", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!resp.ok) return { ok: false, error: "HTTP " + resp.status };
      return { ok: true };
    } catch (err) {
      return { ok: false, error: (err && err.message) || "network" };
    }
  }

  /**
   * POST /admin/mod/bans/add — 有時限的封禁（到期自動失效）。
   * 永久封鎖請走 callBlock("fingerprint", …)：兩者的差別是前者不會自己失效。
   * @returns {Promise<{ok: boolean, error?: string}>}
   */
  async function banFingerprint(fp, seconds, reason) {
    if (!fp) return { ok: false, error: "empty-fingerprint" };
    var s = parseInt(seconds || 0, 10) || 0;
    try {
      var resp = await window.csrfFetch("/admin/mod/bans/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          target_kind: "fingerprint",
          target: fp,
          duration_s: s,
          reason: reason || "",
          kind: "ban",
        }),
      });
      if (!resp.ok) return { ok: false, error: "HTTP " + resp.status };
      return { ok: true };
    } catch (err) {
      return { ok: false, error: (err && err.message) || "network" };
    }
  }

  /**
   * POST /admin/overlay/recall — 把單一則彈幕從大螢幕拿掉。
   * 不寫入任何規則；訊息已飛出畫面時是 no-op，可安全重送。
   * @returns {Promise<{ok: boolean, error?: string}>}
   */
  async function recall(messageId) {
    if (!messageId) return { ok: false, error: "empty-message-id" };
    try {
      var resp = await window.csrfFetch("/admin/overlay/recall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message_id: messageId }),
      });
      if (!resp.ok) return { ok: false, error: "HTTP " + resp.status };
      return { ok: true };
    } catch (err) {
      return { ok: false, error: (err && err.message) || "network" };
    }
  }

  // ── 高階：確認 ＋ 呼叫 ＋ 提示 ──────────────────────────────────────────

  function _confirmBlock(type, value) {
    // Fail-closed：確認元件沒載入時不能跳過確認直接封鎖——封鎖會持續影響後續訊息。
    if (!window.HudConfirm) {
      if (window.showToast) window.showToast(t("blockFailed"), false);
      return Promise.resolve(false);
    }
    return window.HudConfirm.open({
      icon: "⊘",
      title: t("lfBlockTitle"),
      subtitle: t("cfmSubBlockFuture"),
      severity: "danger",
      bodyText: t("blockConfirm")
        .replace("{label}", _label(type))
        .replace("{display}", _display(type, value)),
      confirmLabel: t("lfBlockTitle"),
    });
  }

  function _toastResult(ok, fallbackKey, detail) {
    if (!window.showToast) return;
    window.showToast(ok ? t(fallbackKey, detail || {}) : t("blockFailed"), !!ok);
  }

  /**
   * 封鎖關鍵字（永久規則）。確認＋呼叫＋提示。
   * @param {string} value
   * @param {{skipConfirm?: boolean}} [opts]
   * @returns {Promise<boolean>}
   */
  async function blockKeyword(value, opts) {
    if (!value) return false;
    opts = opts || {};
    if (!opts.skipConfirm && !(await _confirmBlock("keyword", value))) return false;
    var result = await callBlock("keyword", value);
    _toastResult(result.ok, "blockFallback", {
      label: _label("keyword"),
      display: _display("keyword", value),
    });
    return result.ok;
  }

  /**
   * 封鎖指紋（永久規則，不會自己失效）。確認＋呼叫＋提示。
   * @param {string} fp
   * @param {{skipConfirm?: boolean, reason?: string}} [opts]
   * @returns {Promise<boolean>}
   */
  async function blockFingerprint(fp, opts) {
    if (!fp) return false;
    opts = opts || {};
    if (!opts.skipConfirm && !(await _confirmBlock("fingerprint", fp))) return false;
    var result = await callBlock("fingerprint", fp, opts.reason);
    _toastResult(result.ok, "blockFallback", {
      label: _label("fingerprint"),
      display: _display("fingerprint", fp),
    });
    return result.ok;
  }

  window.AdminModeration = {
    callBlock: callBlock,
    banFingerprint: banFingerprint,
    recall: recall,
    blockKeyword: blockKeyword,
    blockFingerprint: blockFingerprint,
  };
})();
