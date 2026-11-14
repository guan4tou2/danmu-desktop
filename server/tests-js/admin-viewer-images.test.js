const loadScript = require("./helpers/load-script");

// 觀眾頁「觀眾圖片」群組（admin-display.js）：回應的套用要有先後保護。
// 三種時序：初次 GET 很慢時先切了開關、連續取消勾選兩個格式、送出網站
// 清單 A 之後又開始打 B。

function deferred() {
  let resolve;
  const promise = new Promise((r) => { resolve = r; });
  return { promise, resolve };
}
const reply = (body, ok = true) => ({ ok, json: async () => body });
const flush = () => new Promise((r) => setTimeout(r, 0));

const ALL = ["png", "jpg", "gif", "webp"];
const state = (over) => ({ enabled: true, hosts: [], extensions: ALL.slice(), supported_extensions: ALL, ...over });

let getQueue;
let patches;

function bootPage() {
  document.body.innerHTML = '<div id="settings-grid"></div>';
  getQueue = [];
  patches = [];
  window.fetch = jest.fn((url) => {
    if (url === "/admin/viewer-images") {
      const d = deferred();
      getQueue.push(d);
      return d.promise;
    }
    if (url === "/fonts") return Promise.resolve(reply([]));
    return Promise.resolve(reply({}));
  });
  window.csrfFetch = jest.fn((url, init) => {
    const d = deferred();
    patches.push({ body: JSON.parse(init.body), resolve: d.resolve });
    return d.promise;
  });
  loadScript("admin-display.js");
}

const $ = (sel) => document.querySelector(sel);
const ext = (name) => $(`[data-vi-ext="${name}"]`);
function change(el) { el.dispatchEvent(new Event("change", { bubbles: true })); }

async function bootWith(initial) {
  bootPage();
  await flush(); await flush();
  expect(getQueue).toHaveLength(1);
  getQueue[0].resolve(reply(initial));
  await flush();
}

beforeAll(() => {
  window.DANMU_CONFIG = { session: { logged_in: true } };
  window.ServerI18n = { currentLang: "zh", t: (k) => k };
  window.showToast = jest.fn();
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

// 每條測試都重新載入模組（序號與狀態是模組層級的），舊實例的 observer 還掛在
// document 上。收尾前把頁面清掉並讓它們跑完，免得環境拆掉時才觸發。
afterAll(async () => {
  document.body.innerHTML = "";
  await flush();
});

test("a slow initial GET does not undo a toggle made before it returned", async () => {
  bootPage();
  await flush(); await flush();
  expect(getQueue).toHaveLength(1); // 初次 GET 還沒回來

  const toggle = $("#viewer-images-enabled");
  toggle.checked = true;
  change(toggle);
  expect(patches[0].body).toEqual({ enabled: true });
  patches[0].resolve(reply(state({ enabled: true })));
  await flush();

  getQueue[0].resolve(reply(state({ enabled: false }))); // 舊的 GET 晚到
  await flush();
  expect(toggle.checked).toBe(true);
  expect($("[data-vi-row]").style.display).toBe("");
});

test("unchecking two formats quickly keeps both unchecked when the first reply lands", async () => {
  await bootWith(state());
  ext("png").checked = false;
  change(ext("png"));
  ext("jpg").checked = false;
  change(ext("jpg"));
  expect(patches.map((p) => p.body.extensions)).toEqual([
    ["jpg", "gif", "webp"],
    ["gif", "webp"],
  ]);

  // 第一個回應先到：裡面 JPG 還是勾著的，不能套用
  patches[0].resolve(reply(state({ extensions: ["jpg", "gif", "webp"] })));
  await flush();
  expect(ext("jpg").checked).toBe(false);
  expect(ext("png").checked).toBe(false);

  patches[1].resolve(reply(state({ extensions: ["gif", "webp"] })));
  await flush();
  expect(ALL.filter((e) => ext(e).checked)).toEqual(["gif", "webp"]);

  // 下一次送出帶的是正確的選擇
  ext("gif").checked = false;
  change(ext("gif"));
  expect(patches[2].body.extensions).toEqual(["webp"]);
});

test("the reply to site list A does not overwrite list B the admin started typing", async () => {
  await bootWith(state());
  const hosts = $("#viewer-images-hosts");
  hosts.value = "A.example.com";
  change(hosts);
  expect(patches[0].body).toEqual({ hosts: ["A.example.com"] });

  hosts.focus();
  hosts.value = "b.example.com";
  patches[0].resolve(reply(state({ hosts: ["a.example.com"] })));
  await flush();
  expect(hosts.value).toBe("b.example.com");

  // 離開欄位但還沒送出：仍然不蓋
  hosts.blur();
  patches.length = 0;
  $("#viewer-images-enabled").checked = true;
  change($("#viewer-images-enabled"));
  patches[0].resolve(reply(state({ hosts: ["a.example.com"] })));
  await flush();
  expect(hosts.value).toBe("b.example.com");
});

test("an unchanged site field is refilled with the server's normalised list", async () => {
  await bootWith(state());
  const hosts = $("#viewer-images-hosts");
  hosts.value = "Example.COM.";
  change(hosts);
  patches[0].resolve(reply(state({ hosts: ["example.com"] })));
  await flush();
  expect(hosts.value).toBe("example.com");
});

test("a rejected site list stays in the field and the toggles resync from the server", async () => {
  await bootWith(state());
  const hosts = $("#viewer-images-hosts");
  hosts.value = "*.example.com";
  change(hosts);
  patches[0].resolve(reply({ error: "invalid", code: "invalid_host", detail: "*.example.com" }, false));
  await flush();
  expect(window.showToast).toHaveBeenCalledWith("viErrInvalidHost", false);
  expect(getQueue).toHaveLength(2); // 重抓一次伺服器狀態
  getQueue[1].resolve(reply(state()));
  await flush();
  expect(hosts.value).toBe("*.example.com");
});
