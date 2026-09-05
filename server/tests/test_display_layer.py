"""顯示層設定（2026-08-19 設計稿 07 · R1）。

彈幕在大螢幕上怎麼排：行數、避免重疊、顯示範圍上緣與高度。排版引擎本來
就在 static/js/overlay.js 裡（findAvailableTrack），這組設定補的是「把值
存起來並送給它」——先前 maxTracks 只能靠 overlay 的 URL query 帶、
displayArea 是寫死的 {top:0, height:100}。
"""

# pyright: reportMissingImports=false

import pytest

from server.services import display_layer


def _login(client):
    return client.post("/login", data={"password": "test"}, follow_redirects=True)


def _csrf(client):
    _login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def _authed_patch(client, url, payload):
    token = _csrf(client)
    return client.patch(url, json=payload, headers={"X-CSRF-Token": token})


# ─── 服務層 ──────────────────────────────────────────────────────────────


def test_defaults_match_engine_semantics():
    """預設值要對應 overlay.js 既有的行為：10 軌、防重疊、滿版。"""
    state = display_layer.get_state()
    assert state == {
        "max_tracks": 10,
        "avoid_overlap": True,
        "area_top": 0,
        "area_height": 100,
    }


def test_partial_update_keeps_other_fields():
    display_layer.set_state({"max_tracks": 4})
    state = display_layer.get_state()
    assert state["max_tracks"] == 4
    assert state["avoid_overlap"] is True
    assert state["area_height"] == 100


def test_get_returns_a_copy():
    """拿到的是複本——呼叫端改它不該動到真正的狀態。"""
    got = display_layer.get_state()
    got["max_tracks"] = 999
    assert display_layer.get_state()["max_tracks"] == 10


@pytest.mark.parametrize(
    "patch",
    [
        {"max_tracks": 21},
        {"max_tracks": -1},
        {"area_top": 91},
        {"area_height": 9},
        {"area_height": 101},
    ],
)
def test_out_of_range_rejected(patch):
    with pytest.raises(ValueError):
        display_layer.set_state(patch)


def test_max_tracks_zero_is_the_auto_sentinel():
    """0 不是「不顯示」，是引擎既有的「照高度自動算」語意，必須放行。"""
    assert display_layer.set_state({"max_tracks": 0})["max_tracks"] == 0


@pytest.mark.parametrize("bad", [{"avoid_overlap": "yes"}, {"avoid_overlap": 1}])
def test_avoid_overlap_must_be_boolean(bad):
    with pytest.raises(ValueError):
        display_layer.set_state(bad)


def test_bool_is_not_accepted_as_a_number():
    """True 在 Python 是 int 的子類——不加防護會讓 max_tracks=True 悄悄存成 1。"""
    with pytest.raises(ValueError):
        display_layer.set_state({"max_tracks": True})


def test_non_dict_rejected():
    with pytest.raises(ValueError):
        display_layer.set_state(["not", "a", "dict"])


# ─── 路由 ────────────────────────────────────────────────────────────────


def test_public_endpoint_is_readable_without_login(client):
    """overlay 的消費者是 OBS browser source 與 Electron 顯示視窗，
    兩者都沒有 admin session，所以讀取端必須公開。"""
    res = client.get("/display-layer")
    assert res.status_code == 200
    assert res.get_json()["max_tracks"] == 10


def test_admin_write_requires_login(client):
    res = client.patch("/admin/display-layer", json={"max_tracks": 5})
    assert res.status_code in (302, 401, 403)
    # 沒登入不該寫得進去
    assert display_layer.get_state()["max_tracks"] == 10


def test_admin_patch_persists_and_is_visible_publicly(client):
    res = _authed_patch(client, "/admin/display-layer", {"max_tracks": 3})
    assert res.status_code == 200
    assert res.get_json()["max_tracks"] == 3
    # 同一份狀態要能被 overlay 從公開端點讀到
    assert client.get("/display-layer").get_json()["max_tracks"] == 3


def test_admin_patch_rejects_bad_range_with_400(client):
    res = _authed_patch(client, "/admin/display-layer", {"area_top": 999})
    assert res.status_code == 400
    assert "error" in res.get_json()
    assert display_layer.get_state()["area_top"] == 0
