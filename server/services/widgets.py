"""
Overlay widget service.

Manages persistent overlay widgets (scoreboards, tickers, labels) that display
alongside danmu. Widgets are broadcast to overlay clients via the WS queue.

2026-11-03（Widget 持久化 P0）: the store used to be a plain in-memory dict —
a server restart silently wiped every label, ticker and scoreboard (live
scores included). State now lives in ``runtime/widgets.json`` via the shared
JsonState container (atomic tmp+rename writes); everything read back from
disk passes through the same per-type config validators the admin API uses.
"""

import logging
import re
import time
import uuid
from typing import Dict, List, Optional

from server.services import ws_queue
from server.services.json_state import JsonState

logger = logging.getLogger(__name__)

# Valid widget types
WIDGET_TYPES = {"scoreboard", "ticker", "label"}

# Widget position presets
POSITIONS = {
    "top-left": {"top": "20px", "left": "20px"},
    "top-center": {"top": "20px", "left": "50%", "transform": "translateX(-50%)"},
    "top-right": {"top": "20px", "right": "20px"},
    "bottom-left": {"bottom": "20px", "left": "20px"},
    "bottom-center": {"bottom": "20px", "left": "50%", "transform": "translateX(-50%)"},
    "bottom-right": {"bottom": "20px", "right": "20px"},
    "center": {
        "top": "50%",
        "left": "50%",
        "transform": "translate(-50%, -50%)",
    },
}


def _default_state() -> dict:
    return {"widgets": {}}


def _normalize_state(raw) -> dict:
    """Validate + sanitize the persisted widget store.

    Runs on load AND on every update, so anything that comes back from
    disk is re-checked by the same validators that guard the admin API.
    """
    if not isinstance(raw, dict):
        raise ValueError("widget state must be a dict")
    raw_widgets = raw.get("widgets", {})
    if not isinstance(raw_widgets, dict):
        raise ValueError("widgets must be a dict")

    widgets: Dict[str, dict] = {}
    for wid, w in raw_widgets.items():
        if not isinstance(w, dict):
            continue
        wtype = w.get("type")
        if wtype not in WIDGET_TYPES:
            continue
        wid = str(wid)[:32]
        position = w.get("position", "top-left")
        if position not in POSITIONS:
            position = "top-left"
        try:
            created_at = float(w.get("created_at") or 0.0)
        except (TypeError, ValueError):
            created_at = 0.0
        try:
            # 把存量 config 當「全新補丁」重過驗證器：缺的鍵補預設、
            # 超界值被夾回範圍——而不是原樣放行（原樣放行會讓舊檔裡
            # 手改壞的數值躲過鉗制）。單條腐壞只丟該條，不拖垮整個 store。
            config = _validate_config(wtype, w.get("config") or {})
        except (TypeError, ValueError):
            continue
        widgets[wid] = {
            "id": wid,
            "type": wtype,
            "position": position,
            "visible": bool(w.get("visible", True)),
            "created_at": created_at,
            "config": config,
        }
    return {"widgets": widgets}


_widget_state = JsonState(
    "widgets.json", default=_default_state, normalize=_normalize_state
)


def _persist(widgets: Dict[str, dict]) -> None:
    """Replace the widgets map and persist (call while holding state.lock)."""
    _widget_state.update({"widgets": widgets})


def _broadcast():
    """Broadcast current widget state to all overlay clients."""
    ws_queue.enqueue_message(
        {
            "type": "widget_sync",
            "widgets": list(_widget_state.get()["widgets"].values()),
        }
    )


def create_widget(widget_type: str, config: dict) -> dict:
    if widget_type not in WIDGET_TYPES:
        raise ValueError(f"Unknown widget type: {widget_type}")

    widget_id = uuid.uuid4().hex[:8]
    position = config.get("position", "top-left")
    if position not in POSITIONS:
        position = "top-left"

    widget = {
        "id": widget_id,
        "type": widget_type,
        "position": position,
        "visible": True,
        "created_at": time.time(),
        "config": _validate_config(widget_type, config),
    }

    with _widget_state.lock:
        state = _widget_state.get()
        state["widgets"][widget_id] = widget
        _persist(state["widgets"])
    _broadcast()
    logger.info("Widget created: %s (%s)", widget_id, widget_type)
    return widget


def update_widget(widget_id: str, config: dict) -> Optional[dict]:
    with _widget_state.lock:
        state = _widget_state.get()
        widget = state["widgets"].get(widget_id)
        if widget is None:
            return None

        if "position" in config:
            pos = config["position"]
            if pos in POSITIONS:
                widget["position"] = pos

        if "visible" in config:
            widget["visible"] = bool(config["visible"])

        widget["config"] = _validate_config(widget["type"], config, widget["config"])

        state["widgets"][widget_id] = widget
        _persist(state["widgets"])

    _broadcast()
    return widget


def delete_widget(widget_id: str) -> bool:
    with _widget_state.lock:
        state = _widget_state.get()
        if widget_id not in state["widgets"]:
            return False
        del state["widgets"][widget_id]
        _persist(state["widgets"])

    _broadcast()
    logger.info("Widget deleted: %s", widget_id)
    return True


def list_widgets() -> List[dict]:
    return list(_widget_state.get()["widgets"].values())


def get_widget(widget_id: str) -> Optional[dict]:
    return _widget_state.get()["widgets"].get(widget_id)


def clear_all() -> None:
    with _widget_state.lock:
        _widget_state.update({"widgets": {}})
    _broadcast()


def update_scoreboard_score(widget_id: str, team_index: int, delta: int = 1) -> Optional[dict]:
    with _widget_state.lock:
        state = _widget_state.get()
        widget = state["widgets"].get(widget_id)
        if not widget or widget["type"] != "scoreboard":
            return None

        teams = widget["config"].get("teams", [])
        if 0 <= team_index < len(teams):
            teams[team_index]["score"] = max(0, teams[team_index]["score"] + delta)

        state["widgets"][widget_id] = widget
        _persist(state["widgets"])

    _broadcast()
    return widget


def reset_for_tests(path=None) -> None:
    """Drop the cache and optionally redirect the store (pytest isolation)."""
    _widget_state.reset_for_tests(path)


# ── Sanitization helpers ─────────────────────────────────────────────────────

_COLOR_RE = re.compile(
    r"^("
    r"#[0-9a-fA-F]{3,8}"  # hex: #fff, #ffffff, #ffffffaa
    r"|rgba?\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*(,\s*[\d.]+\s*)?\)"  # rgb/rgba
    r"|hsla?\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*(,\s*[\d.]+\s*)?\)"  # hsl/hsla
    r"|transparent"
    r")$"
)

_PADDING_RE = re.compile(r"^[\d]+px(\s+[\d]+px){0,3}$")


def _safe_color(value: str, default: str) -> str:
    """Validate a CSS color value. Returns default if invalid."""
    value = str(value).strip()[:50]
    if _COLOR_RE.match(value):
        return value
    return default


def _safe_padding(value: str, default: str) -> str:
    """Validate a CSS padding value. Returns default if invalid."""
    value = str(value).strip()[:30]
    if _PADDING_RE.match(value):
        return value
    return default


# ── Validation helpers ────────────────────────────────────────────────────────


def _validate_config(widget_type: str, new: dict, existing: Optional[dict] = None) -> dict:
    base = dict(existing) if existing else {}

    if widget_type == "scoreboard":
        return _validate_scoreboard(new, base)
    elif widget_type == "ticker":
        return _validate_ticker(new, base)
    elif widget_type == "label":
        return _validate_label(new, base)
    return base


def _validate_scoreboard(new: dict, base: dict) -> dict:
    base.setdefault("title", "")
    base.setdefault("teams", [])
    base.setdefault("fontSize", 18)
    base.setdefault("bgColor", "rgba(15,23,42,0.85)")
    base.setdefault("textColor", "#ffffff")

    if "title" in new:
        base["title"] = str(new["title"])[:100]
    if "fontSize" in new:
        base["fontSize"] = max(10, min(72, int(new["fontSize"])))
    if "bgColor" in new:
        base["bgColor"] = _safe_color(new["bgColor"], base["bgColor"])
    if "textColor" in new:
        base["textColor"] = _safe_color(new["textColor"], base["textColor"])
    if "teams" in new and isinstance(new["teams"], list):
        teams = []
        for t in new["teams"][:10]:
            teams.append(
                {
                    "name": str(t.get("name", "Team"))[:30],
                    "score": max(0, int(t.get("score", 0))),
                    "color": _safe_color(t.get("color", "#06b6d4"), "#06b6d4"),
                }
            )
        base["teams"] = teams

    return base


def _validate_ticker(new: dict, base: dict) -> dict:
    base.setdefault("messages", [])
    base.setdefault("speed", 60)
    base.setdefault("separator", " \u2022 ")
    base.setdefault("fontSize", 16)
    base.setdefault("bgColor", "rgba(15,23,42,0.85)")
    base.setdefault("textColor", "#ffffff")

    if "messages" in new and isinstance(new["messages"], list):
        base["messages"] = [str(m)[:200] for m in new["messages"][:50]]
    if "speed" in new:
        base["speed"] = max(10, min(300, int(new["speed"])))
    if "separator" in new:
        base["separator"] = str(new["separator"])[:10]
    if "fontSize" in new:
        base["fontSize"] = max(10, min(48, int(new["fontSize"])))
    if "bgColor" in new:
        base["bgColor"] = _safe_color(new["bgColor"], base["bgColor"])
    if "textColor" in new:
        base["textColor"] = _safe_color(new["textColor"], base["textColor"])

    return base


def _validate_label(new: dict, base: dict) -> dict:
    base.setdefault("text", "")
    base.setdefault("fontSize", 24)
    base.setdefault("bgColor", "rgba(15,23,42,0.85)")
    base.setdefault("textColor", "#ffffff")
    base.setdefault("padding", "8px 16px")

    if "text" in new:
        base["text"] = str(new["text"])[:500]
    if "fontSize" in new:
        base["fontSize"] = max(10, min(96, int(new["fontSize"])))
    if "bgColor" in new:
        base["bgColor"] = _safe_color(new["bgColor"], base["bgColor"])
    if "textColor" in new:
        base["textColor"] = _safe_color(new["textColor"], base["textColor"])
    if "padding" in new:
        base["padding"] = _safe_padding(new["padding"], base["padding"])

    return base
