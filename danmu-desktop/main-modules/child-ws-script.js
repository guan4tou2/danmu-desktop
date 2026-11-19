// Overlay bootstrap config builder (main process side).
//
// The WS client itself lives in renderer-modules/overlay-ws.js inside the
// child bundle; this module only assembles the per-session config the child
// fetches via the overlay:get-config invoke. The QR generation stays here
// because qrcode is a main-process dependency — the nodeIntegration:false
// renderer must not bundle it.
const dgram = require("dgram");
const https = require("https");
const os = require("os");
const QRCode = require("qrcode");

// 主持人常把顯示端連到同一台機器上的 server，連線位址填的是 127.0.0.1 或
// localhost。這個位址拿來連線沒問題，但印在待機畫面上給觀眾掃就不行——每支
// 手機的 localhost 都是它自己。待機畫面上的位址另外決定（resolveViewerHost）：
// 連線位址是本機時，改用這台機器的區網位址——前提是 server 真的肯回應那個
// 位址。server 設了 TRUSTED_HOSTS 時，名單外的位址一律回 400；印一個掃了
// 只會看到 400 的 QR，比印 localhost 更糟（看起來是對的）。
function _isLoopbackHost(host) {
  const h = String(host || "").trim().replace(/^\[|\]$/g, "").toLowerCase().replace(/\.$/, "");
  return (
    h === "localhost" ||
    h.endsWith(".localhost") ||
    h === "::1" ||
    h === "0.0.0.0" ||
    /^127(\.\d{1,3}){3}$/.test(h) // 不是 /^127\./：127.example.com 是正常網域
  );
}

function _usableAddress(address) {
  const a = String(address || "");
  if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(a)) return null;
  if (a.startsWith("127.") || a.startsWith("169.254.") || a === "0.0.0.0") return null;
  return a;
}

/** 第一張非內部網卡的 IPv4 位址；找不到回 null。 */
function _firstInterfaceAddress() {
  let interfaces;
  try {
    interfaces = os.networkInterfaces();
  } catch (_) {
    return null;
  }
  for (const addresses of Object.values(interfaces || {})) {
    for (const a of addresses || []) {
      const isV4 = a.family === "IPv4" || a.family === 4; // Node 18.0–18.3 回數字
      if (isV4 && !a.internal && _usableAddress(a.address)) return a.address;
    }
  }
  return null;
}

/**
 * 預設路由那張網卡的位址。UDP 的 connect 不送任何封包，只是問作業系統「要
 * 去那裡會從哪個位址出去」——多張網卡（VPN、Docker 橋接）時，這才是觀眾
 * 連得到的那一張，而不是清單上排第一的那張。server 端用同一招，兩邊一致。
 */
function _routedAddress() {
  return new Promise((resolve) => {
    let socket = null;
    const done = (address) => {
      try {
        if (socket) socket.close();
      } catch (_) {}
      socket = null;
      resolve(_usableAddress(address));
    };
    try {
      socket = dgram.createSocket("udp4");
      socket.once("error", () => done(null));
      socket.connect(1, "10.255.255.255", () => {
        let address = null;
        try {
          address = socket.address().address;
        } catch (_) {}
        done(address);
      });
    } catch (_) {
      done(null);
    }
  });
}

/** 這台機器在區網上的 IPv4 位址；找不到回 null。 */
async function _lanAddress() {
  return (await _routedAddress()) || _firstInterfaceAddress();
}

const PROBE_TIMEOUT_MS = 1500;
const LOOKUP_TIMEOUT_MS = 3000;

/**
 * 觀眾用這個位址開得到頁面嗎？實際打一次首頁，只看狀態碼。
 * 憑證不驗：這裡不讀任何內容，問的只是「server 認不認這個 Host」；自簽憑證
 * 上通常也沒有區網 IP。顯示端自己的連線照舊走使用者信任的那組設定。
 */
function _serverAnswers(host, port) {
  return new Promise((resolve) => {
    let request;
    try {
      request = https.request(
        { host, port, path: "/", method: "GET", rejectUnauthorized: false, timeout: PROBE_TIMEOUT_MS },
        (response) => {
          const status = response.statusCode || 0;
          response.destroy();
          resolve(status >= 200 && status < 400);
        }
      );
    } catch (_) {
      resolve(false);
      return;
    }
    request.on("timeout", () => request.destroy(new Error("timeout")));
    request.on("error", () => resolve(false));
    request.end();
  });
}

/**
 * 待機畫面上要印的主機位址。連線位址不是本機就原樣回傳；是本機時，找得到
 * 區網位址而且 server 肯回應它才換，否則維持原樣（與 server 端後台顯示的
 * 一致：那邊會同時警示主持人要把位址加進 TRUSTED_HOSTS）。
 */
async function resolveViewerHost(ip, port, deps = {}) {
  const typed = String(ip);
  if (!_isLoopbackHost(typed)) return typed;
  const lanAddress = deps.lanAddress || _lanAddress;
  const probe = deps.probe || _serverAnswers;
  const lookup = (async () => {
    const candidate = await lanAddress();
    return candidate && (await probe(candidate, Number(port))) ? candidate : typed;
  })().catch(() => typed);
  // 整段查詢有上限：overlay:get-config 在等這個結果，不能讓顯示端卡在這裡。
  let timer = null;
  const giveUp = new Promise((resolve) => {
    timer = setTimeout(() => resolve(typed), deps.timeoutMs || LOOKUP_TIMEOUT_MS);
  });
  try {
    return await Promise.race([lookup, giveUp]);
  } finally {
    clearTimeout(timer);
  }
}

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
function buildOverlayConfig(ip, port, startupAnimationSettings, wsAuthToken = "", viewerHost = "") {
  const safePort = Number(port);
  // Viewer URL host for the idle screen — bare host on 443 (default https).
  // 預設就是連線位址；連本機時呼叫端另外用 resolveViewerHost 查出觀眾連得到
  // 的位址再傳進來。
  const host = viewerHost || String(ip);
  const displayHost = safePort === 443 ? host : `${host}:${safePort}`;
  return {
    ip: String(ip),
    port: safePort,
    startupAnimationSettings: startupAnimationSettings || { enabled: false },
    wsAuthToken: wsAuthToken || "",
    displayHost,
    qrSvg: _generateQrSvg(`https://${displayHost}`),
  };
}

module.exports = { buildOverlayConfig, resolveViewerHost };
