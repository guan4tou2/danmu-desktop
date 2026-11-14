"""Deployment switch for admin entry points that write Python onto the server.

Python files in ``plugins/`` and ``user_plugins/`` are imported into the server
process (see ``plugin_manager``). Two admin entry points can put such files
there: plugin upload, and the plugin files inside a backup restore. Both ask
:func:`code_upload_allowed` before writing. Nothing else in the server imports
or executes files that an admin can upload.

The switch is ``ALLOW_PLUGIN_UPLOAD`` (see ``Config``). It only gates writing
new code. Plugins that are already installed keep loading and can still be
enabled, disabled, reloaded and uninstalled.
"""

from __future__ import annotations

from server.config import Config

# Stable identifier the admin UI and API clients can key on.
UPLOAD_DISABLED_CODE = "plugin_upload_disabled"
UPLOAD_DISABLED_MESSAGE = "Plugin upload is disabled by the deployment (ALLOW_PLUGIN_UPLOAD)"


def code_upload_allowed() -> bool:
    """Read at call time so a test or a reloaded Config sees the current value."""
    return bool(getattr(Config, "ALLOW_PLUGIN_UPLOAD", False))
