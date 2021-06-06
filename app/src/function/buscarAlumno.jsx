
 //Filtro de lo que voy escribiendo en el input search "buscar alumno"
export    const buscarAlumno = (alumnosJSON,inputAlumno)=> {

return    alumnosJSON.filter((alumno)=>
     {
     if(inputAlumno ==='' || inputAlumno == null){return alumno }
     else if (alumno.first_name.toLowerCase().includes(inputAlumno.toLowerCase()))
     {
     return inputAlumno
     }
 })}