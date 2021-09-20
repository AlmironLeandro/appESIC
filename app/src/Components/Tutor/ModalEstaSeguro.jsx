import { Modal, Button } from 'react-bootstrap'
import { eliminarProyecto } from '../../Servicios/ProyectoServicio'

const ModalEstaSeguro = (props) => {

  const botonEliminarProyecto = async (id,nombre) => {
    await eliminarProyecto(id,nombre)
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Body>
        <h4 style={{ textAlign: 'center' }}> Esta seguro de que quiere eliminar el proyecto:<code> {props.nombreProyecto}</code></h4>
      </Modal.Body>
      <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="danger" onClick={() => [botonEliminarProyecto(props.idProyecto,props.nombreProyecto), props.onHide(),
        props.setCallBack(props.callBack === true ? false : true)]} >Confirmar</Button>
        <Button variant="secondary" onClick={() => props.onHide()} >Cancelar</Button>
      </Modal.Footer>
    </Modal>
  )


}


export default ModalEstaSeguro