import React, { useState } from 'react'
import { Container, Modal, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import { editarUsuario } from '../../Servicios/UsuariosServicio';

const EditarEstudiante = ({ estudiante, setEstudiante }) => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);


const {nombre, apellido, dni, mail, Carrera} = estudiante;
    
const submitForm = () => {
    setEstudiante(null)
    editarUsuario(
        estudiante.usuario.id,
        nombre, 
        apellido, 
        dni, 
        mail, 
      //  estudiante.usuario.pass, 
      //  estudiante.usuario.idRol, 
      //  estudiante.usuario.idCarrera
      )
    handleClose()
} 

const cerrarModal =() => {
    setEstudiante(null)
    handleClose()
} 

const handleChange = (e) => {
    setEstudiante({
        ...estudiante,
        [e.target.name]: e.target.value,
    }
    )
};

    return (

        <Container>
            
           
            <Modal size="sm" show={show} >
                <Modal.Header>
                    <p>Editar usuario</p>
                </Modal.Header>
                <Modal.Body>
                
                    
                    <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Nombre/s:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                                    type="text" 
                                    defaultValue = {estudiante.usuario.nombre}
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
                                    defaultValue = {estudiante.usuario.apellido}
                                    name="apellido" 
                                    onChange={handleChange}
                                    value={apellido}
                                />
                    </InputGroup> 
                    <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">DNI:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                                    type="text" 
                                    defaultValue = {estudiante.usuario.dni}
                                    name="dni" 
                                    onChange={handleChange}
                                    value={dni}
                                />
                    </InputGroup> 
                    <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">mail:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                                    type="text" 
                                    defaultValue = {estudiante.usuario.email}
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

export default EditarEstudiante

