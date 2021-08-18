import {Form, Button,Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Login = () =>
{
  const estilo = {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    height:'90vh'
  }
  const ruta = (id) =>{}

 return (
  <div style={estilo} > 
    <div>
      <Form className="login">
            <Col  xs={{ order: 12 }}>
              <Row className="rowLogin number">
                <Form.Group controlId="formBasicNumber">
                  <Form.Label  >Documento</Form.Label>
                  <Form.Control  type="number" placeholder="Ingresar documento" />
                </Form.Group>
              </Row>
              <Row className="rowLogin">
                <Form.Group controlId="formBasicPassword" >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control  type="password" placeholder="Ingresar contraseña" />
                </Form.Group>
              </Row >
              <Link style={{textDecoration: 'none'}} to={"/Usuario/2"}>
                <Row className="d-flex justify-content-center rowLogin">
                  <Button className=" btn btn-success buttonSeccion " type="submit"   > 
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