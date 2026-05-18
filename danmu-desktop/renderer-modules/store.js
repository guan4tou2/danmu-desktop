// store.js — Centralized state store for Electron renderer
// Required early in renderer.js before other modules.
//
// trackSettings default kept in sync with the value initTrackManager()
// re-asserts on every init (track-manager.js:10). Keeping them aligned
// prevents the silent override the eng review flagged as A2 / Q2.
const _state = {
  tracks: [],
  trackSettings: { maxTracks: 10, collisionDetection: true },
  connectionStatus: "idle",
  danmuSettings: {},
};
const _subscribers = [];

module.exports = {
  get(key) { return _state[key]; },
  set(key, value) {
    _state[key] = value;
    _subscribers.forEach((fn) => fn(key, value));
  },
  subscribe(fn) { _subscribers.push(fn); },
};
