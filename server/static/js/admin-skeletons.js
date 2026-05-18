/**
 * Admin · Loading Skeletons (design v4-r2 2026-05-18 admin-states.jsx).
 *
 * Three reusable skeleton DOM builders that replace "讀取中…" text
 * placeholders across admin modules. Pulse animation uses a CSS keyframe
 * defined in style.css (`@keyframes admin-skel-shimmer`).
 *
 *   window.AdminSkeletons.listRows({ rows: 8 })  → HTMLElement
 *   window.AdminSkeletons.statsTiles({ cols: 4 })
 *   window.AdminSkeletons.chart()
 *
 * Each call returns a fresh DOM node so callers can swap it in without
 * worrying about shared state.
 */
(function () {
  "use strict";

  function _shimmerEl(cls, styles) {
    const el = document.createElement("div");
    el.className = "admin-skel " + (cls || "");
    if (styles) for (const k in styles) el.style[k] = styles[k];
    return el;
  }

  function listRows({ rows = 8 } = {}) {
    const wrap = document.createElement("div");
    wrap.className = "admin-skel-card admin-skel-list";
    // Header
    const head = document.createElement("div");
    head.className = "admin-skel-list__head";
    [60, 80, 140, 200, 80].forEach((w) => {
      head.appendChild(_shimmerEl("admin-skel-bar", { width: w + "px", height: "10px" }));
    });
    wrap.appendChild(head);
    // Rows
    for (let i = 0; i < rows; i++) {
      const row = document.createElement("div");
      row.className = "admin-skel-list__row";
      row.appendChild(_shimmerEl("admin-skel-circle", { width: "24px", height: "24px" }));
      const col = document.createElement("div");
      col.className = "admin-skel-list__col";
      col.appendChild(_shimmerEl("admin-skel-bar", { width: (50 + (i * 13) % 40) + "%", height: "10px" }));
      col.appendChild(_shimmerEl("admin-skel-bar", { width: (30 + (i * 7) % 30) + "%", height: "8px" }));
      row.appendChild(col);
      row.appendChild(_shimmerEl("admin-skel-bar", { width: "60px", height: "10px" }));
      wrap.appendChild(row);
    }
    return wrap;
  }

  function statsTiles({ cols = 4 } = {}) {
    const wrap = document.createElement("div");
    wrap.className = "admin-skel-stats";
    wrap.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    for (let i = 0; i < cols; i++) {
      const tile = document.createElement("div");
      tile.className = "admin-skel-card admin-skel-tile";
      tile.appendChild(_shimmerEl("admin-skel-bar", { width: "60px", height: "8px" }));
      tile.appendChild(_shimmerEl("admin-skel-bar", { width: "80px", height: "28px" }));
      tile.appendChild(_shimmerEl("admin-skel-bar", { width: "100%", height: "18px" }));
      tile.appendChild(_shimmerEl("admin-skel-bar", { width: "90px", height: "8px" }));
      wrap.appendChild(tile);
    }
    return wrap;
  }

  function chart() {
    const wrap = document.createElement("div");
    wrap.className = "admin-skel-card admin-skel-chart";
    const head = document.createElement("div");
    head.className = "admin-skel-chart__head";
    head.appendChild(_shimmerEl("admin-skel-bar", { width: "120px", height: "10px" }));
    const spacer = document.createElement("span"); spacer.style.flex = "1"; head.appendChild(spacer);
    head.appendChild(_shimmerEl("admin-skel-bar", { width: "80px", height: "10px" }));
    wrap.appendChild(head);
    const body = document.createElement("div");
    body.className = "admin-skel-chart__body";
    const yAxis = document.createElement("div");
    yAxis.className = "admin-skel-chart__y";
    [100, 75, 50, 25, 0].forEach(() => yAxis.appendChild(_shimmerEl("admin-skel-bar", { width: "24px", height: "6px" })));
    body.appendChild(yAxis);
    const bars = document.createElement("div");
    bars.className = "admin-skel-chart__bars";
    // Deterministic heights so the skeleton doesn't jitter between renders.
    const heights = [38, 55, 22, 70, 48, 33, 62, 45, 78, 28, 52, 41, 67, 31, 58, 49, 73, 36, 51, 64, 29, 47, 56, 39];
    heights.forEach((h) => bars.appendChild(_shimmerEl("admin-skel-bar admin-skel-chart__bar", { height: h + "%" })));
    body.appendChild(bars);
    wrap.appendChild(body);
    return wrap;
  }

  window.AdminSkeletons = { listRows, statsTiles, chart };
})();
