"""Replay annotation service tests."""

import pytest

from server.services import replay_annotations


@pytest.fixture(autouse=True)
def _isolate_annotations(tmp_path, monkeypatch):
    """Redirect the annotation log file to a per-test tmp path."""
    monkeypatch.setattr(
        replay_annotations,
        "_LOG_FILE",
        tmp_path / "replay_annotations.log",
    )
    replay_annotations.reset_for_tests()
    yield
    replay_annotations.reset_for_tests()


def test_add_returns_row_with_id():
    row = replay_annotations.add(
        session_id="sess-1",
        ts_ms=42_000,
        label="highlight",
        note="user clap",
    )
    assert row["id"].startswith("ann_")
    assert row["session_id"] == "sess-1"
    assert row["ts_ms"] == 42_000
    assert row["label"] == "highlight"
    assert row["note"] == "user clap"
    assert row["actor"] == "admin"


def test_list_for_session_sorted_by_ts():
    replay_annotations.add(session_id="s1", ts_ms=200, note="late")
    replay_annotations.add(session_id="s1", ts_ms=100, note="early")
    replay_annotations.add(session_id="s2", ts_ms=50, note="other-session")
    rows = replay_annotations.list_for_session("s1")
    assert [r["ts_ms"] for r in rows] == [100, 200]
    assert all(r["session_id"] == "s1" for r in rows)


def test_remove_marks_tombstone():
    row = replay_annotations.add(session_id="s1", ts_ms=10)
    assert replay_annotations.remove(row["id"]) is True
    assert replay_annotations.list_for_session("s1") == []
    # Idempotent — removing again returns False.
    assert replay_annotations.remove(row["id"]) is False


def test_invalid_label_rejected():
    with pytest.raises(ValueError):
        replay_annotations.add(session_id="s1", ts_ms=0, label="bogus")


def test_negative_ts_rejected():
    with pytest.raises(ValueError):
        replay_annotations.add(session_id="s1", ts_ms=-1)


def test_missing_session_id_rejected():
    with pytest.raises(ValueError):
        replay_annotations.add(session_id="", ts_ms=0)


def test_note_capped_at_280_chars():
    long_note = "x" * 500
    row = replay_annotations.add(session_id="s1", ts_ms=0, note=long_note)
    assert len(row["note"]) == 280


def test_persists_across_reload(tmp_path, monkeypatch):
    """A second load reads from disk, drops tombstoned rows."""
    log_file = tmp_path / "anno.log"
    monkeypatch.setattr(replay_annotations, "_LOG_FILE", log_file)
    replay_annotations.reset_for_tests()
    row_a = replay_annotations.add(session_id="s1", ts_ms=10, note="A")
    row_b = replay_annotations.add(session_id="s1", ts_ms=20, note="B")
    replay_annotations.remove(row_a["id"])
    # Force re-load from disk.
    replay_annotations._cache.clear()
    replay_annotations._loaded = False
    rows = replay_annotations.list_for_session("s1")
    assert len(rows) == 1
    assert rows[0]["id"] == row_b["id"]
