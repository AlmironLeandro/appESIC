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


 export  const traerTiposDeHito= async()=>
{
   const cliente = nuevoCliente();
  return await  cliente.get('/tiposhito/')
     .then(response => {
        const tiposDeHito = response.data.data
        console.log(tiposDeHito)
        return tiposDeHito
     })
     .catch(error => {
         console.log(error)

}
)}

export  const traerTipoDeHito= async(id)=>
{
   const cliente = nuevoCliente();
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
)}







