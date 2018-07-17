import React from 'react';

const MovieCard = ({title, year, poster}) =>
  (
    <div className='tc grow br3 pa2 ma2 dib bw3 shadow-5 bg-light-blue'>
      <img alt='poster' width='300px' height='465px' src={poster === 'N/A' ? 'https://bit.ly/1XAQlMA' : poster} />
      <h4>{title}</h4>
      <p className='f6'>{year}</p>
    </div>
  )
export default MovieCard
