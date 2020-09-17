import React, { Component } from 'react';
import Banner from "../../components/Banner/index";
import './style.css';

class MoviesList extends Component {

  constructor(props){
    super(props);

    this.state = {
      movies: []
    }

    this.getAPI = this.getAPI.bind(this);
  }

  getAPI(){
    /*Consumindo API*/
    let url = "https://sujeitoprogramador.com/r-api/?api=filmes";

    fetch(url)
      .then((res) => res.json())
        .then( (json) => {
          this.setState({movies:json});
        })  
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

  componentDidMount(){
    this.getAPI();
  }

  render(){
    return (
      <div className = "moviesList">
        <article>
          {
            /*Exibindo lista de filmes da API*/
            this.state.movies.map((movie) => {
                return(
                    <div key = {movie.id}>                    
                      <Banner movie = {movie} link = {`/moviesList/${movie.id}`}/>
                    </div>
                );
            })
          }
        </article>
      </div> 
    );
  }
}

export default MoviesList;
