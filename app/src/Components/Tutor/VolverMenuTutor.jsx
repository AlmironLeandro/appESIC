import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'


function VolverMenuTutor() {
    return (
        <Button className=" volverMenu " >
        <Link 
        style={{ textDecoration: 'none' }} to={"/InicioTutor"}>Volver
        </Link>
        </Button>
    )
}

export default VolverMenuTutor
