import React ,{useEffect, useState} from 'react'
import axios from 'axios'
import {InputGroup,} from 'react-bootstrap'






 const SeleccionarCarrera =() => {


  
  const [carreras, setCarreras] = useState([])

 

 
  useEffect(() => {

    axios.get('http://localhost:3001/api/carreras/')
    .then(response => {
        const carrerasTodas = response.data.data
        setCarreras (carrerasTodas)
    })
    .catch(error => {
        console.log(error)
    }) 
  }, [])

  


   return(
      <div> 
        
       <form action="">
        <select  name="carreras" id="carreras" >
          <option value="">Seleccione una carrera</option>
         
          {carreras.map((carrera)=> <option key={carrera.id}value={carrera.nombre}>{carrera.nombre}</option> )}
          
        </select>
        </form>
        <br />
       
      
      </div>
  )
    
     
        
  
} 
export default SeleccionarCarrera;


