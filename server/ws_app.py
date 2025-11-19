import logging

from .config import Config
from .logging_config import setup_logging
from .ws import run_ws_server


def main():
    setup_logging(Config.LOG_LEVEL)
    logger = logging.getLogger("ws-server")
    run_ws_server(Config.WS_PORT, logger)


if __name__ == "__main__":
    main()
