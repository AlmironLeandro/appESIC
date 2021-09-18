import { Modal, Button } from 'react-bootstrap'
import { eliminarProyecto} from '../../Servicios/ProyectoServicio'

const ModalEstaSeguro =  (props) => {

    const botonEliminarProyecto = async (id) => {
      await eliminarProyecto(id)
    }
  
    return (
      <Modal
      {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Body> 
            <h4  style={{textAlign:'center'}}> Esta seguro de que quiere eliminar el proyecto:<code> {props.nombreProyecto}</code></h4>
          </Modal.Body>
          <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="danger" onClick={() => [botonEliminarProyecto(props.idProyecto), alert(`Se ha eliminado el proyecto  ${props.nombreProyecto}`),props.onHide()]} >Confirmar</Button>
            <Button variant="secondary" onClick={() => props.onHide()} >Cancelar</Button>
          </Modal.Footer>
      </Modal>
    )
  
  
  }
  

  export default ModalEstaSeguro