"""blacklist.py 直接單元測試"""

import pytest

from server import state
from server.services.blacklist import (
    add_keyword,
    contains_keyword,
    list_keywords,
    remove_keyword,
)


@pytest.fixture(autouse=True)
def clean_blacklist():
    state.blacklist.clear()
    yield
    state.blacklist.clear()


# ─── add_keyword ──────────────────────────────────────────────────────────────


def test_add_keyword_returns_true_on_new():
    assert add_keyword("spam") is True


def test_add_keyword_adds_to_blacklist():
    add_keyword("spam")
    assert "spam" in state.blacklist


def test_add_keyword_returns_false_on_duplicate():
    add_keyword("spam")
    assert add_keyword("spam") is False


def test_add_keyword_empty_string_is_noop():
    result = add_keyword("")
    assert result is False
    assert "" not in state.blacklist


# ─── remove_keyword ────────────────────────────────────────────────────────────


def test_remove_keyword_returns_true_on_success():
    state.blacklist.add("bad")
    assert remove_keyword("bad") is True


def test_remove_keyword_removes_from_blacklist():
    state.blacklist.add("bad")
    remove_keyword("bad")
    assert "bad" not in state.blacklist


def test_remove_keyword_returns_false_when_missing():
    assert remove_keyword("nonexistent") is False


def test_remove_keyword_does_not_raise_on_missing():
    try:
        remove_keyword("ghost")
    except Exception as e:
        pytest.fail(f"remove_keyword raised unexpectedly: {e}")


# ─── list_keywords ────────────────────────────────────────────────────────────


def test_list_keywords_empty():
    assert list_keywords() == []


def test_list_keywords_returns_added_words():
    state.blacklist.add("alpha")
    state.blacklist.add("beta")
    kws = list_keywords()
    assert "alpha" in kws
    assert "beta" in kws


def test_list_keywords_returns_list_type():
    assert isinstance(list_keywords(), list)


def test_list_keywords_reflects_removal():
    state.blacklist.add("remove_me")
    remove_keyword("remove_me")
    assert "remove_me" not in list_keywords()


# ─── contains_keyword ─────────────────────────────────────────────────────────


def test_contains_keyword_returns_true_on_match():
    state.blacklist.add("badword")
    assert contains_keyword("this has a badword inside") is True


def test_contains_keyword_returns_false_no_match():
    state.blacklist.add("badword")
    assert contains_keyword("this is clean") is False


def test_contains_keyword_case_insensitive_keyword_lower():
    state.blacklist.add("badword")
    assert contains_keyword("this has a BADWORD inside") is True


def test_contains_keyword_case_insensitive_keyword_upper():
    state.blacklist.add("BLOCKED")
    assert contains_keyword("this has a blocked inside") is True


def test_contains_keyword_partial_match():
    """關鍵字是子字串也應被偵測到"""
    state.blacklist.add("bad")
    assert contains_keyword("badminton") is True


def test_contains_keyword_empty_blacklist():
    assert contains_keyword("anything") is False


def test_contains_keyword_empty_text():
    state.blacklist.add("word")
    assert contains_keyword("") is False


def test_contains_keyword_multiple_keywords_any_match():
    state.blacklist.add("alpha")
    state.blacklist.add("beta")
    assert contains_keyword("beta is here") is True
    assert contains_keyword("alpha is here") is True
    assert contains_keyword("gamma is here") is False
