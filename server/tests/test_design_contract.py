"""設計稿契約 —— 稿上寫的字，畫面上到底有沒有。

`.design-sync/specs/*.md` 是 Claude Design 專案 196ce1d7 抽出來的規格
（授權會過期，所以先落地成 markdown）。這支測試把其中**可機器檢查的部分**
釘住：關鍵文案在不在、退場的元素有沒有真的退場。

它不是像素比對，也不取代看畫面。它擋的是另一種回歸——
有人為了修別的東西，把「大螢幕未開」改回「彈幕牆 · 未開啟」，
或是把 KPI sparkline 加回控制台，而沒有人發現。

**改設計時要改這裡**：契約變了就更新這份清單，並在 commit 說明為什麼。
不要為了讓測試綠而繞過它。
"""

import json
import re
from pathlib import Path

import pytest

REPO = Path(__file__).resolve().parents[2]


def _read(rel: str) -> str:
    p = REPO / rel
    return p.read_text(encoding="utf-8") if p.exists() else ""


def _strip_comments(src: str) -> str:
    """註解裡提到舊詞彙是「說明它為什麼被拿掉」，不算殘留。

    順序有意義：**行註解要先剝**。原本先剝區塊註解，結果一行
    `// ... (unlike the Viewer/* rows above).` 裡的 `/*` 被當成區塊起點，
    一路吃到 270 行後的 `*/`，把中間的程式碼整段吞掉——測試於是誤判
    「找不到 GROUPS」。這種 heuristic parser 的失敗方式就是這樣安靜。
    """
    src = re.sub(r"\{#[\s\S]*?#\}", "", src)  # Jinja
    src = re.sub(r"<!--[\s\S]*?-->", "", src)  # HTML
    src = re.sub(r"^\s*//.*$", "", src, flags=re.M)  # JS line（先）
    src = re.sub(r"^\s*#.*$", "", src, flags=re.M)  # Python / shell（先）
    src = re.sub(r"/\*[\s\S]*?\*/", "", src)  # CSS / JS block（後）
    return src


@pytest.fixture(scope="module")
def zh() -> dict:
    return json.loads(_read("server/static/locales/zh/translation.json") or "{}")


@pytest.fixture(scope="module")
def electron_zh() -> dict:
    return json.loads(_read("danmu-desktop/locales/zh/translation.json") or "{}")


def _in_copy(needle: str, *dicts) -> bool:
    return any(isinstance(v, str) and needle in v for d in dicts for v in d.values())


# ── 設計稿 05/16 · 觀眾頁 ─────────────────────────────────────────────


def test_viewer_speaks_big_screen_not_internal_names(zh):
    """設計稿 05 + 14：對觀眾一律講「大螢幕」。

    Desktop / overlay / 彈幕牆 都是我們自己的內部名詞——觀眾不需要知道
    主持人在跑一個桌面 app，也不該被要求學會「彈幕牆」。
    """
    assert zh["overlayConnected"] == "大螢幕顯示中"
    assert zh["overlayNone"] == "大螢幕未開"
    assert zh["viewerOfflineHint"] == "大螢幕開啟後即可送出"
    for key in ("overlayConnected", "overlayNone", "viewerOfflineHint"):
        assert not re.search(r"Desktop|overlay|彈幕牆", zh[key], re.I), key


def test_viewer_first_screen_is_two_steps():
    """設計稿 05：首屏只有預覽、一列「樣式」摘要、輸入框。

    顏色／大小／效果／位置／暱稱全部收進 #viewerStyleSheet；桌面 ≥768
    由 CSS 把同一份 DOM 變成右側常駐面板，不做兩套。
    """
    html = _read("server/templates/index.html")
    assert 'id="viewerStyleSheet"' in html
    assert 'id="viewerStyleRow"' in html
    # 三段控制取代滑桿與 5 選排版
    assert "data-size-seg" in html
    assert 'data-layout="scroll"' in html and 'data-layout="top_fixed"' in html
    assert 'data-layout="float"' not in html, "設計稿 05 的位置只有三段"
    # 桌面常駐面板
    assert "min-width: 768px" in _read("server/static/css/viewer-v2.css")


def test_viewer_screen_off_is_three_calm_surfaces():
    """設計稿 05 · V4：未開時是灰 chip ＋說明卡 ＋一行說明，沒有紅色警語。"""
    html = _read("server/templates/index.html")
    assert "viewer-screenoff-card" in html
    assert "viewerOfflineTitle" in html and "viewerOfflineBody" in html
    main_js = _read("server/static/js/main.js")
    # 舊的紅色橫幅（#sendbarStatusRow）在離線分支必須清空
    assert '_setSendbarHint(ServerI18n.t("viewerOfflineHint"), "offline");' in main_js


def test_viewer_desktop_theme_toggle_is_two_segments():
    """設計稿 05 · D1：桌面留**兩段**主題切換（☼ / ☾），不是三段。

    「跟隨系統」是預設值，不需要一個按鈕來選它——按 ☼ 或 ☾ 就是在覆寫它。
    少掉 ◐ 那一格之後，高亮的才能是「畫面現在的樣子」；三段版本在 auto
    模式下高亮的是 ◐，等於三格裡沒有一格告訴你現在是深是淺。

    手機的 ☰ 抽層保留三段（深色／淺色／系統）——那是設定清單，
    「系統」在那裡是一個合理的選項。
    """
    html = _read("server/templates/index.html")
    chip_start = html.index('id="viewerThemeChip"')
    chip = html[chip_start : html.index("</div>", chip_start)]
    assert 'data-theme-choice="light"' in chip
    assert 'data-theme-choice="dark"' in chip
    assert 'data-theme-choice="auto"' not in chip, "桌面不該有「自動」那一格"

    # ☰ 抽層仍是三段
    sheet_start = html.index('id="viewerMobileSheet"')
    sheet = (
        html[sheet_start : html.index('id="viewerThemeChip"')]
        if sheet_start < chip_start
        else html[sheet_start:]
    )
    assert 'data-theme-choice="auto"' in sheet

    # 高亮取解析後的主題，不是設定值
    main_js = _read("server/static/js/main.js")
    assert 'const resolved = mode === "auto"' in main_js


def test_viewer_shell_grid_assigns_every_main_column_child():
    """設計稿 05 · D1 / 16 · VP1：桌面兩欄 grid，主欄的每一塊都要明確
    指定 `grid-column: 1`。

    漏掉任何一個，它會被自動排到第 2 欄（樣式面板那欄）——`.viewer-tabbar`
    就這樣在桌面寬度下被排到面板後面，投票分頁「存在但不可見」。
    這種 bug 只在一半的寬度出現，手機測不出來。
    """
    css = _read("server/static/css/viewer-v2.css")
    block = css[css.index("@media (min-width: 768px)") :]
    col1 = block[: block.index("grid-column: 1;")]
    for sel in (".viewer-topbar", ".viewer-tabbar", ".viewer-pane", ".viewer-sendbar"):
        assert sel in col1, f"{sel} 沒有指定 grid-column"


def test_viewer_keyboard_and_first_run_nickname():
    """設計稿 16 · VK1/VN1：鍵盤跟隨、emoji 快捷列、首次暱稱提示。"""
    html = _read("server/templates/index.html")
    assert "interactive-widget=resizes-content" in html
    assert "data-quick-insert" in html
    assert 'id="viewerNameAsk"' in html


# ── 設計稿 04 · 桌面端 ───────────────────────────────────────────────


def test_desktop_is_one_page_not_a_sidebar_shell():
    """設計稿 04：三分區側欄 800×900 → 單頁 560×440。"""
    html = _read("danmu-desktop/index.html")
    assert "client-sidebar" not in html
    assert "data-section=" not in html
    assert "data-client-main-card" in html
    assert 'id="client-settings"' in html  # 連線與關於收進 ⚙

    # `data-client-action="edit-conn"` 必須唯一：S4 橫幅上的「變更位址」
    # 用自己的 attribute。兩個元素同名時 Playwright 會「命中兩個取第一個」
    # ——而第一個（橫幅那顆）平常是隱藏的，e2e 就這樣逾時。
    body = _strip_comments(html)
    assert body.count('data-client-action="edit-conn"') == 1
    assert "data-conn-banner-edit" in body

    wm = _read("danmu-desktop/main-modules/window-manager.js")
    assert "width: 560, height: 440" in wm
    assert "minWidth: 360" in wm and "maxWidth: 720" in wm


def test_desktop_status_appears_exactly_once():
    """設計稿 04：狀態從三處（標題列／側欄／卡片）收成主卡一處。"""
    html = _strip_comments(_read("danmu-desktop/index.html"))
    # 主卡是唯一露出的狀態
    assert "data-client-overlay-status" in html
    # 舊的標題列狀態元素還在（connection-status.js 要寫），但必須是 hidden
    m = re.search(r'<span class="client-titlebar-status"([^>]*)>', html)
    assert m and "hidden" in m.group(1), "標題列狀態不該再佔版位"


# ── 設計稿 09 · 大螢幕 ───────────────────────────────────────────────


def test_entry_qr_is_readable_from_ten_metres():
    """設計稿 09 · D1：260px 白卡 QR ＋ 等寬大字網址；chip 與掃描線退場。"""
    html = _strip_comments(_read("danmu-desktop/child.html"))
    css = _strip_comments(_read("danmu-desktop/child.css"))
    assert "掃 QR 或打開" in html
    assert "打字，就會飛到這個螢幕上" in html
    assert "已就緒 · 等待第一則彈幕" in html
    assert "width: 260px" in css
    assert "DESKTOP READY" not in html and "DESKTOP READY" not in css
    assert ".overlay-idle-backdrop { display: none; }" in css


def test_projected_screen_has_no_hud():
    """設計稿 09 · D2：投影畫面上只有彈幕。計數只在控制視窗與 Admin。"""
    html = _strip_comments(_read("danmu-desktop/child.html"))
    assert 'id="danmu-counter"' not in html
    # 值仍要算，只是不畫在大螢幕上
    assert "__danmuActiveCount" in _read("danmu-desktop/renderer-modules/track-manager.js")


def test_poll_card_is_centred_and_auto_dismisses():
    """設計稿 09 · D3 ＋ 16 · OS3：置中 560 毛玻璃卡，15 秒後自動收起，
    結果條同色（最高票不另外標色，讓數字說話）。"""
    css = _read("danmu-desktop/child.css")
    js = _read("danmu-desktop/renderer-modules/overlay-ws.js")
    assert "#poll-panel" in css and "blur(12px)" in css
    assert "15000" in js
    assert "background: var(--color-primary);" in css


def test_tray_menu_is_six_items():
    """設計稿 09：9 項 → 6 項。狀態一行、主動作第一項帶快速鍵。"""
    main = _strip_comments(_read("danmu-desktop/main.js"))
    for label in (
        '"開啟顯示層"',
        '"關閉顯示層"',
        '"顯示入場 QR"',
        '"清空畫面"',
        '"開啟控制視窗…"',
        'label: "設定…"',
    ):
        assert label in main, label
    assert "CommandOrControl+Shift+D" in main
    for gone in ("Desktop 視窗：", '"偏好設定…"', "更改連線…"):
        assert gone not in main, gone


def test_error_pages_lead_with_what_you_can_do():
    """設計稿 09 · E1/E2：主文是「發生什麼、你可以做什麼」，
    技術訊息（狀態碼、時間、ref）降到頁腳小字。"""
    layout = _strip_comments(_read("server/templates/errors/_layout.html"))
    p404 = _read("server/templates/errors/404.html")
    p500 = _read("server/templates/errors/500.html")
    assert "admin-err__logo" in layout and "admin-err__foot" in layout
    assert "admin-err__subtitle" not in layout, "副標（HTTP xxx）已退場"
    assert "找不到這個頁面" in p404
    assert "試著重新掃描現場的 QR code" in p404
    assert "伺服器暫時出了點問題" in p500
    assert "請告訴現場工作人員" in p500


# ── 設計稿 06 · Admin ────────────────────────────────────────────────


def test_login_is_one_field_and_says_what_happens_next(zh):
    """設計稿 06 · L1/L2：圖示 → 字標 → 一個欄位 → 一顆按鈕。
    錯誤要說剩幾次與鎖多久，而且一律是紅的（錯就是錯，不分程度）。"""
    js = _read("server/static/js/admin-login.js")
    assert "admin-login-icon" in js and "admin-login-wordmark" in js
    assert "data-login-reveal" in js, "密碼要能看——打錯字是最常見的失敗原因"
    assert "還可嘗試" in zh["loginAttemptsRemaining"]
    assert "鎖定 15 分鐘" in zh["loginAttemptsRemaining"]
    assert 'classList.toggle("is-warn"' not in js, "密碼錯誤不是警告"


def test_cockpit_is_three_blocks():
    """設計稿 06 · K1/K2：控制台首屏＝顯示層開關卡 ＋ 一行數字 ＋ 訊息流。

    退場的三樣東西不要復活：KPI sparkline（20 個資料點畫不出趨勢，只讓每張
    卡長高 60px）、Quick Actions F1–F4（⌘K 一步就到）、My Actions（稽核用的
    回顧，家在「紀錄與匯出 › 操作紀錄」）。
    """
    admin = _strip_comments(_read("server/static/js/admin.js"))
    dash = _strip_comments(_read("server/static/js/admin-dashboard.js"))
    css = _strip_comments(_read("server/static/css/style.css"))

    assert "admin-cockpit-overlay" in admin
    assert "admin-cockpit-stats" in admin
    assert "sec-live-feed" in admin

    for gone in (
        "admin-kpi-tile-bars",
        "admin-dash-quickactions",
        "data-dash-myactions-body",
        "admin-kpi-strip",
    ):
        assert gone not in admin, gone
    for gone in ("_renderSparkBars", "populateQuickActions", "populateMyActions"):
        assert gone not in dash, gone
    for gone in (".admin-dash-qa-", ".admin-dash-qp-", ".admin-dash-myaction"):
        assert gone not in css, gone


def test_sidebar_brand_is_icon_plus_name():
    """設計稿 06：側欄頂端是 icon 28 ＋ 名稱一行，不是 Bebas 大標 ＋ 版本副標。"""
    admin = _strip_comments(_read("server/static/js/admin.js"))
    assert "admin-dash-brand-icon" in admin
    assert "admin-dash-brand-hero" not in admin


# ── 設計稿 15 · Admin 補頁 ───────────────────────────────────────────


def test_command_palette_is_three_groups_actions_first():
    """設計稿 15 · CK1：⌘K 收成三段，**動作優先**。

    現場最常按 ⌘K 是要做事不是要導頁。七顆 scope chip ＋ 依分數排序的扁平
    清單退場——chip 是七個「先分類」的決定，而使用者只是想做一件事。
    這一段同時取代了控制台的 Quick Actions F1–F4。
    """
    js = _strip_comments(_read("server/static/js/admin-command-palette.js"))
    assert re.search(r'GROUPS = \[\s*\{ id: "actions"', js), "動作必須是第一段"
    assert '{ id: "pages"' in js and '{ id: "messages"' in js
    assert "admin-cmdk-chip" not in js
    assert "_setScope" not in js
    # 輔助文字是來源頁，不是端點
    assert "POST /effects/reload" not in js
    assert "route → " not in js


def test_help_drawer_pushes_instead_of_covering(zh):
    """設計稿 15 · HD1：說明抽屜**不蓋內容，推開版面**。

    說明的用途是「一邊看說明一邊操作」——蓋住畫面等於逼使用者記住說明
    再關掉。改成推開之後遮罩也不需要了。每段 ≤ 60 字、講白話，
    結尾一個「現場小技巧」（通常是「其實有更快的做法」）。
    """
    js = _strip_comments(_read("server/static/js/admin-help-drawer.js"))
    css = _strip_comments(_read("server/static/css/style.css"))

    assert "admin-help__backdrop" not in js, "遮罩應已退場"
    assert 'aria-modal="true"' not in js, "推開版面就不是 modal"
    assert 'classList.add("is-help-open")' in js
    assert "body.is-help-open .admin-dash-grid" in css
    assert "padding-right: 360px" in css

    # 現場小技巧
    assert "admin-help__fieldtip" in js
    assert "helpDrawerFieldTipLabel" in js
    assert zh["helpDrawerFieldTipLabel"] == "現場小技巧"

    # 中英對照的段落標籤退場（設計稿 14 文案規則）
    for bilingual in ("· SHORTCUTS", "· GLOSSARY", "· RESOURCES"):
        assert bilingual not in js, bilingual

    # 審核頁的說明必須是白話，不是內部術語
    assert "含有這些字的訊息不會上大螢幕" in zh["helpDrawerModerationTip1"]
    assert "裝置識別" in zh["helpDrawerModerationTip2"]
    assert "每人每分鐘" in zh["helpDrawerModerationTip3"]
    help_copy = json.dumps(
        {k: v for k, v in zh.items() if k.startswith("helpDrawer")},
        ensure_ascii=False,
    )
    for jargon in ("Quick Filters", "filter action", "block / replace", "chip"):
        assert jargon not in help_copy, jargon


def test_reconnect_banner_answers_the_only_question_that_matters(zh):
    """設計稿 15 · RC1：橫幅講三件事——發生什麼、正在做什麼、
    **對觀眾有沒有影響**。主持人在台上讀到一串全大寫技術詞只會更慌，
    因為它沒回答「大螢幕還在跑嗎」。"""
    assert zh["rcbReconnectingTitle"] == "與伺服器的連線中斷"
    assert "正在重新連線" in zh["rcbReconnectingBody"]
    assert "大螢幕不受影響" in zh["rcbReconnectingBody"]
    assert "大螢幕" in zh["rcbLostBody"]
    js = _strip_comments(_read("server/static/js/admin-reconnect-banner.js"))
    assert "RECONNECTING" not in js and "CONNECTION LOST" not in js


# ── 設計稿 14 · 全域詞彙 ─────────────────────────────────────────────


def test_electron_never_says_overlay(electron_zh):
    """設計稿 14 文案總表：Desktop / Overlay → 顯示層（en: Display）。"""
    for key, value in electron_zh.items():
        assert not re.search(r"Overlay|オーバーレイ|오버레이", str(value)), key
    assert electron_zh["overlayButtonStart"] == "開啟"
    assert electron_zh["overlayButtonStop"] == "關閉"
    # 按鈕只寫動詞，不加圖示符號
    for key in ("overlayActionClear", "overlayActionTestDanmu", "overlayActionIdleQr"):
        assert not re.search(r"[⌫▶■⚡◱]", electron_zh[key]), key


def test_admin_kicker_keys_are_gone(zh):
    """設計稿 14 刪除清單：所有 kicker / eyebrow key。

    中文標籤旁邊再擺一行大寫英文是同一件事說兩次。
    """
    leftovers = [k for k in zh if k.endswith("Kicker") or k.endswith("Eyebrow")]
    assert not leftovers, f"kicker key 應已清空：{leftovers}"


def test_session_expired_is_a_dialog_not_a_redirect(zh):
    """設計稿 15 · EX1：登入過期用**對話框而非跳回登入頁**，保留當前路由。

    原本 401 走 `location.reload()`，主持人會被踢回一片空白的登入頁——剛才
    在哪一頁、輸入到一半的東西全沒了。文案裡「大螢幕與觀眾不受影響」是刻意
    寫的：台上看到「登入過期」的第一個念頭是「大螢幕是不是掛了」。
    """
    assert zh["sxTitle"] == "登入已過期"
    assert "8 小時" in zh["sxBody"]
    assert "大螢幕與觀眾不受影響" in zh["sxBody"]
    assert zh["sxSubmit"] == "重新登入"

    banner = _strip_comments(_read("server/static/js/admin-reconnect-banner.js"))
    assert "AdminSessionExpired.open()" in banner
    # reload 只剩「連對話框都沒載入」的保底分支
    assert banner.count("location.reload()") == 1

    dialog = _strip_comments(_read("server/static/js/admin-session-expired.js"))
    # 成功後不重載，靠換 meta 的 CSRF token 就地接回去
    assert "location.reload" not in dialog
    assert 'meta[name="csrf-token"]' in dialog


def test_shortcut_sheet_lists_only_keys_that_are_bound(zh):
    """設計稿 15 · KS1：`?` 叫出快速鍵一覽，表上每個鍵都要真的接線。

    這條擋的是「表跟綁定各寫一份」。說明抽屜以前就是這樣：它 advertise 了
    ⌘⇧L／⌘⇧S／⌘⇧C 三個**從來沒有被綁定過**的鍵。按下去沒反應的表比沒有表
    更糟——使用者試過一次之後，整份表都不再可信。
    """
    js = _strip_comments(_read("server/static/js/admin-shortcuts.js"))
    # 表與派送讀同一個陣列
    assert "var SHORTCUTS = [" in js
    assert "_rowsHtml" in js and "s.match(e)" in js and "s.run(e)" in js

    for label in (
        "ksOpenPalette",
        "ksThisSheet",
        "ksToggleDisplay",
        "ksClearScreen",
        "ksFeedMove",
        "ksFeedBlock",
        "ksFeedPause",
        "ksFeedPoll",
    ):
        assert label in js, label
        assert label in zh, label
    assert zh["ksNote"].startswith("Windows")

    # 綁定只有一處：命令面板與說明抽屜都已交出自己的全域監聽
    palette = _strip_comments(_read("server/static/js/admin-command-palette.js"))
    assert 'document.addEventListener("keydown"' not in palette.replace(
        '_input.addEventListener("keydown", _onKey);', ""
    )
    drawer = _strip_comments(_read("server/static/js/admin-help-drawer.js"))
    assert "helpDrawerShortcutLiveFeed" not in drawer
    assert "data-help-shortcuts" in drawer  # 改成指向 KS1 的一列

    # 抽屜要有滑鼠入口——在這之前它只有 F1 能開，等於對滑鼠使用者不存在
    assert "data-open-help" in _read("server/static/js/admin.js")

    # 那三個假的 i18n key 一併退場
    for dead in (
        "helpDrawerShortcutLiveFeed",
        "helpDrawerShortcutDesktopOff",
        "helpDrawerShortcutClearDesktop",
    ):
        assert dead not in zh, dead


def test_session_export_panel_matches_the_spec(zh):
    """設計稿 08 · H1：場次頁＝一張表（場次／訊息／觀眾／時長／匯出 ›）＋匯出面板。

    面板三件事：格式分段（CSV 試算表／JSON 完整／SRT 字幕）、個資開關配
    警語、以及「重播這場」與「下載」。個資開關**預設關**——匯出檔會被丟進
    群組、貼進簡報，IP 與裝置識別不該是預設值。
    """
    assert "每次開啟顯示層算一場" in zh["sessionsPageNote"]
    for key, value in {
        "sessionsColSession": "場次",
        "sessionsColMessages": "訊息",
        "sessionsColViewers": "觀眾",
        "sessionsLabelDuration": "時長",
        "sessionsExportFmtCsv": "CSV 試算表",
        "sessionsExportFmtJson": "JSON 完整",
        "sessionsExportFmtSrt": "SRT 字幕",
        "sessionsExportPii": "包含觀眾 IP 與裝置識別",
        "sessionsExportPiiWarn": "屬個人資料，分享前請確認",
        "sessionsReplayBtn": "重播這場",
    }.items():
        assert zh[key] == value, key

    js = _strip_comments(_read("server/static/js/admin-sessions.js"))
    assert "exportPii: false" in js, "個資開關預設要關"
    # 退場的舊版元件：KPI 條、頁內篩選分頁、日期 bucket、右側預覽欄
    for gone in (
        "admin-kpi-strip",
        "data-sessions-filter",
        "admin-sessions-bucket",
        "admin-sessions-preview",
    ):
        assert gone not in js, gone


def test_theme_cards_show_a_danmu_sample(zh):
    """設計稿 08 · T1：每張主題卡都要**直接把一行彈幕畫成那個主題的樣子**。

    卡片之前是色票列＋全大寫英文代號＋「○ 未使用」＋字型／排版／FX 三行
    meta＋BUILT-IN 標籤——那是在描述主題的規格。使用者要決定的是「這個主題
    長什麼樣」，而那件事只有直接畫一行彈幕能回答。
    """
    assert "決定所有彈幕的字型、描邊與陰影" in zh["themesSectionDesc"]
    assert zh["themesActiveChip"] == "使用中"
    assert zh["themesActivateBtn"] == "套用"  # 「啟用 ▶」的 ▶ 是設計稿 14 禁用的圖示
    assert not re.search(r"[⌫▶■⚡◱]", zh["themesActivateBtn"])
    assert zh["styleThemePacks"] == "主題"  # 設計稿 14 詞彙表：風格主題包 → 主題

    js = _strip_comments(_read("server/static/js/admin-themes.js"))
    assert "theme-pack-sample-line" in js
    assert "_sampleStyle" in js and "-webkit-text-stroke" in js
    for gone in (
        "theme-pack-swatch",
        "theme-pack-badge",
        "theme-pack-meta",
        "theme-pack-title",
        "BUILT-IN",
    ):
        assert gone not in js, gone

    # 範例要畫得出來，後端就得把 styles/font/bg 一起送出（只回 meta 的話四張
    # 卡會長得一模一樣）。
    svc = _read("server/services/themes.py")
    assert '"styles": t.get("styles")' in svc


def test_emoji_cards_answer_should_i_keep_this(zh):
    """設計稿 08 · T2：表情卡上寫的是「用過 N 次」或「尚未使用」。

    之前那一行是「64×64 · 12KB」——在描述檔案。主持人在這一頁要決定的是
    「這個表情要不要留著」，那只有使用次數能回答。（何況 /emojis/list 從來
    沒回過 size_bytes 與 width/height，所以那一行實際上永遠只印一個「—」。）
    """
    assert zh["emojisPageTitle"] == "表情"  # 設計稿 14 詞彙表：Emoji 庫 → 表情
    assert "輸入 :名稱: 就會變成表情" in zh["emojisPageNote"]
    assert zh["emojisUpTitle"] == "把圖片拖到這裡上傳，或選擇檔案"
    assert zh["emojisUsedCount"] == "用過 {n} 次"
    assert zh["emojisNeverUsed"] == "尚未使用"

    js = _strip_comments(_read("server/static/js/admin-emojis.js"))
    assert "emojisUsedCount" in js and "emojisNeverUsed" in js
    assert "size_bytes" not in js
    # 中文標籤旁邊不再擺一行大寫英文（設計稿 14）
    assert "AUDIENCE PREVIEW" not in js


def test_widget_rows_are_summaries_and_the_preview_is_real(zh):
    """設計稿 08 · W1：一列＝圖示＋名稱＋摘要＋›，右邊是真的「大螢幕預覽」。

    之前每一列都是永遠攤開的編輯器，頂上掛著 L0 圖層碼、type slug、
    `/overlay/scoreboard` 內部路徑、`POS · top-right`。主持人掃這頁是要確認
    「大螢幕上現在擺了什麼」，不是要讀規格。

    右欄那塊「大螢幕預覽」原本是寫死的 `<span>Desktop preview</span>`——
    一塊永遠不會變的佔位。稿上的說明寫著「拖預覽裡的方塊可改位置」，所以
    它必須真的畫得出方塊，而且真的能拖。
    """
    assert "常駐在大螢幕上的計分板、跑馬燈或文字標籤" in zh["widgetsDesc"]
    assert "拖預覽裡的方塊可改位置" in zh["widgetsDesc"]
    assert zh["widgetsAddBtn"] == "新增小工具"
    assert zh["widgetsPreviewLabel"] == "大螢幕預覽"
    # 設計稿 14 詞彙表：Desktop Widgets → 小工具。側欄與頁首標題同一個詞。
    assert zh["adminRouteTitle_widgets"] == zh["adminNavWidgets"] == "小工具"

    js = _strip_comments(_read("server/static/js/admin-widgets.js"))
    assert "admin-widget-summary" in js and "_summary(w)" in js
    assert "data-ow-stage" in js and '"dragend"' in js
    assert "_nearestPosition" in js
    for gone in (
        "admin-widget-card-layer",
        "admin-widget-card-url",
        "admin-widget-card-type",
        "hud-stats-strip",
        "Desktop preview",
    ):
        assert gone not in js, gone


def test_page_primary_action_has_a_home_in_the_shell(zh):
    """設計稿 07/08：每一頁的主要動作在頁首右側。

    admin shell 會把「標題與路由同名」的區塊頁首整塊併進 topbar，所以擺在
    頁首裡的按鈕會跟著消失。在這之前每一頁各自繞過：備份把按鈕移到頁首
    外面、動畫效果把摘要移到頁首外面、小工具本來要三顆並排的工具列——
    每加一頁就多一種繞法。

    現在 shell 有 [data-route-action] 插槽：被併掉的頁首裡的
    .admin-ui-page-actions 會被搬進去，換路由時搬回原位。搬 DOM 節點不會
    弄丟 listener，所以不能改用 clone。
    """
    js = _strip_comments(_read("server/static/js/admin.js"))
    assert "data-route-action" in js
    assert "_adminHomeHead" in js
    assert ".admin-ui-page-actions" in js

    # 兩個原本繞過去的頁面已經搬回頁首裡
    backup = _strip_comments(_read("server/static/js/admin-backup.js"))
    head_start = backup.index('class="admin-ui-page-head"')
    head_end = backup.index("admin-ui-group-label", head_start)
    assert "admin-ui-page-actions" in backup[head_start:head_end]


def test_extensions_page_is_four_segments(zh):
    """設計稿 08 · X1：擴充四合一——Webhook / 插件 / API 金鑰 / 定時發送。

    這四件事本來各自是一條路由：前三者連側欄入口都沒有（只能靠深連結或
    別的頁面帶過去），定時發送藏在系統的分頁裡。它們是同一群人在同一個場合
    會碰的東西，分成四個入口只是在逼使用者記住哪個功能住在哪一頁。
    """
    for key, value in {
        "tabExtWebhooks": "Webhook",
        "tabExtPlugins": "插件",
        "tabExtApiKeys": "API 金鑰",
        "tabExtScheduler": "定時發送",
    }.items():
        assert zh[key] == value, key
    # 稿上的頁面說明落在預設分頁（Webhook）——shell 顯示的是當下分頁的說明
    assert "給 IT 人員的區域" in zh["webhooksPageNote"]
    assert "Discord／Slack" in zh["webhooksPageNote"]
    # 按鈕只寫動詞、不加符號，也不要求使用者學會「endpoint」（設計稿 14）
    assert zh["webhooksAddEndpointBtn"] == "新增 Webhook"

    tabs = _strip_comments(_read("server/static/js/admin-tabs.js"))
    block = tabs[tabs.index("integrations: {") :]
    block = block[: block.index("],")]
    assert 'defaultTab: "webhooks"' in block
    for slug in ("webhooks", "plugins", "api-tokens", "scheduler"):
        assert f'slug: "{slug}"' in block, slug

    # 搬進 topbar 插槽的按鈕不能靠 section 上的事件委派——它已經不在 section
    # 底下了。這條擋的是「按鈕看得到但按了沒反應」。
    wh = _strip_comments(_read("server/static/js/admin-webhooks.js"))
    assert ".admin-ui-page-actions [data-wh-action='show-add']" in wh


def test_system_page_is_an_entry_point(zh):
    """設計稿 08 · S1：系統頁是「入口頁」——狀態 chip、四格數字、設定與導向列。

    之前它是一塊密度很高的 HUD：六格帶 sparkline 的 tile（每格中英雙標籤）、
    services 表、recent errors、QUICK ACTIONS（其中一顆是永遠 disabled 的
    「待 BE」）、CONFIG SUMMARY（全大寫英文欄名）。那些在回答「這台機器現在
    怎麼樣」，但主持人來這一頁多半是要去別的地方；診斷細節有自己的家
    （系統事件 #/events）。
    """
    assert zh["sohPageTitle"] == "系統"
    assert zh["sohPageNote"] == "伺服器狀態、語言、備份、安全、擴充的入口。"
    assert zh["sohAllHealthy"] == "運作正常"
    for key in ("sohMetricUptime", "sohMetricConnected", "sohMetricMemory", "sohMetricVersion"):
        assert key in zh, key
    assert zh["sohAppearanceAuto"] == "跟隨系統"

    js = _strip_comments(_read("server/static/js/admin-system-overview.js"))
    assert "admin-soh-kpis" in js and "data-soh-qr" in js and "data-soh-mode" in js
    for gone in (
        "admin-soh-v4__metrics",
        "admin-soh-v4__services",
        "admin-soh-v4__quickcard",
        "admin-soh-v4__cfgcard",
        "QUICK ACTIONS",
        "CONFIG SUMMARY",
        "_renderSpark",
    ):
        assert gone not in js, gone

    # 記憶體那格要用百分比。mem_mb_series 是整台機器已用的 MB，直接印會變成
    # 「記憶體 5769 MB」這種對主持人毫無意義的數字。
    assert "mem_series" in js and "mem_mb_series" not in js

    # 深淺色分段與頂欄那顆 ☼/☾ 共用同一份狀態，不然兩邊會各說各話
    assert "AdminThemeSwitcher" in js
    switcher = _strip_comments(_read("server/static/js/admin-theme-switcher.js"))
    assert "window.AdminThemeSwitcher" in switcher


def test_notifications_is_a_popover_not_a_page(zh):
    """設計稿 08 · N1：通知改成頂欄鈴鐺（帶數字 badge）開的右上彈出面板。

    前一版是整頁三欄式收件匣：篩選欄／清單／詳情窗，加上 全部／未讀／已加星／
    已封存 四個分頁與嚴重度篩選。通知的用途是「有件事你可能要處理」——為它蓋
    一座收件匣，等於把一個瞄一眼的東西做成一份要經營的工作。
    """
    assert zh["notifMarkAllRead"] == "全部標為已讀"  # 原本是「✓ 全部已讀」
    assert zh["notifViewBtn"] == "查看"

    js = _strip_comments(_read("server/static/js/admin-notifications.js"))
    assert 'btn.id = "admin-notif-bell"' in js
    assert "data-notif-badge" in js and "data-notif-readall" in js
    # 四個來源的聚合是這個模組真正的價值，不能跟著版面一起被丟掉
    for keeper in (
        "_fetchTokenAudit",
        "_fetchFilterEvents",
        "_fetchWebhookAudit",
        "_fetchSystemAudit",
    ):
        assert keeper in js, keeper
    for gone in (
        "admin-notif-tabs",
        "admin-notif-sources",
        "admin-notif-toolbar",
        "_sevClassFor",
        "_toggleStar",
        "sec-notifications-overview",
    ):
        assert gone not in js, gone

    # 來源標籤不能直接把內部英文名（Moderation / Webhooks）給使用者看
    assert 'Moderation:   { key: "adminNavModeration"' in _read(
        "server/static/js/admin-notifications.js"
    )

    # 舊書籤 #/notifications 還要能用——route 保留但沒有 section
    admin = _strip_comments(_read("server/static/js/admin.js"))
    assert 'notifications: { title: "通知", sections: [] }' in admin


def test_audience_table_matches_au1(zh):
    """設計稿 15 · AU1：觀眾表＝頭像／觀眾／裝置識別／訊息／被擋／最後活動／⋯

    **IP 與 UA 兩欄退場**：頁面說明寫著「用裝置識別區分，不收個資」，旁邊
    卻擺著每個人的 IP，是自己打自己的臉。要查 IP 的場合是審核，那裡有。

    「觀眾」與「訊息」兩欄之前**永遠是假的**：前端讀 `r.nickname` 與
    `r.message_count`，但 /admin/audience/list 從來沒回過這兩個欄位——每一列
    都顯示「匿名」和「0」，不管那個人送了幾則。
    """
    assert zh["audiencePageNote"] == "這場活動有誰在發、發了多少。用裝置識別區分，不收個資。"
    for key, value in {
        "audienceColViewer": "觀眾",
        "audienceColDeviceId": "裝置識別",
        "audienceColMsgs": "訊息",
        "audienceColBlocked": "被擋",
        "audienceColLastSeen": "最後活動",
        "audienceBlockedTag": "已封鎖",
        "audienceSearchPlaceholder": "找暱稱或裝置識別",
    }.items():
        assert zh[key] == value, key

    js = _strip_comments(_read("server/static/js/admin-audience.js"))
    assert "col-fp" in js and "col-blocked" in js and "col-seen" in js
    # 匿名合併成一列並標「×N 位」
    assert "_groupedRecords" in js and "audienceAnonCount" in js
    # 底部「顯示 N / M　載入更多」
    assert "audienceShownOfTotal" in js and "audienceLoadMore" in js
    # 讀 API 真的有的欄位，不要再讀不存在的 message_count
    assert "r.message_count" not in js and "rec.message_count" not in js
    for gone in ("col-ip", "col-joined", "col-status", '"NICK · FP"', '"IP · UA"'):
        assert gone not in js, gone

    # 暱稱要有來源——fingerprint_tracker 這次才開始記
    tracker = _read("server/services/fingerprint_tracker.py")
    assert '"nickname": self.nickname' in tracker
    assert "nickname: Optional[str] = None" in tracker


def test_search_page_matches_sr1(zh):
    """設計稿 15 · SR1：單欄——搜尋框＋結果數、篩選 chip、匯出、結果列、載入更多。

    退場的是左邊那塊 260px 篩選面板。裡頭有一段語法說明寫著
    `fp:<fingerprint>` `nick:<nickname>` `session:<id>` `after:YYYY-MM-DD`——
    **後端一個都沒實作**（/admin/search 只做 q 的子字串比對），等於教使用者
    一套不存在的語法。時間範圍那六顆 chip 裡的「自訂」按了也沒有反應。
    """
    for key, value in {
        "searchScopeSession": "這場",
        "searchScopeAll": "所有場次",
        "searchOnlyBlocked": "只看被擋的",
        "searchWhoAnyone": "任何人",
        "searchResultCount": "{n} 則",
        "searchExportCsv": "匯出結果 CSV",
    }.items():
        assert zh[key] == value, key
    assert "載入更多" in zh["searchMoreLeft"]

    js = _strip_comments(_read("server/static/js/admin-search.js"))
    assert "data-search-scope" in js and "data-search-blocked" in js
    assert "data-search-who" in js and "data-search-more" in js
    assert "admin-search-hit" in js  # 命中詞高亮
    for gone in (
        "admin-search-syntax-block",
        "admin-search-range-chip",
        "admin-search-status-cb",
        "admin-search-chart",
    ):
        assert gone not in js, gone

    # 暱稱要有來源——history 這次才開始記
    history = _read("server/services/history.py")
    assert '"nickname": str(danmu_data.get("nickname") or "")[:40]' in history


def test_skeleton_says_something_after_three_seconds(zh):
    """設計稿 15 · SK1：骨架只做版面輪廓，**超過 3 秒改顯示「連線較慢…」**。

    三秒是分界線：三秒內一塊安靜的輪廓就夠了；超過三秒使用者會開始懷疑是不是
    壞了，這時要講一句話告訴他還在跑。
    """
    assert zh["skeletonSlowHint"] == "連線較慢…"
    js = _strip_comments(_read("server/static/js/admin-skeletons.js"))
    assert "SLOW_AFTER_MS = 3000" in js
    assert "_attachSlowHint" in js
    # 骨架被真內容換掉之後不能再對那個節點動手
    assert "hint.isConnected" in js


def test_poll_deepdive_matches_p1(zh):
    """設計稿 08 · P1：頁首（‹ 投票／題目／狀態時間／推結果＋匯出）、KPI 四格、
    結果長條、「投票時序 · 每 10 秒」折線圖。

    退場的一整批都是「還沒有資料的格子」：
      · 第五格 KPI「作弊嘗試」——值永遠是「—」，副標寫著「待 BE 擴張」
      · SENTIMENT INDEX——把選項當 Likert 量表、前半算正面後半算負面再相減。
        選項順序根本不保證有這個意義，那是一個編出來的數字
      · 「vs 上一次」——值永遠是「—」
      · TIMELINE 佔位卡——連結指向一份 prototype-gaps 內部設計文件
      · GEO 佔位卡——值永遠是空的
      · INTEGRITY 卡——四列裡兩列寫著「未強制」「無」，等於在宣傳沒有的防護
    """
    assert zh["pollDeepdiveSecTimeline"] == "投票時序 · 每 10 秒"
    assert zh["pollDeepdivePushBtn"] == "推結果到大螢幕"
    assert zh["pollDeepdiveKpiDuration"] == "時長"
    assert "位在線" in zh["pollDeepdiveParticipationSub"]

    js = _strip_comments(_read("server/static/js/admin-poll-deepdive.js"))
    assert "_timelineSvg" in js and "vote_timeline" in js
    assert 'data-pdd-action="push"' in js
    for gone in (
        "SENTIMENT INDEX",
        "admin-pdd-integrity",
        "admin-pdd-placeholder",
        "pollDeepdiveKpiCheat",
        "pollDeepdiveVsPrevious",
        "prototype-gaps",
    ):
        assert gone not in js, gone

    # 時序要有真的資料來源
    poll = _read("server/services/poll.py")
    assert '"vote_times"' in poll and "_vote_timeline_locked" in poll
    assert "def rebroadcast" in poll


def test_setup_wizard_is_four_steps(zh):
    """設計稿 08 · F1：首次設定是四步——`1 伺服器網址 · 2 主題 · 3 審核基本防線 · 4 完成`。

    原本是五步，多一步「顯示規則」。那一步是四個開關的巡覽（不是設定，是
    「看一下現在是什麼」）；首次設定要問的是非問不可的事，多一步就是多一個
    讓人按「跳過」的理由。

    主題那步的四張卡帶的是**定位說明**（「暖色像素感，適合活動主視覺」），
    不是 server 那份功能描述（「復古像素風格，帶閃爍效果」）——首次設定要
    回答的是「我這場該選哪個」，不是「這個主題做了什麼」。
    """
    assert zh["setupWizardStepServer"] == "伺服器網址"
    assert zh["setupWizardStepTheme"] == "主題"
    assert zh["setupWizardStepModeration"] == "審核基本防線"
    assert zh["setupWizardStepMeta"] == "第 {current} 步，共 {total} 步"
    assert zh["setupWizardSkip"] == "略過，稍後再說"
    assert zh["setupWizardBack"] == "‹ 上一步"
    assert zh["setupWizardNext"] == "繼續"
    assert zh["setupWizardThemeStepTitle"] == "選一個起手主題"
    for key, value in {
        "setupWizardThemeDefaultDesc": "白色彈幕，適合大多數畫面",
        "setupWizardThemeNeonDesc": "高對比發光，適合深色舞台",
        "setupWizardThemeRetroDesc": "暖色像素感，適合活動主視覺",
        "setupWizardThemeCinemaDesc": "低飽和金色字幕感，適合論壇",
    }.items():
        assert zh[key] == value, key

    js = _strip_comments(_read("server/static/js/admin-setup-wizard.js"))
    assert '{ id: "server"' in js and '{ id: "theme"' in js
    assert '{ id: "moderation"' in js and '{ id: "done"' in js
    assert '"display"' not in js and "displayRules" not in js
    assert 'SETUP_THEME_ORDER = ["default", "neon", "retro", "cinema"]' in js
    # 全大寫英文（品牌副標的版本代號、欄位下方的第二行、摘要欄名）一併退場
    for gone in (
        "v5 YELLOW",
        "SERVER NAME",
        "PUBLIC URL",
        "DISPLAY RULES",
        "admin-setup-step-kicker",
    ):
        assert gone not in js, gone


def test_session_detail_matches_g2(zh):
    """設計稿 10 · G2：頁首（‹ 紀錄與匯出／場次名／時間／重播＋匯出）、KPI 四格、
    搜尋＋「全部／被擋下 N」分段、訊息表（時間戳／顏色點／內文／暱稱）。

    被擋下的那幾列淡紅底、內文刪除線、右側標出是哪條規則擋的。這需要被擋的
    彈幕真的有留下紀錄——在這之前它們直接消失，主持人事後查不到自己擋掉了
    什麼，`/admin/search` 讀的 `r.get("status")` 也永遠是預設值。

    退場的：回放控制列（標籤自己寫著「(VISUAL ONLY)」，四顆倍速鈕點了只會換
    is-active）、右側 stats rail、熱門關鍵字卡。密度時間軸與標記收進摺疊區——
    稿上沒有，但標記有後端與測試，拿掉唯一入口等於廢掉功能。
    """
    assert zh["sessionDetailStatPeak"] == "每分鐘高峰"
    assert zh["sessionDetailStatBlocked"] == "被擋下"
    assert zh["sessionDetailBlockedBy"] == "封鎖字「{rule}」"
    assert zh["sessionDetailSearchPlaceholder"] == "搜尋這場的訊息"

    js = _strip_comments(_read("server/static/js/admin-session-detail.js"))
    assert "admin-sd-kpis" in js and 'data-sd-stat="peak"' in js
    assert "data-sd-search" in js and "data-sd-filter" in js
    assert "is-blocked" in js and "admin-sd-msg-rule" in js
    for gone in (
        "admin-sd-speed-chip",
        "data-sd-playback",
        "_renderKeywords",
        "admin-sd-rail",
        "admin-sd-kv",
    ):
        assert gone not in js, gone

    # 被擋的彈幕要有紀錄，而且記得住是哪條規則擋的
    api = _read("server/routes/api.py")
    assert "blocked_by=blocked_keyword" in api
    assert 'blocked_by="ban"' in api
    history = _read("server/services/history.py")
    assert '"status": danmu_data.get("status") or "shown"' in history
    assert '"blockedBy": danmu_data.get("blockedBy") or ""' in history
    # 「訊息」算真的播出去的，被擋的另外算一欄
    hist_routes = _read("server/routes/admin/history.py")
    assert '"msg_count": len(records) - blocked' in hist_routes


def test_desktop_update_dialog_waits_for_the_display_to_close(electron_zh):
    """設計稿 10 · S7：更新已下載——**顯示中時不打斷；關閉顯示層後才提示**。

    主持人正在台上放彈幕的時候，一個「要不要重新啟動」的對話框是最糟的打斷
    ——重新啟動就是把大螢幕關掉。原本下載完成直接彈 toast，不管當下在不在
    放彈幕。
    """
    assert electron_zh["updateReadyTitle"] == "Danmu Fire {v} 已準備好"
    assert "約需 10 秒" in electron_zh["updateReadyBody"]
    assert "設定與伺服器位址都會保留" in electron_zh["updateReadyBody"]
    assert electron_zh["updateReadyRestart"] == "重新啟動並更新"
    assert electron_zh["updateReadyLater"] == "下次關閉時再更新"

    js = _strip_comments(_read("danmu-desktop/renderer-modules/update-status.js"))
    assert "_promptWhenOverlayIdle" in js
    assert "OverlayControl" in js and "isRunning" in js
    assert 'data-update-dialog="install"' in js
    assert 'data-update-dialog="later"' in js


def test_onboarding_tour_is_three_bubbles_pointing_at_real_targets(zh):
    """設計稿 10 · G1：3 步氣泡，指向控制台上真的存在的東西。

    原本是 5 步，其中 3 步在教工具（⌘K／Fire Token／通知中心）——第一次
    開這個頁面的人還沒有 webhook 會失敗，也還沒有東西要 POST 進來。稿上
    收斂成「把場開起來」的最短路徑：顯示層 → 觀眾怎麼進來 → 遇到不當內容。
    """
    assert zh["obStep1Title"] == "先讓大螢幕連上"
    assert "這張卡就會變綠" in zh["obStep1Body"]
    # 底部進度行的三個短標籤
    assert zh["obStep1Label"] == "顯示層"
    assert zh["obStep2Label"] == "觀眾怎麼進來"
    assert zh["obStep3Label"] == "遇到不當內容"
    # 按鈕只寫動詞，不帶箭頭／勾勾（設計稿 14 詞彙表）
    assert zh["obSkip"] == "略過導覽"
    assert zh["obNext"] == "下一步"
    assert zh["obDone"] == "完成"
    for gone in ("obStep4Title", "obStep5Title", "obPrev"):
        assert gone not in zh, gone

    js = _strip_comments(_read("server/static/js/admin-onboarding.js"))
    # 遮罩＝聚光燈自己的外陰影，不再手算 clip-path 頂點
    assert "clip-path" not in js
    assert "admin-ob-spot" in js and "admin-ob-bubble" in js
    # 三個目標都是控制台上實際存在的選擇器
    assert ".admin-cockpit-overlay" in js
    assert ".admin-cockpit-stats-actions" in js
    assert "#sec-live-feed" in js
    # 步驟數就是 3
    assert js.count("titleKey:") == 3

    css = _read("server/static/css/style.css")
    assert "width: 360px;" in css.split(".admin-ob-bubble {")[1].split("}")[0]
    assert "border-radius: var(--radius-xl);" in css.split(".admin-ob-bubble {")[1].split("}")[0]
    # 打洞：4px 白圈 + 9999px 遮罩
    spot = css.split(".admin-ob-spot {")[1].split("}")[0]
    assert "0 0 0 4px var(--color-bg-base)" in spot
    assert "0 0 0 9999px var(--color-overlay-soft)" in spot
    tokens = _read("shared/tokens.css")
    assert "--color-overlay-soft: light-dark(rgba(15, 23, 42, 0.35)" in tokens


def test_viewer_emoji_more_actually_opens_the_panel(zh):
    """設計稿 10 · V2：快捷列第 6 格是「更多」，開的是這場的自訂表情面板。

    在這之前那顆鈕寫著 `☺`、aria-label 是英文的 "Toggle emoji picker"，
    而且**沒有綁任何 handler**——`/emojis` 抓回來了、格子也填好了，就是打
    不開。設計稿 14 的詞彙表另外要求按鈕只寫動詞、不放圖示符號。
    """
    assert zh["viewerEmojiMore"] == "更多"
    assert zh["viewerEmojiPanelTitle"] == "表情"
    assert zh["viewerEmojiPanelClose"] == "收起"
    assert zh["viewerEmojiPanelEmpty"] == "這場還沒有自訂表情"

    html = _read("server/templates/index.html")
    assert 'data-i18n="viewerEmojiMore"' in html
    assert 'aria-controls="emojiPopover"' in html
    assert "viewer-emoji-panel-grid" in html
    assert "☺" not in html, "圖示符號按鈕（設計稿 14 詞彙表）"
    assert "viewer-emoji-popover" not in html

    js = _strip_comments(_read("server/static/js/main.js"))
    assert "setEmojiPanel" in js
    assert 'emojiToggle.addEventListener("click"' in js
    assert "viewer-emoji-panel-item" in js
    # 空狀態／失敗都要走 i18n，不能是寫死的英文
    assert "No emojis available" not in js
    assert "Failed to load emojis" not in js
    assert 'ServerI18n.t("viewerEmojiPanelEmpty")' in js

    css = _read("server/static/css/viewer-v2.css")
    tile = css.split(".viewer-emoji-panel-item{")[1].split("}")[0]
    assert "width: 44px;" in tile and "border-radius: var(--radius-lg);" in tile
    # 輸入框聚焦：1px 主色框 ＋ 3px 光暈
    focus = css.split(".viewer-sendbar-pill:focus-within{")[1].split("}")[0]
    assert "border-color: var(--color-accent);" in focus
    assert "0 0 0 3px color-mix(in srgb, var(--color-accent) 15%, transparent)" in focus


def test_stage_safe_area_and_stroke_have_an_admin_entry(zh):
    """設計稿 16 · OS1／OS2：Admin › 顯示層 要有安全區與描邊這兩列。

    顯示層那半 2026-08 就寫好了——`child.css` 的 `--overlay-safe`、
    `stage-luminance.js` 的 `setForced`——但**沒有任何東西會去設它們**：
    安全區永遠停在寫死的 5%，描邊模式的入口不存在。
    """
    assert zh["dlSafeArea"] == "投影安全區"
    assert "2–5%" in zh["dlSafeAreaHint"]
    assert zh["dlStrokeAlways"] == "總是描邊"

    js = _strip_comments(_read("server/static/js/admin-display.js"))
    assert 'data-dl-seg="safe_area"' in js
    assert 'data-dl-seg="stroke_mode"' in js
    assert 'data-dl-opt="8"' in js and 'data-dl-opt="always"' in js

    # 服務層：三檔列舉 + 三種模式
    svc = _read("server/services/display_layer.py")
    assert "_SAFE_AREA_CHOICES = (0, 5, 8)" in svc
    assert '_STROKE_MODES = ("auto", "always", "never")' in svc

    # 兩個顯示層都要接上——OBS 的 overlay.js 與 Electron 的 display-layer.js
    obs = _strip_comments(_read("server/static/js/overlay.js"))
    assert "--overlay-safe" in obs and "insetArea" in obs
    assert 'strokeMode === "always"' in obs
    el = _strip_comments(_read("danmu-desktop/renderer-modules/display-layer.js"))
    assert "OverlayDisplayLayer" in el and "StageLuminance" in el
    ws = _strip_comments(_read("danmu-desktop/renderer-modules/overlay-ws.js"))
    assert 'data.type === "display_layer"' in ws
    # 初始值由 server 在 client 註冊完成當下補推——child.html 的 CSP 是
    # `connect-src ws: wss:`，overlay 自己 fetch /display-layer 出不去。
    flask_ws = _read("server/ws/flask_ws.py")
    assert '"type": "display_layer"' in flask_ws
    assert "display_layer.get_state()" in flask_ws
    assert "fetchInitial" not in _read("danmu-desktop/renderer-modules/display-layer.js")

    # 描邊的兩份 CSS 共用同一組 token——同一場活動的兩個顯示層不能有兩種字
    for path in ("server/static/css/overlay.css", "danmu-desktop/child.css"):
        css = _read(path)
        assert "-webkit-text-stroke: 1.5px var(--stage-stroke-ink);" in css, path
        assert "paint-order: stroke fill;" in css, path


def test_assets_is_four_segments_with_counts(zh):
    """設計稿 08 · T2：素材＝`表情 12 / 貼圖 3 包 / 字型 2 / 音效 4` 四段。

    「總覽」分頁退場：那頁自己寫著「上傳與編輯仍在各自頁面」「素材庫只負責
    總覽」——每一張卡都是連到別頁的連結，唯一獨有的資訊是各類的數量，而
    數量現在就印在分段標籤上。
    """
    tabs = _strip_comments(_read("server/static/js/admin-tabs.js"))
    assert 'defaultTab: "emojis"' in tabs
    assert "tabAssetsOverview" not in tabs
    assert "setTabCount" in tabs and "admin-tabs-btn-count" in tabs
    # 四個分頁各自回報數量
    assert 'setTabCount?.("assets", "emojis"' in _strip_comments(
        _read("server/static/js/admin-emojis.js")
    )
    assert 'setTabCount?.("assets", "fonts"' in _strip_comments(
        _read("server/static/js/admin-fonts.js")
    )
    assert 'setTabCount?.("assets", "sounds"' in _strip_comments(
        _read("server/static/js/admin-sounds.js")
    )
    assert '"assets", "stickers"' in _strip_comments(_read("server/static/js/admin-stickers.js"))
    assert zh["tabCountPacks"] == "{n} 包"

    admin = _strip_comments(_read("server/static/js/admin.js"))
    assert "sec-assets-overview" not in admin
    assert not (REPO / "server/static/js/admin-assets.js").exists(), "admin-assets.js 應已退場"

    # 字型分段：CDN 交付卡與寫死 38% 的子集化比例退場
    fonts = _strip_comments(_read("server/static/js/admin-fonts.js"))
    for gone in ("CDN DELIVERY", "fontsCdnHit", "P95 TTFB", "fontsSubsetBar", "38%"):
        assert gone not in fonts, gone
    assert "fontsSubsetHowto" in fonts
    # 三個分段的全大寫英文與 ＋ 圖示按鈕退場（設計稿 14 詞彙表）
    for src, gone in (
        (fonts, "FAMILY"),
        (fonts, "FOUNDRY"),
        (_strip_comments(_read("server/static/js/admin-sounds.js")), "SOUND LIBRARY"),
        (_strip_comments(_read("server/static/js/admin-sounds.js")), "MP3/OGG/WAV"),
        (_strip_comments(_read("server/static/js/admin-stickers.js")), "GIF/PNG/WEBP"),
    ):
        assert gone not in src, gone
    assert zh["mlPacks"] == "貼圖包"
    assert "顯示層" in zh["soundsPageNote"] and "Desktop" not in zh["soundsPageNote"]


def test_theme_detail_group_and_new_theme_exist(zh):
    """設計稿 08 · T1：卡片下方的「<主題> · 細部設定」＋頁首右側「新主題」。

    主題檔是 repo 裡的 YAML，改它等於改程式碼——所以細部設定另存一層覆寫，
    由 `themes.get_active()` 疊上去。`/fire` 只呼叫 get_active()，覆寫因此
    自動吃到每一則彈幕上，不必在送出路徑上再開一個分支。
    """
    assert zh["themeDetailGroup"] == "{name} · 細部設定"
    assert zh["themeDetailStroke"] == "描邊"
    assert zh["themeStrokeNone"] == "無" and zh["themeStrokeThick"] == "粗"
    assert zh["themeShadowSoft"] == "柔和" and zh["themeShadowStrong"] == "強烈"
    assert zh["themeDetailColor"] == "觀眾預設顏色"
    assert zh["themesNewBtn"] == "新主題"

    admin = _strip_comments(_read("server/static/js/admin.js"))
    assert 'data-theme-seg="stroke"' in admin and 'data-theme-seg="shadow"' in admin
    assert 'data-theme-ov="color"' in admin and 'id="themeOvFont"' in admin
    assert 'id="themeNewBtn"' in admin
    # 頁首動作插槽的規矩：那顆鈕要自己綁 listener（style-contract §5.4d）
    themes_js = _strip_comments(_read("server/static/js/admin-themes.js"))
    assert 'getElementById("themeNewBtn")' in themes_js

    svc = _read("server/services/theme_overrides.py")
    assert 'STROKE_MODES = ("none", "thin", "thick")' in svc
    assert 'SHADOW_MODES = ("none", "soft", "strong")' in svc
    # 唯一的合併點在 get_active()
    themes_svc = _read("server/services/themes.py")
    assert "theme_overrides.apply_to(theme)" in themes_svc
    # 使用者主題寫在 runtime/，不是 repo 的 server/themes/
    assert '"runtime", "themes"' in themes_svc
    assert "def create_user_theme" in themes_svc and "def delete_user_theme" in themes_svc


def test_a11y_focus_lang_and_live_region(zh):
    """設計稿 17：焦點環／`<html lang>`／訊息流朗讀／高對比／色盲替代。

    這四件在 2026-09-07 之前都是缺的，而且都不是「看起來怪怪的」那種——
    是鍵盤使用者看不到焦點在哪、螢幕閱讀器不會唸出新訊息、Windows 高對比
    下卡片糊成一片、色覺不同的人看到六個一樣的灰點。
    """
    tokens = _read("shared/tokens.css")
    # 深色臂刻意是白色：藍底上再畫一圈藍框等於沒畫
    assert "--focus: light-dark(#0284c7, #ffffff);" in tokens

    hud = _read("shared/hud.css")
    # 全站唯一一種焦點環，放在四個表面都載得到的 hud.css
    assert ":focus-visible {\n  outline: 2px solid var(--focus);\n  outline-offset: 3px;\n}" in hud
    assert "@media (forced-colors: active)" in hud
    assert "forced-color-adjust: none;" in hud
    # style.css 不該再有自己那條全域規則（原本用 --color-primary）
    style = _strip_comments(_read("server/static/css/style.css"))
    assert "*:focus-visible" not in style

    # <html lang> 跟隨介面語言——稿上直接把「固定 en」標成 bug
    for tpl in ("server/templates/admin.html", "server/templates/overlay.html"):
        assert 'lang="en"' not in _read(tpl), tpl
    assert 'lang="zh-Hant"' in _read("danmu-desktop/child.html")
    for gen in ("server/scripts/build-i18n.js", "danmu-desktop/scripts/build-i18n.js"):
        assert "zh-Hant" in _read(gen), gen

    # 訊息流要讓螢幕閱讀器唸出新訊息，暫停時停掉
    feed = _strip_comments(_read("server/static/js/admin-live-feed.js"))
    assert 'role="log"' in feed and 'aria-live="polite"' in feed
    assert 'aria-relevant="additions"' in feed
    assert 'setAttribute("aria-live", paused ? "off" : "polite")' in feed

    # 顏色改「色點＋名稱」磚，選中加 ✓ 與 2px 粗框
    html = _read("server/templates/index.html")
    assert "viewer-swatch-dot" in html and "viewer-swatch-name" in html
    assert 'data-i18n-aria="swatchAriaWhite"' in html
    assert zh["swatchAriaWhite"] == "顏色：白"
    viewer_css = _read("server/static/css/viewer-v2.css")
    assert "min-height: 44px;" in viewer_css.split(".viewer-swatch-preset{")[1].split("}")[0]
    assert '.viewer-swatch-preset.is-active::after{\n  content: "✓";' in viewer_css


def test_replay_controls_are_global_while_a_replay_runs(zh):
    """設計稿 08 · H1：重播進行中的控制項要在**全域**，不能住在紀錄頁裡。

    重播一開始主持人就會離開「紀錄與匯出」——去控制台、去顯示層、去審核。
    暫停／停止留在那一頁等於離開之後沒地方可以停。那也是「重播」分頁一直
    拿不掉的唯一理由。
    """
    assert zh["replayBarLabel"] == "重播進行中"

    bar = _strip_comments(_read("server/static/js/admin-replay-bar.js"))
    for wanted in (
        "replayPauseBtn",
        "replayResumeBtn",
        "replayStopBtn",
        "replayProgress",
        "replayRecordingIndicator",
    ):
        assert wanted in bar, wanted

    # 紀錄頁只留「需要先選訊息」的那幾顆
    admin = _strip_comments(_read("server/static/js/admin.js"))
    toolbar = admin.split('id="replayToolbar"')[1].split("</div>")[0]
    assert "replayStartBtn" in toolbar
    for gone in ("replayPauseBtn", "replayResumeBtn", "replayStopBtn"):
        assert gone not in toolbar, gone
    # 按鈕只寫動詞（設計稿 14）
    for glyph in ("▶ ", "⏸ ", "⏹ ", "⏺ "):
        assert glyph not in toolbar, glyph

    # 「startBtn 不在就整個 return」會讓離開紀錄頁之後暫停／停止永遠不出現
    ctrl = _strip_comments(_read("server/static/js/admin-replay-controls.js"))
    assert "if (!startBtn) return;" not in ctrl
    assert "AdminReplayBar" in ctrl


def test_no_uninterpolated_template_placeholder_reaches_the_screen():
    """單引號字串裡的 ${...} 不會被插值——使用者看到的是字面上的
    `${ServerI18n.t("mlSpeed")}`。2026-09-07 在畫面上抓到五處。

    這裡釘住那五行改成字串串接了；全面掃描交給 jest 那支用 acorn 真的
    parse 過一次的測試——heuristic 字串比對擋不住巢狀 template literal，
    試過一次誤報十幾處。
    """
    replay = _read("server/static/js/admin-replay.js")
    for key in ("mlSession", "mlSpeed", "mlMessages"):
        assert ('+ ServerI18n.t("%s") +' % key) in replay, key
    display = _read("server/static/js/admin-display.js")
    assert '+ ServerI18n.t("lbCurrentSession") +' in display
    sched = _read("server/static/js/admin-scheduler.js")
    assert 'escapeHTML(ServerI18n.t("schJobsHeadMsg"))' in sched
    # 順手換掉的全大寫英文欄名（只看渲染出去的那幾個 span，
    # REFRESH_INTERVAL 之類的識別字不算）
    for gone in ("<span>INTERVAL<", "<span>SENT<", "<span>REPEAT<", ">ACTIONS<"):
        assert gone not in _strip_comments(sched), gone


def test_timeline_export_lives_on_the_backup_page(zh):
    """設計稿 08 · H1：時間軸匯出從「紀錄與匯出 › 重播」搬到「備份與還原」。

    稿上寫「依小時的整批匯出收進場次的匯出面板」，但那在功能上不成立——場次
    面板是**單一場次**的 CSV/JSON/SRT，給不了「近 7 天、跨場次、只要投票」。
    照字面刪掉會少一個真的能力，所以改成搬家：「把資料整批倒出來」是備份的
    事，而「全部清除」本來就住那一頁。
    """
    js = _strip_comments(_read("server/static/js/admin-history-v2.js"))
    assert 'var SECTION_ID = "sec-timeline-export";' in js
    assert 'getElementById("admin-backup-v2-page")' in js
    # 改用 sec- 前綴之後可見性交給 shell，模組不再自己算一份 route guard
    assert "_applyRouteGuard" not in js

    admin = _strip_comments(_read("server/static/js/admin.js"))
    assert '"admin-backup-v2-page", "sec-timeline-export"' in admin
    # 紀錄路由與重播分頁都放掉它
    assert "history-v2-section" not in admin
    assert "history-v2-section" not in _strip_comments(_read("server/static/js/admin-tabs.js"))

    # 備份頁原本那列「彈幕紀錄」匯出退場——搬進來的精靈是它的嚴格超集
    backup = _strip_comments(_read("server/static/js/admin-backup.js"))
    for gone in ("bk2-hist-hours", "bk2-hist-format", "bk2-hist-download", "downloadHistory"):
        assert gone not in backup, gone
    for orphan in ("backupSecHistory", "backupRangeLast24h", "backupFormatSrt"):
        assert orphan not in zh, orphan

    # 按鈕只寫動詞（設計稿 14）
    assert zh["historyV2GoButton"] == "產生並下載"

    # 「全部清除」在備份頁與 ⌘K 都有，所以紀錄頁那顆拿掉不會少東西
    assert "/admin/history/clear" in backup
    assert "/admin/history/clear" in _strip_comments(
        _read("server/static/js/admin-command-palette.js")
    )
