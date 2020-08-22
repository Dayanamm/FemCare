import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Calculo from "./component/calculo/calculoScreen";
import Welcome from "./component/welcome/welcomeScreen";
import Opciones from "./component/opciones/opcionesScreen";
import OpcionIntervencion from "./component/opcionIntervencion/intervencionScreen";
import Advices from "./component/advices/Advices";
import UserForm from "./component/form/UserForm";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/opciones/consejos">
            <Advices />
          </Route>
          <Route path="/form">
            <UserForm />
          </Route>
          <Route path="/opciones/intervencion">
            <OpcionIntervencion />
          </Route>
          <Route path="/opciones">
            <Opciones />
          </Route>
          <Route path="/calculo">
            <Calculo />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
