// ConnTest — finite state machine wrapping window.API.testConnection.
// Drives the conn page's ⚐ 測試 button + result chip (idle → testing →
// ok | fail). The chip labels match the design mirror's 4-state TestChip
// in `docs/designs/design-v2/components/desktop.jsx`.

const _ERROR_LABELS = {
  unauthorized: "1008 Unauthorized",
  "connection-refused": "Connection refused",
  "dns-failure": "DNS failure",
  timeout: "Timeout",
  "tls-error": "TLS error",
  "invalid-input": "Invalid input",
  unknown: "Connection failed",
};

function _errorLabel(code) {
  return _ERROR_LABELS[code] || _ERROR_LABELS.unknown;
}

function createConnTest({ api }) {
  let state = "idle";
  // 設計稿 04：測試結果是列上的一小段狀態，還沒測過就什麼都不顯示——
  // 「LAST TEST · —」這種佔位標籤只是在畫面上留一個看不懂的洞。
  let chipLabel = "";
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
    chipLabel = `${latencyMs}ms`;
    _fireChange();
  }

  function _setFailure(code) {
    state = "fail";
    chipLabel = _errorLabel(code);
    _fireChange();
  }

  function start(opts) {
    if (state === "testing" && inFlight) return inFlight;

    state = "testing";
    chipLabel = "測試中…";
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
    getChipLabel: () => chipLabel,
    start,
    onChange,
    _fireChange, // exposed for unit tests
  };
}

module.exports = { createConnTest };
