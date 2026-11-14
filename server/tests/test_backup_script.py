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


def test_help_describes_env_flag(checkout):
    proc = _run(checkout, "--help")
    assert "--include-env" in proc.stdout
    assert not list(checkout.glob("*.tar.gz"))


def test_unknown_option_is_refused(checkout):
    with pytest.raises(subprocess.CalledProcessError) as exc:
        _run(checkout, "--include-secrets")
    assert exc.value.returncode == 2
