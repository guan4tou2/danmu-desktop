"""Time-bound ban service tests (design v4 brief 0518-2)."""

import time

import pytest

from server.services import audit_log, moderation_bans


@pytest.fixture(autouse=True)
def _isolate_audit(tmp_path, monkeypatch):
    """Redirect the audit log file + clear the in-memory ring per-test."""
    monkeypatch.setattr(audit_log, "_LOG_FILE", tmp_path / "audit.log")
    monkeypatch.setattr(audit_log, "_BACKUP_FILE", tmp_path / "audit.log.1")
    audit_log._ring.clear()
    audit_log._loaded = True  # skip lazy disk-load (file doesn't exist yet)
    yield
    audit_log._ring.clear()
    audit_log._loaded = False


def test_add_permanent_ban():
    meta = moderation_bans.add_ban(
        target_kind="fingerprint",
        target="abc12345",
        duration_s=0,
        reason="spam bot",
    )
    assert meta["target_kind"] == "fingerprint"
    assert meta["target"] == "abc12345"
    assert meta["duration_s"] == 0
    assert meta["expires_at"] is None
    assert meta["reason"] == "spam bot"


def test_add_timed_ban_sets_expires_at():
    before = time.time()
    meta = moderation_bans.add_ban(
        target_kind="ip",
        target="192.0.2.7",
        duration_s=3600,
    )
    assert meta["duration_s"] == 3600
    assert meta["expires_at"] is not None
    assert before + 3590 < meta["expires_at"] < before + 3610


def test_invalid_target_kind_rejected():
    with pytest.raises(ValueError):
        moderation_bans.add_ban(target_kind="email", target="x@y.z", duration_s=60)


def test_negative_duration_rejected():
    with pytest.raises(ValueError):
        moderation_bans.add_ban(
            target_kind="fingerprint",
            target="abc",
            duration_s=-1,
        )


def test_list_active_includes_permanent_and_active():
    moderation_bans.add_ban("fingerprint", "perm1", 0, reason="forever")
    moderation_bans.add_ban("ip", "10.0.0.5", 3600, reason="rate abuse")
    rows = moderation_bans.list_active()
    statuses = {r["status"] for r in rows}
    assert "permanent" in statuses
    assert "active" in statuses


def test_list_active_marks_expired():
    """Past expires_at → status='expired' surface for UI."""
    now = time.time()
    # Manually inject an expired ban event (bypassing add_ban's now+duration_s).
    audit_log.append(
        "moderation",
        "ban",
        actor="admin",
        meta={
            "target_kind": "fingerprint",
            "target": "expired1",
            "duration_s": 60,
            "expires_at": now - 10,
            "reason": "test",
        },
    )
    rows = moderation_bans.list_active(now=now)
    expired_rows = [r for r in rows if r["status"] == "expired"]
    assert any(r["target"] == "expired1" for r in expired_rows)


def test_unban_drops_target_from_list():
    moderation_bans.add_ban("nick", "spammer", 86400, reason="initial ban")
    pre = [r["target"] for r in moderation_bans.list_active()]
    assert "spammer" in pre
    moderation_bans.remove_ban("nick", "spammer")
    post = [r["target"] for r in moderation_bans.list_active()]
    assert "spammer" not in post


def test_is_banned_permanent():
    moderation_bans.add_ban("fingerprint", "p1", 0)
    assert moderation_bans.is_banned("fingerprint", "p1") is True


def test_is_banned_after_expiry():
    moderation_bans.add_ban("fingerprint", "p2", duration_s=1)
    # Advance time past expiry.
    later = time.time() + 5
    assert moderation_bans.is_banned("fingerprint", "p2", now=later) is False


def test_is_banned_after_manual_unban():
    moderation_bans.add_ban("ip", "1.1.1.1", duration_s=0)
    assert moderation_bans.is_banned("ip", "1.1.1.1") is True
    moderation_bans.remove_ban("ip", "1.1.1.1")
    assert moderation_bans.is_banned("ip", "1.1.1.1") is False


def test_re_ban_overrides_previous_unban():
    moderation_bans.add_ban("fingerprint", "x1", 0)
    moderation_bans.remove_ban("fingerprint", "x1")
    assert moderation_bans.is_banned("fingerprint", "x1") is False
    # Re-ban → latest event wins.
    moderation_bans.add_ban("fingerprint", "x1", 3600)
    assert moderation_bans.is_banned("fingerprint", "x1") is True


def test_reason_capped_at_200_chars():
    long_reason = "x" * 500
    meta = moderation_bans.add_ban("fingerprint", "y1", 60, reason=long_reason)
    assert len(meta["reason"]) == 200


def test_emit_expired_writes_audit_entry():
    moderation_bans.emit_expired("fingerprint", "test1", 3600)
    events = audit_log.recent(limit=50, source="moderation")
    expired = [e for e in events if e.get("kind") == "ban_expired"]
    assert len(expired) == 1
    assert expired[0]["meta"]["target"] == "test1"
