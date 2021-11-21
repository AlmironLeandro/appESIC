import HeaderLogin from './HeaderLogin'
import { Button, Form } from 'react-bootstrap'
import { recuperarContrasenia } from '../../Servicios/UsuariosServicio'
import { Link } from 'react-router-dom'
import { useState, Fragment } from 'react';

const RestablecerContraseña = () => {

    const [usuario, setUsuario] = useState({ dni: '' })
    const [enviado, setEnviado] = useState(false)
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        }
        )
    };
    const enviar = async () => {

        if (usuario.dni.length <= 0 || usuario.dni != parseInt(usuario.dni) ) {
            setError(true)
            setEnviado(false)
            setUsuario({ dni: '' })
        }
 
        else {
            await recuperarContrasenia(usuario.dni)
            setError(false)
            setEnviado(true)
            setUsuario({ dni: '' })
        }
    }

    return (
        <Fragment>
            <HeaderLogin></HeaderLogin>
            <br></br>
            <div style={{ display: 'flex', justifyContent: "flex-end", marginRight: '20px' }}>
                <Button
                    style={{ background: '#ffffff' }} >
                    <Link
                        style={{ textDecoration: 'none' }} to={"/login"}>
                        Volver
                    </Link>
                </Button>
            </div>
            <h4 style={{ textAlign: 'center', margin: '4%' }}>Complete los campos para restablecer su contraseña.</h4>

            {enviado ? <h5 style={{ textAlign: 'center', margin: '4%', color: 'green', textDecoration: 'underline green' }}>Si los datos coinciden, se enviará un mail con un link para restablecer la contraseña. Porfavor revisar spam/correo no deseado. </h5> : ''}
            

            <div className="ContenedorFormRestablecerContraseña">
                <Form className="formRestablecerContraseña">
                    {/* POSIBLES ERRORES */}
                    <div style={{ textAlign: 'center',textDecoration: 'underline red'}}>
                        {error ? <code>Debes ingresar un <strong>DNI</strong></code> : ''}
                    </div>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Documento</Form.Label>
                        <Form.Control name="dni" type="text" maxlength="8" placeholder="Ingrese su documento" onChange={handleChange} value={usuario.dni} />
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