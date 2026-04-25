"""SettingsStore 直接單元測試"""

import pytest

from server.managers.settings import SettingsStore


def _store():
    return SettingsStore()


@pytest.fixture(autouse=True)
def isolated_settings_file(tmp_path, monkeypatch):
    settings_file = tmp_path / "settings.json"
    monkeypatch.setenv("SETTINGS_FILE", str(settings_file))
    yield
    if settings_file.exists():
        settings_file.unlink()


# ─── get_options ─────────────────────────────────────────────────────────────


def test_get_options_returns_all_keys():
    s = _store()
    opts = s.get_options()
    for key in ("Color", "Opacity", "FontSize", "Speed", "FontFamily", "Effects"):
        assert key in opts


def test_get_options_returns_deep_copy():
    """修改回傳值不應影響 store 內部狀態"""
    s = _store()
    opts = s.get_options()
    opts["Speed"][3] = 9999
    assert s.get_options()["Speed"][3] != 9999


# ─── set_toggle ──────────────────────────────────────────────────────────────


def test_set_toggle_disables_key():
    s = _store()
    assert s.get_options()["Color"][0] is True
    s.set_toggle("Color", False)
    assert s.get_options()["Color"][0] is False


def test_set_toggle_enables_key():
    s = _store()
    s.set_toggle("Effects", False)
    s.set_toggle("Effects", True)
    assert s.get_options()["Effects"][0] is True


def test_set_toggle_unknown_key_is_noop():
    s = _store()
    before = s.get_options()
    s.set_toggle("NonExistentKey", False)
    assert s.get_options() == before


# ─── update_value — 範圍驗證 ─────────────────────────────────────────────────


def test_update_speed_valid():
    s = _store()
    result = s.update_value("Speed", 3, 2.0)
    assert result[3] == 2.0
    assert s.get_options()["Speed"][3] == 2.0


def test_update_speed_string_coerced_to_float():
    s = _store()
    s.update_value("Speed", 3, "1.5")
    assert s.get_options()["Speed"][3] == 1.5


def test_update_speed_out_of_range_raises():
    s = _store()
    with pytest.raises(ValueError):
        s.update_value("Speed", 3, 11)  # max=3.0


def test_update_speed_below_min_raises():
    s = _store()
    with pytest.raises(ValueError):
        s.update_value("Speed", 3, 0)  # min=0.5


def test_update_opacity_boundary():
    s = _store()
    s.update_value("Opacity", 3, 20)
    assert s.get_options()["Opacity"][3] == 20
    s.update_value("Opacity", 3, 100)
    assert s.get_options()["Opacity"][3] == 100


def test_update_opacity_out_of_range_raises():
    s = _store()
    with pytest.raises(ValueError):
        s.update_value("Opacity", 3, 101)


# ─── update_value — FontFamily 特例 ──────────────────────────────────────────


def test_update_fontfamily_converts_to_str():
    s = _store()
    s.update_value("FontFamily", 3, 42)
    assert s.get_options()["FontFamily"][3] == "42"


def test_update_fontfamily_index_other_than_3():
    s = _store()
    s.update_value("FontFamily", 0, False)
    assert s.get_options()["FontFamily"][0] is False


# ─── update_value — 無範圍限制的 key ─────────────────────────────────────────


def test_update_color_no_range_check():
    s = _store()
    s.update_value("Color", 3, "#000000")
    assert s.get_options()["Color"][3] == "#000000"


def test_update_effects_toggle_index():
    s = _store()
    s.update_value("Effects", 0, False)
    assert s.get_options()["Effects"][0] is False


# ─── reset ───────────────────────────────────────────────────────────────────


def test_reset_restores_defaults():
    s = _store()
    s.update_value("Speed", 3, 2.5)
    s.set_toggle("Color", False)
    s.reset()
    opts = s.get_options()
    assert opts["Speed"][3] == 1.0  # default
    assert opts["Color"][0] is True  # default


def test_reset_returns_deep_copy_of_defaults():
    s = _store()
    s.reset()
    opts = s.get_options()
    opts["Speed"][3] = 999
    assert s.get_options()["Speed"][3] == 1.0  # not affected


# ─── get_ranges ──────────────────────────────────────────────────────────────


def test_get_ranges_contains_expected_keys():
    s = _store()
    ranges = s.get_ranges()
    assert "Speed" in ranges
    assert "Opacity" in ranges
    assert "FontSize" in ranges
    assert ranges["Speed"] == {"min": 0.5, "max": 3.0}


def test_settings_persist_across_instances():
    s1 = _store()
    s1.update_value("Speed", 3, 2.0)

    s2 = _store()
    assert s2.get_options()["Speed"][3] == 2.0


def test_corrupt_settings_file_falls_back_to_defaults(tmp_path, monkeypatch):
    settings_file = tmp_path / "corrupt-settings.json"
    settings_file.write_text("{broken json")
    monkeypatch.setenv("SETTINGS_FILE", str(settings_file))

    s = SettingsStore()
    assert s.get_options()["Speed"][3] == 1.0


# ─── update_value — type validation ──────────────────────────────────────────


def test_update_value_rejects_dict_for_color(app):
    """Dict values for Color must be rejected."""
    from server.services.settings import settings_store

    with pytest.raises((ValueError, TypeError)):
        settings_store.update_value("Color", 1, {"$ne": 1})


def test_update_value_rejects_list_for_effects(app):
    """List values for Effects must be rejected."""
    from server.services.settings import settings_store

    with pytest.raises((ValueError, TypeError)):
        settings_store.update_value("Effects", 1, [1, 2, 3])
