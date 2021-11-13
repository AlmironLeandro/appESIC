import HeaderLogin from './HeaderLogin'
import { Button, Form, Row } from 'react-bootstrap'

import { useEffect, useState, Fragment } from 'react';
const RestablecerContraseña = () => {



    const [usuario, setUsuario] = useState({ dni: '', mail: '' })
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

        if (usuario.dni.length <= 0 || usuario.mail <= 0) {
            setError(true)
            setEnviado(false)
        }
        else {
            setError(false)
            setEnviado(true)
            console.log(usuario)
            setUsuario({ dni: '', mail: '' })
        }
    }

    return (
        <Fragment>
            <HeaderLogin></HeaderLogin>
            <h4 style={{ textAlign: 'center', margin: '4%' }}>Complete los campos para restablecer su contraseña.</h4>
            {enviado ? <h5 style={{ textAlign: 'center', margin: '4%', color: 'green', textDecoration: 'underline green' }}>Si los datos coinciden se enviara un mail con un link para restablecer la contraseña.</h5> : ''}
            <div className="ContenedorFormRestablecerContraseña">
                <Form className="formRestablecerContraseña">
                    <div style={{ textAlign: 'center' }}>
                        {error ? <code>Debes completar todos los campos</code> : ''}
                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Documento</Form.Label>
                        <Form.Control name="dni" type="text" maxlength="8" placeholder="Ingrese su documento" onChange={handleChange} value={usuario.dni} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="mail" type="email" maxlength="40" placeholder="Ingrese el mail de su cuenta" onChange={handleChange} value={usuario.mail} />
                    </Form.Group>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={() => enviar()}>Enviar</Button>
                    </div>

                </Form>
            </div>
        </Fragment>
    )
}


export default RestablecerContraseña;