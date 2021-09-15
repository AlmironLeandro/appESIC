import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap'
import React,{useState,useEffect} from 'react'
import Selector from './Proyecto/Selector';
import { Link } from 'react-router-dom';
function Editar(props) {
      // Aca comienza todo sobre materia/s
      const [materia, setMateria]=useState() 
      const cambiarMateria= e=> {e.preventDefault(); setMateria(e.target.value)}
      const [materias, setMaterias]=useState([]) 
          // Aca comienza todo sobre carrera/s
    const [carrera, setCarrera]=useState([]) 
    const cambiarCarrera= e=> {e.preventDefault(); setCarrera(e.target.value)}
    const [carreras, setCarreras]=useState([]) 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton >
        {/* <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>

        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Nombre del proyecto:</InputGroup.Text>
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" defaultValue ={props.nombreProyecto} />
        </InputGroup>

        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Descripción:</InputGroup.Text>
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" defaultValue={props.descripcion} />
        </InputGroup>

        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div ><Selector name={"carreras"} values={carreras} value={carrera} onclick={cambiarCarrera} />
        </div>
        <div ><Selector name={"materias"} values={materias} value={materia} onclick={cambiarMateria}  />
        </div>
        </div> */}

      </Modal.Body>
      <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="primary" onClick={props.onHide}> Guardar</Button>

      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton >
        {/* <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h5>{"Materia: " + props.materia}</h5>
        <h5>{"Nombre del proyecto: " + props.nombreProyecto}</h5>
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

        <Button variant="secondary" onClick={props.editar}>Editar</Button>
        <Button variant="danger" onClick={props.onHide}>Eliminar</Button>
      </Modal.Footer>
    </Modal>
  );
}

const MostrarProyectos = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowEditar, setModalShowEditar] = React.useState(false);
  const editar = () => (setModalShowEditar(true), setModalShow(false))




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
        editar={editar}
        onHide={() => setModalShow(false)}
      />
      <Editar
        materia={props.proyecto.materia.nombre}
        descripcion={props.proyecto.proyecto.descripcion}
        alumnos={props.proyecto.alumnos}
        nombreProyecto={props.proyecto.proyecto.nombre}
        idProyecto={props.proyecto.proyecto.id}
        show={modalShowEditar}
        editar={editar}
        onHide={() => setModalShowEditar(false)}
      />
    </>
  );
}

export default MostrarProyectos;