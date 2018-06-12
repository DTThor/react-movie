import React, { Component } from 'react';

class Movie extends Component {
  render(){
    const {title, year, poster} = this.props;
    return (
      <div className='tc grow br3 pa3 ma2 dib bw2 shadow-5 bg-light-blue'>
        <img alt='poster' src={poster} />
        <div>
          <h4>{title}</h4>
          <p className='f6'>{year}</p>
        </div>
      </div>
    )
  }
}
export default Movie
