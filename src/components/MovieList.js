import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component{
  render(){
    const {movies} = this.props;
    return (
      <div>
        {
          movies.map(({Poster, imdbID, Title, Year}, i) => (
              <Movie
                key= {i}
                Title={Title}
                Year={Year}
                Poster={Poster}
                />
              )
            )
          }
      </div>
    )
  }
}

export default MovieList
