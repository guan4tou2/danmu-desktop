import os
import subprocess
import sys
from pathlib import Path

import pytest

_BROWSER_MODULES = [
    "tests/test_browser_admin.py",
    "tests/test_browser_fire_e2e.py",
    "tests/test_browser_overlay_render.py",
    "tests/test_browser_p3_pages.py",
]


@pytest.mark.parametrize("module_path", _BROWSER_MODULES)
def test_browser_module_runs_in_isolated_child_pytest(module_path):
    server_dir = Path(__file__).resolve().parents[1]
    env = os.environ.copy()
    env["DANMU_BROWSER_TEST_CHILD"] = "1"
    env["ADMIN_PASSWORD"] = env.get("ADMIN_PASSWORD", "test")
    env["PYTHONPATH"] = ".."

    result = subprocess.run(
        [sys.executable, "-m", "pytest", "-q", module_path],
        cwd=server_dir,
        env=env,
        capture_output=True,
        text=True,
        timeout=300,
    )

    assert result.returncode == 0, (
        f"isolated browser module failed: {module_path}\n"
        f"stdout:\n{result.stdout}\n"
        f"stderr:\n{result.stderr}"
    )
