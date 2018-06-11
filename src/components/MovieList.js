import React from 'react';
import Movie from './Movie';
import posters from '../posters.js'


const MovieList = () =>
  (
    <div>
      {
        posters.map(({poster, id, title, genre}, i) => (
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
