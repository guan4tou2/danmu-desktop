"""顯示層設定 — 主持人決定彈幕在大螢幕上怎麼排。

2026-08-19（設計稿 07 · R1「顯示層」）新增。這四個值和 `managers/settings.py`
的 `_DEFAULT_OPTIONS` 是不同種類的東西：後者的每一列是「觀眾可不可以自己改
＋範圍＋預設」，是**觀眾端**的設定；這裡的四個是**大螢幕本身**怎麼排版，
觀眾永遠碰不到，硬塞進那個四格結構會讓「觀眾自訂」欄變成一直是灰的裝飾。

排版引擎本來就實作好了（`static/js/overlay.js` 的 findAvailableTrack：
maxTracks 分軌、displayArea 限定上緣與高度、hasCollision 防重疊），
缺的一直只是「把值存起來並送給它」。maxTracks 先前只能靠 overlay 的 URL
query 帶，displayArea 則是寫死的 {top:0, height:100}。

欄位：
  max_tracks    同時顯示的行數。1–20；0 代表「照高度自動算」（引擎既有語意）
  avoid_overlap 避免彈幕重疊。關掉時引擎跳過碰撞檢查，彈幕可以疊著跑
  area_top      從畫面頂端算起，% 。0–90
  area_height   使用畫面高度，% 。10–100

area_top + area_height 允許超過 100（下緣落在畫面外）——那是主持人刻意把
彈幕推出畫面下方的用法，不擋。
"""

from __future__ import annotations

from typing import Any, Dict

from .json_state import JsonState

_DEFAULT: Dict[str, Any] = {
    "max_tracks": 10,
    "avoid_overlap": True,
    "area_top": 0,
    "area_height": 100,
}

# (最小, 最大)。max_tracks 的 0 是「自動」哨兵，另外放行。
_RANGES = {
    "max_tracks": (0, 20),
    "area_top": (0, 90),
    "area_height": (10, 100),
}


def _normalize(raw: Any) -> Dict[str, Any]:
    """把任意輸入收斂成合法的顯示層設定；形狀錯就 raise ValueError。"""
    if not isinstance(raw, dict):
        raise ValueError("display layer state must be an object")

    out = dict(_DEFAULT)

    for key, (lo, hi) in _RANGES.items():
        if key not in raw:
            continue
        value = raw[key]
        if isinstance(value, bool) or not isinstance(value, (int, float)):
            raise ValueError(f"{key} must be a number")
        value = int(value)
        if not (lo <= value <= hi):
            raise ValueError(f"{key} must be between {lo} and {hi}")
        out[key] = value

    if "avoid_overlap" in raw:
        value = raw["avoid_overlap"]
        if not isinstance(value, bool):
            raise ValueError("avoid_overlap must be a boolean")
        out["avoid_overlap"] = value

    return out


_state = JsonState("display_layer.json", default=lambda: dict(_DEFAULT), normalize=_normalize)

get_state = _state.get


def set_state(patch: Dict[str, Any]) -> Dict[str, Any]:
    """套用部分更新，回傳更新後的完整狀態。

    形狀檢查放在這裡而不是 `_normalize`：`JsonState.update` 會先把 patch 併進
    現有狀態（`current.update(patch)`）才呼叫 normalize，所以非 dict 的輸入
    會在合併那一步噴 TypeError，來不及走到 normalize 的 ValueError。
    路由層只接 ValueError → 400，漏掉會變成 500。
    """
    if not isinstance(patch, dict):
        raise ValueError("display layer patch must be an object")
    return _state.update(patch)


def _reset_for_tests() -> None:
    _state.reset_for_tests()
