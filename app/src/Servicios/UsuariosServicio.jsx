import axios from 'axios';
import config from './Config/config.json'


const newSecureClient = async () => {
    return await axios.create({
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

export const serviceLogin = async (dni, pass) => {
    const cliente = nuevoCliente();
    return cliente.post(`/usuarios/login`, {
        dni, pass
    })
        .then(response => {
            if (response.status === 200) {
                return response.data.data;
            } else {
                console.log('error');
                throw new Error('Usuario y/o contraseña incorrecta');
            }
        }).catch((e) => { console.log(e); throw new Error('Usuario y/o contraseña incorrecta'); });
};

// export const traerUsuarios = async () => {
//     const cliente = await newSecureClient();

//     return await cliente.get('/usuarios')
//         .then(response => {
//             const alumnosTodas = response.data.data

//             return alumnosTodas
//         })
//         .catch(error => {
//             console.log(error)
//         }
//         )
// }

export const traerUsuarios = async () => {
    try {
        const cliente = await newSecureClient();
        const response = await cliente.get('/usuarios')
        return response.data.data
    }
    catch (error) {
        console.error(error);
    }
}


export const insertarUsuario = async (nombre, apellido, dni, email, pass, idRol, idCarrera) => {
    const cliente = await newSecureClient();
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

// const response = await post(...)
// if (response.status !== 200) { ... }
// Try catch --- async && await || then()
/*
export const eliminarUsuario = async (id) => {
    const cliente = await newSecureClient();
    console.log(`es para el id: ${id}`)
   
    const response = await cliente.delete(`/usuarios/${id}`)
       
    if (response === 200) {
            return;
        } else {
            throw new Error('No se pudo eliminar el usuario');
        }        
};*/

export const eliminarUsuario = async (id) => {
    const cliente = await newSecureClient();
    console.log(`es para eliminar el id: ${id}`)

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





export const editarUsuario = async (ID, nombre, apellido, dni, email,  idRol, idCarrera) => {
    try
    {
        const cliente = await newSecureClient();
        console.log(`es para editar el id: ${ID}`)
        const response = await cliente.put(`/usuarios/${ID}`, {
            nombre, apellido, dni, email, idRol, idCarrera
        })
        if (response.status === 200) {

            return response.data.data
        }
    }
    catch (error) {
        console.error(error);
      }
}

export const buscarUsuario = async (id) => {
    const cliente = await newSecureClient();
    return await cliente.get(`/usuarios/${id}`)
        .then(response => {
            if (response.status === 200) {


                return response.data;
            } else {

                throw new Error('No se pudo listar el usuario');
            }
        }).catch((e) => { throw new Error('No se pudo listar usuario'); });
};


