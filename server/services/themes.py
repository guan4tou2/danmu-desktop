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


def _scan():
    """Scan themes directory and update cache."""
    if not os.path.isdir(_THEMES_DIR):
        return

    current_files: Dict[str, float] = {}
    for fname in os.listdir(_THEMES_DIR):
        if not fname.endswith((".yaml", ".yml")):
            continue
        fpath = os.path.join(_THEMES_DIR, fname)
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
    """Return list of all themes (meta only) + bundle flags."""
    if force or not _cache:
        _scan()
    with _lock:
        return [
            {
                "name": t["name"],
                "label": t["label"],
                "description": t["description"],
                "bundle": _bundle_flags(t),
            }
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
    """Get the active theme data."""
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
    return theme


def get_active_name() -> str:
    """Get the name of the currently active theme."""
    with _active_lock:
        return _active_theme
