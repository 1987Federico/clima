const axios = require('axios');

getCotizacionDolar=async ()=>{
                  
    const token="eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTk5MTAxMzYsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJmZWRlcmljb21hdGlhcy5jZWxlc3RlQGdtYWlsLmNvbSJ9.D6JzwbWmobZW-eG7nwWx0ctLXkNIJUNKF3RJCeHhaVGDc0y5MRfzZM8R8eSjgt54vuxB5Q1bk6gfFUv_LhW1-A";
    
    const instance = axios.create({
        baseURL: `https://api.estadisticasbcra.com/usd`,
        headers: {"Authorization" : 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTk5Mzk3OTQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJmZWRlcmljb21hdGlhcy5jZWxlc3RlQGdtYWlsLmNvbSJ9.T20biJ7vrtXtCHiZTQEbZKFW9589Z1iNwdBgetnWCl7afpt4pUlbtmzQABi2HjxPPw6qrk8IUPTJDT1FFIW4ZQ'}
//           body: {'token':'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTk5MTAxMzYsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJmZWRlcmljb21hdGlhcy5jZWxlc3RlQGdtYWlsLmNvbSJ9.D6JzwbWmobZW-eG7nwWx0ctLXkNIJUNKF3RJCeHhaVGDc0y5MRfzZM8R8eSjgt54vuxB5Q1bk6gfFUv_LhW1-A'}
    })
    
    //const resp= await instance.get();
    const resp = json[ Object.keys(await instance.get()).sort().pop() ];
    
    
    if(resp.data.Results===""){
        throw new Error(`No hay resultados para el dolar`)
    }
   
    return resp;
}

module.exports={
    getCotizacionDolar
}





