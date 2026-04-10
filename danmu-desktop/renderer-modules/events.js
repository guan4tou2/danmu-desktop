// events.js — Event bus for Electron renderer (browser-compatible, no Node.js built-ins)
// nodeIntegration is false in this app, so we cannot use require("events").
class EventEmitter {
  constructor() { this._listeners = {}; }
  on(event, fn) { (this._listeners[event] = this._listeners[event] || []).push(fn); return this; }
  off(event, fn) { if (this._listeners[event]) this._listeners[event] = this._listeners[event].filter(f => f !== fn); return this; }
  emit(event, ...args) { (this._listeners[event] || []).forEach(fn => fn(...args)); return this; }
  once(event, fn) { const w = (...a) => { this.off(event, w); fn(...a); }; return this.on(event, w); }
}
module.exports = new EventEmitter();
