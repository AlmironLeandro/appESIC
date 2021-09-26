import React from 'react'
import { Fragment, useState, useEffect} from 'react';
import HeaderUsuario from '../../HeaderUsuario'
import CrearHito from './CrearHito';
import TablaDeHitos from './TablaDeHitos';
import { traerTiposDeHito } from '../../../Servicios/TipoHito'

import VolverMenu from '../VolverMenuTutor';
import { useParams } from 'react-router';
import { buscarProyecto } from '../../../Servicios/ProyectoServicio';
const PantallaDeProyecto = () => {

    const { id } = useParams()
    const [tiposHito, setTiposHito] = useState([])
    const [callBack,setCallBack]= useState(false)
    const [proyecto, setProyecto]=useState()
    useEffect(() => {
        traerTiposDeHito().then(res => setTiposHito(res))
        buscarProyecto(id).then(res => setProyecto(res))
    }, [callBack])


    return (
        <Fragment>
            <HeaderUsuario></HeaderUsuario>
            <h3>Bienvenido a { proyecto !== undefined   ?  proyecto.proyecto.nombre : ''} </h3>
            <VolverMenu />
            <CrearHito tiposHito={tiposHito} id={id} 
            setCallBack={setCallBack}/>
            <TablaDeHitos id={id} callBack={callBack} />
        </Fragment>
    )
}

export default PantallaDeProyecto;