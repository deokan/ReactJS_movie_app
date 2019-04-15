import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

// class Movie extends Component {
//
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   }
//
//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }

function Movie({title, poster, genres, synopsis}){
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <p className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </p>
      </div>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

// class MoviePoster extends Component {
//   static propTypes = {
//     poster: PropTypes.string.isRequired
//   }
//
//   render() {
//     return (
//       <img src={this.props.poster} width="300" height="430"/>
//     )
//   }
// }

function MoviePoster({poster, alt}) {
  return (
    <img src={poster} className="Movie__Poster" alt={alt} title={alt}/>
  )
}

function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">{genre} </span>
  )
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Movie
