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

 export  const traerMaterias= async()=>
{
   const cliente = nuevoCliente()
  return await  cliente.get('/materias/')
     .then(response => {
        const materias = response.data.data
        return materias
     
       
     })
     .catch(error => {
         console.log(error)

}
)}
