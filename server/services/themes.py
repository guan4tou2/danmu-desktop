"""
Danmu 風格主題包管理服務

主題檔案格式（YAML）：
  name, label, description
  styles: { color, textStroke, strokeWidth, strokeColor, textShadow, shadowBlur }
  palette: [hex_color, ...]                      # optional — up to PALETTE_MAX colors
  font: { family, weight }                       # optional
  layout: scroll | top_fixed | bottom_fixed | float | rise   # optional
  bg: { url, gradient, opacity }                 # optional
  effects_preset: [{ name, params }]

熱插拔：掃描 themes/ 目錄，mtime 變更時自動重新載入。
"""

import logging
import os
import re
import threading
from typing import Any, Dict, List, Optional

import yaml

logger = logging.getLogger(__name__)

_THEMES_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "themes")
# 主持人自己建的主題（設計稿 08 · T1「新主題」）。跟內建的分開放：
# `server/themes/` 是 repo 的程式碼，寫進去會讓工作目錄變髒，也會被
# `docker compose build` 蓋掉。runtime/ 才是這個部署自己的資料。
_USER_THEMES_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "runtime", "themes")
_SAFE_KEY_RE = re.compile(r"^[a-zA-Z0-9_-]+$")
_HEX_COLOR_RE = re.compile(r"^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$")

PALETTE_MAX = 12
FONT_FAMILY_MAX = 64
BG_STRING_MAX = 500
VALID_LAYOUTS = ("scroll", "top_fixed", "bottom_fixed", "float", "rise")

_lock = threading.Lock()
_cache: Dict[str, Dict[str, Any]] = {}
_mtime_map: Dict[str, float] = {}
_path_to_name: Dict[str, str] = {}
_active_theme: str = "default"
_active_lock = threading.Lock()


def _sanitize_palette(raw: Any) -> List[str]:
    if not isinstance(raw, list):
        return []
    out: List[str] = []
    for color in raw[:PALETTE_MAX]:
        if isinstance(color, str) and _HEX_COLOR_RE.match(color):
            out.append(color)
    return out


def _sanitize_font(raw: Any) -> Dict[str, Any]:
    if not isinstance(raw, dict):
        return {}
    result: Dict[str, Any] = {}
    family = raw.get("family")
    if isinstance(family, str) and 0 < len(family) <= FONT_FAMILY_MAX:
        result["family"] = family
    weight = raw.get("weight")
    if isinstance(weight, int) and 100 <= weight <= 900 and weight % 100 == 0:
        result["weight"] = weight
    return result


def _sanitize_layout(raw: Any) -> Optional[str]:
    if isinstance(raw, str) and raw in VALID_LAYOUTS:
        return raw
    return None


def _sanitize_bg(raw: Any) -> Dict[str, Any]:
    if not isinstance(raw, dict):
        return {}
    result: Dict[str, Any] = {}
    url = raw.get("url")
    if isinstance(url, str) and 0 < len(url) <= BG_STRING_MAX:
        result["url"] = url
    gradient = raw.get("gradient")
    if isinstance(gradient, str) and 0 < len(gradient) <= BG_STRING_MAX:
        result["gradient"] = gradient
    opacity = raw.get("opacity")
    if isinstance(opacity, (int, float)) and 0.0 <= float(opacity) <= 1.0:
        result["opacity"] = float(opacity)
    return result


def _parse_theme(path: str) -> Optional[Dict[str, Any]]:
    """Parse a .yaml theme file."""
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = yaml.safe_load(f)
    except Exception as e:
        logger.warning("Failed to parse theme %s: %s", path, e)
        return None

    if not isinstance(data, dict) or not data.get("name"):
        return None

    name = str(data["name"])
    if not _SAFE_KEY_RE.match(name):
        return None

    parsed: Dict[str, Any] = {
        "name": name,
        "label": str(data.get("label", name)),
        "description": str(data.get("description", "")),
        "styles": data.get("styles", {}),
        "effects_preset": data.get("effects_preset", []),
        "palette": _sanitize_palette(data.get("palette")),
        "font": _sanitize_font(data.get("font")),
        "bg": _sanitize_bg(data.get("bg")),
    }
    layout = _sanitize_layout(data.get("layout"))
    if layout is not None:
        parsed["layout"] = layout
    return parsed


def _is_user_theme_locked(name: str) -> bool:
    """呼叫端必須已經持有 `_lock`。

    `_lock` 是 threading.Lock（不可重入），而 load_all 是在 `with _lock:`
    裡逐一問每個主題是不是使用者建的——公開版本在那裡再取一次鎖會直接
    deadlock，整個 process 卡死且沒有任何錯誤訊息。
    """
    for path, mapped in _path_to_name.items():
        if mapped == name:
            return os.path.dirname(path) == _USER_THEMES_DIR
    return False


def is_user_theme(name: str) -> bool:
    """主持人自己建的（可刪）還是內建的（不可刪）。"""
    with _lock:
        return _is_user_theme_locked(name)


def _scan():
    """Scan theme directories (built-in + user) and update cache."""
    current_files: Dict[str, float] = {}
    for directory in (_THEMES_DIR, _USER_THEMES_DIR):
        if not os.path.isdir(directory):
            continue
        for fname in os.listdir(directory):
            if not fname.endswith((".yaml", ".yml")):
                continue
            fpath = os.path.join(directory, fname)
            try:
                mtime = os.path.getmtime(fpath)
            except OSError:
                continue
            current_files[fpath] = mtime

    with _lock:
        # Remove deleted files
        for old_path in list(_path_to_name.keys()):
            if old_path not in current_files:
                name = _path_to_name.pop(old_path)
                _cache.pop(name, None)
                _mtime_map.pop(old_path, None)
                logger.info("[Themes] Removed: %s", name)

        # Add/update changed files
        for fpath, mtime in current_files.items():
            if fpath in _mtime_map and _mtime_map[fpath] == mtime:
                continue
            parsed = _parse_theme(fpath)
            if parsed:
                name = parsed["name"]
                _cache[name] = parsed
                _mtime_map[fpath] = mtime
                _path_to_name[fpath] = name
                logger.info("[Themes] Loaded: %s from %s", name, os.path.basename(fpath))


def _bundle_flags(theme: Dict[str, Any]) -> Dict[str, bool]:
    """Which bundle sections a theme declares — used by admin UI badges."""
    return {
        "palette": bool(theme.get("palette")),
        "font": bool(theme.get("font")),
        "layout": bool(theme.get("layout")),
        "bg": bool(theme.get("bg")),
        "effects": bool(theme.get("effects_preset")),
    }


def load_all(force: bool = False) -> List[Dict[str, Any]]:
    """Return list of all themes (meta + presentation) + bundle flags.

    ``styles`` / ``font`` / ``bg`` 是給 admin 主題卡畫「彈幕範例」用的
    （設計稿 08 · T1）。稿上每張卡都要直接把一行彈幕畫成那個主題的樣子——
    只回 meta 的話前端只能猜，四張卡會長得一模一樣。這些欄位本來就是要
    送到大螢幕上的視覺參數，不是機密。
    """
    if force or not _cache:
        _scan()
    from . import theme_overrides  # 延後 import，避免循環

    with _lock:
        return [
            theme_overrides.apply_to(
                {
                    "name": t["name"],
                    "label": t["label"],
                    "description": t["description"],
                    "styles": t.get("styles") or {},
                    "font": t.get("font") or {},
                    "bg": t.get("bg") or {},
                    "bundle": _bundle_flags(t),
                    "custom": _is_user_theme_locked(t["name"]),
                }
            )
            for t in _cache.values()
        ]


def get_theme(name: str) -> Optional[Dict[str, Any]]:
    """Get full theme data by name."""
    if not _cache:
        _scan()
    with _lock:
        return _cache.get(name)


def set_active(name: str) -> bool:
    """Set the active theme. Returns True if theme exists."""
    global _active_theme
    if not _cache:
        _scan()
    with _lock:
        if name not in _cache:
            return False
        with _active_lock:
            _active_theme = name
    logger.info("[Themes] Active theme set to: %s", name)
    return True


def get_active() -> Dict[str, Any]:
    """Get the active theme data, with the admin's per-theme overrides applied.

    覆寫層（設計稿 08 · T1「細部設定」）疊在 YAML 之上——主題檔是 repo 的
    程式碼，主持人在 admin 調的字型／描邊／陰影／預設顏色存在
    `runtime/theme_overrides.json`。這裡是唯一的合併點：`/fire` 只呼叫
    get_active()，所以覆寫自動吃到每一則彈幕上。
    """
    with _active_lock:
        name = _active_theme
    theme = get_theme(name)
    if not theme:
        return {
            "name": "default",
            "label": "Default",
            "styles": {},
            "effects_preset": [],
        }
    from . import theme_overrides  # 延後 import：theme_overrides 不依賴這裡

    return theme_overrides.apply_to(theme)


def get_active_name() -> str:
    """Get the name of the currently active theme."""
    with _active_lock:
        return _active_theme


# ── 主持人自己建的主題（設計稿 08 · T1「新主題」）────────────────────────
#
# 「新主題」＝把現在這個主題（含細部設定的覆寫）另存一份新的名字。從零開始
# 挑一組樣式沒有意義——主持人手上已經有一個看得到的樣子，他要的是「照這個
# 再調」。

_LABEL_MAX = 40
_SLUG_RE = re.compile(r"[^a-z0-9]+")


def _slugify(label: str) -> str:
    slug = _SLUG_RE.sub("-", str(label or "").strip().lower()).strip("-")
    return slug[:40]


def create_user_theme(label: str, base_name: str) -> Dict[str, Any]:
    """從 base_name 複製一份，存成新的使用者主題。回傳新主題的 meta。

    Raises ValueError（名稱不合法／撞名／來源不存在）。
    """
    label = str(label or "").strip()
    if not label or len(label) > _LABEL_MAX:
        raise ValueError("label must be 1-%d characters" % _LABEL_MAX)

    base = get_theme(base_name)
    if not base:
        raise ValueError("base theme not found")

    from . import theme_overrides

    merged = theme_overrides.apply_to(base)

    # 名稱不吃使用者輸入的原文——它會變成檔名與 API 路徑的一部分。
    # slug 撞到就往後加序號，別讓主持人為了取名跟系統吵架。
    stem = _slugify(label) or "theme"
    name = stem
    n = 2
    while get_theme(name) is not None:
        name = "%s-%d" % (stem, n)
        n += 1
        if n > 999:
            raise ValueError("too many themes with that name")

    doc: Dict[str, Any] = {
        "name": name,
        "label": label,
        "description": base.get("description") or "",
        "styles": merged.get("styles") or {},
    }
    if merged.get("font"):
        doc["font"] = merged["font"]
    if base.get("palette"):
        doc["palette"] = base["palette"]
    if base.get("layout"):
        doc["layout"] = base["layout"]
    if base.get("bg"):
        doc["bg"] = base["bg"]
    if base.get("effects_preset"):
        doc["effects_preset"] = base["effects_preset"]

    os.makedirs(_USER_THEMES_DIR, exist_ok=True)
    path = os.path.join(_USER_THEMES_DIR, name + ".yaml")
    with open(path, "w", encoding="utf-8") as fh:
        yaml.safe_dump(doc, fh, allow_unicode=True, sort_keys=False)

    _scan()
    logger.info("[Themes] Created user theme: %s", name)
    return {"name": name, "label": label, "custom": True}


def delete_user_theme(name: str) -> bool:
    """刪掉使用者主題。內建主題一律拒絕（回 False）。"""
    if not _SAFE_KEY_RE.match(str(name or "")):
        return False
    if not is_user_theme(name):
        return False
    path = os.path.join(_USER_THEMES_DIR, name + ".yaml")
    if not os.path.isfile(path):
        path = os.path.join(_USER_THEMES_DIR, name + ".yml")
    if not os.path.isfile(path):
        return False
    os.remove(path)
    # 正在用的主題被刪掉就退回預設，不要讓大螢幕指著一個不存在的主題
    with _active_lock:
        was_active = _active_theme == name
    _scan()
    if was_active:
        set_active("default")
    logger.info("[Themes] Deleted user theme: %s", name)
    return True
