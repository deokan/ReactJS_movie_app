import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

//2019 4 3 GitHub DeskTop과 연동
class App extends Component {
  // Render : componentWillMount() -> render() -> componentDismount()
  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidupdate()

  state = {}

  componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json')
    .then(response => response.json())
    .then(json => console.log('json :', json))
    .catch(err => console.log('Error! ::: ', err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
