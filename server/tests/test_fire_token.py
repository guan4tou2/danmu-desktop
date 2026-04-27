"""Unit tests for the fire_token service.

Covers state load/persist, regenerate (returns raw token once), revoke,
verify (constant-time compare), and isolation across tests.
"""

import pytest

from server.services import fire_token


@pytest.fixture(autouse=True)
def isolated_state(tmp_path, monkeypatch):
    """Redirect _STATE_FILE to a tmp path so tests don't touch real runtime."""
    state_file = tmp_path / "fire_token.json"
    monkeypatch.setattr(fire_token, "_STATE_FILE", state_file)
    fire_token.reset_for_tests()
    yield
    fire_token.reset_for_tests()


# ─── default state ───────────────────────────────────────────────────────────


def test_default_state_disabled_no_token():
    s = fire_token.get_state()
    assert s["enabled"] is False
    assert s["token"] == ""


def test_public_state_omits_token():
    s = fire_token.get_public_state()
    assert "token" not in s
    assert s["has_token"] is False
    assert s["prefix"] == ""


# ─── regenerate ──────────────────────────────────────────────────────────────


def test_regenerate_returns_raw_token_once():
    result = fire_token.regenerate()
    assert "token" in result
    assert result["token"]  # non-empty
    assert len(result["token"]) >= 24
    assert result["enabled"] is True
    # public state should NOT include the raw token
    public = fire_token.get_public_state()
    assert "token" not in public
    assert public["has_token"] is True
    assert public["prefix"].endswith("…")


def test_regenerate_persists_to_disk():
    r1 = fire_token.regenerate()
    fire_token.reset_for_tests()  # drop in-memory cache
    s = fire_token.get_state()
    assert s["token"] == r1["token"]
    assert s["enabled"] is True


def test_regenerate_changes_token_each_call():
    a = fire_token.regenerate()
    b = fire_token.regenerate()
    assert a["token"] != b["token"]
    assert b["rotated_at"] >= a["rotated_at"]


# ─── revoke ──────────────────────────────────────────────────────────────────


def test_revoke_clears_token_and_disables():
    fire_token.regenerate()
    s = fire_token.revoke()
    assert s["enabled"] is False
    assert s["has_token"] is False
    raw = fire_token.get_state()
    assert raw["token"] == ""


# ─── verify ──────────────────────────────────────────────────────────────────


def test_verify_returns_false_when_disabled():
    # enabled=False
    assert fire_token.verify("anything") is False


def test_verify_matches_correct_token():
    r = fire_token.regenerate()
    assert fire_token.verify(r["token"]) is True


def test_verify_rejects_wrong_token():
    fire_token.regenerate()
    assert fire_token.verify("wrong-token") is False


def test_verify_rejects_empty_string():
    fire_token.regenerate()
    assert fire_token.verify("") is False


def test_verify_after_revoke_returns_false():
    r = fire_token.regenerate()
    assert fire_token.verify(r["token"]) is True
    fire_token.revoke()
    assert fire_token.verify(r["token"]) is False


# ─── set_enabled ─────────────────────────────────────────────────────────────


def test_set_enabled_preserves_token():
    r = fire_token.regenerate()
    fire_token.set_enabled(False)
    s = fire_token.get_state()
    assert s["enabled"] is False
    assert s["token"] == r["token"]  # token preserved!
    fire_token.set_enabled(True)
    assert fire_token.verify(r["token"]) is True
