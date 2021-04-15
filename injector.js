/*
dephase
by c0repwn3r
written with <3 using js

Please don't copy, learn to make this yourself.

- pwnd by core
*/
DEBUG_MODE = false
function debug(msg, thread) {
  if (DEBUG_MODE) {
    console.log("[" + thread + "/DEBUG] " + msg);
  }
}
function info(msg, thread) {
  console.log("[" + thread + "/INFO] " + msg);
}
function warn(msg, thread) {
  console.log("[" + thread + "/WARN] " + msg);
}
function error(msg, thread) {
  console.log("[" + thread + "/ERROR] " + msg);
}
function fatal(msg, thread) {
  console.log("[" + thread + "/FATAL] " + msg);
}
function init(debug=false) {
  DEBUG_MODE=debug;
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 192) {
      debug("Event fired, opening GUI", "DePhase");
    }
  });
}
