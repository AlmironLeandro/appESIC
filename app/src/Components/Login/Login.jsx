import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { login } from '../../function/pantallaLogin'
import { serviceLogin } from '../../Servicios/UsuariosServicio'



const Login = () => {
  const estilo = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh'
  }
  useEffect(() => {

  }, [])
  const [usuario, setUsuario] = useState({ dni: '', pass: '' })
  const [error, setError] = useState(false)
  const history = useHistory();

  const validarIngreso = async (e) => {
    e.preventDefault();
    const res = await serviceLogin(usuario.dni, usuario.pass)
    if (res) {
      setError(false)
      login(res.token, res.idRol, res.id, res.nombre)
      // if(parent(res.idRol)  === 3)
      // {
      //   localStorage.setItem('isAcceptado',"si");
      // }
      history.push(`/Usuario/${res.idRol}`)

      
    }
    else {
      setUsuario({ dni: '', pass: '' })
      setError(true)
    }
  }

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    }
    )
  };
  
  return (
    <div style={estilo} >
      <div>

        <Form className="login">

          <Col xs={{ order: 12 }}>
            <Row className="rowLogin number">

              <Form.Group controlId="formBasicNumber">
                <Form.Label  >Documento</Form.Label>
                
                <Form.Control value={usuario.dni} name="dni" type="number" placeholder="Ingresar documento" onChange={handleChange} />
              </Form.Group>
            </Row>
            <Row className="rowLogin">
              <Form.Group controlId="formBasicPassword" >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control onChange={handleChange} name="pass" value={usuario.pass} type="password" placeholder="Ingresar contraseña" />
              </Form.Group>
            </Row >
            {/* <Link style={{textDecoration: 'none'}} to={"/Usuario/2"}> */}
            <Row className="d-flex justify-content-center rowLogin">
            {error ? <p style={{ color: 'red', textAlign: 'center', fontSize: '15px' }}> El usuario y/o contraseña es incorrecto </p> : null}
              <Button className=" btn btn-success buttonSeccion "
                type="submit" onClick={validarIngreso}  >
                Iniciar sesion
              </Button>

            </Row>
            {/* </Link>  */}



          </Col>
          
        </Form>

      </div>
    </div>
  )
}

export default Login;