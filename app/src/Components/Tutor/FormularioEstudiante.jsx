import React from 'react'
import { useState } from 'react'
import { Container, Modal, Button, Col, Row, Form } from 'react-bootstrap'
import {InputGroup, FormControl} from 'react-bootstrap'
import uuid from 'uuid/dist/v4';
import SeleccionarCarrera from './SeleccionarCarrera'


const FormularioEstudiante = ({agregarEstudiante}) =>{
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [error, setError] = useState(false);
    const [estudiante, setEstudiante]=useState({
        nombre:"",
        apellido: "",
        dni: "",
        mail: "", 
       // carrera:"",
            
    })
    

    const {nombre, apellido, dni, mail} = estudiante;

    const handleChange = (e) => {
        setEstudiante({
            ...estudiante,
            [e.target.name]: e.target.value,
        }
        )
};
    
    
    const limpiarYCerrar=() =>{
        setEstudiante({
            nombre:"",
            apellido:"",
            dni:"",
            mail:"",
            //carrera:"",
           

        })
    
        setError(false)
        handleClose();

    }

    const submitForm = (e) => {
        e.preventDefault();
    
        // Validar el formulario
            if (nombre.trim() === '' || apellido.trim() === '' || dni.trim() === ''|| mail.trim()===''){
                setError(true);
                return;
            }
    
        // Quitar el mensaje de error
            setError(false);
    
        // Poner un id
            estudiante.id = uuid();
            console.log(estudiante);
    
         // Generar el estudiante
           agregarEstudiante(estudiante);
    
        //Limpiar el form
       setEstudiante({
            
            nombre:"",
            apellido:"",
            dni:"",
            mail:"",
          
           
        })
        setShow(false)
    
    
    };

    console.log(estudiante)
    console.log(error)

    return (
        <Container>

                <Button variant="primary" onClick={handleShow}> 
                    Agregar Estudiante
                </Button>
                <br />
                <br />

                <Modal size="sm" show={show} >

                    <Modal.Header >
                    <Modal.Title>Datos del estudiante</Modal.Title>
                    
                    </Modal.Header>

                    
                    <Modal.Body>

                    {error 
                    ? <p style={{color:"red"}}>Complete todos los campos</p>: <p></p>}
                      
                        <Form  onSubmit={submitForm}>
                             
                                  
                                <SeleccionarCarrera/>
                                 
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Nombre/s:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                                        type="text" 
                                        placeholder="Nombre/s"
                                        name="nombre" 
                                        onChange={handleChange}
                                        value={nombre}
                                    />
                                </InputGroup>                      
                         
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Apellido:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                                        type="text" 
                                        placeholder="Apellido"
                                        name="apellido" 
                                        onChange={handleChange}
                                        value={apellido}
                                    />
                                </InputGroup>
                                              
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Dni:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                                        type="text" 
                                        placeholder="dni"
                                        name="dni" 
                                        onChange={handleChange}
                                        value={dni}
                                    />
                                </InputGroup>
                                                    
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Mail:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                                        type="text" 
                                        placeholder="mail"
                                        name="mail" 
                                        onChange={handleChange}
                                        value={mail}
                                    />
                                </InputGroup>
                                
                                

                                <Row>
                                    <Col>
                                        <Button size="sm" className="guardar" variant="secondary" type="submit" onClick={submitForm}>
                                            Guardar
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button size="sm" className="cancelar" variant="danger" onClick={limpiarYCerrar}>
                                            Cancelar
                                        </Button>
                                    </Col>
                                </Row>
                                

                        </Form>    
                        
                    </Modal.Body>  
                      
                    
                  
                </Modal>
            </Container>
    )
}

export default FormularioEstudiante
