import axios from 'axios'
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
    })
}
const nuevoCliente = () => {
    return axios.create({
        baseURL: config.baseURL,
        timeout: config.timeout,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
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
    catch (e) {
        alert(e.response.data.message)
    }
}

export const traerUsuarios = async () => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get('/usuarios')
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}


export const insertarUsuario = async (nombre, apellido, dni, email, pass, idRol, idCarrera) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.post(`/usuarios`, {
            nombre, apellido, dni, email, pass, idRol, idCarrera
        })
        if (response.status === 200) {
            alert(`El usuario ${apellido} fue creado con éxito`)
            return response.data.data;
        }
    }
        catch (e) {
            alert(e.response.data.message)
        }
};

export const eliminarUsuario = async (id) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.delete(`/usuarios/${id}`, {
        })

        if (response.status === 200) {
            alert("El usuario fue eliminado con éxito")
            return;
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
};

export const editarUsuario = async (ID, nombre, apellido, dni, email, idRol, idCarrera) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.put(`/usuarios/${ID}`, {
            nombre, apellido, dni, email, idRol, idCarrera
        })
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

export const buscarUsuario = async (id) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get(`/usuarios/${id}`)
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }

};