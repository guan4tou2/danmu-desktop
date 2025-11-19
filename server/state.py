import os
import queue

message_queue = queue.Queue()

blacklist = set()

USER_FONTS_DIR = os.path.join(os.path.dirname(__file__), "user_fonts")
ALLOWED_EXTENSIONS = {"ttf"}
os.makedirs(USER_FONTS_DIR, exist_ok=True)
