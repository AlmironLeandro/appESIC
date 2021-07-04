import React, {useState , useEffect} from 'react'
import { Container, Modal, Button, Col, Row, Form, InputGroup, FormControl } from 'react-bootstrap'
import {BsPlusCircle} from 'react-icons/bs'
import {traerCarreras} from '../../Servicios/Carrera'
import {insertarUsuario} from '../../Servicios/UsuariosServicio'


const FormularioEstudiante = (props) =>{
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [error, setError] = useState(false);
    const [estudiante, setEstudiante]=useState({
        nombre:"",
        apellido:"",
        dni:"",
        mail:"",  
    })
    const [carreras, setCarreras] = useState([])

    const handleShow = () => {
        setShow(true);
        props.avisoCallBack(false)
    }
    
    //useEffect para traer las carreras y las guarda 
    useEffect(() => {
        traerCarreras().then(res => setCarreras(res) )
    }, [])
    
    //desestructuro estudiante
    const {nombre, apellido, dni, mail, idCarrera} = estudiante;

    //función para setear el valor a cada atributo de estudiante
    const handleChange = (e) => {
        setEstudiante({
            ...estudiante,
            [e.target.name]: e.target.value,
        }
        )
    };
   
    //Función para cerrar y limpiar el formulario
    const limpiarYCerrar=() =>{
        setEstudiante({
            nombre:"",
            apellido:"",
            dni:"",
            mail:"",    
        })
        setError(false);
        handleClose();
    }

    //Función para enviar al back el estudiante
    const submitForm = (e) => {
        e.preventDefault();
    
        // Validar el formulario
        if (nombre.trim() === '' || apellido.trim() === '' || dni.trim() === ''|| mail.trim()===''){
            setError(true);
            return;
        }
    
        // Quitar el mensaje de error
        setError(false);
    

        //Lamada a la función post con los atributos
        insertarUsuario(
            estudiante.nombre,
            estudiante.apellido,
            estudiante.dni,
            estudiante.mail,
            estudiante.dni,
            1,
            estudiante.idCarrera)
    
        //Limpiar el form
       setEstudiante({
            nombre:"",
            apellido:"",
            dni:"",
            mail:"",    
        })
        

        //Función para cerrar el modal
        setShow(false)
        props.avisoCallBack(true)
    };


    return (
        <Container>
            
                 <BsPlusCircle 
                    style={{float: 'right', marginRight: '20%'}}
                    onClick={handleShow}
                />
               
                <br />

                <Modal size="sm" show={show} >

                    <Modal.Header >
                    <Modal.Title>Datos del estudiante</Modal.Title>
                    </Modal.Header>

                    
                    <Modal.Body>
                    {error 
                    ? <p style={{color:"red"}}>Complete todos los campos</p>: <p></p>}
                       {carreras === undefined  ? '' :
                        <Form  onSubmit={submitForm}>
                               
                            <InputGroup size="sm" className="mb-3">
                                <select  name="idCarrera"  value={idCarrera} onChange={handleChange}>
                                <option >Seleccionar carrera</option>
                                {carreras.map((carrera)=> <option key={carrera.id} value={carrera.id}>   {carrera.nombre}</option> )} 
                                </select> 
                            </InputGroup>

                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Nombre/s:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                                    type="text" 
                                    placeholder="Nombre/s"
                                    name="nombre" 
                                    onChange={handleChange}
                                    value={nombre}
                                />
                            </InputGroup>                      
                        
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Apellido:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                                    type="text" 
                                    placeholder="Apellido"
                                    name="apellido" 
                                    onChange={handleChange}
                                    value={apellido}
                                />
                            </InputGroup>
                                            
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Dni:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                                    type="text" 
                                    placeholder="dni"
                                    name="dni" 
                                    onChange={handleChange}
                                    value={dni}
                                />
                            </InputGroup>
                                                
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Mail:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" 
                                    type="text" 
                                    placeholder="mail"
                                    name="mail" 
                                    onChange={handleChange}
                                    value={mail}
                                />
                            </InputGroup>    

                            <Row>
                                <Col>
                                    <Button size="sm" className="guardar" variant="secondary" type="submit" onClick={submitForm}>
                                        Guardar
                                    </Button>
                                </Col>
                                <Col>
                                    <Button size="sm" className="cancelar" variant="danger" onClick={limpiarYCerrar}>
                                        Cancelar
                                    </Button>
                                </Col>
                            </Row>
                        </Form>      
                        }                   
                    </Modal.Body>                   
                </Modal>
            </Container>
    )
}

export default FormularioEstudiante