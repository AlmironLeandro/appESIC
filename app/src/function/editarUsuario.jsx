import { buscarUsuario } from "../Servicios/UsuariosServicio"

export const editarUsuario = async (id)=>{
    const alumno = await buscarUsuario(id)
       // console.log('funcion editar usuario')
      //  console.log(alumno)
        return alumno
        
}
