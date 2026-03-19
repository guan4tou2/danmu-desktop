/**
 * OBS Browser Source overlay — self-contained IIFE.
 *
 * Connects to the danmu WebSocket server and renders danmu with transparent
 * background.  No Electron APIs, no require() — pure browser JS.
 */
(function () {
  "use strict";

  // ── Configuration ──────────────────────────────────────────────────────────
  var params = new URL(location.href).searchParams;
  var cfg = window.OVERLAY_CONFIG || {};

  var wsPort = parseInt(params.get("port") || cfg.wsPort, 10) || 4001;
  var wsToken = params.get("token") || cfg.wsToken || "";
  var maxTracks = parseInt(params.get("maxTracks"), 10) || 10;
  var defaultFontSize = parseInt(params.get("fontSize"), 10) || 0; // 0 = use server value
  var defaultOpacity = parseInt(params.get("opacity"), 10) || 0;  // 0 = use server value

  // ── WebSocket state ────────────────────────────────────────────────────────
  var ws = null;
  var reconnectAttempts = 0;
  var heartbeatInterval = null;
  var lastHeartbeatResponse = Date.now();
  var HEARTBEAT_TIMEOUT = 30000;

  function getReconnectDelay(attempt) {
    // Exponential backoff: 1s, 2s, 4s, 8s, 16s max
    var base = 1000 * Math.pow(2, attempt);
    return Math.min(base, 16000);
  }

  function startHeartbeat() {
    clearInterval(heartbeatInterval);
    lastHeartbeatResponse = Date.now();

    heartbeatInterval = setInterval(function () {
      if (ws && ws.readyState === WebSocket.OPEN) {
        try {
          ws.send(JSON.stringify({ type: "heartbeat", timestamp: Date.now() }));
          if (Date.now() - lastHeartbeatResponse > HEARTBEAT_TIMEOUT) {
            console.log("[overlay] Heartbeat timeout, closing connection");
            clearInterval(heartbeatInterval);
            ws.close();
          }
        } catch (e) {
          console.error("[overlay] Heartbeat send error:", e.message);
          clearInterval(heartbeatInterval);
          ws.close();
        }
      }
    }, 15000);
  }

  function connect() {
    if (ws) {
      try { ws.close(); } catch (_) { /* ignore */ }
    }

    var url = "ws://" + location.hostname + ":" + wsPort;
    if (wsToken) {
      url += "/?token=" + encodeURIComponent(wsToken);
    }

    console.log("[overlay] Connecting to", url);
    ws = new WebSocket(url);

    ws.onopen = function () {
      console.log("[overlay] Connected");
      reconnectAttempts = 0;
      lastHeartbeatResponse = Date.now();
      startHeartbeat();
    };

    ws.onclose = function (event) {
      console.log("[overlay] Connection closed", event.code);
      clearInterval(heartbeatInterval);

      var delay = getReconnectDelay(reconnectAttempts);
      console.log("[overlay] Reconnecting in " + (delay / 1000) + "s (attempt " + (reconnectAttempts + 1) + ")");
      setTimeout(connect, delay);
      reconnectAttempts++;
    };

    ws.onerror = function (error) {
      console.error("[overlay] WebSocket error:", error.message || error);
    };

    ws.onmessage = function (event) {
      lastHeartbeatResponse = Date.now();
      var txt = event.data;

      if (txt === "connection" || txt === "heartbeat_ack") {
        return;
      }

      try {
        var data = JSON.parse(txt);

        // Sanitise whitespace in string fields
        if (data && typeof data === "object") {
          for (var key in data) {
            if (typeof data[key] === "string") {
              data[key] = data[key].replace(/\r\n|\r|\n|\t/g, " ");
            }
          }
        }

        if (data.type === "heartbeat_ack") return;

        if (data.type === "ping") {
          if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: "pong" }));
          }
          return;
        }

        if (data.type === "clear") {
          document.querySelectorAll("h1.danmu, img.danmu, div.danmu-wrapper, div[style*='translateX']").forEach(function (el) {
            el.remove();
          });
          console.log("[overlay] Cleared by admin remote control");
          return;
        }

        // Inject .dme effect CSS keyframes (avoid duplicates)
        var effectCss = data.effectCss || null;
        if (effectCss && effectCss.keyframes && effectCss.styleId) {
          var styleId = "dme-" + effectCss.styleId;
          if (!document.getElementById(styleId)) {
            var styleEl = document.createElement("style");
            styleEl.id = styleId;
            styleEl.textContent = effectCss.keyframes;
            document.head.appendChild(styleEl);
          }
        }

        showdanmu(
          data.text,
          data.opacity,
          "#" + data.color,
          data.size,
          parseInt(data.speed, 10),
          data.fontInfo,
          data.textStyles || { textStroke: true, strokeWidth: 2, strokeColor: "#000000", textShadow: false, shadowBlur: 4 },
          data.displayArea || { top: 0, height: 100 },
          effectCss
        );
      } catch (e) {
        console.error("[overlay] Error processing message:", e.message);
      }
    };
  }

  // Reconnect on visibility change (e.g. OBS scene switch)
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        console.log("[overlay] Page visible, reconnecting");
        connect();
      }
    }
  });

  // ── Track management ───────────────────────────────────────────────────────
  var danmuTracks = [];
  var cachedWidth = document.documentElement.clientWidth;
  var cachedHeight = document.documentElement.clientHeight;

  window.addEventListener("resize", function () {
    cachedWidth = document.documentElement.clientWidth;
    cachedHeight = document.documentElement.clientHeight;
  });

  function findAvailableTrack(displayArea, danmuHeight, danmuWidth, speed) {
    var areaTopPx = (displayArea.top / 100) * cachedHeight;
    var areaHeightPx = (displayArea.height / 100) * cachedHeight;

    var effectiveMaxTracks = maxTracks > 0 ? maxTracks : Math.floor(areaHeightPx / danmuHeight);
    var trackHeight = areaHeightPx / effectiveMaxTracks;

    var now = Date.now();
    var maxTime = 20000;
    var minTime = 2000;
    var duration = maxTime - ((speed - 1) * (maxTime - minTime)) / 9;

    // Purge expired entries
    for (var i = danmuTracks.length - 1; i >= 0; i--) {
      if (danmuTracks[i].endTime <= now) {
        danmuTracks.splice(i, 1);
      }
    }

    for (var idx = 0; idx < effectiveMaxTracks; idx++) {
      var trackTop = areaTopPx + idx * trackHeight;

      var hasCollision = danmuTracks.some(function (t) {
        if (t.trackIndex !== idx) return false;
        var timeToReachRight = (cachedWidth / (cachedWidth + t.width)) * t.duration;
        var remainingTime = t.endTime - now;
        return remainingTime > duration - timeToReachRight;
      });

      if (!hasCollision) {
        var top = trackTop + Math.random() * Math.max(0, trackHeight - danmuHeight);
        danmuTracks.push({ trackIndex: idx, startTime: now, endTime: now + duration, duration: duration, width: danmuWidth });
        return { top: top, trackIndex: idx };
      }
    }

    // All tracks occupied — pick the oldest
    var oldest = danmuTracks.reduce(function (o, t) {
      return !o || t.endTime < o.endTime ? t : o;
    }, null);
    var fallbackIdx = oldest ? oldest.trackIndex : 0;
    var fallbackTop = areaTopPx + fallbackIdx * trackHeight;
    var topPos = fallbackTop + Math.random() * Math.max(0, trackHeight - danmuHeight);

    danmuTracks.push({ trackIndex: fallbackIdx, startTime: now, endTime: now + duration, duration: duration, width: danmuWidth });
    return { top: topPos, trackIndex: fallbackIdx };
  }

  // ── showdanmu ──────────────────────────────────────────────────────────────
  function showdanmu(text, opacity, color, size, speed, fontInfo, textStyles, displayArea, effectCss) {
    if (defaultOpacity) opacity = defaultOpacity;
    if (defaultFontSize) size = defaultFontSize;

    opacity = opacity || 75;
    color = color || "#ffffff";
    size = size || 50;
    speed = speed || 7;
    fontInfo = fontInfo || { name: "NotoSansTC", url: null, type: "default" };
    textStyles = textStyles || { textStroke: true, strokeWidth: 2, strokeColor: "#000000", textShadow: false, shadowBlur: 4 };
    displayArea = displayArea || { top: 0, height: 100 };

    var parentElement = document.getElementById("danmubody");
    if (!parentElement) return;

    var imgs = /^https?:\/\/([^\s/]+\/)*[^\s/]+\.(gif|png|jpeg|jpg)$/i;

    // Wrapper handles translateX animation; inner element handles effect animation
    var wrapper = document.createElement("div");
    wrapper.className = "danmu-wrapper";
    wrapper.style.cssText = "position:absolute;display:inline-block;white-space:nowrap;";

    var danmu;
    if (imgs.test(text)) {
      danmu = document.createElement("img");
      danmu.className = "danmu";
      danmu.setAttribute("src", text);
      danmu.width = size * 2;
      danmu.style.position = "relative";
    } else {
      danmu = document.createElement("h1");
      danmu.className = "danmu";
      danmu.textContent = text;
      danmu.setAttribute("data-stroke", text);
      danmu.style.position = "relative";
      danmu.style.fontSize = size + "px";
      danmu.style.color = color;
      danmu.style.margin = "0";
      danmu.style.padding = "0";
      danmu.style.lineHeight = "1.2";

      if (textStyles.textStroke) {
        danmu.style.webkitTextStrokeWidth = textStyles.strokeWidth + "px";
        danmu.style.webkitTextStrokeColor = textStyles.strokeColor;
        danmu.style.paintOrder = "stroke fill";
      }

      if (textStyles.textShadow) {
        var blur = textStyles.shadowBlur;
        danmu.style.textShadow = "0 0 " + blur + "px rgba(0,0,0,0.8), 0 0 " + (blur * 2) + "px rgba(0,0,0,0.6)";
      }
    }

    wrapper.appendChild(danmu);

    // Font loading + animation
    (function applyFontAndAnimate() {
      var effectiveFontName = (fontInfo && fontInfo.name) || "NotoSansTC";

      function afterFont() {
        danmu.style.fontFamily = effectiveFontName;
        parentElement.appendChild(wrapper);

        var compStyle = getComputedStyle(danmu);
        var Height = parseFloat(compStyle.height);
        var Width = parseFloat(compStyle.width);
        var Padding = parseFloat(compStyle.padding) || 0;

        var trackPos = findAvailableTrack(displayArea, Height + Padding, Width, speed);
        wrapper.style.top = trackPos.top + "px";
        wrapper.style.opacity = String((opacity || 75) * 0.01);

        var currentSpeed = Math.max(1, Math.min(10, isNaN(speed) ? 5 : speed));
        var maxTime = 20000;
        var minTime = 2000;
        var duration = maxTime - ((currentSpeed - 1) * (maxTime - minTime)) / 9;
        duration = Math.max(minTime, Math.min(maxTime, duration));

        // Apply .dme effect to inner element
        if (effectCss && effectCss.animation) {
          danmu.style.display = "inline-block";
          danmu.style.animation = effectCss.animation;
          if (effectCss.animationComposition) {
            danmu.style.animationComposition = effectCss.animationComposition;
          }
        }

        // translateX animation on wrapper
        try {
          wrapper.animate(
            [
              { transform: "translateX(100vw)" },
              { transform: "translateX(-" + Width + "px)" }
            ],
            { duration: duration, easing: "linear" }
          ).onfinish = function () {
            wrapper.remove();
          };
        } catch (e) {
          console.error("[overlay] Animation error:", e.message);
          if (wrapper.parentElement) wrapper.remove();
        }
      }

      // Load custom font if needed
      if (fontInfo && fontInfo.url && fontInfo.type === "uploaded") {
        var safeName = effectiveFontName.replace(/[^a-zA-Z0-9 _-]/g, "");
        var fontStyleId = "font-style-" + safeName.replace(/\s+/g, "-");
        if (!document.getElementById(fontStyleId)) {
          if (!/^https?:\/\//.test(fontInfo.url)) {
            console.error("[overlay] Invalid font URL scheme");
            effectiveFontName = "NotoSansTC";
            afterFont();
            return;
          }
          var styleSheet = document.createElement("style");
          styleSheet.id = fontStyleId;
          styleSheet.textContent = '@font-face { font-family: "' + safeName + '"; src: url(' + JSON.stringify(fontInfo.url) + "); }";
          document.head.appendChild(styleSheet);
          document.fonts.load('1em "' + effectiveFontName + '"').then(afterFont).catch(function (e) {
            console.error("[overlay] Font load error:", e.message);
            effectiveFontName = "NotoSansTC";
            afterFont();
          });
        } else {
          afterFont();
        }
      } else {
        afterFont();
      }
    })();
  }

  // ── Start ──────────────────────────────────────────────────────────────────
  connect();
})();
