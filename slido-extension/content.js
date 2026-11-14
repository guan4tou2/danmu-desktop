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

  // Only an actual event page (app.sli.do/event/<hash>, wall/admin
  // variants) counts as "watching Slido". Marketing pages such as
  // www.slido.com share the domain but carry no questions.
  function isEventPage(loc) {
    return /(^|\.)(sli\.do|slido\.com)$/i.test(loc.hostname) && /^\/event\/[^/]+/.test(loc.pathname);
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

  // Only the top frame of an event page opens a "page": its first question
  // list becomes the baseline of what is history.
  if (window.top === window && isEventPage(window.location)) {
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
    const date = typeof data.date === "string" ? data.date.slice(0, 64) : "";
    send({ type: "slido_body", url: data.url, body: data.body, date });
  });
})();
