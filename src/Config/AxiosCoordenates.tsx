import axios from 'axios';

const routeAxios = axios.create({
  baseURL:'https://192.168.100.92:7001/'
});

routeAxios.interceptors.request.use(
  async(config)=>{
    // aqui nos falta la configuracion del token
    return config;
  }
);
export default routeAxios;