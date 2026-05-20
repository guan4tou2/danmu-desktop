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
    assert "ws://127.0.0.1:8080/ws" in body
    assert ws_wait != -1, "Docker smoke test must wait for the /ws route before /fire"
    assert fire_smoke != -1, "Docker smoke test /fire section was not found"
    assert ws_wait < fire_smoke, "WS readiness wait must run before the /fire smoke test"


def test_deployment_docs_do_not_reintroduce_dedicated_ws_port():
    docs = [
        ".env.example",
        "README.md",
        "README-CH.md",
        "DEPLOYMENT.md",
        "server/README.md",
    ]
    for rel in docs:
        body = (REPO_ROOT / rel).read_text(encoding="utf-8")
        assert "4001" not in body, f"{rel} should describe /ws on the web port"
        assert "WS_PORT" not in body, f"{rel} should not document a dedicated WS port"


def test_deployment_docs_do_not_document_legacy_4000_transport():
    docs = [
        ".env.example",
        "README.md",
        "README-CH.md",
        "DEPLOYMENT.md",
        "server/README.md",
    ]
    for rel in docs:
        body = (REPO_ROOT / rel).read_text(encoding="utf-8")
        assert "4000" not in body, f"{rel} should not document legacy port 4000"
        assert "8080" not in body, f"{rel} should not document the private app port"
        assert "HTTP_PORT" not in body, f"{rel} should not document a second HTTP port"


def test_transport_config_uses_private_app_port_not_legacy_4000():
    active_files = [
        "docker-compose.yml",
        "server/Dockerfile",
        "nginx/nginx.conf",
        "nginx/nginx-https.conf",
        ".github/workflows/docker-build.yml",
    ]
    for rel in active_files:
        body = (REPO_ROOT / rel).read_text(encoding="utf-8")
        assert "4000" not in body, f"{rel} should not use legacy port 4000"
        assert "8080" in body, f"{rel} should use the private app upstream port"


def test_formal_compose_profiles_publish_one_https_port_with_custom_self_signed():
    body = (REPO_ROOT / "docker-compose.yml").read_text(encoding="utf-8")

    assert '"${HTTPS_PORT:-443}:443"' in body
    assert "${HTTP_PORT" not in body
    assert "httpchallenge" not in body
    assert "tlschallenge=true" in body


def test_setup_allows_custom_single_https_port_without_4000_fallback():
    body = (REPO_ROOT / "setup.sh").read_text(encoding="utf-8")

    assert 'read -rp "HTTPS/WSS port [${https_port}]: "' in body
    assert '_set_env HTTPS_PORT "$https_port"' in body
    assert "Pick a free custom HTTPS/WSS port, then rerun setup." in body
    assert "_accept_occupied_port" not in body
    assert "defaulting to 4080/4000" not in body
    assert "Port 443 is required" not in body


def test_setup_mode_menu_matches_user_facing_deployment_scenarios():
    body = (REPO_ROOT / "setup.sh").read_text(encoding="utf-8")

    assert "1) IP/localhost + HTTP (dev/testing only, no Desktop release)" in body
    assert "2) IP + HTTPS self-signed (LAN / VPS, no domain required)" in body
    assert "3) Domain + HTTPS self-signed (domain/private DNS, no Let's Encrypt)" in body
    assert "4) Domain + HTTPS Let's Encrypt (public domain, requires port 443)" in body
    assert 'read -rp "Mode [1/2/3/4]: " mode' in body
    assert '2) _PROFILE="https"; _DEPLOYMENT_TARGET="ip-https" ;;' in body
    assert '3) _PROFILE="https"; _DEPLOYMENT_TARGET="domain-https-self-signed" ;;' in body
    assert '4) _PROFILE="traefik"; _DEPLOYMENT_TARGET="domain-https-letsencrypt" ;;' in body
    assert "Server IP for HTTPS cert SAN" in body
    assert "Domain/hostname for HTTPS cert SAN" in body
    assert "Server IP is required for IP + HTTPS mode" in body
    assert "Domain is required for Domain + HTTPS self-signed mode" in body
    assert 'local _url_host="${server_ip:-${server_domain:-${domain:-localhost}}}"' in body


def test_deployment_docs_present_scenario_based_setup_choices():
    docs = {
        "README.md": [
            "IP + HTTPS self-signed",
            "Domain + HTTPS self-signed",
            "Domain + HTTPS Let's Encrypt",
        ],
        "README-CH.md": [
            "IP + HTTPS 自簽",
            "Domain + HTTPS 自簽",
            "Domain + HTTPS Let's Encrypt",
        ],
        "DEPLOYMENT.md": [
            "IP + HTTPS self-signed",
            "Domain + HTTPS self-signed",
            "Domain + HTTPS Let's Encrypt",
        ],
    }
    for rel, expected in docs.items():
        body = (REPO_ROOT / rel).read_text(encoding="utf-8")
        for text in expected:
            assert text in body, f"{rel} should document setup scenario: {text}"


def test_obsolete_desktop_compose_override_is_removed():
    assert not (REPO_ROOT / "docker-compose.desktop.yml").exists()


def test_legacy_raw_ws_entrypoints_are_removed():
    assert not (REPO_ROOT / "server" / "ws_app.py").exists()
    assert not (REPO_ROOT / "server" / "ws" / "server.py").exists()

    pyproject = (REPO_ROOT / "server" / "pyproject.toml").read_text(encoding="utf-8")
    assert "serve-ws" not in pyproject


def test_raw_ws_bind_host_setting_is_removed_from_active_config():
    active_files = [
        "server/config.py",
        "docker-compose.yml",
        ".env.example",
    ]
    for rel in active_files:
        body = (REPO_ROOT / rel).read_text(encoding="utf-8")
        assert "WS_HOST" not in body, f"{rel} should not expose a raw WS bind host"


def test_formal_paths_use_https_wss_443_wording():
    docs = [
        "README.md",
        "README-CH.md",
        "DEPLOYMENT.md",
        "server/README.md",
    ]
    for rel in docs:
        body = (REPO_ROOT / rel).read_text(encoding="utf-8")
        assert "/ws" in body, f"{rel} should describe the unified /ws path"
        assert "443" in body, f"{rel} should document 443 as the formal HTTPS/WSS port"
        assert "wss://" in body, f"{rel} should document the WSS desktop/viewer path"


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
