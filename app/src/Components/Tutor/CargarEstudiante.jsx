import React, { Fragment, useState, useEffect } from 'react'
import HeaderUsuario from '../HeaderUsuario'
import VolverMenu from './VolverMenuTutor';
import FormularioEstudiante from './FormularioEstudiante';
import TablaEstudiantes from './TablaEstudiantes';
import { buscarUsuarioPorId } from '../../Servicios/UsuariosServicio'
import EditarEstudiante from './EditarEstudiante';
import { editarUsuario } from '../../function/editarUsuario';
import EliminarUsuario from './EliminarUsuario';


const CargarEstudiante = () => {

    const [cargaEstudiante, setCargaEstudiante] = useState(false)
    const [estudiantes, setEstudiantes] = useState([])
    const [estudiante, setEstudiante] = useState(null)
    const [alumnoAEliminar, setAlumnoAEliminar] = useState(null)

    //Función para traer el usuario para el edit
    const traerUsuario = async (idestudiante) => {
        const estudiante = await editarUsuario(idestudiante)
        setEstudiante(estudiante)
    }

    const eliminaUsuario = async (id) => {
        const res = await editarUsuario(id)
        setAlumnoAEliminar(res)
    }

    useEffect(() => {
        const usuarios = async (id) => {
            try {
              const response = await buscarUsuarioPorId(id)
              setEstudiantes(response)
            }
            catch (e) {
              console.error(e)
            }
           
        }
        usuarios(1)
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
                eliminaUsuario={eliminaUsuario}
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
                setAlumnoAEliminar={setAlumnoAEliminar}
               /> 
           }

           

        </Fragment>

    )
}

export default CargarEstudiante;