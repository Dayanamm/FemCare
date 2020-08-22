import React from 'react';
import './intervencionScreen.css';
import img1 from '../../img/Intervencion1.png'
import img2 from '../../img/Intervencion2.png'
import img3 from '../../img/Intervencion3.png'
import { Redirect } from 'react-router-dom'


class OpcionIntervencion extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      redirect: false
    };
  }

  goBack(){
    this.setState({ redirect: "/opciones"})
  }

  viewDetail(route){
    this.setState({ redirect: "/opciones/intervencion/"+route})
  }

    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
      return (
        <div className='containerI'>
            <div className="lineI">
                <p className='goBack' onClick={()=>this.goBack()}>X</p>
                <div className="rowsI">
                    <div className="FirstI">
                      <img src={img1} className="imgG" onClick={()=>this.viewDetail('balon')}/>
                      <p className="descripI">Balón gastríco.</p>
                    </div>
                    <div className="SecondI">
                      <img src={img2} className="imgG" onClick={()=>this.viewDetail('manga')}/>
                      <p className="descripI">Manga gastrica.</p>
                    </div>
                    <div className="ThirdI">
                      <img src={img3} className="imgG" onClick={()=>this.viewDetail('bypass')}/>
                      <p className="descripI">Bypass gastrico.</p>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

export default OpcionIntervencion;