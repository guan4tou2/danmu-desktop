"""Tests for server.services.emoji — EmojiService."""

import pytest

from server.services import emoji as emoji_mod
from server.services.emoji import EmojiService


@pytest.fixture()
def svc(tmp_path, monkeypatch):
    """Create a fresh EmojiService with _EMOJIS_DIR pointed at tmp_path."""
    monkeypatch.setattr(emoji_mod, "_EMOJIS_DIR", tmp_path)
    return EmojiService()


# ── parse ────────────────────────────────────────────────────────────────


def test_parse_no_emoji(svc):
    result = svc.parse("hello world")
    assert result["text"] == "hello world"
    assert result["emojis"] == []


def test_parse_with_known_emoji(svc, tmp_path):
    (tmp_path / "cat.png").write_bytes(b"\x89PNG" + b"\x00" * 100)
    svc._scan()

    result = svc.parse("hi :cat: there")
    assert result["text"] == "hi :cat: there"
    assert len(result["emojis"]) == 1
    em = result["emojis"][0]
    assert em["name"] == "cat"
    assert em["url"] == "/static/emojis/cat.png"
    assert em["position"] == 3


def test_parse_unknown_emoji(svc):
    result = svc.parse("hi :nope: there")
    assert result["emojis"] == []


# ── upload ───────────────────────────────────────────────────────────────


def test_upload_valid_png(svc, tmp_path):
    data = b"\x89PNG" + b"\x00" * 100
    assert svc.upload("smile", data, "png") is True
    assert (tmp_path / "smile.png").exists()
    assert (tmp_path / "smile.png").read_bytes() == data


def test_upload_invalid_extension(svc):
    assert svc.upload("smile", b"\x00" * 10, "bmp") is False


def test_upload_too_large(svc):
    data = b"\x00" * (500 * 1024 + 1)
    assert svc.upload("big", data, "png") is False


def test_upload_invalid_name(svc):
    assert svc.upload("no spaces!", b"\x00" * 10, "png") is False
    assert svc.upload("a/b", b"\x00" * 10, "png") is False
    assert svc.upload("", b"\x00" * 10, "png") is False


# ── delete ───────────────────────────────────────────────────────────────


def test_delete_existing(svc, tmp_path):
    (tmp_path / "bye.png").write_bytes(b"\x89PNG" + b"\x00" * 10)
    svc._scan()

    assert svc.delete("bye") is True
    assert not (tmp_path / "bye.png").exists()
    assert svc.get_url("bye") is None


# ── list_emojis ──────────────────────────────────────────────────────────


def test_list_emojis(svc, tmp_path):
    (tmp_path / "alpha.png").write_bytes(b"\x00" * 10)
    (tmp_path / "beta.gif").write_bytes(b"\x00" * 10)
    svc._scan()

    result = svc.list_emojis()
    assert len(result) == 2
    names = [e["name"] for e in result]
    assert names == ["alpha", "beta"]  # sorted
    assert result[0]["url"] == "/static/emojis/alpha.png"
    assert result[0]["filename"] == "alpha.png"


# ── get_url ──────────────────────────────────────────────────────────────


def test_get_url_existing(svc, tmp_path):
    (tmp_path / "heart.webp").write_bytes(b"\x00" * 10)
    svc._scan()

    assert svc.get_url("heart") == "/static/emojis/heart.webp"


def test_get_url_nonexistent(svc):
    assert svc.get_url("nope") is None
