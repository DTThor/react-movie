import React from 'react';

const MovieCard = ({title, year, poster}) =>
  (
    <div className='tc grow br3 pa3 ma2 dib bw2 shadow-5 bg-light-blue'>
      <img alt='poster' src={poster} />
      <div>
        <h4>{title}</h4>
        <p className='f6'>{year}</p>
      </div>
    </div>
  )
export default MovieCard
