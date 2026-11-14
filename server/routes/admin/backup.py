"""Backup pack export + import endpoints (Batch 12 BE follow-up).

Three endpoints:

  GET  /admin/backup/export       → streams a .tar.gz of runtime state
                                    (?include_credentials=1 keeps the
                                    connection tokens/secrets in it)
  POST /admin/backup/import       → multipart `file`; with ?dry_run=true
                                    returns the would-write manifest;
                                    without dry_run actually applies it.
  GET  /admin/backup/manifest     → metadata about the current state
                                    (sizes, file counts) — used by the
                                    Backup page to preview before export.
"""

from flask import Response, request

from ...services import asset_backup as asset_backup_svc
from ...services import audit_log
from ...services import backup as backup_svc
from ...services import factory_reset as factory_reset_svc
from ...services.security import rate_limit
from . import _json_response, admin_bp, require_csrf, require_login


@admin_bp.route("/backup/export", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def backup_export():
    """Stream a full-state tarball as a download.

    Synchronous pack — for the typical state size (settings/webhooks/
    effects/plugins, all small JSON + tiny .dme YAMLs), this completes
    in well under a second. No streaming or chunked transfer needed.
    """
    # Connection credentials (Fire/WS tokens, webhook secrets and URLs) only
    # when the operator asks for them, e.g. to move the whole site.
    include_credentials = (request.args.get("include_credentials", "") or "").lower() in (
        "1",
        "true",
        "yes",
    )
    raw = backup_svc.pack(include_credentials=include_credentials)
    audit_log.append(
        "backup",
        "export",
        actor="admin",
        meta={"bytes": len(raw), "credentials": include_credentials},
    )
    # Filename embeds an ISO-ish timestamp so multiple snapshots from
    # the same day don't collide in the operator's Downloads folder.
    import time

    stamp = time.strftime("%Y%m%d-%H%M%S")
    headers = {
        "Content-Type": "application/gzip",
        "Content-Disposition": f'attachment; filename="danmu-backup-{stamp}.tar.gz"',
        "Content-Length": str(len(raw)),
        "Cache-Control": "no-store",
    }
    return Response(raw, headers=headers)


@admin_bp.route("/backup/import", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def backup_import():
    """Validate (and optionally apply) an uploaded backup tarball.

    Multipart form field ``file`` required. Query param ``?dry_run=true``
    returns the manifest preview without writing anything (intended for
    the FE's two-step confirm flow). Without dry_run, files are applied
    atomically per-file (tmp + replace); no whole-tree rollback.
    """
    f = request.files.get("file")
    if f is None or not (f.filename or "").strip():
        return _json_response({"error": "No file provided"}, 400)

    raw = f.read()
    if not raw:
        return _json_response({"error": "Empty file"}, 400)

    dry_run = (request.args.get("dry_run", "") or "").lower() in ("1", "true", "yes")
    result = backup_svc.unpack(raw, dry_run=dry_run)

    # Audited whenever anything was written, including a restore whose files
    # landed but whose services did not pick them up (restart_required).
    if not dry_run and (result.get("ok") or result.get("applied")):
        audit_log.append(
            "backup",
            "import",
            actor="admin",
            meta={
                "applied": result.get("applied", 0),
                "skipped": len(result.get("skipped") or []),
                "manifest_version": (result.get("manifest") or {}).get("version"),
                "ok": bool(result.get("ok")),
                "restart_required": bool(result.get("restart_required")),
            },
        )
    return _json_response(result)


@admin_bp.route("/backup/assets/export", methods=["GET"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_login
def backup_assets_export():
    """Stream uploaded media assets as a separate tarball."""
    raw = asset_backup_svc.pack()
    audit_log.append(
        "backup",
        "assets_export",
        actor="admin",
        meta={"bytes": len(raw)},
    )
    import time

    stamp = time.strftime("%Y%m%d-%H%M%S")
    headers = {
        "Content-Type": "application/gzip",
        "Content-Disposition": f'attachment; filename="danmu-assets-{stamp}.tar.gz"',
        "Content-Length": str(len(raw)),
        "Cache-Control": "no-store",
    }
    return Response(raw, headers=headers)


@admin_bp.route("/backup/assets/import", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def backup_assets_import():
    """Dry-run or apply an uploaded static asset pack."""
    f = request.files.get("file")
    if f is None or not (f.filename or "").strip():
        return _json_response({"error": "No file provided"}, 400)

    raw = f.read()
    if not raw:
        return _json_response({"error": "Empty file"}, 400)

    dry_run = (request.args.get("dry_run", "") or "").lower() in ("1", "true", "yes")
    result = asset_backup_svc.unpack(raw, dry_run=dry_run)

    if not dry_run and result.get("ok"):
        asset_backup_svc.refresh_asset_services()
        audit_log.append(
            "backup",
            "assets_import",
            actor="admin",
            meta={
                "applied": result.get("applied", 0),
                "skipped": len(result.get("skipped") or []),
                "manifest_version": (result.get("manifest") or {}).get("version"),
            },
        )
    return _json_response(result)


@admin_bp.route("/backup/factory-reset", methods=["POST"])
@rate_limit("admin", "ADMIN_RATE_LIMIT", "ADMIN_RATE_WINDOW")
@require_csrf
@require_login
def backup_factory_reset():
    payload = request.get_json(silent=True) or {}
    try:
        result = factory_reset_svc.reset_runtime_state(confirm=str(payload.get("confirm", "")))
    except ValueError as exc:
        return _json_response({"error": str(exc)}, 400)

    audit_log.append(
        "backup",
        "factory_reset",
        actor="admin",
        meta={
            "removed": len(result.get("removed") or []),
            "services_reset": result.get("services_reset") or [],
        },
    )
    return _json_response(result)


@admin_bp.route("/backup/manifest", methods=["GET"])
@require_login
def backup_manifest():
    """Quick preview of what an export would contain.

    Uses the same pack walk but stops at the manifest — no compression,
    no actual tarball construction. Cheap (~ms) so the FE can call it
    on page load to show "your snapshot would be N MB / M files".
    """
    included = backup_svc.inventory()
    return _json_response(
        {
            "file_count": len(included),
            "total_bytes": sum(f["size"] for f in included),
            "files": included,
        }
    )


@admin_bp.route("/backup/assets/manifest", methods=["GET"])
@require_login
def backup_assets_manifest():
    """Preview the uploaded media asset pack inventory."""
    return _json_response(asset_backup_svc.manifest())
