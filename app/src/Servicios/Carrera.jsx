import axios from 'axios'

export const getCarreras= async()=>{
    return await axios.get('http://localhost:3001/api/carreras/')
  .then(response => {
      const carrerasTodas = response.data.data
      
  })
  .catch(error => {
      console.log(error)
  })

}
