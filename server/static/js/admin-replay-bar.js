/**
 * Admin · 重播進行中的全域控制列（設計稿 08 · H1）
 *
 * 重播一旦開始，主持人就不會留在「紀錄與匯出」那一頁——他會去看控制台、
 * 去顯示層、去審核。但暫停／停止原本住在 `sec-history` 裡面，離開那頁就
 * **沒有地方可以停**。那也是「重播」分頁遲遲拿不掉的唯一理由。
 *
 * 這支把進行中的控制項抽成一條 sticky 列（比照斷線橫幅 admin-rcb 的作法：
 * 插在 body 最前面、position: sticky），閒置時整條收起。
 *
 * 按鈕的 id 沿用原本那幾顆（replayPauseBtn / replayResumeBtn / replayStopBtn /
 * replayProgress），admin-replay-controls.js 靠 id 找元素，不必改綁定。
 *
 * 錄製指示（replayRecordingIndicator）已隨「錄製回放」一起退場——「重播」
 * 分頁刪除後那個功能沒有入口了（設計稿 08 · H1）。
 *
 * 以 <script defer> 掛在 admin.html。
 */
(function () {
  "use strict";

  const BAR_ID = "admin-replay-bar";

  function ensure() {
    let el = document.getElementById(BAR_ID);
    if (el) return el;
    if (!document.body) return null;
    el = document.createElement("div");
    el.id = BAR_ID;
    el.className = "admin-replay-bar";
    el.hidden = true;
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    el.innerHTML =
      '<span class="admin-replay-bar__dot" aria-hidden="true"></span>' +
      '<span class="admin-replay-bar__label">' + ServerI18n.t("replayBarLabel") + "</span>" +
      '<span id="replayProgress" class="admin-replay-bar__progress hidden"></span>' +
      '<span class="admin-replay-bar__spacer"></span>' +
      '<button type="button" id="replayPauseBtn" class="admin-ui-action admin-replay-control-action hidden">' +
        ServerI18n.t("pause") + "</button>" +
      '<button type="button" id="replayResumeBtn" class="admin-ui-action is-primary admin-replay-control-action hidden">' +
        ServerI18n.t("resume") + "</button>" +
      '<button type="button" id="replayStopBtn" class="admin-ui-action is-danger admin-replay-control-action hidden">' +
        ServerI18n.t("stop") + "</button>";
    document.body.insertBefore(el, document.body.firstChild);
    return el;
  }

  /** 由 admin-replay-controls.js 呼叫。閒置就整條收起——一條永遠都在的
   *  空白列比沒有還糟，它會讓每一頁都少 40px 而且什麼都沒說。 */
  function setActive(active) {
    const el = ensure();
    if (el) el.hidden = !active;
  }

  window.AdminReplayBar = { ensure: ensure, setActive: setActive };

  document.addEventListener("admin-panel-rendered", ensure);
})();
