# Danmu Plugin SDK

Build plugins that react to danmu events, modify messages, auto-reply, filter content, and more.

## Quick Start

Create a `.py` file in `server/plugins/`:

```python
from server.services.plugin_manager import DanmuPlugin

class MyPlugin(DanmuPlugin):
    name = "my_plugin"
    version = "1.0.0"
    description = "Does something cool"

    def on_fire(self, context):
        print(f"Someone sent: {context['text']}")
        return context  # pass through
```

That's it. The server hot-reloads plugins every 5 seconds. No restart needed.

## Plugin Base Class

Every plugin subclasses `DanmuPlugin`:

```python
class DanmuPlugin:
    name: str = "unnamed"       # Unique identifier (required)
    version: str = "1.0.0"     # Semver
    description: str = ""       # Shown in admin panel
    priority: int = 100         # Lower number = runs first
```

## Hooks

### `on_fire(context: dict) -> dict | None`

Called when a danmu is submitted. This is the main hook.

**Context fields:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | str | Danmu text content |
| `color` | str | Hex color (e.g. `"FF3F81"`) |
| `size` | int | Font size in pixels |
| `speed` | int | 1-10, higher = faster |
| `opacity` | int | 0-100 |
| `layout` | str | `"scroll"`, `"top"`, `"bottom"` |
| `effects` | list | Effect configs `[{"name": "spin", "params": {}}]` |
| `fontInfo` | dict | `{"family": "Arial", "source": "system"}` |
| `nickname` | str | Sender's nickname |
| `fingerprint` | str | Client fingerprint for dedup |
| `isImage` | bool | Whether this is a sticker/image |
| `textStyles` | dict | Additional text styling |

**Return values:**
- Return the `context` dict (modified or not) to continue processing
- Return `None` to silently block the danmu
- Raise `StopPropagation()` to block and stop all remaining plugins

```python
from server.services.plugin_manager import DanmuPlugin, StopPropagation

class ContentFilter(DanmuPlugin):
    name = "content_filter"
    priority = 10  # run early

    def on_fire(self, context):
        if "spam" in context["text"].lower():
            raise StopPropagation()  # block + stop chain
        return context
```

### `on_connect(client_info: dict) -> None`

Called when a WebSocket client connects. (Reserved for future use.)

### `on_disconnect(client_info: dict) -> None`

Called when a WebSocket client disconnects. (Reserved for future use.)

### `on_poll_vote(vote_info: dict) -> None`

Called when a poll vote is cast. (Reserved for future use.)

### `on_startup() -> None`

Called once when the plugin is loaded (server start or hot-reload).

```python
def on_startup(self):
    self._counter = 0
    print(f"{self.name} initialized")
```

### `on_shutdown() -> None`

Called when the plugin is unloaded (server stop or hot-reload cycle).

```python
def on_shutdown(self):
    print(f"{self.name} shutting down, processed {self._counter} messages")
```

## Sending Danmu from Plugins

Use `messaging.forward_to_ws_server()` to inject danmu:

```python
from server.services import messaging

messaging.forward_to_ws_server({
    "text": "Hello from plugin!",
    "color": "FFD700",
    "size": 50,
    "speed": 4,
    "opacity": 100,
})
```

Use `threading.Timer` if you want a delay (don't block the hook):

```python
import threading

def _delayed_reply():
    messaging.forward_to_ws_server({"text": "Delayed!", ...})

threading.Timer(2.0, _delayed_reply).start()
```

## Priority & Execution Order

Plugins execute in order of `(priority, name)`. Lower priority number runs first.

| Priority | Use Case |
|----------|----------|
| 1-50 | Content filters, blockers |
| 51-100 | Modifiers, transformers |
| 101-200 | Loggers, analytics |
| 201+ | Auto-replies, side effects |

## Hot Reload

The server scans `server/plugins/` every 5 seconds:
- **New files** are loaded automatically
- **Modified files** (by mtime) are reloaded
- **Deleted files** are unloaded
- Files starting with `_` are skipped

You can also trigger a manual reload from the admin panel or via:
```
POST /admin/plugins/reload
```

## Enable / Disable

Plugins are enabled by default. State is persisted in `plugins/plugins_state.json`.

Admin API:
```
POST /admin/plugins/enable   {"name": "my_plugin"}
POST /admin/plugins/disable  {"name": "my_plugin"}
GET  /admin/plugins/list
```

## Error Handling

- Each hook runs in its own thread with a **3-second timeout**
- Exceptions in one plugin don't affect others
- Errors are logged but don't crash the server
- If a hook times out, the plugin is skipped for that event

## Constraints

- Plugin file must contain exactly one `DanmuPlugin` subclass
- `name` must be unique across all plugins
- Hooks must complete within 3 seconds
- Don't use `time.sleep()` in hooks (use `threading.Timer` for delays)
- Import heavy dependencies inside methods, not at module level

## Example Plugins

See `server/plugins/` for working examples:

| File | Description |
|------|-------------|
| `example_logger.py` | Logs all danmu to console |
| `example_auto_reply.py` | Replies to greetings with a welcome message |
| `example_word_counter.py` | Counts words and appends stats |
| `example_color_by_mood.py` | Changes danmu color based on sentiment |
