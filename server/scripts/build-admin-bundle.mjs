#!/usr/bin/env node
/**
 * 把 admin 的 JS 打包成一支 `static/js/admin.bundle.js`。
 *
 * **這不是模組化改寫。** 這 68 支檔案是全域 IIFE、彼此靠 41 個 `window.*`
 * 溝通、而且**相依於 <script> 的載入順序**。把它們改寫成 ESM 是另一件事
 * （68 個檔一起動，唯一的安全網是只在 CI 跑得到的 browser 測試）。這支腳本
 * 只做「照原順序串接後 minify」——語意完全不變，載入順序就是原本的順序。
 *
 * 為什麼值得：gzip 已經開了，但實測 **337 KB → 191 KB（省 43%）**，
 * 而且 68 個請求變成 1 個。minify 省的是 gzip 省不掉的東西（識別字名稱、
 * 死碼、註解的結構）。
 *
 * **`i18n.js` 不打包進去**：它用 `document.currentScript` 推導自己的目錄，
 * 好在切語言時去抓 `i18n.<lang>.js`。打包後 currentScript 會指向 bundle，
 * 路徑就推錯了。它本來也只有 6 KB。
 *
 * 檔案清單的唯一來源是 `static/js/admin-bundle.manifest.json`。**不是模板**
 * ——模板現在只載 bundle 一支，從那裡讀清單會變成循環相依（改完模板就再也
 * 產不出 bundle）。加新模組：在 manifest 加一行（放在它依賴的模組之後），
 * 再跑 `npm run build:admin-js`。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, "..");
const MANIFEST = path.join(ROOT, "static/js/admin-bundle.manifest.json");
const OUT = path.join(ROOT, "static/js/admin.bundle.js");

const files = JSON.parse(fs.readFileSync(MANIFEST, "utf8")).files;
if (!Array.isArray(files) || !files.length) {
  console.error("manifest 的 files 是空的：", MANIFEST);
  process.exit(1);
}

const missing = files.filter((f) => !fs.existsSync(path.join(ROOT, "static/js", f)));
if (missing.length) {
  console.error("manifest 列了但檔案不在：", missing);
  process.exit(1);
}

// 用一個合成的 entry 依序 import —— esbuild 會照這個順序輸出，
// 而這些檔案是 IIFE、沒有 export，所以「import 它」等於「執行它」。
const entry = path.join(ROOT, ".admin-bundle-entry.js");
fs.writeFileSync(entry, files.map((f) => `import "./static/js/${f}";`).join("\n"), "utf8");

try {
  const result = await build({
    entryPoints: [entry],
    outfile: OUT,
    bundle: true,
    minify: true,
    format: "iife",
    target: ["chrome100", "firefox100", "safari15", "edge100"],
    legalComments: "none",
    banner: {
      js:
        "/* AUTO-GENERATED — do NOT edit. Source: the <script> list in templates/admin.html\n" +
        " * Regenerate: npm run build:admin-js  (see scripts/build-admin-bundle.mjs) */",
    },
    metafile: true,
    logLevel: "error",
  });
  const bytes = fs.statSync(OUT).size;
  const raw = files.reduce((n, f) => n + fs.statSync(path.join(ROOT, "static/js", f)).size, 0);
  console.log(
    `admin.bundle.js: ${files.length} 個檔 ${(raw / 1024).toFixed(0)} KB ` +
      `→ ${(bytes / 1024).toFixed(0)} KB`,
  );
  void result;
} finally {
  fs.rmSync(entry, { force: true });
}
