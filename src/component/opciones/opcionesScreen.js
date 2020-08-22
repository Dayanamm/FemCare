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

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
      return (
        <div className='container'>
            <div className="line">
                <div>
                    <img src={img1} className="img1"/>
                    <p>Ejercicio y dieta</p>
                    <img src={img2} className="img2" onClick={()=>this.goIntervention()}/>
                    <p>Intervención bariátrica</p>
                </div>
            </div>
        </div>
      );
    }
}

export default Opciones;