import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap'
import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom';
import { editarProyecto } from '../../Servicios/ProyectoServicio'
import ModalEstaSeguro from './ModalEstaSeguro'







const Editar = (props) => {
console.log(props.alumnos)
  const [proyecto, setProyecto] = useState({
    nombre: props.nombreProyecto,
    descripcion: props.descripcion
  })
  const handleChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    }
    )


  };
  const { nombre, descripcion } = proyecto;


  const submitForm = async (e) => {
    console.log(props.alumnos)
    e.preventDefault()
    await editarProyecto(
      props.idProyecto,
      nombre,
      descripcion,
      props.idMateria,
      props.idTutor,
      props.fechaInicio,
      props.fechaFin,
      props.alumnos
    )




  }


  return (
    <Fragment>
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
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
              name="nombre"
              onChange={handleChange}
              value={nombre}
              defaultValue={nombre} />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Descripción:</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"
              name="descripcion"
              onChange={handleChange}
              value={descripcion}
              defaultValue={descripcion} />
          </InputGroup>

        </Modal.Body>
        <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="primary" onClick={(e) => [submitForm(e), props.onHide(),
          props.setCallBack(true),
          props.setCallBack(props.callBack === true ? false : true)]}> Guardar</Button>
        </Modal.Footer>
      </Modal>

    </Fragment>
  );
}



function ModalMostrarProyecto(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
        <h5>{"Proyecto: " + props.nombreProyecto}</h5>
        </Modal.Title> 
      </Modal.Header>
      <Modal.Body>
        <h5>{"Materia: " + props.materia}</h5>
        <h4 style={{ display: 'inline-block' }}>Alumnos:  </h4>
        {props.alumnos.map((est) => <p >{"" + est.nombre + "  "}{"  " + est.apellido + "  "}{"  " + est.dni + "  "}</p>)}
        <h4>Descripción</h4>
        <p>
          {props.descripcion}
        </p>
      </Modal.Body>
      <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
      {localStorage.getItem("idRol") === '2' ?
        <Button variant="primary" onClick={props.onHide}>
          
          <Link style={{ textDecoration: 'none', color: 'white' }} to={{
            pathname: `/Proyecto/${props.idProyecto}`
          }} >Hitos</Link></Button>
          :
          <Button variant="primary" onClick={props.onHide}>
          
          <Link style={{ textDecoration: 'none', color: 'white' }} to={{
            pathname: `/tutorCoordinador/Proyecto/${props.idProyecto}`
          }} >Hitos</Link></Button>
        }

        {/* <Button variant="secondary" onClick={props.edit}>Editar proyecto</Button> */}
        {/* <Button variant="danger" onClick={props.eliminar}>Eliminar proyecto</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

const MostrarProyectos = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowEditar, setModalShowEditar] = React.useState(false);
  const [modalShowEliminar, setModalShowEliminar] = useState(false);
  const edit = () => (setModalShowEditar(true), setModalShow(false))
  const eliminar = () => (setModalShow(false), setModalShowEliminar(true))




  return (
    <Fragment>
      {/* BUSCAR COMO PASAR PROYECTO */}

    {console.log(props.proyecto)}
      <Button variant="light" onClick={() => setModalShow(true)}>
        +info
      </Button>


      <ModalMostrarProyecto
        materia={props.proyecto.materia.nombre}
        descripcion={props.proyecto.proyecto.descripcion}
        alumnos={props.proyecto.alumnos}
        nombreProyecto={props.proyecto.proyecto.nombre}
        idProyecto={props.proyecto.proyecto.id}
        show={modalShow}
        edit={edit}
        onHide={() => setModalShow(false)}
        eliminar={eliminar}
      />
      {/* PODER ELIMINAR O PASARLE LISTA NUEVA DE ESTUDIANTES */}
      <Editar
        nombreProyecto={props.proyecto.proyecto.nombre}
        descripcion={props.proyecto.proyecto.descripcion}
        idMateria={props.proyecto.materia.id}
        idTutor={props.proyecto.tutor.id}
        fechaInicio={props.proyecto.proyecto.fechaInicio}
        fechaFin={props.proyecto.proyecto.fechaFin}
        idProyecto={props.proyecto.proyecto.id}
        alumnos={props.proyecto.alumnos}
        show={modalShowEditar}
        setCallBack={props.setCallBack}
        onHide={() => setModalShowEditar(false)}
        callBack={props.callBack}
        
      />

      <ModalEstaSeguro
        onHide={() => setModalShowEliminar(false)}
        show={modalShowEliminar}
        setCallBack={props.setCallBack}
        nombreProyecto={props.proyecto.proyecto.nombre}
        idProyecto={props.proyecto.proyecto.id} />
          

    </Fragment>
  );
}

export default MostrarProyectos;