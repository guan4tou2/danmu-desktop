// Modules to control application life and create native browser window
const { app, BrowserWindow, screen, Tray, Menu, ipcMain } = require("electron");
const path = require("path");

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

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "assets/icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.bundle.js"), // Corrected path
      nodeIntegration: true,
    },
  });
  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  mainWindow.webContents.on("did-finish-load", () => {
    try {
      const displays = screen.getAllDisplays();
      console.log("Detected displays:", displays);

      const displayOptions = displays.map((display, index) => {
        const bounds = display.bounds;
        return {
          value: index,
          text: `Display ${index + 1} (${bounds.width}x${bounds.height})`,
        };
      });

      const script = `
        (function() {
          try {
            const screenSelect = document.getElementById('screen-select')
            if (!screenSelect) {
              console.error('screen-select element not found')
              return
            }
            
            screenSelect.innerHTML = ''
            const options = ${JSON.stringify(displayOptions)}
            options.forEach(option => {
              const opt = document.createElement('option')
              opt.value = option.value
              opt.textContent = option.text
              screenSelect.appendChild(opt)
            })
            console.log('Display options updated:', options)
          } catch (error) {
            console.error('Error updating display options:', error)
          }
        })()
      `;

      mainWindow.webContents.executeJavaScript(script).catch((error) => {
        console.error("Error executing display update script:", error);
      });
    } catch (error) {
      console.error("Error getting display information:", error);
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

      console.log("Key pressed:", input.key, "Current index:", konamiIndex);

      if (input.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        console.log("Match successful, current progress:", konamiIndex);
        if (konamiIndex === konamiCode.length) {
          konamiIndex = 0;
          isKeyDown = false;
          console.log("Konami Code triggered successfully!");

          // New Konami Code effect for mainWindow
          mainWindow.webContents
            .executeJavaScript(
              `
            (function() {
              try {
                // Clean up any previous instances
                const oldOverlay = document.getElementById('konami-overlay');
                if (oldOverlay) oldOverlay.remove();
                
                const overlay = document.createElement('div');
                overlay.id = 'konami-overlay';
                
                const style = document.createElement('style');
                style.textContent = \`
                  @font-face {
                    font-family: 'SDGlitch';
                    src: url('assets/SDGlitch_Demo.ttf') format('truetype');
                  }

                  #konami-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0,0,0,0);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    pointer-events: none;
                    animation: konami-vignette 4s ease-out forwards, konami-screen-shake 0.5s 2;
                  }

                  @keyframes konami-vignette {
                    0% { box-shadow: inset 0 0 0 0 rgba(0,0,0,0); }
                    25% { box-shadow: inset 0 0 200px 100px rgba(0,0,0,0.7); }
                    75% { box-shadow: inset 0 0 200px 100px rgba(0,0,0,0.7); }
                    100% { box-shadow: inset 0 0 0 0 rgba(0,0,0,0); }
                  }
                  
                  @keyframes konami-screen-shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-10px); }
                    75% { transform: translateX(10px); }
                  }

                  .konami-text {
                    font-family: 'SDGlitch', 'Courier New', Courier, monospace;
                    font-size: 12vw; /* Much larger font size for full-screen effect */
                    color:rgb(222, 187, 32);
                    text-shadow: 0 0 10px rgb(217, 233, 42), 0 0 20px rgb(217, 233, 42);
                    position: relative;
                    animation: konami-text-flicker 3s infinite alternate;
                    white-space: nowrap; /* Prevent text from wrapping to a new line */
                    letter-spacing: -0.05em; /* Tighten up letters for glitch effect */
                  }

                  .konami-text::before, .konami-text::after {
                    content: 'KONAMI CODE ACTIVATED!';
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: transparent;
                    clip: rect(0, 900px, 0, 0);
                  }

                  .konami-text::before {
                    left: -2px;
                    text-shadow: -1px 0 red;
                    animation: konami-glitch-1 2s infinite linear alternate-reverse;
                  }

                  .konami-text::after {
                    left: 2px;
                    text-shadow: 1px 0 blue;
                    animation: konami-glitch-2 3s infinite linear alternate-reverse;
                  }
                  
                  @keyframes konami-text-flicker {
                      0%, 100% { opacity: 1; }
                      50% { opacity: 0.8; }
                  }

                  @keyframes konami-glitch-1 {
                      0% { clip: rect(42px, 9999px, 44px, 0); }
                      10% { clip: rect(17px, 9999px, 94px, 0); }
                      20% { clip: rect(83px, 9999px, 86px, 0); }
                      30% { clip: rect(28px, 9999px, 16px, 0); }
                      40% { clip: rect(42px, 9999px, 62px, 0); }
                      50% { clip: rect(34px, 9999px, 14px, 0); }
                      60% { clip: rect(77px, 9999px, 77px, 0); }
                      70% { clip: rect(61px, 9999px, 52px, 0); }
                      80% { clip: rect(40px, 9999px, 50px, 0); }
                      90% { clip: rect(43px, 9999px, 86px, 0); }
                      100% { clip: rect(97px, 9999px, 82px, 0); }
                  }

                  @keyframes konami-glitch-2 {
                      0% { clip: rect(85px, 9999px, 9px, 0); }
                      10% { clip: rect(8px, 9999px, 3px, 0); }
                      20% { clip: rect(42px, 9999px, 94px, 0); }
                      30% { clip: rect(23px, 9999px, 33px, 0); }
                      40% { clip: rect(38px, 9999px, 49px, 0); }
                      50% { clip: rect(12px, 9999px, 48px, 0); }
                      60% { clip: rect(81px, 9999px, 91px, 0); }
                      70% { clip: rect(30px, 9999px, 75px, 0); }
                      80% { clip: rect(88px, 9999px, 100px, 0); }
                      90% { clip: rect(22px, 9999px, 66px, 0); }
                      100% { clip: rect(1px, 9999px, 52px, 0); }
                  }
                \`;
                
                const textElement = document.createElement('div');
                textElement.className = 'konami-text';
                textElement.textContent = 'KONAMI CODE ACTIVATED!';
                
                overlay.appendChild(style);
                overlay.appendChild(textElement);
                document.body.appendChild(overlay);
                
                setTimeout(() => {
                  const overlayToRemove = document.getElementById('konami-overlay');
                  if (overlayToRemove) {
                    overlayToRemove.remove();
                  }
                }, 4000);
              } catch (error) {
                console.error('Error in Konami message:', error);
              }
            })();
          `
            )
            .catch((err) => {
              console.error("Error showing Konami message:", err);
            });

          // Clear danmus in the child window with an animation
          childWindows.forEach(cw => {
            if (cw && !cw.isDestroyed()) {
              const script = `
              (function() {
                try {
                  const danmusToExplode = document.querySelectorAll('h1.danmu, img.danmu');
                  if (danmusToExplode.length === 0) return;

                  console.log('Initiating explosion for ' + danmusToExplode.length + ' danmus.');

                  // This function creates and animates a single particle
                  function createExplosionParticle(originalElement) {
                    const rect = originalElement.getBoundingClientRect();
                    const particle = originalElement.cloneNode(true); // Create a visual copy

                    // Reset any conflicting inline styles and set up for particle animation
                    particle.style.transform = '';
                    particle.style.left = rect.left + 'px';
                    particle.style.top = rect.top + 'px';
                    particle.style.margin = '0';
                    particle.style.position = 'fixed'; // Use fixed to position relative to viewport
                    
                    document.body.appendChild(particle);

                    // Animate the particle using the Web Animations API
                    const duration = 800 + Math.random() * 400;
                    const targetX = (Math.random() - 0.5) * window.innerWidth;
                    const targetY = (Math.random() - 0.5) * window.innerHeight;
                    const targetScale = 1.5 + Math.random() * 2;
                    const targetRot = (Math.random() - 0.5) * 1080;

                    particle.animate([
                      { transform: 'translate(0, 0) scale(1) rotate(0)', opacity: particle.style.opacity },
                      { transform: 'translate(' + targetX + 'px, ' + targetY + 'px) scale(' + targetScale + ') rotate(' + targetRot + 'deg)', opacity: 0 }
                    ], {
                      duration: duration,
                      easing: 'ease-out',
                      fill: 'forwards' // Keep the final state
                    });

                    // Remove the particle after the animation
                    setTimeout(() => {
                      particle.remove();
                    }, duration);
                  }

                  danmusToExplode.forEach(el => {
                    if (el.dataset.exploding) return; // Skip if already handled
                    createExplosionParticle(el);
                    el.dataset.exploding = 'true'; // Mark for removal by the main animation loop
                    el.style.display = 'none'; // Hide original immediately
                  });

                } catch (error) {
                  console.error('Error creating explosion effect:', error);
                }
              })();
            `;
              cw.webContents.executeJavaScript(script).catch((err) => {
                console.error("Failed to execute danmu clearing script:", err);
              });
            }
          });
        }
      } else {
        console.log("Match failed, resetting index");
        konamiIndex = 0;
        isKeyDown = false;
      }
    }
  });

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  // ipcMain.on("deleteChild", (event) => { // This is the old handler, remove it
  //   childWindows.forEach(win => {
  //     if (win && !win.isDestroyed()) {
  //       win.destroy();
  //     }
  //   });
  //   childWindows = [];
  //   console.log("[Main] All child windows destroyed on closeChildWindows event."); // Renamed event
  // });
  ipcMain.on("closeChildWindows", (event) => { // This is the correct handler
    childWindows.forEach(win => {
      if (win && !win.isDestroyed()) {
        win.destroy();
      }
    });
    childWindows = [];
    console.log("[Main] All child windows destroyed on closeChildWindows event.");
  });
  // Handler for getDisplays
  ipcMain.handle('getDisplays', async () => {
    const displays = screen.getAllDisplays();
    console.log("[Main] getDisplays handled, returning:", displays);
    return displays;
  });

  ipcMain.on("createChild", (event, ip, port, displayIndex, enableSyncMultiDisplay) => { // Added enableSyncMultiDisplay
    console.log(`[Main] createChild IPC received: IP=${ip}, Port=${port}, DisplayIndex=${displayIndex}, SyncMultiDisplay=${enableSyncMultiDisplay}`);
    // Clear existing child windows
    childWindows.forEach(win => {
      if (win && !win.isDestroyed()) {
        win.destroy();
      }
    });
    childWindows = [];
    console.log("[Main] Cleared existing child windows before creating new ones.");

    const displays = screen.getAllDisplays();
    console.log(`[Main] Detected ${displays.length} displays.`);
    console.log("[MacOS Debug] All detected displays:", JSON.stringify(displays, null, 2));

    if (enableSyncMultiDisplay) {
      console.log("[Main] Sync multi-display ENABLED. Creating windows for all displays.");
      displays.forEach((display, index) => {
        console.log(`[MacOS Debug] Multi-display: Using bounds for display ${index} (ID: ${display.id}):`, JSON.stringify(display.bounds, null, 2));
        console.log(`[Main] Creating child window for display ${index} (ID: ${display.id}) at ${JSON.stringify(display.bounds)}`);
        const newChild = new BrowserWindow({
          x: display.bounds.x,
          y: display.bounds.y,
          width: display.bounds.width,
          height: display.bounds.height,
          closable: false,
          skipTaskbar: true,
          transparent: true,
          frame: false,
          resizable: false,
          icon: path.join(__dirname, "assets/icon.png"),
          webPreferences: {
            preload: path.join(__dirname, "preload.bundle.js"), // Corrected path
            nodeIntegration: true,
          },
        });
        setupChildWindow(newChild, display, ip, port);
        childWindows.push(newChild);
      });
      console.log(`[Main] Created ${childWindows.length} child windows for sync multi-display.`);
    } else {
      console.log("[Main] Sync multi-display DISABLED. Creating window for selected display.");
      if (displayIndex < 0 || displayIndex >= displays.length) {
        console.error("[Main] Invalid display index for single display mode:", displayIndex);
        return;
      }
      const selectedDisplay = displays[displayIndex];
      console.log(`[MacOS Debug] Single-display: Using bounds for displayIndex ${displayIndex} (ID: ${selectedDisplay.id}):`, JSON.stringify(selectedDisplay.bounds, null, 2));
      console.log(`[Main] Creating child window for selected display ${displayIndex} (ID: ${selectedDisplay.id}) at ${JSON.stringify(selectedDisplay.bounds)}`);
      const newChild = new BrowserWindow({
        x: selectedDisplay.bounds.x,
        y: selectedDisplay.bounds.y,
        width: selectedDisplay.bounds.width,
        height: selectedDisplay.bounds.height,
        closable: false,
        skipTaskbar: true,
        transparent: true,
        frame: false,
        resizable: false,
        icon: path.join(__dirname, "assets/icon.png"),
        webPreferences: {
          preload: path.join(__dirname, "preload.bundle.js"), // Corrected path
          nodeIntegration: true,
        },
      });
      setupChildWindow(newChild, selectedDisplay, ip, port);
      childWindows.push(newChild); // This was the correct placement
      // The }); below was an error from the previous incorrect diff application.
      console.log(`[Main] Created 1 child window for single display mode.`);
    }
  });
}

// Renamed and refactored function
function setupChildWindow(targetWindow, display, ip, port) {
  console.log(`[Main] Setting up child window for display ID ${display.id} with IP=${ip}, Port=${port}. Initial bounds set at creation: x=${targetWindow.getBounds().x}, y=${targetWindow.getBounds().y}`);

  targetWindow.loadFile("child.html"); // Load content first

  targetWindow.once("ready-to-show", () => {
    console.log(`[Main] Child window for display ID ${display.id} is ready-to-show. Applying final settings before show.`);
    // Apply these settings just before showing
    targetWindow.setAlwaysOnTop(true, "screen-saver");
    targetWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true }); // Corrected syntax
    targetWindow.setIgnoreMouseEvents(true); // This might also be better here

    targetWindow.show();
    console.log(`[Main] Child window for display ID ${display.id} shown.`);
  });

  targetWindow.on("closed", () => {
    const index = childWindows.indexOf(targetWindow);
    if (index > -1) {
      childWindows.splice(index, 1);
    }
    console.log(`[Main] Child window for display ID ${display.id} removed from list upon close.`);
  });

  // WebSocket connection logic (remains the same)
  targetWindow.webContents.executeJavaScript(
      `
      const IP='${ip}';
      const WS_PORT=${port}
      console.log(IP, WS_PORT)
      let url = \`ws://${ip}:\${WS_PORT}\`
      let ws = null
      let reconnectAttempts = 0
      const maxReconnectAttempts = 10
      const reconnectDelay = 3000
      let heartbeatInterval = null
      let lastHeartbeatResponse = Date.now()
      const heartbeatTimeout = 30000 // 30 seconds without response is considered disconnection
      let connectionLost = false
      
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
                console.log("Heartbeat timeout, connection may be lost")
                clearInterval(heartbeatInterval)
                // If connection is broken but WebSocket state is still OPEN, manually close and reconnect
                if (ws.readyState === WebSocket.OPEN) {
                  connectionLost = true
                  ws.close()
                }
              }
            } catch (error) {
              console.error("Error sending heartbeat:", error)
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
            console.error("Error closing old connection:", e)
          }
        }
        
        ws = new WebSocket(url)
        
        ws.onopen = () => {
          console.log('Connection opened')
          reconnectAttempts = 0
          connectionLost = false
          lastHeartbeatResponse = Date.now()
          startHeartbeat()
          
          // Link Start animation
          const style = document.createElement('style');
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
            
            /* Scanline overlay */
            body::after {
                content: " ";
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                background-size: 100% 4px, 6px 100%;
                z-index: 99999;
                pointer-events: none;
                opacity: 0; /* Start invisible */
                animation: scanlines 1s steps(60) infinite, scene-zoom-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            
            @keyframes scanlines {
                from { background-position: 0 0; }
                to { background-position: 0 100%; }
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
                0 0 5px #00d4ff,
                0 0 10px #00d4ff,
                0 0 20px #00d4ff,
                0 0 40px #00d4ff,
                0 0 80px #00d4ff;
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
          linkStart.textContent = 'Link Start';
          linkStart.setAttribute("data-text", 'Link Start'); // For glitch effect
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
        }
        
        ws.onclose = (event) => {
          console.log('Connection closed', event.code)
          clearInterval(heartbeatInterval)
          
          // Use incremental reconnect delay
          const currentDelay = connectionLost ? reconnectDelay : reconnectDelay * (reconnectAttempts + 1)
          
          // Unlimited reconnect attempts, but with increasing delay
          console.log(\`Attempting to reconnect in \${currentDelay/1000} seconds...\`)
          setTimeout(connect, currentDelay)
          reconnectAttempts++
        }
        
        ws.onerror = (error) => {
          console.error('WebSocket error:', error)
          // No special handling on error, let onclose handle reconnection
        }
        
        ws.onmessage = event => {
          // Update heartbeat response time for any received message
          lastHeartbeatResponse = Date.now()
          
          let txt = event.data
          if (txt === "connection") {
            console.log(txt)
          } else if (txt === "heartbeat_ack") {
            // Server heartbeat response
            console.log("Received heartbeat response")
          } else {
            try {
              let data = JSON.parse(txt)
              
              // If this is a heartbeat response packet
              if (data.type === "heartbeat_ack") {
                console.log("Received heartbeat response")
                return
              }
              
              // If this is a server ping
              if (data.type === "ping") {
                // Reply with pong
                if (ws.readyState === WebSocket.OPEN) {
                  ws.send(JSON.stringify({ type: "pong" }))
                }
                return
              }
              
              let text = data.text
              let opacity = data.opacity
              let color = '#' + data.color
              let size = data.size
              let speed = parseInt(data.speed)
              showdanmu(text, opacity, color, size, speed)
            } catch (e) {
              console.error("Error processing message:", e)
            }
          }
        }
      }

      // Page visibility change listener, check connection when page becomes visible again
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          console.log("Page visible again, checking connection status")
          if (!ws || ws.readyState !== WebSocket.OPEN) {
            console.log("Connection lost, attempting to reconnect")
            connect()
          }
        }
      })

      // Initial connection
      connect()
    `
    );
  });
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
        childWindows.forEach(win => {
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
  mainWindow.on("minimize", (ev) => {
    ev.preventDefault();
    mainWindow.hide();
  });
  mainWindow.on("close", (e) => {
    console.log("[Main] Main window closing. Destroying all child windows.");
    childWindows.forEach(win => {
      if (win && !win.isDestroyed()) {
        win.destroy();
      }
    });
    childWindows = [];
    console.log("[Main] All child windows destroyed on main window close.");
    app.quit();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

/* // Commenting out the old createChildWindow function
function createChildWindow(displayIndex) {
  try {
    const displays = screen.getAllDisplays();
    console.log("Available displays:", displays);
    console.log("Selected display index:", displayIndex);

    if (displayIndex < 0 || displayIndex >= displays.length) {
      console.error("Invalid display index:", displayIndex);
      return;
    }

    const selectedDisplay = displays[displayIndex];
    console.log("Selected display:", selectedDisplay);

    const { width, height } = selectedDisplay.bounds;
    console.log("Window dimensions:", { width, height });

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
    console.error("Error creating child window:", error);
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
