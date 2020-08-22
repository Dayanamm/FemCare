import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Calculo from './component/calculo/calculoScreen'
import Welcome from './component/welcome/welcomeScreen'
import Opciones from './component/opciones/opcionesScreen'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/opciones">
            <Opciones/>
          </Route>
          <Route path="/calculo">
            <Calculo/>
          </Route>
          <Route path="/">
            <Welcome/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

