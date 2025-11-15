// Internationalization (i18n) support for danmu-desktop
const i18n = {
  currentLang: "en",

  translations: {
    en: {
      // Header
      title: "Danmu Overlay Setup",
      subtitle: "Configure and launch the overlay",

      // Form labels
      hostLabel: "Server Address (IP or Domain)",
      hostPlaceholder: "e.g., 127.0.0.1 or mydomain.com",
      portLabel: "WebSocket Port",
      portPlaceholder: "e.g., 4001",
      displayLabel: "Target Display",
      syncMultiDisplay: "Enable synchronous multi-display",

      // Buttons
      startButton: "Start Overlay",
      stopButton: "Stop Overlay",

      // Status
      statusConnecting: "Connecting to server...",
      statusConnected: "Connected to server",
      statusDisconnected: "Connection lost, reconnecting...",
      statusIdle: "Disconnected",
      statusStopped: "Stopped",

      // Toast messages
      toastStarting: "Starting overlay connection...",
      toastConnected: "Successfully connected to server",
      toastReconnecting: "Connection lost, attempting to reconnect...",
      toastStopped: "Overlay stopped",
      toastSettingsLoaded: "Previous settings loaded",

      // Validation errors
      errorEmptyHost: "Please enter a server address",
      errorInvalidHost: "Invalid server address. Please enter a valid IP or domain",
      errorEmptyPort: "Please enter a port number",
      errorInvalidPort: "Invalid port. Please enter a number between 1 and 65535",

      // Preview & Settings
      previewSettings: "Preview & Settings",
      testDanmu: "Test Danmu",
      previewPlaceholder: "Enter test danmu text...",
      sendPreview: "Send",
      overlaySettings: "Overlay Settings",
      opacity: "Opacity",
      speed: "Speed",
      fontSize: "Font Size",
      color: "Color",
      applySettings: "Apply Settings to Overlay",
      errorEmptyPreview: "Please enter preview text",
      errorOverlayNotActive: "Please start the overlay first",
      previewSent: "Preview danmu sent!",
      settingsApplied: "Settings applied to overlay",
    },

    zh: {
      // Header
      title: "彈幕覆蓋層設定",
      subtitle: "配置並啟動覆蓋層",

      // Form labels
      hostLabel: "伺服器位址（IP 或網域）",
      hostPlaceholder: "例如：127.0.0.1 或 mydomain.com",
      portLabel: "WebSocket 連接埠",
      portPlaceholder: "例如：4001",
      displayLabel: "目標顯示器",
      syncMultiDisplay: "啟用同步多顯示器",

      // Buttons
      startButton: "啟動覆蓋層",
      stopButton: "停止覆蓋層",

      // Status
      statusConnecting: "正在連線至伺服器...",
      statusConnected: "已連線至伺服器",
      statusDisconnected: "連線中斷，重新連線中...",
      statusIdle: "已中斷連線",
      statusStopped: "已停止",

      // Toast messages
      toastStarting: "正在啟動覆蓋層連線...",
      toastConnected: "成功連線至伺服器",
      toastReconnecting: "連線中斷，正在嘗試重新連線...",
      toastStopped: "覆蓋層已停止",
      toastSettingsLoaded: "已載入先前的設定",

      // Validation errors
      errorEmptyHost: "請輸入伺服器位址",
      errorInvalidHost: "無效的伺服器位址。請輸入有效的 IP 或網域",
      errorEmptyPort: "請輸入連接埠號碼",
      errorInvalidPort: "無效的連接埠。請輸入 1 到 65535 之間的數字",

      // Preview & Settings
      previewSettings: "預覽與設定",
      testDanmu: "測試彈幕",
      previewPlaceholder: "輸入測試彈幕文字...",
      sendPreview: "發送",
      overlaySettings: "覆蓋層設定",
      opacity: "不透明度",
      speed: "速度",
      fontSize: "字體大小",
      color: "顏色",
      applySettings: "套用設定至覆蓋層",
      errorEmptyPreview: "請輸入預覽文字",
      errorOverlayNotActive: "請先啟動覆蓋層",
      previewSent: "預覽彈幕已發送！",
      settingsApplied: "設定已套用至覆蓋層",
    },
  },

  // Get translation for a key
  t(key) {
    return this.translations[this.currentLang]?.[key] || key;
  },

  // Set language
  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      this.updateUI();
      localStorage.setItem("danmu-lang", lang);
    }
  },

  // Load saved language
  loadLanguage() {
    const saved = localStorage.getItem("danmu-lang");
    if (saved && this.translations[saved]) {
      this.currentLang = saved;
    } else {
      // Auto-detect language
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith("zh")) {
        this.currentLang = "zh";
      }
    }
  },

  // Update UI with current language
  updateUI() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = this.t(key);
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });

    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.getAttribute("data-i18n-placeholder");
      element.placeholder = this.t(key);
    });
  },
};

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = i18n;
}
