"""Tests for server.services.stickers — StickerService."""
import pytest
from server.services import stickers as sticker_mod
from server.services.stickers import StickerService


@pytest.fixture()
def svc(tmp_path, monkeypatch):
    """Fresh StickerService with _STICKERS_DIR pointed at tmp_path."""
    monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path)
    monkeypatch.setattr(sticker_mod, "_MAX_COUNT", 3)
    return StickerService()


# ── resolve ──────────────────────────────────────────────────────────────


def test_resolve_returns_none_when_empty(svc):
    assert svc.resolve("") is None


def test_resolve_returns_none_for_plain_text(svc):
    assert svc.resolve("hello world") is None


def test_resolve_returns_none_for_mixed_text(svc, tmp_path):
    (tmp_path / "fire.gif").write_bytes(b"GIF89a")
    svc._scan()
    assert svc.resolve("hello :fire:") is None


def test_resolve_returns_none_for_unknown_sticker(svc):
    assert svc.resolve(":nope:") is None


def test_resolve_returns_filename_for_known_sticker(svc, tmp_path):
    (tmp_path / "fire.gif").write_bytes(b"GIF89a")
    svc._scan()
    assert svc.resolve(":fire:") == "fire.gif"


def test_resolve_strips_whitespace(svc, tmp_path):
    (tmp_path / "wave.png").write_bytes(b"\x89PNG")
    svc._scan()
    assert svc.resolve("  :wave:  ") == "wave.png"


def test_resolve_rejects_hyphens(svc, tmp_path):
    # Hyphens not allowed in sticker names
    (tmp_path / "fire-logo.gif").write_bytes(b"GIF89a")
    svc._scan()
    assert svc.resolve(":fire-logo:") is None


def test_resolve_supports_webp(svc, tmp_path):
    (tmp_path / "burst.webp").write_bytes(b"RIFF")
    svc._scan()
    assert svc.resolve(":burst:") == "burst.webp"


# ── list_stickers ─────────────────────────────────────────────────────────


def test_list_stickers_empty(svc):
    result = svc.list_stickers()
    assert result == []


def test_list_stickers_returns_sorted_list(svc, tmp_path):
    (tmp_path / "zzz.gif").write_bytes(b"GIF89a")
    (tmp_path / "aaa.png").write_bytes(b"\x89PNG")
    svc._scan()
    names = [s["name"] for s in svc.list_stickers()]
    assert names == sorted(names)
    assert "zzz" in names and "aaa" in names


def test_list_stickers_has_correct_shape(svc, tmp_path):
    (tmp_path / "smile.gif").write_bytes(b"GIF89a")
    svc._scan()
    stickers = svc.list_stickers()
    assert len(stickers) == 1
    s = stickers[0]
    assert s["name"] == "smile"
    assert s["url"] == "/static/stickers/smile.gif"
    assert s["filename"] == "smile.gif"


# ── delete ────────────────────────────────────────────────────────────────


def test_delete_existing_sticker(svc, tmp_path):
    f = tmp_path / "boom.gif"
    f.write_bytes(b"GIF89a")
    svc._scan()
    assert svc.delete("boom") is True
    assert not f.exists()
    assert svc.resolve(":boom:") is None  # cache cleared


def test_delete_nonexistent_sticker(svc):
    assert svc.delete("ghost") is False


def test_delete_rejects_invalid_name(svc):
    assert svc.delete("../etc/passwd") is False


def test_delete_all_extensions_for_same_name(svc, tmp_path):
    """If both boom.gif and boom.png exist, both are deleted."""
    (tmp_path / "boom.gif").write_bytes(b"GIF89a")
    (tmp_path / "boom.png").write_bytes(b"\x89PNG")
    svc._scan()
    assert svc.delete("boom") is True
    assert not (tmp_path / "boom.gif").exists()
    assert not (tmp_path / "boom.png").exists()


# ── max count ────────────────────────────────────────────────────────────


def test_max_count_raises_when_exceeded(svc, tmp_path):
    for i in range(3):
        (tmp_path / f"s{i}.gif").write_bytes(b"GIF89a")
    svc._scan()
    with pytest.raises(ValueError, match="sticker limit"):
        svc.check_count_limit()


# ── GET /stickers route ──────────────────────────────────────────────────


def test_get_stickers_returns_empty_list(client):
    res = client.get("/stickers")
    assert res.status_code == 200
    data = res.get_json()
    assert data == {"stickers": []}


def test_get_stickers_lists_uploaded_sticker(client, tmp_path, monkeypatch):
    import server.services.stickers as sticker_mod
    monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path)
    sticker_mod.sticker_service._cache.clear()
    (tmp_path / "wave.gif").write_bytes(b"GIF89a")
    sticker_mod.sticker_service._scan()

    res = client.get("/stickers")
    assert res.status_code == 200
    stickers = res.get_json()["stickers"]
    assert len(stickers) == 1
    assert stickers[0]["name"] == "wave"
    assert stickers[0]["url"] == "/static/stickers/wave.gif"
