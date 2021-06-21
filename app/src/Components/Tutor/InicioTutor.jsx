//Import react
import {useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
// Import componentes
import NavDeUsuarios from '../HeaderUsuario'
import MenuProyecto from './MenuProyecto'
// Import servicios
import {traerProyectos} from '../../Servicios/ProyectoServicio'
//Import styles css
import {styles} from '../../styles/inicioTutor'

const InicioTutor = () =>
{
    const [proyectos,setProyectos]=useState([])
    useEffect(() => {
        traerProyectos().then(res => setProyectos(res))
        console.log(proyectos)
    }, [])


    return(
        <div >
            <NavDeUsuarios>  
            </NavDeUsuarios>
                    <div style={{ display:'flex',justifyContent:'center'}}>
                    <Table style={styles.tablaEstilo} striped bordered hover size="sm">
                        <thead >
                            <tr >
                                <th>Id</th>
                                <th>Nombre de proyecto</th>
                                <th>Fecha fin</th>
                            </tr>
                        </thead>
                            <tbody>
                                {proyectos.map((proyecto)=>
                                    <tr>
                                        <td>{proyecto.id}</td>
                                        <td>{proyecto.nombre}</td>
                                        <td>{proyecto.fechaFin}</td>
                                    </tr> 
                                )}
                                
                          
                            </tbody>
                        </Table>
                        <MenuProyecto/>
                    </div>
                  
        
        </div>
        )

}

export default InicioTutor;