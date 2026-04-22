// Content script: injects inject.js into the page's main world, then
// relays postMessage events from the page to the background worker.
(function () {
  try {
    const s = document.createElement("script");
    s.src = chrome.runtime.getURL("inject.js");
    s.async = false;
    (document.head || document.documentElement).appendChild(s);
    s.addEventListener("load", () => s.remove());
  } catch (err) {
    console.debug("[slido-danmu] inject failed", err);
  }

  window.addEventListener("message", (event) => {
    if (event.source !== window) return;
    const data = event.data;
    if (!data || data.__slido_danmu__ !== true) return;
    if (data.channel !== "SLIDO_DANMU_EVENT") return;
    try {
      chrome.runtime.sendMessage({
        type: "slido_candidates",
        candidates: data.candidates || [],
        meta: data.meta || {},
      });
    } catch (err) {
      // Extension context may be invalidated during reload; ignore.
    }
  });
})();
