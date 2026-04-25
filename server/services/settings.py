from ..managers import settings_store

# Re-export for callers (admin routes, validation) that need to know which
# keys accept an allowlist at slot 1.
PICK_SET_KEYS = getattr(settings_store, "_PICK_SET_KEYS", ("Color", "FontFamily", "Layout"))


def get_options():
    return settings_store.get_options()


def get_setting_ranges():
    return settings_store.get_ranges()


def update_setting(key, index, value):
    return settings_store.update_value(key, index, value)


def set_toggle(key, enabled):
    settings_store.set_toggle(key, enabled)


def set_allowlist(key, allowlist):
    """Replace the slot-1 allowlist for a pick-set key. Returns new option row."""
    return settings_store.set_allowlist(key, allowlist)


def get_allowlist(key):
    """Return the slot-1 allowlist for a pick-set key (empty list = all)."""
    return settings_store.get_allowlist(key)


def filter_options_for_viewer(options):
    """Return a deep-copy of options with allowlist preserved as-is.

    The viewer side reads `options[key][1]` and clamps its preset list to
    that allowlist client-side. We keep the server response shape stable so
    older overlay clients (pre v5.0.0) still see the row — they just ignore
    slot 1 when it's a list.
    """
    return options
