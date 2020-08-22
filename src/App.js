import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Calculo from './calculoScreen'
import Welcome from './component/welcome/welcomeScreen'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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

