//Import react
import {useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import NavDeUsuarios from '../HeaderUsuario'
import MenuProyecto from './MenuProyecto'
import MostrarProyectos from './MostrarProyectos'
// Import servicios
import {traerProyectos} from '../../Servicios/ProyectoServicio'
import {buscarUsuario} from '../../Servicios/ProyectoServicio'

//Import styles css
import {styles} from '../../styles/inicioTutor'

const InicioTutor = () =>
{
    const [proyectos,setProyectos]=useState([])
    const [proyectosPorId, setProyectosPorId]=useState([])
    //Trampa que se me ocurrio
    const numero = proyectos.length
    
    useEffect(() => {
            traerProyectos().then(res =>  setProyectos(res)) 
            proyectos.map((x)=> 
            buscarUsuario(x.id).then(res =>  setProyectosPorId(proyectosPorId => [...proyectosPorId,res ])) )
            
    }, [numero])

    return(
        <div >
          
            <NavDeUsuarios >  
            </NavDeUsuarios>
                    <div style={{ display:'flex',justifyContent:'center'}}>
                    <Table style={styles.tablaEstilo} striped bordered hover>
                        <thead >
                            <tr >
                                <th style={{textAlign:'center'}}>Proyectos</th>
                            </tr>
                        </thead>
                            <tbody> 
                                 {proyectosPorId === undefined  ? '' :
                                <div >
                                 {proyectosPorId.map((proyecto,i)=>
                                    <tr>
                                        <td style={{width:'100%'}}>{proyecto.proyecto.nombre}</td>
                                        <td >   <MostrarProyectos proyecto={proyecto}></MostrarProyectos> </td>
                                    </tr> 
                                )}
                                 
                                </div>} 

                                 
                            </tbody>
                        </Table>
                        <MenuProyecto/>
                    </div>
        </div>
        )

}

export default InicioTutor;