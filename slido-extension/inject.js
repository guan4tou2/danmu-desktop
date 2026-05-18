// Injected into the PAGE (MAIN world) so we can hook window.fetch,
// XMLHttpRequest, and WebSocket — content scripts live in an isolated
// world and can't see page-level network activity.
//
// Strategy: wrap each transport. When a response/message looks like it
// comes from Slido's API, extract candidate text fields and postMessage
// to the content script (which relays to the background worker).
(function () {
  if (window.__SLIDO_DANMU_HOOKED__) return;
  window.__SLIDO_DANMU_HOOKED__ = true;

  const TAG = "[slido-danmu]";
  const CHANNEL = "SLIDO_DANMU_EVENT";

  function looksLikeSlidoUrl(url) {
    if (!url || typeof url !== "string") return false;
    return /(^|\/\/)([a-z0-9-]+\.)?(sli\.do|slido\.com)\//i.test(url);
  }

  // Fields we commonly see in Slido API payloads. We walk objects
  // recursively so schema drift (v0.1 → v2 etc.) doesn't break us.
  const TEXT_FIELDS = new Set([
    "text",
    "body",
    "content",
    "question",
    "message",
    "answer",
    "title",
  ]);
  const AUTHOR_FIELDS = new Set([
    "author_name",
    "authorName",
    "nickname",
    "user_name",
    "userName",
    "display_name",
    "displayName",
    "name",
  ]);
  const ID_FIELDS = new Set(["id", "uuid", "message_id", "question_id"]);

  function extractCandidates(payload, out, depth) {
    if (!payload || depth > 6) return;
    if (Array.isArray(payload)) {
      for (const item of payload) extractCandidates(item, out, depth + 1);
      return;
    }
    if (typeof payload !== "object") return;

    let text = null;
    let author = null;
    let id = null;
    for (const [k, v] of Object.entries(payload)) {
      if (typeof v === "string" && v.trim()) {
        if (!text && TEXT_FIELDS.has(k)) text = v;
        else if (!author && AUTHOR_FIELDS.has(k)) author = v;
        else if (!id && ID_FIELDS.has(k)) id = v;
      }
    }
    if (text) {
      out.push({ text, author, id });
    }
    for (const v of Object.values(payload)) {
      if (v && typeof v === "object") extractCandidates(v, out, depth + 1);
    }
  }

  function emit(candidates, meta) {
    if (!candidates.length) return;
    window.postMessage(
      {
        __slido_danmu__: true,
        channel: CHANNEL,
        candidates,
        meta,
      },
      window.location.origin,
    );
  }

  function tryExtractFromText(text, meta) {
    if (!text) return;
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      return;
    }
    const out = [];
    extractCandidates(parsed, out, 0);
    emit(out, meta);
  }

  // --- fetch hook ---
  const origFetch = window.fetch;
  if (typeof origFetch === "function") {
    window.fetch = async function patchedFetch(input, init) {
      const resp = await origFetch.apply(this, arguments);
      try {
        const url = typeof input === "string" ? input : input?.url;
        if (looksLikeSlidoUrl(url) && resp && resp.ok) {
          const cloned = resp.clone();
          cloned.text().then(
            (body) =>
              tryExtractFromText(body, { transport: "fetch", url }),
            () => {},
          );
        }
      } catch (err) {
        console.debug(TAG, "fetch hook error", err);
      }
      return resp;
    };
  }

  // --- XHR hook ---
  const OrigXHR = window.XMLHttpRequest;
  if (OrigXHR) {
    const origOpen = OrigXHR.prototype.open;
    const origSend = OrigXHR.prototype.send;
    OrigXHR.prototype.open = function (method, url) {
      this.__slido_url__ = url;
      return origOpen.apply(this, arguments);
    };
    OrigXHR.prototype.send = function () {
      this.addEventListener("load", () => {
        try {
          const url = this.__slido_url__;
          if (!looksLikeSlidoUrl(url)) return;
          const ctype = this.getResponseHeader("content-type") || "";
          if (!/json|text/.test(ctype)) return;
          tryExtractFromText(this.responseText, { transport: "xhr", url });
        } catch (err) {
          console.debug(TAG, "xhr hook error", err);
        }
      });
      return origSend.apply(this, arguments);
    };
  }

  // --- WebSocket hook ---
  const OrigWS = window.WebSocket;
  if (OrigWS) {
    function PatchedWS(url, protocols) {
      const ws = protocols !== undefined
        ? new OrigWS(url, protocols)
        : new OrigWS(url);
      if (looksLikeSlidoUrl(url)) {
        ws.addEventListener("message", (ev) => {
          try {
            if (typeof ev.data === "string") {
              tryExtractFromText(ev.data, { transport: "ws", url });
            }
          } catch (err) {
            console.debug(TAG, "ws hook error", err);
          }
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
