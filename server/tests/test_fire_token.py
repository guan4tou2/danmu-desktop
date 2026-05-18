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


# ─── audit log (v5.2 Sprint 2) ──────────────────────────────────────────────


def test_audit_records_rotated_event():
    fire_token.regenerate()
    events = fire_token.recent_audit()
    assert any(e["kind"] == "rotated" for e in events)


def test_audit_records_revoked_event():
    fire_token.regenerate()
    fire_token.revoke()
    events = fire_token.recent_audit()
    assert events[0]["kind"] == "revoked"  # newest first


def test_audit_records_toggle_event_only_on_change():
    fire_token.regenerate()  # also enables
    pre = len(fire_token.recent_audit())
    # Toggling to current value (already True) shouldn't emit a new event
    fire_token.set_enabled(True)
    assert len(fire_token.recent_audit()) == pre
    # But flipping does
    fire_token.set_enabled(False)
    after = fire_token.recent_audit()
    assert after[0]["kind"] == "toggled"
    assert after[0]["meta"]["enabled"] is False


def test_audit_returns_newest_first():
    for _ in range(5):
        fire_token.regenerate()
    events = fire_token.recent_audit()
    assert len(events) == 5
    # Each entry timestamp should be >= the next (newest first)
    for i in range(len(events) - 1):
        assert events[i]["ts"] >= events[i + 1]["ts"]


def test_audit_caps_at_limit():
    for _ in range(10):
        fire_token.regenerate()
    assert len(fire_token.recent_audit(limit=3)) == 3


# ─── created_at field ────────────────────────────────────────────────────────


def test_created_at_set_on_first_regenerate():
    r1 = fire_token.regenerate()
    assert r1["created_at"] > 0
    state = fire_token.get_public_state()
    assert state["created_at"] == r1["created_at"]


def test_created_at_preserved_across_rotations():
    r1 = fire_token.regenerate()
    import time as _time_mod

    _time_mod.sleep(0.01)
    r2 = fire_token.regenerate()
    # rotated_at advances, created_at stays
    assert r2["rotated_at"] > r1["rotated_at"]
    assert r2["created_at"] == r1["created_at"]


def test_created_at_resets_after_revoke_and_regen():
    r1 = fire_token.regenerate()
    fire_token.revoke()
    r2 = fire_token.regenerate()
    assert r2["created_at"] >= r1["rotated_at"]  # new creation after revoke
