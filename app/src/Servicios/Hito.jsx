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


export const traerHitos = async () => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get('/hitos/')
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

/*
export const traerHitosPorProyecto = async (proyectoId) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get(`/hitos/ListByProyecto/${proyectoId}`)
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}*/
export const traerHitosPorProyecto = async (proyectoId) => {
    const cliente = newSecureClient();
    return await cliente.get(`/hitos/ListByProyecto/${proyectoId}`)
        .then(response => {
            const hitoTodos = response.data.hitos
            return hitoTodos
        })
        .catch(error => {
            console.log(error)

        }
        )
}

export const traerHito = async (id) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get(`/hitos/${id}`)
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

export const insertarHito = async (idProyecto, idTipo, descripcion, fechaEntrega, entregado) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.post(`/hitos`, {
            idProyecto, idTipo, descripcion, fechaEntrega, entregado
        })
        if (response.status === 200) {
            alert("El hito fue creado con éxito")
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
};








