"""Danmu layout mode service.

Provides configuration for different danmu display modes: scrolling,
fixed (top/bottom), floating, and rising.
"""

from enum import Enum


class LayoutMode(Enum):
    SCROLL = "scroll"
    TOP_FIXED = "top_fixed"
    BOTTOM_FIXED = "bottom_fixed"
    FLOAT = "float"
    RISE = "rise"


LAYOUT_CONFIG = {
    LayoutMode.SCROLL: {
        "animation": "danmu-scroll",
        "direction": "rtl",
        "speed_based_duration": True,
        "fixed": False,
    },
    LayoutMode.TOP_FIXED: {
        "position": "top",
        "fixed": True,
        "duration": 3000,
        "fade_out": True,
    },
    LayoutMode.BOTTOM_FIXED: {
        "position": "bottom",
        "fixed": True,
        "duration": 3000,
        "fade_out": True,
    },
    LayoutMode.FLOAT: {
        "random_position": True,
        "fade_in_out": True,
        "duration": 4000,
        "fixed": False,
    },
    LayoutMode.RISE: {
        "animation": "danmu-rise",
        "direction": "btt",
        "speed_based_duration": True,
        "fixed": False,
    },
}

_MODE_METADATA = [
    {
        "name": "scroll",
        "label": "Scroll",
        "description": "Classic right-to-left scrolling",
        "icon": "arrow-left",
    },
    {
        "name": "top_fixed",
        "label": "Top Fixed",
        "description": "Fixed at top, fades out after duration",
        "icon": "arrow-up",
    },
    {
        "name": "bottom_fixed",
        "label": "Bottom Fixed",
        "description": "Fixed at bottom, fades out after duration",
        "icon": "arrow-down",
    },
    {
        "name": "float",
        "label": "Float",
        "description": "Random position with fade in/out",
        "icon": "cloud",
    },
    {
        "name": "rise",
        "label": "Rise",
        "description": "Rises from bottom to top",
        "icon": "chevron-up",
    },
]

_CSS_KEYFRAMES = {
    LayoutMode.TOP_FIXED: (
        "@keyframes danmu-fixed {"
        " 0%{opacity:1}"
        " 80%{opacity:1}"
        " 100%{opacity:0}"
        " }"
    ),
    LayoutMode.BOTTOM_FIXED: (
        "@keyframes danmu-fixed {"
        " 0%{opacity:1}"
        " 80%{opacity:1}"
        " 100%{opacity:0}"
        " }"
    ),
    LayoutMode.FLOAT: (
        "@keyframes danmu-float {"
        " 0%{opacity:0;transform:scale(0.8)}"
        " 10%{opacity:1;transform:scale(1)}"
        " 90%{opacity:1;transform:scale(1)}"
        " 100%{opacity:0;transform:scale(0.8)}"
        " }"
    ),
    LayoutMode.RISE: (
        "@keyframes danmu-rise {"
        " from{transform:translateY(100vh)}"
        " to{transform:translateY(-100%)}"
        " }"
    ),
}


def _parse_mode(mode_str):
    """Resolve a mode string to a LayoutMode, defaulting to SCROLL."""
    try:
        return LayoutMode(mode_str)
    except ValueError:
        return LayoutMode.SCROLL


def get_layout_config(mode_str):
    """Return the configuration dict for *mode_str*.

    Falls back to ``"scroll"`` when the mode string is unrecognised.
    """
    mode = _parse_mode(mode_str)
    return dict(LAYOUT_CONFIG[mode])


def get_all_modes():
    """Return a list of mode descriptors suitable for UI rendering."""
    return [dict(m) for m in _MODE_METADATA]


def get_layout_css(mode_str):
    """Return CSS ``@keyframes`` for *mode_str*, or ``""`` for scroll."""
    mode = _parse_mode(mode_str)
    return _CSS_KEYFRAMES.get(mode, "")
