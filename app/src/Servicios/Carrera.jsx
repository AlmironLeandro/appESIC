import {newSecureClient} from '../Servicios/Config/utils'
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
        newSecureClient()
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


export const insertarCarrera =  (nombre) => {
    const cliente = nuevoCliente();
    return  cliente.post(`/carreras`, {
    nombre
  })
      .then(response => {
          if (response.status === 200) {
              return response.data.data;
          } else {
              console.log('error');
              throw new Error('No se pudo agregar el usuario');
          }
      }).catch((e) => { console.log(e); throw new Error('No se pudo agregar el usuario'); });
};




export const eliminarCarrera = async (id) => {
    const cliente = newSecureClient();

    return await cliente.delete(`/carreras/${id}`, {
       
    })
        .then(response => {
            if (response.status === 200) {
                return;
            } else {
                throw new Error('No se pudo eliminar la carrera');
            }
        }).catch((e) => { throw new Error('No se pudo eliminar la carrera'); });
};