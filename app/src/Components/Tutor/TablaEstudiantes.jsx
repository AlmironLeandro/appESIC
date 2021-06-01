import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row, Button} from 'react-bootstrap'



const TablaEstudiantes= ({estudiantes}) => {
    const tablaEstilo =
    {
        
        width: '50%'
        
    }
    
    return (
       <Fragment>
           <Container style={tablaEstilo}>
           
                <Row>
                    <Col>
                        <p>Nombre</p>
                    </Col>
                    <Col>
                        <p>Apellido</p>
                    </Col>
                    <Col>
                        <p>DNI</p>
                    </Col>
                    <Col>
                        <p>Mail</p>
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
                            {estudiante.mail}
                        </Col>
                    
                    </Row>
                )} 
          
        </Container>      
               
       </Fragment>
    )
}

export default TablaEstudiantes
