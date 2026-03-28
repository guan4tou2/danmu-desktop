import logging

from .config import Config
from .logging_config import setup_logging
from .ws import run_ws_server


def main():
    setup_logging(Config.LOG_LEVEL)
    logger = logging.getLogger("ws-server")
    # NOTE: Config values (WS_PORT, etc.) are captured at call time.
    # Changing Config after this point will not affect the running WS server.
    # This is intentional for production but means tests must set config before starting the server thread.
    run_ws_server(Config.WS_PORT, logger)


if __name__ == "__main__":
    main()
