import React, { useState } from 'react'
import { Container, Modal } from 'react-bootstrap'

const EditarEstudiante = ({ estudiante }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (

        <Container>
           
            <Modal size="sm" show={show}>
                <Modal.Header>
                    <p>hola</p>
                </Modal.Header>
                <Modal.Body>
                    <p>nombre: {estudiante.carrera.nombre}</p>
                    {console.log('datosdelestudiante')}
                    {console.log(estudiante)}

                </Modal.Body>

            </Modal>
        </Container>

    )
}

export default EditarEstudiante

