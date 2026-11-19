// Overlay bootstrap config builder (main process side).
//
// The WS client itself lives in renderer-modules/overlay-ws.js inside the
// child bundle; this module only assembles the per-session config the child
// fetches via the overlay:get-config invoke. The QR generation stays here
// because qrcode is a main-process dependency — the nodeIntegration:false
// renderer must not bundle it.
const QRCode = require("qrcode");

/**
 * Generate a minimal SVG QR code for the given text.
 * Returns an SVG string suitable for innerHTML injection, or "" on error.
 */
function _generateQrSvg(text) {
  try {
    const qr = QRCode.create(text, { errorCorrectionLevel: "M" });
    const size = qr.modules.size;
    const data = qr.modules.data;
    // Build a single <path> from module grid — smaller than N×N <rect>s
    let d = "";
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (data[y * size + x]) {
          d += `M${x},${y}h1v1h-1z`;
        }
      }
    }
    const margin = 1;
    const vb = size + margin * 2;
    return (
      `<svg viewBox="0 0 ${vb} ${vb}" width="108" height="108" xmlns="http://www.w3.org/2000/svg">` +
      `<rect width="${vb}" height="${vb}" fill="#fff"/>` +
      `<path transform="translate(${margin},${margin})" d="${d}" fill="#000"/>` +
      `</svg>`
    );
  } catch (_) {
    return "";
  }
}

/**
 * Builds the config object stamped on each overlay BrowserWindow
 * (window-manager.js setupChildWindow) and served to the child bundle via
 * the overlay:get-config invoke. Shape consumed by
 * renderer-modules/overlay-ws.js initOverlayWs().
 */
function buildOverlayConfig(ip, port, startupAnimationSettings, wsAuthToken = "") {
  const safePort = Number(port);
  // Viewer URL host for the idle screen — bare host on 443 (default https).
  const displayHost = safePort === 443 ? String(ip) : `${ip}:${safePort}`;
  return {
    ip: String(ip),
    port: safePort,
    startupAnimationSettings: startupAnimationSettings || { enabled: false },
    wsAuthToken: wsAuthToken || "",
    displayHost,
    qrSvg: _generateQrSvg(`https://${displayHost}`),
  };
}

module.exports = { buildOverlayConfig };
