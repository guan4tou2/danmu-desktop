import os
import sys
from pathlib import Path


def should_run_browser_module(module_file: str) -> bool:
    """Allow direct module runs, but isolate browser modules during full-suite runs."""

    if os.environ.get("DANMU_BROWSER_TEST_CHILD") == "1":
        return True

    module_name = Path(module_file).name
    for arg in sys.argv[1:]:
        target = Path(arg.split("::", 1)[0]).name
        if target == module_name:
            return True
    return False
