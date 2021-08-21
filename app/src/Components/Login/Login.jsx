import React,{useState,useEffect} from 'react';
import {Form, Button,Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {login} from '../../Servicios/UsuariosServicio'


const Login = () =>
{
  const estilo = {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    height:'90vh'
  }

  const [usuario,setUsuario]=useState({dni:'',pass:''})
  const {dni,pass}=usuario
  const validarIngreso = async ()=>
  {
    const lean = await login(dni,pass)
    if(lean !== undefined){
      logout(lean.token,lean.nombre,lean.id,lean.idRol)
    
      console.log("es valido")
    }
    else
    {
      console.log("No es valido")
    }
    
  }
 

  
  const handleChange = (e) => {
    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value,
    }
    )
};
  const logout = (token,idRol,id,nombre) => {
    localStorage.setItem('token', token)
    localStorage.setItem('nombre',nombre);
    localStorage.setItem('id',id);
    localStorage.setItem('idRol',idRol);
  }

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
              <Link style={{textDecoration: 'none'}} to={"/Usuario/2"}>
                  <Row className="d-flex justify-content-center rowLogin">
                    <Button className=" btn btn-success buttonSeccion " 
                    type="submit"  onClick={validarIngreso}  > 
                        Iniciar sesion
                    </Button>
                  </Row>
                </Link> 
                
              
                 
            </Col>
      </Form>
       
    </div>  
  </div>
    )
  }

export default Login;