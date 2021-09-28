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

export const traerMaterias = async () => {
    try {
        const cliente = newSecureClient()
        const response = await cliente.get('/materias/')
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

export const insertarMateria = async (nombre, idCarrera) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.post(`/materias`, {
            nombre, idCarrera
        })
        if (response.status === 200) {
            alert("La materia fue creada con éxito")
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
};
