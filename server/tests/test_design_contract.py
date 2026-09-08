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

    # 全站唯一一種焦點環。2026-09-07 設計稿 14 §4 步驟 2 把 hud.css 併掉之後，
    # tokens.css 是五個表面唯一都載得到的檔案（overlay.html 只載 tokens → overlay）。
    assert (
        ":focus-visible {\n  outline: 2px solid var(--focus);\n  outline-offset: 3px;\n}" in tokens
    )
    assert "@media (forced-colors: active)" in tokens
    # forced-colors 的元件規則各自留在擁有那些元件的檔案裡
    for css in ("server/static/css/style.css", "server/static/css/viewer-v2.css"):
        assert "forced-color-adjust: none;" in _read(css), css
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
    """設計稿 08 · H1：重播進行中的控制項在**全域**，且「重播」分頁已退場。

    稿上的「紀錄與匯出」只有四段（場次／觀眾／搜尋／操作紀錄）。拆掉重播
    分頁的前置條件依序解掉了：進行中的暫停／停止搬成全域 `.admin-replay-bar`、
    時間軸匯出搬到備份頁、「全部清除」確認在備份頁與 ⌘K 都有、整場重播在
    場次的匯出面板。

    刻意放棄的是「重播個別訊息」那一類（勾選重播／單則 re-fire）以及錄製
    回放與 JSON 匯出——稿上沒畫，2026-09-07 使用者裁定照稿走。
    """
    assert zh["replayBarLabel"] == "重播進行中"

    bar = _strip_comments(_read("server/static/js/admin-replay-bar.js"))
    for wanted in ("replayPauseBtn", "replayResumeBtn", "replayStopBtn", "replayProgress"):
        assert wanted in bar, wanted
    assert "replayRecordingIndicator" not in bar

    tabs = _strip_comments(_read("server/static/js/admin-tabs.js"))
    assert '{ slug: "replay"' not in tabs
    admin = _strip_comments(_read("server/static/js/admin.js"))
    for gone in ("sec-history-tabs", "sec-history-list", '"sec-history"', "replayStartBtn"):
        assert gone not in admin, gone
    assert not (REPO / "server/static/js/admin-replay.js").exists()
    assert not (REPO / "server/static/js/replay-recorder.js").exists()

    # 唯一的啟動點只發 toast，所以控制列要自己認領正在跑的重播
    ctrl = _strip_comments(_read("server/static/js/admin-replay-controls.js"))
    assert "_adoptRunningReplay" in ctrl
    assert "notifyStarted" in ctrl
    assert "notifyStarted" in _strip_comments(_read("server/static/js/admin-sessions.js"))
    # 早退會讓離開紀錄頁之後暫停／停止永遠不出現
    assert "if (!startBtn) return;" not in ctrl


def test_no_uninterpolated_template_placeholder_reaches_the_screen():
    """單引號字串裡的 ${...} 不會被插值——使用者看到的是字面上的
    `${ServerI18n.t("mlSpeed")}`。2026-09-07 在畫面上抓到五處。

    這裡釘住那五行改成字串串接了；全面掃描交給 jest 那支用 acorn 真的
    parse 過一次的測試——heuristic 字串比對擋不住巢狀 template literal，
    試過一次誤報十幾處。
    """
    # admin-replay.js 的三處隨該檔一起退場（設計稿 08 · H1 刪掉重播分頁），
    # 剩下這兩處。全樹掃描交給 jest 那支 acorn 測試。
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


def test_blacklist_still_boots_after_the_replay_tab_removal():
    """刪掉「重播」分頁時差點連黑名單的 boot 一起刪掉。

    `admin-history.js` 的 `admin-panel-rendered` handler 原本同時做四件事
    （fetchBlacklist / fetchDanmuHistory / _initHistoryEventListeners /
    _initHistoryTabs），而它夾在要移除的 `_initHistoryTabs` 定義後面——整段
    刪掉之後，黑名單的新增／移除按鈕一顆 listener 都沒綁：畫面看起來完全正常，
    按了沒反應，也沒有任何錯誤訊息。CI 的 test_browser_admin 兩條黑名單測試
    抓到（本機跑不動 browser 模組，見 docs/agent-ops）。
    """
    js = _strip_comments(_read("server/static/js/admin-history.js"))
    assert 'document.addEventListener("admin-panel-rendered"' in js
    assert "fetchBlacklist();" in js
    assert "_initHistoryEventListeners();" in js
    # 歷史那半確實走了，不是靠留著它才通過
    assert "fetchDanmuHistory" not in js
    assert "_initHistoryTabs" not in js


def test_hud_css_is_gone_and_nothing_links_it():
    """設計稿 14 §3／§4 步驟 2：shared/hud.css 整檔刪除，內容分家到各自的擁有者。

    刪的理由不是「檔案太大」，是**歸屬錯了**：5584 行裡有 4334 行只有 admin
    會用，卻被觀眾頁、大螢幕、Electron 兩個視窗一起載進去。分家之後：

      * 全域基底（焦點環、prefers-reduced-motion 保底）→ shared/tokens.css，
        因為那是五個表面唯一都載得到的檔案；
      * .viewer-offline-* → viewer-v2.css；.overlay-connecting* → overlay.css；
      * 其餘 admin（含 8 個 @keyframes dme-*）→ style.css；
      * 936 行沒有任何標記引用的死規則（broadcast 生命週期、dash-telem、
        中英對照 -en 類、已刪的重播頁）直接刪掉。

    `@keyframes dme-*` 一度被判成死的——理由是 .dme 特效檔各自帶 keyframes、
    由 effects.py 內插後在執行期注入。那對大螢幕與 Electron 成立，對 admin
    特效頁**不成立**：`admin-effects-mgmt.js` 的執行期注入只走使用者自訂的
    .dme，八個內建效果的預覽卡直接吃 CSS 裡這份靜態的。刪掉之後 blink 的
    預覽凍在 opacity:1、rainbow 凍在紅色——是同頁 A/B 量到才發現的。
    """
    root = Path(__file__).resolve().parents[2]
    for gone in ("shared/hud.css", "server/static/css/hud.css", "danmu-desktop/hud.css"):
        assert not (root / gone).exists(), f"{gone} 復活了"

    for tpl in (
        "server/templates/admin.html",
        "server/templates/index.html",
        "server/templates/overlay.html",
        "server/templates/errors/_layout.html",
        "danmu-desktop/index.html",
        "danmu-desktop/child.html",
    ):
        assert "hud.css" not in _read(tpl), tpl

    # 分家後各檔案確實接到自己那份
    assert ".viewer-offline-card" in _read("server/static/css/viewer-v2.css")
    assert ".overlay-connecting" in _read("server/static/css/overlay.css")
    assert ".admin-ui-group-row" in _read("server/static/css/style.css")

    # 死規則沒有跟著搬過去
    style = _read("server/static/css/style.css")
    for zombie in (
        "admin-broadcast-state-strip",
        "admin-dash-telem-bars",
        "admin-replay-histogram",
        "admin-ui-page-kicker",
        "hud-panel",
        "hud-scanline",
    ):
        assert zombie not in style, zombie

    # 內建特效預覽卡要的靜態 keyframes 有留下來（見 docstring）
    assert style.count("@keyframes dme-") == 8

    # `.admin-replay-bar` 是這次唯一的視覺變化，而且是修好一個 bug：hud.css
    # 載在 style.css 之後，已刪重播頁的直方圖長條一直在蓋掉同名的「全域重播
    # 列」——把後者的底色重設成透明。搬移時只留活的那一條。
    assert "z-index: 9070" in style  # 全域重播列（sticky）
    assert "min-width: 3px" not in style  # 直方圖長條


def test_readme_banner_and_social_preview():
    """設計稿 13：README 頂圖與 social preview。

    兩張都是從設計稿自己的 HTML（`13 GitHub Banner.dc.html`）以 2× 重算匯出，
    不是用設計專案附的那份 PNG——附的那份跟它自己的版型對不起來：手機 mock
    疊到投影幕上、把三道彈幕中間那道整個蓋掉，social 版則掉了下方那條彈幕。
    稿上明講「匯出時彈幕停格於最佳位置」，那份沒有做到。

    橫幅放在 H1 **之上**（稿上指定），深底在 GitHub 淺色模式對比最好，
    不另出淺色版。social preview 的檔案放在 docs/ 供查找，但實際生效要在
    GitHub repo Settings › Social preview 手動上傳——那不是 repo 檔案。
    """
    root = Path(__file__).resolve().parents[2]
    banner = root / "docs" / "banner.png"
    social = root / "docs" / "social-preview.png"
    assert banner.exists() and social.exists()
    # 2× 匯出尺寸：1200×400 與 1280×640 的兩倍
    assert banner.read_bytes()[16:24] == (2400).to_bytes(4, "big") + (800).to_bytes(4, "big")
    assert social.read_bytes()[16:24] == (2560).to_bytes(4, "big") + (1280).to_bytes(4, "big")

    for readme in ("README.md", "README-CH.md"):
        text = _read(readme)
        head = text.split("\n# ", 1)[0]
        assert 'src="docs/banner.png"' in head, f"{readme}：橫幅要在 H1 之上"
        assert 'alt="' in head, f"{readme}：橫幅要有 alt"


def test_dead_css_sweep_kept_the_dynamically_built_class_names():
    """2026-09-07 死碼清理：219 個沒有任何標記引用的 class 從 style.css 移除。

    這條測試釘的不是「哪些被刪了」（那是 2159 行的清單），而是**判死時
    差點誤刪的那一類**——JS 不是只用字面值寫 class 名：

      * `admin-quick-action.js`：`INLINE_BAR_CLASS + "-text"`
      * `admin-fingerprints.js`：`"admin-fp-state" + variant`
      * `admin-hud-modal.js`：`` `admin-hud-modal--${severity}` ``

    最後那個是模板字串，第一版的掃描只還原了 `"字串" +` 的串接，沒還原
    反引號，`--danger` / `--info` / `--success` 三個差點被當成死的刪掉。
    掃描前先把這三種寫法還原成完整名字，才有資格說某個 class 沒人用。

    另外「子字串比對」會反向出錯：`grep -F "hud-corners"` 會被
    `hud-corners-auto` 命中，於是 `.hud-corners` 被誤判成活的留了下來——
    那正是這次清理要收的尾。判死一律用邊界比對。
    """
    css = _read("server/static/css/style.css")
    # 動態組出來的名字必須留著
    for alive in (
        ".admin-hud-modal--danger",
        ".admin-hud-modal--info",
        ".admin-hud-modal--success",
        ".admin-quick-action-bar-text",
        ".admin-quick-action-bar-undo",
        ".admin-fp-state",
    ):
        assert alive in css, alive

    # 子字串誤判留下來的那族已經清掉。`hud-corners-auto` 當時還留著是因為
    # admin.html 的骨架載入態在用；2026-09-07 依設計稿 11／14 把骨架那圈 HUD
    # 角標與「DANMU · ADMIN · BOOT」一起拿掉之後，它也沒有消費者了。
    for gone in (
        ".hud-corners",
        ".hud-corner[",
        ".hud-corners-auto",
        ".hud-label",
        ".hud-hero-title",
    ):
        assert gone not in css, gone

    # 各族被改寫後的舊版殘骸不該再出現，新版必須還在
    for gone, kept in (
        ("admin-msgd-bubble", "admin-msgd-v4__body"),  # 訊息抽屜改寫
        ("admin-bancfm-modal", "admin-bancfm-dchip"),  # 外殼改由 HudConfirm 提供
        ("admin-err__subtitle", "admin-err__title"),  # 錯誤頁版型收斂成四段
        ("admin-setup-dropzone", "admin-setup-theme-card"),  # 精靈移除 logo/語言/密碼步驟
        ("hud-console-line", "hud-console-body"),  # 篩選頁 log 改用 admin-filter-log-row
    ):
        assert gone not in css, gone
        assert kept in css, kept


def test_brand_lockup_and_favicon_match_spec_11():
    """設計稿 11：字標只出現在四處，Web favicon 用符號 SVG。

    2026-09-07 跟設計專案逐檔對過之後補上的四個缺口——這四個都是「檔案早就
    在 repo 裡，只是沒有人引用它」那一類，畫面看起來正常，所以先前沒被發現：

    1. `server/static/favicon.svg`（＝稿的 `assets/brand/app-icon-small.svg`，
       圖形逐字相同）躺在那裡，但三個模板只連 `.ico`。錯誤頁連 `.ico` 都沒有。
    2. 登入頁的**鎖定態**（P2-4）用 `<h1 class="hud-hero-title">Danmu Fire</h1>`
       排活字，而不是跟正常登入卡同一張字標 SVG。`.hud-*` 在設計稿 14 §3 的
       刪除清單上。
    3. 桌面端首次啟動精靈放的是 app icon 64px；設計稿 04 · S1 的稿面與設計稿 11
       的「四處」清單都是**高 40 的字標**。
    4. Admin 骨架載入態掛著 `.hud-corners-auto` 角標與全大寫的
       「DANMU · ADMIN · BOOT」——設計稿 14 的文案規則明訂「不用全大寫」。

    字標一律是**外框化 SVG**（深淺各一張、CSS 擇一顯示），所以四個位置都不需要
    活字字體；`--font-brand` 與 `server/static/fonts/unbounded-800-latin.woff2`
    目前沒有任何 `@font-face` 或消費者，是刻意保留的規格殘留，不是漏接。
    """
    # 1 · favicon：三個模板都要有 SVG，.ico 留作 fallback
    for tpl in (
        "server/templates/admin.html",
        "server/templates/index.html",
        "server/templates/errors/_layout.html",
    ):
        html = _read(tpl)
        assert 'type="image/svg+xml"' in html and "favicon.svg" in html, tpl
        assert "favicon.ico" in html, tpl
    svg = _read("server/static/favicon.svg")
    assert 'rx="112"' in svg and "#38BDF8" in svg  # 符號本體，不是舊的螢幕圖

    # 2 · 鎖定態與 fallback 登入都改用字標 SVG，`hud-hero-title` 全站絕跡
    login = _read("server/static/js/admin-login.js")
    assert login.count("admin-login-wordmark") >= 4  # 正常卡 2 張 + 鎖定卡 2 張
    for js in ("server/static/js/admin-login.js", "server/static/js/admin.js"):
        assert "hud-hero-title" not in _read(js), js

    # 3 · 桌面端精靈用高 40 字標（540×96 的 viewBox 等比 → 寬 225）
    shell = _read("danmu-desktop/index.html")
    assert 'class="client-onboarding-wordmark is-on-dark"' in shell
    assert 'height="40"' in shell and 'width="225"' in shell
    assert "client-onboarding-icon" not in shell
    assert "height: 40px;" in _read("danmu-desktop/styles.css")

    # 4 · 骨架載入態不再有 HUD 角標與全大寫英文
    admin_html = _strip_comments(_read("server/templates/admin.html"))
    assert "hud-corners-auto" not in admin_html
    assert "DANMU · ADMIN · BOOT" not in admin_html
    assert "skeleton skeleton-title" in admin_html  # 骨架本身還在


def test_ui_status_replaces_the_ad_hoc_status_dots():
    """設計稿 14 §2／03「原則 4 · 狀態只有一個來源」：狀態＝色點＋文字。

    稿上把狀態 chip 收斂成一個 `.ui-status`，取代 `.hud-dot` / `.hud-label` /
    `.admin-lf-v4__statedot`（`.hud-label` 在 2026-09-07 的品牌那輪就沒消費者了）。
    重點不只是換名字：原本兩個呼叫端都是「自己畫一顆點、旁邊另外擺一個 span」，
    狀態要改兩個地方，點色與字色還可能各說各話。現在點是 `::before`（不進無障礙
    樹，帶資訊的是字），換一個 `is-*` 就同時換掉點色、字色與底色。

    **字色刻意不是純 `--color-ink-*`**：ink 層是對著「沒有淡底的卡片」調的，
    淺色臂只剩約 0.4 的餘裕，疊上稿上那層 14% 同色薄膜就掉到 4.25/4.33，低於
    設計稿 03 自己訂的「12–13px 文字對比 ≥ 4.5:1」。往 `--color-text-primary`
    混 15% 之後六個組合最低 4.89——而且兩臂方向自動正確（淺色時主文字近黑、
    深色時近白），不必寫 theme 分支也不必引入新色。

    `.hud-status-dot` 於 2026-09-08 一併收掉，但**不是**改成 `.ui-status`：它五個
    用法沒有一個是狀態 chip。四個是純裝飾的發光脈動點（篩選面板標題 ×2、動畫
    效果卡、效果檢視器）——檢視器那顆連狀態都是冗餘的，選中效果的同一瞬間標題
    從「—」變成效果名、兩顆按鈕也解鎖，只有點是「顏色單獨承載意義」。第五個是
    篩選規則列的**啟用開關**（外層 label 包 sr-only checkbox），改名成
    `.admin-filter-toggle-dot`，因為它是控制項不是指示器。
    """
    css = _read("server/static/css/style.css")

    # 元件本體：稿上的 32 高、8px 點、13px/600
    assert ".ui-status {" in css
    assert ".ui-status::before {" in css
    for want in ("height: 32px;", "width: 8px;", "font-size: var(--text-footnote);"):
        assert want in css, want
    for state in ("is-success", "is-warning", "is-danger"):
        assert f".ui-status.{state} {{" in css, state
    # 對比補償：三個訊號色都要混主文字色，不能退回純 ink
    assert css.count("85%, var(--color-text-primary))") == 3

    # 被取代的三個都不再有規則（`.hud-label` 早一輪就走了）
    for gone in (".hud-dot", ".admin-lf-v4__statedot", ".admin-lf-v4__statelabel", ".hud-label"):
        assert gone not in _strip_comments(css), gone

    # 兩個呼叫端改用元件，且不再自己塞點
    login = _strip_comments(_read("server/static/js/admin-login.js"))
    assert 'class="ui-status is-success"' in login
    assert "hud-dot" not in login
    feed = _strip_comments(_read("server/static/js/admin-live-feed.js"))
    assert 'class="ui-status is-success" data-lf-state' in feed
    assert "statedot" not in feed and "statelabel" not in feed
    # 暫停是警告不是錯誤
    assert '"ui-status is-warning" : "ui-status is-success"' in feed

    # 文案：狀態用「已／中／未」三態，不用全大寫（設計稿 14 · 文案規則）
    zh = json.loads(_read("server/static/locales/zh/translation.json"))
    assert zh["lfAutoScrollOn"] == "自動捲動中"
    assert "ON" not in zh["lfAutoScrollOn"]

    # `.hud-status-dot` 已全數收掉（見 docstring）；只剩篩選頁那顆改名的開關
    for js in ("admin-filters", "admin-effects-mgmt", "admin"):
        assert "hud-status-dot" not in _read(f"server/static/js/{js}.js"), js
    assert ".admin-filter-toggle-dot" in css
    assert ".hud-status-dot" not in _strip_comments(css)


def test_live_feed_bottom_line_matches_spec_06(zh):
    """設計稿 06 · §3：訊息流卡底是**一行**「自動捲動中 · 滑鼠停在訊息上可隱藏或封鎖」，
    並在移除清單裡明列 DENSITY 切換。

    原本卡底是 `0 TOTAL · 0.0 MSG/S` 兩個等寬計數器：寫死在 JS 的英文（沒進
    i18n）、全大寫（違反設計稿 14 文案規則）、用等寬字（設計稿 03 限定等寬只
    用在網址／識別碼／金鑰），而且數量在卡頭的分段控制上已經有了——同一件事
    講第二次。DENSITY 切換連標籤帶兩顆 chip 一起移除，列高改由稿指定。
    """
    js = _read("server/static/js/admin-live-feed.js")
    css = _read("server/static/css/style.css")

    # 卡底：狀態 chip ＋ 說明，沒有計數器
    assert 'ServerI18n.t("lfRowHint")' in js
    assert "admin-lf-v4__hint" in js and ".admin-lf-v4__hint" in css
    for gone in ("TOTAL", "MSG/S", "_currentRate", "_rateBuf", "_trackRate"):
        assert gone not in _strip_comments(js), gone

    # DENSITY 切換整組退場（JS、CSS、data 屬性都不留）
    for gone in ("DENSITY", "dchip", "data-density"):
        assert gone not in _strip_comments(js), gone
    for gone in (".admin-lf-v4__dchip", ".admin-lf-v4__density-label", "[data-density="):
        assert gone not in _strip_comments(css), gone

    # 四語都有新的說明文案，且沒有全大寫英文殘留
    assert zh["lfRowHint"] == "滑鼠停在訊息上可隱藏或封鎖"
    for lang in ("en", "ja", "ko"):
        d = json.loads(_read(f"server/static/locales/{lang}/translation.json"))
        assert d.get("lfRowHint"), lang


def test_hud_pulse_is_defined_once():
    """`@keyframes hud-pulse` 一度有兩份定義（style.css 自己一份、hud.css 併入時
    帶進來一份）。後者勝出，前者從來沒生效過——兩份的差別是 transform: scale，
    所以「哪一份在跑」肉眼看得出來，但沒有人會發現前面那份是死的。
    """
    css = _read("server/static/css/style.css")
    assert css.count("@keyframes hud-pulse {") == 1


def test_filter_rule_toggle_has_one_source_of_truth():
    """篩選規則列的啟用開關：唯一真相是那顆 sr-only checkbox。

    這條測試釘的是 2026-09-08 收 `.hud-status-dot` 時**實測點兩下才發現**的
    既有 bug：色點包在 `<label>` 裡，本來點它就會由瀏覽器切換 checkbox 並觸發
    `change`；但程式另外掛了一個 click 分支手動做 `cb.checked = !cb.checked`。
    事件處理器跑在預設行為**之前**，label 隨後又把 checkbox 翻回去——checkbox
    永遠停在 true，每次點都送出「停用」，**規則停用後再也點不回來**。而且視覺
    更新只寫在 click 分支裡，用鍵盤在 checkbox 上切換的人看到的色點永遠是舊的。

    修法是刪掉那個 click 分支，把視覺更新搬進 `change`——一個真相、鍵盤與滑鼠
    走同一條路。click 監聽只留刪除鈕。
    """
    js = _strip_comments(_read("server/static/js/admin-filters.js"))
    assert "cb.checked = !cb.checked" not in js, "手動翻 checkbox 會跟 label 的預設行為打架"
    # change 分支要同時負責送出與視覺
    change_start = js.index('rulesList.addEventListener("change"')
    change_body = js[change_start : js.index('rulesList.addEventListener("click"', change_start)]
    assert "toggleRule(cb.dataset.ruleId, cb.checked)" in change_body
    assert 'classList.toggle("is-on", cb.checked)' in change_body
    assert "style.opacity = cb.checked" in change_body


def test_overlay_idle_images_are_in_flow():
    """顯示層的 `img { position: absolute }` 是給彈幕內容的，不能打到入場畫面。

    2026-09-08 **實跑 Electron app** 才發現的既有 bug：`child.css` 有一條裸的
    `img { position: absolute }`（track-manager.js 用 createElement("img") 生出來
    的貼圖／表情要靠它定位在軌道上，那條規則比入場畫面早存在）。
    `.overlay-idle-wordmark` 只宣告了 display/width/height，**沒宣告 position**，
    所以那條全域規則生效——字標被絕對定位，直接疊在「掃 QR 或打開 / <網址>」
    上面。

    靜態測試看不到：要真的把顯示層開起來、再切到入場畫面才會出現，而
    `child.html` 用 http 伺服起來時 `#overlay-idle` 預設是隱藏的。

    修法把重設範圍寫在 `#overlay-idle` 而不是只修字標，之後往這個畫面加圖
    （贊助商標、第二個 QR…）也不會再踩。
    """
    css = _read("danmu-desktop/child.css")
    assert "#overlay-idle img" in css
    idx = css.index("#overlay-idle img")
    assert "position: static;" in css[idx : idx + 120]
    # 彈幕那條全域規則要留著，否則貼圖會掉出軌道
    assert "img{\n  position: absolute;" in css or "img {\n  position: absolute;" in css


def test_notifications_old_bookmark_opens_the_panel_on_cold_start():
    """`#/notifications` 是保留給舊書籤的路由——它沒有頁面，要把通知面板打開。

    2026-09-08 走訪全部 27 條 admin 路由時抓到：**直接開
    `/admin#/notifications` 只會看到一個空白頁**，載入後再切到這個 hash 反而
    正常。原因是 `_bind()`（裡面立刻檢查一次 hash）跑在 `init()`
    （`_mountBell()` 建面板 DOM）之前，而 `openPanel()` 開頭是
    `if (!panel) return`——**靜默**放棄。冷啟動壞、熱切換好，這種差異最容易漏。

    修法：把 hash 檢查抽成 `_openIfHashRequests()`，並在 `_mountBell()` 掛載
    成功後再呼叫一次。面板本來就是被 MutationObserver 重複掛載的（shell 會重繪
    topbar），所以掛載完成才是「可以開了」的正確時機。
    """
    js = _read("server/static/js/admin-notifications.js")
    assert "function _openIfHashRequests()" in js
    # 掛載完成後要補一次；只在 _bind() 檢查是不夠的
    mount = js[js.index("function _mountBell()") : js.index("function _bind()")]
    assert "_openIfHashRequests();" in mount, "掛載後沒有補檢查 hash"
    bind = js[js.index("function _bind()") :]
    assert 'window.addEventListener("hashchange", _openIfHashRequests)' in bind


# --- 設計稿 14 文案規則：按鈕用動詞、不加圖示符號 -------------------------

# 稿上點名的是 ▶ ■ ⚡ ⌫ ◱，實際 codebase 裡同一類（媒體控制／狀態勾叉／
# 方向箭頭當圖示用）的還有這些。→ 不在內：它是連結的方向提示，不是圖示。
BUTTON_GLYPHS = "▶■⚡⌫◱↓⏸⏹⏺⏭◾◐▣⊘✕✓↻⊗◼"

# ＋ 當「連接詞」用時保留（「4 選項＋圖片」），當「新增」圖示用時不行。
# 這三個 key 是連接詞，其餘 key 一律不准出現 ＋ 開頭。
_PLUS_AS_CONJUNCTION = {"pollTemplateFourImg", "pollTplMultiDesc", "auditKickerTail"}

# 樣本彈幕內容不是按鈕文案，裡面的 ✓ 是使用者會打的字。
_NOT_A_LABEL = {"overlayTestDanmuText"}


@pytest.mark.parametrize(
    "rel",
    [
        f"{base}/locales/{loc}/translation.json"
        for base in ("server/static", "danmu-desktop")
        for loc in ("zh", "en", "ja", "ko")
    ],
)
def test_no_icon_glyphs_in_translation_strings(rel):
    """i18n 值不得夾帶圖示符號。

    2026-09-08 掃出 51 個 key 中鏢（`▶ 開始顯示`、`✓ APPROVE`、`↻ 測試`…），
    其中 `previewBtn` 的 ▶ 還跟 `admin-sounds.js` 自己加的 ▶ 疊成兩個。
    """
    data = json.loads(_read(rel) or "{}")
    bad = []
    for key, value in data.items():
        if not isinstance(value, str) or key in _NOT_A_LABEL:
            continue
        hit = [g for g in BUTTON_GLYPHS if g in value]
        if "＋" in value and key not in _PLUS_AS_CONJUNCTION:
            hit.append("＋")
        if hit:
            bad.append(f"{key}: {value!r} 夾帶 {''.join(hit)}")
    assert not bad, f"{rel} 有圖示符號混進文案：\n" + "\n".join(bad)


def test_no_icon_glyphs_glued_onto_button_labels():
    """圖示不得直接黏在按鈕的文字標籤上。

    禁的是「圖示黏文字」，不是「按鈕不能有圖示」——設計稿 06 自己就用
    `⌕`（搜尋）、`☰`（抽屜）當純圖示鈕，中間寬度還會把側欄收成 64px
    圖示欄。所以兩種寫法是合格的：

    * 純圖示鈕（內文只有符號，配 `aria-label`）
    * 圖示放在專用槽（`<span class="…icon">` / `…-mark` / `aria-hidden`），
      文字標籤是另一個節點

    不合格的是 `>▶ 開始顯示<`、`>✓ APPROVE<` 這種擠在同一個文字節點裡的。
    2026-09-08 修掉 13 筆；當時第一版判準沒排除圖示槽，把 17 個合格寫法
    一起判違規——**先看標記結構再判**。
    """
    icon_slot = re.compile(
        r"<(span|i|div)\b[^>]*"
        r'(?:class="[^"]*(?:icon|mark|check|dot)[^"]*"|aria-hidden="true")'
        r"[^>]*>.*?</\1>",
        re.S | re.I,
    )
    bad = []
    for path in sorted((REPO / "server/static/js").glob("*.js")):
        if path.name == "i18n.js":  # 產生物，由上面那支測試守
            continue
        src = _strip_comments(path.read_text(encoding="utf-8"))
        # 原始碼裡的 `\\u21bb` 是**逸出序列**，不是那個字元。2026-09-08 那輪
        # `admin.js` 的 `\\u21bb RELOAD` 就是這樣躲過第一版判準的——先還原再判。
        src = re.sub(r"\\u([0-9a-fA-F]{4})", lambda m: chr(int(m.group(1), 16)), src)
        for inner in re.findall(r"<button\b[^>]*>(.*?)</button>", src, re.S):
            text = re.sub(r"<[^>]*>", "", icon_slot.sub("", inner))
            hit = [g for g in BUTTON_GLYPHS + "＋" if g in text]
            # 只有符號、沒有文字 → 純圖示鈕，合格
            if hit and re.search(r"[A-Za-z\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]", text):
                bad.append(f"{path.name}: {text.strip()[:60]!r} 夾帶 {''.join(hit)}")
    assert not bad, "圖示黏在按鈕文字上：\n" + "\n".join(bad)


# --- BREACH 前提：admin 模板不得反射請求輸入 -------------------------------


def test_admin_template_reflects_no_request_input():
    """`admin.html` 不得把任何請求輸入 templating 進去。

    2026-09-08 在 nginx 開 gzip 時把這件事變成前提。nginx 的 `text/html` 是
    **隱含永遠壓縮**的（`gzip_types` 拿不掉），而這份模板裡有一個穩定的祕密：
    `<meta name="csrf-token" content="{{ session.get('csrf_token','') }}">`。

    「壓縮 + 同一份回應裡有攻擊者可控的反射內容 + 有祕密」＝ BREACH。第二項
    不成立時前兩項就無害——攻擊者沒有管道把猜測字元塞進同一份回應去量長度差。
    另一道獨立的防線是 `SESSION_COOKIE_SAMESITE=Strict`（跨站請求不帶 cookie，
    拿到的是登入頁、token 是空的）。

    **這支測試就是那個前提。** 有人加了 `{{ request.args.get(...) }}` 之類的東西
    時它會先失敗——屆時要嘛拿掉那個反射點，要嘛對該 location 關掉 gzip。
    """
    html = _read("server/templates/admin.html")
    assert html, "找不到 admin.html"
    hits = re.findall(
        r"\{\{[^}]*\brequest\s*\.\s*(args|values|form|path|full_path|url|headers|"
        r"query_string|cookies|referrer|user_agent)\b[^}]*\}\}",
        html,
    )
    assert not hits, (
        "admin.html 反射了請求輸入："
        + ", ".join(sorted(set(hits)))
        + "\n這會讓 nginx gzip 的 BREACH 評估失效（見 nginx/nginx.conf 的註解）。"
    )
    # `{% ... %}` 語句塊裡繞一手也算
    stmt = re.findall(r"\{%[^%]*\brequest\s*\.\s*(args|values|form|path|headers)\b", html)
    assert not stmt, "admin.html 在 {% %} 裡用了請求輸入：" + ", ".join(sorted(set(stmt)))


# --- i18n 依語言分檔（2026-09-08）-------------------------------------------


def test_i18n_runtime_carries_no_translations():
    """`i18n.js` 只能是 runtime，翻譯內容不得再內嵌回去。

    分檔前它是 670 KB，而**觀眾頁**（活動現場每支手機都要下載）載的是同一支。
    現在 runtime 約 6 KB，翻譯在 `i18n.<lang>.js`，伺服器依 cookie /
    Accept-Language 挑一支送。

    判準用「檔案大小」而不是「有沒有某個 key」——有人若把 resources 內嵌回來，
    不管用什麼寫法，檔案都會胖回去。
    """
    runtime = REPO / "server/static/js/i18n.js"
    assert runtime.exists()
    size_kb = runtime.stat().st_size / 1024
    assert size_kb < 40, (
        f"i18n.js 變成 {size_kb:.0f} KB —— 翻譯又被內嵌回 runtime 了？"
        "翻譯應該在 i18n.<lang>.js。"
    )

    for lang in ("zh", "en", "ja", "ko"):
        bundle = REPO / f"server/static/js/i18n.{lang}.js"
        assert bundle.exists(), f"缺少 {bundle.name} —— 跑 npm run build:i18n"
        assert f'__I18N_BUNDLE["{lang}"]' in bundle.read_text(encoding="utf-8")


def test_templates_load_a_single_language_bundle():
    """兩個模板都要用伺服器挑出來的那一支，不能寫死語言、也不能四語全載。"""
    for tpl in ("server/templates/admin.html", "server/templates/index.html"):
        html = _read(tpl)
        assert "js/i18n.' ~ i18n_lang ~ '.js" in html, f"{tpl} 沒有用 i18n_lang"
        # 寫死某個語言就等於別人切語言時拿不到東西
        for lang in ("zh", "en", "ja", "ko"):
            assert f"js/i18n.{lang}.js" not in html, f"{tpl} 寫死了 {lang}"


@pytest.mark.parametrize(
    "headers,cookies,expected",
    [
        ({"Accept-Language": "zh-TW,zh;q=0.9"}, {}, "zh"),
        ({"Accept-Language": "ja,en;q=0.8"}, {}, "ja"),
        ({"Accept-Language": "ko-KR"}, {}, "ko"),
        ({"Accept-Language": "en-GB"}, {}, "en"),
        # 不支援的語言 → 預設 zh
        ({"Accept-Language": "de-DE,fr;q=0.9"}, {}, "zh"),
        # cookie 蓋過 Accept-Language
        ({"Accept-Language": "ja"}, {"danmu-server-lang": "ko"}, "ko"),
        # cookie 是提示不是憑證：不在白名單就整個忽略，不做任何解析
        ({"Accept-Language": "ja"}, {"danmu-server-lang": "../../etc/passwd"}, "ja"),
        ({"Accept-Language": "ja"}, {"danmu-server-lang": ""}, "ja"),
    ],
)
def test_server_picks_the_right_language_bundle(client, headers, cookies, expected):
    """伺服器必須在送出 HTML 前決定語言，否則首屏會先閃一次未翻譯的字。"""
    for k, v in cookies.items():
        client.set_cookie(k, v)
    try:
        resp = client.get("/", headers=headers)
        assert resp.status_code == 200
        body = resp.get_data(as_text=True)
        assert (
            f"js/i18n.{expected}.js" in body
        ), f"headers={headers} cookies={cookies} 應該送 {expected}，實際：" + ", ".join(
            re.findall(r"js/i18n\.[a-z]{2}\.js", body)
        )
    finally:
        for k in cookies:
            client.delete_cookie(k)


# --- 觀眾頁不載 admin 樣式表（2026-09-08）----------------------------------


def test_viewer_does_not_load_the_admin_stylesheet():
    """`index.html` 不得載 `style.css`。

    `style.css` 是 **admin 的**樣式表（17,307 行 / 482 KB，2026-09-07 把
    hud.css 併進來之後更大），但觀眾頁一直也載它。實測觀眾頁只 match 到裡面
    2,789 條規則的 **21 條**——活動現場每支手機下載 482 KB 換 21 條 reset。

    現在改載 `viewer-base.css`（15 KB，由 `scripts/build-viewer-css.mjs` 從
    style.css 生成）。**style.css 本身沒有動**，所以 admin 的層疊順序完全不變。

    驗證不是靠這支測試，是 computed-style golden master：同一頁切換
    viewer-base.css ↔ HEAD 版 style.css 逐元素比對，七個狀態、226–252 個元素、
    零差異。這支測試守的是「別又改回去」。
    """
    html = _read("server/templates/index.html")
    assert "css/viewer-base.css" in html, "index.html 應該載 viewer-base.css"
    assert "css/style.css" not in html, (
        "index.html 又載了 admin 的 style.css —— 那是 482 KB，觀眾頁只用得到其中 15 KB。"
    )
    # admin 反過來：它要的是完整那份，不是抽出來的子集
    admin = _read("server/templates/admin.html")
    assert "css/style.css" in admin
    assert "css/viewer-base.css" not in admin, (
        "admin.html 不該載 viewer-base.css —— 那是 style.css 的子集，"
        "兩份一起載只會讓層疊變複雜。"
    )


def test_viewer_base_css_is_generated_not_handwritten():
    """`viewer-base.css` 是生成物；手改會在下次重生時被蓋掉。"""
    css = _read("server/static/css/viewer-base.css")
    assert css, "viewer-base.css 不存在 —— 跑 npm run build:viewer-css"
    assert "AUTO-GENERATED" in css.split("\n")[0]
    assert "build-viewer-css.mjs" in css
    # 觀眾頁靠它拿到 token
    assert '@import url("tokens.css")' in css
    # 大小護欄：抽出來的子集不該接近原檔（接近就代表判準壞了）
    full = _read("server/static/css/style.css")
    assert len(css) < len(full) * 0.1, (
        f"viewer-base.css 是 {len(css)/1024:.0f} KB，style.css 是 {len(full)/1024:.0f} KB"
        " —— 抽取判準可能壞了"
    )
