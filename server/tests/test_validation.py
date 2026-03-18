"""Schema 驗證直接單元測試（不需要 Flask）"""

from server.services.validation import (
    BlacklistKeywordSchema,
    FireRequestSchema,
    SettingUpdateSchema,
    ToggleSettingSchema,
    validate_request,
)


def _load(schema_class, data):
    return validate_request(schema_class, data)


# ─── FireRequestSchema ────────────────────────────────────────────────────────


def test_fire_schema_valid_minimal():
    result, errors = _load(FireRequestSchema, {"text": "hello"})
    assert errors is None
    assert result["text"] == "hello"
    assert result["isImage"] is False
    assert result["effects"] == []


def test_fire_schema_empty_text_rejected():
    _, errors = _load(FireRequestSchema, {"text": ""})
    assert errors is not None
    assert "text" in errors


def test_fire_schema_text_too_long():
    _, errors = _load(FireRequestSchema, {"text": "x" * 101})
    assert errors is not None
    assert "text" in errors


def test_fire_schema_valid_color_hex():
    result, errors = _load(FireRequestSchema, {"text": "hi", "color": "#ff0000"})
    assert errors is None
    assert result["color"] == "#ff0000"


def test_fire_schema_invalid_color_rejected():
    _, errors = _load(FireRequestSchema, {"text": "hi", "color": "not-a-color"})
    assert errors is not None
    assert "color" in errors


def test_fire_schema_opacity_out_of_range():
    _, errors = _load(FireRequestSchema, {"text": "hi", "opacity": 101})
    assert errors is not None
    assert "opacity" in errors


def test_fire_schema_opacity_boundary_valid():
    for val in (0, 50, 100):
        result, errors = _load(FireRequestSchema, {"text": "hi", "opacity": val})
        assert errors is None, f"opacity={val} should be valid"
        assert result["opacity"] == val


def test_fire_schema_speed_out_of_range():
    _, errors = _load(FireRequestSchema, {"text": "hi", "speed": 11})
    assert errors is not None
    assert "speed" in errors


def test_fire_schema_size_boundary():
    _, errors = _load(FireRequestSchema, {"text": "hi", "size": 0})
    assert errors is not None
    result, errors = _load(FireRequestSchema, {"text": "hi", "size": 200})
    assert errors is None


def test_fire_schema_unknown_fields_excluded():
    result, errors = _load(FireRequestSchema, {"text": "hi", "hacker": "evil"})
    assert errors is None
    assert "hacker" not in result


def test_fire_schema_fingerprint_too_long():
    _, errors = _load(FireRequestSchema, {"text": "hi", "fingerprint": "x" * 129})
    assert errors is not None
    assert "fingerprint" in errors


def test_fire_schema_rejects_oversized_effect_name():
    """Effect name longer than 128 chars should be rejected."""
    long_name = "a" * 129
    _, errors = _load(
        FireRequestSchema,
        {"text": "hi", "effects": [{"name": long_name, "params": {}}]},
    )
    assert errors is not None
    assert "effects" in errors


def test_fire_schema_accepts_valid_effect_name():
    """Effect name within 128 chars should be accepted."""
    result, errors = _load(
        FireRequestSchema,
        {"text": "hi", "effects": [{"name": "a" * 128, "params": {}}]},
    )
    assert errors is None
    assert len(result["effects"]) == 1


def test_fire_schema_rejects_non_string_effect_name():
    """Non-string effect name should be rejected."""
    _, errors = _load(
        FireRequestSchema,
        {"text": "hi", "effects": [{"name": 12345, "params": {}}]},
    )
    assert errors is not None
    assert "effects" in errors


# ─── BlacklistKeywordSchema ───────────────────────────────────────────────────


def test_blacklist_keyword_valid():
    result, errors = _load(BlacklistKeywordSchema, {"keyword": "spam"})
    assert errors is None
    assert result["keyword"] == "spam"


def test_blacklist_keyword_empty_rejected():
    _, errors = _load(BlacklistKeywordSchema, {"keyword": ""})
    assert errors is not None


def test_blacklist_keyword_too_long_rejected():
    _, errors = _load(BlacklistKeywordSchema, {"keyword": "x" * 201})
    assert errors is not None


def test_blacklist_keyword_null_byte_rejected():
    _, errors = _load(BlacklistKeywordSchema, {"keyword": "bad\x00word"})
    assert errors is not None


def test_blacklist_keyword_newline_rejected():
    _, errors = _load(BlacklistKeywordSchema, {"keyword": "bad\nword"})
    assert errors is not None


def test_blacklist_keyword_tab_rejected():
    _, errors = _load(BlacklistKeywordSchema, {"keyword": "bad\tword"})
    assert errors is not None


def test_blacklist_keyword_unicode_allowed():
    result, errors = _load(BlacklistKeywordSchema, {"keyword": "壞詞"})
    assert errors is None
    assert result["keyword"] == "壞詞"


# ─── SettingUpdateSchema ──────────────────────────────────────────────────────


def test_setting_update_valid():
    result, errors = _load(SettingUpdateSchema, {"type": "Speed", "value": 5, "index": 3})
    assert errors is None
    assert result["type"] == "Speed"
    assert result["value"] == 5
    assert result["index"] == 3


def test_setting_update_all_valid_types():
    for t in ("Color", "Opacity", "FontSize", "Speed", "FontFamily", "Effects"):
        result, errors = _load(SettingUpdateSchema, {"type": t, "value": 1, "index": 0})
        assert errors is None, f"type={t} should be valid"


def test_setting_update_unknown_type_rejected():
    _, errors = _load(SettingUpdateSchema, {"type": "HackerField", "value": 1, "index": 0})
    assert errors is not None
    assert "type" in errors


def test_setting_update_index_out_of_range():
    _, errors = _load(SettingUpdateSchema, {"type": "Speed", "value": 5, "index": 4})
    assert errors is not None
    assert "index" in errors


def test_setting_update_missing_required_fields():
    _, errors = _load(SettingUpdateSchema, {"type": "Speed"})
    assert errors is not None
    assert "value" in errors or "index" in errors


# ─── ToggleSettingSchema ──────────────────────────────────────────────────────


def test_toggle_setting_valid():
    result, errors = _load(ToggleSettingSchema, {"key": "Effects", "enabled": False})
    assert errors is None
    assert result["enabled"] is False


def test_toggle_setting_all_valid_keys():
    for k in ("Color", "Opacity", "FontSize", "Speed", "FontFamily", "Effects"):
        result, errors = _load(ToggleSettingSchema, {"key": k, "enabled": True})
        assert errors is None, f"key={k} should be valid"


def test_toggle_setting_unknown_key_rejected():
    _, errors = _load(ToggleSettingSchema, {"key": "Unknown", "enabled": True})
    assert errors is not None
    assert "key" in errors


def test_toggle_setting_missing_enabled_rejected():
    _, errors = _load(ToggleSettingSchema, {"key": "Speed"})
    assert errors is not None
    assert "enabled" in errors
