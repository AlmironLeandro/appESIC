import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function VolverMenuTutor() {
    return (

        <div style={{ display: 'flex', justifyContent: "flex-end", marginRight: '20px' }}>
            <Button style={{ background: '#ffffff' }} >
                {localStorage.getItem("idRol") === "2" ?
                    <Link
                        style={{ textDecoration: 'none' }} to={"/Usuario/2"}>Volver
                    </Link>

                    :

                    <Link
                        style={{ textDecoration: 'none' }} to={"/tutorCoordinador"}>Volver
                    </Link>
                }

            </Button>
        </div>

    )
}

export default VolverMenuTutor
