"""Example plugin: tracks word count and appends stats to long messages."""

from server.services.plugin_manager import DanmuPlugin


class WordCounterPlugin(DanmuPlugin):
    name = "example_word_counter"
    version = "1.0.0"
    description = "Tracks total danmu count and appends milestone markers"
    priority = 150

    def on_startup(self):
        self._count = 0

    def on_fire(self, context):
        self._count += 1

        # Every 100th danmu gets a milestone marker
        if self._count % 100 == 0:
            import threading

            count = self._count

            def _announce():
                from server.services import messaging

                messaging.forward_to_ws_server(
                    {
                        "text": f"\U0001f389 Milestone! {count} danmu sent!",
                        "color": "FFD700",
                        "size": 60,
                        "speed": 3,
                        "opacity": 100,
                    }
                )

            threading.Timer(0.5, _announce).start()

        return context
