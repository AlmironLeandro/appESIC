import React, {Fragment}  from 'react'
import HeaderUsuario from '../HeaderUsuario'
import Hitos from './Hitos'

const Estudiante= ()=> {
  
    return (
        <Fragment>
            <HeaderUsuario/>
            <h2 style={{textAlign:'center'}}>Bienvenido a la materia Esic 1</h2>
            <br />
            <Hitos></Hitos>
             
        </Fragment> 
    )
}

export default Estudiante