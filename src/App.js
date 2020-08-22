import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserForm from "./component/form/UserForm";
import Calculo from "./calculoScreen";
import Welcome from "./component/welcome/welcomeScreen";
import Advices from "./component/advices/Advices";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/advice">
            <Advices />
          </Route>
          <Route path="/form">
            <UserForm />
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
