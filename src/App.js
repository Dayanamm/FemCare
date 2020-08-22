import React from 'react';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="line">
          <img src={logo} className="App-logo" alt="logo"/>
        </div>
      </header>
    </div>
  );
}

export default App;
