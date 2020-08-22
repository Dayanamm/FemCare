import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="line">
          <img src={logo} className="App-logo" alt="logo"/>
        </div>
        <div className="footer">
          <p className="FooterText">By</p>
          <p className="FooterText">FACCIÓN WAYÚU</p>
        </div>
      </header>
    </div>
  );
}

export default App;
