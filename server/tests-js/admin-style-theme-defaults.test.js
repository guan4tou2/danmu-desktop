const loadScript = require("./helpers/load-script");

// 2026-11-14（業主拍板）：主題的字型與觀眾預設顏色覆寫真的生效。樣式表的
// 「顏色」「字型」兩列要看得出預設值是不是來自主題、主題值有沒有被採用；
// 套用主題（卡片或 ⌘K）與改細部設定之後兩列即時更新。「還原預設」送出的
// 值落在伺服器的範圍內，任何一個請求失敗都要出錯誤提示。
// 跑真的 admin-themes.js、admin-display.js、admin-command-palette.js，
// 只替換網路層；後端的 style_defaults 用一個很小的模擬（真的解析在
// services/danmu_style.py，有自己的 pytest）。

const flush = async (n = 8) => { for (let i = 0; i < n; i++) await new Promise((r) => setTimeout(r, 0)); };
const reply = (body, ok = true, status = 200) => ({ ok, status, json: async () => body });

const THEMES = [
  { name: "default", label: "Default", styles: { color: "#ffffff", textStroke: true, strokeWidth: 2 }, font: {}, bg: {}, custom: false },
  { name: "neon", label: "Neon", styles: { color: "#00ffff", textShadow: true, shadowBlur: 14 }, font: {}, bg: {}, custom: false },
];
const GONE_FONTS = new Set(["GoneFont"]);

let options;
let active;
let overrides;
let calls;
let failUpdate;

function settings() {
  return {
    Color: [true, [], 0, "#FFFFFF"],
    ViewerColorPicker: [true],
    Opacity: [true, 20, 100, 100],
    FontSize: [true, 16, 64, 32],
    Speed: [true, 0.5, 3.0, 1.0],
    FontFamily: [true, [], "", "NotoSansTC"],
    Effects: [false, "", "", ""],
    Layout: [true, [], "", "scroll"],
  };
}

// 後端 effective_defaults 的最小模擬：主題有值就用（字型要還在），否則全域。
function styleDefaults() {
  const ov = overrides[active] || {};
  const globalColor = "#" + String(options.Color[3]).replace(/^#/, "").toLowerCase();
  const fontOk = ov.font_family && !GONE_FONTS.has(ov.font_family);
  return {
    theme: active,
    Color: {
      value: ov.color || globalColor, source: ov.color ? "theme" : "global",
      global: globalColor, theme_value: ov.color || null, rejected: false,
    },
    FontFamily: {
      value: fontOk ? ov.font_family : options.FontFamily[3], source: fontOk ? "theme" : "global",
      global: options.FontFamily[3], theme_value: ov.font_family || null,
      rejected: !!ov.font_family && !fontOk,
    },
  };
}

function themesBody() {
  return { themes: THEMES, active, overrides: JSON.parse(JSON.stringify(overrides)), style_defaults: styleDefaults() };
}

async function bootPage({ withPalette = false } = {}) {
  options = settings();
  active = "default";
  overrides = {};
  calls = [];
  failUpdate = null;
  window.showToast = jest.fn();
  document.body.innerHTML = '<div class="admin-dash-grid" data-active-route="viewer"><div id="settings-grid"></div></div>';
  window.fetch = jest.fn((url) => {
    if (url === "/get_settings") return Promise.resolve(reply(JSON.parse(JSON.stringify(options))));
    if (url === "/fonts") return Promise.resolve(reply({ fonts: [{ name: "NotoSansTC" }, { name: "ThemeFont" }] }));
    if (url === "/admin/viewer-images") return Promise.resolve(reply({ enabled: false, hosts: [], extensions: ["png"] }));
    if (url === "/admin/themes") return Promise.resolve(reply(themesBody()));
    return Promise.resolve(reply({}));
  });
  window.csrfFetch = jest.fn((url, init = {}) => {
    const body = init.body ? JSON.parse(init.body) : null;
    calls.push({ url, method: init.method || "GET", body });
    if (url === "/admin/themes") return Promise.resolve(reply(themesBody()));
    if (url === "/admin/themes/active") { active = body.name; return Promise.resolve(reply({ active })); }
    const m = url.match(/^\/admin\/themes\/([^/]+)\/overrides$/);
    if (m) {
      const cur = Object.assign({}, overrides[m[1]] || {});
      Object.entries(body).forEach(([k, v]) => { if (v === "") delete cur[k]; else cur[k] = v; });
      overrides[m[1]] = cur;
      return Promise.resolve(reply({ name: m[1], overrides: cur }));
    }
    if (url === "/admin/Set") { options[body.key][0] = body.enabled; return Promise.resolve(reply({ message: "OK" })); }
    if (url === "/admin/update") {
      if (failUpdate && failUpdate(body)) return Promise.resolve(reply({ error: "out of range" }, false, 400));
      options[body.type][body.index] = body.value;
      return Promise.resolve(reply({ message: "OK" }));
    }
    return Promise.resolve(reply({}));
  });
  loadScript("admin-themes.js");
  window.AdminThemes.init();
  loadScript("admin-display.js");
  if (withPalette) {
    document.body.classList.add("admin-body");
    loadScript("admin-command-palette.js");
  }
  await flush();
}

const $ = (sel) => document.querySelector(sel);
const row = (key) => $(`#sec-viewer-config-defaults [data-row-key="${key}"]`);
const badge = (key) => row(key).querySelector("[data-value-badge]").textContent.trim();
const chip = (key) => row(key).querySelector("[data-source-chip]")?.dataset.sourceChip || null;

beforeAll(() => {
  window.DANMU_CONFIG = {
    session: { logged_in: true },
    defaultColorPalette: ["#ffffff", "#fbbf24"],
    settingRanges: { Speed: { min: 0.5, max: 3.0 }, Opacity: { min: 20, max: 100 }, FontSize: { min: 16, max: 64 } },
    settingDefaults: settings(),
  };
  window.ServerI18n = { currentLang: "zh", t: (k) => k };
  window.AdminUtils = { escapeHtml: (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`) };
  window.HudConfirm = { open: async () => true };
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

afterAll(async () => {
  document.body.innerHTML = "";
  await flush();
});

test("without theme overrides the two rows show the global default and no source chip", async () => {
  await bootPage();
  expect(badge("Color")).toBe("#FFFFFF");
  expect(badge("FontFamily")).toBe("NotoSansTC");
  expect(chip("Color")).toBeNull();
  expect(chip("FontFamily")).toBeNull();
});

test("a theme override shows the theme value, marked as coming from the theme", async () => {
  await bootPage();
  overrides.default = { color: "#00ff88", font_family: "ThemeFont" };
  await window.AdminThemes.refresh();
  await flush();
  expect(badge("Color")).toBe("#00FF88");
  expect(badge("FontFamily")).toBe("ThemeFont");
  expect(chip("Color")).toBe("theme");
  expect(chip("FontFamily")).toBe("theme");
  // 預覽也用實際的預設
  const pill = $("[data-preview-pill='1']");
  expect(pill.style.color).toBe("rgb(0, 255, 136)");
  expect(pill.style.fontFamily).toContain("ThemeFont");
});

test("a theme font that was deleted is marked as not used and the global default shows", async () => {
  await bootPage();
  overrides.default = { font_family: "GoneFont" };
  await window.AdminThemes.refresh();
  await flush();
  expect(badge("FontFamily")).toBe("NotoSansTC");
  expect(chip("FontFamily")).toBe("rejected");
  expect(row("FontFamily").querySelector("[data-source-chip]").getAttribute("title")).toBe("GoneFont");
});

test("editing the global default while the theme decides keeps showing the theme value", async () => {
  await bootPage();
  overrides.default = { color: "#00ff88" };
  await window.AdminThemes.refresh();
  await flush();
  row("Color").querySelector('[data-chip-key="Color"][data-chip-value="FBBF24"]').click();
  await flush();
  expect(calls.find((c) => c.url === "/admin/update").body).toEqual({ type: "Color", value: "FBBF24", index: 3 });
  // 全域預設改了，但觀眾實際拿到的仍是主題值——列上照實標示
  expect(badge("Color")).toBe("#00FF88");
  expect(chip("Color")).toBe("theme");
  expect(row("Color").querySelector('[data-chip-value="FBBF24"]').classList.contains("is-active")).toBe(true);
});

test("applying a theme card updates the color and font rows", async () => {
  await bootPage();
  overrides.neon = { color: "#00ffff", font_family: "ThemeFont" };
  expect(chip("Color")).toBeNull();
  $('.theme-activate-btn[data-theme="neon"]').click();
  await flush();
  expect(badge("Color")).toBe("#00FFFF");
  expect(badge("FontFamily")).toBe("ThemeFont");
  expect(chip("Color")).toBe("theme");
  expect(window.showToast).toHaveBeenCalledWith("themeActivated", true);
});

test("editing the detail fold updates the rows; clearing the color goes back to global", async () => {
  await bootPage();
  const color = $("#themeOvColor");
  // 沒有覆寫時，細部設定的顏色顯示的是現在實際用的全域預設
  expect(color.value).toBe("#ffffff");
  expect($('[data-theme-ov-clear="color"]').hidden).toBe(true);
  color.value = "#00ff88";
  color.dispatchEvent(new Event("change", { bubbles: true }));
  await flush();
  expect(overrides.default).toEqual({ color: "#00ff88" });
  expect(badge("Color")).toBe("#00FF88");
  expect(chip("Color")).toBe("theme");
  expect($('[data-theme-ov-clear="color"]').hidden).toBe(false);

  const font = $("#themeOvFont");
  font.innerHTML += '<option value="ThemeFont">ThemeFont</option>';
  font.value = "ThemeFont";
  font.dispatchEvent(new Event("change", { bubbles: true }));
  await flush();
  expect(badge("FontFamily")).toBe("ThemeFont");

  $('[data-theme-ov-clear="color"]').click();
  await flush();
  expect(overrides.default).toEqual({ font_family: "ThemeFont" });
  expect(badge("Color")).toBe("#FFFFFF");
  expect(chip("Color")).toBeNull();
});

test("a theme applied from the command palette updates the rows too", async () => {
  await bootPage({ withPalette: true });
  overrides.neon = { color: "#00ffff" };
  window.AdminCommandPalette.open();
  await flush();
  const input = $(".admin-cmdk-input");
  input.value = "Neon";
  input.dispatchEvent(new Event("input", { bubbles: true }));
  await flush();
  const item = [...document.querySelectorAll("[data-cmdk-idx]")]
    .find((el) => el.querySelector(".admin-cmdk-label").textContent.trim() === "Neon");
  item.click();
  await flush();
  expect(calls.find((c) => c.url === "/admin/themes/active").body).toEqual({ name: "neon" });
  expect(badge("Color")).toBe("#00FFFF");
  expect(chip("Color")).toBe("theme");
  // 主題卡片也同步標成使用中
  expect($(".theme-pack-card.is-active .theme-pack-name").textContent).toBe("Neon");
  expect(window.showToast).toHaveBeenCalledWith("cmdkThemeApplied", true);
});

test("revert defaults sends only values inside the server's ranges", async () => {
  await bootPage();
  $("#dsp2-revert").click();
  await flush(20);
  const updates = calls.filter((c) => c.url === "/admin/update").map((c) => c.body);
  const ranges = window.DANMU_CONFIG.settingRanges;
  for (const u of updates) {
    if (ranges[u.type]) {
      expect(u.value).toBeGreaterThanOrEqual(ranges[u.type].min);
      expect(u.value).toBeLessThanOrEqual(ranges[u.type].max);
    }
  }
  expect(updates).toContainEqual({ type: "Opacity", value: 20, index: 1 });
  expect(updates).toContainEqual({ type: "FontSize", value: 64, index: 2 });
  expect(updates).toContainEqual({ type: "FontSize", value: 32, index: 3 });
  expect(updates).toContainEqual({ type: "Color", value: "FFFFFF", index: 3 });
  expect(window.showToast).toHaveBeenLastCalledWith("displayRevertDone", true);
});

test("revert defaults shows the error toast when any request fails", async () => {
  await bootPage();
  failUpdate = (body) => body.type === "Speed";
  $("#dsp2-revert").click();
  await flush(20);
  expect(window.showToast).toHaveBeenLastCalledWith("updateFailed", false);
  expect(window.showToast).not.toHaveBeenCalledWith("displayRevertDone", true);
  // 失敗後重抓設定，畫面是伺服器上真正的狀態
  expect(window.fetch.mock.calls.filter(([u]) => u === "/get_settings").length).toBeGreaterThan(1);
});

test("the slider and band limits come from the server's ranges", async () => {
  await bootPage();
  const num = row("Opacity").querySelector(".admin-dsp2-num");
  expect(num.getAttribute("min")).toBe("20");
  expect(row("FontSize").querySelector('[data-num-index="2"]').getAttribute("max")).toBe("64");
});
