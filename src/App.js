import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Welcome from './component/welcome/welcomeScreen'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Welcome/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
