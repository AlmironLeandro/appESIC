import { Fragment } from 'react';
import {Modal} from 'react-bootstrap'
import HeaderUsuario from '../../HeaderUsuario'
import VolverMenuTutor from '../VolverMenuTutor';

const CabezeraTitulo = ({texto})=>
{
    return(
        <Fragment>
            <HeaderUsuario/>
            <Modal.Header >
                <Modal.Title style={{fontSize:'25px'}}>{texto}</Modal.Title>
                <VolverMenuTutor></VolverMenuTutor>
            </Modal.Header> 
        </Fragment>
    )
    
}




export default CabezeraTitulo;