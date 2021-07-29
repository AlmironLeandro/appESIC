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

function App() {
  return (


<Fragment>


<Router>
  <Switch>
    <Route path="/" exact >
      <HeaderLogin/>
      <Login/>
    </Route>

    <Route path="/InicioTutor"  >
      <InicioTutor/>
    </Route>

    <Route path="/CargarEstudiante"  >
      <CargarEstudiante/>
    </Route>
    
    <Route path="/NuevoProyecto">
      <FormularioProyecto/>
    </Route>

   <Route path="/Estudiante">
      <Estudiante/>
    </Route>
    
    <Route path="/Proyecto">
      <PantallaDeProyecto />
    </Route>

  </Switch>
</Router>
    
    
    
   
   </Fragment>
  );
}

export default App;
