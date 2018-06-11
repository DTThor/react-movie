import React from 'react';

const Movie = ({ title, genre, id, poster }) =>
   (
    <div className='tc grow br3 pa3 ma2 dib bw2 shadow-5 bg-light-blue'>
      <img alt='poster' src={poster} />
      <div>
        <h3>{title}</h3>
        <p className='f7'>{genre}</p>
      </div>
    </div>
  )

export default Movie
