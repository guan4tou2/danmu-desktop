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

  // ── Built-in effect animations (live card preview fallback) ─────────────────
  // These mirror the 8 bundled .dme files in server/effects/ with their default
  // params resolved. Used to render live animations on effect cards without an
  // HTTP round-trip per card. User .dme uploads use the lazy-fetch path below
  // to render via POST /admin/effects/preview, with results memoized.
  const _BUILTIN_EFFECT_ANIMATIONS = {
    blink: "dme-blink 0.6s step-start infinite",
    bounce: "dme-bounce 0.6s ease-in-out infinite",
    glow: "dme-glow-medium 1.2s ease-in-out infinite",
    rainbow: "dme-rainbow 2s linear infinite",
    shake: "dme-shake 0.25s ease-in-out infinite",
    spin: "dme-spin 1.5s linear infinite normal",
    wave: "dme-wave 0.5s ease-in-out infinite",
    zoom: "dme-zoom 0.8s ease-in-out infinite",
  };

  // ── User .dme card preview cache (P3-2 follow-up) ───────────────────────────
  // name -> { keyframes, animation, animationComposition, styleId } | "failed".
  const _userEffectCache = new Map();
  // Map of effect name -> Promise to dedupe in-flight fetches.
  const _userEffectFetches = new Map();

  function _injectUserEffectStyle(rendered) {
    if (!rendered || !rendered.styleId || !rendered.keyframes) return;
    const id = "dme-user-" + rendered.styleId;
    if (document.getElementById(id)) return;
    const styleEl = document.createElement("style");
    styleEl.id = id;
    styleEl.textContent = rendered.keyframes;
    document.head.appendChild(styleEl);
  }

  async function _loadUserEffectAnimation(name) {
    if (_userEffectCache.has(name)) return _userEffectCache.get(name);
    if (_userEffectFetches.has(name)) return _userEffectFetches.get(name);

    const promise = (async () => {
      try {
        const contentRes = await csrfFetch(`/admin/effects/${encodeURIComponent(name)}/content`);
        if (!contentRes.ok) throw new Error("content fetch failed");
        const contentData = await contentRes.json();
        const content = (contentData && contentData.content) || "";
        if (!content) throw new Error("empty content");

        const previewRes = await csrfFetch("/admin/effects/preview", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content, params: {} }),
        });
        if (!previewRes.ok) throw new Error("preview failed");
        const rendered = await previewRes.json();
        if (!rendered || !rendered.animation) throw new Error("no animation");

        _injectUserEffectStyle(rendered);
        _userEffectCache.set(name, rendered);
        return rendered;
      } catch (_err) {
        _userEffectCache.set(name, "failed");
        return null;
      } finally {
        _userEffectFetches.delete(name);
      }
    })();

    _userEffectFetches.set(name, promise);
    return promise;
  }

  function _applyUserEffectToCard(card, rendered) {
    const demo = card.querySelector(".effect-demo-text");
    if (!demo) return;
    demo.style.animation = rendered.animation || "";
    if (rendered.animationComposition) {
      demo.style.animationComposition = rendered.animationComposition;
    }
    demo.style.animationPlayState = "paused";
    const observer = _getCardVisibilityObserver();
    if (observer) observer.observe(card);
  }

  // IntersectionObserver for pausing off-screen card animations.
  // Lazy-init so headless tests that never scroll still work.
  let _cardVisibilityObserver = null;
  function _getCardVisibilityObserver() {
    if (_cardVisibilityObserver) return _cardVisibilityObserver;
    if (typeof IntersectionObserver === "undefined") return null;
    _cardVisibilityObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target.querySelector(".effect-demo-text");
          if (!el) return;
          // >=50% visible → running, else paused (backlog engineering note).
          el.style.animationPlayState =
            entry.intersectionRatio >= 0.5 ? "running" : "paused";
        });
      },
      { threshold: [0, 0.5, 1] }
    );
    return _cardVisibilityObserver;
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
      label.className = "text-[0.65rem] text-slate-400 font-mono";
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
                <p id="effectEditModalFile" class="text-[0.7rem] text-slate-400 font-mono mt-0.5 m-0"></p>
              </div>
              <button id="effectEditModalClose" title="Close" aria-label="Close" class="text-slate-400 hover:text-slate-300 bg-transparent border-none cursor-pointer p-1 rounded flex items-center leading-none transition-colors">
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

  // ── Category detection + filter state ───────────────────────────────────────
  function detectCategory(name) {
    const n = (name || "").toLowerCase();
    if (n.startsWith("glow") || n.includes("neon")) return "GLOW";
    if (n.startsWith("shake")) return "SHAKE";
    if (n.startsWith("wave") || n.startsWith("spin") || n.startsWith("bounce") || n.startsWith("zoom") || n.startsWith("fire") || n.includes("motion")) return "MOTION";
    if (n.startsWith("rainbow") || n.startsWith("blink") || n.includes("color")) return "COLOR";
    if (n.startsWith("type") || n.includes("text")) return "TEXT";
    return "MISC";
  }

  const _effectsState = {
    all: [],
    filter: "ALL",
    selected: null,
  };

  async function fetchEffectsAdmin() {
    const container = document.getElementById("effectsList");
    if (!container) return;
    try {
      const res = await csrfFetch("/admin/effects");
      if (!res.ok) {
        container.innerHTML = '<span class="text-xs text-red-400" style="grid-column:1 / -1">' + ServerI18n.t("effectsLoadFailed") + '</span>';
        return;
      }
      const data = await res.json();
      _effectsState.all = data.effects || [];
      renderFilterRow();
      renderEffectsList();
    } catch (_) {
      container.innerHTML = '<span class="text-xs text-red-400" style="grid-column:1 / -1">' + ServerI18n.t("effectsNetworkError") + '</span>';
    }
  }

  function renderFilterRow() {
    const row = document.getElementById("effectsFilterRow");
    if (!row) return;
    const counts = { GLOW: 0, MOTION: 0, COLOR: 0, SHAKE: 0, TEXT: 0, MISC: 0 };
    _effectsState.all.forEach((e) => { counts[detectCategory(e.name)] += 1; });
    const total = _effectsState.all.length;
    const chips = [["ALL", "\u5168\u90e8", total], ["GLOW", "GLOW", counts.GLOW], ["MOTION", "MOTION", counts.MOTION], ["COLOR", "COLOR", counts.COLOR], ["SHAKE", "SHAKE", counts.SHAKE], ["TEXT", "TEXT", counts.TEXT]];
    if (counts.MISC > 0) chips.push(["MISC", "MISC", counts.MISC]);
    row.innerHTML = chips.map(([key, label, n]) => {
      const active = _effectsState.filter === key ? "is-active" : "";
      return `<span class="hud-filter-chip ${active}" data-effect-filter="${key}">${label} ${n}</span>`;
    }).join("");
    row.querySelectorAll("[data-effect-filter]").forEach((chip) => {
      chip.addEventListener("click", () => {
        _effectsState.filter = chip.dataset.effectFilter;
        renderFilterRow();
        renderEffectsList();
      });
    });
  }

  function renderEffectsList() {
    const container = document.getElementById("effectsList");
    if (!container) return;
    const all = _effectsState.all;
    const filtered = _effectsState.filter === "ALL"
      ? all
      : all.filter((e) => detectCategory(e.name) === _effectsState.filter);

    if (!filtered.length) {
      container.innerHTML =
        '<span class="text-xs text-slate-400" style="grid-column:1 / -1">' +
        (all.length ? "\u6c92\u6709\u7b26\u5408\u904e\u6ffe\u7684\u6548\u679c" : ServerI18n.t("noEffectsLoaded")) +
        '</span>';
      return;
    }
    // Disconnect previous observer before re-rendering — cards get rebuilt.
    if (_cardVisibilityObserver) {
      _cardVisibilityObserver.disconnect();
    }

    container.innerHTML = "";
    filtered.forEach((eff) => {
      const cat = detectCategory(eff.name);
      const previewClass = cat === "GLOW" ? "is-glow" : cat === "COLOR" ? "is-color" : cat === "TEXT" ? "is-text" : "";
      const builtinAnim = _BUILTIN_EFFECT_ANIMATIONS[eff.name] || "";
      const isBuiltin = !!builtinAnim;

      const card = document.createElement("div");
      card.className = "hud-effect-card" + (_effectsState.selected === eff.name ? " is-selected" : "");
      card.dataset.effectName = eff.name;
      card.title = [eff.description, `file: ${eff.filename}`].filter(Boolean).join("\n");

      var _ek = "effect_" + eff.name;
      const label = ServerI18n.t(_ek) !== _ek ? ServerI18n.t(_ek) : (eff.label || eff.name);
      const author = isBuiltin ? "built-in" : "user";

      // Live-animated demo text. Paused by default; IntersectionObserver flips
      // to running when card is ≥50% visible. Built-ins use the precomputed
      // shorthand; user .dme effects start static and have their animation
      // injected after the preview API responds.
      const demoStyle = builtinAnim
        ? `animation:${builtinAnim};animation-play-state:paused;`
        : "";

      card.innerHTML = `
        <div class="hud-effect-card-head">
          <span class="hud-status-dot is-live"></span>
          <span class="admin-v3-card-kicker" style="margin:0;color:var(--color-text-muted)">${escapeHtml(cat)}</span>
          <span style="margin-left:auto;font-family:var(--font-mono);font-size:9px;color:var(--color-text-muted)">${escapeHtml(eff.filename || "")}</span>
        </div>
        <div class="hud-effect-card-preview effect-card-preview ${previewClass}"><span class="effect-demo-text" style="${demoStyle}">ABC</span></div>
        <div>
          <div class="hud-effect-card-name">${escapeHtml(label)}</div>
          <div class="hud-effect-card-meta">${escapeHtml(author)} \u00b7 ${escapeHtml(eff.name)}</div>
        </div>
        <div class="hud-effect-card-actions">
          <span class="hud-effect-chip is-on" data-role="on">ON</span>
          <button type="button" class="hud-effect-chip" data-role="edit">EDIT</button>
          <button type="button" class="hud-effect-chip" data-role="delete" style="margin-left:auto">DEL</button>
        </div>
      `;
      container.appendChild(card);

      if (builtinAnim) {
        // Built-in effects: observe visibility immediately.
        const observer = _getCardVisibilityObserver();
        if (observer) observer.observe(card);
      } else {
        // User .dme: lazy-fetch keyframes + animation, then apply + observe.
        const cached = _userEffectCache.get(eff.name);
        if (cached && cached !== "failed") {
          _injectUserEffectStyle(cached);
          _applyUserEffectToCard(card, cached);
        } else if (cached !== "failed") {
          _loadUserEffectAnimation(eff.name).then((rendered) => {
            if (!rendered) return;
            const fresh = container.querySelector(
              `.hud-effect-card[data-effect-name="${CSS.escape(eff.name)}"]`
            );
            if (fresh) _applyUserEffectToCard(fresh, rendered);
          });
        }
      }

      // Card click: select + load inspector
      card.addEventListener("click", (e) => {
        if (e.target.closest("[data-role]")) return;
        selectEffect(eff);
      });
      const editBtn = card.querySelector('[data-role="edit"]');
      const delBtn = card.querySelector('[data-role="delete"]');

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

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  async function selectEffect(eff) {
    _effectsState.selected = eff.name;
    const inspector = document.getElementById("effectsInspector");
    const dot = document.getElementById("effectsInspectorDot");
    const titleEl = document.getElementById("effectsInspectorTitle");
    const kicker = document.getElementById("effectsInspectorKicker");
    const body = document.getElementById("effectsInspectorBody");
    if (!inspector) return;
    if (dot) dot.className = "hud-status-dot is-live";
    if (titleEl) titleEl.textContent = eff.filename || eff.name;
    if (kicker) kicker.textContent = "LOADING";
    if (body) body.textContent = "# \u8f09\u5165\u4e2d\u2026";

    // mark selected card
    document.querySelectorAll(".hud-effect-card").forEach((c) => {
      c.classList.toggle("is-selected", c.dataset.effectName === eff.name);
    });

    try {
      const res = await csrfFetch(`/admin/effects/${encodeURIComponent(eff.name)}/content`);
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        if (body) body.textContent = data.content || "";
        if (kicker) kicker.textContent = "HOT-RELOADED";
      } else {
        if (body) body.textContent = "# " + (data.error || ServerI18n.t("effectLoadContentFailed"));
        if (kicker) kicker.textContent = "ERROR";
      }
    } catch (_) {
      if (body) body.textContent = "# " + ServerI18n.t("effectsNetworkError");
      if (kicker) kicker.textContent = "NETWORK";
    }
  }

  function wireInspectorButtons() {
    const reloadBtn = document.getElementById("effectsInspectorReload");
    const editBtn = document.getElementById("effectsInspectorEdit");
    reloadBtn?.addEventListener("click", async () => {
      if (!_effectsState.selected) {
        showToast("\u8acb\u5148\u9078\u64c7\u4e00\u500b\u6548\u679c", false);
        return;
      }
      const eff = _effectsState.all.find((e) => e.name === _effectsState.selected);
      if (eff) await selectEffect(eff);
    });
    editBtn?.addEventListener("click", () => {
      if (!_effectsState.selected) {
        showToast("\u8acb\u5148\u9078\u64c7\u4e00\u500b\u6548\u679c", false);
        return;
      }
      const card = document.querySelector(`.hud-effect-card[data-effect-name="${CSS.escape(_effectsState.selected)}"]`);
      card?.querySelector('[data-role="edit"]')?.click();
    });
  }

  // Wire inspector once after initial DOM injection
  const _inspectorObserver = new MutationObserver(() => {
    if (document.getElementById("effectsInspector") && !document.getElementById("effectsInspector").dataset.wired) {
      document.getElementById("effectsInspector").dataset.wired = "1";
      wireInspectorButtons();
    }
  });
  _inspectorObserver.observe(document.body, { childList: true, subtree: true });

  window.AdminEffects = { init: initEffectsManagement };
})();
