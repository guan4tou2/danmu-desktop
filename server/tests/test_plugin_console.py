"""Unit tests for the plugin_console ring buffer + _PluginStream proxy.

Powers the LIVE CONSOLE panel on the admin Plugins page.
"""

import contextlib

import pytest

from server.services import plugin_console


@pytest.fixture(autouse=True)
def _reset_buffer():
    plugin_console.clear()
    yield
    plugin_console.clear()


# ─── record + recent ─────────────────────────────────────────────────────────


def test_record_appends_single_line():
    plugin_console.record("scoreboard", "INFO", "render tick · team_a=12")
    events = plugin_console.recent()
    assert len(events) == 1
    e = events[0]
    assert e["seq"] == 1
    assert e["plugin"] == "scoreboard"
    assert e["level"] == "INFO"
    assert e["msg"] == "render tick · team_a=12"


def test_record_splits_multi_line_into_separate_entries():
    plugin_console.record("p1", "INFO", "line1\nline2\nline3")
    events = plugin_console.recent()
    msgs = [e["msg"] for e in events]
    # Newest first
    assert msgs == ["line3", "line2", "line1"]


def test_record_skips_empty_lines():
    plugin_console.record("p1", "INFO", "   \n\nreal\n   \n")
    events = plugin_console.recent()
    assert len(events) == 1
    assert events[0]["msg"] == "real"


def test_record_skips_falsy_msg():
    plugin_console.record("p1", "INFO", "")
    plugin_console.record("p1", "INFO", None)  # type: ignore[arg-type]
    assert plugin_console.recent() == []


def test_msg_truncated_to_500_chars():
    long_msg = "x" * 1000
    plugin_console.record("p1", "INFO", long_msg)
    e = plugin_console.recent()[0]
    assert len(e["msg"]) == 500


def test_level_uppercased():
    plugin_console.record("p1", "info", "a")
    plugin_console.record("p1", "warn", "b")
    plugin_console.record("p1", "error", "c")
    levels = [e["level"] for e in plugin_console.recent()]
    assert levels == ["ERROR", "WARN", "INFO"]


def test_default_level_when_empty():
    plugin_console.record("p1", "", "msg")
    assert plugin_console.recent()[0]["level"] == "INFO"


def test_default_plugin_dash_when_empty():
    plugin_console.record("", "INFO", "msg")
    assert plugin_console.recent()[0]["plugin"] == "—"


def test_seq_monotonic():
    plugin_console.record("p1", "INFO", "a")
    plugin_console.record("p1", "INFO", "b")
    plugin_console.record("p1", "INFO", "c")
    seqs = [e["seq"] for e in plugin_console.recent()]
    assert seqs == [3, 2, 1]


def test_recent_filters_by_since():
    plugin_console.record("p1", "INFO", "a")
    plugin_console.record("p1", "INFO", "b")
    plugin_console.record("p1", "INFO", "c")
    later = plugin_console.recent(since=1)
    assert [e["msg"] for e in later] == ["c", "b"]


def test_recent_caps_at_limit():
    for i in range(20):
        plugin_console.record("p1", "INFO", f"msg-{i}")
    events = plugin_console.recent(limit=5)
    assert len(events) == 5


def test_buffer_size_capped():
    for i in range(250):
        plugin_console.record("p1", "INFO", f"line-{i}")
    events = plugin_console.recent(limit=300)
    assert len(events) <= 200
    assert events[0]["msg"] == "line-249"


def test_clear_resets_state():
    plugin_console.record("p1", "INFO", "first")
    plugin_console.clear()
    assert plugin_console.recent() == []
    plugin_console.record("p2", "INFO", "after-reset")
    assert plugin_console.recent()[0]["seq"] == 1


# ─── _PluginStream behaviour (stdout/stderr proxy) ───────────────────────────


def test_pluginstream_buffers_partial_writes_until_newline():
    """`print("a", end="")` then `print("b")` should record one line `ab`."""
    stream = plugin_console._PluginStream("p1", "INFO")
    stream.write("a")
    stream.write("b")
    # Nothing yet — no newline has flushed the line.
    assert plugin_console.recent() == []
    stream.write("\n")
    events = plugin_console.recent()
    assert len(events) == 1
    assert events[0]["msg"] == "ab"


def test_pluginstream_splits_multi_line_write():
    stream = plugin_console._PluginStream("p1", "INFO")
    stream.write("alpha\nbeta\ngamma\n")
    msgs = [e["msg"] for e in plugin_console.recent()]
    assert msgs == ["gamma", "beta", "alpha"]


def test_pluginstream_flush_emits_pending_partial():
    stream = plugin_console._PluginStream("p1", "INFO")
    stream.write("trailing-no-newline")
    stream.flush()
    events = plugin_console.recent()
    assert len(events) == 1
    assert events[0]["msg"] == "trailing-no-newline"


def test_pluginstream_writable_returns_true():
    stream = plugin_console._PluginStream("p1", "INFO")
    assert stream.writable() is True


def test_pluginstream_tags_records_with_level():
    err_stream = plugin_console._PluginStream("p1", "ERROR")
    err_stream.write("oops\n")
    e = plugin_console.recent()[0]
    assert e["level"] == "ERROR"


def test_pluginstream_works_with_redirect_stdout():
    """Verify the stream integrates with contextlib.redirect_stdout — the
    same pattern plugin_manager._run uses to capture print() calls."""
    stream = plugin_console._PluginStream("scoreboard", "INFO")
    with contextlib.redirect_stdout(stream):
        print("captured-print-line")
    stream.flush()
    events = plugin_console.recent()
    assert len(events) == 1
    assert events[0]["msg"] == "captured-print-line"
    assert events[0]["plugin"] == "scoreboard"
