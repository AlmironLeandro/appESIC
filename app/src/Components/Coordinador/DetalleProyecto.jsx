import React, { useState, useEffect } from 'react'
import { Container, Modal, Button, Col, InputGroup, FormControl } from 'react-bootstrap'

function DetalleProyecto({ setDetalle, proyecto }) {

    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        setDetalle(false)
    }
    const [alumnos, setAlumnos] = useState([])

    useEffect(() => {
        const estudiantes = () => {
            const sortedList = [...proyecto.alumnos].sort((a, b) => (a.apellido.toLowerCase() > b.apellido.toLowerCase() ? 1 : a.apellido.toLowerCase() < b.apellido.toLowerCase() ? -1 : 0))
            setAlumnos(sortedList)

        }

        estudiantes()
    }, [])


    return (
        <Container>
            <Modal size="sm" show={show} >
                <Modal.Header>
                    <h4>Información del proyecto</h4>
                </Modal.Header>
                {alumnos === undefined || alumnos.length === 0 ? '' :
                    <Modal.Body>
                        <Modal.Body>
                            <h6>{"Tutor/a: " + proyecto.tutor.nombre + " " + proyecto.tutor.apellido}</h6>
                            <hr></hr>
                            <h6>{"Materia: " + proyecto.materia.nombre}</h6>
                            <hr></hr>
                            <div style={{ textAlign: 'center' }}>
                                <h6 style={{ display: 'inline-block' }}>Estudiantes</h6>
                            </div>
                            {alumnos.map((est) => <p >{"" + est.nombre + "  "}{"  " + est.apellido + "  "}</p>)}
                        </Modal.Body>
                        <Col>
                            <div style={{ textAlign: 'center' }} >
                                <Button size="sm" className="cancelar" variant="danger" onClick={handleClose}>
                                    Cerrar
                                </Button>
                            </div>
                        </Col>

                    </Modal.Body>
                }
            </Modal>
        </Container>
    )
}

export default DetalleProyecto
