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

export const traerAlumnos = async()=>
{
  return await  axios.get('http://localhost:3001/api/usuarios')
    .then(response => {
        const alumnosTodas = response.data.data
        return alumnosTodas.json()
     
    })
    .catch(error => {
        console.log(error)

}
)}

export const insertarUsuario = async (nombre, apellido, dni, email, pass, idRol, idCarrera,) => {
  
  const secureclient = nuevoCliente();

  return await secureclient.post(`/usuarios`, {
    nombre, apellido, dni, email, pass, idRol, idCarrera
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



