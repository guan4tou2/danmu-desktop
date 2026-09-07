/**
 * display-layer.js — 顯示層設定的接收端（設計稿 16 · OS1／OS2）
 *
 * Admin 的「顯示層」頁把設定 PATCH 到 /admin/display-layer，server 再用
 * WS 廣播 `{type:"display_layer", settings}`。這支負責把其中兩個值套到
 * 大螢幕上：
 *
 *   safe_area    投影安全區 %（0 / 5 / 8）→ 寫進 --overlay-safe，child.css
 *                的 #overlay-idle 與 #poll-panel 已經吃這個變數；彈幕軌道
 *                另外用 insetArea() 把顯示範圍再往內縮一圈。
 *   stroke_mode  auto / always / never → 交給 StageLuminance.setForced。
 *
 * 這兩件事在 2026-09-07 之前是**斷的**：child.css 的 --overlay-safe 永遠是
 * 寫死的 5%，StageLuminance.setForced 沒有任何呼叫端。顯示層那半早就寫好，
 * 缺的一直只是「把 admin 設的值送過來」。
 *
 * 初始值也走 WS：server 在 client 註冊完成的當下補推一次 display_layer
 * （server/ws/flask_ws.py）。這裡刻意**不**自己 fetch /display-layer——
 * child.html 的 CSP 是 `connect-src ws: wss:`，fetch 出不去，而為了一個
 * 設定把 https: 整個開進 connect-src 不划算。
 */
(function () {
  "use strict";

  var DEFAULTS = { safe_area: 5, stroke_mode: "auto" };
  var _state = { safe_area: DEFAULTS.safe_area, stroke_mode: DEFAULTS.stroke_mode };

  function apply(settings) {
    if (settings && typeof settings === "object") {
      if (typeof settings.safe_area === "number" && isFinite(settings.safe_area)) {
        _state.safe_area = Math.max(0, Math.min(20, settings.safe_area));
      }
      if (typeof settings.stroke_mode === "string") {
        _state.stroke_mode = settings.stroke_mode;
      }
    }
    if (document.documentElement) {
      document.documentElement.style.setProperty("--overlay-safe", _state.safe_area + "%");
    }
    if (window.StageLuminance && typeof window.StageLuminance.setForced === "function") {
      window.StageLuminance.setForced(_state.stroke_mode);
    }
    return getState();
  }

  /**
   * 把主持人畫的顯示範圍再往內縮一個安全區。
   *
   * 兩者是疊加關係不是二選一：顯示範圍是「我要彈幕出現在畫面的哪一段」，
   * 安全區是「投影機會吃掉最外圈多少」。只在真的碰到畫面邊緣時才縮——
   * 下緣本來就被刻意推出畫面外（top + height > 100，display_layer.py 明文
   * 允許的用法）就不要把它拉回來。
   */
  function insetArea(area) {
    var safe = _state.safe_area;
    if (!safe || !area || typeof area.top !== "number" || typeof area.height !== "number") {
      return area;
    }
    var top = area.top < safe ? safe : area.top;
    var bottom = area.top + area.height;
    if (bottom > 100 - safe && bottom <= 100) bottom = 100 - safe;
    return { top: top, height: Math.max(0, bottom - top) };
  }

  function getState() {
    return { safe_area: _state.safe_area, stroke_mode: _state.stroke_mode };
  }

  function _resetForTests() {
    _state = { safe_area: DEFAULTS.safe_area, stroke_mode: DEFAULTS.stroke_mode };
  }

  window.OverlayDisplayLayer = {
    apply: apply,
    insetArea: insetArea,
    getState: getState,
    _resetForTests: _resetForTests,
  };
})();

module.exports = window.OverlayDisplayLayer;
