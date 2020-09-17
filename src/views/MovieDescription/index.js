import React, { Component } from 'react';
import './style.css';

class Movie extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          movie: []
        }
    }

    componentDidMount(){
      /* Consultando apenas um item da API */
      const {id} = this.props.match.params; //capta o id do item na API.
      let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
  
      fetch(url)
        .then((res) => res.json())
          .then( (json) => {
            this.setState({movie:json});
          })
    }

    render(){
          return (
            <article className = "movie">

                {/* Título do item filme consultado na API*/}
                <h2 className = "movieName"> {this.state.movie.nome} </h2>
                {/* Imagem do item filme consultado na API */}
                <img src = {this.state.movie.foto} alt = {this.state.movie.nome}></img>
                {/* Sinopse do item filme consultado na API*/}
                <p> <strong>Sinopse: </strong> {this.state.movie.sinopse} </p>
              
              </article>
          );
        }
      }
          
export default Movie;