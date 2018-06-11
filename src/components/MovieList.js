import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) =>
  (
    <div>
      {
        movies.map(({poster, id, title, genre}, i) => (
            <Movie
              key={i}
              id={id}
              title={title}
              genre={genre}
              poster={poster}
              />
            )
          )
        }
    </div>
  )

export default MovieList
