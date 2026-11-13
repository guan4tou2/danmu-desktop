// Content script: injects inject.js into the page's main world, then
// relays question-feed bodies from the page to the service worker.
(function () {
  const PING_MS = 30_000;

  function send(msg) {
    try {
      chrome.runtime.sendMessage(msg);
    } catch (_) {
      // Extension context may be invalidated during reload; ignore.
    }
  }

  try {
    const s = document.createElement("script");
    s.src = chrome.runtime.getURL("inject.js");
    s.async = false;
    (document.head || document.documentElement).appendChild(s);
    s.addEventListener("load", () => s.remove());
  } catch (err) {
    console.debug("[slido-danmu] inject failed", err);
  }

  // Only the top frame defines when this page started: questions asked
  // before it was opened are history, not danmu.
  if (window.top === window) {
    send({ type: "slido_page_open" });
    // Keeps the admin card's status fresh while the tab stays open; the
    // service worker itself may be asleep between Slido events.
    setInterval(() => send({ type: "slido_ping" }), PING_MS);
  }

  window.addEventListener("message", (event) => {
    if (event.source !== window) return;
    const data = event.data;
    if (!data || data.__slido_danmu__ !== true || data.channel !== "SLIDO_DANMU_BODY") return;
    if (typeof data.url !== "string" || typeof data.body !== "string") return;
    send({ type: "slido_body", url: data.url, body: data.body });
  });
})();
