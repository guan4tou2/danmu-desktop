/**
 * Shared Toast Notification Utility
 * Used by both main.js and admin.js
 */
(function () {
  "use strict";

  function showToast(message, isSuccess = true) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toastElement = document.createElement("div");
    toastElement.className =
      "flex items-center w-full max-w-xs p-4 mb-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 transform transition-all duration-300 ease-in-out opacity-0 translate-x-full";
    toastElement.setAttribute("role", "alert");

    const iconSvg = isSuccess
      ? `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
      : `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
    const iconColorClass = isSuccess ? "text-green-500" : "text-red-500";

    toastElement.innerHTML = `
      <div class="${iconColorClass}">${iconSvg}</div>
      <div class="pl-4 text-sm font-normal"></div>
    `;
    const messageContainer = toastElement.querySelector(
      ".pl-4.text-sm.font-normal"
    );
    messageContainer.textContent = message;

    container.appendChild(toastElement);

    requestAnimationFrame(() => {
      toastElement.classList.remove("opacity-0", "translate-x-full");
    });

    setTimeout(() => {
      toastElement.classList.add("opacity-0", "translate-x-full");
      toastElement.addEventListener("transitionend", () => {
        toastElement.remove();
      });
    }, 3000);
  }

  // Expose globally
  window.showToast = showToast;
})();
