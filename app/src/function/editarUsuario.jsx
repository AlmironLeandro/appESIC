import { buscarUsuario } from "../Servicios/UsuariosServicio"

export const editarUsuario = (estudiante)=>{
    console.log(estudiante.id)
    const alumno =  buscarUsuario(estudiante.id)
    
    
    return console.log(alumno)
}
