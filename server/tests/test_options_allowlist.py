"""Allowlist support for pick-set option keys (Color / FontFamily / Layout).

v5.0.0+: admins can restrict which presets viewers see for these three keys
by setting `options[key][1]` to a list of allowed values. Empty list means
"all presets allowed" (backward-compatible default).
"""

import json

from server.managers.settings import SettingsStore
from server.services.settings import (
    PICK_SET_KEYS,
    get_allowlist,
    get_options,
    set_allowlist,
)


def _login_csrf(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


# ─── Store-level: shape & migration ────────────────────────────────────────


def test_default_options_have_empty_allowlist_for_pick_sets(app):
    opts = get_options()
    for key in PICK_SET_KEYS:
        assert key in opts, f"missing {key} in default options"
        assert isinstance(opts[key][1], list), f"{key}[1] should be list, got {type(opts[key][1])}"
        assert opts[key][1] == [], f"{key}[1] default should be empty allowlist"


def test_set_allowlist_via_service(app):
    new_row = set_allowlist("Color", ["#FFFFFF", "#FF0000", "#7DD3FC"])
    assert new_row[1] == ["#FFFFFF", "#FF0000", "#7DD3FC"]
    assert get_allowlist("Color") == ["#FFFFFF", "#FF0000", "#7DD3FC"]


def test_set_allowlist_dedupes_and_strips(app):
    set_allowlist("FontFamily", ["NotoSansTC", "  NotoSansTC  ", "Inter", "", "NotoSansTC"])
    # Strip + dedupe (preserves order); empty entries dropped.
    assert get_allowlist("FontFamily") == ["NotoSansTC", "Inter"]


def test_set_allowlist_idempotent(app):
    set_allowlist("Layout", ["scroll", "top_fixed"])
    set_allowlist("Layout", ["scroll", "top_fixed"])
    assert get_allowlist("Layout") == ["scroll", "top_fixed"]


def test_get_allowlist_unknown_key_returns_empty(app):
    assert get_allowlist("Speed") == []
    assert get_allowlist("Bogus") == []


def test_set_allowlist_rejects_non_pickset_key(app):
    import pytest

    with pytest.raises(ValueError):
        set_allowlist("Speed", ["1", "2"])


def test_update_value_rejects_non_list_for_pickset_slot1(app):
    """update_value("Color", 1, ...) must reject non-list values."""
    import pytest

    from server.services.settings import settings_store

    with pytest.raises(ValueError):
        settings_store.update_value("Color", 1, "not a list")
    with pytest.raises(ValueError):
        settings_store.update_value("Color", 1, 42)


# ─── Migration: legacy on-disk file with scalar at slot 1 ──────────────────


def test_migration_from_legacy_scalar_slot1(tmp_path, monkeypatch):
    """A v4.x settings.json with `"Color": [true, 0, 0, "#FFFFFF"]` should
    upgrade to `[true, [], 0, "#FFFFFF"]` on first load — and this must be
    idempotent (re-loading the migrated file yields the same shape).
    """
    legacy = {
        "Color": [True, 0, 0, "#FFFFFF"],
        "Opacity": [True, 0, 100, 70],
        "FontSize": [True, 20, 100, 50],
        "Speed": [True, 1, 10, 4],
        "FontFamily": [True, "", "", "NotoSansTC"],
        "Effects": [True, "", "", ""],
    }
    settings_file = tmp_path / "legacy_settings.json"
    settings_file.write_text(json.dumps(legacy))
    monkeypatch.setenv("SETTINGS_FILE", str(settings_file))

    s = SettingsStore()
    opts = s.get_options()
    assert isinstance(opts["Color"][1], list)
    assert opts["Color"][1] == []
    # FontFamily slot 1 was "" — also coerce to empty list.
    assert isinstance(opts["FontFamily"][1], list)
    assert opts["FontFamily"][1] == []

    # Persist a mutation, reload — migration is idempotent.
    s.set_allowlist("Color", ["#FF0000"])
    s2 = SettingsStore()
    assert s2.get_options()["Color"][1] == ["#FF0000"]


# ─── Endpoint: POST /admin/options/<key>/allowlist ─────────────────────────


def test_allowlist_endpoint_sets_color(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/options/Color/allowlist",
        json={"allowlist": ["#FFFFFF", "#7DD3FC"]},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200, res.data
    body = json.loads(res.data)
    assert body["key"] == "Color"
    assert body["option"][1] == ["#FFFFFF", "#7DD3FC"]


def test_allowlist_endpoint_empty_clears(client):
    token = _login_csrf(client)
    client.post(
        "/admin/options/FontFamily/allowlist",
        json={"allowlist": ["NotoSansTC"]},
        headers={"X-CSRF-Token": token},
    )
    res = client.post(
        "/admin/options/FontFamily/allowlist",
        json={"allowlist": []},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    body = json.loads(res.data)
    assert body["option"][1] == []


def test_allowlist_endpoint_rejects_non_pickset_key(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/options/Speed/allowlist",
        json={"allowlist": ["1"]},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400


def test_allowlist_endpoint_rejects_non_list(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/options/Color/allowlist",
        json={"allowlist": "not-a-list"},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400


def test_allowlist_endpoint_requires_csrf(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    res = client.post(
        "/admin/options/Color/allowlist",
        json={"allowlist": ["#FFFFFF"]},
    )
    assert res.status_code == 403


def test_allowlist_endpoint_requires_login(client):
    res = client.post(
        "/admin/options/Color/allowlist",
        json={"allowlist": ["#FFFFFF"]},
        headers={"X-CSRF-Token": "stub"},
    )
    # CSRF runs first, but without login session the CSRF token is absent → 403
    assert res.status_code in (401, 403)


def test_allowlist_endpoint_clamps_oversized_payload(client):
    token = _login_csrf(client)
    huge = [f"item{i}" for i in range(200)]
    res = client.post(
        "/admin/options/Color/allowlist",
        json={"allowlist": huge},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400


# ─── /admin/update path: list value at index=1 for pick-set key ────────────


def test_admin_update_accepts_list_at_index1_for_color(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/update",
        json={"type": "Color", "index": 1, "value": ["#FFFFFF", "#FF0000"]},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    opts = get_options()
    assert opts["Color"][1] == ["#FFFFFF", "#FF0000"]


def test_admin_update_rejects_list_for_numeric_key(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/update",
        json={"type": "Speed", "index": 1, "value": [1, 2, 3]},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400


def test_admin_update_rejects_list_at_wrong_index(client):
    token = _login_csrf(client)
    res = client.post(
        "/admin/update",
        json={"type": "Color", "index": 3, "value": ["#FF0000"]},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400


# ─── /get_settings reflects allowlist (viewer-side) ────────────────────────


def test_get_settings_returns_allowlist(client):
    token = _login_csrf(client)
    client.post(
        "/admin/options/Color/allowlist",
        json={"allowlist": ["#FFFFFF", "#7DD3FC"]},
        headers={"X-CSRF-Token": token},
    )
    res = client.get("/get_settings")
    assert res.status_code == 200
    body = json.loads(res.data)
    assert body["Color"][1] == ["#FFFFFF", "#7DD3FC"]
