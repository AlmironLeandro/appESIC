import React, { useState } from 'react'
import { Container, Modal, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import { editarUsuario } from '../Servicios/UsuariosServicio';



const EditarEstudiante = ({ estudiante,  setCargaEstudiante }) => {
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        setCargaEstudiante(false)
    }    

const [alumno, setAlumno] = useState({
    nombre : estudiante.usuario.nombre,
    apellido : estudiante.usuario.apellido,
    dni : estudiante.usuario.dni,
    mail : estudiante.usuario.email,
})
    

const {nombre, apellido, dni, mail} = alumno;
    
const submitForm = async () => {
    await editarUsuario (
        estudiante.usuario.id,
        nombre, 
        apellido, 
        dni, 
        mail, 
        // estudiante.usuario.pass, 
        estudiante.usuario.idRol,
        estudiante.usuario.idCarrera
        )
        setCargaEstudiante(true)
        handleClose()
        
   
} 

const cerrarModal =() => {
  
    handleClose()
} 

const handleChange = (e) => {
    setAlumno({
        ...alumno,
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
                                    defaultValue = {nombre}
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
                                    defaultValue = {apellido}
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
                                    defaultValue = {dni}
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
                                    defaultValue = {mail}
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

