// Injected into the PAGE (MAIN world) so we can see window.fetch,
// XMLHttpRequest and WebSocket traffic — content scripts live in an
// isolated world and can't. This file only forwards raw bodies of the
// question list and the realtime stream; parsing happens in core.js
// inside the service worker, where it is unit-tested.
(function () {
  if (window.__SLIDO_DANMU_HOOKED__) return;
  window.__SLIDO_DANMU_HOOKED__ = true;

  const TAG = "[slido-danmu]";
  const CHANNEL = "SLIDO_DANMU_BODY";
  // A question list page is a few hundred KB at most; anything larger is
  // not what we are looking for and is not worth copying across worlds.
  const MAX_BODY = 512 * 1024;

  // Cheap prefilter; core.classifyUrl makes the real decision.
  function mayCarryQuestions(url) {
    return typeof url === "string" && /(sli\.do|slido\.com)/i.test(url) &&
      (/\/questions/.test(url) || /stream-sio|socket\.io/.test(url));
  }

  // `date` is the response's HTTP Date header: Slido's server clock, which
  // core.js uses as the start point of "new". "" when it cannot be read
  // (WebSocket frames, or a cross-origin response that does not expose it).
  function forward(url, body, date) {
    if (typeof body !== "string" || !body || body.length > MAX_BODY) return;
    const msg = { __slido_danmu__: true, channel: CHANNEL, url, body, date: date || "" };
    window.postMessage(msg, window.location.origin);
  }

  function readDate(get) {
    try {
      return get() || "";
    } catch (_) {
      return "";
    }
  }

  const origFetch = window.fetch;
  if (typeof origFetch === "function") {
    window.fetch = async function patchedFetch(input) {
      const resp = await origFetch.apply(this, arguments);
      try {
        const url = typeof input === "string" ? input : input && input.url;
        if (mayCarryQuestions(url) && resp && resp.ok) {
          const date = readDate(() => resp.headers.get("date"));
          resp.clone().text().then((body) => forward(url, body, date), () => {});
        }
      } catch (err) {
        console.debug(TAG, "fetch hook error", err);
      }
      return resp;
    };
  }

  const OrigXHR = window.XMLHttpRequest;
  if (OrigXHR) {
    const origOpen = OrigXHR.prototype.open;
    const origSend = OrigXHR.prototype.send;
    OrigXHR.prototype.open = function (method, url) {
      this.__slido_url__ = typeof url === "string" ? url : String(url);
      return origOpen.apply(this, arguments);
    };
    OrigXHR.prototype.send = function () {
      this.addEventListener("load", () => {
        try {
          const url = this.__slido_url__;
          if (!mayCarryQuestions(url) || this.status < 200 || this.status >= 300) return;
          if (this.responseType && this.responseType !== "text") return;
          forward(url, this.responseText, readDate(() => this.getResponseHeader("Date")));
        } catch (err) {
          console.debug(TAG, "xhr hook error", err);
        }
      });
      return origSend.apply(this, arguments);
    };
  }

  const OrigWS = window.WebSocket;
  if (OrigWS) {
    function PatchedWS(url, protocols) {
      const ws = protocols !== undefined ? new OrigWS(url, protocols) : new OrigWS(url);
      const href = typeof url === "string" ? url : String(url);
      if (mayCarryQuestions(href)) {
        ws.addEventListener("message", (ev) => {
          if (typeof ev.data === "string") forward(href, ev.data);
        });
      }
      return ws;
    }
    PatchedWS.prototype = OrigWS.prototype;
    PatchedWS.CONNECTING = OrigWS.CONNECTING;
    PatchedWS.OPEN = OrigWS.OPEN;
    PatchedWS.CLOSING = OrigWS.CLOSING;
    PatchedWS.CLOSED = OrigWS.CLOSED;
    window.WebSocket = PatchedWS;
  }

  console.info(TAG, "hooks installed");
})();
