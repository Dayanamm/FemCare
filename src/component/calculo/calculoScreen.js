import React from 'react';
import './calculoScreen.css';
import { Redirect } from 'react-router-dom'
var ReactDOM = require('react-dom');


const info = [
{
  result: 'estas Bajo de peso',
  percent: 0,
  message1: ' Te invitamos a seguir test de alimentación saludable.',
  message2: 'Recuerda que está aplicación está orientada a mujeres con obesidad'
},
{
  result: 'tienes un peso normal',
  percent: 0,
  message1: 'Tienes peso normal.',
  message2: 'Sigue cuidando de tu salud'
},
{
  result: 'tienes sobrepeso',
  percent: 20,
  message1: 'No te alarmes, nada del otro mundo.',
  message2: 'Podemos bajar esos kilitos de más.'
},
{
  result: 'tienes obesidad',
  percent: 50,
  message1: 'No te preocupes.',
  message2: 'Te ayudamos a cuidar tu salud. '
},
{
  result: 'tienes obesidad mórbida',
  percent: 80,
  message1: 'Tú salud está en riesgo.',
  message2: 'Pero no te preocupes, siempre tienes solución.'
}]


class Calculo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      result: '',
      percent: 0,
      message1: '',
      message2: '',
      redirect: false 
    };
  }

  componentDidMount(){
    const imc = window.location.href.substring(window.location.href.lastIndexOf('=') + 1)
    console.log(imc)
    if(imc < 18){
      this.setState({
        result: info[0].result,
        percent: info[0].percent,
        message1: info[0].message1,
        message2: info[0].message2
      }, ()=> ReactDOM.findDOMNode(this.refs.advance).style.width = this.state.percent+"%")
    }
    else if(imc < 25 && imc >18){
      this.setState({
        result: info[1].result,
        percent: info[1].percent,
        message1: info[1].message1,
        message2: info[1].message2
      }, ()=> ReactDOM.findDOMNode(this.refs.advance).style.width = this.state.percent+"%")
    }
    else if(imc < 30 && imc >25){
      this.setState({
        result: info[2].result,
        percent: info[2].percent,
        message1: info[2].message1,
        message2: info[2].message2
      }, ()=> ReactDOM.findDOMNode(this.refs.advance).style.width = this.state.percent+"%")
    }
    else if(imc < 35 && imc >30){
      this.setState({
        result: info[3].result,
        percent: info[3].percent,
        message1: info[3].message1,
        message2: info[3].message2
      }, ()=> ReactDOM.findDOMNode(this.refs.advance).style.width = this.state.percent+"%")
    }
    else if(imc > 35){
      this.setState({
        result: info[4].result,
        percent: info[4].percent,
        message1: info[4].message1,
        message2: info[4].message2
      }, ()=> ReactDOM.findDOMNode(this.refs.advance).style.width = this.state.percent+"%")
    }
  }

    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
      return (
        <div className='container1'>
          <div className="lineCalculo">
            <p className="title">Según tu Indice de Masa Corporal {this.state.result}.</p>
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