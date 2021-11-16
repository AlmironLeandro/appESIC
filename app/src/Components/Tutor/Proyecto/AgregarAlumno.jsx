import { Fragment } from 'react';
import {Toast}  from 'react-bootstrap'



const TestAlumno = (props)=> 
{
    const onclickCruz = ()=> {
        const nuevaLista =   props.lista.filter((estudiante)=> estudiante!== props.estudiante)
        props.setAlumnoPorAgregar(nuevaLista)

    }
    return(
        <Fragment>
             <div style={{ height:'140px'}}>   
                <Toast  onClose={onclickCruz}> 
                    <Toast.Header >
                    <strong className="mr-auto">Estudiante  {props.estudiante.nombre} {props.estudiante.apellido}</strong>
                    </Toast.Header>
                    <div style={{display:'flex'}}>
                    {/* <Toast.Body>Estudiante : {props.estudiante.nombre} {props.estudiante.apellido}</Toast.Body> */}
                    
                    </div>
                    <Toast.Body>Dni : {props.estudiante.dni}</Toast.Body>
                </Toast>
            </div>
        </Fragment>
        ) 
}
export default TestAlumno;