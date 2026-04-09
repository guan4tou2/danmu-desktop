// admin-store.js — Centralized state store for admin dashboard
// Load after admin-events.js, before all other admin modules.
(function () {
  "use strict";
  var _state = {
    csrfToken: null,
    settings: {},
    session: { logged_in: false },
    fontCache: [],
    wsConnected: false,
  };
  var _subscribers = [];

  window.DanmuStore = {
    get: function (key) { return _state[key]; },
    set: function (key, value) {
      _state[key] = value;
      _subscribers.forEach(function (fn) { fn(key, value); });
      window.DanmuEvents && window.DanmuEvents.emit("store:" + key, value);
    },
    subscribe: function (fn) { _subscribers.push(fn); },
    getAll: function () {
      return Object.assign({}, _state);
    },
  };
})();
