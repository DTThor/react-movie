import React, { Component } from 'react'
import Movie from './components/Movie'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import movies from './movies.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies,
      searchField: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(e){
    this.setState({ searchField: e.target.value })
  }

  filterMoviesBy({ movies, searchField }){
    return movies.filter(movie =>
       movie.title.toLowerCase().includes(searchField.toLowerCase())
    )
  }



  render(){
    const {movies, searchField} = this.state
    return (
      <div className="tc code">
        <SearchBar searchChange={this.onSearchChange}/>
        <MovieList movies={this.filterMoviesBy({movies, searchField})}/>
      </div>
    )
  }
}


export default App
