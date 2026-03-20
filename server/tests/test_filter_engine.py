"""Comprehensive tests for the FilterEngine."""

import time

import pytest

from server.services.filter_engine import FilterEngine, FilterResult


@pytest.fixture(autouse=True)
def reset_engine(tmp_path):
    """Reset the FilterEngine singleton before each test, using a tmpdir for persistence."""
    # Clear singleton
    FilterEngine._instance = None

    engine = FilterEngine(path=str(tmp_path / "rules.json"))
    yield engine

    # Tear down singleton so other test modules aren't affected
    FilterEngine._instance = None


# ── 1. Keyword rule blocks matching text ────────────────────


def test_keyword_rule_blocks_matching_text(reset_engine):
    engine = reset_engine
    engine.add_rule({"type": "keyword", "pattern": "spam", "action": "block"})

    result = engine.check("this is spam content")
    assert result.action == "block"
    assert result.reason
    assert result.rule_id


# ── 2. Keyword rule passes non-matching text ────────────────


def test_keyword_rule_passes_non_matching_text(reset_engine):
    engine = reset_engine
    engine.add_rule({"type": "keyword", "pattern": "spam", "action": "block"})

    result = engine.check("this is fine")
    assert result.action == "pass"
    assert result.text == "this is fine"


# ── 3. Regex rule blocks matching text ──────────────────────


def test_regex_rule_blocks_matching_text(reset_engine):
    engine = reset_engine
    engine.add_rule({"type": "regex", "pattern": r"\d{4}-\d{4}", "action": "block"})

    result = engine.check("call 1234-5678 now")
    assert result.action == "block"
    assert "Regex match" in result.reason


def test_regex_rule_passes_non_matching_text(reset_engine):
    engine = reset_engine
    engine.add_rule({"type": "regex", "pattern": r"\d{4}-\d{4}", "action": "block"})

    result = engine.check("no phone numbers here")
    assert result.action == "pass"


# ── 4. Replace rule modifies text ───────────────────────────


def test_replace_rule_modifies_text(reset_engine):
    engine = reset_engine
    engine.add_rule({
        "type": "replace",
        "pattern": r"bad\w*",
        "action": "replace",
        "replacement": "***",
    })

    result = engine.check("you are badword and baddest")
    assert result.action == "replace"
    assert "bad" not in result.text
    assert "***" in result.text
    assert result.rule_id


# ── 5. Rate limit blocks after exceeding max_count ──────────


def test_rate_limit_blocks_after_limit(reset_engine):
    engine = reset_engine
    engine.add_rule({
        "type": "rate_limit",
        "pattern": "",
        "action": "block",
        "max_count": 3,
        "window_sec": 60.0,
    })

    fp = "user-abc"
    for _ in range(3):
        result = engine.check("hello", fingerprint=fp)
        assert result.action == "pass"

    result = engine.check("hello again", fingerprint=fp)
    assert result.action == "block"
    assert "Rate limit" in result.reason


def test_rate_limit_ignores_without_fingerprint(reset_engine):
    """Rate limit rules should be skipped when no fingerprint is provided."""
    engine = reset_engine
    engine.add_rule({
        "type": "rate_limit",
        "pattern": "",
        "action": "block",
        "max_count": 1,
        "window_sec": 60.0,
    })

    # Without fingerprint, rate_limit rule is skipped entirely
    for _ in range(5):
        result = engine.check("hello")
        assert result.action == "pass"


# ── 6. Priority ordering ────────────────────────────────────


def test_priority_ordering_lower_number_first(reset_engine):
    engine = reset_engine
    # Higher priority number = evaluated later
    engine.add_rule({
        "type": "keyword", "pattern": "hello", "action": "block", "priority": 10,
    })
    # Lower priority number = evaluated first → this allow rule should win
    engine.add_rule({
        "type": "keyword", "pattern": "hello", "action": "allow", "priority": 1,
    })

    result = engine.check("hello world")
    assert result.action == "allow"


def test_priority_ordering_block_wins_when_lower(reset_engine):
    engine = reset_engine
    engine.add_rule({
        "type": "keyword", "pattern": "hello", "action": "allow", "priority": 10,
    })
    engine.add_rule({
        "type": "keyword", "pattern": "hello", "action": "block", "priority": 1,
    })

    result = engine.check("hello world")
    assert result.action == "block"


# ── 7. Remove rule ──────────────────────────────────────────


def test_remove_rule_no_longer_blocks(reset_engine):
    engine = reset_engine
    rule_id = engine.add_rule({"type": "keyword", "pattern": "spam", "action": "block"})

    result = engine.check("spam")
    assert result.action == "block"

    assert engine.remove_rule(rule_id) is True

    result = engine.check("spam")
    assert result.action == "pass"


def test_remove_nonexistent_rule_returns_false(reset_engine):
    assert reset_engine.remove_rule("nonexistent") is False


# ── 8. Update rule (enable/disable) ─────────────────────────


def test_update_rule_disable(reset_engine):
    engine = reset_engine
    rule_id = engine.add_rule({"type": "keyword", "pattern": "spam", "action": "block"})

    result = engine.check("spam")
    assert result.action == "block"

    engine.update_rule(rule_id, {"enabled": False})

    result = engine.check("spam")
    assert result.action == "pass"


def test_update_rule_enable(reset_engine):
    engine = reset_engine
    rule_id = engine.add_rule({
        "type": "keyword", "pattern": "spam", "action": "block", "enabled": False,
    })

    result = engine.check("spam")
    assert result.action == "pass"

    engine.update_rule(rule_id, {"enabled": True})

    result = engine.check("spam")
    assert result.action == "block"


def test_update_rule_change_pattern(reset_engine):
    engine = reset_engine
    rule_id = engine.add_rule({"type": "keyword", "pattern": "foo", "action": "block"})

    assert engine.check("foo").action == "block"
    assert engine.check("bar").action == "pass"

    engine.update_rule(rule_id, {"pattern": "bar"})

    assert engine.check("foo").action == "pass"
    assert engine.check("bar").action == "block"


def test_update_nonexistent_rule_returns_false(reset_engine):
    assert reset_engine.update_rule("nonexistent", {"enabled": False}) is False


# ── 9. Invalid regex raises ValueError ──────────────────────


def test_invalid_regex_raises_value_error(reset_engine):
    with pytest.raises(ValueError, match="Invalid regex"):
        reset_engine.add_rule({"type": "regex", "pattern": "[invalid", "action": "block"})


def test_invalid_regex_in_replace_raises_value_error(reset_engine):
    with pytest.raises(ValueError, match="Invalid regex"):
        reset_engine.add_rule({
            "type": "replace", "pattern": "(unclosed", "action": "replace",
            "replacement": "x",
        })


# ── 10. test_rule does not persist ───────────────────────────


def test_test_rule_returns_result_without_persisting(reset_engine):
    engine = reset_engine
    rule_data = {"type": "keyword", "pattern": "secret", "action": "block"}

    result = engine.test_rule(rule_data, "this is secret info")
    assert result.action == "block"

    # The rule was not persisted
    assert engine.list_rules() == []

    # The engine does not block this text in a real check
    result = engine.check("this is secret info")
    assert result.action == "pass"


def test_test_rule_non_matching(reset_engine):
    result = reset_engine.test_rule(
        {"type": "keyword", "pattern": "xyz", "action": "block"},
        "no match here",
    )
    assert result.action == "pass"


def test_test_rule_replace(reset_engine):
    result = reset_engine.test_rule(
        {"type": "replace", "pattern": r"w\w+d", "action": "replace", "replacement": "***"},
        "hello world",
    )
    assert result.action == "replace"
    assert result.text == "hello ***"


def test_test_rule_invalid_regex_raises(reset_engine):
    with pytest.raises(ValueError, match="Invalid regex"):
        reset_engine.test_rule(
            {"type": "regex", "pattern": "[bad", "action": "block"},
            "sample",
        )


# ── 11. list_rules returns all rules ────────────────────────


def test_list_rules_returns_all(reset_engine):
    engine = reset_engine
    id1 = engine.add_rule({"type": "keyword", "pattern": "a", "action": "block", "priority": 2})
    id2 = engine.add_rule({"type": "keyword", "pattern": "b", "action": "block", "priority": 1})

    rules = engine.list_rules()
    assert len(rules) == 2
    # Sorted by priority: id2 (priority 1) first, then id1 (priority 2)
    assert rules[0]["id"] == id2
    assert rules[1]["id"] == id1


def test_list_rules_empty_initially(reset_engine):
    assert reset_engine.list_rules() == []


# ── 12. Case-insensitive keyword matching ────────────────────


def test_keyword_case_insensitive(reset_engine):
    engine = reset_engine
    engine.add_rule({"type": "keyword", "pattern": "Spam", "action": "block"})

    assert engine.check("SPAM").action == "block"
    assert engine.check("spam").action == "block"
    assert engine.check("SpAm").action == "block"
    assert engine.check("no match").action == "pass"


def test_regex_case_insensitive(reset_engine):
    engine = reset_engine
    engine.add_rule({"type": "regex", "pattern": r"hello", "action": "block"})

    assert engine.check("HELLO world").action == "block"
    assert engine.check("Hello").action == "block"


# ── 13. Multiple rules, first match wins ────────────────────


def test_multiple_rules_first_match_wins(reset_engine):
    engine = reset_engine
    # Both match "hello", same priority → insertion order decides (both priority 0)
    id_replace = engine.add_rule({
        "type": "replace", "pattern": "hello", "action": "replace",
        "replacement": "hi", "priority": 0,
    })
    engine.add_rule({
        "type": "keyword", "pattern": "hello", "action": "block", "priority": 0,
    })

    result = engine.check("hello world")
    # The replace rule was added first, same priority, so it matches first
    assert result.action == "replace"
    assert result.rule_id == id_replace
    assert result.text == "hi world"


def test_multiple_rules_different_patterns(reset_engine):
    engine = reset_engine
    engine.add_rule({"type": "keyword", "pattern": "foo", "action": "block"})
    engine.add_rule({"type": "keyword", "pattern": "bar", "action": "block"})

    assert engine.check("foo").action == "block"
    assert engine.check("bar").action == "block"
    assert engine.check("baz").action == "pass"


# ── Additional edge cases ───────────────────────────────────


def test_unknown_rule_type_raises(reset_engine):
    with pytest.raises(ValueError, match="Unknown rule type"):
        reset_engine.add_rule({"type": "invalid_type", "pattern": "x", "action": "block"})


def test_unknown_action_raises(reset_engine):
    with pytest.raises(ValueError, match="Unknown action"):
        reset_engine.add_rule({"type": "keyword", "pattern": "x", "action": "invalid_action"})


def test_disabled_rule_does_not_match(reset_engine):
    engine = reset_engine
    engine.add_rule({
        "type": "keyword", "pattern": "spam", "action": "block", "enabled": False,
    })

    assert engine.check("spam").action == "pass"


def test_filter_result_fields():
    r = FilterResult(action="block", text="hello", reason="test", rule_id="abc")
    assert r.action == "block"
    assert r.text == "hello"
    assert r.reason == "test"
    assert r.rule_id == "abc"


def test_cleanup_rate_tracker(reset_engine):
    engine = reset_engine
    engine.add_rule({
        "type": "rate_limit", "pattern": "", "action": "block",
        "max_count": 100, "window_sec": 60.0,
    })
    # Add a fingerprint entry
    engine.check("hi", fingerprint="fp1")
    assert len(engine._rate_tracker) == 1

    # Cleaning with max_age=0 won't remove it (timestamps are very recent)
    # but with a huge max_age it stays
    removed = engine.cleanup_rate_tracker(max_age=9999)
    assert removed == 0

    # Manually set stale timestamps
    engine._rate_tracker["stale_fp"] = [0.0]
    removed = engine.cleanup_rate_tracker(max_age=0.0)
    assert removed >= 1
    assert "stale_fp" not in engine._rate_tracker


def test_persistence_across_instances(tmp_path):
    """Rules should persist to disk and be reloaded by a new instance."""
    path = str(tmp_path / "rules.json")
    FilterEngine._instance = None
    e1 = FilterEngine(path=path)
    rule_id = e1.add_rule({"type": "keyword", "pattern": "persisted", "action": "block"})

    # Create a fresh instance pointing at the same file
    FilterEngine._instance = None
    e2 = FilterEngine(path=path)

    rules = e2.list_rules()
    assert len(rules) == 1
    assert rules[0]["pattern"] == "persisted"
    assert rules[0]["id"] == rule_id

    FilterEngine._instance = None
