import React, { Component } from 'react';
import Botton from '../Botton/index';
import './style.css';

class Header extends Component {
  render(){
    return (
      <header className="header">
        
        {/*Botões a esquerda do header */}
        <div className = "headerBottons">
          <Botton name = "Home" className = "headerBotton" link = "/"/>
          <Botton name = "Filmes" className = "headerBotton" link = "/moviesList"/>
        </div>

        <p> moviesplusplus.com</p> {/* Título/Nome do site do Header */}
        
        {/*Botões a direita do header */}
        <div className = "headerBottons">
          <Botton name = "Tela3" className = "headerBotton" link = "/daa" />
          <Botton name = "Tela4" className = "headerBotton" link = "/dsa" />
        </div>

      </header>
    );
  }
}

export default Header;
