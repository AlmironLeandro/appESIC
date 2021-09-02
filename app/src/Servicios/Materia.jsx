import axios from 'axios';
import config from './Config/config.json'

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
   const cliente = newSecureClient()
  return await  cliente.get('/materias/')
     .then(response => {
        const materias = response.data.data
        return materias
     
       
     })
     .catch(error => {
         console.log(error)

}
)}

export const insertarMateria =  (nombre) => {
    const cliente = nuevoCliente();
    return  cliente.post(`/materias`, {
    nombre
  })
      .then(response => {
          if (response.status === 200) {
              return response.data.data;
          } else {
              console.log('error');
              throw new Error('No se pudo agregar la materia');
          }
      }).catch((e) => { console.log(e); throw new Error('No se pudo agregar la materia'); });
};
