"""
Overlay widget service.

Manages persistent overlay widgets (scoreboards, tickers, labels) that display
alongside danmu. Widgets are broadcast to overlay clients via the WS queue.
"""

import logging
import uuid
from typing import Any, Dict, List, Optional

from server.services import ws_queue

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

# In-memory widget store
_widgets: Dict[str, dict] = {}


def _broadcast():
    """Broadcast current widget state to all overlay clients."""
    ws_queue.enqueue_message(
        {
            "type": "widget_sync",
            "widgets": list(_widgets.values()),
        }
    )


def create_widget(widget_type: str, config: dict) -> dict:
    """Create a new overlay widget.

    Args:
        widget_type: One of 'scoreboard', 'ticker', 'label'
        config: Widget-specific configuration

    Returns:
        The created widget dict
    """
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
        "config": _validate_config(widget_type, config),
    }

    _widgets[widget_id] = widget
    _broadcast()
    logger.info("Widget created: %s (%s)", widget_id, widget_type)
    return widget


def update_widget(widget_id: str, config: dict) -> Optional[dict]:
    """Update an existing widget's configuration."""
    if widget_id not in _widgets:
        return None

    widget = _widgets[widget_id]
    widget_type = widget["type"]

    if "position" in config:
        pos = config["position"]
        if pos in POSITIONS:
            widget["position"] = pos

    if "visible" in config:
        widget["visible"] = bool(config["visible"])

    widget["config"] = _validate_config(widget_type, config, widget["config"])
    _broadcast()
    return widget


def delete_widget(widget_id: str) -> bool:
    """Delete a widget by ID."""
    if widget_id not in _widgets:
        return False

    del _widgets[widget_id]
    _broadcast()
    logger.info("Widget deleted: %s", widget_id)
    return True


def list_widgets() -> List[dict]:
    """Return all widgets."""
    return list(_widgets.values())


def get_widget(widget_id: str) -> Optional[dict]:
    """Get a single widget by ID."""
    return _widgets.get(widget_id)


def clear_all() -> None:
    """Remove all widgets."""
    _widgets.clear()
    _broadcast()


def update_scoreboard_score(
    widget_id: str, team_index: int, delta: int = 1
) -> Optional[dict]:
    """Increment/decrement a scoreboard team's score."""
    widget = _widgets.get(widget_id)
    if not widget or widget["type"] != "scoreboard":
        return None

    teams = widget["config"].get("teams", [])
    if 0 <= team_index < len(teams):
        teams[team_index]["score"] = max(0, teams[team_index]["score"] + delta)
        _broadcast()
    return widget


# ── Validation helpers ────────────────────────────────────────────────────────


def _validate_config(
    widget_type: str, new: dict, existing: Optional[dict] = None
) -> dict:
    """Validate and merge widget config based on type."""
    base = dict(existing) if existing else {}

    if widget_type == "scoreboard":
        return _validate_scoreboard(new, base)
    elif widget_type == "ticker":
        return _validate_ticker(new, base)
    elif widget_type == "label":
        return _validate_label(new, base)
    return base


def _validate_scoreboard(new: dict, base: dict) -> dict:
    """Scoreboard config: title, teams [{name, score, color}]."""
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
        base["bgColor"] = str(new["bgColor"])[:50]
    if "textColor" in new:
        base["textColor"] = str(new["textColor"])[:20]
    if "teams" in new and isinstance(new["teams"], list):
        teams = []
        for t in new["teams"][:10]:  # max 10 teams
            teams.append(
                {
                    "name": str(t.get("name", "Team"))[:30],
                    "score": max(0, int(t.get("score", 0))),
                    "color": str(t.get("color", "#06b6d4"))[:20],
                }
            )
        base["teams"] = teams

    return base


def _validate_ticker(new: dict, base: dict) -> dict:
    """Ticker config: messages [str], speed, bgColor."""
    base.setdefault("messages", [])
    base.setdefault("speed", 60)  # px/s
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
        base["bgColor"] = str(new["bgColor"])[:50]
    if "textColor" in new:
        base["textColor"] = str(new["textColor"])[:20]

    return base


def _validate_label(new: dict, base: dict) -> dict:
    """Label config: text, fontSize, bgColor."""
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
        base["bgColor"] = str(new["bgColor"])[:50]
    if "textColor" in new:
        base["textColor"] = str(new["textColor"])[:20]
    if "padding" in new:
        base["padding"] = str(new["padding"])[:30]

    return base
