import React, { Component } from 'react';
import Botton from '../../components/Botton/index';
import './style.css';

class Home extends Component {
  render(){
    return (
      <div className = "home">
        <article>
          <h1>Escolha o gênero de filme:</h1>

          <div className = "categoryBottons">     

            {/*========================Botões a esquerda======================*/}
            <div className = "bottons">
              <Botton name = "Ação" className = "categoryBotton" link = "/moviesList"/>
              <Botton name = "Ficção" className = "categoryBotton" link = "/moviesList"/>
            </div>

            {/*========================Botões a direita======================*/}
            <div className = "bottons">
              <Botton name = "Suspense" className = "categoryBotton" link = "/moviesList"/>
              <Botton name = "Aventura" className = "categoryBotton" link = "/moviesList"/>
            </div>


          </div>
        </article>
      </div>
    );
  }
}

export default Home;
