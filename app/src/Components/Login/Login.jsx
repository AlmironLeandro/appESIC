import React,{useState} from 'react';
import {Form, Button,Col,Row} from 'react-bootstrap'
import {useHistory } from 'react-router-dom';
import {login} from '../../function/pantallaLogin'
import {serviceLogin} from '../../Servicios/UsuariosServicio'


const Login = () =>
{
  const estilo = {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    height:'90vh'
  }
  const [usuario,setUsuario]=useState({dni:'',pass:''})
  const history = useHistory();
  
  const validarIngreso = async  (e)=>
  {
    e.preventDefault();
    await serviceLogin(usuario.dni,usuario.pass).then(res =>
    login(res.token,res.idRol,res.id,res.nombre))
    history.push(`/Usuario/${localStorage.getItem('idRol')}`)  
    
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
            <Col  xs={{ order: 12 }}>
              <Row className="rowLogin number">
                <Form.Group controlId="formBasicNumber">
                  <Form.Label  >Documento</Form.Label>
                  <Form.Control value={usuario.dni} name="dni" type="number" placeholder="Ingresar documento" onChange={handleChange}/>
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
                    <Button className=" btn btn-success buttonSeccion " 
                      type="submit"  onClick={validarIngreso}  > 
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