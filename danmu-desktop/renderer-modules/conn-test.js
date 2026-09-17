// ConnTest — finite state machine wrapping window.API.testConnection.
// Drives the conn page's ⚐ 測試 button + result chip (idle → testing →
// ok | fail). The chip labels match the design mirror's 4-state TestChip
// in `docs/designs/design-v2/components/desktop.jsx`.

// 2026-09-17：錯誤標籤原本是寫死的英文（`Connection failed`、
// `1008 Unauthorized`…），在中文介面上原樣顯示——設計稿 14 文案清掃漏掉的
// 一處。它不走 i18n，所以 locale 掃描抓不到。現在改成錯誤碼 → i18n key，
// 標籤在**讀取時**才翻譯，切語言後不會殘留舊語言。
//
// 設計稿 04「Token → 連線密碼」、14「不用技術碼當標籤」：`1008` 這種
// WebSocket close code 對主持人沒有意義，拿掉。
const _ERROR_KEYS = {
  unauthorized: "connErrUnauthorized",
  "connection-refused": "connErrRefused",
  "dns-failure": "connErrDns",
  timeout: "connErrTimeout",
  "tls-error": "connErrTls",
  "invalid-input": "connErrInvalidInput",
  unknown: "statusConnectionFailed",
};

// 沒有注入 t（單元測試、i18n 還沒載好）時的後備。跟 en locale 同一組字，
// 句首大寫其餘小寫（設計稿 14）。
const _FALLBACK = {
  connErrUnauthorized: "Wrong connection password",
  connErrRefused: "Server refused the connection",
  connErrDns: "Address not found",
  connErrTimeout: "Timed out",
  connErrTls: "Secure connection failed",
  connErrInvalidInput: "Invalid address",
  statusConnectionFailed: "Connection failed",
  connTesting: "Testing…",
};

function _errorKey(code) {
  return _ERROR_KEYS[code] || _ERROR_KEYS.unknown;
}

function createConnTest({ api, t } = {}) {
  let state = "idle";
  // 設計稿 04：測試結果是列上的一小段狀態，還沒測過就什麼都不顯示——
  // 「LAST TEST · —」這種佔位標籤只是在畫面上留一個看不懂的洞。
  // 存「要顯示什麼」而不是翻譯好的字串，讀的時候才翻（見檔頭）。
  let chip = { kind: "none" };

  function _tr(key) {
    if (typeof t === "function") {
      const v = t(key);
      if (typeof v === "string" && v && v !== key) return v;
    }
    return _FALLBACK[key] || key;
  }

  function _chipLabel() {
    if (chip.kind === "testing") return _tr("connTesting");
    if (chip.kind === "ok") return `${chip.latencyMs}ms`;
    if (chip.kind === "fail") return _tr(_errorKey(chip.code));
    return "";
  }
  let inFlight = null;
  const listeners = new Set();

  function _fireChange() {
    for (const fn of listeners) {
      try { fn(); } catch (_) { /* listener errors don't stop the chain */ }
    }
  }

  // 2026-09-08：chip 的成功／失敗本來就靠 `data-state` 上色
  // （styles.css 的 `[data-state="ok"]` / `[data-state="fail"]`），
  // 前面再黏一個 ✓ / ✗ 是同一件事講兩次；設計稿 14 也明訂按鈕與狀態
  // 不加圖示符號。文字本身已經是三態（測試中…／延遲／錯誤原因）。
  function _setSuccess(latencyMs) {
    state = "ok";
    chip = { kind: "ok", latencyMs };
    _fireChange();
  }

  function _setFailure(code) {
    state = "fail";
    chip = { kind: "fail", code };
    _fireChange();
  }

  function start(opts) {
    if (state === "testing" && inFlight) return inFlight;

    state = "testing";
    chip = { kind: "testing" };
    _fireChange();

    if (!api || typeof api.testConnection !== "function") {
      const failure = { ok: false, error: "unknown" };
      _setFailure("unknown");
      inFlight = Promise.resolve(failure);
      return inFlight;
    }

    inFlight = Promise.resolve(api.testConnection(opts))
      .then((result) => {
        if (result && result.ok) {
          _setSuccess(Number(result.latencyMs) || 0);
        } else {
          _setFailure(result && result.error ? result.error : "unknown");
        }
        return result;
      })
      .catch(() => {
        const failure = { ok: false, error: "unknown" };
        _setFailure("unknown");
        return failure;
      })
      .finally(() => {
        inFlight = null;
      });

    return inFlight;
  }

  function onChange(fn) {
    if (typeof fn !== "function") return () => {};
    listeners.add(fn);
    return () => listeners.delete(fn);
  }

  return {
    getState: () => state,
    getChipLabel: _chipLabel,
    start,
    onChange,
    _fireChange, // exposed for unit tests
  };
}

module.exports = { createConnTest };
