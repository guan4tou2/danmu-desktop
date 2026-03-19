# pyright: reportMissingImports=false

import pytest

from server.services import themes as theme_svc  # ty: ignore[unresolved-import]
from server.services.themes import (  # ty: ignore[unresolved-import]
    _parse_theme,
    get_active,
    get_active_name,
    get_theme,
    load_all,
    set_active,
)


@pytest.fixture(autouse=True)
def _reset_themes_state():
    """Reset theme service state before each test."""
    yield
    theme_svc._cache.clear()
    theme_svc._mtime_map.clear()
    theme_svc._path_to_name.clear()
    theme_svc._active_theme = "default"


class TestThemesParsing:
    def test_parse_valid_theme(self, tmp_path):
        f = tmp_path / "test.yaml"
        f.write_text("name: test\nlabel: Test\nstyles:\n  color: '#FF0000'\n")
        result = _parse_theme(str(f))
        assert result is not None
        assert result["name"] == "test"
        assert result["styles"]["color"] == "#FF0000"

    def test_parse_missing_name(self, tmp_path):
        f = tmp_path / "bad.yaml"
        f.write_text("label: NoName\n")
        assert _parse_theme(str(f)) is None

    def test_parse_invalid_yaml(self, tmp_path):
        f = tmp_path / "bad.yaml"
        f.write_text("{{invalid")
        assert _parse_theme(str(f)) is None

    def test_parse_invalid_name_chars(self, tmp_path):
        f = tmp_path / "bad.yaml"
        f.write_text("name: 'bad name!'\nlabel: Bad\n")
        assert _parse_theme(str(f)) is None

    def test_parse_defaults(self, tmp_path):
        f = tmp_path / "minimal.yaml"
        f.write_text("name: minimal\n")
        result = _parse_theme(str(f))
        assert result is not None
        assert result["label"] == "minimal"
        assert result["description"] == ""
        assert result["styles"] == {}
        assert result["effects_preset"] == []

    def test_parse_with_effects_preset(self, tmp_path):
        f = tmp_path / "eff.yaml"
        f.write_text(
            "name: eff\nlabel: Eff\neffects_preset:\n"
            "  - name: glow\n    params:\n      intensity: high\n"
        )
        result = _parse_theme(str(f))
        assert result is not None
        assert len(result["effects_preset"]) == 1
        assert result["effects_preset"][0]["name"] == "glow"


class TestThemesService:
    def test_load_all_returns_list(self):
        themes = load_all(force=True)
        assert isinstance(themes, list)
        names = [t["name"] for t in themes]
        assert "default" in names

    def test_load_all_contains_expected_themes(self):
        themes = load_all(force=True)
        names = [t["name"] for t in themes]
        assert "neon" in names
        assert "retro" in names
        assert "cinema" in names

    def test_load_all_meta_only(self):
        themes = load_all(force=True)
        for t in themes:
            assert "name" in t
            assert "label" in t
            assert "description" in t
            # Should NOT include full styles in meta
            assert "styles" not in t

    def test_get_theme_returns_full_data(self):
        load_all(force=True)
        theme = get_theme("default")
        assert theme is not None
        assert "styles" in theme
        assert "effects_preset" in theme

    def test_get_theme_nonexistent(self):
        load_all(force=True)
        assert get_theme("nonexistent") is None

    def test_set_active_valid(self):
        load_all(force=True)
        assert set_active("default") is True
        assert get_active_name() == "default"

    def test_set_active_neon(self):
        load_all(force=True)
        assert set_active("neon") is True
        assert get_active_name() == "neon"

    def test_set_active_invalid(self):
        load_all(force=True)
        assert set_active("nonexistent") is False

    def test_get_active_returns_theme(self):
        load_all(force=True)
        set_active("default")
        active = get_active()
        assert active["name"] == "default"
        assert "styles" in active

    def test_get_active_fallback_nonexistent(self):
        # Set active to a name that doesn't exist
        theme_svc._active_theme = "does_not_exist"
        # Clear cache so it won't find anything (but scan will reload)
        theme_svc._cache.clear()
        theme_svc._mtime_map.clear()
        theme_svc._path_to_name.clear()
        # After scan, "does_not_exist" still won't be found, so fallback
        active = get_active()
        # It will scan and find "default" in the themes dir, so active
        # returns "default" theme from disk
        assert active["name"] == "default"


class TestThemesAdminRoutes:
    def test_get_themes_unauthorized(self, client):
        rv = client.get("/admin/themes")
        assert rv.status_code == 401

    def test_get_themes_authorized(self, client):
        with client.session_transaction() as sess:
            sess["logged_in"] = True
        rv = client.get("/admin/themes")
        assert rv.status_code == 200
        data = rv.get_json()
        assert "themes" in data
        assert "active" in data

    def test_set_active_theme_unauthorized(self, client):
        rv = client.post(
            "/admin/themes/active",
            json={"name": "neon"},
        )
        # 403 because CSRF check runs before auth check
        assert rv.status_code == 403

    def test_set_active_theme_authorized(self, client):
        with client.session_transaction() as sess:
            sess["logged_in"] = True
            sess["csrf_token"] = "test-csrf"
        rv = client.post(
            "/admin/themes/active",
            json={"name": "neon"},
            headers={"X-CSRF-Token": "test-csrf"},
        )
        assert rv.status_code == 200
        data = rv.get_json()
        assert data["active"] == "neon"

    def test_set_active_theme_missing_name(self, client):
        with client.session_transaction() as sess:
            sess["logged_in"] = True
            sess["csrf_token"] = "test-csrf"
        rv = client.post(
            "/admin/themes/active",
            json={},
            headers={"X-CSRF-Token": "test-csrf"},
        )
        assert rv.status_code == 400

    def test_set_active_theme_not_found(self, client):
        with client.session_transaction() as sess:
            sess["logged_in"] = True
            sess["csrf_token"] = "test-csrf"
        rv = client.post(
            "/admin/themes/active",
            json={"name": "nonexistent"},
            headers={"X-CSRF-Token": "test-csrf"},
        )
        assert rv.status_code == 404

    def test_reload_themes(self, client):
        with client.session_transaction() as sess:
            sess["logged_in"] = True
            sess["csrf_token"] = "test-csrf"
        rv = client.post(
            "/admin/themes/reload",
            headers={"X-CSRF-Token": "test-csrf"},
        )
        assert rv.status_code == 200
        data = rv.get_json()
        assert "themes" in data


class TestThemesPublicAPI:
    def test_list_themes_public(self, client):
        rv = client.get("/themes")
        assert rv.status_code == 200
        data = rv.get_json()
        assert "themes" in data
        assert "active" in data
        names = [t["name"] for t in data["themes"]]
        assert "default" in names
