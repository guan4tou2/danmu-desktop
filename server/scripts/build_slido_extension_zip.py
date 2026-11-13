"""Package slido-extension/ into server/static/extensions/ for download.

Usage (from repo root or server/):
    python server/scripts/build_slido_extension_zip.py

The zip is a committed build artifact, like admin.bundle.js: it lives under
server/static/ so it ships both in the image (COPY server/static/) and on
hosts that bind-mount static/. tests/test_slido_extension_zip.py rebuilds it
in memory and fails if the committed file is stale.

Output is byte-for-byte reproducible: fixed file list and order, fixed
timestamps and permissions, and no compression (deflate output can differ
between zlib builds, which would make the freshness check flaky).
"""

from __future__ import annotations

import io
import json
import sys
import zipfile
from pathlib import Path
from typing import Tuple

REPO_ROOT = Path(__file__).resolve().parents[2]
EXTENSION_DIR = REPO_ROOT / "slido-extension"
OUT_DIR = REPO_ROOT / "server" / "static" / "extensions"
PREFIX = "danmu-slido-extension-"

# Exactly what Chrome needs to load the extension unpacked.
FILES = (
    "manifest.json",
    "background.js",
    "core.js",
    "content.js",
    "inject.js",
    "popup.html",
    "popup.js",
    "README.md",
)
_FIXED_TIME = (1980, 1, 1, 0, 0, 0)


def manifest_version(ext_dir: Path = EXTENSION_DIR) -> str:
    return str(json.loads((ext_dir / "manifest.json").read_text(encoding="utf-8"))["version"])


def zip_name(version: str) -> str:
    return f"{PREFIX}{version}.zip"


def build(ext_dir: Path = EXTENSION_DIR) -> Tuple[str, bytes]:
    """Return ``(filename, zip_bytes)`` for the extension in ``ext_dir``."""
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", compression=zipfile.ZIP_STORED) as zf:
        for name in FILES:
            info = zipfile.ZipInfo(f"slido-extension/{name}", date_time=_FIXED_TIME)
            info.external_attr = 0o644 << 16
            info.create_system = 3  # unix, so the mode above is honoured
            zf.writestr(info, (ext_dir / name).read_bytes())
    return zip_name(manifest_version(ext_dir)), buf.getvalue()


def main() -> int:
    name, data = build()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for old in OUT_DIR.glob(f"{PREFIX}*.zip"):
        if old.name != name:
            old.unlink()
    (OUT_DIR / name).write_bytes(data)
    print(f"{name}: {len(FILES)} files, {len(data)} bytes")
    return 0


if __name__ == "__main__":
    sys.exit(main())
