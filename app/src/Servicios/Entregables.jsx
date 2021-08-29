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


export const traerHitos = async () => {
    const cliente = newSecureClient();
    return await cliente.get('/hitos/')
        .then(response => {
            const hitoTodos = response.data.data
            return hitoTodos
        })
        .catch(error => {
            console.log(error)

        }
        )
}

export const traerHitosPorProyecto = async (proyectoId) => {
    const cliente = newSecureClient();
    return await cliente.get(`/hitos/ListByProyecto/${proyectoId}`)
        .then(response => {
            const hitoTodos = response.data.hitos
            console.log(hitoTodos)
            return hitoTodos
        })
        .catch(error => {
            console.log(error)

        }
        )
}

export const traerHito = async (id) => {
    const cliente = newSecureClient();
    return await cliente.get(`/hitos/${id}`)
        .then(response => {
            if (response.status === 200) {
                const hitoTodos = response.data.data
                return hitoTodos
            } else {
                throw new Error('No se pudo listar el hito');
            }

        })
        .catch(error => {
            console.log(error)

        }
        )
}

export const subirDocumento = async (idHito, entrega, documento) => {
    const cliente = newSecureClient();

    return await cliente.post(`/entregableshito`, {
        idHito, entrega, documento
    })
        .then(response => {
            if (response.status === 200) {
                return response.data.data;
            } else {
                console.log('error');
                throw new Error('No se pudo agregar el hito');

            }
        }).catch((e) => { console.log(e); throw new Error('No se pudo agregar el hito'); });
};








