import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MoviesList from "./views/MoviesList/index";
import Movie from "./views/MovieDescription/index"
import Home from "./views/Home/index";
import Error from "./views/Error/index";
import Header from "./components/Header/index"

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/moviesList/" component = {MoviesList}/>
                <Route exact path = "/moviesList/:id" component = {Movie}/>
                <Route path = "*" component = {Error}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;