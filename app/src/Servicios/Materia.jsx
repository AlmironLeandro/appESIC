import axios from 'axios';


 export  const traerMaterias= async()=>
{
   
  return await  axios.get('http://localhost:3001/api/materias/')
     .then(response => {
        const materias = response.data.data
        return materias
     
       
     })
     .catch(error => {
         console.log(error)

}
)}
