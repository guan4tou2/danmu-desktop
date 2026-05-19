"""Tests for /admin/plugins/upload and /admin/plugins/uninstall (v5 Batch 11)."""

import io

import pytest

from server.routes.admin import plugins as plugins_route

# ── Helpers ────────────────────────────────────────────────────────────────


def login(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)


def csrf_token(client):
    login(client)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def upload_file(client, *, filename, content, dry_run=False):
    """POST a multipart upload to /admin/plugins/upload."""
    token = csrf_token(client)
    if isinstance(content, str):
        content = content.encode("utf-8")
    url = "/admin/plugins/upload"
    if dry_run:
        url += "?dry_run=true"
    return client.post(
        url,
        data={"file": (io.BytesIO(content), filename)},
        content_type="multipart/form-data",
        headers={"X-CSRF-Token": token},
    )


@pytest.fixture()
def isolated_user_plugins(tmp_path, monkeypatch):
    """Redirect plugin uploads to a tmp dir so tests don't touch real disk."""
    target = tmp_path / "user_plugins"
    target.mkdir()
    monkeypatch.setattr(plugins_route, "_user_plugins_dir", lambda: target)
    # Stub plugin_manager.reload so we don't actually re-scan the filesystem
    # during the test (would pick up bundled plugins we don't care about).
    import server.services.plugin_manager as pm_module

    monkeypatch.setattr(pm_module.plugin_manager, "reload", lambda: None)
    return target


# ── Manifest parser ────────────────────────────────────────────────────────


def test_parse_manifest_extracts_all_known_keys():
    text = """\
# @name auto_moderate
# @version 1.0.0
# @author @mei
# @description 自動審核彈幕內容
# @priority 50
# @permissions messages.read, messages.block, filters.add

import re
"""
    m = plugins_route._parse_manifest(text)
    assert m["name"] == "auto_moderate"
    assert m["version"] == "1.0.0"
    assert m["author"] == "@mei"
    assert m["description"] == "自動審核彈幕內容"
    assert m["priority"] == 50
    assert m["permissions"] == ["messages.read", "messages.block", "filters.add"]


def test_parse_manifest_stops_at_first_code_line():
    """Lines after the first non-comment / non-blank line are ignored."""
    text = """\
# @name early

x = 1
# @version 9.9.9  ← should be ignored, after code
"""
    m = plugins_route._parse_manifest(text)
    assert m == {"name": "early"}


def test_parse_manifest_skips_invalid_priority():
    text = "# @priority not-a-number\n"
    assert plugins_route._parse_manifest(text) == {}


def test_parse_manifest_handles_js_comment_form():
    text = """\
// @name js_plugin
// @version 0.1.0
"""
    m = plugins_route._parse_manifest(text)
    assert m == {"name": "js_plugin", "version": "0.1.0"}


# ── Imports + dep classifier ───────────────────────────────────────────────


def test_extract_imports_walks_top_level():
    text = "import re\nimport json\nfrom os.path import join\n"
    imps = plugins_route._extract_python_imports(text)
    assert "re" in imps
    assert "json" in imps
    assert "os" in imps  # top-level of os.path
    assert "join" not in imps  # `from ... import name` is per-symbol


def test_extract_imports_returns_empty_on_syntax_error():
    text = "import re\ndef oops(:\n"
    assert plugins_route._extract_python_imports(text) == []


def test_classify_dep_marks_stdlib():
    out = plugins_route._classify_dep("json")
    assert out["status"] == "ok"
    assert out["note"] == "stdlib"


def test_classify_dep_marks_missing():
    out = plugins_route._classify_dep("a_module_that_definitely_does_not_exist_42")
    assert out["status"] == "missing"
    assert "uv add" in out["note"]


# ── /upload endpoint — auth + validation ───────────────────────────────────


def test_upload_requires_login(client):
    resp = client.post(
        "/admin/plugins/upload",
        data={"file": (io.BytesIO(b"# @name test\n"), "test.py")},
        content_type="multipart/form-data",
    )
    # 401 (no session) or redirect to login — both are "not authorised"
    assert resp.status_code in (302, 401, 403)


def test_upload_rejects_missing_file(client):
    token = csrf_token(client)
    resp = client.post(
        "/admin/plugins/upload",
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400
    assert "No file" in resp.get_json()["error"]


def test_upload_rejects_wrong_extension(client):
    resp = upload_file(client, filename="bad.exe", content=b"\x00\x00")
    assert resp.status_code == 400
    assert ".py" in resp.get_json()["error"]


def test_upload_rejects_empty_file(client):
    resp = upload_file(client, filename="empty.py", content=b"")
    assert resp.status_code == 400
    assert "Empty" in resp.get_json()["error"]


def test_upload_rejects_oversize(client):
    big = b"# " + (b"x" * (256 * 1024 + 1))
    resp = upload_file(client, filename="big.py", content=big)
    assert resp.status_code == 413


def test_upload_rejects_non_utf8(client):
    # Invalid UTF-8 sequence
    bad = b"\xff\xfe\x00\x00invalid utf"
    resp = upload_file(client, filename="bad.py", content=bad)
    assert resp.status_code == 400
    assert "UTF-8" in resp.get_json()["error"]


# ── /upload dry-run ────────────────────────────────────────────────────────


def test_upload_dry_run_returns_manifest_and_deps(client, isolated_user_plugins):
    code = """\
# @name dry_test
# @version 2.0.0
# @priority 5
import re
import json
"""
    resp = upload_file(client, filename="dry_test.py", content=code, dry_run=True)
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["filename"] == "dry_test.py"
    assert body["manifest"]["name"] == "dry_test"
    assert body["manifest"]["version"] == "2.0.0"
    assert body["manifest"]["priority"] == 5
    assert body["validation"]["syntax_ok"] is True
    dep_names = [d["name"] for d in body["validation"]["deps"]]
    assert "re" in dep_names and "json" in dep_names
    # Dry-run must NOT write to disk
    assert not (isolated_user_plugins / "dry_test.py").exists()


def test_upload_dry_run_returns_syntax_error_on_bad_python(client, isolated_user_plugins):
    code = "def bad(:\n  return 1\n"
    resp = upload_file(client, filename="syntax.py", content=code, dry_run=True)
    # Syntax-error in dry-run mode is still a 200 (validation result) — the
    # endpoint returns syntax_err in the validation payload so the FE can
    # render the syntax-error card.
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["validation"]["syntax_ok"] is False
    assert body["validation"]["syntax_err"] is not None
    assert body["validation"]["syntax_err"]["line"] is not None


def test_upload_dry_run_no_manifest_returns_empty_manifest(client, isolated_user_plugins):
    code = "import re\n\ndef noop():\n  pass\n"
    resp = upload_file(client, filename="no_meta.py", content=code, dry_run=True)
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["manifest"] == {}
    assert body["validation"]["syntax_ok"] is True


def test_upload_dry_run_detects_missing_dep(client, isolated_user_plugins):
    code = "import a_module_that_definitely_does_not_exist_42\n"
    resp = upload_file(client, filename="missing.py", content=code, dry_run=True)
    assert resp.status_code == 200
    deps = resp.get_json()["validation"]["deps"]
    missing = [d for d in deps if d["status"] == "missing"]
    assert any("a_module_that_definitely_does_not_exist_42" in d["name"] for d in missing)


# ── /upload install (live) ─────────────────────────────────────────────────


def test_upload_writes_file_and_reloads(client, isolated_user_plugins):
    code = """\
# @name install_test
# @version 1.0.0
import re
"""
    resp = upload_file(client, filename="install_test.py", content=code)
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["installed"] == "install_test.py"
    assert body["name"] == "install_test"
    # File should now exist on disk
    written = isolated_user_plugins / "install_test.py"
    assert written.exists()
    assert "install_test" in written.read_text()


def test_upload_install_blocked_on_syntax_error(client, isolated_user_plugins):
    code = "def broken(:\n  pass\n"
    resp = upload_file(client, filename="broken.py", content=code)
    # When syntax_ok is False, even non-dry-run returns the validation
    # report rather than installing.
    assert resp.status_code == 200
    body = resp.get_json()
    assert body["validation"]["syntax_ok"] is False
    assert "installed" not in body
    # File MUST NOT be written
    assert not (isolated_user_plugins / "broken.py").exists()


# ── /uninstall ─────────────────────────────────────────────────────────────


def test_uninstall_requires_filename(client, isolated_user_plugins):
    token = csrf_token(client)
    resp = client.post(
        "/admin/plugins/uninstall",
        json={},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400


def test_uninstall_rejects_path_traversal(client, isolated_user_plugins):
    token = csrf_token(client)
    resp = client.post(
        "/admin/plugins/uninstall",
        json={"filename": "../../etc/passwd"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400
    assert "Invalid" in resp.get_json()["error"]


def test_uninstall_rejects_non_plugin_extension(client, isolated_user_plugins):
    token = csrf_token(client)
    resp = client.post(
        "/admin/plugins/uninstall",
        json={"filename": "passwords.txt"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 400


def test_uninstall_returns_404_for_missing_file(client, isolated_user_plugins):
    token = csrf_token(client)
    resp = client.post(
        "/admin/plugins/uninstall",
        json={"filename": "ghost.py"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 404


def test_uninstall_removes_existing_file(client, isolated_user_plugins):
    # Seed a fake plugin
    target = isolated_user_plugins / "to_remove.py"
    target.write_text("# @name to_remove\n")
    assert target.exists()

    token = csrf_token(client)
    resp = client.post(
        "/admin/plugins/uninstall",
        json={"filename": "to_remove.py"},
        headers={"X-CSRF-Token": token},
    )
    assert resp.status_code == 200
    assert resp.get_json()["removed"] == "to_remove.py"
    assert not target.exists()
