"""blacklist.py 直接單元測試"""

import pytest

from server.services.blacklist import add_keyword, contains_keyword, list_keywords, remove_keyword


@pytest.fixture(autouse=True)
def clean_blacklist():
    yield


# ─── add_keyword ──────────────────────────────────────────────────────────────


def test_add_keyword_returns_true_on_new():
    assert add_keyword("spam") is True


def test_add_keyword_adds_to_blacklist():
    add_keyword("spam")
    assert "spam" in list_keywords()


def test_add_keyword_returns_false_on_duplicate():
    add_keyword("spam")
    assert add_keyword("spam") is False


def test_add_keyword_empty_string_is_noop():
    result = add_keyword("")
    assert result is False
    assert "" not in list_keywords()


# ─── remove_keyword ────────────────────────────────────────────────────────────


def test_remove_keyword_returns_true_on_success():
    add_keyword("bad")
    assert remove_keyword("bad") is True


def test_remove_keyword_removes_from_blacklist():
    add_keyword("bad")
    remove_keyword("bad")
    assert "bad" not in list_keywords()


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
    add_keyword("alpha")
    add_keyword("beta")
    kws = list_keywords()
    assert "alpha" in kws
    assert "beta" in kws


def test_list_keywords_returns_list_type():
    assert isinstance(list_keywords(), list)


def test_list_keywords_reflects_removal():
    add_keyword("remove_me")
    remove_keyword("remove_me")
    assert "remove_me" not in list_keywords()


# ─── contains_keyword ─────────────────────────────────────────────────────────


def test_contains_keyword_returns_true_on_match():
    add_keyword("badword")
    assert contains_keyword("this has a badword inside") is True


def test_contains_keyword_returns_false_no_match():
    add_keyword("badword")
    assert contains_keyword("this is clean") is False


def test_contains_keyword_case_insensitive_keyword_lower():
    add_keyword("badword")
    assert contains_keyword("this has a BADWORD inside") is True


def test_contains_keyword_case_insensitive_keyword_upper():
    add_keyword("BLOCKED")
    assert contains_keyword("this has a blocked inside") is True


def test_contains_keyword_partial_match():
    """關鍵字是子字串也應被偵測到"""
    add_keyword("bad")
    assert contains_keyword("badminton") is True


def test_contains_keyword_empty_blacklist():
    assert contains_keyword("anything") is False


def test_contains_keyword_empty_text():
    add_keyword("word")
    assert contains_keyword("") is False


def test_contains_keyword_multiple_keywords_any_match():
    add_keyword("alpha")
    add_keyword("beta")
    assert contains_keyword("beta is here") is True
    assert contains_keyword("alpha is here") is True
    assert contains_keyword("gamma is here") is False
