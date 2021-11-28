import Offcanvas from 'react-bootstrap/Offcanvas'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


const Recomendacion = () => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>


            <Offcanvas style={{height:'30%',textAlign:'center'}} show={show} onHide={handleClose} placement={'bottom'}>
                <Offcanvas.Header style={{height:'24%'}} closeButton>
                    <Offcanvas.Title style={{color:'green',fontSize:'30px'}}>
                        <h3 style={{textAlign:'center'}}>Recomendación:</h3></Offcanvas.Title>
                </Offcanvas.Header>
                <hr></hr>
                <Offcanvas.Body style={{fontSize:'20px'}}>
                   <p> Usar este sistema con el browser <strong>Chrome</strong>. De lo contrario no se podra usar a su maximo potencial.</p>
                   <p>Link de descarga de <strong>Chrome</strong> <a href="https://www.google.com/intl/es-419/chrome/">descargar</a> . </p>
                   <p>Saludos Usuarios</p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}





export default Recomendacion;