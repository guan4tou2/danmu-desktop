"""onscreen_config.py — persistent settings for onscreen limiter."""
import json
import threading

import pytest

from server.services import onscreen_config


@pytest.fixture(autouse=True)
def _isolate_state(tmp_path, monkeypatch):
    state_file = tmp_path / "onscreen_limits.json"
    monkeypatch.setattr(onscreen_config, "_STATE_FILE", state_file)
    onscreen_config._reset_for_tests()
    yield
    onscreen_config._reset_for_tests()


def test_defaults_when_file_missing():
    state = onscreen_config.get_state()
    assert state == {"max_onscreen_danmu": 20, "overflow_mode": "drop"}


def test_get_state_returns_copy():
    s1 = onscreen_config.get_state()
    s1["max_onscreen_danmu"] = 999
    s2 = onscreen_config.get_state()
    assert s2["max_onscreen_danmu"] == 20


def test_set_state_persists_to_file():
    onscreen_config.set_state(max_onscreen_danmu=50, overflow_mode="queue")
    with open(onscreen_config._STATE_FILE) as f:
        on_disk = json.load(f)
    assert on_disk == {"max_onscreen_danmu": 50, "overflow_mode": "queue"}


def test_set_state_validates_max_range():
    with pytest.raises(ValueError):
        onscreen_config.set_state(max_onscreen_danmu=-1, overflow_mode="drop")
    with pytest.raises(ValueError):
        onscreen_config.set_state(max_onscreen_danmu=201, overflow_mode="drop")


def test_set_state_validates_mode():
    with pytest.raises(ValueError):
        onscreen_config.set_state(max_onscreen_danmu=20, overflow_mode="bogus")


def test_set_state_zero_means_unlimited():
    s = onscreen_config.set_state(max_onscreen_danmu=0, overflow_mode="drop")
    assert s["max_onscreen_danmu"] == 0


def test_reload_from_disk_after_cache_reset():
    onscreen_config.set_state(max_onscreen_danmu=42, overflow_mode="queue")
    onscreen_config._reset_for_tests()
    assert onscreen_config.get_state() == {"max_onscreen_danmu": 42, "overflow_mode": "queue"}


def test_write_failure_is_swallowed(monkeypatch):
    def boom(*a, **kw):
        raise PermissionError("read-only fs")
    monkeypatch.setattr(onscreen_config, "_write_state", boom)
    s = onscreen_config.set_state(max_onscreen_danmu=5, overflow_mode="drop")
    assert s == {"max_onscreen_danmu": 5, "overflow_mode": "drop"}
    assert onscreen_config.get_state()["max_onscreen_danmu"] == 5


def test_malformed_file_falls_back_to_defaults(tmp_path, monkeypatch):
    bad = tmp_path / "onscreen_limits.json"
    bad.write_text("not json{{")
    monkeypatch.setattr(onscreen_config, "_STATE_FILE", bad)
    onscreen_config._reset_for_tests()
    assert onscreen_config.get_state() == {"max_onscreen_danmu": 20, "overflow_mode": "drop"}


def test_concurrent_set_state_is_serialized():
    results = []

    def writer(n):
        onscreen_config.set_state(max_onscreen_danmu=n, overflow_mode="drop")
        results.append(onscreen_config.get_state()["max_onscreen_danmu"])

    threads = [threading.Thread(target=writer, args=(i + 1,)) for i in range(10)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    final = onscreen_config.get_state()["max_onscreen_danmu"]
    assert 1 <= final <= 10
