import React, { useState } from 'react';
import { Modal, Row, Col, Container, Button } from 'react-bootstrap'
import { eliminarUsuario } from '../../Servicios/UsuariosServicio';

const EliminarTutor = ({ setCargaEstudiante, alumnoAEliminar, setAlumnoAEliminar }) => {
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setAlumnoAEliminar(null)
        setShow(false);
        setCargaEstudiante(false)
    }

    const eliminar = async () => {
        await eliminarUsuario(alumnoAEliminar.usuario.id)
        setCargaEstudiante(true)
        handleClose()
    }

    return (
        <Container>
            <Modal size="sm" show={show}>
                <Modal.Header >
                    <p> Esta seguro de eliminar al usuario</p>

                </Modal.Header>
                <Modal.Body>
                    <p>Nombre:  {alumnoAEliminar.usuario.nombre}</p>
                    <p>Apellido:  {alumnoAEliminar.usuario.apellido}</p>
                    <p>Dni:  {alumnoAEliminar.usuario.dni}</p>

                    <Row>
                        <Col>
                            <Button size="sm" className="guardar" variant="secondary" type="submit" onClick={eliminar}>
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