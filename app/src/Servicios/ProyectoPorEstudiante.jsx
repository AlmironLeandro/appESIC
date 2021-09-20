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
export const traerProyectoPorEstudiante = async (idEstudiante) => {
    try{
        const cliente = newSecureClient();
        const response = await cliente.get(`/proyectos/ListByEstudiante/${idEstudiante}`)
        if (response.status === 200) {
            return response.data.data
        }
    }
    catch (e) {
        alert(e.response.data.message)
    }    
}