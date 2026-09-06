/**
 * stage-luminance.js — 淺色簡報上的自動描邊（設計稿 16 · OS2）
 *
 * 顯示層是透明的點擊穿透層，疊在主持人的簡報上。簡報底色不受我們控制：
 * 白底投影片配白色彈幕，等於什麼都看不到。稿上的做法是**不要問主持人**，
 * 由顯示層自己每 2 秒取樣一次背景亮度：
 *
 *   亮度 > 60% → 視為淺底：淺色彈幕加 1.5px 深描邊、深色彈幕加白光暈
 *   亮度 ≤ 60% → 維持原本的深色投影
 *
 * 實作上 Electron 的透明視窗讀不到它下面那張簡報的像素（那要 desktopCapturer
 * 權限，而且每 2 秒抓一次整螢幕太貴）。所以真正能取樣的是**主行程**：
 * 這支只負責接收主行程算好的亮度，把 body 的 .is-light-stage 打開或關掉，
 * 樣式規則寫在 child.css。主行程還沒送值之前一律維持深底假設（現況行為）。
 *
 * Admin › 顯示層 › 「總是描邊」可以覆寫自動判斷：值到了就鎖住不再翻。
 */
(function () {
  "use strict";

  var LIGHT_THRESHOLD = 0.6;
  var forced = null; // null = 自動；true/false = admin 鎖定

  function apply(isLight) {
    if (!document.body) return;
    document.body.classList.toggle("is-light-stage", !!isLight);
  }

  function onLuminance(value) {
    if (forced !== null) return;
    var v = Number(value);
    if (!isFinite(v)) return;
    apply(v > LIGHT_THRESHOLD);
  }

  function setForced(mode) {
    // "always" 總是描邊 · "never" 從不描邊 · "auto" 交回自動
    if (mode === "always") { forced = true; apply(true); }
    else if (mode === "never") { forced = false; apply(false); }
    else { forced = null; }
  }

  function init() {
    if (window.API && typeof window.API.onStageLuminance === "function") {
      window.API.onStageLuminance(onLuminance);
    }
    if (window.API && typeof window.API.onStageStrokeMode === "function") {
      window.API.onStageStrokeMode(setForced);
    }
  }

  window.StageLuminance = {
    init: init,
    onLuminance: onLuminance,
    setForced: setForced,
    threshold: LIGHT_THRESHOLD,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

module.exports = { LIGHT_THRESHOLD: 0.6 };
