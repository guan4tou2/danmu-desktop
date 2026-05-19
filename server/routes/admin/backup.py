"""Backup pack export + import endpoints (Batch 12 BE follow-up).

Three endpoints:

  GET  /admin/backup/export       → streams a .tar.gz of runtime state
  POST /admin/backup/import       → multipart `file`; with ?dry_run=true
                                    returns the would-write manifest;
                                    without dry_run actually applies it.
  GET  /admin/backup/manifest     → metadata about the current state
                                    (sizes, file counts) — used by the
                                    Backup page to preview before export.
"""

from flask import Response, request

from ...services import audit_log
from ...services import backup as backup_svc
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
    raw = backup_svc.pack()
    audit_log.append(
        "backup",
        "export",
        actor="admin",
        meta={"bytes": len(raw)},
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

    if not dry_run and result.get("ok"):
        audit_log.append(
            "backup",
            "import",
            actor="admin",
            meta={
                "applied": result.get("applied", 0),
                "skipped": len(result.get("skipped") or []),
                "manifest_version": (result.get("manifest") or {}).get("version"),
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
    from pathlib import Path

    from server.services.backup import _INCLUDE_DIRS

    included = []
    total = 0
    for label, src_dir, prefix, glob in _INCLUDE_DIRS:
        if not src_dir.exists():
            continue
        for fp in sorted(Path(src_dir).rglob(glob)):
            if not fp.is_file() or fp.name.endswith(".tmp") or fp.name.startswith("."):
                continue
            try:
                sz = fp.stat().st_size
            except OSError:
                continue
            total += sz
            included.append(
                {
                    "label": label,
                    "path": f"{prefix}/{fp.relative_to(src_dir).as_posix()}",
                    "size": sz,
                }
            )
    return _json_response(
        {
            "file_count": len(included),
            "total_bytes": total,
            "files": included,
        }
    )
