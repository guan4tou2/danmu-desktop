// Auto-strip parser shared by the conn-card display + edit form.
// Mirrors the regex chain in `docs/designs/design-v2/components/desktop.jsx`
// ConnSection. Storage stays `{host, port, wsToken, displayIndex}`; this
// module bridges the unified Server field with that split shape.

const _SCHEME_RE = /^(?:wss?|https?):\/\//i;
const _WS_PATH_RE = /\/ws\/?$/i;
const _TRAILING_SLASH_RE = /\/$/;

function parseServerInput(raw) {
  if (raw == null) throw new Error("host required");
  let s = String(raw).trim();
  if (!s) throw new Error("host required");

  s = s.replace(_SCHEME_RE, "");
  s = s.replace(_WS_PATH_RE, "");
  s = s.replace(_TRAILING_SLASH_RE, "");
  if (!s) throw new Error("host required");

  const colon = s.lastIndexOf(":");
  if (colon === -1) {
    return { host: s, port: 443 };
  }
  const host = s.slice(0, colon);
  const portStr = s.slice(colon + 1);
  if (!host) throw new Error("host required");
  if (!/^\d+$/.test(portStr)) throw new Error("invalid port");
  const port = Number(portStr);
  if (port < 1 || port > 65535) throw new Error("invalid port");
  return { host, port };
}

function buildCanonicalUrl({ host, port }) {
  const portPart = port === 443 ? "" : `:${port}`;
  return `wss://${host}${portPart}/ws`;
}

function formatDisplayHost({ host, port }) {
  return port === 443 ? host : `${host}:${port}`;
}

module.exports = { parseServerInput, buildCanonicalUrl, formatDisplayHost };
