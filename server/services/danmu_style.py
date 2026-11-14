"""彈幕的顏色與字型：每一條送上大螢幕的路徑都從這裡解析。

使用中主題的「細部設定」裡，字型與觀眾預設顏色是一層覆寫
（services/theme_overrides.py）。這一層有值、值也合法時，它取代設定列
的全域預設，成為預設來源；沒有值時，一切跟沒有這一層一樣。

觀眾送的彈幕（/fire，audience=True）：

  1. 觀眾自己的選擇——那個屬性開放觀眾改、值合法、在允許清單裡
  2. 使用中主題的覆寫——值合法（字型要還在、沒被停用；顏色是六位 hex）
  3. 全域預設（設定列的 slot 3）

  顏色另有一道既有的政策：觀眾可改但「不准自訂顏色」時只能用色盤上的顏色，
  上面三層依序取第一個在色盤上的，都不在就用色盤第一色（沒有主題值時與
  5.8.0 的 resolve_viewer_color 完全相同）。

主持人那邊送的（排程、管理員廣播、Webhook、審核通過後重送，audience=False）
沒有「觀眾選擇」這一層：呼叫端自己帶的值照舊直接用；沒帶時補主題值；主題
也沒有就不補，各路徑維持原本的退路（overlay 的預設、Webhook 的 FFFFFF）。

主題 YAML 本身的 `styles.color` / `font.family` 不算主題值——內建四個主題的
YAML 都有顏色，算進來等於所有站台一升級就換色。只有主持人在 admin 動過的
覆寫才算。

不合法的主題值只會讓那一層被跳過，絕不讓彈幕送不出去；admin 樣式表靠
`effective_defaults()` 標出「主題值沒被採用」。
"""

from __future__ import annotations

import logging
import re
from contextlib import nullcontext
from typing import Any, Dict, NamedTuple, Optional

from flask import has_request_context

from . import theme_overrides
from . import themes as theme_svc
from .fonts import build_font_payload, is_allowed_font
from .settings import get_options
from .viewer_colors import allows_color_picker, get_color_palette, normalize_color

logger = logging.getLogger(__name__)

_SHORT_HEX_RE = re.compile(r"^#?([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$")
_DEFAULT_COLOR_ROW = [True, [], 0, "#FFFFFF"]
_DEFAULT_FONT_ROW = [True, "", "", "NotoSansTC"]


class ThemeLayer(NamedTuple):
    """使用中主題的覆寫層。color / font 是合法、可用的值；raw_* 是存著的原值。"""

    theme: str
    color: Optional[str]  # "#rrggbb"
    font: Optional[str]
    raw_color: Optional[str]
    raw_font: Optional[str]


class Resolved(NamedTuple):
    color: Optional[str]  # "#rrggbb"；audience=False 且沒有任何值時為 None
    font: Optional[str]
    color_source: Optional[str]  # "viewer" / "operator" / "theme" / "global" / "palette"
    font_source: Optional[str]


def _expand_hex(raw: Any) -> Optional[str]:
    text = str(raw or "").strip()
    m = _SHORT_HEX_RE.match(text)
    if m:
        text = "#" + "".join(ch * 2 for ch in m.groups())
    return normalize_color(text)


def theme_layer() -> ThemeLayer:
    """讀使用中主題的字型與預設顏色覆寫，順便驗證。讀不到就當沒有。"""
    try:
        name = theme_svc.get_active_name()
        ov = theme_overrides.get_for(name)
    except Exception as exc:  # 覆寫是選配的一層，壞掉不能擋彈幕
        logger.warning("theme override read failed: %s", exc)
        return ThemeLayer("", None, None, None, None)
    raw_color = ov.get("color") or None
    raw_font = ov.get("font_family") or None
    color = _expand_hex(raw_color) if raw_color else None
    font = None
    if raw_font:
        try:
            font = raw_font if is_allowed_font(raw_font) else None
        except Exception as exc:
            logger.warning("theme font check failed: %s", exc)
    return ThemeLayer(name, color, font, raw_color, raw_font)


def _audience_color(value, options, layer):
    row = options.get("Color", _DEFAULT_COLOR_ROW)
    global_default = normalize_color(row[3]) or "#ffffff"
    if not row[0]:
        return (layer.color, "theme") if layer.color else (global_default, "global")
    chosen = normalize_color(value)
    candidates = [(chosen, "viewer"), (layer.color, "theme"), (global_default, "global")]
    if allows_color_picker(options):
        return next((c, s) for c, s in candidates if c)
    palette = get_color_palette(options)
    for c, s in candidates:
        if c and c in palette:
            return c, s
    return palette[0], "palette"


def _audience_font(name, options, layer):
    row = options.get("FontFamily", _DEFAULT_FONT_ROW)
    if row[0] and name and is_allowed_font(name):
        return name, "viewer"
    if layer.font:
        return layer.font, "theme"
    return row[3], "global"


def resolve(
    color: Any = None,
    font: Any = None,
    *,
    audience: bool,
    options: Optional[Dict[str, Any]] = None,
    layer: Optional[ThemeLayer] = None,
) -> Resolved:
    """顏色與字型的唯一解析點（優先序見模組說明）。

    audience=True：`color` / `font` 是觀眾送來的，一定回傳最終值。
    audience=False：`color` / `font` 是呼叫端（主持人那邊）自己帶的；帶了就
    原樣回傳，沒帶就給主題值，主題也沒有則為 None（呼叫端保留原本的退路）。
    """
    layer = theme_layer() if layer is None else layer
    if audience:
        options = get_options() if options is None else options
        c, cs = _audience_color(color, options, layer)
        f, fs = _audience_font(font, options, layer)
        return Resolved(c, f, cs, fs)
    if color:
        c, cs = color, "operator"
    elif layer.color:
        c, cs = layer.color, "theme"
    else:
        c, cs = None, None
    if font:
        f, fs = font, "operator"
    elif layer.font:
        f, fs = layer.font, "theme"
    else:
        f, fs = None, None
    return Resolved(c, f, cs, fs)


def overlay_color(color: str) -> str:
    """overlay 吃的是不含 # 的大寫 hex（與 /fire 一直以來的格式相同）。"""
    return str(color).lstrip("#").upper()


def apply_theme_defaults(data: Dict[str, Any], app=None) -> Dict[str, Any]:
    """主持人那邊送的訊息：沒帶顏色／字型時補上主題值（就地修改並回傳）。

    沒有主題覆寫時什麼都不做——payload 與以前一個位元組都不差。字型的
    payload 要組 /user_fonts 的網址，排程這類背景執行緒沒有 request context，
    呼叫端可以傳 app 進來借一個；組不出來就不補字型，訊息照送。
    """
    borrow = app is not None and not has_request_context()
    try:
        with app.test_request_context("/") if borrow else nullcontext():
            layer = theme_layer()
            if not (layer.color or layer.font):
                return data
            res = resolve(data.get("color") or None, None, audience=False, layer=layer)
            if res.color_source == "theme":
                data["color"] = overlay_color(res.color)
            if not data.get("fontInfo") and res.font_source == "theme":
                data["fontInfo"] = build_font_payload(res.font)
    except Exception as exc:
        logger.warning("theme defaults not applied: %s", exc)
    return data


def effective_defaults(options: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    """觀眾什麼都沒選時實際會用的顏色與字型，以及它從哪裡來。

    給觀眾頁的初始值與 admin 樣式表用。`rejected` 為 True 代表主題有設值，
    但這次沒被採用（字型已停用／刪除、顏色不合法或不在只准色盤的色盤上），
    實際用的是 `value`。
    """
    options = get_options() if options is None else options
    layer = theme_layer()
    res = resolve(None, None, audience=True, options=options, layer=layer)
    color_row = options.get("Color", _DEFAULT_COLOR_ROW)
    font_row = options.get("FontFamily", _DEFAULT_FONT_ROW)
    return {
        "theme": layer.theme,
        "Color": {
            "value": res.color,
            "source": res.color_source,
            "global": normalize_color(color_row[3]) or "#ffffff",
            "theme_value": layer.raw_color,
            "rejected": bool(layer.raw_color) and res.color_source != "theme",
        },
        "FontFamily": {
            "value": res.font,
            "source": res.font_source,
            "global": font_row[3],
            "theme_value": layer.raw_font,
            "rejected": bool(layer.raw_font) and res.font_source != "theme",
        },
    }
