#!/usr/bin/env node

var http    = require("http");
var Transform = require('stream').Transform;

var server = http.createServer( function( rsq, rsp ) {
  var transform = new Transform();

  if ( rsq.method != "POST" )
    return;

  transform._transform = function(chunk, encoding, done) {
    this.push( chunk.toString().toUpperCase() );
    done();
  }

  rsq.pipe( transform ).pipe( rsp );
  
});

server.listen(Number(process.argv[2]));
console.log("http uppercase server listening on " + process.argv[2]);

