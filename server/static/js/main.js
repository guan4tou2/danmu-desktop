document.addEventListener("DOMContentLoaded", () => {
  // --- VANTA.js background initialization ---
  try {
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3b82f6,
      backgroundColor: 0x000000,
      points: 12.0,
      maxDistance: 25.0,
      spacing: 18.0,
    });
  } catch (e) {
    console.warn("Vanta.js failed to initialize", e);
  }

  // --- Element selectors ---
  const elements = {
    danmuText: document.getElementById("danmuText"),
    charCount: document.getElementById("charCount"),
    previewText: document.getElementById("previewText"),
    btnSend: document.getElementById("btnSend"),
    btnSendText: document.getElementById("btnSendText"),
    btnSendIcon: document.getElementById("btnSendIcon"),
    btnSendSpinner: document.getElementById("btnSendSpinner"),

    // Controls (consistent camelCase IDs)
    colorControl: document.getElementById("colorControl"),
    colorInput: document.getElementById("colorInput"),
    colorValue: document.getElementById("colorValue"),
    colorGradientPreview: document.getElementById("colorGradientPreview"),
    opacityControl: document.getElementById("opacityControl"),
    opacityRange: document.getElementById("opacityRange"),
    opacityValue: document.getElementById("opacityValue"),
    fontSizeControl: document.getElementById("fontSizeControl"),
    sizeInput: document.getElementById("sizeInput"),
    sizeValue: document.getElementById("sizeValue"),
    speedControl: document.getElementById("speedControl"),
    speedRange: document.getElementById("speedRange"),
    speedValue: document.getElementById("speedValue"),

    // User font selection
    userFontSelectControl: document.getElementById("userFontSelectControl"),
    userFontSelect: document.getElementById("userFontSelect"),

    // Effect UI
    effectButtons: document.getElementById("effectButtons"),
    effectParamsPanel: document.getElementById("effectParamsPanel"),

    // Toast container
    toastContainer: document.getElementById("toast-container"),

    // Blacklist Warning Modal Elements
    blacklistWarningModal: document.getElementById("blacklistWarningModal"),
    blacklistWarningMessage: document.getElementById("blacklistWarningMessage"),
    blacklistWarningOkBtn: document.getElementById("blacklistWarningOkBtn"),

    // Connection status
    connectionStatus: document.getElementById("connectionStatus"),
    connectionLabel: document.getElementById("connectionLabel"),
    overlayStatus: document.getElementById("overlayStatus"),
    overlayLabel: document.getElementById("overlayLabel"),
  };

  // --- Helper utilities ---
  const scheduleIdleTask = (cb, timeout = 500) => {
    if ("requestIdleCallback" in window) {
      return window.requestIdleCallback(cb, { timeout });
    }
    return setTimeout(cb, timeout);
  };

  // --- State management ---
  let currentSettings = {};
  let ws = null;
  // selectedEffects: { [name]: {params} } — multi-select effect state
  let _effectDefs = [];         // Effect definitions loaded from /effects API
  const selectedEffects = {};   // name -> {params}
  let autoDismissTimer = null;
  let fontRefreshTimer = null;
  let blacklistModalRestoreFocusEl = null;
  const FONT_REFRESH_BUFFER_SECONDS = 60;
  let fontsCache = [];
  let emojiCache = []; // [{name, url, filename}] — populated by /emojis fetch
  const FONT_CACHE_STORAGE_KEY = "danmu-fonts-cache";
  const clientFingerprint = getOrCreateFingerprint();

  function getOrCreateFingerprint() {
    try {
      const storage = window.localStorage;
      if (!storage) {
        return generateFallbackFingerprint();
      }
      let fp = storage.getItem("danmuFingerprint");
      if (!fp) {
        fp = generateFallbackFingerprint();
        storage.setItem("danmuFingerprint", fp);
      }
      return fp;
    } catch (error) {
      console.warn("Unable to access localStorage for fingerprint:", error);
      return generateFallbackFingerprint();
    }
  }

  function generateFallbackFingerprint() {
    if (window.crypto && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return (
      "fp-" +
      Math.random().toString(36).substring(2, 10) +
      Date.now().toString(36)
    );
  }

  function loadFontsFromCache() {
    try {
      if (!window.localStorage) return null;
      const raw = window.localStorage.getItem(FONT_CACHE_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed.expiresAt || parsed.expiresAt < Date.now()) {
        return null;
      }
      return parsed;
    } catch (error) {
      console.warn("Unable to parse font cache:", error);
      return null;
    }
  }

  function persistFontCache(fonts, tokenTTL) {
    try {
      if (!window.localStorage) return;
      const ttlSeconds = Math.max(tokenTTL || 0, FONT_REFRESH_BUFFER_SECONDS);
      window.localStorage.setItem(
        FONT_CACHE_STORAGE_KEY,
        JSON.stringify({
          fonts,
          tokenTTL,
          expiresAt: Date.now() + ttlSeconds * 1000,
        })
      );
    } catch (error) {
      console.warn("Unable to persist font cache:", error);
    }
  }

  // --- Functions ---

  function scheduleFontRefresh(ttlSeconds) {
    if (fontRefreshTimer) {
      clearTimeout(fontRefreshTimer);
    }
    if (!ttlSeconds || Number.isNaN(ttlSeconds)) {
      return;
    }
    const delay = Math.max(
      (ttlSeconds - FONT_REFRESH_BUFFER_SECONDS) * 1000,
      60 * 1000
    );
    fontRefreshTimer = setTimeout(() => {
      scheduleIdleTask(() => {
        const allowChoice =
          currentSettings &&
          currentSettings.FontFamily &&
          currentSettings.FontFamily[0];
        if (allowChoice) {
          populateUserFontDropdown(false, true);
        } else {
          refreshFontCache(true)
            .then(() => updatePreview())
            .catch((error) => {
              console.error("Error refreshing font cache:", error);
            });
        }
      });
    }, delay);
  }

  async function refreshFontCache(forceNetwork = false) {
    if (!forceNetwork) {
      const cached = loadFontsFromCache();
      if (cached) {
        fontsCache = cached.fonts || [];
        scheduleFontRefresh(cached.tokenTTL || 0);
        return fontsCache;
      }
    }
    const response = await fetch("/fonts", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch font list");
    }
    const payload = await response.json();
    fontsCache = payload.fonts || [];
    persistFontCache(fontsCache, payload.tokenTTL || 0);
    scheduleFontRefresh(payload.tokenTTL || 0);
    return fontsCache;
  }

  function escapeCSSString(str) {
    return str.replace(/[\\"'();\n\r]/g, "\\$&");
  }

  function ensureFontFaceLoaded(fontName, fontUrl) {
    if (!fontUrl) return;
    const safeName = fontName.replace(/\s+/g, "-");
    const styleId = `font-style-preview-${safeName}`;
    if (!document.getElementById(styleId)) {
      const escapedFontName = escapeCSSString(fontName);
      const escapedFontUrl = escapeCSSString(fontUrl);
      const fontFaceRule = `@font-face { font-family: "${escapedFontName}"; src: url("${escapedFontUrl}"); }`;
      const styleSheet = document.createElement("style");
      styleSheet.id = styleId;
      styleSheet.type = "text/css";
      styleSheet.innerText = fontFaceRule;
      document.head.appendChild(styleSheet);
    }
  }

  async function checkTextAgainstBlacklist(text) {
    try {
      const response = await fetch("/check_blacklist", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
      });
      if (response.ok) {
        const result = await response.json();
        return result.blocked;
      } else {
        console.error("Failed to check blacklist:", response.statusText);
        return false;
      }
    } catch (error) {
      console.error("Error checking blacklist:", error);
      return false;
    }
  }

  function showBlacklistWarningModal(message) {
    if (elements.blacklistWarningModal && elements.blacklistWarningMessage) {
      blacklistModalRestoreFocusEl =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;

      elements.blacklistWarningMessage.textContent = message;
      elements.blacklistWarningModal.style.display = "flex";
      elements.blacklistWarningModal.setAttribute("aria-modal", "true");

      if (autoDismissTimer) {
        clearTimeout(autoDismissTimer);
      }
      autoDismissTimer = setTimeout(hideBlacklistWarningModal, 5000);

      setTimeout(() => {
        elements.blacklistWarningModal.classList.add("visible");
        elements.blacklistWarningModal.classList.add("flashing");
        const okBtn = elements.blacklistWarningOkBtn;
        if (okBtn) okBtn.focus();
      }, 20);
    }
  }

  function getBlacklistModalFocusableElements() {
    if (!elements.blacklistWarningModal) return [];
    return Array.from(
      elements.blacklistWarningModal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(
      (el) =>
        !el.hasAttribute("disabled") &&
        el.getAttribute("aria-hidden") !== "true"
    );
  }

  function handleBlacklistModalKeydown(event) {
    if (!elements.blacklistWarningModal) return;
    if (event.key === "Escape") {
      event.preventDefault();
      hideBlacklistWarningModal();
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = getBlacklistModalFocusableElements();
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

  function hideBlacklistWarningModal() {
    if (autoDismissTimer) {
      clearTimeout(autoDismissTimer);
      autoDismissTimer = null;
    }
    if (elements.blacklistWarningModal) {
      elements.blacklistWarningModal.classList.remove("visible");
      elements.blacklistWarningModal.classList.remove("flashing");
      setTimeout(() => {
        elements.blacklistWarningModal.style.display = "none";
      }, 300);
    }
    if (blacklistModalRestoreFocusEl) {
      blacklistModalRestoreFocusEl.focus();
      blacklistModalRestoreFocusEl = null;
    }
  }

  // Bind blacklist modal OK button via addEventListener (no inline onclick)
  if (elements.blacklistWarningOkBtn) {
    elements.blacklistWarningOkBtn.addEventListener("click", hideBlacklistWarningModal);
  }
  if (elements.blacklistWarningModal) {
    elements.blacklistWarningModal.addEventListener(
      "keydown",
      handleBlacklistModalKeydown
    );
  }

  // Check if URL is an image
  const parseSafeImageUrl = (url) => {
    if (!url) return null;
    try {
      const parsed = new URL(url, window.location.origin);
      if (!["http:", "https:"].includes(parsed.protocol)) return null;
      if (!/\.(jpeg|jpg|gif|png|webp|svg)$/i.test(parsed.pathname)) return null;
      return parsed.href;
    } catch (error) {
      return null;
    }
  };

  const isImageUrl = (url) => parseSafeImageUrl(url) != null;

  // Update character count
  const updateCharCount = () => {
    const count = elements.danmuText.value.length;
    elements.charCount.textContent = `${count}/100`;
    elements.charCount.classList.toggle("text-red-400", count >= 90);
  };

  // Update preview
  const updatePreview = () => {
    const text = elements.danmuText.value;
    const safeImageSrc = parseSafeImageUrl(text);
    const isImage = safeImageSrc != null;

    if (isImage) {
      elements.previewText.textContent = "";
      const img = document.createElement("img");
      img.src = safeImageSrc;
      img.className = "max-h-24 rounded-lg shadow-md";
      img.alt = "Danmu Preview";
      elements.previewText.appendChild(img);
    } else if (text && emojiCache.length > 0 && /:[a-zA-Z0-9_]{1,32}:/.test(text)) {
      // Render :emoji_name: tokens as inline <img> using the cached emoji list.
      // textContent is unsafe for HTML, so we build DOM nodes manually.
      elements.previewText.textContent = "";
      const emojiMap = Object.create(null);
      emojiCache.forEach((e) => { emojiMap[e.name] = e; });
      const re = /:([a-zA-Z0-9_]{1,32}):/g;
      let lastIndex = 0;
      let m;
      while ((m = re.exec(text)) !== null) {
        if (m.index > lastIndex) {
          elements.previewText.appendChild(
            document.createTextNode(text.slice(lastIndex, m.index))
          );
        }
        const entry = emojiMap[m[1]];
        if (entry) {
          const img = document.createElement("img");
          img.src = entry.url;
          img.alt = m[1];
          img.style.cssText = "display:inline-block;height:1em;vertical-align:middle;margin:0 2px;";
          elements.previewText.appendChild(img);
        } else {
          elements.previewText.appendChild(document.createTextNode(m[0]));
        }
        lastIndex = m.index + m[0].length;
      }
      if (lastIndex < text.length) {
        elements.previewText.appendChild(document.createTextNode(text.slice(lastIndex)));
      }
    } else {
      elements.previewText.textContent = text || ServerI18n.t("preview");
    }

    // Apply styles
    if (elements.colorInput) {
      elements.previewText.style.color = elements.colorInput.value;
    }
    if (elements.sizeInput) {
      elements.previewText.style.fontSize = `${elements.sizeInput.value}px`;
    }
    if (elements.opacityRange) {
      elements.previewText.style.opacity = elements.opacityRange.value / 100;
    }

    // Apply font if selected
    if (
      currentSettings.FontFamily &&
      currentSettings.FontFamily[0] &&
      elements.userFontSelect &&
      elements.userFontSelect.value
    ) {
      const selectedFontName = elements.userFontSelect.value;
      const fontData = fontsCache.find((f) => f.name === selectedFontName);
      if (fontData) {
        if (fontData.url) {
          ensureFontFaceLoaded(fontData.name, fontData.url);
        }
        elements.previewText.style.fontFamily = `"${fontData.name}"`;
      } else {
        elements.previewText.style.fontFamily = "inherit";
      }
    } else {
      elements.previewText.style.fontFamily = "inherit";
    }
  };

  async function populateUserFontDropdown(
    forceRefresh = false,
    background = false
  ) {
    if (!elements.userFontSelect) return;

    try {
      const fonts = await refreshFontCache(forceRefresh);
      const currentVal = elements.userFontSelect.value;

      elements.userFontSelect.innerHTML = "";

      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = ServerI18n.t("defaultFont");
      elements.userFontSelect.appendChild(defaultOption);

      fonts.forEach((font) => {
        const option = document.createElement("option");
        option.value = font.name;
        option.textContent = font.name;
        elements.userFontSelect.appendChild(option);
      });

      if (currentVal) {
        const exists = fonts.some((f) => f.name === currentVal);
        if (exists) {
          elements.userFontSelect.value = currentVal;
        }
      }

      if (!background) {
        console.log("User font dropdown populated with", fonts.length, "fonts");
      }
    } catch (error) {
      console.error("Failed to populate user font dropdown:", error);
      if (!background) {
        showToast(ServerI18n.t("failedToLoadFonts"), false);
      }
    }
  }

  // --- Event Listeners ---

  elements.danmuText.addEventListener("input", () => {
    updateCharCount();
    updatePreview();
  });

  // Enter to send, Shift+Enter for newline
  // e.isComposing: true during IME composition, skip to avoid accidental send
  elements.danmuText.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
      e.preventDefault();
      elements.btnSend.click();
    }
  });

  if (elements.colorInput) {
    elements.colorInput.addEventListener("input", (e) => {
      const color = e.target.value;
      if (elements.colorValue) {
        elements.colorValue.textContent = color.toUpperCase();
      }
      if (elements.colorGradientPreview) {
        elements.colorGradientPreview.style.backgroundImage = "none";
        elements.colorGradientPreview.style.backgroundColor = color;
      }
      updatePreview();
    });
  }

  if (elements.sizeInput) {
    elements.sizeInput.addEventListener("input", (e) => {
      if (elements.sizeValue) {
        elements.sizeValue.textContent = `${e.target.value}px`;
      }
      updatePreview();
    });
  }

  if (elements.opacityRange) {
    elements.opacityRange.addEventListener("input", (e) => {
      elements.opacityValue.textContent = `${e.target.value}%`;
      updatePreview();
    });
  }

  if (elements.speedRange) {
    elements.speedRange.addEventListener("input", (e) => {
      elements.speedValue.textContent = e.target.value;
    });
  }

  if (elements.userFontSelect) {
    elements.userFontSelect.addEventListener("change", updatePreview);
  }

  // ── Effects System (dynamically loaded from .dme files) ───────────────────

  function _renderParamControl(effectName, paramKey, paramDef, currentVal) {
    const wrap = document.createElement("div");
    wrap.className = "flex items-center gap-2 text-xs text-slate-400";

    const lbl = document.createElement("span");
    lbl.className = "w-20 shrink-0";
    lbl.textContent = paramDef.label || paramKey;
    wrap.appendChild(lbl);

    if (paramDef.type === "select") {
      const sel = document.createElement("select");
      sel.className = "bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded px-2 py-1";
      sel.dataset.effectName = effectName;
      sel.dataset.paramKey = paramKey;
      (paramDef.options || []).forEach((opt) => {
        const o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.label;
        if (opt.value === (currentVal ?? paramDef.default)) o.selected = true;
        sel.appendChild(o);
      });
      sel.addEventListener("change", () => {
        if (selectedEffects[effectName]) selectedEffects[effectName][paramKey] = sel.value;
      });
      wrap.appendChild(sel);
    } else {
      const slider = document.createElement("input");
      slider.type = "range";
      slider.className = "flex-1";
      slider.min = paramDef.min ?? 0;
      slider.max = paramDef.max ?? 10;
      slider.step = paramDef.step ?? 0.1;
      slider.value = currentVal ?? paramDef.default;
      slider.dataset.effectName = effectName;
      slider.dataset.paramKey = paramKey;

      const val = document.createElement("span");
      val.className = "w-10 text-right text-slate-300";
      val.textContent = slider.value;

      slider.addEventListener("input", () => {
        val.textContent = slider.value;
        if (selectedEffects[effectName]) selectedEffects[effectName][paramKey] = Number(slider.value);
      });
      wrap.appendChild(slider);
      wrap.appendChild(val);
    }
    return wrap;
  }

  function _refreshParamsPanel() {
    if (!elements.effectParamsPanel) return;
    elements.effectParamsPanel.innerHTML = "";
    for (const [name, params] of Object.entries(selectedEffects)) {
      const def = _effectDefs.find((e) => e.name === name);
      if (!def || !def.params || Object.keys(def.params).length === 0) continue;

      const section = document.createElement("div");
      section.className = "bg-slate-800/60 rounded-lg p-2 space-y-1";

      const title = document.createElement("p");
      title.className = "text-xs font-medium text-sky-400 mb-1";
      title.textContent = def.label;
      section.appendChild(title);

      for (const [pkey, pdef] of Object.entries(def.params)) {
        section.appendChild(_renderParamControl(name, pkey, pdef, params[pkey]));
      }
      elements.effectParamsPanel.appendChild(section);
    }
  }

  function _buildEffectButtons(effects) {
    if (!elements.effectButtons) return;
    elements.effectButtons.innerHTML = "";

    effects.forEach((eff) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.effectName = eff.name;
      btn.className = "effect-btn px-3 py-1 rounded-full text-xs font-medium border border-slate-600 bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors";
      btn.title = eff.description || "";
      var effI18nKey = "effect_" + eff.name;
      btn.textContent = ServerI18n.t(effI18nKey) !== effI18nKey ? ServerI18n.t(effI18nKey) : (eff.label || eff.name);
      btn.setAttribute("aria-pressed", "false");
      btn.addEventListener("click", () => {
        if (selectedEffects[eff.name]) {
          delete selectedEffects[eff.name];
          btn.classList.remove("effect-btn--active");
          btn.setAttribute("aria-pressed", "false");
        } else {
          // Build default params
          const defaults = {};
          for (const [k, v] of Object.entries(eff.params || {})) defaults[k] = v.default;
          selectedEffects[eff.name] = defaults;
          btn.classList.add("effect-btn--active");
          btn.setAttribute("aria-pressed", "true");
        }
        _refreshParamsPanel();
      });
      elements.effectButtons.appendChild(btn);
    });

    if (effects.length === 0) {
      elements.effectButtons.innerHTML = `<span class="text-xs text-slate-400">${ServerI18n.t("noEffectsAvailable")}</span>`;
    }
  }

  async function loadEffects() {
    try {
      const res = await fetch("/effects");
      if (!res.ok) return;
      const data = await res.json();
      _effectDefs = data.effects || [];
      _buildEffectButtons(_effectDefs);
    } catch (e) {
      console.warn("[Effects] Failed to load effects:", e.message);
      if (elements.effectButtons) {
        elements.effectButtons.innerHTML = `<span class="text-xs text-slate-400">${ServerI18n.t("failedToLoad")}</span>`;
      }
    }
  }

  loadEffects();

  // ── Theme Selector ────────────────────────────────────────────────────────

  let _activeThemeName = "default";

  async function loadThemes() {
    try {
      const res = await fetch("/themes");
      if (!res.ok) return;
      const data = await res.json();
      const themes = data.themes || [];
      _activeThemeName = data.active || "default";
      _buildThemeSelector(themes, _activeThemeName);
    } catch (e) {
      console.warn("[Themes] Failed to load themes:", e.message);
    }
  }

  function _buildThemeSelector(themes, activeName) {
    const effectControl = document.getElementById("effectControl");
    if (!effectControl) return;

    // Remove existing theme selector if any
    const existing = document.getElementById("themeSelector");
    if (existing) existing.remove();

    if (themes.length === 0) return;

    const wrapper = document.createElement("div");
    wrapper.id = "themeSelector";
    wrapper.className = "flex items-center gap-2 mb-2";

    const label = document.createElement("span");
    label.className = "text-xs text-slate-400 shrink-0";
    label.textContent = "Theme";
    wrapper.appendChild(label);

    const select = document.createElement("select");
    select.id = "themeSelect";
    select.className =
      "bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded px-2 py-1 flex-1";

    themes.forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t.name;
      var tLabelKey = "theme_" + t.name;
      var tDescKey = tLabelKey + "_desc";
      var tLabel = ServerI18n.t(tLabelKey) !== tLabelKey ? ServerI18n.t(tLabelKey) : t.label;
      var tDesc = ServerI18n.t(tDescKey) !== tDescKey ? ServerI18n.t(tDescKey) : t.description;
      opt.textContent = tLabel + " - " + tDesc;
      if (t.name === activeName) opt.selected = true;
      select.appendChild(opt);
    });

    select.addEventListener("change", () => {
      _activeThemeName = select.value;
    });

    wrapper.appendChild(select);

    // Insert before effectControl
    effectControl.parentNode.insertBefore(wrapper, effectControl);
  }

  loadThemes();

  // --- Send Button Loading State ---
  function setSendLoading(loading) {
    if (!elements.btnSend) return;
    elements.btnSend.disabled = loading;
    if (elements.btnSendText) elements.btnSendText.textContent = loading ? ServerI18n.t("sending") : ServerI18n.t("fireDanmu");
    if (elements.btnSendIcon) elements.btnSendIcon.classList.toggle("hidden", loading);
    if (elements.btnSendSpinner) elements.btnSendSpinner.classList.toggle("hidden", !loading);
  }

  // Send Danmu
  elements.btnSend.addEventListener("click", async () => {
    const text = elements.danmuText.value.trim();
    if (!text) {
      showToast(ServerI18n.t("pleaseEnterText"), false);
      return;
    }

    setSendLoading(true);

    try {
      // Check blacklist first
      const isBlocked = await checkTextAgainstBlacklist(text);
      if (isBlocked) {
        showBlacklistWarningModal(ServerI18n.t("blacklistBlocked"));
        setSendLoading(false);
        return;
      }

      // Nickname from localStorage
      const nicknameInput = document.getElementById("nicknameInput");
      const nickname = nicknameInput ? nicknameInput.value.trim() : null;
      if (nicknameInput && nickname) {
        try { localStorage.setItem("danmu_nickname", nickname); } catch (_) { }
      }

      // Layout mode
      const layoutSelect = document.getElementById("layoutSelect");
      const layout = layoutSelect ? layoutSelect.value : null;

      const payload = {
        text: text,
        color: elements.colorInput ? elements.colorInput.value : null,
        size: elements.sizeInput ? parseInt(elements.sizeInput.value) : null,
        speed: elements.speedRange ? parseInt(elements.speedRange.value) : null,
        opacity: elements.opacityRange
          ? parseInt(elements.opacityRange.value)
          : null,
        font:
          elements.userFontSelect && elements.userFontSelect.value
            ? elements.userFontSelect.value
            : null,
        effects: Object.entries(selectedEffects).map(([name, params]) => ({ name, params })),
        fingerprint: clientFingerprint,
        nickname: nickname || undefined,
        layout: layout || undefined,
      };

      const response = await fetch("/fire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        elements.danmuText.value = "";
        updateCharCount();
        updatePreview();
        showToast(ServerI18n.t("danmuFired"), true);
      } else {
        let message = ServerI18n.t("failedToSend");
        try {
          const data = await response.json();
          message = (typeof data.error === "string" ? data.error : data.error?.message) || message;
        } catch (_) { }
        showToast(message, false);
      }
    } catch (error) {
      console.error("Error:", error);
      showToast(ServerI18n.t("networkError"), false);
    } finally {
      setSendLoading(false);
    }
  });

  // --- Connection Status UI ---
  function updateConnectionUI(state) {
    if (!elements.connectionStatus) return;
    const dot = elements.connectionStatus.querySelector(".connection-dot");
    if (!dot || !elements.connectionLabel) return;

    dot.className = "connection-dot"; // reset
    switch (state) {
      case "connected":
        dot.classList.add("connection-dot--connected");
        elements.connectionLabel.textContent = ServerI18n.t("connected");
        break;
      case "connecting":
        dot.classList.add("connection-dot--connecting");
        elements.connectionLabel.textContent = ServerI18n.t("connecting");
        break;
      case "disconnected":
        dot.classList.add("connection-dot--disconnected");
        elements.connectionLabel.textContent = ServerI18n.t("disconnected");
        break;
    }
  }

  // --- Overlay Status Polling ---
  function updateOverlayUI(count) {
    if (!elements.overlayStatus || !elements.overlayLabel) return;
    const dot = elements.overlayStatus.querySelector(".connection-dot");
    if (!dot) return;
    dot.className = "connection-dot";
    if (count > 0) {
      dot.classList.add("connection-dot--connected");
      elements.overlayLabel.textContent = ServerI18n.t("overlayConnected").replace("{n}", count);
    } else {
      dot.classList.add("connection-dot--disconnected");
      elements.overlayLabel.textContent = ServerI18n.t("overlayNone");
    }
  }

  function pollOverlayStatus() {
    fetch("/overlay_status")
      .then((r) => r.json())
      .then((data) => updateOverlayUI(data.overlay_count || 0))
      .catch(() => updateOverlayUI(0));
  }

  pollOverlayStatus();
  setInterval(pollOverlayStatus, 5000);

  // --- WebSocket ---
  let _wsReconnectAttempt = 0;
  const WS_BASE_DELAY = 3000;
  const WS_MAX_RECONNECT_DELAY = 30000;

  function connectWebSocket() {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/`;

    updateConnectionUI("connecting");
    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log("Connected to WebSocket");
      _wsReconnectAttempt = 0;
      updateConnectionUI("connected");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "settings_changed") {
          console.log("Settings updated:", data.settings);
          currentSettings = data.settings;

          // Update Font Selection UI
          if (currentSettings.FontFamily && currentSettings.FontFamily[0]) {
            if (elements.userFontSelectControl) {
              elements.userFontSelectControl.style.display = "block";
              populateUserFontDropdown();
            }
          } else {
            if (elements.userFontSelectControl) {
              elements.userFontSelectControl.style.display = "none";
            }
          }

          // Update Effects UI visibility
          applyEffectsVisibility(currentSettings);

          updatePreview();
        }
      } catch (e) {
        console.error("Error processing WebSocket message:", e);
      }
    };

    ws.onclose = () => {
      _wsReconnectAttempt++;
      const delay = Math.min(
        WS_BASE_DELAY * Math.pow(2, _wsReconnectAttempt - 1),
        WS_MAX_RECONNECT_DELAY
      );
      const jitter = delay * 0.2 * Math.random();
      const totalDelay = Math.round(delay + jitter);
      console.log(`WebSocket disconnected, retrying in ${totalDelay}ms (attempt ${_wsReconnectAttempt})...`);
      updateConnectionUI("disconnected");
      setTimeout(connectWebSocket, totalDelay);
    };

    ws.onerror = (err) => {
      console.error("WebSocket error:", err);
      updateConnectionUI("disconnected");
    };
  }

  // --- Helper: Apply Effects section visibility based on settings ---
  function applyEffectsVisibility(settings) {
    const effectsEnabled = settings.Effects ? settings.Effects[0] !== false : true;
    const effectControl = document.getElementById("effectControl");
    if (effectControl) {
      effectControl.style.display = effectsEnabled ? "" : "none";
    }
    if (!effectsEnabled) {
      Object.keys(selectedEffects).forEach((k) => delete selectedEffects[k]);
      if (elements.effectParamsPanel) elements.effectParamsPanel.innerHTML = "";
    }
  }

  // --- Initialization ---
  fetch("/get_settings")
    .then((res) => res.json())
    .then((settings) => {
      currentSettings = settings;

      // Handle Font Selection UI
      if (settings.FontFamily && settings.FontFamily[0]) {
        if (elements.userFontSelectControl) {
          elements.userFontSelectControl.style.display = "block";
          populateUserFontDropdown();
        }
      } else {
        if (elements.userFontSelectControl) {
          elements.userFontSelectControl.style.display = "none";
        }
        refreshFontCache(true).catch(() => { });
      }

      // Apply Effects visibility
      applyEffectsVisibility(settings);

      // Initialize WebSocket for real-time updates
      connectWebSocket();

      // Sync preview with initial input values
      updatePreview();

      // Restore nickname from localStorage
      const nicknameInput = document.getElementById("nicknameInput");
      if (nicknameInput) {
        try {
          const saved = localStorage.getItem("danmu_nickname");
          if (saved) nicknameInput.value = saved;
        } catch (_) { }
      }

      // Layout mode buttons
      const layoutBtns = document.querySelectorAll(".layout-btn");
      const layoutSelect = document.getElementById("layoutSelect");
      if (layoutBtns.length > 0 && layoutSelect) {
        layoutBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            layoutBtns.forEach((b) => {
              b.classList.remove("active", "bg-sky-500/20", "text-sky-300", "border-sky-500/30");
              b.classList.add("bg-slate-700/50", "text-slate-300", "border-slate-600/30");
              b.setAttribute("aria-pressed", "false");
            });
            btn.classList.remove("bg-slate-700/50", "text-slate-300", "border-slate-600/30");
            btn.classList.add("active", "bg-sky-500/20", "text-sky-300", "border-sky-500/30");
            btn.setAttribute("aria-pressed", "true");
            layoutSelect.value = btn.dataset.layout;
          });
        });
      }

      // Load emoji picker
      const emojiPicker = document.getElementById("emojiPicker");
      if (emojiPicker) {
        fetch("/emojis")
          .then((r) => r.json())
          .then((data) => {
            const emojis = data.emojis || [];
            emojiCache = emojis;
            updatePreview();
            if (emojis.length === 0) {
              emojiPicker.innerHTML = '<span class="text-xs text-slate-400">No emojis available</span>';
              return;
            }
            emojiPicker.innerHTML = "";
            emojis.forEach((em) => {
              const btn = document.createElement("button");
              btn.type = "button";
              btn.className = "emoji-picker-btn p-1 rounded hover:bg-slate-700/50 transition-colors";
              btn.title = ":" + em.name + ":";
              const img = document.createElement("img");
              img.src = em.url;
              img.alt = em.name;
              img.style.cssText = "width:32px;height:32px;";
              btn.appendChild(img);
              btn.addEventListener("click", (ev) => {
                // Prevent the implicit submit + scroll-to-top behaviour: focusing
                // a far-away textarea would yank the page back to the input, so
                // we capture and restore both window and emoji-picker scroll.
                ev.preventDefault();
                const textarea = elements.danmuText;
                const insertText = ":" + em.name + ":";
                const start = textarea.selectionStart ?? textarea.value.length;
                const end = textarea.selectionEnd ?? start;
                textarea.value =
                  textarea.value.substring(0, start) + insertText + textarea.value.substring(end);
                const newCursor = start + insertText.length;
                const winY = window.scrollY;
                const winX = window.scrollX;
                const pickerScroll = emojiPicker.scrollTop;
                try {
                  textarea.focus({ preventScroll: true });
                } catch (_) {
                  textarea.focus();
                }
                textarea.setSelectionRange(newCursor, newCursor);
                window.scrollTo(winX, winY);
                emojiPicker.scrollTop = pickerScroll;
                updateCharCount();
                updatePreview();
              });
              emojiPicker.appendChild(btn);
            });
          })
          .catch(() => {
            emojiPicker.innerHTML = '<span class="text-xs text-slate-400">Failed to load emojis</span>';
          });
      }
    })
    .catch((err) => console.error("Failed to load settings:", err));
});
