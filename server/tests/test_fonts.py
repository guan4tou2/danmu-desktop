import inspect
from io import BytesIO
from pathlib import Path

import pytest
from werkzeug.datastructures import FileStorage

from server import state
from server.services.fonts import (
    build_font_payload,
    delete_uploaded_font,
    list_available_fonts,
    list_uploaded_fonts,
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


def test_public_font_list_excludes_undeliverable_catalog_fonts(client):
    """2026-11-03 字型載入缺口 P0：catalog 字體沒有檔案就無法交付（url=None，
    2026-08 移除 Google Fonts CSS 後沒有任何載入來源），觀眾端選了只會靜默
    回退。公開列表不得再提供這些選項；系統字體（Arial）可由瀏覽器自行解析、
    內建 NotoSansTC 一定在；管理端目錄（include_disabled=True）仍完整。"""
    with client.application.test_request_context("/"):
        public = list_available_fonts()["fonts"]
        admin = list_available_fonts(include_disabled=True)["fonts"]

    public_names = {f["name"] for f in public}
    admin_names = {f["name"] for f in admin}

    assert "Klee One" not in public_names  # catalog、無檔案 → 不可交付
    assert "Klee One" in admin_names  # 管理端仍看得到完整目錄
    assert "NotoSansTC" in public_names  # 內建字型
    assert admin_names >= public_names  # 公開列表是管理目錄的子集
    # 不變量：公開列表裡每個字體都必須可交付——要嘛帶 url（內建／上傳），
    # 要嘛是瀏覽器可自行解析的系統字體。不允許 url=None 的 catalog 字體。
    for font in public:
        assert font["url"] or font["type"] == "system", font


def test_delete_uploaded_font_removes_file(client):
    target = Path(state.USER_FONTS_DIR) / "Removable.ttf"
    target.write_text("data")

    with client.application.test_request_context("/"):
        removed = delete_uploaded_font("Removable")

    assert removed is True
    assert not target.exists()


def test_delete_uploaded_font_returns_false_when_missing(client):
    with client.application.test_request_context("/"):
        assert delete_uploaded_font("Ghost") is False


def test_delete_uploaded_font_rejects_traversal(client, monkeypatch):
    monkeypatch.setattr(
        "server.services.fonts.secure_filename",
        lambda _name: "../outside/evil",
    )
    with client.application.test_request_context("/"):
        with pytest.raises(ValueError):
            delete_uploaded_font("whatever")


def test_delete_uploaded_font_rejects_empty_name(client):
    with client.application.test_request_context("/"):
        with pytest.raises(ValueError):
            delete_uploaded_font("")


def test_list_uploaded_fonts_excludes_defaults(client):
    (Path(state.USER_FONTS_DIR) / "OnlyMine.ttf").write_text("data")

    with client.application.test_request_context("/"):
        uploaded = list_uploaded_fonts()

    names = [f["name"] for f in uploaded]
    assert "OnlyMine" in names
    assert "NotoSansTC" not in names
    assert all(f["type"] == "uploaded" for f in uploaded)


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
    from io import BytesIO

    from werkzeug.datastructures import FileStorage

    from server import state
    from server.services import fonts

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
