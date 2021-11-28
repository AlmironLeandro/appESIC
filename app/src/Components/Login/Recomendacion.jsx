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
                   <p>Para una mejor navegación se recomienda utilizar <strong>Chrome</strong></p>
                   <p><a href="https://www.google.com/intl/es-419/chrome/">Link</a> de descarga de <strong>Chrome</strong>  . </p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}





export default Recomendacion;