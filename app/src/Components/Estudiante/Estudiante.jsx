import React, {Fragment,useEffect,useState}  from 'react'
import HeaderUsuario from '../HeaderUsuario'
import Hitos from './Hitos'
import {traerProyectoPorEstudiante} from '../../Servicios/ProyectoPorEstudiante'
import {buscarProyecto} from '../../Servicios/ProyectoServicio'
import {traerHitosPorProyecto} from '../../Servicios/Hito'

const Estudiante= ()=> {
  const [alumno,setEstudiante] =useState ({})
  const [proyecto, setProyecto]=useState()
  const [hitos, setHitos]=useState()
  
    useEffect(async () => {
    await  traerProyectoPorEstudiante(localStorage.getItem("id")).then(res => setEstudiante(res))
    
    await buscarProyecto(8).then(res => setProyecto(res))
    await traerHitosPorProyecto(8).then(res => setHitos(res))


    }, [])
    const traerproyecto= async ()=> {
        
        await buscarProyecto(alumno.proyects[0].id).then(res => setProyecto(res))
     }

    return (
        <Fragment>
            <HeaderUsuario/>
            { !proyecto ? ''
            : <>
            <h2 style={{textAlign:'center'}}>Bienvenido al proyecto:{proyecto.proyecto.nombre} </h2>
            <h3 style={{textAlign:'center'}}>Materia: {proyecto.materia.nombre}</h3>
            </>
        }
            <br />
            {hitos == null ? '' : <Hitos hitos={hitos}> </Hitos> }
             
        </Fragment> 
    )
}

export default Estudiante