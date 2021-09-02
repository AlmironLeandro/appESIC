import React, { useState } from 'react'
import {insertarMateria} from '../../Servicios/Materia'
import { Container, Modal, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
const CrearMateria = (props) => {
    const [show, setShow] = useState(true);
    const [materia,setMateria]=useState({nombre:""})
    const handleClose = () => setShow(false);
    const submitForm = async () => {
      await  insertarMateria(
            
           
            materia.nombre, 
            
          )
        
        handleClose()
        props.avisoCalback(false)
       
    } 
    
    const cerrarModal =() => {
       
        handleClose()
        props.avisoCalback(false)
    } 
    
    const handleChange = (e) => {
        setMateria({
            ...materia,
            [e.target.name]: e.target.value,
        }
        )
    };
    return (

        <Container>



            <Modal size="sm" show={show} >
                <Modal.Header>
                    <p>Crear nueva Materia</p>
                </Modal.Header>
                <Modal.Body>


                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Nombre/s:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            onChange={handleChange}
                            value={materia.nombre}
                        />
                    </InputGroup>
                    
                    <Row>
                        <Col>
                            <Button size="sm" className="guardar" variant="secondary" type="submit" onClick={submitForm}>
                                Guardar
                            </Button>
                        </Col>
                        <Col>
                            <Button size="sm" className="cancelar" variant="danger" onClick={cerrarModal}>
                                Cancelar
                            </Button>
                        </Col>
                    </Row>

                </Modal.Body>

            </Modal>

        </Container>

    )
}

export default CrearMateria;