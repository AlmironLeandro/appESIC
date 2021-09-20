import React, {Fragment,useEffect,useState}  from 'react'
import HeaderUsuario from '../HeaderUsuario'
import Hitos from './Hitos'
import {traerProyectoPorEstudiante} from '../../Servicios/ProyectoPorEstudiante'
import {buscarProyecto} from '../../Servicios/ProyectoServicio'
import {traerHitosPorProyecto} from '../../Servicios/Hito'

const Estudiante= ()=> {
  const [proyecto, setProyecto]=useState()
  const [hitos, setHitos]=useState()
  
    useEffect(async () => {
        async function respuesta() {
            const res = await  traerProyectoPorEstudiante(localStorage.getItem("id"))
            await buscarProyecto(res.proyects[0].id).then(res => setProyecto(res))
            await traerHitosPorProyecto(res.proyects[0].id).then(res => setHitos(res))
        }
        /*try
        {
            const res = await  traerProyectoPorEstudiante(localStorage.getItem("id"))
            await buscarProyecto(res.proyects[0].id).then(res => setProyecto(res))
            await traerHitosPorProyecto(res.proyects[0].id).then(res => setHitos(res))
        }
        catch(error)
        {
            console.log(error)
        }*/
        respuesta()
    }, [])
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
            {hitos === null || hitos === undefined   || hitos.length === 0 ? <h1 style={{textAlign:'center'}}>
                <code>Todavía no hay hitos </code></h1> : <Hitos hitos={hitos}> </Hitos> }
             
        </Fragment> 
    )
}

export default Estudiante