import React from 'react';
import './calculoScreen.css';
var ReactDOM = require('react-dom');

class Calculo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      result: 'obesidad mórbida',
      percent: 90,
      message1: 'Tú salud está en riesgo.',
      message2: 'Pero no te preocupes, siempre tienes solución.'
    };
  }

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.advance).style.width = this.state.percent+"%"
  }

    render() {
      return (
        <div className='container'>
          <div className="line">
            <p className="title">Según tu Indice de Masa Corporal tienes {this.state.result}.</p>
            <div className="level"><div className="advance" ref="advance"></div></div>
            <p className="lvlName">Nivel de obesidad {this.state.percent}%</p>
            <p>{this.state.message1}</p>
            <p>{this.state.message2}</p>
            <button className="next">
              Continuar
            </button>
          </div>
        </div>
      );
    }
}

export default Calculo;