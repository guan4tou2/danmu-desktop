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
}

_RANGES = {
    "Speed": {"min": 0.5, "max": 3.0},
    "Opacity": {"min": 20, "max": 100},
    "FontSize": {"min": 16, "max": 64},
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
                if key in self._options and isinstance(value, list) and len(value) == 4:
                    if key in _PICK_SET_KEYS and not isinstance(value[1], list):
                        # Legacy scalar at slot 1 → migrate to empty allowlist.
                        value = [value[0], [], value[2], value[3]]
                    elif key in _PICK_SET_KEYS:
                        # Sanitise existing list (drop bad entries, dedupe).
                        value = [value[0], _coerce_allowlist(value[1]), value[2], value[3]]
                    self._options[key] = value
        except Exception:
            return

    def _persist(self):
        self._settings_file.parent.mkdir(parents=True, exist_ok=True)
        tmp_file = self._settings_file.with_suffix(self._settings_file.suffix + ".tmp")
        payload = json.dumps(self._options, ensure_ascii=True)
        tmp_file.write_text(payload)
        os.replace(tmp_file, self._settings_file)

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

            if key in self._ranges:
                value = round(float(value), 1) if key == "Speed" else int(value)
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
