// store.js — Centralized state store for Electron renderer
// Required early in renderer.js before other modules.
const _state = {
  tracks: [],
  trackSettings: { maxTracks: 5, collisionDetection: true },
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
