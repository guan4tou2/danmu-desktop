import copy
import threading


class SettingsStore:
    def __init__(self):
        self._lock = threading.Lock()
        self._options = {
            "Color": [True, 0, 0, "#FFFFFF"],
            "Opacity": [True, 0, 100, 70],
            "FontSize": [True, 20, 100, 50],
            "Speed": [True, 1, 10, 4],
            "FontFamily": [False, "", "", "NotoSansTC"],
        }
        self._ranges = {
            "Speed": {"min": 1, "max": 11},
            "Opacity": {"min": 0, "max": 100},
            "FontSize": {"min": 12, "max": 100},
        }

    def get_options(self):
        with self._lock:
            return copy.deepcopy(self._options)

    def get_ranges(self):
        return copy.deepcopy(self._ranges)

    def set_toggle(self, key, enabled):
        with self._lock:
            if key in self._options:
                self._options[key][0] = enabled

    def update_value(self, key, index, value):
        with self._lock:
            if key == "FontFamily":
                if index == 3 and value is not None:
                    self._options[key][index] = str(value)
                else:
                    self._options[key][index] = value
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
            return copy.deepcopy(self._options[key])

    def reset(self):
        with self._lock:
            self._options = {
                "Color": [True, 0, 0, "#FFFFFF"],
                "Opacity": [True, 0, 100, 70],
                "FontSize": [True, 20, 100, 50],
                "Speed": [True, 1, 10, 4],
                "FontFamily": [False, "", "", "NotoSansTC"],
            }
