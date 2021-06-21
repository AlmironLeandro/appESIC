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
                    <strong className="mr-auto">Estudiante</strong>
                    </Toast.Header>
                    <Toast.Body>Nombre : {props.estudiante.nombre}</Toast.Body>
                    <Toast.Body>Dni : {props.estudiante.dni}</Toast.Body>
                </Toast>
            </div>
        </Fragment>
        ) 
}
export default TestAlumno;