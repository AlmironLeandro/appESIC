import {insertarProyecto} from '../Servicios/ProyectoServicio'


export const formulario =  (proyecto,actualizarError,actualizarProyecto,listaAlumnoAgregado,setAlumnoAgregado,materia) => {

    if (proyecto.nombre.trim() === "" || proyecto.detalle.trim() === "" || listaAlumnoAgregado.length == 0 ){
        console.log("Tenés que completar todos los campos");
        actualizarError(true);
        return;
    }

    // Eliminar mensaje error
    actualizarError(false);
        const fecha = new Date()
        insertarProyecto(
            proyecto.nombre,
            proyecto.detalle,
            materia,
            2,
            fecha.toISOString(),
            listaAlumnoAgregado.map((alumno)=>({ "idAlumno" : alumno.id}) )
        )

    // Reiniciar el form
    actualizarProyecto({
    nombre:'',
    detalle:''
    })
    //ToDo: Integrar alumnos al proyecto
    setAlumnoAgregado([])
    
    
}