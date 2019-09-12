const axios = require('axios');


getLugarLatLong = async (dir)=>{


const encodedURL=encodeURI(dir);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
    headers: {'X-RapidAPI-Key': 'a2faaed57amsh5b742712d7afde4p107cdbjsnbe861e96bdbd'}
})

const resp= await instance.get();


 if(resp.data.Results===""){
     throw new Error(`No hay resultados para ${dir}`)
 }

 const data= resp.data.Results[0];
 const direccion= data.name;
 const lat=data.lat;
 const long = data.lon;
 
return {
    direccion,
    lat,
    long
}


};

module.exports={
    getLugarLatLong
};

//instance.get()
//        .then(resp=>{
//            console.log(resp.data.Results[0]);
//        })
//        .catch(err=>{
//            console.log('Error!!!!',err);
//        });        
