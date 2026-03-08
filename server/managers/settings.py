import copy
import json
import os
import tempfile
import threading
from pathlib import Path

_DEFAULT_OPTIONS = {
    "Color": [True, 0, 0, "#FFFFFF"],
    "Opacity": [True, 0, 100, 70],
    "FontSize": [True, 20, 100, 50],
    "Speed": [True, 1, 10, 4],
    "FontFamily": [False, "", "", "NotoSansTC"],
    "Effects": [True, "", "", ""],
}

_RANGES = {
    "Speed": {"min": 1, "max": 10},
    "Opacity": {"min": 0, "max": 100},
    "FontSize": {"min": 12, "max": 100},
}


class SettingsStore:
    def __init__(self):
        self._lock = threading.Lock()
        self._options = copy.deepcopy(_DEFAULT_OPTIONS)
        self._ranges = _RANGES
        default_path = Path(tempfile.gettempdir()) / "danmu_runtime_settings.json"
        self._settings_file = Path(os.getenv("SETTINGS_FILE", str(default_path)))
        self._load_from_disk()

    def _load_from_disk(self):
        try:
            if not self._settings_file.exists():
                return
            data = json.loads(self._settings_file.read_text())
            if not isinstance(data, dict):
                return
            for key, value in data.items():
                if key in self._options and isinstance(value, list) and len(value) == 4:
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
            if key == "FontFamily":
                if index == 3 and value is not None:
                    self._options[key][index] = str(value)
                else:
                    self._options[key][index] = value
                self._persist()
                return copy.deepcopy(self._options[key])

            if key in self._ranges:
                value = int(value)
                limits = self._ranges[key]
                if not (limits["min"] <= value <= limits["max"]):
                    raise ValueError(
                        f"{key} value must be between {limits['min']} and {limits['max']}"
                    )
                self._options[key][index] = value
            else:
                self._options[key][index] = value
            self._persist()
            return copy.deepcopy(self._options[key])

    def reset(self):
        with self._lock:
            self._options = copy.deepcopy(_DEFAULT_OPTIONS)
            self._persist()
