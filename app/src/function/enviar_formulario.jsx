export const formulario = (nombre,detalle,
    actualizarError,crearProyecto,actualizarProyecto,proyecto,uuid) => {
    
    
    if (nombre.trim() === "" || detalle.trim() === ""){
        console.log("Tenés que completar todos los campos");
        actualizarError(true);
        return;
    }
    
    // Eliminar mensaje error
    actualizarError(false);
    
    // Asignar ID
    proyecto.id = uuid();
    //Merge alumnos proyecto
    
    // Crear Turno
    crearProyecto(proyecto)
    
    // Reiniciar el form
    actualizarProyecto({
    nombre:'',
    detalle:'',
    alumno:[]
    })
}