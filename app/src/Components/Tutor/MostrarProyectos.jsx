import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import Selector from './Proyecto/Selector';
import { Link } from 'react-router-dom';
import { eliminarProyecto, editarProyecto } from '../../Servicios/ProyectoServicio'

const Editar = (props)=> {

  const [proyecto, setProyecto] = useState({
    nombre : props.nombreProyecto,
    descripcion:props.descripcion
})
  const handleChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    }
    )
    

  };
  const {nombre, descripcion} = proyecto;

  
  const submitForm = async (e) => {
  
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
        <Button variant="primary" onClick={(e)=>[submitForm(e),props.onHide(),
          props.setCallBack(true),
          props.setCallBack(props.callBack === true ? false : true)]}> Guardar</Button>
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
          }} >Hitos</Link></Button>

        <Button variant="secondary" onClick={props.edit}>Editar proyecto</Button>
        <Button variant="danger" onClick={props.onHide}>Eliminar proyecto</Button>
      </Modal.Footer>
    </Modal>
  );
}

const MostrarProyectos = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowEditar, setModalShowEditar] = React.useState(false);
  const edit = () => (setModalShowEditar(true), setModalShow(false))




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
        edit={edit}
        onHide={() => setModalShow(false)}
      />
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
    </>
  );
}

export default MostrarProyectos;