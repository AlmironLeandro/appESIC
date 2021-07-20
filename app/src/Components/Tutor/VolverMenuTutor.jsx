import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const style= {
    display:'flex',
    justifyContent:'end',
    marginRight:'5%'
}

function VolverMenuTutor() {
    return (
        <div style={style}>
            <div>
                <Button style={{  background:'#ffffff'}} >
                    <Link 
                    style={{ textDecoration: 'none' }} to={"/InicioTutor"}>Volver
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default VolverMenuTutor
