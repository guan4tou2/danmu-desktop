from io import BytesIO
from pathlib import Path

from werkzeug.datastructures import FileStorage

from server import state
from server.services.fonts import build_font_payload, save_uploaded_font, list_available_fonts


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

