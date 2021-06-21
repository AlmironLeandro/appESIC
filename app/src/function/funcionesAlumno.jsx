//Valida el alumno por agregar ya que este puede ya estar agregado
export const validarAlumno = (alumnosAgregados, estudiantePorAgregar)=>
{
if(alumnosAgregados.includes(estudiantePorAgregar)){
   alert("El estudiante "+estudiantePorAgregar.nombre+" "+ estudiantePorAgregar.dni+ " ya esta agregado" )}
       return alumnosAgregados.includes(estudiantePorAgregar)
}


//Filtro de lo que voy escribiendo en el input search "buscar alumno"
export    const buscarAlumno = (getAlumnos,inputAlumno)=> {
return    getAlumnos.filter((alumno)=>
    {
    if(inputAlumno ==='' || inputAlumno == null){return alumno }
    else if (alumno.nombre.toLowerCase().includes(inputAlumno.toLowerCase()))
    {
    return inputAlumno
    }
})}