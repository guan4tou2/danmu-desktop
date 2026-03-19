"""Unit tests for _resolve_danmu_style in api routes."""

from unittest.mock import patch


def _resolve(data, options=None, font_payload=None, effects_result=None):
    """Helper: call _resolve_danmu_style with mocked dependencies."""
    if options is None:
        options = {
            "Color": [True, 0, 0, "#FFFFFF"],
            "Opacity": [True, 0, 100, 70],
            "FontSize": [True, 20, 100, 50],
            "Speed": [True, 1, 10, 4],
            "FontFamily": [False, "", "", "NotoSansTC"],
            "Effects": [True, "", "", ""],
        }

    if font_payload is None:
        font_payload = {"name": "NotoSansTC", "url": None, "type": "default"}

    with (
        patch("server.routes.api.get_options", return_value=options),
        patch("server.routes.api.build_font_payload", return_value=font_payload) as mock_font,
        patch("server.routes.api.render_effects", return_value=effects_result) as mock_render,
    ):
        from server.routes.api import _resolve_danmu_style

        result = _resolve_danmu_style(data)
    return result, mock_font, mock_render


# ─── Color ───────────────────────────────────────────────────────────────────


def test_default_color_applied_when_user_sends_no_color():
    """Admin default color is used when user doesn't provide one."""
    result, _, _ = _resolve({"text": "hello"})
    # Default "#FFFFFF" → stripped to "FFFFFF"
    assert result["color"] == "FFFFFF"


def test_user_color_overrides_default_with_hash_stripping():
    """User-provided color overrides admin default; '#' is stripped."""
    result, _, _ = _resolve({"text": "hello", "color": "#FF0000"})
    assert result["color"] == "FF0000"


def test_user_color_without_hash():
    """User color without '#' prefix also works."""
    result, _, _ = _resolve({"text": "hello", "color": "00FF00"})
    assert result["color"] == "00FF00"


def test_color_forced_when_setting_disabled():
    """When Color setting is disabled (allow_custom=False), admin default is used."""
    options = {
        "Color": [False, 0, 0, "#AABBCC"],
        "Opacity": [True, 0, 100, 70],
        "FontSize": [True, 20, 100, 50],
        "Speed": [True, 1, 10, 4],
        "FontFamily": [False, "", "", "NotoSansTC"],
        "Effects": [True, "", "", ""],
    }
    result, _, _ = _resolve({"text": "hello", "color": "#FF0000"}, options=options)
    assert result["color"] == "AABBCC"


# ─── Font legacy alias ───────────────────────────────────────────────────────


def test_font_field_converted_to_fontinfo():
    """'font' string field is converted to fontInfo dict (legacy alias)."""
    font_payload = {"name": "Arial", "url": None, "type": "system"}
    options = {
        "Color": [True, 0, 0, "#FFFFFF"],
        "Opacity": [True, 0, 100, 70],
        "FontSize": [True, 20, 100, 50],
        "Speed": [True, 1, 10, 4],
        "FontFamily": [True, "", "", "NotoSansTC"],
        "Effects": [True, "", "", ""],
    }
    result, mock_font, _ = _resolve(
        {"text": "hello", "font": "Arial"},
        options=options,
        font_payload=font_payload,
    )
    # build_font_payload should be called with the user's chosen font
    mock_font.assert_called_once_with("Arial")
    assert result["fontInfo"] == font_payload
    # 'font' key should be removed from data
    assert "font" not in result


def test_fontinfo_passed_through_when_font_absent():
    """fontInfo is used directly when 'font' field is absent."""
    font_payload = {"name": "Verdana", "url": None, "type": "system"}
    options = {
        "Color": [True, 0, 0, "#FFFFFF"],
        "Opacity": [True, 0, 100, 70],
        "FontSize": [True, 20, 100, 50],
        "Speed": [True, 1, 10, 4],
        "FontFamily": [True, "", "", "NotoSansTC"],
        "Effects": [True, "", "", ""],
    }
    result, mock_font, _ = _resolve(
        {"text": "hello", "fontInfo": {"name": "Verdana"}},
        options=options,
        font_payload=font_payload,
    )
    mock_font.assert_called_once_with("Verdana")
    assert result["fontInfo"] == font_payload


def test_font_setting_disabled_forces_default_font():
    """When FontFamily setting is disabled, admin default font is used."""
    font_payload = {"name": "NotoSansTC", "url": None, "type": "default"}
    options = {
        "Color": [True, 0, 0, "#FFFFFF"],
        "Opacity": [True, 0, 100, 70],
        "FontSize": [True, 20, 100, 50],
        "Speed": [True, 1, 10, 4],
        "FontFamily": [False, "", "", "NotoSansTC"],
        "Effects": [True, "", "", ""],
    }
    result, mock_font, _ = _resolve(
        {"text": "hello", "fontInfo": {"name": "Verdana"}},
        options=options,
        font_payload=font_payload,
    )
    # FontFamily disabled → chosen_font_name stays as admin default "NotoSansTC"
    mock_font.assert_called_once_with("NotoSansTC")


# ─── Effects ─────────────────────────────────────────────────────────────────


def test_effects_disabled_in_settings_not_rendered():
    """When Effects setting is disabled, render_effects is not called."""
    options = {
        "Color": [True, 0, 0, "#FFFFFF"],
        "Opacity": [True, 0, 100, 70],
        "FontSize": [True, 20, 100, 50],
        "Speed": [True, 1, 10, 4],
        "FontFamily": [False, "", "", "NotoSansTC"],
        "Effects": [False, "", "", ""],
    }
    effects_input = [{"name": "zoom", "params": {}}]
    result, _, mock_render = _resolve(
        {"text": "hello", "effects": effects_input},
        options=options,
    )
    mock_render.assert_not_called()
    assert result["effectCss"] is None


def test_effects_enabled_calls_render_effects():
    """When Effects is enabled and user sends effects, render_effects is called."""
    effects_input = [{"name": "zoom", "params": {"duration": 1.0}}]
    fake_css = {
        "keyframes": "@keyframes dme-zoom{}",
        "animation": "dme-zoom 1s",
        "styleId": "abc",
        "animationComposition": "add",
    }
    result, _, mock_render = _resolve(
        {"text": "hello", "effects": effects_input},
        effects_result=fake_css,
    )
    mock_render.assert_called_once_with(effects_input)
    assert result["effectCss"] == fake_css


def test_effects_empty_list_not_rendered():
    """Empty effects list does not trigger render_effects."""
    result, _, mock_render = _resolve({"text": "hello", "effects": []})
    mock_render.assert_not_called()
    assert result["effectCss"] is None


# ─── Opacity / Size / Speed defaults ─────────────────────────────────────────


def test_default_opacity_size_speed_from_settings():
    """When user doesn't provide opacity/size/speed, admin defaults are used."""
    result, _, _ = _resolve({"text": "hello"})
    assert result["opacity"] == 70
    assert result["size"] == 50
    assert result["speed"] == 4


def test_user_opacity_size_speed_override_defaults():
    """User-provided values override admin defaults."""
    result, _, _ = _resolve({"text": "hello", "opacity": 90, "size": 80, "speed": 7})
    assert result["opacity"] == 90
    assert result["size"] == 80
    assert result["speed"] == 7


def test_opacity_size_speed_forced_when_disabled():
    """When settings are disabled, admin defaults override user values."""
    options = {
        "Color": [True, 0, 0, "#FFFFFF"],
        "Opacity": [False, 0, 100, 50],
        "FontSize": [False, 20, 100, 30],
        "Speed": [False, 1, 10, 5],
        "FontFamily": [False, "", "", "NotoSansTC"],
        "Effects": [True, "", "", ""],
    }
    result, _, _ = _resolve(
        {"text": "hello", "opacity": 90, "size": 80, "speed": 7},
        options=options,
    )
    assert result["opacity"] == 50
    assert result["size"] == 30
    assert result["speed"] == 5
