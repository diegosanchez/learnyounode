#!/usr/bin/env node

var http    = require("http");
var buffer  = require("bl");

var auth = 'Basic ' + new Buffer("diesanch:a42b1tm4").toString('base64');
var options = {
    host: 'proxy.nextel.com.ar',
    port: 8080,
    method:"GET",
    path: '',
    headers:{
        "Proxy-Authorization": auth,
        Host: "proxy.nextel.com.ar"
    } 
};

/*** 
 * MAIN
 *
 */
if ( process.argv.length < 3 ) {
  console.log( "Usage:");
  console.log( " cmd <url0>[, <url1>}");
  return;
}

var requests = process.argv.slice(2);
var responses = [] ;

for ( var r in requests) {
  options.path = requests[r];
  http.get( options, function(response) {
    response.pipe( buffer( function(err, bl) {
      if ( err )
        console.error(err);

      responses.push( bl.toString() );
    }));

    response.on("end", function () {
      if ( responses.length == requests.length ) {
        for( var i in responses) {
          console.log( responses[i] );
        } 
      }
    });
  }); 
}



