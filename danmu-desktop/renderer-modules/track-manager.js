// Track management and collision detection + danmu display (used in child window)
const { sanitizeLog } = require("../shared/utils");

function initTrackManager() {
  window.danmuTracks = [];
  window.danmuTrackSettings = {
    maxTracks: 10,
    collisionDetection: true,
  };

  // Cached screen dimensions — updated on resize instead of queried per danmu
  let _cachedScreenWidth = document.documentElement.clientWidth;
  let _cachedScreenHeight = document.documentElement.clientHeight;

  window.addEventListener("resize", () => {
    _cachedScreenWidth = document.documentElement.clientWidth;
    _cachedScreenHeight = document.documentElement.clientHeight;
    console.log("[Track] Screen resized:", _cachedScreenWidth, "x", _cachedScreenHeight);
  });

  window.updateDanmuTrackSettings = function (maxTracks, collisionDetection) {
    window.danmuTrackSettings.maxTracks = maxTracks;
    window.danmuTrackSettings.collisionDetection = collisionDetection;
    console.log("[Track Settings] Updated:", window.danmuTrackSettings);
  };

  window.findAvailableTrack = function (displayArea, danmuHeight, danmuWidth, speed) {
    const screenHeight = _cachedScreenHeight;
    const areaTopPixels = (displayArea.top / 100) * screenHeight;
    const areaHeightPixels = (displayArea.height / 100) * screenHeight;

    const { maxTracks, collisionDetection } = window.danmuTrackSettings;

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

    // In-place removal avoids allocating a new array on every danmu arrival
    for (let i = window.danmuTracks.length - 1; i >= 0; i--) {
      if (window.danmuTracks[i].endTime <= now) {
        window.danmuTracks.splice(i, 1);
      }
    }

    for (let i = 0; i < effectiveMaxTracks; i++) {
      const trackTop = areaTopPixels + i * trackHeight;

      const hasCollision = window.danmuTracks.some((track) => {
        if (track.trackIndex !== i) return false;
        const timeToReachRight =
          (screenWidth / (screenWidth + track.width)) * track.duration;
        const remainingTime = track.endTime - now;
        return remainingTime > duration - timeToReachRight;
      });

      if (!hasCollision) {
        const top = trackTop + Math.random() * Math.max(0, trackHeight - danmuHeight);
        window.danmuTracks.push({
          trackIndex: i,
          startTime: now,
          endTime: now + duration,
          duration,
          width: danmuWidth,
        });
        return { top, trackIndex: i };
      }
    }

    const oldestTrack = window.danmuTracks.reduce(
      (oldest, track) =>
        !oldest || track.endTime < oldest.endTime ? track : oldest,
      null
    );

    const trackIndex = oldestTrack ? oldestTrack.trackIndex : 0;
    const trackTop = areaTopPixels + trackIndex * trackHeight;
    const top = trackTop + Math.random() * Math.max(0, trackHeight - danmuHeight);

    window.danmuTracks.push({
      trackIndex,
      startTime: now,
      endTime: now + duration,
      duration,
      width: danmuWidth,
    });

    return { top, trackIndex };
  };

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
    displayArea = { top: 0, height: 100 }
  ) {
    console.log("[showdanmu] Received:", {
      string: sanitizeLog(string),
      opacity,
      color: sanitizeLog(color),
      size,
      speed,
      fontInfo,
    });

    const parentElement = document.getElementById("danmubody");
    const imgs = /^https?:\/\/([^\s/]+\/)*[^\s/]+\.(gif|png|jpeg|jpg)$/i;
    const protocolCheck = /^(http:|https:)/i;

    let danmu;
    if (imgs.test(string) && protocolCheck.test(string)) {
      danmu = document.createElement("img");
      danmu.setAttribute("src", string);
      danmu.width = size * 2;
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
      danmu.style.fontSize = `${size}px`;
      danmu.style.color = "red";
      if (parentElement) {
        parentElement.appendChild(danmu);
      }
      return;
    } else {
      danmu = document.createElement("h1");
      danmu.className = "danmu";
      danmu.textContent = string;
      danmu.setAttribute("data-stroke", string);
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

    const applyFontAndAnimate = async () => {
      let effectiveFontName = fontInfo.name || "NotoSansTC";

      if (fontInfo.url && fontInfo.type === "uploaded") {
        const styleId = `font-style-${effectiveFontName.replace(/\s+/g, "-")}`;
        if (!document.getElementById(styleId)) {
          try {
            console.log(
              `[showdanmu] Loading font: ${effectiveFontName} from ${fontInfo.url}`
            );
            const fontFace = `@font-face { font-family: "${effectiveFontName}"; src: url("${fontInfo.url}"); }`;
            const styleSheet = document.createElement("style");
            styleSheet.id = styleId;
            styleSheet.type = "text/css";
            styleSheet.innerText = fontFace;
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

      parentElement.appendChild(danmu);
      console.log(
        "[showdanmu] Danmu element appended with font:",
        effectiveFontName,
        danmu
      );

      const Height = parseFloat(getComputedStyle(danmu).height);
      const Width = parseFloat(getComputedStyle(danmu).width);
      const Padding = parseFloat(getComputedStyle(danmu).padding);

      const trackPosition = window.findAvailableTrack(
        displayArea,
        Height + Padding,
        Width,
        speed
      );
      const top = trackPosition.top;

      danmu.style.top = `${top}px`;
      danmu.style.opacity = opacity * 0.01;

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

      console.log(
        "[showdanmu] Sanitized speed:",
        currentSpeed,
        "Calculated duration:",
        duration
      );
      console.log("[showdanmu] Animation parameters:", { Width, duration, top });

      try {
        danmu.animate(
          [
            { transform: "translateX(100vw)" },
            { transform: `translateX(-${Width}px)` },
          ],
          { duration: duration, easing: "linear" }
        ).onfinish = () => {
          console.log("[showdanmu] Animation finished, danmu removed:", danmu);
          danmu.remove();
        };
      } catch (e) {
        console.error("[showdanmu] Animation error:", sanitizeLog(e.message));
        if (danmu.parentElement) {
          danmu.remove();
        }
      }
    };

    applyFontAndAnimate().catch((e) => {
      console.error(
        "[showdanmu] Error in applyFontAndAnimate:",
        sanitizeLog(e.message)
      );
      if (danmu && !danmu.parentElement && parentElement) {
        danmu.style.fontFamily = "NotoSansTC";
        parentElement.appendChild(danmu);
      }
    });
  };

  // Periodically update the in-flight counter element (child window only)
  const counterEl = document.getElementById("danmu-counter");
  if (counterEl) {
    setInterval(() => {
      const count = document.querySelectorAll("h1.danmu, img.danmu").length;
      counterEl.textContent = count > 0 ? String(count) : "";
    }, 500);
  }
}

module.exports = { initTrackManager };
