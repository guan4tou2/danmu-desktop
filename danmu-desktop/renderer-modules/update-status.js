// Auto-updater UX wiring (P2-3) — renders the title-bar badge, About card,
// download progress bar, action buttons (install / later / skip), and the
// 「更新已下載」對話框（設計稿 10 · S7——顯示中不打斷，關閉顯示層後才問）。
// Receives lifecycle events from the main process
// via window.API.onUpdateStatus and dispatches user choices via
// window.API.sendUpdateAction.

const { sanitizeLog } = require("../shared/utils");

let _toastShown = false;
let _state = { phase: "idle" };

function $(id) {
  return document.getElementById(id);
}

function safeText(value) {
  if (value === null || value === undefined) return "";
  return String(value);
}

function tt(t, key, fallback) {
  if (typeof t !== "function") return fallback;
  const out = t(key);
  return out && out !== key ? out : fallback;
}

function setBadge(visible, label) {
  const badge = $("titlebar-update-badge");
  if (!badge) return;
  badge.hidden = !visible;
  if (label) badge.title = label;
}

function setSidebarFootStatus(text, ok) {
  // Replace the static "UP TO DATE" sidebar foot label when an update is staged
  const wrap = document.querySelector(".client-sidebar-foot .status");
  if (!wrap) return;
  const dot = wrap.querySelector(".dot");
  // Keep existing dot — just rewrite the trailing text node
  const newText = " " + safeText(text);
  let textNode = null;
  for (const node of wrap.childNodes) {
    if (node.nodeType === 3) {
      textNode = node;
      break;
    }
  }
  if (textNode) {
    textNode.nodeValue = newText;
  } else {
    wrap.appendChild(document.createTextNode(newText));
  }
  wrap.dataset.updateState = ok ? "uptodate" : "available";
}

function renderAboutCard(t) {
  const card = $("update-card");
  if (!card) return;
  const titleEl = $("update-card-title");
  const versionEl = $("update-card-version");
  const notesEl = $("update-card-notes");
  const progressWrap = $("update-card-progress");
  const progressBar = $("update-card-progress-bar");
  const progressLabel = $("update-card-progress-label");
  const installBtn = $("update-card-install");
  const laterBtn = $("update-card-later");
  const skipBtn = $("update-card-skip");
  const checkBtn = $("update-card-check");
  const errorEl = $("update-card-error");

  const phase = _state.phase || "idle";
  const version = _state.version;

  // 2026-05-16: idle / not-available states keep the card hidden — the
  // hero's UP TO DATE pill already conveys "you're current", a second
  // "You're up to date" panel just clutters the About page. The card
  // surfaces only when there's something actionable (checking / available
  // / downloading / downloaded / error).
  if (phase === "idle" || phase === "not-available") {
    card.hidden = true;
    return;
  }

  // Default visibility
  card.hidden = false;
  if (errorEl) errorEl.hidden = true;
  if (progressWrap) progressWrap.hidden = true;

  if (phase === "available" || phase === "downloading" || phase === "downloaded") {
    if (titleEl) {
      titleEl.textContent =
        phase === "downloaded"
          ? tt(t, "updateReadyTitle", "Update ready to install")
          : tt(t, "updateAvailableTitle", "New version available");
    }
    if (versionEl) {
      versionEl.textContent = version ? "v" + version : "";
    }
    if (notesEl) {
      const notes = _state.releaseNotes || "";
      notesEl.textContent = notes;
      notesEl.hidden = !notes;
    }
    if (progressWrap && (phase === "downloading" || phase === "downloaded")) {
      progressWrap.hidden = false;
      const pct = Math.max(0, Math.min(100, _state.percent || 0));
      if (progressBar) progressBar.style.width = pct.toFixed(1) + "%";
      if (progressLabel) {
        progressLabel.textContent =
          phase === "downloaded"
            ? tt(t, "updateDownloadComplete", "Download complete")
            : pct.toFixed(0) + "%";
      }
    }
    if (installBtn) {
      installBtn.hidden = phase !== "downloaded";
      installBtn.disabled = phase !== "downloaded";
    }
    if (laterBtn) laterBtn.hidden = phase === "idle";
    if (skipBtn) skipBtn.hidden = phase === "idle";
    if (checkBtn) checkBtn.hidden = true;
  } else if (phase === "checking") {
    if (titleEl) titleEl.textContent = tt(t, "updateChecking", "Checking for updates…");
    if (versionEl) versionEl.textContent = "";
    if (notesEl) notesEl.hidden = true;
    if (installBtn) installBtn.hidden = true;
    if (laterBtn) laterBtn.hidden = true;
    if (skipBtn) skipBtn.hidden = true;
    if (checkBtn) {
      checkBtn.hidden = false;
      checkBtn.disabled = true;
    }
  } else if (phase === "error") {
    if (titleEl) titleEl.textContent = tt(t, "updateCheckFailed", "Update check failed");
    if (versionEl) versionEl.textContent = "";
    if (notesEl) notesEl.hidden = true;
    if (errorEl) {
      errorEl.hidden = false;
      errorEl.textContent = safeText(_state.message || "");
    }
    if (installBtn) installBtn.hidden = true;
    if (laterBtn) laterBtn.hidden = true;
    if (skipBtn) skipBtn.hidden = true;
    if (checkBtn) {
      checkBtn.hidden = false;
      checkBtn.disabled = false;
    }
  } else {
    // idle / not-available
    if (titleEl) titleEl.textContent = tt(t, "updateUpToDate", "You're up to date");
    if (versionEl) versionEl.textContent = "";
    if (notesEl) notesEl.hidden = true;
    if (installBtn) installBtn.hidden = true;
    if (laterBtn) laterBtn.hidden = true;
    if (skipBtn) skipBtn.hidden = true;
    if (checkBtn) {
      checkBtn.hidden = false;
      checkBtn.disabled = false;
    }
  }
}

function applyState(t, showToast) {
  const phase = _state.phase || "idle";
  const version = _state.version;

  // ── Title bar badge ─────────────────────────────────────────────────────
  if (phase === "available" || phase === "downloading" || phase === "downloaded") {
    setBadge(
      true,
      tt(t, "updateAvailableTitle", "New version available") +
        (version ? " · v" + version : "")
    );
  } else {
    setBadge(false);
  }

  // ── Sidebar foot status ─────────────────────────────────────────────────
  if (phase === "downloaded") {
    setSidebarFootStatus(
      tt(t, "updateRestartToInstall", "RESTART TO INSTALL"),
      false
    );
  } else if (phase === "available" || phase === "downloading") {
    setSidebarFootStatus(
      version
        ? "v" + version + " " + tt(t, "updateAvailableShort", "AVAILABLE")
        : tt(t, "updateAvailableShort", "UPDATE AVAILABLE"),
      false
    );
  } else if (phase === "error") {
    setSidebarFootStatus(tt(t, "updateCheckFailedShort", "CHECK FAILED"), false);
  } else {
    setSidebarFootStatus(tt(t, "updateUpToDateShort", "UP TO DATE"), true);
  }

  // ── About card ──────────────────────────────────────────────────────────
  renderAboutCard(t);

  // ── 更新已下載（設計稿 10 · S7）─────────────────────────────────────
  //
  // **顯示中時不打斷；關閉顯示層後才提示。** 主持人正在台上放彈幕的時候，
  // 一個「要不要重新啟動」的對話框是最糟的打斷——重新啟動就是把大螢幕關掉。
  // 所以下載完成先記著，等顯示層停了再問。
  if (phase === "downloaded" && !_toastShown) {
    _toastShown = true;
    _promptWhenOverlayIdle(t);
  }
  if (phase !== "downloaded") {
    _toastShown = false;
  }
}

const DIALOG_ID = "client-update-dialog";

function _overlayRunning() {
  const c = window.OverlayControl;
  return !!(c && typeof c.isRunning === "function" && c.isRunning());
}

function _promptWhenOverlayIdle(t) {
  if (!_overlayRunning()) {
    _showUpdateDialog(t);
    return;
  }
  const c = window.OverlayControl;
  if (!c || typeof c.subscribe !== "function") return;
  const unsubscribe = c.subscribe(function () {
    if (_overlayRunning()) return;
    if (typeof unsubscribe === "function") unsubscribe();
    _showUpdateDialog(t);
  });
}

function _showUpdateDialog(t) {
  if (document.getElementById(DIALOG_ID)) return;
  const version = _state.version ? String(_state.version) : "";

  const root = document.createElement("div");
  root.id = DIALOG_ID;
  root.className = "client-update-dialog";
  root.setAttribute("role", "alertdialog");
  root.setAttribute("aria-modal", "true");
  root.setAttribute("aria-labelledby", "client-update-dialog-title");
  root.innerHTML =
    '<div class="client-update-dialog__backdrop"></div>' +
    '<div class="client-update-dialog__panel">' +
      '<img class="client-update-dialog__icon" src="assets/brand/icon-128.png" width="48" height="48" alt="" />' +
      '<div class="client-update-dialog__title" id="client-update-dialog-title">' +
        safeText(
          tt(t, "updateReadyTitle", "Danmu Fire {v} 已準備好").replace("{v}", version)
        ) +
      "</div>" +
      '<p class="client-update-dialog__body">' +
        safeText(
          tt(
            t,
            "updateReadyBody",
            "重新啟動即完成更新，約需 10 秒。設定與伺服器位址都會保留。"
          )
        ) +
      "</p>" +
      '<button type="button" class="client-update-dialog__primary" data-update-dialog="install">' +
        safeText(tt(t, "updateReadyRestart", "重新啟動並更新")) +
      "</button>" +
      '<button type="button" class="client-update-dialog__ghost" data-update-dialog="later">' +
        safeText(tt(t, "updateReadyLater", "下次關閉時再更新")) +
      "</button>" +
    "</div>";
  document.body.appendChild(root);

  root.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-update-dialog]");
    if (!btn) return;
    const action = btn.dataset.updateDialog;
    root.remove();
    try {
      if (window.API && typeof window.API.sendUpdateAction === "function") {
        window.API.sendUpdateAction(action, _state.version);
      }
    } catch (_) {}
  });
}

function bindActions() {
  const api = window.API;
  if (!api || typeof api.sendUpdateAction !== "function") return;

  const send = (action) => () => {
    try {
      api.sendUpdateAction(action, _state.version);
    } catch (err) {
      console.warn(
        "[update-status] sendUpdateAction failed:",
        sanitizeLog((err && err.message) || String(err))
      );
    }
  };

  const installBtn = $("update-card-install");
  if (installBtn) installBtn.addEventListener("click", send("install"));

  const laterBtn = $("update-card-later");
  if (laterBtn) laterBtn.addEventListener("click", send("later"));

  const skipBtn = $("update-card-skip");
  if (skipBtn) skipBtn.addEventListener("click", send("skip"));

  const checkBtn = $("update-card-check");
  if (checkBtn) checkBtn.addEventListener("click", send("check-now"));

  // Title bar badge → jumps to About section
  const badge = $("titlebar-update-badge");
  if (badge) {
    badge.addEventListener("click", () => {
      const aboutBtn = document.querySelector('[data-nav="about"]');
      if (aboutBtn) aboutBtn.click();
    });
  }
}

function initUpdateStatus({ t, showToast } = {}) {
  const api = window.API;
  if (!api || typeof api.onUpdateStatus !== "function") return;

  bindActions();

  api.onUpdateStatus((data) => {
    _state = Object.assign({}, _state, data || {});
    applyState(t, showToast);
  });

  // Pull initial state in case main already broadcast before listener attached
  if (typeof api.sendUpdateAction === "function") {
    try {
      api.sendUpdateAction("request-state");
    } catch (_) {}
  }

  // First paint based on default state (idle)
  applyState(t, showToast);
}

module.exports = { initUpdateStatus };
