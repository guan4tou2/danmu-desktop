/* Topbar route labels, shared by the shell and its focused DOM tests. */
(function () {
  "use strict";

  function render(shell, rawName, route, activeTab) {
    const host = shell.querySelector("[data-route-breadcrumb]");
    if (!host) return;
    const buttons = Array.from(shell.querySelectorAll(".admin-dash-nav-row[data-route]"));
    const button = buttons.find(item => item.dataset.route === rawName)
      || buttons.find(item => item.dataset.route === route);
    if (!button) { host.replaceChildren(); host.hidden = true; return; }

    let section = "";
    let previous = button.previousElementSibling;
    while (previous) {
      if (previous.classList.contains("admin-dash-nav-label")) {
        section = (previous.querySelector("[data-i18n]") || previous).textContent.trim();
        break;
      }
      previous = previous.previousElementSibling;
    }
    const label = button.querySelector("[data-i18n]") || button.querySelector("span:nth-child(2)");
    const page = (label || button).textContent.trim();
    const tabButton = activeTab
      ? shell.querySelector("[data-admin-tabs-host] .is-active, [data-admin-tabs-host] [aria-selected='true']")
      : null;
    const tab = tabButton
      ? (tabButton.querySelector(".admin-tabs-btn-label") || tabButton).textContent.trim()
      : "";
    const labels = [section, page, tab].filter(Boolean);
    const fragment = document.createDocumentFragment();
    labels.forEach((text, index) => {
      if (index) {
        const separator = document.createElement("span");
        separator.className = "admin-dash-breadcrumb-sep";
        separator.setAttribute("aria-hidden", "true");
        separator.textContent = "›";
        fragment.appendChild(separator);
      }
      const item = document.createElement("span");
      const current = index === labels.length - 1;
      item.className = "admin-dash-breadcrumb-item" + (current ? " is-current" : "");
      if (current) item.setAttribute("aria-current", "page");
      item.textContent = text;
      fragment.appendChild(item);
    });
    host.replaceChildren(fragment);
    host.hidden = labels.length === 0;
  }

  window.AdminBreadcrumb = { render };
})();
