/**
 * 設計稿 14 文案規則：「英文句首大寫、其餘小寫，**不用全大寫**」。
 *
 * 判準用 AST 抽樣板字串，不是用 `>文字<` 這種正則——2026-09-08 那輪先寫了
 * 正則版，它漏掉 4 處**文字中間夾標記**的（`PENDING · <span>0</span>`、
 * `<span>0</span> APPROVED`），是實際開瀏覽器走 DOM 才發現的。樣板字串抽出來
 * 之後把標籤與插值一起去掉，夾不夾標記就無所謂了。
 *
 * 縮寫、標準名、副檔名不算——`WCAG AA`、`.TTF`、`FIFO` 本來就長這樣。
 */
const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const REPO_ROOT = path.join(__dirname, "..", "..");
const JS_DIR = path.join(REPO_ROOT, "server/static/js");

const ACRONYMS = new Set(
  `JSON API CSV URL QR OBS WS HTTP HTTPS ID UI IP TLS SSL PNG JPG JPEG WEBP GIF
   SVG MB KB GB MS FPS CPU RAM GPU DNS CDN CORS CSP XSS SQL YAML TOML HTML CSS
   JS PY UTF BOM RSS SSE WSS LAN WAN VPN NAT UDP TCP OS MAC WIN ISO PDF ZIP OK
   PIN OTP TOTP SMTP IMAP POP FTP SSH GPG PGP RGB HSL HEX DPI PPI EN ZH JA KO
   TW US UK AI ML LLM SDK CLI GUI IDE CI CD PR QA UX NTP GMT UTC AM PM WCAG AA
   AAA SC TTF OTF WOFF MP3 OGG WAV SRT VTT ESC CMD CTRL ALT SPACE TAB DOM CRUD
   REST GC HMAC SHA CIDR FIFO LIFO TTL KPI BMP CJK ASCII EOF NBSP RRGGBB XXXX
   ABCD SEO OG MIT HSTS ABC IBM`.split(/\s+/),
);

// 唯一例外：擴充主控台的**範例日誌行**。那個 INFO 是在模仿 stdout 真的會印出
// 來的等級字串（跟 data-console-filter="INFO" 的比對值同一個），不是介面標籤。
const ALLOWED = new Set(["admin-plugins.js::INFO"]);

test("no all-caps English in rendered copy (spec 14)", () => {
  const bad = [];
  for (const fn of fs.readdirSync(JS_DIR).filter((f) => f.endsWith(".js") && f !== "i18n.js")) {
    const ast = parser.parse(fs.readFileSync(path.join(JS_DIR, fn), "utf8"), {
      sourceType: "unambiguous",
      errorRecovery: false,
    });
    traverse(ast, {
      TemplateLiteral(p) {
        // 只看含 HTML 標記的樣板；純字串樣板多半是 selector / URL / class 名
        const raw = p.node.quasis.map((q) => q.value.raw).join(" ");
        if (!/<[a-z]/i.test(raw)) return;
        const text = raw
          .replace(/<!--[\s\S]*?-->/g, " ")   // HTML 註解要先剝：裡面的中文說明
          .replace(/<[^>]*>/g, " ")            // 常提到舊的全大寫標籤，那是在解釋
          .replace(/&[a-z]+;/gi, " ");         // 它為什麼被拿掉，不是殘留
        for (const word of text.match(/\b[A-Z][A-Z0-9]{2,}\b/g) || []) {
          if (ACRONYMS.has(word) || ALLOWED.has(fn + "::" + word)) continue;
          bad.push(fn + ":" + p.node.loc.start.line + "  " + word);
        }
      },
    });
  }
  expect(bad).toEqual([]);
});
