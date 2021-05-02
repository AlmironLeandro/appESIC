import {Form, Button,Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const estilo = {
  display:'flex',
  justifyContent:'center'
}

const Login = () =>
  (
  <div style={estilo}>
    <Form className="login">
          <Col  xs={{ order: 12 }}>
            <Row className="rowLogin number">
              <Form.Group controlId="formBasicNumber">
              <Form.Label>Documento</Form.Label>
              <Form.Control type="number" placeholder="Ingresar documento" />
              </Form.Group>
            </Row>
            <Row className="rowLogin">
              <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresar contraseña" />
              </Form.Group>
            </Row >
            <Link style={{ textDecoration: 'none' }} to={"/InicioTutor"}>
              <Row className="d-flex justify-content-center rowLogin">
                <Button className=" btn btn-success buttonSeccion " type="submit"  > 
                    Iniciar sesion
                </Button>
              </Row>
            </Link>  
          </Col>
    </Form>
  </div>
    
)

export default Login;