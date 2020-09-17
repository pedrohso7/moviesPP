import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css';


class Banner extends Component {
  render(){
    return (
      <div className = "Banner">
        
        {/*Título com rota */}
        <Link to = {this.props.link} className = "titleLink"> {this.props.movie.nome} </Link>

        {/*Imagem com rota*/}
        <Link to = {this.props.link} className = "imageBotton"> 
           <img src = {this.props.movie.foto} alt = {this.props.movie.nome} />
        </Link>

        {/*Botão para acessar o conteúdo com rota*/}
        <Link to = {this.props.link} className = "contentBotton"> Acesse o conteúdo </Link>
      
      </div>
    );
  }
}

export default Banner;
