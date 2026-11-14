const loadScript = require("./helpers/load-script");

// 網頁顯示端（OBS browser source）只在伺服器明確標成圖片（isImage === true）
// 時才建 <img>，不再用正則猜文字是不是圖片網址；圖片的尺寸上限與 Electron
// 顯示端一致。能不能放行外部圖片由伺服器依後台設定判斷。

const sockets = [];

class FakeWebSocket {
  constructor(url) {
    this.url = url;
    this.readyState = 0;
    sockets.push(this);
  }
  send() {}
  close() {}
}
FakeWebSocket.OPEN = 1;

function deliver(payload) {
  const ws = sockets[sockets.length - 1];
  ws.onmessage({ data: JSON.stringify(payload) });
}

const base = { color: "FFFFFF", opacity: 100, size: 32, speed: 1 };

beforeAll(() => {
  document.body.innerHTML = '<div id="danmubody"></div>';
  window.WebSocket = FakeWebSocket;
  window.fetch = jest.fn(() => new Promise(() => {}));
  Element.prototype.animate = function () {
    return { onfinish: null, cancel() {}, finished: new Promise(() => {}) };
  };
  jest.spyOn(console, "log").mockImplementation(() => {});
  loadScript("overlay.js");
});

beforeEach(() => {
  document.getElementById("danmubody").innerHTML = "";
});

test("text that looks like an image URL stays text without the server flag", () => {
  deliver({ ...base, text: "https://example.com/a.png" });
  const body = document.getElementById("danmubody");
  expect(body.querySelector("img")).toBeNull();
  expect(body.querySelector("h1.danmu").textContent).toBe("https://example.com/a.png");
});

test("only a literal true counts as the image flag", () => {
  deliver({ ...base, text: "https://example.com/a.png", isImage: "true" });
  expect(document.querySelector("#danmubody img")).toBeNull();
});

test("a server-marked image renders as <img> with the same size cap as Electron", () => {
  deliver({ ...base, text: "https://example.com/static/stickers/fire.gif", isImage: true });
  const img = document.querySelector("#danmubody img.danmu");
  expect(img).not.toBeNull();
  expect(img.getAttribute("src")).toBe("https://example.com/static/stickers/fire.gif");
  expect(img.style.maxWidth).toBe("200px");
  expect(img.style.maxHeight).toBe("120px");
  expect(img.style.objectFit).toBe("contain");
});

test("a flagged non-http URL is not loaded as an image", () => {
  deliver({ ...base, text: "javascript:alert(1)", isImage: true });
  expect(document.querySelector("#danmubody img")).toBeNull();
});
