import { buscarUsuario } from "../Servicios/UsuariosServicio"

export const editarUsuario = (id)=>{
    const alumno =  buscarUsuario(id)
    alumno.then(res=> {
        return res  })  
}
