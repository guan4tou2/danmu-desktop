// TLS 終端代理：本機系統測試用。
//
// v5 起 client 一律走 wss://，但本機 dev server（server/app.py）是純 HTTP —
// 系統測試在中間放一個自簽 TLS 前端，TCP 直通後端（HTTP 與 WS upgrade 都是
// 原樣轉發）。client 端的 trusted-wss-hosts 機制會在 createChild 時把當下
// host:port 加入信任，因此自簽憑證不需額外處理。
//
// 用法：const { startTlsProxy } = require("./helpers/tls-proxy");
//       const proxy = await startTlsProxy({ targetHost, targetPort });
//       ... proxy.port ...   await proxy.close();
const { execFileSync } = require("child_process");
const fs = require("fs");
const net = require("net");
const os = require("os");
const path = require("path");
const tls = require("tls");

function _makeSelfSignedCert(dir) {
  const key = path.join(dir, "key.pem");
  const cert = path.join(dir, "cert.pem");
  execFileSync("openssl", [
    "req", "-x509", "-newkey", "rsa:2048", "-nodes",
    "-keyout", key, "-out", cert, "-days", "2",
    "-subj", "/CN=127.0.0.1",
    "-addext", "subjectAltName=IP:127.0.0.1,DNS:localhost",
  ], { stdio: "ignore" });
  return { key: fs.readFileSync(key), cert: fs.readFileSync(cert) };
}

async function startTlsProxy({ targetHost, targetPort }) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "danmu-e2e-tls-"));
  const { key, cert } = _makeSelfSignedCert(tmp);

  const server = tls.createServer({ key, cert }, (clientSock) => {
    const upstream = net.connect(targetPort, targetHost);
    clientSock.pipe(upstream);
    upstream.pipe(clientSock);
    const drop = () => {
      clientSock.destroy();
      upstream.destroy();
    };
    clientSock.on("error", drop);
    upstream.on("error", drop);
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  return {
    port: server.address().port,
    close: () =>
      new Promise((resolve) => {
        server.close(() => {
          fs.rmSync(tmp, { recursive: true, force: true });
          resolve();
        });
      }),
  };
}

module.exports = { startTlsProxy };
