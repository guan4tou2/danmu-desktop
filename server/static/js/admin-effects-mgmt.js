/**
 * Admin Effects Management Section
 *
 * Extracted from admin.js to reduce file size.
 * Globals: csrfFetch (window.csrfFetch), showToast (window.showToast),
 *          ServerI18n (window.ServerI18n)
 */
(function () {
  "use strict";

  // Resolved lazily — these globals are set by admin.js which loads after this file
  function csrfFetch(url, opts) { return window.csrfFetch(url, opts); }
  function showToast(msg, ok) { return window.showToast(msg, ok); }
  var ServerI18n = window.ServerI18n;

  let _effectModalRestoreFocusEl = null;

  function getEffectModalFocusableElements() {
    const modal = document.getElementById("effectEditModal");
    if (!modal) return [];
    return Array.from(
      modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(
      (el) =>
        !el.hasAttribute("disabled") &&
        el.getAttribute("aria-hidden") !== "true"
    );
  }

  function handleEffectModalKeydown(event) {
    const modal = document.getElementById("effectEditModal");
    if (!modal || modal.classList.contains("hidden")) return;

    if (event.key === "Escape") {
      event.preventDefault();
      hideEffectModal();
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = getEffectModalFocusableElements();
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function hideEffectModal() {
    const modal = document.getElementById("effectEditModal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    modal.removeEventListener("keydown", handleEffectModalKeydown);
    if (_effectModalRestoreFocusEl) {
      _effectModalRestoreFocusEl.focus();
      _effectModalRestoreFocusEl = null;
    }
  }

  // ── Preview helpers (IIFE scope so renderEffectsList can call them) ──────────
  let _previewDebounceTimer = null;

  function _buildPreviewParams(yamlContent) {
    const paramsContainer = document.getElementById("effectPreviewParams");
    if (!paramsContainer) return {};
    let parsed;
    try {
      const lines = yamlContent.split("\n");
      let inParams = false;
      let paramIndent = 0;
      let currentParam = null;
      let currentParamIndent = 0;
      const params = {};

      for (const line of lines) {
        const trimmed = line.trimStart();
        const indent = line.length - trimmed.length;

        if (trimmed.startsWith("params:")) {
          inParams = true;
          paramIndent = indent;
          continue;
        }
        if (!inParams) continue;
        if (trimmed === "" || trimmed.startsWith("#")) continue;
        if (indent <= paramIndent && !trimmed.startsWith("params:")) {
          inParams = false;
          continue;
        }

        const paramKeyMatch = trimmed.match(/^([a-zA-Z0-9_]+):\s*$/);
        if (paramKeyMatch && indent === paramIndent + 2) {
          currentParam = paramKeyMatch[1];
          currentParamIndent = indent;
          params[currentParam] = {};
          continue;
        }

        if (currentParam && indent > currentParamIndent) {
          const propMatch = trimmed.match(/^([a-zA-Z0-9_]+):\s*(.+)$/);
          if (propMatch) {
            const key = propMatch[1];
            let val = propMatch[2].trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.slice(1, -1);
            }
            if (key !== "options") {
              const num = Number(val);
              params[currentParam][key] = isNaN(num) ? val : num;
            }
          }
          if (trimmed.startsWith("- value:")) {
            if (!params[currentParam].options) params[currentParam].options = [];
            const valMatch = trimmed.match(/^- value:\s*(.+)$/);
            if (valMatch) {
              let v = valMatch[1].trim();
              if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
                v = v.slice(1, -1);
              }
              params[currentParam].options.push({ value: v, label: v });
            }
          }
          if (trimmed.startsWith("label:") && params[currentParam].options && params[currentParam].options.length > 0) {
            const lMatch = trimmed.match(/^label:\s*(.+)$/);
            if (lMatch) {
              let lv = lMatch[1].trim();
              if ((lv.startsWith('"') && lv.endsWith('"')) || (lv.startsWith("'") && lv.endsWith("'"))) {
                lv = lv.slice(1, -1);
              }
              params[currentParam].options[params[currentParam].options.length - 1].label = lv;
            }
          }
        }
      }

      parsed = params;
    } catch (_) {
      parsed = {};
    }

    paramsContainer.innerHTML = "";
    const values = {};

    for (const [key, def] of Object.entries(parsed || {})) {
      const type = def.type || "float";
      const wrapper = document.createElement("div");
      wrapper.className = "flex flex-col gap-0.5";

      const label = document.createElement("label");
      label.className = "text-[0.65rem] text-slate-500 font-mono";
      label.textContent = `${key} (${type})`;
      wrapper.appendChild(label);

      if (type === "select" && Array.isArray(def.options)) {
        const sel = document.createElement("select");
        sel.className = "bg-slate-950 text-slate-300 text-xs border border-slate-700 rounded px-2 py-1 outline-none";
        sel.dataset.paramKey = key;
        for (const opt of def.options) {
          const o = document.createElement("option");
          o.value = opt.value;
          o.textContent = opt.label || opt.value;
          if (opt.value === String(def.default)) o.selected = true;
          sel.appendChild(o);
        }
        values[key] = String(def.default || (def.options[0] && def.options[0].value) || "");
        sel.addEventListener("change", () => {
          _triggerPreviewDebounced();
        });
        wrapper.appendChild(sel);
      } else {
        const min = def.min != null ? def.min : 0;
        const max = def.max != null ? def.max : 10;
        const step = def.step != null ? def.step : (type === "int" ? 1 : 0.1);
        const defaultVal = def.default != null ? def.default : min;

        const row = document.createElement("div");
        row.className = "flex items-center gap-2";

        const input = document.createElement("input");
        input.type = "range";
        input.min = min;
        input.max = max;
        input.step = step;
        input.value = defaultVal;
        input.dataset.paramKey = key;
        input.className = "flex-1 accent-sky-500";

        const valDisplay = document.createElement("span");
        valDisplay.className = "text-xs text-slate-400 font-mono w-10 text-right";
        valDisplay.textContent = String(defaultVal);

        input.addEventListener("input", () => {
          valDisplay.textContent = input.value;
          _triggerPreviewDebounced();
        });

        row.appendChild(input);
        row.appendChild(valDisplay);
        wrapper.appendChild(row);
        values[key] = defaultVal;
      }

      paramsContainer.appendChild(wrapper);
    }

    return values;
  }

  function _getPreviewParams() {
    const paramsContainer = document.getElementById("effectPreviewParams");
    if (!paramsContainer) return {};
    const params = {};
    paramsContainer.querySelectorAll("[data-param-key]").forEach((el) => {
      params[el.dataset.paramKey] = el.type === "range" ? Number(el.value) : el.value;
    });
    return params;
  }

  async function _previewEffect() {
    const textarea = document.getElementById("effectEditModalTextarea");
    const previewText = document.getElementById("effectPreviewText");
    const previewStyle = document.getElementById("effectPreviewStyle");
    const previewError = document.getElementById("effectPreviewError");
    if (!textarea || !previewText || !previewStyle) return;

    const content = textarea.value;
    if (!content || content === ServerI18n.t("effectLoadContent") || content === ServerI18n.t("effectsNetworkError")) return;

    const params = _getPreviewParams();
    previewError?.classList.add("hidden");

    try {
      const res = await csrfFetch("/admin/effects/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, params }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        previewStyle.textContent = data.keyframes || "";
        previewText.style.animation = data.animation || "none";
        previewText.style.animationComposition = data.animationComposition || "";
      } else {
        previewText.style.animation = "none";
        previewStyle.textContent = "";
        if (previewError) {
          previewError.textContent = data.error || ServerI18n.t("previewFailed");
          previewError.classList.remove("hidden");
        }
      }
    } catch (_) {
      previewText.style.animation = "none";
      previewStyle.textContent = "";
      if (previewError) {
        previewError.textContent = ServerI18n.t("effectsNetworkError");
        previewError.classList.remove("hidden");
      }
    }
  }

  function _triggerPreviewDebounced() {
    clearTimeout(_previewDebounceTimer);
    _previewDebounceTimer = setTimeout(() => _previewEffect(), 500);
  }

  async function initEffectsManagement() {
    // ── Inject Effect Edit Modal (fixed overlay) ──────────────────────────────
    if (!document.getElementById("effectEditModal")) {
      document.body.insertAdjacentHTML("beforeend", `
        <div id="effectEditModal" role="dialog" aria-modal="true" aria-labelledby="effectEditModalTitle" aria-describedby="effectEditModalFile" class="hidden fixed inset-0 z-[9999] items-center justify-content-center" style="background:rgba(0,0,0,0.72);">
          <div class="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-[1100px] mx-4 shadow-2xl flex flex-col max-h-[88vh] overflow-hidden">
            <div class="flex items-center justify-between px-5 py-4 border-b border-slate-800 shrink-0">
              <div>
                <p id="effectEditModalTitle" class="font-bold text-slate-100 text-sm m-0"></p>
                <p id="effectEditModalFile" class="text-[0.7rem] text-slate-500 font-mono mt-0.5 m-0"></p>
              </div>
              <button id="effectEditModalClose" title="Close" aria-label="Close" class="text-slate-500 hover:text-slate-300 bg-transparent border-none cursor-pointer p-1 rounded flex items-center leading-none transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            <div class="flex-1 overflow-hidden flex min-h-0">
              <div class="flex-1 overflow-hidden px-5 py-4 min-h-0 flex flex-col">
                <textarea id="effectEditModalTextarea"
                  class="w-full flex-1 min-h-[300px] bg-slate-950 text-slate-300 text-xs font-mono border border-slate-700 rounded-lg p-3 resize-none outline-none block"
                  spellcheck="false"></textarea>
              </div>
              <div id="effectPreviewPane" class="w-[360px] shrink-0 border-l border-slate-800 px-4 py-4 flex flex-col gap-3 overflow-y-auto">
                <div class="flex items-center justify-between">
                  <p class="text-xs font-semibold text-slate-400 m-0">${ServerI18n.t("livePreviewLabel")}</p>
                  <button id="effectPreviewRefreshBtn" class="px-2 py-0.5 text-[0.65rem] font-medium text-slate-400 border border-slate-700 rounded bg-transparent cursor-pointer transition-colors hover:text-sky-300 hover:border-sky-500">${ServerI18n.t("refresh")}</button>
                </div>
                <div id="effectPreviewBox" style="background:#1e293b;padding:20px;border-radius:8px;display:flex;align-items:center;justify-content:center;min-height:80px;">
                  <span id="effectPreviewText" style="font-size:32px;color:white;display:inline-block;">${ServerI18n.t("previewText")}</span>
                </div>
                <style id="effectPreviewStyle"></style>
                <div id="effectPreviewParams" class="flex flex-col gap-2"></div>
                <p id="effectPreviewError" class="text-xs text-red-400 m-0 hidden"></p>
              </div>
            </div>
            <div class="flex justify-end gap-2 px-5 py-3 border-t border-slate-800 shrink-0">
              <button id="effectEditModalCancel" class="px-4 py-1.5 text-sm text-slate-400 border border-slate-700 rounded-lg bg-transparent cursor-pointer hover:text-slate-200 hover:border-slate-500 transition-colors">${ServerI18n.t("cancel")}</button>
              <button id="effectEditModalSave" class="px-4 py-1.5 text-sm font-semibold bg-sky-700 hover:bg-sky-600 text-white border-none rounded-lg cursor-pointer transition-colors">${ServerI18n.t("saveChanges")}</button>
            </div>
          </div>
        </div>
      `);

      // ── Modal close handlers ───────────────────────────────────────────
      document.getElementById("effectEditModalClose").addEventListener("click", hideEffectModal);
      document.getElementById("effectEditModalCancel").addEventListener("click", hideEffectModal);
      document.getElementById("effectEditModal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) hideEffectModal();
      });

      // Textarea input -> rebuild params + debounced preview
      document.getElementById("effectEditModalTextarea").addEventListener("input", () => {
        const textarea = document.getElementById("effectEditModalTextarea");
        if (textarea) {
          _buildPreviewParams(textarea.value);
          _triggerPreviewDebounced();
        }
      });

      // Refresh button
      document.getElementById("effectPreviewRefreshBtn").addEventListener("click", () => {
        _previewEffect();
      });

      // ── Modal save handler ─────────────────────────────────────────────
      document.getElementById("effectEditModalSave").addEventListener("click", async () => {
        const modal = document.getElementById("effectEditModal");
        const textarea = document.getElementById("effectEditModalTextarea");
        const saveBtn = document.getElementById("effectEditModalSave");
        const name = modal?.dataset.effectName;
        if (!name || !textarea) return;
        saveBtn.disabled = true;
        try {
          const res = await csrfFetch("/admin/effects/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, content: textarea.value }),
          });
          const data = await res.json().catch(() => ({}));
          if (res.ok) {
            showToast(data.message || ServerI18n.t("effectSaveFallback"), true);
            hideEffectModal();
            await fetchEffectsAdmin();
          } else {
            showToast(data.error || ServerI18n.t("saveFailed"), false);
          }
        } catch (_) {
          showToast(ServerI18n.t("effectsNetworkError"), false);
        } finally {
          saveBtn.disabled = false;
        }
      });
    }

    await fetchEffectsAdmin();

    document.getElementById("effectReloadBtn")?.addEventListener("click", async () => {
      const btn = document.getElementById("effectReloadBtn");
      if (btn) btn.disabled = true;
      try {
        const res = await csrfFetch("/admin/effects/reload", { method: "POST" });
        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          showToast(data.message || ServerI18n.t("effectsReloadFallback"));
          await fetchEffectsAdmin();
        } else {
          showToast(data.error || ServerI18n.t("reloadFailed"), false);
        }
      } catch (_) {
        showToast(ServerI18n.t("effectsNetworkError"), false);
      } finally {
        if (btn) btn.disabled = false;
      }
    });

    document.getElementById("effectUploadInput")?.addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const formData = new FormData();
      formData.append("effectfile", file);
      try {
        const res = await csrfFetch("/admin/effects/upload", { method: "POST", body: formData });
        const data = await res.json().catch(() => ({}));
        if (res.ok) {
          showToast(data.message || ServerI18n.t("effectUploadFallback"));
          await fetchEffectsAdmin();
        } else {
          showToast(data.error || ServerI18n.t("uploadFailed"), false);
        }
      } catch (_) {
        showToast(ServerI18n.t("effectsNetworkError"), false);
      } finally {
        e.target.value = "";
      }
    });
  }

  async function fetchEffectsAdmin() {
    const container = document.getElementById("effectsList");
    if (!container) return;
    try {
      const res = await csrfFetch("/admin/effects");
      if (!res.ok) {
        container.innerHTML = '<span class="text-xs text-red-400">' + ServerI18n.t("effectsLoadFailed") + '</span>';
        return;
      }
      const data = await res.json();
      renderEffectsList(data.effects || []);
    } catch (_) {
      container.innerHTML = '<span class="text-xs text-red-400">' + ServerI18n.t("effectsNetworkError") + '</span>';
    }
  }

  function renderEffectsList(effects) {
    const container = document.getElementById("effectsList");
    if (!container) return;
    if (!effects.length) {
      container.innerHTML =
        '<span class="text-xs text-slate-500 col-span-3">' + ServerI18n.t("noEffectsLoaded") + '</span>';
      return;
    }
    container.innerHTML = "";
    effects.forEach((eff) => {
      const card = document.createElement("div");
      const tooltip = [eff.description, `file: ${eff.filename}`].filter(Boolean).join("\n");
      card.title = tooltip;
      card.className = "bg-slate-800/60 border border-slate-600/40 rounded-lg px-2 py-1.5 flex items-center gap-2 transition-colors min-w-0 hover:border-slate-500/65";

      const dot = document.createElement("span");
      dot.className = "w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0";
      card.appendChild(dot);

      const textWrap = document.createElement("div");
      textWrap.className = "flex-1 min-w-0";
      const labelEl = document.createElement("div");
      labelEl.className = "font-semibold text-slate-200 text-xs whitespace-nowrap overflow-hidden text-ellipsis leading-tight";
      var _ek = "effect_" + eff.name;
      labelEl.textContent = ServerI18n.t(_ek) !== _ek ? ServerI18n.t(_ek) : (eff.label || eff.name);
      const nameEl = document.createElement("div");
      nameEl.className = "text-[0.62rem] text-slate-500 font-mono whitespace-nowrap overflow-hidden text-ellipsis leading-tight";
      nameEl.textContent = eff.name;
      textWrap.appendChild(labelEl);
      textWrap.appendChild(nameEl);
      card.appendChild(textWrap);

      const editBtn = document.createElement("button");
      editBtn.className = "px-2 py-0.5 text-[0.65rem] font-medium text-slate-400 border border-slate-700 rounded bg-transparent cursor-pointer shrink-0 transition-colors hover:text-sky-300 hover:border-sky-500";
      editBtn.textContent = ServerI18n.t("edit");

      const delBtn = document.createElement("button");
      delBtn.className = "p-0.5 text-slate-600 bg-transparent border-none cursor-pointer rounded flex items-center shrink-0 transition-colors hover:text-red-400";
      delBtn.title = ServerI18n.t("deleteEffectTitle").replace("{name}", eff.label || eff.name);
      delBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>';

      card.appendChild(editBtn);
      card.appendChild(delBtn);
      container.appendChild(card);

      // ── Edit -> open modal
      editBtn.addEventListener("click", async () => {
        const modal = document.getElementById("effectEditModal");
        const titleEl = document.getElementById("effectEditModalTitle");
        const fileEl = document.getElementById("effectEditModalFile");
        const textarea = document.getElementById("effectEditModalTextarea");
        const saveBtn = document.getElementById("effectEditModalSave");
        if (!modal) return;
        _effectModalRestoreFocusEl =
          document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
        titleEl.textContent = eff.label || eff.name;
        fileEl.textContent = eff.filename;
        textarea.value = ServerI18n.t("effectLoadContent");
        textarea.disabled = true;
        saveBtn.disabled = true;
        modal.dataset.effectName = eff.name;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        modal.addEventListener("keydown", handleEffectModalKeydown);
        textarea.focus();
        // Reset preview pane
        const previewText = document.getElementById("effectPreviewText");
        const previewStyle = document.getElementById("effectPreviewStyle");
        const previewError = document.getElementById("effectPreviewError");
        const previewParams = document.getElementById("effectPreviewParams");
        if (previewText) previewText.style.animation = "none";
        if (previewStyle) previewStyle.textContent = "";
        if (previewError) previewError.classList.add("hidden");
        if (previewParams) previewParams.innerHTML = "";

        try {
          const res = await csrfFetch(`/admin/effects/${encodeURIComponent(eff.name)}/content`);
          const data = await res.json().catch(() => ({}));
          if (res.ok) {
            textarea.value = data.content || "";
            textarea.disabled = false;
            saveBtn.disabled = false;
            textarea.focus();
            _buildPreviewParams(textarea.value);
            _previewEffect();
          } else {
            textarea.value = data.error || ServerI18n.t("effectLoadContentFailed");
            showToast(data.error || ServerI18n.t("effectLoadContentFailed"), false);
          }
        } catch (_) {
          textarea.value = ServerI18n.t("effectsNetworkError");
          showToast(ServerI18n.t("effectsNetworkError"), false);
        }
      });

      // ── Delete handler
      delBtn.addEventListener("click", async () => {
        if (!confirm(ServerI18n.t("deleteEffectConfirm").replace("{name}", eff.label || eff.name))) return;
        try {
          const res = await csrfFetch("/admin/effects/delete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: eff.name }),
          });
          const d = await res.json().catch(() => ({}));
          if (res.ok) {
            showToast(d.message || ServerI18n.t("effectDeleteFallback"), true);
            await fetchEffectsAdmin();
          } else {
            showToast(d.error || ServerI18n.t("deleteFailed"), false);
          }
        } catch (_) {
          showToast(ServerI18n.t("effectsNetworkError"), false);
        }
      });
    });
  }

  window.AdminEffects = { init: initEffectsManagement };
})();
