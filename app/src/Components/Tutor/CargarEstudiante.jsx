import React, {Fragment, useState, useEffect} from 'react'
import HeaderUsuario from '../HeaderUsuario'
import VolverMenu from './VolverMenuTutor';
import FormularioEstudiante from './FormularioEstudiante';
import TablaEstudiantes from './TablaEstudiantes';
import {traerUsuarios, eliminarUsuario} from '../../Servicios/UsuariosServicio'

const CargarEstudiante=()=> {

    const [cargaEstudiante, setCargaEstudiante]=useState(false)
    const [estudiantes, setEstudiantes]= useState([])
    
    useEffect(() => {
        traerUsuarios().then(res => setEstudiantes(res) )
    }, [cargaEstudiante]) 
    
    return (
        <Fragment>
            <HeaderUsuario/>
            <br/> 
            <FormularioEstudiante
            avisoCallBack={setCargaEstudiante}
            />       
            <TablaEstudiantes
            estudiantes={estudiantes}
            />
            <VolverMenu/>      
        </Fragment>
       
    )
}

export default CargarEstudiante;