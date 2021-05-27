import React from 'react'
import { Fragment, useState, useEffect, Row } from 'react'
import HeaderUsuario from '../HeaderUsuario'
import VolverMenu from './VolverMenuTutor';

import FormularioEstudiante from './FormularioEstudiante';
import TablaEstudiantes from './TablaEstudiantes';




const CargarEstudiante=()=> {
    

    
    let estudiantesIniciales = JSON.parse(localStorage.getItem('estudiantes'));
        if (!estudiantesIniciales){
            estudiantesIniciales=[]
    };


    const [estudiantes, setEstudiantes] = useState(estudiantesIniciales);

    // Hook useEffect sirve para ejecutar cosas cuando está todo listo
    // o cuando cambia el estado
    
    useEffect(() => {
      if (estudiantesIniciales) {
        localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
      }else{
        localStorage.setItem('estudiantes', JSON.stringify([])); 
      }
    }, [estudiantesIniciales]);
    
    // Función que toma el estudiante nuevo y lo mete en el array de estudiantes
    
    const agregarEstudiante = (estudiante) => {
        setEstudiantes([
          ...estudiantes,
          estudiante
        ])
    };
  /*   const [estudiante, setEstudiante]=useState({
      nombre:"",
      apellido: "",
      dni: "",
      mail: "",           
  })

    const {nombre, apellido, dni, mail} = estudiante; */

    const borrarEstudiante = (id) => {
        const nuevosEstudiantes = estudiantes.filter (estudiante => estudiante.id !== id);
        setEstudiantes(nuevosEstudiantes);
      };
  
    console.log(estudiantesIniciales)
    
    
   

    return (
        <Fragment>
            <HeaderUsuario/>
            <br/> 
            <FormularioEstudiante
            agregarEstudiante={agregarEstudiante}
            /> 

           
              {estudiantes.map(estudiante=>          
              <TablaEstudiantes
              estudiante={estudiante}
              key={estudiante.id}
              />)}
            

            <VolverMenu/>      
        </Fragment>
       
    )
}

export default CargarEstudiante;
