//React
import React from 'react'
import { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';

//Componentes propios
import HeaderUsuario from '../../HeaderUsuario'
import CrearHito from './CrearHito';
import TablaDeHitos from './TablaDeHitos';
import VolverMenu from '../VolverMenuTutor';

//Servicios
import { traerTiposDeHito } from '../../../Servicios/TipoHito'
import { buscarProyecto } from '../../../Servicios/ProyectoServicio';

const PantallaDeProyecto = () => {

    const { id } = useParams()
    const [tiposHito, setTiposHito] = useState([])
    const [tipoHito, setTipoHito] = useState([])
    const [callBack, setCallBack] = useState(false)
    const [proyecto, setProyecto] = useState()

    useEffect(() => {
        const funcion = async () => {
            const resTraerTipos = await traerTiposDeHito()
            const proyectos = await buscarProyecto(id)
            setProyecto(proyectos)
            if (proyectos.hitos.length === 0) {
                // tipoHito[0] = resTraerTipos[0]
                setTipoHito([resTraerTipos[0]])
            }
            else if (proyectos.hitos.length === 1) {
                // tipoHito[0] = resTraerTipos[1]
                setTipoHito([resTraerTipos[1]])
            }
            else if (proyectos.hitos.length === 2) {
                // tipoHito[0] = resTraerTipos[2]
                setTipoHito([resTraerTipos[2]])
            }
            else if (proyectos.hitos.length === 3) {
                // tipoHito[0] = resTraerTipos[3]
                setTipoHito([resTraerTipos[3]])
            }
            else if (proyectos.hitos.length === 4) {
                // tipoHito[0] = resTraerTipos[4]
                setTipoHito([resTraerTipos[4]])
            }
            else {
                setTipoHito([])
            }

        }

        funcion()
    }, [callBack])


    return (
        <Fragment>
            <HeaderUsuario></HeaderUsuario>
            <h3>Bienvenido a {proyecto !== undefined ? proyecto.proyecto.nombre : ''} </h3>
            <VolverMenu />
            <CrearHito tiposHito={tipoHito} id={id}
                setCallBack={setCallBack} />
            <TablaDeHitos id={id} callBack={callBack} setCallBack={setCallBack} />
        </Fragment>
    )
}

export default PantallaDeProyecto;