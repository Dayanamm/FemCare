import React from 'react';
import './intervencionScreen.css';
import img1 from '../../img/Intervencion1.png'
import img2 from '../../img/Intervencion2.png'
import img3 from '../../img/Intervencion3.png'

class OpcionIntervencion extends React.Component {

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
                    <p>Balón gastríco.</p>
                    <img src={img2} className="img2"/>
                    <p>Manga gastrica.</p>
                    <img src={img3} className="img3"/>
                    <p>Bypass gastrico.</p>
                </div>
            </div>
        </div>
      );
    }
}

export default OpcionIntervencion;