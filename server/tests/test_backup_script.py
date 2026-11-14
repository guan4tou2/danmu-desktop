"""scripts/backup.sh: .env only on request, owner-only output, a clear warning.

Runs the real script against a throwaway checkout layout in tmp_path.
"""

import os
import shutil
import stat
import subprocess
import tarfile
from pathlib import Path

import pytest

SCRIPT = Path(__file__).resolve().parents[2] / "scripts" / "backup.sh"

pytestmark = pytest.mark.skipif(shutil.which("bash") is None, reason="needs bash")


@pytest.fixture()
def checkout(tmp_path):
    root = tmp_path / "repo"
    (root / "scripts").mkdir(parents=True)
    shutil.copy2(SCRIPT, root / "scripts" / "backup.sh")
    (root / "server" / "runtime").mkdir(parents=True)
    (root / "server" / "runtime" / "settings.json").write_text("{}")
    (root / "server" / "user_plugins").mkdir()
    (root / "server" / "user_fonts").mkdir()
    (root / ".env").write_text("SECRET_KEY=placeholder-for-test\n")
    return root


def _run(root, *args, env_extra=None):
    env = {k: v for k, v in os.environ.items() if not k.startswith("BACKUP_")}
    env["BACKUP_SKIP_STATIC"] = "1"
    env.update(env_extra or {})
    return subprocess.run(
        ["bash", str(root / "scripts" / "backup.sh"), *args],
        cwd=str(root),
        env=env,
        capture_output=True,
        text=True,
        check=True,
    )


def _names(path):
    with tarfile.open(path, "r:gz") as tar:
        return set(tar.getnames())


def test_default_backup_leaves_env_out(checkout):
    out = checkout / "snap.tar.gz"
    proc = _run(checkout, str(out))
    names = _names(out)
    assert ".env" not in names
    assert "server/runtime/settings.json" in names
    assert stat.S_IMODE(out.stat().st_mode) == 0o600
    last = proc.stdout.strip().splitlines()[-1]
    assert "admin access" in last and str(out) in last


@pytest.mark.parametrize(
    "args, env", [(["--include-env"], None), ([], {"BACKUP_INCLUDE_ENV": "1"})]
)
def test_env_included_only_when_asked(checkout, args, env):
    out = checkout / "full.tar.gz"
    _run(checkout, *args, str(out), env_extra=env)
    assert ".env" in _names(out)
    assert stat.S_IMODE(out.stat().st_mode) == 0o600


def test_default_output_name_still_works(checkout):
    _run(checkout)
    outputs = list(checkout.glob("danmu-backup-*.tar.gz"))
    assert len(outputs) == 1
    assert stat.S_IMODE(outputs[0].stat().st_mode) == 0o600


def test_existing_loose_output_is_replaced_owner_only(checkout):
    out = checkout / "snap.tar.gz"
    out.write_bytes(b"old")
    out.chmod(0o644)
    _run(checkout, str(out))
    assert stat.S_IMODE(out.stat().st_mode) == 0o600
    assert "server/runtime/settings.json" in _names(out)
    assert not list(checkout.glob(".danmu-backup.*"))


@pytest.mark.skipif(os.geteuid() == 0, reason="root can read the unreadable file")
def test_failed_tar_keeps_old_file_and_leaves_no_temp(checkout):
    out = checkout / "snap.tar.gz"
    out.write_bytes(b"previous archive")
    unreadable = checkout / "server" / "runtime" / "locked.json"
    unreadable.write_text("{}")
    unreadable.chmod(0)
    try:
        with pytest.raises(subprocess.CalledProcessError):
            _run(checkout, str(out))
    finally:
        unreadable.chmod(0o600)
    assert out.read_bytes() == b"previous archive"
    assert not list(checkout.glob(".danmu-backup.*"))


def test_help_describes_env_flag(checkout):
    proc = _run(checkout, "--help")
    assert "--include-env" in proc.stdout
    assert not list(checkout.glob("*.tar.gz"))


def test_unknown_option_is_refused(checkout):
    with pytest.raises(subprocess.CalledProcessError) as exc:
        _run(checkout, "--include-secrets")
    assert exc.value.returncode == 2


@pytest.mark.parametrize("relative", [False, True], ids=["absolute", "relative"])
def test_output_inside_an_archived_directory_does_not_include_itself(checkout, relative):
    out = checkout / "server" / "runtime" / "snap.tar.gz"
    out.write_bytes(b"an earlier archive with the same name")
    _run(checkout, "server/runtime/snap.tar.gz" if relative else str(out))
    names = _names(out)
    assert "server/runtime/settings.json" in names
    assert "server/runtime/snap.tar.gz" not in names
    assert not [n for n in names if ".danmu-backup." in n]
    assert not list((checkout / "server" / "runtime").glob(".danmu-backup.*"))


def test_output_path_that_is_a_directory_is_refused(checkout):
    target = checkout / "backups"
    target.mkdir()
    with pytest.raises(subprocess.CalledProcessError) as exc:
        _run(checkout, str(target))
    assert exc.value.returncode == 1
    assert "directory" in exc.value.stderr
    assert list(target.iterdir()) == []
    assert not list(checkout.glob(".danmu-backup.*"))
