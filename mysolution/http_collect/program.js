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
  console.log( " cmd <url>");
  return;
}

options.path = process.argv[2];

http.get( options, function( response ) {
  response.on("data", function(data) {
    response.pipe( buffer( function(err, data) {
      if ( err )
        console.error( err );

      var data = data.toString();
      console.log(data.length);
      console.log(data);
    }))
  });
})
.on("error", function(error) {
  console.error( "GET: ", error);
});


