import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import HeaderLogin from './Components/HeaderLogin'
import Login from './Components/Login'
import './App.css';
import InicioTutor from './Components/Tutor/InicioTutor';
import CargarEstudiante from './Components/Tutor/CargarEstudiante';
import NuevoProyecto from './Components/Tutor/NuevoProyecto';

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
      <NuevoProyecto/>
    </Route>

  </Switch>
</Router>
    
    
    
   
   </Fragment>
  );
}

export default App;
