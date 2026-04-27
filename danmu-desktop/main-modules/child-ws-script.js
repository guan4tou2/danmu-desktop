// WebSocket script injected into child (overlay) windows via executeJavaScript

/**
 * Returns the JavaScript string to be injected into the child overlay window.
 * Establishes a WebSocket connection with reconnection and heartbeat logic.
 */
function getChildWsScript(ip, port, startupAnimationSettings, wsAuthToken = "") {
  const ipJson = JSON.stringify(String(ip));
  const safePort = Number(port);
  const startupAnimSettingsJson = JSON.stringify(
    startupAnimationSettings || { enabled: false }
  );
  const wsAuthTokenJson = JSON.stringify(wsAuthToken || "");

  return `
      const IP_ADDR=${ipJson};
      const WS_PORT_NUM=${safePort};
      const STARTUP_ANIM_SETTINGS = ${startupAnimSettingsJson};
      const WS_AUTH_TOKEN = ${wsAuthTokenJson};
      console.log(IP_ADDR, WS_PORT_NUM)
      let url = \`ws://\${IP_ADDR}:\${WS_PORT_NUM}\`
      if (WS_AUTH_TOKEN) {
        url = \`\${url}/?token=\${encodeURIComponent(WS_AUTH_TOKEN)}\`
      }
      let ws = null
      let reconnectAttempts = 0
      const maxReconnectAttempts = 10
      // Exponential backoff: base 3s, doubles each attempt, cap at 30s, +jitter
      const reconnectBaseDelay = 3000
      const reconnectMaxDelay = 30000
      let heartbeatInterval = null
      let lastHeartbeatResponse = Date.now()
      const heartbeatTimeout = 30000
      let connectionLost = false
      let connectionTimeout = null
      const connectionTimeoutDuration = 10000
      let isFirstConnectionAttempt = true
      let lastSentStatus = null
      let statusSendTimeout = null

      function getReconnectDelay(attempt) {
        const exponential = reconnectBaseDelay * Math.pow(2, attempt)
        const capped = Math.min(exponential, reconnectMaxDelay)
        // Add ±20% jitter to avoid thundering herd when multiple windows reconnect
        const jitter = capped * 0.2 * (Math.random() * 2 - 1)
        return Math.round(capped + jitter)
      }

      function sendConnectionStatus(status, attempt, maxAttempts) {
        if (lastSentStatus === status && status !== 'disconnected') {
          return
        }
        if (statusSendTimeout) {
          clearTimeout(statusSendTimeout)
        }
        statusSendTimeout = setTimeout(() => {
          if (window.API && typeof window.API.sendConnectionStatus === 'function') {
            try {
              window.API.sendConnectionStatus(status, attempt, maxAttempts)
              lastSentStatus = status
            } catch (e) {
              console.error('Error sending connection status:', e.message)
            }
          } else {
            setTimeout(() => sendConnectionStatus(status, attempt, maxAttempts), 100)
          }
          statusSendTimeout = null
        }, 200)
      }

      function startHeartbeat() {
        clearInterval(heartbeatInterval)
        lastHeartbeatResponse = Date.now()

        heartbeatInterval = setInterval(() => {
          if (ws && ws.readyState === WebSocket.OPEN) {
            try {
              ws.send(JSON.stringify({ type: "heartbeat", timestamp: Date.now() }))
              const timeSinceLastResponse = Date.now() - lastHeartbeatResponse
              if (timeSinceLastResponse > heartbeatTimeout) {
                console.log("Heartbeat timeout, connection may be lost")
                clearInterval(heartbeatInterval)
                if (ws.readyState === WebSocket.OPEN) {
                  connectionLost = true
                  ws.close()
                }
              }
            } catch (error) {
              console.error("Error sending heartbeat:", error.message)
              clearInterval(heartbeatInterval)
              if (ws.readyState === WebSocket.OPEN) {
                connectionLost = true
                ws.close()
              }
            }
          }
        }, 15000)
      }

      function connect() {
        if (ws) {
          try {
            ws.close()
          } catch (e) {
            console.error("Error closing old connection:", e.message)
          }
        }

        if (connectionTimeout) {
          clearTimeout(connectionTimeout)
          connectionTimeout = null
        }

        if (isFirstConnectionAttempt) {
          connectionTimeout = setTimeout(() => {
            if (ws && ws.readyState !== WebSocket.OPEN) {
              console.log('Connection timeout - server unreachable')
              try {
                ws.close()
              } catch (e) {
                // Connection might already be closed
              }
              sendConnectionStatus('connection-failed')
              reconnectAttempts = maxReconnectAttempts
            }
          }, connectionTimeoutDuration)
        }

        ws = new WebSocket(url)

        ws.onopen = () => {
          if (connectionTimeout) {
            clearTimeout(connectionTimeout)
            connectionTimeout = null
          }
          isFirstConnectionAttempt = false

          console.log('Connection opened')
          const isFirstConnection = reconnectAttempts === 0
          reconnectAttempts = 0
          connectionLost = false
          lastHeartbeatResponse = Date.now()
          startHeartbeat()

          sendConnectionStatus('connected')

          if (!isFirstConnection) {
            return
          }

          const showSceneAnimation = (animationText) => {
            const oldStyle = document.getElementById('link-start-style');
            if (oldStyle) oldStyle.remove();
            const oldScene = document.querySelector('.scene');
            if (oldScene) oldScene.remove();
            const oldLinkStart = document.querySelector('.link-start');
            if (oldLinkStart) oldLinkStart.remove();

            const style = document.createElement('style');
            style.id = 'link-start-style';
            style.textContent = \`
              @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

              html, body {
                height: 100%;
                width: 100%;
                overflow: hidden;
                background-color: transparent;
              }

              body {
                text-align: center;
              }

              body:before {
                content: '';
                display: inline-block;
                height: 100%;
                vertical-align: middle;
              }

              .scene {
                display: inline-block;
                vertical-align: middle;
                perspective: 5px;
                perspective-origin: 50% 50%;
                position: relative;
                opacity: 0;
                transform: scale(0.2);
                animation: scene-zoom-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              }

              .wrap {
                position: absolute;
                width: 1000px;
                height: 1000px;
                left: -500px;
                top: -500px;
                transform-style: preserve-3d;
                animation: move 6s infinite linear;
                animation-fill-mode: forwards;
              }

              .wrap:nth-child(2) {
                animation: move 6s infinite linear;
                animation-delay: 3s;
              }

              .wall {
                width: 100%;
                height: 100%;
                position: absolute;
                background: url(assets/linkstart.png);
                background-size: cover;
                opacity: 0;
                animation: fade 6s infinite linear;
                animation-delay: 0;
              }

              .wrap:nth-child(2) .wall {
                animation-delay: 3s;
              }

              .wall-right { transform: rotateY(90deg) translateZ(500px); }
              .wall-left { transform: rotateY(-90deg) translateZ(500px); }
              .wall-top { transform: rotateX(90deg) translateZ(500px); }
              .wall-bottom { transform: rotateX(-90deg) translateZ(500px); }
              .wall-back { transform: rotateX(180deg) translateZ(500px); }

              @keyframes move {
                0% { transform: translateZ(-500px) rotateY(0deg); }
                100% { transform: translateZ(500px) rotateY(360deg); }
              }

              @keyframes fade {
                0%   { opacity: 0; }
                20%  { opacity: 0.8; }
                80%  { opacity: 0.8; }
                100% { opacity: 0; }
              }

              @keyframes scene-zoom-in {
                from { opacity: 0; transform: scale(0.2); }
                to { opacity: 1; transform: scale(1); }
              }

              @keyframes scene-fade-out {
                from { opacity: 1; }
                to { opacity: 0; }
              }

              .link-start {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-family: 'Orbitron', sans-serif;
                font-size: 100px;
                font-weight: 700;
                color: #00d4ff;
                text-shadow:
                  0 0 3px #00d4ff,
                  0 0 6px #00d4ff,
                  0 0 12px #00d4ff;
                z-index: 9999;
                animation: text-flicker 2s linear infinite, text-fade-in-out 4s ease-out forwards;
                opacity: 0;
              }

              .link-start::after,
              .link-start::before {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                color: #00d4ff;
                background: transparent;
                overflow: hidden;
                clip: rect(0, 900px, 0, 0);
              }

              .link-start::after {
                left: 2px;
                text-shadow: -1px 0 red;
                animation: glitch-anim-1 2s infinite linear alternate-reverse;
              }

              .link-start::before {
                left: -2px;
                text-shadow: 1px 0 blue;
                animation: glitch-anim-2 3s infinite linear alternate-reverse;
              }

              @keyframes text-fade-in-out {
                0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                10%  { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
                20%  { transform: translate(-50%, -50%) scale(1); }
                80%  { opacity: 1; }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(1.05); }
              }

              @keyframes text-flicker {
                0% { opacity:0.1; }
                2% { opacity:1; }
                8% { opacity:0.1; }
                9% { opacity:1; }
                12% { opacity:0.1; }
                20% { opacity:1; }
                25% { opacity:0.3; }
                30% { opacity:1; }
                70% { opacity:0.7; }
                72% { opacity:0.2; }
                77% { opacity:1; }
                100% { opacity:1; }
              }

              @keyframes glitch-anim-1 {
                0% { clip: rect(42px, 9999px, 44px, 0); }
                5% { clip: rect(17px, 9999px, 94px, 0); }
                10% { clip: rect(83px, 9999px, 86px, 0); }
                15% { clip: rect(28px, 9999px, 16px, 0); }
                20% { clip: rect(42px, 9999px, 62px, 0); }
                25% { clip: rect(34px, 9999px, 14px, 0); }
                30% { clip: rect(77px, 9999px, 77px, 0); }
                35% { clip: rect(61px, 9999px, 52px, 0); }
                40% { clip: rect(40px, 9999px, 50px, 0); }
                45% { clip: rect(43px, 9999px, 86px, 0); }
                50% { clip: rect(97px, 9999px, 82px, 0); }
                55% { clip: rect(26px, 9999px, 47px, 0); }
                60% { clip: rect(10px, 9999px, 10px, 0); }
                65% { clip: rect(74px, 9999px, 80px, 0); }
                70% { clip: rect(10px, 9999px, 15px, 0); }
                75% { clip: rect(35px, 9999px, 4px, 0); }
                80% { clip: rect(21px, 9999px, 74px, 0); }
                85% { clip: rect(2px, 9999px, 79px, 0); }
                90% { clip: rect(88px, 9999px, 7px, 0); }
                95% { clip: rect(43px, 9999px, 73px, 0); }
                100% { clip: rect(50px, 9999px, 95px, 0); }
              }

              @keyframes glitch-anim-2 {
                0% { clip: rect(85px, 9999px, 9px, 0); }
                5% { clip: rect(8px, 9999px, 3px, 0); }
                10% { clip: rect(42px, 9999px, 94px, 0); }
                15% { clip: rect(23px, 9999px, 33px, 0); }
                20% { clip: rect(38px, 9999px, 49px, 0); }
                25% { clip: rect(12px, 9999px, 48px, 0); }
                30% { clip: rect(81px, 9999px, 91px, 0); }
                35% { clip: rect(30px, 9999px, 75px, 0); }
                40% { clip: rect(88px, 9999px, 100px, 0); }
                45% { clip: rect(22px, 9999px, 66px, 0); }
                50% { clip: rect(1px, 9999px, 52px, 0); }
                55% { clip: rect(41px, 9999px, 40px, 0); }
                60% { clip: rect(28px, 9999px, 86px, 0); }
                65% { clip: rect(59px, 9999px, 55px, 0); }
                70% { clip: rect(7px, 9999px, 20px, 0); }
                75% { clip: rect(32px, 9999px, 83px, 0); }
                80% { clip: rect(54px, 9999px, 26px, 0); }
                85% { clip: rect(24px, 9999px, 12px, 0); }
                90% { clip: rect(74px, 9999px, 69px, 0); }
                95% { clip: rect(10px, 9999px, 7px, 0); }
                100% { clip: rect(20px, 9999px, 75px, 0); }
              }
            \`;
            document.head.appendChild(style);

            const scene = document.createElement('div');
            scene.className = 'scene';
            scene.innerHTML = \`
              <div class="wrap">
                <div class="wall wall-right"></div>
                <div class="wall wall-left"></div>
                <div class="wall wall-top"></div>
                <div class="wall wall-bottom"></div>
                <div class="wall wall-back"></div>
              </div>
              <div class="wrap">
                <div class="wall wall-right"></div>
                <div class="wall wall-left"></div>
                <div class="wall wall-top"></div>
                <div class="wall wall-bottom"></div>
                <div class="wall wall-back"></div>
              </div>
            \`;
            document.body.appendChild(scene);

            const linkStart = document.createElement('div');
            linkStart.className = 'link-start';
            linkStart.textContent = animationText || 'Link Start';
            linkStart.setAttribute("data-text", animationText || 'Link Start');
            document.body.appendChild(linkStart);

            const totalDuration = 3000;
            const fadeOutDuration = 1500;

            setTimeout(() => {
              scene.style.animation = \`scene-fade-out \${fadeOutDuration/1000}s ease-out forwards\`;
              setTimeout(() => {
                document.body.contains(scene) && scene.remove();
                document.head.contains(style) && style.remove();
                document.body.contains(linkStart) && linkStart.remove();
              }, fadeOutDuration);
            }, totalDuration);
          };

          if (STARTUP_ANIM_SETTINGS && STARTUP_ANIM_SETTINGS.enabled !== false) {
            let animationText = 'LINK START';
            if (STARTUP_ANIM_SETTINGS.type === 'domain-expansion') {
              animationText = '領域展開';
            } else if (STARTUP_ANIM_SETTINGS.type === 'custom' && STARTUP_ANIM_SETTINGS.customText) {
              animationText = STARTUP_ANIM_SETTINGS.customText;
            }

            // The Python websockets server accepts the handshake first then
            // closes with 1008 if WS_REQUIRE_TOKEN is enabled and the token is
            // missing/invalid. ws.onopen still fires in that case, so we wait
            // briefly and only play the intro if the socket is still alive.
            setTimeout(() => {
              if (ws && ws.readyState === WebSocket.OPEN) {
                showSceneAnimation(animationText)
              }
            }, 800)
          }
        }

        ws.onclose = (event) => {
          console.log('Connection closed', event.code, event.reason)
          clearInterval(heartbeatInterval)

          if (connectionTimeout) {
            clearTimeout(connectionTimeout)
            connectionTimeout = null
          }

          // 1008 = Policy Violation. The server uses this for token auth failure
          // and connection-limit rejection. Reconnecting won't help — stop and
          // surface the failure to the user.
          if (event.code === 1008) {
            console.error('WebSocket rejected by server (1008):', event.reason)
            sendConnectionStatus('connection-failed')
            reconnectAttempts = maxReconnectAttempts
            return
          }

          if (isFirstConnectionAttempt && reconnectAttempts === 0) {
            sendConnectionStatus('connection-failed')
            reconnectAttempts = maxReconnectAttempts
            return
          }

          const nextAttempt = reconnectAttempts + 1
          sendConnectionStatus('disconnected', nextAttempt, maxReconnectAttempts)

          if (reconnectAttempts < maxReconnectAttempts) {
            const delay = getReconnectDelay(reconnectAttempts)
            console.log(\`Attempting to reconnect in \${(delay/1000).toFixed(1)}s (attempt \${nextAttempt}/\${maxReconnectAttempts})...\`)
            setTimeout(connect, delay)
            reconnectAttempts++
          } else {
            console.log('Max reconnection attempts reached, stopping reconnection')
            sendConnectionStatus('connection-failed')
          }
        }

        ws.onerror = (error) => {
          console.error('WebSocket error:', error.message)
          if (isFirstConnectionAttempt && connectionTimeout) {
            clearTimeout(connectionTimeout)
            connectionTimeout = null
          }
        }

        ws.onmessage = event => {
          lastHeartbeatResponse = Date.now()

          let txt = event.data

          if (txt === "connection") {
            console.log(txt);
          } else if (txt === "heartbeat_ack") {
            console.log("Received heartbeat response");
          } else {
            try {
              console.log('[WebSocket] Raw message received:', (typeof txt === 'string' ? txt.replace(/\\n|\\r|\\t/g, ' ') : txt));
              let data = JSON.parse(txt);
              if (data && typeof data === 'object') {
                for (const key in data) {
                  if (typeof data[key] === 'string') {
                    data[key] = data[key].replace(/\\r\\n|\\r|\\n|\\t/g, " ");
                  }
                }
              }
              console.log('[WebSocket] Parsed data:', data);

              if (data.type === "heartbeat_ack") {
                console.log("Received heartbeat response");
                return;
              }
              if (data.type === "ping") {
                if (ws.readyState === WebSocket.OPEN) {
                  ws.send(JSON.stringify({ type: "pong" }));
                }
                return;
              }

              // 管理員 Remote Control：清除所有彈幕（保留 #danmu-counter 等非彈幕元素）
              if (data.type === "clear") {
                document.querySelectorAll("h1.danmu, img.danmu, div.danmu-wrapper, div[style*='translateX']").forEach(el => el.remove());
                console.log("[WebSocket] Overlay cleared by admin remote control");
                return;
              }

              // Konami easter egg from web admin (POST /admin/konami/trigger
              // → server WS broadcast). Local Electron Konami detection still
              // goes through the existing IPC path in renderer-modules/konami.js;
              // this handler is the bridge for web-admin-triggered events so
              // ALL connected overlays (web + Electron) react together.
              if (data.type === "konami") {
                try {
                  if (typeof window.__konamiTrigger === "function") {
                    window.__konamiTrigger();
                  } else {
                    // Fallback: same freeze + explode + clear used by overlay.js
                    var nodes = document.querySelectorAll(
                      "h1.danmu, img.danmu, div.danmu-wrapper, div[style*='translateX']"
                    );
                    if (nodes.length) {
                      var screenW = window.innerWidth;
                      var screenH = window.innerHeight;
                      var cx = screenW / 2;
                      var cy = screenH / 2;
                      var maxFly = Math.max(screenW, screenH) * 0.7;
                      var DURATION = 1200;
                      nodes.forEach(function (el, i) {
                        var rect = el.getBoundingClientRect();
                        el.style.transition = "none";
                        el.style.animation = "none";
                        el.style.position = "fixed";
                        el.style.left = rect.left + "px";
                        el.style.top = rect.top + "px";
                        el.style.right = "auto";
                        el.style.bottom = "auto";
                        el.style.transform = "none";
                        el.style.zIndex = "10000";
                        var elCx = rect.left + rect.width / 2;
                        var elCy = rect.top + rect.height / 2;
                        var dx = elCx - cx;
                        var dy = elCy - cy;
                        var len = Math.sqrt(dx * dx + dy * dy);
                        if (len < 40) {
                          var ang = (i * 137.5) * Math.PI / 180;
                          dx = Math.cos(ang); dy = Math.sin(ang); len = 1;
                        }
                        var fly = maxFly * (0.6 + Math.random() * 0.6);
                        var flyX = (dx / len) * fly;
                        var flyY = (dy / len) * fly;
                        var spin = (Math.random() < 0.5 ? -1 : 1) * (180 + Math.random() * 540);
                        void el.offsetWidth;
                        el.style.transition =
                          "transform " + DURATION + "ms cubic-bezier(0.22, 0.94, 0.62, 1), opacity " + DURATION + "ms ease-out";
                        el.style.transform =
                          "translate(" + flyX.toFixed(0) + "px, " + flyY.toFixed(0) + "px) rotate(" +
                          spin.toFixed(0) + "deg) scale(2.4)";
                        el.style.opacity = "0";
                      });
                      setTimeout(function () {
                        nodes.forEach(function (n) {
                          if (n && n.parentNode) n.parentNode.removeChild(n);
                        });
                      }, DURATION + 50);
                    }
                  }
                  console.log("[WebSocket] Konami easter egg triggered by admin");
                } catch (err) {
                  console.warn("[WebSocket] Konami trigger error:", err && err.message);
                }
                return;
              }

              // 投票系統：即時顯示投票面板
              if (data.type === "poll_update") {
                let panel = document.getElementById("poll-panel");

                if (data.state === "idle") {
                  if (panel) panel.remove();
                  return;
                }

                if (!panel) {
                  panel = document.createElement("div");
                  panel.id = "poll-panel";
                  panel.style.cssText = "position:fixed; top:20px; right:20px; background:rgba(15,23,42,0.9); color:white; padding:16px 20px; border-radius:12px; font-family:sans-serif; z-index:9999; min-width:280px; backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,0.1);";
                  document.body.appendChild(panel);
                }

                const maxCount = Math.max(1, ...data.options.map(function(o) { return o.count; }));

                // DOM-based rendering to prevent XSS
                while (panel.firstChild) panel.removeChild(panel.firstChild);

                const icon = data.state === "ended" ? "\\u{1F4CA} " : "\\u{1F5F3}\\uFE0F ";
                const header = document.createElement("div");
                header.style.cssText = "font-size:14px;font-weight:bold;margin-bottom:12px;color:#22d3ee;";
                header.textContent = icon + (data.question || "");
                panel.appendChild(header);

                (data.options || []).forEach(function(o) {
                  const row = document.createElement("div");
                  row.style.marginBottom = "8px";

                  const labelRow = document.createElement("div");
                  labelRow.style.cssText = "display:flex;justify-content:space-between;font-size:13px;margin-bottom:3px;";

                  const labelLeft = document.createElement("span");
                  const keyBold = document.createElement("b");
                  keyBold.textContent = o.key + ".";
                  labelLeft.appendChild(keyBold);
                  labelLeft.appendChild(document.createTextNode(" " + o.text));

                  const labelRight = document.createElement("span");
                  labelRight.textContent = o.count + " (" + o.percentage + "%)";

                  labelRow.appendChild(labelLeft);
                  labelRow.appendChild(labelRight);

                  const barBg = document.createElement("div");
                  barBg.style.cssText = "background:rgba(255,255,255,0.1);border-radius:4px;height:6px;overflow:hidden;";

                  const barFill = document.createElement("div");
                  barFill.style.cssText = "background:linear-gradient(90deg,#06b6d4,#22d3ee);height:100%;border-radius:4px;transition:width 0.3s;";
                  barFill.style.width = (o.count / maxCount * 100) + "%";

                  barBg.appendChild(barFill);
                  row.appendChild(labelRow);
                  row.appendChild(barBg);
                  panel.appendChild(row);
                });

                const footer = document.createElement("div");
                footer.style.cssText = "font-size:11px;color:#94a3b8;margin-top:8px;";
                footer.textContent = "Total: " + (data.total_votes || 0) + " votes";
                panel.appendChild(footer);

                if (data.state === "ended") {
                  setTimeout(function() { if (panel) { panel.style.opacity = "0"; panel.style.transition = "opacity 2s"; } }, 5000);
                  setTimeout(function() { if (panel) panel.remove(); }, 7000);
                }
                return;
              }

              function processDanmuWhenReady(dataPayload, retries) {
                retries = retries || 0;
                if (retries > 30) {
                  console.error('[WebSocket] window.showdanmu unavailable after 30 retries, dropping danmu');
                  return;
                }
                if (typeof window.showdanmu === 'function') {
                  console.log('[WebSocket] Calling window.showdanmu with:', dataPayload);
                  window.showdanmu(
                    dataPayload.text,
                    dataPayload.opacity,
                    '#' + dataPayload.color,
                    dataPayload.size,
                    parseInt(dataPayload.speed),
                    dataPayload.fontInfo,
                    dataPayload.textStyles || { textStroke: true, strokeWidth: 2, strokeColor: "#000000", textShadow: false, shadowBlur: 4 },
                    dataPayload.displayArea || { top: 0, height: 100 },
                    dataPayload.effectCss || null,
                    dataPayload.layout || 'scroll',
                    dataPayload.layoutConfig || null,
                    dataPayload.nickname || null,
                    dataPayload.emojis || null
                  );
                } else {
                  console.warn('[WebSocket] window.showdanmu not ready, retrying in 100ms... (attempt ' + (retries + 1) + '/30)');
                  setTimeout(() => processDanmuWhenReady(dataPayload, retries + 1), 100);
                }
              }

              // 注入 .dme 特效的 CSS keyframes（避免重複注入）
              const effectCss = data.effectCss || null;
              if (effectCss && effectCss.keyframes && effectCss.styleId) {
                const styleId = 'dme-' + effectCss.styleId;
                if (!document.getElementById(styleId)) {
                  const styleEl = document.createElement('style');
                  styleEl.id = styleId;
                  styleEl.textContent = effectCss.keyframes;
                  document.head.appendChild(styleEl);
                }
              }

              // 注入佈局 CSS keyframes
              if (data.layoutCss) {
                const layoutStyleId = 'layout-css-' + (data.layout || 'scroll');
                if (!document.getElementById(layoutStyleId)) {
                  const layoutStyle = document.createElement('style');
                  layoutStyle.id = layoutStyleId;
                  layoutStyle.textContent = data.layoutCss;
                  document.head.appendChild(layoutStyle);
                }
              }

              // 播放音效（僅允許本機來源）
              if (data.sound && data.sound.url) {
                try {
                  const soundUrl = String(data.sound.url);
                  if (/^https?:\\/\\/(127\\.0\\.0\\.1|localhost)(:\\d+)?\\//.test(soundUrl)
                      || /^blob:/.test(soundUrl)
                      || /^data:audio\\//.test(soundUrl)) {
                    const audio = new Audio(soundUrl);
                    audio.volume = Math.min(1.0, Math.max(0, Number(data.sound.volume) || 1.0));
                    audio.play().catch(() => {});
                  } else {
                    console.warn('[WebSocket] Blocked non-local sound URL:', soundUrl.substring(0, 50));
                  }
                } catch (e) { /* ignore sound errors */ }
              }

              processDanmuWhenReady({
                text: data.text,
                opacity: data.opacity,
                color: data.color,
                size: data.size,
                speed: data.speed,
                fontInfo: data.fontInfo,
                textStyles: data.textStyles,
                displayArea: data.displayArea,
                effectCss: effectCss,
                layout: data.layout || 'scroll',
                layoutConfig: data.layoutConfig || null,
                nickname: data.nickname || null,
                emojis: data.emojis || null,
              });

            } catch (e) {
              console.error('Error processing message:', e.message, 'Raw message was:', (typeof txt === 'string' ? txt.replace(/\\n|\\r|\\t/g, ' ') : txt));
            }
          }
        }
      }

      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          console.log("Page visible again, checking connection status")
          if (!ws || ws.readyState !== WebSocket.OPEN) {
            console.log("Connection lost, attempting to reconnect")
            connect()
          }
        }
      })

      connect()
    `;
}

module.exports = { getChildWsScript };
