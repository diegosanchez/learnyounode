#!/usr/bin/env node

var fs = require("fs");
var path = require("path");

var where = process.argv[2];
var which = "." + process.argv[3];

fs.readdir(where, function(err, files) {
    for( var index in files) {
      if ( path.extname(files[index]) == which)
        console.log(files[index]);
    }
});
