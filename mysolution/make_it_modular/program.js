#!/usr/bin/env node

var ejercicio = require("./mimodulo.js");

ejercicio( process.argv[2] /* directorio */, process.argv[3] /* filtro */, 
    function (error, datos) {
      for( var index in datos) {
        console.log(datos[index]);
      }
    } 
    );

