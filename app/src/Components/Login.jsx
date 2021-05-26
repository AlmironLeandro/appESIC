import {Form, Button,Col,Row} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {  useState } from 'react';



const estilo = {
  display: 'flex',
  justifyContent: 'center'
}

const Login = () =>
{
  const estilo = {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    height:'90vh'
  }
  

  const [formulario, setFormulario] = useState(
    {
      dni:'',
      contraseña:''
    }
  );
  let dni2 = null;
  let con2 = null;

console.log(formulario.dni, dni2, formulario.contraseña, con2)



// const completarForm = (dni, contraseña) => (
//   setFormulario({dni:dni, contraseña:contraseña})
// )
 return (
  <div style={estilo} > 
    <div>
      <Form className="login">
            <Col  xs={{ order: 12 }}>
              <Row className="rowLogin number">
                <Form.Group controlId="formBasicNumber">
                  <Form.Label  >Documento</Form.Label>
                  <Form.Control  onChange={e => dni2=e.target.value} type="number" placeholder="Ingresar documento" />
                </Form.Group>
              </Row>
              <Row className="rowLogin">
                <Form.Group controlId="formBasicPassword" >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control onChange={e => con2=e.target.value} type="password" placeholder="Ingresar contraseña" />
                </Form.Group>
              </Row >
              <Link >
                <Row className="d-flex justify-content-center rowLogin">
                  <Button className=" btn btn-success buttonSeccion " type="submit" onClick={console.log(formulario.dni, dni2, formulario.contraseña, con2)}  > 
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