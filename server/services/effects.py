"""
Danmu 特效插件管理服務

.dme 檔案格式（YAML）：
  name, label, description
  params: { key: {label, type, default, min, max, step, options} }
  keyframes: |  (CSS @keyframes 字串)
  animation: "dme-xxx {param}s ..."  (參數佔位符 {key})

熱插拔：每 SCAN_INTERVAL 秒最多掃描一次 effects/ 目錄；
        mtime 變更時自動重新載入對應的 .dme 檔。
"""

import hashlib
import logging
import re
import threading
import time
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import yaml

logger = logging.getLogger(__name__)

_EFFECTS_DIR = Path(__file__).parent.parent / "effects"
_SCAN_INTERVAL = 5.0  # 秒

# 快取
_cache: Dict[str, Dict[str, Any]] = {}  # name -> parsed effect dict
_mtime_map: Dict[str, float] = {}  # filepath -> mtime
_path_to_name: Dict[str, str] = {}  # filepath -> effect name（反查用）
_last_scan: float = 0.0
_lock = threading.Lock()
_scan_lock = threading.Lock()

# 合法的參數名稱（白名單）
_SAFE_KEY_RE = re.compile(r"^[a-zA-Z0-9_]+$")
# 合法的 select option value（白名單）
_SAFE_OPTION_RE = re.compile(r"^[a-zA-Z0-9_\-]+$")


# ─── 載入器 ──────────────────────────────────────────────────────────────────


def _parse_dme(path: Path) -> Optional[Dict[str, Any]]:
    """解析單一 .dme 檔案，回傳 effect dict 或 None（解析失敗時）。"""
    try:
        with open(path, encoding="utf-8") as f:
            data = yaml.safe_load(f)
        if not isinstance(data, dict) or not data.get("name"):
            logger.warning("Invalid .dme file (missing name): %s", path)
            return None

        name = str(data["name"])
        if not _SAFE_KEY_RE.match(name):
            logger.warning("Invalid effect name '%s' in %s", name, path)
            return None

        # 驗證並正規化 params
        params = {}
        for k, v in (data.get("params") or {}).items():
            if not _SAFE_KEY_RE.match(k):
                logger.warning("Invalid param key '%s' in %s", k, path)
                continue
            if not isinstance(v, dict):
                continue
            ptype = v.get("type", "float")
            if ptype not in ("float", "int", "select"):
                logger.warning("Unknown param type '%s' in %s", ptype, path)
                continue
            if ptype == "select":
                opts = v.get("options", [])
                valid_opts = []
                for opt in opts:
                    if isinstance(opt, dict) and _SAFE_OPTION_RE.match(str(opt.get("value", ""))):
                        valid_opts.append(
                            {
                                "value": str(opt["value"]),
                                "label": str(opt.get("label", opt["value"])),
                            }
                        )
                params[k] = {**v, "type": ptype, "options": valid_opts}
            else:
                params[k] = {**v, "type": ptype}

        return {
            "name": name,
            "label": str(data.get("label", name)),
            "description": str(data.get("description", "")),
            "params": params,
            "keyframes": str(data.get("keyframes", "")),
            "animation": str(data.get("animation", "")),
        }
    except Exception as e:
        logger.error("Error parsing .dme file %s: %s", path, e)
        return None


def _build_scan_result(
    prev_cache: Dict[str, Dict[str, Any]],
    prev_mtime_map: Dict[str, float],
    prev_path_to_name: Dict[str, str],
) -> Tuple[Dict[str, Dict[str, Any]], Dict[str, float], Dict[str, str]]:
    _EFFECTS_DIR.mkdir(exist_ok=True)
    current_files = {str(p): p for p in _EFFECTS_DIR.glob("*.dme")}
    updated: Dict[str, Dict[str, Any]] = {}
    next_mtime_map: Dict[str, float] = {}
    next_path_to_name: Dict[str, str] = {}

    for fpath, p in current_files.items():
        mtime = p.stat().st_mtime
        prev_name = prev_path_to_name.get(fpath)
        if prev_mtime_map.get(fpath) == mtime and prev_name and prev_name in prev_cache:
            updated[prev_name] = prev_cache[prev_name]
            next_mtime_map[fpath] = mtime
            next_path_to_name[fpath] = prev_name
            continue

        effect = _parse_dme(p)
        if effect:
            name = effect["name"]
            updated[name] = effect
            next_mtime_map[fpath] = mtime
            next_path_to_name[fpath] = name
            logger.info("[Effects] Loaded: %s from %s", name, p.name)

    removed = set(prev_mtime_map) - set(current_files)
    for fpath in removed:
        logger.info(
            "[Effects] Removed effect from: %s (name=%s)",
            fpath,
            prev_path_to_name.get(fpath),
        )

    return updated, next_mtime_map, next_path_to_name


def _scan() -> None:
    """掃描 effects/ 目錄，熱更新 _cache（僅重新解析有變更的檔案）。"""
    global _last_scan
    with _scan_lock:
        with _lock:
            prev_cache = dict(_cache)
            prev_mtime_map = dict(_mtime_map)
            prev_path_to_name = dict(_path_to_name)

        updated, next_mtime_map, next_path_to_name = _build_scan_result(
            prev_cache,
            prev_mtime_map,
            prev_path_to_name,
        )

        with _lock:
            _cache.clear()
            _cache.update(updated)
            _mtime_map.clear()
            _mtime_map.update(next_mtime_map)
            _path_to_name.clear()
            _path_to_name.update(next_path_to_name)
            _last_scan = time.monotonic()


def _maybe_scan(force: bool = False) -> None:
    with _lock:
        should_scan = force or time.monotonic() - _last_scan >= _SCAN_INTERVAL
    if should_scan:
        _scan()


def load_all(force: bool = False) -> List[Dict[str, Any]]:
    """回傳所有已載入的特效（meta 資訊）；必要時觸發熱載入。"""
    _maybe_scan(force=force)
    with _lock:
        effects = list(_cache.values())
    return [
        {k: v for k, v in eff.items() if k not in ("keyframes", "animation")} for eff in effects
    ]


def list_with_file_info() -> List[Dict[str, Any]]:
    """回傳所有特效詳細資訊，含檔案名稱與修改時間（供 admin 管理使用）。"""
    _maybe_scan()
    with _lock:
        items = []
        for fpath, name in _path_to_name.items():
            eff = _cache.get(name)
            if eff:
                items.append((fpath, eff["name"], eff["label"], eff["description"]))

    result = []
    for fpath, name, label, description in items:
        try:
            mtime = Path(fpath).stat().st_mtime
        except OSError:
            mtime = None
        result.append(
            {
                "name": name,
                "label": label,
                "description": description,
                "filename": Path(fpath).name,
                "mtime": mtime,
            }
        )
    return sorted(result, key=lambda x: x["name"])


def delete_by_name(name: str) -> bool:
    """刪除指定名稱的特效檔案並清除快取。"""
    if not _SAFE_KEY_RE.match(name):
        return False
    with _lock:
        fpath = next((fp for fp, n in _path_to_name.items() if n == name), None)
        if not fpath:
            return False
        try:
            Path(fpath).unlink()
        except OSError:
            return False
        _mtime_map.pop(fpath, None)
        _path_to_name.pop(fpath, None)
        _cache.pop(name, None)
        return True


def save_uploaded_effect(content: bytes) -> Tuple[str, Optional[str]]:
    """驗證並儲存上傳的 .dme 特效檔案。回傳 (filename, error_message)。"""
    try:
        data = yaml.safe_load(content.decode("utf-8", errors="replace"))
    except Exception:
        return "", "Invalid YAML format"

    if not isinstance(data, dict) or not data.get("name"):
        return "", "Missing 'name' field"

    name = str(data["name"])
    if not _SAFE_KEY_RE.match(name):
        return "", "Effect name must be alphanumeric/underscore only"

    if not str(data.get("animation", "")).strip():
        return "", "Missing 'animation' field"

    filename = f"{name}.dme"
    _EFFECTS_DIR.mkdir(exist_ok=True)
    dest = _EFFECTS_DIR / filename
    try:
        dest.write_bytes(content)
    except OSError as e:
        logger.error("Failed to save effect file %s: %s", filename, e)
        return "", "Failed to save file"

    _scan()

    return filename, None


def get_effect_content(name: str) -> Optional[str]:
    """回傳指定特效的原始 .dme 檔案文字內容（供 admin 編輯用）。"""
    if not _SAFE_KEY_RE.match(name):
        return None
    _maybe_scan()
    with _lock:
        fpath = next((fp for fp, n in _path_to_name.items() if n == name), None)
    if not fpath:
        return None
    try:
        return Path(fpath).read_text(encoding="utf-8")
    except OSError:
        return None


def save_effect_content(name: str, content: bytes) -> Tuple[Optional[str], Optional[str]]:
    """驗證並覆寫指定特效的 .dme 檔案。回傳 (filename, error_message)。"""
    if not _SAFE_KEY_RE.match(name):
        return None, "Invalid effect name"

    with _lock:
        fpath = next((fp for fp, n in _path_to_name.items() if n == name), None)
    if not fpath:
        return None, "Effect not found"

    try:
        data = yaml.safe_load(content.decode("utf-8", errors="replace"))
    except Exception:
        return None, "Invalid YAML format"

    if not isinstance(data, dict) or not data.get("name"):
        return None, "Missing 'name' field"

    # 確保 YAML 內的 name 與請求的 name 一致，防止透過編輯偷換名稱
    if str(data["name"]) != name:
        return None, f"Name in content '{data['name']}' does not match '{name}'"

    if not str(data.get("animation", "")).strip():
        return None, "Missing 'animation' field"

    try:
        Path(fpath).write_bytes(content)
    except OSError as e:
        logger.error("Failed to save effect file %s: %s", fpath, e)
        return None, "Failed to save file"

    _scan()

    return Path(fpath).name, None


def get_effect(name: str) -> Optional[Dict[str, Any]]:
    """取得完整的特效定義（含 keyframes/animation）。"""
    _maybe_scan()
    with _lock:
        return _cache.get(name)


# ─── 安全 CSS 渲染器 ──────────────────────────────────────────────────────────


def _sanitize_param(key: str, value: Any, param_def: Dict[str, Any]) -> str:
    """
    依照 param type 嚴格清理使用者傳入的值，防止 CSS 注入。
    回傳字串，可安全插入 CSS animation 宣告。
    """
    ptype = param_def.get("type", "float")

    if ptype in ("float", "int"):
        try:
            num = float(value) if ptype == "float" else int(float(value))
        except (TypeError, ValueError):
            num = param_def.get("default", 0)
        lo = param_def.get("min", float("-inf"))
        hi = param_def.get("max", float("inf"))
        num = max(lo, min(hi, num))
        return f"{num:.3f}".rstrip("0").rstrip(".") if ptype == "float" else str(int(num))

    elif ptype == "select":
        allowed = {str(opt["value"]) for opt in param_def.get("options", [])}
        val = str(value)
        if val in allowed:
            return val
        return str(param_def.get("default", ""))

    return ""


def _interpolate(template: str, resolved: Dict[str, str]) -> str:
    """將 {key} 佔位符替換為已清理的值（只替換白名單內的 key）。"""
    result = template
    for k, v in resolved.items():
        result = result.replace(f"{{{k}}}", v)
    # 移除未替換的佔位符（防止殘餘）
    result = re.sub(r"\{[a-zA-Z0-9_]+\}", "", result)
    return result.strip('"').strip("'")


def render_effects(effects_input: List[Dict[str, Any]]) -> Optional[Dict[str, Any]]:
    """
    將使用者選取的特效列表解析成可注入 overlay 的 CSS。

    effects_input: [{name: str, params: {key: value}}]

    回傳: {keyframes: str, animation: str, styleId: str} 或 None（無特效）
    """
    keyframes_parts = []
    animation_parts = []

    for item in effects_input:
        name = str(item.get("name", "")).strip()
        if not name or name == "none":
            continue

        effect = get_effect(name)
        if not effect:
            logger.warning("[Effects] Unknown effect: %s", name)
            continue

        user_params = item.get("params") or {}
        resolved = {}
        for pkey, pdef in effect.get("params", {}).items():
            resolved[pkey] = _sanitize_param(pkey, user_params.get(pkey, pdef.get("default")), pdef)

        kf = _interpolate(effect.get("keyframes", ""), resolved)
        anim = _interpolate(effect.get("animation", ""), resolved)

        if kf:
            keyframes_parts.append(kf)
        if anim:
            animation_parts.append(anim)

    if not animation_parts:
        return None

    keyframes = "\n".join(keyframes_parts)
    animation = ", ".join(animation_parts)
    # animation-composition: add 讓多個 transform 動畫可以疊加而不互相覆蓋
    animation_composition = ", ".join(["add"] * len(animation_parts))
    style_id = hashlib.sha256((keyframes + animation).encode()).hexdigest()[:10]

    return {
        "keyframes": keyframes,
        "animation": animation,
        "animationComposition": animation_composition,
        "styleId": style_id,
    }
