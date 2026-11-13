"""The downloadable Slido extension zip (server/static/extensions/).

It is a committed build artifact (scripts/build_slido_extension_zip.py),
served from static/ so it ships in the image and on bind-mounted hosts.
These tests fail when the zip is stale, missing, or disagrees with the
version the Extensions card shows.
"""

from __future__ import annotations

import importlib.util
import io
import json
import zipfile
from pathlib import Path

from server.services import slido_status

SERVER = Path(__file__).resolve().parent.parent
REPO = SERVER.parent
EXT_DIR = SERVER / "static" / "extensions"


def _builder():
    spec = importlib.util.spec_from_file_location(
        "build_slido_extension_zip", SERVER / "scripts" / "build_slido_extension_zip.py"
    )
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def test_exactly_one_committed_zip_and_it_is_fresh():
    zips = sorted(p.name for p in EXT_DIR.glob("danmu-slido-extension-*.zip"))
    name, data = _builder().build()
    assert zips == [name], "run: python server/scripts/build_slido_extension_zip.py"
    assert (
        EXT_DIR / name
    ).read_bytes() == data, (
        "slido-extension/ changed — rebuild: python server/scripts/build_slido_extension_zip.py"
    )


def test_build_is_reproducible():
    builder = _builder()
    assert builder.build() == builder.build()


def test_zip_contains_only_the_extension_files():
    builder = _builder()
    _, data = builder.build()
    with zipfile.ZipFile(io.BytesIO(data)) as zf:
        names = zf.namelist()
    assert names == [f"slido-extension/{f}" for f in builder.FILES]
    assert not any("/." in n or "test" in n.lower() for n in names)


def test_download_is_served_and_matches_the_card_version(client):
    info = slido_status.extension_info()
    manifest = json.loads((REPO / "slido-extension" / "manifest.json").read_text())
    assert info["version"] == manifest["version"]
    assert (
        info["download_url"]
        == f"/static/extensions/danmu-slido-extension-{manifest['version']}.zip"
    )

    resp = client.get(info["download_url"])
    assert resp.status_code == 200
    with zipfile.ZipFile(io.BytesIO(resp.data)) as zf:
        served = json.loads(zf.read("slido-extension/manifest.json"))
    assert served["version"] == info["version"]


def test_extension_info_is_none_without_a_zip(tmp_path):
    assert slido_status.extension_info(tmp_path) is None
    (tmp_path / "danmu-slido-extension-9.9.9.zip").write_bytes(b"not a zip")
    assert slido_status.extension_info(tmp_path) is None
