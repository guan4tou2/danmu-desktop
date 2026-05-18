"""Font subset service tests (P1 #5, 2026-05-18)."""

import pytest

from server.services import fonts as fonts_svc


def test_parse_unicode_range_single_codepoint():
    s = fonts_svc._parse_unicode_range("U+0041")
    assert s == {0x41}


def test_parse_unicode_range_range():
    s = fonts_svc._parse_unicode_range("U+0020-007E")
    assert min(s) == 0x20
    assert max(s) == 0x7E
    assert len(s) == 0x7E - 0x20 + 1


def test_parse_unicode_range_multiple_tokens():
    s = fonts_svc._parse_unicode_range("U+0020-007E,U+4E00-4E0F")
    assert 0x20 in s
    assert 0x7E in s
    assert 0x4E00 in s
    assert 0x4E0F in s
    assert 0x4E10 not in s


def test_parse_unicode_range_case_insensitive():
    s_upper = fonts_svc._parse_unicode_range("U+4E00")
    s_lower = fonts_svc._parse_unicode_range("u+4e00")
    assert s_upper == s_lower


def test_parse_unicode_range_strips_prefix():
    s_with_prefix = fonts_svc._parse_unicode_range("U+0041")
    s_without_prefix = fonts_svc._parse_unicode_range("0041")
    assert s_with_prefix == s_without_prefix


def test_parse_unicode_range_empty_raises():
    with pytest.raises(ValueError):
        fonts_svc._parse_unicode_range("")


def test_parse_unicode_range_invalid_hex_raises():
    with pytest.raises(ValueError):
        fonts_svc._parse_unicode_range("U+ZZZZ")


def test_parse_unicode_range_lo_greater_than_hi_raises():
    with pytest.raises(ValueError):
        fonts_svc._parse_unicode_range("U+007E-0020")


def test_parse_unicode_range_huge_single_range_caps():
    with pytest.raises(ValueError, match="too large"):
        fonts_svc._parse_unicode_range("U+0000-FFFFFF")


def test_parse_unicode_range_total_caps():
    """Multiple ranges that together exceed 500k codepoints raise."""
    # 200k each, total = 600k, just over cap
    parts = ",".join([f"U+{i:04X}-{i + 200_000 - 1:04X}" for i in range(0, 1, 1)])
    parts = "U+000000-02FFFF,U+030000-05FFFF,U+060000-08FFFF"  # 3 * 200k = 600k
    with pytest.raises(ValueError, match="exceeds 500k"):
        fonts_svc._parse_unicode_range(parts)


def test_subset_presets_have_valid_ranges():
    """Every preset string parses without error."""
    for name, range_str in fonts_svc.SUBSET_PRESETS.items():
        codepoints = fonts_svc._parse_unicode_range(range_str)
        assert len(codepoints) > 0, f"Preset {name} parsed to empty"


def test_subset_uploaded_font_raises_when_fonttools_missing(monkeypatch, tmp_path):
    """Endpoint surfaces a clear runtime error when dep is absent."""
    # Set up a real placeholder file so input validation passes.
    monkeypatch.setattr(fonts_svc.state, "USER_FONTS_DIR", str(tmp_path))
    placeholder = tmp_path / "any.ttf"
    placeholder.write_bytes(b"\x00\x01\x00\x00fake font")

    # Force the import inside subset_uploaded_font to fail.
    import builtins

    real_import = builtins.__import__

    def fake_import(name, *args, **kwargs):
        if name.startswith("fontTools"):
            raise ImportError("fonttools not installed")
        return real_import(name, *args, **kwargs)

    monkeypatch.setattr(builtins, "__import__", fake_import)
    with pytest.raises(RuntimeError, match="fontTools not installed"):
        fonts_svc.subset_uploaded_font("any", "U+0020-007E")


def test_subset_uploaded_font_invalid_name_raises():
    """Empty / traversal-attempt font names are rejected before parsing."""
    with pytest.raises(ValueError):
        fonts_svc.subset_uploaded_font("", "U+0020-007E")


def test_subset_uploaded_font_missing_file_raises(monkeypatch, tmp_path):
    """Non-existent font name raises FileNotFoundError (after validation)."""
    monkeypatch.setattr(fonts_svc.state, "USER_FONTS_DIR", str(tmp_path))
    with pytest.raises(FileNotFoundError):
        fonts_svc.subset_uploaded_font("nonexistent", "U+0020-007E")
