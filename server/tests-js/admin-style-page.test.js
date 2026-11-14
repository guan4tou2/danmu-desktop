const loadScript = require("./helpers/load-script");

// 2026-11-14 彈幕樣式合一：一頁一張表、一列一個屬性。每列有「觀眾可改」開關，
// 開著時才露出範圍或可選清單；後端沒有旗標的列（效果、描邊、陰影）開關是固定
// 狀態；套用主題會改掉描邊與陰影兩列的值。跑真的 admin-themes.js 與
// admin-display.js，只替換網路層。

const flush = async (n = 6) => { for (let i = 0; i < n; i++) await new Promise((r) => setTimeout(r, 0)); };
const reply = (body, ok = true) => ({ ok, json: async () => body });

const THEMES = [
  { name: "default", label: "Default", styles: { color: "#ffffff", textStroke: true, strokeWidth: 2, strokeColor: "#000000", textShadow: false }, font: {}, bg: {}, custom: false },
  { name: "neon", label: "Neon", styles: { color: "#00ffff", textStroke: false, textShadow: true, shadowBlur: 14 }, font: {}, bg: {}, custom: false },
];

let options;
let active;
let calls;

function settings() {
  return {
    Color: [true, [], 0, "#FFFFFF"],
    ViewerColorPicker: [true],
    Opacity: [true, 20, 100, 100],
    FontSize: [true, 16, 64, 32],
    Speed: [true, 0.5, 3.0, 1.0],
    FontFamily: [false, [], "", "NotoSansTC"],
    Effects: [false, "", "", ""],
    Layout: [true, [], "", "scroll"],
  };
}

async function bootPage() {
  options = settings();
  active = "default";
  calls = [];
  document.body.innerHTML = '<div class="admin-dash-grid" data-active-route="viewer"><div id="settings-grid"></div></div>';
  window.fetch = jest.fn((url) => {
    if (url === "/get_settings") return Promise.resolve(reply(JSON.parse(JSON.stringify(options))));
    if (url === "/fonts") return Promise.resolve(reply({ fonts: [{ name: "NotoSansTC" }, { name: "Inter" }] }));
    if (url === "/admin/viewer-images") return Promise.resolve(reply({ enabled: false, hosts: [], extensions: ["png"] }));
    return Promise.resolve(reply({}));
  });
  window.csrfFetch = jest.fn((url, init = {}) => {
    const body = init.body ? JSON.parse(init.body) : null;
    calls.push({ url, method: init.method || "GET", body });
    if (url === "/admin/themes") return Promise.resolve(reply({ themes: THEMES, active, overrides: {} }));
    if (url === "/admin/themes/active") { active = body.name; return Promise.resolve(reply({ active })); }
    if (url === "/admin/Set") { options[body.key][0] = body.enabled; return Promise.resolve(reply({ message: "OK" })); }
    return Promise.resolve(reply({}));
  });
  loadScript("admin-themes.js");
  window.AdminThemes.init();
  loadScript("admin-display.js");
  await flush();
}

const $ = (sel) => document.querySelector(sel);
const row = (key) => $(`#sec-viewer-config-defaults [data-row-key="${key}"]`);
const pressed = (key) => row(key).querySelector("[data-theme-opt][aria-pressed=\"true\"]")?.dataset.themeOpt;

beforeAll(() => {
  window.DANMU_CONFIG = { session: { logged_in: true }, defaultColorPalette: ["#ffffff", "#fbbf24"] };
  window.ServerI18n = { currentLang: "zh", t: (k) => k };
  window.AdminUtils = { escapeHtml: (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`) };
  window.showToast = jest.fn();
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterAll(async () => {
  document.body.innerHTML = "";
  await flush();
});

test("one row per attribute, themes first, then the table", async () => {
  await bootPage();
  const keys = [...document.querySelectorAll("#dsp2-rows [data-row-key]")].map((r) => r.dataset.rowKey);
  expect(keys).toEqual(["Opacity", "FontSize", "Speed", "Color", "FontFamily", "Layout", "Effects", "stroke", "shadow"]);
  const grid = [...document.getElementById("settings-grid").children].map((el) => el.id);
  expect(grid.indexOf("sec-themes")).toBeLessThan(grid.indexOf("sec-viewer-config-defaults"));
  // 顯示層的大螢幕排版是另一個收合區，不在這張表裡
  expect($("#sec-overlay-layout").tagName).toBe("DETAILS");
  expect($("#sec-viewer-config-defaults [data-dl-stepper]")).toBeNull();
});

test("an audience switch shows the range only while it is on", async () => {
  await bootPage();
  expect(row("Opacity").querySelector('[data-num-index="1"]')).not.toBeNull();
  expect(row("Opacity").querySelector('[data-num-index="2"]')).not.toBeNull();
  row("Opacity").querySelector('[data-toggle-key="Opacity"]').click();
  await flush();
  expect(calls.find((c) => c.url === "/admin/Set").body).toEqual({ key: "Opacity", enabled: false });
  expect(row("Opacity").querySelector('[data-num-index="1"]')).toBeNull();
  expect(row("Opacity").querySelector("[data-toggle-key]").getAttribute("aria-pressed")).toBe("false");
  // 預設值本身仍然可以改
  expect(row("Opacity").querySelector('.admin-dsp2-range')).not.toBeNull();
});

test("a pick list (allowlist) appears only when viewers may pick", async () => {
  await bootPage();
  expect(row("FontFamily").querySelector("[data-allow-controls]")).toBeNull();
  expect(row("Layout").querySelector('[data-allow-controls="Layout"]')).not.toBeNull();
  row("FontFamily").querySelector('[data-toggle-key="FontFamily"]').click();
  await flush();
  expect(row("FontFamily").querySelector('[data-allow-controls="FontFamily"]')).not.toBeNull();
  // 字型管理的入口一直都在
  expect(row("FontFamily").querySelector('a[href="#/assets/fonts"]')).not.toBeNull();
});

test("the color palette editor is the color row's extension while viewers may pick", async () => {
  await bootPage();
  expect($('[data-row-ext="Color"] [data-palette-add]')).not.toBeNull();
  row("Color").querySelector('[data-toggle-key="Color"]').click();
  await flush();
  expect($('[data-row-ext="Color"]')).toBeNull();
  expect(row("Color").querySelector('[data-chip-key="Color"]')).not.toBeNull();
});

test("rows without a backend flag show a fixed switch", async () => {
  await bootPage();
  for (const key of ["Effects", "stroke", "shadow"]) {
    const pill = row(key).querySelector(".admin-dsp2-pill");
    expect(pill.disabled).toBe(true);
    expect(pill.hasAttribute("data-toggle-key")).toBe(false);
  }
  // 效果讀動畫效果頁的總開關（這裡是關），描邊與陰影觀眾永遠不能改
  expect(row("Effects").querySelector(".admin-dsp2-pill").getAttribute("aria-pressed")).toBe("false");
  expect(row("Effects").querySelector('a[href="#/effects"]')).not.toBeNull();
  expect(row("stroke").querySelector(".admin-dsp2-pill").getAttribute("aria-pressed")).toBe("false");
});

test("applying a theme updates the stroke and shadow rows", async () => {
  await bootPage();
  expect(pressed("stroke")).toBe("thin");
  expect(pressed("shadow")).toBe("none");
  $('.theme-activate-btn[data-theme="neon"]').click();
  await flush();
  expect(calls.find((c) => c.url === "/admin/themes/active").body).toEqual({ name: "neon" });
  expect(pressed("stroke")).toBe("none");
  expect(pressed("shadow")).toBe("strong");
  expect(row("shadow").querySelector("[data-value-badge]").textContent).toBe("themeShadowStrong");
});

test("a stroke choice writes the active theme's override", async () => {
  await bootPage();
  row("stroke").querySelector('[data-theme-opt="thick"]').click();
  await flush();
  const patch = calls.find((c) => c.method === "PATCH");
  expect(patch.url).toBe("/admin/themes/default/overrides");
  expect(patch.body).toEqual({ stroke: "thick" });
});

test("viewer image format checkboxes are whole-label targets with a class (44px rule)", async () => {
  await bootPage();
  const labels = document.querySelectorAll("#viewer-images-extensions label");
  expect(labels).toHaveLength(4);
  labels.forEach((l) => {
    expect(l.classList.contains("admin-vi-ext")).toBe(true);
    expect(l.getAttribute("style")).toBeNull();
  });
});
