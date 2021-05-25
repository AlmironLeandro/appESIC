import React ,{useEffect, useState} from 'react'




 const SeleccionarCarrera =() => {


  
  const [carreras, setCarreras] = useState([{
  }])

  const {id, nombre}=carreras
  useEffect(() => {
    const getCarreras = async()=>{
      try{
        const api = await fetch('http://localhost:3001/api/carreras');
        const carrera = await api.json()    
        setCarreras(carrera)
        
        
        } catch (error) {
          console.log(error);
        }
    } 
    getCarreras()
  }, []);
  
  console.log(carreras)
  return(
    <div> </div>
  )
    
     
        
    
}
export default SeleccionarCarrera;


