import React, { Component } from 'react';
import FilmList from './FilmList.js';
import { images } from './images.js';
import load from './loadingIcon.png';
import swlogo from './StarWarsLogo.png';
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
        <div>
          <header className="App-header">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <img className="App-logo" src={swlogo} alt="StarWars logo" />
            <h3 className="universe">Cinematic Universe</h3>
          </header>
        </div>
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
        <div className="App-header-container">
          <header className="App-header">
            <div className="stars"></div>
            <div className="twinkling"></div>
            <img className="App-logo" src={swlogo} alt="StarWars logo" />
            <h3 className="universe">Cinematic Universe</h3>
          </header>
        </div>
        <div className="App-content">
          <div className="click-info-container" >
            <p className="click-info">Click for more info.</p>
          </div>
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

export default App;
