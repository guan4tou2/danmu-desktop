import os
import time

from flask import current_app, url_for
from werkzeug.utils import secure_filename

from .. import state
from ..services.security import generate_font_token
from ..utils import sanitize_log_string


def build_font_payload(chosen_font_name: str):
    potential_font_filename = secure_filename(f"{chosen_font_name}.ttf")
    normalized_path = os.path.normpath(
        os.path.join(state.USER_FONTS_DIR, potential_font_filename)
    )
    if not normalized_path.startswith(state.USER_FONTS_DIR):
        raise ValueError("Invalid font filename or path traversal attempt detected.")

    final_font_url = None
    final_font_type = "default"

    if os.path.exists(normalized_path):
        token = generate_font_token(potential_font_filename)
        final_font_url = url_for(
            "api.serve_user_font",
            filename=potential_font_filename,
            token=token,
            _external=True,
        )
        final_font_type = "uploaded"
    elif chosen_font_name in ["Arial", "Verdana", "Times New Roman", "Courier New"]:
        final_font_type = "system"
    elif chosen_font_name != "NotoSansTC":
        final_font_type = "system"

    return {
        "name": chosen_font_name,
        "url": final_font_url,
        "type": final_font_type,
    }


def save_uploaded_font(file_storage):
    filename = secure_filename(file_storage.filename)
    destination = os.path.join(state.USER_FONTS_DIR, filename)
    file_storage.save(destination)
    current_app.logger.info(
        "Font '%s' uploaded successfully", sanitize_log_string(filename)
    )
    return filename


def list_available_fonts():
    ttl = current_app.config.get("FONT_TOKEN_EXPIRATION", 900)
    issued_at = int(time.time())

    default_fonts = [
        {
            "name": "NotoSansTC",
            "url": url_for("static", filename="NotoSansTC-Regular.otf", _external=True),
            "type": "default",
            "expiresAt": None,
        },
        {"name": "Arial", "url": None, "type": "system", "expiresAt": None},
        {"name": "Verdana", "url": None, "type": "system", "expiresAt": None},
        {"name": "Times New Roman", "url": None, "type": "system", "expiresAt": None},
        {"name": "Courier New", "url": None, "type": "system", "expiresAt": None},
    ]

    uploaded_fonts = []
    try:
        for filename in os.listdir(state.USER_FONTS_DIR):
            if filename.lower().endswith(".ttf"):
                token = generate_font_token(filename)
                uploaded_fonts.append(
                    {
                        "name": os.path.splitext(filename)[0],
                        "url": url_for(
                            "api.serve_user_font",
                            filename=filename,
                            token=token,
                            _external=True,
                        ),
                        "type": "uploaded",
                        "expiresAt": issued_at + ttl,
                    }
                )
    except Exception as exc:
        current_app.logger.error(
            "Error listing uploaded fonts: %s", sanitize_log_string(str(exc))
        )

    return {"fonts": default_fonts + uploaded_fonts, "tokenTTL": ttl}

