// Modules to control application life and create native browser window
const { app, BrowserWindow, screen, Tray, Menu, ipcMain } = require("electron");
const path = require("path");

const { sanitizeLog } = require("./shared/utils");

let mainWindow;
let childWindows = []; // Changed to an array
let konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
let konamiIndex = 0;
let lastKeyTime = Date.now();
let isKeyDown = false;

// Function to show startup animation in child window
function showStartupAnimation(targetWindow, settings) {
  if (!targetWindow || targetWindow.isDestroyed()) {
    console.error("[Main] Cannot show startup animation: window is destroyed");
    return;
  }

  let animationText = "";

  // Determine animation text based on type
  if (settings.type === "link-start") {
    animationText = "LINK START";
  } else if (settings.type === "domain-expansion") {
    animationText = "領域展開";
  } else if (settings.type === "custom" && settings.customText) {
    animationText = sanitizeLog(settings.customText);
  } else {
    animationText = "LINK START"; // Default fallback
  }

  console.log("[Main] Showing startup animation:", animationText);

  targetWindow.webContents.send("show-startup-animation", {
    type: settings.type,
    text: animationText,
  });
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 900,
    minHeight: 700,
    resizable: true,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "assets/icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.bundle.js"), // Corrected path
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "../index.html"));

  // RELOCATED HANDLERS START
  mainWindow.on("minimize", (ev) => {
    ev.preventDefault();
    mainWindow.hide();
  });

  mainWindow.on("close", (e) => {
    console.log("[Main] Window close event triggered");
    // 關閉所有子視窗
    childWindows.forEach((win) => {
      if (win && !win.isDestroyed()) {
        try {
          win.destroy();
        } catch (err) {
          console.error(
            "[Main] Error destroying child window:",
            sanitizeLog(err.message)
          );
        }
      }
    });
    childWindows = [];
    app.quit();
  });
  // RELOCATED HANDLERS END

  mainWindow.webContents.on("did-finish-load", () => {
    try {
      const displays = screen.getAllDisplays();
      // Sanitize display information before logging
      const sanitizedDisplays = displays.map((d) => ({
        ...d,
        id: sanitizeLog(d.id),
      }));
      const displayOptions = displays.map((display, index) => {
        const bounds = display.bounds;
        return {
          value: index,
          text: `Display ${index + 1} (${bounds.width}x${bounds.height})`,
        };
      });

      mainWindow.webContents.send("update-display-options", displayOptions);
    } catch (error) {
      console.error(
        "Error getting display information:",
        sanitizeLog(error.message)
      );
    }
  });

  // Add Konami Code listener
  mainWindow.webContents.on("before-input-event", (event, input) => {
    const currentTime = Date.now();

    if (currentTime - lastKeyTime > 2000) {
      konamiIndex = 0;
      isKeyDown = false;
    }

    if (input.type === "keyUp") {
      isKeyDown = false;
      return;
    }

    if (input.type === "keyDown" && !isKeyDown) {
      isKeyDown = true;
      lastKeyTime = currentTime;

      console.log(
        "Key pressed:",
        sanitizeLog(input.key),
        "Current index:",
        konamiIndex
      );

      if (input.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        console.log("Match successful, current progress:", konamiIndex);
        if (konamiIndex === konamiCode.length) {
          konamiIndex = 0;
          isKeyDown = false;
          console.log("Konami Code triggered successfully!");

          childWindows.forEach((cw) => {
            if (cw && !cw.isDestroyed()) {
              // Send Konami effect message to child window
              cw.webContents.send("konami-effect");
            }
          });
        }
      } else {
        console.log("Match failed, resetting index"); // No variable data here
        konamiIndex = 0;
        isKeyDown = false;
      }
    }
  });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  // ipcMain.on("deleteChild", (event) => { // This is the old handler, remove it
  //   childWindows.forEach(win => {
  //     if (win && !win.isDestroyed()) {
  //       win.destroy();
  //     }
  //   });
  //   childWindows = [];
  //   console.log("[Main] All child windows destroyed on closeChildWindows event."); // Renamed event
  // });
  ipcMain.on("closeChildWindows", (event) => {
    // This is the correct handler
    [...childWindows].forEach((win) => {
      // Iterate over a shallow copy for safety
      if (win && !win.isDestroyed()) {
        win.destroy();
      }
    });
    childWindows = [];
    console.log(
      "[Main] All child windows destroyed on closeChildWindows event."
    );
    // Notify renderer that overlay is stopped
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("overlay-connection-status", {
        status: "stopped",
      });
    }
  });

  // Handle connection status updates from child windows
  ipcMain.on("overlay-connection-status", (event, data) => {
    // Forward the status to the main window
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("overlay-connection-status", data);
    }
  });
  // Handler for getDisplays
  ipcMain.handle("getDisplays", async () => {
    const displays = screen.getAllDisplays();
    // Sanitize display information before logging
    const sanitizedDisplays = displays.map((d) => ({
      ...d,
      id: sanitizeLog(d.id),
    }));
    console.log("[Main] getDisplays handled, returning:", sanitizedDisplays);
    return displays;
  });

  // Handler for getting system locale
  ipcMain.handle("getSystemLocale", async () => {
    const locale = app.getLocale();
    console.log(
      "[Main] getSystemLocale handled, returning:",
      sanitizeLog(locale)
    );
    return locale;
  });

  // Handler for sending test danmu
  ipcMain.on("send-test-danmu", (event, data) => {
    console.log("[Main] send-test-danmu received:", data);
    // Send test danmu to all child windows
    childWindows.forEach((win) => {
      if (win && !win.isDestroyed()) {
        win.webContents
          .executeJavaScript(
            `
          if (typeof window.showdanmu === 'function') {
            window.showdanmu(
              ${JSON.stringify(data.text)},
              ${data.opacity},
              ${JSON.stringify(data.color)},
              ${data.size},
              ${data.speed},
              { name: "NotoSansTC", url: null, type: "default" },
              ${JSON.stringify(
              data.textStyles || {
                textStroke: true,
                strokeWidth: 2,
                strokeColor: "#000000",
                textShadow: false,
                shadowBlur: 4,
              }
            )},
              ${JSON.stringify(
              data.displayArea || {
                top: 0,
                height: 100,
              }
            )}
            );
          }
        `
          )
          .catch((err) => {
            console.error(
              "[Main] Error sending test danmu:",
              sanitizeLog(err.message)
            );
          });
      }
    });
  });

  // Handler for updating overlay settings
  ipcMain.on("update-overlay-settings", (event, settings) => {
    console.log("[Main] update-overlay-settings received:", settings);
    // Update opacity of all child windows
    childWindows.forEach((win) => {
      if (win && !win.isDestroyed()) {
        // Update window opacity
        win.setOpacity(settings.opacity / 100);

        // Store settings in window for future danmu
        win.webContents
          .executeJavaScript(
            `
          window.defaultDanmuSettings = ${JSON.stringify(settings)};
          console.log("[Overlay] Default danmu settings updated:", window.defaultDanmuSettings);
        `
          )
          .catch((err) => {
            console.error(
              "[Main] Error updating overlay settings:",
              sanitizeLog(err.message)
            );
          });
      }
    });
  });

  ipcMain.on(
    "createChild",
    (
      event,
      ip,
      port,
      displayIndex,
      enableSyncMultiDisplay,
      startupAnimationSettings
    ) => {
      // Added enableSyncMultiDisplay and startupAnimationSettings
      if (typeof ip !== "string" || !ip) {
        console.warn(
          `[Main] createChild: Received invalid IP address. Expected a non-empty string, but got: '${ip}' (type: ${typeof ip})`
        );
        return;
      }
      console.log(
        `[Main] createChild IPC received: IP=${sanitizeLog(
          ip
        )}, Port=${sanitizeLog(port)}, DisplayIndex=${sanitizeLog(
          displayIndex
        )}, SyncMultiDisplay=${enableSyncMultiDisplay}, StartupAnimation=${JSON.stringify(
          startupAnimationSettings
        )}`
      );
      // Clear existing child windows
      childWindows.forEach((win) => {
        if (win && !win.isDestroyed()) {
          win.destroy();
        }
      });
      childWindows = [];
      console.log(
        "[Main] Cleared existing child windows before creating new ones."
      );

      const displays = screen.getAllDisplays();
      console.log(`[Main] Detected ${displays.length} displays.`);

      if (enableSyncMultiDisplay) {
        console.log(
          "[Main] Sync multi-display ENABLED. Creating windows for all displays."
        );
        displays.forEach((display, index) => {
          console.log(
            `[MacOS Debug] Multi-display: Using bounds for display ${index} (ID: ${sanitizeLog(
              display.id
            )}):`,
            JSON.stringify(display.bounds, null, 2)
          );
          console.log(
            `[Main] Creating child window for display ${index} (ID: ${sanitizeLog(
              display.id
            )}). Initial geometry will be default, overridden by setBounds later.`
          );
          const newChild = new BrowserWindow({
            // x, y, width, height removed
            closable: false,
            skipTaskbar: true,
            transparent: true,
            frame: false,
            resizable: false,
            icon: path.join(__dirname, "assets/icon.png"),
            webPreferences: {
              preload: path.join(__dirname, "preload.bundle.js"), // Corrected path
              nodeIntegration: false,
              contextIsolation: true,
            },
          });
          // Apply the same startup animation settings to all displays for consistency
          setupChildWindow(newChild, display, ip, port, startupAnimationSettings);
          childWindows.push(newChild);
        });
        console.log(
          `[Main] Created ${childWindows.length} child windows for sync multi-display.`
        );
      } else {
        console.log(
          "[Main] Sync multi-display DISABLED. Creating window for selected display."
        );
        if (displayIndex < 0 || displayIndex >= displays.length) {
          console.error(
            "[Main] Invalid display index for single display mode:",
            sanitizeLog(displayIndex)
          );
          return;
        }
        const selectedDisplay = displays[displayIndex];
        console.log(
          `[Main] Creating child window for selected display ${sanitizeLog(
            displayIndex
          )} (ID: ${sanitizeLog(
            selectedDisplay.id
          )}). Initial geometry will be default, overridden by setBounds later.`
        );
        const newChild = new BrowserWindow({
          // x, y, width, height removed
          closable: false,
          skipTaskbar: true,
          transparent: true,
          frame: false,
          resizable: false,
          icon: path.join(__dirname, "assets/icon.png"),
          webPreferences: {
            preload: path.join(__dirname, "preload.bundle.js"), // Corrected path
            nodeIntegration: false,
            contextIsolation: true,
          },
        });
        setupChildWindow(
          newChild,
          selectedDisplay,
          ip,
          port,
          startupAnimationSettings
        );
        childWindows.push(newChild); // This was the correct placement
        // The }); below was an error from the previous incorrect diff application.
        console.log(`[Main] Created 1 child window for single display mode.`);
      }
    }
  );
}

// Renamed and refactored function
function setupChildWindow(
  targetWindow,
  display,
  ip,
  port,
  startupAnimationSettings
) {
  const initialBounds = targetWindow.getBounds();
  console.log(
    `[Main] Setting up child window for display ID ${sanitizeLog(
      display.id
    )}. Initial bounds (before ready-to-show setBounds) might be default: x=${initialBounds.x
    }, y=${initialBounds.y}, width=${initialBounds.width}, height=${initialBounds.height
    }`
  );

  targetWindow.loadFile(path.join(__dirname, "../child.html"));

  targetWindow.once("ready-to-show", () => {
    console.log(
      `[Main] In ready-to-show for display ID ${sanitizeLog(
        display.id
      )}. Intended bounds:`,
      JSON.stringify(display.bounds, null, 2)
    );
    targetWindow.setBounds(display.bounds); // Explicitly set bounds
    const boundsAfterSet = targetWindow.getBounds();
    console.log(
      `[Main] Bounds after setBounds for display ID ${sanitizeLog(
        display.id
      )}: x=${boundsAfterSet.x}, y=${boundsAfterSet.y}, width=${boundsAfterSet.width
      }, height=${boundsAfterSet.height}`
    );

    console.log(
      `[Main] Child window for display ID ${sanitizeLog(
        display.id
      )} is ready-to-show. Applying final settings before show.`
    );
    targetWindow.setAlwaysOnTop(true, "screen-saver");
    targetWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
    targetWindow.setIgnoreMouseEvents(true);

    targetWindow.show();

    // 不在这里显示启动动画，改为在 WebSocket 连接成功时显示
    // 将启动动画设置存储到窗口对象中，以便在连接成功时使用
    targetWindow.startupAnimationSettings = startupAnimationSettings;

    const finalBounds = targetWindow.getBounds();
    console.log(
      `[Main] Child window for display ID ${sanitizeLog(
        display.id
      )} shown. Final bounds: x=${finalBounds.x}, y=${finalBounds.y}, width=${finalBounds.width
      }, height=${finalBounds.height}`
    );
  });

  targetWindow.on("closed", () => {
    const index = childWindows.indexOf(targetWindow);
    if (index > -1) {
      childWindows.splice(index, 1);
    }
    console.log(
      `[Main] Child window for display ID ${sanitizeLog(
        display.id
      )} removed from list upon close.`
    );
  });

  // WebSocket connection logic (remains the same)
  // Pass startup animation settings to the WebSocket code
  const startupAnimSettingsJson = JSON.stringify(startupAnimationSettings || { enabled: false });
  targetWindow.webContents.executeJavaScript(
    // Note: sanitizeLog is a Node.js function, not directly available in browser execution context.
    // We will sanitize ip and port before injecting them into the script.
    `
      const IP_ADDR='${sanitizeLog(ip)}';
      const WS_PORT_NUM=${sanitizeLog(port)};
      const STARTUP_ANIM_SETTINGS = ${startupAnimSettingsJson};
      console.log(IP_ADDR, WS_PORT_NUM) // These are now sanitized
      let url = \`ws://\${IP_ADDR}:\${WS_PORT_NUM}\`
      let ws = null
      let reconnectAttempts = 0
      const maxReconnectAttempts = 10
      const reconnectDelay = 3000
      let heartbeatInterval = null
      let lastHeartbeatResponse = Date.now()
      const heartbeatTimeout = 30000 // 30 seconds without response is considered disconnection
      let connectionLost = false
      let connectionTimeout = null
      const connectionTimeoutDuration = 10000 // 10 seconds timeout for initial connection
      let isFirstConnectionAttempt = true
      let lastSentStatus = null
      let statusSendTimeout = null
      
      // Helper function to safely send connection status with debouncing
      function sendConnectionStatus(status) {
        // 如果状态相同，不重复发送
        if (lastSentStatus === status) {
          return
        }
        
        // 清除之前的发送定时器
        if (statusSendTimeout) {
          clearTimeout(statusSendTimeout)
        }
        
        // 防抖：延迟发送状态，避免频繁更新
        statusSendTimeout = setTimeout(() => {
          if (window.API && typeof window.API.sendConnectionStatus === 'function') {
            try {
              window.API.sendConnectionStatus(status)
              lastSentStatus = status
            } catch (e) {
              console.error('Error sending connection status:', e.message)
            }
          } else {
            // Retry after a short delay if API is not ready
            setTimeout(() => sendConnectionStatus(status), 100)
          }
          statusSendTimeout = null
        }, 200) // 200ms 防抖延迟
      }
      
      // Heartbeat detection function
      function startHeartbeat() {
        clearInterval(heartbeatInterval)
        lastHeartbeatResponse = Date.now()
        
        heartbeatInterval = setInterval(() => {
          if (ws && ws.readyState === WebSocket.OPEN) {
            // Send heartbeat packet
            try {
              ws.send(JSON.stringify({ type: "heartbeat", timestamp: Date.now() }))
              
              // Check for timeout
              const timeSinceLastResponse = Date.now() - lastHeartbeatResponse
              if (timeSinceLastResponse > heartbeatTimeout) {
                console.log("Heartbeat timeout, connection may be lost") // No variable data
                clearInterval(heartbeatInterval)
                // If connection is broken but WebSocket state is still OPEN, manually close and reconnect
                if (ws.readyState === WebSocket.OPEN) {
                  connectionLost = true
                  ws.close()
                }
              }
            } catch (error) {
              console.error("Error sending heartbeat:", error.message) // Sanitize error message
              clearInterval(heartbeatInterval)
              if (ws.readyState === WebSocket.OPEN) {
                connectionLost = true
                ws.close()
              }
            }
          }
        }, 15000) // Send heartbeat every 15 seconds
      }

      function connect() {
        // If connection exists, clean up first
        if (ws) {
          try {
            ws.close()
          } catch (e) {
            console.error("Error closing old connection:", e.message) // Sanitize error message
          }
        }
        
        // Clear any existing connection timeout
        if (connectionTimeout) {
          clearTimeout(connectionTimeout)
          connectionTimeout = null
        }
        
        // Set connection timeout for first connection attempt
        if (isFirstConnectionAttempt) {
          connectionTimeout = setTimeout(() => {
            if (ws && ws.readyState !== WebSocket.OPEN) {
              console.log('Connection timeout - server unreachable')
              // Close the connection if it's still trying to connect
              try {
                ws.close()
              } catch (e) {
                // Connection might already be closed
              }
              // Notify main window about connection failure
              sendConnectionStatus('connection-failed')
              // Stop reconnection attempts for first connection failure
              reconnectAttempts = maxReconnectAttempts
            }
          }, connectionTimeoutDuration)
        }
        
        ws = new WebSocket(url)
        
        ws.onopen = () => {
          // Clear connection timeout
          if (connectionTimeout) {
            clearTimeout(connectionTimeout)
            connectionTimeout = null
          }
          isFirstConnectionAttempt = false
          
          console.log('Connection opened') // No variable data
          // 在重置之前检查是否为第一次连接
          const isFirstConnection = reconnectAttempts === 0
          reconnectAttempts = 0
          connectionLost = false
          lastHeartbeatResponse = Date.now()
          startHeartbeat()
          
          // Notify main window about successful connection
          sendConnectionStatus('connected')
          
          // 启动动画和 Link Start 动画 - 只在第一次连接成功时显示
          if (!isFirstConnection) {
            return // 重连时不显示动画
          }
          
          const showSceneAnimation = (animationText) => {
            // 清理可能存在的旧 Link Start 动画元素
            const oldStyle = document.getElementById('link-start-style');
            if (oldStyle) oldStyle.remove();
            const oldScene = document.querySelector('.scene');
            if (oldScene) oldScene.remove();
            const oldLinkStart = document.querySelector('.link-start');
            if (oldLinkStart) oldLinkStart.remove();
            
          const style = document.createElement('style');
            style.id = 'link-start-style';
          style.textContent = \`
            /* Import Google Font */
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');

            html, body {
              height: 100%;
              width: 100%;
              overflow: hidden;
              background-color: transparent; /* Allow desktop to be visible */
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
              animation: move 12s infinite linear; /* Faster animation */
              animation-fill-mode: forwards;
            }

            .wrap:nth-child(2) {
              animation: move 12s infinite linear;
              animation-delay: 6s;
            }

            .wall {
              width: 100%;
              height: 100%;
              position: absolute;
              background: url(assets/linkstart.png); /* Assuming this is a grid/tech texture */
              background-size: cover;
              opacity: 0;
              animation: fade 12s infinite linear;
              animation-delay: 0;
            }

            .wrap:nth-child(2) .wall {
              animation-delay: 6s;
            }

            .wall-right { transform: rotateY(90deg) translateZ(500px); }
            .wall-left { transform: rotateY(-90deg) translateZ(500px); }
            .wall-top { transform: rotateX(90deg) translateZ(500px); }
            .wall-bottom { transform: rotateX(-90deg) translateZ(500px); }
            .wall-back { transform: rotateX(180deg) translateZ(500px); }

            @keyframes move {
              0% {
                transform: translateZ(-500px) rotateY(0deg);
              }
              100% {
                transform: translateZ(500px) rotateY(360deg); /* Added rotation */
              }
            }

            @keyframes fade {
              0%   { opacity: 0; }
              20%  { opacity: 0.8; } /* Increased max opacity */
              80%  { opacity: 0.8; }
              100% { opacity: 0; }
            }

            @keyframes scene-zoom-in {
                from {
                    opacity: 0;
                    transform: scale(0.2);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
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
              color: #00d4ff; /* Bright cyan color */
              text-shadow: 
                0 0 3px #00d4ff,
                0 0 6px #00d4ff,
                0 0 12px #00d4ff;
              z-index: 9999;
              animation: text-flicker 3s linear infinite, text-fade-in-out 8s ease-out forwards;
              opacity: 0;
            }

            /* Glitch effect pseudo-elements */
            .link-start::after,
            .link-start::before {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                color: #00d4ff;
                background: transparent; /* Make glitch effect transparent */
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
              10%  { opacity: 1; transform: translate(-50%, -50%) scale(1.1); } /* Increased max opacity */
              20%  { transform: translate(-50%, -50%) scale(1); }
              80%  { opacity: 1; } /* Hold opacity longer */
              100% { opacity: 0; transform: translate(-50%, -50%) scale(1.05); } /* Faster fade-out */
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
            linkStart.setAttribute("data-text", animationText || 'Link Start'); // For glitch effect
          document.body.appendChild(linkStart);
          
          const totalDuration = 7000; // Trigger fade-out earlier
          const fadeOutDuration = 2000;
          
          setTimeout(() => {
            scene.style.animation = \`scene-fade-out \${fadeOutDuration/1000}s ease-out forwards\`;
            
            setTimeout(() => {
              document.body.contains(scene) && scene.remove();
              document.head.contains(style) && style.remove();
              document.body.contains(linkStart) && linkStart.remove();
            }, fadeOutDuration);
          }, totalDuration);
          };
          
          let animationText = 'LINK START';
          if (STARTUP_ANIM_SETTINGS && STARTUP_ANIM_SETTINGS.type === 'domain-expansion') {
            animationText = '領域展開';
          } else if (STARTUP_ANIM_SETTINGS && STARTUP_ANIM_SETTINGS.type === 'custom' && STARTUP_ANIM_SETTINGS.customText) {
            animationText = STARTUP_ANIM_SETTINGS.customText;
          }
          
          // 显示场景动画，仅保留带背景的版本
          if (STARTUP_ANIM_SETTINGS && STARTUP_ANIM_SETTINGS.enabled) {
            showSceneAnimation(animationText);
          } else {
            // 如果未启用，依然显示场景动画，使用对应的动画文字
            showSceneAnimation(animationText);
          }
        }
        
        ws.onclose = (event) => {
          console.log('Connection closed', event.code) // event.code is a number, not typically user input
          clearInterval(heartbeatInterval)
          
          // Clear connection timeout if still active
          if (connectionTimeout) {
            clearTimeout(connectionTimeout)
            connectionTimeout = null
          }
          
          // If this is the first connection attempt and it failed, notify about connection failure
          if (isFirstConnectionAttempt && reconnectAttempts === 0) {
            sendConnectionStatus('connection-failed')
            // Stop reconnection attempts for first connection failure
            reconnectAttempts = maxReconnectAttempts
            return
          }
          
          // Notify main window about disconnection (for reconnections)
          // 只在状态改变时发送，避免频繁更新
          if (lastSentStatus !== 'disconnected') {
            sendConnectionStatus('disconnected')
          }
          
          // Use incremental reconnect delay
          const currentDelay = connectionLost ? reconnectDelay : reconnectDelay * (reconnectAttempts + 1)
          
          // Only reconnect if we haven't exceeded max attempts
          if (reconnectAttempts < maxReconnectAttempts) {
          // Unlimited reconnect attempts, but with increasing delay
          console.log(\`Attempting to reconnect in \${currentDelay/1000} seconds...\`) // No direct user input
          setTimeout(connect, currentDelay)
          reconnectAttempts++
          } else {
            console.log('Max reconnection attempts reached, stopping reconnection')
            sendConnectionStatus('connection-failed')
          }
        }
        
        ws.onerror = (error) => {
          console.error('WebSocket error:', error.message) // Sanitize error message
          // If this is the first connection attempt, clear timeout and let onclose handle
          if (isFirstConnectionAttempt && connectionTimeout) {
            clearTimeout(connectionTimeout)
            connectionTimeout = null
          }
          // No special handling on error, let onclose handle reconnection
        }
        
        ws.onmessage = event => {
          // Update heartbeat response time for any received message
          lastHeartbeatResponse = Date.now()
          
          let txt = event.data
          // console.log('[WebSocket] Raw message received:', sanitizeLog(txt)); // Log from previous step, sanitized

          if (txt === "connection") {
              console.log(sanitizeLog(txt));
          } else if (txt === "heartbeat_ack") {
              console.log("Received heartbeat response"); // No variable data
          } else {
              try {
                  // Sanitize before parsing, as JSON.parse can throw on weird characters.
                  // However, sanitizing might break JSON structure if not careful.
                  // Best to sanitize after parsing, on the actual data fields.
                  console.log('[WebSocket] Raw message received:', (typeof txt === 'string' ? txt.replace(/\\n|\\r|\\t/g, ' ') : txt) ); // Basic sanitization for logging raw msg
                  let data = JSON.parse(txt);
                  // Sanitize specific fields of data if they are strings
                  if (data && typeof data === 'object') {
                    for (const key in data) {
                      if (typeof data[key] === 'string') {
                        data[key] = data[key].replace(/\\r\\n|\\r|\\n|\\t/g, " "); // In-browser sanitization
                      }
                    }
                  }
                  console.log('[WebSocket] Parsed data:', data);


                  if (data.type === "heartbeat_ack") {
                      console.log("Received heartbeat response"); // No variable data
                      return;
                  }
                  if (data.type === "ping") {
                      if (ws.readyState === WebSocket.OPEN) {
                          ws.send(JSON.stringify({ type: "pong" }));
                      }
                      return;
                  }

                  // Check if showdanmu is available, if not, wait and retry
                  function processDanmuWhenReady(dataPayload) {
                      // dataPayload here is already sanitized from the loop above
                      if (typeof window.showdanmu === 'function') {
                          console.log('[WebSocket] Calling window.showdanmu with:', dataPayload);
                          // Pass the fontInfo object, textStyles, and displayArea to showdanmu
                          window.showdanmu(
                            dataPayload.text,
                            dataPayload.opacity,
                            '#' + dataPayload.color,
                            dataPayload.size,
                            parseInt(dataPayload.speed),
                            dataPayload.fontInfo,
                            dataPayload.textStyles || { textStroke: true, strokeWidth: 2, strokeColor: "#000000", textShadow: false, shadowBlur: 4 },
                            dataPayload.displayArea || { top: 0, height: 100 }
                          );
                      } else {
                          console.warn('[WebSocket] window.showdanmu not ready, retrying in 100ms...'); // No variable data
                          setTimeout(() => processDanmuWhenReady(dataPayload), 100);
                      }
                  }

                  processDanmuWhenReady({ // Package the data for the retry mechanism
                      // data properties were sanitized in the loop above
                      text: data.text,
                      opacity: data.opacity,
                      color: data.color,
                      size: data.size,
                      speed: data.speed,
                      fontInfo: data.fontInfo, // Pass the fontInfo object
                      textStyles: data.textStyles, // Pass text styles if provided
                      displayArea: data.displayArea // Pass display area if provided
                  });

              } catch (e) {
                  console.error('Error processing message:', e.message, 'Raw message was:', (typeof txt === 'string' ? txt.replace(/\\n|\\r|\\t/g, ' ') : txt)); // Sanitize error and raw message
              }
          }
      }
      }

      // Page visibility change listener, check connection when page becomes visible again
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          console.log("Page visible again, checking connection status") // No variable data
          if (!ws || ws.readyState !== WebSocket.OPEN) {
            console.log("Connection lost, attempting to reconnect") // No variable data
            connect()
          }
        }
      })

      // Initial connection
      connect()
    `
  );
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();

  // createChildWindow()
  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
  tray = new Tray(path.join(__dirname, "assets/icon.png"));
  const menu = [
    {
      label: "open manager",
      click: () => {
        mainWindow.show();
      },
    },
    {
      label: "quit",
      // role: 'quit',
      click: () => {
        childWindows.forEach((win) => {
          if (win && !win.isDestroyed()) {
            win.destroy();
          }
        });
        childWindows = [];
        console.log("[Main] All child windows destroyed on tray quit.");
        app.quit();
      },
    },
  ];
  tray.setContextMenu(Menu.buildFromTemplate(menu));
  tray.setToolTip("danmu manager");

  tray.on("double-click", () => {
    mainWindow.show();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

/* // Commenting out the old createChildWindow function
function createChildWindow(displayIndex) {
  try {
    const displays = screen.getAllDisplays();
    // Sanitize display information before logging
    const sanitizedDisplays = displays.map(d => ({...d, id: sanitizeLog(d.id)}));
    console.log("Available displays:", sanitizedDisplays);
    console.log("Selected display index:", sanitizeLog(displayIndex));

    if (displayIndex < 0 || displayIndex >= displays.length) {
      console.error("Invalid display index:", sanitizeLog(displayIndex));
      return;
    }

    const selectedDisplay = displays[displayIndex];
    // Sanitize selectedDisplay info before logging
    const sanitizedSelectedDisplay = {...selectedDisplay, id: sanitizeLog(selectedDisplay.id)};
    console.log("Selected display:", sanitizedSelectedDisplay);

    const { width, height } = selectedDisplay.bounds;
    console.log("Window dimensions:", { width, height }); // width and height are numbers

    childWindow = new BrowserWindow({ // This was the old single childWindow
      width: width,
      height: height,
      x: selectedDisplay.bounds.x,
      y: selectedDisplay.bounds.y,
      closable: false,
      skipTaskbar: true,
      transparent: true,
      frame: false,
      resizable: false,
      icon: path.join(__dirname, "assets/icon.png"),
      webPreferences: {
        preload: path.join(__dirname, "dist/preload.bundle.js"),
        nodeIntegration: true,
      },
    });
    childWindow.setIgnoreMouseEvents(true);
    // childWindow.webContents.openDevTools()
    childWindow.loadFile("child.html");

    childWindow.once("ready-to-show", () => {
      childWindow.show();
    });

    childWindow.on("closed", () => {
      childWindow.destroy(); // This would refer to the old single childWindow
    });
  } catch (error) {
    console.error("Error creating child window:", sanitizeLog(error.message));
  }
}
*/
let animationFrameId = null;
const danmuElements = new Set();
const explosionDuration = 800; // ms

function animateDanmus() {
  const now = performance.now();
  const danmusToRemove = [];

  danmuElements.forEach((el) => {
    // Check if the element is still in the DOM or has been marked for explosion
    if (!el.parentElement || el.dataset.exploding === "true") {
      danmusToRemove.push(el);
      return;
    }

    // Normal movement logic (only runs if not exploding)
    let distance = parseFloat(el.dataset.distance);
    let speed = parseFloat(el.dataset.speed);
    let startTime = parseFloat(el.dataset.startTime);

    let elapsed = now - startTime;
    let progress = (elapsed * speed) / distance;

    el.style.left =
      window.innerWidth - progress * (distance + el.offsetWidth) + "px";

    if (progress >= 1) {
      danmusToRemove.push(el);
    }
  });

  danmusToRemove.forEach((el) => {
    danmuElements.delete(el);
    el.remove();
  });

  animationFrameId = requestAnimationFrame(animateDanmus);
}

function stopAnimation() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

function showdanmu(text, opacity, color, size, speed) {
  let danmu = document.createElement("h1");
  danmu.textContent = text;
  danmu.style.opacity = opacity;
  danmu.style.color = color;
  danmu.style.fontSize = size;
  danmu.className = "danmu";

  document.body.appendChild(danmu);

  danmu.style.top =
    Math.random() * (window.innerHeight - danmu.offsetHeight) + "px";
  danmu.dataset.startTime = performance.now();
  danmu.dataset.speed = speed;
  danmu.dataset.distance = window.innerWidth + danmu.offsetWidth;

  danmuElements.add(danmu);

  if (!animationFrameId) {
    animateDanmus();
  }
}

// Add this function for image danmus, modifying it to use the unified animation loop
function showimagedanmu(src, opacity, size, speed) {
  let danmu = document.createElement("img");
  danmu.src = src;
  danmu.style.opacity = opacity;
  danmu.style.height = size;
  danmu.className = "danmu"; // Use the same class

  document.body.appendChild(danmu);

  danmu.onload = () => {
    danmu.style.top =
      Math.random() * (window.innerHeight - danmu.offsetHeight) + "px";
    danmu.dataset.startTime = performance.now();
    danmu.dataset.speed = speed;
    danmu.dataset.distance = window.innerWidth + danmu.offsetWidth;

    danmuElements.add(danmu);

    if (!animationFrameId) {
      animateDanmus();
    }
  };
}
