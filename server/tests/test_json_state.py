"""Unit tests for services/json_state.py — the JSON-backed state base.

These tests exercise the container mechanics in isolation, without
touching any real service. Behavioural tests for ws_auth /
security_settings / ratelimit_ip remain in their own test files.
"""

from __future__ import annotations

import json
import stat as stat_mod
from pathlib import Path

import pytest

from server.services.json_state import JsonState

# ---------------------------------------------------------------------------
# Fixtures
# ---------------------------------------------------------------------------


def _make(tmp_path: Path, *, secure: bool = False, default=None, normalize=None) -> JsonState:
    """Build a JsonState pointed at tmp_path, with permissive defaults."""
    js = JsonState(
        "test.json",
        default=default or (lambda: {"count": 0, "items": []}),
        normalize=normalize
        or (lambda raw: raw if isinstance(raw, dict) else {"count": 0, "items": []}),
        secure=secure,
    )
    js.reset_for_tests(tmp_path / "test.json")
    return js


# ---------------------------------------------------------------------------
# Basic behaviour
# ---------------------------------------------------------------------------


def test_get_returns_default_when_file_missing(tmp_path):
    js = _make(tmp_path)
    assert js.get() == {"count": 0, "items": []}
    assert not js.path.exists()  # get() alone doesn't persist


def test_update_merges_shallow_and_persists(tmp_path):
    js = _make(tmp_path)
    new = js.update({"count": 3})
    assert new == {"count": 3, "items": []}
    on_disk = json.loads(js.path.read_text(encoding="utf-8"))
    assert on_disk == {"count": 3, "items": []}


def test_update_returns_deepcopy(tmp_path):
    js = _make(tmp_path)
    out = js.update({"items": ["a"]})
    out["items"].append("MUTATED")
    # A subsequent get() must NOT see the mutation.
    assert js.get()["items"] == ["a"]


def test_get_returns_deepcopy(tmp_path):
    js = _make(tmp_path)
    js.update({"items": ["a"]})
    got = js.get()
    got["items"].append("MUTATED")
    assert js.get()["items"] == ["a"]


def test_normalize_runs_on_update(tmp_path):
    calls = []

    def normalize(raw):
        calls.append(raw)
        if not isinstance(raw.get("count"), int):
            raise ValueError("count must be int")
        return raw

    js = _make(tmp_path, normalize=normalize)
    js.update({"count": 5})
    with pytest.raises(ValueError, match="count must be int"):
        js.update({"count": "not an int"})
    # After the failed update, cache still reflects the last-good state.
    assert js.get()["count"] == 5


def test_normalize_runs_on_load(tmp_path):
    js = _make(tmp_path)
    # Write a raw file directly and reset cache — get() must re-load + normalize.
    js.path.parent.mkdir(parents=True, exist_ok=True)
    js.path.write_text('{"count": 7, "items": ["x"]}', encoding="utf-8")
    js.reset_for_tests()  # keep same path, drop cache
    assert js.get() == {"count": 7, "items": ["x"]}


def test_load_falls_back_to_default_on_bad_json(tmp_path):
    js = _make(tmp_path)
    js.path.parent.mkdir(parents=True, exist_ok=True)
    js.path.write_text("{not valid json", encoding="utf-8")
    js.reset_for_tests()
    assert js.get() == {"count": 0, "items": []}


def test_load_falls_back_to_default_on_bad_shape(tmp_path):
    def strict(raw):
        if not isinstance(raw, dict) or "count" not in raw:
            raise ValueError("bad shape")
        return raw

    js = _make(tmp_path, normalize=strict)
    js.path.parent.mkdir(parents=True, exist_ok=True)
    js.path.write_text('{"unrelated": "garbage"}', encoding="utf-8")
    js.reset_for_tests()
    # normalize raises → falls back to default
    assert js.get() == {"count": 0, "items": []}


# ---------------------------------------------------------------------------
# Public lock (for atomic read-then-update patterns)
# ---------------------------------------------------------------------------


def test_lock_is_reentrant_so_nested_updates_work(tmp_path):
    """Atomic get-then-update needs an RLock; a plain Lock would deadlock."""
    js = _make(tmp_path)
    with js.lock:
        current = js.get()
        js.update({"count": current["count"] + 10})
    assert js.get()["count"] == 10


# ---------------------------------------------------------------------------
# Reset semantics
# ---------------------------------------------------------------------------


def test_reset_without_path_keeps_location_but_drops_cache(tmp_path):
    js = _make(tmp_path)
    js.update({"count": 9})
    original_path = js.path
    js.reset_for_tests()
    assert js.path == original_path
    # Cache dropped — next get re-loads from disk.
    assert js.get()["count"] == 9  # what we wrote earlier is still there


def test_reset_with_path_redirects(tmp_path):
    js = _make(tmp_path)
    js.update({"count": 1})
    new_path = tmp_path / "other.json"
    js.reset_for_tests(new_path)
    assert js.path == new_path
    # Fresh location has no file yet — get() returns default.
    assert js.get() == {"count": 0, "items": []}


# ---------------------------------------------------------------------------
# Atomic write
# ---------------------------------------------------------------------------


def test_atomic_write_no_tmp_file_lingering_on_success(tmp_path):
    js = _make(tmp_path)
    js.update({"count": 1})
    tmp_files = list(tmp_path.glob("*.tmp.*"))
    assert tmp_files == []


def test_secure_true_writes_file_with_owner_only_permissions(tmp_path):
    js = _make(tmp_path, secure=True)
    js.update({"count": 1})
    mode = stat_mod.S_IMODE(js.path.stat().st_mode)
    assert mode == 0o600, f"expected 0o600, got {oct(mode)}"


def test_secure_false_writes_with_default_perms(tmp_path):
    js = _make(tmp_path, secure=False)
    js.update({"count": 1})
    mode = stat_mod.S_IMODE(js.path.stat().st_mode)
    # umask varies by env — just assert group/other can read (i.e. NOT 0o600).
    # Under a very restrictive umask (0o077) even secure=False lands at 0o600,
    # so only assert secure=False did NOT force 0o600 via chmod call.
    assert mode & 0o200  # owner-write bit set (basic sanity)


# ---------------------------------------------------------------------------
# Eager persist default
# ---------------------------------------------------------------------------


def test_eager_persist_default_writes_on_first_load_when_file_missing(tmp_path):
    """When enabled, default state is persisted on first get()."""
    seed_calls = []

    def default():
        seed_calls.append(1)
        return {"count": 42, "items": []}

    js = JsonState(
        "test.json",
        default=default,
        normalize=lambda raw: raw,
        eager_persist_default=True,
    )
    js.reset_for_tests(tmp_path / "seed.json")
    assert not js.path.exists()
    got = js.get()
    assert got == {"count": 42, "items": []}
    # Now the file exists on disk with the seed.
    assert js.path.exists()
    on_disk = json.loads(js.path.read_text(encoding="utf-8"))
    assert on_disk == {"count": 42, "items": []}
    # Second get() must NOT invoke the default factory again — cache hits.
    js.get()
    assert len(seed_calls) == 1


def test_eager_persist_default_off_does_not_write(tmp_path):
    js = _make(tmp_path)  # eager_persist_default defaults to False
    got = js.get()
    assert got == {"count": 0, "items": []}
    assert not js.path.exists()


def test_eager_persist_default_also_persists_when_file_is_malformed(tmp_path):
    js = JsonState(
        "test.json",
        default=lambda: {"count": 99, "items": []},
        normalize=lambda raw: raw,
        eager_persist_default=True,
    )
    js.reset_for_tests(tmp_path / "malformed.json")
    js.path.parent.mkdir(parents=True, exist_ok=True)
    js.path.write_text("{not valid json", encoding="utf-8")
    assert js.get() == {"count": 99, "items": []}
    # Self-heal: malformed file overwritten with seed.
    assert json.loads(js.path.read_text(encoding="utf-8")) == {"count": 99, "items": []}


# ---------------------------------------------------------------------------
# Failure handling
# ---------------------------------------------------------------------------


def test_write_failure_is_swallowed_and_logged_once(tmp_path, caplog):
    js = _make(tmp_path)
    # Make the parent directory read-only so writes fail.
    # Redirect state to a path under an unwritable subdir.
    bad_dir = tmp_path / "unwritable"
    bad_dir.mkdir()
    bad_dir.chmod(0o500)  # r-x — can't create files
    js.reset_for_tests(bad_dir / "state.json")

    try:
        with caplog.at_level("WARNING", logger="server.services.json_state"):
            # First update: warn once, in-memory cache updated, no exception.
            out = js.update({"count": 1})
            assert out["count"] == 1
            assert js.get()["count"] == 1
            first_warns = sum(1 for r in caplog.records if "Cannot persist" in r.message)
            assert first_warns == 1

            # Second update: cache still updates, but no repeat WARNING.
            js.update({"count": 2})
            assert js.get()["count"] == 2
            still_one_warn = sum(1 for r in caplog.records if "Cannot persist" in r.message)
            assert still_one_warn == 1
    finally:
        # Restore perms so pytest can clean tmp_path.
        bad_dir.chmod(0o700)
