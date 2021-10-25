import React, { useState } from 'react'
import { insertarCarrera } from '../../Servicios/Carrera'
import { Container, Modal, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'

const CrearCarrera = (props) => {
    const [show, setShow] = useState(true);
    const [carrera, setCarrera] = useState({ nombre: "" })
    const handleClose = () => setShow(false);
    const [error, setError] = useState(false);

    const submitForm = async () => {
        if (carrera.nombre.trim() === '') {
            setError(true);
            return;
        }
        await insertarCarrera(


            carrera.nombre,

        )

        handleClose()
        props.setCallback(false)
        props.avisoCalback(false)

    }

    const cerrarModal = () => {

        handleClose()
        props.setCallback(false)
        props.avisoCalback(false)
    }

    const handleChange = (e) => {
        setCarrera({
            ...carrera,
            [e.target.name]: e.target.value,
        }
        )
    };
    return (

        <Container>



            <Modal size="sm" show={show} >
                <Modal.Header>
                    <p>Crear nueva carrera</p>
                    
                </Modal.Header>
                {error
                        ? <p style={{ color: "red", textAlign:"center" }}>Complete todos los campos</p> : <p></p>}
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
                            value={carrera.nombre}
                            maxlength="34"
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

export default CrearCarrera;