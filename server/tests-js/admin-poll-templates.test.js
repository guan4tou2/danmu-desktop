const loadScript = require("./helpers/load-script");

// 投票 › 快速範本（admin-poll-builder.js）。
// 釘住：範本建出來的題目，選項文字真的在編輯器裡——原本範本把文字寫進
// 編輯器不讀的欄位，按「是／否」得到兩個空選項。
describe("poll quick templates", () => {
  const flush = async () => {
    for (let i = 0; i < 8; i++) await new Promise((r) => setTimeout(r, 0));
  };
  const optionValues = () =>
    Array.from(document.querySelectorAll("#sec-polls input[type='text'], #sec-polls input:not([type])"))
      .map((el) => el.value)
      .filter((v) => v !== "");

  beforeAll(async () => {
    window.ServerI18n = { t: (key) => key, currentLang: "zh" };
    window.showToast = jest.fn();
    window.DANMU_CONFIG = { session: { logged_in: true } };
    window.fetch = jest.fn(async () => ({ ok: true, status: 200, json: async () => ({}) }));
    window.csrfFetch = jest.fn(async () => ({ ok: true, status: 200, json: async () => ({}) }));
    window.localStorage.clear();
    document.body.innerHTML = '<div id="app-container"><div id="settings-grid"></div></div>';
    loadScript("admin-utils.js");
    loadScript("admin-poll-builder.js");
    document.dispatchEvent(new Event("DOMContentLoaded"));
    document.dispatchEvent(new Event("admin-panel-rendered"));
    await flush();
  });

  test("the yes/no template fills in both options", async () => {
    const chip = document.querySelector('[data-poll-template="yesno"]');
    expect(chip).not.toBeNull();

    chip.click();
    await flush();

    expect(optionValues()).toEqual(expect.arrayContaining(["pollTemplateYes", "pollTemplateNo"]));
  });

  test("the 1–5 stars template fills in five options", async () => {
    document.querySelector('[data-poll-template="stars"]').click();
    await flush();

    expect(optionValues()).toEqual(expect.arrayContaining(["1", "2", "3", "4", "5"]));
  });
});
