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
        <div className='container'>
            <div className="line">
                <p className='goBack' onClick={()=>this.goBack()}>X</p>
                <div>
                    <img src={img1} className="img1" onClick={()=>this.viewDetail('balon')}/>
                    <p>Balón gastríco.</p>
                    <img src={img2} className="img2" onClick={()=>this.viewDetail('manga')}/>
                    <p>Manga gastrica.</p>
                    <img src={img3} className="img3" onClick={()=>this.viewDetail('bypass')}/>
                    <p>Bypass gastrico.</p>
                </div>
            </div>
        </div>
      );
    }
}

export default OpcionIntervencion;