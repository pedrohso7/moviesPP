import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css';


class Botton extends Component {
  render(){
    return (
      <div className = "botton">
        {/* Botão de característica polimórfica, é alterado através do css e depende da "categoria" do botão */}
        <Link to = {this.props.link} className = {this.props.className}> {this.props.name}</Link>
      </div>
    );
  }
}

export default Botton;
