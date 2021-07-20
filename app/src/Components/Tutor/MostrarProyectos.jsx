import { Modal,Button}from 'react-bootstrap'
import EditIcon from '@material-ui/icons/Edit';
import React from 'react'


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          
        <h5>{props.materia +" - "+ props.nombreProyecto}</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{display:'inline-block'}}>Alumnos:  </h4>
        {props.alumnos.map((est)=> <p >{""+est.nombre+"  "}{"  "+est.apellido+"  "}{"  "+est.dni+"  "}</p>)}
        <h4>Descripción</h4>
        <p>
          {props.descripcion}
        </p>
      </Modal.Body>
      <Modal.Footer style={{display:'flex',justifyContent:'center'}}>
        <Button variant="primary"  onClick={props.onHide}>Entrar</Button>
        <Button variant="secondary" onClick={props.onHide}>Editar</Button>
      </Modal.Footer>
    </Modal>
  );
}

const MostrarProyectos = (props)=> {
  const [modalShow, setModalShow] = React.useState(false);
console.log(props.proyecto)
  return (
    <>
      <Button variant="light" onClick={() => setModalShow(true)}>
        +info
      </Button>
      
      <MyVerticallyCenteredModal
        materia={props.proyecto.materia.nombre}
        descripcion={props.proyecto.proyecto.descripcion}
        alumnos={props.proyecto.alumnos}
        nombreProyecto={props.proyecto.proyecto.nombre}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default MostrarProyectos;