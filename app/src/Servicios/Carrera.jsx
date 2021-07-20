
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


 export  const traerCarreras= async()=>
{
   const cliente = nuevoCliente();
  return await  cliente.get('/carreras/')
     .then(response => {
        const carrerasTodas = response.data.data
        return carrerasTodas
     
       
     })
     .catch(error => {
         console.log(error)

}
)}

export  const traerCarrera= async(id)=>
{
   const cliente = nuevoCliente();
  return await  cliente.get(`/carreras/${id}`)
     .then(response => {
        if (response.status === 200) {
        const carrerasTodas = response.data.data
        return carrerasTodas
        } else {
        throw new Error('No se pudo listar la carrera');
        }
       
     })
     .catch(error => {
         console.log(error)

}
)}







