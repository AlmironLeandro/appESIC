import React from 'react'
import { Fragment, useState } from 'react'
import { Container, Modal, Button, Col, Row, Form } from 'react-bootstrap'
import HeaderUsuario from '../HeaderUsuario'
import VolverMenu from './VolverMenuTutor';
import {InputGroup, FormControl} from 'react-bootstrap'

const CargaEstudiante=()=> {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [form, setForm]=useState({
        nombre:null
        
    })

 



    console.log(form.nombre);
   

    return (
        <Fragment>
            <HeaderUsuario/>
            <br/>
                    
            <Container>

                <Button variant="primary" onClick={handleShow}> 
                    Agregar Estudiante
                </Button>
                

                <Modal size="sm" show={show} >

                    <Modal.Header >
                    <Modal.Title>Datos del estudiante</Modal.Title>
                    </Modal.Header>

                    
                    <Modal.Body>
                    
                        <Fragment>
                           
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text  id="inputGroup-sizing-sm">Nombre/s:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-lg"
                                        tipe="text"
                                        name="nombre" 
                                       
                                        
                                        
                                        
                                    />
                                </InputGroup>                         
                         
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Apellido:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                              
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Dni:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                                                    
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Mail:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                </InputGroup>
                    

                            
                        </Fragment>
                    </Modal.Body>  
                      
                    <Row>
                        <Col>
                            <Button size="sm" className="guardar" variant="secondary" tipe="submit" onClick={handleClose}>
                                Guardar
                            </Button>
                        </Col>
                        <Col>
                            <Button size="sm" className="cancelar" variant="danger" onClick={handleClose}>
                                Cancelar
                            </Button>
                        </Col>
                    </Row>
                  
                </Modal>
            </Container>
            <VolverMenu/> 
           


        </Fragment>
       
    )
}

export default CargaEstudiante
