"""彈幕樣式合一（2026-11-14，合併與摺疊第四批）：升級前後觀眾端拿到的設定完全相同。

範圍：沒有設主題字型／預設顏色覆寫的站台。有覆寫的站台從 2026-11-14 起
預設值會換成主題值（業主拍板），見 test_theme_style_defaults.py。

這一批只合併後台介面——顯示層的外觀、主題頁、觀眾頁三處併成 #/viewer 一頁，
資料模型與端點一個都沒動。這裡把那件事釘住：一份 5.8.0 形狀、每個鍵都改過
預設值的 settings.json 載入之後，

  · `/get_settings` 回的內容逐字等於檔案內容（沒有遷移、沒有新鍵、沒有改值）；
  · 觀眾頁（`/`）依旗標露出或隱藏的控制項跟以前一樣；
  · 後台寫入設定用的端點仍是原本那幾條。
"""

import copy
import json
from pathlib import Path

import pytest

from server.managers import settings_store

# 5.8.0 的 settings.json：每一列都跟出廠預設不同，才看得出「有沒有被改掉」。
PRE_MERGE_SETTINGS = {
    "Color": [False, ["#123ABC", "#FFFFFF"], 0, "123ABC"],
    "ViewerColorPicker": [False],
    "Opacity": [True, 30, 90, 80],
    "FontSize": [False, 20, 60, 40],
    "Speed": [True, 0.8, 2.5, 1.5],
    "FontFamily": [True, ["NotoSansTC"], "", "NotoSansTC"],
    "Effects": [False, "", "", ""],
    "Layout": [False, ["scroll", "top_fixed"], "", "top_fixed"],
    "ViewerThemeMode": [True, "force-dark"],
    "ViewerLangMode": [True, "force-en"],
    "ViewerFireCooldownSec": [True, 5.0],
}


@pytest.fixture()
def upgraded_store():
    path = settings_store._settings_file
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(PRE_MERGE_SETTINGS))
    settings_store._load_from_disk()
    yield
    settings_store.reset()


def test_get_settings_is_byte_for_byte_the_pre_merge_file(client, upgraded_store):
    res = client.get("/get_settings")
    assert res.status_code == 200
    assert res.get_json() == PRE_MERGE_SETTINGS


def test_no_option_key_was_added_or_removed():
    assert set(settings_store.get_options()) == set(PRE_MERGE_SETTINGS)


def test_viewer_page_exposes_the_same_controls(client, upgraded_store):
    html = client.get("/").get_data(as_text=True)
    # Color[0] = False → 顏色群組藏起來；ViewerColorPicker 關 → 自訂色藏起來
    assert 'id="colorControl"' in html
    color_tag = html[html.index('id="colorControl"') :].split(">", 1)[0]
    assert " hidden" in color_tag
    # FontSize[0] / Layout[0] = False → 整個群組不渲染
    assert 'id="fontSizeControl"' not in html
    assert 'id="layoutControl"' not in html
    # Opacity / Speed 開著 → 範圍照檔案裡的觀眾範圍
    assert 'id="opacityRange"' in html and 'min="30"' in html and 'max="90"' in html
    assert 'id="speedRange"' in html and 'min="0.8"' in html and 'max="2.5"' in html


def test_flipping_one_switch_changes_only_that_row(client, upgraded_store):
    """後台的「觀眾可改」開關寫的仍是 slot 0，其餘欄位一個都不動。"""
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        token = sess["csrf_token"]
    res = client.post(
        "/admin/Set",
        json={"key": "FontSize", "enabled": True},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    expected = copy.deepcopy(PRE_MERGE_SETTINGS)
    expected["FontSize"][0] = True
    assert client.get("/get_settings").get_json() == expected


# ─── 2026-11-14：主題字型／預設顏色覆寫開始生效之後 ─────────────────────
#
# 上面幾條的範圍收窄成「沒有設主題字型／預設顏色覆寫的站台」（conftest 會把
# 覆寫檔導到空的 tmp，所以這裡天然就是那種站台）。下面再把 overlay 收到的
# payload 與觀眾頁的初始值也釘成 5.8.0 的樣子：同一組輸入、兩份設定（上面的
# 5.8.0 檔與出廠預設）、兩個主題（default 與 YAML 自帶顏色的 neon）。期望值
# 是用 5.8.0（3dc632e）的 routes/api.py、routes/main.py、services/viewer_colors.py
# 與 templates/index.html 實跑出來的（tests/fixtures/style_payloads_580.json，
# 只拿掉每則都不同的 message_id）。

GOLDEN = json.loads(
    (Path(__file__).parent / "fixtures" / "style_payloads_580.json").read_text(encoding="utf-8")
)

FIRE_INPUTS = [
    {"text": "a"},
    {"text": "b", "color": "#00FF88", "font": "Arial", "size": 30, "opacity": 50, "speed": 2},
    {"text": "c", "color": "#38bdf8", "fontInfo": {"name": "NotoSansTC"}},
    {"text": "d", "color": "#ffffff", "font": "NoSuchFont"},
]


def _fire_payloads(client, theme):
    from server.services import themes as theme_svc
    from server.services import ws_queue
    from server.services.security import rate_limiter, reset_rate_limit_counters
    from server.services.ws_state import update_ws_client_count

    theme_svc.set_active(theme)
    update_ws_client_count(1)
    ws_queue.dequeue_all()
    out = []
    for body in FIRE_INPUTS:
        rate_limiter.reset()
        reset_rate_limit_counters()
        assert client.post("/fire", json=body).status_code == 200
        (msg,) = ws_queue.dequeue_all()
        msg.pop("message_id", None)
        out.append(msg)
    update_ws_client_count(0)
    return out


def _viewer_initial(client):
    html = client.get("/").get_data(as_text=True)
    color = html.split('id="colorInput" value="', 1)[1].split('"', 1)[0]
    font = html.split('id="userFontSelect"', 1)[1].split('<option value="">', 1)[1]
    return color, font.split("<", 1)[0]


@pytest.mark.parametrize("theme", ["default", "neon"])
def test_overlay_payload_matches_580_with_the_upgraded_file(client, upgraded_store, theme):
    golden = GOLDEN["upgraded/" + theme]
    assert _fire_payloads(client, theme) == golden["fire"]
    assert list(_viewer_initial(client)) == golden["viewer_initial"]


@pytest.mark.parametrize("theme", ["default", "neon"])
def test_overlay_payload_matches_580_with_factory_defaults(client, theme):
    golden = GOLDEN["factory/" + theme]
    assert _fire_payloads(client, theme) == golden["fire"]
    assert list(_viewer_initial(client)) == golden["viewer_initial"]
