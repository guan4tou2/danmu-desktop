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
