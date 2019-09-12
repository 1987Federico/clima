const lugar=require("./lugar/lugar");
const clima=require("./lugar/lugarLatitud");


const argv = require('yargs').options({
    direccion:{
        alias:'d',
        des:'direccion de la ciudad',
        demmand:true
    }
}).argv;

clima.getClima(argv.direccion)
        .then(console.log);

     

