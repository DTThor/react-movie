import React, { Component } from 'react';
import * as actionCreators from '../actions/actionCreators'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props.movies.movies;
    console.log(movies);
    return (
      <div>
        {
          movies.map((movie, i) => (
            <MovieCard
              key= {i}
              title={movie.Title.length > 30 ? `${movie.Title.substring(0, 28)}...` : movie.Title}
              year={movie.Year}
              poster={movie.Poster}
            />
          )
        )
      }
    </div>
  )
}
  }



  function mapStateToProps(state) {
    return {
      movies: state.movies,
      search: state.search,
    }
  }

  function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
  }


  export default connect(mapStateToProps, mapDispachToProps)(MovieList);
