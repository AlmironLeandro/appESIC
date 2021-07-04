//Import react
import {useState,useEffect} from 'react'
import {Table, Popover, OverlayTrigger,Button} from 'react-bootstrap'
// import { makeStyles } from '@material-ui/core/styles';
// Import componentes
// import IconButton from '@material-ui/core/IconButton';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import NavDeUsuarios from '../HeaderUsuario'
import MenuProyecto from './MenuProyecto'
// Import servicios
import {traerProyectos} from '../../Servicios/ProyectoServicio'
import {traerMaterias} from '../../Servicios/Materia'
//Import styles css
import {styles} from '../../styles/inicioTutor'

const InicioTutor = () =>
{
    const [proyectos,setProyectos]=useState([])
    const [materias,setMaterias]=useState([])
 
    useEffect(() => {
        traerProyectos().then(res => setProyectos(res))
        traerMaterias().then(res => setMaterias(res))      
    }, [])

    const popover =(props)=> (
        <Popover id="popover-basic">
            {/* Materia:  */}
          <Popover.Title as="h3"></Popover.Title>
            <Popover.Content >
            {/* <p>Descripcion:</p> */}
             {props.detalle}
            
            </Popover.Content>
        </Popover>)

        const Example = (detalle,mat) => (
            <OverlayTrigger trigger="hover" placement="bottom-end" overlay={popover(detalle, mat)}>
              <Button  variant="light">Ver mas</Button>
            </OverlayTrigger>
          );


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
                                <div >
                                {proyectos.map((proyecto,i)=>
                                    <tr>
                                       
                                        <td style={{width:'100%'}}>{proyecto.nombre}</td>
                                        
                                        <Example detalle={proyecto.descripcion} mat={materias.filter((x)=> x.id === proyecto.idMateria)}/>
                                    </tr> 
                                  

                                )}
                                 
                                </div>
                            </tbody>
                        </Table>
                        <MenuProyecto/>
                    </div>
        </div>
        )

}

export default InicioTutor;