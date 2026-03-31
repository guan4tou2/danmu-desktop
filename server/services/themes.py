"""
Danmu 風格主題包管理服務

主題檔案格式（YAML）：
  name, label, description
  styles: { color, textStroke, strokeWidth, strokeColor, textShadow, shadowBlur }
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

_lock = threading.Lock()
_cache: Dict[str, Dict[str, Any]] = {}
_mtime_map: Dict[str, float] = {}
_path_to_name: Dict[str, str] = {}
_active_theme: str = "default"
_active_lock = threading.Lock()


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

    return {
        "name": name,
        "label": str(data.get("label", name)),
        "description": str(data.get("description", "")),
        "styles": data.get("styles", {}),
        "effects_preset": data.get("effects_preset", []),
    }


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


def load_all(force: bool = False) -> List[Dict[str, Any]]:
    """Return list of all themes (meta only)."""
    if force or not _cache:
        _scan()
    with _lock:
        return [
            {
                "name": t["name"],
                "label": t["label"],
                "description": t["description"],
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
