"""Tests for the /overlay OBS Browser Source route."""

from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]


def test_overlay_route_returns_200(client):
    rv = client.get("/overlay")
    assert rv.status_code == 200
    assert b"danmubody" in rv.data
    assert b"overlay.js" in rv.data


def test_overlay_uses_same_origin_ws_path(client):
    rv = client.get("/overlay")
    body = rv.get_data(as_text=True)
    assert "wsPort:" not in body
    assert "wsPath:" in body
    assert '"/ws"' in body


def test_overlay_js_builds_same_origin_ws_url():
    body = (REPO_ROOT / "server" / "static" / "js" / "overlay.js").read_text(encoding="utf-8")
    assert "location.host + wsPath" in body
    assert 'location.hostname + ":" + wsPort' not in body
    assert 'params.get("port")' not in body


def test_overlay_includes_css(client):
    rv = client.get("/overlay")
    assert b"overlay.css" in rv.data


def test_overlay_has_ws_token_placeholder(client):
    rv = client.get("/overlay")
    assert b"wsToken:" in rv.data


def test_overlay_renders_idle_scene(client):
    rv = client.get("/overlay")
    body = rv.data
    # P2 OverlayIdle (v5.0.0 prototype-aligned: corner brackets + topbar +
    # chip + QR + pairing code + actions row).
    assert b'id="overlay-idle"' in body
    assert b"overlay-idle-hero" in body
    assert b"Danmu Fire" in body
    assert b"overlay-idle-chip-label" in body
    # QR is server-rendered (qr_svg) — inlined as SVG path.
    assert b"<svg" in body
    assert b"<path" in body


def test_overlay_exposes_join_url(client):
    rv = client.get("/overlay")
    assert b"joinUrl:" in rv.data
