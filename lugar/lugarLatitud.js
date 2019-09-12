const axios = require('axios'); 
const lugar=require("./lugar");


  
const getClima= async (direccion)=>{
    
    const latAndLog= await lugar.getLugarLatLong(direccion);        
    resp=axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latAndLog.lat}&lon=${latAndLog.long}&appid=31bee8dbc38c86f5aead7bdee26ca13c&units=metric`);          
    return resp;
};

 module.exports={
    getClima
};



