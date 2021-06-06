import axios from 'axios';


export const traerAlumnos = async()=>
{
  return await  axios.get('http://localhost:3001/api/usuarios')
    .then(response => {
        const alumnosTodas = response.data.data
        return alumnosTodas.json()
     
    })
    .catch(error => {
        console.log(error)

}
)}