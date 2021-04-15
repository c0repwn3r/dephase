/*
dephase
by c0repwn3r
written with <3 using js

Please don't copy, learn to make this yourself.

- pwnd by core
*/
d = document;
DEBUG_MODE = false;
function debug(msg, thread) {
  if (DEBUG_MODE) {
    console.log("[" + thread + "/DEBUG] " + msg);
  }
}
function enableDebugLogging() {
  DEBUG_MODE = true;
  debug("Enabled debug logging.", "AdvLogSrv");
}
function disableDebugLogging() {
  debug("Disabled debug logging.", "AdvLogSrv");
  DEBUG_MODE = false;
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
function injectScriptUrl(url, id) {
  debug("Injector util fun called for "+url, "c0repwn3r-injetor");
  s = d.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.onload = function(){
      debug("Injector util fun finished for"+url, "injector-async");
  };
  s.src = url;
  d.getElementsByTagName('head')[0].appendChild(s);
}
function init(debug=false) {
  if (debug) {enableDebugMode();} else {disableDebugMode();}
  d.addEventListener("keydown", (e) => {
    if (e.keyCode == 192) {
      debug("Event fired, opening GUI", "DePhase");
    }
  });
}
function test() {
  info("Running tests. Ignore log messages beyond this point.", "Tests");
  enableDebugMode();
  // Logging tests
  debug("debug_log_text", "Tests");
  info("info_log_text", "Tests");
  warn("warn_log_text", "Tests");
  error("error_log_text", "Tests");
  fatal("fatal_log_text", "Tests");
  debug("Testing script injection");
  
