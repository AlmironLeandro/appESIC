import React from 'react'
import { Fragment, useState,useEffect,useLocation } from 'react';
import HeaderUsuario from '../../HeaderUsuario'
import CrearHito from './CrearHito';
import TablaDeHitos from './TablaDeHitos';
import {traerTiposDeHito} from '../../../Servicios/TipoHito'
import {traerHitosPorProyecto} from '../../../Servicios/Hito'
import VolverMenu from '../VolverMenuTutor';
const PantallaDeProyecto = () => {

const [tiposHito,setTiposHito]=useState([])
const [hitosDeProyecto,setHitosDeProyecto]=useState([])
useEffect(() => {
    traerTiposDeHito().then(res => setTiposHito(res))
}, [])
useEffect(() => {
    traerHitosPorProyecto(1).then(res => setHitosDeProyecto(res))
}, [])

    return (
        <Fragment>
            <HeaderUsuario></HeaderUsuario>
            <h3>Bienvenido al proyecto </h3>
            <VolverMenu/> 
            <CrearHito tiposHito={tiposHito}></CrearHito>
            <TablaDeHitos hitosDeProyecto={hitosDeProyecto}></TablaDeHitos>
        </Fragment>
    )
}

export default PantallaDeProyecto;