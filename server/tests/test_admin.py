"""Tests for admin routes: blacklist, history, settings toggle, auth."""
import json

from server import state


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def login(client):
    return client.post("/login", data={"password": "test"}, follow_redirects=True)


def csrf_token(client):
    login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def authed_post(client, url, payload):
    """POST with CSRF token sent as header (avoids polluting JSON schema validation)."""
    token = csrf_token(client)
    return client.post(url, json=payload, headers={"X-CSRF-Token": token})


# ---------------------------------------------------------------------------
# Auth: login / logout
# ---------------------------------------------------------------------------

def test_login_correct_password(client):
    res = login(client)
    assert res.status_code == 200
    with client.session_transaction() as sess:
        assert sess.get("logged_in") is True
        assert "csrf_token" in sess


def test_login_wrong_password(client):
    res = client.post("/login", data={"password": "wrong"}, follow_redirects=True)
    assert res.status_code == 200
    with client.session_transaction() as sess:
        assert not sess.get("logged_in")


def test_logout_clears_session(client):
    token = csrf_token(client)
    res = client.post("/logout", json={"csrf_token": token})
    assert res.status_code in (200, 302)
    with client.session_transaction() as sess:
        assert not sess.get("logged_in")


def test_login_rate_limit(client):
    """Login endpoint should be rate-limited (default 5 attempts per window)."""
    for _ in range(5):
        client.post("/login", data={"password": "bad"})
    res = client.post("/login", data={"password": "bad"})
    assert res.status_code == 429


# ---------------------------------------------------------------------------
# Blacklist
# ---------------------------------------------------------------------------

def test_blacklist_add_and_list(client):
    res = authed_post(client, "/admin/blacklist/add", {"keyword": "spam"})
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["message"] == "Keyword added"
    assert "spam" in state.blacklist


def test_blacklist_add_duplicate(client):
    authed_post(client, "/admin/blacklist/add", {"keyword": "dup"})
    res = authed_post(client, "/admin/blacklist/add", {"keyword": "dup"})
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["message"] == "Keyword already exists"


def test_blacklist_add_validates_keyword(client):
    # empty keyword
    res = authed_post(client, "/admin/blacklist/add", {"keyword": ""})
    assert res.status_code == 400

    # keyword too long (> 200 chars)
    res = authed_post(client, "/admin/blacklist/add", {"keyword": "x" * 201})
    assert res.status_code == 400

    # keyword with control characters
    res = authed_post(client, "/admin/blacklist/add", {"keyword": "bad\x00word"})
    assert res.status_code == 400


def test_blacklist_remove(client):
    state.blacklist.add("remove-me")
    res = authed_post(client, "/admin/blacklist/remove", {"keyword": "remove-me"})
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["message"] == "Keyword removed"
    assert "remove-me" not in state.blacklist


def test_blacklist_remove_not_found(client):
    res = authed_post(client, "/admin/blacklist/remove", {"keyword": "nonexistent"})
    assert res.status_code == 404
    data = json.loads(res.data)
    assert "error" in data


def test_blacklist_get(client):
    state.blacklist.update({"word1", "word2"})
    login(client)
    res = client.get("/admin/blacklist/get")
    assert res.status_code == 200
    keywords = json.loads(res.data)
    assert "word1" in keywords
    assert "word2" in keywords


def test_blacklist_requires_auth(client):
    res = client.get("/admin/blacklist/get")
    assert res.status_code == 401


# ---------------------------------------------------------------------------
# Settings toggle (/admin/Set)
# ---------------------------------------------------------------------------

def test_set_option_toggle(client):
    token = csrf_token(client)
    res = client.post(
        "/admin/Set",
        json={"key": "Color", "enabled": False},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["message"] == "OK"


def test_set_option_unknown_key(client):
    token = csrf_token(client)
    res = client.post(
        "/admin/Set",
        json={"key": "NonExistentKey", "enabled": True},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400
    data = json.loads(res.data)
    assert "error" in data


def test_set_option_requires_auth(client):
    # CSRF check runs before auth check → 403 (no CSRF token provided)
    res = client.post("/admin/Set", json={"key": "Color", "enabled": True})
    assert res.status_code == 403


# ---------------------------------------------------------------------------
# Admin settings update (/admin/update)
# ---------------------------------------------------------------------------

def test_update_invalid_setting_type(client):
    token = csrf_token(client)
    payload = {"type": "HackerField", "index": 0, "value": 99, "csrf_token": token}
    res = client.post("/admin/update", json=payload)
    assert res.status_code == 400


def test_update_speed_out_of_range(client):
    token = csrf_token(client)
    payload = {"type": "Speed", "index": 3, "value": 99, "csrf_token": token}
    res = client.post("/admin/update", json=payload)
    # Should fail validation (Speed max is 10)
    assert res.status_code == 400


def test_update_speed_valid(client):
    token = csrf_token(client)
    res = client.post(
        "/admin/update",
        json={"type": "Speed", "index": 3, "value": 7},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200


# ---------------------------------------------------------------------------
# Danmu history
# ---------------------------------------------------------------------------

def test_history_get_empty(client):
    login(client)
    res = client.get("/admin/history")
    assert res.status_code == 200
    data = json.loads(res.data)
    assert "records" in data
    assert "stats" in data
    assert "query" in data


def test_history_get_with_params(client):
    login(client)
    res = client.get("/admin/history?hours=12&limit=50")
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["query"]["hours"] == 12
    assert data["query"]["limit"] == 50


def test_history_get_clamps_params(client):
    login(client)
    # hours > 168 and limit > 5000 should be clamped
    res = client.get("/admin/history?hours=9999&limit=99999")
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["query"]["hours"] == 168
    assert data["query"]["limit"] == 5000


def test_history_clear(client):
    token = csrf_token(client)
    res = client.post("/admin/history/clear", json={"csrf_token": token})
    assert res.status_code == 200
    data = json.loads(res.data)
    assert data["message"] == "History cleared"


def test_history_requires_auth(client):
    res = client.get("/admin/history")
    assert res.status_code == 401



# ---------------------------------------------------------------------------
# Effects Management
# ---------------------------------------------------------------------------

def test_effects_list_requires_auth(client):
    res = client.get("/admin/effects")
    assert res.status_code == 401


def test_effects_list_returns_effects(client):
    login(client)
    res = client.get("/admin/effects")
    assert res.status_code == 200
    data = json.loads(res.data)
    assert "effects" in data
    assert isinstance(data["effects"], list)


def test_effects_list_has_file_info(client):
    """Each effect entry must include filename and label."""
    from server.services import effects as eff_svc
    eff_svc._cache["testfx"] = {
        "name": "testfx", "label": "Test", "description": "", "params": {},
        "keyframes": "", "animation": "dme-test 1s",
    }
    eff_svc._path_to_name["/tmp/testfx.dme"] = "testfx"
    login(client)
    res = client.get("/admin/effects")
    assert res.status_code == 200
    data = json.loads(res.data)
    names = [e["name"] for e in data["effects"]]
    assert "testfx" in names
    entry = next(e for e in data["effects"] if e["name"] == "testfx")
    assert "filename" in entry
    assert "label" in entry
    # Cleanup
    eff_svc._cache.pop("testfx", None)
    eff_svc._path_to_name.pop("/tmp/testfx.dme", None)


def test_effects_reload_requires_auth(client):
    res = client.post("/admin/effects/reload", json={})
    assert res.status_code == 403  # CSRF before auth


def test_effects_reload_ok(client):
    token = csrf_token(client)
    res = client.post(
        "/admin/effects/reload",
        json={},
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    data = json.loads(res.data)
    assert "count" in data


def test_effects_delete_not_found(client):
    res = authed_post(client, "/admin/effects/delete", {"name": "nonexistent_xyz"})
    assert res.status_code == 404


def test_effects_delete_invalid_name(client):
    res = authed_post(client, "/admin/effects/delete", {"name": "../etc/passwd"})
    assert res.status_code == 404  # invalid name → delete_by_name returns False → 404


def test_effects_delete_ok(client, tmp_path):
    import yaml as _yaml
    from server.services import effects as eff_svc
    # Write a real .dme file to tmp dir so delete_by_name can unlink it
    dme_file = tmp_path / "tmpfx.dme"
    dme_file.write_text("name: tmpfx\nlabel: TmpFx\nanimation: dme-tmp 1s\nkeyframes: '@keyframes dme-tmp {}'\n")
    # Inject into cache as if it were loaded
    eff_svc._cache["tmpfx"] = {
        "name": "tmpfx", "label": "TmpFx", "description": "", "params": {},
        "keyframes": "", "animation": "dme-tmp 1s",
    }
    eff_svc._mtime_map[str(dme_file)] = dme_file.stat().st_mtime
    eff_svc._path_to_name[str(dme_file)] = "tmpfx"
    res = authed_post(client, "/admin/effects/delete", {"name": "tmpfx"})
    assert res.status_code == 200
    assert "tmpfx" not in eff_svc._cache


def test_effects_upload_invalid_extension(client):
    from io import BytesIO
    token = csrf_token(client)
    data = {"effectfile": (BytesIO(b"content"), "bad.txt")}
    res = client.post(
        "/admin/effects/upload",
        data=data,
        content_type="multipart/form-data",
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400


def test_effects_upload_invalid_yaml(client):
    from io import BytesIO
    token = csrf_token(client)
    data = {"effectfile": (BytesIO(b": broken: yaml: ["), "bad.dme")}
    res = client.post(
        "/admin/effects/upload",
        data=data,
        content_type="multipart/form-data",
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400


def test_effects_upload_missing_name(client):
    from io import BytesIO
    token = csrf_token(client)
    content = b"label: No Name\nanimation: dme-x 1s\n"
    data = {"effectfile": (BytesIO(content), "noname.dme")}
    res = client.post(
        "/admin/effects/upload",
        data=data,
        content_type="multipart/form-data",
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 400


def test_effects_upload_ok(client, tmp_path, monkeypatch):
    """Uploading a valid .dme file saves it and returns 200."""
    from io import BytesIO
    from server.services import effects as eff_svc
    # Point _EFFECTS_DIR to a tmp directory for this test
    monkeypatch.setattr(eff_svc, "_EFFECTS_DIR", tmp_path)
    token = csrf_token(client)
    content = b"name: myfx\nlabel: My Fx\ndescription: Test\nparams: {}\nkeyframes: '@keyframes dme-myfx {}'\nanimation: dme-myfx 1s linear infinite\n"
    data = {"effectfile": (BytesIO(content), "myfx.dme")}
    res = client.post(
        "/admin/effects/upload",
        data=data,
        content_type="multipart/form-data",
        headers={"X-CSRF-Token": token},
    )
    assert res.status_code == 200
    result = json.loads(res.data)
    assert result["filename"] == "myfx.dme"
    # Cleanup
    eff_svc._cache.pop("myfx", None)


def test_effects_get_content_not_found(client):
    login(client)
    res = client.get("/admin/effects/nonexistent_xyz/content")
    assert res.status_code == 404


def test_effects_get_content_requires_auth(client):
    res = client.get("/admin/effects/rainbow/content")
    assert res.status_code == 401


def test_effects_save_requires_csrf(client):
    res = client.post("/admin/effects/save", json={"name": "rainbow", "content": "name: rainbow\n"})
    assert res.status_code == 403


def test_effects_save_not_found(client, tmp_path, monkeypatch):
    from server.services import effects as eff_svc
    monkeypatch.setattr(eff_svc, "_EFFECTS_DIR", tmp_path)
    # Reset cache so the effect is not in the path map
    eff_svc._cache.clear()
    eff_svc._path_to_name.clear()
    eff_svc._mtime_map.clear()
    res = authed_post(client, "/admin/effects/save", {
        "name": "notexist", "content": "name: notexist\nanimation: dme-x 1s\n"
    })
    assert res.status_code == 400
    data = json.loads(res.data)
    assert "error" in data


def test_effects_save_ok(client, tmp_path, monkeypatch):
    from server.services import effects as eff_svc
    monkeypatch.setattr(eff_svc, "_EFFECTS_DIR", tmp_path)
    # Create a real .dme file and inject into cache
    dme_file = tmp_path / "editable.dme"
    original = b"name: editable\nlabel: Editable\nanimation: dme-edit 1s\nkeyframes: '@keyframes dme-edit {}'\n"
    dme_file.write_bytes(original)
    eff_svc._cache["editable"] = {
        "name": "editable", "label": "Editable", "description": "", "params": {},
        "keyframes": "", "animation": "dme-edit 1s",
    }
    eff_svc._mtime_map[str(dme_file)] = dme_file.stat().st_mtime
    eff_svc._path_to_name[str(dme_file)] = "editable"

    new_content = "name: editable\nlabel: Edited\nanimation: dme-edit 2s\nkeyframes: '@keyframes dme-edit {}'\n"
    res = authed_post(client, "/admin/effects/save", {"name": "editable", "content": new_content})
    assert res.status_code == 200
    data = json.loads(res.data)
    assert "filename" in data
    # Verify file was actually written
    assert dme_file.read_text() == new_content
    # Cleanup
    eff_svc._cache.pop("editable", None)
    eff_svc._path_to_name.pop(str(dme_file), None)
    eff_svc._mtime_map.pop(str(dme_file), None)
