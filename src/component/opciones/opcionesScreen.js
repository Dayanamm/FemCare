import React from 'react';
import './opcionesScreen.css';
import img1 from '../../img/Ellipse1.png'
import img2 from '../../img/Ellipse3.png'
import { Redirect } from 'react-router-dom'


class Opciones extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
        redirect: false 
    };
  }

  goIntervention(){
    this.setState({ redirect: "/opciones/intervencion"})
  }

  goDiaet(){
    this.setState({ redirect: "/opciones/consejos"})
  }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
      return (
        <div className='container2'>
            <div className="lineO">
                <div className="rows">
                    <div className="FirstOption">
                      <img src={img1} className="imgE" onClick={()=>this.goDiaet()}/>
                      <p className="subI">Ejercicio y dieta</p>
                    </div>
                    <div className="SecondOption">
                      <img src={img2} className="imgI" onClick={()=>this.goIntervention()}/>
                      <p className="subI">Intervención bariátrica</p>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default Opciones;