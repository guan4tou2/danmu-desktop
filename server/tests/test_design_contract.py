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
