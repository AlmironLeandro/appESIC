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
import PrivateRoute from './Router/PrivateRoute'

function App() {
  return (


<Fragment>


<Router>
  <Switch>
    <Route path="/login" exact >
      <HeaderLogin/>
      <Login/>
    </Route>
    <PrivateRoute exact path="/Usuario/2" rol={2} component={InicioTutor} />
    <PrivateRoute exact path="/CargarEstudiante" rol={2} component={CargarEstudiante} />
    <PrivateRoute exact path="/NuevoProyecto" component={FormularioProyecto} rol={2}/>
    <PrivateRoute exact path="/Usuario/1" component={Estudiante} rol={1}/>
    <PrivateRoute exact path="/Proyecto/:id" component={PantallaDeProyecto} rol={2}/>
    <PrivateRoute exact path="/Usuario/3" component={InicioCoordinador} rol={3}/>
  </Switch>
</Router>
    
    
    
   
   </Fragment>
  );
}

export default App;
