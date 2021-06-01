import axios from 'axios';


//APRENDER COMO CONSUMIR ESTE SERVICIO


 export  const traerCarreras= async()=>
{
   
  return await  axios.get('http://localhost:3001/api/carreras/')
     .then(response => {
        const carrerasTodas = response.data.data
        return carrerasTodas
     
       
     })
     .catch(error => {
         console.log(error)

}
)}




