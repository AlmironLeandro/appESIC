import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import React, { useState } from 'react'


const Recomendacion = () => {
    const [show, setShow] = useState(true);
    const ocultarFuncion = () => {
        localStorage.setItem('aceptarRecomendacion', "false")
        setShow(false)
    }
    return (
        <>
         

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    size='lg'>
                    <Modal.Header closeButton style={{ color: 'green', fontSize: '30px' }}>
                        <Modal.Title id="example-custom-modal-styling-title">
                            <h3 style={{ textAlign: 'center' }}>Recomendación:</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ fontSize: '20px' }}>
                        <p>Para una mejor navegación se recomienda utilizar <strong>Chrome</strong></p>
                        <p><a href="https://www.google.com/intl/es-419/chrome/">Link</a> de descarga de <strong>Chrome</strong>  . </p>
                        <Button onClick={() => ocultarFuncion()}>Aceptar</Button>
                    </Modal.Body>
                </Modal>
                
            
        </>
    );
}

export default Recomendacion;