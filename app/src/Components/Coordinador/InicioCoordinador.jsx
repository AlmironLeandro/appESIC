import React, { useState, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderUsuario from '../HeaderUsuario'


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
import ListItemText from '@material-ui/core/ListItemText';
import CrearCarrera from './CrearCarrera'
import CrearMateria from './CrearMateria'
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SchoolIcon from '@material-ui/icons/School';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import FormularioTutor from './FormularioTutor';
import TablaTutor from './TablaTutor';
import LocalParkingIcon from '@material-ui/icons/LocalParking';

//Servicio
import {traerCarreras} from '../../Servicios/Carrera'
import {buscarUsuarioPorId} from '../../Servicios/UsuariosServicio'


const InicioCoordinador = () => {
  const history = useHistory();
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

  const [carrera, setCarrera] = useState(false);
  const [materia, setMateria] = useState(false);
  const [tutor, setTutor] = useState(false);
  const [carreras, setCarreras] = useState([])
  const [tutores, setTutores] = useState([])
  const [callback, setCallback] = useState(false)
  


  const agregarCarrera = () => {
    handleDrawerClose()
    setCallback(true)
    setCarrera(true)}
  
  const agregarMateria = () => {
    handleDrawerClose()
    setMateria(true)
  }
 
  const agregarTutor = () => {
    setCallback(true)
    handleDrawerClose()
    setTutor(true)
  }

 

    useEffect(() => {
      const traerTutorYCarreras= async () => {
          try {
            const traerTutores = await buscarUsuarioPorId(2)
            // copio la lista con [...list] y la ordeno con sort()
             const sortedList = [...traerTutores].sort((a, b) => (a.apellido.toLowerCase() > b.apellido.toLowerCase() ? 1 : a.apellido.toLowerCase() < b.apellido.toLowerCase() ? -1 : 0))
            setTutores(sortedList)
            const getCarreras = await traerCarreras()
            setCarreras(getCarreras)
            //console.log(callback)
          }
          catch (e) {
            console.error(e)
          }
         
      }
      traerTutorYCarreras()

    
}, [callback])
  

  

    return (
      <Fragment>
        <HeaderUsuario></HeaderUsuario>
        
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
              

              <ListItem button onClick={() => agregarCarrera()}>
                <ListItemIcon><SchoolIcon /></ListItemIcon>
                <ListItemText primary={"Crear carrera"} />
              </ListItem>

              <ListItem button onClick={() => agregarMateria()}>
                <ListItemIcon> <ImportContactsIcon />  </ListItemIcon>
                <ListItemText primary={"Crear materia"} />
              </ListItem>

              <ListItem button onClick={() => agregarTutor()}>
                <ListItemIcon> <GroupAddIcon /> </ListItemIcon>
                <ListItemText primary={"Cargar tutor"} />
              </ListItem>
              
              <ListItem button onClick={() => history.push(`/tutorCoordinador`)}>
                <ListItemIcon> <AccountBoxIcon /> </ListItemIcon>
                <ListItemText primary={"Cambiar a tutor"} />
              </ListItem>
             
              <ListItem button onClick={() => history.push(`/tutorCoordinador/filtroProyectos`)}>
                <ListItemIcon> <LocalParkingIcon /> </ListItemIcon>
                <ListItemText primary={"Ver proyectos"} />
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
           
        {carrera ?
          <CrearCarrera avisoCalback={setCarrera} setCallback={setCallback} /> : ''
        }

        {materia ?
          <CrearMateria 
          avisoCalback={setMateria}
          carreras = {carreras}
          
          /> : ''
        }

        {tutor ?
        <FormularioTutor
        setCallback ={setCallback} 
        avisoCallback={setTutor}
        carreras = {carreras}
        /> : ''
        }

        {!tutores ?  '':
        
        <TablaTutor
        tutores={tutores}
        setCallback={setCallback}

        />
        }

      </Fragment>)
  }

export default InicioCoordinador;