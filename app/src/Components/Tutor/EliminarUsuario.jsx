
import React, {useState} from 'react';
import { Modal, Row, Col, Container, Button} from 'react-bootstrap'
import { eliminarUsuario } from '../../Servicios/UsuariosServicio';


const EliminarUsuario = ({setCargaEstudiante, alumnoAEliminar, setEliminar})=>{
    const [show, setShow] = useState(true);
    const  handleClose = () => {
        setEliminar(null)
        setShow(false);
    }
    

    const eliminar =   () => {
        eliminarUsuario(alumnoAEliminar.usuario.id)
        console.log( alumnoAEliminar.usuario.apellido)
        console.log( alumnoAEliminar.usuario.id)
        //setCargaEstudiante(true)
        handleClose()

    }
    //console.log(alumnoAEliminar.usuario.id)
    

    return(
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
export default EliminarUsuario;