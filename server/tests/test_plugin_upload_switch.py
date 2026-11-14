"""ALLOW_PLUGIN_UPLOAD: the deployment switch for admin entry points that
write Python onto the server (plugin upload, plugin files in a backup).

Installed plugins must keep working with the switch off.
"""

import io
import os
import subprocess
import sys
import tarfile
import textwrap
from pathlib import Path

import pytest

from server.config import Config
from server.routes.admin import plugins as plugins_route
from server.services import backup as backup_svc

REPO_ROOT = Path(__file__).resolve().parents[2]

_PLUGIN_SRC = textwrap.dedent("""\
    from server.services.plugin_manager import DanmuPlugin

    class SwitchProbe(DanmuPlugin):
        name = "switch_probe"
        version = "1.0.0"
    """)


def _csrf(client):
    client.post("/login", data={"password": "test"}, follow_redirects=True)
    with client.session_transaction() as sess:
        return sess["csrf_token"]


def _upload(client, token, *, filename="probe.py", content=b"x = 1\n", dry_run=False):
    url = "/admin/plugins/upload" + ("?dry_run=true" if dry_run else "")
    return client.post(
        url,
        data={"file": (io.BytesIO(content), filename)},
        content_type="multipart/form-data",
        headers={"X-CSRF-Token": token},
    )


@pytest.fixture()
def plugin_dirs(tmp_path, monkeypatch):
    """A real PluginManager over temp dirs, so enable/disable/reload run for real."""
    import server.services.plugin_manager as pm_module

    bundled = tmp_path / "plugins"
    user = tmp_path / "user_plugins"
    bundled.mkdir()
    user.mkdir()
    monkeypatch.setattr(pm_module, "_BUNDLED_PLUGINS_DIR", bundled)
    monkeypatch.setattr(pm_module, "_USER_PLUGINS_DIR", user)
    monkeypatch.setattr(pm_module, "_STATE_FILE", tmp_path / "plugins_state.json")
    monkeypatch.setattr(pm_module, "plugin_manager", pm_module.PluginManager())
    monkeypatch.setattr(plugins_route, "_user_plugins_dir", lambda: user)
    return user


def _run_config(env_overrides):
    """Import Config in a clean interpreter with the given environment."""
    env = {k: v for k, v in os.environ.items() if k not in {"ENV", "ALLOW_PLUGIN_UPLOAD"}}
    env.update(env_overrides)
    env["PYTHONPATH"] = str(REPO_ROOT)
    out = subprocess.run(
        [
            sys.executable,
            "-c",
            "from server.config import Config; print(Config.ALLOW_PLUGIN_UPLOAD)",
        ],
        env=env,
        cwd=str(REPO_ROOT / "server"),
        capture_output=True,
        text=True,
        check=True,
    )
    return out.stdout.strip()


# ── defaults ──────────────────────────────────────────────────────────────


@pytest.mark.parametrize(
    "env, expected",
    [
        ({"ENV": "production", "ALLOW_PLUGIN_UPLOAD": ""}, "True"),
        ({"ENV": "prod", "ALLOW_PLUGIN_UPLOAD": ""}, "True"),
        ({"ENV": "development", "ALLOW_PLUGIN_UPLOAD": ""}, "True"),
        ({"ENV": "production", "ALLOW_PLUGIN_UPLOAD": "false"}, "False"),
        ({"ENV": "production", "ALLOW_PLUGIN_UPLOAD": "0"}, "False"),
        ({"ENV": "development", "ALLOW_PLUGIN_UPLOAD": "false"}, "False"),
        ({"ENV": "production", "ALLOW_PLUGIN_UPLOAD": "true"}, "True"),
    ],
)
def test_upload_is_on_unless_the_deployment_turns_it_off(env, expected):
    """On in every environment by default: the admin UI is how an operator
    without shell access installs a plugin. Blank counts as unset, so
    compose's ``${ALLOW_PLUGIN_UPLOAD:-}`` keeps the default."""
    assert _run_config(env) == expected


# ── switch off: upload refused ────────────────────────────────────────────


def test_upload_refused_when_switch_off(client, plugin_dirs, monkeypatch):
    monkeypatch.setattr(Config, "ALLOW_PLUGIN_UPLOAD", False)
    token = _csrf(client)

    resp = _upload(client, token, content=_PLUGIN_SRC.encode())
    assert resp.status_code == 403
    assert resp.get_json()["code"] == "plugin_upload_disabled"
    assert not (plugin_dirs / "probe.py").exists()

    resp = _upload(client, token, content=_PLUGIN_SRC.encode(), dry_run=True)
    assert resp.status_code == 403


def test_list_reports_upload_state(client, plugin_dirs, monkeypatch):
    token = _csrf(client)
    del token
    monkeypatch.setattr(Config, "ALLOW_PLUGIN_UPLOAD", False)
    assert client.get("/admin/plugins/list").get_json()["upload_allowed"] is False
    monkeypatch.setattr(Config, "ALLOW_PLUGIN_UPLOAD", True)
    assert client.get("/admin/plugins/list").get_json()["upload_allowed"] is True


def test_installed_plugins_keep_working_when_switch_off(client, plugin_dirs, monkeypatch):
    """Load, enable, disable, reload and uninstall stay available."""
    monkeypatch.setattr(Config, "ALLOW_PLUGIN_UPLOAD", False)
    (plugin_dirs / "switch_probe.py").write_text(_PLUGIN_SRC, encoding="utf-8")
    token = _csrf(client)
    headers = {"X-CSRF-Token": token}

    resp = client.post("/admin/plugins/reload", headers=headers)
    assert resp.status_code == 200
    names = [p["name"] for p in resp.get_json()["plugins"]]
    assert names == ["switch_probe"]

    resp = client.post("/admin/plugins/disable", json={"name": "switch_probe"}, headers=headers)
    assert resp.status_code == 200
    resp = client.post("/admin/plugins/enable", json={"name": "switch_probe"}, headers=headers)
    assert resp.status_code == 200
    listed = client.get("/admin/plugins/list").get_json()["plugins"]
    assert listed[0]["enabled"] is True

    resp = client.post(
        "/admin/plugins/uninstall", json={"filename": "switch_probe.py"}, headers=headers
    )
    assert resp.status_code == 200
    assert not (plugin_dirs / "switch_probe.py").exists()


# ── switch on: development keeps uploading ────────────────────────────────


def test_upload_still_works_when_switch_on(client, plugin_dirs, monkeypatch):
    monkeypatch.setattr(Config, "ALLOW_PLUGIN_UPLOAD", True)
    token = _csrf(client)
    resp = _upload(client, token, filename="switch_probe.py", content=_PLUGIN_SRC.encode())
    assert resp.status_code == 200, resp.get_json()
    assert (plugin_dirs / "switch_probe.py").exists()
    listed = client.get("/admin/plugins/list").get_json()["plugins"]
    assert [p["name"] for p in listed] == ["switch_probe"]


# ── switch off: backup restore does not write code either ─────────────────


def _tarball(members):
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        for name, data in members.items():
            info = tarfile.TarInfo(name=name)
            info.size = len(data)
            tar.addfile(info, io.BytesIO(data))
    return buf.getvalue()


@pytest.fixture()
def backup_dirs(tmp_path, monkeypatch):
    dirs = {name: tmp_path / name for name in ("runtime", "effects", "plugins", "user_plugins")}
    for d in dirs.values():
        d.mkdir()
    monkeypatch.setattr(
        backup_svc,
        "_INCLUDE_DIRS",
        [
            ("runtime", dirs["runtime"], "runtime", "*.json"),
            ("effects", dirs["effects"], "effects", "*.dme"),
            ("plugins", dirs["plugins"], "plugins", "*"),
            ("user_plugins", dirs["user_plugins"], "user_plugins", "*"),
        ],
    )
    return dirs


def test_restore_skips_plugin_code_when_switch_off(backup_dirs, monkeypatch):
    monkeypatch.setattr(Config, "ALLOW_PLUGIN_UPLOAD", False)
    raw = _tarball(
        {
            "user_plugins/restored.py": b"x = 1\n",
            "plugins/bundled.py": b"x = 2\n",
            "runtime/settings.json": b"{}",
        }
    )
    result = backup_svc.unpack(raw, dry_run=False)
    assert result["ok"], result
    assert result["applied"] == 1
    skipped = {s["path"]: s.get("code") for s in result["skipped"]}
    assert skipped == {
        "user_plugins/restored.py": "plugin_upload_disabled",
        "plugins/bundled.py": "plugin_upload_disabled",
    }
    assert not (backup_dirs["user_plugins"] / "restored.py").exists()
    assert not (backup_dirs["plugins"] / "bundled.py").exists()
    assert (backup_dirs["runtime"] / "settings.json").exists()


def test_restore_writes_plugin_code_when_switch_on(backup_dirs, monkeypatch):
    monkeypatch.setattr(Config, "ALLOW_PLUGIN_UPLOAD", True)
    raw = _tarball({"user_plugins/restored.py": b"x = 1\n"})
    result = backup_svc.unpack(raw, dry_run=False)
    assert result["ok"] and result["applied"] == 1, result
    assert (backup_dirs["user_plugins"] / "restored.py").read_bytes() == b"x = 1\n"
