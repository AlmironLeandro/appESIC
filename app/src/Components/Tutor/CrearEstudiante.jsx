import axios from 'axios';
import config from '../configs/config.json';

const CrearEstudiante = () => {
    return axios.create({
        baseURL: config.baseURL,
        timeout: config.timeout,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
}

const newSecureEstudiante = () => {
    return axios.create({
        baseURL: config.baseURL,
        timeout: config.timeout,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            //'Authorization': `Bearer ${localStorage.getItem('akeron-token')}`,
        }
    });
}

export const guardarEstudiante = async (username, password) => {
    const restclient = newClient();
    return await restclient.post('/login/LoginWeb', { username, password })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('Usuario o contraseña incorrectos');
            }
        }).catch(e => { throw new Error('Usuario o contraseña incorrectos'); });
}

export const changePassword = async (password) => {
    const secureclient = newSecureClient();
    return await secureclient.put(`/login/${localStorage.getItem('akeron-username')}`, { password })
        .then(response => {
            if (response.status === 204) {
                return;
            } else {
                throw new Error('No fue posible cambiar la contraseña, intente nuevamente más tarde.');
            }
        }).catch((e) => { throw new Error('No fue posible cambiar la contraseña, intente nuevamente más tarde.'); });
}