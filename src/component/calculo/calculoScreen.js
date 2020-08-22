import React from 'react';
import './calculoScreen.css';
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');


class Calculo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      result: 'obesidad mórbida',
      percent: 90,
      message1: 'Tú salud está en riesgo.',
      message2: 'Pero no te preocupes, siempre tienes solución.',
      redirect: false 
    };
  }

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.advance).style.width = this.state.percent+"%"
  }

    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
      return (
        <div className='container1'>
          <div className="lineCalculo">
            <p className="title">Según tu Indice de Masa Corporal tienes {this.state.result}.</p>
            <div className="level"><div className="advance" ref="advance"></div></div>
            <p className="lvlName">Nivel de obesidad {this.state.percent}%</p>
            <p className="texts">{this.state.message1}</p>
            <p className="texts">{this.state.message2}</p>
            <button className="next" onClick={() => this.continue()}>
              Continuar
            </button>
          </div>
        </div>
      );
    }

    continue(){
      this.setState({ redirect: "/opciones"})
    }
}

export default Calculo;