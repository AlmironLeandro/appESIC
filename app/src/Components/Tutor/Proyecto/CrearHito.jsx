import React, { useState, useEffect } from 'react'
import { Container, Modal, Button, Col, Row, Form, InputGroup, FormControl } from 'react-bootstrap'
import { BsPlusCircle } from 'react-icons/bs'
import { traerCarreras } from '../../../Servicios/Carrera'
import { insertarUsuario } from '../../../Servicios/UsuariosServicio'
import Calendar from 'react-calendar';

const CrearHito = (props) => {
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
    const [carreras, setCarreras] = useState([])

    const handleShow = () => {
        setShow(true);

    }

    //useEffect para traer las carreras y las guarda 
    useEffect(() => {
        traerCarreras().then(res => setCarreras(res))
    }, [])

    //desestructuro hito
    const { idProyecto, idTipo, descripcion, fechaEntrega, tipoDeHito } = hito;

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
    const submitForm = (e) => {
        e.preventDefault();

        // Validar el formulario
        if (idProyecto.trim() === '' || idTipo.trim() === '' || descripcion.trim() === '' || fechaEntrega.trim() === '') {
            setError(true);
            return;
        }

        // Quitar el mensaje de error
        setError(false);


        //Lamada a la función post con los atributos
        insertarUsuario(
            hito.idProyecto,
            hito.idTipo,
            hito.descripcion,
            hito.fechaEntrega,
            hito.descripcion,
            1,
            hito.idCarrera)

        //Limpiar el form
        sethito({
            idProyecto: "",
            idTipo: "",
            descripcion: "",
            fechaEntrega: "",
        })


        //Función para cerrar el modal

        setShow(false)

    };

    const [fecha, setFecha] = useState(new Date());
    const actualizarFecha = (fecha) => {
        setFecha(fecha);
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
                    {carreras === undefined ? '' :
                        <Form onSubmit={submitForm}>

                            <InputGroup size="sm" className="mb-3">
                                <select name="tiposHito" value={tipoDeHito} onChange={handleChange}>
                                    <option >Seleccionar carrera</option>
                                    {props.tiposHito.map((tiposHito) => <option key={tiposHito.id} value={tiposHito.id}>   {tiposHito.nombre}</option>)}
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

                                {/* <InputGroup.Text id="inputGroup-sizing-sm">Fecha de entrega:</InputGroup.Text> */}
                                <Calendar onChange={actualizarFecha} value={fecha} />
                                <p>{fecha.toString()}</p>


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
                    }
                </Modal.Body>
            </Modal>
        </Container>
    )
}


export default CrearHito;