"""Example plugin: auto-replies welcome message when someone says hello."""

from server.services.plugin_manager import DanmuPlugin


class AutoReplyPlugin(DanmuPlugin):
    name = "example_auto_reply"
    version = "1.0.0"
    description = "Auto-replies welcome message when someone says hello"
    priority = 200  # runs after other plugins

    def on_fire(self, context):
        text = context.get("text", "").lower()
        if text in ("hello", "hi", "hey"):
            import threading

            def _reply():
                from server.services import messaging

                messaging.forward_to_ws_server(
                    {
                        "text": "Welcome! \U0001f389",
                        "color": "FFD700",
                        "size": 50,
                        "speed": 4,
                        "opacity": 100,
                    }
                )

            threading.Timer(1.0, _reply).start()
        return context
