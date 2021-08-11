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
export const traerProyectos = async ()=> 
{
    const cliente =nuevoCliente();
    return await cliente.get('/proyectos')
    .then(res => 
        {
            const proyectos = res.data.data
            return proyectos
        })
    .catch(error => 
        {
            console.log(error)
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

export const eliminarProyecto = async (id) => {
    const cliente = nuevoCliente();

    return await cliente.delete(`/proyectos/${id}`, {
       
    })
        .then(response => {
            if (response.status === 200) {
                return;
            } else {
                throw new Error('No se pudo eliminar el proyecto');
            }
        }).catch((e) => { throw new Error('No se pudo eliminar el proyecto'); });
};

export const editarUsuario = async (ID, nombre,descripcion, idMateria,idTutor,fechaInicio,alumnos) => {
    const cliente = nuevoCliente();

    return await cliente.put(`/proyectos/${ID}`, {
        nombre,descripcion, idMateria,idTutor,fechaInicio,alumnos
    })
        .then(response => {
            if (response.status === 200) {
                console.log(response.data);
                return response.data.data;
            } else {
                throw new Error('No se pudo modificar el proyecto');
            }
        }).catch((e) => { throw new Error('No se pudo modificar el proyecto'); });
};

export const buscarProyecto = async (id) => {
    const cliente = nuevoCliente();
    return await cliente.get(`/proyectos/${id}`) 
        .then(response => {
            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error('No se pudo listar el proyecto');
            }
        }).catch((e) => { throw new Error('No se pudo listar proyecto'); });
};