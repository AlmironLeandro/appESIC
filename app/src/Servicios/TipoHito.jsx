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

export const traerTiposDeHito = async () => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get('/tiposhito/')
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

export const traerTipoDeHito = async (id) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get(`/tiposhito/${id}`)
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}







