// admin-events.js — Lightweight publish/subscribe event bus
// Load before all admin-*.js modules.
(function () {
  "use strict";
  var _listeners = {};
  window.DanmuEvents = {
    on: function (event, fn) {
      if (!_listeners[event]) _listeners[event] = [];
      _listeners[event].push(fn);
    },
    off: function (event, fn) {
      _listeners[event] = (_listeners[event] || []).filter(function (f) { return f !== fn; });
    },
    emit: function (event, data) {
      (_listeners[event] || []).forEach(function (fn) { fn(data); });
    },
  };
})();
