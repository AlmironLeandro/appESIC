import React, {Fragment} from 'react'
import HeaderUsuario from '../HeaderUsuario'
import VolverMenu from './VolverMenuTutor';
import FormularioEstudiante from './FormularioEstudiante';
import TablaEstudiantes from './TablaEstudiantes';


const CargarEstudiante=()=> {
    
    return (
        <Fragment>
            <HeaderUsuario/>
            <br/> 
            <FormularioEstudiante/>       
            <TablaEstudiantes/>
            <VolverMenu/>      
        </Fragment>
       
    )
}

export default CargarEstudiante;