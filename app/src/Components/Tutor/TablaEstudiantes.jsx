import React from 'react'
import { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'


const TablaEstudiantes= ({estudiante}) => {
    return (
       <Fragment>
           
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

                
               
       </Fragment>
    )
}

export default TablaEstudiantes
