"""每個主題的細部設定覆寫（設計稿 08 · T1「<主題> · 細部設定」）。

主題本身是 repo 裡的 YAML（`server/themes/*.yaml`），內建四個，改它等於改
程式碼。稿上的「細部設定」是**主持人在 admin 上調的**，所以另外存一層覆寫，
套用時疊在 YAML 之上：

    YAML styles/font  ←  這一層  ←  觀眾自己選的顏色與效果

只存主持人真的動過的欄位；沒動過的欄位讀回來就是主題原本的值。這樣主題檔
之後改版時，沒被覆寫的部分會跟著更新。

欄位（每個主題各一份）：
  font_family   字型名。空字串＝用主題原本的
  font_weight   字重 100–900。0＝用主題原本的
  stroke        描邊：none / thin / thick
  shadow        陰影：none / soft / strong
  color         觀眾預設顏色（hex）。空字串＝用主題原本的

描邊與陰影是**分段**不是數字：稿上就是「無／細／粗」三段。底層的
`strokeWidth` / `shadowBlur` 是連續值，但主持人要決定的是「有沒有、多重」，
給一個 0–6 的滑桿只是把單位換算的工作丟給他。
"""

from __future__ import annotations

import re
from typing import Any, Dict

from .json_state import JsonState

STROKE_MODES = ("none", "thin", "thick")
SHADOW_MODES = ("none", "soft", "strong")

# 分段 → 底層 styles。thin/thick 的 2/4 與 soft/strong 的 4/14 是照內建主題
# 既有的量級挑的（default 用 strokeWidth 2、neon 用 shadowBlur 14）。
STROKE_STYLES: Dict[str, Dict[str, Any]] = {
    "none": {"textStroke": False, "strokeWidth": 0},
    "thin": {"textStroke": True, "strokeWidth": 2},
    "thick": {"textStroke": True, "strokeWidth": 4},
}
SHADOW_STYLES: Dict[str, Dict[str, Any]] = {
    "none": {"textShadow": False, "shadowBlur": 0},
    "soft": {"textShadow": True, "shadowBlur": 4},
    "strong": {"textShadow": True, "shadowBlur": 14},
}

_THEME_NAME_RE = re.compile(r"^[A-Za-z0-9_-]{1,64}$")
_HEX_RE = re.compile(r"^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$")
_FONT_FAMILY_RE = re.compile(r"^[\w\s-]{1,64}$")

_EMPTY: Dict[str, Any] = {}


def _normalize_one(raw: Any) -> Dict[str, Any]:
    """單一主題的覆寫。認不得的欄位一律丟掉，不 raise——這層是選配的。"""
    if not isinstance(raw, dict):
        raise ValueError("theme override must be an object")
    out: Dict[str, Any] = {}

    family = raw.get("font_family")
    if isinstance(family, str) and family.strip():
        if not _FONT_FAMILY_RE.match(family.strip()):
            raise ValueError("font_family has invalid characters")
        out["font_family"] = family.strip()

    weight = raw.get("font_weight")
    if weight not in (None, "", 0):
        if isinstance(weight, bool) or not isinstance(weight, (int, float)):
            raise ValueError("font_weight must be a number")
        weight = int(weight)
        if not (100 <= weight <= 900):
            raise ValueError("font_weight must be between 100 and 900")
        out["font_weight"] = weight

    stroke = raw.get("stroke")
    if stroke not in (None, ""):
        if stroke not in STROKE_MODES:
            raise ValueError("stroke must be one of %s" % (STROKE_MODES,))
        out["stroke"] = stroke

    shadow = raw.get("shadow")
    if shadow not in (None, ""):
        if shadow not in SHADOW_MODES:
            raise ValueError("shadow must be one of %s" % (SHADOW_MODES,))
        out["shadow"] = shadow

    color = raw.get("color")
    if isinstance(color, str) and color.strip():
        if not _HEX_RE.match(color.strip()):
            raise ValueError("color must be a #rgb or #rrggbb hex string")
        out["color"] = color.strip()

    return out


def _normalize(raw: Any) -> Dict[str, Any]:
    if not isinstance(raw, dict):
        raise ValueError("theme overrides must be an object")
    out: Dict[str, Any] = {}
    for name, value in raw.items():
        if not isinstance(name, str) or not _THEME_NAME_RE.match(name):
            raise ValueError("invalid theme name: %r" % (name,))
        one = _normalize_one(value)
        if one:  # 空的覆寫不留，等同「回到主題原本的值」
            out[name] = one
    return out


_state = JsonState("theme_overrides.json", default=lambda: {}, normalize=_normalize)

get_all = _state.get


def get_for(theme_name: str) -> Dict[str, Any]:
    return dict(_state.get().get(theme_name) or _EMPTY)


def set_for(theme_name: str, patch: Dict[str, Any]) -> Dict[str, Any]:
    """套用單一主題的部分更新，回傳那個主題更新後的覆寫。

    值傳空字串／None 代表「清掉這個覆寫」——主持人把描邊改回主題原本的
    設定時，要能真的移除，而不是存一個「跟原本一樣」的值。
    """
    if not isinstance(theme_name, str) or not _THEME_NAME_RE.match(theme_name):
        raise ValueError("invalid theme name")
    if not isinstance(patch, dict):
        raise ValueError("theme override patch must be an object")

    current = dict(_state.get().get(theme_name) or _EMPTY)
    for key, value in patch.items():
        if value in (None, ""):
            current.pop(key, None)
        else:
            current[key] = value

    # JsonState.update 的合併是**淺層**的，而這裡的頂層鍵就是主題名——
    # 傳 {theme_name: current} 剛好等於「整個換掉那個主題的覆寫」。
    # current 變成空 dict 時 _normalize 會把整個鍵丟掉＝回到主題原本的值。
    return _state.update({theme_name: current}).get(theme_name, {})


def apply_to(theme: Dict[str, Any]) -> Dict[str, Any]:
    """把覆寫疊到主題上，回傳新的 dict（不動原本的快取物件）。"""
    if not isinstance(theme, dict):
        return theme
    ov = get_for(str(theme.get("name") or ""))
    if not ov:
        return theme

    merged = dict(theme)
    styles = dict(merged.get("styles") or {})
    font = dict(merged.get("font") or {})

    if "stroke" in ov:
        styles.update(STROKE_STYLES[ov["stroke"]])
    if "shadow" in ov:
        styles.update(SHADOW_STYLES[ov["shadow"]])
    if "color" in ov:
        styles["color"] = ov["color"]
    if "font_family" in ov:
        font["family"] = ov["font_family"]
    if "font_weight" in ov:
        font["weight"] = ov["font_weight"]

    merged["styles"] = styles
    merged["font"] = font
    return merged


def _reset_for_tests() -> None:
    _state.reset_for_tests()
