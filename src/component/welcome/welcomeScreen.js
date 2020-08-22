import React from 'react';
import logo from './logo.png';
import './welcomeScreen.css';

class Welcome extends React.Component {
    render() {
      return (
        <header className="App-header">
            <div className="line">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div className="footer">
                <p className="FooterText">By</p>
                <p className="FooterText">FACCIÓN WAYÚU</p>
            </div>
        </header>
      );
    }
}

export default Welcome;