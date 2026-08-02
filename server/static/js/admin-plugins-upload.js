/**
 * Admin · Plugin Upload Flow (v5 Batch 11, 2026-05-19)
 *
 * 4-step modal triggered by the `+ 上傳 .py/.js` button on #/plugins:
 *   1. Picker     — dropzone (drag/drop or file input)
 *   2. Preview    — manifest card (or syntax / missing / deps-missing variant)
 *   3. Confirm    — HudConfirm modal listing permissions + install steps
 *   4. Installing — spinner + progress text, then auto-close + refresh
 *
 * Backend: POST /admin/plugins/upload (multipart `file`)
 *   ?dry_run=true → returns { manifest, validation } without writing
 *   default       → writes to user_plugins/<file> + triggers hot-reload
 *
 * Loaded as <script defer> in admin.html. Globals: csrfFetch, showToast,
 * AdminUtils, HudConfirm. Exposes window.AdminPluginUpload.open().
 */
(function () {
  "use strict";

  const escapeHtml = (window.AdminUtils && window.AdminUtils.escapeHtml) || function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // v5 batch11 spec — permission keys + labels. Backend doesn't yet
  // enforce permissions; we surface what the manifest declares so the
  // admin can audit before install.
  // D-4：存 i18n key、渲染時才 t()——模組 parse 時 ServerI18n 尚未 init。
  const PERM_LABEL_KEYS = {
    "messages.read":  "pluginsUploadPermMessagesRead",
    "messages.block": "pluginsUploadPermMessagesBlock",
    "filters.add":    "pluginsUploadPermFiltersAdd",
    "session.read":   "pluginsUploadPermSessionRead",
    "overlay.write":  "pluginsUploadPermOverlayWrite",
  };

  // Single-element backdrop reused across all 4 steps. Body content
  // swaps via _setStep(); backdrop+chrome stay mounted to avoid
  // teardown flicker between steps.
  let _root = null;
  let _state = null;   // { step, file, manifest, validation, filename }

  function _ensureRoot() {
    if (_root) return _root;
    _root = document.createElement("div");
    _root.className = "admin-pu-backdrop";
    _root.hidden = true;
    _root.innerHTML = `
      <div class="admin-pu-modal" role="dialog" aria-label="${ServerI18n.t("pluginsUploadTitle")}">
        <header class="admin-pu-head">
          <span class="admin-ui-monolabel" style="color: var(--color-ink-accent)">${ServerI18n.t("pluginsUploadTitle")}</span>
          <button type="button" class="admin-pu-close" aria-label="${ServerI18n.t("pluginsUploadCloseAriaLabel")}" data-pu-close>${window.AdminUtils.closeIcon}</button>
        </header>
        <nav class="admin-pu-steps" data-pu-steps aria-label="${ServerI18n.t("pluginsUploadProgressAriaLabel")}"></nav>
        <div class="admin-pu-body" data-pu-body></div>
      </div>`;
    document.body.appendChild(_root);
    _root.addEventListener("click", (e) => {
      if (e.target.matches("[data-pu-close]") || e.target === _root) close();
    });
    return _root;
  }

  function _renderSteps(step) {
    const labels = [
      ServerI18n.t("pluginsUploadStepPick"),
      ServerI18n.t("pluginsUploadStepValidate"),
      ServerI18n.t("pluginsUploadStepConfirm"),
      ServerI18n.t("pluginsUploadStepInstall"),
    ];
    return labels.map((l, i) => {
      const n = i + 1;
      const done = n < step;
      const active = n === step;
      const cls = done ? "is-done" : active ? "is-active" : "";
      return (
        (i > 0 ? `<span class="admin-pu-step-line ${done ? "is-done" : ""}"></span>` : "") +
        `<div class="admin-pu-step ${cls}">
          <span class="circle">${done ? "✓" : n}</span>
          <span class="label">${l}</span>
        </div>`
      );
    }).join("");
  }

  function _setStep(step, bodyHTML) {
    _state.step = step;
    const stepsEl = _root.querySelector("[data-pu-steps]");
    if (stepsEl) stepsEl.innerHTML = _renderSteps(step);
    const bodyEl = _root.querySelector("[data-pu-body]");
    if (bodyEl) bodyEl.innerHTML = bodyHTML;
  }

  // ── Step 1 · Picker ────────────────────────────────────────────────

  function _renderStep1(variant) {
    const msg = variant === "error-type"  ? ServerI18n.t("pluginsUploadErrorType")
              : variant === "error-size"  ? ServerI18n.t("pluginsUploadErrorSize")
              : variant === "error-multi" ? ServerI18n.t("pluginsUploadErrorMulti")
              : variant === "dragover"    ? ServerI18n.t("pluginsUploadDragoverMsg")
              : ServerI18n.t("pluginsUploadDropzoneMsg");
    const icon = (variant || "").startsWith("error") ? "✕" : variant === "dragover" ? "↓" : "↑";
    const zoneCls = (variant || "").startsWith("error") ? "is-error"
                  : variant === "dragover" ? "is-over" : "";
    return `
      <div class="admin-pu-step1">
        <div class="admin-pu-dropzone ${zoneCls}" data-pu-dropzone>
          <div class="admin-pu-dropzone-icon">${icon}</div>
          <div class="admin-pu-dropzone-msg">${escapeHtml(msg)}</div>
          <div class="admin-pu-dropzone-hint">${ServerI18n.t("pluginsUploadDropzoneHint")}</div>
          <input type="file" accept=".py,.js" data-pu-file hidden />
        </div>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-close>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-primary admin-pu-btn" data-pu-browse>${ServerI18n.t("pluginsUploadBrowseFile")}</button>
        </footer>
      </div>`;
  }

  function _bindStep1() {
    const zone = _root.querySelector("[data-pu-dropzone]");
    const input = _root.querySelector("[data-pu-file]");
    const browse = _root.querySelector("[data-pu-browse]");
    if (browse) browse.addEventListener("click", () => input && input.click());
    if (input) input.addEventListener("change", () => {
      if (input.files && input.files[0]) _handleFile(input.files[0]);
    });
    if (zone) {
      zone.addEventListener("click", () => input && input.click());
      zone.addEventListener("dragover", (e) => {
        e.preventDefault();
        zone.classList.add("is-over");
      });
      zone.addEventListener("dragleave", () => zone.classList.remove("is-over"));
      zone.addEventListener("drop", (e) => {
        e.preventDefault();
        zone.classList.remove("is-over");
        const files = e.dataTransfer && e.dataTransfer.files;
        if (!files || files.length === 0) return;
        if (files.length > 1) { _setStep(1, _renderStep1("error-multi")); _bindStep1(); return; }
        _handleFile(files[0]);
      });
    }
  }

  function _handleFile(file) {
    if (!file.name.match(/\.(py|js)$/i)) {
      _setStep(1, _renderStep1("error-type"));
      _bindStep1();
      return;
    }
    if (file.size > 256 * 1024) {
      _setStep(1, _renderStep1("error-size"));
      _bindStep1();
      return;
    }
    _state.file = file;
    _setStep(2, _renderStep2Loading(file.name));
    _validate(file);
  }

  // ── Step 2 · Validation + Manifest preview ────────────────────────

  function _renderStep2Loading(filename) {
    return `
      <div class="admin-pu-step2-loading">
        <div class="admin-pu-spinner"></div>
        <div class="admin-pu-loading-msg">${ServerI18n.t("pluginsUploadAnalyzing")}</div>
        <div class="admin-pu-loading-hint">${escapeHtml(filename)}</div>
      </div>`;
  }

  async function _validate(file) {
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await window.csrfFetch("/admin/plugins/upload?dry_run=true", {
        method: "POST",
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok && !data.validation) {
        window.showToast?.(data.error || ServerI18n.t("pluginsUploadToastUploadFailed", { status: res.status }), false);
        _setStep(1, _renderStep1());
        _bindStep1();
        return;
      }
      _state.manifest = data.manifest || {};
      _state.validation = data.validation || {};
      _state.filename = data.filename || file.name;
      _renderStep2(_state);
    } catch (e) {
      window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError", { msg: e.message || "" }), false);
      _setStep(1, _renderStep1());
      _bindStep1();
    }
  }

  function _renderStep2(state) {
    const m = state.manifest || {};
    const v = state.validation || {};
    let bodyHtml = "";
    if (!v.syntax_ok) {
      bodyHtml = _renderSyntaxError(v.syntax_err, state);
    } else if (Object.keys(m).length === 0) {
      bodyHtml = _renderNoManifest(state);
    } else {
      const depsBad = (v.deps || []).some((d) => d.status === "missing");
      bodyHtml = _renderManifestCard(m, v, state, depsBad);
    }
    _setStep(2, `<div class="admin-pu-step2">${bodyHtml}</div>`);
    _bindStep2();
  }

  function _renderSyntaxError(err, state) {
    const line = err && err.line ? err.line : "?";
    const msg = err && err.msg ? err.msg : "syntax error";
    return `
      <div class="admin-pu-syntax-card">
        <div class="admin-pu-syntax-head">
          <span class="dot"></span>
          <span>SyntaxError · Line ${line}</span>
        </div>
        <pre class="admin-pu-syntax-body">${escapeHtml(`>>> ${state.filename}\n${msg}`)}</pre>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action admin-pu-btn" disabled>${ServerI18n.t("pluginsUploadCannotContinue")}</button>
      </footer>`;
  }

  function _renderNoManifest(state) {
    return `
      <div class="admin-pu-no-manifest">
        <div class="admin-pu-no-manifest-icon">⚠</div>
        <div class="admin-pu-no-manifest-title">${ServerI18n.t("pluginsUploadNoManifestTitle")}</div>
        <p class="admin-pu-no-manifest-body">${ServerI18n.t("pluginsUploadNoManifestBody")}</p>
        <pre class="admin-pu-manifest-example"># @name auto_moderate
# @version 1.0.0
# @author @mei
# @priority 50</pre>
        <label class="admin-pu-no-manifest-ack">
          <input type="checkbox" data-pu-no-manifest-ack />
          <span>${ServerI18n.t("pluginsUploadNoManifestAck")}</span>
        </label>
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="admin-ui-action is-warn admin-pu-btn" disabled data-pu-confirm>${ServerI18n.t("pluginsUploadContinueNoManifest")}</button>
      </footer>`;
  }

  function _priorityPillClass(priority) {
    if (priority == null) return "is-muted";
    if (priority <= 10) return "is-danger";
    if (priority <= 50) return "is-warn";
    return "is-cyan";
  }

  function _priorityPill(priority) {
    if (priority == null) return `<span class="admin-ui-pill admin-pu-pill is-muted">—</span>`;
    const cls = _priorityPillClass(priority);
    const lbl = priority <= 10 ? "CRITICAL" : priority <= 50 ? "HIGH" : "NORMAL";
    return `<span class="admin-ui-pill admin-pu-pill ${cls}">${priority} · ${lbl}</span>`;
  }

  function _renderManifestCard(m, v, state, depsBad) {
    const name = m.name || state.filename.replace(/\.(py|js)$/i, "");
    const ver = m.version ? `v${escapeHtml(m.version)}` : "—";
    const author = m.author ? `@${escapeHtml(m.author.replace(/^@/, ""))}` : "—";
    const desc = m.description || ServerI18n.t("pluginsUploadNoDescription");
    const lang = state.filename.endsWith(".js") ? "JS" : "PY";
    const langCls = lang === "PY" ? "is-warn" : "is-cyan";

    const declaredPerms = Array.isArray(m.permissions) ? m.permissions : [];
    const permRows = Object.keys(PERM_LABEL_KEYS).map((key) => {
      const req = declaredPerms.includes(key);
      const cls = req ? "is-req" : "is-not";
      const icon = req ? "●" : "○";
      return `
        <div class="admin-pu-perm-row ${cls}">
          <span class="dot">${icon}</span>
          <span class="key">${escapeHtml(key)}</span>
          <span class="label">${escapeHtml(ServerI18n.t(PERM_LABEL_KEYS[key]))}</span>
        </div>`;
    }).join("");

    const deps = v.deps || [];
    const depRows = deps.map((d) => {
      const cls = d.status === "ok" ? "is-ok" : d.status === "warn" ? "is-warn" : "is-err";
      const icon = d.status === "ok" ? "✓" : d.status === "warn" ? "⚠" : "✗";
      return `
        <div class="admin-pu-dep-row ${cls}">
          <span class="dot">${icon}</span>
          <span class="name">${escapeHtml(d.name)}</span>
          <span class="note">${escapeHtml(d.note || "")}</span>
        </div>`;
    }).join("");

    const dupWarning = v.duplicate_name ? `
      <div class="admin-pu-dup-banner">
        ${ServerI18n.t("pluginsUploadDupWarning", { name: `<span class="mono">${escapeHtml(name)}</span>` })}
      </div>` : "";

    const depsBlock = deps.length === 0 ? "" : `
      <section class="admin-pu-section">
        <span class="admin-ui-monolabel">DEPENDENCIES</span>
        <div class="admin-pu-dep-list">${depRows}</div>
      </section>`;

    return `
      ${dupWarning}
      <div class="admin-pu-manifest-card">
        <div class="admin-pu-manifest-head">
          <span class="name">${escapeHtml(name)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${ver}</span>
          <span class="author">${author}</span>
          <span class="admin-ui-pill admin-pu-pill ${langCls}" style="margin-left:auto">${lang}</span>
        </div>
        <div class="admin-pu-manifest-desc">${escapeHtml(desc)}</div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">PRIORITY</span>
          ${_priorityPill(m.priority)}
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">PERMISSIONS</span>
          <div class="admin-pu-perm-list">${permRows}</div>
        </section>
        ${depsBlock}
      </div>
      <footer class="admin-pu-foot">
        <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("pluginsUploadReselect")}</button>
        <button type="button" class="${depsBad ? "admin-ui-action admin-pu-btn" : "admin-ui-action is-warn admin-pu-btn"}" ${depsBad ? "disabled" : ""} data-pu-confirm>${depsBad ? ServerI18n.t("pluginsUploadFixDeps") : ServerI18n.t("pluginsUploadContinueInstall")}</button>
      </footer>`;
  }

  function _bindStep2() {
    const backBtn = _root.querySelector("[data-pu-back]");
    if (backBtn) backBtn.addEventListener("click", () => {
      _state.file = null;
      _state.manifest = null;
      _state.validation = null;
      _setStep(1, _renderStep1());
      _bindStep1();
    });
    const confirmBtn = _root.querySelector("[data-pu-confirm]");
    if (confirmBtn) confirmBtn.addEventListener("click", () => _gotoConfirm());
    // "No manifest" ack checkbox toggles the confirm button.
    const ack = _root.querySelector("[data-pu-no-manifest-ack]");
    if (ack && confirmBtn) ack.addEventListener("change", () => {
      confirmBtn.disabled = !ack.checked;
    });
  }

  // ── Step 3 · Confirm modal ─────────────────────────────────────────

  function _gotoConfirm() {
    // For simplicity we render confirm as an inline content swap rather
    // than opening a second nested HudConfirm modal. The v5 spec frames
    // it as a separate modal but our backdrop already provides modal
    // semantics; nesting two would be visually heavier than necessary.
    const m = _state.manifest || {};
    const name = m.name || (_state.filename || "").replace(/\.(py|js)$/i, "");
    const ver = m.version ? `v${escapeHtml(m.version)}` : "—";
    const declared = Array.isArray(m.permissions) ? m.permissions : [];
    const permsHtml = declared.length === 0
      ? `<div class="admin-pu-confirm-empty">${ServerI18n.t("pluginsUploadNoPermsDeclared")}</div>`
      : declared.map((p) => `<div class="admin-pu-confirm-perm">● <span class="mono">${escapeHtml(p)}</span></div>`).join("");

    _setStep(3, `
      <div class="admin-pu-confirm">
        <div class="admin-pu-confirm-icon">⚠</div>
        <div class="admin-pu-confirm-title">${ServerI18n.t("pluginsUploadConfirmTitle")}</div>
        <div class="admin-pu-confirm-hint">${ServerI18n.t("pluginsUploadConfirmHint")}</div>
        <div class="admin-pu-confirm-target">
          <span class="name">${escapeHtml(name)}</span>
          <span class="admin-ui-pill admin-pu-pill is-cyan">${ver}</span>
        </div>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadWillAccess")}</span>
          <div class="admin-pu-confirm-perms">${permsHtml}</div>
        </section>
        <section class="admin-pu-section">
          <span class="admin-ui-monolabel">${ServerI18n.t("pluginsUploadInstallSteps")}</span>
          <ol class="admin-pu-confirm-steps">
            <li>${ServerI18n.t("pluginsUploadStepWrite", { path: `server/user_plugins/${escapeHtml(_state.filename || "")}` })}</li>
            <li>${ServerI18n.t("pluginsUploadStepHotReload")}</li>
            <li>${ServerI18n.t("pluginsUploadStepDefaultEnable", { priority: m.priority != null ? m.priority : 100 })}</li>
          </ol>
        </section>
        <footer class="admin-pu-foot">
          <button type="button" class="admin-ui-action admin-pu-btn" data-pu-back>${ServerI18n.t("cancel")}</button>
          <button type="button" class="admin-ui-action is-warn admin-pu-btn" data-pu-install>${ServerI18n.t("pluginsUploadConfirmInstall")}</button>
        </footer>
      </div>`);
    const installBtn = _root.querySelector("[data-pu-install]");
    if (installBtn) installBtn.addEventListener("click", _install);
    const backBtn = _root.querySelector("[data-pu-back]");
    if (backBtn) backBtn.addEventListener("click", () => _renderStep2(_state));
  }

  // ── Step 4 · Installing ────────────────────────────────────────────

  async function _install() {
    _setStep(4, `
      <div class="admin-pu-installing">
        <div class="admin-pu-spinner is-large"></div>
        <div class="admin-pu-installing-title">${ServerI18n.t("pluginsUploadInstalling")}</div>
        <div class="admin-pu-installing-progress" data-pu-progress>${ServerI18n.t("pluginsUploadProgressSteps")}</div>
        <div class="admin-pu-installing-hint">${ServerI18n.t("pluginsUploadDontClose")}</div>
      </div>`);
    try {
      const fd = new FormData();
      fd.append("file", _state.file);
      const res = await window.csrfFetch("/admin/plugins/upload", {
        method: "POST",
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        window.showToast?.(data.error || ServerI18n.t("pluginsUploadToastInstallFailed", { status: res.status }), false);
        // Recover back to step 2 so user can retry.
        _renderStep2(_state);
        return;
      }
      window.showToast?.(ServerI18n.t("pluginsUploadToastInstalled", { name: data.name || _state.filename }), true);
      close();
      // Refresh plugins list via the page's existing fetchPlugins().
      // No direct exposure; trigger a click on the reload button which
      // re-runs the same fetch path.
      const reloadBtn = document.getElementById("pluginsReloadBtn");
      if (reloadBtn) reloadBtn.click();
    } catch (e) {
      window.showToast?.(ServerI18n.t("pluginsUploadToastNetworkError", { msg: e.message || "" }), false);
      _renderStep2(_state);
    }
  }

  // ── Public API ─────────────────────────────────────────────────────

  function open() {
    _ensureRoot();
    _state = { step: 1, file: null, manifest: null, validation: null, filename: null };
    _setStep(1, _renderStep1());
    _bindStep1();
    _root.hidden = false;
    document.body.classList.add("admin-pu-open");
  }

  function close() {
    if (!_root) return;
    _root.hidden = true;
    document.body.classList.remove("admin-pu-open");
    _state = null;
  }

  window.AdminPluginUpload = { open, close };

  // Auto-bind the toolbar button on plugins page. Works both on first
  // render and after any re-render (admin.js rebuilds DOM on route swap).
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("#pluginsUploadBtn");
    if (btn) {
      e.preventDefault();
      open();
    }
  });
})();
