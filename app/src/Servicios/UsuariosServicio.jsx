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

export const serviceLogin = async (dni, pass) => {
    try {
        const cliente = nuevoCliente();
        const response = await cliente.post(`/usuarios/login`, {
            dni, pass
        })
        if (response.status === 200) {
            return response.data.data;
        }
    }
    catch {
        console.log('error');
        // alert('Usuario y/o contraseña incorrecta');
    }
};

export const traerUsuarios = async () => {
    const cliente = newSecureClient();

    return await cliente.get('/usuarios')
        .then(response => {
            const alumnosTodas = response.data.data
            return alumnosTodas
        })
        .catch(error => {
            console.log(error)
        }
        )
}
// const response = await post(...)
// if (response.status !== 200) { ... }
// Try catch --- async && await || then()

export const insertarUsuario = (nombre, apellido, dni, email, pass, idRol, idCarrera) => {
    const cliente = newSecureClient();
    return cliente.post(`/usuarios`, {
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

export const eliminarUsuario = (id) => {
    const cliente = newSecureClient();
    console.log(`es para el id: ${id}`)
    return cliente.delete(`/usuarios/${id}`, {

    })
        .then(response => {
            if (response.status === 200) {
                return;
            } else {
                throw new Error('No se pudo eliminar el usuario');
            }
        }).catch((e) => { throw new Error('No se pudo eliminar el usuario'); });
};



export const editarUsuario = (ID, nombre, apellido, dni, email, pass, idRol, idCarrera) => {
    const cliente = newSecureClient();

    return cliente.put(`/usuarios/${ID}`, {
        nombre, apellido, dni, email, pass, idRol, idCarrera
    })
        .then(response => {
            if (response.status === 200) {
                //console.log("llega al put")
                return response.data.data;

            } else {
                throw new Error('No se pudo modificar el usuario');
            }
        }).catch((e) => { throw new Error('No se pudo mod el usuario'); });
};

export const buscarUsuario = async (id) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get(`/usuarios/${id}`)
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (error) {
        alert(error)
    }
}

