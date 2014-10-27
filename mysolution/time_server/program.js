#!/usr/bin/env node

var net = require("net");
var strftime = require("strftime");

/***
 * Main
 * */
var socket = net.createServer( function( socket) {
  var result = strftime("%Y-%m-%d %H:%M", new Date());
  socket.end(result + '\n');
});



socket.listen(process.argv[2]);
console.log("Time server listening ", Number(process.argv[2]));

