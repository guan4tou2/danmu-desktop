"""Tests for services.audience + /admin/audience endpoints (Batch 12-pending BE)."""

import pytest

from server.services import audience as audience_svc
from server.services import fingerprint_tracker

# ── Helpers ───────────────────────────────────────────────────────────────


def login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def csrf_token(client):
    login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


@pytest.fixture(autouse=True)
def _isolate_audience(tmp_path, monkeypatch):
    """Each test gets a clean in-memory state + a tmp persistence file."""
    audience_svc.reset_for_test()
    fingerprint_tracker.reset()
    monkeypatch.setattr(audience_svc, "_STATE_FILE", tmp_path / "audience.json")
    # Also isolate moderation_bans persistence so kick tests don't pollute the
    # real audit log.
    from server.services import moderation_bans

    monkeypatch.setattr(moderation_bans, "_BANS_FILE", tmp_path / "bans.json", raising=False)
    yield
    audience_svc.reset_for_test()
    fingerprint_tracker.reset()


# ── Service-level risk score ──────────────────────────────────────────────


def test_score_clean_record_is_zero():
    """Quiet activity with no flags ⇒ risk 0."""
    fingerprint_tracker.record("fp_clean", "1.2.3.4", "Mozilla", blocked=False)
    entry = audience_svc.get_entry("fp_clean")
    assert entry["risk_score"] == 0
    assert entry["risk_factors"] == []


def test_score_high_rate_factor():
    """rate_per_min > 60 → +30 with 'high_rate' factor."""
    # Fire 70 messages to push rate above threshold (rate window 60s, so 70
    # within ~1s puts rate at 70).
    for _ in range(70):
        fingerprint_tracker.record("fp_burst", "1.2.3.4", "ua", blocked=False)
    entry = audience_svc.get_entry("fp_burst")
    assert "high_rate" in entry["risk_factors"]
    assert entry["risk_score"] >= 30


def test_score_blocked_msgs_factor():
    """blocked > 5 → +25 with 'blocked_msgs' factor (and 'state_blocked' +20)."""
    for _ in range(6):
        fingerprint_tracker.record("fp_blocked", "1.2.3.4", "ua", blocked=True)
    entry = audience_svc.get_entry("fp_blocked")
    assert "blocked_msgs" in entry["risk_factors"]
    # blocked > 0 forces state="blocked" which adds another 20
    assert entry["risk_score"] >= 45


def test_score_admin_flagged_factor():
    """Admin-set flag adds 10 + 'admin_flagged' factor."""
    fingerprint_tracker.record("fp_flag", "1.2.3.4", "ua", blocked=False)
    audience_svc.set_flag("fp_flag", True, "suspicious nick")
    entry = audience_svc.get_entry("fp_flag")
    assert "admin_flagged" in entry["risk_factors"]
    assert entry["is_flagged"] is True
    assert entry["flag_note"] == "suspicious nick"


def test_score_caps_at_100():
    """Stacked factors cap the score at 100.

    Rubric (see audience._score):
      blocked > 5         → +25
      state == blocked    → +20  (forced by any blocked>0)
      rate > 60           → +30  (200 in < 60s pushes rate to 200)
      admin_flagged       → +10
      kicked              → +10
      heavy_recent        → +5   (msgs > 100 AND last_seen < 60s ago)
                        total = 100 (cap)
    """
    for _ in range(200):
        fingerprint_tracker.record("fp_max", "1.2.3.4", "ua", blocked=True)
    audience_svc.set_flag("fp_max", True, "")
    audience_svc.kick("fp_max", reason="banhammer")
    entry = audience_svc.get_entry("fp_max")
    assert entry["risk_score"] == 100


# ── Service-level flag / kick ─────────────────────────────────────────────


def test_set_flag_persists():
    """After set_flag, the entry returns is_flagged=True from a fresh get."""
    fingerprint_tracker.record("fp_x", "1.2.3.4", "ua", blocked=False)
    audience_svc.set_flag("fp_x", True, "hot fp")
    entry = audience_svc.get_entry("fp_x")
    assert entry["is_flagged"] is True
    assert entry["flag_note"] == "hot fp"


def test_set_flag_unflag_clears_note():
    """Toggling flagged=False also clears the note."""
    fingerprint_tracker.record("fp_x", "1.2.3.4", "ua", blocked=False)
    audience_svc.set_flag("fp_x", True, "to remove")
    audience_svc.set_flag("fp_x", False)
    entry = audience_svc.get_entry("fp_x")
    assert entry["is_flagged"] is False
    assert entry["flag_note"] == ""


def test_set_flag_truncates_long_note():
    """Notes > 200 chars get truncated at the service layer."""
    fingerprint_tracker.record("fp_t", "1.2.3.4", "ua", blocked=False)
    audience_svc.set_flag("fp_t", True, "x" * 500)
    entry = audience_svc.get_entry("fp_t")
    assert len(entry["flag_note"]) == 200


def test_kick_marks_is_kicked():
    """Kick sets is_kicked=True + kicked_at timestamp."""
    fingerprint_tracker.record("fp_k", "1.2.3.4", "ua", blocked=False)
    audience_svc.kick("fp_k", reason="bot pattern")
    entry = audience_svc.get_entry("fp_k")
    assert entry["is_kicked"] is True
    assert entry["kick_reason"] == "bot pattern"
    assert entry["kicked_at"] is not None


def test_unkick_clears_overlay():
    """Unkick reverses the kick state."""
    fingerprint_tracker.record("fp_k", "1.2.3.4", "ua", blocked=False)
    audience_svc.kick("fp_k", reason="x")
    audience_svc.unkick("fp_k")
    entry = audience_svc.get_entry("fp_k")
    assert entry["is_kicked"] is False
    assert entry["kicked_at"] is None


def test_list_entries_sorts_by_risk_desc():
    """Highest-risk fingerprints appear first in list_entries()."""
    # Low-risk: clean record
    fingerprint_tracker.record("fp_low", "1.1.1.1", "ua")
    # High-risk: many blocked messages
    for _ in range(10):
        fingerprint_tracker.record("fp_high", "2.2.2.2", "ua", blocked=True)
    entries = audience_svc.list_entries()
    assert entries[0]["fingerprint"] == "fp_high"
    assert entries[0]["risk_score"] > entries[-1]["risk_score"]


def test_get_entry_returns_none_for_unknown_fp():
    assert audience_svc.get_entry("never_seen") is None


def test_get_entry_returns_overlay_for_kicked_unseen_fp():
    """A fingerprint kicked-but-never-tracked still has overlay entry."""
    audience_svc.kick("fp_orphan", reason="known abuser")
    entry = audience_svc.get_entry("fp_orphan")
    assert entry is not None
    assert entry["is_kicked"] is True


def test_stats_reflects_flags_and_kicks():
    fingerprint_tracker.record("fp_a", "1.1.1.1", "ua")
    fingerprint_tracker.record("fp_b", "2.2.2.2", "ua")
    audience_svc.set_flag("fp_a", True)
    audience_svc.kick("fp_b", reason="")
    s = audience_svc.stats()
    assert s["total_live"] == 2
    assert s["flagged"] == 1
    assert s["kicked"] == 1


# ── Endpoint auth + validation ────────────────────────────────────────────


def test_list_endpoint_requires_login(client):
    resp = client.get("/admin/audience/list")
    assert resp.status_code in (302, 401, 403)


def test_list_endpoint_returns_entries_stats(client):
    fingerprint_tracker.record("fp_e", "1.2.3.4", "ua")
    login(client)
    resp = client.get("/admin/audience/list")
    assert resp.status_code == 200
    body = resp.get_json()
    assert "entries" in body
    assert "stats" in body
    assert isinstance(body["entries"], list)


def test_flag_endpoint_requires_csrf(client):
    login(client)
    resp = client.post("/admin/audience/flag", json={"fingerprint": "x"})
    # Without CSRF header → 400/403 (security middleware blocks)
    assert resp.status_code in (400, 403)


def test_flag_endpoint_rejects_empty_fingerprint(client):
    token = csrf_token(client)
    resp = client.post(
        "/admin/audience/flag",
        json={},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400
    assert "fingerprint" in resp.get_json()["error"]


def test_flag_endpoint_sets_flag(client):
    fingerprint_tracker.record("fp_api", "1.2.3.4", "ua")
    token = csrf_token(client)
    resp = client.post(
        "/admin/audience/flag",
        json={"fingerprint": "fp_api", "flagged": True, "note": "via api"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["entry"]["is_flagged"] is True
    assert body["entry"]["flag_note"] == "via api"


def test_kick_endpoint_marks_kicked(client):
    fingerprint_tracker.record("fp_kick", "1.2.3.4", "ua")
    token = csrf_token(client)
    resp = client.post(
        "/admin/audience/kick",
        json={"fingerprint": "fp_kick", "reason": "rate abuse"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    assert resp.get_json()["entry"]["is_kicked"] is True


def test_detail_endpoint_404_on_unknown(client):
    login(client)
    resp = client.get("/admin/audience/nope")
    assert resp.status_code == 404
