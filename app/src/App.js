import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import HeaderLogin from './Components/Login/HeaderLogin'
import Login from './Components/Login/Login'
import './App.css';
import InicioTutor from './Components/Tutor/InicioTutor';
import PantallaDeProyecto from './Components/Tutor/Proyecto/PantallaDeProyecto';
import FormularioProyecto from './Components/Tutor/Proyecto/FormularioProyecto';
import CargarEstudiante from './Components/Tutor/CargarEstudiante';
import Estudiante from './Components/Estudiante/Estudiante';
import InicioCoordinador from './Components/Coordinador/InicioCoordinador'
import EditarPerfil from './Servicios/Config/EditarPerfil';

function App() {
  return (


<Fragment>


<Router>
  <Switch>
    <Route path="/" exact >
      <HeaderLogin/>
      <Login/>
    </Route>

    <Route path="/Usuario/2"  >
      <InicioTutor/>
    </Route>

    <Route path="/CargarEstudiante"  >
      <CargarEstudiante/>
    </Route>
    
    <Route path="/NuevoProyecto">
      <FormularioProyecto/>
    </Route>

   <Route path="/Usuario/1">
      <Estudiante/>
    </Route>
    
    
    <Route path="/Proyecto/:id">
      <PantallaDeProyecto />
      
    </Route>

    <Route path="/Coordinador">
      <InicioCoordinador />
      
    </Route>

    <Route path="/EditarPeril">
      <EditarPerfil />
    </Route>

  </Switch>
</Router>
    
    
    
   
   </Fragment>
  );
}

export default App;
