const loadScript = require("./helpers/load-script");

describe("route breadcrumb labels", () => {
  let shell;
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="shell">
        <nav><div class="admin-dash-nav-label"><span data-i18n>活動中</span><span>⌄</span></div>
          <button class="admin-dash-nav-row" data-route="history"><span>Icon</span><span data-i18n>紀錄</span><b>12</b></button>
          <button class="admin-dash-nav-row" data-route="sessions"><span>Icon</span><span data-i18n>場次</span></button>
        </nav>
        <div data-admin-tabs-host><button class="is-active"><span class="admin-tabs-btn-label">操作紀錄</span><span>AUDIT</span></button></div>
        <div data-route-breadcrumb></div>
      </div>`;
    shell = document.querySelector("#shell");
    loadScript("admin-breadcrumb.js");
  });
  function labels() {
    return [...shell.querySelectorAll(".admin-dash-breadcrumb-item")].map(item => item.textContent);
  }

  test("uses the clicked alias, section label and active tab without icons or badges", () => {
    window.AdminBreadcrumb.render(shell, "sessions", "history", "audit");
    expect(labels()).toEqual(["活動中", "場次", "操作紀錄"]);
    expect(shell.querySelector('[aria-current="page"]').textContent).toBe("操作紀錄");
    expect(shell.querySelectorAll(".admin-dash-breadcrumb-sep")).toHaveLength(2);
  });
  test("falls back to the resolved route and omits inactive tab labels", () => {
    window.AdminBreadcrumb.render(shell, "old-alias", "history", null);
    expect(labels()).toEqual(["活動中", "紀錄"]);
  });
  test("unknown routes clear and hide an earlier breadcrumb", () => {
    window.AdminBreadcrumb.render(shell, "history", "history", null);
    window.AdminBreadcrumb.render(shell, "unknown", "unknown", null);
    expect(shell.querySelector("[data-route-breadcrumb]").hidden).toBe(true);
    expect(labels()).toEqual([]);
  });
  test("re-renders translated labels and treats markup as text", () => {
    const label = shell.querySelector('[data-route="history"] [data-i18n]');
    label.textContent = '<img src=x onerror="alert(1)">';
    window.AdminBreadcrumb.render(shell, "history", "history", null);
    expect(labels()[1]).toBe(label.textContent);
    expect(shell.querySelector("[data-route-breadcrumb] img")).toBeNull();
    label.textContent = "Records";
    window.AdminBreadcrumb.render(shell, "history", "history", null);
    expect(labels()[1]).toBe("Records");
    expect(shell.querySelectorAll('[aria-current="page"]')).toHaveLength(1);
  });
});
