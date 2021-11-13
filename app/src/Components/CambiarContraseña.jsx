import HeaderUsuario from './HeaderUsuario'
import { Button, Form, Row } from 'react-bootstrap'

import { useEffect, useState, Fragment } from 'react';
const CambiarContraseña = () => {



    const [usuario, setUsuario] = useState({ contraseñaActual: '', nuevaContraseña: '', repitaContraseña: '' })
    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)
    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        }
        )
    };
    const enviar = () => {
        console.log(usuario)
    }

    return (
        <Fragment>
            <HeaderUsuario></HeaderUsuario>
            <h4 style={{ textAlign: 'center', margin: '4%' }}>Complete los campos para cambiar su contraseña.</h4>
            {/* {enviado ? <h5 style={{ textAlign: 'center', margin: '4%', color: 'green', textDecoration: 'underline green' }}>Si los datos coinciden se enviara un mail con un link para restablecer la contraseña.</h5> : ''} */}
            <div className="ContenedorFormRestablecerContraseña">
                <Form className="formRestablecerContraseña">
                    <div style={{ textAlign: 'center' }}>
                        {error ? <code>Debes completar todos los campos</code> : ''}
                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Contraseña actual</Form.Label>
                        <Form.Control name="contraseñaActual" type="text" maxlength="40" placeholder="Ingrese su contraseña actual" onChange={handleChange} value={usuario.contraseñaActual} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Contraseña nueva</Form.Label>
                        <Form.Control name="nuevaContraseña" type="text" maxlength="40" placeholder="Ingrese su nueva contraseña" onChange={handleChange} value={usuario.nuevaContraseña} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Contraseña nueva</Form.Label>
                        <Form.Control name="repitaContraseña" type="text" maxlength="40" placeholder="Vuelva a ingrese su nueva contraseña" onChange={handleChange} value={usuario.repitaContraseña} />
                    </Form.Group>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={() => enviar()}>Enviar</Button>
                    </div>

                </Form>
            </div>
        </Fragment>
    )
}


export default CambiarContraseña;