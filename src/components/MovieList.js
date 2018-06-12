import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component{
  render(){
    const {movies} = this.props;
    return (
      <div>
        {
          movies.map((movie, i) => (
              <Movie
                key= {i}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                />
              )
            )
          }
      </div>
    )
  }
}

export default MovieList
