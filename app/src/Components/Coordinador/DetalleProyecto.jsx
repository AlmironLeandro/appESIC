import React, { useState } from 'react'
import { Container, Modal, Button, Col, InputGroup, FormControl } from 'react-bootstrap'

function DetalleProyecto({ setDetalle, proyecto }) {

    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        setDetalle(false)
    }

    return (
        <Container>
            {console.log(proyecto)}
            <Modal size="sm" show={show} >
                <Modal.Header>
                    <p>Información del proyecto</p>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Materia:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                            defaultValue={`${proyecto.tutor.nombre} ${proyecto.tutor.apellido}`}
                        />
                    </InputGroup>

                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Tutor/a:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                            defaultValue={proyecto.materia.nombre}
                        />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Estudiantes:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                            defaultValue={`${proyecto.alumnos[0].nombre} ${proyecto.alumnos[0].apellido} `}
                        />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Hitos:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
                            defaultValue={proyecto.materia.nombre}
                        />
                    </InputGroup>


                    <Col>
                        <Button size="sm" className="cancelar" variant="danger" onClick={handleClose}>
                            Cancelar
                </Button>
                    </Col>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default DetalleProyecto
