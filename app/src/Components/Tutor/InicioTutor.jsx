//Import react
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import { Table } from 'react-bootstrap'
import NavDeUsuarios from '../HeaderUsuario'
import MostrarProyectos from './MostrarProyectos'

// Import servicios
import { buscarProyecto } from '../../Servicios/ProyectoServicio'
import { traerProyectosPorTutor,eliminarProyecto } from '../../Servicios/ProyectoServicio'

//Import styles css
import { styles } from '../../styles/inicioTutor'

//Import Material UI
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SchoolIcon from '@material-ui/icons/School';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const InicioTutor = () => {
    const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    const [proyectos, setProyectos] = useState([])
    const [proyectosPorId, setProyectosPorId] = useState([])
    const [callBack,setCallBack]=useState(false)
    //Trampa que se me ocurrio
    const numero = proyectos.length

    useEffect(async () => {
        const res = await traerProyectosPorTutor(localStorage.getItem("id"))
        setProyectos(res)
        setProyectosPorId([])
        await proyectos.map((x) =>
            buscarProyecto(x.id).then(res => setProyectosPorId(proyectosPorId => [...proyectosPorId, res])))
         
    }, [callBack,numero])

    return (
        <div >
            <NavDeUsuarios >
            </NavDeUsuarios>
            <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >

        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />

          
        
       
            <List>
              <ListItem button  >
              
                <ListItemIcon><SchoolIcon /></ListItemIcon>
                <Link  style={{ textDecoration: 'none' }}  to={"/NuevoProyecto"}>Crear proyecto</Link>
              </ListItem>

              <ListItem button >
                <ListItemIcon> <ImportContactsIcon />  </ListItemIcon>
                <Link  style={{ textDecoration: 'none' }} to={"/CargarEstudiante"}>Cargar estudiante</Link>
              </ListItem>

            </List>

        </Drawer>

      </div>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>

      </Toolbar>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Table style={styles.tablaEstilo} striped bordered hover>
                    <thead >
                        <tr >
                            <th style={{ textAlign: 'center' }}>Proyectos</th>
                        </tr>
                    </thead>
                    <tbody>

                        {proyectosPorId === undefined ? '' :
                            <div >
                                {proyectosPorId.map((proyecto, i) =>
                                    <tr>
                                        <td style={{ width: '100%' }}>{proyecto.proyecto.nombre}</td>
                                        <td >   <MostrarProyectos proyecto={proyecto} setCallBack={setCallBack} callBack={callBack}></MostrarProyectos> </td>
                                    </tr>
                                )}

                            </div>}


                    </tbody>
                </Table>
            </div>
 

        </div>
    )

}

export default InicioTutor;