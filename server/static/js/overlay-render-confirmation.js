(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.OverlayRenderConfirmation = factory();
})(typeof window !== "undefined" ? window : this, function () {
"use strict";
// A render receipt confirms a visible animated DOM frame reported by this
// renderer. It cannot prove that a person saw the screen or an OBS recording.
// One bounded observer serves all messages, including hidden/background windows.
const MAX_PENDING = 500;
const TIMEOUT_MS = 15000;
const pending = new Set();
let timer = null;

function finish(entry, result) {
  pending.delete(entry);
  entry.resolve(result);
}

function tick() {
  const now = Date.now();
  for (const entry of pending) {
    const { element, animation } = entry;
    if (now >= entry.deadline || !element.isConnected || animation.playState === "finished" || animation.playState === "idle") {
      finish(entry, false);
      continue;
    }
    const images = [...element.querySelectorAll("img")];
    if (images.some(img => img.complete && !img.naturalWidth)) {
      finish(entry, false);
      continue;
    }
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    const content = element.querySelector(".danmu");
    const contentStyle = content && getComputedStyle(content);
    const visible = document.visibilityState === "visible" &&
      images.every(img => img.complete && img.naturalWidth > 0) &&
      animation.playState === "running" && Number(animation.currentTime) > 0 &&
      style.display !== "none" && style.visibility === "visible" && Number(style.opacity) > 0 &&
      (!contentStyle || (contentStyle.visibility === "visible" && contentStyle.display !== "none" && Number(contentStyle.opacity || 1) > 0)) &&
      rect.width > 0 && rect.height > 0 && rect.right > 0 && rect.bottom > 0 &&
      rect.left < innerWidth && rect.top < innerHeight;
    // Two observations give the browser an opportunity to present a frame.
    if (visible && entry.visibleOnce) finish(entry, true);
    else entry.visibleOnce = visible;
  }
  if (!pending.size) {
    clearInterval(timer);
    timer = null;
  }
}

function confirmRendered(element, animation) {
  if (!animation || !element || pending.size >= MAX_PENDING) return Promise.resolve(false);
  return new Promise(resolve => {
    pending.add({ element, animation, resolve, deadline: Date.now() + TIMEOUT_MS, visibleOnce: false });
    if (timer === null) timer = setInterval(tick, 50);
  });
}

function waitForFont(promise) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("Font load timed out")), 5000);
    Promise.resolve(promise).then(value => { clearTimeout(timeout); resolve(value); }, error => { clearTimeout(timeout); reject(error); });
  });
}

return { confirmRendered, waitForFont };

});
