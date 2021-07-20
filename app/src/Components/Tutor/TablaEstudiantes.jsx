
import React, {Fragment, useState, useEffect} from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

const TablaEstudiantes= ({estudiantes}) => {   
 

    return (
    <Fragment >
        {console.log(estudiantes)}
         {estudiantes === undefined || estudiantes.length === 0 ? '' :
        <div className='containerTablaEstudiantes'>
            <div className="contenedorTablaDeAlumnos">
                <div  >
                    <p>Nombre</p>
                </div>
                <div >
                    <p>Apellido</p>
                </div>
                <div >
                    <p>DNI</p>
                </div>
                <div > 
                    <p>Mail</p>
                </div>
                <div >
                   
                </div>
            </div>       
           
            {estudiantes.map(estudiante=> 
            <div  className="contenedorTablaDeAlumnos">
                <div >
                    {estudiante.nombre}
                </div>
                <div >
                    {estudiante.apellido}
                </div>
                <div >
                    {estudiante.dni}
                </div>
                <div >
                    {estudiante.email}
                </div>
                <div className='iconosBorrarMod'>
                    <div style={{display:'flex', width:'20%', justifyContent:'space-between'}}>
                        <div>
                        <BsPencil
                        
                        onClick={()=>alert(estudiante.apellido)}
                        />
                        </div>
                        {console.log(estudiante.id)}
                        <div>
                        <BsFillTrashFill
                        onClick={()=>alert("Está seguro de eliminar a "+ (estudiante.nombre) + " " + (estudiante.apellido))}
                        //onClick={()=>eliminarUsuario(estudiante.id)} para cuando esté implementado
                        />
                        </div>
                   </div>
                </div>
            </div>
            )}   
        </div>  
}              
    </Fragment>
    )
}

export default TablaEstudiantes