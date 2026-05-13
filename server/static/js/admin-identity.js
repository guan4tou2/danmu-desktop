/**
 * Admin Identity — shared audience-identification renderer.
 *
 * Single source of truth for the "@nickname / fp:abcdef12 / 192.168.x.x"
 * stack used across Live Feed, History, Fingerprint Observatory, and any
 * other admin page that lists individual audience-attributed events.
 *
 * Spec: docs/design-v2-backlog.md § P3-1.
 *   - Fingerprint is primary ID, nickname is display-only (may be spoofed).
 *   - Display: @nick (ui-sans 13px) / fp:8hex (mono 10px dim) / ip (mono 9px mute, optional).
 *   - Click @nick → filter current list by nickname (caller-provided handler).
 *   - Click fp:xxx → navigate to #sec-fingerprints, scroll & highlight matching row.
 *   - Click IP   → not interactive (cursor:default).
 *   - Empty nickname → @guest in textMute.
 *   - "fp:new" sentinel renders a lime status dot.
 *
 * Globals: ServerI18n (for the @guest fallback label).
 *
 * Exposes window.AdminIdentity = { render, parse, FP_DISPLAY_LEN }.
 */
(function () {
  "use strict";

  var FP_DISPLAY_LEN = 8;

  function shortFp(fp) {
    if (!fp) return "";
    return String(fp).slice(0, FP_DISPLAY_LEN);
  }

  /**
   * Pull {nickname, fp, ip} out of any of the record shapes we use:
   *   - live-feed:  { nickname, fingerprint, ... }   (no ip on the WS payload)
   *   - history:    { nickname, fingerprint, clientIp, ... }
   *   - fingerprint observatory: { hash, ip, ... }   (no nickname)
   * Missing fields are returned as empty string.
   */
  function parse(rec) {
    if (!rec || typeof rec !== "object") return { nickname: "", fp: "", ip: "" };
    var fp = rec.fingerprint || rec.fp || rec.hash || "";
    var ip = rec.clientIp || rec.client_ip || rec.ip || "";
    var nickname = rec.nickname || rec.nick || "";
    return { nickname: String(nickname || ""), fp: String(fp || ""), ip: String(ip || "") };
  }

  /**
   * Best-effort SHA-256 of the full fingerprint, truncated to 12 hex chars to
   * match server/services/fingerprint_tracker.py:_Record.hash. Returns null
   * (sync) when SubtleCrypto is unavailable, otherwise a Promise<string>.
   * Used so a click on `fp:xxx` from history/live-feed can locate the matching
   * row in the observatory (which keys by sha256 hash, not the raw fp).
   */
  function hashFp(fp) {
    if (!fp || !window.crypto || !window.crypto.subtle || !window.TextEncoder) {
      return Promise.resolve(null);
    }
    try {
      var enc = new TextEncoder().encode(String(fp));
      return window.crypto.subtle.digest("SHA-256", enc).then(function (buf) {
        var arr = Array.from(new Uint8Array(buf));
        return arr.map(function (b) { return b.toString(16).padStart(2, "0"); }).join("").slice(0, 12);
      }).catch(function () { return null; });
    } catch (_) {
      return Promise.resolve(null);
    }
  }

  /** Best-effort scroll + highlight of a row in the Fingerprint Observatory. */
  function focusFingerprint(fpFull) {
    // The observatory lives on the System page (admin-fingerprints.js mounts
    // it into #settings-grid which renders for the #/system route). If we're
    // not already there, navigate first so the section is in the live DOM.
    if (location.hash !== "#/system") {
      try { location.hash = "#/system"; } catch (_) { /* ignore */ }
    }
    var section = document.getElementById("sec-fingerprints");
    if (section && !section.open) section.open = true;
    if (section) {
      try { section.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (_) { /* ignore */ }
    }
    hashFp(fpFull).then(function (hash12) {
      if (!hash12) return;
      // Re-query each tick — observatory may not have rendered yet.
      var attempts = 0;
      var timer = setInterval(function () {
        attempts += 1;
        var row = document.querySelector('[data-fp-hash="' + hash12 + '"]');
        if (row) {
          clearInterval(timer);
          row.classList.add("admin-identity-flash");
          setTimeout(function () { row.classList.remove("admin-identity-flash"); }, 2000);
          try { row.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (_) { /* ignore */ }
        } else if (attempts > 12) {
          // ~3s upper bound — observatory either failed to load or fp not seen yet.
          clearInterval(timer);
        }
      }, 250);
    });
  }

  /**
   * Render the @nick / fp / ip stack as an HTMLElement.
   *
   * opts:
   *   - nickname        string ("" → @guest)
   *   - fp              string (full fp; "" → fp line skipped, "new" sentinel → fp:new + lime dot)
   *   - ip              string ("" → ip line skipped)
   *   - onNicknameClick (nickname:string) => void   optional
   *   - onFpClick       (fpFull:string)   => void   optional; default = focusFingerprint
   *   - compact         boolean — drop the IP line even if present (small contexts)
   */
  function render(opts) {
    opts = opts || {};
    var nickname = opts.nickname || "";
    var fp = opts.fp || "";
    var ip = opts.ip || "";
    var compact = !!opts.compact;
    var onNick = typeof opts.onNicknameClick === "function" ? opts.onNicknameClick : null;
    var onFp = typeof opts.onFpClick === "function" ? opts.onFpClick : focusFingerprint;

    var root = document.createElement("span");
    root.className = "admin-identity-row";

    // Line 1 — nickname (or @guest).
    var nickEl;
    if (onNick) {
      nickEl = document.createElement("button");
      nickEl.type = "button";
      nickEl.className = "admin-identity-nick is-clickable";
      nickEl.addEventListener("click", function (e) {
        e.stopPropagation();
        onNick(nickname);
      });
    } else {
      nickEl = document.createElement("span");
      nickEl.className = "admin-identity-nick";
    }
    if (nickname) {
      nickEl.textContent = "@" + nickname;
    } else {
      var guest = "guest";
      try {
        if (typeof ServerI18n !== "undefined" && ServerI18n.t) {
          var v = ServerI18n.t("anonymousPlaceholder");
          if (v && v !== "anonymousPlaceholder") guest = v;
        }
      } catch (_) { /* ignore */ }
      nickEl.textContent = "@" + guest;
      nickEl.classList.add("is-guest");
    }
    if (nickname) nickEl.title = nickname;
    root.appendChild(nickEl);

    // Line 2 — fp:xxx (clickable). Skip entirely if no fp.
    if (fp) {
      var fpEl;
      if (onFp) {
        fpEl = document.createElement("button");
        fpEl.type = "button";
        fpEl.className = "admin-identity-fp is-clickable";
        fpEl.addEventListener("click", function (e) {
          e.stopPropagation();
          onFp(fp);
        });
      } else {
        fpEl = document.createElement("span");
        fpEl.className = "admin-identity-fp";
      }
      if (fp === "new") {
        var dot = document.createElement("span");
        dot.className = "admin-identity-dot";
        fpEl.appendChild(dot);
        fpEl.appendChild(document.createTextNode("fp:new"));
      } else {
        fpEl.textContent = "fp:" + shortFp(fp);
      }
      fpEl.title = fp;
      root.appendChild(fpEl);
    }

    // Line 3 — IP (plain text).
    if (ip && !compact) {
      var ipEl = document.createElement("span");
      ipEl.className = "admin-identity-ip";
      ipEl.textContent = ip;
      ipEl.title = ip;
      root.appendChild(ipEl);
    }

    return root;
  }

  window.AdminIdentity = {
    render: render,
    parse: parse,
    focusFingerprint: focusFingerprint,
    hashFp: hashFp,
    FP_DISPLAY_LEN: FP_DISPLAY_LEN,
  };
})();
