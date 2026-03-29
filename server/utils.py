import json
import re

from flask import make_response

from .state import ALLOWED_EXTENSIONS


def json_response(data, status=200):
    """Standard JSON response helper."""
    return make_response(json.dumps(data), status, {"Content-Type": "application/json"})


def allowed_file(filename: str) -> bool:
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


def sanitize_log_string(input_val) -> str:
    s = str(input_val)
    s = s.replace("\n", " ").replace("\r", " ")
    s = s.replace("\t", " ")
    return s


def is_valid_image_url(url: str) -> bool:
    return bool(re.match(r"https?://([^\s/]+/)*[^\s/]+\.(jpeg|jpg|gif|png|webp)$", url, re.I))
