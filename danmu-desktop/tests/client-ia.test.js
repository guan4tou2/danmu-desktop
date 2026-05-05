const { test, expect } = require("@jest/globals");
const fs = require("fs");
const path = require("path");

function readClientHtml() {
  const htmlPath = path.join(__dirname, "..", "index.html");
  return fs.readFileSync(htmlPath, "utf8");
}

function readMainProcess() {
  const mainPath = path.join(__dirname, "..", "main.js");
  return fs.readFileSync(mainPath, "utf8");
}

function section(html, key) {
  const match = html.match(
    new RegExp(`<section class="client-section" data-section="${key}"[\\s\\S]*?</section>`)
  );
  return match ? match[0] : "";
}

test("client nav only exposes display, connection, and about/update primary areas", () => {
  const html = readClientHtml();

  expect(html).toContain('data-nav="overlay"');
  expect(html).toContain('data-nav="conn"');
  expect(html).toContain('data-nav="about"');
  expect(html).not.toContain('data-nav="keys"');
  expect(html).not.toContain('data-nav="update"');
  expect(html).not.toContain('data-section="keys"');
  expect(html).not.toContain('data-section="update"');
});

test("connection section only owns server configuration, not display runtime controls", () => {
  const html = readClientHtml();
  const conn = section(html, "conn");

  expect(conn).toContain('id="host-input"');
  expect(conn).toContain('id="port-input"');
  expect(conn).toContain('id="ws-token-input"');
  expect(conn).not.toContain("CERTIFICATE");
  expect(conn).not.toContain("data-client-tls-title");
  expect(conn).not.toContain("data-client-tls-note");
  expect(conn).not.toContain('data-client-action="reconnect"');
  expect(conn).not.toContain('id="screen-select"');
  expect(conn).not.toContain('id="sync-multi-display-checkbox"');
});

test("overlay section owns display selection and has one visible runtime control model", () => {
  const html = readClientHtml();
  const overlay = section(html, "overlay");

  expect(overlay).toContain('data-client-overlay-button');
  expect(overlay).toContain('data-client-overlay-state');
  expect(overlay).not.toContain('data-client-overlay-toggle');
  expect(overlay).not.toContain('class="client-toggle"');
  expect(overlay).toContain('id="screen-select"');
  expect(overlay).toContain('id="sync-multi-display-checkbox"');
  expect(overlay).toContain('data-client-overlay-action="clear"');
  expect(overlay).not.toContain('data-client-overlay-action="start"');
  expect(overlay).not.toContain('data-client-overlay-action="stop"');
});

test("tray menu does not expose dead secondary runtime controls", () => {
  const main = readMainProcess();

  expect(main).toContain('label: "待機畫面"');
  expect(main).not.toContain('label: "顯示 overlay"');
  expect(main).not.toContain('dispatchToRenderer("pause")');
  expect(main).not.toContain('dispatchToRenderer("clear")');
  expect(main).not.toContain('dispatchToRenderer("display:primary")');
  expect(main).not.toContain('dispatchToRenderer("display:secondary")');
  expect(main).not.toContain('dispatchToRenderer("reconnect")');
});
