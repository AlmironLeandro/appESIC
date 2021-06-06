import { Fragment } from 'react';
import {Toast, Col, Row,Container}  from 'react-bootstrap'



const TestAlumno = (props)=> 
{
    return(
        <Fragment>
             <div style={{ height:'140px'}}>   
                <Toast > 
                    <Toast.Header>
                    <strong className="mr-auto">Estudiante</strong>
                    </Toast.Header>
                    <Toast.Body>Nombre : {props.estudiante.first_name}</Toast.Body>
                    <Toast.Body>Dni : {props.estudiante.dni}</Toast.Body>
                </Toast>
            </div>
        </Fragment>
        
        )
  

}
export default TestAlumno;