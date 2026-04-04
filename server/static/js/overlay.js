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

        // Widget sync — render persistent overlay widgets
        if (data.type === "widget_sync") {
          renderWidgets(data.widgets || []);
          return;
        }

        // Poll update — show live voting panel on overlay (DOM-based, no innerHTML)
        if (data.type === "poll_update") {
          var panel = document.getElementById("poll-panel");

          if (data.state === "idle") {
            if (panel) panel.remove();
            return;
          }

          if (!panel) {
            panel = document.createElement("div");
            panel.id = "poll-panel";
            panel.style.cssText = "position:fixed;top:20px;right:20px;background:rgba(15,23,42,0.9);color:white;padding:16px 20px;border-radius:12px;font-family:sans-serif;z-index:9999;min-width:280px;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.1);";
            document.body.appendChild(panel);
          }

          // Clear previous content
          while (panel.firstChild) panel.removeChild(panel.firstChild);

          var maxCount = Math.max(1, Math.max.apply(null, (data.options || []).map(function (o) { return o.count; })));
          var icon = data.state === "ended" ? "\uD83D\uDCCA " : "\uD83D\uDDF3\uFE0F ";

          // Question header
          var header = document.createElement("div");
          header.style.cssText = "font-size:14px;font-weight:bold;margin-bottom:12px;color:#22d3ee;";
          header.textContent = icon + (data.question || "");
          panel.appendChild(header);

          // Option rows
          (data.options || []).forEach(function (o) {
            var row = document.createElement("div");
            row.style.marginBottom = "8px";

            var labelRow = document.createElement("div");
            labelRow.style.cssText = "display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px;";

            var labelLeft = document.createElement("span");
            var keyBold = document.createElement("b");
            keyBold.textContent = o.key + ".";
            labelLeft.appendChild(keyBold);
            labelLeft.appendChild(document.createTextNode(" " + o.text));

            var labelRight = document.createElement("span");
            labelRight.textContent = o.count + " (" + o.percentage + "%)";

            labelRow.appendChild(labelLeft);
            labelRow.appendChild(labelRight);

            var barBg = document.createElement("div");
            barBg.style.cssText = "background:rgba(255,255,255,0.1);border-radius:4px;height:6px;overflow:hidden;";

            var barFill = document.createElement("div");
            barFill.style.cssText = "background:linear-gradient(90deg,#06b6d4,#22d3ee);height:100%;border-radius:4px;transition:width 0.3s;";
            barFill.style.width = (o.count / maxCount * 100) + "%";

            barBg.appendChild(barFill);
            row.appendChild(labelRow);
            row.appendChild(barBg);
            panel.appendChild(row);
          });

          // Total votes footer
          var footer = document.createElement("div");
          footer.style.cssText = "font-size:11px;color:#94a3b8;margin-top:8px;";
          footer.textContent = "Total: " + (data.total_votes || 0) + " votes";
          panel.appendChild(footer);

          if (data.state === "ended") {
            setTimeout(function () { if (panel) { panel.style.opacity = "0"; panel.style.transition = "opacity 2s"; } }, 5000);
            setTimeout(function () { if (panel) panel.remove(); }, 7000);
          }
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

        // Inject layout CSS keyframes
        if (data.layoutCss) {
          var layoutStyleId = "layout-css-" + (data.layout || "scroll");
          if (!document.getElementById(layoutStyleId)) {
            var layoutStyle = document.createElement("style");
            layoutStyle.id = layoutStyleId;
            layoutStyle.textContent = data.layoutCss;
            document.head.appendChild(layoutStyle);
          }
        }

        // Play sound if present
        if (data.sound && data.sound.url) {
          try {
            var audio = new Audio(data.sound.url);
            audio.volume = data.sound.volume || 1.0;
            audio.play().catch(function () {});
          } catch (e) { /* ignore sound errors */ }
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
          effectCss,
          data.layout || "scroll",
          data.layoutConfig || null,
          data.nickname || null,
          data.emojis || null
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
  function showdanmu(text, opacity, color, size, speed, fontInfo, textStyles, displayArea, effectCss, layout, layoutConfig, nickname, emojis) {
    layout = layout || "scroll";
    layoutConfig = layoutConfig || null;
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
      try {
        var parsed = new URL(text);
        if (parsed.protocol === "https:" || parsed.protocol === "http:") {
          danmu.setAttribute("src", parsed.href);
        }
      } catch (e) { /* invalid URL, src intentionally left unset */ }
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

    // Inline emoji images
    if (emojis && emojis.length > 0 && danmu.tagName === "H1") {
      var parts = text;
      emojis.forEach(function (em) {
        var pattern = ":" + em.name + ":";
        if (parts.indexOf(pattern) !== -1) {
          var img = document.createElement("img");
          try {
            var emojiUrl = new URL(em.url);
            if (emojiUrl.protocol === "https:" || emojiUrl.protocol === "http:") {
              img.src = emojiUrl.href;
            }
          } catch (e) { /* invalid URL, src intentionally left unset */ }
          img.style.cssText = "display:inline;vertical-align:middle;width:" + Math.round(size * 0.8) + "px;height:" + Math.round(size * 0.8) + "px;margin:0 2px;";
          img.alt = em.name;
          // Replace text node containing the pattern
          var walker = document.createTreeWalker(danmu, NodeFilter.SHOW_TEXT, null, false);
          while (walker.nextNode()) {
            var node = walker.currentNode;
            var idx = node.textContent.indexOf(pattern);
            if (idx !== -1) {
              var before = document.createTextNode(node.textContent.substring(0, idx));
              var after = document.createTextNode(node.textContent.substring(idx + pattern.length));
              var parent = node.parentNode;
              parent.insertBefore(before, node);
              parent.insertBefore(img, node);
              parent.insertBefore(after, node);
              parent.removeChild(node);
              break;
            }
          }
        }
      });
    }

    // Nickname label (must be before danmu in wrapper)
    if (nickname) {
      var nickEl = document.createElement("span");
      nickEl.textContent = nickname;
      nickEl.style.cssText = "font-size:" + Math.max(12, size * 0.35) + "px;color:" + color + ";opacity:0.7;margin-right:6px;vertical-align:middle;";
      wrapper.appendChild(nickEl);
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
        var danmuTotalHeight = Height + Padding;

        var userOpacity = (opacity || 75) * 0.01;
        wrapper.style.opacity = String(userOpacity);

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

        // Layout-dependent animation
        try {
          if (layout === "top_fixed" || layout === "bottom_fixed") {
            var fixedDuration = (layoutConfig && layoutConfig.duration) || 3000;
            var screenHeight = cachedHeight;
            var areaTopPx = (displayArea.top / 100) * screenHeight;
            var areaHeightPx = (displayArea.height / 100) * screenHeight;
            var effectiveMax = maxTracks > 0 ? maxTracks : Math.max(1, Math.floor(areaHeightPx / danmuTotalHeight));
            var trkHeight = areaHeightPx / effectiveMax;

            // Independent fixed-track collision detection
            if (!window._overlayFixedTracks) window._overlayFixedTracks = [];
            var now = Date.now();
            window._overlayFixedTracks = window._overlayFixedTracks.filter(function (t) { return t.endTime > now; });

            var trackIdx = 0;
            var found = false;
            for (var fi = 0; fi < effectiveMax; fi++) {
              var occupied = window._overlayFixedTracks.some(function (t) { return t.trackIndex === fi && t.layout === layout; });
              if (!occupied) { trackIdx = fi; found = true; break; }
            }
            if (!found) {
              var candidates = window._overlayFixedTracks.filter(function (t) { return t.layout === layout; });
              if (candidates.length > 0) {
                trackIdx = candidates.reduce(function (a, b) { return a.endTime < b.endTime ? a : b; }).trackIndex;
              }
            }
            window._overlayFixedTracks.push({ trackIndex: trackIdx, endTime: now + fixedDuration, layout: layout });

            var offsetInTrack = Math.random() * Math.max(0, trkHeight - danmuTotalHeight);
            wrapper.style.left = "50%";
            wrapper.style.transform = "translateX(-50%)";

            if (layout === "top_fixed") {
              wrapper.style.top = (areaTopPx + trackIdx * trkHeight + offsetInTrack) + "px";
            } else {
              var distFromBottom = (screenHeight - areaTopPx - areaHeightPx) + trackIdx * trkHeight + offsetInTrack;
              wrapper.style.bottom = distFromBottom + "px";
            }

            wrapper.animate(
              [
                { opacity: String(userOpacity) },
                { opacity: String(userOpacity), offset: 0.8 },
                { opacity: "0" }
              ],
              { duration: fixedDuration, easing: "ease-out" }
            ).onfinish = function () { wrapper.remove(); };

          } else if (layout === "float") {
            var fAreaTopPx = (displayArea.top / 100) * cachedHeight;
            var fAreaHeightPx = (displayArea.height / 100) * cachedHeight;
            wrapper.style.left = (Math.random() * 60 + 20) + "%";
            wrapper.style.top = (fAreaTopPx + Math.random() * Math.max(0, fAreaHeightPx - danmuTotalHeight)) + "px";
            var floatDuration = (layoutConfig && layoutConfig.duration) || 4000;
            wrapper.animate(
              [
                { opacity: "0", transform: "scale(0.8)" },
                { opacity: String(userOpacity), transform: "scale(1)", offset: 0.15 },
                { opacity: String(userOpacity), transform: "scale(1)", offset: 0.85 },
                { opacity: "0", transform: "scale(0.8)" }
              ],
              { duration: floatDuration, easing: "ease-in-out" }
            ).onfinish = function () { wrapper.remove(); };

          } else if (layout === "rise") {
            wrapper.style.left = (Math.random() * 60 + 20) + "%";
            wrapper.style.top = "0px";
            wrapper.animate(
              [
                { transform: "translateY(100vh)", opacity: String(userOpacity) },
                { transform: "translateY(-100%)", opacity: String(userOpacity) }
              ],
              { duration: duration, easing: "linear" }
            ).onfinish = function () { wrapper.remove(); };

          } else {
            // Default scroll (right to left)
            var trackPos = findAvailableTrack(displayArea, danmuTotalHeight, Width, speed);
            wrapper.style.top = trackPos.top + "px";
            wrapper.animate(
              [
                { transform: "translateX(100vw)" },
                { transform: "translateX(-" + Width + "px)" }
              ],
              { duration: duration, easing: "linear" }
            ).onfinish = function () { wrapper.remove(); };
          }
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

  // ── Widget Rendering ──────────────────────────────────────────────────────

  var WIDGET_POSITIONS = {
    "top-left": "top:20px;left:20px;",
    "top-center": "top:20px;left:50%;transform:translateX(-50%);",
    "top-right": "top:20px;right:20px;",
    "bottom-left": "bottom:20px;left:20px;",
    "bottom-center": "bottom:20px;left:50%;transform:translateX(-50%);",
    "bottom-right": "bottom:20px;right:20px;",
    "center": "top:50%;left:50%;transform:translate(-50%,-50%);"
  };

  function renderWidgets(widgets) {
    // Remove stale widget elements
    document.querySelectorAll("[data-widget-id]").forEach(function (el) {
      var keep = widgets.some(function (w) { return w.id === el.getAttribute("data-widget-id") && w.visible; });
      if (!keep) el.remove();
    });

    widgets.forEach(function (w) {
      if (!w.visible) return;
      var existing = document.querySelector('[data-widget-id="' + w.id + '"]');

      if (w.type === "scoreboard") renderScoreboard(w, existing);
      else if (w.type === "ticker") renderTicker(w, existing);
      else if (w.type === "label") renderLabel(w, existing);
    });
  }

  function _widgetBase(w, existing) {
    var el = existing || document.createElement("div");
    el.setAttribute("data-widget-id", w.id);
    var posStyle = WIDGET_POSITIONS[w.position] || WIDGET_POSITIONS["top-left"];
    el.style.cssText = "position:fixed;" + posStyle + "z-index:9998;font-family:sans-serif;pointer-events:none;transition:opacity 0.3s;";
    if (!existing) document.body.appendChild(el);
    return el;
  }

  function renderScoreboard(w, existing) {
    var cfg = w.config || {};
    var el = _widgetBase(w, existing);
    while (el.firstChild) el.removeChild(el.firstChild);

    el.style.background = cfg.bgColor || "rgba(15,23,42,0.85)";
    el.style.color = cfg.textColor || "#fff";
    el.style.padding = "12px 20px";
    el.style.borderRadius = "10px";
    el.style.backdropFilter = "blur(8px)";
    el.style.border = "1px solid rgba(255,255,255,0.1)";
    el.style.minWidth = "200px";

    if (cfg.title) {
      var title = document.createElement("div");
      title.style.cssText = "font-size:" + Math.max(10, (cfg.fontSize || 18) * 0.8) + "px;font-weight:bold;margin-bottom:8px;text-align:center;opacity:0.8;text-transform:uppercase;letter-spacing:1px;";
      title.textContent = cfg.title;
      el.appendChild(title);
    }

    var teams = cfg.teams || [];
    if (teams.length >= 2) {
      // Side-by-side layout for 2 teams
      var row = document.createElement("div");
      row.style.cssText = "display:flex;align-items:center;justify-content:center;gap:16px;";

      teams.forEach(function (team, i) {
        var cell = document.createElement("div");
        cell.style.cssText = "text-align:center;min-width:60px;";

        var score = document.createElement("div");
        score.style.cssText = "font-size:" + (cfg.fontSize || 18) * 2 + "px;font-weight:bold;color:" + (team.color || "#06b6d4") + ";line-height:1;";
        score.textContent = team.score;
        cell.appendChild(score);

        var name = document.createElement("div");
        name.style.cssText = "font-size:" + (cfg.fontSize || 18) * 0.7 + "px;margin-top:4px;opacity:0.8;";
        name.textContent = team.name;
        cell.appendChild(name);

        row.appendChild(cell);

        // Add separator between teams (not after last)
        if (i < teams.length - 1) {
          var sep = document.createElement("div");
          sep.style.cssText = "font-size:" + (cfg.fontSize || 18) + "px;opacity:0.4;";
          sep.textContent = ":";
          row.appendChild(sep);
        }
      });
      el.appendChild(row);
    }
  }

  function renderTicker(w, existing) {
    var cfg = w.config || {};
    var el = _widgetBase(w, existing);

    // Only rebuild if content changed
    var contentKey = JSON.stringify(cfg.messages || []);
    if (el.getAttribute("data-ticker-key") === contentKey) return;
    el.setAttribute("data-ticker-key", contentKey);

    while (el.firstChild) el.removeChild(el.firstChild);

    el.style.background = cfg.bgColor || "rgba(15,23,42,0.85)";
    el.style.color = cfg.textColor || "#fff";
    el.style.padding = "6px 0";
    el.style.borderRadius = "0";
    el.style.overflow = "hidden";
    el.style.width = "100vw";
    el.style.left = "0";
    el.style.transform = "none";
    // Override position for ticker — always full width at its vertical position
    if (w.position.indexOf("bottom") === 0) {
      el.style.top = "auto";
      el.style.bottom = "0";
    } else {
      el.style.top = "0";
      el.style.bottom = "auto";
    }

    var messages = cfg.messages || [];
    if (messages.length === 0) return;

    var sep = cfg.separator || " \u2022 ";
    var fullText = messages.join(sep) + sep;

    var track = document.createElement("div");
    track.style.cssText = "display:flex;white-space:nowrap;font-size:" + (cfg.fontSize || 16) + "px;padding:0 8px;";

    // Duplicate text for seamless loop
    for (var i = 0; i < 2; i++) {
      var span = document.createElement("span");
      span.textContent = fullText;
      span.style.paddingRight = "40px";
      track.appendChild(span);
    }
    el.appendChild(track);

    // Calculate animation duration based on text length and speed
    var speed = cfg.speed || 60;
    var textWidth = fullText.length * (cfg.fontSize || 16) * 0.6; // approximate
    var duration = textWidth / speed;

    // Inject ticker animation
    var tickerStyleId = "ticker-anim-" + w.id;
    var existingStyle = document.getElementById(tickerStyleId);
    if (existingStyle) existingStyle.remove();
    var style = document.createElement("style");
    style.id = tickerStyleId;
    style.textContent = "@keyframes ticker-" + w.id + " { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }";
    document.head.appendChild(style);

    track.style.animation = "ticker-" + w.id + " " + duration + "s linear infinite";
  }

  function renderLabel(w, existing) {
    var cfg = w.config || {};
    var el = _widgetBase(w, existing);
    while (el.firstChild) el.removeChild(el.firstChild);

    el.style.background = cfg.bgColor || "rgba(15,23,42,0.85)";
    el.style.color = cfg.textColor || "#fff";
    el.style.padding = cfg.padding || "8px 16px";
    el.style.borderRadius = "8px";
    el.style.backdropFilter = "blur(8px)";
    el.style.border = "1px solid rgba(255,255,255,0.1)";
    el.style.fontSize = (cfg.fontSize || 24) + "px";
    el.style.fontWeight = "bold";

    var textNode = document.createTextNode(cfg.text || "");
    el.appendChild(textNode);
  }

  // ── Start ──────────────────────────────────────────────────────────────────
  connect();
})();
