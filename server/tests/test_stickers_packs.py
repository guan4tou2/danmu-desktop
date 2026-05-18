"""Tests for the multi-pack sticker model (P1-4 backend)."""

import pytest

from server.services import stickers as sticker_mod


@pytest.fixture()
def svc(tmp_path, monkeypatch):
    """Fresh StickerService with file roots redirected to tmp_path."""
    stickers_dir = tmp_path / "stickers"
    runtime_dir = tmp_path / "runtime_stickers"
    stickers_dir.mkdir()
    monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", stickers_dir)
    monkeypatch.setattr(sticker_mod, "_RUNTIME_DIR", runtime_dir)
    monkeypatch.setattr(sticker_mod, "_PACKS_FILE", runtime_dir / "packs.json")
    sticker_mod.sticker_service._reset_for_tests()
    return sticker_mod.sticker_service


# ── Pack CRUD ─────────────────────────────────────────────────────────────


def test_create_pack_returns_unique_id(svc):
    p1 = svc.create_pack("Foo")
    p2 = svc.create_pack("Bar")
    assert p1["id"] != p2["id"]
    assert p1["name"] == "Foo"
    assert p1["enabled"] is True
    assert p1["weight"] == 1.0
    # default pack + two created
    assert len(svc.list_packs()) == 3


def test_create_pack_rejects_empty_name(svc):
    with pytest.raises(ValueError):
        svc.create_pack("")
    with pytest.raises(ValueError):
        svc.create_pack("   ")


def test_toggle_pack_flips_enabled(svc):
    pack = svc.create_pack("FX")
    assert pack["enabled"] is True
    updated = svc.toggle_pack(pack["id"])
    assert updated["enabled"] is False
    updated2 = svc.toggle_pack(pack["id"])
    assert updated2["enabled"] is True


def test_toggle_pack_returns_none_for_unknown(svc):
    assert svc.toggle_pack("missing") is None


def test_rename_pack_updates_name(svc):
    pack = svc.create_pack("Old")
    assert svc.rename_pack(pack["id"], "New") is True
    matched = next(p for p in svc.list_packs() if p["id"] == pack["id"])
    assert matched["name"] == "New"


def test_rename_pack_returns_false_for_unknown(svc):
    assert svc.rename_pack("ghost", "x") is False


def test_reorder_pack_changes_sort_order(svc):
    p1 = svc.create_pack("A")
    p2 = svc.create_pack("B")
    # default = order 0; A = 1, B = 2. Move B to 0 → moves to top.
    svc.reorder_pack(p2["id"], -1)
    ordered = [p["id"] for p in svc.list_packs()]
    assert ordered[0] == p2["id"]
    assert p1["id"] in ordered


def test_delete_pack_removes_pack_and_its_stickers(svc, tmp_path, monkeypatch):
    # Create a pack and a sticker assigned to it
    pack = svc.create_pack("RemoveMe")
    f = sticker_mod._STICKERS_DIR / "boom.gif"
    f.write_bytes(b"GIF89a")
    svc._scan()  # picks up boom + assigns to default
    # Now reassign to pack
    assert svc.assign_sticker("boom", pack["id"]) is True
    # Delete pack: should also remove the sticker file
    assert svc.delete_pack(pack["id"]) is True
    assert not f.exists()
    # Pack gone from list
    assert all(p["id"] != pack["id"] for p in svc.list_packs())


def test_delete_default_pack_is_refused(svc):
    with pytest.raises(ValueError):
        svc.delete_pack("default")


# ── Migration / persistence ───────────────────────────────────────────────


def test_migration_creates_default_pack_for_existing_stickers(svc, tmp_path, monkeypatch):
    # Pre-existing sticker with no packs.json
    f = sticker_mod._STICKERS_DIR / "fire.gif"
    f.write_bytes(b"GIF89a")
    svc._scan()
    svc._ensure_loaded()  # triggers migration
    listed = svc.list_stickers()
    assert len(listed) == 1
    assert listed[0]["name"] == "fire"
    assert listed[0]["pack_id"] == "default"
    # packs.json now exists on disk
    assert sticker_mod._PACKS_FILE.exists()


def test_migration_is_idempotent(svc, tmp_path, monkeypatch):
    """Running on a server with an existing packs.json doesn't double-create."""
    f = sticker_mod._STICKERS_DIR / "wave.png"
    f.write_bytes(b"\x89PNG")
    svc._scan()
    svc._ensure_loaded()
    first = sticker_mod._PACKS_FILE.read_text(encoding="utf-8")
    # Re-create the service; it should re-load identical state.
    sticker_mod.sticker_service._reset_for_tests()
    svc2 = sticker_mod.sticker_service
    svc2._scan()
    svc2._ensure_loaded()
    second = sticker_mod._PACKS_FILE.read_text(encoding="utf-8")
    assert first == second
    # Only one default pack regardless of how many times we reload
    packs = svc2.list_packs()
    default_packs = [p for p in packs if p["id"] == "default"]
    assert len(default_packs) == 1


def test_assign_sticker_moves_between_packs(svc):
    f = sticker_mod._STICKERS_DIR / "ace.gif"
    f.write_bytes(b"GIF89a")
    svc._scan()
    pack = svc.create_pack("Special")
    assert svc.assign_sticker("ace", pack["id"], weight=0.4) is True
    listed = next(s for s in svc.list_stickers() if s["name"] == "ace")
    assert listed["pack_id"] == pack["id"]
    assert listed["weight"] == 0.4


def test_assign_sticker_clamps_weight(svc):
    f = sticker_mod._STICKERS_DIR / "clamp.gif"
    f.write_bytes(b"GIF89a")
    svc._scan()
    svc.assign_sticker("clamp", "default", weight=5.0)
    listed = next(s for s in svc.list_stickers() if s["name"] == "clamp")
    assert listed["weight"] == 1.0  # clamped down to max


# ── HTTP endpoints ────────────────────────────────────────────────────────


def _login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def _csrf(client):
    _login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def test_list_packs_endpoint_returns_default(client, tmp_path, monkeypatch):
    monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path / "s")
    monkeypatch.setattr(sticker_mod, "_RUNTIME_DIR", tmp_path / "r")
    monkeypatch.setattr(sticker_mod, "_PACKS_FILE", tmp_path / "r" / "packs.json")
    sticker_mod.sticker_service._reset_for_tests()
    _login(client)
    res = client.get("/admin/stickers/packs")
    assert res.status_code == 200
    packs = res.get_json()["packs"]
    assert any(p["id"] == "default" for p in packs)


def test_create_pack_endpoint(client, tmp_path, monkeypatch):
    monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path / "s")
    monkeypatch.setattr(sticker_mod, "_RUNTIME_DIR", tmp_path / "r")
    monkeypatch.setattr(sticker_mod, "_PACKS_FILE", tmp_path / "r" / "packs.json")
    sticker_mod.sticker_service._reset_for_tests()
    token = _csrf(client)
    res = client.post(
        "/admin/stickers/packs/create",
        json={"name": "New Pack"},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    pack = res.get_json()["pack"]
    assert pack["name"] == "New Pack"
    assert pack["enabled"] is True


def test_toggle_pack_endpoint(client, tmp_path, monkeypatch):
    monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path / "s")
    monkeypatch.setattr(sticker_mod, "_RUNTIME_DIR", tmp_path / "r")
    monkeypatch.setattr(sticker_mod, "_PACKS_FILE", tmp_path / "r" / "packs.json")
    sticker_mod.sticker_service._reset_for_tests()
    token = _csrf(client)
    pack = sticker_mod.sticker_service.create_pack("X")
    res = client.post(
        f"/admin/stickers/packs/{pack['id']}/toggle",
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    assert res.get_json()["pack"]["enabled"] is False


def test_delete_pack_endpoint_404(client, tmp_path, monkeypatch):
    monkeypatch.setattr(sticker_mod, "_STICKERS_DIR", tmp_path / "s")
    monkeypatch.setattr(sticker_mod, "_RUNTIME_DIR", tmp_path / "r")
    monkeypatch.setattr(sticker_mod, "_PACKS_FILE", tmp_path / "r" / "packs.json")
    sticker_mod.sticker_service._reset_for_tests()
    token = _csrf(client)
    res = client.delete(
        "/admin/stickers/packs/ghost",
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 404
