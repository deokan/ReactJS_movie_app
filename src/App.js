import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

//2019 4 3 GitHub DeskTop과 연동
class App extends Component {
  // Render : componentWillMount() -> render() -> componentDismount()
  // update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidupdate()

  state = {}

  componentDidMount(){
    this._getMovies()
  }
  
  _renderMovies = () => {
    console.log('_renderMovies')
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log('Error! ::: ', err))
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
