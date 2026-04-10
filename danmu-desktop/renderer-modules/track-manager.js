// Track management and collision detection + danmu display (used in child window)
const { sanitizeLog } = require("../shared/utils");
const DanmuEffects = require("./danmu-effects");
const store = require("./store");

let _resizeHandler = null;

function initTrackManager() {
  store.set("tracks", []);
  store.set("trackSettings", { maxTracks: 10, collisionDetection: true });
  store.set("fixedTracks", []);

  // 暴露給第三方插件使用
  window.DanmuEffects = DanmuEffects;

  // Cached screen dimensions — updated on resize instead of queried per danmu
  let _cachedScreenWidth = document.documentElement.clientWidth;
  let _cachedScreenHeight = document.documentElement.clientHeight;

  if (_resizeHandler) {
    window.removeEventListener("resize", _resizeHandler);
  }
  _resizeHandler = () => {
    _cachedScreenWidth = document.documentElement.clientWidth;
    _cachedScreenHeight = document.documentElement.clientHeight;
    console.log("[Track] Screen resized:", _cachedScreenWidth, "x", _cachedScreenHeight);
  };
  window.addEventListener("resize", _resizeHandler);

  window.updateDanmuTrackSettings = function (maxTracks, collisionDetection) {
    store.set("trackSettings", { maxTracks, collisionDetection });
    console.log("[Track Settings] Updated:", store.get("trackSettings"));
  };

  window.findAvailableTrack = function (displayArea, danmuHeight, danmuWidth, speed) {
    const screenHeight = _cachedScreenHeight;
    const areaTopPixels = (displayArea.top / 100) * screenHeight;
    const areaHeightPixels = (displayArea.height / 100) * screenHeight;

    const { maxTracks, collisionDetection } = store.get("trackSettings");

    const effectiveMaxTracks =
      maxTracks > 0 ? maxTracks : Math.floor(areaHeightPixels / danmuHeight);
    const trackHeight = areaHeightPixels / effectiveMaxTracks;

    if (!collisionDetection) {
      const randomTrackIndex = Math.floor(Math.random() * effectiveMaxTracks);
      const top =
        areaTopPixels +
        randomTrackIndex * trackHeight +
        Math.random() * (trackHeight - danmuHeight);
      return { top, trackIndex: randomTrackIndex };
    }

    const now = Date.now();
    const screenWidth = _cachedScreenWidth;

    const maxTime = 20000;
    const minTime = 2000;
    const duration = maxTime - ((speed - 1) * (maxTime - minTime)) / 9;

    // Filter out expired tracks and write back
    const tracks = store.get("tracks").filter((t) => t.endTime > now);
    store.set("tracks", tracks);

    for (let i = 0; i < effectiveMaxTracks; i++) {
      const trackTop = areaTopPixels + i * trackHeight;

      const hasCollision = tracks.some((track) => {
        if (track.trackIndex !== i) return false;
        const timeToReachRight =
          (screenWidth / (screenWidth + track.width)) * track.duration;
        const remainingTime = track.endTime - now;
        return remainingTime > duration - timeToReachRight;
      });

      if (!hasCollision) {
        const top = trackTop + Math.random() * Math.max(0, trackHeight - danmuHeight);
        tracks.push({
          trackIndex: i,
          startTime: now,
          endTime: now + duration,
          duration,
          width: danmuWidth,
        });
        store.set("tracks", tracks);
        return { top, trackIndex: i };
      }
    }

    const oldestTrack = tracks.reduce(
      (oldest, track) =>
        !oldest || track.endTime < oldest.endTime ? track : oldest,
      null
    );

    const trackIndex = oldestTrack ? oldestTrack.trackIndex : 0;
    const trackTop = areaTopPixels + trackIndex * trackHeight;
    const top = trackTop + Math.random() * Math.max(0, trackHeight - danmuHeight);

    tracks.push({
      trackIndex,
      startTime: now,
      endTime: now + duration,
      duration,
      width: danmuWidth,
    });
    store.set("tracks", tracks);

    return { top, trackIndex };
  };

  /**
   * 顯示一條彈幕
   * @param {string} string - 文字或圖片 URL
   * @param {number} opacity - 透明度 0–100
   * @param {string} color - CSS 色碼（含 # 前綴）
   * @param {number} size - 字體大小（px）
   * @param {number} speed - 速度 1–10
   * @param {object} fontInfo - 字型資訊
   * @param {object} textStyles - 描邊 / 陰影設定
   * @param {object} displayArea - 顯示區域 { top, height }（百分比）
   * @param {object|null} effectCss - server 解析的特效 {keyframes,animation,styleId} 或 null
   */
  window.showdanmu = function (
    string,
    opacity = 75,
    color = "#ffffff",
    size = 50,
    speed = 7,
    fontInfo = { name: "NotoSansTC", url: null, type: "default" },
    textStyles = {
      textStroke: true,
      strokeWidth: 2,
      strokeColor: "#000000",
      textShadow: false,
      shadowBlur: 4,
    },
    displayArea = { top: 0, height: 100 },
    effectCss = null,
    layout = "scroll",
    layoutConfig = null,
    nickname = null,
    emojis = null
  ) {
    console.log("[showdanmu] Received:", {
      string: sanitizeLog(string),
      opacity,
      color: sanitizeLog(color),
      size,
      speed,
      fontInfo,
      effectCss,
    });

    const parentElement = document.getElementById("danmubody");
    const imgs = /^https?:\/\/([^\s/]+\/)*[^\s/]+\.(gif|png|jpeg|jpg|webp)$/i;
    const protocolCheck = /^(http:|https:)/i;

    // ── 建立 wrapper（負責 translateX 動畫，與 inner 特效動畫分離，互不衝突）
    const wrapper = document.createElement("div");
    wrapper.style.cssText = "position:absolute;display:inline-block;white-space:nowrap;";

    let danmu;
    if (imgs.test(string) && protocolCheck.test(string)) {
      danmu = document.createElement("img");
      danmu.className = "danmu";
      danmu.setAttribute("src", string);
      danmu.width = size * 2;
      danmu.style.position = "relative"; // 覆蓋 child.css 的 img { position: absolute }
      danmu.style.maxWidth = "200px";
      danmu.style.maxHeight = "120px";
      danmu.style.objectFit = "contain";
    } else if (imgs.test(string) && !protocolCheck.test(string)) {
      console.warn(
        "[showdanmu] Invalid protocol for image URL:",
        sanitizeLog(string),
        "Displaying as text."
      );
      danmu = document.createElement("h1");
      danmu.className = "danmu";
      danmu.textContent = "Invalid image URL: " + string;
      danmu.setAttribute("data-stroke", "Invalid image URL: " + string);
      danmu.style.position = "relative";
      danmu.style.fontSize = `${size}px`;
      danmu.style.color = "red";
      wrapper.appendChild(danmu);
      if (parentElement) parentElement.appendChild(wrapper);
      return;
    } else {
      danmu = document.createElement("h1");
      danmu.className = "danmu";
      danmu.textContent = string;
      danmu.setAttribute("data-stroke", string);
      danmu.style.position = "relative"; // 覆蓋 child.css 的 h1 { position: absolute }
      danmu.style.fontSize = `${size}px`;
      danmu.style.color = color;

      if (textStyles.textStroke) {
        danmu.style.webkitTextStrokeWidth = `${textStyles.strokeWidth}px`;
        danmu.style.webkitTextStrokeColor = textStyles.strokeColor;
        danmu.style.textStrokeWidth = `${textStyles.strokeWidth}px`;
        danmu.style.textStrokeColor = textStyles.strokeColor;
        danmu.style.paintOrder = "stroke fill";
      }

      if (textStyles.textShadow) {
        const blur = textStyles.shadowBlur;
        danmu.style.textShadow = `0 0 ${blur}px rgba(0, 0, 0, 0.8), 0 0 ${
          blur * 2
        }px rgba(0, 0, 0, 0.6)`;
      }
    }

    // Nickname label
    if (nickname) {
      const nickEl = document.createElement("span");
      nickEl.textContent = nickname;
      nickEl.style.cssText = `font-size:${Math.max(12, size * 0.35)}px;color:${color};opacity:0.7;margin-right:6px;vertical-align:middle;`;
      wrapper.appendChild(nickEl);
    }

    // Inline emoji images.
    // Prefer the inlined data URL — the overlay runs in an Electron window
    // loaded from file://, so a relative /static/emojis/... URL would be
    // resolved against file:// and 404. The server now ships dataUrl alongside
    // url, but we keep the URL fallback for backwards compatibility.
    if (emojis && emojis.length > 0 && danmu.tagName === "H1") {
      emojis.forEach((em) => {
        const pattern = ":" + em.name + ":";
        const walker = document.createTreeWalker(danmu, NodeFilter.SHOW_TEXT, null, false);
        while (walker.nextNode()) {
          const node = walker.currentNode;
          const idx = node.textContent.indexOf(pattern);
          if (idx !== -1) {
            const before = document.createTextNode(node.textContent.substring(0, idx));
            const img = document.createElement("img");
            img.src = em.dataUrl || em.url;
            img.style.cssText = `display:inline;vertical-align:middle;width:${Math.round(size * 0.8)}px;height:${Math.round(size * 0.8)}px;margin:0 2px;`;
            img.alt = em.name;
            const after = document.createTextNode(node.textContent.substring(idx + pattern.length));
            const parent = node.parentNode;
            parent.insertBefore(before, node);
            parent.insertBefore(img, node);
            parent.insertBefore(after, node);
            parent.removeChild(node);
            break;
          }
        }
      });
    }

    wrapper.appendChild(danmu);

    const applyFontAndAnimate = async () => {
      let effectiveFontName = fontInfo.name || "NotoSansTC";

      function isSafeFontUrl(url) {
      if (typeof url !== "string") return false;
      if (url.startsWith("blob:")) return true;
      if (url.startsWith("/") && !url.includes("..")) return true;
      if (url.startsWith("https://fonts.gstatic.com/")) return true;
      if (/^https?:\/\//.test(url)) return true;
      return false;
    }

    function sanitizeFontName(name) {
      if (typeof name !== "string") return "unknown";
      return name.replace(/["\\]/g, "");
    }

    if (fontInfo && fontInfo.url && fontInfo.name && isSafeFontUrl(fontInfo.url) && fontInfo.type === "uploaded") {
        const safeFontName = sanitizeFontName(effectiveFontName).replace(/[^a-zA-Z0-9 _-]/g, "");
        const styleId = `font-style-${safeFontName.replace(/\s+/g, "-")}`;
        if (!document.getElementById(styleId)) {
          try {
            console.log(
              `[showdanmu] Loading font: ${safeFontName} from ${fontInfo.url}`
            );
            const fontFace = new FontFace(safeFontName, `url(${JSON.stringify(fontInfo.url)})`);
            const styleSheet = document.createElement("style");
            styleSheet.id = styleId;
            styleSheet.type = "text/css";
            styleSheet.innerText = `@font-face { font-family: "${safeFontName}"; src: url(${JSON.stringify(fontInfo.url)}); }`;
            document.head.appendChild(styleSheet);
            await document.fonts.load(`1em "${effectiveFontName}"`);
            console.log(`[showdanmu] Font loaded: ${effectiveFontName}`);
          } catch (e) {
            console.error(
              `[showdanmu] Error loading font ${effectiveFontName}:`,
              sanitizeLog(e.message)
            );
            effectiveFontName = "NotoSansTC";
          }
        }
      }
      danmu.style.fontFamily = effectiveFontName;

      // 插入 DOM 才能量測尺寸
      parentElement.appendChild(wrapper);

      const Height = parseFloat(getComputedStyle(danmu).height);
      const Width = parseFloat(getComputedStyle(danmu).width);
      const Padding = parseFloat(getComputedStyle(danmu).padding);
      const danmuTotalHeight = Height + Padding;

      let currentSpeed = Number(speed);
      if (isNaN(currentSpeed)) {
        console.warn(
          "[showdanmu] Invalid speed received, defaulting to 5:",
          sanitizeLog(speed)
        );
        currentSpeed = 5;
      }
      currentSpeed = Math.max(1, Math.min(10, currentSpeed));

      const maxTime = 20000;
      const minTime = 2000;
      let duration = maxTime - ((currentSpeed - 1) * (maxTime - minTime)) / 9;
      duration = Math.max(minTime, Math.min(maxTime, duration));

      const userOpacity = opacity * 0.01;
      wrapper.style.opacity = String(userOpacity);

      console.log("[showdanmu] Animation parameters:", { Width, duration, layout, hasEffect: !!(effectCss && effectCss.animation) });

      // ���用特效至 inner 元素（不影響 wrapper 的移動動畫）
      if (effectCss && effectCss.animation) {
        danmu.style.display = "inline-block";
        danmu.style.animation = effectCss.animation;
        if (effectCss.animationComposition) {
          danmu.style.animationComposition = effectCss.animationComposition;
        }
      }

      // ── 各佈局獨立處理定位與動畫 ──
      try {
        if (layout === "top_fixed" || layout === "bottom_fixed") {
          // 固定彈幕：置中，從上/下堆疊，獨立碰撞檢測（基於實際顯示時間）
          const fixedDuration = (layoutConfig && layoutConfig.duration) || 3000;
          const screenHeight = _cachedScreenHeight;
          const areaTopPx = (displayArea.top / 100) * screenHeight;
          const areaHeightPx = (displayArea.height / 100) * screenHeight;
          const { maxTracks } = store.get("trackSettings");
          const effectiveMaxTracks = maxTracks > 0
            ? maxTracks
            : Math.max(1, Math.floor(areaHeightPx / danmuTotalHeight));
          const trackHeight = areaHeightPx / effectiveMaxTracks;

          // 獨立的固定彈幕軌道陣列（top_fixed 和 bottom_fixed 各自獨立）
          const now = Date.now();
          const fixedTracks = store.get("fixedTracks").filter(t => t.endTime > now);
          store.set("fixedTracks", fixedTracks);

          // 找第一個未佔用的軌道
          let trackIdx = 0;
          let found = false;
          for (let i = 0; i < effectiveMaxTracks; i++) {
            const occupied = fixedTracks.some(
              t => t.trackIndex === i && t.layout === layout
            );
            if (!occupied) {
              trackIdx = i;
              found = true;
              break;
            }
          }
          if (!found) {
            // 全部佔用 → 選最快到期的軌道
            const candidates = fixedTracks.filter(t => t.layout === layout);
            if (candidates.length > 0) {
              trackIdx = candidates.reduce((a, b) => a.endTime < b.endTime ? a : b).trackIndex;
            }
          }
          fixedTracks.push({ trackIndex: trackIdx, endTime: now + fixedDuration, layout });
          store.set("fixedTracks", fixedTracks);

          const offsetInTrack = Math.random() * Math.max(0, trackHeight - danmuTotalHeight);
          wrapper.style.left = "50%";
          wrapper.style.transform = "translateX(-50%)";

          if (layout === "top_fixed") {
            // 從顯示區域頂部向下堆疊
            wrapper.style.top = `${areaTopPx + trackIdx * trackHeight + offsetInTrack}px`;
          } else {
            // 從顯示區域底部向上���疊
            const distFromAreaBottom = trackIdx * trackHeight + offsetInTrack;
            const distFromViewportBottom = (screenHeight - areaTopPx - areaHeightPx) + distFromAreaBottom;
            wrapper.style.bottom = `${distFromViewportBottom}px`;
          }

          wrapper.animate(
            [
              { opacity: String(userOpacity) },
              { opacity: String(userOpacity), offset: 0.8 },
              { opacity: "0" },
            ],
            { duration: fixedDuration, easing: "ease-out" }
          ).onfinish = () => { wrapper.remove(); };

        } else if (layout === "float") {
          // 浮動彈幕：隨機位置（顯示區域內），漸入漸出 + 縮放
          const areaTopPx = (displayArea.top / 100) * _cachedScreenHeight;
          const areaHeightPx = (displayArea.height / 100) * _cachedScreenHeight;
          wrapper.style.left = `${Math.random() * 60 + 20}%`;
          wrapper.style.top = `${areaTopPx + Math.random() * Math.max(0, areaHeightPx - danmuTotalHeight)}px`;
          const floatDuration = (layoutConfig && layoutConfig.duration) || 4000;
          wrapper.animate(
            [
              { opacity: "0", transform: "scale(0.8)" },
              { opacity: String(userOpacity), transform: "scale(1)", offset: 0.15 },
              { opacity: String(userOpacity), transform: "scale(1)", offset: 0.85 },
              { opacity: "0", transform: "scale(0.8)" },
            ],
            { duration: floatDuration, easing: "ease-in-out" }
          ).onfinish = () => { wrapper.remove(); };

        } else if (layout === "rise") {
          // 上升彈幕：隨機水平位置，從底部升到頂部
          wrapper.style.left = `${Math.random() * 60 + 20}%`;
          wrapper.style.top = "0px";
          wrapper.animate(
            [
              { transform: "translateY(100vh)", opacity: String(userOpacity) },
              { transform: "translateY(-100%)", opacity: String(userOpacity) },
            ],
            { duration, easing: "linear" }
          ).onfinish = () => { wrapper.remove(); };

        } else {
          // 預設 scroll（右至左滾動）
          const trackPosition = window.findAvailableTrack(
            displayArea, danmuTotalHeight, Width, speed
          );
          wrapper.style.top = `${trackPosition.top}px`;
          wrapper.animate(
            [
              { transform: "translateX(100vw)" },
              { transform: `translateX(-${Width}px)` },
            ],
            { duration, easing: "linear" }
          ).onfinish = () => { wrapper.remove(); };
        }
      } catch (e) {
        console.error("[showdanmu] Animation error:", sanitizeLog(e.message));
        if (wrapper.parentElement) wrapper.remove();
      }
    };

    applyFontAndAnimate().catch((e) => {
      console.error(
        "[showdanmu] Error in applyFontAndAnimate:",
        sanitizeLog(e.message)
      );
      if (wrapper && !wrapper.parentElement && parentElement) {
        danmu.style.fontFamily = "NotoSansTC";
        parentElement.appendChild(wrapper);
      }
    });
  };

  // Periodically update the in-flight counter element (child window only)
  // 儲存 interval ID 以便重複初始化時清除舊的 interval，防止累積
  const counterEl = document.getElementById("danmu-counter");
  if (counterEl) {
    if (window._danmuCounterInterval) {
      clearInterval(window._danmuCounterInterval);
    }
    window._danmuCounterInterval = setInterval(() => {
      const count = document.querySelectorAll("h1.danmu, img.danmu").length;
      counterEl.textContent = count > 0 ? String(count) : "";
    }, 500);
  }
}

module.exports = { initTrackManager };
