import os
import time
from pathlib import Path
from typing import Any, Dict

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


# ─── Subset (P1 #5, 2026-05-18) ──────────────────────────────────────────────
#
# Optional pyftsubset integration. Lets admin shrink an uploaded font down to
# only the glyphs it needs (Latin / CJK BMP / kana / custom range). Reduces
# .ttf payload size 10-50× for viewer download.
#
# fontTools is NOT a hard dep; if missing, `subset_uploaded_font()` raises
# `RuntimeError` so callers can surface a clear 503 to the admin. Install via
# `uv add fonttools` or `pip install fonttools` when ready to enable.

# Common preset ranges (mirror what admin UI will offer):
SUBSET_PRESETS = {
    "latin": "U+0020-007E,U+00A0-00FF",
    "latin_ext": "U+0020-024F,U+1E00-1EFF",
    "cjk_common": "U+4E00-9FFF",  # Han BMP
    # punct+hiragana+katakana+han+halfwidth
    "cjk_full": "U+3000-303F,U+3040-309F,U+30A0-30FF,U+4E00-9FFF,U+FF00-FFEF",
    "kana": "U+3040-30FF,U+FF00-FFEF",  # JP kana only
    "hangul": "U+AC00-D7AF,U+1100-11FF,U+3130-318F",
}


def _parse_unicode_range(range_str: str) -> "set[int]":
    """Parse `U+0020-007E,U+4E00-9FFF` into a set of codepoint ints.

    Accepts comma-separated single codepoints (`U+0041`) or ranges (`U+0020-007E`).
    Case-insensitive `U+` prefix. Raises ValueError on malformed input.
    """
    if not range_str or not isinstance(range_str, str):
        raise ValueError("unicode_range must be a non-empty string")
    result: "set[int]" = set()
    for token in range_str.split(","):
        token = token.strip().upper().lstrip("U+")
        if not token:
            continue
        if "-" in token:
            lo_s, hi_s = token.split("-", 1)
            try:
                lo = int(lo_s, 16)
                hi = int(hi_s, 16)
            except ValueError as exc:
                raise ValueError(f"Invalid hex range: {token}") from exc
            if lo > hi:
                raise ValueError(f"Range lo > hi: {token}")
            # Cap a single range at 200k codepoints to avoid memory blow-up.
            if hi - lo > 200_000:
                raise ValueError(f"Range too large: {token}")
            result.update(range(lo, hi + 1))
        else:
            try:
                result.add(int(token, 16))
            except ValueError as exc:
                raise ValueError(f"Invalid hex codepoint: {token}") from exc
    if not result:
        raise ValueError("unicode_range parsed to empty set")
    if len(result) > 500_000:
        raise ValueError("unicode_range total exceeds 500k codepoints")
    return result


def subset_uploaded_font(font_name: str, unicode_range: str) -> Dict[str, Any]:
    """Subset an uploaded font in-place. Returns size diff + glyph counts.

    Raises:
        ValueError:   bad font_name, path traversal, malformed unicode_range.
        FileNotFoundError: target font doesn't exist.
        RuntimeError: fontTools missing (admin should install fonttools dep).
                      Surfaced LAST so callers get input-validation errors
                      first when the dep is absent.
    """
    # Validate input shape BEFORE attempting the optional dep import — lets
    # callers surface a clean 400 on bad input even when the runtime can't
    # actually subset (returns 503 only when input is valid).
    codepoints = _parse_unicode_range(unicode_range)

    # Reuse delete_uploaded_font's path-traversal pattern.
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
        raise FileNotFoundError(f"Font {font_name} not found")

    try:
        from fontTools.subset import Options, Subsetter
        from fontTools.ttLib import TTFont
    except ImportError as exc:
        raise RuntimeError(
            "fontTools not installed; run `uv add fonttools` to enable subsetting"
        ) from exc

    original_size = target_path.stat().st_size

    # Load + subset in-memory, then atomic-write back to the same path.
    font = TTFont(str(target_path))
    options = Options()
    options.layout_features = ["*"]
    options.name_IDs = ["*"]
    options.notdef_glyph = True
    options.recalc_bounds = True
    subsetter = Subsetter(options=options)
    subsetter.populate(unicodes=list(codepoints))
    subsetter.subset(font)

    tmp_path = target_path.with_suffix(".ttf.tmp")
    font.save(str(tmp_path))
    font.close()
    tmp_path.replace(target_path)

    new_size = target_path.stat().st_size
    return {
        "font_name": font_name,
        "original_size": original_size,
        "new_size": new_size,
        "saved_bytes": max(0, original_size - new_size),
        "saved_ratio": (1.0 - new_size / original_size) if original_size > 0 else 0.0,
        "codepoint_count": len(codepoints),
    }


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
