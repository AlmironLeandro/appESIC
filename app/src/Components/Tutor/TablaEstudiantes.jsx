import React, {Fragment} from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import { BsPencil, BsFillTrashFill } from "react-icons/bs";


const TablaEstudiantes= ({estudiantes}) => {   

    return (
    <Fragment >
         {estudiantes === undefined  ? '' :
        <Container fluid="sm">
            <Row >
                <Col align="left" >
                    <p>Nombre</p>
                </Col>
                <Col align="left">
                    <p>Apellido</p>
                </Col>
                <Col align="left">
                    <p>DNI</p>
                </Col>
                <Col align="left"> 
                    <p>Mail</p>
                </Col>
                <Col>
                    
                </Col>
            </Row>                                          
           
            {estudiantes.map(estudiante=> 
            <Row>
                <Col>
                    {estudiante.nombre}
                </Col>
                <Col>
                    {estudiante.apellido}
                </Col>
                <Col>
                    {estudiante.dni}
                </Col>
                <Col>
                    {estudiante.email}
                </Col>
                <Col>
                <BsPencil
                style={{float: 'left', marginRight: '8%'}}
                onClick={()=>alert(estudiante.apellido)}
                />
                {console.log(estudiante.id)}
                <BsFillTrashFill
                onClick={()=>alert("Está seguro de eliminar a "+ (estudiante.nombre) + " " + (estudiante.apellido))}
                //onClick={()=>eliminarUsuario(estudiante.id)} para cuando esté implementado
                />
                </Col>
            
            </Row>
            )}   
        </Container>  
}              
    </Fragment>
    )
}

export default TablaEstudiantes