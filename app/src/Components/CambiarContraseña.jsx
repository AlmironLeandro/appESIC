import HeaderUsuario from './HeaderUsuario'
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'
import { actualizarContrasenia } from '../Servicios/UsuariosServicio'
import { Link } from 'react-router-dom'

import { useState, Fragment } from 'react';
const CambiarContraseña = () => {

    const [usuario, setUsuario] = useState({ contraseñaActual: '', nuevaContraseña: '', repitaContraseña: '' })
    const { contraseñaActual, nuevaContraseña, repitaContraseña } = usuario
    const [error, setError] = useState(false)
    const [enviado, setEnviado] = useState(false)
    const history = useHistory();
    const [validarContraseniasNuevas, setValidarContraseniasNuevas] = useState(false)
    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        }
        )
    };
    const enviar = async () => {

        if (contraseñaActual <= 0 || nuevaContraseña <= 0 || repitaContraseña <= 0) {
            setError(true)
            setValidarContraseniasNuevas(false)
            setEnviado(false)
        }
        else if (nuevaContraseña !== repitaContraseña) {
            setError(false)
            setValidarContraseniasNuevas(true)
            setEnviado(false)
        }
        else {
            await actualizarContrasenia(localStorage.getItem("id"), contraseñaActual, nuevaContraseña)
            setError(false)
            setValidarContraseniasNuevas(false)
            setEnviado(true)
            setUsuario({ contraseñaActual: '', nuevaContraseña: '', repitaContraseña: '' })
        }


    }
     const volverAtras = ()=>
     {
        history.goBack()
     }

    return (
        <Fragment>
            <HeaderUsuario></HeaderUsuario>
            <br></br>
            <div style={{ display: 'flex', justifyContent: "flex-end", marginRight: '20px' }}>
                <Button onClick={volverAtras}
                    style={{ background: '#ffffff', color:'blue' }} >
                   Volver
                </Button>
            </div>
            <h4 style={{ textAlign: 'center', margin: '4%' }}>Complete los campos para cambiar su contraseña.</h4>
            {enviado ? <h5 style={{ textAlign: 'center', margin: '4%', color: 'green', textDecoration: 'underline green' }}>
                Si la contraseña actual coincide, se estará actualizando la contraseña.</h5> : ''}
            <div className="ContenedorFormRestablecerContraseña">
                <Form className="formRestablecerContraseña">
                    <div style={{ textAlign: 'center' }}>

                        {validarContraseniasNuevas ? <code>Las contraseñas no son iguales.</code> : ''}
                        {error ? <code>Debes completar todos los campos.</code> : ''}
                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Contraseña actual</Form.Label>
                        <Form.Control name="contraseñaActual" type="password" maxlength="40" placeholder="Ingrese su contraseña actual" onChange={handleChange} value={usuario.contraseñaActual} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Contraseña nueva</Form.Label>
                        <Form.Control name="nuevaContraseña" type="password" maxlength="40" placeholder="Ingrese su nueva contraseña" onChange={handleChange} value={usuario.nuevaContraseña} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Repita la nueva contraseña</Form.Label>
                        <Form.Control name="repitaContraseña" type="password" maxlength="40" placeholder="Vuelva a ingrese su nueva contraseña" onChange={handleChange} value={usuario.repitaContraseña} />
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