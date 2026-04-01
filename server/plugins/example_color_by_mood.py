"""Example plugin: changes danmu color based on text sentiment."""

from server.services.plugin_manager import DanmuPlugin

# Simple keyword-based sentiment (no external dependencies needed)
_POSITIVE = {"love", "great", "awesome", "nice", "good", "happy", "yes", "wow", "cool"}
_NEGATIVE = {"hate", "bad", "ugly", "no", "worst", "terrible", "awful", "sad", "angry"}
_EXCITED = {"!!!", "omg", "lol", "lmao", "haha", "xd", "poggers", "pog"}


class ColorByMoodPlugin(DanmuPlugin):
    name = "example_color_by_mood"
    version = "1.0.0"
    description = (
        "Auto-colors danmu based on text mood (green=positive, red=negative, yellow=excited)"
    )
    priority = 80  # runs before loggers but after filters

    def on_fire(self, context):
        text = context.get("text", "").lower()
        words = set(text.split())

        # Only override if user didn't pick a custom color
        if context.get("color") and context["color"] != "FFFFFF":
            return context

        if words & _EXCITED or any(k in text for k in _EXCITED):
            context["color"] = "FFD700"  # gold
        elif words & _POSITIVE:
            context["color"] = "00FF88"  # green
        elif words & _NEGATIVE:
            context["color"] = "FF4444"  # red

        return context
