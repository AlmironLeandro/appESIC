import React, { Fragment, useState, useEffect } from 'react'
import HeaderUsuario from '../HeaderUsuario'
import VolverMenu from './VolverMenuTutor';
import FormularioEstudiante from './FormularioEstudiante';
import TablaEstudiantes from './TablaEstudiantes';
import { traerUsuarios, eliminarUsuario } from '../../Servicios/UsuariosServicio'
import EditarEstudiante from './EditarEstudiante';
import { editarUsuario } from '../../function/editarUsuario';

const CargarEstudiante = () => {

    const [cargaEstudiante, setCargaEstudiante] = useState(false)
    const [estudiantes, setEstudiantes] = useState([])
    const [estudiante, setEstudiante] = useState(null)

    const traerUsuario = async (idestudiante) => {
        const estudiante = await editarUsuario(idestudiante)
        setEstudiante(estudiante)
    }
    useEffect(() => {
        traerUsuarios().then(res => setEstudiantes(res))
        console.log("PASO POR ACA")
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
            />
            {estudiante == null ? '' :
                <EditarEstudiante
                    estudiante={estudiante}
                    setEstudiante={setEstudiante}
                    
                />
            }




        </Fragment>

    )
}

export default CargarEstudiante;