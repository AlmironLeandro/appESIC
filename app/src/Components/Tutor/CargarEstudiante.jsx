import React, { Fragment, useState, useEffect } from 'react'
import HeaderUsuario from '../HeaderUsuario'
import VolverMenu from './VolverMenuTutor';
import FormularioEstudiante from './FormularioEstudiante';
import TablaEstudiantes from './TablaEstudiantes';
import { traerUsuarios,buscarUsuario, eliminarUsuario } from '../../Servicios/UsuariosServicio'
import EditarEstudiante from './EditarEstudiante';
import { editarUsuario } from '../../function/editarUsuario';
import EliminarUsuario from './EliminarUsuario';


const CargarEstudiante = () => {

    const [cargaEstudiante, setCargaEstudiante] = useState(false)
    const [estudiantes, setEstudiantes] = useState([])
    const [estudiante, setEstudiante] = useState(null)
    const [alumnoAEliminar, setEliminar] = useState(null)

    const traerUsuario = async (idestudiante) => {
        const estudiante = await editarUsuario(idestudiante)
        setEstudiante(estudiante)
       
    }
    const eliminarUsuario = async (id) => {
        const res = await editarUsuario(id)
        setEliminar(res)
    }

    useEffect(() => {
        traerUsuarios().then(res => {
            setEstudiantes(res)
            
        })


    }, [cargaEstudiante])

    return (
        <Fragment>
            <HeaderUsuario />

            <br />
            <VolverMenu />
            <FormularioEstudiante
                avisoCallBack={setCargaEstudiante}
            />
            <TablaEstudiantes
                estudiantes={estudiantes}
                traerUsuario={traerUsuario}
                eliminarUsuario={eliminarUsuario}
            />
            {estudiante == null ? '' :
               
                <EditarEstudiante
                    setCargaEstudiante={setCargaEstudiante}
                    estudiante={estudiante}
                    setEstudiante={setEstudiante}

                />

            }
            {alumnoAEliminar == null ? '' :
               <EliminarUsuario
                setCargaEstudiante={setCargaEstudiante}
                alumnoAEliminar={alumnoAEliminar}
                setEliminar={setEliminar}
                
               />

              

           }





        </Fragment>

    )
}

export default CargarEstudiante;