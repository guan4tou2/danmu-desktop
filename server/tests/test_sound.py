"""Tests for the sound service."""

import time
from unittest.mock import patch

import pytest

from server.services import sound as sound_mod
from server.services.sound import SoundService


@pytest.fixture()
def svc(tmp_path):
    """Reset the SoundService singleton and point SOUNDS_DIR to a temp directory."""
    SoundService._reset()

    sounds_dir = tmp_path / "sounds"
    sounds_dir.mkdir()
    rules_file = sounds_dir / "sound_rules.json"

    with (
        patch.object(sound_mod, "_SOUNDS_DIR", sounds_dir),
        patch.object(sound_mod, "_RULES_FILE", rules_file),
    ):
        service = SoundService()
        yield service

    SoundService._reset()


# ── 1. add_rule and list_rules ─────────────────────────────────────────────

def test_add_rule_and_list_rules(svc):
    rule_id = svc.add_rule({
        "trigger_type": "keyword",
        "trigger_value": "hello",
        "sound_name": "alert.mp3",
        "volume": 0.8,
        "cooldown_ms": 1000,
    })
    assert rule_id is not None

    rules = svc.list_rules()
    assert len(rules) == 1
    assert rules[0]["id"] == rule_id
    assert rules[0]["trigger_type"] == "keyword"
    assert rules[0]["trigger_value"] == "hello"
    assert rules[0]["sound_name"] == "alert.mp3"
    assert rules[0]["volume"] == 0.8
    assert rules[0]["cooldown_ms"] == 1000


# ── 2. remove_rule ────────────────────────────────────────────────────────

def test_remove_rule(svc):
    rule_id = svc.add_rule({
        "trigger_type": "keyword",
        "trigger_value": "bye",
        "sound_name": "beep.mp3",
    })
    assert svc.remove_rule(rule_id) is True
    assert svc.list_rules() == []


def test_remove_rule_nonexistent(svc):
    assert svc.remove_rule("nonexistent") is False


# ── 3. match with keyword trigger ─────────────────────────────────────────

def test_match_keyword_trigger(svc, tmp_path):
    # Create the sound file so match() can verify it exists
    sound_file = tmp_path / "sounds" / "ding.mp3"
    sound_file.write_bytes(b"\x00" * 10)

    svc.add_rule({
        "trigger_type": "keyword",
        "trigger_value": "wow",
        "sound_name": "ding.mp3",
        "volume": 0.5,
    })

    result = svc.match("wow that's cool")
    assert result is not None
    assert result["url"] == "/static/sounds/ding.mp3"
    assert result["volume"] == 0.5


# ── 4. match with no matching trigger ─────────────────────────────────────

def test_match_no_trigger(svc, tmp_path):
    sound_file = tmp_path / "sounds" / "ding.mp3"
    sound_file.write_bytes(b"\x00" * 10)

    svc.add_rule({
        "trigger_type": "keyword",
        "trigger_value": "wow",
        "sound_name": "ding.mp3",
    })

    result = svc.match("nothing special here")
    assert result is None


# ── 5. match respects cooldown ─────────────────────────────────────────────

def test_match_respects_cooldown(svc, tmp_path):
    sound_file = tmp_path / "sounds" / "boom.mp3"
    sound_file.write_bytes(b"\x00" * 10)

    svc.add_rule({
        "trigger_type": "keyword",
        "trigger_value": "boom",
        "sound_name": "boom.mp3",
        "cooldown_ms": 60000,  # 60 seconds — won't expire during the test
    })

    # First match should succeed
    result1 = svc.match("boom")
    assert result1 is not None

    # Second match within cooldown should be None
    result2 = svc.match("boom")
    assert result2 is None


# ── 6. upload_sound with valid extension ──────────────────────────────────

def test_upload_sound_valid(svc, tmp_path):
    data = b"\xff\xfb\x90\x00" * 10  # fake mp3 bytes
    assert svc.upload_sound("alert", data, "mp3") is True
    assert (tmp_path / "sounds" / "alert.mp3").exists()


# ── 7. upload_sound with invalid extension ────────────────────────────────

def test_upload_sound_invalid_extension(svc):
    assert svc.upload_sound("evil", b"data", "exe") is False


# ── 8. upload_sound with file too large ───────────────────────────────────

def test_upload_sound_too_large(svc):
    big = b"\x00" * (1 * 1024 * 1024 + 1)  # 1 MB + 1 byte
    assert svc.upload_sound("big", big, "mp3") is False


# ── 9. delete_sound ───────────────────────────────────────────────────────

def test_delete_sound(svc, tmp_path):
    sound_file = tmp_path / "sounds" / "remove-me.wav"
    sound_file.write_bytes(b"\x00" * 10)

    assert svc.delete_sound("remove-me.wav") is True
    assert not sound_file.exists()


def test_delete_sound_nonexistent(svc):
    assert svc.delete_sound("nope.mp3") is False


# ── 10. list_sounds ───────────────────────────────────────────────────────

def test_list_sounds(svc, tmp_path):
    sounds_dir = tmp_path / "sounds"
    (sounds_dir / "a.mp3").write_bytes(b"\x00")
    (sounds_dir / "b.ogg").write_bytes(b"\x00")
    (sounds_dir / "c.wav").write_bytes(b"\x00")
    (sounds_dir / "ignore.txt").write_bytes(b"\x00")

    # Force a rescan
    svc._dir_mtime = 0.0
    result = svc.list_sounds()

    assert "a.mp3" in result
    assert "b.ogg" in result
    assert "c.wav" in result
    assert "ignore.txt" not in result
