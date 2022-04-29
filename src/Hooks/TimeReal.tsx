import React from 'react'
import routeAxios from '../Config/AxiosCoordenates';

interface RoutesTome{
  longitude:string;
  latitude:string;
}


export const useTimeReal = () => {
  const sendMessage = async(latitude:number, longitude:number)=>{
      try{

        const body :RoutesTome = {
          latitude:latitude.toString(),
          longitude: longitude.toString()
        }
        console.log({latitude,longitude});
        const respuesta = await routeAxios.post('v1/coordenatesenviar/coordenates', body);
      }catch(e:any){
        console.log('Error en Enviar:', e);  
      }
  }
  return {
    sendMessage
  };
}
