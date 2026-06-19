import copy
import json
import os
import threading
from pathlib import Path

from server.config import Config

# v5.0.0+: pick-set keys (Color / FontFamily / Layout) accept an *allowlist*
# at slot 1 — a list[str] of preset values the admin allows viewers to pick.
# Empty list = all presets allowed. Numeric keys (Opacity / FontSize / Speed)
# keep slot 1 + slot 2 as scalar min/max bounds.
_PICK_SET_KEYS = ("Color", "FontFamily", "Layout")

_DEFAULT_OPTIONS = {
    # slot 1 is now an allowlist (List[str]); empty means "all presets allowed".
    "Color": [True, [], 0, "#FFFFFF"],
    "Opacity": [True, 20, 100, 100],
    "FontSize": [True, 16, 64, 32],
    "Speed": [True, 0.5, 3.0, 1.0],
    # User-override on by default, consistent with Nickname / Layout in the
    # same Identity & Layout grid. The section copy promises font control;
    # admins who want to lock it can flip this off in the admin panel.
    "FontFamily": [True, [], "", "NotoSansTC"],
    "Effects": [True, "", "", ""],
    # Layout is a pick-set; default scroll, allowlist empty (= all five modes).
    "Layout": [True, [], "", "scroll"],
    # 2026-05-16: viewer page system-driven defaults with admin force override.
    # Slot 0 is enabled (always True; toggle is the mode itself); slot 1 is
    # the mode. Theme mode ∈ {"auto", "force-light", "force-dark"}; lang
    # mode ∈ {"auto", "force-zh", "force-en", "force-ja", "force-ko"}.
    # `auto` lets the viewer follow `prefers-color-scheme` / `navigator.language`.
    "ViewerThemeMode": [True, "auto"],
    "ViewerLangMode": [True, "auto"],
    # 2026-05-17 design v3-r10: post-fire client cooldown in seconds.
    # Slot 0 enables/disables; slot 1 is the duration (0 disables entirely
    # even when slot 0 is True — pick whichever surface is more convenient
    # in the admin UI). Server-side 429 retry-after always wins.
    "ViewerFireCooldownSec": [True, 3.0],
}

# Enum-valued keys: validated against an explicit allowed set rather than
# the numeric range / pick-set machinery.
_ENUM_VALUE_KEYS = {
    "ViewerThemeMode": ("auto", "force-light", "force-dark"),
    "ViewerLangMode": ("auto", "force-zh", "force-en", "force-ja", "force-ko"),
}

_RANGES = {
    "Speed": {"min": 0.5, "max": 3.0},
    "Opacity": {"min": 20, "max": 100},
    "FontSize": {"min": 16, "max": 64},
    "ViewerFireCooldownSec": {"min": 0.0, "max": 10.0},
}


def _coerce_allowlist(value) -> list:
    """Normalise an allowlist value to a list of unique non-empty str entries."""
    if not isinstance(value, list):
        return []
    seen = set()
    out = []
    for item in value:
        if not isinstance(item, (str, int, float)):
            continue
        s = str(item).strip()
        if not s or s in seen:
            continue
        seen.add(s)
        out.append(s)
    return out


class SettingsStore:
    def __init__(self):
        self._lock = threading.Lock()
        self._options = copy.deepcopy(_DEFAULT_OPTIONS)
        self._ranges = _RANGES
        # Read env at runtime so tests can monkeypatch after import; fall
        # back to Config.SETTINGS_FILE (which has the sane server/runtime/
        # default baked in).
        self._settings_file = Path(os.environ.get("SETTINGS_FILE") or Config.SETTINGS_FILE)
        self._load_from_disk()

    def _load_from_disk(self):
        """Read settings.json and merge into in-memory options.

        Migration: legacy on-disk data may have a scalar (int) at slot 1 for
        pick-set keys (Color / FontFamily / Layout) — the v4.x shape. Upgrade
        in-place to an empty allowlist and re-persist on next mutation. We
        do NOT eagerly persist here because _load_from_disk runs at startup
        before tests have set up isolation paths.
        """
        try:
            if not self._settings_file.exists():
                return
            data = json.loads(self._settings_file.read_text())
            if not isinstance(data, dict):
                return
            for key, value in data.items():
                if key not in self._options:
                    continue
                try:
                    self._options[key] = self._normalise_option_row(key, value)
                except ValueError:
                    continue
        except Exception:
            return

    def _persist(self):
        self._settings_file.parent.mkdir(parents=True, exist_ok=True)
        tmp_file = self._settings_file.with_suffix(self._settings_file.suffix + ".tmp")
        payload = json.dumps(self._options, ensure_ascii=True)
        tmp_file.write_text(payload)
        os.replace(tmp_file, self._settings_file)

    def _normalise_option_row(self, key, row):
        if key not in self._options:
            raise ValueError(f"Unknown setting key: {key}")
        if not isinstance(row, list):
            raise ValueError(f"{key} must be a list")

        expected_len = len(_DEFAULT_OPTIONS[key])
        if len(row) != expected_len:
            raise ValueError(f"{key} must have {expected_len} entries")

        value = copy.deepcopy(row)
        value[0] = bool(value[0])

        if key in _PICK_SET_KEYS:
            value[1] = _coerce_allowlist(value[1])
            if len(value) > 3 and value[3] is not None:
                value[3] = str(value[3])
            return value

        if key in _ENUM_VALUE_KEYS:
            allowed = _ENUM_VALUE_KEYS[key]
            if value[1] not in allowed:
                raise ValueError(f"{key} value must be one of {allowed}, got {value[1]!r}")
            return value

        if key in self._ranges:
            limits = self._ranges[key]
            for index in range(1, len(value)):
                if key in ("Speed", "ViewerFireCooldownSec"):
                    item = round(float(value[index]), 1)
                else:
                    item = int(value[index])
                if not (limits["min"] <= item <= limits["max"]):
                    raise ValueError(
                        f"{key} value must be between {limits['min']} and {limits['max']}"
                    )
                value[index] = item
            return value

        for index in range(1, len(value)):
            if not isinstance(value[index], (bool, int, float, str)):
                raise ValueError(f"Invalid value type for {key}[{index}]")
        return value

    def get_options(self):
        with self._lock:
            return copy.deepcopy(self._options)

    def get_ranges(self):
        return copy.deepcopy(self._ranges)

    def set_toggle(self, key, enabled):
        with self._lock:
            if key in self._options:
                self._options[key][0] = enabled
                self._persist()

    def update_value(self, key, index, value):
        with self._lock:
            if key not in self._options:
                raise ValueError(f"Unknown setting key: {key}")

            # Pick-set allowlist update (slot 1 only; slot 3 still holds the
            # admin-side default value the picker chips reflect).
            if key in _PICK_SET_KEYS and index == 1:
                if not isinstance(value, list):
                    raise ValueError(f"{key}[1] must be a list (allowlist)")
                self._options[key][1] = _coerce_allowlist(value)
                self._persist()
                return copy.deepcopy(self._options[key])

            if key == "FontFamily":
                if index == 3 and value is not None:
                    self._options[key][index] = str(value)
                else:
                    self._options[key][index] = value
                self._persist()
                return copy.deepcopy(self._options[key])

            # 2026-05-16: enum-valued keys (viewer theme/lang mode) accept
            # only documented mode strings at slot 1. Slot 0 still acts as
            # the boolean toggle (always True in practice — the mode is
            # the toggle).
            if key in _ENUM_VALUE_KEYS and index == 1:
                allowed = _ENUM_VALUE_KEYS[key]
                if value not in allowed:
                    raise ValueError(f"{key} value must be one of {allowed}, got {value!r}")
                self._options[key][index] = value
                self._persist()
                return copy.deepcopy(self._options[key])

            if key in self._ranges:
                if key in ("Speed", "ViewerFireCooldownSec"):
                    value = round(float(value), 1)
                else:
                    value = int(value)
                limits = self._ranges[key]
                if not (limits["min"] <= value <= limits["max"]):
                    raise ValueError(
                        f"{key} value must be between {limits['min']} and {limits['max']}"
                    )
                self._options[key][index] = value
            else:
                # index 0 是 toggle，必須為 bool
                if index == 0:
                    value = bool(value)
                elif not isinstance(value, (bool, int, float, str)):
                    raise ValueError(f"Invalid value type for {key}[{index}]")
                self._options[key][index] = value
            self._persist()
            return copy.deepcopy(self._options[key])

    def set_allowlist(self, key, allowlist):
        """Replace the allowlist (slot 1) for a pick-set key.

        Idempotent: passing the same list twice yields the same persisted
        state. Raises ValueError for unknown / non-pick-set keys.
        """
        if key not in _PICK_SET_KEYS:
            raise ValueError(f"{key} does not support allowlist")
        with self._lock:
            if key not in self._options:
                raise ValueError(f"Unknown setting key: {key}")
            self._options[key][1] = _coerce_allowlist(allowlist)
            self._persist()
            return copy.deepcopy(self._options[key])

    def restore_options(self, options):
        """Replace known option rows from a settings snapshot atomically."""
        if not isinstance(options, dict):
            raise ValueError("settings snapshot must be an object")

        with self._lock:
            next_options = copy.deepcopy(self._options)
            applied = []
            for key, row in options.items():
                if key not in self._options:
                    raise ValueError(f"Unknown setting key: {key}")
                next_options[key] = self._normalise_option_row(key, row)
                applied.append(key)

            self._options = next_options
            self._persist()
            return {
                "applied": applied,
                "settings": copy.deepcopy(self._options),
            }

    def get_allowlist(self, key):
        """Return the allowlist for a pick-set key (empty list = all allowed)."""
        if key not in _PICK_SET_KEYS:
            return []
        with self._lock:
            opt = self._options.get(key)
            if not isinstance(opt, list) or len(opt) < 2:
                return []
            return list(_coerce_allowlist(opt[1]))

    def reset(self):
        with self._lock:
            self._options = copy.deepcopy(_DEFAULT_OPTIONS)
            self._persist()
