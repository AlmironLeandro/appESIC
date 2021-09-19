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
    const cliente = newSecureClient();
    return await cliente.get(`/proyectos/ListByEstudiante/${idEstudiante}`)
        .then(response => {
            const proyectoXEst = response.data
            return proyectoXEst
        })
        .catch(error => {
            console.log(error)
        }
        )
}
