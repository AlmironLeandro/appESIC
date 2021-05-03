import React from 'react'
import { Link } from 'react-router-dom';
import {Button, Form,Row,Col} from 'react-bootstrap'
import { Fragment } from 'react';
import Header from '../HeaderUsuario'
function NuevoProyecto() {
    
    const estiloForm = {
        display:'inline',
        backgroundcolor:'red'

    }
    return (
        <Fragment>
            <Header/>
            <div style={estiloForm}>
        
            <Form >
                <Form.Group as={Row} >
                    <Form.Label column sm="2">
                    Nombre:
                    </Form.Label>
                        <Col sm="3">
                            <Form.Control placeholder="Nombre del proyecto" />
                        </Col>
                </Form.Group>
        
                <Form.Group as={Row} >

                    <Form.Label column sm="2">
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                    </Form.Label>
                    
                   
                </Form.Group>
        
            </Form>
        </div>


            
            <Button className=" btn btn-success buttonSeccion " >
                <Link 
                style={{ textDecoration: 'none' }} to={"/InicioTutor"}>Volver
                </Link>
            </Button>
        </Fragment>
    )
}

export default NuevoProyecto;
