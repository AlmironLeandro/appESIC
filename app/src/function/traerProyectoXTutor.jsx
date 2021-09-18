import { traerProyectosPorTutor,buscarProyecto } from "../Servicios/ProyectoServicio";

export const traerProyectoXTutor = async ({setProyectosPorId})=> 
{
    const res = await traerProyectosPorTutor(localStorage.getItem("id"))
    return res.map((x) => buscarProyecto(x.id).then(res2 => setProyectosPorId(proyectosPorId => [...proyectosPorId, res2])))
}