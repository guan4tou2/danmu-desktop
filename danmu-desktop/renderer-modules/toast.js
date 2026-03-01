// Toast notification system

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className =
    "toast flex items-center gap-3 p-4 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out opacity-0 translate-x-full";

  const icons = {
    success: `<svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>`,
    error: `<svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>`,
    warning: `<svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
    </svg>`,
    info: `<svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>`,
  };

  const bgColors = {
    success: "rgba(16, 185, 129, 0.15)",
    error: "rgba(239, 68, 68, 0.15)",
    warning: "rgba(234, 179, 8, 0.15)",
    info: "rgba(59, 130, 246, 0.15)",
  };

  toast.style.backgroundColor = bgColors[type] || bgColors.info;

  // 使用 DOM 方法構建結構，避免將 message 插入 innerHTML（防止 XSS）
  const iconWrapper = document.createElement("div");
  iconWrapper.innerHTML = icons[type] || icons.info; // 靜態 SVG，安全

  const textWrapper = document.createElement("div");
  textWrapper.className = "flex-1";
  const p = document.createElement("p");
  p.className = "text-sm font-medium text-slate-100";
  p.textContent = message; // 使用 textContent，確保 message 不被解析為 HTML
  textWrapper.appendChild(p);

  const closeBtn = document.createElement("button");
  closeBtn.className = "text-slate-400 hover:text-slate-200 transition-colors";
  closeBtn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>`;
  closeBtn.addEventListener("click", () => toast.remove());

  toast.appendChild(iconWrapper);
  toast.appendChild(textWrapper);
  toast.appendChild(closeBtn);

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("opacity-0", "translate-x-full");
  });

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-x-full");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

module.exports = { showToast };
