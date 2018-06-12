import React, { Component } from 'react';

class Movie extends Component {
  render(){
    const {Title, Year, imdbID, Poster} = this.props;
    return (
      <div className='tc grow br3 pa3 ma2 dib bw2 shadow-5 bg-light-blue'>
        <img alt='poster' src={Poster} />
        <div>
          <h4>{Title}</h4>
          <p className='f6'>{Year}</p>
        </div>
      </div>
    )
  }
}
export default Movie
