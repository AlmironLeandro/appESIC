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


 export  const traerHitos= async()=>
{
   const cliente = nuevoCliente();
  return await  cliente.get('/hitos/')
     .then(response => {
        const hitoTodos = response.data.data.data
        console.log(hitoTodos)
        return hitoTodos
     })
     .catch(error => {
         console.log(error)

}
)}

export  const traerHito= async(id)=>
{
   const cliente = nuevoCliente();
  return await  cliente.get(`/hitos/${id}`)
     .then(response => {
        if (response.status === 200) {
        const hitoTodos = response.data.data
        return hitoTodos
        } else {
        throw new Error('No se pudo listar el hito');
        }
       
     })
     .catch(error => {
         console.log(error)

}
)}

export const insertarHito = async (idTipo, idProyecto,descripcion,fechaEntrega,entregado) => {
    const cliente = nuevoCliente();

    return await cliente.post(`/hitos`, {
    idTipo, idProyecto,descripcion,fechaEntrega,entregado
  })
      .then(response => {
          if (response.status === 200) {
              return response.data.data;
          } else {
              console.log('error');
              throw new Error('No se pudo agregar el hito');

          }
      }).catch((e) => { console.log(e); throw new Error('No se pudo agregar el hito'); });
};







