import React, { useState } from 'react'
import { Container, Modal, Button, Col, Row, Form, InputGroup, FormControl } from 'react-bootstrap'
import { BsPlusCircle } from 'react-icons/bs'
import { insertarHito } from '../../../Servicios/Hito'


const CrearHito = ({ setCallBack, tiposHito, id }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [error, setError] = useState(false);
    const [hito, sethito] = useState({
        idProyecto: "",
        idTipo: "",
        descripcion: "",
        fechaEntrega: "",
        entregado: "",

    })

    const handleShow = () => {
        setShow(true);
        setCallBack(false)
    }

    //desestructuro hito
    const { idTipo, descripcion, fechaEntrega } = hito;

    //función para setear el valor a cada atributo de hito
    const handleChange = (e) => {
        sethito({
            ...hito,
            [e.target.name]: e.target.value,
        }
        )
    };

    //Función para cerrar y limpiar el formulario
    const limpiarYCerrar = () => {
        sethito({
            idProyecto: "",
            idTipo: "",
            descripcion: "",
            fechaEntrega: "",
        })
        setError(false);
        handleClose();
    }

    //Función para enviar al back el hito
    const submitForm = async (e) => {
        e.preventDefault();

        // Validar el formulario
        if (idTipo.trim() === '' || descripcion.trim() === '' || fechaEntrega.trim() === '') {
            console.log(idTipo)
            console.log(descripcion)
            console.log(fechaEntrega)
            setError(true);
            return;
        }

        // Quitar el mensaje de error
        setError(false);


        //Lamada a la función post con los atributos
        await insertarHito(

            id,
            hito.idTipo,
            hito.descripcion,
            hito.fechaEntrega,
            hito.descripcion,
            hito.entregado = false)

        //Limpiar el form
        sethito({
            idProyecto: "",
            idTipo: "",
            descripcion: "",
            fechaEntrega: "",
        })


        //Función para cerrar el modal
        setCallBack(true)
        setShow(false)


    };



    return (
        <Container>

            <BsPlusCircle
                style={{ float: 'right', marginRight: '20%' }}
                onClick={handleShow}
            />

            <br />

            <Modal size="sm" show={show} >

                <Modal.Header >
                    <Modal.Title>Datos del hito</Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    {error
                        ? <p style={{ color: "red" }}>Complete todos los campos</p> : <p></p>}
                    {hito === undefined ? '' :
                        <Form onSubmit={submitForm}>

                            <InputGroup size="sm" className="mb-3">
                                <select name="idTipo" value={idTipo} onChange={handleChange}>
                                    <option >Seleccionar hito</option>
                                    {tiposHito.map((tiposHito) => <option key={tiposHito.id} value={tiposHito.id}>   {tiposHito.nombre}</option>)}
                                </select>
                            </InputGroup>



                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Descripcion:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="textarea" aria-label="With textarea"
                                    type="text"
                                    placeholder="descripcion"
                                    name="descripcion"
                                    onChange={handleChange}
                                    value={descripcion}
                                />
                            </InputGroup>

                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroup-sizing-sm">Fecha de entrega:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="dd/mm/aaaa"
                                    type="date"
                                    name="fechaEntrega"
                                    onChange={handleChange}
                                    value={fechaEntrega}
                                />
                            </InputGroup>


                            {/* <InputGroup.Text id="inputGroup-sizing-sm">Fecha de entrega:</InputGroup.Text> */}





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
                    }
                </Modal.Body>
            </Modal>
        </Container>
    )
}


export default CrearHito;