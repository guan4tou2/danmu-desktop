"""Tests for server.services.layout module."""

import pytest

from server.services.layout import (
    LayoutMode,
    get_all_modes,
    get_layout_config,
    get_layout_css,
)


class TestLayoutModeEnum:
    def test_has_five_members(self):
        assert len(LayoutMode) == 5

    def test_member_values(self):
        assert LayoutMode.SCROLL.value == "scroll"
        assert LayoutMode.TOP_FIXED.value == "top_fixed"
        assert LayoutMode.BOTTOM_FIXED.value == "bottom_fixed"
        assert LayoutMode.FLOAT.value == "float"
        assert LayoutMode.RISE.value == "rise"


class TestGetLayoutConfig:
    def test_scroll_config(self):
        cfg = get_layout_config("scroll")
        assert cfg["animation"] == "danmu-scroll"
        assert cfg["direction"] == "rtl"
        assert cfg["speed_based_duration"] is True
        assert cfg["fixed"] is False

    def test_top_fixed_config(self):
        cfg = get_layout_config("top_fixed")
        assert cfg["position"] == "top"
        assert cfg["fixed"] is True
        assert cfg["duration"] == 3000
        assert cfg["fade_out"] is True

    def test_bottom_fixed_config(self):
        cfg = get_layout_config("bottom_fixed")
        assert cfg["position"] == "bottom"
        assert cfg["fixed"] is True
        assert cfg["duration"] == 3000
        assert cfg["fade_out"] is True

    def test_float_config(self):
        cfg = get_layout_config("float")
        assert cfg["random_position"] is True
        assert cfg["fade_in_out"] is True
        assert cfg["duration"] == 4000
        assert cfg["fixed"] is False

    def test_rise_config(self):
        cfg = get_layout_config("rise")
        assert cfg["animation"] == "danmu-rise"
        assert cfg["direction"] == "btt"
        assert cfg["speed_based_duration"] is True
        assert cfg["fixed"] is False

    def test_unknown_mode_defaults_to_scroll(self):
        cfg = get_layout_config("nonexistent")
        assert cfg == get_layout_config("scroll")

    def test_empty_string_defaults_to_scroll(self):
        cfg = get_layout_config("")
        assert cfg == get_layout_config("scroll")

    def test_returns_copy(self):
        cfg1 = get_layout_config("scroll")
        cfg2 = get_layout_config("scroll")
        assert cfg1 is not cfg2


class TestGetAllModes:
    def test_returns_five_modes(self):
        modes = get_all_modes()
        assert len(modes) == 5

    def test_each_mode_has_required_keys(self):
        for mode in get_all_modes():
            assert "name" in mode
            assert "label" in mode
            assert "description" in mode
            assert "icon" in mode

    def test_mode_names(self):
        names = [m["name"] for m in get_all_modes()]
        assert names == ["scroll", "top_fixed", "bottom_fixed", "float", "rise"]

    def test_returns_copies(self):
        modes1 = get_all_modes()
        modes2 = get_all_modes()
        assert modes1[0] is not modes2[0]


class TestGetLayoutCss:
    def test_scroll_returns_empty_string(self):
        assert get_layout_css("scroll") == ""

    def test_top_fixed_returns_keyframes(self):
        css = get_layout_css("top_fixed")
        assert "@keyframes danmu-fixed" in css
        assert "opacity" in css

    def test_bottom_fixed_returns_keyframes(self):
        css = get_layout_css("bottom_fixed")
        assert "@keyframes danmu-fixed" in css
        assert "opacity" in css

    def test_float_returns_keyframes(self):
        css = get_layout_css("float")
        assert "@keyframes danmu-float" in css
        assert "transform" in css
        assert "scale" in css

    def test_rise_returns_keyframes(self):
        css = get_layout_css("rise")
        assert "@keyframes danmu-rise" in css
        assert "translateY" in css

    def test_unknown_mode_returns_empty_string(self):
        assert get_layout_css("unknown") == ""
