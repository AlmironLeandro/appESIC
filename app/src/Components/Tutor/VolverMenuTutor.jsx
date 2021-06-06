import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const style= {
    background:'#ffffff',
    display:'flex',
    left: '20px',
    bottom: '20px'
}

function VolverMenuTutor() {
    return (
        <Button style={style} >
            <Link 
            style={{ textDecoration: 'none' }} to={"/InicioTutor"}>Volver
            </Link>
        </Button>
    )
}

export default VolverMenuTutor
