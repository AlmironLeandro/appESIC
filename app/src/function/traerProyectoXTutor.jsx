import { traerProyectosPorTutor,buscarProyecto } from "../Servicios/ProyectoServicio";

export const traerProyectoXTutor = async ({setProyectosPorId,setCargar})=> 
{
    const res = await traerProyectosPorTutor(localStorage.getItem("id"),setCargar)
    if(res)
    {
        return res.map((x) => buscarProyecto(x.id,setCargar).then(res2 => setProyectosPorId(proyectosPorId => [...proyectosPorId, res2])))

    }
   
}