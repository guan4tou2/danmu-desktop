"""Unit tests for the filter_events ring buffer service.

Powers Moderation 即時審核日誌 + the MASKED·24H / BLOCKED·24H stats strip.
"""

import time

import pytest

from server.services import filter_events


@pytest.fixture(autouse=True)
def _reset_buffer():
    filter_events.clear()
    yield
    filter_events.clear()


# ─── record + recent ─────────────────────────────────────────────────────────


def test_record_appends_event_with_seq():
    filter_events.record("block", "rule-1", "spam", "buy now")
    events = filter_events.recent()
    assert len(events) == 1
    assert events[0]["seq"] == 1
    assert events[0]["action"] == "BLOCK"
    assert events[0]["rule_id"] == "rule-1"
    assert events[0]["pattern"] == "spam"
    assert events[0]["text_excerpt"] == "buy now"


def test_seq_increments_monotonically():
    filter_events.record("block", "r1", "a", "x")
    filter_events.record("mask", "r2", "b", "y")
    filter_events.record("allow", "r3", "c", "z")
    events = filter_events.recent()
    seqs = [e["seq"] for e in events]
    assert seqs == [3, 2, 1]  # newest first


def test_recent_filters_by_since():
    filter_events.record("block", "r1", "a", "x")
    filter_events.record("block", "r2", "b", "y")
    filter_events.record("block", "r3", "c", "z")
    later = filter_events.recent(since=1)
    seqs = [e["seq"] for e in later]
    assert seqs == [3, 2]


def test_recent_caps_at_limit():
    for i in range(20):
        filter_events.record("block", f"r{i}", f"p{i}", f"t{i}")
    events = filter_events.recent(limit=5)
    assert len(events) == 5
    # Newest first → seqs 20, 19, 18, 17, 16
    assert [e["seq"] for e in events] == [20, 19, 18, 17, 16]


def test_action_uppercased():
    filter_events.record("block", "r1", "a", "x")
    filter_events.record("Mask", "r2", "b", "y")
    filter_events.record("allow", "r3", "c", "z")
    actions = [e["action"] for e in filter_events.recent()]
    assert "BLOCK" in actions and "MASK" in actions and "ALLOW" in actions


def test_pattern_truncated_to_80_chars():
    long_pattern = "x" * 200
    filter_events.record("block", "r1", long_pattern, "text")
    e = filter_events.recent()[0]
    assert len(e["pattern"]) == 80


def test_text_excerpt_truncated_to_80_chars():
    long_text = "y" * 200
    filter_events.record("block", "r1", "p", long_text)
    e = filter_events.recent()[0]
    assert len(e["text_excerpt"]) == 80


def test_buffer_size_capped():
    """Ring buffer is bounded; oldest entries drop off."""
    for i in range(250):  # > _BUFFER_SIZE = 200
        filter_events.record("block", f"r{i}", "p", "t")
    events = filter_events.recent(limit=300)
    # We should never see more than the buffer cap.
    assert len(events) <= 200
    # Seq counter doesn't reset — newest is 250.
    assert events[0]["seq"] == 250


def test_clear_resets_state():
    filter_events.record("block", "r1", "a", "x")
    filter_events.clear()
    assert filter_events.recent() == []
    # After clear, seq restarts from 1.
    filter_events.record("block", "r2", "b", "y")
    assert filter_events.recent()[0]["seq"] == 1


# ─── counts_24h ──────────────────────────────────────────────────────────────


def test_counts_24h_buckets_by_action():
    filter_events.record("block", "r1", "a", "x")
    filter_events.record("block", "r2", "b", "y")
    filter_events.record("mask", "r3", "c", "z")
    filter_events.record("allow", "r4", "d", "w")
    filter_events.record("review", "r5", "e", "v")
    counts = filter_events.counts_24h()
    assert counts["BLOCK"] == 2
    assert counts["MASK"] == 1
    assert counts["ALLOW"] == 1
    assert counts["REVIEW"] == 1


def test_counts_24h_replace_rolls_into_mask():
    """REPLACE is reported as MASK to match prototype's MASKED tile."""
    filter_events.record("replace", "r1", "a", "x")
    filter_events.record("replace", "r2", "b", "y")
    filter_events.record("mask", "r3", "c", "z")
    counts = filter_events.counts_24h()
    assert counts["MASK"] == 3
    assert counts["REPLACE"] == 0


def test_counts_24h_excludes_old_events(monkeypatch):
    """Events older than 24h are excluded from the aggregate."""
    # Inject an event timestamped 25 hours ago directly into the buffer.
    now = time.time()
    old_event = {
        "seq": 100,
        "ts": now - 25 * 3600,
        "action": "BLOCK",
        "rule_id": "old",
        "pattern": "old",
        "text_excerpt": "old",
        "source": None,
    }
    with filter_events._lock:
        filter_events._buffer.append(old_event)

    filter_events.record("block", "r1", "a", "x")  # within 24h
    counts = filter_events.counts_24h()
    assert counts["BLOCK"] == 1  # only the new one


def test_counts_24h_empty_buffer():
    counts = filter_events.counts_24h()
    assert counts["BLOCK"] == 0
    assert counts["MASK"] == 0
    assert counts["ALLOW"] == 0
    assert counts["REPLACE"] == 0
    assert counts["REVIEW"] == 0
