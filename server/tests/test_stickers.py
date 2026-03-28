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


# ── POST /admin/upload_sticker ───────────────────────────────────────────


def _upload(client, filename, data, content_type="image/gif"):
    """Helper: upload a sticker as admin."""
    from io import BytesIO
    login(client)
    token = csrf_token(client)
    return client.post(
        "/admin/upload_sticker",
        data={"file": (BytesIO(data), filename)},
        content_type="multipart/form-data",
        headers={"X-CSRF-Token": token},
    )


def login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def csrf_token(client):
    login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def test_upload_sticker_unauthenticated(client):
    from io import BytesIO
    res = client.post(
        "/admin/upload_sticker",
        data={"file": (BytesIO(b"GIF89a"), "fire.gif")},
        content_type="multipart/form-data",
    )
    # @require_csrf fires before _ensure_logged_in() → 403; both are rejection
    assert res.status_code in {401, 403}


def test_upload_sticker_success(client, tmp_path, monkeypatch):
    import server.services.stickers as sticker_mod
    monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path)
    sticker_mod.sticker_service._cache.clear()

    # Use a real GIF header so magic recognizes it
    gif_bytes = (
        b"GIF89a\x01\x00\x01\x00\x00\xff\x00,"
        b"\x00\x00\x00\x00\x01\x00\x01\x00\x00\x02\x00;"
    )
    res = _upload(client, "fire.gif", gif_bytes)
    assert res.status_code == 200
    data = res.get_json()
    assert data["name"] == "fire"
    assert data["url"] == "/static/stickers/fire.gif"


def test_upload_sticker_invalid_extension(client):
    res = _upload(client, "fire.bmp", b"\x00" * 10)
    assert res.status_code == 400


def test_upload_sticker_too_large(client):
    big = b"GIF89a" + b"\x00" * (2 * 1024 * 1024 + 1)
    res = _upload(client, "big.gif", big)
    assert res.status_code == 400 or res.status_code == 413


def test_upload_sticker_name_collision_with_existing_sticker(client, tmp_path, monkeypatch):
    import server.services.stickers as sticker_mod
    monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path)
    sticker_mod.sticker_service._cache.clear()
    (tmp_path / "fire.png").write_bytes(b"\x89PNG\r\n\x1a\n")
    sticker_mod.sticker_service._scan()

    gif_bytes = (
        b"GIF89a\x01\x00\x01\x00\x00\xff\x00,"
        b"\x00\x00\x00\x00\x01\x00\x01\x00\x00\x02\x00;"
    )
    res = _upload(client, "fire.gif", gif_bytes)
    assert res.status_code == 409
