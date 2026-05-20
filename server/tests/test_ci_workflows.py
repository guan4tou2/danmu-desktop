import json
import tomllib
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]


def test_docker_smoke_waits_for_ws_before_fire():
    workflow = REPO_ROOT / ".github" / "workflows" / "docker-build.yml"
    body = workflow.read_text(encoding="utf-8")

    ws_wait = body.find("WebSocket route is up")
    fire_smoke = body.find("=== Smoke test: /fire + WS delivery ===")

    assert "-p 4001:4001" not in body
    assert "ws://127.0.0.1:4001" not in body
    assert "ws://127.0.0.1:4000/ws" in body
    assert ws_wait != -1, "Docker smoke test must wait for the /ws route before /fire"
    assert fire_smoke != -1, "Docker smoke test /fire section was not found"
    assert ws_wait < fire_smoke, "WS readiness wait must run before the /fire smoke test"


def test_runtime_dependencies_require_idna_security_floor():
    pyproject = REPO_ROOT / "server" / "pyproject.toml"
    data = tomllib.loads(pyproject.read_text(encoding="utf-8"))
    deps = [dep.replace(" ", "").lower() for dep in data["project"]["dependencies"]]

    assert "idna>=3.15" in deps


def test_desktop_release_targets_are_portable_only():
    package = REPO_ROOT / "danmu-desktop" / "package.json"
    data = json.loads(package.read_text(encoding="utf-8"))
    build = data["build"]

    assert build["win"]["target"] == ["portable"]
    assert build["mac"]["target"] == ["zip"]


def test_release_workflow_does_not_upload_installer_artifacts():
    workflow = REPO_ROOT / ".github" / "workflows" / "build.yml"
    body = workflow.read_text(encoding="utf-8")

    assert "Danmu Desktop*-mac-arm64.dmg" not in body
    assert "Danmu-Desktop*-mac-arm64.zip" in body
    assert "Danmu-Desktop*-win-x64.exe" in body
    assert "artifacts/Electron-App-windows-latest/latest.yml" not in body


def test_desktop_artifact_names_match_updater_metadata_urls():
    package = REPO_ROOT / "danmu-desktop" / "package.json"
    workflow = REPO_ROOT / ".github" / "workflows" / "build.yml"
    data = json.loads(package.read_text(encoding="utf-8"))
    body = workflow.read_text(encoding="utf-8")

    assert data["build"]["artifactName"] == "Danmu-Desktop-${version}-${os}-${arch}.${ext}"
    assert "Danmu-Desktop*-mac-arm64.zip" in body
    assert "Danmu-Desktop*-win-x64.exe" in body
