import React from 'react';
import './detailScreen.css';
import img1 from '../../img/balon.png'
import img2 from '../../img/bypass.png'
import img3 from '../../img/manga.png'
import { Redirect, Link } from 'react-router-dom'


const balonList = [{
    type: 'pro', 
    text: 'El tratamiento tiene una duración de 6 meses a 12 meses.'
}, {
    type: 'contra', 
    text: 'Requiere iniciar cambios de dieta con anterioridad a la colocación del balón gástrico, ya que puede generar fuertes afectaciones a la salud mental debido a la falta de costumbre de alimentación reducida.'
},{
    type: 'pro', 
    text: 'No deja cicatrices.'
}, {
    type: 'contra', 
    text: 'Las primeras semanas generan náuseas, vómitos y malestar general.'
},{
    type: 'pro', 
    text: 'Es un procedimiento seguro.'
}, {
    type: 'contra', 
    text: 'Para retirar el balón gástrico debe haber una adecuada preparación previa.'
},{
    type: 'pro', 
    text: 'No requiere anestesia general.'
}, {
    type: 'contra', 
    text: 'Generalmente, cuando se retira el balón gástrico genera sensación de vacío, así que puede volver a los hábitos alimenticios anteriores.'
},{
    type: 'pro', 
    text: 'El procedimiento para introducir el balón gástrico dura aproximadamente 30 minutos.'
}, {
    type: 'contra', 
    text: 'El material del balón gástrico, pese a ser en silicona, puede generar úlceras, irritación de la mucosa gástrica o perforación gástrica.'
}]

const mangaList = [{
    type: 'pro', 
    text: 'Procedimiento mediante laparoscopia, es decir, que sólo deja pequeñas cicatrices.'
}, {
    type: 'contra', 
    text: 'La absorción de nutrientes no es suficiente, razón por la cual debe consumir otras vitaminas.'
},{
    type: 'pro', 
    text: 'Post-operatorio rápido: 2 a 3 días de hospitalización.'
}, {
    type: 'contra', 
    text: 'Está intervención quirúrgica es definitiva, así que no habrá vuelta atrás en modificaciones respecto al tamaño del estómago.'
},{
    type: 'pro', 
    text: 'Permite grandes pérdidas de peso.'
}, {
    type: 'contra', 
    text: 'Debe haber una preparación previa a la cirugía respecto al cambio de alimentación.'
},{
    type: 'pro', 
    text: 'Seguimiento nutricional y psicológico.'
}, {
    type: 'contra', 
    text: 'Genera debilidad ya que el estómago no consume la cantidad adecuada de nutrientes.'
}, {
    type: 'contra', 
    text: 'Debe comer más lento y en muy pequeñas cantidades.'
}]

const bypassList = [{
    type: 'pro', 
    text: 'Procedimiento mediante laparoscopia, es decir, que sólo deja pequeñas cicatrices. '
}, {
    type: 'contra', 
    text: 'No adelgazar pese al plan de alimentación y la intervención quirúrgica.'
},{
    type: 'pro', 
    text: 'Post-operatorio de 3 a 5 días de hospitalización.'
}, {
    type: 'contra', 
    text: 'Peligro de muerte durante la intervención quirúrgica. '
},{
    type: 'pro', 
    text: 'Seguimiento nutricional y psicológico.'
}, {
    type: 'contra', 
    text: 'Obstrucción intestinal.'
}, {
    type: 'contra', 
    text: 'Desarrolla síndrome de Dumping (diarrea, vómitos, náuseas) constantes y sin control.'
}, {
    type: 'contra', 
    text: 'Pérdida de la parte del estómago que adquiere los nutrientes alimenticios, generando desnutrición.'
}, {
    type: 'contra', 
    text: 'Debe comer más lento y en muy pequeñas cantidades.'
}, {
    type: 'contra', 
    text: 'Debes consumir multivitamínicos de por vida para proporcionarle al cuerpo los nutrientes que no recibe.'
}]

class DetailScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      img1: null,
      list: [],
      redirect: false,
      title: null,
      url: null
    };
  }

  componentDidMount(){
    const url = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    this.setState({url})
    if (url == 'bypass'){
        this.setState({img1: img2, list: bypassList, title: 'BYPASS GÁSTRICO'})
    }
    else if (url == 'balon'){
        this.setState({img1: img1, list: balonList, title: 'BALÓN GÁSTRICO'})
    }
    else{
        this.setState({img1: img3, list: mangaList, title: 'MANGA GÁSTRICO'})
    }
  }

  goBack(){
    this.setState({ redirect: "/opciones/intervencion"})
  }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
      return (
        <div className='container'>
            <p className='goBack' onClick={()=>this.goBack()}>X</p>
            <div className="line2">
                <img src={this.state.img1} className="imgBlock"/>
                <h3>EL {this.state.title}</h3>
                {this.state.list.map((result) => (
                    <div className="box"  style={{backgroundColor: result.type == 'pro'?'#DAFFDB': 'rgba(255, 202, 202, 0.94)'}}><p className="info">{result.text}</p></div>
                ))}
                {
                    this.state.url == 'bypass' &&
                    <p className="message">Si te interesa esta opción puedes solicitar una tutela <Link to="/tutela">aquí</Link>.</p>
                }
                {
                    (this.state.url == 'manga' || this.state.url == 'balon' ) &&
                    <p className="message">Si te interesa esta opción puedes consultar a tu EPS.</p>
                }
            </div>
        </div>
      );
    }
}

export default DetailScreen;