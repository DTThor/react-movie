import React from 'react';
import Movie from './Movie';
import posters from '../posters.js'


const MovieList = () =>
  (
    <div>
      {
        posters.map((user, i) => {
          return (
            <Movie
              key={i}
              id={posters[i].id}
              title={posters[i].title}
              genre={posters[i].genre}
              poster={posters[i].poster}
              />
          );
        })
      }
    </div>
  )


export default MovieList
