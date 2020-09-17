import React, { Component } from 'react';
import './style.css';

class Error extends Component {
  render(){
    return (
      <div className = "containerError">
        {/*Página de erro para rotas inexistentes*/}
        <p className = "errorMessage">ERRO: Página inexistente!</p>
      </div>
    );
  }
}

export default Error;
