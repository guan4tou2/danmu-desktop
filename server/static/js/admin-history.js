// admin-history.js — 黑名單關鍵字管理
//
// 2026-09-07（設計稿 08 · H1）起只剩黑名單：彈幕歷史那半隨「重播」分頁一起
// 退場（歷史查詢由「搜尋」分頁涵蓋、整批匯出在備份頁）。檔名沒跟著改，
// 因為那會動到 admin.html 的載入順序。
//
// Depends on: window.csrfFetch (set by admin.js), window.showToast (toast.js), window.ServerI18n
(function () {
  "use strict";


  async function fetchBlacklist() {
    try {
      const response = await fetch("/admin/blacklist/get", {
        method: "GET",
        credentials: "same-origin",
      });
      if (!response.ok) {
        const errorData = await response.json();
        showToast(
          ServerI18n.t("errorFetchingBlacklist").replace("{error}", errorData.error || response.statusText),
          false
        );
        return;
      }
      const blacklist = await response.json();
      const blacklistKeywordsDiv = document.getElementById("blacklistKeywords");
      blacklistKeywordsDiv.innerHTML = ""; // Clear current list

      const countEl = document.getElementById("modBlacklistCount");
      if (countEl) countEl.textContent = `${blacklist.length} words`;
      const bannedStatEl = document.querySelector('[data-mod-stat="banned"]');
      if (bannedStatEl) bannedStatEl.textContent = blacklist.length;

      if (blacklist.length === 0) {
        blacklistKeywordsDiv.innerHTML =
          `<div style="padding:12px 0;text-align:center;font-family:var(--font-mono);font-size:11px;color:var(--color-text-muted);letter-spacing:0.05em">${ServerI18n.t("noKeywordsYet")}</div>`;
      } else {
        blacklist.forEach((keyword) => {
          const keywordEl = document.createElement("div");
          keywordEl.className = "hud-banned-row";

          const iconSpan = document.createElement("span");
          iconSpan.style.cssText = "color: var(--color-ink-error);font-family:var(--font-mono);font-size:13px";
          iconSpan.textContent = "\u2298";

          const keywordSpan = document.createElement("span");
          keywordSpan.style.cssText = "flex:1;min-width:0;font-family:var(--font-mono);font-size:13px;color:var(--color-text-strong);word-break:break-all";
          keywordSpan.textContent = keyword;

          const removeButton = document.createElement("button");
          removeButton.className = "removeKeywordBtn";
          removeButton.type = "button";
          removeButton.style.cssText = "background:transparent;border:none;color: var(--color-ink-accent);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;cursor:pointer;padding:2px 4px";
          removeButton.textContent = "UNBAN";
          removeButton.setAttribute("data-keyword", keyword);

          keywordEl.appendChild(iconSpan);
          keywordEl.appendChild(keywordSpan);
          keywordEl.appendChild(removeButton);
          blacklistKeywordsDiv.appendChild(keywordEl);
        });
      }
      // Event listeners for remove buttons are now handled by delegation in _initHistoryEventListeners
    } catch (error) {
      console.error("Fetch blacklist error:", error);
      showToast(ServerI18n.t("fetchBlacklistError"), false);
    }
  }

  async function addKeyword() {
    const keywordInput = document.getElementById("newKeywordInput");
    const keyword = keywordInput.value.trim();
    if (!keyword) {
      showToast(ServerI18n.t("keywordEmpty"), false);
      return;
    }
    try {
      const response = await window.csrfFetch("/admin/blacklist/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword: keyword }),
      });
      const data = await response.json();
      if (response.ok) {
        keywordInput.value = ""; // Clear input
        fetchBlacklist(); // Refresh list
        // Slice 5 · Q3 reversible-action feedback: toast (universal) +
        // inline green bar with ↶ undo for ~5s. AdminQuickAction handles
        // the bar lifecycle; we wire the undo to /admin/blacklist/remove.
        if (window.AdminQuickAction) {
          window.AdminQuickAction.fire({
            label: data.message || ServerI18n.t("histToastBlacklisted", { keyword: keyword }),
            undo: {
              label: ServerI18n.t("histUndo"),
              run: async () => {
                const r = await window.csrfFetch("/admin/blacklist/remove", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ keyword }),
                });
                if (!r.ok) throw new Error("remove failed");
                fetchBlacklist();
              },
            },
          });
        } else {
          showToast(data.message || "Keyword added.", true);
        }
      } else {
        showToast(data.error || "Failed to add keyword.", false);
      }
    } catch (error) {
      console.error("Add keyword error:", error);
      showToast(ServerI18n.t("addKeywordError"), false);
    }
  }

  async function removeKeyword(keyword) {
    const ok = await window.HudConfirm?.open({
      icon: "⊘",
      title: ServerI18n.t("histRemoveKwTitle"),
      subtitle: "REMOVE KEYWORD",
      severity: "warn",
      bodyText: ServerI18n.t("confirmRemoveKeyword").replace("{keyword}", keyword),
      confirmLabel: ServerI18n.t("histRemoveKwConfirm"),
    });
    if (!ok) return;
    try {
      const response = await window.csrfFetch("/admin/blacklist/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword: keyword }),
      });
      const data = await response.json();
      if (response.ok) {
        showToast(data.message || "Keyword removed.", true);
        fetchBlacklist(); // Refresh list
      } else {
        showToast(data.error || "Failed to remove keyword.", false);
      }
    } catch (error) {
      console.error("Remove keyword error:", error);
      showToast(ServerI18n.t("removeKeywordError"), false);
    }
  }

  function _initHistoryEventListeners() {
    // Add Keyword button event listener
    const addKeywordBtn = document.getElementById("addKeywordBtn");
    if (addKeywordBtn) {
      addKeywordBtn.addEventListener("click", addKeyword);
    }

    const newKeywordInput = document.getElementById("newKeywordInput");
    if (newKeywordInput) {
      newKeywordInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter" || event.keyCode === 13) {
          event.preventDefault();
          addKeyword();
        }
      });
    }

    // Event delegation for remove keyword buttons
    const blacklistKeywordsDiv = document.getElementById("blacklistKeywords");
    if (blacklistKeywordsDiv) {
      blacklistKeywordsDiv.addEventListener("click", function (event) {
        const removeButton = event.target.closest(".removeKeywordBtn");
        if (removeButton) {
          const keyword = removeButton.dataset.keyword;
          if (keyword) {
            removeKeyword(keyword);
          }
        }
      });
    }

  }

  // 2026-09-07 設計稿 08 · H1：「重播」分頁退場，連同它底下的子分頁 strip
  // （sec-history-tabs）、訊息清單 pane（sec-history-list）與舊的 sec-history
  // 卡。彈幕歷史清單的抓取／渲染／清除、自動更新、全選重播都隨之移除——
  // 那些都只服務那張卡；歷史查詢由「搜尋」分頁涵蓋。
  //
  // 本檔改名沒有意義，因為它剩下的職責是**黑名單**（sec-blacklist 還在）。
  // 留在原檔名以免動到 admin.html 的載入順序；下次有人整理再說。

  window.AdminHistory = {
    fetchBlacklist: fetchBlacklist,
  };
})();
