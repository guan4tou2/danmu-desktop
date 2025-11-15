function sanitizeLog(input) {
  let strInput = String(input);
  strInput = strInput.replace(/\r\n|\r|\n/g, " ");
  strInput = strInput.replace(/\t/g, " ");
  return strInput;
}

/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
window.showdanmu = function (
  string,
  opacity = 75,
  color = "#ffffff",
  size = 50,
  speed = 7,
  fontInfo = { name: "NotoSansTC", url: null, type: "default" } // Updated parameter
) {
  console.log("[showdanmu] Received:", {
    string: sanitizeLog(string),
    opacity,
    color: sanitizeLog(color),
    size,
    speed,
    fontInfo,
  });
  var parentElement = document.getElementById("danmubody");
  var imgs = /^https?:\/\/([^\s/]+\/)*[^\s/]+\.(gif|png|jpeg|jpg)$/i;
  // Add a check for http/https protocols
  var protocolCheck = /^(http:|https:)/i;
  if (imgs.test(string) && protocolCheck.test(string)) {
    // Added protocolCheck
    var danmu = document.createElement("img");
    danmu.setAttribute("src", string);
    danmu.width = size * 2;
  } else if (imgs.test(string) && !protocolCheck.test(string)) {
    // Handle invalid protocol for an image URL by treating it as text
    console.warn(
      "[showdanmu] Invalid protocol for image URL:",
      sanitizeLog(string),
      "Displaying as text."
    );
    var danmu = document.createElement("h1");
    danmu.className = "danmu";
    danmu.textContent = "Invalid image URL: " + string; // Display the problematic string as text
    danmu.setAttribute("data-stroke", "Invalid image URL: " + string);
    danmu.style.fontSize = `${size}px`;
    // Font family will be applied after potential dynamic loading
    danmu.style.color = "red"; // Indicate an error
    // Ensure parentElement is defined before appending
    if (parentElement) {
      parentElement.appendChild(danmu);
    } else {
      console.error(
        "[showdanmu] parentElement is null, cannot append error message for invalid image URL."
      );
    }
  } else {
    var danmu = document.createElement("h1");
    danmu.className = "danmu";
    danmu.textContent = string;
    danmu.setAttribute("data-stroke", string);
    danmu.style.fontSize = `${size}px`;
    // Font family will be applied after potential dynamic loading
    danmu.style.color = color;
  }

  // Function to apply font and then append and animate
  const applyFontAndAnimate = async () => {
    let effectiveFontName = fontInfo.name || "NotoSansTC"; // Fallback to default if name is missing

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
          effectiveFontName = "NotoSansTC"; // Fallback to default on error
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

    // Animation logic (moved inside this function)
    const Height = parseFloat(getComputedStyle(danmu).height);
    const Width = parseFloat(getComputedStyle(danmu).width);
    const Padding = parseFloat(getComputedStyle(danmu).padding);
    let top = Math.abs(
      Math.random() * document.documentElement.clientHeight - (Height + Padding)
    );
    danmu.style.top = `${top}px`;
    danmu.style.opacity = opacity * 0.01;

    // Calculate animation duration
    // Speed range: 1 (slowest) to 10 (fastest)
    let currentSpeed = Number(speed);
    if (isNaN(currentSpeed)) {
      console.warn(
        "[showdanmu] Invalid speed received, defaulting to 5:",
        sanitizeLog(speed)
      );
      currentSpeed = 5;
    }

    // Clamp speed to the 1-10 range
    currentSpeed = Math.max(1, Math.min(10, currentSpeed));

    const maxTime = 20000; // Max duration (slowest) in ms (for speed 1)
    const minTime = 2000; // Min duration (fastest) in ms (for speed 10)

    // Linear interpolation: duration = maxTime - (speed - 1) * (maxTime - minTime) / (10 - 1)
    // (10 - 1) is the range of speed values (9 steps)
    let duration = maxTime - ((currentSpeed - 1) * (maxTime - minTime)) / 9;

    // Ensure duration is within minTime and maxTime bounds, even with floating point issues.
    duration = Math.max(minTime, Math.min(maxTime, duration));

    console.log(
      "[showdanmu] Sanitized speed:",
      currentSpeed,
      "Calculated duration:",
      duration
    ); // No sensitive strings

    console.log("[showdanmu] Animation parameters:", { Width, duration, top }); // These are numbers
    try {
      danmu.animate(
        [
          { transform: "translateX(100vw)" },
          { transform: `translateX(-${Width}px)` },
        ],
        {
          duration: duration,
          easing: "linear",
        }
      ).onfinish = () => {
        // danmu object itself might be complex, but its direct properties logged here are not user strings.
        console.log("[showdanmu] Animation finished, danmu removed:", danmu);
        danmu.remove();
      };
    } catch (e) {
      console.error("[showdanmu] Animation error:", sanitizeLog(e.message));
      // Ensure danmu is removed even if animation fails to start
      if (danmu.parentElement) {
        danmu.remove();
      }
    }
  };

  // Call the function to apply font and start animation
  applyFontAndAnimate().catch((e) => {
    console.error(
      "[showdanmu] Error in applyFontAndAnimate:",
      sanitizeLog(e.message)
    );
    // Fallback: try to append and animate with default font if something went wrong
    if (danmu && !danmu.parentElement && parentElement) {
      danmu.style.fontFamily = "NotoSansTC"; // Default font
      parentElement.appendChild(danmu);
      // Simplified animation call or let it be handled by the next general error
    }
  });
};

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const ip = document.getElementById("host-input");
const port = document.getElementById("port-input");
const screenSelect = document.getElementById("screen-select");
const syncMultiDisplayCheckbox = document.getElementById(
  "sync-multi-display-checkbox"
);

startButton.addEventListener("click", () => {
  //var ipre = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  var ipre =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  var domainre =
    /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i;
  var portre = /^\d{1,5}$/;
  if (
    ipre.test(ip.value) ||
    (domainre.test(ip.value) && portre.test(port.value))
  ) {
    const IP = ip.value;
    const PORT = port.value;
    const displayIndex = parseInt(screenSelect.value);
    const enableSyncMultiDisplay = syncMultiDisplayCheckbox.checked;

    console.log(
      `[Renderer] Starting overlay with: IP=${sanitizeLog(
        IP
      )}, PORT=${sanitizeLog(
        PORT
      )}, DisplayIndex=${displayIndex}, SyncMultiDisplay=${enableSyncMultiDisplay}`
    );
    console.log("[renderer.js] window.API before create:", window.API); // window.API is an object, not logging sensitive parts here
    const api = window.API;
    api.create(IP, PORT, displayIndex, enableSyncMultiDisplay); // Pass the new argument

    startButton.disabled = true;
    stopButton.disabled = false;
    ip.disabled = true;
    port.disabled = true;
    screenSelect.disabled = true;
    syncMultiDisplayCheckbox.disabled = true;

    // Update button styles - waiting for connection
    startButton.classList.remove("btn-primary", "btn-connected");
    startButton.classList.add("btn-connecting");
    stopButton.classList.remove("btn-stopped");
    stopButton.classList.add("btn-active");

    // Logging boolean values, no sanitization needed for these.
    console.log(
      `[Renderer] UI Disabled: screenSelect=${screenSelect.disabled}, syncMultiDisplayCheckbox=${syncMultiDisplayCheckbox.disabled}`
    );
  }
});

stopButton.addEventListener("click", () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  ip.disabled = false;
  port.disabled = false;
  syncMultiDisplayCheckbox.disabled = false;
  syncMultiDisplayCheckbox.dispatchEvent(new Event("change")); // This will trigger the change handler below

  // Update button styles - reset to default
  startButton.classList.remove("btn-connecting", "btn-connected");
  startButton.classList.add("btn-primary");
  stopButton.classList.remove("btn-active");
  stopButton.classList.add("btn-stopped");

  // Logging boolean value, no sanitization needed.
  console.log(
    `[Renderer] Overlay stopped. UI Enabled: syncMultiDisplayCheckbox=${syncMultiDisplayCheckbox.disabled}`
  );
  console.log("[renderer.js] window.API before close:", window.API); // window.API is an object
  const api = window.API;
  api.close(); // Changed from api.delete()
});

syncMultiDisplayCheckbox.addEventListener("change", () => {
  if (syncMultiDisplayCheckbox.checked) {
    screenSelect.disabled = true;
    // Logging boolean value, no sanitization needed.
    console.log(
      `[Renderer] Sync checkbox CHECKED: screenSelect.disabled=${screenSelect.disabled}`
    );
  } else {
    // Only enable screenSelect if the overlay is not active (i.e., startButton is enabled)
    if (startButton.disabled === false) {
      screenSelect.disabled = false;
    }
    // Logging boolean values, no sanitization needed.
    console.log(
      `[Renderer] Sync checkbox UNCHECKED: screenSelect.disabled=${screenSelect.disabled} (startButton.disabled=${startButton.disabled})`
    );
  }
});

// Initial state setup
if (syncMultiDisplayCheckbox.checked) {
  screenSelect.disabled = true;
}
// Logging boolean values, no sanitization needed.
console.log(
  `[Renderer] Initial UI state: screenSelect.disabled=${screenSelect.disabled}, syncMultiDisplayCheckbox.checked=${syncMultiDisplayCheckbox.checked}`
);

// Listen for connection status updates
if (window.API && typeof window.API.onConnectionStatus === "function") {
  window.API.onConnectionStatus((data) => {
    console.log("[Renderer] Connection status update:", data);
    if (data.status === "connected") {
      // Connection successful - update start button to connected state
      startButton.classList.remove("btn-connecting");
      startButton.classList.add("btn-connected");
    } else if (data.status === "disconnected") {
      // Connection lost - update start button to connecting state (waiting for reconnect)
      startButton.classList.remove("btn-connected");
      startButton.classList.add("btn-connecting");
    } else if (data.status === "stopped") {
      // Overlay stopped - reset buttons to default state
      startButton.classList.remove("btn-connecting", "btn-connected");
      startButton.classList.add("btn-primary");
      stopButton.classList.remove("btn-active");
      stopButton.classList.add("btn-stopped");
    }
  });
}
