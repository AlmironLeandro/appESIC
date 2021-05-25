import React from 'react'
import axios from 'axios'
import config from './Config/config.json'

const CrearEstudiante= () => {
    return axios.create({
        baseURL: config.baseURL,
        timeout: config.timeout,
        headers: {
            'Content - Type': 'application/json',
            'Accept': 'application/json'
        }
    })
}
//completar

export const insertDeposito = async (nombre,apellido) => {
    const estudiante = CrearEstudiante();

    return await estudiante.post(`/carrera`, {
        nombre
    })
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                console.log('error');
                throw new Error('No se pudo agregar el estudiante');

            }
        })
        .catch((e) => { console.log(e.response.data.message); throw new Error(e.response.data.message); });
};
