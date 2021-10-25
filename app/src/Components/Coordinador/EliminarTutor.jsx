import React, { useState } from 'react';
import { Modal, Row, Col, Container, Button } from 'react-bootstrap'
import { eliminarUsuario } from '../../Servicios/UsuariosServicio';

const EliminarTutor = ({ eliminarTutor, setEliminarTutor, setCallback }) => {
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setEliminarTutor(null)
        setShow(false);
        setCallback(false)
      
    }

    const eliminar = async (id) => {
        await eliminarUsuario(id)
       
        handleClose()
    }

    return (
        <Container>
            <Modal size="sm" show={show}>
                <Modal.Header >
                    <p> Esta seguro de eliminar al usuario</p>

                </Modal.Header>
                <Modal.Body>
                    <p>Nombre:  {eliminarTutor.usuario.nombre}</p>
                    <p>Apellido:  {eliminarTutor.usuario.apellido}</p>
                    <p>Dni:  {eliminarTutor.usuario.dni}</p>

                    <Row>
                        <Col>
                            <Button size="sm" className="guardar" variant="secondary" type="submit" onClick={()=> eliminar(eliminarTutor.usuario.id)}>
                                Eliminar
                                    </Button>
                        </Col>
                        <Col>
                            <Button size="sm" className="cancelar" variant="danger" onClick={handleClose}>
                                Cancelar
                                    </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Container>
    )
}
export default EliminarTutor;