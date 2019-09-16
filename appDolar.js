const dolar= require('./dolar/cotizacion');

const argv = require('yargs').options({
    monedaOrigen:{
        alias:'o',
        des:'moneda a cotizar',
        demmand:true
    },
    monedaDestino:{
        alias:'d',
        des:'moneda a cotizada',
        demmand:true 
    },
    importe:{
        alias:'i',
        des:'importe a invertir',
        demmand:true
    }

}).argv;

//dolar.getCotizacionDolar().then(console.log);
dolar.getCotizacionInversion(argv.monedaOrigen,argv.monedaDestino,argv.importe)
     .then(console.log);
console.log(`${argv.monedaOrigen} | ${argv.monedaDestino} | ${argv.importe}`);



