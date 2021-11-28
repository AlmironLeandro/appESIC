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

export const traerProyectos = async () => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get('/proyectos')
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
}

export const insertarProyecto =
    async (nombre, descripcion, idMateria, idTutor, fechaInicio, alumnos) => {
        try {
            const cliente = newSecureClient();
            const response = await cliente.post('/proyectos', {
                nombre, descripcion, idMateria, idTutor, fechaInicio, alumnos
            })
            if (response.status === 200) {
                alert(`El proyecto ${nombre} fue creado con éxito`)
                return response.data.data;
            }
        }
        catch (e) {
            alert(e.response.data)
        }
    }

export const eliminarProyecto = async (id, nombre) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.delete(`/proyectos/${id}`)
        if (response.status === 200) {
            alert(`Se ha eliminado el proyecto ${nombre}`)
            return;
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
};

export const editarProyecto = async (ID, nombre, descripcion, idMateria, idTutor, fechaInicio, fechaFin, alumnos) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.put(`/proyectos/${ID}`, {
            nombre, descripcion, idMateria, idTutor, fechaInicio, fechaFin, alumnos
        })
        if (response.status === 200) {
            return response.data.data;
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
};

export const traerProyectosPorCarrera = async (id) => {
    try {
        const cliente = newSecureClient();
        const response = await cliente.get(`/proyectos/listByCarrera/${id}`)
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }
};

export const buscarProyecto = async (id) => {

    try {
        const cliente = newSecureClient();
        const response = await cliente.get(`/proyectos/${id}`)
        if (response.status === 200) {

            return response.data;
        }
    }
    catch (e) {

        alert(e.response.data.message)
    }
};

export const traerProyectosPorTutor = async (id) => {

    try {
        const cliente = newSecureClient();
        const response = await cliente.get(`/proyectos/ListByTutor/${id}`)
        if (response.status === 200) {

            return response.data.proyects;
        }
    }
    catch (e) {

        alert("No hay proyectos cargados")
    }
};