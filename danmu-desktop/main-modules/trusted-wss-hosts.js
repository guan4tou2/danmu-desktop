// Track WSS hosts the user has configured via the connection panel.
// main.js's `certificate-error` handler consults this set to decide
// whether to accept self-signed certs for those hosts only — not
// globally.
//
// v5.0.0+: with public VPS deployment we recommend wss:// + token. The
// nginx reverse-proxy uses a self-signed cert by default (until the
// user configures a Let's Encrypt cert via DOMAIN env). Electron's
// default behaviour is to reject self-signed; we narrow the bypass to
// `host:port` pairs the user has explicitly typed in.

const _hosts = new Set();

function add(host, port) {
  if (typeof host !== "string" || !host.trim()) return;
  const p = Number(port);
  if (!Number.isInteger(p) || p < 1 || p > 65535) return;
  _hosts.add(`${host.trim()}:${p}`);
}

function has(host, port) {
  if (typeof host !== "string") return false;
  return _hosts.has(`${host}:${Number(port)}`);
}

function clear() {
  _hosts.clear();
}

function snapshot() {
  return Array.from(_hosts);
}

module.exports = { add, has, clear, snapshot };
