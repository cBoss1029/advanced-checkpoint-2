import React, { Component } from "react";
import "./App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './components/Main';
import Nav from './components/Nav';
import AddMovieContainer from "./containers/AddMovieContainer";
import MovieContainer from './containers/MovieContainer';


class App extends Component {
  componentDidMount() {
    this.props.loadMovies();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <Nav/>
          </nav>
          <div>
            <Switch>
              <Route path='/addMovie' component= {AddMovieContainer}/>
              <Route path='/movie/:id' component= {MovieContainer}/>
              <Route path='/' component= {Main}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);


