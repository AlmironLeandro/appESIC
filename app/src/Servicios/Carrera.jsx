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

export const traerCarreras = async () => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get('/carreras/')
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }

}

export const traerCarrera = async (id) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get(`/carreras/${id}`)
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

export const insertarCarrera = async (nombre) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.post(`/carreras`, {
            nombre
        })
        if (response.status === 200) {
            alert("La carrera fue creada con éxito")
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

export const eliminarCarrera = async (id) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.delete(`/carreras/${id}`)
        if (response.status === 200) {
            alert("La carrera fue eliminada")
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
};

// export const traerProyectosPorCarrera = async (id) => {
//     try {
//         const cliente = newSecureClient();
//         const response = await cliente.get('/proyectos')
//         if (response.status === 200) {
//             return response.data.data
//         }
//     }
//     catch (e) {
//         alert(e.response.data.message)
//     }
// }