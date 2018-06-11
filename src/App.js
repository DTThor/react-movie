import React, { Component } from 'react'
import Movie from './components/Movie'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import movies from './movies.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movies,
      searchfield: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(e){
    this.setState({ searchfield: e.target.value })
  }

  render(){
    const { movies, searchfield } = this.state;
    const filteredMovies = movies.filter(movie => {
      return movie.title.toLowerCase().includes(searchfield.toLowerCase())
    })

    return (
      <div className="tc code">
        <SearchBar searchChange={this.onSearchChange}/>
        <MovieList movies={filteredMovies}/>
      </div>
    )
  }
}


export default App
