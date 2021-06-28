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
//Import styles css
import {styles} from '../../styles/inicioTutor'

const InicioTutor = () =>
{
    const [proyectos,setProyectos]=useState([])
    useEffect(() => {
        traerProyectos().then(res => setProyectos(res))
        console.log(proyectos)
    }, [])
    // const useStyles = makeStyles((theme) => ({
    //     margin: {
    //       margin: theme.spacing(1),
          
    //     },
    //     extendedIcon: {
    //       marginRight: theme.spacing(1),
    //     },
    //   }));
    //   const classes = useStyles();


    const popover =(props)=> (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Detalle</Popover.Title>
            <Popover.Content >
                {props.detalle}
            </Popover.Content>
        </Popover>)

        const Example = (detalle) => (
            <OverlayTrigger trigger="hover" placement="right" overlay={popover(detalle)}>
              <Button variant="light">Ver detalle</Button>
            </OverlayTrigger>
          );


    return(
        <div >
          
            <NavDeUsuarios>  
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
                                        <Example detalle={proyecto.descripcion} />
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