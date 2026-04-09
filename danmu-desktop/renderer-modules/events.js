// events.js — Event bus for Electron renderer
// Required early in renderer.js before other modules.
const { EventEmitter } = require("events");
module.exports = new EventEmitter();
