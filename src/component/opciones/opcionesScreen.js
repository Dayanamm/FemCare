import React from 'react';
import './opcionesScreen.css';
import img1 from '../../img/Ellipse1.png'
import img2 from '../../img/Ellipse3.png'

class Opciones extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      
    };
  }

    render() {
      return (
        <div className='container'>
            <div className="line">
                <div>
                    <img src={img1} className="img1"/>
                    <p>Ejercicio y dieta</p>
                    <img src={img2} className="img2"/>
                    <p>Intervención bariátrica</p>
                </div>
            </div>
        </div>
      );
    }
}

export default Opciones;