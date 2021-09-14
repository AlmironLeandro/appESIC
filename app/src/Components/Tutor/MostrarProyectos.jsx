import { Modal, Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom';


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

          <h5>{"Materia: " + props.materia}</h5>
          <h5>{"Nombre del proyecto: " + props.nombreProyecto}</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ display: 'inline-block' }}>Alumnos:  </h4>
        {props.alumnos.map((est) => <p >{"" + est.nombre + "  "}{"  " + est.apellido + "  "}{"  " + est.dni + "  "}</p>)}
        <h4>Descripción</h4>
        <p>
          {props.descripcion}
        </p>
      </Modal.Body>
      <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary" onClick={props.onHide}>
          <Link style={{ textDecoration: 'none', color: 'white' }} to={{
            pathname: `/Proyecto/${props.idProyecto}`
          }} >Entrar</Link></Button>

        <Button variant="secondary" onClick={props.onHide}>Editar</Button>
        <Button variant="danger" onClick={props.onHide}>Eliminar</Button>
      </Modal.Footer>
    </Modal>
  );
}

const MostrarProyectos = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* BUSCAR COMO PASAR PROYECTO */}


      <Button variant="light" onClick={() => setModalShow(true)}>
        +info
      </Button>


      <MyVerticallyCenteredModal
        materia={props.proyecto.materia.nombre}
        descripcion={props.proyecto.proyecto.descripcion}
        alumnos={props.proyecto.alumnos}
        nombreProyecto={props.proyecto.proyecto.nombre}
        idProyecto={props.proyecto.proyecto.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default MostrarProyectos;