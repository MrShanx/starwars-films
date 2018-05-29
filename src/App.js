import React, { Component } from 'react';
import FilmList from './FilmList.js';
import { images } from './images.js';
import load from './loadingIcon.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    //fetch online REST API - since its JSON data, from SWAPI
    fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(movies => {
      this.setState({films: this.sortMovies(movies.results)}); 
    });
  }

  //sorts episodes by number
  sortMovies = (attractions) => {
    var sortable = [];
    for (var episode in attractions) {
      sortable.push([episode, attractions[episode]]);
    }

    sortable.sort(function(a, b) {
      return a[1].episode_id - b[1].episode_id;
    });
    return sortable;
  }

  render() {
    const { films } = this.state;
    //DO LOADING ROTATING ICON HERE
    return !films.length ?
    (
      <div>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Star Wars</h1>
          <h3>Cinematic Universe</h3>
        </header>
        <div className="App-content">
          <img className="App-loading" src={load} alt={'load'} />
          <h1 className="App-loading-header">App Loading</h1>
        </div>
        <footer className="App-footer">
          <span>Star Wars info from <span className="App-footer_emphasize"><a className="App-footer_link" href="https://swapi.co/">SWAPI</a></span> (online web API for all Star Wars canon universe data) </span>
          <br/>
          <span>All StarWars © COPYRIGHT owned by <span className="App-footer_emphasize"><a className="App-footer_link" href="https://www.disney.com/">The Walt Disney Company</a></span></span>
          <br/>
          <span>Film images and other data courtesy of <span className="App-footer_emphasize"><a className="App-footer_link" href="http://www.imdb.com/">IMDb</a></span></span>
        </footer>
        </div>
      </div>
    ) :
    (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Star Wars</h1>
          <h3>Cinematic Universe</h3>
        </header>
        <div className="App-content">
          <p>Click for more info.</p>
          <FilmList movies={films} images={images}/>
        </div>
        <footer className="App-footer">
          <span>Star Wars info from <span className="App-footer_emphasize"><a className="App-footer_link" href="https://swapi.co/">SWAPI</a></span> (online web API for all Star Wars canon universe data) </span>
          <br/>
          <span>All StarWars © COPYRIGHT owned by <span className="App-footer_emphasize"><a className="App-footer_link" href="https://www.disney.com/">The Walt Disney Company</a></span></span>
          <br/>
          <span>Film images and other data courtesy of <span className="App-footer_emphasize"><a className="App-footer_link" href="http://www.imdb.com/">IMDb</a></span></span>
        </footer>
      </div>
    );
  }
}

 // DELETE LATER 
 /*
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/
export default App;
