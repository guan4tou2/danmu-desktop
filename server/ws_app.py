import logging

from .config import Config
from .logging_config import setup_logging
from .startup_warnings import log_ws_auth_warnings
from .ws import run_ws_server


def main():
    setup_logging(Config.LOG_LEVEL)
    logger = logging.getLogger("ws-server")
    log_ws_auth_warnings(logger, Config)
    # NOTE: Config values (WS_PORT, etc.) are captured at call time.
    # Changing Config after this point will not affect the running WS server.
    # Tests must set config before starting the server thread.
    run_ws_server(Config.WS_PORT, logger)


if __name__ == "__main__":
    main()
