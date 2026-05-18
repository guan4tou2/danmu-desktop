"""Plugin API routes."""

import ast
import importlib.util
import re
from pathlib import Path

from flask import request
from werkzeug.utils import secure_filename

from ... import config
from ...services import audit_log
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login

# v5 Batch 11 (2026-05-19) — plugin upload constants.
_PLUGIN_MAX_BYTES = 256 * 1024
_PLUGIN_EXTS = (".py", ".js")
# Match `# @key value` (Python) or `// @key value` (JS) on lines before
# any code. We stop scanning when we hit a non-comment, non-blank line.
_MANIFEST_LINE_RE = re.compile(r"^\s*(?:#|//)\s*@(?P<key>[a-zA-Z_][a-zA-Z0-9_]*)\s+(?P<val>.+?)\s*$")
_PYTHON_STDLIB_HINT = {
    "abc", "ast", "asyncio", "base64", "collections", "contextlib", "copy",
    "dataclasses", "datetime", "enum", "functools", "hashlib", "io", "itertools",
    "json", "logging", "math", "os", "pathlib", "random", "re", "shutil", "socket",
    "string", "subprocess", "sys", "tempfile", "threading", "time", "typing",
    "urllib", "uuid", "warnings", "weakref",
}


def _parse_manifest(text: str) -> dict:
    """Extract `# @key value` manifest pairs from top-of-file comments.

    Stops scanning after the first non-blank, non-comment line. Returns a
    dict with normalized keys (name/version/author/description/priority).
    Missing pairs are left out; caller falls back to defaults.
    """
    manifest: dict = {}
    for raw in text.splitlines():
        stripped = raw.strip()
        if not stripped:
            continue
        if not (stripped.startswith("#") or stripped.startswith("//")):
            break
        m = _MANIFEST_LINE_RE.match(raw)
        if not m:
            continue
        key = m.group("key").lower()
        val = m.group("val").strip()
        if key in ("name", "version", "author", "description"):
            manifest[key] = val
        elif key == "priority":
            try:
                manifest[key] = int(val)
            except ValueError:
                pass
        elif key in ("permissions", "depends", "dependencies"):
            # comma-separated list
            manifest[key] = [v.strip() for v in val.split(",") if v.strip()]
    return manifest


def _extract_python_imports(text: str) -> list:
    """Top-level module names imported by a Python source file."""
    try:
        tree = ast.parse(text)
    except SyntaxError:
        return []
    seen: list = []
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            for alias in node.names:
                top = alias.name.split(".")[0]
                if top and top not in seen:
                    seen.append(top)
        elif isinstance(node, ast.ImportFrom):
            if node.module:
                top = node.module.split(".")[0]
                if top and top not in seen and node.level == 0:
                    seen.append(top)
    return seen


def _classify_dep(name: str) -> dict:
    """Tag a dependency as stdlib / installed / missing."""
    if name in _PYTHON_STDLIB_HINT:
        return {"name": name, "status": "ok", "note": "stdlib"}
    try:
        spec = importlib.util.find_spec(name)
    except (ImportError, ValueError):
        spec = None
    if spec is not None:
        return {"name": name, "status": "ok", "note": "installed"}
    return {"name": name, "status": "missing", "note": f"uv add {name}"}


def _user_plugins_dir() -> Path:
    """Where uploaded plugins land. Mirrors plugin_manager._USER_PLUGINS_DIR."""
    return Path(config.__file__).resolve().parent / "user_plugins"


@admin_bp.route("/plugins/upload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def upload_plugin():
    """Upload a .py/.js plugin (v5 Batch 11 plugin upload flow).

    Multipart `file` required. Optional query `?dry_run=true` returns
    manifest + validation without writing anything — used by the modal's
    Step 2 manifest preview. Without `dry_run`, the file is atomically
    written to `server/user_plugins/<filename>` and `plugin_manager.reload()`
    is invoked so the new plugin hot-loads without a restart.
    """
    file = request.files.get("file")
    if file is None or not (file.filename or "").strip():
        return _json_response({"error": "No file provided"}, 400)

    filename = secure_filename(file.filename or "")
    if not filename:
        return _json_response({"error": "Invalid filename"}, 400)
    if not filename.endswith(_PLUGIN_EXTS):
        return _json_response({"error": "Only .py or .js files are accepted"}, 400)

    raw = file.read()
    if not raw:
        return _json_response({"error": "Empty file"}, 400)
    if len(raw) > _PLUGIN_MAX_BYTES:
        return _json_response(
            {"error": f"File exceeds {_PLUGIN_MAX_BYTES // 1024} KB limit"},
            413,
        )

    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError:
        return _json_response({"error": "File must be UTF-8 encoded"}, 400)

    # ── Validation ──────────────────────────────────────────────
    syntax_ok = True
    syntax_err = None
    if filename.endswith(".py"):
        try:
            compile(text, filename, "exec")
        except SyntaxError as e:
            syntax_ok = False
            syntax_err = {
                "line": e.lineno,
                "col": e.offset,
                "msg": str(e.msg),
            }

    manifest = _parse_manifest(text)
    deps = []
    if filename.endswith(".py") and syntax_ok:
        for imp in _extract_python_imports(text):
            deps.append(_classify_dep(imp))

    # Duplicate name check — compare against bundled + already-uploaded.
    from ...services.plugin_manager import plugin_manager

    existing_names = {p.get("name") for p in plugin_manager.list_plugins()}
    candidate_name = manifest.get("name") or filename.rsplit(".", 1)[0]
    duplicate_name = candidate_name in existing_names

    validation = {
        "syntax_ok": syntax_ok,
        "syntax_err": syntax_err,
        "duplicate_name": duplicate_name,
        "deps": deps,
    }

    is_dry_run = (request.args.get("dry_run", "") or "").lower() in ("1", "true", "yes")

    if is_dry_run or not syntax_ok:
        return _json_response(
            {
                "manifest": manifest,
                "validation": validation,
                "filename": filename,
                "size": len(raw),
            }
        )

    # ── Install ─────────────────────────────────────────────────
    target_dir = _user_plugins_dir()
    try:
        target_dir.mkdir(parents=True, exist_ok=True)
    except OSError as e:
        return _json_response({"error": f"Cannot create user_plugins dir: {e}"}, 500)

    target_path = target_dir / filename
    # Atomic write via temp file + rename so a crash mid-write leaves
    # the previous file (if any) intact.
    tmp_path = target_path.with_suffix(target_path.suffix + ".tmp")
    try:
        tmp_path.write_bytes(raw)
        tmp_path.replace(target_path)
    except OSError as e:
        return _json_response({"error": f"Disk write failed: {e}"}, 500)
    finally:
        if tmp_path.exists():
            try:
                tmp_path.unlink()
            except OSError:
                pass

    # Trigger hot-reload so the new plugin is picked up immediately.
    plugin_manager.reload()

    audit_log.append(
        "plugins",
        "upload",
        actor="admin",
        meta={
            "filename": filename,
            "name": candidate_name,
            "version": manifest.get("version"),
            "size": len(raw),
        },
    )

    return _json_response(
        {
            "installed": filename,
            "name": candidate_name,
            "manifest": manifest,
            "size": len(raw),
        }
    )


@admin_bp.route("/plugins/uninstall", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def uninstall_plugin():
    """Remove a user-uploaded plugin file (v5 Batch 11 follow-up).

    Body: ``{"filename": "<basename>.py" }`` — the file to delete from
    `server/user_plugins/`. Bundled plugins in `server/plugins/` are
    never removable by this endpoint (returns 403). After deletion the
    plugin manager is reloaded so the runtime drops the plugin.
    """
    data = request.get_json(silent=True) or {}
    filename = (data.get("filename") or "").strip()
    if not filename:
        return _json_response({"error": "filename required"}, 400)

    # Reject anything that looks like a path — only basenames allowed.
    safe = secure_filename(filename)
    if not safe or safe != filename or not safe.endswith(_PLUGIN_EXTS):
        return _json_response({"error": "Invalid filename"}, 400)

    target = _user_plugins_dir() / safe
    # secure_filename + the equality check above already block traversal,
    # but pin the resolved path to the user-plugins dir as a second
    # safety net so any symlink chicanery still can't escape.
    try:
        resolved = target.resolve()
        user_dir_resolved = _user_plugins_dir().resolve()
    except OSError as e:
        return _json_response({"error": f"Path resolution failed: {e}"}, 500)
    if not str(resolved).startswith(str(user_dir_resolved) + "/") \
            and resolved != user_dir_resolved / safe:
        return _json_response({"error": "Forbidden path"}, 403)

    if not target.exists():
        return _json_response({"error": "File not found"}, 404)

    try:
        target.unlink()
    except OSError as e:
        return _json_response({"error": f"Delete failed: {e}"}, 500)

    from ...services.plugin_manager import plugin_manager

    plugin_manager.reload()

    audit_log.append(
        "plugins",
        "uninstall",
        actor="admin",
        meta={"filename": safe},
    )
    return _json_response({"removed": safe})


@admin_bp.route("/plugins/list", methods=["GET"])
@require_login
def list_plugins():
    from ...services.plugin_manager import plugin_manager

    return _json_response({"plugins": plugin_manager.list_plugins()})


@admin_bp.route("/plugins/enable", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def enable_plugin():
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    from ...services.plugin_manager import plugin_manager

    if plugin_manager.enable(name):
        return _json_response({"message": f"Plugin '{name}' enabled"})
    return _json_response({"error": "Plugin not found"}, 404)


@admin_bp.route("/plugins/disable", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def disable_plugin():
    data = request.get_json(silent=True) or {}
    name = data.get("name", "")
    from ...services.plugin_manager import plugin_manager

    if plugin_manager.disable(name):
        return _json_response({"message": f"Plugin '{name}' disabled"})
    return _json_response({"error": "Plugin not found"}, 404)


@admin_bp.route("/plugins/reload", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def reload_plugins():
    from ...services.plugin_manager import plugin_manager

    plugin_manager.reload()
    return _json_response({"plugins": plugin_manager.list_plugins()})


@admin_bp.route("/plugins/console", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def plugin_console_tail():
    """Tail recent plugin stdout/stderr.

    Caller passes ``?since=<seq>`` to fetch only newer lines; first call
    should pass 0 to fetch the latest 100. Optional ``?plugin=<name>``
    filters to a single plugin.
    """
    from ...services import plugin_console

    try:
        since = int(request.args.get("since", "0") or 0)
    except (TypeError, ValueError):
        since = 0
    limit = max(1, min(200, int(request.args.get("limit", "100") or 100)))
    plugin_filter = (request.args.get("plugin", "") or "").strip()
    events = plugin_console.recent(since=since, limit=limit)
    if plugin_filter:
        events = [e for e in events if e["plugin"] == plugin_filter]
    latest_seq = events[0]["seq"] if events else since
    return _json_response({"events": events, "latest_seq": latest_seq})
