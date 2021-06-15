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

export const traerUsuarios = async()=>{
    const cliente = nuevoCliente();

    return await  cliente.get('http://localhost:3001/api/usuarios')
    .then(response => {
        const alumnosTodas = response.data.data
        return alumnosTodas  
    })
    .catch(error => {
        console.log(error)
}
)}

export const insertarUsuario = async (nombre, apellido, dni, email, pass, idRol, idCarrera) => {
    const cliente = nuevoCliente();

    return await cliente.post(`/usuarios`, {
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

export const eliminarUsuario = async (id) => {
    const cliente = nuevoCliente();

    return await cliente.delete(`/usuarios/${id}`, {
       
    })
        .then(response => {
            if (response.status === 200) {
                return;
            } else {
                throw new Error('No se pudo eliminar el usuario');
            }
        }).catch((e) => { throw new Error('No se pudo eliminar el usuario'); });
};

export const editarUsuario = async (ID, nombre, apellido, dni, email, pass, idRol, idCarrera) => {
    const cliente = nuevoCliente();

    return await cliente.put(`/usuarios/${ID}`, {
        nombre, apellido, dni, email, pass, idRol, idCarrera
    })
        .then(response => {
            if (response.status === 200) {
                console.log(response.data);
                return response.data.data;
            } else {
                throw new Error('No se pudo modificar el usuario');
            }
        }).catch((e) => { throw new Error('No se pudo modificar el usuario'); });
};