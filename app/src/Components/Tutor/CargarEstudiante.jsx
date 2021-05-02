import HeaderUsuario from '../HeaderUsuario'
import {Form, Row,Col, Button} from 'react-bootstrap'
import { Fragment } from 'react';
import { Link } from 'react-router-dom';



const CargarEstudiantes = ()=>
{
    const estiloForm = {
        display:'inline',
        backgroundcolor:'red'

    }
    return(
        <Fragment>
        <HeaderUsuario/>
    <div style={estiloForm}>
        
    <Form style={{
        
    }}>
        <Form.Group as={Row} >
            <Form.Label column sm="1">
            Nombre/s:
            </Form.Label>
                <Col sm="3">
                    <Form.Control placeholder="Nombre/s" />
                </Col>
        </Form.Group>

        <Form.Group as={Row} >
            <Form.Label column sm="1">
            Apellido:
            </Form.Label>
            <Col sm="3">
                <Form.Control  placeholder="Apellido" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} >
            <Form.Label column sm="1">
            Dni:
            </Form.Label>
            <Col sm="3">
                <Form.Control  placeholder="Dni" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} >
            <Form.Label column sm="1">
            Mail:
            </Form.Label>
            <Col sm="3">
                <Form.Control  placeholder="Mail" />
            </Col>
        </Form.Group>
    </Form>
    </div>
    <Button className=" btn btn-success buttonSeccion " type="submit"  > 
       Guardar
        </Button>
        <Button className=" btn btn-success buttonSeccion " type="submit"  > 
        <Link 
                                    style={{ textDecoration: 'none' }} to={"/InicioTutor"}>Volver</Link>
        </Button>
    </Fragment>
    )
}

export default CargarEstudiantes;