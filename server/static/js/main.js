document.addEventListener("DOMContentLoaded", () => {
  // Viewer v2 background is a static dark navy gradient (see viewer-v2.css).
  // VANTA.NET animation was removed to match the handoff design — the viewer
  // page is a calm launcher, not a screensaver.

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
    effectsCount: document.getElementById("effectsCount"),
    effectsTotal: document.getElementById("effectsTotal"),

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

    // Send bar pill — border turns cyan when text is present
    sendbarPill: document.getElementById("sendbarPill"),

    // Viewer tabs + poll pane
    viewerTabButtons: Array.from(document.querySelectorAll("[data-viewer-tab]")),
    viewerFirePane: document.getElementById("viewerFirePane"),
    viewerPollPane: document.getElementById("viewerPollPane"),
    pollStateLabel: document.querySelector("[data-vpoll-state-label]"),
    pollQuestion: document.querySelector("[data-vpoll-question]"),
    pollMeta: document.querySelector("[data-vpoll-meta]"),
    pollOptions: document.querySelector("[data-vpoll-options]"),
  };

  function _resolveViewerPollEnabled() {
    // Prototype baseline (Danmu Redesign.html) defaults pollEnabled=false.
    // Keep viewer poll closed unless explicitly enabled.
    try {
      const cfg = window.DANMU_CONFIG?.viewer?.pollEnabled;
      if (cfg === true || cfg === "true" || cfg === 1 || cfg === "1") return true;
    } catch (_) {
      /* ignore */
    }
    try {
      const q = new URLSearchParams(window.location.search).get("poll");
      if (!q) return false;
      return q === "1" || q.toLowerCase() === "true" || q.toLowerCase() === "on";
    } catch (_) {
      return false;
    }
  }

  const VIEWER_POLL_ENABLED = _resolveViewerPollEnabled();

  function _applyViewerPollGate() {
    if (VIEWER_POLL_ENABLED) return;
    const pollTabBtn = document.querySelector('[data-viewer-tab="poll"]');
    if (pollTabBtn) pollTabBtn.remove();
    if (elements.viewerPollPane) {
      elements.viewerPollPane.remove();
      elements.viewerPollPane = null;
    }
    const tabbar = document.querySelector(".viewer-tabbar");
    elements.viewerTabButtons = Array.from(document.querySelectorAll("[data-viewer-tab]"));
    if (tabbar && elements.viewerTabButtons.length <= 1) {
      tabbar.setAttribute("hidden", "");
    }
  }

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
  let _viewerMode = "fire";
  let _viewerPollState = {
    state: "idle",
    question: "",
    options: [],
    totalVotes: 0,
  };
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
    elements.charCount.classList.toggle("is-near", count >= 90);
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
      const color = elements.colorInput.value;
      elements.previewText.style.color = color;
      // Glow effect: viewer.jsx — `0 0 12px ${color}, 0 2px 4px rgba(0,0,0,0.6)`
      elements.previewText.style.textShadow = selectedEffects["glow"]
        ? `0 0 12px ${color}, 0 2px 4px rgba(0,0,0,0.6)`
        : "";
    }
    if (elements.sizeInput) {
      const fontSize = parseFloat(elements.sizeInput.value) || 32;
      elements.previewText.style.fontSize = `${fontSize}px`;
      // Prototype viewer.jsx:130 — @nick scales with main fontSize:
      //   fontSize: max(11, fontSize * 0.42)
      const previewNick = document.getElementById("previewNick");
      if (previewNick) {
        previewNick.style.fontSize = `${Math.max(11, fontSize * 0.42)}px`;
      }
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

  function _setViewerMode(mode) {
    const nextMode =
      VIEWER_POLL_ENABLED && mode === "poll" ? "poll" : "fire";
    _viewerMode = nextMode;
    if (elements.viewerFirePane) {
      const isFire = nextMode === "fire";
      elements.viewerFirePane.hidden = !isFire;
      elements.viewerFirePane.classList.toggle("is-active", isFire);
    }
    if (elements.viewerPollPane) {
      const isPoll = nextMode === "poll";
      elements.viewerPollPane.hidden = !isPoll;
      elements.viewerPollPane.classList.toggle("is-active", isPoll);
    }
    (elements.viewerTabButtons || []).forEach((btn) => {
      const isActive = btn.dataset.viewerTab === nextMode;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
      btn.setAttribute("tabindex", isActive ? "0" : "-1");
    });
  }

  function _normalizePollState(raw) {
    if (!raw || typeof raw !== "object") {
      return { state: "idle", question: "", options: [], totalVotes: 0 };
    }
    const state = String(raw.state || "idle");
    const list = Array.isArray(raw.questions) ? raw.questions : [];
    const idx = Number.isInteger(raw.current_index) ? raw.current_index : -1;
    const currentQuestion =
      list.length > 0
        ? (idx >= 0 && idx < list.length ? list[idx] : list[0])
        : null;
    const question = String(
      currentQuestion?.text || raw.question || ""
    ).trim();
    const rawOptions = Array.isArray(currentQuestion?.options)
      ? currentQuestion.options
      : Array.isArray(raw.options)
        ? raw.options
        : [];
    const normalizedOptions = rawOptions
      .map((opt) => {
        const key = String(opt?.key || "").trim().toUpperCase();
        if (!key) return null;
        const countNum = Number(opt?.count);
        const count = Number.isFinite(countNum) ? countNum : 0;
        const pctNum = Number(opt?.percentage);
        const percentage = Number.isFinite(pctNum) ? pctNum : 0;
        return {
          key,
          text: String(opt?.text || key),
          count,
          percentage,
        };
      })
      .filter(Boolean);
    let totalVotesNum = Number(currentQuestion?.total_votes);
    if (!Number.isFinite(totalVotesNum)) {
      totalVotesNum = Number(raw.total_votes);
    }
    if (!Number.isFinite(totalVotesNum)) {
      totalVotesNum = normalizedOptions.reduce((acc, item) => acc + item.count, 0);
    }
    return {
      state,
      question,
      options: normalizedOptions,
      totalVotes: totalVotesNum,
    };
  }

  function _renderPollPane() {
    if (!VIEWER_POLL_ENABLED) return;
    if (!elements.pollQuestion || !elements.pollMeta || !elements.pollOptions) {
      return;
    }
    const poll = _viewerPollState;
    if (elements.pollStateLabel) {
      elements.pollStateLabel.textContent =
        poll.state === "active"
          ? "即時投票 · 進行中"
          : poll.state === "ended"
            ? "即時投票 · 已結束"
            : "即時投票";
    }
    if (poll.question) {
      elements.pollQuestion.textContent = poll.question;
    } else {
      elements.pollQuestion.textContent = "目前沒有進行中的投票";
    }
    elements.pollMeta.textContent =
      poll.state === "active"
        ? `總票數 ${poll.totalVotes}`
        : poll.state === "ended"
          ? "投票已結束，可切回 Fire 模式送出一般訊息"
          : "請先切回 Fire 模式送出訊息";

    elements.pollOptions.innerHTML = "";
    if (!poll.options.length) return;
    poll.options.forEach((opt) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "viewer-poll-option";
      button.dataset.vpollKey = opt.key;
      button.setAttribute("data-vpoll-key", opt.key);

      const row = document.createElement("div");
      row.className = "viewer-poll-option-row";

      const key = document.createElement("span");
      key.className = "viewer-poll-option-key";
      key.textContent = opt.key;

      const text = document.createElement("span");
      text.className = "viewer-poll-option-text";
      text.textContent = opt.text;

      const stat = document.createElement("span");
      stat.className = "viewer-poll-option-stat";
      stat.textContent = `${opt.count} (${opt.percentage}%)`;

      row.appendChild(key);
      row.appendChild(text);
      row.appendChild(stat);
      button.appendChild(row);

      button.addEventListener("click", () => {
        if (!elements.danmuText) return;
        elements.danmuText.value = opt.key;
        elements.danmuText.dispatchEvent(new Event("input", { bubbles: true }));
        elements.danmuText.focus();
        _setViewerMode("fire");
      });
      elements.pollOptions.appendChild(button);
    });
  }

  function _applyPollState(raw) {
    if (!VIEWER_POLL_ENABLED) return;
    _viewerPollState = _normalizePollState(raw);
    if (_viewerPollState.question) {
      window._lastPollQuestion = _viewerPollState.question;
    }
    _renderPollPane();
  }

  function _bindViewerTabs() {
    if (!elements.viewerTabButtons || elements.viewerTabButtons.length === 0) {
      return;
    }
    elements.viewerTabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        _setViewerMode(btn.dataset.viewerTab || "fire");
      });
    });
    _setViewerMode("fire");
  }

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

  const updateSendEnabled = () => {
    if (!elements.btnSend) return;
    const hasText = elements.danmuText.value.trim().length > 0;
    elements.btnSend.disabled = !hasText;
    elements.sendbarPill?.classList.toggle("is-active", hasText);
  };
  elements.danmuText.addEventListener("input", () => {
    updateCharCount();
    updatePreview();
    updateSendEnabled();
  });
  updateSendEnabled();

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
      const swatches = document.querySelectorAll(".viewer-swatch-preset");
      let matched = false;
      swatches.forEach((sw) => {
        const c = (sw.getAttribute("data-color") || "").toLowerCase();
        if (c === color.toLowerCase()) {
          sw.classList.add("is-active");
          matched = true;
        } else {
          sw.classList.remove("is-active");
        }
      });
      if (elements.danmuText) {
        elements.danmuText.style.color = color;
      }
      updatePreview();
    });
  }

  document.querySelectorAll(".viewer-swatch-preset").forEach((btn) => {
    btn.addEventListener("click", () => {
      const color = btn.getAttribute("data-color");
      if (!color || !elements.colorInput) return;
      elements.colorInput.value = color;
      elements.colorInput.dispatchEvent(new Event("input", { bubbles: true }));
    });
  });

  // Update --progress CSS var so the cyan track fill in viewer-v2.css matches
  // the slider's value (Safari ignores accent-color on the track).
  const _syncRangeProgress = (el) => {
    if (!el) return;
    const min = parseFloat(el.min) || 0;
    const max = parseFloat(el.max) || 100;
    const val = parseFloat(el.value);
    const pct = max > min ? ((val - min) / (max - min)) * 100 : 50;
    el.style.setProperty("--progress", `${pct}%`);
  };

  if (elements.sizeInput) {
    _syncRangeProgress(elements.sizeInput);
    elements.sizeInput.addEventListener("input", (e) => {
      if (elements.sizeValue) {
        // HTML wraps with literal `px` after </span> — write number only.
        elements.sizeValue.textContent = e.target.value;
      }
      _syncRangeProgress(e.target);
      updatePreview();
    });
  }

  // Init speed display with one decimal to match prototype `1.0x` shape.
  if (elements.speedRange && elements.speedValue) {
    const sv = parseFloat(elements.speedRange.value);
    if (Number.isFinite(sv)) elements.speedValue.textContent = sv.toFixed(1);
  }

  if (elements.opacityRange) {
    _syncRangeProgress(elements.opacityRange);
    elements.opacityRange.addEventListener("input", (e) => {
      // HTML wraps with literal `%` after </span> — write number only.
      elements.opacityValue.textContent = e.target.value;
      _syncRangeProgress(e.target);
      updatePreview();
    });
  }

  if (elements.speedRange) {
    _syncRangeProgress(elements.speedRange);
    elements.speedRange.addEventListener("input", (e) => {
      // Match prototype `${speed.toFixed(1)}x` — always show one decimal
      // (e.g. 1.0x not 1x) so the column doesn't shrink when speed lands
      // on an integer.
      const v = parseFloat(e.target.value);
      elements.speedValue.textContent = Number.isFinite(v) ? v.toFixed(1) : e.target.value;
      _syncRangeProgress(e.target);
    });
  }

  // ── Theme toggle (single icon button) — prototype viewer.jsx:553 ──────────
  // Icon shows current state: ◐ when dark, ◑ when light. Click toggles.
  // Default = dark (matches prototype `theme = 'dark'` default in ViewerCore).
  const themeBtn = document.querySelector("[data-viewer-theme-toggle]");
  if (themeBtn) {
    const iconEl = themeBtn.querySelector("[data-viewer-theme-icon]");
    const applyTheme = (mode) => {
      const dark = mode === "dark";
      document.body.classList.toggle("is-dark", dark);
      if (iconEl) iconEl.textContent = dark ? "◐" : "◑";
      themeBtn.setAttribute("aria-pressed", dark ? "true" : "false");
      themeBtn.title = dark ? "切換到淺色" : "切換到深色";
      try { localStorage.setItem("viewer-theme", mode); } catch (_) {}
    };
    let initial = "dark";
    try { initial = localStorage.getItem("viewer-theme") || "dark"; } catch (_) {}
    applyTheme(initial);
    themeBtn.addEventListener("click", () => {
      const cur = document.body.classList.contains("is-dark") ? "dark" : "light";
      applyTheme(cur === "dark" ? "light" : "dark");
    });
  }

  // ── Language dropdown (4 langs) — prototype viewer.jsx:519 ────────────────
  // Native <select> overlay; the visible label mirrors the current selection.
  // i18n.js already wires the change event on #server-lang-select.
  const langSelect = document.getElementById("server-lang-select");
  const langCurrentLabel = document.querySelector("[data-viewer-lang-current]");
  if (langSelect && langCurrentLabel) {
    const LABEL_BY_VAL = { zh: "中文", en: "English", ja: "日本語", ko: "한국어" };
    const syncLangLabel = () => {
      const v = (langSelect.value || "zh").toLowerCase();
      const key = v.startsWith("zh") ? "zh" : v.startsWith("en") ? "en" : v.startsWith("ja") ? "ja" : v.startsWith("ko") ? "ko" : "zh";
      langCurrentLabel.textContent = LABEL_BY_VAL[key] || "中文";
    };
    syncLangLabel();
    langSelect.addEventListener("change", syncLangLabel);
  }

  _applyViewerPollGate();
  _bindViewerTabs();
  _renderPollPane();
  if (VIEWER_POLL_ENABLED) {
    window.addEventListener("viewer-poll-state", (event) => {
      _applyPollState(event.detail || {});
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
    let hasUndesignedPanel = false;
    for (const [name] of Object.entries(selectedEffects)) {
      const def = _effectDefs.find((e) => e.name === name);
      if (!def || !def.params || Object.keys(def.params).length === 0) continue;
      hasUndesignedPanel = true;
      break;
    }
    if (hasUndesignedPanel) {
      elements.effectParamsPanel.innerHTML = [
        '<div class="rounded-md border border-dashed border-slate-600 bg-slate-900/40 p-3">',
        '<p class="text-xs font-mono text-slate-300">[PLACEHOLDER] Effect Parameters</p>',
        '<p class="mt-1 text-xs text-slate-400">Prototype 尚未提供每個效果的參數面板設計，暫以文字+方框占位。</p>',
        "</div>",
      ].join("");
    }
  }

  function _updateEffectsCount() {
    if (elements.effectsCount) {
      elements.effectsCount.textContent = String(Object.keys(selectedEffects).length);
    }
  }

  function _buildEffectButtons(effects) {
    if (!elements.effectButtons) return;
    elements.effectButtons.innerHTML = "";
    if (elements.effectsTotal) {
      elements.effectsTotal.textContent = String(effects.length);
    }
    _updateEffectsCount();

    effects.forEach((eff) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.effectName = eff.name;
      btn.className = "effect-btn viewer-chip";
      btn.title = eff.description || "";
      var effI18nKey = "effect_" + eff.name;
      var label = ServerI18n.t(effI18nKey) !== effI18nKey ? ServerI18n.t(effI18nKey) : (eff.label || eff.name);
      var bullet = document.createElement("span");
      bullet.className = "viewer-chip-bullet";
      bullet.textContent = "\u25CB"; // ○ off
      btn.appendChild(bullet);
      btn.appendChild(document.createTextNode(" " + label));
      btn.setAttribute("aria-pressed", "false");
      btn.addEventListener("click", () => {
        if (selectedEffects[eff.name]) {
          delete selectedEffects[eff.name];
          btn.classList.remove("effect-btn--active", "is-active");
          btn.setAttribute("aria-pressed", "false");
          bullet.textContent = "\u25CB";
        } else {
          const defaults = {};
          for (const [k, v] of Object.entries(eff.params || {})) defaults[k] = v.default;
          selectedEffects[eff.name] = defaults;
          btn.classList.add("effect-btn--active", "is-active");
          btn.setAttribute("aria-pressed", "true");
          bullet.textContent = "\u25CF"; // ● on
        }
        _updateEffectsCount();
        _refreshParamsPanel();
        updatePreview();
      });
      elements.effectButtons.appendChild(btn);
    });

    if (effects.length === 0) {
      elements.effectButtons.innerHTML = `<span class="viewer-field-label">${ServerI18n.t("noEffectsAvailable")}</span>`;
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

  // Theme selector removed from viewer — per design brief, theme packs are
  // admin-only. Active theme is applied server-side; viewer just fires text.

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
        speed: elements.speedRange ? parseFloat(elements.speedRange.value) : null,
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
      let responseData = {};
      try {
        responseData = await response.json();
      } catch (_) {
        responseData = {};
      }

      if (response.ok) {
        elements.danmuText.value = "";
        updateCharCount();
        updatePreview();
        try {
          if (window.ViewerStates && document.body.dataset.viewerState === "ratelimit") {
            window.ViewerStates.hide();
          }
        } catch (_) {}
        showToast(ServerI18n.t("danmuFired"), true);
        // Server-driven thank-you: only show when /fire explicitly confirms
        // this message was accepted as a poll vote.
        try {
          const vote = responseData && responseData.poll_vote;
          if (window.ViewerStates && vote && vote.accepted === true) {
            window.ViewerStates.showThankYou({
              question: vote.question || window._lastPollQuestion || "進行中的投票",
              choice: vote.key || "",
              fp: clientFingerprint,
            });
          }
        } catch (_) { }
      } else {
        if (response.status === 429) {
          const retryAfterHeader = response.headers.get("Retry-After");
          const retryAfter = Number.parseInt(retryAfterHeader || "0", 10);
          if (window.ViewerStates && typeof window.ViewerStates.showRateLimited === "function") {
            window.ViewerStates.showRateLimited({
              retryAfter: Number.isFinite(retryAfter) ? retryAfter : 0,
            });
          } else {
            showToast("發送太快，請稍後再試", false);
          }
          return;
        }
        let message = ServerI18n.t("failedToSend");
        try {
          const data = responseData || {};
          message = (typeof data.error === "string" ? data.error : data.error?.message) || message;
          // P3 ViewerBanned: 403 with banned/blocked reason → show banned
          // state instead of just a toast.
          if (response.status === 403 && window.ViewerStates) {
            const lower = String(message).toLowerCase();
            if (lower.indexOf("ban") !== -1 || lower.indexOf("block") !== -1
                || message.indexOf("禁言") !== -1 || message.indexOf("封鎖") !== -1) {
              window.ViewerStates.showBanned({
                fp: clientFingerprint,
                reason: message,
              });
              return;
            }
          }
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
  // Dot lives inside a viewer-conn-chip; target it by the state-bearing class,
  // not by `.connection-dot` (the base class was dropped in the 2-col hero).
  function _resetDotState(dot) {
    if (!dot) return;
    dot.classList.remove(
      "connection-dot--connected",
      "connection-dot--connecting",
      "connection-dot--disconnected",
      "connection-dot--failed",
      "connection-dot--live",
    );
  }

  function updateConnectionUI(state) {
    if (!elements.connectionStatus) return;
    const dot = elements.connectionStatus.querySelector("[class*='connection-dot--']") ||
                elements.connectionStatus.querySelector(".viewer-conn-chip-dot") ||
                elements.connectionStatus.querySelector(".connection-dot");
    if (!dot || !elements.connectionLabel) return;

    _resetDotState(dot);
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
    const dot = elements.overlayStatus.querySelector("[class*='connection-dot--']") ||
                elements.overlayStatus.querySelector(".viewer-conn-chip-dot") ||
                elements.overlayStatus.querySelector(".connection-dot");
    if (!dot) return;
    _resetDotState(dot);
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

  // --- Session ended handler ---
  // Called when admin closes the active session. Behavior is admin-configured:
  //   "continue"     — do nothing (viewer keeps working in IDLE mode)
  //   "ended_screen" — disable input, show full-screen ended overlay
  //   "reload"       — auto-reload page after 3 s
  function _handleSessionEnded(behavior) {
    console.log("[viewer] session_ended received, behavior:", behavior);
    if (behavior === "continue") return;

    if (behavior === "reload") {
      setTimeout(() => { window.location.reload(); }, 3000);
      return;
    }

    if (behavior === "ended_screen") {
      // Disable the message form
      const form = document.getElementById("fireForm") || document.querySelector("form");
      if (form) {
        form.querySelectorAll("input, button, textarea").forEach((el) => { el.disabled = true; });
      }
      // Show ended overlay (reuse viewer-state system if available, else inject)
      if (window.ViewerStates && window.ViewerStates.show) {
        window.ViewerStates.show("ended");
      } else {
        _showSessionEndedFallback();
      }
    }
  }

  function _showSessionEndedFallback() {
    const existing = document.getElementById("viewer-session-ended-overlay");
    if (existing) return;
    const el = document.createElement("div");
    el.id = "viewer-session-ended-overlay";
    el.style.cssText = [
      "position:fixed", "inset:0", "z-index:9000",
      "background:rgba(10,14,26,.92)",
      "display:flex", "flex-direction:column",
      "align-items:center", "justify-content:center",
      "color:#e6e8ee", "font-family:inherit", "text-align:center", "padding:32px",
    ].join(";");
    el.innerHTML = `
      <div style="font-size:48px;margin-bottom:16px">🎉</div>
      <div style="font-size:22px;font-weight:700;margin-bottom:8px">本場活動已結束</div>
      <div style="font-size:14px;color:#9aa4b2;line-height:1.6">感謝您的參與！</div>`;
    document.body.appendChild(el);
  }

  // --- WebSocket ---
  let _wsReconnectAttempt = 0;
  const WS_BASE_DELAY = 3000;
  const WS_MAX_RECONNECT_DELAY = 30000;

  // ── Offline state (P2-1) ──────────────────────────────────────────────────
  // After 3 failed reconnect attempts within a 30s window we swap the
  // .viewer-body content with the offline card. Resets on successful connect.
  const OFFLINE_FAIL_THRESHOLD = 3;
  const OFFLINE_WINDOW_MS = 30000;
  const OFFLINE_RETRY_SECONDS = 15;
  let _wsFailTimestamps = [];
  let _offlineCardActive = false;
  let _offlineCountdownTimer = null;
  let _offlineBodyHtml = null;

  function _recordWsFailure() {
    const now = Date.now();
    _wsFailTimestamps.push(now);
    _wsFailTimestamps = _wsFailTimestamps.filter(
      (t) => now - t <= OFFLINE_WINDOW_MS
    );
    if (
      !_offlineCardActive &&
      _wsFailTimestamps.length >= OFFLINE_FAIL_THRESHOLD
    ) {
      showOfflineCard();
    }
  }

  function _getOpsContact() {
    // Optional operator contact — read from /get_settings payload. Safe to
    // call even if the key is absent (we only render if truthy).
    if (currentSettings && typeof currentSettings.OpsContact !== "undefined") {
      const oc = currentSettings.OpsContact;
      if (Array.isArray(oc)) return oc[3] || oc[0] || null;
      if (typeof oc === "string") return oc;
    }
    return null;
  }

  function showOfflineCard() {
    _setViewerMode("fire");
    const body = document.querySelector(".viewer-body");
    if (!body || _offlineCardActive) return;
    _offlineCardActive = true;
    _offlineBodyHtml = body.innerHTML;

    const opsContact = _getOpsContact();
    const contactHtml = opsContact
      ? `<a class="viewer-offline-btn is-secondary" href="${opsContact}" target="_blank" rel="noopener noreferrer">${ServerI18n.t("offlineContactOps")}</a>`
      : "";

    body.innerHTML = `
      <div class="viewer-offline-card" role="alert" aria-live="assertive">
        <h2 class="viewer-offline-lockup">Danmu Fire</h2>
        <span class="viewer-offline-chip">
          <span class="viewer-offline-chip-dot" aria-hidden="true"></span>
          <span>${ServerI18n.t("offlineStatus")}</span>
        </span>
        <p class="viewer-offline-message">
          ${ServerI18n.t("offlineMessage")}
          <small>${ServerI18n.t("offlineHint")}</small>
        </p>
        <div class="viewer-offline-countdown" id="offlineCountdown" aria-live="polite">
          <span id="offlineCountdownValue">${OFFLINE_RETRY_SECONDS}</span>
          <span>${ServerI18n.t("offlineRetryUnit")}</span>
        </div>
        <div class="viewer-offline-actions">
          <button type="button" class="viewer-offline-btn" id="offlineReloadBtn">
            ${ServerI18n.t("offlineReload")}
          </button>
          ${contactHtml}
        </div>
      </div>
    `;

    // Disable sendbar while offline (keep visible per design).
    if (elements.btnSend) elements.btnSend.disabled = true;
    if (elements.danmuText) elements.danmuText.disabled = true;

    const btn = document.getElementById("offlineReloadBtn");
    if (btn) btn.addEventListener("click", () => window.location.reload());
    _startOfflineCountdown();
  }

  function _startOfflineCountdown() {
    let remaining = OFFLINE_RETRY_SECONDS;
    const valueEl = document.getElementById("offlineCountdownValue");
    if (_offlineCountdownTimer) clearInterval(_offlineCountdownTimer);
    _offlineCountdownTimer = setInterval(() => {
      remaining -= 1;
      if (valueEl) valueEl.textContent = String(Math.max(0, remaining));
      if (remaining <= 0) {
        clearInterval(_offlineCountdownTimer);
        _offlineCountdownTimer = null;
        // One nudge — trigger an immediate reconnect attempt. ws.onclose
        // already schedules retries, but we collapse the backoff here.
        try { if (ws && ws.readyState !== WebSocket.OPEN) ws.close(); } catch (_) {}
        connectWebSocket();
        // Reset countdown for the next cycle (still offline = keep visible).
        if (_offlineCardActive) _startOfflineCountdown();
      }
    }, 1000);
  }

  function hideOfflineCard() {
    if (!_offlineCardActive) return;
    _offlineCardActive = false;
    _wsFailTimestamps = [];
    if (_offlineCountdownTimer) {
      clearInterval(_offlineCountdownTimer);
      _offlineCountdownTimer = null;
    }
    const body = document.querySelector(".viewer-body");
    if (body && _offlineBodyHtml !== null) {
      body.innerHTML = _offlineBodyHtml;
      _offlineBodyHtml = null;
      // Re-bind controls after DOM restore — easiest is a soft reload of the
      // nickname/fields, but most values are driven by settings + WS push.
      // Just re-run input wiring for the core inputs that persisted via IDs.
    }
    if (elements.btnSend) elements.btnSend.disabled = false;
    if (elements.danmuText) elements.danmuText.disabled = false;
    updateSendEnabled();
  }

  function connectWebSocket() {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/`;

    updateConnectionUI("connecting");
    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log("Connected to WebSocket");
      _wsReconnectAttempt = 0;
      _wsFailTimestamps = [];
      if (_offlineCardActive) hideOfflineCard();
      updateConnectionUI("connected");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "poll_update" && VIEWER_POLL_ENABLED) {
          _applyPollState(data);
        } else if (data.type === "settings_changed") {
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
        } else if (data.type === "session_ended") {
          _handleSessionEnded(data.behavior || "continue");
        }
      } catch (e) {
        console.error("Error processing WebSocket message:", e);
      }
    };

    ws.onclose = () => {
      _wsReconnectAttempt++;
      _recordWsFailure();
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

      // Nickname → preview-nick (top-left of the preview block) live
      // sync. No `@` prefix. Save to localStorage on change.
      (function wireNickname() {
        if (!nicknameInput) return;
        const previewNick = document.getElementById("previewNick");
        const renderNick = () => {
          const v = (nicknameInput.value || "").trim();
          if (previewNick) previewNick.textContent = v;
          try { localStorage.setItem("danmu_nickname", v); } catch (_) {}
        };
        nicknameInput.addEventListener("input", renderNick);
        renderNick();
      })();

      // Layout mode buttons
      const layoutBtns = document.querySelectorAll(".layout-btn");
      const layoutSelect = document.getElementById("layoutSelect");
      if (layoutBtns.length > 0 && layoutSelect) {
        layoutBtns.forEach((btn) => {
          btn.addEventListener("click", () => {
            layoutBtns.forEach((b) => {
              b.classList.remove("active", "is-active", "bg-sky-500/20", "text-sky-300", "border-sky-500/30");
              b.classList.add("bg-slate-700/50", "text-slate-300", "border-slate-600/30");
              b.setAttribute("aria-pressed", "false");
            });
            btn.classList.remove("bg-slate-700/50", "text-slate-300", "border-slate-600/30");
            btn.classList.add("active", "is-active", "bg-sky-500/20", "text-sky-300", "border-sky-500/30");
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
