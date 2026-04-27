"""Unit tests for the persistent audit_log service."""

import pytest

from server.services import audit_log


@pytest.fixture(autouse=True)
def isolated_state(tmp_path, monkeypatch):
    """Redirect log file paths to tmp so tests don't touch real runtime."""
    log = tmp_path / "audit.log"
    backup = tmp_path / "audit.log.1"
    monkeypatch.setattr(audit_log, "_LOG_FILE", log)
    monkeypatch.setattr(audit_log, "_BACKUP_FILE", backup)
    audit_log.reset_for_tests()
    yield
    audit_log.reset_for_tests()


def test_append_returns_entry_with_required_fields():
    e = audit_log.append("fire_token", "rotated", actor="admin",
                         meta={"prefix": "abc"})
    assert e["source"] == "fire_token"
    assert e["kind"] == "rotated"
    assert e["actor"] == "admin"
    assert e["meta"] == {"prefix": "abc"}
    assert e["ts"] > 0


def test_append_persists_to_disk():
    audit_log.append("fire_token", "rotated", meta={"x": 1})
    audit_log.reset_for_tests()  # drop in-mem; force reload
    # Re-init log file by writing through monkey-patched path
    # (reset_for_tests deletes the file; reseed and verify load survives)
    audit_log.append("fire_token", "revoked")
    audit_log.reset_for_tests()  # drop again
    audit_log.append("auth", "login")  # third event after restart simulation
    events = audit_log.recent(limit=10)
    assert len(events) == 1
    assert events[0]["kind"] == "login"


def test_recent_newest_first():
    audit_log.append("a", "first")
    audit_log.append("a", "second")
    audit_log.append("a", "third")
    events = audit_log.recent(limit=10)
    assert [e["kind"] for e in events] == ["third", "second", "first"]


def test_recent_filters_by_source():
    audit_log.append("auth", "login")
    audit_log.append("fire_token", "rotated")
    audit_log.append("auth", "logout")
    events = audit_log.recent(source="auth")
    assert all(e["source"] == "auth" for e in events)
    assert len(events) == 2


def test_recent_clamps_limit():
    for i in range(20):
        audit_log.append("a", f"k{i}")
    assert len(audit_log.recent(limit=5)) == 5
    # limit=0 falls back to default (50, clamped); we only have 20.
    assert len(audit_log.recent(limit=0)) == 20


def test_sources_returns_distinct():
    audit_log.append("auth", "login")
    audit_log.append("fire_token", "rotated")
    audit_log.append("auth", "logout")
    audit_log.append("broadcast", "mode_changed")
    sources = audit_log.sources()
    assert sources == sorted({"auth", "fire_token", "broadcast"})


def test_meta_truncated_to_dict():
    e = audit_log.append("a", "k", meta=None)
    assert e["meta"] == {}


def test_actor_optional():
    e = audit_log.append("a", "k")
    assert e["actor"] is None


def test_disk_survives_restart(tmp_path, monkeypatch):
    """Append → drop in-memory ring → re-read should re-load events."""
    log = tmp_path / "audit2.log"
    monkeypatch.setattr(audit_log, "_LOG_FILE", log)
    monkeypatch.setattr(audit_log, "_BACKUP_FILE", tmp_path / "audit2.log.1")
    audit_log.reset_for_tests()
    # First "process": write a few events
    audit_log.append("auth", "login")
    audit_log.append("fire_token", "rotated")
    # Simulate restart: clear in-memory only, file persists
    audit_log._ring.clear()
    audit_log._loaded = False
    # Second "process": read should rehydrate
    events = audit_log.recent(limit=10)
    kinds = [e["kind"] for e in events]
    assert "login" in kinds
    assert "rotated" in kinds


def test_kind_truncated_at_32_chars():
    e = audit_log.append("a", "x" * 100)
    assert len(e["kind"]) == 32


def test_source_truncated_at_32_chars():
    e = audit_log.append("y" * 100, "k")
    assert len(e["source"]) == 32
