import React from 'react';
import logo from './logo.png';
import './welcomeScreen.css';
import { Redirect } from 'react-router-dom'


class Welcome extends React.Component {

    constructor(props) {
      super(props);
      this.state = { redirect: false };
    }

    componentDidMount(){
      console.log(this.props)
      
      setTimeout(()=> this.historyF(), 2000)
    }

    historyF() {
      this.setState({ redirect: "/form"})
    }

    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
      return (
        <div className="App-header">
            <div className="line">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div className="footer">
                <p className="FooterText">By</p>
                <p className="FooterText">FACCIÓN WAYÚU</p>
            </div>
        </div>
      );
    }
}

export default Welcome;