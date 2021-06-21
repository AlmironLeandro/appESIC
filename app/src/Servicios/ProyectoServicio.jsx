import axios from 'axios';
import config from './Config/config.json'


const nuevoCliente = ()=> {
    return axios.create({
        baseURL:config.baseURL,
        timeout:config.timeout,
        headers:{
            'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    })
}

export const insertarProyecto =
 async ( nombre,descripcion, idMateria,idTutor,fechaInicio,alumnos)=>{
    const cliente = nuevoCliente();

    return await cliente.post('/proyectos',{
        nombre,descripcion, idMateria,idTutor,fechaInicio,alumnos
    })
    .then(resp => {
        if(resp.status === 200){
            alert('Nuevo proyecto creado satisfactoriamente')
            return resp.data.data;
        }
        else{
            console.log('error');
            alert('No se pudo crear el proyecto');
            throw new Error('No se pudo crear el proyecto');   
        }
    }).catch((e) => { console.log(e); throw new Error('No se pudo crear el proyecto'); });
}