import React from 'react'
import { Fragment, useState, useEffect } from 'react'
import { Container, Modal, Button, Col, Row, Form } from 'react-bootstrap'
import HeaderUsuario from '../HeaderUsuario'
import VolverMenu from './VolverMenuTutor';
import {InputGroup, FormControl} from 'react-bootstrap'
import uuid from 'uuid/dist/v4';

const CargaEstudiante=()=> {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    let estudiantesIniciales = JSON.parse(localStorage.getItem('estudiantes'));
        if (!estudiantesIniciales){
            estudiantesIniciales=[]
    };


    const [estudiantes, setEstudiantes] = useState(estudiantesIniciales);

    // Hook useEffect sirve para ejecutar cosas cuando está todo listo
    // o cuando cambia el estado
    
    useEffect(() => {
      if (estudiantesIniciales) {
        localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
      }else{
        localStorage.setItem('estudiantes', JSON.stringify([])); 
      }
    }, [estudiantesIniciales]);
    
    // Función que toma el estudiante nuevo y lo mete en el array de estudiantes
    
    const agregarEstudiante = (estudiante) => {
        setEstudiantes([
          ...estudiantes,
          estudiante
        ])
    };

    const borrarEstudiante = (id) => {
        const nuevosEstudiantes = estudiantes.filter (estudiante => estudiante.id !== id);
        setEstudiantes(nuevosEstudiantes);
      };
      

    
    
    const [error, setError] = useState(false);
    const [estudiante, setEstudiante]=useState({
        nombre:"",
        apellido: "",
        dni: "",
        mail: "",        
    })

    const {nombre, apellido, dni, mail} = estudiante;

    const handleChange = (e) => {
        setEstudiante({
            ...estudiante,
            [e.target.name]: e.target.value,
        }
        )
};

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
            mail:""

        })
    
    
    };

    console.log(estudiante)
    console.log(estudiantesIniciales)
    console.log(error)
    
   

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
                        {   error
                            ? <h1 >Complete todos los campos</h1>
                            : null
                        }
                            
                        
                        <Form  onSubmit={submitForm}>
                           
                               
                                <InputGroup size="sm" className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Nombre/s:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                                        type="text" 
                                        placeholder="nombre"
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
                                    <Button size="sm" className="guardar" variant="secondary" type="submit" onClick={handleClose}>
                                        Guardar
                                    </Button>
                                </Col>
                                <Col>
                                    <Button size="sm" className="cancelar" variant="danger" onClick={handleClose}>
                                        Cancelar
                                    </Button>
                                </Col>
                    </Row>
                                

                        </Form>    
                        
                    </Modal.Body>  
                      
                    
                  
                </Modal>
            </Container>
            <VolverMenu/> 
           


        </Fragment>
       
    )
}

export default CargaEstudiante
