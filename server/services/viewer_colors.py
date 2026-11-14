"""Viewer palette defaults and the color policy shared by rendering and /fire.

The color itself is resolved in services/danmu_style.py (viewer choice → active
theme override → global default), which uses the helpers below.
"""

import re

DEFAULT_COLOR_PRESETS = [
    {"color": "#ffffff", "name_key": "swatchWhite", "aria_key": "swatchAriaWhite"},
    {"color": "#fbbf24", "name_key": "swatchAmber", "aria_key": "swatchAriaAmber"},
    {"color": "#38bdf8", "name_key": "swatchSky", "aria_key": "swatchAriaSky"},
    {"color": "#86efac", "name_key": "swatchGreen", "aria_key": "swatchAriaGreen"},
    {"color": "#f87171", "name_key": "swatchRed", "aria_key": "swatchAriaRed"},
    {"color": "#c084fc", "name_key": "swatchPurple", "aria_key": "swatchAriaPurple"},
]


def normalize_color(value):
    value = str(value or "").strip().lstrip("#")
    return "#" + value.lower() if re.fullmatch(r"[0-9a-fA-F]{6}", value) else None


def get_color_palette(options):
    row = options.get("Color", [True, [], 0, "#FFFFFF"])
    raw = row[1] if isinstance(row[1], list) else []
    colors = list(dict.fromkeys(color for value in raw if (color := normalize_color(value))))
    return colors or [preset["color"] for preset in DEFAULT_COLOR_PRESETS]


def allows_color_picker(options):
    return bool(options.get("ViewerColorPicker", [True])[0])
