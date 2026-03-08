"""utils.py 直接單元測試"""

import pytest

from server.utils import APIError, allowed_file, is_valid_image_url, sanitize_log_string


# ─── is_valid_image_url ───────────────────────────────────────────────────────


@pytest.mark.parametrize(
    "url",
    [
        "https://example.com/image.jpg",
        "http://cdn.example.com/image.png",
        "https://example.com/path/to/image.gif",
        "https://example.com/image.webp",
        "https://example.com/image.jpeg",
        "https://example.com/IMAGE.JPG",  # case insensitive
        "https://a.b.c/img.PNG",
    ],
)
def test_is_valid_image_url_accepts_valid(url):
    assert is_valid_image_url(url)


@pytest.mark.parametrize(
    "url",
    [
        "not-a-url",
        "ftp://example.com/image.jpg",  # 非 http/https
        "javascript:alert(1).jpg",
        "https://example.com/image.svg",  # 不支援的副檔名
        "https://example.com/image.bmp",
        "https://example.com/image.jpg?v=1",  # 含 query string（$ 結尾不允許）
        "https://example.com/no-extension",
        "",
        "https://example.com/image .jpg",  # 含空格
        "//example.com/image.jpg",  # 無 scheme
    ],
)
def test_is_valid_image_url_rejects_invalid(url):
    assert not is_valid_image_url(url)


# ─── allowed_file ─────────────────────────────────────────────────────────────


def test_allowed_file_ttf():
    assert allowed_file("font.ttf")


def test_allowed_file_case_insensitive():
    assert allowed_file("font.TTF")


def test_allowed_file_no_extension():
    assert not allowed_file("fontfile")


def test_allowed_file_disallowed_extension():
    assert not allowed_file("malware.exe")
    assert not allowed_file("script.js")


def test_allowed_file_dotfile_only():
    # ".ttf" 沒有 base name，rsplit('.', 1) → ['', 'ttf']
    assert allowed_file(".ttf")


# ─── sanitize_log_string ──────────────────────────────────────────────────────


def test_sanitize_removes_newlines():
    result = sanitize_log_string("line1\nline2\rline3")
    assert "\n" not in result
    assert "\r" not in result
    assert "line1 line2 line3" == result


def test_sanitize_removes_tab():
    result = sanitize_log_string("col1\tcol2")
    assert "\t" not in result
    assert result == "col1 col2"


def test_sanitize_non_string_input():
    assert sanitize_log_string(123) == "123"
    assert sanitize_log_string(None) == "None"


def test_sanitize_clean_string_unchanged():
    result = sanitize_log_string("normal log message")
    assert result == "normal log message"


# ─── APIError ─────────────────────────────────────────────────────────────────


def test_api_error_default_codes():
    cases = {
        400: "BAD_REQUEST",
        401: "UNAUTHORIZED",
        403: "FORBIDDEN",
        404: "NOT_FOUND",
        429: "TOO_MANY_REQUESTS",
        500: "INTERNAL_SERVER_ERROR",
        503: "SERVICE_UNAVAILABLE",
    }
    for status, expected_code in cases.items():
        err = APIError("msg", status)
        assert err.error_code == expected_code


def test_api_error_unknown_status_code():
    err = APIError("msg", 418)
    assert err.error_code == "UNKNOWN_ERROR"


def test_api_error_custom_error_code():
    err = APIError("msg", 400, error_code="CUSTOM_CODE")
    assert err.error_code == "CUSTOM_CODE"


def test_api_error_to_dict_structure(client):
    """to_dict 需要 Flask app context（因為用到 g）"""
    with client.application.app_context():
        err = APIError("something went wrong", 400)
        d = err.to_dict()
    assert "error" in d
    assert d["error"]["code"] == "BAD_REQUEST"
    assert d["error"]["message"] == "something went wrong"


def test_api_error_to_dict_with_payload(client):
    with client.application.app_context():
        err = APIError("bad input", 400, payload={"field": "text"})
        d = err.to_dict()
    assert d["error"]["details"] == {"field": "text"}


def test_api_error_to_dict_no_payload_no_details(client):
    with client.application.app_context():
        err = APIError("simple error", 404)
        d = err.to_dict()
    assert "details" not in d["error"]
