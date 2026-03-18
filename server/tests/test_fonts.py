import inspect
from io import BytesIO
from pathlib import Path

import pytest
from werkzeug.datastructures import FileStorage

from server import state
from server.services.fonts import (
    build_font_payload,
    list_available_fonts,
    save_uploaded_font,
)


def test_build_font_payload_returns_signed_url(client):
    fonts_dir = Path(state.USER_FONTS_DIR)
    font_path = fonts_dir / "MyFont.ttf"
    font_path.write_text("data")

    with client.application.test_request_context("/"):
        payload = build_font_payload("MyFont")

    assert payload["type"] == "uploaded"
    assert "token=" in payload["url"]


def test_save_uploaded_font_writes_file(client):
    data = BytesIO(b"font-data")
    data.seek(0)
    storage = FileStorage(stream=data, filename="UploadFont.ttf")
    with client.application.test_request_context("/"):
        filename = save_uploaded_font(storage)
    assert filename == "UploadFont.ttf"
    assert (Path(state.USER_FONTS_DIR) / filename).exists()


def test_list_available_fonts_includes_defaults(client):
    data = BytesIO(b"font-data")
    data.seek(0)
    storage = FileStorage(stream=data, filename="ListedFont.ttf")
    uploaded_file = Path(state.USER_FONTS_DIR) / "ListedFont.ttf"
    with client.application.test_request_context("/"):
        save_uploaded_font(storage)
        payload = list_available_fonts()
    fonts = payload["fonts"]
    assert payload["tokenTTL"] > 0
    names = [font["name"] for font in fonts]
    assert "NotoSansTC" in names
    uploaded = {font["name"]: font for font in fonts if font["type"] == "uploaded"}
    assert "ListedFont" in uploaded
    assert "token=" in uploaded["ListedFont"]["url"]
    if uploaded_file.exists():
        uploaded_file.unlink()


def test_path_traversal_rejected(app, monkeypatch):
    """Path traversal attempts (via suffix-trick directory name) must be rejected.

    startswith('/tmp/fonts') incorrectly allows '/tmp/fontsevil/x.ttf';
    is_relative_to() correctly rejects it.
    """
    from server.services import fonts

    original_dir = state.USER_FONTS_DIR
    try:
        # Set fonts dir to /tmp/fonts; monkeypatch secure_filename to return a
        # filename that stays inside /tmp/fontsevil — a sibling dir that would
        # fool a startswith check but not is_relative_to.
        state.USER_FONTS_DIR = "/tmp/fonts"
        monkeypatch.setattr(
            "server.services.fonts.secure_filename",
            lambda _name: "../fontsevil/evil",
        )
        with pytest.raises((ValueError, FileNotFoundError)):
            fonts.build_font_payload("any_input")
    finally:
        state.USER_FONTS_DIR = original_dir


def test_save_uploaded_font_saves_any_extension(app, tmp_path, monkeypatch):
    """save_uploaded_font at service layer has no MIME guard - caller checks."""
    from server.services import fonts
    from server import state
    from io import BytesIO
    from werkzeug.datastructures import FileStorage

    monkeypatch.setattr(state, "USER_FONTS_DIR", str(tmp_path))

    fake_file = FileStorage(stream=BytesIO(b"not a font"), filename="test.exe")
    with app.app_context():
        fonts.save_uploaded_font(fake_file)
    # Service layer saves regardless of extension (route layer validates MIME)
    assert (tmp_path / "test.exe").exists()


def test_path_is_relative_to_used_not_startswith(app):
    """Verify is_relative_to is used (not startswith) via code inspection."""
    from server.services import fonts
    source = inspect.getsource(fonts.build_font_payload)
    assert "is_relative_to" in source, "Must use Path.is_relative_to()"
    assert "startswith" not in source, "startswith is vulnerable to suffix tricks"
