import os
import time
from pathlib import Path

from flask import current_app, url_for
from werkzeug.utils import secure_filename

from .. import state
from ..services.security import generate_font_token
from ..utils import sanitize_log_string

# Curated built-in font catalog. Fonts loaded via Google Fonts CSS in the
# HTML templates have url=None; the browser uses the pre-loaded CSS family.
# Metadata (foundry, weight, sizeLabel, format) is informational — shown in
# the admin Fonts page. Status "enabled"/"default"/"disabled" is derived at
# runtime from the FontFamily allowlist in SettingsStore.
_FONT_CATALOG = [
    {
        "name": "Noto Serif TC",
        "foundry": "Google",
        "weight": "400–900",
        "sizeLabel": "~1.8 MB",
        "format": "WOFF2",
        "url": None,
        "type": "catalog",
    },
    {
        "name": "JetBrains Mono",
        "foundry": "JetBrains",
        "weight": "400 / 700",
        "sizeLabel": "~220 KB",
        "format": "WOFF2",
        "url": None,
        "type": "catalog",
    },
    {
        "name": "Orbitron",
        "foundry": "Google",
        "weight": "400–900",
        "sizeLabel": "~88 KB",
        "format": "WOFF2",
        "url": None,
        "type": "catalog",
    },
    {
        "name": "Klee One",
        "foundry": "Google",
        "weight": "400 / 600",
        "sizeLabel": "~960 KB",
        "format": "WOFF2",
        "url": None,
        "type": "catalog",
    },
    {
        "name": "Bebas Neue",
        "foundry": "Google",
        "weight": "400",
        "sizeLabel": "~45 KB",
        "format": "WOFF2",
        "url": None,
        "type": "catalog",
    },
    {
        "name": "Arial",
        "foundry": "System",
        "weight": "400 / 700",
        "sizeLabel": "—",
        "format": "SYS",
        "url": None,
        "type": "system",
    },
    {
        "name": "Verdana",
        "foundry": "System",
        "weight": "400 / 700",
        "sizeLabel": "—",
        "format": "SYS",
        "url": None,
        "type": "system",
    },
]

# Names that are enabled by default when the allowlist is empty.
# NotoSansTC (bundled OTF) is always the server default; catalog fonts are
# ON by default. System fonts (Arial/Verdana) are OFF by default but
# the admin can toggle them on.
_DEFAULT_ENABLED = frozenset(e["name"] for e in _FONT_CATALOG if e["type"] in ("catalog",)) | {
    "NotoSansTC"
}

_SYSTEM_NAMES = frozenset(e["name"] for e in _FONT_CATALOG if e["type"] == "system")


def _get_font_allowlist():
    """Return the current FontFamily allowlist from SettingsStore (slot 1)."""
    try:
        from ..managers.settings import settings_store

        return set(settings_store.get_allowlist("FontFamily"))
    except Exception:
        return set()


def _resolve_status(name: str, allowlist: set, default_name: str, font_type: str = "") -> str:
    """Determine a font's status: 'default', 'enabled', or 'disabled'.

    Uploaded fonts are always 'enabled' (they're in the user's library).
    Catalog/system fonts respect the allowlist.
    """
    if name == default_name:
        return "default"
    # Uploaded fonts: always enabled (user explicitly put them there)
    if font_type == "uploaded":
        return "enabled"
    # Empty allowlist = all catalog fonts that are in _DEFAULT_ENABLED are on
    if not allowlist:
        if name in _DEFAULT_ENABLED:
            return "enabled"
        return "disabled"
    return "enabled" if name in allowlist else "disabled"


def toggle_font(name: str, enabled: bool) -> list:
    """Enable or disable a font by updating the FontFamily allowlist.

    Returns the updated allowlist.
    """
    from ..managers.settings import settings_store

    current_allowlist = set(settings_store.get_allowlist("FontFamily"))
    default_name = settings_store.get_options().get("FontFamily", [None, None, None, None])[3]

    if not current_allowlist:
        # Materialize: start from all currently-enabled names
        current_allowlist = set(_DEFAULT_ENABLED)
        # Always exclude the server-default from the allowlist logic (it's
        # always accessible regardless); but keep it if it's being toggled.
        current_allowlist.discard(default_name)

    if enabled:
        current_allowlist.add(name)
    else:
        current_allowlist.discard(name)

    # If allowlist now matches exactly the default-enabled set (minus default
    # font), collapse back to empty (= "all allowed") to avoid drift.
    canonical = _DEFAULT_ENABLED - {default_name}
    if current_allowlist == canonical:
        current_allowlist = set()

    return settings_store.set_allowlist("FontFamily", sorted(current_allowlist))


def build_font_payload(chosen_font_name: str):
    potential_font_filename = secure_filename(f"{chosen_font_name}.ttf")
    fonts_dir = Path(state.USER_FONTS_DIR).resolve()
    normalized_path = (fonts_dir / potential_font_filename).resolve()
    if not normalized_path.is_relative_to(fonts_dir):
        raise ValueError("Invalid font filename or path traversal attempt detected.")

    final_font_url = None
    final_font_type = "default"

    if normalized_path.exists():
        token = generate_font_token(potential_font_filename)
        final_font_url = url_for(
            "api.serve_user_font",
            filename=potential_font_filename,
            token=token,
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
    current_app.logger.info("Font '%s' uploaded successfully", sanitize_log_string(filename))
    return filename


def delete_uploaded_font(font_name: str) -> bool:
    """Remove an uploaded font by its filename stem. Returns True if deleted.

    Performs path-traversal guard identical to build_font_payload: resolves the
    candidate path under USER_FONTS_DIR and refuses anything that escapes.
    """
    if not font_name or not font_name.strip():
        raise ValueError("Invalid font name")
    candidate_filename = secure_filename(f"{font_name}.ttf")
    if not candidate_filename or Path(candidate_filename).stem == "":
        raise ValueError("Invalid font name")

    fonts_dir = Path(state.USER_FONTS_DIR).resolve()
    target_path = (fonts_dir / candidate_filename).resolve()
    if not target_path.is_relative_to(fonts_dir):
        raise ValueError("Invalid font filename or path traversal attempt detected.")

    if not target_path.exists():
        return False

    target_path.unlink()
    current_app.logger.info("Font '%s' deleted", sanitize_log_string(candidate_filename))
    return True


def list_uploaded_fonts():
    """Return only user-uploaded fonts (admin management view)."""
    return [f for f in list_available_fonts()["fonts"] if f["type"] == "uploaded"]


def list_available_fonts(include_disabled: bool = False):
    """Return the full font catalog plus uploaded fonts.

    The public /fonts endpoint uses include_disabled=False (default) to show
    only enabled+default fonts so the viewer dropdown stays clean.
    The admin /admin/fonts endpoint passes include_disabled=True to show
    the full catalog with status for management.
    """
    ttl = current_app.config.get("FONT_TOKEN_EXPIRATION", 900)
    issued_at = int(time.time())

    try:
        from ..managers.settings import settings_store

        opts = settings_store.get_options()
        default_name = opts.get("FontFamily", [None, None, None, "NotoSansTC"])[3] or "NotoSansTC"
    except Exception:
        default_name = "NotoSansTC"

    allowlist = _get_font_allowlist()

    # --- Bundled NotoSansTC (always present, always the fallback default) ---
    bundled = {
        "name": "NotoSansTC",
        "url": url_for("static", filename="NotoSansTC-Regular.otf"),
        "type": "default" if default_name == "NotoSansTC" else "catalog",
        "foundry": "Google / Noto",
        "weight": "400–900",
        "sizeLabel": "~1.2 MB",
        "format": "OTF",
        "status": _resolve_status("NotoSansTC", allowlist, default_name, "catalog"),
        "expiresAt": None,
    }

    # --- Curated catalog ---
    catalog_fonts = []
    for entry in _FONT_CATALOG:
        name = entry["name"]
        status = _resolve_status(name, allowlist, default_name, entry["type"])
        font = {
            **entry,
            "status": status,
            "expiresAt": None,
        }
        # Assign "default" type if it's the current default
        if name == default_name:
            font["type"] = "default"
        catalog_fonts.append(font)

    # --- Uploaded fonts ---
    uploaded_fonts = []
    try:
        for filename in os.listdir(state.USER_FONTS_DIR):
            if filename.lower().endswith(".ttf"):
                token = generate_font_token(filename)
                stem = os.path.splitext(filename)[0]
                status = _resolve_status(stem, allowlist, default_name, "uploaded")
                uploaded_fonts.append(
                    {
                        "name": stem,
                        "url": url_for(
                            "api.serve_user_font",
                            filename=filename,
                            token=token,
                        ),
                        "type": "default" if stem == default_name else "uploaded",
                        "foundry": "Uploaded",
                        "weight": "—",
                        "sizeLabel": _fmt_size(
                            os.path.getsize(os.path.join(state.USER_FONTS_DIR, filename))
                        ),
                        "format": "TTF",
                        "status": status,
                        "expiresAt": issued_at + ttl,
                    }
                )
    except Exception as exc:
        current_app.logger.error("Error listing uploaded fonts: %s", sanitize_log_string(str(exc)))

    all_fonts = [bundled] + catalog_fonts + uploaded_fonts

    if not include_disabled:
        all_fonts = [f for f in all_fonts if f["status"] != "disabled"]

    return {"fonts": all_fonts, "tokenTTL": ttl}


def _fmt_size(n_bytes: int) -> str:
    if n_bytes >= 1_000_000:
        return f"~{n_bytes / 1_000_000:.1f} MB"
    return f"~{n_bytes // 1024} KB"
