const axios = require('axios');

getCotizacionDolar=async ()=>{
                  
    const token="eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTk5MTAxMzYsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJmZWRlcmljb21hdGlhcy5jZWxlc3RlQGdtYWlsLmNvbSJ9.D6JzwbWmobZW-eG7nwWx0ctLXkNIJUNKF3RJCeHhaVGDc0y5MRfzZM8R8eSjgt54vuxB5Q1bk6gfFUv_LhW1-A";
    
    const instance = axios.create({
        baseURL: `https://api.estadisticasbcra.com/usd_of_minorista`,
        headers: {"Authorization" : 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAxOTQ5MjksInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJmZWRlcmljb21hdGlhcy5hZ3Vlcm8xOTg3QGdtYWlsLmNvbSJ9.jU_zdqxAJcRc3nMdT275p-406iqLd59ZIkgY7ODLtOLMomeg6ksHTqkyFAhKCQzsnL9PkyX5yLZ9IFPwlrb60A'}
    })
    
    const resp = await instance.get();

    if(resp.data.Results===""){
        throw new Error(`No hay resultados para el dolar`)
    }
   
    return resp.data[resp.data.length-1];
}


getCotizacionInversion=async (source,target,quantity)=>{
                  
    const monOri=encodeURI(source);
    const monDes=encodeURI(target);
    const imp=encodeURI(quantity);
    
    
    const YOUR_KEY="2371|QK36CDDsFJWXxHUzdGvD3Pp0r4AXFr3H";
    
    const instance = axios.create({
         
        baseURL: `http://api.currencies.zone/v1/quotes/${monOri}/${monDes}/json?quantity=${imp}&key=${YOUR_KEY}`})
    //`http://api.currencies.zone/v1/quotes/${monedaOrigen}/${monedaDestino}/json?quantity=${importe}&key=${YOUR_KEY}`})
    
    const resp = await instance.get();

    if(resp.data.Results===""){
        throw new Error(`No hay resultados para el dolar`)
    }
   
    return resp.data;
}



module.exports={
    getCotizacionDolar,
    getCotizacionInversion
}





