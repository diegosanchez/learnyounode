#!/usr/bin/env node

var http = require("http");
var fs = require("fs");

var server = http.createServer( function(rsq, rsp) {
  rsp.writeHead( 200, { 'content-type': 'text/plain' });
  fs.createReadStream( process.argv[3] ).pipe( rsp );
});

server.listen(Number(process.argv[2]));
console.log("Http file to serve: " + process.argv[3]);
console.log("Http file server listening " + process.argv[2]);
