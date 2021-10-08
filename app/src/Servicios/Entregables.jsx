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

export const subirDocumento = async (idHito, entrega, documento) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.post(`/entregableshito`, {
            idHito, entrega, documento
        })
        if (response.status === 200) {
            alert("El documento se subió con éxito")
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
};

export const entregablesPorHito = async (id) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get(`/entregablesHito/ListByHito/${id}`)
        if (response.status === 200) {

            return response.data.data;
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

export const ultimoEntregable = async (id) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get(`/entregablesHito/ListUltimoByHito/${id}`)
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}





export const insertarDevolucion = async (id,devolucion) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.put(`/entregablesHito/devolucion/${id}`,{devolucion})
        if (response.status === 200) {
            alert("El comentario fue agregado")
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

