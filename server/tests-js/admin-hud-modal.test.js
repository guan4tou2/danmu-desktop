const loadScript = require("./helpers/load-script");

describe("HUD confirmation user interactions", () => {
  let opener;
  beforeEach(() => {
    document.body.innerHTML = '<button id="opener">Open</button>';
    opener = document.querySelector("#opener");
    opener.focus();
    window.ServerI18n = { t: key => key };
    jest.spyOn(window, "requestAnimationFrame").mockImplementation(callback => { callback(); return 1; });
    // jsdom has no layout. Hidden controls remain hidden to the focus trap.
    jest.spyOn(HTMLElement.prototype, "offsetParent", "get").mockImplementation(function () {
      return this.closest("[hidden]") ? null : this.parentElement;
    });
    loadScript("admin-hud-modal.js");
  });

  afterEach(() => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    jest.restoreAllMocks();
  });

  const action = name => document.querySelector(`[data-modal-action="${name}"]:is(button)`);
  function key(value, shiftKey = false) {
    const event = new KeyboardEvent("keydown", { key: value, shiftKey, bubbles: true, cancelable: true });
    document.activeElement.dispatchEvent(event);
    return event;
  }

  test.each([["confirm", true], ["cancel", false]])("%s click resolves and restores opener focus", async (name, result) => {
    const response = window.HudConfirm.open({ title: "Confirm" });
    expect(document.activeElement).toBe(action("confirm"));
    action(name).click();
    expect(await response).toBe(result);
    expect(document.activeElement).toBe(opener);
    expect(document.querySelector('[role="dialog"]')).toBeNull();
    expect(key("Escape").defaultPrevented).toBe(false);
  });

  test.each(["Escape", "backdrop"])("%s cancels", async method => {
    const response = window.HudConfirm.open();
    if (method === "Escape") key("Escape");
    else document.querySelector(".admin-hud-modal__backdrop").click();
    expect(await response).toBe(false);
  });

  test("Tab and Shift+Tab wrap without reaching the page behind the dialog", () => {
    window.HudConfirm.open({ body: '<input id="extra"><input hidden><button disabled>Unavailable</button>' });
    key("Tab");
    expect(document.activeElement.id).toBe("extra");
    key("Tab", true);
    expect(document.activeElement).toBe(action("confirm"));
    action("cancel").focus();
    expect(key("Tab").defaultPrevented).toBe(false);
  });

  test("Enter keeps the focused button's native behavior", async () => {
    const response = window.HudConfirm.open();
    let settled = false;
    response.then(() => { settled = true; });
    action("cancel").focus();
    expect(key("Enter").defaultPrevented).toBe(false);
    await Promise.resolve();
    expect(settled).toBe(false);
    action("cancel").click();
    expect(await response).toBe(false);
  });

  test("Enter in a textarea does not confirm a destructive action", async () => {
    const textarea = document.createElement("textarea");
    const response = window.HudConfirm.open({ body: textarea, severity: "danger" });
    textarea.focus();
    expect(key("Enter").defaultPrevented).toBe(false);
    expect(document.querySelector('[role="dialog"]')).not.toBeNull();
    key("Escape");
    expect(await response).toBe(false);
  });

  test("opening a second dialog cancels the first and retains focus restoration", async () => {
    const first = window.HudConfirm.open({ title: "First" });
    const second = window.HudConfirm.open({ title: "Second" });
    expect(await first).toBe(false);
    expect(document.querySelectorAll('[role="dialog"]')).toHaveLength(1);
    action("cancel").click();
    expect(await second).toBe(false);
    expect(document.activeElement).toBe(opener);
  });

  test("text variants display user content without creating markup", async () => {
    const text = '<img src=x onerror="alert(1)">';
    const response = window.HudConfirm.open({ titleText: text, bodyText: text });
    expect(document.querySelector("#admin-hud-modal-title").textContent).toBe(text);
    expect(document.querySelector("[data-modal-body]").textContent).toBe(text);
    expect(document.querySelector('[role="dialog"] img')).toBeNull();
    action("cancel").click();
    expect(await response).toBe(false);
  });
});
