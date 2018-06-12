import React, { Component } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies}) =>
  (
    <div>
      {
        movies.map((movie, i) => (
            <MovieCard
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

export default MovieList
