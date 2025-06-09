// Modules to control application life and create native browser window
const { app, BrowserWindow, screen, Tray, Menu, ipcMain } = require("electron");
const path = require("path");

let mainWindow;
let childWindow;
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
      preload: path.join(__dirname, "preload.js"),
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

          // 顯示主窗口的 KONAMI CODE ACTIVATED! 訊息
          mainWindow.webContents
            .executeJavaScript(
              `
            (function() {
              try {
                const existingMessage = document.getElementById('konami-message');
                if (existingMessage) {
                  existingMessage.remove();
                }
                
                const newMessage = document.createElement('div');
                newMessage.id = 'konami-message';
                newMessage.style.position = 'fixed';
                newMessage.style.top = '50%';
                newMessage.style.left = '50%';
                newMessage.style.transform = 'translate(-50%, -50%)';
                newMessage.style.fontSize = '48px';
                newMessage.style.color = 'rgb(95, 119, 255)';
                newMessage.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
                newMessage.style.zIndex = '9999';
                newMessage.textContent = 'KONAMI CODE ACTIVATED!';
                document.body.appendChild(newMessage);
                
                setTimeout(() => {
                  const messageToRemove = document.getElementById('konami-message');
                  if (messageToRemove) {
                    messageToRemove.remove();
                  }
                }, 3000);
              } catch (error) {
                console.error('Error in Konami message:', error);
              }
            })();
          `
            )
            .catch((err) => {
              console.error("Error showing Konami message:", err);
            });

          // 清除彈幕窗口中的所有彈幕
          if (childWindow && !childWindow.isDestroyed()) {
            // 方法1：使用 innerHTML 直接清空 danmubody
            childWindow.webContents
              .executeJavaScript(
                `
              document.getElementById('danmubody').innerHTML = '<script src="./renderer.js"></script>';
              console.log('Cleared danmus using innerHTML');
            `
              )
              .catch((err) => {
                console.error("Failed to clear danmus with method 1:", err);

                // 方法2：如果方法1失敗，嘗試使用選擇器刪除元素
                childWindow.webContents
                  .executeJavaScript(
                    `
                try {
                  const elements = document.querySelectorAll('h1.danmu, img');
                  console.log('Found elements to remove:', elements.length);
                  elements.forEach(el => el.remove());
                  console.log('Cleared danmus using element selectors');
                  return true;
                } catch (error) {
                  console.error('Error removing elements:', error);
                  return false;
                }
              `
                  )
                  .catch((err) => {
                    console.error("Failed to clear danmus with method 2:", err);
                  });
              });
          }
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
  ipcMain.on("deleteChild", (event) => {
    childWindow.destroy();
  });
  ipcMain.on("createChild", (event, ip, port, displayIndex) => {
    createChildWindow(displayIndex);

    const displays = screen.getAllDisplays();
    const selectedDisplay = displays[displayIndex];
    childWindow.setBounds(selectedDisplay.bounds);
    //const {getCursorScreenPoint,getDisplayNearestPoint}=screen
    //const currentScreen=getDisplayNearestPoint(getCursorScreenPoint())
    //childWindow.setBounds(currentScreen.bounds)
    childWindow.setVisibleOnAllWorkspaces(true, "visibleOnFullScreen");
    childWindow.setAlwaysOnTop(true, "screen-saver");
    childWindow.webContents.executeJavaScript(
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
            scene.style.animation = \`scene-fade-out \${fadeOutDuration / 1000}s ease-out forwards\`;
            
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
        if (BrowserWindow.getAllWindows().length === 2) {
          childWindow.destroy();
          app.quit();
        } else {
          app.quit();
        }
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
    if (childWindow) {
      childWindow.destroy();
    }
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

    childWindow = new BrowserWindow({
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
        preload: path.join(__dirname, "preload.js"),
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
      childWindow.destroy();
    });
  } catch (error) {
    console.error("Error creating child window:", error);
  }
}
