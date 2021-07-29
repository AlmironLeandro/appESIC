import React from 'react'
import { Fragment, useState,useEffect,useLocation } from 'react';
import HeaderUsuario from '../../HeaderUsuario'
import CrearHito from './CrearHito';
import TablaDeHitos from './TablaDeHitos';
import {traerTiposDeHito} from '../../../Servicios/TipoHito'
const PantallaDeProyecto = () => {

const [tiposHito,setTiposHito]=useState([])
useEffect(() => {
    traerTiposDeHito().then(res => setTiposHito(res))
}, [])

    return (
        <Fragment>
            <HeaderUsuario></HeaderUsuario>
            <h3>Bienvenido al proyecto </h3>
            <CrearHito tiposHito={tiposHito}></CrearHito>
            <TablaDeHitos ></TablaDeHitos>
        </Fragment>
    )
}

export default PantallaDeProyecto;