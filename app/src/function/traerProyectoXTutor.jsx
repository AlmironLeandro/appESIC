import { traerProyectosPorTutor,buscarProyecto } from "../Servicios/ProyectoServicio";

export const traerProyectoXTutor = async ({setProyectosPorId,setCargar})=> 
{
    
    const res = await traerProyectosPorTutor(localStorage.getItem("id"))
    if(res)
    {
        setCargar(false)
        return res.map((x) => buscarProyecto(x.id).then(res2 => setProyectosPorId(proyectosPorId => [...proyectosPorId, res2])))

    }
    setCargar(false)
   
}