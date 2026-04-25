/**
 * Danmu 特效插件系統
 *
 * SHARED MODULE — single source of truth.
 *   Consumed by:
 *     - danmu-desktop/renderer-modules/danmu-effects.js  (symlink, webpack-bundled)
 *     - server/static/js/danmu-effects.js                (symlink, plain <script>)
 *
 * Dual-mode export:
 *   - CommonJS:  const { register, apply, list } = require("./danmu-effects");
 *   - Browser:   <script src="…/danmu-effects.js">  →  window.DanmuEffects.{register,apply,list}
 *
 * Mirrors the 8 built-in `.dme` server effects (server/effects/*.dme) with
 * the `de-` CSS prefix to avoid collision with the server's `dme-` prefix.
 * The Electron renderer uses these client-side; the server uses .dme files
 * via /effects API. Same labels, different transport.
 *
 * 第三方擴充方式：
 *   window.DanmuEffects.register({
 *     name: 'myEffect',
 *     label: '我的特效',
 *     apply(el, opts) { el.style.animation = '...'; },
 *     defaultOptions: { duration: '1s' },
 *   });
 */

(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }
  if (typeof window !== "undefined") {
    window.DanmuEffects = api;
  }
})(typeof self !== "undefined" ? self : this, function () {
  /* CSS keyframes（以 de- 前綴避免衝突） */
  const _BASE_CSS = `
    @keyframes de-spin    { to { transform: rotate(360deg); } }
    @keyframes de-blink   { 0%,100%{opacity:1} 50%{opacity:0} }
    @keyframes de-shake   { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }
    @keyframes de-bounce  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
    @keyframes de-rainbow { to { filter: hue-rotate(360deg); } }
    @keyframes de-glow    {
      0%,100% { filter: brightness(1)    drop-shadow(0 0  4px currentColor); }
      50%     { filter: brightness(1.35) drop-shadow(0 0 18px currentColor); }
    }
    @keyframes de-wave { 0%,100%{transform:skewX(0deg)} 50%{transform:skewX(8deg)} }
    @keyframes de-zoom { 0%,100%{transform:scale(1)} 50%{transform:scale(1.3)} }
  `;

  let _cssInjected = false;

  function _ensureCSS() {
    if (_cssInjected || typeof document === "undefined") return;
    const style = document.createElement("style");
    style.id = "danmu-effects-base";
    style.textContent = _BASE_CSS;
    document.head.appendChild(style);
    _cssInjected = true;
  }

  const _plugins = new Map();

  /**
   * 註冊特效插件
   * @param {{ name: string, label: string, apply: (el: HTMLElement, opts: object) => void, defaultOptions?: object }} plugin
   * @returns {boolean} 是否成功註冊
   */
  function register(plugin) {
    if (!plugin?.name || typeof plugin.apply !== "function") {
      console.warn("[DanmuEffects] Invalid plugin:", plugin);
      return false;
    }
    _plugins.set(plugin.name, plugin);
    console.log("[DanmuEffects] Registered effect:", plugin.name);
    return true;
  }

  /**
   * 將特效套用至元素
   * @param {string} name - 特效名稱
   * @param {HTMLElement} element - 目標 DOM 元素
   * @param {object} [options] - 覆蓋 defaultOptions 的選項
   */
  function apply(name, element, options = {}) {
    if (!name || name === "none") return;
    const plugin = _plugins.get(name);
    if (!plugin) {
      console.warn("[DanmuEffects] Unknown effect:", name);
      return;
    }
    _ensureCSS();
    try {
      plugin.apply(element, { ...plugin.defaultOptions, ...options });
    } catch (e) {
      console.error("[DanmuEffects] Error applying effect:", name, e.message);
    }
  }

  /**
   * 列出所有已註冊特效（包含內建）
   * @returns {{ name: string, label: string }[]}
   */
  function list() {
    return Array.from(_plugins.values()).map(({ name, label }) => ({ name, label }));
  }

  // ── 內建特效 ─────────────────────────────────────────────────────────────────
  // 特效動畫套用在 inner 元素（h1 / img），wrapper 負責 translateX，不衝突。

  register({
    name: "spin",
    label: "旋轉",
    defaultOptions: { duration: "1.5s" },
    apply(el, { duration }) {
      el.style.display = "inline-block";
      el.style.animation = `de-spin ${duration} linear infinite`;
    },
  });

  register({
    name: "blink",
    label: "閃爍",
    defaultOptions: { duration: "0.6s" },
    apply(el, { duration }) {
      el.style.animation = `de-blink ${duration} step-start infinite`;
    },
  });

  register({
    name: "shake",
    label: "抖動",
    defaultOptions: { duration: "0.25s" },
    apply(el, { duration }) {
      el.style.animation = `de-shake ${duration} ease-in-out infinite`;
    },
  });

  register({
    name: "bounce",
    label: "彈跳",
    defaultOptions: { duration: "0.6s" },
    apply(el, { duration }) {
      el.style.display = "inline-block";
      el.style.animation = `de-bounce ${duration} ease-in-out infinite`;
    },
  });

  register({
    name: "rainbow",
    label: "彩虹",
    defaultOptions: { duration: "2s" },
    apply(el, { duration }) {
      el.style.animation = `de-rainbow ${duration} linear infinite`;
    },
  });

  register({
    name: "glow",
    label: "發光",
    defaultOptions: { duration: "1.2s" },
    apply(el, { duration }) {
      el.style.animation = `de-glow ${duration} ease-in-out infinite`;
    },
  });

  register({
    name: "wave",
    label: "波浪",
    defaultOptions: { duration: "0.5s" },
    apply(el, { duration }) {
      el.style.display = "inline-block";
      el.style.animation = `de-wave ${duration} ease-in-out infinite`;
    },
  });

  register({
    name: "zoom",
    label: "縮放",
    defaultOptions: { duration: "0.8s" },
    apply(el, { duration }) {
      el.style.display = "inline-block";
      el.style.animation = `de-zoom ${duration} ease-in-out infinite`;
    },
  });

  return { register, apply, list };
});
