const fs = require("node:fs");
const path = require("node:path");

module.exports = function loadScript(name) {
  const file = path.resolve(__dirname, "../../static/js", name);
  window.eval(fs.readFileSync(file, "utf8") + "\n//# sourceURL=" + file);
};
