var fs    = require("fs");
var path  = require("path");

function ejercicio( dir, ext, callback ) {
  fs.readdir(dir, function( err, files ) {
    var result = [];

    if ( err )
      callback( err );

    for( var i in files) {
      if ( path.extname(files[i]) == ("." + ext) ) {
        result.push( files[i] );
      }
    }

    callback( err, result);

  });
};

module.exports = ejercicio;
