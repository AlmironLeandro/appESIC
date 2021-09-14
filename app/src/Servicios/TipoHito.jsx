import axios from 'axios';
import config from './Config/config.json'

const nuevoCliente = () => {
    return axios.create({
        baseURL: config.baseURL,
        timeout: config.timeout,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}
const newSecureClient = () => {
    return axios.create({
        baseURL: config.baseURL,
        timeout: config.timeout,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    });
}

/*
 export  const traerTiposDeHito= async()=>
{
   const cliente = newSecureClient();
  return await  cliente.get('/tiposhito/')
     .then(response => {
        const tiposDeHito = response.data.data
        return tiposDeHito
     })
     .catch(error => {
         console.log(error)

}
)}*/

export const traerTiposDeHito = async () => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get('/tiposhito/')
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (error) {
        console.error(error);
    }
}
/*
export  const traerTipoDeHito= async(id)=>
{
   const cliente = newSecureClient();
  return await  cliente.get(`/tiposhito/${id}`)
     .then(response => {
        if (response.status === 200) {
        const tipoDeHito = response.data.data
        return tipoDeHito
        } else {
        throw new Error('No se pudo listar el tipo de hito');
        }
       
     })
     .catch(error => {
         console.log(error)

}
)}*/

export  const traerTipoDeHito= async(id)=> {
    try{
        const cliente = newSecureClient();
        const response = await  cliente.get(`/tiposhito/${id}`)
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (error) {
    console.error(error);
    }
}







