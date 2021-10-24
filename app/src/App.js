import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, Redirect } from 'react-router-dom';
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
import EditarPerfil from './Components/EditarPerfil';
import FiltroDeProyecto from './Components/Coordinador/FiltroDeProyecto'


function App() {
  function NoMatch() {
    let location = useLocation();

    return (
      <div>
        <h3>
          Error 404, no se encontró la ruta
          <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }
  return (


    <Fragment>


      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" exact >
            <HeaderLogin />
            <Login />
          </Route>
          <Route exact path="/EditarPerfil" component={EditarPerfil} />
          <PrivateRoute exact path="/Usuario/2" rol={2} component={InicioTutor} />
          <PrivateRoute exact path="/CargarEstudiante" rol={2} component={CargarEstudiante} />
          <PrivateRoute exact path="/NuevoProyecto" component={FormularioProyecto} rol={2} />
          <PrivateRoute exact path="/Usuario/1" component={Estudiante} rol={1} />
          <PrivateRoute exact path="/Proyecto/:id" component={PantallaDeProyecto} rol={2} />

          {/* COORDINADO/TUTOR */}
          <PrivateRoute exact path="/Usuario/3" component={InicioCoordinador} rol={3} />
          <PrivateRoute exact path="/tutorCoordinador/filtroProyectos" component={FiltroDeProyecto} rol={3} />

          <PrivateRoute exact path="/tutorCoordinador/Proyecto/:id" component={PantallaDeProyecto} rol={3} />
          <PrivateRoute exact path="/tutorCoordinador" rol={3} component={InicioTutor} />
          <PrivateRoute exact path="/tutorCoordinador/CargarEstudiante" rol={3} component={CargarEstudiante} />
          <PrivateRoute exact path="/tutorCoordinador/NuevoProyecto" component={FormularioProyecto} rol={3} />

          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>




    </Fragment>
  );
}

export default App;
