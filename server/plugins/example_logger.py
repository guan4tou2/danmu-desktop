"""Example plugin: logs all danmu events to console."""

from server.services.plugin_manager import DanmuPlugin


class LoggerPlugin(DanmuPlugin):
    name = "example_logger"
    version = "1.0.0"
    description = "Logs all danmu events to console"

    def on_fire(self, context):
        import logging

        logging.getLogger("plugin.logger").info("Danmu: %s", context.get("text", ""))
        return context
