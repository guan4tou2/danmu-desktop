# User Plugins

Drop custom `DanmuPlugin` subclasses here as single `.py` files. They load
alongside the bundled examples in `../plugins/` and share the same
enabled/disabled state at `../runtime/plugins_state.json`.

See `../plugins/example_*.py` for reference implementations and
`../PLUGIN_GUIDE.md` for the full SDK.

This directory is gitignored — put your plugins under version control
separately if you want to track them.
